(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@swimlane/ngx-datatable')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-reactive-table', ['exports', '@angular/core', '@swimlane/ngx-datatable'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-reactive-table'] = {}), global.ng.core, global.ngxDatatable));
}(this, (function (exports, core, ngxDatatable) { 'use strict';

    var defaultSettings = {
        pageSize: 40
    };
    var NgxDatatablePoweredBase = /** @class */ (function () {
        function NgxDatatablePoweredBase() {
            this.ColumnMode = ngxDatatable.ColumnMode;
            this.columns = [];
            this.rows = [];
            this.totalCount = 0;
            this.pageIndex = 0; // page index
            this.pageSize = 40;
            this.loading = false;
            // Sorting 
            this.sortingKey = '';
            // Describe the init sorting order.
            this.sorts = [];
        }
        NgxDatatablePoweredBase.prototype.ngOnInit = function () {
            var settings = Object.assign({}, defaultSettings, this.settings);
            this.pageSize = settings.pageSize;
        };
        NgxDatatablePoweredBase.prototype.onPageChanged = function (evt) {
            this.buildTableDataAsync(evt.offset);
        };
        NgxDatatablePoweredBase.prototype.refresh = function () {
            // The other settings stay the same.
            this.buildTableDataAsync(0);
        };
        NgxDatatablePoweredBase.ɵfac = function NgxDatatablePoweredBase_Factory(t) { return new (t || NgxDatatablePoweredBase)(); };
        NgxDatatablePoweredBase.ɵdir = core.ɵɵdefineDirective({ type: NgxDatatablePoweredBase, inputs: { settings: "settings" } });
        return NgxDatatablePoweredBase;
    }());

    exports.NgxDatatablePoweredBase = NgxDatatablePoweredBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-reactive-table.umd.js.map
