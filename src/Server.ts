import * as BodyParser from 'body-parser';
import * as express from 'express';
import IConfig from './config/Iconfig';
import { errorHandler } from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';
import router from './router';
import database from './libs/database';
import * as swaggerUi from  'swagger-ui-express';
import * as swaggerDocument from '../swagger.json'

export class Server {
  private app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  } 
  public listen() { 
    console.log('inside listen');
   const port = this.config.port;
    this.app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    })
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
       }

  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  private initBodyParser() {
    this.app.use(BodyParser.json());
    this.app.use(BodyParser.urlencoded({ extended: false }));
  }

  BodyParser() {
    throw new Error("Method not implemented !!!!!!.");
  }
  
  public setupRoutes() {
    const { app } = this;
    app.use('/api', router);
     app.use('/health-check', (req, res) => {
      res.send('I am ok and fine ');
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(notFound);
    app.use(errorHandler);
    this.run();
    }
    
  public run() {    
    const {
      config: { port, mongoUrl } } = this;
       database.open(mongoUrl);
            this.listen();
      
  }
  

}

