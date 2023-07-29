const  { Api } = require ("@iwonz/myarena-ru-nodejs-api");
const { server, telegram } = require('./config.json')
const { user } = require('./users.json')
const api = new Api(server.api_key)
const TelegramApi = require('node-telegram-bot-api')
const bot = new TelegramApi(telegram.token, { polling: true })



      bot.on('message', async msg => { 
        if(msg.from.id != user) return bot.sendMessage(msg.chat.id, 'Доступ запрещен')
        //console.log(msg)

        if(msg.text === "/server_start"){
            api.start().then((response) => 
            bot.sendMessage(msg.chat.id, `Ответ: ${JSON.stringify(response.message)}`)
            );
        }
        if(msg.text === "/server_stop"){
            api.stop().then((response) => 
            bot.sendMessage(msg.chat.id, `Ответ: ${JSON.stringify(response.message)}`)
            );
        }
        if(msg.text === "/server_restart"){
            api.restart().then((response) => 
            bot.sendMessage(msg.chat.id, `Ответ: ${JSON.stringify(response.message)}`)
            );
        }
        if(msg.text === "/server_status"){
            api.getStatus().then((response) => 
            bot.sendMessage(msg.chat.id, 
            `🫡 Status Server 🫣
            \n\n🫥IP🫥: ${JSON.stringify(response.data.b.ip)}\n🙀Status🙀: ${JSON.stringify(response.data.b.status)}\n🤖Players🤖: ${JSON.stringify(response.data.s.players)}\n🤑Players Max🤑: ${JSON.stringify(response.data.s.playersmax)}\n💀Online (0 - server off, 2 - server online)💀: ${JSON.stringify(response.online)}\n\n🥶Server Settings🥶:\n🫶Server_id🫶: ${JSON.stringify(response.server_id)}\n👐Server_name👐: ${JSON.stringify(response.server_name)}\n🎃Server_address🎃: ${JSON.stringify(response.server_address)}\n💪Server_maxslots💪: ${JSON.stringify(response.server_maxslots)}\n🤙Server_location🤙: ${JSON.stringify(response.server_location)}\n🤡Server_type🤡: ${JSON.stringify(response.server_type)}\n🥺Server_daystoblock🥺: ${JSON.stringify(response.server_daystoblock)}`
            
            ));
        }
      })