import { __awaiter, __extends, __generator } from "tslib";
import { SelectionType } from '@swimlane/ngx-datatable';
import { noopPromise } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
var NgxDatatableExternalData = /** @class */ (function (_super) {
    __extends(NgxDatatableExternalData, _super);
    function NgxDatatableExternalData() {
        return _super.call(this) || this;
    }
    NgxDatatableExternalData.prototype.onPageChanged = function (evt) {
        this.buildTableDataAsync(evt.offset);
    };
    NgxDatatableExternalData.prototype.refresh = function () {
        // The other settings stay the same.
        this.buildTableDataAsync(0);
    };
    return NgxDatatableExternalData;
}(NgxDatatablePoweredBase));
export { NgxDatatableExternalData };
var NgxDatatableExternalDataWithOperations = /** @class */ (function (_super) {
    __extends(NgxDatatableExternalDataWithOperations, _super);
    function NgxDatatableExternalDataWithOperations() {
        var _this = _super.call(this) || this;
        _this.SelectionType = SelectionType;
        // Support selected
        _this.selected = [];
        // Suport editing
        _this.editing = {};
        _this.backup = {};
        return _this;
    }
    NgxDatatableExternalDataWithOperations.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    NgxDatatableExternalDataWithOperations.prototype.startAdd = function () { };
    NgxDatatableExternalDataWithOperations.prototype.startEdit = function (rowIndex) { };
    // Support editing an existing one and adding a new one
    NgxDatatableExternalDataWithOperations.prototype.cancelEdit = function (rowIndex) { };
    ;
    NgxDatatableExternalDataWithOperations.prototype.confirmEditAsync = function (rowIndex) {
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
    NgxDatatableExternalDataWithOperations.prototype.updateValue = function (event, prop, rowIndex) { };
    NgxDatatableExternalDataWithOperations.prototype.cleanEditing = function (rowIndex) { };
    NgxDatatableExternalDataWithOperations.prototype.rmAsync = function () {
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
    return NgxDatatableExternalDataWithOperations;
}(NgxDatatableExternalData));
export { NgxDatatableExternalDataWithOperations };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1leHRlcm5hbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWV4dGVybmFsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQXVHLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQUNZLDRDQUEwQjtJQUVsQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUlELGdEQUFhLEdBQWIsVUFBYyxHQUFzQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBSUwsK0JBQUM7QUFBRCxDQUFDLEFBcEJELENBQ1ksdUJBQXVCLEdBbUJsQzs7QUFFRDtJQUNZLDBEQUEyQjtJQWdCbkM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFmRCxtQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixtQkFBbUI7UUFDbkIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixpQkFBaUI7UUFDakIsYUFBTyxHQUErQixFQUFFLENBQUM7UUFDekMsWUFBTSxHQUF5QixFQUFFLENBQUM7O0lBU2xDLENBQUM7SUFHRCx5REFBUSxHQUFSLFVBQVMsRUFBWTtZQUFWLHNCQUFRO0lBQU0sQ0FBQztJQUUxQix5REFBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDBEQUFTLEdBQVQsVUFBVSxRQUFnQixJQUFJLENBQUM7SUFFL0IsdURBQXVEO0lBQ3ZELDJEQUFVLEdBQVYsVUFBVyxRQUFnQixJQUFJLENBQUM7SUFBQSxDQUFDO0lBRzNCLGlFQUFnQixHQUF0QixVQUF1QixRQUFnQjs7Ozs0QkFDbkMscUJBQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzs7Ozs7S0FDL0I7SUFFRCw0REFBVyxHQUFYLFVBQVksS0FBVSxFQUFFLElBQVksRUFBRSxRQUFnQixJQUFJLENBQUM7SUFFM0QsNkRBQVksR0FBWixVQUFhLFFBQWdCLElBQUksQ0FBQztJQUU1Qix3REFBTyxHQUFiOzs7OzRCQUNJLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQzNCO0lBRUwsNkNBQUM7QUFBRCxDQUFDLEFBNUNELENBQ1ksd0JBQXdCLEdBMkNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTmd4Tm90eSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElQYWdlQ2hhbmdlZEV2ZW50LCBJUm93RGF0YVR5cGUsIElTb3J0Q2hhbmdlZEV2ZW50LCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSwgbm9vcFByb21pc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICcuL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVFeHRlcm5hbERhdGE8VCBleHRlbmRzIElSb3dEYXRhVHlwZT5cclxuICAgIGV4dGVuZHMgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2U8VD4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJ1aWxkVGFibGVEYXRhQXN5bmMocGFnZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPGFueT47XHJcblxyXG4gICAgb25QYWdlQ2hhbmdlZChldnQ6IElQYWdlQ2hhbmdlZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFRhYmxlRGF0YUFzeW5jKGV2dC5vZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgLy8gVGhlIG90aGVyIHNldHRpbmdzIHN0YXkgdGhlIHNhbWUuXHJcbiAgICAgICAgdGhpcy5idWlsZFRhYmxlRGF0YUFzeW5jKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IG9uU29ydENoYW5nZWQoZXZ0OiBJU29ydENoYW5nZWRFdmVudCk6IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVFeHRlcm5hbERhdGFXaXRoT3BlcmF0aW9uczxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVFeHRlcm5hbERhdGE8VD5cclxuICAgIGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxuXHJcbiAgICBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZTtcclxuXHJcbiAgICAvLyBTdXBwb3J0IHNlbGVjdGVkXHJcbiAgICBzZWxlY3RlZDogQXJyYXk8VD4gPSBbXTtcclxuICAgIC8vIFN1cG9ydCBlZGl0aW5nXHJcbiAgICBlZGl0aW5nOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgYmFja3VwOiB7IFtrZXk6IG51bWJlcl06IFQgfSA9IHt9O1xyXG5cclxuICAgIGFueUVkaXRpbmc6IGJvb2xlYW5cclxuXHJcbiAgICBhYnN0cmFjdCBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRhYmxlRGF0YUNoYW5nZUV2ZW50PjtcclxuICAgIGFic3RyYWN0IG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkgeyB9XHJcblxyXG4gICAgc3RhcnRBZGQoKSB7IH1cclxuXHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH07XHJcblxyXG5cclxuICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKHJvd0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZShldmVudDogYW55LCBwcm9wOiBzdHJpbmcsIHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBhc3luYyBybUFzeW5jKCkge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKG51bGwpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=