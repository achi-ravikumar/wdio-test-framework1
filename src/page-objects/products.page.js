const driverUtil = require('../utils/driverUtil');
const Element = require('../utils/element')

class ProductsPage{

    constructor(){
        this.inventory = new Element('#inventory_container');
        this.inventoryItems = new Element('#inventory_container .inventory_item')

    }

    async isPageDisplayed(){
        return this.inventory.isDisplayed()
    }


    async getHighestPricesProduct(){
        const items = await this.inventoryItems.all();
        const itemsCount = await items.length;

        const itemsCartWithprice = [];
        for (let i = 0; i < itemsCount;i++){
            const item = items[0];
            const pricetext = await (await item.$('.inventory_item_price')).getText();
            const cartBtn = await item.$('.btn_small.btn_inventory');
            itemsCartWithprice.push({
                price: parseFloat(pricetext.replace('$', '')),
                itemActionBtn: cartBtn 
            }) 
        }
        const sortedByprices = itemsCartWithprice.sort((a,b) => a.price < b.price ? 1 : -1)
        return sortedByprices[0].itemActionBtn;
    }

    async addHightestpricesItem(){
        const e = await this.getHighestPricesProduct(); 
        await e.click(); 
    }
    
    async getHighestpricesItemBtnText(){
        const e = await this.getHighestPricesProduct();
        return await e.getText();  
    }

}

module.exports = new ProductsPage();
