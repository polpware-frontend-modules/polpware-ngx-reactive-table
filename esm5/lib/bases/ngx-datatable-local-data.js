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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQTBDLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0Q7SUFDWSx5Q0FBMEI7SUFhbEM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFiRCxtQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixtQkFBbUI7UUFDbkIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixpQkFBaUI7UUFDakIsYUFBTyxHQUErQixFQUFFLENBQUM7UUFDekMsWUFBTSxHQUF5QixFQUFFLENBQUM7O0lBT2xDLENBQUM7SUFHRCx3Q0FBUSxHQUFSLFVBQVMsRUFBWTtZQUFWLHNCQUFRO0lBQU0sQ0FBQztJQUUxQix3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHlDQUFTLEdBQVQsVUFBVSxRQUFnQixJQUFJLENBQUM7SUFFL0IsdURBQXVEO0lBQ3ZELDBDQUFVLEdBQVYsVUFBVyxRQUFnQixJQUFJLENBQUM7SUFBQSxDQUFDO0lBRzNCLGdEQUFnQixHQUF0QixVQUF1QixRQUFnQjs7Ozs0QkFDbkMscUJBQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzs7Ozs7S0FDL0I7SUFFRCwyQ0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLElBQVksRUFBRSxRQUFnQixJQUFJLENBQUM7SUFFM0QsNENBQVksR0FBWixVQUFhLFFBQWdCLElBQUksQ0FBQztJQUU1Qix1Q0FBTyxHQUFiOzs7OzRCQUNJLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQzNCO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBekNELENBQ1ksdUJBQXVCLEdBd0NsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlLCBub29wUHJvbWlzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZSB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UnO1xyXG5cclxuLy8gRGVydmllZCBjbGFzc2VzIG11c3QgdXNlIGRlY29yYXRvciB0byBwcm92aWRlIGltcGxlbWVudGF0aW9uXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVMb2NhbERhdGE8VCBleHRlbmRzIElSb3dEYXRhVHlwZT5cclxuICAgIGV4dGVuZHMgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2U8VD4gaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19