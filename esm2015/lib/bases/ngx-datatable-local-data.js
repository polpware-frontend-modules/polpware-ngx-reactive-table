import { __awaiter } from "tslib";
import { SelectionType } from '@swimlane/ngx-datatable';
import { noopPromise } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
// Dervied classes must use decorator to provide implementation
export class NgxDatatableLocalData extends NgxDatatablePoweredBase {
    constructor() {
        super();
        this.SelectionType = SelectionType;
        // Support selected
        this.selected = [];
        // Suport editing
        this.editing = {};
        this.backup = {};
    }
    onSelect({ selected }) { }
    startAdd() { }
    startEdit(rowIndex) { }
    // Support editing an existing one and adding a new one
    cancelEdit(rowIndex) { }
    ;
    confirmEditAsync(rowIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(rowIndex);
        });
    }
    updateValue(event, prop, rowIndex) { }
    cleanEditing(rowIndex) { }
    rmAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(null);
        });
    }
}
export class NgxDatatableLocalDataWithInlineSearch extends NgxDatatablePoweredBase {
    constructor() {
        super();
        this.SelectionType = SelectionType;
        // Support selected
        this.selected = [];
        // Suport editing
        this.editing = {};
        this.backup = {};
    }
    onSelect({ selected }) { }
    startAdd() { }
    startEdit(rowIndex) { }
    // Support editing an existing one and adding a new one
    cancelEdit(rowIndex) { }
    ;
    confirmEditAsync(rowIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(rowIndex);
        });
    }
    updateValue(event, prop, rowIndex) { }
    cleanEditing(rowIndex) { }
    rmAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(null);
        });
    }
    // Support for local filters
    startObserveSearchKeyword() { }
    stopObserveSearchKeyword() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQTBGLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0QsTUFBTSxPQUFnQixxQkFDbEIsU0FBUSx1QkFBMEI7SUFjbEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQWJaLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLG1CQUFtQjtRQUNuQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGlCQUFpQjtRQUNqQixZQUFPLEdBQStCLEVBQUUsQ0FBQztRQUN6QyxXQUFNLEdBQXlCLEVBQUUsQ0FBQztJQVFsQyxDQUFDO0lBSUQsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztJQUUxQixRQUFRLEtBQUssQ0FBQztJQUVkLFNBQVMsQ0FBQyxRQUFnQixJQUFJLENBQUM7SUFFL0IsdURBQXVEO0lBQ3ZELFVBQVUsQ0FBQyxRQUFnQixJQUFJLENBQUM7SUFBQSxDQUFDO0lBRzNCLGdCQUFnQixDQUFDLFFBQWdCOztZQUNuQyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsS0FBVSxFQUFFLElBQVksRUFBRSxRQUFnQixJQUFJLENBQUM7SUFFM0QsWUFBWSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUU1QixPQUFPOztZQUNULE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7S0FBQTtDQUNKO0FBSUQsTUFBTSxPQUFnQixxQ0FDbEIsU0FBUSx1QkFBMEI7SUFtQmxDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFsQlosa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsbUJBQW1CO1FBQ25CLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO1FBQ2pCLFlBQU8sR0FBK0IsRUFBRSxDQUFDO1FBQ3pDLFdBQU0sR0FBeUIsRUFBRSxDQUFDO0lBYWxDLENBQUM7SUFJRCxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBRTFCLFFBQVEsS0FBSyxDQUFDO0lBRWQsU0FBUyxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsVUFBVSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0JBQWdCLENBQUMsUUFBZ0I7O1lBQ25DLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCxZQUFZLENBQUMsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLE9BQU87O1lBQ1QsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBRUQsNEJBQTRCO0lBQzVCLHlCQUF5QixLQUFXLENBQUM7SUFDckMsd0JBQXdCLEtBQVcsQ0FBQztDQUl2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJTmd4Tm90eSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVNlYXJjaENhcGFiaWx0eUJ1aWxkZXIsIElUYWJsZURhdGFDaGFuZ2VFdmVudCwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlLCBub29wUHJvbWlzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZSB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UnO1xyXG5cclxuLy8gRGVydmllZCBjbGFzc2VzIG11c3QgdXNlIGRlY29yYXRvciB0byBwcm92aWRlIGltcGxlbWVudGF0aW9uXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVMb2NhbERhdGE8VCBleHRlbmRzIElSb3dEYXRhVHlwZT5cclxuICAgIGV4dGVuZHMgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2U8VD4gaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuICAgIGFic3RyYWN0IG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgcHVibGlzaChldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KTogdm9pZDtcclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlTG9jYWxEYXRhV2l0aElubGluZVNlYXJjaDxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiBpbXBsZW1lbnRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiwgSVNlYXJjaENhcGFiaWx0eUJ1aWxkZXIge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuICAgIGFic3RyYWN0IG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIC8vIFN1cHBvcnQgZm9yIGxvY2FsIGZpbHRlcnNcclxuICAgIGFic3RyYWN0IHNlYXJjaENvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHB1Ymxpc2goZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCk6IHZvaWQ7XHJcblxyXG4gICAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KSB7IH1cclxuXHJcbiAgICBzdGFydEFkZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0RWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2Uocm93SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3VwcG9ydCBmb3IgbG9jYWwgZmlsdGVyc1xyXG4gICAgc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpOiB2b2lkIHsgfVxyXG4gICAgc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCk6IHZvaWQgeyB9XHJcbiAgICBhYnN0cmFjdCBjYW5jZWxUeXBlZEtleXdvcmQoKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGtpY2tPZmZTZWFyY2goKTogdm9pZDtcclxuXHJcbn1cclxuIl19