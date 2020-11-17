module.exports = {
    driver: 'mysql', // value will be mysql OR mongo
    connectionString: "mongodb://localhost/whoAcademy",
    targetDatabaseName: "whoAcademy",
    SERVER_PORT: 3010, 
    apiurl: 'http://localhost:3000/',
    origins: allowedOrigins = ['http://localhost:3000'],
    redisConnectionString: {
        port: 6379,
        host: '127.0.0.1',
    }
}
