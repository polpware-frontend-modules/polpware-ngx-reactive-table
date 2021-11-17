import { TemplateRef } from '@angular/core';
import { INgxNoty } from '@polpware/ngx-noty';
export declare type HtmlInputTypeEnum = 'text' | 'tel' | 'email' | 'date' | 'number' | 'checkbox';
export interface IRowDataType {
    id: any;
}
export interface IComponentSettings {
    pageSize?: number;
    editable?: boolean;
    rmAsyncHandler?: (data: Array<IRowDataType>) => Promise<any>;
    addOrEditAsyncHandler?: (data: IRowDataType) => Promise<IRowDataType>;
}
export declare const noopPromise: (data: any) => Promise<unknown>;
export declare const rmPromise: (data: IRowDataType[]) => Promise<unknown>;
export declare const addOrEditPromise: (data: IRowDataType) => Promise<IRowDataType>;
export declare const defaultSettings: IComponentSettings;
export interface ITableColumnSpec {
    name?: string;
    prop?: string;
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    canAutoResize?: boolean;
    draggable?: boolean;
    resizeable?: boolean;
    headerCheckboxable?: boolean;
    checkboxable?: boolean;
    sortable?: boolean;
    headerTemplate?: TemplateRef<any>;
    cellTemplate?: TemplateRef<any>;
    headerClass?: string;
    cellClass?: string;
    editable?: boolean;
    inputType?: HtmlInputTypeEnum;
    frozenLeft?: boolean;
    frozenRight?: boolean;
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
export interface IReactiveDatableBase<T extends IRowDataType> {
    settings: IComponentSettings;
    columns: Array<ITableColumnSpec>;
    rows: Array<T>;
    pageSize: number;
    loading: boolean;
    totalCount: number;
    pageIndex: number;
    sortingKey: string;
    sorts: Array<ISortableColumn>;
}
export interface ITableDataChangeEvent {
    op: 'addOrEdit' | 'rm';
    data: Array<IRowDataType> | IRowDataType;
    rows: Array<IRowDataType>;
}
export interface ITableWithOperationsBase<T extends IRowDataType> extends IReactiveDatableBase<T> {
    selected: Array<T>;
    editing: {
        [key: string]: boolean;
    };
    backup: {
        [key: number]: T;
    };
    anyEditing: boolean;
    noty: INgxNoty;
    publish(event: ITableDataChangeEvent): void;
    onSelect(data: {
        selected: Array<T>;
    }): void;
    startAdd(): void;
    startEdit(rowIndex: number): void;
    cancelEdit(rowIndex: number): void;
    confirmEditAsync(rowIndex: number): Promise<any>;
    updateValue(event: any, prop: string, rowIndex: number): void;
    cleanEditing(rowIndex: number): void;
    rmAsync(): Promise<any>;
}
