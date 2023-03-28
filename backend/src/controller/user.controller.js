const User=require("../modal/user.modal");
const argon2=require("argon2");
const jwt= require("jsonwebtoken");
exports.register=async(req,res)=>{
    const {name,email,password}=req.body;
    let user= await User.findOne({email:email});
    console.log(email,user)
    const hash= await argon2.hash(password);
    try{
        if(user){
            return res.status(400).send("user already exists")
        }else{
            const newUser= new User({email,password:hash,name});
            await newUser.save();
            res.status(201).send({messsage:"user created sucessfully","user":newUser})
        }

    }
    catch(e){
       console.log(e.messsage)
    }
}

exports.login=async(req,res)=>{
    const {email,password}=  req.body;
    const user= await User.findOne({email});
    if(await argon2.verify(user.password,password)){
        const token=jwt.sign({
            ...user
        },"Vikalp@99",{
            expiresIn:"7 days"
        })
        return res.send({messaage:"Login sucessfull",token,user:user})
    };
    res.status(401).send("Invalid Crendential")
}