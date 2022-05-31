import { HtmlInputTypeEnum } from './interfaces';
/**
 * Returns a slice of array (with value semantics) [fromIndex, endIndex]
 * @param data
 * @param fromIndex
 * @param endIndex
 */
export declare function sliceArray(data: Array<any>, fromIndex: number, endIndex: number): any[];
export declare function countProperties(obj: Object): number;
export declare function getInputType(data: any): HtmlInputTypeEnum;
export declare function defaultInputTypeValue(t: HtmlInputTypeEnum): false | "" | 0;
//# sourceMappingURL=utils.d.ts.map