const config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridApiKEY);
const surveyTemplate = require('./emailTemplates/surveyTemplate');
module.exports = (surveyData, callback) => {
    const recipients = surveyData.recipients.split(',').map(email => email.trim());
    const personalizations = surveyData.recipients.split(",").map(email => {
        email = email.trim();
        return {
            to: email,
            substitutions: {
                email: email
            }
        }
    });
    const msg = {
        personalizations,
        from: 'Emaily <no-reply@emaily.com>',
        subject: surveyData.subject,
        substitutionWrappers: ['{{', '}}'],
        templateId: '86ef4271-fc19-45df-b0c3-51e4e98d18a4',
        substitutions: {
            hostName: config.hostName
        }
    };
    console.log(msg);
    // html: surveyTemplate(surveyData),
    return sgMail.sendMultiple(msg);
}
