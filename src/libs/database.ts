import * as mongoose from 'mongoose';
import seedData from './seedData';
export default class database {
  static open(mongoUri) {
        console.log('mongoose URI CHECK !!! ' ,mongoUri);
        mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.log('error in mongoose connection!!! ', err);
            }
            console.log('mongoose connection done :::::::::::!!!!');
                seedData();
        });
    }
    public disconnect() {
        mongoose.disconnect();
        console.log('mongoose disconnected !!!');
    }
}