import { permissions  } from '../../../extraTs/utils/permission' ;
export default function hasPermission(moduleName, role, permissionType) {
      if (moduleName in permissions) {
      if (permissionType in permissions[moduleName]) {
        if (permissions[moduleName][permissionType].includes(role)) {
          return true;
        }
        if (permissions[moduleName].all.includes(role)) {
          return true;
        }
        return false;
      }
      return false;
    } else {
      return false;
    }
  }

