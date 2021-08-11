export function errorHandler(err, req, res, next) {

    if(!err.status) {
        err.code = 500;
    }else {
        err.code = err.status;
    }

    if(! err.message) {
        err.message="something went wrong"
    }

    const errorResponse = {
       error:{
        status:false,
        code:err.code,
        msg:err.message
    }
}
    return res.status(err.code).json(errorResponse)

    
}
