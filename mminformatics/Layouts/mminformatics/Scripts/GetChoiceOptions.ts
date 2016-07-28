/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />


export class ChoiceOption {

    GetChoiceOption(ListName: string, FieldName: string, URL?: string) {
        let dfd1 = $.Deferred();
        ////var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1: any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }
        var FieldValues: any;
        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        var FieldValue = Lists.get_fields().getByInternalNameOrTitle(FieldName);
        var FieldValues = ClientContext1.castTo(FieldValue, SP.FieldChoice);
        ClientContext1.load(FieldValue);
        ClientContext1.executeQueryAsync(function () {
            console.log("t" + FieldValues);
            console.log("k" + FieldValues.get_choices());
            var categoryChoices = FieldValues.get_choices();
            console.log("cate" + categoryChoices);       
            dfd1.resolve(categoryChoices);
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });

        return dfd1.promise();
    }

    GetMultiChoiceOption(ListName: string, FieldName: string, URL?: string) {
        let dfd1 = $.Deferred();
        ////var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        var FieldValue = ClientContext1.castTo(Lists.get_fields().getByInternalNameOrTitle(FieldName), SP.FieldMultiChoice);
        ClientContext1.load(FieldValue);
        ClientContext1.executeQueryAsync(function () {
            var categoryChoices = FieldValue.get_choices();
            //var Choices: string[];
            //for (let i = 0; i <= categoryChoices.lenght; i++) {
            //    Choices = categoryChoices[i];
            //}
            dfd1.resolve(categoryChoices);
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });

        return dfd1.promise();
    }
    SetChoiceOption(ListName: string, FieldValue: string, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        ListItem.set_item(FieldName, FieldValue);
        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });
    }
    SetMultiChoiceOption(ListName: string, FieldValue: Array<string>, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        } 

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        ListItem.set_item(FieldName, FieldValue);
        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });
    }
    SetSingleText(ListName: string, FieldValue: string, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        ListItem.set_item(FieldName, FieldValue);
        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });

    }
    SetBoolValue(ListName: string, FieldValue: boolean, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        ListItem.set_item(FieldName, FieldValue);
        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });
    }
    SetDateField(ListName: string, FieldValue: Date, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        ListItem.set_item(FieldName, FieldValue);
        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });
    }
    SetHyperLinkField(ListName: string, FieldValue: string, FieldDescription: string, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        var hyperLink = new SP.FieldUrlValue();
        hyperLink.set_url(FieldValue);
        hyperLink.set_description(FieldDescription);
        ListItem.set_item(FieldName, hyperLink);

        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });
    }
    SetPeoplePicker(ListName: string, FieldValue: string, FieldName: string, ID: number, URL?: string) {
        let dfd1 = $.Deferred();
        //var Result1;
        //var ClientContext = SP.ClientContext.get_current();
        let ClientContext1:any;
        if (!URL) {
            ClientContext1 = new SP.ClientContext(URL);
            console.log("URL");
        }
        else {
            ClientContext1 = SP.ClientContext.get_current();
            console.log("URL Current");
        }

        console.log(FieldName + '+' + ListName);
        let Web = ClientContext1.get_web();
        let Lists = Web.get_lists().getByTitle(ListName);
        let ListItem = Lists.getItemById(ID);
        var singleUser = SP.FieldUserValue.fromUser('Sudarsanan Kaliyamurthy');
        ListItem.set_item(FieldName, singleUser);
        ListItem.update();
        ClientContext1.executeQueryAsync(function (sender:any, args:any) {
            console.log("Item updated Sucessfully");
            dfd1.resolve(args.get_message());
        }, function (sender:any, args:any) {
            console.log("Fail - Choice");
            dfd1.reject(args.get_message());
        });
    }

}

