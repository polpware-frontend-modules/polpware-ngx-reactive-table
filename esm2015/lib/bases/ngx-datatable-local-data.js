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
    // Support for local filters
    startObserveSearchKeyword() { }
    stopObserveSearchKeyword() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWtGLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0QsTUFBTSxPQUFnQixxQkFDbEIsU0FBUSx1QkFBMEI7SUFrQmxDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFqQlosa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsbUJBQW1CO1FBQ25CLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO1FBQ2pCLFlBQU8sR0FBK0IsRUFBRSxDQUFDO1FBQ3pDLFdBQU0sR0FBeUIsRUFBRSxDQUFDO0lBWWxDLENBQUM7SUFJRCxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBRTFCLFFBQVEsS0FBSyxDQUFDO0lBRWQsU0FBUyxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsVUFBVSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0JBQWdCLENBQUMsUUFBZ0I7O1lBQ25DLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCxZQUFZLENBQUMsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLE9BQU87O1lBQ1QsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBRUQsNEJBQTRCO0lBQzVCLHlCQUF5QixLQUFXLENBQUM7SUFDckMsd0JBQXdCLEtBQVcsQ0FBQztDQUd2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJTmd4Tm90eSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElIYXNMb2NhbEZpbHRlciwgSVJvd0RhdGFUeXBlLCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSwgbm9vcFByb21pc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICcuL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlJztcclxuXHJcbi8vIERlcnZpZWQgY2xhc3NlcyBtdXN0IHVzZSBkZWNvcmF0b3IgdG8gcHJvdmlkZSBpbXBsZW1lbnRhdGlvblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlTG9jYWxEYXRhPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQ+IGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+LCBJSGFzTG9jYWxGaWx0ZXIge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuICAgIGFic3RyYWN0IG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIC8vIFN1cHBvcnQgZm9yIGxvY2FsIGZpbHRlcnNcclxuICAgIGFic3RyYWN0IHNlYXJjaENvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgcHVibGlzaChldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KTogdm9pZDtcclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGZvciBsb2NhbCBmaWx0ZXJzXHJcbiAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCk6IHZvaWQgeyB9XHJcbiAgICBzdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTogdm9pZCB7IH1cclxuICAgIGFic3RyYWN0IGNhbmNlbFR5cGVkS2V5d29yZCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3Qga2lja09mZlNlYXJjaCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==