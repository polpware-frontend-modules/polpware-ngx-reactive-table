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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1leHRlcm5hbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWV4dGVybmFsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWdGLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQUNZLDRDQUEwQjtJQUVsQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUlELGdEQUFhLEdBQWIsVUFBYyxHQUFzQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBSUwsK0JBQUM7QUFBRCxDQUFDLEFBcEJELENBQ1ksdUJBQXVCLEdBbUJsQzs7QUFFRDtJQUNZLDBEQUEyQjtJQWNuQztRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQWJELG1CQUFhLEdBQUcsYUFBYSxDQUFDOztJQWE5QixDQUFDO0lBR0QseURBQVEsR0FBUixVQUFTLEVBQVk7WUFBVixzQkFBUTtJQUFNLENBQUM7SUFFMUIseURBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwwREFBUyxHQUFULFVBQVUsUUFBZ0IsSUFBSSxDQUFDO0lBRS9CLHVEQUF1RDtJQUN2RCwyREFBVSxHQUFWLFVBQVcsUUFBZ0IsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUczQixpRUFBZ0IsR0FBdEIsVUFBdUIsUUFBZ0I7Ozs7NEJBQ25DLHFCQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7Ozs7O0tBQy9CO0lBRUQsNERBQVcsR0FBWCxVQUFZLEtBQVUsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsSUFBSSxDQUFDO0lBRTNELDZEQUFZLEdBQVosVUFBYSxRQUFnQixJQUFJLENBQUM7SUFFNUIsd0RBQU8sR0FBYjs7Ozs0QkFDSSxxQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDOzs7OztLQUMzQjtJQUVMLDZDQUFDO0FBQUQsQ0FBQyxBQTFDRCxDQUNZLHdCQUF3QixHQXlDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBJUGFnZUNoYW5nZWRFdmVudCwgSVJvd0RhdGFUeXBlLCBJU29ydENoYW5nZWRFdmVudCwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlLCBub29wUHJvbWlzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZSB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnVpbGRUYWJsZURhdGFBc3luYyhwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8YW55PjtcclxuXHJcbiAgICBvblBhZ2VDaGFuZ2VkKGV2dDogSVBhZ2VDaGFuZ2VkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVEYXRhQXN5bmMoZXZ0Lm9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICAvLyBUaGUgb3RoZXIgc2V0dGluZ3Mgc3RheSB0aGUgc2FtZS5cclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVEYXRhQXN5bmMoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3Qgb25Tb3J0Q2hhbmdlZChldnQ6IElTb3J0Q2hhbmdlZEV2ZW50KTogYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YVdpdGhPcGVyYXRpb25zPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YTxUPlxyXG4gICAgaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPjtcclxuICAgIC8vIFN1cG9ydCBlZGl0aW5nXHJcbiAgICBlZGl0aW5nOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIGJhY2t1cDogeyBba2V5OiBudW1iZXJdOiBUIH07XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19