import { IPermissions } from './interface';
export const GetUsers: string = "getUsers";
export const HeadTrainer: string = "head-trainer";
export const Trainer: string = "trainer";
export const Trainee: string = "trainee";
export const module:string="trainee";
export const permissions: IPermissions = {
[module]:{
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
delete: [],

},

};
