const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith("b!" + str);
}

function random_item(items){
  return items[Math.floor(Math.random()*items.length)];
}

client.on('ready', () => {
  console.log(`toi listo! ówó como ${client.user.tag}!`);
});

client.on('message', msg => { 
  
  if (commandIs("help", msg)){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle("Aquí están los comandos del BosterBot ✨" )
    .setDescription('b!kiss [@usuario] -> Con este comando puedes darle un besito a otro usuario uwu\n b!patpat [@usuario]  -> Con este comando puedes hacerle patpat a otro usuario\n b!hug [@usuario]  -> Con este comando puedes abrazar a otro usuario uwu\n b!kill [@usuario] -> Con este comando puedes matar a otro usuario D:\n b!cry {@usuario} -> Con este comando puedes llorar, o pedirle a otro usuario que te anime :D\n b!angry {@usuario} -> Con este comando puedes demostrar cuando estés enojado, y a la vez, enojarte con otro usuario D:\n b!mimir {@usuario} -> Con este comando puedes ir a mimir, solo o acompañado :D\n b!despertar {@usuario} -> Con este comando puedes despertar y despertar a otro usuario uwu\nb!descansar {@usuario} -> Con este comando puedes descansar, solo o acompañado :D\n b!shy  {@usuario} -> Con este comando puedes demostrar cuando estás shy, y a su vez, responsabilizar a otro usuario de aquello (∩˃o˂∩)♡\n b!jueves {@usuario} -> Con este comando puedes desearle un feliz jueves a otro usuario, ¡o a todos!\n b!troleo {@usuario} -> Con este comando puedes trollear a otro usuario, ¡o a todos!\n b!simp {@usuario} -> Con este comando puedes demostrar lo simp que eres. y especificar a quien simpeas 😳\n b!funar {@usuario}-> Con este comando puedes funar o demostrar que te funaron 😔\n b!death -> Con este comando puedes simplemente murisir:(\n b!estudiar -> Con este comando puedes enseñarle a los demás que estás estudiando, evitando charlas que te puedan distraer D:\n b!work -> Con este comando puedes enseñarle a los demás que estás trabajando, evitando charlas que te puedan distraer D:\n \n Los elementos entre {} son opcionales, mientras que los que tienen [] son obligatorios. Los comandos que no poseen ninguno de los caracteres antes definidos son libres de utilizar sin mencionar a ningún usuario.\n');
    msg.channel.send(exampleEmbed);
  }

  if(commandIs("kiss", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media1.tenor.com/images/933632688c082ad6b67506c392e7648c/tenor.gif', 'https://media.tenor.com/images/6702ca08b5375a74b6b9805382021f73/tenor.gif', 'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif', 'https://media.tenor.com/images/54e50fcee0f5b4549acd32b26e0843f6/tenor.gif']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
    	.setColor('#d08442')
	    .setTitle(msg.author.tag + " le ha dado un besito a: " + mention.tag)
	    .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " le ha dado un besito a: " + mention.tag);
      //msg.channel.send("https://media1.tenor.com/images/933632688c082ad6b67506c392e7648c/tenor.gif");
    } else {
      msg.channel.send("falta pingear a un usuario!");
    }
    
  }

  if(commandIs("patpat", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media.tenor.com/images/374a3ed006e9dd52a874e40a459a9cae/tenor.gif', 'https://media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif', 'https://media.tenor.com/images/0d9d44e6a9577eb28c47b22f5acd7d69/tenor.gif', 'https://media.tenor.com/images/09a4b724e986b12c391cf791a9a9db92/tenor.gif']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha hecho patpat a: " + mention.tag)
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " le ha hecho patpat a: " +  mention.tag);
      //msg.channel.send("https://media1.tenor.com/images/6602906e1f8ee177f478e7367dacffad/tenor.gif?itemid=14742401");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  
  }

  if(commandIs("cry", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media.tenor.com/images/c8f6d1972f6051cf40fec17da7b18a53/tenor.gif', 'https://media.tenor.com/images/14faea11230861e5f61bb4d90ac9e61d/tenor.gif', 'https://media.tenor.com/images/eda88aaad47aaab5d861c19a03d73e27/tenor.gif', 'https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif?itemid=16408575']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está triste, "  +  mention.tag + " ¡Ven a darle amorcito! ")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está triste:(. ¡Ven a darle amorcito! "  +  mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif?itemid=16408575");
    } else {
      let link = random_item(['https://media.tenor.com/images/c8f6d1972f6051cf40fec17da7b18a53/tenor.gif', 'https://media.tenor.com/images/14faea11230861e5f61bb4d90ac9e61d/tenor.gif', 'https://media.tenor.com/images/eda88aaad47aaab5d861c19a03d73e27/tenor.gif', 'https://media1.tenor.com/images/6088fab756706a4bf141e28fe330a2be/tenor.gif?itemid=16408575']);
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está triste. ¡Ven a darle amorcito!")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send("falta pinguear a un usuario!");
    }
   
  }

  if(commandIs("angry", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media1.tenor.com/images/c409b7031d3768c24db8bc0cbb1a2cb5/tenor.gif?itemid=5516967', 'https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612', 'https://media.tenor.com/images/4d85ff515cd264eefc0866555a1e9763/tenor.gif', 'https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está amurrao/amurrá por culpa de: "  +  mention.tag + " D:")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está amurrao/amurrá. D: " + mention.tag );
      //msg.channel.send ("https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906");
    } else {
      let link = random_item(['https://media.tenor.com/images/3e0c7be0cb8e24c389f5e1f78a8f69a5/tenor.gif', 'https://media.tenor.com/images/b38ba1fbbc512826c1264b4a8687d98f/tenor.gif', 'https://media.tenor.com/images/3d653723909445a0f55116d2281406ae/tenor.gif', 'https://media1.tenor.com/images/80ebe3a6e21184112062b8d7afb4aeac/tenor.gif?itemid=12859906']);
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está amurrao/amurrá D:")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send("falta pinguear a un usuario!");
    }
  }

  if(commandIs("mimir", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media.tenor.com/images/1fe47ce1ea29dfcaba48488abafaa471/tenor.gif', 'https://media.tenor.com/images/42f8ff119a825cb2a5ef9b4902fddd50/tenor.gif', 'https://media.tenor.com/images/8ef91f6b2dca2c3c8bb581357083ad47/tenor.gif', 'https://media.tenor.com/images/96353d89d27896aa4bf2aa3688632f47/tenor.gif']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " va a mimir con: " + mention.tag + " ¿o no? 😳 ")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " se va a mimir, no molestar xfi ówó " + mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif");
    } else {
      let link = random_item(['https://media.tenor.com/images/d35d9c3e50ef28255a364ca08fa7e66c/tenor.gif', 'https://media.tenor.com/images/2d198e4454e891404cca6651a582d49e/tenor.gif', 'https://media.tenor.com/images/3ca853d117eb53dada8252099010b57d/tenor.gif', 'https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif']);
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " se va a mimir, no molestar xfi ówó ")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send(msg.author.tag + " se va a mimir, no molestar xfi ówó ");
      //msg.channel.send ("https://media1.tenor.com/images/c0722c1c9a9d7ad0ce382186e6c27bdc/tenor.gif");
    }
  }

  if(commandIs("despertar", msg)){
    let mention = msg.mentions.users.first()
    let link = random_item(['https://media.tenor.com/images/1e70d4ccc02335ee194e55aaa0dc23b4/tenor.gif', 'https://media.tenor.com/images/de832aad00bad55429428587baebfcd5/tenor.gif', 'https://media.tenor.com/images/b25dda3c94917c45b19ce2f9dd9504d7/tenor.gif', 'https://media.tenor.com/images/b7fe1a22dfc5efca4e6f8a072736f81a/tenor.gif']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está despertando a: " + mention.tag)
      .setImage(link);
      msg.channel.send(exampleEmbed);
    } else {
      let link = random_item(['https://media.tenor.com/images/c1bb3cbc2f0bb2540ef4edd111a6c18e/tenor.gif', 'https://media.tenor.com/images/4a4e05d0d78a048c3cd109d1a65c848f/tenor.gif', 'https://media.tenor.com/images/4e62159060752c6c0c3aa01de9e479df/tenor.gif', 'https://media1.tenor.com/images/9f4acec042c45f97b38e129cfdea6ac5/tenor.gif?itemid=12183777']);
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " acaba de despertar")
      .setImage(link);
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("hug", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media.tenor.com/images/f1bf91d3870ed8b26367afd1b91ada9c/tenor.gif', 'https://media.tenor.com/images/d7f6849b07da0532c7dc3aab538d42d4/tenor.gif', 'https://media.tenor.com/images/8f44c083c55620c02f59c6bea378dca4/tenor.gif', 'https://media1.tenor.com/images/ce9dc4b7e715cea12604f8dbdb49141b/tenor.gif?itemid=4451998']);
    if (mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " le ha dado un abrazo a: "+ mention.tag)
      .setImage(link);
      msg.channel.send(exampleEmbed)
      //msg.channel.send (msg.author.tag + " le ha dado un abrazo a: "+ mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/ce9dc4b7e715cea12604f8dbdb49141b/tenor.gif?itemid=4451998");
    } else {
      msg.channel.send("falta pinguear a un usuario!");
    }
  } 

  if(commandIs("shy", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media.tenor.com/images/9813786df00ab5af42a65e257ed3b70d/tenor.gif', 'https://media.tenor.com/images/bc4b6a04a50354435171cd7bd6146786/tenor.gif', 'https://media.tenor.com/images/df3aff0bbe715befb4954b40da7f96b1/tenor.gif', 'https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106']);
    if (mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está shy por: " +  mention.tag + " uwu")
      .setImage(link);
      msg.channel.send(exampleEmbed);
      //msg.channel.send (msg.author.tag + " está shy uwu " + mention.tag);
      //msg.channel.send ("https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106");
    } else {
      let link = random_item(['https://media.tenor.com/images/9813786df00ab5af42a65e257ed3b70d/tenor.gif', 'https://media.tenor.com/images/bc4b6a04a50354435171cd7bd6146786/tenor.gif', 'https://media.tenor.com/images/df3aff0bbe715befb4954b40da7f96b1/tenor.gif', 'https://media1.tenor.com/images/8ab2d0dfe6b37b17a617fa2b26bf29f7/tenor.gif?itemid=13636106']);
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
    let link = random_item(['https://media.tenor.com/images/b62d19c4c0af1e16a5247b12710c8cf8/tenor.gif', 'https://media1.tenor.com/images/6dde10af74e38242996efdf2db326d4a/tenor.gif']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " ha troleado a: " + mention.tag + " 😈")
      .setImage(link);
      msg.channel.send(exampleEmbed);
    } else {
      let link = random_item(['https://media.tenor.com/images/b62d19c4c0af1e16a5247b12710c8cf8/tenor.gif', 'https://media1.tenor.com/images/6dde10af74e38242996efdf2db326d4a/tenor.gif']);
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está en modo troleo 😈")
      .setImage(link);
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
    let link = random_item(['https://media.tenor.com/images/6da81cf9b27acd635982d4da7c051a21/tenor.gif', 'https://media.tenor.com/images/d6e50df3c1ccced5bb337d7f5c3aa2af/tenor.gif', 'https://media.tenor.com/images/32f64ea4787cb0e85509eb7a9e3f0611/tenor.gif', 'https://media1.tenor.com/images/71a38d2d8cd692a63fbde70f899b3afc/tenor.gif?itemid=15313949']);
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle(msg.author.tag + " está estudiando, no molestar uwu")
    .setImage(link);
    msg.channel.send(exampleEmbed);
  }

  if(commandIs("work", msg)){
    let link = random_item(['https://media.tenor.com/images/ee0d8543b24cdb4b2bdacee34990b398/tenor.gif', 'https://media.tenor.com/images/860a42a32c4f7f4e36df3470088b7470/tenor.gif', 'https://media.tenor.com/images/026949e7312010999e6f1e0d057cdc7a/tenor.gif', 'https://media1.tenor.com/images/e77a1e25a95370f4f625c115f1622378/tenor.gif?itemid=12698625']);
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle(msg.author.tag + " está trabajando, no molestar uwu")
    .setImage(link);
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
    let link = random_item(['https://media.tenor.com/images/116d4bf39aabeb3663f89256773b4b4c/tenor.gif', 'https://media.tenor.com/images/4e1c0924e763dafba58abba6bf7bc741/tenor.gif', 'https://media.tenor.com/images/d4f36aac64dc38384cb0e66bc91f32fc/tenor.gif', 'https://media1.tenor.com/images/7627a7009dcd44f40bcf3c168f0c6ad6/tenor.gif?itemid=16108170']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está bailando con: " + mention.tag + " owo")
      .setImage(link);
      msg.channel.send(exampleEmbed);
    } else {
      let link = random_item(['https://media.tenor.com/images/b20fe6adc2b0180e13ab8bac0cab97b6/tenor.gif', 'https://media.tenor.com/images/a104d35c170f3578b956f2fcb1fbe670/tenor.gif', 'https://media.tenor.com/images/c37e74813c754814738bb102507898d9/tenor.gif', 'https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif?itemid=9765182']);
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " está bailando uwu")
      .setImage(link);
      msg.channel.send(exampleEmbed);
    }
  }

  if(commandIs("death", msg)){
    let link = random_item(['https://media.tenor.com/images/31c5a212899c9d633f575bacf738dc15/tenor.gif', 'https://media.tenor.com/images/5ebf4091ad219261cb8f8227917fcedc/tenor.gif', 'https://media.tenor.com/images/f152347207aee6d91bc9d22672c545b8/tenor.gif', 'https://media.tenor.com/images/d86d2e9f164f12136d10d54eac727c0b/tenor.gif']);
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d08442')
    .setTitle(msg.author.tag + " ha murisido 😔 ")
    .setImage(link);
    msg.channel.send(exampleEmbed);
  }

  if(commandIs("kill", msg)){
    let mention = msg.mentions.users.first();
    let link = random_item(['https://media.tenor.com/images/6e68b8402b1de847a8adc99ba35e745c/tenor.gif', 'https://media1.tenor.com/images/f1e22aead0a7da83a6949984208d527f/tenor.gif?itemid=18770900', 'https://media.tenor.com/images/36b1fe2b4515135880da9c1ec7a6d182/tenor.gif', 'https://media.tenor.com/images/a5a49125c87a23d61bda212c1a455dda/tenor.gif']);
    if(mention){
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#d08442')
      .setTitle(msg.author.tag + " ha matado a: " + mention.tag)
      .setImage(link);
      msg.channel.send(exampleEmbed);
    } else {
      msg.channel.send("falta pinguear a un usuario!")
    }
  }

  if(commandIs("funar", msg)){
    let mention = msg.mentions.users.first()
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
