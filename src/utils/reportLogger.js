
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
class ReportLogger{
    async attachScreenshot(){
        // await cucumberJson.attach(browser.takeScreenshot(), 'image/png'); 
    }

    async attachMessage(message){
        await cucumberJson.attach(message);
    }
}

module.exports = new ReportLogger(); 
