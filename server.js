var express = require('express'),
    app = express(),
    client = require('./config.js'),
    fs = require('fs'),
    csv = require('csv-parser');

    fs.createReadStream('search-case.csv')
    // formatting(mapping)
    .pipe(csv(['str', 'slug', 'key','id']))
    .on('data', (data) => {
        // add new POST 
        client.index({
            index: 'ender',
            type: 'ender_type',
            body: {
                "props": {
                    "id": {
                        "type": data.key,
                        "key": data.id
                    },
                    "slug": data.slug,
                    "str": data.str
                }
            }
        }, (err, resp, status) => {
            //console.log(resp);
        });

    })
    // end read file
    .on('end', (data) => {
        console.log('Finished!');
    });

    // Client healt info
    client.cluster.health({}, (err,resp,status) => {
        console.log("-- Client Health --",resp);
    });

console.log("On port: 8000");
app.listen(8000);
