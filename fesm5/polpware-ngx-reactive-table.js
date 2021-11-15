import { __extends, __awaiter, __generator, __spread, __assign } from 'tslib';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ɵɵdefineDirective } from '@angular/core';

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
        this.ColumnMode = ColumnMode;
        this.columns = [];
        this.rows = [];
        this.pageSize = 40;
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
    NgxDatatablePoweredBase.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, defaultSettings, this.settings);
        this.pageSize = this.settings.pageSize;
    };
    NgxDatatablePoweredBase.ɵfac = function NgxDatatablePoweredBase_Factory(t) { return new (t || NgxDatatablePoweredBase)(); };
    NgxDatatablePoweredBase.ɵdir = ɵɵdefineDirective({ type: NgxDatatablePoweredBase, inputs: { settings: "settings" } });
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
                var elem, newElem, firstPart, secondPart;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            elem = this.rows[rowIndex];
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
                            return [2 /*return*/];
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
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
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
                            this.selected = [];
                            return [2 /*return*/];
                    }
                });
            });
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

export { NgxDatatableExternalData, NgxDatatableExternalDataWithOperations, NgxDatatableLocalData, NgxDatatablePoweredBase, addOrEditPromise, countProperties, defaultInputTypeValue, defaultSettings, getInputType, noopPromise, rmPromise, sliceArray, supportOperationsDecorator };
//# sourceMappingURL=polpware-ngx-reactive-table.js.map
