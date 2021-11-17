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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWlFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0QsTUFBTSxPQUFnQixxQkFDbEIsU0FBUSx1QkFBMEI7SUFpQmxDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFoQlosa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsbUJBQW1CO1FBQ25CLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO1FBQ2pCLFlBQU8sR0FBK0IsRUFBRSxDQUFDO1FBQ3pDLFdBQU0sR0FBeUIsRUFBRSxDQUFDO0lBV2xDLENBQUM7SUFHRCxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBRTFCLFFBQVEsS0FBSyxDQUFDO0lBRWQsU0FBUyxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsVUFBVSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0JBQWdCLENBQUMsUUFBZ0I7O1lBQ25DLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCxZQUFZLENBQUMsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLE9BQU87O1lBQ1QsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgSVJvd0RhdGFUeXBlLCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSwgbm9vcFByb21pc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICcuL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlJztcclxuXHJcbi8vIERlcnZpZWQgY2xhc3NlcyBtdXN0IHVzZSBkZWNvcmF0b3IgdG8gcHJvdmlkZSBpbXBsZW1lbnRhdGlvblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlTG9jYWxEYXRhPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQ+IGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxuXHJcbiAgICBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZTtcclxuXHJcbiAgICAvLyBTdXBwb3J0IHNlbGVjdGVkXHJcbiAgICBzZWxlY3RlZDogQXJyYXk8VD4gPSBbXTtcclxuICAgIC8vIFN1cG9ydCBlZGl0aW5nXHJcbiAgICBlZGl0aW5nOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgYmFja3VwOiB7IFtrZXk6IG51bWJlcl06IFQgfSA9IHt9O1xyXG5cclxuICAgIGFueUVkaXRpbmc6IGJvb2xlYW5cclxuXHJcbiAgICAvLyBXZSBvbiBwdXJwb3NlIGRvIG5vdCBtYWtlIGl0IGFuIG91dHB1dCwgYmVjYXVzZSBvdXRwdXQsIGxpa2UgaW5wdXQsIG1heSByYWlzZSBzb21lIGlzc3Vlc1xyXG4gICAgLy8gaW4gYW4gYWJzdHJhY3QgY2xhc3MuXHJcbiAgICBhYnN0cmFjdCBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRhYmxlRGF0YUNoYW5nZUV2ZW50PjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KSB7IH1cclxuXHJcbiAgICBzdGFydEFkZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0RWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2Uocm93SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==