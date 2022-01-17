import { IEnvConfig } from "./config.interface";

export const config:IEnvConfig = {
  secrets: {
    jwt: 'learneverything',
    jwtExp: '100d'
  },
  dbUrl: 'mongodb://localhost:27017/api-design-test'
}
