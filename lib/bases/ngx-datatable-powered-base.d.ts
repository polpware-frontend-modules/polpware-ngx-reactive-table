import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { IComponentSettings, IReactiveDatableBase, IRowDataType, ISortableColumn, ITableColumnSpec } from '../interfaces';
export declare abstract class NgxDatatablePoweredBase<T extends IRowDataType> implements IReactiveDatableBase<T> {
    abstract datatable: DatatableComponent;
    settings: IComponentSettings;
    ColumnMode: typeof ColumnMode;
    columns: Array<ITableColumnSpec>;
    rows: Array<T>;
    pageSize: number;
    loading: boolean;
    totalCount: number;
    pageIndex: number;
    sortingKey: string;
    sorts: Array<ISortableColumn>;
}
//# sourceMappingURL=ngx-datatable-powered-base.d.ts.map