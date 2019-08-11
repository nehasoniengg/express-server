const validationHandler = (configs) => (req,res,next) =>{
    console.log('rquest', req);
    Object.entries(configs).forEach(([key, config]) => {
        // console.log('->>>>>>>>>>', config)
        const requestData = req[config['in'][0]][key];
        console.log('keyyyyyyy>>> : ',key);
        console.log('request ??? ',requestData);

        if (config['required'] == true && !requestData) {
            throw new Error(key + ' is required');
        }

        if (config['string'] ==  true && !isNaN(requestData)) {
            throw new Error(key + ' is required');
        }
        if(config['required']==false && config['number']==false) {
            throw new Error(key +'is required');
        }
        if(config['required']==false && config['default']>10) {
            throw new Error(key +'is required');
        }
        if(config['required']==false && config['isObject']==false) {
            throw new Error(key +'is required');
        }



        console.log('key', key);
        console.log('value', requestData);

    })
  

    next();

}
export  default validationHandler;