"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
const core_1 = require("@marblejs/core");
// import { logger$ } from '@marblejs/middleware-logger'
const middleware_body_1 = require("@marblejs/middleware-body");
const api_1 = require("./api");
const effects = [
    api_1.json$,
    api_1.plaintext$,
];
exports.listener = core_1.httpListener({
    middlewares: [middleware_body_1.bodyParser$],
    effects,
});
