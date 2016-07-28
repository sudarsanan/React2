/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    require.config({
        shim: {
            jquery: {
                exports: '$'
            }
        },
        paths: {
            'jquery': 'jquery-3.0.0.min',
            'react': 'react.min',
            'reactDOM': 'react-dom.min',
        }
    });
    require(['react', 'reactDOM', 'jquery',], function (React, ReactDOM, $) {
    });
});
