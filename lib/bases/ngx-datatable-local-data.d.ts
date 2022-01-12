import { FormControl } from '@angular/forms';
import { INgxNoty } from '@polpware/ngx-noty';
import { SelectionType } from '@swimlane/ngx-datatable';
import { IHasLocalFilter, IRowDataType, ITableDataChangeEvent, ITableWithOperationsBase } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
export declare abstract class NgxDatatableLocalData<T extends IRowDataType> extends NgxDatatablePoweredBase<T> implements ITableWithOperationsBase<T>, IHasLocalFilter {
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
    abstract searchControl: FormControl;
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
