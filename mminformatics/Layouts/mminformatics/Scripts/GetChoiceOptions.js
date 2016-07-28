/// <reference path="typings/es6-promise/es6-promise.d.ts" />
/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChoiceOption = (function () {
        function ChoiceOption() {
        }
        ChoiceOption.prototype.GetChoiceOption = function (ListName, FieldName, URL) {
            var dfd1 = $.Deferred();
            ////var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            var FieldValues;
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var FieldValue = Lists.get_fields().getByInternalNameOrTitle(FieldName);
            var FieldValues = ClientContext1.castTo(FieldValue, SP.FieldChoice);
            ClientContext1.load(FieldValue);
            ClientContext1.executeQueryAsync(function () {
                console.log("t" + FieldValues);
                console.log("k" + FieldValues.get_choices());
                var categoryChoices = FieldValues.get_choices();
                console.log("cate" + categoryChoices);
                dfd1.resolve(categoryChoices);
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
            return dfd1.promise();
        };
        ChoiceOption.prototype.GetMultiChoiceOption = function (ListName, FieldName, URL) {
            var dfd1 = $.Deferred();
            ////var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var FieldValue = ClientContext1.castTo(Lists.get_fields().getByInternalNameOrTitle(FieldName), SP.FieldMultiChoice);
            ClientContext1.load(FieldValue);
            ClientContext1.executeQueryAsync(function () {
                var categoryChoices = FieldValue.get_choices();
                //var Choices: string[];
                //for (let i = 0; i <= categoryChoices.lenght; i++) {
                //    Choices = categoryChoices[i];
                //}
                dfd1.resolve(categoryChoices);
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
            return dfd1.promise();
        };
        ChoiceOption.prototype.SetChoiceOption = function (ListName, FieldValue, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            ListItem.set_item(FieldName, FieldValue);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        ChoiceOption.prototype.SetMultiChoiceOption = function (ListName, FieldValue, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            ListItem.set_item(FieldName, FieldValue);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        ChoiceOption.prototype.SetSingleText = function (ListName, FieldValue, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            ListItem.set_item(FieldName, FieldValue);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        ChoiceOption.prototype.SetBoolValue = function (ListName, FieldValue, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            ListItem.set_item(FieldName, FieldValue);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        ChoiceOption.prototype.SetDateField = function (ListName, FieldValue, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            ListItem.set_item(FieldName, FieldValue);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        ChoiceOption.prototype.SetHyperLinkField = function (ListName, FieldValue, FieldDescription, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            var hyperLink = new SP.FieldUrlValue();
            hyperLink.set_url(FieldValue);
            hyperLink.set_description(FieldDescription);
            ListItem.set_item(FieldName, hyperLink);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        ChoiceOption.prototype.SetPeoplePicker = function (ListName, FieldValue, FieldName, ID, URL) {
            var dfd1 = $.Deferred();
            //var Result1;
            //var ClientContext = SP.ClientContext.get_current();
            var ClientContext1;
            if (!URL) {
                ClientContext1 = new SP.ClientContext(URL);
                console.log("URL");
            }
            else {
                ClientContext1 = SP.ClientContext.get_current();
                console.log("URL Current");
            }
            console.log(FieldName + '+' + ListName);
            var Web = ClientContext1.get_web();
            var Lists = Web.get_lists().getByTitle(ListName);
            var ListItem = Lists.getItemById(ID);
            var singleUser = SP.FieldUserValue.fromUser('Sudarsanan Kaliyamurthy');
            ListItem.set_item(FieldName, singleUser);
            ListItem.update();
            ClientContext1.executeQueryAsync(function (sender, args) {
                console.log("Item updated Sucessfully");
                dfd1.resolve(args.get_message());
            }, function (sender, args) {
                console.log("Fail - Choice");
                dfd1.reject(args.get_message());
            });
        };
        return ChoiceOption;
    }());
    exports.ChoiceOption = ChoiceOption;
});
