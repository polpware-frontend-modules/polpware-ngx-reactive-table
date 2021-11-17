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
                            this.dataChange.emit({
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
                            this.dataChange.emit({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC1vcGVyYXRpb25zLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JzL3N1cHBvcnQtb3BlcmF0aW9ucy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTzlFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBa0UsV0FBYztJQUN0SDtRQUFxQiwyQkFBVztRQUF6Qjs7UUF5SFAsQ0FBQztRQXZIRyxzQkFBSSwrQkFBVTtpQkFBZDtnQkFDSSxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUM7OztXQUFBO1FBRUQsMEJBQVEsR0FBUixVQUFTLEVBQVk7O2dCQUFWLHNCQUFRO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsQ0FBQSxLQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLG9CQUFJLFFBQVEsR0FBRTtRQUNwQyxDQUFDO1FBRUQsMEJBQVEsR0FBUjtZQUFBLGlCQW1CQztZQWxCRyxJQUFNLE9BQU8sR0FBUTtnQkFDakIsRUFBRSxFQUFFLEVBQUU7YUFDVCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hEO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLElB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SSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxFQUFQLENBQU8sQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7NEJBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs0QkFFbkQsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzRCQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzRCQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQ0FDakIsRUFBRSxFQUFFLElBQUk7Z0NBQ1IsSUFBSSxFQUFFLFdBQVc7Z0NBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTs2QkFDbEIsQ0FBQyxDQUFDOzs7OzRCQUVILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLGtCQUFrQixDQUFDLENBQUM7Ozs7OztTQUUzRTtRQUVMLGNBQUM7SUFBRCxDQUFDLEFBekhNLENBQWMsV0FBVyxHQXlIL0I7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvd0RhdGFUeXBlLCBJVGFibGVXaXRoT3BlcmF0aW9uc0Jhc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgY291bnRQcm9wZXJ0aWVzLCBkZWZhdWx0SW5wdXRUeXBlVmFsdWUsIHNsaWNlQXJyYXkgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbnRlcmZhY2UgSURlY29yYXRvclByZXJlcXVpc2l0ZTxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlPiBleHRlbmRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiB7XHJcbn1cclxuXHJcbnR5cGUgRGVjb3JhdG9yUHJlcmVxdWlzaXRlQ2xhc3M8VCBleHRlbmRzIElSb3dEYXRhVHlwZT4gPSB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IElEZWNvcmF0b3JQcmVyZXF1aXNpdGU8VD4gfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0T3BlcmF0aW9uc0RlY29yYXRvcjxUIGV4dGVuZHMgSVJvd0RhdGFUeXBlLCBVIGV4dGVuZHMgRGVjb3JhdG9yUHJlcmVxdWlzaXRlQ2xhc3M8VD4+KGNvbnN0cnVjdG9yOiBVKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciBpbXBsZW1lbnRzIElUYWJsZVdpdGhPcGVyYXRpb25zQmFzZTxUPiB7XHJcblxyXG4gICAgICAgIGdldCBhbnlFZGl0aW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnRQcm9wZXJ0aWVzKHRoaXMuYmFja3VwKSA+IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UoMCwgdGhpcy5zZWxlY3RlZC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goLi4uc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRBZGQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW06IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbVthLnByb3BdID0gZGVmYXVsdElucHV0VHlwZVZhbHVlKGEuaW5wdXRUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZWxlbWVudCBpbnRvIHRoZSByb3dzIChubyBiYWNrdXApXHJcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFtuZXdFbGVtLCAuLi50aGlzLnJvd3NdO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2t1cFswXSA9IG5ld0VsZW07XHJcbiAgICAgICAgICAgIC8vIEVuYWJsZSBlZGl0aW5nIGl0LlxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nWzAgKyAnLScgKyBhLnByb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEVkaXQocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yb3dzW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrdXBbcm93SW5kZXhdID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBhLnByb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdXBwb3J0IGVkaXRpbmcgYW4gZXhpc3Rpbmcgb25lIGFuZCBhZGRpbmcgYSBuZXcgb25lXHJcbiAgICAgICAgY2FuY2VsRWRpdChyb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIG9sZCB2YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgMCwgcm93SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kUGFydCA9IHNsaWNlQXJyYXkodGhpcy5yb3dzLCByb3dJbmRleCArIDEsIHRoaXMucm93cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgLy8gQW4gZXhpc3Rpbmcgb25lXHJcbiAgICAgICAgICAgIGlmIChlbGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4uZmlyc3RQYXJ0LCBlbGVtLCAuLi5zZWNvbmRQYXJ0XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZHJvcCB0aGlzLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLmZpcnN0UGFydCwgLi4uc2Vjb25kUGFydF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5iYWNrdXBbcm93SW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGFzeW5jIGNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMucm93c1tyb3dJbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWxlbTogSVJvd0RhdGFUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFkZE9yRWRpdEFzeW5jSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW0gPSBhd2FpdCB0aGlzLnNldHRpbmdzLmFkZE9yRWRpdEFzeW5jSGFuZGxlcihlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBEbyB3ZSBuZWVkIHRvIHVwZGF0ZSBkYXRhID8/Pz9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBzbGljZUFycmF5KHRoaXMucm93cywgMCwgcm93SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQYXJ0ID0gc2xpY2VBcnJheSh0aGlzLnJvd3MsIHJvd0luZGV4ICsgMSwgdGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi5maXJzdFBhcnQsIG5ld0VsZW0sIC4uLnNlY29uZFBhcnRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkVkaXRpbmcocm93SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYmFja3VwW3Jvd0luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3A6ICdhZGRPckVkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ld0VsZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5yb3dzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3R5LmVycm9yKCdTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgcHJvcDogc3RyaW5nLCByb3dJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93c1tyb3dJbmRleF1bcHJvcF0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhbkVkaXRpbmcocm93SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWRpdGluZ1tyb3dJbmRleCArICctJyArIGEucHJvcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgcm1Bc3luYygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnJtQXN5bmNIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0IHRvIGJlIGEgdHJhbnNhY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5ncy5ybUFzeW5jSGFuZGxlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCByZWZyZXNoOyBqdXN0IGRlbGV0ZSB0aGVtIGZyb20gdGhlIGxvY2FsIHNldC5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGEgPT4gIXRoaXMuc2VsZWN0ZWQuc29tZShiID0+IGIgPT09IGEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMudG90YWxDb3VudCAtIHRoaXMuc2VsZWN0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdHkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wOiAncm0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IG9sZFNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucm93c1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90eS5lcnJvcignU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nIScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==