import {VendorDetails} from './RequestDetails';
import {ListCURD} from './GetListDetails';
import {ChoiceOption as GetChoiceOptions} from './GetChoiceOptions';

export class VendorRequest {
    public Title: string;
    public RequestDate: string;
    public Department: string;
    public SubDepartment: string;
    public ServiceDesc: string;
    public HFProductInfluence: boolean;
    public DateOfServiceStart: string;
    public DateOfServiceEnd: string;
    public HFCurrentVendor: boolean;
    public VendorNameOld: string;

   
    GetVendorRequest(ID: number) {
        var ViewXml = "<View><Query><Where><Eq><FieldRef Name=\'ID\'/><Value Type=\'Text\'>" + ID + "</Value></Eq></Where></Query></View>";
        var Query = new SP.CamlQuery();
        Query.set_viewXml(ViewXml);
        var ListCURDInstance = new ListCURD();
        var PromiseReturn = ListCURDInstance.GetListDetails("MM Informatics Workload", Query, "http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
        PromiseReturn.done(function (r) {
            console.log("Success Promise- Vendore Request");
            console.log(r[0].get_item('Title'));
        });
        PromiseReturn.fail(function (r) {
            console.log("Fail Promise- Vendor Request");
        });
    }

     getChoiceField(): string[] {
         var Options: string[];
        var GetChoiceOptionsInstance = new GetChoiceOptions();
        var PromiseReturn = GetChoiceOptionsInstance.GetChoiceOption("MM Informatics Workload", "Status","http://sv-ctssql01/sites/MedicalManagementResources/Informatics/");
        PromiseReturn.done(function (r:any) {
            console.log("Success - Choice Field");
            console.log(r);
           
            var a = $.map(r, function (value:any, index:any) {
                Options.push(value);
            });
           
        });
        PromiseReturn.fail(function (r:any) {
            console.log(r);
            console.log("Fail - Choice Field");
        });
        return Options;
    }

    getMultiChoiceField() {
        let GetMultiChoiceInstance = new GetChoiceOptions();
        let PromiseReturn = GetMultiChoiceInstance.GetMultiChoiceOption("Vendor Intake", "LOB");
        PromiseReturn.done(function (r) {
            console.log("Success - Multi Choice");
            var a:any = $.map(r, function (value:any, index:any) {
                console.log(value);
                return a;
            });
        });
        PromiseReturn.fail(function (r) {
            console.log(r);
            console.log("Fail- Multi Choice");
        });
    }

}
