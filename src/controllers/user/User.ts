import * as mongoose from 'mongoose';

export interface IUser extends Document {
  name:String
}

const UserSchema:mongoose.Schema = new mongoose.Schema({
  name: String
});

export default mongoose.model('User', UserSchema);