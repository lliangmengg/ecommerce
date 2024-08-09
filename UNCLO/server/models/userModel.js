import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
    },
    cart: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('User', userSchema);
