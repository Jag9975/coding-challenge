"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventory_1 = require("./inventory");
function default_1(app) {
    app.use('/inventory', inventory_1.router);
}
exports.default = default_1;
