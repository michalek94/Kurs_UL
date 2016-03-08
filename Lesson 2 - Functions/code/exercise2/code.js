(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}

	mapArray = function (array, callback, ctx) {
        var newArr = [10,11,12];
        
        // add code for maping
        for (var i = 0, len = newArr.length; i < len; i++) {
            console.log(newArr[i]);
         
        }
        
        return newArr;
	};

	global.UAM.mapArray = mapArray;

}(window));

/*

Przykład użycia:

var arr = [1, 2, 3, 4, 5, 6];

var newArray = mapArray(arr, function (arrElement, index, array) {
	return arrElement + 2;
});

newArray; // [3, 4, 5, 6, 7, 8]

var values = {
	multiplyBy: 10;
};

var newArray2 = mapArray(arr, function (arrElement, index, array) {
	return arrElement * this.mutiplyBy;
}, values);

newArray2; [10, 20, 30, 40, 50, 60]
*/
