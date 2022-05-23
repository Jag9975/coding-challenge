"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.viewItems = exports.newItem = exports.initializeDB = void 0;
var better_sqlite3_1 = __importDefault(require("better-sqlite3"));
var path = "database.db";
function initializeDB() {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            db = new better_sqlite3_1.default(path);
            db.exec("CREATE TABLE IF NOT EXISTS inventory ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'name' VARCHAR, 'description' VARCHAR, location 'VARCHAR', 'available' INTEGER);");
            return [2 /*return*/, db];
        });
    });
}
exports.initializeDB = initializeDB;
function newItem(item) {
    return __awaiter(this, void 0, void 0, function () {
        var db, query;
        return __generator(this, function (_a) {
            db = new better_sqlite3_1.default(path);
            query = db.prepare("INSERT INTO inventory (name, description, location, available) VALUES (?, ?, ?, ?);");
            query.run(item.name, item.description, item.location, item.available);
            return [2 /*return*/];
        });
    });
}
exports.newItem = newItem;
function viewItems() {
    return __awaiter(this, void 0, void 0, function () {
        var db, items;
        return __generator(this, function (_a) {
            db = new better_sqlite3_1.default(path);
            items = db.prepare("SELECT * FROM inventory;").all();
            return [2 /*return*/, items];
        });
    });
}
exports.viewItems = viewItems;
function updateItem(item) {
    return __awaiter(this, void 0, void 0, function () {
        var db, query;
        return __generator(this, function (_a) {
            db = new better_sqlite3_1.default(path);
            query = db.prepare("UPDATE inventory SET name = ?, description = ?, location = ?, available = ? WHERE id = ?;");
            query.run(item.name, item.description, item.location, item.available, item.id);
            return [2 /*return*/];
        });
    });
}
exports.updateItem = updateItem;
function deleteItem(id) {
    return __awaiter(this, void 0, void 0, function () {
        var db, query;
        return __generator(this, function (_a) {
            db = new better_sqlite3_1.default(path);
            query = db.prepare("DELETE FROM inventory WHERE id = ?;");
            query.run(id);
            return [2 /*return*/];
        });
    });
}
exports.deleteItem = deleteItem;
