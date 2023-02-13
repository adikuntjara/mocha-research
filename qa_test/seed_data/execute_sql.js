const {createConnection} = require('mysql');

const connectionParams = {
	host: process.env.DB_R_CREDIT_HOST,
    user: process.env.DB_R_CREDIT_USER,
    password: process.env.DB_R_CREDIT_PASSWORD,
    port: process.env.DB_R_CREDIT_PORT,
    database: process.env.DB_R_CREDIT_NAME
};

const connectDb = () => {
	const conn = createConnection(connectionParams);

	return new Promise((resolve, reject) => {
		conn.connect((err) => {
			if (err) reject(err);

			resolve(conn);
		});
	});
};

const executeSql = (conn, sql) =>
	new Promise((resolve, reject) => {
		conn.query(sql, (error, result) => {
			if (error) reject(error);

			resolve(result);
		});
	});

const closeDb = (conn) => conn.end();

module.exports = {
	connectDb,
	closeDb,
	executeSql
};