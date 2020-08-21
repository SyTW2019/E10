const config = require("../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../helpers/db");
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ name: `${username}` });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const userWithoutHash = user.toObject();
        delete userWithoutHash.hash;
        const token = jwt.sign({ sub: user._id }, config.secret);
        return {
            userWithoutHash,
            token,
        };
    }
}

async function getAll() {
    return await User.find().select("-hash");
}

async function getById(id) {
    return await User.findById(id).select("-hash");
}

//AQUI ESTA EL ERROR
async function create(userParam) { 
    //Validación
    if (await User.findOne({ name: userParam.name })) {
        console.log(
            'El nombre de usuario "' + userParam.name + '" está cogido'
        );
    }

    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    const user = new User(userParam);
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // Validación
    if (!user) throw "Usuario no encontrado";
    if (
        user.username !== userParam.username &&
        (await User.findOne({ username: userParam.username }))
    ) {
        throw 'El usuario "' + userParam.username + '" está cogido';
    }

    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
