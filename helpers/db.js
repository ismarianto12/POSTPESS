const mysql = require('serverless-mysql')({
    config: {
        host: 'localhost',
        database: 'pospess',
        user: 'root',
        port: 3307,
        password: ''
    }
})

export { mysql } 