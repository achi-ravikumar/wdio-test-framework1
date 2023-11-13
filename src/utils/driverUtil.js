const config = require('../config')
const reportLogger = require('./reportLogger');

class DriverUtil{

    constructor(){
        this.waitTimeout = config.defaultWaitTimeout;
    }

    setWaitTimeout(timeout){
        this.waitTimeout = timeout; 
    }

    async waitForElement(element, timeout){
        await element.waitForExist({ timeout: timeout ? timeout : this.waitTimeout  });
    }

    async retryCallback(callback){
        let retryCounter = 0;
        let error = null;
        while (retryCounter <= 3 ){
            if (retryCounter !== 0){
                reportLogger.attachMessage(`Failed with following error, will retry in 5sec ...`);
                reportLogger.attachMessage(`${error}`);
                await this.sleep(5000);
            }
            error = null;
            try{
                return await callback();
            }catch(err){
                error = err;
            }
            retryCounter++;
        }
        if (error){
            throw new Error(error);
        }
    }

    async sleep(millisec){
        await new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(true);
            }, millisec);
        });
    }

}

module.exports = new DriverUtil();


