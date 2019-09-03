// const validationHandler = (configs) => (req, res, next) => {
//     Object.entries(configs).forEach(([key, config]) => {
//         const requestData = req[config['in'][0]][key];

//         if (config['required'] == true && !requestData) {
//             throw new Error(key + ' is required');
//         }

//         if (config['string'] == true && !isNaN(requestData)) {
//             throw new Error(key + ' is required');
//         }
//         if (config['required'] == false && config['number'] == false) {
//             throw new Error(key + 'is required');
//         }
//         if (config['required'] == false && config['default'] > 10) {
//             throw new Error(key + 'is required');
//         }
//         if (config['required'] == false && config['isObject'] == false) {
//             throw new Error(key + 'is required');
//         }

//     })

//     next();

// }
// export default validationHandler;



const validationHandler = (config) => (req, res, next) => {
    console.log('hsjkJNL');
    Object.keys(config).map((Key) => {
        const { in: inn } = config[Key];
        

        Object.keys(config[Key]).forEach((keyProperty) => {
            const value = req[inn][Key];
            console.log('value:::::::',value);
            console.log('switch!!!!!!!', keyProperty);
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