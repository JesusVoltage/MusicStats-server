const express = require ('express');
const router =  express.Router();

const userCtrl = require('../controladores/user.controller');

/**  obtener todos los usuarios*/
router.get('/', userCtrl.getUsers);


/** obtener numero de usuarios */

router.get('/:num', userCtrl.getUsersNum)

/** obtener datos de un único usuario */
router.get('/:id', userCtrl.getUser);

/** crear un nuevo usuario */
router.post('/', userCtrl.createUser);

/** editar un usuario */
router.put('/:id', userCtrl.editUser);

/** eliminar un usuario */
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
