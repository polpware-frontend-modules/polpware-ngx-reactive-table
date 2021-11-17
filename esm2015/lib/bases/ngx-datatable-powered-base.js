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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2Jhc2VzL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUE2RixNQUFNLGVBQWUsQ0FBQztBQUUzSSxNQUFNLE9BQWdCLHVCQUF1QjtJQUE3QztRQUdJLGlEQUFpRDtRQUNqRCxrRkFBa0Y7UUFDbEYsa0VBQWtFO1FBQ2xFLGFBQVEsR0FBdUIsZUFBZSxDQUFDO1FBRS9DLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFFeEIsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFFdEMsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUVwQixhQUFRLEdBQVcsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFFcEMsNkVBQTZFO1FBQzdFLDBCQUEwQjtRQUMxQixXQUFXO1FBQ1gsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixtQ0FBbUM7UUFDbkMsVUFBSyxHQUEyQixFQUFFLENBQUM7SUFDdkMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2x1bW5Nb2RlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzLCBJQ29tcG9uZW50U2V0dGluZ3MsIElSb3dEYXRhVHlwZSwgSVNvcnRhYmxlQ29sdW1uLCBJVGFibGVDb2x1bW5TcGVjLCBJUmVhY3RpdmVEYXRhYmxlQmFzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2U8VCBleHRlbmRzIElSb3dEYXRhVHlwZT5cbiAgICBpbXBsZW1lbnRzIElSZWFjdGl2ZURhdGFibGVCYXNlPFQ+IHtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyBub3QgbWFrZSBzZXR0aW5ncyBiZSBhbiBpbnB1dCxcbiAgICAvLyBiZWNhc3VlIHRoZSBiZWhhdmlvciBvZiBhbiBpbnB1dCBpbiB0aGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBpcyBub3Qgd2VsbC1kZWZpbmVkXG4gICAgLy8gU29tZXRpbWUsIGl0IHdvcmtzICBhbmQgc29tZXRpbWVzIGl0IGNhdXNlcyBjb21waWxhdGlvbiBlcnJvcnMuXG4gICAgc2V0dGluZ3M6IElDb21wb25lbnRTZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncztcblxuICAgIENvbHVtbk1vZGUgPSBDb2x1bW5Nb2RlO1xuXG4gICAgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uU3BlYz4gPSBbXTtcblxuICAgIHJvd3M6IEFycmF5PFQ+ID0gW107XG5cbiAgICBwYWdlU2l6ZTogbnVtYmVyID0gZGVmYXVsdFNldHRpbmdzLnBhZ2VTaXplO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRvdGFsQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcGFnZUluZGV4OiBudW1iZXIgPSAwOyAvLyBwYWdlIGluZGV4XG5cbiAgICAvLyBXZSBvbiBwdXJwb3NlIHB1dCB0aGUgYmFzaWMgZm9yIHNvcnRpbmcgaGVyZSwgYmVjYXVzZSB0aGV5IGFyZSByZXF1aXJlZCBpblxuICAgIC8vIHN1cHBvcnRpbmcgb3BlcmF0aW9ucy4gXG4gICAgLy8gU29ydGluZyBcbiAgICBzb3J0aW5nS2V5OiBzdHJpbmcgPSAnJztcbiAgICAvLyBEZXNjcmliZSB0aGUgaW5pdCBzb3J0aW5nIG9yZGVyLlxuICAgIHNvcnRzOiBBcnJheTxJU29ydGFibGVDb2x1bW4+ID0gW107XG59XG4iXX0=