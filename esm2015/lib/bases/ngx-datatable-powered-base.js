import { Input } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { defaultSettings } from '../interfaces';
import * as i0 from "@angular/core";
export class NgxDatatablePoweredBase {
    constructor() {
        this.ColumnMode = ColumnMode;
        this.columns = [];
        this.rows = [];
        this.pageSize = 40;
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
    ngOnInit() {
        this.settings = Object.assign({}, defaultSettings, this.settings);
        this.pageSize = this.settings.pageSize;
    }
}
NgxDatatablePoweredBase.ɵfac = function NgxDatatablePoweredBase_Factory(t) { return new (t || NgxDatatablePoweredBase)(); };
NgxDatatablePoweredBase.ɵdir = i0.ɵɵdefineDirective({ type: NgxDatatablePoweredBase, inputs: { settings: "settings" } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1wb3dlcmVkLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2Jhc2VzL25neC1kYXRhdGFibGUtcG93ZXJlZC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQTZGLE1BQU0sZUFBZSxDQUFDOztBQUUzSSxNQUFNLE9BQWdCLHVCQUF1QjtJQUE3QztRQUtJLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFFeEIsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFFdEMsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUVwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUVwQyw2RUFBNkU7UUFDN0UsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLG1DQUFtQztRQUNuQyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztLQU90QztJQUxHLFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDOzs4RkEzQmlCLHVCQUF1Qjs0REFBdkIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sdW1uTW9kZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncywgSUNvbXBvbmVudFNldHRpbmdzLCBJUm93RGF0YVR5cGUsIElTb3J0YWJsZUNvbHVtbiwgSVRhYmxlQ29sdW1uU3BlYywgSVJlYWN0aXZlRGF0YWJsZUJhc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+XG4gICAgaW1wbGVtZW50cyBJUmVhY3RpdmVEYXRhYmxlQmFzZTxUPiwgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHNldHRpbmdzOiBJQ29tcG9uZW50U2V0dGluZ3M7XG5cbiAgICBDb2x1bW5Nb2RlID0gQ29sdW1uTW9kZTtcblxuICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtblNwZWM+ID0gW107XG5cbiAgICByb3dzOiBBcnJheTxUPiA9IFtdO1xuXG4gICAgcGFnZVNpemU6IG51bWJlciA9IDQwO1xuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRvdGFsQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcGFnZUluZGV4OiBudW1iZXIgPSAwOyAvLyBwYWdlIGluZGV4XG5cbiAgICAvLyBXZSBvbiBwdXJwb3NlIHB1dCB0aGUgYmFzaWMgZm9yIHNvcnRpbmcgaGVyZSwgYmVjYXVzZSB0aGV5IGFyZSByZXF1aXJlZCBpblxuICAgIC8vIHN1cHBvcnRpbmcgb3BlcmF0aW9ucy4gXG4gICAgLy8gU29ydGluZyBcbiAgICBzb3J0aW5nS2V5OiBzdHJpbmcgPSAnJztcbiAgICAvLyBEZXNjcmliZSB0aGUgaW5pdCBzb3J0aW5nIG9yZGVyLlxuICAgIHNvcnRzOiBBcnJheTxJU29ydGFibGVDb2x1bW4+ID0gW107XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLnNldHRpbmdzLnBhZ2VTaXplO1xuICAgIH1cblxufVxuIl19