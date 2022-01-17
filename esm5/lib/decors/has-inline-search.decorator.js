import { __extends } from "tslib";
export function hasInlineSearchDecorator(constructor) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLWlubGluZS1zZWFyY2guZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcnMvaGFzLWlubGluZS1zZWFyY2guZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQSxNQUFNLFVBQVUsd0JBQXdCLENBQXVDLFdBQWM7SUFDekY7UUFBcUIsMkJBQVc7UUFBekI7O1FBaUJQLENBQUM7UUFiRyw0Q0FBNEM7UUFDNUMsMkNBQXlCLEdBQXpCO1lBQUEsaUJBTUM7WUFMRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztnQkFDakUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsMENBQXdCLEdBQXhCO1lBQ0ksSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRSxDQUFDO1FBRUwsY0FBQztJQUFELENBQUMsQUFqQk0sQ0FBYyxXQUFXLEdBaUIvQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVNlYXJjaENhcGFiaWx0eUJ1aWxkZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuXHJcbmludGVyZmFjZSBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIGV4dGVuZHMgSVNlYXJjaENhcGFiaWx0eUJ1aWxkZXIge1xyXG59XHJcblxyXG50eXBlIERlY29yYXRvclByZXJlcXVpc2l0ZUNsYXNzID0geyBuZXcoLi4uYXJnczogYW55W10pOiBJRGVjb3JhdG9yUHJlcmVxdWlzaXRlIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzSW5saW5lU2VhcmNoRGVjb3JhdG9yPFQgZXh0ZW5kcyBEZWNvcmF0b3JQcmVyZXF1aXNpdGVDbGFzcz4oY29uc3RydWN0b3I6IFQpIHtcclxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIGltcGxlbWVudHMgSVNlYXJjaENhcGFiaWx0eUJ1aWxkZXIge1xyXG5cclxuICAgICAgICBfc2VhcmNoS2V5d29yZFN1YnI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgLy8gU3RhcnQgdG8gbGlzdGVuIGZvciBzZWFyY2gga2V5d29yZCBjaGFuZ2VcclxuICAgICAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYSA9IChhIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnlGdXR1cmVLZXl3b3JkID0gYTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2lja09mZlNlYXJjaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgJiYgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==