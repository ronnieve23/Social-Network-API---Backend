const router = require('express').Router();

const {
    getAllUsers,
    createUser
  } = require('../../controllers/user-controller');
// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);


module.exports = router;