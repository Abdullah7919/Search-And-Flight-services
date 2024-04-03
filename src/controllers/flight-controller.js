const { FlightService }=require('../services/index');

const flightService=new FlightService();

const createFlight =async(req,res)=>{
    try {
        const flight=await flightService.createFlight(req.body);
        res.status(201).json({
            data:flight,
            success:true,
            message:"Successfully created a flight",
            error:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create the flight",
            err:error
        });
    }
}

module.exports={
    createFlight
}