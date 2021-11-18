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
        class_1.prototype.cancelTypedKeyword = function () {
            this.searchControl.setValue('');
        };
        return class_1;
    }(constructor));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWxvY2FsLWZpbHRlci5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RlY29ycy9oYXMtbG9jYWwtZmlsdGVyLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBUUEsTUFBTSxVQUFVLHVCQUF1QixDQUF1QyxXQUFjO0lBQ3hGO1FBQXFCLDJCQUFXO1FBQXpCOztRQW9CUCxDQUFDO1FBaEJHLDRDQUE0QztRQUM1QywyQ0FBeUIsR0FBekI7WUFBQSxpQkFNQztZQUxHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUNqRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCwwQ0FBd0IsR0FBeEI7WUFDSSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JFLENBQUM7UUFFRCxvQ0FBa0IsR0FBbEI7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0wsY0FBQztJQUFELENBQUMsQUFwQk0sQ0FBYyxXQUFXLEdBb0IvQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSUhhc0xvY2FsRmlsdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5pbnRlcmZhY2UgSURlY29yYXRvclByZXJlcXVpc2l0ZSBleHRlbmRzIElIYXNMb2NhbEZpbHRlciB7XHJcbn1cclxuXHJcbnR5cGUgRGVjb3JhdG9yUHJlcmVxdWlzaXRlQ2xhc3MgPSB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IElEZWNvcmF0b3JQcmVyZXF1aXNpdGUgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNMb2NhbEZpbHRlckRlY29yYXRvcjxUIGV4dGVuZHMgRGVjb3JhdG9yUHJlcmVxdWlzaXRlQ2xhc3M+KGNvbnN0cnVjdG9yOiBUKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciBpbXBsZW1lbnRzIElIYXNMb2NhbEZpbHRlciB7XHJcblxyXG4gICAgICAgIF9zZWFyY2hLZXl3b3JkU3VicjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAvLyBTdGFydCB0byBsaXN0ZW4gZm9yIHNlYXJjaCBrZXl3b3JkIGNoYW5nZVxyXG4gICAgICAgIHN0YXJ0T2JzZXJ2ZVNlYXJjaEtleXdvcmQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyID0gdGhpcy5zZWFyY2hDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhID0gKGEgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFueUZ1dHVyZUtleXdvcmQgPSBhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5raWNrT2ZmU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciAmJiB0aGlzLl9zZWFyY2hLZXl3b3JkU3Vici51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FuY2VsVHlwZWRLZXl3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=