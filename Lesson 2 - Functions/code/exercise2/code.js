(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}

	mapArray = function (array, callback, ctx) {
        var newArr = [];
        
        // add code for maping
        if(typeof ctx == "undefined"){
            array.forEach(function(arrElement, index, array){
                newArr.push(callback(arrElement, index, array));
            });
        }else{
            array.forEach(function(arrElement, index, array){
               newArr.push(callback.bind(ctx)(arrElement, index, array)) 
            });
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
