const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    deleteThought,
    getThoughtById,
    updateThought
  } = require('../../controllers/thought-controller');
// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThoughts);

  
// POST /api/thoughts/:userId
router
.route('/:userId')
.post(createThought)


// GET one thought, POST, PUT, and DELETE /api/thoughts/:userId/:thoughtId
router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


module.exports = router;