
const config = require('./config');

function getSection(grade) {
    if(grade >= config.section.primary[0] &&  grade <= config.section.primary[1]){
       return "primary";
    }else if(grade >= config.section.middle[0] && grade <= config.section.middle[1]){
        return "middle";
    }else if(grade >= config.section.upper[0] && grade <= config.section.upper[1]){
        return "upper";
    }
}

function getRank(grade){
    if(grade >= config.marksRanks.F[0] &&  grade < config.marksRanks.F[1]){
        return "F";
    }else if(grade >= config.marksRanks.CM[0] &&  grade < config.marksRanks.CM[1]){
        return "C<sup>-</sup>";
    }if(grade >= config.marksRanks.C[0] &&  grade < config.marksRanks.C[1]){
        return "C";
    }if(grade >= config.marksRanks.CP[0] &&  grade < config.marksRanks.CP[1]){
        return "C<sup>+</sup>";
    }if(grade >= config.marksRanks.BM[0] &&  grade < config.marksRanks.BM[1]){
        return "B<sup>-</sup>";
    }if(grade >= config.marksRanks.B[0] &&  grade < config.marksRanks.B[1]){
        return "B";
    }if(grade >= config.marksRanks.BP[0] &&  grade < config.marksRanks.BP[1]){
        return "B<sup>+</sup>";
    }if(grade >= config.marksRanks.AM[0] &&  grade < config.marksRanks.AM[1]){
        return "A<sup>-</sup>";
    }if(grade >= config.marksRanks.A[0] &&  grade < config.marksRanks.A[1]){
        return "A";
    }if(grade >= config.marksRanks.AP[0] &&  grade <= config.marksRanks.AP[1]){
        return "A<sup>+</sup>";
    }
}

function getTotalMarks(marksList){
    let total = 0;
    for (let i=0;i<marksList.length;i++){
        let mark = marksList[i].mark;
        total = total + parseInt(mark);
    }
    return total/marksList.length;
}



module.exports = {
    getSection,
    getRank,
    getTotalMarks
}
