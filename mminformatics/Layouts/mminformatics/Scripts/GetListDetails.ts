/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />

class ListCURD {
    GetListDetails(ListName: string, Query: SP.CamlQuery, URL?: string) {
        var dfd = $.Deferred();
        //var ClientContext = SP.ClientContext.get_current();
        var ClientContext:any;
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
        ClientContext.executeQueryAsync(function () { console.log("Success -CURD"); dfd.resolve(Result); }, function (sender:any, args:any) { console.log("Fail-CURD"); dfd.reject(args.get_message()) });
        return dfd.promise();
    }
}
export {ListCURD};
