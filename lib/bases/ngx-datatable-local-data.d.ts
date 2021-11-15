import { SelectionType } from '@swimlane/ngx-datatable';
import { IRowDataType, ITableWithOperationsBase } from '../interfaces';
import { NgxDatatablePoweredBase } from './ngx-datatable-powered-base';
export declare abstract class NgxDatatableLocalData<T extends IRowDataType> extends NgxDatatablePoweredBase<T> implements ITableWithOperationsBase<T> {
    SelectionType: SelectionType;
    selected: Array<T>;
    editing: {
        [key: string]: boolean;
    };
    backup: {
        [key: number]: T;
    };
    anyEditing: boolean;
    constructor();
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
