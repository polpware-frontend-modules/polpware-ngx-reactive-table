import { __extends, __awaiter, __generator, __spread, __assign } from 'tslib';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

var noopPromise = function (data) { return new Promise(function (resolve, reject) {
    resolve(data);
}); };
var deletePromise = function (data) { return new Promise(function (resolve, reject) {
    resolve();
}); };
var createPromise = function (data) { return new Promise(function (resolve, reject) {
    var newData = Object.assign({}, data, { id: new Date().getTime() });
    resolve(newData);
}); };
var updatePromise = function (data) { return new Promise(function (resolve, reject) {
    var newData = Object.assign({}, data);
    resolve(newData);
}); };
var defaultSettings = {
    pageSize: 40,
    canCreate: false,
    canUpdate: false,
    canDelete: false,
    createAsyncHandler: createPromise,
    updateAsyncHandler: updatePromise,
    deleteAsyncHandler: deletePromise
};
function adaptToGeneralPagedRequest(input) {
    return {
        pageSize: input.maxResultCount,
        pageIndex: Math.floor(input.skipCount / input.maxResultCount)
    };
}
function adaptToAbpPagedRequest(input) {
    return {
        skipCount: input.pageIndex * input.pageSize,
        maxResultCount: input.pageSize
    };
}

var NgxDatatablePoweredBase = /** @class */ (function () {
    function NgxDatatablePoweredBase() {
        // Note that we do not make settings be an input,
        // becasue the behavior of an input in the abstract base class is not well-defined
        // Sometime, it works  and sometimes it causes compilation errors.
        this.settings = defaultSettings;
        this.ColumnMode = ColumnMode;
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
    NgxDatatableExternalData.prototype.onPageSizeChanged = function (size) {
        this.pageSize = size;
        this.refresh();
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
        _this.SelectionType = SelectionType;
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
        _this.SelectionType = SelectionType;
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
    return NgxDatatableLocalData;
}(NgxDatatablePoweredBase));
var NgxDatatableLocalDataWithInlineSearch = /** @class */ (function (_super) {
    __extends(NgxDatatableLocalDataWithInlineSearch, _super);
    function NgxDatatableLocalDataWithInlineSearch() {
        var _this = _super.call(this) || this;
        _this.SelectionType = SelectionType;
        // Support selected
        _this.selected = [];
        // Suport editing
        _this.editing = {};
        _this.backup = {};
        return _this;
    }
    NgxDatatableLocalDataWithInlineSearch.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    NgxDatatableLocalDataWithInlineSearch.prototype.startAdd = function () { };
    NgxDatatableLocalDataWithInlineSearch.prototype.startEdit = function (rowIndex) { };
    // Support editing an existing one and adding a new one
    NgxDatatableLocalDataWithInlineSearch.prototype.cancelEdit = function (rowIndex) { };
    ;
    NgxDatatableLocalDataWithInlineSearch.prototype.confirmEditAsync = function (rowIndex) {
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
    NgxDatatableLocalDataWithInlineSearch.prototype.updateValue = function (event, prop, rowIndex) { };
    NgxDatatableLocalDataWithInlineSearch.prototype.cleanEditing = function (rowIndex) { };
    NgxDatatableLocalDataWithInlineSearch.prototype.rmAsync = function () {
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
    NgxDatatableLocalDataWithInlineSearch.prototype.startObserveSearchKeyword = function () { };
    NgxDatatableLocalDataWithInlineSearch.prototype.stopObserveSearchKeyword = function () { };
    return NgxDatatableLocalDataWithInlineSearch;
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
        class_1.prototype.onSelect = function (a) {
            if (a && a.selected && Array.isArray(a.selected)) {
                this.selected = __spread(a.selected);
            }
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
            // Disable sorting
            this.sorts = [];
            // Add the element into the rows (no backup)
            this.datatable.rows = __spread([newElem], this.datatable._internalRows);
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
            // Disable sorts
            this.sorts = [];
            var data = this.datatable._internalRows[rowIndex];
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
            var firstPart = sliceArray(this.datatable._internalRows, 0, rowIndex - 1);
            var secondPart = sliceArray(this.datatable._internalRows, rowIndex + 1, this.datatable._internalRows.length - 1);
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
                var elem, newElem, op, firstPart, secondPart, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            elem = this.datatable._internalRows[rowIndex];
                            newElem = elem;
                            op = '';
                            if (!elem.id) return [3 /*break*/, 3];
                            op = 'update';
                            if (!this.settings.updateAsyncHandler) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.settings.updateAsyncHandler(elem)];
                        case 1:
                            newElem = _a.sent();
                            _a.label = 2;
                        case 2: return [3 /*break*/, 5];
                        case 3:
                            op = 'create';
                            if (!this.settings.createAsyncHandler) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.settings.createAsyncHandler(elem)];
                        case 4:
                            newElem = _a.sent();
                            _a.label = 5;
                        case 5:
                            firstPart = sliceArray(this.datatable._internalRows, 0, rowIndex - 1);
                            secondPart = sliceArray(this.datatable._internalRows, rowIndex + 1, this.rows.length - 1);
                            this.rows = __spread(firstPart, [newElem], secondPart);
                            this.cleanEditing(rowIndex);
                            delete this.backup[rowIndex];
                            this.publish({
                                op: op,
                                data: newElem,
                                rows: this.rows
                            });
                            return [3 /*break*/, 7];
                        case 6:
                            e_1 = _a.sent();
                            this.noty.error('Sorry, something went wrong!', 'Operation result');
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        class_1.prototype.updateValue = function (event, prop, rowIndex) {
            this.datatable._internalRows[rowIndex][prop] = event.target.value;
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
                            if (!this.settings.deleteAsyncHandler) return [3 /*break*/, 2];
                            // Expect to be a transaction 
                            return [4 /*yield*/, this.settings.deleteAsyncHandler(this.selected)];
                        case 1:
                            // Expect to be a transaction 
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            // This operation preserve sorting
                            // Therfore, we on purpose use rows instead of internal rows
                            // Do not refresh; just delete them from the local set.
                            // Update data
                            this.rows = this.rows.filter(function (a) { return !_this.selected.some(function (b) { return b === a; }); });
                            this.totalCount = this.totalCount - this.selected.length;
                            oldSelected = this.selected;
                            this.selected = [];
                            this.noty.success('Data has been deleted successfully!', 'Operation result');
                            this.publish({
                                op: 'delete',
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

function hasInlineSearchDecorator(constructor) {
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
        return class_1;
    }(constructor));
}

/*
 * Public API Surface of ngx-reactive-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDatatableExternalData, NgxDatatableExternalDataWithOperations, NgxDatatableLocalData, NgxDatatableLocalDataWithInlineSearch, NgxDatatablePoweredBase, adaptToAbpPagedRequest, adaptToGeneralPagedRequest, countProperties, createPromise, defaultInputTypeValue, defaultSettings, deletePromise, getInputType, hasInlineSearchDecorator, noopPromise, sliceArray, supportOperationsDecorator, updatePromise };
//# sourceMappingURL=polpware-ngx-reactive-table.js.map
