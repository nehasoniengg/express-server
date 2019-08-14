import * as jwt from 'jsonwebtoken';
// import {hasPermission} from './hasPermission';
// import hasPermission from '../../../utils/permissions';
export default function(module, permissionType) {
  // tslint:disable-next-line:only-arrow-functions
  return  function(req, res, next) {
   
    try {
      const token = req.header('Authorization');
      const user = jwt.verify(token, process.env.key);

           console.log('information >>>>>>>',user);
           console.log ('value of token ::::::',token);
   
      
      if (!user) {
        throw new Error('not authorized');
      } else {
        // next({ status: 401, message: 'Wrong Permission' });
        console.log('connection successful');

      }
    }
    catch (err) {
      next({ status: 403, message: 'Unauthorized Access' });
    }
  };
}
