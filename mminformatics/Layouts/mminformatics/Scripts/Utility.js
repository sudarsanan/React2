var VendorMgmt;
(function (VendorMgmt) {
    var Utility = (function () {
        function Utility() {
        }
        Utility.prototype.getParameterByName = function (name, url) {
            if (!url)
                url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };
        return Utility;
    }());
    VendorMgmt.Utility = Utility;
})(VendorMgmt || (VendorMgmt = {}));
