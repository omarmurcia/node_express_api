exports.getRequest = async (req, res, next) => {
    try {
        //TODO
        res.status(200).send({
            message: "GET test..."
        });
    } catch (error) {
        next(error);
    }
};

exports.postRequest = async (req, res, next) => {
    try {
        //TODO
        res.status(200).send({
            message: "POST test..."
        });
    } catch (error) {
        next(error);
    }
};