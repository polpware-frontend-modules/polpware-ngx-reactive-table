import { ɵɵdefineDirective } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

const defaultSettings = {
    pageSize: 40
};
class NgxDatatablePoweredBase {
    constructor() {
        this.ColumnMode = ColumnMode;
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
    ngOnInit() {
        const settings = Object.assign({}, defaultSettings, this.settings);
        this.pageSize = settings.pageSize;
    }
    onPageChanged(evt) {
        this.buildTableDataAsync(evt.offset);
    }
    refresh() {
        // The other settings stay the same.
        this.buildTableDataAsync(0);
    }
}
NgxDatatablePoweredBase.ɵfac = function NgxDatatablePoweredBase_Factory(t) { return new (t || NgxDatatablePoweredBase)(); };
NgxDatatablePoweredBase.ɵdir = ɵɵdefineDirective({ type: NgxDatatablePoweredBase, inputs: { settings: "settings" } });

/*
 * Public API Surface of ngx-reactive-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDatatablePoweredBase };
//# sourceMappingURL=polpware-ngx-reactive-table.js.map
