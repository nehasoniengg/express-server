export { default as validationHandler } from './validationHandler';
export { default as errorHandler } from './routes/errorHandler';

/*
const validationHandler = (configs) => (req,res,next) =>{
    console.log('rquest', req);
    Object.entries(configs).forEach(([key, config]) => {
        // console.log('->>>>>>>>>>', config)
        const requestData = req[config['in'][0]][key];

        if (config['required'] == true && !requestData) {
            throw new Error(key + ' is required');
        }

        if (config['string'] ==  true && !isNaN(requestData)) {
            throw new Error(key + ' is required');
        }

        console.log('key', key);
        console.log('value', requestData);

    })
*/
