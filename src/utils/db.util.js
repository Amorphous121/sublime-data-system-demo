const { connect, connection } = require('mongoose');
const { APP_CONFIG } = require('../config')

exports.connectDB = () => {
    return connect(APP_CONFIG.DB_URI);
}

connection.on('connected', () => {
    console.log('Database Connected');
})

connection.on('error', () => {
    console.log('Error in database connection', e.message);
    process.exit(1);
})