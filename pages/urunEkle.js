const { I } = inject();

module.exports = {
  fields : {
    urun : '//div[@class="p-card-wrppr"]',
  },
  selects :{},
  buttons :{
    ilkUrun: '.p-card-wrppr:nth-child(1)',
    sepetButonu : '//button[@class="add-to-basket"]',
  },
  
  urunsec : async function(){
    //I.waitForElement('//div[@class="p-card-wrppr"]', 5);
    I.waitForClickable(this.fields.urun, 50);
    I.doubleClick(this.buttons.ilkUrun);
    I.switchToPreviousTab(0); //Switching back to parent or previous opened tab
    I.switchToNextTab();
    
    
  },
  sepeteEkle : async function(){
    I.waitForElement(this.buttons.sepetButonu, 150);
    I.click(this.buttons.sepetButonu);
  }
}
