/**
 * Returns a slice of array (with value semantics) [fromIndex, endIndex]
 * @param data
 * @param fromIndex
 * @param endIndex
 */
export function sliceArray(data, fromIndex, endIndex) {
    return data.filter((_, index) => {
        return index >= fromIndex && index <= endIndex;
    });
}
export function countProperties(obj) {
    let count = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            ++count;
        }
    }
    return count;
}
export function getInputType(data) {
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
export function defaultInputTypeValue(t) {
    if (t == 'number') {
        return 0;
    }
    if (t == 'checkbox') {
        return false;
    }
    return '';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUvc3JjL2xpYi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBZ0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCO0lBQzVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM1QixPQUFPLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLFFBQVEsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVc7SUFDdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDbEIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsS0FBSyxDQUFDO1NBQ1g7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVM7SUFDbEMsTUFBTSxFQUFFLEdBQUcsT0FBTyxJQUFJLENBQUM7SUFDdkIsSUFBSSxFQUFFLElBQUksUUFBUSxFQUFFO1FBQ2hCLE9BQU8sUUFBUSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFO1FBQ2pCLE9BQU8sVUFBVSxDQUFDO0tBQ3JCO0lBQ0QsSUFBSSxFQUFFLElBQUksUUFBUSxFQUFFO1FBQ2hCLElBQUksSUFBSSxZQUFZLElBQUksRUFBRTtZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNqQjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxDQUFvQjtJQUN0RCxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDZixPQUFPLENBQUMsQ0FBQztLQUNaO0lBQ0QsSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbElucHV0VHlwZUVudW0gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzbGljZSBvZiBhcnJheSAod2l0aCB2YWx1ZSBzZW1hbnRpY3MpIFtmcm9tSW5kZXgsIGVuZEluZGV4XVxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAcGFyYW0gZnJvbUluZGV4XHJcbiAqIEBwYXJhbSBlbmRJbmRleFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNsaWNlQXJyYXkoZGF0YTogQXJyYXk8YW55PiwgZnJvbUluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBkYXRhLmZpbHRlcigoXywgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gZnJvbUluZGV4ICYmIGluZGV4IDw9IGVuZEluZGV4O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudFByb3BlcnRpZXMob2JqOiBPYmplY3QpIHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgKytjb3VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dFR5cGUoZGF0YTogYW55KTogSHRtbElucHV0VHlwZUVudW0ge1xyXG4gICAgY29uc3QgdHkgPSB0eXBlb2YgZGF0YTtcclxuICAgIGlmICh0eSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJldHVybiAnbnVtYmVyJztcclxuICAgIH1cclxuICAgIGlmICh0eSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICByZXR1cm4gJ2NoZWNrYm94JztcclxuICAgIH1cclxuICAgIGlmICh0eSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2RhdGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAndGV4dCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SW5wdXRUeXBlVmFsdWUodDogSHRtbElucHV0VHlwZUVudW0pIHtcclxuICAgIGlmICh0ID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAodCA9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcbiJdfQ==