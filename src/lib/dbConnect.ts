import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?:number
}


const connection : ConnectionObject = {}

async function dbConnect(): Promise<void> {
   if(connection.isConnected){
    console.log("database is already conencted ....");
    return;
   }
   try{
       const db = await mongoose.connect(process.env.MONGODB_URI || '' ,{})
       console.log("DB" , db)
       connection.isConnected = db.connections[0].readyState
       console.log("database is conencted ....");
   }catch(err){
       console.log("database connection failed...." , err);
       process.exit(1)
   }
}


export default dbConnect
