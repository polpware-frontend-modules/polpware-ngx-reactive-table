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
var NgxDatatableLocalDataWithInlineSearch = /** @class */ (function (_super) {
    __extends(NgxDatatableLocalDataWithInlineSearch, _super);
    function NgxDatatableLocalDataWithInlineSearch() {
        var _this = _super.call(this) || this;
        _this.SelectionType = SelectionType;
        // Support selected
        _this.selected = [];
        // Suport editing
        _this.editing = {};
        _this.backup = {};
        return _this;
    }
    NgxDatatableLocalDataWithInlineSearch.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    NgxDatatableLocalDataWithInlineSearch.prototype.startAdd = function () { };
    NgxDatatableLocalDataWithInlineSearch.prototype.startEdit = function (rowIndex) { };
    // Support editing an existing one and adding a new one
    NgxDatatableLocalDataWithInlineSearch.prototype.cancelEdit = function (rowIndex) { };
    ;
    NgxDatatableLocalDataWithInlineSearch.prototype.confirmEditAsync = function (rowIndex) {
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
    NgxDatatableLocalDataWithInlineSearch.prototype.updateValue = function (event, prop, rowIndex) { };
    NgxDatatableLocalDataWithInlineSearch.prototype.cleanEditing = function (rowIndex) { };
    NgxDatatableLocalDataWithInlineSearch.prototype.rmAsync = function () {
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
    NgxDatatableLocalDataWithInlineSearch.prototype.startObserveSearchKeyword = function () { };
    NgxDatatableLocalDataWithInlineSearch.prototype.stopObserveSearchKeyword = function () { };
    return NgxDatatableLocalDataWithInlineSearch;
}(NgxDatatablePoweredBase));
export { NgxDatatableLocalDataWithInlineSearch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1sb2NhbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWxvY2FsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQTBGLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSwrREFBK0Q7QUFDL0Q7SUFDWSx5Q0FBMEI7SUFjbEM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFkRCxtQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixtQkFBbUI7UUFDbkIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixpQkFBaUI7UUFDakIsYUFBTyxHQUErQixFQUFFLENBQUM7UUFDekMsWUFBTSxHQUF5QixFQUFFLENBQUM7O0lBUWxDLENBQUM7SUFJRCx3Q0FBUSxHQUFSLFVBQVMsRUFBWTtZQUFWLHNCQUFRO0lBQU0sQ0FBQztJQUUxQix3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHlDQUFTLEdBQVQsVUFBVSxRQUFnQixJQUFJLENBQUM7SUFFL0IsdURBQXVEO0lBQ3ZELDBDQUFVLEdBQVYsVUFBVyxRQUFnQixJQUFJLENBQUM7SUFBQSxDQUFDO0lBRzNCLGdEQUFnQixHQUF0QixVQUF1QixRQUFnQjs7Ozs0QkFDbkMscUJBQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzs7Ozs7S0FDL0I7SUFFRCwyQ0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLElBQVksRUFBRSxRQUFnQixJQUFJLENBQUM7SUFFM0QsNENBQVksR0FBWixVQUFhLFFBQWdCLElBQUksQ0FBQztJQUU1Qix1Q0FBTyxHQUFiOzs7OzRCQUNJLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQzNCO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBMUNELENBQ1ksdUJBQXVCLEdBeUNsQzs7QUFJRDtJQUNZLHlEQUEwQjtJQW1CbEM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFuQkQsbUJBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsbUJBQW1CO1FBQ25CLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO1FBQ2pCLGFBQU8sR0FBK0IsRUFBRSxDQUFDO1FBQ3pDLFlBQU0sR0FBeUIsRUFBRSxDQUFDOztJQWFsQyxDQUFDO0lBSUQsd0RBQVEsR0FBUixVQUFTLEVBQVk7WUFBVixzQkFBUTtJQUFNLENBQUM7SUFFMUIsd0RBQVEsR0FBUixjQUFhLENBQUM7SUFFZCx5REFBUyxHQUFULFVBQVUsUUFBZ0IsSUFBSSxDQUFDO0lBRS9CLHVEQUF1RDtJQUN2RCwwREFBVSxHQUFWLFVBQVcsUUFBZ0IsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUczQixnRUFBZ0IsR0FBdEIsVUFBdUIsUUFBZ0I7Ozs7NEJBQ25DLHFCQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7Ozs7O0tBQy9CO0lBRUQsMkRBQVcsR0FBWCxVQUFZLEtBQVUsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsSUFBSSxDQUFDO0lBRTNELDREQUFZLEdBQVosVUFBYSxRQUFnQixJQUFJLENBQUM7SUFFNUIsdURBQU8sR0FBYjs7Ozs0QkFDSSxxQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDOzs7OztLQUMzQjtJQUVELDRCQUE0QjtJQUM1Qix5RUFBeUIsR0FBekIsY0FBb0MsQ0FBQztJQUNyQyx3RUFBd0IsR0FBeEIsY0FBbUMsQ0FBQztJQUl4Qyw0Q0FBQztBQUFELENBQUMsQUF0REQsQ0FDWSx1QkFBdUIsR0FxRGxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElOZ3hOb3R5IH0gZnJvbSAnQHBvbHB3YXJlL25neC1ub3R5JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgSVJvd0RhdGFUeXBlLCBJU2VhcmNoQ2FwYWJpbHR5QnVpbGRlciwgSVRhYmxlRGF0YUNoYW5nZUV2ZW50LCBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2UsIG5vb3BQcm9taXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IE5neERhdGF0YWJsZVBvd2VyZWRCYXNlIH0gZnJvbSAnLi9uZ3gtZGF0YXRhYmxlLXBvd2VyZWQtYmFzZSc7XHJcblxyXG4vLyBEZXJ2aWVkIGNsYXNzZXMgbXVzdCB1c2UgZGVjb3JhdG9yIHRvIHByb3ZpZGUgaW1wbGVtZW50YXRpb25cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUxvY2FsRGF0YTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiBpbXBsZW1lbnRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiB7XHJcblxyXG4gICAgU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGU7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+ID0gW107XHJcbiAgICAvLyBTdXBvcnQgZWRpdGluZ1xyXG4gICAgZWRpdGluZzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgIGJhY2t1cDogeyBba2V5OiBudW1iZXJdOiBUIH0gPSB7fTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuXHJcblxyXG4gICAgYWJzdHJhY3Qgbm90eTogSU5neE5vdHk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBwdWJsaXNoKGV2ZW50OiBJVGFibGVEYXRhQ2hhbmdlRXZlbnQpOiB2b2lkO1xyXG5cclxuICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkgeyB9XHJcblxyXG4gICAgc3RhcnRBZGQoKSB7IH1cclxuXHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7IH07XHJcblxyXG5cclxuICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKHJvd0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYWx1ZShldmVudDogYW55LCBwcm9wOiBzdHJpbmcsIHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBhc3luYyBybUFzeW5jKCkge1xyXG4gICAgICAgIGF3YWl0IG5vb3BQcm9taXNlKG51bGwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVMb2NhbERhdGFXaXRoSW5saW5lU2VhcmNoPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQ+IGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+LCBJU2VhcmNoQ2FwYWJpbHR5QnVpbGRlciB7XHJcblxyXG4gICAgU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGU7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+ID0gW107XHJcbiAgICAvLyBTdXBvcnQgZWRpdGluZ1xyXG4gICAgZWRpdGluZzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgIGJhY2t1cDogeyBba2V5OiBudW1iZXJdOiBUIH0gPSB7fTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuXHJcblxyXG4gICAgYWJzdHJhY3Qgbm90eTogSU5neE5vdHk7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBmb3IgbG9jYWwgZmlsdGVyc1xyXG4gICAgYWJzdHJhY3Qgc2VhcmNoQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgICBhbnlGdXR1cmVLZXl3b3JkOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgcHVibGlzaChldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KTogdm9pZDtcclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdXBwb3J0IGZvciBsb2NhbCBmaWx0ZXJzXHJcbiAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCk6IHZvaWQgeyB9XHJcbiAgICBzdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTogdm9pZCB7IH1cclxuICAgIGFic3RyYWN0IGNhbmNlbFR5cGVkS2V5d29yZCgpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3Qga2lja09mZlNlYXJjaCgpOiB2b2lkO1xyXG5cclxufVxyXG4iXX0=