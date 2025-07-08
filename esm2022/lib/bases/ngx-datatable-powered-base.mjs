import { ColumnMode } from '@swimlane/ngx-datatable';
import { defaultSettings } from '../interfaces';
export class NgxDatatablePoweredBase {
    constructor() {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvc3JjL2xpYi9iYXNlcy9uZ3gtZGF0YXRhYmxlLXBvd2VyZWQtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFzQixNQUFNLHlCQUF5QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQTZGLE1BQU0sZUFBZSxDQUFDO0FBRTNJLE1BQU0sT0FBZ0IsdUJBQXVCO0lBQTdDO1FBT0ksaURBQWlEO1FBQ2pELGtGQUFrRjtRQUNsRixrRUFBa0U7UUFDbEUsYUFBUSxHQUF1QixlQUFlLENBQUM7UUFFL0MsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUV4QixZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUV0QyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBRXBCLGFBQVEsR0FBVyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzVDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUVwQyw2RUFBNkU7UUFDN0UsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLG1DQUFtQztRQUNuQyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5Nb2RlLCBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MsIElDb21wb25lbnRTZXR0aW5ncywgSVJlYWN0aXZlRGF0YWJsZUJhc2UsIElSb3dEYXRhVHlwZSwgSVNvcnRhYmxlQ29sdW1uLCBJVGFibGVDb2x1bW5TcGVjIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPlxuICAgIGltcGxlbWVudHMgSVJlYWN0aXZlRGF0YWJsZUJhc2U8VD4ge1xuXG4gICAgLy8gV2Ugb24gcHVycG9zZSBtYWtlIHRoaXMgb25lIHRvIGJlIGFic3RyYWN0LFxuICAgIC8vIGFuZCB0aHVzIHRoZSBkZXJ2aWVkIG11c3QgdXNlIGEgdmlld2NoaWxkIHRvIGJpbmQgaXRzIHZhbHVlLlxuICAgIGFic3RyYWN0IGRhdGF0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xuXG4gICAgLy8gTm90ZSB0aGF0IHdlIGRvIG5vdCBtYWtlIHNldHRpbmdzIGJlIGFuIGlucHV0LFxuICAgIC8vIGJlY2FzdWUgdGhlIGJlaGF2aW9yIG9mIGFuIGlucHV0IGluIHRoZSBhYnN0cmFjdCBiYXNlIGNsYXNzIGlzIG5vdCB3ZWxsLWRlZmluZWRcbiAgICAvLyBTb21ldGltZSwgaXQgd29ya3MgIGFuZCBzb21ldGltZXMgaXQgY2F1c2VzIGNvbXBpbGF0aW9uIGVycm9ycy5cbiAgICBzZXR0aW5nczogSUNvbXBvbmVudFNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xuXG4gICAgQ29sdW1uTW9kZSA9IENvbHVtbk1vZGU7XG5cbiAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPiA9IFtdO1xuXG4gICAgcm93czogQXJyYXk8VD4gPSBbXTtcblxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSBkZWZhdWx0U2V0dGluZ3MucGFnZVNpemU7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdG90YWxDb3VudDogbnVtYmVyID0gMDtcbiAgICBwYWdlSW5kZXg6IG51bWJlciA9IDA7IC8vIHBhZ2UgaW5kZXhcblxuICAgIC8vIFdlIG9uIHB1cnBvc2UgcHV0IHRoZSBiYXNpYyBmb3Igc29ydGluZyBoZXJlLCBiZWNhdXNlIHRoZXkgYXJlIHJlcXVpcmVkIGluXG4gICAgLy8gc3VwcG9ydGluZyBvcGVyYXRpb25zLiBcbiAgICAvLyBTb3J0aW5nIFxuICAgIHNvcnRpbmdLZXk6IHN0cmluZyA9ICcnO1xuICAgIC8vIERlc2NyaWJlIHRoZSBpbml0IHNvcnRpbmcgb3JkZXIuXG4gICAgc29ydHM6IEFycmF5PElTb3J0YWJsZUNvbHVtbj4gPSBbXTtcbn1cbiJdfQ==