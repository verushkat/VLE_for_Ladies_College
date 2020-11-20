const emailSender = require('../helpers/email-sender');
let firebase_auth = require("../helpers/firebase-auth");
const dataProcessor = require("../helpers/data-processor");

function generateReport(req,res) {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let reportData = req.body;
        console.log(dataProcessor.getTotalMarks(reportData.marks));
        let body = generateBody(reportData.studentName,dataProcessor.getRank(dataProcessor.getTotalMarks(reportData.marks)),reportData.marks);
        emailSender.sendEmail(reportData.parentEmail, "OLS Report - New", body);
        res.end("{\"status\": \"Report Generated\"}");
    },function (reject) {
        res.status(401).send();
    });
}

module.exports = {
    generateReport
};


function generateSubjectBody(markList) {
    var subjectBody = "";
    for (let i=0;i<markList.length;i++) {
        subjectBody = subjectBody + "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 50px; padding-left: 20px; padding-top: 10px; padding-bottom: 15px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#343434;font-family:'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.5;padding-top:10px;padding-right:50px;padding-bottom:15px;padding-left:20px;\">\n" +
        "<div style=\"font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.5; font-size: 12px; color: #343434; mso-line-height-alt: 18px;\">\n" +
        "<p style=\"font-size: 30px; line-height: 1.5; text-align: left; word-break: break-word; font-family: Oswald, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 45px; margin: 0;\"><span style=\"font-size: 30px; background-color: #fff54e;\"><strong>" + markList[i].subject + "  </strong></span></p>\n" +
        "<p style=\"font-size: 20px; line-height: 1.5; text-align: left; word-break: break-word; font-family: Oswald, Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 30px; margin: 0;\"><span style=\"font-size: 20px; color: #ffffff;\"><span style=\"font-size: 24px;\">Result - " + dataProcessor.getRank(markList[i].mark) +"</span><br/></span></p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<div align=\"left\" class=\"img-container left fixedwidth\" style=\"padding-right: 0px;padding-left: 0px;\">\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr style=\"line-height:0px\"><td style=\"padding-right: 0px;padding-left: 0px;\" align=\"left\"><![endif]--><img alt=\"Image\" border=\"0\" class=\"left fixedwidth\" src=\"https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Fgessetto.png?alt=media&token=0aa24766-05b3-498d-803f-31e6fb8764e3\" style=\"text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 460px; display: block;\" title=\"Image\" width=\"460\"/>\n" +
        "<div style=\"font-size:1px;line-height:10px\"> </div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "</div>\n";
    }

    return subjectBody;
}

function generateBody(studentName,averageMark,marksList) {
    return "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional //EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
        "\n" +
        "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:v=\"urn:schemas-microsoft-com:vml\">\n" +
        "<head>\n" +
        "<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->\n" +
        "<meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\"/>\n" +
        "<meta content=\"width=device-width\" name=\"viewport\"/>\n" +
        "<!--[if !mso]><!-->\n" +
        "<meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\"/>\n" +
        "<!--<![endif]-->\n" +
        "<title></title>\n" +
        "<!--[if !mso]><!-->\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Merriweather\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Oxygen\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Abril+Fatface\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Abril+Fatface\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Bitter\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Oswald\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Bitter\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Bitter\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Oswald\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Nunito\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Droid+Serif\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Oswald\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Oswald\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<link href=\"https://fonts.googleapis.com/css?family=Ubuntu\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
        "<!--<![endif]-->\n" +
        "<style type=\"text/css\">\n" +
        "body {\n" +
        "margin: 0;\n" +
        "padding: 0;\n" +
        "}\n" +
        "\n" +
        "table,\n" +
        "td,\n" +
        "tr {\n" +
        "vertical-align: top;\n" +
        "border-collapse: collapse;\n" +
        "}\n" +
        "\n" +
        "* {\n" +
        "line-height: inherit;\n" +
        "}\n" +
        "\n" +
        "a[x-apple-data-detectors=true] {\n" +
        "color: inherit !important;\n" +
        "text-decoration: none !important;\n" +
        "}\n" +
        "</style>\n" +
        "<style id=\"media-query\" type=\"text/css\">\n" +
        "@media (max-width: 660px) {\n" +
        "\n" +
        ".block-grid,\n" +
        ".col {\n" +
        "min-width: 320px !important;\n" +
        "max-width: 100% !important;\n" +
        "display: block !important;\n" +
        "}\n" +
        "\n" +
        ".block-grid {\n" +
        "width: 100% !important;\n" +
        "}\n" +
        "\n" +
        ".col {\n" +
        "width: 100% !important;\n" +
        "}\n" +
        "\n" +
        ".col>div {\n" +
        "margin: 0 auto;\n" +
        "}\n" +
        "\n" +
        "img.fullwidth,\n" +
        "img.fullwidthOnMobile {\n" +
        "max-width: 100% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col {\n" +
        "min-width: 0 !important;\n" +
        "display: table-cell !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack.two-up .col {\n" +
        "width: 50% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col.num4 {\n" +
        "width: 33% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col.num8 {\n" +
        "width: 66% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col.num4 {\n" +
        "width: 33% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col.num3 {\n" +
        "width: 25% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col.num6 {\n" +
        "width: 50% !important;\n" +
        "}\n" +
        "\n" +
        ".no-stack .col.num9 {\n" +
        "width: 75% !important;\n" +
        "}\n" +
        "\n" +
        ".video-block {\n" +
        "max-width: none !important;\n" +
        "}\n" +
        "\n" +
        ".mobile_hide {\n" +
        "min-height: 0px;\n" +
        "max-height: 0px;\n" +
        "max-width: 0px;\n" +
        "display: none;\n" +
        "overflow: hidden;\n" +
        "font-size: 0px;\n" +
        "}\n" +
        "\n" +
        ".desktop_hide {\n" +
        "display: block !important;\n" +
        "max-height: none !important;\n" +
        "}\n" +
        "}\n" +
        "</style>\n" +
        "</head>\n" +
        "<body class=\"clean-body\" style=\"margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;\">\n" +
        "<!--[if IE]><div class=\"ie-browser\"><![endif]-->\n" +
        "<table bgcolor=\"#FFFFFF\" cellpadding=\"0\" cellspacing=\"0\" class=\"nl-container\" role=\"presentation\" style=\"table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;\" valign=\"top\" width=\"100%\">\n" +
        "<tbody>\n" +
        "<tr style=\"vertical-align: top;\" valign=\"top\">\n" +
        "<td style=\"word-break: break-word; vertical-align: top;\" valign=\"top\">\n" +
        "<!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td align=\"center\" style=\"background-color:#FFFFFF\"><![endif]-->\n" +
        "<div style=\"background-image:url('https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2FbgHero3.png?alt=media&token=8ec7b582-2016-4f3e-8ac0-315d813132e8');background-position:top center;background-repeat:no-repeat;background-color:#ffffff;\">\n" +
        "<div class=\"block-grid\" style=\"Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;\">\n" +
        "<div style=\"border-collapse: collapse;display: table;width: 100%;background-color:transparent;\">\n" +
        "<!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"background-image:url('https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2FbgHero3.png?alt=media&token=8ec7b582-2016-4f3e-8ac0-315d813132e8');background-position:top center;background-repeat:no-repeat;background-color:#ffffff;\"><tr><td align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:640px\"><tr class=\"layout-full-width\" style=\"background-color:transparent\"><![endif]-->\n" +
        "<!--[if (mso)|(IE)]><td align=\"center\" width=\"640\" style=\"background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;\"><![endif]-->\n" +
        "<div class=\"col num12\" style=\"min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;\">\n" +
        "<div style=\"width:100% !important;\">\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "<div style=\"border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;\">\n" +
        "<!--<![endif]-->\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#555555;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;\">\n" +
        "<div style=\"font-size: 14px; line-height: 1.2; color: #555555; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px;\">\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<div align=\"center\" class=\"button-container\" style=\"padding-top:5px;padding-right:10px;padding-bottom:25px;padding-left:10px;\">\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;\"><tr><td style=\"padding-top: 5px; padding-right: 10px; padding-bottom: 25px; padding-left: 10px\" align=\"center\"><v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" href=\"#\" style=\"height:47.25pt; width:285.75pt; v-text-anchor:middle;\" arcsize=\"26%\" stroke=\"false\" fillcolor=\"#fff54e\"><w:anchorlock/><v:textbox inset=\"0,0,0,0\"><center style=\"color:#332f21; font-family:sans-serif; font-size:24px\"><![endif]--><a href=\"#\" style=\"-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #332f21; background-color: #fff54e; border-radius: 16px; -webkit-border-radius: 16px; -moz-border-radius: 16px; width: auto; width: auto; border-top: 1px solid #fff54e; border-right: 1px solid #fff54e; border-bottom: 1px solid #fff54e; border-left: 1px solid #fff54e; padding-top: 5px; padding-bottom: 10px; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;\" target=\"_blank\"><span style=\"padding-left:50px;padding-right:55px;font-size:24px;display:inline-block;\"><span style=\"font-size: 16px; line-height: 2; word-break: break-word; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; mso-line-height-alt: 32px;\"><span data-mce-style=\"font-size: 24px; line-height: 48px;\" style=\"font-size: 24px; line-height: 48px;\">STUDENT RESULTS</span></span></span></a>\n" +
        "<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->\n" +
        "</div>\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#555555;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;\">\n" +
        "<div style=\"line-height: 1.2; font-size: 12px; color: #555555; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;\">\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "</div>\n" +
        "<!--<![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
        "<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<div style=\"background-image:url('https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Fchalkboardtexture.jpg?alt=media&token=e17a1d00-406c-41c6-9583-640d8de2e2cd');background-position:top left;background-repeat:repeat;background-color:#000000;\">\n" +
        "<div class=\"block-grid\" style=\"Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;\">\n" +
        "<div style=\"border-collapse: collapse;display: table;width: 100%;background-color:transparent;\">\n" +
        "<!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"background-image:url('https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Fchalkboardtexture.jpg?alt=media&token=e17a1d00-406c-41c6-9583-640d8de2e2cd');background-position:top left;background-repeat:repeat;background-color:#000000;\"><tr><td align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:640px\"><tr class=\"layout-full-width\" style=\"background-color:transparent\"><![endif]-->\n" +
        "<!--[if (mso)|(IE)]><td align=\"center\" width=\"640\" style=\"background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:0px;\"><![endif]-->\n" +
        "<div class=\"col num12\" style=\"min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;\">\n" +
        "<div style=\"width:100% !important;\">\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "<div style=\"border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;\">\n" +
        "<!--<![endif]-->\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#555555;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;\">\n" +
        "<div style=\"font-size: 14px; line-height: 1.2; color: #555555; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px;\">\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: NaNpx; margin: 0;\"><span style=\"color: #ffffff;\"><span style=\"font-size: 24px;\">Student Name - " + studentName + "</span></span></p>\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: NaNpx; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "</div>\n" +
        "</div>\n" +


        // add subject blocks

        generateSubjectBody(marksList) +




        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 45px; padding-left: 20px; padding-top: 20px; padding-bottom: 25px; font-family: sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#ffffff;font-family:'Permanent Marker', Impact, Charcoal, sans-serif;line-height:1.5;padding-top:20px;padding-right:45px;padding-bottom:25px;padding-left:20px;\">\n" +
        "<div style=\"font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; line-height: 1.5; font-size: 12px; color: #ffffff; mso-line-height-alt: 18px;\">\n" +
        "<p style=\"font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; mso-line-height-alt: 21px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; mso-line-height-alt: 21px; margin: 0;\"><span style=\"color: #333333;\"><span style=\"font-size: 42px; background-color: #fff54e;\">Final Result</span></span></p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#ffffff;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;\">\n" +
        "<div style=\"font-size: 14px; line-height: 1.2; color: #ffffff; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px;\">\n" +
        "<p style=\"font-size: 48px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 46px; margin: 0;\"><span style=\"font-size: 38px;\">" + averageMark + "</span></p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;\"> </p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "</div>\n" +
        "<!--<![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
        "<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<div style=\"background-color:#249fc5;\">\n" +
        "<div class=\"block-grid\" style=\"Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;\">\n" +
        "<div style=\"border-collapse: collapse;display: table;width: 100%;background-color:transparent;\">\n" +
        "<!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"background-color:#249fc5;\"><tr><td align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:640px\"><tr class=\"layout-full-width\" style=\"background-color:transparent\"><![endif]-->\n" +
        "<!--[if (mso)|(IE)]><td align=\"center\" width=\"640\" style=\"background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:20px;\"><![endif]-->\n" +
        "<div class=\"col num12\" style=\"min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;\">\n" +
        "<div style=\"width:100% !important;\">\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "<div style=\"border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;\">\n" +
        "<!--<![endif]-->\n" +
        "<table cellpadding=\"0\" cellspacing=\"0\" class=\"social_icons\" role=\"presentation\" style=\"table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;\" valign=\"top\" width=\"100%\">\n" +
        "<tbody>\n" +
        "<tr style=\"vertical-align: top;\" valign=\"top\">\n" +
        "<td style=\"word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;\" valign=\"top\">\n" +
        "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"social_table\" role=\"presentation\" style=\"table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;\" valign=\"top\">\n" +
        "<tbody>\n" +
        "<tr align=\"center\" style=\"vertical-align: top; display: inline-block; text-align: center;\" valign=\"top\">\n" +
        "<td style=\"word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 8px; padding-left: 8px;\" valign=\"top\"><a href=\"https://www.facebook.com/\" target=\"_blank\"><img alt=\"Facebook\" height=\"32\" src=\"https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Ffacebook2x.png?alt=media&token=4fcd3d20-6f4e-448f-b858-ef335d373f9c\" style=\"text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;\" title=\"Facebook\" width=\"32\"/></a></td>\n" +
        "<td style=\"word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 8px; padding-left: 8px;\" valign=\"top\"><a href=\"https://twitter.com/\" target=\"_blank\"><img alt=\"Twitter\" height=\"32\" src=\"https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Ftwitter2x.png?alt=media&token=a33ed89a-936b-4449-acff-8465646b951e\" style=\"text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;\" title=\"Twitter\" width=\"32\"/></a></td>\n" +
        "<td style=\"word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 8px; padding-left: 8px;\" valign=\"top\"><a href=\"https://instagram.com/\" target=\"_blank\"><img alt=\"Instagram\" height=\"32\" src=\"https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Finstagram2x.png?alt=media&token=a2cf9b9f-160a-4d5c-a1db-801367d5c322\" style=\"text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;\" title=\"Instagram\" width=\"32\"/></a></td>\n" +
        "<td style=\"word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 8px; padding-left: 8px;\" valign=\"top\"><a href=\"https://www.linkedin.com/\" target=\"_blank\"><img alt=\"LinkedIn\" height=\"32\" src=\"https://firebasestorage.googleapis.com/v0/b/online-learning-system-d9124.appspot.com/o/resourses%2Femail%2Flinkedin2x.png?alt=media&token=49a81e47-0132-4dc8-91e9-c3097c98993a\" style=\"text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;\" title=\"LinkedIn\" width=\"32\"/></a></td>\n" +
        "</tr>\n" +
        "</tbody>\n" +
        "</table>\n" +
        "</td>\n" +
        "</tr>\n" +
        "</tbody>\n" +
        "</table>\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#ffffff;font-family:Oswald, Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;\">\n" +
        "<div style=\"line-height: 1.2; font-size: 12px; color: #ffffff; font-family: Oswald, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;\">\n" +
        "<p style=\"line-height: 1.2; word-break: break-word; font-size: 20px; mso-line-height-alt: 24px; margin: 0;\"><span style=\"font-size: 20px;\">This email generated by OLS (Online Learning System). No signature required. </span></p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "</div>\n" +
        "<!--<![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
        "<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<div style=\"background-color:#249fc5;\">\n" +
        "<div class=\"block-grid\" style=\"Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;\">\n" +
        "<div style=\"border-collapse: collapse;display: table;width: 100%;background-color:transparent;\">\n" +
        "<!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"background-color:#249fc5;\"><tr><td align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:640px\"><tr class=\"layout-full-width\" style=\"background-color:transparent\"><![endif]-->\n" +
        "<!--[if (mso)|(IE)]><td align=\"center\" width=\"640\" style=\"background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;\"><![endif]-->\n" +
        "<div class=\"col num12\" style=\"min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;\">\n" +
        "<div style=\"width:100% !important;\">\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "<div style=\"border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;\">\n" +
        "<!--<![endif]-->\n" +
        "<!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif\"><![endif]-->\n" +
        "<div style=\"color:#eee;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;\">\n" +
        "<div style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 1.2; color: #eee; mso-line-height-alt: 14px;\">\n" +
        "<p style=\"font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 17px; margin: 0;\"><em>© 2020 All rights reserved.</em></p>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if mso]></td></tr></table><![endif]-->\n" +
        "<!--[if (!mso)&(!IE)]><!-->\n" +
        "</div>\n" +
        "<!--<![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
        "<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "<!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
        "</td>\n" +
        "</tr>\n" +
        "</tbody>\n" +
        "</table>\n" +
        "<!--[if (IE)]></div><![endif]-->\n" +
        "</body>\n" +
        "</html>\n";
}
