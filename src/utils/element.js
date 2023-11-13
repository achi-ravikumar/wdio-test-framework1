

class Element{
    constructor(cssSelector){
        this.cssSelector = cssSelector; 
    }
    async all(){
        return await $$(this.cssSelector)
    }

    async isDisplayed(){
        const e = await $(this.cssSelector)
        return await e.isDisplayed();
    }

    async click(){
        const e = await $(this.cssSelector)
        await e.click(); 
    }
    async setValue(input) {
        const e = await $(this.cssSelector)
        await e.setValue(input);
    }

}

module.exports =  Element
