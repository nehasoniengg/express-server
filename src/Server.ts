
import * as BodyParser from 'body-parser';
import * as express from 'express';
import IConfig from './config/Iconfig';
// import authMiddleWare from './libs/routes/authMiddleWare';
import { errorHandler } from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';
import router from './router';
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
  public setupRoutes() {
    const { app } = this;

    app.use('/api', router);

    //    app.use((req,res,next)=>{
    //        console.log('hy i am in 1st middleware');
    //         next();

    //    })

    //      app.use('/api', (req,res,next)=> {
    //          console.log('inside 2nd middleware');

    //          next();

    //      })

    app.use('/health-check', (req, res) => {
      console.log('inside the health-check');
      res.send('I am ok and fine ');
    });
    // app.use('/api', router);
    //  app.use((req,res,next) => {
    //     next('Route not found');
    //  });

    // app.use(errorHandler);
    // console.log(notFound);
    app.use(notFound);
    app.use(errorHandler);

  }
  public run() {
    console.log('this is run function');
    this.app.listen(9000, () => {
      console.log('Connection Done !!!!!');
    });
  }

  private BodyParser() {
    const { app } = this;
    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({ extended: false }));

  }
}
