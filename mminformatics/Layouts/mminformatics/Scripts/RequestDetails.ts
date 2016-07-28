/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../typings/sharepoint/sharepoint.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
import {ListCURD as GetListDetails} from './GetListDetails';

class VendorDetails {
    public Title: string;
    public VendorAddress: string;
    public VendorDBA: string;
    public VendorState: string;
    public VendorCity: string;
    public Zipcode: number;
    public ContactName: string;
    public ContactPhone: string;
    public ContactEmail: string;
    public VendorWebsite: string;
    public VendorContact: string;
    public ITIN: number;

    GetVendorDetails(VendorName) {

        var ViewXml = "<View><Query><Where><Eq><FieldRef Name=\'LinkTitle\'/><Value Type=\'Text\'>" + VendorName + "</Value></Eq></Where></Query></View>";
        var Query = new SP.CamlQuery();
        Query.set_viewXml(ViewXml);
        var ListCURDInstance = new GetListDetails();

        var PromiseReturn = ListCURDInstance.GetListDetails("Vendors", Query, "http://sharepoint/sites/vendormgmt/");
        PromiseReturn.done(function (r:any) {
            console.log("Vendors Details - Success Promise");
            console.log(r[0].get_item('Title'));
            console.log(r[0].get_item('VendorAddress'));
            console.log(r[0].get_item('vendorDBA'));
            console.log(r[0].get_item('State'));
            console.log(r[0].get_item('City'));
            console.log(r[0].get_item('ZipCode'));
            console.log(r[0].get_item('VendorContactEMail'));
            console.log(r[0].get_item('VendorWebsite'));
            console.log(r[0].get_item('VendorPhoneNumber'));
            console.log(r[0].get_item('VendorContact'));
            console.log(r[0].get_item('ITIN'));
            console.log('Completed table prparation.');
        });
        PromiseReturn.fail(function (r) {
            console.log("Fail Promise");
            console.log('An error occured while retrieving list items:' + r);
        });
    }

    //    .then(function (r) {
    //    console.log("Success Promise");
    //    var listItemEnumerator = r.getEnumerator();
    //    while (listItemEnumerator.moveNext()) {
    //        var listItem = listItemEnumerator.get_current();
    //        console.log(listItem.get_item('Title'));
    //    } console.log('Completed table prparation.');
    //}, function (sender, args) {
    //    console.log("Fail Promise");
    //    console.log('An error occured while retrieving list items:' + args.get_message());
    //});


    //PromiseReturn.done(function (r) {
    //    r.getEnumerator();

    //});
    //PromiseReturn.fail(function (r) { console.log(r); });

}
export {VendorDetails};

