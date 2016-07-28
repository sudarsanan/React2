/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="typings/index.d.ts" />
define(["require", "exports", 'react', 'react-dom.min', './MMRequest', './GetChoiceOptions'], function (require, exports, React, ReactDOM, MMReq, GetChoiceOptions_1) {
    "use strict";
    //import * as DateRangePicker   from "react-bootstrap-daterangepicker";
    var General = React.createClass({
        render: function () {
            return (React.createElement(GeneralResult, null));
        }
    });
    var GeneralResult = React.createClass({
        getInitialState: function () {
            return {
                Results: [], selectValue: []
            };
        },
        componentDidMount: function () {
            this.loadData();
        },
        handleChange: function (e) {
            this.setState({
                selectValue: e.target.value,
            });
        },
        showRequest: function (type) {
            switch (type) {
                case 'Report Request':
                    return React.createElement("div", null, React.createElement(Reporting, null));
                case 'Project Request':
                    return React.createElement("div", null, React.createElement(Correspondence, null));
            }
        },
        loadData: function () {
            var MMReqInstance = new MMReq.VendorRequest();
            var GetChoiceOptionsInstance = new GetChoiceOptions_1.ChoiceOption();
            var Options = new Array();
            var Multichice = new Array();
            var PromiseReturn = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Request Type", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            PromiseReturn.done(function (r) {
                console.log("Success - Choice Field");
                var a = $.map(r, function (value, index) {
                    Options.push(value);
                });
            }).then(function () {
                this.showResults(Options);
            }.bind(this)),
                PromiseReturn.fail(function (r) {
                    console.log(r);
                    console.log("Fail - Choice Field");
                });
        },
        showResults: function (response) {
            this.setState({ Results: response });
        },
        render: function () {
            var resultitems = this.state.Results.map(function (result) {
                console.log("results" + result);
                return React.createElement("option", {className: "dropdown-item", value: result}, result);
            });
            return (React.createElement("div", null, React.createElement("div", {className: "col-md-12"}, React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Request Date: "), React.createElement("input", {type: "text", className: "form-control"})), React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Request Status: "), React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-md-12"}, React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Estimated Delivery Date: ")), React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Completion Date: "), React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-md-12"}, React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Requestor Name "), React.createElement("input", {type: "text", className: "form-control"})), React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Requesting Department "), React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-md-12"}, React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Backup Requestor "), React.createElement("input", {type: "text", className: "form-control"})), React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Request Title "), React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-md-12"}, React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Request Type "), React.createElement("select", {className: "form-control", id: "ex", onChange: this.handleChange, value: this.state.selectValue}, resultitems)), React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Request Description "), React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-md-12"}, React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Line of Business "), React.createElement("input", {type: "text", className: "form-control"})), React.createElement("div", {className: "col-md-6"}, React.createElement("h5", null, "Priority "), React.createElement("input", {type: "text", className: "form-control"}))), this.showRequest(this.state.selectValue)));
        }
    });
    var Results = React.createClass({
        getInitialState: function () {
            return {
                hideTitle: [], selectValue: []
            };
        },
        handleChange: function (e) {
            this.setState({
                selectValue: e.target.value,
            });
        },
        render: function () {
            var message = 'you selected' + this.state.selectValue;
            var resultitems = this.props.responseC.map(function (result) {
                console.log("results" + result);
                return React.createElement(ResultItem, {wTitle: result});
            });
            switch (this.state.selectValue) {
                case 'Completed':
                    return React.createElement("div", {className: "form-group"}, React.createElement("select", {className: "form-control", id: "ex", onChange: this.handleChange, value: this.state.selectValue}, resultitems));
                default:
                    return React.createElement("div", {className: "form-group"}, React.createElement("select", {className: "form-control", id: "ex", onChange: this.handleChange, value: this.state.selectValue}, resultitems));
            }
        }
    });
    var ResultMultiSelect = React.createClass({
        render: function () {
            var resultitems = this.props.responseD.map(function (result) {
                console.log("results" + result);
                return React.createElement(ResultItem, {wTitle: result});
            });
            return (React.createElement("div", {className: "form-group"}, React.createElement("label", {for: "exampleSelect1"}, "Select Status"), React.createElement("select", {className: "form-control", id: "example", multiple: "multiple"}, resultitems)));
        }
    });
    var ResultItem = React.createClass({
        render: function () {
            return (React.createElement("option", {className: "dropdown-item", value: this.props.wTitle}, this.props.wTitle));
        }
    });
    var MultiSelect = React.createClass({
        getInitialState: function () {
            return {
                ResultMultiSelect: []
            };
        },
        componentDidMount: function () {
            this.loadData();
            this.multiselect();
        },
        multiselect: function () {
            $('#example').multiselect();
        },
        loadData: function () {
            var MMReqInstance = new MMReq.VendorRequest();
            var GetChoiceOptionsInstance = new GetChoiceOptions_1.ChoiceOption();
            var Multichice = new Array();
            var MultiChoice = GetChoiceOptionsInstance.GetMultiChoiceOption("MM Informatics Workload", "LOB", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            MultiChoice.done(function (r) {
                console.log("Success - Choice Field");
                var a = $.map(r, function (value, index) {
                    Multichice.push(value);
                });
            }).then(function () {
                this.showMultiResult(Multichice);
            }.bind(this)),
                MultiChoice.fail(function (r) {
                    console.log(r);
                    console.log("Fail - Choice Field");
                });
        },
        showMultiResult: function (res) {
            this.setState({ ResultMultiSelect: res });
        },
        render: function () {
            return (React.createElement("div", null, React.createElement(ResultMultiSelect, {responseD: this.state.ResultMultiSelect})));
        }
    });
    var Reporting = React.createClass({
        getInitialState: function () {
            return {
                hideProject: false
            };
        },
        render: function () {
            if (this.hideProject) {
                return null;
            }
            else {
                return (React.createElement(ReportingResults, null));
            }
        }
    });
    var ReportingResults = React.createClass({
        render: function () {
            return (React.createElement("div", null, React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, " Current Report"), React.createElement("input", {className: "form-control", type: "text"})), React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Report Modification"), React.createElement("input", {className: "form-control", type: "text"})), React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, " Impact to Otherst"), React.createElement("input", {className: "form-control", type: "text"})), React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("h5", null, "Requested Report Title"), React.createElement("input", {className: "form-control", type: "text"}))));
        }
    });
    var Correspondence = React.createClass({
        getInitialState: function () {
            return {
                hideCorrespondence: true, LetterType: [], Language: [], LetterRecipient: [], ImpactofLetter: []
            };
        },
        componentDidMount: function () {
            console.log('ComponentDiDMount');
            this.loadCorrespondenceData();
        },
        loadCorrespondenceData: function () {
            console.log('correspon load');
            var MMReqInstance = new MMReq.VendorRequest();
            var GetChoiceOptionsInstance = new GetChoiceOptions_1.ChoiceOption();
            var Options = new Array();
            var Options1 = new Array();
            var Options2 = new Array();
            var Options3 = new Array();
            var Options4 = new Array();
            var PromiseReturnLetterType = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Type of Letter", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            var LanguageReturn = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Language Type", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            var LetterRecipientReturn = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Recipient", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            var ImpactofLetterReturn = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Impact of Letter", "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
            PromiseReturnLetterType.done(function (r) {
                console.log("SuccessLetterType - Choice Field");
                var a = $.map(r, function (value, index) {
                    Options.push(value);
                });
            }).then(function () {
                this.showLetterType(Options);
            }.bind(this)),
                PromiseReturnLetterType.fail(function (r) {
                    console.log(r);
                    console.log("Fail LetterType- Choice Field");
                });
            LanguageReturn.done(function (r) {
                console.log("Success Language- Choice Field");
                var a = $.map(r, function (value, index) {
                    Options2.push(value);
                });
            }).then(function () {
                this.showLanguage(Options2);
            }.bind(this)),
                LanguageReturn.fail(function (r) {
                    console.log(r);
                    console.log("Fail Language- Choice Field");
                });
            LetterRecipientReturn.done(function (r) {
                console.log("Success Recipient- Choice Field");
                var a = $.map(r, function (value, index) {
                    Options3.push(value);
                });
            }).then(function () {
                this.showLetterRecipient(Options3);
            }.bind(this)),
                LetterRecipientReturn.fail(function (r) {
                    console.log(r);
                    console.log("Fail Recipient- Choice Field");
                });
            ImpactofLetterReturn.done(function (r) {
                console.log("Success LetterImpact- Choice Field");
                var a = $.map(r, function (value, index) {
                    Options4.push(value);
                });
            }).then(function () {
                this.showImpactofLetter(Options4);
            }.bind(this)),
                ImpactofLetterReturn.fail(function (r) {
                    console.log(r);
                    console.log("FailLetterImpact - Choice Field");
                });
        },
        showLetterType: function (response) {
            this.setState({ LetterType: response });
        },
        showLanguage: function (response) {
            this.setState({ Language: response });
        },
        showLetterRecipient: function (response) {
            this.setState({ LetterRecipient: response });
        },
        showImpactofLetter: function (response) {
            this.setState({ ImpactofLetter: response });
        },
        render: function () {
            return (React.createElement("div", null, React.createElement(CorrespondenceResults, {responce: this.state.LetterType}), React.createElement(CorrespondenceResults, {responce: this.state.Language}), React.createElement(CorrespondenceResults, {responce: this.state.LetterRecipient}), React.createElement(CorrespondenceResults, {responce: this.state.ImpactofLetter})));
        }
    });
    var CorrespondenceResults = React.createClass({
        render: function () {
            var resultitems = this.props.responce.map(function (result) {
                return React.createElement(ResultItem, {wTitle: result});
            });
            return React.createElement("div", {className: "col-md-6 col-lg-6 col-xl-6"}, React.createElement("select", {className: "form-control"}, resultitems));
        }
    });
    var PlatformSupport = React.createClass({
        render: function () {
            return (React.createElement(PlatformSupportResult, null));
        }
    });
    var PlatformSupportResult = React.createClass({
        render: function () {
            return (React.createElement("div", null));
        }
    });
    var CIAManagement = React.createClass({
        render: function () {
            return (React.createElement(CIAManagementResult, null));
        }
    });
    var CIAManagementResult = React.createClass({
        render: function () {
            return (React.createElement("div", {className: "form-group"}, React.createElement("label", null, "Manager Assigned"), React.createElement("input", null), React.createElement("label", null, "Manager Notes"), React.createElement("textarea", null), React.createElement("label", null, "Staff Needed"), React.createElement("input", null), React.createElement("label", null, "Staff Assignment"), React.createElement("input", null), React.createElement("label", null, "Staff Start Date"), React.createElement("input", null), React.createElement("label", null, "Request Lead"), React.createElement("input", null), React.createElement("label", null, "Lead Backup"), React.createElement("input", null), React.createElement("label", null, "Team Members"), React.createElement("input", null), React.createElement("label", null, "Cancellation Reason"), React.createElement("input", null)));
        }
    });
    var CIAStaff = React.createClass({
        render: function () {
            return (React.createElement(CIAStaffResult, null));
        }
    });
    var CIAStaffResult = React.createClass({
        render: function () {
            return (React.createElement("div", null, React.createElement("label", null, "Request Status"), React.createElement("input", null), React.createElement("label", null, "Team Notes"), React.createElement("input", null), React.createElement("label", null, "HelpStar Ticket ID"), React.createElement("input", null), React.createElement("label", null, "Approval Status"), React.createElement("input", null), React.createElement("label", null, "Estimated Delivery Date"), React.createElement("input", null), React.createElement("label", null, "Completion Date"), React.createElement("input", null), React.createElement("label", null, "Development Hours"), React.createElement("input", null), React.createElement("label", null, "Analyst Hours"), React.createElement("input", null)));
        }
    });
    ReactDOM.render(React.createElement(General, null), document.getElementById('main'));
});
//ReactDOM.render(<General/>, document.getElementById('main'));
//ReactDOM.render(<Correspondence/>, document.getElementById('content3'));
//ReactDOM.render(<MultiSelect/>, document.getElementById('content2'));
