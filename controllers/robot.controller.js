const { request , response } = require("express");

const { robots } = require("../robots");

const getRobot = ( req = request , res = response )=> {
    
    return res.json({
        status:true,
        robots,
        statusCode:200
    });
}

const getRobotById = ( req = request , res = response )=> {

    let id = req.params.id;

    if(!req.params.id){
        return res.json({
            msg:"Debe agregar un id para realizar la busqueda"
        });
    }

    let robotABuscar = "";

    robotABuscar = robots.find(( robot ) => {
        return robot.id === id
    });

    if(robotABuscar){
        return res.json({
            ok:true,
            robotABuscar,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"No hay robot con ese id",
            statusCode:404
        });
    }

}


module.exports = {
    getRobot,
    getRobotById
}