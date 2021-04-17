"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const core_1 = require("@marblejs/core");
const listener_1 = require("./listener");
const server = core_1.createServer({
    port: 8080,
    hostname: '0.0.0.0',
    listener: listener_1.listener,
});
const main = async () => await (await server)();
if (cluster_1.default.isMaster) {
    os_1.default.cpus().forEach(cluster_1.default.fork);
    cluster_1.default.on('exit', () => {
        process.exit(1);
    });
}
else {
    main();
}
