const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mailer = require('../services/mailer');
const User = require('../models/User');
const Survey = require('../models/Survey');
module.exports = (app) => {
    app.get('/api/surveys', requireLogin, (req, res) => {
        res.send();
    });
    app.get('/api/surveys/submit', (req, res) => {
        console.log(req.query);
        console.log(req.params);
        res.send(200);
    });
    // requireLogin, requireCredits,
    app.post('/api/surveys', (req, res) => {
        const picked = ({
            title,
            subject,
            recipients
        }) => ({
            title,
            subject,
            recipients
        });
        const surveyData = picked(req.body);
        const survey = new Survey({
            title: surveyData.title,
            subject: surveyData.subject,
            body: surveyData.body,
            recipients: surveyData.recipients.split(",").map(email => ({
                email: email.trim()
            })),
            _user: 1 || req.user.id,
            dateSent: Date.now()
        });
        mailer(surveyData).then(() => {
            res.send(200);
        }).catch(error => {
            console.error(error.toString());
            const {
                message,
                code,
                response
            } = error;
            const {
                headers,
                body
            } = response;
            res.send(401);
        });
    });
}
