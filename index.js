const {Telegraf} = require("telegraf");
const express = require('express');
const expressApp = express();

const bot = new Telegraf("6128496735:AAE-bCdaHk-WknNc_egxg0By7YKbP7pwETo");

const arananKelimelerMerhaba = ["Merhaba", "merhaba", "selam", "Selam Aleyküm", "Selam", "SA", "Hello", "hello", "selamın aleyküm", "Selamın Aleyküm", "selam aleyküm"];
const arananKelimelerGunaydin = ["Günaydın", "günaydın", "gnydn", "Günaydin", "günaydin", "Gunaydın", "Gunaydin", "Hayırlı Sabahlar", "Hayirli Sabahlar", "Hayirlı Sabahlar", "Hayırli Sabahlar", "hayirli sabahlar", "hayırlı sabahlar"];
const arananKelimelerRojbas = ["Roj baş", "Rojbaş", "Rojbas", "Roj bas", "rojbas", "roj bas"];
const arananKelimelerNasilsin = ["Nasılsın", "nasılsın"];
const arananKelimelerCawayi = ["Çawayi", "Cawayi", "çawayi", "cawayi", "Çavayi", "Cavayi", "cavayi", "çavayi"];


bot.command("defol", async (ctx) => {
  if (ctx.message.from.id === 785515320) {
    await ctx.reply(`Hemen ayrılıyorum MeKa Usta.`);
    await ctx.telegram.leaveChat(ctx.message.chat.id);
    // await ctx.leaveChat();
  } else {
    await ctx.reply(`Sadece MeKa Botu gruptan komut ile çıkarabilir yada yönetici bir kimsenin "bot'u" grup ayarlarından çıkarması gerekir.`);
  }
});


bot.on("message", async (ctx) => {
    if (arananKelimelerMerhaba.includes(ctx.message.text)) {
        await ctx.telegram.sendMessage(
            ctx.message.chat.id,
            `Merhaba ${ctx.message.from.first_name}`);
    }
    if (arananKelimelerGunaydin.includes(ctx.message.text)) {
        await ctx.telegram.sendMessage(
            ctx.message.chat.id,
            `Sağ olun efendim sizlerin de gününüz aydın ve bol bereketli olsun.`);
    }

    if (arananKelimelerRojbas.includes(ctx.message.text)) {
        await ctx.telegram.sendMessage(
            ctx.message.chat.id,
            `Spas û roj baş ji we re jî`);
    }

    if (arananKelimelerNasilsin.includes(ctx.message.text)) {
        await ctx.telegram.sendMessage(
            ctx.message.chat.id,
            `Ben iyiyim. Sen nasılsın?` );
    }
    if (arananKelimelerCawayi.includes(ctx.message.text)) {
        await ctx.telegram.sendMessage(
            ctx.message.chat.id,
            `Ez baş im spas tu çawa yî` );
    }
});

bot.launch();

expressApp.get('/', (req, res) => {
    res.send('Hello World!');
  });
  expressApp.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });