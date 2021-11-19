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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1vcGVyYXRpb25zLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JzL3N1cHBvcnQtb3BlcmF0aW9ucy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzlFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBa0UsV0FBYztJQUN0SDtRQUFxQiwyQkFBVztRQUF6Qjs7UUF3SFAsQ0FBQztRQXRIRyxzQkFBSSwrQkFBVTtpQkFBZDtnQkFDSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7OztXQUFBO1FBRUQsMEJBQVEsR0FBUixVQUFTLEVBQVk7Z0JBQVYsc0JBQVE7WUFDZixJQUFJLENBQUMsUUFBUSxZQUFPLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQUEsaUJBbUJDO1lBbEJHLElBQU0sT0FBTyxHQUFRO2dCQUNqQixFQUFFLEVBQUUsRUFBRTthQUNULENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILDRDQUE0QztZQUM1QyxJQUFJLENBQUMsSUFBSSxhQUFJLE9BQU8sR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUN0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QUksT0FBQSxDQUFDLEtBQUssQ0FBQyxFQUFQLENBQU8sQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7NEJBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs0QkFFbkQsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzRCQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzRCQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNULEVBQUUsRUFBRSxJQUFJO2dDQUNSLElBQUksRUFBRSxXQUFXO2dDQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NkJBQ2xCLENBQUMsQ0FBQzs7Ozs0QkFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7U0FFM0U7UUFFTCxjQUFDO0lBQUQsQ0FBQyxBQXhITSxDQUFjLFdBQVcsR0F3SC9CO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVRhYmxlV2l0aE9wZXJhdGlvbnNCYXNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGNvdW50UHJvcGVydGllcywgZGVmYXVsdElucHV0VHlwZVZhbHVlLCBzbGljZUFycmF5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW50ZXJmYWNlIElEZWNvcmF0b3JQcmVyZXF1aXNpdGU8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gZXh0ZW5kcyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPFQgZXh0ZW5kcyBJUm93RGF0YVR5cGU+ID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlPFQ+IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3I8VCBleHRlbmRzIElSb3dEYXRhVHlwZSwgVSBleHRlbmRzIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPFQ+Pihjb25zdHJ1Y3RvcjogVSkge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2U8VD4ge1xyXG5cclxuICAgICAgICBnZXQgYW55RWRpdGluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50UHJvcGVydGllcyh0aGlzLmJhY2t1cCkgPiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRBZGQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW06IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbVthLnByb3BdID0gZGVmYXVsdElucHV0VHlwZVZhbHVlKGEuaW5wdXRUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZWxlbWVudCBpbnRvIHRoZSByb3dzIChubyBiYWNrdXApXHJcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFtuZXdFbGVtLCAuLi50aGlzLnJvd3NdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2t1cFswXSA9IG5ld0VsZW07XHJcbiAgICAgICAgICAgIC8vIEVuYWJsZSBlZGl0aW5nIGl0LlxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nWzAgKyAnLScgKyBhLnByb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yb3dzW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrdXBbcm93SW5kZXhdID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBhLnByb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICAgICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIG9sZCB2YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgMCwgcm93SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kUGFydCA9IHNsaWNlQXJyYXkodGhpcy5yb3dzLCByb3dJbmRleCArIDEsIHRoaXMucm93cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgLy8gQW4gZXhpc3Rpbmcgb25lXHJcbiAgICAgICAgICAgIGlmIChlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4uZmlyc3RQYXJ0LCBlbGVtLCAuLi5zZWNvbmRQYXJ0XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZHJvcCB0aGlzLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLmZpcnN0UGFydCwgLi4uc2Vjb25kUGFydF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5iYWNrdXBbcm93SW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMucm93c1tyb3dJbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWxlbTogSVJvd0RhdGFUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFkZE9yRWRpdEFzeW5jSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW0gPSBhd2FpdCB0aGlzLnNldHRpbmdzLmFkZE9yRWRpdEFzeW5jSGFuZGxlcihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBEbyB3ZSBuZWVkIHRvIHVwZGF0ZSBkYXRhID8/Pz9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgMCwgcm93SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIHJvd0luZGV4ICsgMSwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIG5ld0VsZW0sIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wOiAnYWRkT3JFZGl0JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXdFbGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90eS5lcnJvcignU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50OiBhbnksIHByb3A6IHN0cmluZywgcm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW3Byb3BdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW5FZGl0aW5nKHJvd0luZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBhLnByb3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHJtQXN5bmMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5ybUFzeW5jSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdCB0byBiZSBhIHRyYW5zYWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3Mucm1Bc3luY0hhbmRsZXIodGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgcmVmcmVzaDsganVzdCBkZWxldGUgdGhlbSBmcm9tIHRoZSBsb2NhbCBzZXQuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihhID0+ICF0aGlzLnNlbGVjdGVkLnNvbWUoYiA9PiBiID09PSBhKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgLSB0aGlzLnNlbGVjdGVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LnN1Y2Nlc3MoJ0RhdGEgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkhJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdybScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogb2xkU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5yb3dzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LmVycm9yKCdTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19