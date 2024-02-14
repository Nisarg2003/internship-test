import mongoose from "mongoose";
import hospitalData from "../Model/hospitalData.js";

export const registerController = async(req,res)=>{
    try{

    const {hospital_name,email_id,address,phone_number,city,hospital_registration_number,state,emergency_word_number,pincode,hospital_registration_date,password,number_of_ambulance_available} = req.body


    const data = new hospitalData({...req.body})
        await data.save()

    res.status(201).send({
        success: true,
        message: "Hospital Registered Successfully",
        data,
    });
}catch(error){
    res.status(400).send({
        success: false,
        message: "Error in registration",
        error
    })
    console.log(error)
}

}

export const loginController = async(req,res)=>{
    try {
        const {hospital_name, email_id, password } = req.body

        if (!email_id) {
            return res.send({ message: "Email is Required" });
        }
        if (!password) {
            return res.send({ message: "Password is Required" });
        }
        if (!hospital_name) {
            return res.send({ message: "Hospital Name is Required" });
        }

        const data = await hospitalData.findOne({hospital_name, email_id, password })

        if (!data) {
            return res.status(404).send('user not found')
        }

        res.status(200).send({
            success: true,
            message: "User login successfully",
            data,
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error in Login",
            error
        })
        console.log(error)
    }
}

export const getData = async(req,res)=>{
    try{
        const data = await hospitalData.find().sort({ createdAt: -1 })
        res.status(200).send({
            success: true,
            message: "Getting Data successfully",
            data,
        })   
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Error in Getting Data",
            error
        })
        console.log(error)
    }
    
}

export const searchHospital = async (req, res) => {
    const searchQuery = req.query.search;

    // if (!searchQuery) {
    //     res.send([]);
    //     return;
    // }

    const keyword = {
        $or: [
            { hospital_name: { $regex: searchQuery, $options: "i" } },
            
        ],
    };

    try {
        const data = await hospitalData.find(keyword)
        res.send(data);
    } catch (error) {
        console.error("Error searching Hospital:", error);
        res.status(500).send("Internal Server Error");
    }
};