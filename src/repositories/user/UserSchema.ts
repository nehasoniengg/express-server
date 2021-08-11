import VesionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VesionableSchema {
    constructor(options: any) {
    const baseSchema = {
        _id: String,
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
        password: {
            require: true,
            type: String,
            unique:String,
        },      
    };
    super(baseSchema, options);
    }
}
export default UserSchema;