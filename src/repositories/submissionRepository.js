const submission = require("../models/submissionModels");

class SubmissionRepository{
    constructor(){
        this.submissionModel = submission;
    }

    async createSubmission(submission){
        const response = await this.submissionModel.create(submission);
        return response;
    }
}
module.exports = SubmissionRepository;