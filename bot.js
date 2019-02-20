const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "+";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- تم من قبل: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});



 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {


 message.author.sendMessage(`**
 

 ╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱
♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ 
♕اوامر الادارة♕
❖ +bc <messages> \ لأرسال رسالة جماعية للسيرفر
❖ +kick <user> <reason> \ لأعطاء كيك لشي عضو
❖ +ban <user> <reason> \ لأعطاء بان لشي عضو
❖ +mute <user> <reason> \ لأعطاء ميوت لشي عضو
❖ +unmute <user> \ لفك الميوت من شي عضو
❖ +clear <number>\ لمسح رسائل بعدد
❖ +hchannel \ لأخفاء الروم ملاحظة الروم الي تبي تخفيه لازم تستخد الامر جواته
❖ +schannel \ لأظهار الروم ملاحظة الروم الي تبيه تعمله اظهار لازم تستخد الامر جواته
❖ +move <user> \ لأسحاب اي شخص لروم الي انت فيه

♕اوامر العامة♕
❖ +server \ لمعرفة معلومات السيرفر
❖ +id <user> \ لمعرفة معلومات عن عضو او معلوماتك
❖ +avatar <user> \ يبعتلك صورة البروفايل
❖ +savatar \ يبعتلك صورة السيرفر
❖ +bot \ معلومات البوت
❖ +help \ لأرسال رسالة المساعدة
❖ +members \ لمعرفة عدد الاعضاء الي موجودين بسيرفر
**`);

message.channel.send('**تم الارسال في الخاص**');

    }
});



client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return;
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر روابط مواقع او سيرفرات ديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`تم اعطأك ميوت بسبب نشر!!!`**');

              
              
              
              }
})

client.on('message', async message => {
            if(message.content.includes('discordapp.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return;
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر روابط مواقع او سيرفرات ديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`تم اعطأك ميوت بسبب نشر!!!`**');

              
              
              
              }
})




 

client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='+members')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle(':tulip:| معلومات الاعضاء')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(` Bot By IxRawan__`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});


client.on('message', msg => {
  if (msg.author.bot) return message.channel.send('مفكر اني غبي وباخد الامر من بوت ؟؟');
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});






client.on('message', function(message) {
    const myID = "476382115362111507";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الاسم الي تريده');
        client.user.setUsername(args);
        message.channel.send('**تم تغير الاسم بنجاح**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "s")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الشي الي تبيه حالة البوت.');
        client.user.setGame(args , 'https://twitch.tv/IxRawan_');
        message.channel.send('**تم بوتك صار ستريمنق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "p")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الشي الي تبيه حالة البوت.');
        client.user.setGame(args);
        message.channel.send('**تم بوتك صار بلاينق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "l")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الشي الي تبيه حالة البوت.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**تم بوت صار ليستنق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "w")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الشي الي تبيه حالة البوت.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**تم بوتك صار واتشنق**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('حط رابط الصورة الي تريد تخليها  صورة البوت');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "+";
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Dont Have Permission `MANAGE_MESSAGES` **").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**I Dont Have Permission `MANAGE_MESSAGES` **").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
		  var mentionn = message.mentions.members.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** You Need to Create a Role With Name'Muted' **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('** Please First Mention a Member**').then(msg => {msg.delete(5000)});
          if(mentionn.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I Cant Mute This User They Have Permission `MANAGE_MESSAGES`**');
		  let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  By **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  `)
          .setFooter(`في سيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**You Dont Have Permission `MANAGE_MESSAGES`**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**I Dont Have Permission `MANAGE_MESSAGES` **:x:").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**Please Firt Mention a Member**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**تم الفلك الميوت عن هاذة الشخص من قبل**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**تم الغاء الميوت بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });



client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith ('+server')) {
      if(!msg.channel.guild) return;        
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


  client.on('message', message =>{
	  if(!message.channel.guild) return;
    let args = message.content.split(' ');
    let prefix = '+'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on("message", message => {
	if(!message.channel.guild) return;
  if(message.content === "+id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| Username :", `${message.author.username}#${message.author.discriminator}`, true)
          .addField("🆔| ID :", `${message.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(message.author.username , message.author.avatarURL)
          .setThumbnail(`${message.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${message.author.avatarURL}`)
          .addField('📛| Status :', `${message.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| Playing :', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
          .addField('🏅| Roles : ', `${message.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| Created at :', `${message.createdAt}`,true)
      message.channel.send({embed: embed})
  }
});


  client.on('message', message => {
	var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**`BAN_MEMBERS`لا تمتلك صلاحية **");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**`BAN_MEMBERS`لا امتك الصلاحية **");
  var user = message.mentions.members.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص**");
  if(!reason) return message.reply ("**الرجاء كتابة السبب**");
  if(user.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: | **لا يمكنني اطرد احد الاعضاء من الادارة**');

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**الاسم:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
	var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
			   
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**` KICK_MEMBERS ` لا تمتلك صلاحية **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**` KICK_MEMBERS ` لا املك صلاحية **");
  var mention = message.mentions.members.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("** منشن الشخص **");
  if(!reason) return message.reply ("**الرجاء كتابة السبب**");
  if(mention.hasPermission("KICK_MEMBERS")) return message.channel.send(':x: | **لا يمكنني طرد احد اشخاص من الادارة**');

  message.guild.member(mention).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**الاسم:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on("message", message => {
 if (message.content === "+inv") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('ZexShop System ')
      .addField('Invite Link:', `https://discordapp.com/api/oauth2/authorize?client_id=547848700471410708&permissions=8&scope=bot`)
  message.author.send({embed});

 }
});





client.on('message', message => {
	var prefix = "+";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('message', message => {
    var prefix = "+";
          if(message.content === prefix + "hchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('لا تمتلك صلاحية  `ADMINISTRATOR` :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('تم اخفاء الروم :white_check_mark:  ')
     }
    });
    
    
    client.on('message', message => {
    var prefix = "+";
          if(message.content === prefix + "schannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('لا  تمتلك صلاحية `ADMINISTRATOR` :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('تم اظهار الروم ')
     }
    });




client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("+ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبه اسمه Support Team`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`ماتقدر تحذف الروم  الا ازا  كنت جواته وكتبت الامر`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`+confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '+confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    
                    .then((collected) => {
                        message.channel.delete();
                    })   
                    .catch(() => {
                        m.edit('التيكت انحذف خلص الوقت!!!').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});











client.login("NTQ3ODQ4NzAwNDcxNDEwNzA4.D08vfw.gbDAezc4Ot_1Pw9lHKuoMVVj_3c");
