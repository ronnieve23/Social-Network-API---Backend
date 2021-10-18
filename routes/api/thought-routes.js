const router = require('express').Router();

const {
    getAllThoughts,
    createThought
  } = require('../../controllers/thought-controller');
// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

router
.route('/:id')
.post(createThought);


module.exports = router;