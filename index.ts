import { Say_one } from "./bot_speaking/one_respond";
import { _clefs_hello } from "./bot_clef/clefs";

const Discord = require('discord.js');

const client = new Discord.Client({intents: [
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.DIRECT_MESSAGES,
  Discord.Intents.FLAGS.MESSAGE_CONTENT
]});

client.on('ready', ()=>{
  console.log('Hello world!')
});

client.on('message', async (m: { author: { bot: any; }; channel: { id: string; send: (arg0: string) => void; }; }&any)=>{
  if (m.author.bot)return;
  // if (m.channel.id!="994639623231914074")return;

  let say_hi:boolean = false;

  const t_content = m.content.split(' ');
  const t_content_normal:any = [];

  for(let i=0;i<t_content.length;i++){
    const a = t_content[i].toLowerCase().replace(/[^a-zA-Z]+/g, "");
    t_content_normal.push(a);
    if (_clefs_hello.indexOf(a)>-1){
      say_hi = true;
    }
  }


  if (say_hi)
    m.channel.send('Salut :) Ça va ?');

});

client.login('OTk0NTY3NTA4MDU1MDQ4MjUy.G7LhZS.PhfcaDVxtz6Dm1cUD-dvVQzpNqsrLA4FYVQORU');







































// const Discord = require('discord.js');
// console.log(Discord.FLAGS)
// const client = new Discord.Client({intents: [
//   Discord.Intents.FLAGS.GUILDS,
//   Discord.Intents.FLAGS.GUILD_MESSAGES,
//   Discord.Intents.FLAGS.DIRECT_MESSAGES,
// ]});

// client.on('ready', ()=>{
//   console.log('Hello world!')
// });

// client.on('messageCreate', m=>{
//   if (m.author.bot)return;

//   console.log(m);
//   if (m.channelId=="994639623231914074"){
//     m.channel.send('hi :)')
//   }
// });

// function helloworldtest(){
//   let ihave = "blabla";
//   let boom = "";
// }

// client.login('OTk0NTY3NTA4MDU1MDQ4MjUy.G7LhZS.PhfcaDVxtz6Dm1cUD-dvVQzpNqsrLA4FYVQORU');

