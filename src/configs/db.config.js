const env = process.env;
const db = {
  dbURI: env.DB_URI || "mongodb://localhost/todos",
};

module.exports = db;
