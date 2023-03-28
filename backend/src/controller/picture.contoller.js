const User= require("../modal/user.modal");
const Picture= require("../modal/picture.modal");
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_KEY_SECRET 
  });


exports.postPicture=async(req,res)=>{
  let {name,url}=req.body;
  let userId=req.params.id;
  console.log(userId)
  try{
      let newPost= new Picture({name,url,userId});
      await newPost.save();
      res.status(201).send({message:"true",newPost})
  }
  catch(e){
    console.log(e.message)
  }
}

exports.getItem=async(req,res)=>{
    let userId=req.params.id;
  try{
     const data= await Picture.find({userId});
     return res.status(203).send(data)
  }
  catch(e){

  }
}