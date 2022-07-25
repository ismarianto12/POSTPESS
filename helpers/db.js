const mysql = require('serverless-mysql')({
    config: {
        host: 'localhost',
        database: 'pospess',
        user: 'root',
        port: 3306,
        password: ''
    }
})

export { mysql } 