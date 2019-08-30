import mongoose from 'mongoose';
import { IQueryGet } from './entities';
import { userModel } from './UserModel';
import IuserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class userRepository extends VersionableRepository<IuserModel, mongoose.Model<IuserModel>>{
    static getAll(arg0: { deletedAt: { $exists: boolean; }; role: string; }, undefined: undefined, query: { limit: number; skip: number; }) {
        throw new Error("Method not implemented.");
    }
    static create(data: any) {
        throw new Error("Method not implemented.");
    }
    static delete(arg0: { _id: any; }) {
        throw new Error("Method not implemented.");
    }
    static update(arg0: { _id: any; }, dataToUpdate: any) {
        throw new Error("Method not implemented.");
    }
    userModel: any;
    constructor() {
        super(userModel)
    }
    public get(query: IQueryGet, projection ={},options={}) {
        return super.get(query, projection={},options={});
    }

    public update({},dataToUpdate) {
        return this.userModel.update(dataToUpdate);
    }
   
    public create(data) {
        return super.create(data);
    }
    public getAll( query, projection, options) {
        return super.getAll(query, projection, options).lean();
    }
    public delete(data) {
        return super.delete(data);
    }

    async findOne(query) {
        const data = await super.get(query, {}, {});
        return data;
    }    
}