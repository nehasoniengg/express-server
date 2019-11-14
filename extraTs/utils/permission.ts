import {IPermissions } from '../interfaces';
export const permissions : IPermissions ={
  'getUser':{
      all:['head-trainer'],
      read:['trainees','trainer'],
      write:['trainer'],
      delete:[],
  }
}

// export default function permission(getUser,trainee,type){
//   if(getUser=='getUser'&& trainee=='head-trainee'&&type=='all'||type=='read'||type=='write'||type=='delete'){
//    return true;

//   }
//   else if(trainee=='trainees'&& type=='read'){
//       return true;

//   }
//   else if (trainee=='trainer' && type=='read'|| type=='write'){
//       return true
//   }
//   else
//   return false;
//}
// console.log(
//   permission('getUser','head-trainee','all'));

//   console.log(
//       permission('getUser','trainee','all'));

//       console.log(
//           permission('getUser','trainer','all'));




//import { permissions  } from '../constants' ;
// export default function  hasPermission( moduleName: string, role: string, permissionType: string)
// :boolean {
//     if (!permissions.hasOwnProperty(moduleName)) {
//         return false;
//     }
//     else if (!permissions[moduleName].hasOwnProperty(permissionType)) {
//         return false;
//     }
//     else if (!permissions[moduleName][permissionType].includes(role)) {
//         return false;
//     }
//     else {
//         return true;
//     }}

