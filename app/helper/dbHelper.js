'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

var DbHelper = {};

// Use connect method to connect to the server
DbHelper.connect = function (next) {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        next(err, db);
        client.close();
    })
};

module.exports = DbHelper;