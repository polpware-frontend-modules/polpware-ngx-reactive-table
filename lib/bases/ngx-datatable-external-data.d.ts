import { INgxNoty } from '@polpware/ngx-noty';
import { SelectionType } from '@swimlane/ngx-datatable';
import { IPageChangedEvent, IRowDataType, ISortChangedEvent, ITableDataChangeEvent, ITableWithOperationsBase } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
export declare abstract class NgxDatatableExternalData<T extends IRowDataType> extends NgxDatatablePoweredBase<T> {
    constructor();
    protected abstract buildTableDataAsync(pageIndex: number): Promise<any>;
    onPageChanged(evt: IPageChangedEvent): void;
    onPageSizeChanged(size: number): void;
    refresh(): void;
    abstract onSortChanged(evt: ISortChangedEvent): any;
}
export declare abstract class NgxDatatableExternalDataWithOperations<T extends IRowDataType> extends NgxDatatableExternalData<T> implements ITableWithOperationsBase<T> {
    SelectionType: typeof SelectionType;
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
//# sourceMappingURL=ngx-datatable-external-data.d.ts.map