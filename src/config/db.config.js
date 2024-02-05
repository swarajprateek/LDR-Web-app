module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Swaraj@123",
  DB: "testdb",
  PORT:3000,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};