import * as mongoose from 'mongoose';
import UserRepository from '../../repositories/user/UserRepository';

                                          
export default class VersionableRepository< D extends mongoose.Document, M extends mongoose.Model<D> > {//return Document type
public static generateObjectId() {
    return String (mongoose.Types.ObjectId());
}
private modelType: M;
constructor(modelType) {
    this.modelType = modelType;
}
public async create(options): Promise<D> {   // Promise D(document) create schema details and verify 
    const id = await VersionableRepository.generateObjectId();
    const model = new this.modelType({
        ...options,
        _id: id,
        createdBy: options.userId,
        originalId: id,
        updatedBy: options.userId,
    });
    return model.save().then((record) => record.toObject());
    }
public async update(id, options) {
        let originalData;
        const userRepository = new UserRepository();
        const updateuser = await userRepository.findOne({ originalId: id, deletedAt: {$exists: false} })
        .then((data) => {
        if (!data) {
           return 'user not found';
        }
        originalData = data;
        })
            .then(() => {
            const id = VersionableRepository.generateObjectId();
            const modelCreate = new this.modelType({
            ...originalData,
            ...options,
            _id: id,
        });
            return this.modelType.create(modelCreate).then((record) => record.toObject());
        })
            .then(() => {
            const modelUpdate = new this.modelType({
               ...originalData,
               deletedAt: Date.now(),
            });
            console.log(modelUpdate);
            return this.modelType.updateOne(id, modelUpdate);
           })
           .catch((err) => {
            return err;
        });
        return updateuser;
   }
public async delete(id) {
    let originalData;
    const findDelete = await this.modelType.findOne({ originalId: id, deletedAt: { $exists: false } }).lean();
    if (!findDelete) {
        throw Error('user not found in delete');
    }
    else {
        originalData = findDelete;
        const newId = originalData._id;
        const modelDelete = new this.modelType({
            ...originalData,
            deletedAt: Date.now(),
        });
        return this.modelType.updateOne({ _id: newId }, modelDelete);
    }
}
public async get(query, projection,options) {
    console.log(':::::::::versionalble repo get');
    const user = await this.modelType.findOne(query).lean();
    console.log('::::::::::user');
    return user;
}
public getAll( query, projection = {}, options = {}) {
     return this.modelType.find(query, projection, options).populate('password').lean();
    //return this.modelType.find(query, projection, options).lean();
}
}