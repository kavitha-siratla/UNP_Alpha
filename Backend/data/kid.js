const axios = require("axios");
const kid = require('../model/kid');



const serachKidByFilters = async (postData) => {
  try {
    console.log("Reached here inside data", postData)
    const parentInfolocation = await kid.findAll({ where: { location: postData.location } });
    console.log("This is parentInfoLocation", parentInfolocation)
    // const parentInfograde = await kid.findOne({ where: { grade: postData.grade } });
    // const parentInfogender = await kid.findOne({ where: { location: postData.location } });
    // const parentInfoschool = await kid.findOne({ where: { location: postData.location } });
    // let finalresult = parentInfolocation + parentInfograde + parentInfogender + parentInfoschool
    if (!parentInfolocation) throw 'Could not find parent of that location!'
    // console.log("finalresult", [parentInfolocation.dataValues + parentInfograde.dataValues])
    return (parentInfolocation)
  } catch (error) {
    return error
  }
};

const serachKidByLocation = async (postData) => {
  try {
    // console.log("Reached here inside data", postData)
    const parentInfolocation = await kid.findOne({ where: { location: postData.location } });
    if (!parentInfolocation) throw 'Could not find parent of that location!'
    // console.log("finalresult",parentInfolocation )
    return (parentInfolocation)
    // return ("abc")
  } catch (error) {
    return error
  }
};

const serachKidAgeByName = async (postData) => {
  try {
    // console.log("Reached here inside data", postData)
    const kidInfo = await kid.findOne({ where: { first_name: postData.name } });
    if (!kidInfo) throw 'Could not find parent of that location!'
    // console.log("finalresult",kidInfo )
    return (kidInfo.age)
    // return ("abc")
  } catch (error) {
    return error
  }
};


module.exports = {
    serachKidByFilters,
    serachKidByLocation,
    serachKidAgeByName
    
};
