import { OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { IComponentSettings, IRowDataType, ISortableColumn, ITableColumnSpec, IReactiveDatableBase } from '../interfaces';
import * as i0 from "@angular/core";
export declare abstract class NgxDatatablePoweredBase<T extends IRowDataType> implements IReactiveDatableBase<T>, OnInit {
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
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxDatatablePoweredBase<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDatatablePoweredBase<any>, never, never, { "settings": "settings"; }, {}, never>;
}
