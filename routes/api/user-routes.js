const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');
//GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

//GET one, PUT, DELETE /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;