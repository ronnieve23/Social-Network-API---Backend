const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    deleteThought,
    getThoughtById,
    updateThought
  } = require('../../controllers/thought-controller');
// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// GET thought by id, PUT thought, DELETE thought
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);



module.exports = router;