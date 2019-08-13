import * as BodyParser from 'body-parser';
import * as express from 'express';
import IConfig from './config/Iconfig';
//import authMiddleWare from './libs/routes/authMiddleWare';
import { errorHandler } from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';
import router from './router';
import database from './libs/database';
export class Server {
  private app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }

  public listen() {
    const port = this.config.port;
    this.app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
    return this;
  }

  public bootstrap() {
    console.log('In the bootstrap method');
    this.BodyParser();
    this.setupRoutes();

    return this;
  }

  private BodyParser() {
    // const { app } = this;
    console.log("::::::::::in body parse:")
    this.app.use(BodyParser.json());
    this.app.use(BodyParser.urlencoded({ extended: false }));
  }
  // BodyParser() {
  //   throw new Error("Method not implemented !!!!!!.");
  // }
  public setupRoutes() {
    console.log("::::::::::in setup:")

    const { app } = this;
    app.use('/api', router);
    app.use('/health-check', (req, res) => {
      console.log('inside the health-check');
      res.send('I am ok and fine ');
    });
    app.use(notFound);
    app.use(errorHandler);

  }
  // public run() {
  //   console.log('this is run function');
  //   this.app.listen(9000, () => {
  //     console.log('Connection Done !!!!!');
  //   });
  // }
  public run() {
    const {
      config: { port, mongoUri } } = this;
     // console.log('mongoURI checkrd >>>>>>',mongoUri);
    database.open(mongoUri);

    // this.app.listen(9000, () => {
      console.log('Connection Done on PORT!!!!!', port);
      
    // });
    //this.app.listen(port);
  }
}

