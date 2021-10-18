const {User} = require('../models');

const userController = {
    //get all users
    getAllUsers (req, res){
        User.find({})
        .populate({
            path:'thoughts',
            select:'-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch (err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

     //get one user
     getUserById ({params}, res){
        User.findOne({_id: params.id })
        .populate({
            path:'thoughts',
            select:'-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch (err => {
            res.status(400).json(err);
        });
    },

    // add new user
    createUser({body},res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(400).json(err));
    }
};

module.exports = userController;