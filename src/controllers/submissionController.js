const submissionService = require('../services/submissionService');
async function pingRequest(req,res){
    // console.log(this.testService);
    const response = await this.submissionService.pingCheck();
    return res.send({data:response});
}
// add validation
async function createSubmission(req,res){
    const response = await this.submissionService.addSubmission(req.body);
    return res.status(200).send({
        error:{},
        data : response,
        success:true,
        message:"Created submission successfully"
    })
}

module.exports = {pingRequest,
    createSubmission
};