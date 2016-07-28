/// <reference path="../typings/sharepoint/sharepoint.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />


import {VendorDetails} from './RequestDetails';
import {ChoiceOption  } from './GetChoiceOptions';
import {VendorRequest } from './MMRequest';

export function LoadSP() {
    ExecuteOrDelayUntilScriptLoaded(Init, "sp.js");
}

export function Init() {
   
    var VendorDetailsInstance = new VendorDetails();
    var GetChoiceOptionInstance = new ChoiceOption();
    var GetVendorRequestInstance = new VendorRequest();

    VendorDetailsInstance.GetVendorDetails("3M COMPANY");
    GetVendorRequestInstance.GetVendorRequest(15);
    GetVendorRequestInstance.getChoiceField();
    //GetChoiceOptionInstance.GetChoiceOption("Vendor Intake", "VendorHFLocationVal");


};

