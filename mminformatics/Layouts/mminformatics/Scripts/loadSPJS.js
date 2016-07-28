define(["require", "exports", 'NewReact'], function (require, exports, newreact) {
    "use strict";
    function load() {
        alert("Loading Sp");
        ExecuteOrDelayUntilScriptLoaded(Init, "sp.js");
        function Init() {
            var n = new newreact.Newreact();
            n.getUi();
        }
    }
    exports.load = load;
});
