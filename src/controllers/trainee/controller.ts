import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import UserRepository from '../../repositories/user/UserRepository'
const userRepository = new UserRepository();
class TraineeController {
    public async get(req: Request, res: Response) {
        console.log('req query inside trainee controller::', );
        const { skip = 0, limit = 0 } = req.query;
        const query = {
            limit: parseInt(limit, 10),
            skip: parseInt(skip, 10),
        };
        const traineeList = await userRepository.getAll({ deletedAt: { $exists: false } ,role: 'trainee'}, undefined, query);
        const count: number = traineeList.length;
        console.log('inside get trainee::::');
        res.send([
        {
            count,
            data: traineeList,
            message: 'all trainees fetched successfully',
            status: 200,
        },
       ]);
    }
    public async create(req: Request, res: Response) {
        console.log('inside create trainee:::');
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        // console.log('salt:::::::',salt);
        // console.log('solt next :::',bcrypt.genSaltSync);
        const hash = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash;
        const data = {
            role: 'trainee',
            // userId: 'Soni',
            ...req.body,
        };
        const createTrainee = await userRepository.create(data);
        res.send({
            data: {
            name: createTrainee,
            //email: createTrainee,
            },
            message: 'trainee created successful',
            status: 'ok',
            
        });
    }

    public delete(req: Request , res: Response, next ) {
        userRepository.delete({_id: req.params.id})
            .then((result) => {
                if (result === ' user not found in delete !!!!! ') {
                    next({
                        message: result,
                        status: 404,
                    });
                }
                else {
                    res.send({
                    data: req.params.id,
                    message: 'User deleted successfully',
                    status: 200,
                    });
                }
        })
        .catch((err) => {
            console.log('Error Occured', err);
        });
    }
    public update(req: Request , res: Response , next) {
        console.log('::::::::::::inside update trainee:::');
        userRepository.update ({ _id: req.body.id },req.body.dataToUpdate  )
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
            message: 'User updated successfully',
            status: 200,
        });
     }
    })
    .catch((err) => {
            console.log('Error Occured', err);
            });
   }
}
export const traineeController = new TraineeController();

