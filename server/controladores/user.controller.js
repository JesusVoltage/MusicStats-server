const User = require('../modelos/user');


const userCtrl = {};



userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        status: 'user saved'
    });
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.editUser = async (req, res) => {
    //obtiene la id através de request params
    const { id } = req.params;
    const updatedUser = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos
    };
    await User.findByIdAndUpdate(id, { $set: updatedUser });
    res.json({ status: 'updated' });
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'removed'});
}


module.exports = userCtrl;