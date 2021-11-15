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
    return NgxDatatableLocalData;
}(NgxDatatablePoweredBase));
export { NgxDatatableLocalData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQTBDLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0Q7SUFDWSx5Q0FBMEI7SUFhbEM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFiRCxtQkFBYSxHQUFHLGFBQWEsQ0FBQzs7SUFhOUIsQ0FBQztJQUdELHdDQUFRLEdBQVIsVUFBUyxFQUFZO1lBQVYsc0JBQVE7SUFBTSxDQUFDO0lBRTFCLHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQseUNBQVMsR0FBVCxVQUFVLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsMENBQVUsR0FBVixVQUFXLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0RBQWdCLEdBQXRCLFVBQXVCLFFBQWdCOzs7OzRCQUNuQyxxQkFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs7OztLQUMvQjtJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCw0Q0FBWSxHQUFaLFVBQWEsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLHVDQUFPLEdBQWI7Ozs7NEJBQ0kscUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzs7Ozs7S0FDM0I7SUFFTCw0QkFBQztBQUFELENBQUMsQUF6Q0QsQ0FDWSx1QkFBdUIsR0F3Q2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgSVJvd0RhdGFUeXBlLCBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2UsIG5vb3BQcm9taXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IE5neERhdGF0YWJsZVBvd2VyZWRCYXNlIH0gZnJvbSAnLi9uZ3gtZGF0YXRhYmxlLXBvd2VyZWQtYmFzZSc7XHJcblxyXG4vLyBEZXJ2aWVkIGNsYXNzZXMgbXVzdCB1c2UgZGVjb3JhdG9yIHRvIHByb3ZpZGUgaW1wbGVtZW50YXRpb25cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUxvY2FsRGF0YTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiBpbXBsZW1lbnRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiB7XHJcblxyXG4gICAgU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGU7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+O1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgYmFja3VwOiB7IFtrZXk6IG51bWJlcl06IFQgfTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkgeyB9XHJcblxyXG4gICAgc3RhcnRBZGQoKSB7IH1cclxuXHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH07XHJcblxyXG5cclxuICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKHJvd0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZShldmVudDogYW55LCBwcm9wOiBzdHJpbmcsIHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBhc3luYyBybUFzeW5jKCkge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKG51bGwpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=