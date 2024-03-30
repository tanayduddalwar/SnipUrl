const seesionIdtoUserMap=new Map();

function setUser(id,user){
    seesionIdtoUserMap.set(id,user);
}

function getuser(id){
    return seesionIdtoUserMap.get(id);
}

module.exports={
    setUser, getuser
}