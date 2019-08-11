export function errorHandler(err, req, res, next) {
    // console.log('inside error ',err);
    res.send({
        error: err,
        message: 'error',
        // status: 500,
    });
}
