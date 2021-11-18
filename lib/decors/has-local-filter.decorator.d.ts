import { Subscription } from 'rxjs';
import { IHasLocalFilter } from '../interfaces';
interface IDecoratorPrerequisite extends IHasLocalFilter {
}
declare type DecoratorPrerequisiteClass = {
    new (...args: any[]): IDecoratorPrerequisite;
};
export declare function hasLocalFilterDecorator<T extends DecoratorPrerequisiteClass>(constructor: T): {
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
