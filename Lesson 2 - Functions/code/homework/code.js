(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
       global.UAM.aircrafts.push({
            code: newAircraftCode,
            services: []
        });
        return global.UAM.aircrafts[global.UAM.aircrafts.length-1];
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        // !!!
        var gui = global.UAM.aircrafts.indexOf(aircraftObj);
        if(gui>-1){
             global.UAM.aircrafts.pop(aircraftObj);
        }        
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExxecute) {
        // !!!
        var gui = global.UAM.aircrafts.indexOf(aircraftObj);
        global.UAM.aircrafts[gui].services.push({
            name: name,
            timeToExecute: timeToExxecute
        });
    };
        
    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {
        // !!!
       if(aircraftObj.services != null){
        for(var i=0; i < aircraftObj.services.length; i++){
            aircraftObj.services[i].timeToExecute -= time;
        }
       }  
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        //console.log(global.UAM.aircrafts);
        var array = [];
        
        for(var i=0; i < global.UAM.aircrafts.length; i++){
            if(global.UAM.aircrafts.services != null){
            for(var j=0; j < global.UAM.aircrafts.services.length; j++){                 
                if(global.UAM.aircrafts.services.timeToExecute < maxTimeToExecute){
                    console.log(global.UAM.aircrafts[i].services[j]);
                    array.push(global.UAM.aircrafts[i].services[j]);
                    return array;
                }
            }
        }
        }
        //console.log(array);
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
