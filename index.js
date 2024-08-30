const puppeteer = require("puppeteer");
const promptSync = require("prompt-sync");


(async()=>{
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();

    // Hesap Bilgileri Girişi (register kısmı)
    await page.goto('https://www.craftrise.com.tr/');
    await page.waitForSelector('[class = "font-mikado clickable"]');
    await page.click('[class = "font-mikado clickable"]');
    await page.waitForSelector('[class = "clickable download-rise"]');
    await page.click('[class = "clickable download-rise"]');
    await page.waitForSelector('[id = "userName"]');
    await page.click('[id = "userName"]');
    await page.keyboard.type(userName);
    await page.waitForSelector('[id = "userMail1"]');
    await page.click('[id = "userMail1"]');
    await page.keyboard.type(userMail1);
    await page.waitForSelector('[id = "registerPass"]');
    await page.click('[id = "registerPass"]');
    await page.keyboard.type(registerPass);
    await page.waitForSelector('[id = "registerPass2"]');
    await page.click('[id = "registerPass2"]');
    await page.keyboard.type(registerPass);
    await page.click('[id = "registerTick"]');
    await page.click('[class = "login-button clickable"]');
    console.log('Hesap Bilgilerini Girdim ve Kayıt Oluşturdum Hesabı Kontrol Et');

})();

//prompt-sync
const prompt = promptSync();

console.log('Şifre Oluştururken En Az 1 Büyük Harf, En Az 1 Küçük Harf Ve En Az 1 Sayı Olmasına Dikkat Ediniz!');
console.log(' ');
const userName = prompt('Hesaın Kullanıcı Adı Ne Olsun?  ');
console.log(`Tamam, Kullanıcı Adı =>  ${userName}`);
const userMail1 = prompt('Hesabın Maili Ne Olsun?  ');
console.log(`Tamam, Hesap Maili =>  ${userMail1}`);
const registerPass = prompt('Hesabın Şifresi Ne Olsun?  ');
console.log(`Tamam, Hesap Şifresi =>  ${registerPass}`);
