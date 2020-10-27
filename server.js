
const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith("b!" + str);
}

client.on('ready', () => {
  console.log(`toi listo! ówó como ${client.user.tag}!`);
});

client.on('message', msg => { 
  if (commandIs("ping", msg)) {
    msg.channel.send ('pong');
  }
  
  if (commandIs("uwu", msg)) {
     msg.channel.send ('ówó');
  }

  if (commandIs("playlist", msg)) {
    msg.reply ('https://open.spotify.com/playlist/7rVPJaF5MtgUbIlNQKjza2?si=_dWlIE6FQbiHQC2aAYYuLA');
  }

  if(commandIs("kiss", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      msg.channel.send(msg.author.tag + " le ha dado un besito a: " + mention.tag);
      msg.channel.send("https://tenor.com/view/kiss-kawaii-eat-japan-anime-gif-12922778");
    } else {
      msg.channel.send("falta pingear a un usuario!");
    }
    
  }

  if(commandIs("patpat", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      msg.channel.send(msg.author.tag + " le ha hecho patpat a: " +  mention.tag);
      msg.channel.send("https://tenor.com/view/good-boy-pat-on-head-stitch-gif-14742401");
    } else{
      msg.channel.send("falta pinguear a un usuario!");
    }
  
  }

  if(commandIs("cry", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      msg.channel.send (msg.author.tag + " está triste:(. ¡Ven a darle amorcito! "  +  mention.tag);
      msg.channel.send ("https://tenor.com/view/jewelpet-ladyjewelpet-ruby-sad-cry-gif-18797394");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
   
  }

  if(commandIs("angry", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      msg.channel.send (msg.author.tag + " está amurrao/amurrá. D: " + mention.tag );
      msg.channel.send ("https://tenor.com/view/bear-love-angry-upset-gif-12859906");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  }

  if(commandIs("mimir", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      msg.channel.send (msg.author.tag + " se va a mimir, no molestar xfi ówó " + mention.tag);
      msg.channel.send ("https://tenor.com/view/duck-sleeping-asleep-tired-nodding-off-gif-15743453");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  }

  if(commandIs("hug", msg)){
    let mention = msg.mentions.users.first();
    if (mention){
      msg.channel.send (msg.author.tag + " le ha dado un abrazo a: "+ mention.tag);
      msg.channel.send ("https://tenor.com/view/hugs-hug-ghost-hug-gif-4451998");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  } 

  if(commandIs("shy", msg)){
    let mention = msg.mentions.users.first();
    if (mention){
      msg.channel.send (msg.author.tag + " está shy uwu " + mention.tag);
      msg.channel.send ("https://tenor.com/view/tonton-tonton-sticker-shy-blushing-oh-no-gif-13636106");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  }
 
  if(commandIs("jueves", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      msg.channel.send (msg.author.tag + " le ha deseado un feliz jueves a: " + mention.tag);
      msg.channel.send ("https://tenor.com/view/feliz-jueves-asuka-feliz-jueves-asuka-jueves-gif-18184379");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  }

});

client.login('NzY0MjM3Mzc3NDU0NDczMzM2.X4DVhQ.lKHGiUZyDjOQ-nawZ0hV4_vpUUo');