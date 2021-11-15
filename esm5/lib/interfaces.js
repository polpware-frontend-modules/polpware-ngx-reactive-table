export var noopPromise = function (data) { return new Promise(function (resolve, reject) {
    resolve(data);
}); };
export var rmPromise = function (data) { return new Promise(function (resolve, reject) {
    resolve();
}); };
export var addOrEditPromise = function (data) { return new Promise(function (resolve, reject) {
    var newData = Object.assign(data, { id: new Date().getTime() });
    resolve(newData);
}); };
export var defaultSettings = {
    pageSize: 40,
    editable: false,
    rmAsyncHandler: rmPromise,
    addOrEditAsyncHandler: addOrEditPromise
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtJQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLEVBRndDLENBRXhDLENBQUM7QUFFSCxNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUF5QixJQUFLLE9BQUEsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtJQUNoRixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxFQUZzRCxDQUV0RCxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQWtELFVBQUMsSUFBa0IsSUFBSyxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07SUFDL0gsSUFBTSxPQUFPLEdBQWlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsRUFIcUcsQ0FHckcsQ0FBQztBQUdILE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBdUI7SUFDL0MsUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsS0FBSztJQUNmLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLHFCQUFxQixFQUFFLGdCQUFnQjtDQUMxQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuXHJcbmV4cG9ydCB0eXBlIEh0bWxJbnB1dFR5cGVFbnVtID0gJ3RleHQnIHwgJ3RlbCcgfCAnZW1haWwnIHwgJ2RhdGUnIHwgJ251bWJlcicgfCAnY2hlY2tib3gnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUm93RGF0YVR5cGUge1xyXG4gICAgaWQ6IGFueVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRTZXR0aW5ncyB7XHJcbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcclxuICAgIGVkaXRhYmxlPzogYm9vbGVhbjtcclxuICAgIHJtQXN5bmNIYW5kbGVyPzogKGRhdGE6IEFycmF5PElSb3dEYXRhVHlwZT4pID0+IFByb21pc2U8YW55PjtcclxuICAgIGFkZE9yRWRpdEFzeW5jSGFuZGxlcj86IChkYXRhOiBJUm93RGF0YVR5cGUpID0+IFByb21pc2U8SVJvd0RhdGFUeXBlPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vb3BQcm9taXNlID0gKGRhdGE6IGFueSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmVzb2x2ZShkYXRhKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgcm1Qcm9taXNlID0gKGRhdGE6IEFycmF5PElSb3dEYXRhVHlwZT4pID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHJlc29sdmUoKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkT3JFZGl0UHJvbWlzZTogKGRhdGE6IElSb3dEYXRhVHlwZSkgPT4gUHJvbWlzZTxJUm93RGF0YVR5cGU+ID0gKGRhdGE6IElSb3dEYXRhVHlwZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YTogSVJvd0RhdGFUeXBlID0gT2JqZWN0LmFzc2lnbihkYXRhLCB7IGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KTtcclxuICAgIHJlc29sdmUobmV3RGF0YSk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2V0dGluZ3M6IElDb21wb25lbnRTZXR0aW5ncyA9IHtcclxuICAgIHBhZ2VTaXplOiA0MCxcclxuICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgIHJtQXN5bmNIYW5kbGVyOiBybVByb21pc2UsXHJcbiAgICBhZGRPckVkaXRBc3luY0hhbmRsZXI6IGFkZE9yRWRpdFByb21pc2VcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW5TcGVjIHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBwcm9wPzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBtYXhXaWR0aD86IG51bWJlcjtcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gICAgY2FuQXV0b1Jlc2l6ZT86IGJvb2xlYW47XHJcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xyXG4gICAgcmVzaXplYWJsZT86IGJvb2xlYW47XHJcbiAgICBoZWFkZXJDaGVja2JveGFibGU/OiBib29sZWFuO1xyXG4gICAgY2hlY2tib3hhYmxlPzogYm9vbGVhbjtcclxuICAgIHNvcnRhYmxlPzogYm9vbGVhbjtcclxuICAgIGhlYWRlclRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIGNlbGxUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBoZWFkZXJDbGFzcz86IHN0cmluZztcclxuICAgIGNlbGxDbGFzcz86IHN0cmluZztcclxuICAgIGVkaXRhYmxlPzogYm9vbGVhbjsgLy8gZWRpdGFibGUsIG5vdCBwYXJ0IG9mIHRoZSBuZ3ggZGF0YXRhYmxlXHJcbiAgICBpbnB1dFR5cGU/OiBIdG1sSW5wdXRUeXBlRW51bTtcclxuICAgIGZyb3plbkxlZnQ/OiBib29sZWFuO1xyXG4gICAgZnJvemVuUmlnaHQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTb3J0YWJsZUNvbHVtbiB7XHJcbiAgICBwcm9wOiBzdHJpbmc7XHJcbiAgICBkaXI6ICdhc2MnIHwgJ2Rlc2MnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTb3J0Q2hhbmdlZEV2ZW50IHtcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIHByb3A6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBuZXdWYWx1ZTogJ2FzYycgfCAnZGVzYyc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDaGFuZ2VkRXZlbnQge1xyXG4gICAgb2Zmc2V0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlYWN0aXZlRGF0YWJsZUJhc2U8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4ge1xyXG4gICAgc2V0dGluZ3M6IElDb21wb25lbnRTZXR0aW5ncztcclxuXHJcbiAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPjtcclxuXHJcbiAgICByb3dzOiBBcnJheTxUPjtcclxuXHJcbiAgICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgICB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgICBwYWdlSW5kZXg6IG51bWJlcjsgLy8gcGFnZSBpbmRleFxyXG5cclxuICAgIHNvcnRpbmdLZXk6IHN0cmluZztcclxuICAgIC8vIERlc2NyaWJlIHRoZSBpbml0IHNvcnRpbmcgb3JkZXIuXHJcbiAgICBzb3J0czogQXJyYXk8SVNvcnRhYmxlQ29sdW1uPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gZXh0ZW5kcyBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUPiB7XHJcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xyXG5cclxuICAgIC8vIFN1cHBvcnQgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBBcnJheTxUPjtcclxuICAgIC8vIFN1cG9ydCBlZGl0aW5nXHJcbiAgICBlZGl0aW5nOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIGJhY2t1cDogeyBba2V5OiBudW1iZXJdOiBUIH07XHJcblxyXG4gICAgYW55RWRpdGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBvblNlbGVjdChkYXRhOiB7IHNlbGVjdGVkOiBBcnJheTxUPiB9KTogdm9pZDtcclxuICAgIHN0YXJ0QWRkKCk6IHZvaWQ7XHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIHJtQXN5bmMoKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcbiJdfQ==