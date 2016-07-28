/// <reference path="bootstrap.datepicker/index.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
/// <reference path="typings/react/react.d.ts" />



// Type definitions for react-bootstrap-daterangepicker
// Project: https://github.com/skratchdot/react-bootstrap-daterangepicker
// Definitions by: Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace ReactBootstrapDaterangepicker {
    export interface EventHandler { (event?: any, picker?: any): any; }

    export interface Props extends DatepickerOptions {
        onShow?: EventHandler;
        onHide?: EventHandler;
        onShowCalendar?: EventHandler;
        onHideCalendar?: EventHandler;
        onApply?: EventHandler;
        onCancel?: EventHandler;
        onEvent?: EventHandler;
    }

    export class DateRangePicker extends __React.Component<Props, {}> { }
}

declare var DateRangePicker: typeof ReactBootstrapDaterangepicker.DateRangePicker;

declare module "react-bootstrap-daterangepicker" {
    export = DateRangePicker;
}
