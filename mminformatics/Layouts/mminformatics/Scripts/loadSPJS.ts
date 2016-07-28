import * as newreact from 'NewReact'

export function load() {
    alert("Loading Sp");
    ExecuteOrDelayUntilScriptLoaded(Init, "sp.js");
    function Init() {
        var n = new newreact.Newreact();
        n.getUi();
    }
}

