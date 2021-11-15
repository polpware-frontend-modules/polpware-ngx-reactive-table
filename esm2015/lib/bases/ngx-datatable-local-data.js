import { __awaiter } from "tslib";
import { SelectionType } from '@swimlane/ngx-datatable';
import { noopPromise } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
// Dervied classes must use decorator to provide implementation
export class NgxDatatableLocalData extends NgxDatatablePoweredBase {
    constructor() {
        super();
        this.SelectionType = SelectionType;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQTBDLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0QsTUFBTSxPQUFnQixxQkFDbEIsU0FBUSx1QkFBMEI7SUFhbEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQVpaLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBYTlCLENBQUM7SUFHRCxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBRTFCLFFBQVEsS0FBSyxDQUFDO0lBRWQsU0FBUyxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsVUFBVSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0JBQWdCLENBQUMsUUFBZ0I7O1lBQ25DLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCxZQUFZLENBQUMsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLE9BQU87O1lBQ1QsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBJUm93RGF0YVR5cGUsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSwgbm9vcFByb21pc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICcuL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlJztcclxuXHJcbi8vIERlcnZpZWQgY2xhc3NlcyBtdXN0IHVzZSBkZWNvcmF0b3IgdG8gcHJvdmlkZSBpbXBsZW1lbnRhdGlvblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlTG9jYWxEYXRhPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQ+IGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxuXHJcbiAgICBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZTtcclxuXHJcbiAgICAvLyBTdXBwb3J0IHNlbGVjdGVkXHJcbiAgICBzZWxlY3RlZDogQXJyYXk8VD47XHJcbiAgICAvLyBTdXBvcnQgZWRpdGluZ1xyXG4gICAgZWRpdGluZzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9O1xyXG5cclxuICAgIGFueUVkaXRpbmc6IGJvb2xlYW5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KSB7IH1cclxuXHJcbiAgICBzdGFydEFkZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0RWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2Uocm93SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==