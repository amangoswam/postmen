const Joi = require('joi')

const authSchema = Joi.object({
    firstname:Joi.string().max(100).required(),
    Lastname:Joi.string().max(100).required(),
    email:Joi.string().email(),
    password:Joi.string().min(4).required(),
    mobile:Joi.string().min(10).required(),
})

const authValdate = async(req,res,next)=>{
    await authSchema.validateAsync(req.body)
    .then(()=>next())
    .catch((e)=>res.send(e.message))

}

module.exports = {
    authSchema, authValdate
}