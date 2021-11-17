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
    return NgxDatatableLocalData;
}(NgxDatatablePoweredBase));
export { NgxDatatableLocalData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWlFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0Q7SUFDWSx5Q0FBMEI7SUFpQmxDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBakJELG1CQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLG1CQUFtQjtRQUNuQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGlCQUFpQjtRQUNqQixhQUFPLEdBQStCLEVBQUUsQ0FBQztRQUN6QyxZQUFNLEdBQXlCLEVBQUUsQ0FBQzs7SUFXbEMsQ0FBQztJQUdELHdDQUFRLEdBQVIsVUFBUyxFQUFZO1lBQVYsc0JBQVE7SUFBTSxDQUFDO0lBRTFCLHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQseUNBQVMsR0FBVCxVQUFVLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsMENBQVUsR0FBVixVQUFXLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0RBQWdCLEdBQXRCLFVBQXVCLFFBQWdCOzs7OzRCQUNuQyxxQkFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs7OztLQUMvQjtJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCw0Q0FBWSxHQUFaLFVBQWEsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLHVDQUFPLEdBQWI7Ozs7NEJBQ0kscUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzs7Ozs7S0FDM0I7SUFFTCw0QkFBQztBQUFELENBQUMsQUE3Q0QsQ0FDWSx1QkFBdUIsR0E0Q2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVRhYmxlRGF0YUNoYW5nZUV2ZW50LCBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2UsIG5vb3BQcm9taXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IE5neERhdGF0YWJsZVBvd2VyZWRCYXNlIH0gZnJvbSAnLi9uZ3gtZGF0YXRhYmxlLXBvd2VyZWQtYmFzZSc7XHJcblxyXG4vLyBEZXJ2aWVkIGNsYXNzZXMgbXVzdCB1c2UgZGVjb3JhdG9yIHRvIHByb3ZpZGUgaW1wbGVtZW50YXRpb25cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUxvY2FsRGF0YTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiBpbXBsZW1lbnRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiB7XHJcblxyXG4gICAgU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGU7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+ID0gW107XHJcbiAgICAvLyBTdXBvcnQgZWRpdGluZ1xyXG4gICAgZWRpdGluZzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgIGJhY2t1cDogeyBba2V5OiBudW1iZXJdOiBUIH0gPSB7fTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuXHJcblxyXG4gICAgLy8gV2Ugb24gcHVycG9zZSBkbyBub3QgbWFrZSBpdCBhbiBvdXRwdXQsIGJlY2F1c2Ugb3V0cHV0LCBsaWtlIGlucHV0LCBtYXkgcmFpc2Ugc29tZSBpc3N1ZXNcclxuICAgIC8vIGluIGFuIGFic3RyYWN0IGNsYXNzLlxyXG4gICAgYWJzdHJhY3QgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPElUYWJsZURhdGFDaGFuZ2VFdmVudD47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkgeyB9XHJcblxyXG4gICAgc3RhcnRBZGQoKSB7IH1cclxuXHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH07XHJcblxyXG5cclxuICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKHJvd0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZShldmVudDogYW55LCBwcm9wOiBzdHJpbmcsIHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBhc3luYyBybUFzeW5jKCkge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKG51bGwpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=