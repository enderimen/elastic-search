var client = require('./config.js');

    client.indices.create({
        index: 'ender'
    }, function(err, resp, status) {
        if (err) {
            console.log(err);
        } else {
            console.log("create", resp);
        }
    });
    
    client.index({
        index: 'ender',
        id: '1',
        type: 'ender_type',
        body: {
            "props": {
                "id": {
                    "type": "integer",
                    "key": "text"
                },
                "slug": "text",
                "str": "text"
            }
        }
    }, function(err, resp, status) {
        console.log(resp);
    });