const { Sequelize, QueryTypes } = require("sequelize");

const db = new Sequelize(`mysql://root:admin@127.0.0.1/git_burger`);

module.exports = { db, QueryTypes };
