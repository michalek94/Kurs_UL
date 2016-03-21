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
        if(gui>=0){
             global.UAM.aircrafts.splice(gui, 1);
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
        aircraftObj.services.forEach(function(el) {
            el.timeToExecute -= time;
        });
       }  
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        var aircraftsArray = [];
        
        global.UAM.aircrafts.forEach(function(aircraft){ // thanks for senssei for the prompt with forEach function
           if(aircraft.services != null){
               for(var i=0; i<aircraft.services.length; i++){
                   if(aircraft.services[i].timeToExecute <= maxTimeToExecute){
                       aircraftsArray.push(aircraft);
                       break;
                   }
               }
           }
        });
        return aircraftsArray;
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
