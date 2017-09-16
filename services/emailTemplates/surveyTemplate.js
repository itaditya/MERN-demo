module.exports = () => {
    return `
        <html>
            <head></head>
            <body>
                <p>Please fill out the survey !</p>
                <h2>Did you not like our product ?</h2>
                <a href="{{hostName}}/api/surveys/submit?email={{email}}&response=yes">Yes</a>
                <a href="{{hostName}}/api/surveys/submit?email={{email}}&response=no">No</a>
                {{hostName}}
                {{email}}
                <br/>
                <br/>
                Regards,
                <br/>
                <h3>Aditya</h3>
                <br/>
                From Emaily
                <br/>
            </body>
        </html>
    `;
}
