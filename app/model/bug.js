'use strict';

const dbHelper = require('../../app/helper/dbHelper');

function Bug(id, device, info) {
    this.id = id;
    this.device = device;
    this.info = info;
}

Bug.add = function (bug) {
    return new Promise((resolve, reject) => {
        dbHelper.connect((err, db) => {
            if (err) {
                reject(err);
            }
            const collection = db.collection('bug');
            collection.insertOne(
                bug,
                function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(true);
                    }
                });
        });
    });
};

Bug.findById = function (bugId) {
    return new Promise((resolve, reject) => {
        dbHelper.connect((err, db) => {
            if (err) {
                reject(err);
            }
            const collection = db.collection('bug');
            collection.find({
                id: bugId
            }).toArray(function (err, result) {
                console.log("err: " + err + ", result: " + result);
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });
};

Bug.findAll = function () {
    return new Promise((resolve, reject) => {
        dbHelper.connect((err, db) => {
            if (err) {
                reject(err);
            }
            const collection = db.collection('bug');
            collection.find({}).toArray(function (err, result) {
                console.log("err: " + err + ", result: " + result);
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });
};

module.exports = Bug;