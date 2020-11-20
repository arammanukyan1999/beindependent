const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    eventHost:{ type: Boolean, default:false},
    socialMedia:{ type: Boolean, default:false},
    myNetwork:{ type: Boolean, default:false},
    firstName:{ type: String, required:[true, 'First name is required'] },
    lastName:{ type: String, required: [true, 'Last name is required'] },
    email: {
        type: String,
        unique:[true, 'Your username already in use'],
        trim: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    mobilePhone:{ type: Number, required: [true, 'Phone number is required'] },
    sendEmailUpdates:{ type: Boolean, default:false},
    sendMessages:{ type: Boolean, default:false},
    phone:Number,
    callTime:String,
    address:String,
    availableTime:String,
    comments:String,
    publish:{ type: Boolean, default:false},

});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
