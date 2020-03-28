$(document).ready(function () {
    // setInterval(() => {
    var cities = []
    var confirmed = parseInt($('#WebPartWPQ1 table tr:nth-child(2) td:nth-child(2)')[0].innerText);
    var recovered = parseInt($('#WebPartWPQ1 table tr:nth-child(2) td:nth-child(1) p font[color="#008000"]')[0].innerText);
    var deaths = parseInt($('#WebPartWPQ1 table tr:nth-child(2) td:nth-child(1) p span.ms-rteThemeForeColor-9-4')[0].innerText);
    var negative = parseInt($('#WebPartWPQ1 table tr:nth-child(2) td:nth-child(3)')[0].innerText);
    console.log(confirmed);
    console.log(recovered);
    console.log(deaths);
    console.log(negative);
    // }, 3000)


    fetch('http://127.0.0.1:8000/api/covid?XDEBUG_SESSION_START=PHPSTORM', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,X-Auth-Token,Authorization,Origin',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'XDEBUG_SESSION_START': 'PHPSTORM'
        },

        body: JSON.stringify({
            "confirmed": confirmed,
            "recovered": recovered,
            "deaths": deaths,
            "negative": negative,
        })
    }).then((response) => response)
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    var citiesData = $('#WebPartWPQ2 table')[0]
    for (var i = 1, row; row = citiesData.rows[i]; i++) {
        console.log(typeof (row.cells[1].textContent))
        cities.push(
            {
                city: row.cells[0].textContent.trim(),
                confirmed: row.cells[1].textContent.trim()
            }
        )
    }

    console.log(cities)

    fetch('http://127.0.0.1:8000/api/region?XDEBUG_SESSION_START=PHPSTORM', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,X-Auth-Token,Authorization,Origin',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'XDEBUG_SESSION_START': 'PHPSTORM'
        },

        body: JSON.stringify({"cities":cities})
    }).then((response) => response)
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

});


