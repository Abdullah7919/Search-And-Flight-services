const { FlightRepository,AirplaneRepository }=require('../repository/index');
const { compareFlights }=require('../utils/helper');
class FlightService{

    constructor(){
        this.flightRepository=new FlightRepository();
        this.airplaneRepository=new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareFlights(data.arrivalTime,data.departureTime)){
                throw {error:'Arrival time must be greater than Departure Time'};
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane);
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity})
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

}

module.exports=FlightService;