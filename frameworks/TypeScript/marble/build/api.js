"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plaintext$ = exports.json$ = void 0;
const core_1 = require("@marblejs/core");
const operators_1 = require("rxjs/operators");
exports.json$ = core_1.r.pipe(core_1.r.matchPath('/json'), core_1.r.matchType('GET'), core_1.r.useEffect(req$ => req$.pipe(operators_1.mapTo({
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Server: 'marble',
    },
    body: '{ message: \'Hello, World!\' }',
}))));
exports.plaintext$ = core_1.r.pipe(core_1.r.matchPath('/plaintext'), core_1.r.matchType('GET'), core_1.r.useEffect(req$ => req$.pipe(operators_1.mapTo({
    headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
        Server: 'marble',
    },
    body: 'Hello, World!',
}))));
// export const db$ = r.pipe(
//   r.matchPath('/db'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
//
// export const queries$ = r.pipe(
//   r.matchPath('/queries'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
//
// export const fortunes$ = r.pipe(
//   r.matchPath('/fortunes'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
//
// export const updates$ = r.pipe(
//   r.matchPath('/updates'),
//   r.matchType('GET'),
//   r.useEffect(req$ => req$.pipe(
//     mapTo({ body: 'Hello, world!' }),
//   )))
