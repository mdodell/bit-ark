import {TOGGLE_LINK_DRAWER} from "./linkConstants";
import {openNotification} from "../../common/components/notification/openNotification";

export const toggleLinkDrawer = () => {
    return {
        type: TOGGLE_LINK_DRAWER
    }
};

export const createShortLink = (linkForm) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            firebase.firestore().collection('links').where('urlCode', '==', linkForm.shortUrl).get().then(result => {
                if(!result.empty){
                    openNotification('error', 'bottomLeft', 'Error', `A link that ends in ${linkForm.shortUrl} already exists!`, 3);
                } else {
                    const shortUrl = 'https://bit-ark.firebaseapp.com/' + linkForm.shortUrl;
                    firestore.add('links', {
                        originalUrl: linkForm.longUrl,
                        shortUrl: shortUrl,
                        ownerId:firebase.auth().currentUser.uid,
                        urlCode: linkForm.shortUrl,
                        createdAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
                    }).then(() => {
                        openNotification('success', 'bottomLeft', 'Success', `A new link was created at ${shortUrl}`, 3);
                    })
                }
            })
        } catch(error){
            openNotification('error', 'bottomLeft', 'Error', error.message, 3);
        }
    };
};

export const deleteLink = (link) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        try {
            firestore.delete({collection: 'links', doc: link.id});
            openNotification('success', 'bottomLeft', 'Success', `The link with the URL code '${link.urlCode}' was deleted!`, 3);
        } catch(error){
            openNotification('error', 'bottomLeft', 'Error', error.message, 3);
        }
    };
};