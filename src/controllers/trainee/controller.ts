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
        const hash = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash;
        const data = {
            role: 'trainee',
                ...req.body,
        };
        const createTrainee = await userRepository.create(data);
        res.send({
            data: {
            name: createTrainee,
                      },
            message: 'trainee created successful',
            status: 'ok',
            
        });
    }
 public async delete(req: Request ,res:Response,next){
     try{ console.log('inside delete trainee::: ');
     const { id } = req.params.id ;
     const deleteTrainee =await userRepository.delete({_id:req.params.id});
     console.log('delete user inside trainee controller ',deleteTrainee);
     if(deleteTrainee){
        res.send({
                data: { 
                    id: req.params.id 
                },
                message: 'User deleted successfully',
                status: 200,
                });

     }         
     } catch (err){
         next({
            message: 'user not found !!',       
            status: 404,

         });
     }
 }

public async update(req: Request, res: Response, next) {
    try {
        console.log('inside update trainee:::::');
        const { id, dataToUpdate } = req.body;
        const updateTrainee = await userRepository.update(id, dataToUpdate);        
        console.log('>>>>>>>',updateTrainee );
        if (updateTrainee) {
            res.send({
                data: req.body,
                message: 'trainee update successful',
                status: 200,
            });
        }
    } catch (err) {
        next({
            message: err.message,
            status: 401,
        });
    }
}

}
export const traineeController = new TraineeController();

