import {TOGGLE_LINK_DRAWER} from "./linkConstants";
import { createReducer } from "../utils/createReducer";


const initialState = {
    visible: false
};

const toggleDrawer = (state) => {
    return {
        visible: !state.visible
    }
};

export default createReducer(initialState, {
    [TOGGLE_LINK_DRAWER]: toggleDrawer
})

