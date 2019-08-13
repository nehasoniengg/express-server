import * as mongoose from 'mongoose';
export default interface IuserModel extends mongoose.Document {
    id: string,
        name: string,
            email: string
}