import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
    constructor(options: any) {
    const baseSchema = {
        name: {
            require: true,
            type: String,
        },
        id: {
            require: true,
            type: String,
        },
        email: {
            require: true,
            type: String,
        },
        

    };
    super(baseSchema, options);
}
 }
export default UserSchema;