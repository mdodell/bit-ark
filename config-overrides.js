const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const theme = {
    'primary-color': '#1DA57A',
    'layout-header-background': '#1DA57A'
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),
);