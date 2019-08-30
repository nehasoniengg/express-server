const validationHandler = (configs) => (req, res, next) => {
    Object.entries(configs).forEach(([key, config]) => {
        const requestData = req[config['in'][0]][key];

        if (config['required'] == true && !requestData) {
            throw new Error(key + ' is required');
        }

        if (config['string'] == true && !isNaN(requestData)) {
            throw new Error(key + ' is required');
        }
        if (config['required'] == false && config['number'] == false) {
            throw new Error(key + 'is required');
        }
        if (config['required'] == false && config['default'] > 10) {
            throw new Error(key + 'is required');
        }
        if (config['required'] == false && config['isObject'] == false) {
            throw new Error(key + 'is required');
        }

    })

    next();

}
export default validationHandler;