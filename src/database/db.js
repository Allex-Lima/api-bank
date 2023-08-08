const mongoose = require("mongoose");
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const retryWrites = process.env.DB_RETRYWRITES;
const uri = `mongodb+srv://${username}:${password}@${cluster}/${retryWrites}`;

const db = () => {
	mongoose.connect(uri).then(() => {
		console.log("Connection with database.");
	}).catch((err) => {
		console.log(err);
	});
};

module.exports = db;
