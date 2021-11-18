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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1vcGVyYXRpb25zLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JzL3N1cHBvcnQtb3BlcmF0aW9ucy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzlFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBa0UsV0FBYztJQUN0SDtRQUFxQiwyQkFBVztRQUF6Qjs7UUF5SFAsQ0FBQztRQXZIRyxzQkFBSSwrQkFBVTtpQkFBZDtnQkFDSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7OztXQUFBO1FBRUQsMEJBQVEsR0FBUixVQUFTLEVBQVk7O2dCQUFWLHNCQUFRO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsQ0FBQSxLQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLG9CQUFJLFFBQVEsR0FBRTtRQUNwQyxDQUFDO1FBRUQsMEJBQVEsR0FBUjtZQUFBLGlCQW1CQztZQWxCRyxJQUFNLE9BQU8sR0FBUTtnQkFDakIsRUFBRSxFQUFFLEVBQUU7YUFDVCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hEO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLElB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LEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsRUFBUCxDQUFPLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDOzRCQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NEJBRW5ELFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs0QkFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs0QkFDN0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDVCxFQUFFLEVBQUUsSUFBSTtnQ0FDUixJQUFJLEVBQUUsV0FBVztnQ0FDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzZCQUNsQixDQUFDLENBQUM7Ozs7NEJBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7O1NBRTNFO1FBRUwsY0FBQztJQUFELENBQUMsQUF6SE0sQ0FBYyxXQUFXLEdBeUgvQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUm93RGF0YVR5cGUsIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBjb3VudFByb3BlcnRpZXMsIGRlZmF1bHRJbnB1dFR5cGVWYWx1ZSwgc2xpY2VBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmludGVyZmFjZSBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+IGV4dGVuZHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxufVxyXG5cclxudHlwZSBEZWNvcmF0b3JQcmVyZXF1aXNpdGVDbGFzczxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPiA9IHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogSURlY29yYXRvclByZXJlcXVpc2l0ZTxUPiB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRPcGVyYXRpb25zRGVjb3JhdG9yPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGUsIFUgZXh0ZW5kcyBEZWNvcmF0b3JQcmVyZXF1aXNpdGVDbGFzczxUPj4oY29uc3RydWN0b3I6IFUpIHtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIGltcGxlbWVudHMgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlPFQ+IHtcclxuXHJcbiAgICAgICAgZ2V0IGFueUVkaXRpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudFByb3BlcnRpZXModGhpcy5iYWNrdXApID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSgwLCB0aGlzLnNlbGVjdGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaCguLi5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEFkZCgpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RWxlbTogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtW2EucHJvcF0gPSBkZWZhdWx0SW5wdXRUeXBlVmFsdWUoYS5pbnB1dFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbGVtZW50IGludG8gdGhlIHJvd3MgKG5vIGJhY2t1cClcclxuICAgICAgICAgICAgdGhpcy5yb3dzID0gW25ld0VsZW0sIC4uLnRoaXMucm93c107XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMudG90YWxDb3VudCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3VwWzBdID0gbmV3RWxlbTtcclxuICAgICAgICAgICAgLy8gRW5hYmxlIGVkaXRpbmcgaXQuXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdbMCArICctJyArIGEucHJvcF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0RWRpdChyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2t1cFtyb3dJbmRleF0gPSB7IC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZ1tyb3dJbmRleCArICctJyArIGEucHJvcF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFN1cHBvcnQgZWRpdGluZyBhbiBleGlzdGluZyBvbmUgYW5kIGFkZGluZyBhIG5ldyBvbmVcclxuICAgICAgICBjYW5jZWxFZGl0KHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgb2xkIHZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHNsaWNlQXJyYXkodGhpcy5yb3dzLCAwLCByb3dJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIHJvd0luZGV4ICsgMSwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5iYWNrdXBbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBBbiBleGlzdGluZyBvbmVcclxuICAgICAgICAgICAgaWYgKGVsZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIGVsZW0sIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBkcm9wIHRoaXMuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4uZmlyc3RQYXJ0LCAuLi5zZWNvbmRQYXJ0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsZWFuRWRpdGluZyhyb3dJbmRleCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJhY2t1cFtyb3dJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgYXN5bmMgY29uZmlybUVkaXRBc3luYyhyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5yb3dzW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdFbGVtOiBJUm93RGF0YVR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWRkT3JFZGl0QXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbSA9IGF3YWl0IHRoaXMuc2V0dGluZ3MuYWRkT3JFZGl0QXN5bmNIYW5kbGVyKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IERvIHdlIG5lZWQgdG8gdXBkYXRlIGRhdGEgPz8/P1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHNsaWNlQXJyYXkodGhpcy5yb3dzLCAwLCByb3dJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgcm93SW5kZXggKyAxLCB0aGlzLnJvd3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLmZpcnN0UGFydCwgbmV3RWxlbSwgLi4uc2Vjb25kUGFydF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuRWRpdGluZyhyb3dJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5iYWNrdXBbcm93SW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdhZGRPckVkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ld0VsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5yb3dzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LmVycm9yKCdTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93c1tyb3dJbmRleF1bcHJvcF0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWRpdGluZ1tyb3dJbmRleCArICctJyArIGEucHJvcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnJtQXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0IHRvIGJlIGEgdHJhbnNhY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5ncy5ybUFzeW5jSGFuZGxlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCByZWZyZXNoOyBqdXN0IGRlbGV0ZSB0aGVtIGZyb20gdGhlIGxvY2FsIHNldC5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGEgPT4gIXRoaXMuc2VsZWN0ZWQuc29tZShiID0+IGIgPT09IGEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMudG90YWxDb3VudCAtIHRoaXMuc2VsZWN0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdHkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBvcDogJ3JtJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBvbGRTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnJvd3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdHkuZXJyb3IoJ1NvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZyEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=