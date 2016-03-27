/* globals $ */
function makeQuery(method, url, optionalData, callback) {
    if (typeof optionalData === 'function') {
        callback = optionalData;
        optionalData = null;
    }

    $.ajax({
        method: method,
        url: url,
        contentType: 'text/plain',
        data: optionalData + ''
    }).done(callback).fail(function () {
        console.error(arguments);
        alert('error');
    });
}

function clearAllSpans() {
    $('span').text('');
}

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getToday button'),
        span = document.querySelector('#getToday span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/today', function (today) {
            clearAllSpans();
            span.textContent = 'Today is ' + today;
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('#addNew input'),
        button = document.querySelector('#addNew button'),
        span = document.querySelector('#addNew span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('post', '/numbers', +input.value, function () {
            clearAllSpans();
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getStored button'),
        span = document.querySelector('#getStored span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers', function (numbers) {
            clearAllSpans();
            span.textContent = 'Numbers are: ' + numbers;
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getSum button'),
        span = document.querySelector('#getSum span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/sum', function (result) {
            clearAllSpans();
            span.textContent = 'Sum is ' + result;
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getDiff button'),
        span = document.querySelector('#getDiff span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/difference', function (result) {
            clearAllSpans();
            span.textContent = 'Difference is ' + result;
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getMultiplication button'),
        span = document.querySelector('#getMultiplication span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/multiplication', function (result) {
            clearAllSpans();
            span.textContent = 'Multiplication is ' + result;
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#getDivision button'),
        span = document.querySelector('#getDivision span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('get', '/numbers/division', function (result) {
            clearAllSpans();
            span.textContent = 'Division is ' + result;
        });
    });
});

/* global makeQuery, clearAllSpans */
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#clearAll button'),
        span = document.querySelector('#clearAll span');

    button.addEventListener('click', function () {
        span.textContent = 'working...';
        makeQuery('delete', '/numbers', function (result) {
            clearAllSpans();
        });
    });
});
