const express =require('express');
const bodyParser=require('body-parser');
const { PORT }=require('./config/serverConfig');
const ApiRoutes=require('./routes/index');

const db=require('./models/index');
// const {Airplane}=require('./models/index');

const setupAndStartServer=async()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async()=>{
        console.log(`server started at PORT ${PORT}`); 
        // db.sequelize.sync({alter:true});
        // const city=await City.findOne({
        //     where:{
        //         id:16
        //     },
        // })
        // const airport=await city.getAirports();
        // const newAirport=await Airport.findOne({
        //     where:{
        //         id:10
        //     }
        // })
        // await city.addAirport(newAirport)
        // console.log(airport);
        // await Airplane.create({
        //     modelNumber:"Airbus 230",
            
        // })
    });

    
}

setupAndStartServer();