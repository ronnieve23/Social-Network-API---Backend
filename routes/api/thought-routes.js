const router = require('express').Router();

const {
    getAllThoughts,
    createThought
  } = require('../../controllers/thought-controller');
// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThoughts);
  
  
// GET one,POST, PUT, and DELETE /api/thought/:id
router
.route('/:id')
.post(createThought);


module.exports = router;