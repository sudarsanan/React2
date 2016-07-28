/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ListCURD = (function () {
        function ListCURD() {
        }
        ListCURD.prototype.GetListDetails = function (ListName, Query, URL) {
            var dfd = $.Deferred();
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext;
            if (!URL) {
                ClientContext = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log("ClientContext");
            var Web = ClientContext.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var VendorItem = Lists.getItems(Query);
            var Result = ClientContext.loadQuery(VendorItem);
            ClientContext.executeQueryAsync(function () { console.log("Success -CURD"); dfd.resolve(Result); }, function (sender, args) { console.log("Fail-CURD"); dfd.reject(args.get_message()); });
            return dfd.promise();
        };
        return ListCURD;
    }());
    exports.ListCURD = ListCURD;
});
