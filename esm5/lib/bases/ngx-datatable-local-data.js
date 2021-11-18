import { __awaiter, __extends, __generator } from "tslib";
import { SelectionType } from '@swimlane/ngx-datatable';
import { noopPromise } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
// Dervied classes must use decorator to provide implementation
var NgxDatatableLocalData = /** @class */ (function (_super) {
    __extends(NgxDatatableLocalData, _super);
    function NgxDatatableLocalData() {
        var _this = _super.call(this) || this;
        _this.SelectionType = SelectionType;
        // Support selected
        _this.selected = [];
        // Suport editing
        _this.editing = {};
        _this.backup = {};
        return _this;
    }
    NgxDatatableLocalData.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    NgxDatatableLocalData.prototype.startAdd = function () { };
    NgxDatatableLocalData.prototype.startEdit = function (rowIndex) { };
    // Support editing an existing one and adding a new one
    NgxDatatableLocalData.prototype.cancelEdit = function (rowIndex) { };
    ;
    NgxDatatableLocalData.prototype.confirmEditAsync = function (rowIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, noopPromise(rowIndex)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NgxDatatableLocalData.prototype.updateValue = function (event, prop, rowIndex) { };
    NgxDatatableLocalData.prototype.cleanEditing = function (rowIndex) { };
    NgxDatatableLocalData.prototype.rmAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, noopPromise(null)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Support for local filters
    NgxDatatableLocalData.prototype.startObserveSearchKeyword = function () { };
    NgxDatatableLocalData.prototype.stopObserveSearchKeyword = function () { };
    return NgxDatatableLocalData;
}(NgxDatatablePoweredBase));
export { NgxDatatableLocalData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWtGLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0Q7SUFDWSx5Q0FBMEI7SUFrQmxDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBbEJELG1CQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLG1CQUFtQjtRQUNuQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGlCQUFpQjtRQUNqQixhQUFPLEdBQStCLEVBQUUsQ0FBQztRQUN6QyxZQUFNLEdBQXlCLEVBQUUsQ0FBQzs7SUFZbEMsQ0FBQztJQUlELHdDQUFRLEdBQVIsVUFBUyxFQUFZO1lBQVYsc0JBQVE7SUFBTSxDQUFDO0lBRTFCLHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQseUNBQVMsR0FBVCxVQUFVLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsMENBQVUsR0FBVixVQUFXLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0RBQWdCLEdBQXRCLFVBQXVCLFFBQWdCOzs7OzRCQUNuQyxxQkFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs7OztLQUMvQjtJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCw0Q0FBWSxHQUFaLFVBQWEsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLHVDQUFPLEdBQWI7Ozs7NEJBQ0kscUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzs7Ozs7S0FDM0I7SUFFRCw0QkFBNEI7SUFDNUIseURBQXlCLEdBQXpCLGNBQW9DLENBQUM7SUFDckMsd0RBQXdCLEdBQXhCLGNBQW1DLENBQUM7SUFHeEMsNEJBQUM7QUFBRCxDQUFDLEFBcERELENBQ1ksdUJBQXVCLEdBbURsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJTmd4Tm90eSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElIYXNMb2NhbEZpbHRlciwgSVJvd0RhdGFUeXBlLCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSwgbm9vcFByb21pc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICcuL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlJztcclxuXHJcbi8vIERlcnZpZWQgY2xhc3NlcyBtdXN0IHVzZSBkZWNvcmF0b3IgdG8gcHJvdmlkZSBpbXBsZW1lbnRhdGlvblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlTG9jYWxEYXRhPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQ+IGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+LCBJSGFzTG9jYWxGaWx0ZXIge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuICAgIGFic3RyYWN0IG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIC8vIFN1cHBvcnQgZm9yIGxvY2FsIGZpbHRlcnNcclxuICAgIGFic3RyYWN0IHNlYXJjaENvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgcHVibGlzaChldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KTogdm9pZDtcclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGZvciBsb2NhbCBmaWx0ZXJzXHJcbiAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCk6IHZvaWQgeyB9XHJcbiAgICBzdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTogdm9pZCB7IH1cclxuICAgIGFic3RyYWN0IGNhbmNlbFR5cGVkS2V5d29yZCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3Qga2lja09mZlNlYXJjaCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==