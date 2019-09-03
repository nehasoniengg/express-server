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
        const updateuser = await this.modelType.findOne({ originalId: id, deletedAt: { $exists: false } }).lean();
        if (!updateuser) {
            throw new Error('user not foundddd :::');
        } else {
            originalData = updateuser;
            const id = VersionableRepository.generateObjectId();
            const modelCreate = new this.modelType({
                ...originalData,
                ...options,
                _id: id,
            });
            const record = await this.modelType.create(modelCreate);
            await record.toObject();
            const newestId = originalData._id;
            const modelUpdate = new this.modelType({
                ...originalData,
                deletedAt: Date.now(),
            });
            console.log('model update::::',modelUpdate)
            return this.modelType.updateOne({ _id: newestId }, modelUpdate);
        }

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
    const user = await this.modelType.findOne(query).lean();
    return user;
}
public getAll( query, projection = {}, options = {}) {
     return this.modelType.find(query, projection, options).populate('password').lean();
}
}