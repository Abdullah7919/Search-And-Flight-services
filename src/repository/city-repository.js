const { Op }=require('sequelize');

const { City } =require('../models/index');


class CityRepository {

   async createCity({ name }){
    try {
        const city= await City.create({ name });
        return city;
    } catch (error) {
        console.log("something went wrong in the repository layer");
        throw {error};
    }

   }

   async deleteCity(cityId){
    try {
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;
    } catch (error) {
        console.log("something went wrong in the repository layer");
        throw {error};
    }

   }

   async updateCity(cityId,data){
    try {
        // The below aproach is also work but will not return updat object 
        // if we are using pg then returning :true use else not
        // const response=await City.update(data,{
        //     where:{
        //         id:cityId
        //     },
        //     returning:true,
        //     plan:true
        // });
        // for getting updated data in mysql we use the below approach
        const city=await City.findByPk(cityId);
        city.name=data.name;
        await city.save();
        return city;
        
    } catch (error) {
        console.log("something went wrong in the repository layer");
        throw {error};
    }
   }

   async getCity(cityId){
    try {
        const city=await City.findByPk(cityId);
        return city;
        
    } catch (error) {
        console.log("something went wrong in the repository layer");
        throw {error};
    }

   }

   async getAllCities(filter){
    try {
        
        if(filter.name){
            const cities=await City.findAll({
                where:{
                   name:{
                    [Op.startsWith]:filter.name
                   } 
                }
            })
            return cities;
        }
        const city=await City.findAll();
        return city;        
    } catch (error) {
        console.log("something went wrong in the repository layer");
        throw {error};
    }
   }
}

module.exports=CityRepository;