/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom.min';
import * as MMReq from './MMRequest';
//import * as DateRangePicker from './index'
import {ChoiceOption as GetChoiceOptions} from './GetChoiceOptions';
//import * as DateRangePicker   from "react-bootstrap-daterangepicker";



        var General = React.createClass({
            render(): any {
                return (<GeneralResult/>);
            }
        });
        var GeneralResult = React.createClass({
            getInitialState(): any {
                return {
                    Results: [], selectValue: []
                };
            },
            componentDidMount: function () {
                this.loadData();

            },
            handleChange: function (e: any) {
                this.setState({
                    selectValue: e.target.value,
                });
            },
            showRequest: function (type: any) {
                switch (type) {
                    case 'Report Request':
                        return <div>
                            <Reporting/>
                        </div>
                    case 'Project Request':
                        return <div>
                            <Correspondence/>
                        </div>


                }
            },
            loadData: function () {

                let MMReqInstance = new MMReq.VendorRequest();
                var GetChoiceOptionsInstance = new GetChoiceOptions();
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
            showResults: function (response: any) {
                this.setState({ Results: response })
            },
            render(): any {
                var resultitems = this.state.Results.map(function (result: any) {
                    console.log("results" + result);
                    return <option className="dropdown-item" value={result}>{result}</option>
                });

                return (<div>
                    <div className="col-md-12">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Request Date: </h5>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Request Status: </h5>
                            <input type="text" className="form-control" />
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Estimated Delivery Date: </h5>
                          
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Completion Date: </h5>
                            <input type="text" className="form-control" />
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>Requestor Name </h5>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-6">
                            <h5>Requesting Department </h5>
                            <input type="text" className="form-control" />
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h5>Backup Requestor </h5>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <h5>Request Title </h5>
                            <input type="text" className="form-control" />
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h5>Request Type </h5>
                            <select className="form-control" id="ex" onChange={this.handleChange} value={this.state.selectValue}>
                                {resultitems}
                            </select>

                        </div>

                        <div className="col-md-6">
                            <h5>Request Description </h5>
                            <input type="text" className="form-control" />
                        </div>


                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h5>Line of Business </h5>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-6">
                            <h5>Priority </h5>
                            <input type="text" className="form-control" />
                        </div>

                    </div>

                    {this.showRequest(this.state.selectValue) }

                </div>);
            }
        });

        var Results = React.createClass({
            getInitialState(): any {
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
                    return <ResultItem wTitle={result}/>
                });
                switch (this.state.selectValue) {
                    case 'Completed':
                        return <div className="form-group">
                            <select className="form-control" id="ex" onChange={this.handleChange} value={this.state.selectValue}>
                                {resultitems}
                            </select>

                        </div>
                    default:
                        return <div className="form-group">
                            <select className="form-control" id="ex" onChange={this.handleChange} value={this.state.selectValue}>
                                {resultitems}
                            </select>

                        </div>
                }


            }

        });

        var ResultMultiSelect = React.createClass({
            render: function () {
                var resultitems = this.props.responseD.map(function (result) {
                    console.log("results" + result);
                    return <ResultItem wTitle={result}/>
                });
                return (
                    <div className="form-group">
                        <label for="exampleSelect1">Select Status</label>
                        <select className="form-control" id="example" multiple="multiple">
                            {resultitems}
                        </select>

                    </div>

                );

            }
        });

        var ResultItem = React.createClass({
            render: function () {
                return (
                    <option className="dropdown-item" value={this.props.wTitle}>{this.props.wTitle}</option>
                );
            }
        });

        let MultiSelect = React.createClass({
            getInitialState(): any {

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

                let MMReqInstance = new MMReq.VendorRequest();
                var GetChoiceOptionsInstance = new GetChoiceOptions();

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
                this.setState({ ResultMultiSelect: res })
            },

            render(): any {
                return (
                    <div>
                        <ResultMultiSelect responseD={this.state.ResultMultiSelect}/>
                    </div>
                );
            }

        });


        var Reporting = React.createClass({
            getInitialState(): any {
                return {
                    hideProject: false
                };
            },
            render: function () {
                if (this.hideProject) {
                    return null;
                }
                else {
                    return (<ReportingResults/>)
                }
            }

        });
        var ReportingResults = React.createClass({
            render: function () {
                return (<div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5> Current Report</h5>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5>Report Modification</h5>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5> Impact to Otherst</h5>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5>Requested Report Title</h5>
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                );
            }
        });

        let Correspondence = React.createClass({
            getInitialState(): any {
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
                let MMReqInstance = new MMReq.VendorRequest();
                var GetChoiceOptionsInstance = new GetChoiceOptions();
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
                this.setState({ LetterType: response })
            },
            showLanguage: function (response) {
                this.setState({ Language: response })
            },
            showLetterRecipient: function (response) {
                this.setState({ LetterRecipient: response })
            },
            showImpactofLetter: function (response) {
                this.setState({ ImpactofLetter: response })
            },
            render(): any {

                return (<div>
                    <CorrespondenceResults responce={this.state.LetterType} />
                    <CorrespondenceResults responce={this.state.Language} />
                    <CorrespondenceResults responce={this.state.LetterRecipient} />
                    <CorrespondenceResults responce={this.state.ImpactofLetter} />

                </div>
                );

            }
        });
        var CorrespondenceResults = React.createClass({

            render(): any {
                var resultitems = this.props.responce.map(function (result) {
                    return <ResultItem wTitle={result}/>
                });
                return <div className="col-md-6 col-lg-6 col-xl-6">
                   
                    <select className="form-control">
                        {resultitems}
                    </select>
                </div>



            }

        });

        var PlatformSupport = React.createClass({
            render(): any {
                return (<PlatformSupportResult/>);
            }
        });
        var PlatformSupportResult = React.createClass({
            render(): any {
                return (<div>

                </div>
                );
            }
        });

        var CIAManagement = React.createClass({
            render(): any {
                return (<CIAManagementResult/>);
            }
        });
        var CIAManagementResult = React.createClass({
            render(): any {
                return (<div className="form-group">
                    <label>Manager Assigned</label>
                    <input></input>
                    <label>Manager Notes</label>
                    <textarea></textarea>
                    <label>Staff Needed</label>
                    <input></input>
                    <label>Staff Assignment</label>
                    <input></input>
                    <label>Staff Start Date</label>
                    <input></input>
                    <label>Request Lead</label>
                    <input></input>
                    <label>Lead Backup</label>
                    <input></input>
                    <label>Team Members</label>
                    <input></input>
                    <label>Cancellation Reason</label>
                    <input></input>

                </div>);
            }
        });

        var CIAStaff = React.createClass({
            render(): any {
                return (<CIAStaffResult/>);
            }
        });
        var CIAStaffResult = React.createClass({
            render(): any {
                return (<div>
                    <label>Request Status</label>
                    <input></input>
                    <label>Team Notes</label>
                    <input></input>
                    <label>HelpStar Ticket ID</label>
                    <input></input>
                    <label>Approval Status</label>
                    <input></input>
                    <label>Estimated Delivery Date</label>
                    <input></input>
                    <label>Completion Date</label>
                    <input></input>
                    <label>Development Hours</label>
                    <input></input>
                    <label>Analyst Hours</label>
                    <input></input>
                </div>)
            }
        });
        ReactDOM.render(<General/>, document.getElementById('main'));
          

//ReactDOM.render(<General/>, document.getElementById('main'));
//ReactDOM.render(<Correspondence/>, document.getElementById('content3'));

//ReactDOM.render(<MultiSelect/>, document.getElementById('content2'));
