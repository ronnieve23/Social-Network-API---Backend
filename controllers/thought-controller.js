const { User, Thought } = require('../models');

const thoughtController = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
     // get thought by id
    getThoughtById({params}, res){
        Thought.findOne({_id:params.thoughtId})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

       // add new thought
       createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        }).then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id.' });
                return;
            }
            res.json(dbUserData);
        }).catch(err => res.json(err));
},

    //update thought
    updateThought ({params, body}, res) {
        Thought.findOneAndUpdate({_id: params.thoughtId}, body, {new: true})
        .then(dbThoughtData => {
            if (!dbThoughtData){
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch (err => {
            res.status(400).json(err);
        });
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(dbThoughtData => {
            if(!dbThoughtData){
              res.status(404).json({ message: 'No thought found with this id!' });
          }
            res.json(dbThoughtData)})
        .catch(err => res.status(400).json(err))
     }
};

module.exports = thoughtController;