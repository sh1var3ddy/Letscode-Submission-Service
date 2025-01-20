const { fetchProblemDetails } = require("../apis/problemAdmin");
const SubmissionProducer  = require("../producers/submissionQueueProducer")

class submissionService{
    constructor(submissionRepository){
        this.submissionRepository = submissionRepository;
    }
    async pingCheck(){
        return 'pong';
    }
    async addSubmission(submissionPayload){
        const problemId = submissionPayload.problemId;
        const problemAdminApiResponse = await fetchProblemDetails(problemId);
        if(!problemAdminApiResponse){
            throw new Error("Failed to create a submission in the repo");
        }
        // console.log(problemAdminApiResponse.data.codeStubs);
        const languageCoseStub = problemAdminApiResponse.data.codeStubs.find(codeStub=>codeStub.language.toLowerCase()===submissionPayload.language.toLowerCase());
        console.log(languageCoseStub);
        submissionPayload.code = languageCodeStub.startSnippet +"\n\n" + submissionPayload + "\n\n" + languageCodeStub.endSnippet; 
        const submission = await this.submissionRepository.addSubmission(submissionPayload);
        if(!submission){
            // add error handling
            throw {message:"Not able to create submission"};
        }
        console.log(submission);
        const response = await SubmissionProducer({
            [submission._id]: {
                code:submission.code,
                language:submission.language,
                inputCase:problemAdminApiResponse.data.testCases[0].input,
                outputCase:problemAdminApiResponse.data.testCases[0].output
            }
        });
        return {queueResponse:response,submission};
    }

}

module.exports = submissionService;