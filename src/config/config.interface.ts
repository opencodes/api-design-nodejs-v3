export interface IAppConfig {
    env: string | 'development' | 'testing',
    isDev: boolean,
    isTest: boolean,
    port: number,
    secrets: {
        jwt: string
        jwtExp: string
    },
    dbUrl: string
}
export interface IEnvConfig {
    secrets: {
        jwt: string
        jwtExp: string
    },
    dbUrl: string
}