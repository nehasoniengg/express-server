import { Request, Response } from 'express';
// import UserModel from '../../repositories/user/UserModel'; 
import UserSchema from '../../repositories/user/UserSchema'
class TraineeController {
    get(req, res) {
        console.log('inside get... >>>>>>>>>');
        //User.create({ name: 'trainee2423523' });
        res.send([
            {
                name: 'Get Response',
            }
        ])
    };

    create(req, res) {
        console.log('inside create ....');
        res.send({
            status: 'fine',
            message: 'trainee created successfully',
            data:
            {
                name: 'Trainee1',
                id: 1,

            }
        })
    };


    update(req, res) {
        console.log('inside update !!!!');
        res.send({
            status: 'ok',
            message: 'tainee updated  successfully',
            data:
            {
                name: 'trainee1',
                id: 1,
            }
        })
    }

    delete(req, res) {
        console.log('inside delete /////');
        res.send({
            status: 'good',
            message: 'trainee deleted successfully',
            data:
            {
                name: 'trainee1',
                id: 1,
            }
        })
    }
}

export default new TraineeController;