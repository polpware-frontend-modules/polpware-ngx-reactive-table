import { IRowDataType, ITableWithOperationsBase } from '../interfaces';
interface IDecoratorPrerequisite<T extends IRowDataType> extends ITableWithOperationsBase<T> {
}
declare type DecoratorPrerequisiteClass<T extends IRowDataType> = {
    new (...args: any[]): IDecoratorPrerequisite<T>;
};
export declare function supportOperationsDecorator<T extends IRowDataType, U extends DecoratorPrerequisiteClass<T>>(constructor: U): {
    new (...args: any[]): {
        readonly anyEditing: boolean;
        onSelect(a: {
            selected: T[];
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
        noty: import("@polpware/ngx-noty").INgxNoty;
        publish(event: import("../interfaces").ITableDataChangeEvent): void;
        datatable: import("@swimlane/ngx-datatable").DatatableComponent;
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
