const mongoose = require ('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({

    nombre: { type: String, required: true},
    apellidos: { type: String, required: true},
    correo:{type: String, required: true},
    username:{type: String, required: true},
    password:{type: String, required: true},
    avatar:{type: String, required: false}, 
    verificado:{type: Boolean, required: true},
})

module.exports = mongoose.model('User', UserSchema);