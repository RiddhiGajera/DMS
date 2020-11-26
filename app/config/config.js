module.exports = {
    port: 8080,
    secretOrKey: 'documentManagementSystem#123',
    db: {
        connectionURL: 'dms_db:27017/dms',
       // connectionURL: 'mongodb://localhost:27017/dms',
        options: {useNewUrlParser: true}
    }
}
