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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1leHRlcm5hbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWV4dGVybmFsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQXVHLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQUNZLDRDQUEwQjtJQUVsQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUlELGdEQUFhLEdBQWIsVUFBYyxHQUFzQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBSUwsK0JBQUM7QUFBRCxDQUFDLEFBcEJELENBQ1ksdUJBQXVCLEdBbUJsQzs7QUFFRDtJQUNZLDBEQUEyQjtJQWVuQztRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQWRELG1CQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLG1CQUFtQjtRQUNuQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGlCQUFpQjtRQUNqQixhQUFPLEdBQStCLEVBQUUsQ0FBQztRQUN6QyxZQUFNLEdBQXlCLEVBQUUsQ0FBQzs7SUFRbEMsQ0FBQztJQUlELHlEQUFRLEdBQVIsVUFBUyxFQUFZO1lBQVYsc0JBQVE7SUFBTSxDQUFDO0lBRTFCLHlEQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMERBQVMsR0FBVCxVQUFVLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsMkRBQVUsR0FBVixVQUFXLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsaUVBQWdCLEdBQXRCLFVBQXVCLFFBQWdCOzs7OzRCQUNuQyxxQkFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs7OztLQUMvQjtJQUVELDREQUFXLEdBQVgsVUFBWSxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCw2REFBWSxHQUFaLFVBQWEsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLHdEQUFPLEdBQWI7Ozs7NEJBQ0kscUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdkIsU0FBdUIsQ0FBQzs7Ozs7S0FDM0I7SUFFTCw2Q0FBQztBQUFELENBQUMsQUE1Q0QsQ0FDWSx3QkFBd0IsR0EyQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5neE5vdHkgfSBmcm9tICdAcG9scHdhcmUvbmd4LW5vdHknO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBJUGFnZUNoYW5nZWRFdmVudCwgSVJvd0RhdGFUeXBlLCBJU29ydENoYW5nZWRFdmVudCwgSVRhYmxlRGF0YUNoYW5nZUV2ZW50LCBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2UsIG5vb3BQcm9taXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IE5neERhdGF0YWJsZVBvd2VyZWRCYXNlIH0gZnJvbSAnLi9uZ3gtZGF0YXRhYmxlLXBvd2VyZWQtYmFzZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlRXh0ZXJuYWxEYXRhPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQ+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBidWlsZFRhYmxlRGF0YUFzeW5jKHBhZ2VJbmRleDogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xyXG5cclxuICAgIG9uUGFnZUNoYW5nZWQoZXZ0OiBJUGFnZUNoYW5nZWRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuYnVpbGRUYWJsZURhdGFBc3luYyhldnQub2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIC8vIFRoZSBvdGhlciBzZXR0aW5ncyBzdGF5IHRoZSBzYW1lLlxyXG4gICAgICAgIHRoaXMuYnVpbGRUYWJsZURhdGFBc3luYygwKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBvblNvcnRDaGFuZ2VkKGV2dDogSVNvcnRDaGFuZ2VkRXZlbnQpOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlRXh0ZXJuYWxEYXRhV2l0aE9wZXJhdGlvbnM8VCBleHRlbmRzIElSb3dEYXRhVHlwZT5cclxuICAgIGV4dGVuZHMgTmd4RGF0YXRhYmxlRXh0ZXJuYWxEYXRhPFQ+XHJcbiAgICBpbXBsZW1lbnRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiB7XHJcblxyXG4gICAgU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGU7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+ID0gW107XHJcbiAgICAvLyBTdXBvcnQgZWRpdGluZ1xyXG4gICAgZWRpdGluZzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgIGJhY2t1cDogeyBba2V5OiBudW1iZXJdOiBUIH0gPSB7fTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuXHJcblxyXG4gICAgYWJzdHJhY3Qgbm90eTogSU5neE5vdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBwdWJsaXNoKGV2ZW50OiBJVGFibGVEYXRhQ2hhbmdlRXZlbnQpOiB2b2lkO1xyXG5cclxuICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkgeyB9XHJcblxyXG4gICAgc3RhcnRBZGQoKSB7IH1cclxuXHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH07XHJcblxyXG5cclxuICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKHJvd0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZShldmVudDogYW55LCBwcm9wOiBzdHJpbmcsIHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBhc3luYyBybUFzeW5jKCkge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKG51bGwpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=