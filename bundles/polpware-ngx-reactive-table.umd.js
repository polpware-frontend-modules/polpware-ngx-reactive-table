(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@swimlane/ngx-datatable')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-reactive-table', ['exports', '@swimlane/ngx-datatable'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-reactive-table'] = {}), global.ngxDatatable));
}(this, (function (exports, ngxDatatable) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var noopPromise = function (data) { return new Promise(function (resolve, reject) {
        resolve(data);
    }); };
    var rmPromise = function (data) { return new Promise(function (resolve, reject) {
        resolve();
    }); };
    var addOrEditPromise = function (data) { return new Promise(function (resolve, reject) {
        var newData = Object.assign(data, { id: new Date().getTime() });
        resolve(newData);
    }); };
    var defaultSettings = {
        pageSize: 40,
        editable: false,
        rmAsyncHandler: rmPromise,
        addOrEditAsyncHandler: addOrEditPromise
    };

    var NgxDatatablePoweredBase = /** @class */ (function () {
        function NgxDatatablePoweredBase() {
            // Note that we do not make settings be an input,
            // becasue the behavior of an input in the abstract base class is not well-defined
            // Sometime, it works  and sometimes it causes compilation errors.
            this.settings = defaultSettings;
            this.ColumnMode = ngxDatatable.ColumnMode;
            this.columns = [];
            this.rows = [];
            this.pageSize = defaultSettings.pageSize;
            this.loading = false;
            this.totalCount = 0;
            this.pageIndex = 0; // page index
            // We on purpose put the basic for sorting here, because they are required in
            // supporting operations. 
            // Sorting 
            this.sortingKey = '';
            // Describe the init sorting order.
            this.sorts = [];
        }
        return NgxDatatablePoweredBase;
    }());

    var NgxDatatableExternalData = /** @class */ (function (_super) {
        __extends(NgxDatatableExternalData, _super);
        function NgxDatatableExternalData() {
            return _super.call(this) || this;
        }
        NgxDatatableExternalData.prototype.onPageChanged = function (evt) {
            this.buildTableDataAsync(evt.offset);
        };
        NgxDatatableExternalData.prototype.refresh = function () {
            // The other settings stay the same.
            this.buildTableDataAsync(0);
        };
        return NgxDatatableExternalData;
    }(NgxDatatablePoweredBase));
    var NgxDatatableExternalDataWithOperations = /** @class */ (function (_super) {
        __extends(NgxDatatableExternalDataWithOperations, _super);
        function NgxDatatableExternalDataWithOperations() {
            var _this = _super.call(this) || this;
            _this.SelectionType = ngxDatatable.SelectionType;
            // Support selected
            _this.selected = [];
            // Suport editing
            _this.editing = {};
            _this.backup = {};
            return _this;
        }
        NgxDatatableExternalDataWithOperations.prototype.onSelect = function (_a) {
            var selected = _a.selected;
        };
        NgxDatatableExternalDataWithOperations.prototype.startAdd = function () { };
        NgxDatatableExternalDataWithOperations.prototype.startEdit = function (rowIndex) { };
        // Support editing an existing one and adding a new one
        NgxDatatableExternalDataWithOperations.prototype.cancelEdit = function (rowIndex) { };
        ;
        NgxDatatableExternalDataWithOperations.prototype.confirmEditAsync = function (rowIndex) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, noopPromise(rowIndex)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxDatatableExternalDataWithOperations.prototype.updateValue = function (event, prop, rowIndex) { };
        NgxDatatableExternalDataWithOperations.prototype.cleanEditing = function (rowIndex) { };
        NgxDatatableExternalDataWithOperations.prototype.rmAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, noopPromise(null)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return NgxDatatableExternalDataWithOperations;
    }(NgxDatatableExternalData));

    // Dervied classes must use decorator to provide implementation
    var NgxDatatableLocalData = /** @class */ (function (_super) {
        __extends(NgxDatatableLocalData, _super);
        function NgxDatatableLocalData() {
            var _this = _super.call(this) || this;
            _this.SelectionType = ngxDatatable.SelectionType;
            // Support selected
            _this.selected = [];
            // Suport editing
            _this.editing = {};
            _this.backup = {};
            return _this;
        }
        NgxDatatableLocalData.prototype.onSelect = function (_a) {
            var selected = _a.selected;
        };
        NgxDatatableLocalData.prototype.startAdd = function () { };
        NgxDatatableLocalData.prototype.startEdit = function (rowIndex) { };
        // Support editing an existing one and adding a new one
        NgxDatatableLocalData.prototype.cancelEdit = function (rowIndex) { };
        ;
        NgxDatatableLocalData.prototype.confirmEditAsync = function (rowIndex) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, noopPromise(rowIndex)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgxDatatableLocalData.prototype.updateValue = function (event, prop, rowIndex) { };
        NgxDatatableLocalData.prototype.cleanEditing = function (rowIndex) { };
        NgxDatatableLocalData.prototype.rmAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, noopPromise(null)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // Support for local filters
        NgxDatatableLocalData.prototype.startObserveSearchKeyword = function () { };
        NgxDatatableLocalData.prototype.stopObserveSearchKeyword = function () { };
        NgxDatatableLocalData.prototype.cancelTypedKeyword = function () { };
        ;
        return NgxDatatableLocalData;
    }(NgxDatatablePoweredBase));

    /**
     * Returns a slice of array (with value semantics) [fromIndex, endIndex]
     * @param data
     * @param fromIndex
     * @param endIndex
     */
    function sliceArray(data, fromIndex, endIndex) {
        return data.filter(function (_, index) {
            return index >= fromIndex && index <= endIndex;
        });
    }
    function countProperties(obj) {
        var count = 0;
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    }
    function getInputType(data) {
        var ty = typeof data;
        if (ty == 'number') {
            return 'number';
        }
        if (ty == 'boolean') {
            return 'checkbox';
        }
        if (ty == 'object') {
            if (data instanceof Date) {
                return 'date';
            }
        }
        return 'text';
    }
    function defaultInputTypeValue(t) {
        if (t == 'number') {
            return 0;
        }
        if (t == 'checkbox') {
            return false;
        }
        return '';
    }

    function supportOperationsDecorator(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(class_1.prototype, "anyEditing", {
                get: function () {
                    return countProperties(this.backup) > 0;
                },
                enumerable: true,
                configurable: true
            });
            class_1.prototype.onSelect = function (_a) {
                var _b;
                var selected = _a.selected;
                this.selected.splice(0, this.selected.length);
                (_b = this.selected).push.apply(_b, __spread(selected));
            };
            class_1.prototype.startAdd = function () {
                var _this = this;
                var newElem = {
                    id: ''
                };
                this.columns.forEach(function (a) {
                    if (a.editable) {
                        newElem[a.prop] = defaultInputTypeValue(a.inputType);
                    }
                });
                // Add the element into the rows (no backup)
                this.rows = __spread([newElem], this.rows);
                this.totalCount = this.totalCount + 1;
                this.backup[0] = newElem;
                // Enable editing it.
                this.columns.forEach(function (a) {
                    if (a.editable) {
                        _this.editing[0 + '-' + a.prop] = true;
                    }
                });
            };
            class_1.prototype.startEdit = function (rowIndex) {
                var _this = this;
                var data = this.rows[rowIndex];
                this.backup[rowIndex] = __assign({}, data);
                this.columns.forEach(function (a) {
                    if (a.editable) {
                        _this.editing[rowIndex + '-' + a.prop] = true;
                    }
                });
            };
            // Support editing an existing one and adding a new one
            class_1.prototype.cancelEdit = function (rowIndex) {
                // Replace the old value
                var firstPart = sliceArray(this.rows, 0, rowIndex - 1);
                var secondPart = sliceArray(this.rows, rowIndex + 1, this.rows.length - 1);
                var elem = this.backup[rowIndex];
                // An existing one
                if (elem.id) {
                    this.rows = __spread(firstPart, [elem], secondPart);
                }
                else {
                    // Otherwise, drop this.
                    this.rows = __spread(firstPart, secondPart);
                }
                this.cleanEditing(rowIndex);
                delete this.backup[rowIndex];
            };
            class_1.prototype.confirmEditAsync = function (rowIndex) {
                return __awaiter(this, void 0, void 0, function () {
                    var elem, newElem, firstPart, secondPart, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                elem = this.rows[rowIndex];
                                newElem = null;
                                if (!this.settings.addOrEditAsyncHandler) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.settings.addOrEditAsyncHandler(elem)];
                            case 1:
                                newElem = _a.sent();
                                firstPart = sliceArray(this.rows, 0, rowIndex - 1);
                                secondPart = sliceArray(this.rows, rowIndex + 1, this.rows.length - 1);
                                this.rows = __spread(firstPart, [newElem], secondPart);
                                _a.label = 2;
                            case 2:
                                this.cleanEditing(rowIndex);
                                delete this.backup[rowIndex];
                                this.publish({
                                    op: 'addOrEdit',
                                    data: newElem,
                                    rows: this.rows
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                e_1 = _a.sent();
                                this.noty.error('Sorry, something went wrong!', 'Operation result');
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype.updateValue = function (event, prop, rowIndex) {
                this.rows[rowIndex][prop] = event.target.value;
            };
            class_1.prototype.cleanEditing = function (rowIndex) {
                var _this = this;
                this.columns.forEach(function (a) {
                    if (a.editable) {
                        delete _this.editing[rowIndex + '-' + a.prop];
                    }
                });
            };
            class_1.prototype.rmAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var oldSelected, e_2;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                if (!this.settings.rmAsyncHandler) return [3 /*break*/, 2];
                                // Expect to be a transaction 
                                return [4 /*yield*/, this.settings.rmAsyncHandler(this.selected)];
                            case 1:
                                // Expect to be a transaction 
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                // Do not refresh; just delete them from the local set.
                                // Update data
                                this.rows = this.rows.filter(function (a) { return !_this.selected.some(function (b) { return b === a; }); });
                                this.totalCount = this.totalCount - this.selected.length;
                                oldSelected = this.selected;
                                this.selected = [];
                                this.noty.success('Data has been deleted successfully!', 'Operation result');
                                this.publish({
                                    op: 'rm',
                                    data: oldSelected,
                                    rows: this.rows
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                e_2 = _a.sent();
                                this.noty.error('Sorry, something went wrong!', 'Operation result');
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            return class_1;
        }(constructor));
    }

    function hasLocalFilterDecorator(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // Start to listen for search keyword change
            class_1.prototype.startObserveSearchKeyword = function () {
                var _this = this;
                this._searchKeywordSubr = this.searchControl.valueChanges.subscribe(function (a) {
                    a = (a || '').toLowerCase();
                    _this.anyFutureKeyword = a;
                    _this.kickOffSearch();
                });
            };
            class_1.prototype.stopObserveSearchKeyword = function () {
                this._searchKeywordSubr && this._searchKeywordSubr.unsubscribe();
            };
            class_1.prototype.cancelTypedKeyword = function () {
                this.searchControl.setValue('');
            };
            return class_1;
        }(constructor));
    }

    exports.NgxDatatableExternalData = NgxDatatableExternalData;
    exports.NgxDatatableExternalDataWithOperations = NgxDatatableExternalDataWithOperations;
    exports.NgxDatatableLocalData = NgxDatatableLocalData;
    exports.NgxDatatablePoweredBase = NgxDatatablePoweredBase;
    exports.addOrEditPromise = addOrEditPromise;
    exports.countProperties = countProperties;
    exports.defaultInputTypeValue = defaultInputTypeValue;
    exports.defaultSettings = defaultSettings;
    exports.getInputType = getInputType;
    exports.hasLocalFilterDecorator = hasLocalFilterDecorator;
    exports.noopPromise = noopPromise;
    exports.rmPromise = rmPromise;
    exports.sliceArray = sliceArray;
    exports.supportOperationsDecorator = supportOperationsDecorator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-reactive-table.umd.js.map
