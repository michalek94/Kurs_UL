var express = require('express'),
    bodyParser = require('body-parser');
/// http://expressjs.com/api.html

var app = express(),
    numbers = [];

app.use(express.static(__dirname + '/'));
app.use(bodyParser.text()); // parse text

/*
    req - request?
    res - result?
*/

//GET /today returns date in string
app.get('/today', function (req, res) {
    setTimeout(function () {
        res.send((new Date()).toLocaleDateString());
    }, 1000);
});

//POST /numbers should save number for later
app.post('/numbers', function (req, res) {
    numbers.push(req.body);
    res.send("Number saved for later");           
});
//GET /numbers should return comma separated list of numbers
app.get('/numbers', function (req, res) {
    setTimeout(function () {
        if(numbers.length === 0){
            res.send("empty");
        }else{
            res.send(numbers.join(", "));
        }
    }, 1000);
});
//DELETE /numbers should empty numbers array
app.delete('/numbers', function (req, res) {
    numbers.length = 0;
    res.send("Number's array is empty");
});
//GET /numbers/:op should return result of given operation of stored numbers (check request.params)
// available operations are sum, difference, multiplication, division
// return result as strings
app.get('/numbers/:op', function (req, res) {
    setTimeout(function () {
        switch(req.params.op){
            case 'sum':
                var sum = numbers.reduce(function (a,b) {
                    return a + b;
                });
                res.send(sum.toString());            
                break;
            case 'difference':
                var difference = numbers.slice(function (a,b) {
                    return a - b; 
                });
                res.send(difference.toString());
                break;
            case 'multiplication':
                var multiplication = numbers.reduce(function (a,b) {
                    return a * b;
                });
                res.send(multiplication.toString());
                break;
            case 'division':
                var division = numbers.slice(1).reduce(function (a,b) {
                    return a / b;
                });
                res.send(division.toString());
                break;
            default: 
                res.send("Operation is unsupported");
        }
        
    }, 1000);
    
});

app.listen(8080, function () {
    console.log('Server is running on localhost:' + this.address().port);
});
