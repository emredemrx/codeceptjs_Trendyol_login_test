const { I } = inject();
let paremeters = require('../parameters/proje.json');
module.exports = {
  
  getParameters : function(key){
    return paremeters[key];
  },
  fields : {
    emailAlani : '//input[@id="login-email"]',
    sifreAlani :'//input[@id="login-password-input"]'
  },
  buttons : {
    popubKapama : '//div[@class="modal-close"]',
    loginSayfaAcma: '//div[@class="link account-user"]',
    loginButonu :'//button[@class="q-primary q-fluid q-button-medium q-button submit"]'
  },
  browserBaslatma : async function(){
    I.amOnPage(this.getParameters("url"));
    I.click(this.buttons.popubKapama);
  },
  login : async function(){
    if(this.getParameters("email") != "LOGIN_MAIL" && this.getParameters("password") != "LOGIN_SIFRE" ){
      I.click(this.buttons.loginSayfaAcma);
      I.fillField(this.fields.emailAlani,this.getParameters("email"));
      I.fillField(this.fields.sifreAlani,this.getParameters("password"));
      I.click(this.buttons.loginButonu);
    }
  }
}
