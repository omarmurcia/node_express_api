module.exports = function (err, req, res, next) {
    console.log(err);
    res.status(500).json({
        statusCode: 500,
        title: 'Internal server error 2',
        errorCode: err.code
    });
    next(err);
};