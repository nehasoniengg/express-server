const validation = {
    create: {
            name: {
            required: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required',
        },
        email: {
            required: true,
            regex: '',
            in: ['body'],
            errorMessage: 'email is required',
        }
    },

    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },


    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
   update:
    {
        id:
        {
            required: true,
            in: ['body'],
            string: true,
        },
        dataToUpdate:
        {
            in: ['body'],
            isObject: true,      
            required: true,
            custom: (dataToUpdate) => {
                const { name, email } = dataToUpdate;
                const nameRegex = new RegExp('^[a-zA-Z].*[\s\.]*$');

                if (name === '' || !(nameRegex.test(name)) ) {
                    throw { error: 'Error Occured', message: 'name is required' };
                }
                if (email === '') {
                    throw { error: 'Error Occured', message: 'email is requireddd' };
                }
           },
              },
        
    },


}
export default validation;