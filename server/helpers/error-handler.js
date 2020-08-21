module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        //Error de aplicacioón personalizado
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        //Error de validación de mongoose
        return res.status(400).json({ message: err.message});
    }

    if (err.name === 'UnaithorizedError') {
        //Error de autenticación con jwt
        return res.status(400).json({ message: "Invalid token" });
    }

    //Error de server 500 por defecto
    return res.status(500).json({ message: err.message });
}