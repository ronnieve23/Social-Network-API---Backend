const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');


const thoughtSchema = new Schema(
    {
        thoughtBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Thought = model ('Thought', thoughtSchema);

model.exports = Thought;