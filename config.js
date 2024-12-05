const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_04_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTF3RDUxRHhlNDA1aHZhaDhUSitncEFJR0pkNTNKMFNVNVM5U29IZzB5VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUTRrV2tta2NUTVdZYVZBSXdRN2J6UVwiLFxuICBcInBob25lSWRcIjogXCI5NjQ5M2RkMC05MDczLTQ0NTUtOTU0My1kMTBmYTE4NTcwOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTExLFxuICAgICAgMTQ3LFxuICAgICAgOTUsXG4gICAgICAyMDUsXG4gICAgICAxNzUsXG4gICAgICAxNzksXG4gICAgICA5NSxcbiAgICAgIDIxMyxcbiAgICAgIDIxNCxcbiAgICAgIDI0OCxcbiAgICAgIDgxLFxuICAgICAgNjQsXG4gICAgICAzMyxcbiAgICAgIDgzLFxuICAgICAgMTUyLFxuICAgICAgOTEsXG4gICAgICA4MCxcbiAgICAgIDE2NixcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDIxLFxuICAgICAgMTMzLFxuICAgICAgMjAyLFxuICAgICAgMTI0LFxuICAgICAgNCxcbiAgICAgIDEyNixcbiAgICAgIDExMSxcbiAgICAgIDEzMSxcbiAgICAgIDExNyxcbiAgICAgIDE2NixcbiAgICAgIDE5NixcbiAgICAgIDk5LFxuICAgICAgNDEsXG4gICAgICAyMDksXG4gICAgICAxOCxcbiAgICAgIDMwLFxuICAgICAgOTIsXG4gICAgICAxMzMsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWkVFM1NLU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU4NDc2Nzk1OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODI5NjA5NDQ0OTY4Mzo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTEh3cThDRU9hQng3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm4zdFZhNzY5N0ZRenVCVFlvMFZvekkySzQrUXRRTDRIWERHdlZqNWNEZ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGNNaDBLMlE4SURwdlpyVXhDcXRtRDA0ZWVkd2taVWZ3cHJMR2xKdk5nWC9nOUhSVlhDdkRpMjJueVk3R1dMODBCRVY3MzJVUXpieEtQL3B6TUFCQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTlpxbFgwVUJSSTV1K2lWMGJocGNHMkQxdGp5Q1VvVHJ6R3lGbnphUWVxUzJLV05DN0g1TzVqYStTQWhUWlh3ZGdrMFE0ajNOeFFIV0NKZTBDMkFtQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU4NDc2Nzk1OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQxMTA1MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
