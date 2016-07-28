/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />

import * as load from 'loadSPJS'

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

require(['react', 'reactDOM', 'jquery', ], function (React: any, ReactDOM: any, $: any) {
    
    
});