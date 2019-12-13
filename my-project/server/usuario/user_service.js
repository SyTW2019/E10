const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ name: `${username}` });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const userWithoutHash = user.toObject();
        delete userWithoutHash.hash;
        const token = jwt.sign({ sub: user._id }, config.secret);
        return {
            userWithoutHash,
            token
        }
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}


// AQUI ESTA EL ERROR
async function create(userParam) {
    // validate
    if (await User.findOne({ name: userParam.name })) {
        console.log('Username "' + userParam.name + '" is already taken');
    }

    console.log(userParam.password);
    // hash password
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    const user = new User(userParam);
    console.log("JSON de usuario" + user);

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.has = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}