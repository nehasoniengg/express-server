import * as mongoose from 'mongoose';
import seedData from './seedData';
export default class database {
  static open(mongoUrl) {
        console.log('mongoose URL CHECK !!!:: ' ,mongoUrl);
    mongoose.connect(mongoUrl,{ useNewUrlParser: true }, (err) => {
            if (!err) {
                seedData();
          } else
            console.log('error in mongoose connection!!!:: ', err);          
        });
    }
    public disconnect() {
        mongoose.disconnect();
        console.log('mongoose disconnected !!!');
    }
}