const mongoose = require("mongoose");
const userModel = new mongoose.Schema(
{
    nombreUsuario:{
        type:String
    },
    password:{
        type:String
},

    timeStamp:true,
    versionKey:false,
}
)
const ModelUser = mongoose.model("usuarios", userModel);
module.exports = ModelUser;