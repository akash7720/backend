
import mongoose,{Schema} from "mongoose"

const userSchema = new Schema ({
    name:{
        type:String,
        requared : true
    },

     email:{
        type:String,
        requared : true
    },

    password:{
        type:String,
        requared : true
    }

    
})

export default mongoose.model('Todos',userSchema)