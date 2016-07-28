/// <reference path="typings/requirejs/require.d.ts" />
require.config({
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': 'jquery-2.2.4.min',
        'react': 'react.min',
        'reactDOM': 'react-dom.min',
        'Bootstrap': 'bootstrap'
    }
});
require(["jquery", "Bootstrap", "NewReact"]);
