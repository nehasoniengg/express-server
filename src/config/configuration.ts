import { config } from 'dotenv';
import IConfig from './Iconfig';
config();
const envVars = process.env;
const configuration: IConfig = Object.freeze( {
    mongoUrl: envVars.MONGO_URL,
    password: envVars.PASSWORD,
    port: envVars.PORT,
    key: envVars.key,
    });
export default configuration;

