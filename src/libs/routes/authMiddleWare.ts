import * as jwt from 'jsonwebtoken';
// import {hasPermission} from './hasPermission';
// import hasPermission from '../../../utils/permissions';
export default function(module, permissionType) {
  // tslint:disable-next-line:only-arrow-functions
  return  function(req, res, next) {
    console.log('user  ::::::', process.env.key);
    const token = req.header('Authorization');
    console.log('token value : ::: :', token);

    // const user = jwt.verify(token, process.env.key);

    try {
      const user = jwt.verify(token, process.env.key);
      if (!user) {
        throw new Error('not authorized');
      } else {
        next({ status: 401, message: 'Wrong Permission' });

      }
    }
    catch (err) {
      next({ status: 403, message: 'Unauthorized Access' });
    }
  };
}
