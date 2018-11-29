var elasticsearch = require('elasticsearch');

// elasticsearh connect
var client = new elasticsearch.Client( {
  hosts: [
    'localhost/'
  ]
});

module.exports = client;
