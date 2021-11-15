import { __awaiter } from "tslib";
import { SelectionType } from '@swimlane/ngx-datatable';
import { noopPromise } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
export class NgxDatatableExternalData extends NgxDatatablePoweredBase {
    constructor() {
        super();
    }
    onPageChanged(evt) {
        this.buildTableDataAsync(evt.offset);
    }
    refresh() {
        // The other settings stay the same.
        this.buildTableDataAsync(0);
    }
}
export class NgxDatatableExternalDataWithOperations extends NgxDatatableExternalData {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1leHRlcm5hbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLWV4dGVybmFsLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWdGLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxNQUFNLE9BQWdCLHdCQUNsQixTQUFRLHVCQUEwQjtJQUVsQztRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUlELGFBQWEsQ0FBQyxHQUFzQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPO1FBQ0gsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBSUo7QUFFRCxNQUFNLE9BQWdCLHNDQUNsQixTQUFRLHdCQUEyQjtJQWNuQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBWlosa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFFOUIsbUJBQW1CO1FBQ25CLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO1FBQ2pCLFlBQU8sR0FBK0IsRUFBRSxDQUFDO1FBQ3pDLFdBQU0sR0FBeUIsRUFBRSxDQUFDO0lBT2xDLENBQUM7SUFHRCxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBRTFCLFFBQVEsS0FBSyxDQUFDO0lBRWQsU0FBUyxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUUvQix1REFBdUQ7SUFDdkQsVUFBVSxDQUFDLFFBQWdCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHM0IsZ0JBQWdCLENBQUMsUUFBZ0I7O1lBQ25DLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxLQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLElBQUksQ0FBQztJQUUzRCxZQUFZLENBQUMsUUFBZ0IsSUFBSSxDQUFDO0lBRTVCLE9BQU87O1lBQ1QsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xyXG5pbXBvcnQgeyBJUGFnZUNoYW5nZWRFdmVudCwgSVJvd0RhdGFUeXBlLCBJU29ydENoYW5nZWRFdmVudCwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlLCBub29wUHJvbWlzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZSB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxyXG4gICAgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnVpbGRUYWJsZURhdGFBc3luYyhwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8YW55PjtcclxuXHJcbiAgICBvblBhZ2VDaGFuZ2VkKGV2dDogSVBhZ2VDaGFuZ2VkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVEYXRhQXN5bmMoZXZ0Lm9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICAvLyBUaGUgb3RoZXIgc2V0dGluZ3Mgc3RheSB0aGUgc2FtZS5cclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVEYXRhQXN5bmMoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3Qgb25Tb3J0Q2hhbmdlZChldnQ6IElTb3J0Q2hhbmdlZEV2ZW50KTogYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YVdpdGhPcGVyYXRpb25zPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XHJcbiAgICBleHRlbmRzIE5neERhdGF0YWJsZUV4dGVybmFsRGF0YTxUPlxyXG4gICAgaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgIFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPiA9IFtdO1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICBiYWNrdXA6IHsgW2tleTogbnVtYmVyXTogVCB9ID0ge307XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHsgfVxyXG5cclxuICAgIHN0YXJ0QWRkKCkgeyB9XHJcblxyXG4gICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHsgfVxyXG5cclxuICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikgeyB9O1xyXG5cclxuXHJcbiAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShyb3dJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7IH1cclxuXHJcbiAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikgeyB9XHJcblxyXG4gICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICBhd2FpdCBub29wUHJvbWlzZShudWxsKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19