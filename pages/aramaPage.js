const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields : {
    aramaText:'//input[@class="search-box"]',
    popupOverlay : '//div[@class="overlay"]',
    urun : '//div[@class="p-card-wrppr"]',
    imgArea : '//span[@class="image-container"]',
    popupBaslik : '//div[@class="popup-heading"]',
  },
  selects :{},
  buttons :{},
  
  aramaYap : async function(){
    I.waitForElement(this.fields.imgArea,100);
    I.fillField(this.fields.aramaText,"samsung 20");
    I.pressKey("Enter");
  },

  popupKapama : async function(){
    I.waitForElement(this.fields.urun, 100);
    I.wait(2);
    let adet =  await I.grabNumberOfVisibleElements(this.fields.popupBaslik);
    if(adet != 0){
      try{
        I.waitForElement(this.fields.popupOverlay, 100);
      }catch(e){}
        I.click(this.fields.popupOverlay);
    }
  }
}
