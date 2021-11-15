import { Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { defaultSettings } from '../interfaces';
import * as i0 from "@angular/core";
var NgxDatatablePoweredBase = /** @class */ (function () {
    function NgxDatatablePoweredBase() {
        this.ColumnMode = ColumnMode;
        this.columns = [];
        this.rows = [];
        this.pageSize = 40;
        this.loading = false;
        this.totalCount = 0;
        this.pageIndex = 0; // page index
        // We on purpose put the basic for sorting here, because they are required in
        // supporting operations. 
        // Sorting 
        this.sortingKey = '';
        // Describe the init sorting order.
        this.sorts = [];
    }
    NgxDatatablePoweredBase.prototype.ngOnInit = function () {
        var settings = Object.assign({}, defaultSettings, this.settings);
        this.pageSize = settings.pageSize;
    };
    NgxDatatablePoweredBase.ɵfac = function NgxDatatablePoweredBase_Factory(t) { return new (t || NgxDatatablePoweredBase)(); };
    NgxDatatablePoweredBase.ɵdir = i0.ɵɵdefineDirective({ type: NgxDatatablePoweredBase, inputs: { settings: "settings" } });
    return NgxDatatablePoweredBase;
}());
export { NgxDatatablePoweredBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2Jhc2VzL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQTZGLE1BQU0sZUFBZSxDQUFDOztBQUUzSTtJQUFBO1FBS0ksZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUV4QixZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUV0QyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBRXBCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBRXBDLDZFQUE2RTtRQUM3RSwwQkFBMEI7UUFDMUIsV0FBVztRQUNYLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsbUNBQW1DO1FBQ25DLFVBQUssR0FBMkIsRUFBRSxDQUFDO0tBT3RDO0lBTEcsMENBQVEsR0FBUjtRQUNJLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7a0dBM0JpQix1QkFBdUI7Z0VBQXZCLHVCQUF1QjtrQ0FKN0M7Q0FpQ0MsQUE3QkQsSUE2QkM7U0E3QnFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbk1vZGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MsIElDb21wb25lbnRTZXR0aW5ncywgSVJvd0RhdGFUeXBlLCBJU29ydGFibGVDb2x1bW4sIElUYWJsZUNvbHVtblNwZWMsIElSZWFjdGl2ZURhdGFibGVCYXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxuICAgIGltcGxlbWVudHMgSVJlYWN0aXZlRGF0YWJsZUJhc2U8VD4sIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBzZXR0aW5nczogSUNvbXBvbmVudFNldHRpbmdzO1xuXG4gICAgQ29sdW1uTW9kZSA9IENvbHVtbk1vZGU7XG5cbiAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPiA9IFtdO1xuXG4gICAgcm93czogQXJyYXk8VD4gPSBbXTtcblxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSA0MDtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0b3RhbENvdW50OiBudW1iZXIgPSAwO1xuICAgIHBhZ2VJbmRleDogbnVtYmVyID0gMDsgLy8gcGFnZSBpbmRleFxuXG4gICAgLy8gV2Ugb24gcHVycG9zZSBwdXQgdGhlIGJhc2ljIGZvciBzb3J0aW5nIGhlcmUsIGJlY2F1c2UgdGhleSBhcmUgcmVxdWlyZWQgaW5cbiAgICAvLyBzdXBwb3J0aW5nIG9wZXJhdGlvbnMuIFxuICAgIC8vIFNvcnRpbmcgXG4gICAgc29ydGluZ0tleTogc3RyaW5nID0gJyc7XG4gICAgLy8gRGVzY3JpYmUgdGhlIGluaXQgc29ydGluZyBvcmRlci5cbiAgICBzb3J0czogQXJyYXk8SVNvcnRhYmxlQ29sdW1uPiA9IFtdO1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHNldHRpbmdzLnBhZ2VTaXplO1xuICAgIH1cblxufVxuIl19