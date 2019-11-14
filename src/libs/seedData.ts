import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
import { userModel }  from '../repositories/user/UserModel';

const userRepository = new UserRepository();
export default () => {
    const saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync('training@123', salt);
    const user = {
        name: 'Head Trainer',
        email: 'head.trainer@successive.tech',
        password: hash,
        userId: 'soni',
        role: 'head-trainer'
    };    
    userModel.countDocuments({}, function(err, count) { 
         if (count === 0 ) {
                userRepository.create(user)
              .catch((err) => {
              console.log('Error Occured', err);
              
              });
            }
         });
   



}