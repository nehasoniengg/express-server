
import * as jwt from 'jsonwebtoken';
import {default as  hasPermission } from './hasPermission';
import configuration  from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default ( moduleName, permissionType ) => (req, res, next) => {
    console.log('config is ::::', moduleName, permissionType);
    const token = req.headers.authorization;
    const userinfo = jwt.verify(token, configuration.key );  
    console.log('user information::::', userinfo);
    if (hasPermission( moduleName, 'get', permissionType )) {
        console.log('checked has parmission::::::');
        userRepository.get({originalId: userinfo._id , deleatedAt: {$exists: false}}, undefined)
    .then((user) => {
        console.log('user inside auth ::::',user);
        if (!user) {
            next('user does not exist');
        }
        console.log('user from db :::', user);
        req.user = user;
        next();
    })
    .catch((error) => {
        res.log('errror is ', error);
    });
        }
        else {
            next();
        
        }
      }
