import { IPermissions , IUsers } from './interface';
export const  permissions: IPermissions = {
    getUsers: {
        all: ['head-trainer'],
        delete: [],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
    },
};
export const users: IUsers[] = [
    {
        reviewerEmail: 'user1@successive.tech', traineeEmail: 'trainee@successive#tech'},
    {
        reviewerEmail: 'user2@successive.tech', traineeEmail: 'trainee2@successive.tech12'},
    {
        reviewerEmail: 'user1#successive.tech', traineeEmail: 'trainee@successive.tech'},
] ;