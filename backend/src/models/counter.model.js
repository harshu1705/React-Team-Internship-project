import mongoose, { Schema } from "mongoose";


const counterSchema = new Schema({
    _id: { 
        type: String, 
        required: true 
    }, 
    seq: {
         type: Number,
          default: 0
         }      
});


const Counter = mongoose.model("Counter", counterSchema);
//_id can be written like sequenceName ,blogId 

const getNextSequenceValue = async (sequenceName) => {
    const sequence = await Counter.findOneAndUpdate(
        { _id: sequenceName },
        { $inc: { seq: 1 } },
        { new: true, upsert: true } 
    );
    return sequence.seq;
};


export { getNextSequenceValue };
