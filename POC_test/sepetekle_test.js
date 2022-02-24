Feature('sepetekle');

Before(({I,loginPage})=>{
    loginPage.browserBaslatma();
    loginPage.login();
});

Scenario('Trendyol Sepete Urun Ekleme', ({ I, aramaPagePage,urunEklePage}) => {
    aramaPagePage.aramaYap();
    aramaPagePage.popupKapama();
    urunEklePage.urunsec();
    urunEklePage.sepeteEkle();
});
