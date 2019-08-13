import * as mongoose from 'mongoose';
import { response } from 'express';


    export default class database {

        static open(mongoUri) {
            console.log(mongoUri);
            mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
                if (err) {
                    console.log('error in mongoose connection!!! ', err);
                }
                console.log('mongoose conectioned??????!!!!');
               
                
                //  console.log('just try === :::',justTry);
                //  console.log('trymodal check ::::',User);
                
                //  // else {
                //     console.log('mongoose conection done >>>');
                // }
            });

        }
        public disconnect() {
            mongoose.disconnect();
            console.log('mongoose disconnected !!!');
        }




    }