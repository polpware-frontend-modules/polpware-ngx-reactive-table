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
                var elem, newElem, op, firstPart, secondPart, firstPart, secondPart, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            elem = this.rows[rowIndex];
                            newElem = null;
                            op = '';
                            if (!elem.id) return [3 /*break*/, 3];
                            op = 'update';
                            if (!this.settings.updateAsyncHandler) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.settings.updateAsyncHandler(elem)];
                        case 1:
                            newElem = _a.sent();
                            firstPart = sliceArray(this.rows, 0, rowIndex - 1);
                            secondPart = sliceArray(this.rows, rowIndex + 1, this.rows.length - 1);
                            this.rows = __spread(firstPart, [newElem], secondPart);
                            _a.label = 2;
                        case 2: return [3 /*break*/, 5];
                        case 3:
                            op = 'create';
                            if (!this.settings.updateAsyncHandler) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.settings.createAsyncHandler(elem)];
                        case 4:
                            newElem = _a.sent();
                            firstPart = sliceArray(this.rows, 0, rowIndex - 1);
                            secondPart = sliceArray(this.rows, rowIndex + 1, this.rows.length - 1);
                            this.rows = __spread(firstPart, [newElem], secondPart);
                            _a.label = 5;
                        case 5:
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
                            if (!this.settings.deleteAsyncHandler) return [3 /*break*/, 2];
                            // Expect to be a transaction 
                            return [4 /*yield*/, this.settings.deleteAsyncHandler(this.selected)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1vcGVyYXRpb25zLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JzL3N1cHBvcnQtb3BlcmF0aW9ucy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzlFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBa0UsV0FBYztJQUN0SDtRQUFxQiwyQkFBVztRQUF6Qjs7UUEwSVAsQ0FBQztRQXhJRyxzQkFBSSwrQkFBVTtpQkFBZDtnQkFDSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7OztXQUFBO1FBRUQsMEJBQVEsR0FBUixVQUFTLENBQXlCO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLFlBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQztRQUVELDBCQUFRLEdBQVI7WUFBQSxpQkFtQkM7WUFsQkcsSUFBTSxPQUFPLEdBQVE7Z0JBQ2pCLEVBQUUsRUFBRSxFQUFFO2FBQ1QsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUNaLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN4RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxJQUFJLGFBQUksT0FB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TyxDQUFDO2dDQUNULEVBQUUsRUFBRSxRQUFRO2dDQUNaLElBQUksRUFBRSxXQUFXO2dDQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NkJBQ2xCLENBQUMsQ0FBQzs7Ozs0QkFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7U0FFM0U7UUFFTCxjQUFDO0lBQUQsQ0FBQyxBQTFJTSxDQUFjLFdBQVcsR0EwSS9CO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGNvdW50UHJvcGVydGllcywgZGVmYXVsdElucHV0VHlwZVZhbHVlLCBzbGljZUFycmF5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIElEZWNvcmF0b3JQcmVyZXF1aXNpdGU8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gZXh0ZW5kcyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+ID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlPFQ+IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3I8VCBleHRlbmRzIElSb3dEYXRhVHlwZSwgVSBleHRlbmRzIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPFQ+Pihjb25zdHJ1Y3RvcjogVSkge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgICAgICBnZXQgYW55RWRpdGluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50UHJvcGVydGllcyh0aGlzLmJhY2t1cCkgPiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TZWxlY3QoYTogeyBzZWxlY3RlZDogQXJyYXk8VD4gfSkge1xyXG4gICAgICAgICAgICBpZiAoYSAmJiBhLnNlbGVjdGVkICYmIEFycmF5LmlzQXJyYXkoYS5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbLi4uYS5zZWxlY3RlZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0QWRkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1bYS5wcm9wXSA9IGRlZmF1bHRJbnB1dFR5cGVWYWx1ZShhLmlucHV0VHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVsZW1lbnQgaW50byB0aGUgcm93cyAobm8gYmFja3VwKVxyXG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbbmV3RWxlbSwgLi4udGhpcy5yb3dzXTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdGhpcy50b3RhbENvdW50ICsgMTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrdXBbMF0gPSBuZXdFbGVtO1xyXG4gICAgICAgICAgICAvLyBFbmFibGUgZWRpdGluZyBpdC5cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZ1swICsgJy0nICsgYS5wcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucm93c1tyb3dJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3VwW3Jvd0luZGV4XSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgYS5wcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBvbGQgdmFsdWVcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIDAsIHJvd0luZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgcm93SW5kZXggKyAxLCB0aGlzLnJvd3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmJhY2t1cFtyb3dJbmRleF07XHJcbiAgICAgICAgICAgIC8vIEFuIGV4aXN0aW5nIG9uZVxyXG4gICAgICAgICAgICBpZiAoZWxlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLmZpcnN0UGFydCwgZWxlbSwgLi4uc2Vjb25kUGFydF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGRyb3AgdGhpcy5cclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW5FZGl0aW5nKHJvd0luZGV4KTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0VsZW06IElSb3dEYXRhVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3A6ICdjcmVhdGUnIHwgJ3VwZGF0ZScgfCAnJyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcCA9ICd1cGRhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhbiBleGlzdGluZyBlbG1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy51cGRhdGVBc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbSA9IGF3YWl0IHRoaXMuc2V0dGluZ3MudXBkYXRlQXN5bmNIYW5kbGVyKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBEbyB3ZSBuZWVkIHRvIHVwZGF0ZSBkYXRhID8/Pz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIDAsIHJvd0luZGV4IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgcm93SW5kZXggKyAxLCB0aGlzLnJvd3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIG5ld0VsZW0sIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AgPSAnY3JlYXRlJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYW4gZXhpc3RpbmcgZWxtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudXBkYXRlQXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW0gPSBhd2FpdCB0aGlzLnNldHRpbmdzLmNyZWF0ZUFzeW5jSGFuZGxlcihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogRG8gd2UgbmVlZCB0byB1cGRhdGUgZGF0YSA/Pz8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHNsaWNlQXJyYXkodGhpcy5yb3dzLCAwLCByb3dJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIHJvd0luZGV4ICsgMSwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4uZmlyc3RQYXJ0LCBuZXdFbGVtLCAuLi5zZWNvbmRQYXJ0XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wOiBvcCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXdFbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90eS5lcnJvcignU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW3Byb3BdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBhLnByb3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5kZWxldGVBc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3QgdG8gYmUgYSB0cmFuc2FjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLmRlbGV0ZUFzeW5jSGFuZGxlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCByZWZyZXNoOyBqdXN0IGRlbGV0ZSB0aGVtIGZyb20gdGhlIGxvY2FsIHNldC5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGEgPT4gIXRoaXMuc2VsZWN0ZWQuc29tZShiID0+IGIgPT09IGEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMudG90YWxDb3VudCAtIHRoaXMuc2VsZWN0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdHkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBvcDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogb2xkU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5yb3dzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LmVycm9yKCdTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19