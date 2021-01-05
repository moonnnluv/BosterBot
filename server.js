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
    .setDescription('b!kiss\n b!patpat\n b!cry\n b!angry\n b!mimir\n b!despertar\n b!descansar\n b!hug\n b!shy\n b!jueves\n b!troleo\n b!simp\n b!funar\n b!kill\n b!death\n b!estudiar\n b!suicide\n');
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
      .setImage('https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif?itemid=16408575');
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
      .setImage('https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906');
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está amurrao/amurrá. D: " + mention.tag );
      //msg.channel.send ("https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está amurrao/amurrá D:")
      .setImage('https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906');
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

  if(commandIs("despertar", msg)){
    let mention = msg.mentions.users.first()
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está despertando a: " + mention.tag)
      .setImage("https://media1.tenor.com/images/4fbc786d007d0c3d7e2f16d351bc390d/tenor.gif?itemid=17395163");
      msg.channel.send(exampleEmbed);
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " acaba de despertar")
      .setImage("https://media1.tenor.com/images/9f4acec042c45f97b38e129cfdea6ac5/tenor.gif?itemid=12183777");
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("hug", msg)){
    let mention = msg.mentions.users.first();
    if (mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha dado un abrazo a: "+ mention.tag)
      .setImage('https://media1.tenor.com/images/ce9dc4b7e715cea12604f8dbdb49141b/tenor.gif?itemid=4451998');
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
      .setImage('https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106');
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está shy uwu " + mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106");
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está shy uwu")
      .setImage('https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106');
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

  if(commandIs("troleo", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " ha troleado a: " + mention.tag + " 😈")
      .setImage('https://media1.tenor.com/images/6dde10af74e38242996efdf2db326d4a/tenor.gif');
      msg.channel.send(exampleEmbed);
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está en modo troleo 😈")
      .setImage('https://media1.tenor.com/images/6dde10af74e38242996efdf2db326d4a/tenor.gif');
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("simp", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " es simp de: " + mention.tag)
      .setImage("https://media1.tenor.com/images/7546b4d8dd8bf8953edc0abb0192f8ca/tenor.gif?itemid=18209528");
      msg.channel.send(exampleEmbed);
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " es simp 😔")
      .setImage("https://media1.tenor.com/images/77c2ab01e5c0b7fc1cce8e789dfff965/tenor.gif?itemid=18136223");
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("estudiar", msg)){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle(msg.author.tag + " está estudiando, no molestar uwu")
    .setImage("https://media1.tenor.com/images/71a38d2d8cd692a63fbde70f899b3afc/tenor.gif?itemid=15313949");
    msg.channel.send(exampleEmbed);
  }

  if(commandIs("descansar", msg)){
    let mention = msg.mentions.users.first();
    if (mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está descansando con: " + mention.tag)
      .setImage("https://cdn.discordapp.com/attachments/764236045213499482/785989698002354176/d240ddbcf97be8749949be6360a02bd9.gif");
      msg.channel.send(exampleEmbed);
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está descansando uwu")
      .setImage("https://cdn.discordapp.com/attachments/764236045213499482/785989698002354176/d240ddbcf97be8749949be6360a02bd9.gif");
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("dance", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está bailando con: " + mention.tag + " owo")
      .setImage("https://media1.tenor.com/images/7627a7009dcd44f40bcf3c168f0c6ad6/tenor.gif?itemid=16108170");
      msg.channel.send(exampleEmbed);
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está bailando uwu")
      .setImage("https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif?itemid=9765182");
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("death", msg)){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle(msg.author.tag + " ha murisido 😔 ")
    .setImage("https://media1.tenor.com/images/79f1a0dd1bfc67b44c2d7ce4404c2a66/tenor.gif?itemid=5417340");
    msg.channel.send(exampleEmbed);
  }

  if(commandIs("kill", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " ha matado a: " + mention.tag)
      .setImage("https://media1.tenor.com/images/f1e22aead0a7da83a6949984208d527f/tenor.gif?itemid=18770900");
      msg.channel.send(exampleEmbed);
    } else {
      msg.channel.send("falta pinguear a un usuario!")
    }
  }

  if(commandIs("funar", msg)){
    let mention = msg.mentions.users.first();
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " a funado a: " + mention.tag)
      .setImage("https://media1.tenor.com/images/6b70c48240988272471ed917869a1206/tenor.gif?itemid=16885690");
      msg.channel.send(exampleEmbed);
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " ha sido funado/a 😔")
      .setImage("https://media1.tenor.com/images/d5c2d745cf45926be2742e1e3c302394/tenor.gif?itemid=18723375");
      msg.channel.send(exampleEmbed);
    }
  }

 

});

client.login('NzY0MjM3Mzc3NDU0NDczMzM2.X4DVhQ.lKHGiUZyDjOQ-nawZ0hV4_vpUUo');
