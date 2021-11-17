import { __awaiter } from "tslib";
import { SelectionType } from '@swimlane/ngx-datatable';
import { noopPromise } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
export class NgxDatatableExternalData extends NgxDatatablePoweredBase {
    constructor() {
        super();
    }
    onPageChanged(evt) {
        this.buildTableDataAsync(evt.offset);
    }
    refresh() {
        // The other settings stay the same.
        this.buildTableDataAsync(0);
    }
}
export class NgxDatatableExternalDataWithOperations extends NgxDatatableExternalData {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1leHRlcm5hbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWV4dGVybmFsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQXVHLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxNQUFNLE9BQWdCLHdCQUNsQixTQUFRLHVCQUEwQjtJQUVsQztRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUlELGFBQWEsQ0FBQyxHQUFzQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPO1FBQ0gsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBSUo7QUFFRCxNQUFNLE9BQWdCLHNDQUNsQixTQUFRLHdCQUEyQjtJQWdCbkM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQWRaLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLG1CQUFtQjtRQUNuQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGlCQUFpQjtRQUNqQixZQUFPLEdBQStCLEVBQUUsQ0FBQztRQUN6QyxXQUFNLEdBQXlCLEVBQUUsQ0FBQztJQVNsQyxDQUFDO0lBR0QsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztJQUUxQixRQUFRLEtBQUssQ0FBQztJQUVkLFNBQVMsQ0FBQyxRQUFnQixJQUFJLENBQUM7SUFFL0IsdURBQXVEO0lBQ3ZELFVBQVUsQ0FBQyxRQUFnQixJQUFJLENBQUM7SUFBQSxDQUFDO0lBRzNCLGdCQUFnQixDQUFDLFFBQWdCOztZQUNuQyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsS0FBVSxFQUFFLElBQVksRUFBRSxRQUFnQixJQUFJLENBQUM7SUFFM0QsWUFBWSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUU1QixPQUFPOztZQUNULE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7S0FBQTtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hOb3R5IH0gZnJvbSAnQHBvbHB3YXJlL25neC1ub3R5JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgSVBhZ2VDaGFuZ2VkRXZlbnQsIElSb3dEYXRhVHlwZSwgSVNvcnRDaGFuZ2VkRXZlbnQsIElUYWJsZURhdGFDaGFuZ2VFdmVudCwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlLCBub29wUHJvbWlzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZSB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnVpbGRUYWJsZURhdGFBc3luYyhwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8YW55PjtcclxuXHJcbiAgICBvblBhZ2VDaGFuZ2VkKGV2dDogSVBhZ2VDaGFuZ2VkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVEYXRhQXN5bmMoZXZ0Lm9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICAvLyBUaGUgb3RoZXIgc2V0dGluZ3Mgc3RheSB0aGUgc2FtZS5cclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVEYXRhQXN5bmMoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3Qgb25Tb3J0Q2hhbmdlZChldnQ6IElTb3J0Q2hhbmdlZEV2ZW50KTogYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YVdpdGhPcGVyYXRpb25zPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YTxUPlxyXG4gICAgaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuICAgIGFic3RyYWN0IGRhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGFibGVEYXRhQ2hhbmdlRXZlbnQ+O1xyXG4gICAgYWJzdHJhY3Qgbm90eTogSU5neE5vdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KSB7IH1cclxuXHJcbiAgICBzdGFydEFkZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0RWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2Uocm93SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==