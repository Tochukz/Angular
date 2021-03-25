import { createReducer, on } from '@ngrx/store';

import { increment, decrement, reset } from './../actions/counter.action';

export const initailState = 0;

const _counterReducer = createReducer(
    initailState,
    on(increment, state => state + 1),
    on(decrement, state => state -1),
    on(reset, state => 0)
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}