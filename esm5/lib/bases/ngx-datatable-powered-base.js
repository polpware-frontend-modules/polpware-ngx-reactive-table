import { ColumnMode } from '@swimlane/ngx-datatable';
import { defaultSettings } from '../interfaces';
var NgxDatatablePoweredBase = /** @class */ (function () {
    function NgxDatatablePoweredBase() {
        // Note that we do not make settings be an input,
        // becasue the behavior of an input in the abstract base class is not well-defined
        // Sometime, it works  and sometimes it causes compilation errors.
        this.settings = defaultSettings;
        this.ColumnMode = ColumnMode;
        this.columns = [];
        this.rows = [];
        this.pageSize = defaultSettings.pageSize;
        this.loading = false;
        this.totalCount = 0;
        this.pageIndex = 0; // page index
        // We on purpose put the basic for sorting here, because they are required in
        // supporting operations. 
        // Sorting 
        this.sortingKey = '';
        // Describe the init sorting order.
        this.sorts = [];
    }
    return NgxDatatablePoweredBase;
}());
export { NgxDatatablePoweredBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2Jhc2VzL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUE2RixNQUFNLGVBQWUsQ0FBQztBQUUzSTtJQUFBO1FBR0ksaURBQWlEO1FBQ2pELGtGQUFrRjtRQUNsRixrRUFBa0U7UUFDbEUsYUFBUSxHQUF1QixlQUFlLENBQUM7UUFFL0MsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUV4QixZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUV0QyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBRXBCLGFBQVEsR0FBVyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzVDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUVwQyw2RUFBNkU7UUFDN0UsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLG1DQUFtQztRQUNuQyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uTW9kZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncywgSUNvbXBvbmVudFNldHRpbmdzLCBJUmVhY3RpdmVEYXRhYmxlQmFzZSwgSVJvd0RhdGFUeXBlLCBJU29ydGFibGVDb2x1bW4sIElUYWJsZUNvbHVtblNwZWMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XG4gICAgaW1wbGVtZW50cyBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUPiB7XG5cbiAgICAvLyBOb3RlIHRoYXQgd2UgZG8gbm90IG1ha2Ugc2V0dGluZ3MgYmUgYW4gaW5wdXQsXG4gICAgLy8gYmVjYXN1ZSB0aGUgYmVoYXZpb3Igb2YgYW4gaW5wdXQgaW4gdGhlIGFic3RyYWN0IGJhc2UgY2xhc3MgaXMgbm90IHdlbGwtZGVmaW5lZFxuICAgIC8vIFNvbWV0aW1lLCBpdCB3b3JrcyAgYW5kIHNvbWV0aW1lcyBpdCBjYXVzZXMgY29tcGlsYXRpb24gZXJyb3JzLlxuICAgIHNldHRpbmdzOiBJQ29tcG9uZW50U2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3M7XG5cbiAgICBDb2x1bW5Nb2RlID0gQ29sdW1uTW9kZTtcblxuICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtblNwZWM+ID0gW107XG5cbiAgICByb3dzOiBBcnJheTxUPiA9IFtdO1xuXG4gICAgcGFnZVNpemU6IG51bWJlciA9IGRlZmF1bHRTZXR0aW5ncy5wYWdlU2l6ZTtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0b3RhbENvdW50OiBudW1iZXIgPSAwO1xuICAgIHBhZ2VJbmRleDogbnVtYmVyID0gMDsgLy8gcGFnZSBpbmRleFxuXG4gICAgLy8gV2Ugb24gcHVycG9zZSBwdXQgdGhlIGJhc2ljIGZvciBzb3J0aW5nIGhlcmUsIGJlY2F1c2UgdGhleSBhcmUgcmVxdWlyZWQgaW5cbiAgICAvLyBzdXBwb3J0aW5nIG9wZXJhdGlvbnMuIFxuICAgIC8vIFNvcnRpbmcgXG4gICAgc29ydGluZ0tleTogc3RyaW5nID0gJyc7XG4gICAgLy8gRGVzY3JpYmUgdGhlIGluaXQgc29ydGluZyBvcmRlci5cbiAgICBzb3J0czogQXJyYXk8SVNvcnRhYmxlQ29sdW1uPiA9IFtdO1xufVxuIl19