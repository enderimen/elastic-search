var elasticsearch = require('elasticsearch');

// elasticsearh connect
var client = new elasticsearch.Client( {
  hosts: [
    'http://elastic-test.emlakjet.com:9200/'
    'localhost/'
  ]
});

module.exports = client;