import  UserRepository from '../repositories/user/UserRepository';
// import userRepository from '../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default () => {
    const user = {
        user: 'user1',
        email:'successive@123' 
    };
    userRepository.create(user)
    .then(res=>{
        console.log('user in seed folder ::::: ',user);
    })
    .catch(err =>{
        console.log('error in seed data >>> ',err);
    })
}