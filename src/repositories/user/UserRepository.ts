import  mongoose from 'mongoose';
import { IQueryGet } from './entities';
import {userModel} from '../user/UserModel';

export default class userRepository{
    userModal;
    constructor(){
        this.userModal= userModel;
    }

    get(query:IQueryGet,projection,options){
        return this.userModal.find(query,projection,options);
    }

    update(dataToUpdate){
        return this.userModal.update(dataToUpdate);
    }

    create(data){
        console.log(":::::::::::data:::::", data)
        return this.userModal.create(data);
    }
}