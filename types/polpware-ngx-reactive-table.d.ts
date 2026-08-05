import { INgxNoty } from '@polpware/ngx-noty';
import { TemplateRef } from '@angular/core';
import * as _angular_forms from '@angular/forms';
import { UntypedFormControl } from '@angular/forms';
import * as _swimlane_ngx_datatable from '@swimlane/ngx-datatable';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as _polpware_ngx_reactive_table from '@polpware/ngx-reactive-table';
import * as dist_polpware_ngx_noty_types_polpware_ngx_noty from 'dist/polpware/ngx-noty/types/polpware-ngx-noty';
import { Subscription } from 'rxjs';

type HtmlInputTypeEnum = 'text' | 'tel' | 'email' | 'date' | 'number' | 'checkbox' | 'file';
interface IRowDataType {
    id: any;
}
interface IComponentSettings {
    pageSize?: number;
    canCreate?: boolean;
    canUpdate?: boolean;
    canDelete?: boolean;
    createAsyncHandler?: (data: IRowDataType) => Promise<IRowDataType>;
    deleteAsyncHandler?: (data: Array<IRowDataType>) => Promise<any>;
    updateAsyncHandler?: (data: IRowDataType) => Promise<IRowDataType>;
}
declare const noopPromise: (data: any) => Promise<unknown>;
declare const deletePromise: (data: Array<IRowDataType>) => Promise<unknown>;
declare const createPromise: (data: IRowDataType) => Promise<IRowDataType>;
declare const updatePromise: (data: IRowDataType) => Promise<IRowDataType>;
declare const defaultSettings: IComponentSettings;
interface ITableColumnSpec {
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
interface ISortableColumn {
    prop: string;
    dir: 'asc' | 'desc';
}
interface ISortChangedEvent {
    column: {
        prop: string;
    };
    newValue: 'asc' | 'desc';
}
interface IPageChangedEvent {
    offset: number;
}
interface IReactiveDatableBase<T extends IRowDataType> {
    datatable: DatatableComponent;
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
interface ITableDataChangeEvent {
    op: 'create' | 'delete' | 'update' | '';
    data: Array<IRowDataType> | IRowDataType;
    rows: Array<IRowDataType>;
}
interface ITableWithOperationsBase<T extends IRowDataType> extends IReactiveDatableBase<T> {
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
interface ISearchCapabiltyBuilder {
    searchControl: UntypedFormControl;
    anyFutureKeyword: string;
    startObserveSearchKeyword(): void;
    stopObserveSearchKeyword(): void;
    cancelTypedKeyword(): void;
    kickOffSearch(): void;
}
/**
 * pageIndex starting with 0
 */
interface IGeneralPagedRequest {
    pageSize: number;
    pageIndex: number;
}
interface IGeneralPagedResponse<T> {
    totalCount: number;
    items: Array<T>;
}
interface IAbpPagedRequest {
    skipCount?: number;
    maxResultCount?: number;
}
interface IAbpPagedAndSortedRequest extends IAbpPagedRequest {
    sorting?: string;
}
interface IAbpPagedResponse<T> {
    totalCount: number;
    items: Array<T>;
}
declare function adaptToGeneralPagedRequest(input: IAbpPagedRequest): IGeneralPagedRequest;
declare function adaptToAbpPagedRequest(input: IGeneralPagedRequest): IAbpPagedRequest;

declare abstract class NgxDatatablePoweredBase<T extends IRowDataType> implements IReactiveDatableBase<T> {
    abstract datatable: DatatableComponent;
    settings: IComponentSettings;
    ColumnMode: {
        readonly standard: "standard";
        readonly flex: "flex";
        readonly force: "force";
    };
    columns: Array<ITableColumnSpec>;
    rows: Array<T>;
    pageSize: number;
    loading: boolean;
    totalCount: number;
    pageIndex: number;
    sortingKey: string;
    sorts: Array<ISortableColumn>;
}

declare abstract class NgxDatatableExternalData<T extends IRowDataType> extends NgxDatatablePoweredBase<T> {
    constructor();
    protected abstract buildTableDataAsync(pageIndex: number): Promise<any>;
    onPageChanged(evt: IPageChangedEvent): void;
    onPageSizeChanged(size: number): void;
    refresh(): void;
    abstract onSortChanged(evt: ISortChangedEvent): any;
}
declare abstract class NgxDatatableExternalDataWithOperations<T extends IRowDataType> extends NgxDatatableExternalData<T> implements ITableWithOperationsBase<T> {
    SelectionType: {
        readonly single: "single";
        readonly multi: "multi";
        readonly multiClick: "multiClick";
        readonly cell: "cell";
        readonly checkbox: "checkbox";
    };
    selected: Array<T>;
    editing: {
        [key: string]: boolean;
    };
    backup: {
        [key: number]: T;
    };
    anyEditing: boolean;
    abstract noty: INgxNoty;
    constructor();
    abstract publish(event: ITableDataChangeEvent): void;
    onSelect({ selected }: {
        selected: any;
    }): void;
    startAdd(): void;
    startEdit(rowIndex: number): void;
    cancelEdit(rowIndex: number): void;
    confirmEditAsync(rowIndex: number): Promise<void>;
    updateValue(event: any, prop: string, rowIndex: number): void;
    cleanEditing(rowIndex: number): void;
    rmAsync(): Promise<void>;
}

declare abstract class NgxDatatableLocalData<T extends IRowDataType> extends NgxDatatablePoweredBase<T> implements ITableWithOperationsBase<T> {
    SelectionType: {
        readonly single: "single";
        readonly multi: "multi";
        readonly multiClick: "multiClick";
        readonly cell: "cell";
        readonly checkbox: "checkbox";
    };
    selected: Array<T>;
    editing: {
        [key: string]: boolean;
    };
    backup: {
        [key: number]: T;
    };
    anyEditing: boolean;
    abstract noty: INgxNoty;
    constructor();
    abstract publish(event: ITableDataChangeEvent): void;
    onSelect({ selected }: {
        selected: any;
    }): void;
    startAdd(): void;
    startEdit(rowIndex: number): void;
    cancelEdit(rowIndex: number): void;
    confirmEditAsync(rowIndex: number): Promise<void>;
    updateValue(event: any, prop: string, rowIndex: number): void;
    cleanEditing(rowIndex: number): void;
    rmAsync(): Promise<void>;
}
declare abstract class NgxDatatableLocalDataWithInlineSearch<T extends IRowDataType> extends NgxDatatablePoweredBase<T> implements ITableWithOperationsBase<T>, ISearchCapabiltyBuilder {
    SelectionType: {
        readonly single: "single";
        readonly multi: "multi";
        readonly multiClick: "multiClick";
        readonly cell: "cell";
        readonly checkbox: "checkbox";
    };
    selected: Array<T>;
    editing: {
        [key: string]: boolean;
    };
    backup: {
        [key: number]: T;
    };
    anyEditing: boolean;
    abstract noty: INgxNoty;
    abstract searchControl: UntypedFormControl;
    anyFutureKeyword: string;
    constructor();
    abstract publish(event: ITableDataChangeEvent): void;
    onSelect({ selected }: {
        selected: any;
    }): void;
    startAdd(): void;
    startEdit(rowIndex: number): void;
    cancelEdit(rowIndex: number): void;
    confirmEditAsync(rowIndex: number): Promise<void>;
    updateValue(event: any, prop: string, rowIndex: number): void;
    cleanEditing(rowIndex: number): void;
    rmAsync(): Promise<void>;
    startObserveSearchKeyword(): void;
    stopObserveSearchKeyword(): void;
    abstract cancelTypedKeyword(): void;
    abstract kickOffSearch(): void;
}

interface IDecoratorPrerequisite$1<T extends IRowDataType> extends ITableWithOperationsBase<T> {
}
type DecoratorPrerequisiteClass$1<T extends IRowDataType> = {
    new (...args: any[]): IDecoratorPrerequisite$1<T>;
};
declare function supportOperationsDecorator<T extends IRowDataType, U extends DecoratorPrerequisiteClass$1<T>>(constructor: U): {
    new (...args: any[]): {
        get anyEditing(): boolean;
        onSelect(a: {
            selected: Array<T>;
        }): void;
        startAdd(): void;
        startEdit(rowIndex: number): void;
        cancelEdit(rowIndex: number): void;
        confirmEditAsync(rowIndex: number): Promise<void>;
        updateValue(event: any, prop: string, rowIndex: number): void;
        cleanEditing(rowIndex: number): void;
        rmAsync(): Promise<void>;
        selected: T[];
        editing: {
            [key: string]: boolean;
        };
        backup: {
            [key: number]: T;
        };
        noty: dist_polpware_ngx_noty_types_polpware_ngx_noty.INgxNoty;
        publish(event: _polpware_ngx_reactive_table.ITableDataChangeEvent): void;
        datatable: _swimlane_ngx_datatable.DatatableComponent;
        settings: _polpware_ngx_reactive_table.IComponentSettings;
        columns: Array<_polpware_ngx_reactive_table.ITableColumnSpec>;
        rows: T[];
        pageSize: number;
        loading: boolean;
        totalCount: number;
        pageIndex: number;
        sortingKey: string;
        sorts: Array<_polpware_ngx_reactive_table.ISortableColumn>;
    };
} & U;

interface IDecoratorPrerequisite extends ISearchCapabiltyBuilder {
}
type DecoratorPrerequisiteClass = {
    new (...args: any[]): IDecoratorPrerequisite;
};
declare function hasInlineSearchDecorator<T extends DecoratorPrerequisiteClass>(constructor: T): {
    new (...args: any[]): {
        _searchKeywordSubr: Subscription;
        startObserveSearchKeyword(): void;
        stopObserveSearchKeyword(): void;
        searchControl: _angular_forms.UntypedFormControl;
        anyFutureKeyword: string;
        cancelTypedKeyword(): void;
        kickOffSearch(): void;
    };
} & T;

/**
 * Returns a slice of array (with value semantics) [fromIndex, endIndex]
 * @param data
 * @param fromIndex
 * @param endIndex
 */
declare function sliceArray(data: Array<any>, fromIndex: number, endIndex: number): any[];
declare function countProperties(obj: Object): number;
declare function getInputType(data: any): HtmlInputTypeEnum;
declare function defaultInputTypeValue(t: HtmlInputTypeEnum): false | "" | 0;

export { NgxDatatableExternalData, NgxDatatableExternalDataWithOperations, NgxDatatableLocalData, NgxDatatableLocalDataWithInlineSearch, NgxDatatablePoweredBase, adaptToAbpPagedRequest, adaptToGeneralPagedRequest, countProperties, createPromise, defaultInputTypeValue, defaultSettings, deletePromise, getInputType, hasInlineSearchDecorator, noopPromise, sliceArray, supportOperationsDecorator, updatePromise };
export type { HtmlInputTypeEnum, IAbpPagedAndSortedRequest, IAbpPagedRequest, IAbpPagedResponse, IComponentSettings, IGeneralPagedRequest, IGeneralPagedResponse, IPageChangedEvent, IReactiveDatableBase, IRowDataType, ISearchCapabiltyBuilder, ISortChangedEvent, ISortableColumn, ITableColumnSpec, ITableDataChangeEvent, ITableWithOperationsBase };
//# sourceMappingURL=polpware-ngx-reactive-table.d.ts.map
