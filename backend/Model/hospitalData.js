import mongoose from "mongoose";

const hospitalData = new mongoose.Schema({
    hospital_name:{
        type:String
    },
    email_id:{
        type:String
    },
    address:{
        type:String
    },
    phone_number:{
        type:Number
    },
    city:{
        type:String
    },
    hospital_registration_number:{
        type:String
    },
    state:{
        type:String
    },
    emergency_word_number:{
        type:String
    },
    pincode:{
        type:Number
    },
    hospital_registration_date:{
        type:Date
    },
    password:{
        type:String
    },
    number_of_ambulance_available:{
        type:Number
    },
    hospital_registration_photo:{
        type:Buffer,
        contentType:String
    }

},{ timestamps: true })

export default mongoose.model("Data",hospitalData)