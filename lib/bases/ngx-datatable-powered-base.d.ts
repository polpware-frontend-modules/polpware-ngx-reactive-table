import { ColumnMode } from '@swimlane/ngx-datatable';
import { IComponentSettings, IReactiveDatableBase, IRowDataType, ISortableColumn, ITableColumnSpec } from '../interfaces';
export declare abstract class NgxDatatablePoweredBase<T extends IRowDataType> implements IReactiveDatableBase<T> {
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
