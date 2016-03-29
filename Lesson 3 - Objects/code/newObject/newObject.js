(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
        var array = Array.prototype.slice.call(arguments, 1);
        var object = Object.create(constructor.prototype);
        
        for(var i=0; i<arguments.length; i++){
            array.push(arguments[i]);
        }
        
        var objectConstructor = constructor.apply(object, array);
        
        if(objectConstructor){
            object = objectConstructor;
        }
        
        return object;
    }

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


