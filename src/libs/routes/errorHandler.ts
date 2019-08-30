export function errorHandler(err, req, res, next) {

    res.send({
        err,
        message: 'error please try again later ',
         status: 500,
    });
}
