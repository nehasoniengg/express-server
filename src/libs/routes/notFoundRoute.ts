export function notFound(req, res, next)  {
    console.log('route not found');
    const error = {
        message:"Route not found",
        status:404
    }
    next(error)
      

};