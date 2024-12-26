import mongoose , {Schema, Document} from 'mongoose'; //document because we using type safety no need in js

export interface Message extends Document{       //this is the main syntax for typescript

    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content : {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username : string,
    email : string,
    password : string,
    verifyCode : string,
    verifyCodeExpiry : Date,
    isVerified : boolean,
    isAcceptingMessage :boolean,
    messages : Message[]   
}

const UserSchema: Schema<User> = new Schema({
     username: {
        type: String,
        required: [true, "username is required"],
        trim : true,
        unique : true

    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim : true,
        unique : true,
        
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim : true,
        unique : true,
        
    },
    verifyCode: {
        type: String,
        required: [true, "verify code is required"],    
    },
    
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verify code Expiry is required"],    
    },
    isVerified: {
        type: Boolean,
        default: false,       
    },
    isAcceptingMessage:{
        type: Boolean,
        default : false,
    },
    messages:
        [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel ;