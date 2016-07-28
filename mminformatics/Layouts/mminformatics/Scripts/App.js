/// <reference path="../typings/sharepoint/sharepoint.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
define(["require", "exports", './RequestDetails', './GetChoiceOptions', './MMRequest'], function (require, exports, RequestDetails_1, GetChoiceOptions_1, MMRequest_1) {
    "use strict";
    function LoadSP() {
        ExecuteOrDelayUntilScriptLoaded(Init, "sp.js");
    }
    exports.LoadSP = LoadSP;
    function Init() {
        var VendorDetailsInstance = new RequestDetails_1.VendorDetails();
        var GetChoiceOptionInstance = new GetChoiceOptions_1.ChoiceOption();
        var GetVendorRequestInstance = new MMRequest_1.VendorRequest();
        VendorDetailsInstance.GetVendorDetails("3M COMPANY");
        GetVendorRequestInstance.GetVendorRequest(15);
        GetVendorRequestInstance.getChoiceField();
        //GetChoiceOptionInstance.GetChoiceOption("Vendor Intake", "VendorHFLocationVal");
    }
    exports.Init = Init;
    ;
});
