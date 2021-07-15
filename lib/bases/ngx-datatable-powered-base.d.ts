import { OnInit, TemplateRef } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import * as i0 from "@angular/core";
export interface IComponentSettings {
    pageSize?: number;
}
export interface IColumnConfiguration {
    name?: string;
    prop?: string;
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    sortable?: boolean;
    headerTemplate?: TemplateRef<any>;
    cellTemplate?: TemplateRef<any>;
}
export interface ISortableColumn {
    prop: string;
    dir: 'asc' | 'desc';
}
export interface ISortChangedEvent {
    column: {
        prop: string;
    };
    newValue: 'asc' | 'desc';
}
export interface IPageChangedEvent {
    offset: number;
}
export declare abstract class NgxDatatablePoweredBase<T> implements OnInit {
    settings: IComponentSettings;
    ColumnMode: typeof ColumnMode;
    columns: Array<IColumnConfiguration>;
    rows: Array<T>;
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    loading: boolean;
    sortingKey: string;
    sorts: Array<ISortableColumn>;
    ngOnInit(): void;
    protected abstract buildTableDataAsync(pageIndex: number): Promise<any>;
    onPageChanged(evt: IPageChangedEvent): void;
    refresh(): void;
    abstract onSortChanged(evt: ISortChangedEvent): any;
    static ɵfac: i0.ɵɵFactoryDef<NgxDatatablePoweredBase<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDatatablePoweredBase<any>, never, never, { "settings": "settings"; }, {}, never>;
}
