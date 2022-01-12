import { __extends } from "tslib";
export function hasLocalFilterDecorator(constructor) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWxvY2FsLWZpbHRlci5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RlY29ycy9oYXMtbG9jYWwtZmlsdGVyLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUUEsTUFBTSxVQUFVLHVCQUF1QixDQUF1QyxXQUFjO0lBQ3hGO1FBQXFCLDJCQUFXO1FBQXpCOztRQWlCUCxDQUFDO1FBYkcsNENBQTRDO1FBQzVDLDJDQUF5QixHQUF6QjtZQUFBLGlCQU1DO1lBTEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ2pFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDBDQUF3QixHQUF4QjtZQUNJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckUsQ0FBQztRQUVMLGNBQUM7SUFBRCxDQUFDLEFBakJNLENBQWMsV0FBVyxHQWlCL0I7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElIYXNMb2NhbEZpbHRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuaW50ZXJmYWNlIElEZWNvcmF0b3JQcmVyZXF1aXNpdGUgZXh0ZW5kcyBJSGFzTG9jYWxGaWx0ZXIge1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzTG9jYWxGaWx0ZXJEZWNvcmF0b3I8VCBleHRlbmRzIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzPihjb25zdHJ1Y3RvcjogVCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgY29uc3RydWN0b3IgaW1wbGVtZW50cyBJSGFzTG9jYWxGaWx0ZXIge1xyXG5cclxuICAgICAgICBfc2VhcmNoS2V5d29yZFN1YnI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgLy8gU3RhcnQgdG8gbGlzdGVuIGZvciBzZWFyY2gga2V5d29yZCBjaGFuZ2VcclxuICAgICAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYSA9IChhIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnlGdXR1cmVLZXl3b3JkID0gYTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2lja09mZlNlYXJjaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgJiYgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==