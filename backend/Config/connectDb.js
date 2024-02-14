import mongoose from "mongoose";


const connectDb = async () => {
    try {
        
      const conn = await mongoose.connect("mongodb+srv://Nisarg:Shsn_2909@cluster0.v5qtkda.mongodb.net/Internship-test");
      console.log(
        `Conneted To Mongodb Databse` 
      );
    } catch (error) {
      console.log(`Error in Mongodb`);
    }
  };
  
  export default connectDb;