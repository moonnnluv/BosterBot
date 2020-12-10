
const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith("b!" + str);
}

client.on('ready', () => {
  console.log(`toi listo! ówó como ${client.user.tag}!`);
});

client.on('message', msg => { 
  
  if (commandIs("help", msg)){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle("Aquí están los comandos del BosterBot ✨" )
    .setDescription('b!kiss b!patpat b!cry b!angry b!mimir b!hug b!shy b!jueves')
    msg.channel.send(exampleEmbed);
  }

  if(commandIs("kiss", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
    	.setColor('#d08442')
	    .setTitle(msg.author.tag + " le ha dado un besito a: " + mention.tag)
	    .setImage('https://media1.tenor.com/images/933632688c082ad6b67506c392e7648c/tenor.gif');
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " le ha dado un besito a: " + mention.tag);
      //msg.channel.send("https://media1.tenor.com/images/933632688c082ad6b67506c392e7648c/tenor.gif");
    } else {
      msg.channel.send("falta pingear a un usuario!");
    }
    
  }

  if(commandIs("patpat", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha hecho patpat a: " + mention.tag)
      .setImage('https://media1.tenor.com/images/6602906e1f8ee177f478e7367dacffad/tenor.gif?itemid=14742401');
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " le ha hecho patpat a: " +  mention.tag);
      //msg.channel.send("https://media1.tenor.com/images/6602906e1f8ee177f478e7367dacffad/tenor.gif?itemid=14742401");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  
  }

  if(commandIs("cry", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está triste, "  +  mention.tag + " ¡Ven a darle amorcito! ")
      .setImage('https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif?itemid=16408575')
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está triste:(. ¡Ven a darle amorcito! "  +  mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif?itemid=16408575");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está triste. ¡Ven a darle amorcito!")
      .setImage('https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif');
      msg.channel.send(exampleEmbed);
      //msg.channel.send("falta pinguear a un usuario!");
    }
   
  }

  if(commandIs("angry", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está amurrao/amurrá por culpa de: "  +  mention.tag + " D:")
      .setImage('https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906')
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está amurrao/amurrá. D: " + mention.tag );
      //msg.channel.send ("https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está amurrao/amurrá D:")
      .setImage('https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906')
      msg.channel.send(exampleEmbed);
      //msg.channel.send("falta pinguear a un usuario!");
    }
  }

  if(commandIs("mimir", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " va a mimir con: " + mention.tag + " ¿o no? 😳 ")
      .setImage('https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif');
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " se va a mimir, no molestar xfi ówó " + mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " se va a mimir, no molestar xfi ówó ")
      .setImage('https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif');
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " se va a mimir, no molestar xfi ówó ");
      //msg.channel.send ("https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif");
    }
  }

  if(commandIs("hug", msg)){
    let mention = msg.mentions.users.first();
    if (mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha dado un abrazo a: "+ mention.tag)
      .setImage('https://media1.tenor.com/images/ce9dc4b7e715cea12604f8dbdb49141b/tenor.gif?itemid=4451998')
      msg.channel.send(exampleEmbed)
      //msg.channel.send (msg.author.tag + " le ha dado un abrazo a: "+ mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/ce9dc4b7e715cea12604f8dbdb49141b/tenor.gif?itemid=4451998");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  } 

  if(commandIs("shy", msg)){
    let mention = msg.mentions.users.first();
    if (mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está shy por: " +  mention.tag + " uwu")
      .setImage('https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106')
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está shy uwu " + mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está shy uwu")
      .setImage('https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106') 
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " está shy uwu")
    }
  }
 
  if(commandIs("jueves", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha deseado un feliz jueves a: " + mention.tag)
      .setImage('https://media1.tenor.com/images/28fc963091e05e1deb32e096c28f040f/tenor.gif?itemid=18184379');
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " le ha deseado un feliz jueves a: " + mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/28fc963091e05e1deb32e096c28f040f/tenor.gif?itemid=18184379");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha deseado un feliz jueves a todos <3")
      .setImage('https://media1.tenor.com/images/28fc963091e05e1deb32e096c28f040f/tenor.gif?itemid=18184379');
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " le ha deseado un feliz jueves a todos <3");
      //msg.channel.send("https://media1.tenor.com/images/28fc963091e05e1deb32e096c28f040f/tenor.gif?itemid=18184379");
    }
  }

});

client.login('NzY0MjM3Mzc3NDU0NDczMzM2.X4DVhQ.lKHGiUZyDjOQ-nawZ0hV4_vpUUo');
