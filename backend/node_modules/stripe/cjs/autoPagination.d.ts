import { RequestData, StripeResourceObject, MakeRequestSpec } from './Types.js';
import { RequestOptions } from './lib.js';
type IterationDoneCallback = (err?: any, result?: any) => void;
type IterationItemCallback<T> = (item: T, next: any) => void | boolean | Promise<void | boolean>;
type AutoPagingEach<T> = (onItem: IterationItemCallback<T>, onDone?: IterationDoneCallback) => Promise<void>;
type AutoPagingToArrayOptions = {
    limit?: number;
};
type AutoPagingToArray<T> = (opts: AutoPagingToArrayOptions, onDone: IterationDoneCallback) => Promise<Array<T>>;
type AutoPaginationMethods<T> = {
    autoPagingEach: AutoPagingEach<T>;
    autoPagingToArray: AutoPagingToArray<T>;
    next: () => Promise<IteratorResult<T>>;
    return: () => void;
};
type PageResult<T> = {
    data: Array<T>;
    has_more: boolean;
    next_page?: string | null;
    next_page_url?: string | null;
};
export declare const makeAutoPaginationMethods: <TItem extends {
    id: string;
}>(stripeResource: StripeResourceObject, params: RequestData, options: RequestOptions | undefined, method: string, path: string, spec: MakeRequestSpec | undefined, firstPagePromise: Promise<PageResult<TItem>>) => AutoPaginationMethods<TItem> | null;
export {};
