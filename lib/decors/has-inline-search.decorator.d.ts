import { Subscription } from 'rxjs';
import { ISearchCapabiltyBuilder } from '../interfaces';
interface IDecoratorPrerequisite extends ISearchCapabiltyBuilder {
}
declare type DecoratorPrerequisiteClass = {
    new (...args: any[]): IDecoratorPrerequisite;
};
export declare function hasInlineSearchDecorator<T extends DecoratorPrerequisiteClass>(constructor: T): {
    new (...args: any[]): {
        _searchKeywordSubr: Subscription;
        startObserveSearchKeyword(): void;
        stopObserveSearchKeyword(): void;
        searchControl: import("@angular/forms").FormControl;
        anyFutureKeyword: string;
        cancelTypedKeyword(): void;
        kickOffSearch(): void;
    };
} & T;
export {};
