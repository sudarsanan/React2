define(["require", "exports", './GetListDetails'], function (require, exports, GetListDetails_1) {
    "use strict";
    var VendorDetails = (function () {
        function VendorDetails() {
        }
        VendorDetails.prototype.GetVendorDetails = function (VendorName) {
            var ViewXml = "<View><Query><Where><Eq><FieldRef Name=\'LinkTitle\'/><Value Type=\'Text\'>" + VendorName + "</Value></Eq></Where></Query></View>";
            var Query = new SP.CamlQuery();
            Query.set_viewXml(ViewXml);
            var ListCURDInstance = new GetListDetails_1.ListCURD();
            var PromiseReturn = ListCURDInstance.GetListDetails("Vendors", Query, "http://sharepoint/sites/vendormgmt/");
            PromiseReturn.done(function (r) {
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
        };
        return VendorDetails;
    }());
    exports.VendorDetails = VendorDetails;
});
