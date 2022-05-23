"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Success = exports.Error = void 0;
var Error = /** @class */ (function () {
    function Error(message) {
        this.status = "error";
        this.details = {
            "error": message
        };
    }
    return Error;
}());
exports.Error = Error;
var Success = /** @class */ (function () {
    function Success(details) {
        this.status = "Successful";
        this.details = details;
    }
    return Success;
}());
exports.Success = Success;
