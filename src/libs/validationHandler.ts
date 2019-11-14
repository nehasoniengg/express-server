const validationHandler = (config) => (req, res, next) => {
 Object.keys(config).map((Key) => {
   const { in: inn } = config[Key];       
      Object.keys(config[Key]).forEach((keyProperty) => {
        const value = req[inn][Key];
            switch (keyProperty) {
             case 'required':
             if (!config[Key].required && !value) {
                req[inn][Key] = config[Key].default;
                  break;
                    }
             if ((!(Key in req[inn]) || (value === '')) || (config[Key].required === 'true')) {
               next({
             message: Key + ' is required',
              status: 400,
              });
         }
                 break;
            case 'string':
             if (!(typeof (value) === 'string') || !(value !== '')) {
              next({
          message: Key + ' is required or must be string',
          status: 400,
                });
        }
                break;
            case 'regex':
            const regexx = new RegExp(config[Key].regex);
             if (!regexx.test(value)) {
             next({
             message: config[Key].errorMessage,
             status: 400,
              });
     }
             break;
            case 'number':
            if (config[Key].required === 'false') {
           next();
             }
            if (isNaN(value)) {
          next({
         message: config[Key].errorMessage,
         status: 400,
            });
      }
             break;
            case 'isObject':
            if (!(typeof (value) === 'object')) {
            next({
           message: 'data should be in object',
           status: 400,
             });
        }
             break;
             case 'custom':
             console.log('configg---',value);
            config[Key].custom(value);
            break;
            }
        });
    });
    next();
};
export default validationHandler;