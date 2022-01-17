import { IEnvConfig } from "./config.interface";

export const config:IEnvConfig = {
  secrets: {
    jwt: 'learneverything',
    jwtExp: '100d'
  },
  dbUrl: 'mongodb+srv://opencodes:4A8a0xfToeKiM0zS@mongocluster.twitm.mongodb.net/learnrest?retryWrites=true&w=majority'
}
