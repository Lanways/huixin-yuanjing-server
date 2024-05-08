import { Dialect } from 'sequelize'
import { getEnvVariable } from '../helpers/checkType'
import dotenv from 'dotenv'
dotenv.config()

export interface EnvConfig {
  development: DBConfig
  test: DBConfig
  production: DBConfig
}

interface DBConfig {
  username: string
  password: string
  database: string
  host: string
  dialect: Dialect
}

const config: EnvConfig =
{
  "development": {
    "username": getEnvVariable('DB_USER'),
    "password": getEnvVariable('DB_PASS'),
    "database": getEnvVariable('DB_NAME'),
    "host": getEnvVariable('DB_HOST'),
    "dialect": "postgres"
  },
  "test": {
    "username": getEnvVariable('DB_USER'),
    "password": getEnvVariable('DB_PASS'),
    "database": getEnvVariable('DB_NAME_TEST'),
    "host": getEnvVariable('DB_HOST'),
    "dialect": "postgres"
  },
  "production": {
    "username": getEnvVariable('DB_USER'),
    "password": getEnvVariable('DB_PASS'),
    "database": getEnvVariable('DB_NAME'),
    "host": getEnvVariable('DB_HOST'),
    "dialect": "postgres"
  }
}

module.exports = config
