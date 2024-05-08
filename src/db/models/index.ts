import { Sequelize } from "sequelize";
import { EnvConfig } from "../../config/database";
import { getNODE_ENV } from "../../helpers/checkType";
const config = require('../../config/database') as EnvConfig
import fs from 'fs'
import path from 'path'

const env = getNODE_ENV('NODE_ENV')
//env必須為符合config的聯合類型
const dbConfig = config[env]
const { username, password, database, host, dialect } = dbConfig
const fileExtension = (env === 'development' || env === 'test') ? '.ts' : '.js'

let sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

interface Models {
  [key: string]: any
  sequelize?: Sequelize
  Sequelize?: typeof Sequelize
}

const db: Models = {}

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === fileExtension);
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelize)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db