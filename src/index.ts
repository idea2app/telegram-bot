import { Bot } from "grammy";
import "dotenv/config";

const { TOKEN } = process.env;

const bot = new Bot(TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();

console.log("Bot is running!");
