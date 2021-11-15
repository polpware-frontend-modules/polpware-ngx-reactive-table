import { IRowDataType, ITableWithOperationsBase } from '../interfaces';
interface IDecoratorPrerequisite<T extends IRowDataType> extends ITableWithOperationsBase<T> {
}
declare type DecoratorPrerequisiteClass<T extends IRowDataType> = {
    new (...args: any[]): IDecoratorPrerequisite<T>;
};
export declare function supportOperationsDecorator<T extends IRowDataType, U extends DecoratorPrerequisiteClass<T>>(constructor: U): {
    new (...args: any[]): {
        readonly anyEditing: boolean;
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
        selectionType: import("@swimlane/ngx-datatable").SelectionType;
        selected: T[];
        editing: {
            [key: string]: boolean;
        };
        backup: {
            [key: number]: T;
        };
        settings: import("../interfaces").IComponentSettings;
        columns: import("../interfaces").ITableColumnSpec[];
        rows: T[];
        pageSize: number;
        loading: boolean;
        totalCount: number;
        pageIndex: number;
        sortingKey: string;
        sorts: import("../interfaces").ISortableColumn[];
    };
} & U;
export {};
