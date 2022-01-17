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
    NgxDatatableExternalData.prototype.onPageSizeChanged = function (size) {
        this.pageSize = size;
        this.refresh();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1leHRlcm5hbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWV4dGVybmFsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQXVHLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQUNZLDRDQUEwQjtJQUVsQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUlELGdEQUFhLEdBQWIsVUFBYyxHQUFzQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxvREFBaUIsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDSSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFJTCwrQkFBQztBQUFELENBQUMsQUF6QkQsQ0FDWSx1QkFBdUIsR0F3QmxDOztBQUVEO0lBQ1ksMERBQTJCO0lBZW5DO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBZEQsbUJBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsbUJBQW1CO1FBQ25CLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO1FBQ2pCLGFBQU8sR0FBK0IsRUFBRSxDQUFDO1FBQ3pDLFlBQU0sR0FBeUIsRUFBRSxDQUFDOztJQVFsQyxDQUFDO0lBSUQseURBQVEsR0FBUixVQUFTLEVBQVk7WUFBVixzQkFBUTtJQUFNLENBQUM7SUFFMUIseURBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwwREFBUyxHQUFULFVBQVUsUUFBZ0IsSUFBSSxDQUFDO0lBRS9CLHVEQUF1RDtJQUN2RCwyREFBVSxHQUFWLFVBQVcsUUFBZ0IsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUczQixpRUFBZ0IsR0FBdEIsVUFBdUIsUUFBZ0I7Ozs7NEJBQ25DLHFCQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7Ozs7O0tBQy9CO0lBRUQsNERBQVcsR0FBWCxVQUFZLEtBQVUsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsSUFBSSxDQUFDO0lBRTNELDZEQUFZLEdBQVosVUFBYSxRQUFnQixJQUFJLENBQUM7SUFFNUIsd0RBQU8sR0FBYjs7Ozs0QkFDSSxxQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDOzs7OztLQUMzQjtJQUVMLDZDQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUNZLHdCQUF3QixHQTJDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmd4Tm90eSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElQYWdlQ2hhbmdlZEV2ZW50LCBJUm93RGF0YVR5cGUsIElTb3J0Q2hhbmdlZEV2ZW50LCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSwgbm9vcFByb21pc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICcuL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVFeHRlcm5hbERhdGE8VCBleHRlbmRzIElSb3dEYXRhVHlwZT5cclxuICAgIGV4dGVuZHMgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2U8VD4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJ1aWxkVGFibGVEYXRhQXN5bmMocGFnZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPGFueT47XHJcblxyXG4gICAgb25QYWdlQ2hhbmdlZChldnQ6IElQYWdlQ2hhbmdlZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFRhYmxlRGF0YUFzeW5jKGV2dC5vZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZVNpemVDaGFuZ2VkKHNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgLy8gVGhlIG90aGVyIHNldHRpbmdzIHN0YXkgdGhlIHNhbWUuXHJcbiAgICAgICAgdGhpcy5idWlsZFRhYmxlRGF0YUFzeW5jKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IG9uU29ydENoYW5nZWQoZXZ0OiBJU29ydENoYW5nZWRFdmVudCk6IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVFeHRlcm5hbERhdGFXaXRoT3BlcmF0aW9uczxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVFeHRlcm5hbERhdGE8VD5cclxuICAgIGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxuXHJcbiAgICBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZTtcclxuXHJcbiAgICAvLyBTdXBwb3J0IHNlbGVjdGVkXHJcbiAgICBzZWxlY3RlZDogQXJyYXk8VD4gPSBbXTtcclxuICAgIC8vIFN1cG9ydCBlZGl0aW5nXHJcbiAgICBlZGl0aW5nOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgYmFja3VwOiB7IFtrZXk6IG51bWJlcl06IFQgfSA9IHt9O1xyXG5cclxuICAgIGFueUVkaXRpbmc6IGJvb2xlYW5cclxuXHJcbiAgICBhYnN0cmFjdCBub3R5OiBJTmd4Tm90eTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHB1Ymxpc2goZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCk6IHZvaWQ7XHJcblxyXG4gICAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KSB7IH1cclxuXHJcbiAgICBzdGFydEFkZCgpIHsgfVxyXG5cclxuICAgIHN0YXJ0RWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfTtcclxuXHJcblxyXG4gICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2Uocm93SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgYXdhaXQgbm9vcFByb21pc2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==