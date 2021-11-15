import { __awaiter } from 'tslib';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ɵɵdefineDirective } from '@angular/core';

const noopPromise = (data) => new Promise((resolve, reject) => {
    resolve(data);
});
const rmPromise = (data) => new Promise((resolve, reject) => {
    resolve();
});
const addOrEditPromise = (data) => new Promise((resolve, reject) => {
    const newData = Object.assign(data, { id: new Date().getTime() });
    resolve(newData);
});
const defaultSettings = {
    pageSize: 40,
    editable: false,
    rmAsyncHandler: rmPromise,
    addOrEditAsyncHandler: addOrEditPromise
};

class NgxDatatablePoweredBase {
    constructor() {
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
    ngOnInit() {
        const settings = Object.assign({}, defaultSettings, this.settings);
        this.pageSize = settings.pageSize;
    }
}
NgxDatatablePoweredBase.ɵfac = function NgxDatatablePoweredBase_Factory(t) { return new (t || NgxDatatablePoweredBase)(); };
NgxDatatablePoweredBase.ɵdir = ɵɵdefineDirective({ type: NgxDatatablePoweredBase, inputs: { settings: "settings" } });

class NgxDatatableExternalData extends NgxDatatablePoweredBase {
    constructor() {
        super();
    }
    onPageChanged(evt) {
        this.buildTableDataAsync(evt.offset);
    }
    refresh() {
        // The other settings stay the same.
        this.buildTableDataAsync(0);
    }
}
class NgxDatatableExternalDataWithOperations extends NgxDatatableExternalData {
    constructor() {
        super();
        this.SelectionType = SelectionType;
    }
    onSelect({ selected }) { }
    startAdd() { }
    startEdit(rowIndex) { }
    // Support editing an existing one and adding a new one
    cancelEdit(rowIndex) { }
    ;
    confirmEditAsync(rowIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(rowIndex);
        });
    }
    updateValue(event, prop, rowIndex) { }
    cleanEditing(rowIndex) { }
    rmAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(null);
        });
    }
}

// Dervied classes must use decorator to provide implementation
class NgxDatatableLocalData extends NgxDatatablePoweredBase {
    constructor() {
        super();
        this.SelectionType = SelectionType;
    }
    onSelect({ selected }) { }
    startAdd() { }
    startEdit(rowIndex) { }
    // Support editing an existing one and adding a new one
    cancelEdit(rowIndex) { }
    ;
    confirmEditAsync(rowIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(rowIndex);
        });
    }
    updateValue(event, prop, rowIndex) { }
    cleanEditing(rowIndex) { }
    rmAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield noopPromise(null);
        });
    }
}

/**
 * Returns a slice of array (with value semantics) [fromIndex, endIndex]
 * @param data
 * @param fromIndex
 * @param endIndex
 */
function sliceArray(data, fromIndex, endIndex) {
    return data.filter((_, index) => {
        return index >= fromIndex && index <= endIndex;
    });
}
function countProperties(obj) {
    let count = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            ++count;
        }
    }
    return count;
}
function getInputType(data) {
    const ty = typeof data;
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
    return class extends constructor {
        get anyEditing() {
            return countProperties(this.backup) > 0;
        }
        onSelect({ selected }) {
            this.selected.splice(0, this.selected.length);
            this.selected.push(...selected);
        }
        startAdd() {
            const newElem = {
                id: ''
            };
            this.columns.forEach(a => {
                if (a.editable) {
                    newElem[a.prop] = defaultInputTypeValue(a.inputType);
                }
            });
            // Add the element into the rows (no backup)
            this.rows = [newElem, ...this.rows];
            this.totalCount = this.totalCount + 1;
            this.backup[0] = newElem;
            // Enable editing it.
            this.columns.forEach(a => {
                if (a.editable) {
                    this.editing[0 + '-' + a.prop] = true;
                }
            });
        }
        startEdit(rowIndex) {
            const data = this.rows[rowIndex];
            this.backup[rowIndex] = Object.assign({}, data);
            this.columns.forEach(a => {
                if (a.editable) {
                    this.editing[rowIndex + '-' + a.prop] = true;
                }
            });
        }
        // Support editing an existing one and adding a new one
        cancelEdit(rowIndex) {
            // Replace the old value
            const firstPart = sliceArray(this.rows, 0, rowIndex - 1);
            const secondPart = sliceArray(this.rows, rowIndex + 1, this.rows.length - 1);
            const elem = this.backup[rowIndex];
            // An existing one
            if (elem.id) {
                this.rows = [...firstPart, elem, ...secondPart];
            }
            else {
                // Otherwise, drop this.
                this.rows = [...firstPart, ...secondPart];
            }
            this.cleanEditing(rowIndex);
            delete this.backup[rowIndex];
        }
        confirmEditAsync(rowIndex) {
            return __awaiter(this, void 0, void 0, function* () {
                const elem = this.rows[rowIndex];
                if (this.settings.addOrEditAsyncHandler) {
                    const newElem = yield this.settings.addOrEditAsyncHandler(elem);
                    // todo: Do we need to update data ????
                    const firstPart = sliceArray(this.rows, 0, rowIndex - 1);
                    const secondPart = sliceArray(this.rows, rowIndex + 1, this.rows.length - 1);
                    this.rows = [...firstPart, newElem, ...secondPart];
                }
                this.cleanEditing(rowIndex);
                delete this.backup[rowIndex];
            });
        }
        updateValue(event, prop, rowIndex) {
            this.rows[rowIndex][prop] = event.target.value;
        }
        cleanEditing(rowIndex) {
            this.columns.forEach(a => {
                if (a.editable) {
                    delete this.editing[rowIndex + '-' + a.prop];
                }
            });
        }
        rmAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.settings.rmAsyncHandler) {
                    // Expect to be a transaction 
                    yield this.settings.rmAsyncHandler(this.selected);
                }
                // Do not refresh; just delete them from the local set.
                // Update data
                this.rows = this.rows.filter(a => !this.selected.some(b => b === a));
                this.totalCount = this.totalCount - this.selected.length;
                this.selected = [];
            });
        }
    };
}

/*
 * Public API Surface of ngx-reactive-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDatatableExternalData, NgxDatatableExternalDataWithOperations, NgxDatatableLocalData, NgxDatatablePoweredBase, addOrEditPromise, countProperties, defaultInputTypeValue, defaultSettings, getInputType, noopPromise, rmPromise, sliceArray, supportOperationsDecorator };
//# sourceMappingURL=polpware-ngx-reactive-table.js.map