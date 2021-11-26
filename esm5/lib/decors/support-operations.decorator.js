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
        class_1.prototype.onSelect = function (_a) {
            var selected = _a.selected;
            this.selected = __spread(selected);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1vcGVyYXRpb25zLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JzL3N1cHBvcnQtb3BlcmF0aW9ucy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzlFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBa0UsV0FBYztJQUN0SDtRQUFxQiwyQkFBVztRQUF6Qjs7UUF3SVAsQ0FBQztRQXRJRyxzQkFBSSwrQkFBVTtpQkFBZDtnQkFDSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7OztXQUFBO1FBRUQsMEJBQVEsR0FBUixVQUFTLEVBQVk7Z0JBQVYsc0JBQVE7WUFDZixJQUFJLENBQUMsUUFBUSxZQUFPLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQUEsaUJBbUJDO1lBbEJHLElBQU0sT0FBTyxHQUFRO2dCQUNqQixFQUFFLEVBQUUsRUFBRTthQUNULENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILDRDQUE0QztZQUM1QyxJQUFJLENBQUMsSUFBSSxhQUFJLE9BQU8sR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUN0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LENBQUM7Ozs7NEJBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7O1NBRTNFO1FBRUwsY0FBQztJQUFELENBQUMsQUF4SU0sQ0FBYyxXQUFXLEdBd0kvQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUm93RGF0YVR5cGUsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBjb3VudFByb3BlcnRpZXMsIGRlZmF1bHRJbnB1dFR5cGVWYWx1ZSwgc2xpY2VBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+IGV4dGVuZHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxufVxyXG5cclxudHlwZSBEZWNvcmF0b3JQcmVyZXF1aXNpdGVDbGFzczxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPiA9IHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogSURlY29yYXRvclByZXJlcXVpc2l0ZTxUPiB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRPcGVyYXRpb25zRGVjb3JhdG9yPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGUsIFUgZXh0ZW5kcyBEZWNvcmF0b3JQcmVyZXF1aXNpdGVDbGFzczxUPj4oY29uc3RydWN0b3I6IFUpIHtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxuXHJcbiAgICAgICAgZ2V0IGFueUVkaXRpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudFByb3BlcnRpZXModGhpcy5iYWNrdXApID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gWy4uLnNlbGVjdGVkXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0QWRkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1bYS5wcm9wXSA9IGRlZmF1bHRJbnB1dFR5cGVWYWx1ZShhLmlucHV0VHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVsZW1lbnQgaW50byB0aGUgcm93cyAobm8gYmFja3VwKVxyXG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbbmV3RWxlbSwgLi4udGhpcy5yb3dzXTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdGhpcy50b3RhbENvdW50ICsgMTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrdXBbMF0gPSBuZXdFbGVtO1xyXG4gICAgICAgICAgICAvLyBFbmFibGUgZWRpdGluZyBpdC5cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZ1swICsgJy0nICsgYS5wcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRFZGl0KHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucm93c1tyb3dJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3VwW3Jvd0luZGV4XSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgYS5wcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3VwcG9ydCBlZGl0aW5nIGFuIGV4aXN0aW5nIG9uZSBhbmQgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgICAgIGNhbmNlbEVkaXQocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBvbGQgdmFsdWVcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIDAsIHJvd0luZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgcm93SW5kZXggKyAxLCB0aGlzLnJvd3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmJhY2t1cFtyb3dJbmRleF07XHJcbiAgICAgICAgICAgIC8vIEFuIGV4aXN0aW5nIG9uZVxyXG4gICAgICAgICAgICBpZiAoZWxlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLmZpcnN0UGFydCwgZWxlbSwgLi4uc2Vjb25kUGFydF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGRyb3AgdGhpcy5cclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW5FZGl0aW5nKHJvd0luZGV4KTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBhc3luYyBjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0VsZW06IElSb3dEYXRhVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3A6ICdjcmVhdGUnIHwgJ3VwZGF0ZScgfCAnJyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcCA9ICd1cGRhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhbiBleGlzdGluZyBlbG1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy51cGRhdGVBc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbSA9IGF3YWl0IHRoaXMuc2V0dGluZ3MudXBkYXRlQXN5bmNIYW5kbGVyKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBEbyB3ZSBuZWVkIHRvIHVwZGF0ZSBkYXRhID8/Pz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIDAsIHJvd0luZGV4IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgcm93SW5kZXggKyAxLCB0aGlzLnJvd3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIG5ld0VsZW0sIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AgPSAnY3JlYXRlJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYW4gZXhpc3RpbmcgZWxtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudXBkYXRlQXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW0gPSBhd2FpdCB0aGlzLnNldHRpbmdzLmNyZWF0ZUFzeW5jSGFuZGxlcihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogRG8gd2UgbmVlZCB0byB1cGRhdGUgZGF0YSA/Pz8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHNsaWNlQXJyYXkodGhpcy5yb3dzLCAwLCByb3dJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIHJvd0luZGV4ICsgMSwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4uZmlyc3RQYXJ0LCBuZXdFbGVtLCAuLi5zZWNvbmRQYXJ0XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wOiBvcCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXdFbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90eS5lcnJvcignU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW3Byb3BdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBhLnByb3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5kZWxldGVBc3luY0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3QgdG8gYmUgYSB0cmFuc2FjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLmRlbGV0ZUFzeW5jSGFuZGxlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCByZWZyZXNoOyBqdXN0IGRlbGV0ZSB0aGVtIGZyb20gdGhlIGxvY2FsIHNldC5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGEgPT4gIXRoaXMuc2VsZWN0ZWQuc29tZShiID0+IGIgPT09IGEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMudG90YWxDb3VudCAtIHRoaXMuc2VsZWN0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdHkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBvcDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogb2xkU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5yb3dzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LmVycm9yKCdTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19