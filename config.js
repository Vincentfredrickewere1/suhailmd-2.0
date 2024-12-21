in const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_46_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDc0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaEhtVmFHaVBXL0FGQ24zVXgxVDN2eDVuMTY5aDBNVVVKYWFjTnZEamtBYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHhqN2d0V0VRNUtkTUhQX05aMnN0Z1wiLFxuICBcInBob25lSWRcIjogXCJkNTZlMzY2YS01YmZhLTQ0ZTEtODJlNi1mNzYyNmY2ZTE5ZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyNTQsXG4gICAgICA0OSxcbiAgICAgIDgxLFxuICAgICAgMTcxLFxuICAgICAgNjUsXG4gICAgICA1MyxcbiAgICAgIDkyLFxuICAgICAgMTUxLFxuICAgICAgMTYzLFxuICAgICAgMTU1LFxuICAgICAgMjIxLFxuICAgICAgMjQyLFxuICAgICAgMTEzLFxuICAgICAgMjAxLFxuICAgICAgMjEzLFxuICAgICAgMTExLFxuICAgICAgMjAyLFxuICAgICAgMTY5LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTU3LFxuICAgICAgMTg1LFxuICAgICAgMTIsXG4gICAgICAxOSxcbiAgICAgIDEwOCxcbiAgICAgIDMxLFxuICAgICAgNzMsXG4gICAgICAxMDAsXG4gICAgICAxOTUsXG4gICAgICA4MSxcbiAgICAgIDE1MSxcbiAgICAgIDQ4LFxuICAgICAgMjQ4LFxuICAgICAgMTAsXG4gICAgICAyMzksXG4gICAgICAxNzMsXG4gICAgICAyMDgsXG4gICAgICAxMjYsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkw0WllWTVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjQ2ODkxMTQ6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCSUcgRElDRVwiLFxuICAgIFwibGlkXCI6IFwiMTAwNzQ3MjMyNDY1MTM1OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svSW9ja0JFUGlabkxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnRjNmJDdDhmdjNSUnAvcEFFNlUrOWF6SzVFM2loQWY4NnF0S2VrV0Zrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjTHZpK0JxcmREUmpWUDRSRnQwMTluRkdzT3o2b2VFWHFNSDdMS0RtRUMxWjRJbHUyQjdMZmRiTk5STzhTbU5WU2lVVHJoak9hY1NxbURNNnZlOE1EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuR2hRS3Z2SWh6NmlMMlZwc2JxZ3FuUkpDc1dJZFZURWliaTVyZzRTb05RbTFjbnhhWlpjV042TEduMWs5dVVVMTFuaTQ0R1RpRm5aTVZmd3p1MkxqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0Njg5MTE0OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODA2NzgwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
