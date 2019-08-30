
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default class UserController {

    public static login(req, res, next) {          
        console.log('Inside Login Request', req.body);
         const { email, password } = req.body; 
         userRepository.findOne({ email })
         .then((user) => {
             console.log('User is :::::', user); 
             if (!user) {
             return next('User not Found'); 
         }
             const { password: hashpassword } = user;
             if (!(bcrypt.compareSync( password, hashpassword))) {
             return next('Password does not match');
         }
             const token = jwt.sign(user, configuration.key);
             console.log('Token is::::', token);
             console.log('User Response', user.password);
             res.send({
             data: { 
                 user,
                 password, 
                  token,
             },
             message: 'Authorization Token',
             status: 'ok',
         });
     })
         .catch((err) => {
         console.log('Error Occured user controller', err);
         });
     }


    public static updateUser(req , res, next) {  
        userRepository.update (
            { _id: req.body.id }, req.body.dataToUpdate )
            .then((res) => {
            if (res === 'user not found') {
             next ({
               message: res,
                status: 404,
              });
            }
        else {
            next({
            data: req.body.dataToUpdate,
            message: 'User update successfully',
            status: 200,
        });
     }
    })
    .catch((err) => {
            console.log('Error Occured', err);
            });
   }
    public static deleteUser(req, res, next) {     
        userRepository.delete({_id: req.params.id})
            .then((result) => {
                if (result === ' user not found in delete ') {
                    next({
                        message: result,
                        status: 404,
                    });
                }
                else {
                    res.send({
                    data: req.params.id,
                    message: 'User delete successfully',
                    status: 200,
                    });
                }
        })
        .catch((err) => {
            console.log('Error Occured', err);
        });
    }
    public static getUser(req, res) {     
        console.log('User inside get user:::', req.user); 
        res.send({
            data: req.user,
            message: 'User Fetch Successfully',
            status: 'ok',
         });
    }
   
}
