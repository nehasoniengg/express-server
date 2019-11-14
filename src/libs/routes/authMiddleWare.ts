
import * as jwt from 'jsonwebtoken';
import {default as  hasPermission } from './hasPermission';
import configuration  from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default ( moduleName, permissionType ) => (req, res, next) => {
    console.log('inside auth');
    const token = req.headers.authorization;
    const userinfo = jwt.verify(token, configuration.key ); 
    if (hasPermission( moduleName, 'head-trainer', permissionType )||
    hasPermission( moduleName, 'get', permissionType )) {
        userRepository.get({originalId: userinfo._id , deleatedAt: {$exists: false}}, undefined)
    .then((user) => {
        if (!user) {
            next('user does not exist');
        }
        req.user = user;
        next();
    })
    .catch((error) => {
        console.log('error in token',error);
        next({
            message: "token expired",
            status: "500"
        })
    });
        }
        else {
            next();
        
        }
      }
