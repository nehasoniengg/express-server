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
            in: ['body']
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


    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },

        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: function (dataToUpdate) { },
        }
    }
}
export default validation;