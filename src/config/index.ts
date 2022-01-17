import { IAppConfig } from "./config.interface"
import { config as devConfig} from "./dev"
import { config as testConfig } from "./testing"

const env = process.env.NODE_ENV || 'development'

const baseConfig:IAppConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3000,
  secrets: {
    jwt: process.env.JWT_SECRET || 'rwerew543254werrwer34r',
    jwtExp: '100d'
  },
  dbUrl:''
}

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = devConfig
    break
  case 'test':
  case 'testing':
    envConfig =  testConfig
    break
  default:
    envConfig = devConfig
}

export default {...baseConfig, ...envConfig}
