const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:[true,'User Id for the submision is missing']
    },
    problemId:{
        type:String,
        required:[true,'Problem Id for the submision is missing']
    },
    code:{
        type:String,
        required:[true,'Code for the submision is missing']
    },
    language:{
        type:String,
        required:[true,'Language for the submision is missing']
    },
    status:{
        type:String,
        enum:["Pending","Success","WA","Run time error","TLE","MLE"],
        default:"Pending"
    }

})

const Submission = mongoose.model('Submission',submissionSchema);

module.exports = Submission;