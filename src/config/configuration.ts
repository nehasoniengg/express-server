import { config } from 'dotenv';
import IConfig from './Iconfig';
config();
// const configuration: IConfig = Object.freeze({
//     port: process.env.PORT,
//     // tslint:disable-next-line: object-literal-sort-keys
//     node_env: process.env.NODE_ENV,
// });
// export default configuration;
const envVars = process.env;
const configuration: IConfig = Object.freeze( {
    mongoUri: envVars.MONGO_URL,
    password: envVars.PASSWORD,
    port: envVars.PORT,
    key: envVars.key,
    });
//console.log('config is::::', configuration);
export default configuration;

