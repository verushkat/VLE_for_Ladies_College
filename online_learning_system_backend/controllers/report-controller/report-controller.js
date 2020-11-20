const firebase = require('../helpers/firebase');
let database = firebase.db;
let studentRef = database.ref("student");
let teacherRef = database.ref("teacher");
const pdf = require('express-pdf');

function setupReportService(app) {
    app.use(pdf);
    app.use('/generateSummeryReport', function (req, res) {
        if (req.query.reportEntity === undefined) {
            res.status(500).send('<body><h1>Report Enitity Not Found<h1><h3>Please contact support team</h3></body>')
        } else {
           if(req.query.reportEntity === 'student'){
               generateStudentReport(req, res);
           }
            if(req.query.reportEntity === 'teacher'){
                generateTeacherReport(req, res);
            }
        }
    });
}


function generateStudentReport(req, res) {
    var reportBody = '<table> <tr> ' +
        '<th>Name</th>' +
        '<th>Address</th>' +
        '<th>Gender</th>' +
        '<th>Email</th>' +
        '<th>Grade</th>' +
        '<th>Section</th>' +
        '<th>Parent Name</th>' +
        '<th>Parent Phone</th>' +
        '<th>Parent Email</th>' +
        '</tr>';

    studentRef.once("value", function (snapshot) {
        let array = [];
        snapshot.forEach(function (student) {
            let studentValue = student.val();
            if (req.query.filterBy !== undefined && req.query.filterValue !== undefined) {
                if (req.query.filterBy.toLowerCase() === 'grade' && studentValue.grade.toLowerCase() === req.query.filterValue.toLowerCase()) {
                    array.push(studentValue);
                }
                if (req.query.filterBy.toLowerCase() === 'gender' && studentValue.gender.toLowerCase() === req.query.filterValue.toLowerCase()) {
                    array.push(studentValue);
                }
                if (req.query.filterBy.toLowerCase() === 'section' && studentValue.section.toLowerCase() === req.query.filterValue.toLowerCase()) {
                    array.push(studentValue);
                }
            } else {
                array.push(studentValue);
            }
        });

        if (req.query.sortBy !== undefined) {
            if (req.query.sortBy.toLowerCase() === 'name') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.name.localeCompare(a.name);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.name.localeCompare(b.name);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'address') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.address.localeCompare(a.address);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.address.localeCompare(b.address);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'gender') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.gender.localeCompare(a.gender);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.gender.localeCompare(b.gender);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'email') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.email.localeCompare(a.email);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.email.localeCompare(b.email);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'grade') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.grade - a.grade;
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.grade - b.grade;
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'section') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.section.localeCompare(a.section);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.section.localeCompare(b.section);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'parentname') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.parent.name.localeCompare(a.parent.name);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.parent.name.localeCompare(b.parent.name);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'parentphone') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.parent.phone.localeCompare(a.parent.phone);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.parent.phone.localeCompare(b.parent.phone);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'parentemail') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.parent.email.localeCompare(a.parent.email);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.parent.email.localeCompare(b.parent.email);
                    });
                }
            }

        }

        // generate html body

        for (let i = 0; i < array.length; i++) {
            let studentInfo = array[i];
            reportBody += "<tr>";
            reportBody += " <td>" + studentInfo.name + "</td>";
            reportBody += " <td>" + studentInfo.address + "</td>";
            reportBody += " <td>" + studentInfo.gender + "</td>";
            reportBody += " <td>" + studentInfo.email + "</td>";
            reportBody += " <td>" + studentInfo.grade + "</td>";
            reportBody += " <td>" + studentInfo.section + "</td>";
            reportBody += " <td>" + studentInfo.parent.name + "</td>";
            reportBody += " <td>" + studentInfo.parent.phone + "</td>";
            reportBody += " <td>" + studentInfo.parent.email + "</td>";
            reportBody += "</tr>";

        }

        // deliver report

        reportBody += '</table>'
        res.pdfFromHTML({
            filename: 'generated.pdf',
            htmlContent: generateHtml("OLS Students Report", reportBody)
        });
    });
}


function generateTeacherReport(req, res) {
    var reportBody = '<table> <tr> ' +
        '<th>Name</th>' +
        '<th>Phone</th>' +
        '<th>Subject</th>' +
        '<th>Email</th>' +
        '</tr>';
    console.log("hello");
    teacherRef.once("value", function (snapshot) {
        let array = [];

        snapshot.forEach(function (student) {
            let studentValue = student.val();
            console.log(studentValue);
            if (req.query.filterBy !== undefined && req.query.filterValue !== undefined) {
                if (req.query.filterBy.toLowerCase() === 'subject' && studentValue.subject.toLowerCase() === req.query.filterValue.toLowerCase()) {
                    array.push(studentValue);
                }
            } else {
                array.push(studentValue);
            }
        });

        //console.log(array);

        if (req.query.sortBy !== undefined) {
            if (req.query.sortBy.toLowerCase() === 'name') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.name.localeCompare(a.name);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.name.localeCompare(b.name);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'subject') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.subject.localeCompare(a.subject);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.subject.localeCompare(b.subject);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'phone') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.phone.localeCompare(a.phone);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.phone.localeCompare(b.phone);
                    });
                }
            }

            if (req.query.sortBy.toLowerCase() === 'email') {
                if (req.query.sortDir.toLowerCase() === 'desc') {
                    array.sort(function (a, b) {
                        return b.email.localeCompare(a.email);
                    });
                } else {
                    array.sort(function (a, b) {
                        return a.email.localeCompare(b.email);
                    });
                }
            }

        }

        // generate html body

        for (let i = 0; i < array.length; i++) {
            let studentInfo = array[i];
            reportBody += "<tr>";
            reportBody += "<td>" + studentInfo.name + "</td>";
            reportBody += "<td>" + studentInfo.phone + "</td>";
            reportBody += "<td>" + studentInfo.subject + "</td>";
            reportBody += "<td>" + studentInfo.email + "</td>";
            reportBody += "</tr>";
        }

        // deliver report

        reportBody += '</table>'
        res.pdfFromHTML({
            filename: 'generated.pdf',
            htmlContent: generateHtml("OLS Teachers Report", reportBody)
        });
    });
}


function generateHtml(title, body) {
    return "<html>\n" +
        "<head>\n" +
        "<style>\n" +
        "table, th, td {\n" +
        "  border: 1px solid black;\n" +
        "}\n" +
        "table {\n" +
        "font-family: \"Times New Roman\", Times, serif;\n" +
        "font-size: 6px;\n" +
        "width: 100%;\n" +
        "border-collapse: collapse;\n" +
        "}\n" +
        "th {\n" +
        "  height: 35px;\n" +
        " background-color: #56baed;\n" +
        " padding:6px;\n" +
        "}\n" +
        "\n" +
        "td{\n" +
        "padding:4px;\n" +
        "}\n" +
        "</style>" +
        "</head>\n" +
        "\n" +
        "<body>\n" +
        "\n" +
        "<h2>" + title + "</h2>\n" +
        "\n" +
        body +
        "\n" +
        "</body>\n" +
        "</html>\n";
}

module.exports = {
    setupReportService
};
