import mongoose from "mongoose"

const db = () => mongoose.connect(process.env.URI)
    .then(()=> {
        console.log('MongoDB connected')
    })
    .catch((err)=>{
        console.log(err)
    })

export default db