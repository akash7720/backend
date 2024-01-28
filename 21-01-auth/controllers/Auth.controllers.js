export const register = (req,res)=>{
    const {name,email,password ,confirmPasssword}= req.body;
     if(!name|| !email|| !password || !confirmPasssword){
        return res.send("All fields are required.")
     }
     
    res.send(name)
} 