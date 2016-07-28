define(["require", "exports", './GetListDetails', './GetChoiceOptions'], function (require, exports, GetListDetails_1, GetChoiceOptions_1) {
    "use strict";
    var VendorRequest = (function () {
        function VendorRequest() {
        }
        VendorRequest.prototype.GetVendorRequest = function (ID) {
            var ViewXml = "<View><Query><Where><Eq><FieldRef Name=\'ID\'/><Value Type=\'Text\'>" + ID + "</Value></Eq></Where></Query></View>";
            var Query = new SP.CamlQuery();
            Query.set_viewXml(ViewXml);
            var ListCURDInstance = new GetListDetails_1.ListCURD();
            var PromiseReturn = ListCURDInstance.GetListDetails("MM Informatics Workload", Query, "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            PromiseReturn.done(function (r) {
                console.log("Success Promise- Vendore Request");
                console.log(r[0].get_item('Title'));
            });
            PromiseReturn.fail(function (r) {
                console.log("Fail Promise- Vendor Request");
            });
        };
        VendorRequest.prototype.getChoiceField = function () {
            var Options;
            var GetChoiceOptionsInstance = new GetChoiceOptions_1.ChoiceOption();
            var PromiseReturn = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Status", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            PromiseReturn.done(function (r) {
                console.log("Success - Choice Field");
                console.log(r);
                var a = $.map(r, function (value, index) {
                    Options.push(value);
                });
            });
            PromiseReturn.fail(function (r) {
                console.log(r);
                console.log("Fail - Choice Field");
            });
            return Options;
        };
        VendorRequest.prototype.getMultiChoiceField = function () {
            var GetMultiChoiceInstance = new GetChoiceOptions_1.ChoiceOption();
            var PromiseReturn = GetMultiChoiceInstance.GetMultiChoiceOption("Vendor Intake", "LOB");
            PromiseReturn.done(function (r) {
                console.log("Success - Multi Choice");
                var a = $.map(r, function (value, index) {
                    console.log(value);
                    return a;
                });
            });
            PromiseReturn.fail(function (r) {
                console.log(r);
                console.log("Fail- Multi Choice");
            });
        };
        return VendorRequest;
    }());
    exports.VendorRequest = VendorRequest;
});
