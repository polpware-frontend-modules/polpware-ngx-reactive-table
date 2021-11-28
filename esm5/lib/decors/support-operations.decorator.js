import { __assign, __awaiter, __extends, __generator, __read, __spread } from "tslib";
import { countProperties, defaultInputTypeValue, sliceArray } from '../utils';
export function supportOperationsDecorator(constructor) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1vcGVyYXRpb25zLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JzL3N1cHBvcnQtb3BlcmF0aW9ucy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzlFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBa0UsV0FBYztJQUN0SDtRQUFxQiwyQkFBVztRQUF6Qjs7UUE4SVAsQ0FBQztRQTVJRyxzQkFBSSwrQkFBVTtpQkFBZDtnQkFDSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7OztXQUFBO1FBRUQsMEJBQVEsR0FBUixVQUFTLENBQXlCO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLFlBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQztRQUVELDBCQUFRLEdBQVI7WUFBQSxpQkFxQkM7WUFwQkcsSUFBTSxPQUFPLEdBQVE7Z0JBQ2pCLEVBQUUsRUFBRSxFQUFFO2FBQ1QsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUNaLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN4RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFB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QUNaLElBQUksRUFBRSxXQUFXO2dDQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NkJBQ2xCLENBQUMsQ0FBQzs7Ozs0QkFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7U0FFM0U7UUFFTCxjQUFDO0lBQUQsQ0FBQyxBQTlJTSxDQUFjLFdBQVcsR0E4SS9CO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGNvdW50UHJvcGVydGllcywgZGVmYXVsdElucHV0VHlwZVZhbHVlLCBzbGljZUFycmF5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIElEZWNvcmF0b3JQcmVyZXF1aXNpdGU8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gZXh0ZW5kcyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+ID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlPFQ+IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3I8VCBleHRlbmRzIElSb3dEYXRhVHlwZSwgVSBleHRlbmRzIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPFQ+Pihjb25zdHJ1Y3RvcjogVSkge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgICAgICBnZXQgYW55RWRpdGluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50UHJvcGVydGllcyh0aGlzLmJhY2t1cCkgPiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TZWxlY3QoYTogeyBzZWxlY3RlZDogQXJyYXk8VD4gfSkge1xyXG4gICAgICAgICAgICBpZiAoYSAmJiBhLnNlbGVjdGVkICYmIEFycmF5LmlzQXJyYXkoYS5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbLi4uYS5zZWxlY3RlZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0QWRkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1bYS5wcm9wXSA9IGRlZmF1bHRJbnB1dFR5cGVWYWx1ZShhLmlucHV0VHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHNvcnRpbmdcclxuICAgICAgICAgICAgdGhpcy5zb3J0cyA9IFtdO1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVsZW1lbnQgaW50byB0aGUgcm93cyAobm8gYmFja3VwKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGF0YWJsZS5yb3dzID0gW25ld0VsZW0sIC4uLnRoaXMuZGF0YXRhYmxlLl9pbnRlcm5hbFJvd3NdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2t1cFswXSA9IG5ld0VsZW07XHJcbiAgICAgICAgICAgIC8vIEVuYWJsZSBlZGl0aW5nIGl0LlxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nWzAgKyAnLScgKyBhLnByb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHNvcnRzXHJcbiAgICAgICAgICAgIHRoaXMuc29ydHMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YXRhYmxlLl9pbnRlcm5hbFJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2t1cFtyb3dJbmRleF0gPSB7IC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZ1tyb3dJbmRleCArICctJyArIGEucHJvcF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgICAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgb2xkIHZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHNsaWNlQXJyYXkodGhpcy5kYXRhdGFibGUuX2ludGVybmFsUm93cywgMCwgcm93SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kUGFydCA9IHNsaWNlQXJyYXkodGhpcy5kYXRhdGFibGUuX2ludGVybmFsUm93cywgcm93SW5kZXggKyAxLCB0aGlzLmRhdGF0YWJsZS5faW50ZXJuYWxSb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5iYWNrdXBbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBBbiBleGlzdGluZyBvbmVcclxuICAgICAgICAgICAgaWYgKGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIGVsZW0sIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBkcm9wIHRoaXMuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4uZmlyc3RQYXJ0LCAuLi5zZWNvbmRQYXJ0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsZWFuRWRpdGluZyhyb3dJbmRleCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJhY2t1cFtyb3dJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5kYXRhdGFibGUuX2ludGVybmFsUm93c1tyb3dJbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWxlbTogSVJvd0RhdGFUeXBlID0gZWxlbTtcclxuICAgICAgICAgICAgICAgIGxldCBvcDogJ2NyZWF0ZScgfCAndXBkYXRlJyB8ICcnID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wID0gJ3VwZGF0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFuIGV4aXN0aW5nIGVsbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnVwZGF0ZUFzeW5jSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtID0gYXdhaXQgdGhpcy5zZXR0aW5ncy51cGRhdGVBc3luY0hhbmRsZXIoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcCA9ICdjcmVhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhbiBleGlzdGluZyBlbG1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jcmVhdGVBc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbSA9IGF3YWl0IHRoaXMuc2V0dGluZ3MuY3JlYXRlQXN5bmNIYW5kbGVyKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBEbyB3ZSBuZWVkIHRvIHVwZGF0ZSBkYXRhID8/Pz9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHNsaWNlQXJyYXkodGhpcy5kYXRhdGFibGUuX2ludGVybmFsUm93cywgMCwgcm93SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcnQgPSBzbGljZUFycmF5KHRoaXMuZGF0YXRhYmxlLl9pbnRlcm5hbFJvd3MsIHJvd0luZGV4ICsgMSwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLmZpcnN0UGFydCwgbmV3RWxlbSwgLi4uc2Vjb25kUGFydF07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wOiBvcCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXdFbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90eS5lcnJvcignU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGF0YWJsZS5faW50ZXJuYWxSb3dzW3Jvd0luZGV4XVtwcm9wXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFuRWRpdGluZyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5lZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgYS5wcm9wXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBybUFzeW5jKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZGVsZXRlQXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0IHRvIGJlIGEgdHJhbnNhY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5ncy5kZWxldGVBc3luY0hhbmRsZXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIG9wZXJhdGlvbiBwcmVzZXJ2ZSBzb3J0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVyZm9yZSwgd2Ugb24gcHVycG9zZSB1c2Ugcm93cyBpbnN0ZWFkIG9mIGludGVybmFsIHJvd3NcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgcmVmcmVzaDsganVzdCBkZWxldGUgdGhlbSBmcm9tIHRoZSBsb2NhbCBzZXQuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihhID0+ICF0aGlzLnNlbGVjdGVkLnNvbWUoYiA9PiBiID09PSBhKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgLSB0aGlzLnNlbGVjdGVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LnN1Y2Nlc3MoJ0RhdGEgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkhJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdkZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IG9sZFNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90eS5lcnJvcignU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==