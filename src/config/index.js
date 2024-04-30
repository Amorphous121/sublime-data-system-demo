require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });
const { port, str, cleanEnv } = require('envalid');

exports.APP_CONFIG = cleanEnv(process.env, {
    PORT: port({ devDefault: 8081, desc: 'Listening port of application.' }),
    DB_URI: str({ desc: 'Mongodb Database connection string.' })
})

