import { log } from "console";
import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject ={}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("already connected to database");
        return
    }
    try{
       const db= await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lakshdahiya2005:9896096559@cluster0.a5ayaeu.mongodb.net/mystrymessage' )
       connection.isConnected=db.connections[0].readyState
       console.log("db connected successfully");
       


    }catch(error)
    {
        console.log("db connection failed",error);
        
        process.exit(1);
    }

    


}


export default dbConnect ;
    