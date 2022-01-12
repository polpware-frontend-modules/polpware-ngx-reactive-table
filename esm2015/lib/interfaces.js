export const noopPromise = (data) => new Promise((resolve, reject) => {
    resolve(data);
});
export const deletePromise = (data) => new Promise((resolve, reject) => {
    resolve();
});
export const createPromise = (data) => new Promise((resolve, reject) => {
    const newData = Object.assign({}, data, { id: new Date().getTime() });
    resolve(newData);
});
export const updatePromise = (data) => new Promise((resolve, reject) => {
    const newData = Object.assign({}, data);
    resolve(newData);
});
export const defaultSettings = {
    pageSize: 40,
    canCreate: false,
    canUpdate: false,
    canDelete: false,
    createAsyncHandler: createPromise,
    updateAsyncHandler: updatePromise,
    deleteAsyncHandler: deletePromise
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkEsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN0RSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUF5QixFQUFFLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN4RixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrRCxDQUFDLElBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ2hJLE1BQU0sT0FBTyxHQUFpQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrRCxDQUFDLElBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ2hJLE1BQU0sT0FBTyxHQUFpQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQXVCO0lBQy9DLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLEtBQUs7SUFDaEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsa0JBQWtCLEVBQUUsYUFBYTtJQUNqQyxrQkFBa0IsRUFBRSxhQUFhO0lBQ2pDLGtCQUFrQixFQUFFLGFBQWE7Q0FDcEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5neE5vdHkgfSBmcm9tICdAcG9scHdhcmUvbmd4LW5vdHknO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xyXG5cclxuZXhwb3J0IHR5cGUgSHRtbElucHV0VHlwZUVudW0gPSAndGV4dCcgfCAndGVsJyB8ICdlbWFpbCcgfCAnZGF0ZScgfCAnbnVtYmVyJyB8ICdjaGVja2JveCcgfCAnZmlsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSb3dEYXRhVHlwZSB7XHJcbiAgICBpZDogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFNldHRpbmdzIHtcclxuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xyXG4gICAgY2FuQ3JlYXRlPzogYm9vbGVhbjtcclxuICAgIGNhblVwZGF0ZT86IGJvb2xlYW47XHJcbiAgICBjYW5EZWxldGU/OiBib29sZWFuO1xyXG4gICAgY3JlYXRlQXN5bmNIYW5kbGVyPzogKGRhdGE6IElSb3dEYXRhVHlwZSkgPT4gUHJvbWlzZTxJUm93RGF0YVR5cGU+O1xyXG4gICAgZGVsZXRlQXN5bmNIYW5kbGVyPzogKGRhdGE6IEFycmF5PElSb3dEYXRhVHlwZT4pID0+IFByb21pc2U8YW55PjtcclxuICAgIHVwZGF0ZUFzeW5jSGFuZGxlcj86IChkYXRhOiBJUm93RGF0YVR5cGUpID0+IFByb21pc2U8SVJvd0RhdGFUeXBlPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vb3BQcm9taXNlID0gKGRhdGE6IGFueSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmVzb2x2ZShkYXRhKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvbWlzZSA9IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICByZXNvbHZlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb21pc2U6IChkYXRhOiBJUm93RGF0YVR5cGUpID0+IFByb21pc2U8SVJvd0RhdGFUeXBlPiA9IChkYXRhOiBJUm93RGF0YVR5cGUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGE6IElSb3dEYXRhVHlwZSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHsgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pO1xyXG4gICAgcmVzb2x2ZShuZXdEYXRhKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvbWlzZTogKGRhdGE6IElSb3dEYXRhVHlwZSkgPT4gUHJvbWlzZTxJUm93RGF0YVR5cGU+ID0gKGRhdGE6IElSb3dEYXRhVHlwZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YTogSVJvd0RhdGFUeXBlID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XHJcbiAgICByZXNvbHZlKG5ld0RhdGEpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2V0dGluZ3M6IElDb21wb25lbnRTZXR0aW5ncyA9IHtcclxuICAgIHBhZ2VTaXplOiA0MCxcclxuICAgIGNhbkNyZWF0ZTogZmFsc2UsXHJcbiAgICBjYW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgY2FuRGVsZXRlOiBmYWxzZSxcclxuICAgIGNyZWF0ZUFzeW5jSGFuZGxlcjogY3JlYXRlUHJvbWlzZSxcclxuICAgIHVwZGF0ZUFzeW5jSGFuZGxlcjogdXBkYXRlUHJvbWlzZSxcclxuICAgIGRlbGV0ZUFzeW5jSGFuZGxlcjogZGVsZXRlUHJvbWlzZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtblNwZWMge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHByb3A/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIG1heFdpZHRoPzogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgICBjYW5BdXRvUmVzaXplPzogYm9vbGVhbjtcclxuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbjtcclxuICAgIGhlYWRlckNoZWNrYm94YWJsZT86IGJvb2xlYW47XHJcbiAgICBjaGVja2JveGFibGU/OiBib29sZWFuO1xyXG4gICAgc29ydGFibGU/OiBib29sZWFuO1xyXG4gICAgaGVhZGVyVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgY2VsbFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIGhlYWRlckNsYXNzPzogc3RyaW5nO1xyXG4gICAgY2VsbENsYXNzPzogc3RyaW5nO1xyXG4gICAgZWRpdGFibGU/OiBib29sZWFuOyAvLyBlZGl0YWJsZSwgbm90IHBhcnQgb2YgdGhlIG5neCBkYXRhdGFibGVcclxuICAgIGlucHV0VHlwZT86IEh0bWxJbnB1dFR5cGVFbnVtO1xyXG4gICAgZnJvemVuTGVmdD86IGJvb2xlYW47XHJcbiAgICBmcm96ZW5SaWdodD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvcnRhYmxlQ29sdW1uIHtcclxuICAgIHByb3A6IHN0cmluZztcclxuICAgIGRpcjogJ2FzYycgfCAnZGVzYyc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvcnRDaGFuZ2VkRXZlbnQge1xyXG4gICAgY29sdW1uOiB7XHJcbiAgICAgICAgcHJvcDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIG5ld1ZhbHVlOiAnYXNjJyB8ICdkZXNjJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNoYW5nZWRFdmVudCB7XHJcbiAgICBvZmZzZXQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPiB7XHJcblxyXG4gICAgZGF0YXRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgc2V0dGluZ3M6IElDb21wb25lbnRTZXR0aW5ncztcclxuXHJcbiAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPjtcclxuXHJcbiAgICByb3dzOiBBcnJheTxUPjtcclxuXHJcbiAgICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgICB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgICBwYWdlSW5kZXg6IG51bWJlcjsgLy8gcGFnZSBpbmRleFxyXG5cclxuICAgIHNvcnRpbmdLZXk6IHN0cmluZztcclxuICAgIC8vIERlc2NyaWJlIHRoZSBpbml0IHNvcnRpbmcgb3JkZXIuXHJcbiAgICBzb3J0czogQXJyYXk8SVNvcnRhYmxlQ29sdW1uPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVEYXRhQ2hhbmdlRXZlbnQge1xyXG4gICAgb3A6ICdjcmVhdGUnIHwgJ2RlbGV0ZScgfCAndXBkYXRlJyB8ICcnLFxyXG4gICAgZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPiB8IElSb3dEYXRhVHlwZSxcclxuICAgIHJvd3M6IEFycmF5PElSb3dEYXRhVHlwZT5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gZXh0ZW5kcyBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUPiB7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+O1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgYmFja3VwOiB7IFtrZXk6IG51bWJlcl06IFQgfTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIHB1Ymxpc2goZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCk6IHZvaWQ7XHJcbiAgICBvblNlbGVjdChkYXRhOiB7IHNlbGVjdGVkOiBBcnJheTxUPiB9KTogdm9pZDtcclxuICAgIHN0YXJ0QWRkKCk6IHZvaWQ7XHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIHJtQXN5bmMoKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIYXNMb2NhbEZpbHRlciB7XHJcbiAgICAvLyBTZWFyY2ggY29udHJvbCBpbnB1dFxyXG4gICAgc2VhcmNoQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgcHJvcGVydHkgdHJhY2tzIGlmIHRoZXJlIGlzIGFueSBrZXl3b3JkIFxyXG4gICAgLy8gd2hpY2ggbWF5IGJlIGFwcGxpZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgIC8vIEUuZy4sIHRob3VnaCB0aGVyZSBpcyBhIGtleXdvcmQgaW4gZWZmZWN0LFxyXG4gICAgLy8gYSB1c2VyIG1heSBlbnRlciBuZXcga2V5d29yZCBpbiB0aGUgc2VhcmNoIGlucHV0IGNvbnRyb2xcclxuICAgIC8vIGFuZCB0aGUgbmV3IHZhbHVlIGlzIG5vdCBlcXVhbCB0byB0aGUgY3VycmVudCBlZmZlY3RpdmVcclxuICAgIC8vIGtleXdvcmQuIEluIHRoaXMgY2FzZSwgYW55RnV0dXJlS2V5d29yZCB0ZWxscyB0aGUgbmV3IHZhbHVlLiBcclxuICAgIGFueUZ1dHVyZUtleXdvcmQ6IHN0cmluZztcclxuXHJcbiAgICAvLyBTdGFydCB0byBsaXN0ZW4gZm9yIHNlYXJjaCBrZXl3b3JkIGNoYW5nZVxyXG4gICAgc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpOiB2b2lkO1xyXG5cclxuICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpOiB2b2lkO1xyXG5cclxuICAgIC8vIENhbmNlbCB0eXBlZCBrZXl3b3JkIGFuZFxyXG4gICAgLy8gcmVzZXQgdG8gd2hhdGV2ZXIgdGhlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAvL1xyXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gZG9lcyBub3QgY2F1c2UgbmV3IG5ldHdvcmsgcmVxdWVzdC5cclxuICAgIGNhbmNlbFR5cGVkS2V5d29yZCgpOiB2b2lkO1xyXG5cclxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cclxuICAgIGtpY2tPZmZTZWFyY2goKTogdm9pZDtcclxufVxyXG4iXX0=