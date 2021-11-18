export const noopPromise = (data) => new Promise((resolve, reject) => {
    resolve(data);
});
export const rmPromise = (data) => new Promise((resolve, reject) => {
    resolve();
});
export const addOrEditPromise = (data) => new Promise((resolve, reject) => {
    const newData = Object.assign(data, { id: new Date().getTime() });
    resolve(newData);
});
export const defaultSettings = {
    pageSize: 40,
    editable: false,
    rmAsyncHandler: rmPromise,
    addOrEditAsyncHandler: addOrEditPromise
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkEsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN0RSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUF5QixFQUFFLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNwRixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtELENBQUMsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkksTUFBTSxPQUFPLEdBQWlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBdUI7SUFDL0MsUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsS0FBSztJQUNmLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLHFCQUFxQixFQUFFLGdCQUFnQjtDQUMxQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTmd4Tm90eSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgSHRtbElucHV0VHlwZUVudW0gPSAndGV4dCcgfCAndGVsJyB8ICdlbWFpbCcgfCAnZGF0ZScgfCAnbnVtYmVyJyB8ICdjaGVja2JveCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSb3dEYXRhVHlwZSB7XHJcbiAgICBpZDogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFNldHRpbmdzIHtcclxuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xyXG4gICAgZWRpdGFibGU/OiBib29sZWFuO1xyXG4gICAgcm1Bc3luY0hhbmRsZXI/OiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTxhbnk+O1xyXG4gICAgYWRkT3JFZGl0QXN5bmNIYW5kbGVyPzogKGRhdGE6IElSb3dEYXRhVHlwZSkgPT4gUHJvbWlzZTxJUm93RGF0YVR5cGU+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm9vcFByb21pc2UgPSAoZGF0YTogYW55KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICByZXNvbHZlKGRhdGEpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBybVByb21pc2UgPSAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmVzb2x2ZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRPckVkaXRQcm9taXNlOiAoZGF0YTogSVJvd0RhdGFUeXBlKSA9PiBQcm9taXNlPElSb3dEYXRhVHlwZT4gPSAoZGF0YTogSVJvd0RhdGFUeXBlKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhOiBJUm93RGF0YVR5cGUgPSBPYmplY3QuYXNzaWduKGRhdGEsIHsgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pO1xyXG4gICAgcmVzb2x2ZShuZXdEYXRhKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXR0aW5nczogSUNvbXBvbmVudFNldHRpbmdzID0ge1xyXG4gICAgcGFnZVNpemU6IDQwLFxyXG4gICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgcm1Bc3luY0hhbmRsZXI6IHJtUHJvbWlzZSxcclxuICAgIGFkZE9yRWRpdEFzeW5jSGFuZGxlcjogYWRkT3JFZGl0UHJvbWlzZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtblNwZWMge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHByb3A/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIG1heFdpZHRoPzogbnVtYmVyO1xyXG4gICAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgICBjYW5BdXRvUmVzaXplPzogYm9vbGVhbjtcclxuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbjtcclxuICAgIGhlYWRlckNoZWNrYm94YWJsZT86IGJvb2xlYW47XHJcbiAgICBjaGVja2JveGFibGU/OiBib29sZWFuO1xyXG4gICAgc29ydGFibGU/OiBib29sZWFuO1xyXG4gICAgaGVhZGVyVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgY2VsbFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIGhlYWRlckNsYXNzPzogc3RyaW5nO1xyXG4gICAgY2VsbENsYXNzPzogc3RyaW5nO1xyXG4gICAgZWRpdGFibGU/OiBib29sZWFuOyAvLyBlZGl0YWJsZSwgbm90IHBhcnQgb2YgdGhlIG5neCBkYXRhdGFibGVcclxuICAgIGlucHV0VHlwZT86IEh0bWxJbnB1dFR5cGVFbnVtO1xyXG4gICAgZnJvemVuTGVmdD86IGJvb2xlYW47XHJcbiAgICBmcm96ZW5SaWdodD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvcnRhYmxlQ29sdW1uIHtcclxuICAgIHByb3A6IHN0cmluZztcclxuICAgIGRpcjogJ2FzYycgfCAnZGVzYyc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvcnRDaGFuZ2VkRXZlbnQge1xyXG4gICAgY29sdW1uOiB7XHJcbiAgICAgICAgcHJvcDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIG5ld1ZhbHVlOiAnYXNjJyB8ICdkZXNjJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNoYW5nZWRFdmVudCB7XHJcbiAgICBvZmZzZXQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPiB7XHJcbiAgICBzZXR0aW5nczogSUNvbXBvbmVudFNldHRpbmdzO1xyXG5cclxuICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtblNwZWM+O1xyXG5cclxuICAgIHJvd3M6IEFycmF5PFQ+O1xyXG5cclxuICAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgICBsb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICAgIHRvdGFsQ291bnQ6IG51bWJlcjtcclxuICAgIHBhZ2VJbmRleDogbnVtYmVyOyAvLyBwYWdlIGluZGV4XHJcblxyXG4gICAgc29ydGluZ0tleTogc3RyaW5nO1xyXG4gICAgLy8gRGVzY3JpYmUgdGhlIGluaXQgc29ydGluZyBvcmRlci5cclxuICAgIHNvcnRzOiBBcnJheTxJU29ydGFibGVDb2x1bW4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZURhdGFDaGFuZ2VFdmVudCB7XHJcbiAgICBvcDogJ2FkZE9yRWRpdCcgfCAncm0nLFxyXG4gICAgZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPiB8IElSb3dEYXRhVHlwZSxcclxuICAgIHJvd3M6IEFycmF5PElSb3dEYXRhVHlwZT5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gZXh0ZW5kcyBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUPiB7XHJcblxyXG4gICAgLy8gU3VwcG9ydCBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IEFycmF5PFQ+O1xyXG4gICAgLy8gU3Vwb3J0IGVkaXRpbmdcclxuICAgIGVkaXRpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgYmFja3VwOiB7IFtrZXk6IG51bWJlcl06IFQgfTtcclxuXHJcbiAgICBhbnlFZGl0aW5nOiBib29sZWFuO1xyXG5cclxuICAgIG5vdHk6IElOZ3hOb3R5O1xyXG5cclxuICAgIHB1Ymxpc2goZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCk6IHZvaWQ7XHJcbiAgICBvblNlbGVjdChkYXRhOiB7IHNlbGVjdGVkOiBBcnJheTxUPiB9KTogdm9pZDtcclxuICAgIHN0YXJ0QWRkKCk6IHZvaWQ7XHJcbiAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIHJtQXN5bmMoKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIYXNMb2NhbEZpbHRlciB7XHJcbiAgICAvLyBTZWFyY2ggY29udHJvbCBpbnB1dFxyXG4gICAgc2VhcmNoQ29udHJvbDogRm9ybUNvbnRyb2w7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgcHJvcGVydHkgdHJhY2tzIGlmIHRoZXJlIGlzIGFueSBrZXl3b3JkIFxyXG4gICAgLy8gd2hpY2ggbWF5IGJlIGFwcGxpZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgIC8vIEUuZy4sIHRob3VnaCB0aGVyZSBpcyBhIGtleXdvcmQgaW4gZWZmZWN0LFxyXG4gICAgLy8gYSB1c2VyIG1heSBlbnRlciBuZXcga2V5d29yZCBpbiB0aGUgc2VhcmNoIGlucHV0IGNvbnRyb2xcclxuICAgIC8vIGFuZCB0aGUgbmV3IHZhbHVlIGlzIG5vdCBlcXVhbCB0byB0aGUgY3VycmVudCBlZmZlY3RpdmVcclxuICAgIC8vIGtleXdvcmQuIEluIHRoaXMgY2FzZSwgYW55RnV0dXJlS2V5d29yZCB0ZWxscyB0aGUgbmV3IHZhbHVlLiBcclxuICAgIGFueUZ1dHVyZUtleXdvcmQ6IHN0cmluZztcclxuXHJcbiAgICAvLyBTdGFydCB0byBsaXN0ZW4gZm9yIHNlYXJjaCBrZXl3b3JkIGNoYW5nZVxyXG4gICAgc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpOiB2b2lkO1xyXG5cclxuICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpOiB2b2lkO1xyXG5cclxuICAgIC8vIENhbmNlbCB0eXBlZCBrZXl3b3JkIGFuZFxyXG4gICAgLy8gcmVzZXQgdG8gd2hhdGV2ZXIgdGhlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAvL1xyXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gZG9lcyBub3QgY2F1c2UgbmV3IG5ldHdvcmsgcmVxdWVzdC5cclxuICAgIGNhbmNlbFR5cGVkS2V5d29yZCgpOiB2b2lkO1xyXG5cclxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cclxuICAgIGtpY2tPZmZTZWFyY2goKTogdm9pZDtcclxufVxyXG4iXX0=