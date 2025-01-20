const axiosInstance = require("../config/axiosInstance");
const {PROBLEM_ADMIN_SERVICE_URL} = require("../config/serverConfig")

const PROBMEN_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

async function fetchProblemDetails(problemId){
    try {
        const uri = PROBMEN_ADMIN_API_URL + `/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        console.log(response);
        return response;
    } catch (error) {
        console.log("Something went wrong");   
        console.log(error);    
    }
}

module.exports = {
    fetchProblemDetails
}