// MÓDULOS ABAIXO..
const chalk = require("chalk");

const hx = require("hxz-api");

const { Boom } = require("@hapi/boom");

const axios = require("axios");

const fs = require("fs-extra");

const yts = require("yt-search");

const crypto = require("crypto");

const util = require("util");

const P = require("pino");

const encodeUrl = require("encodeurl");

const linkfy = require("linkifyjs");

const request = require("request");

const cheerio = require("cheerio");

const ms = require("ms");

const ffmpeg = require("fluent-ffmpeg");

const imgbb = require("imgbb-uploader");

const googleImage = require("g-i-s");

const googleIt = require("google-it");

const fetch = require("node-fetch");

const imageToBase64 = require("image-to-base64");

const { EmojiAPI } = require("emoji-api");

const qrterminal = require("qrcode-terminal");

const emoji = new EmojiAPI();

const { exec, spawn, execSync } = require("child_process");

const moment = require("moment-timezone");

const colors = require("colors");

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

const time = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

const date = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

//\\

// FUNÇÕES ABAIXO...

const { convertSticker } = require("./armor/funcoes/swm.js");

const { recognize } = require("./armor/js/ocr");

const { fetchJson, fetchText, getBase64, createExif } = require("./armor/funcoes/fetcher");

const { webp2gifFile } = require("./armor/js/gif.js");

const webp_mp4 = require("./armor/js/webp_mp4.js");

const { insert, response } = require("./armor/funcoes/simi.js");

const { addLimit, getLimit } = require("./armor/js/limit.js");

const { upload, nit } = require("./armor/funcoes/tourl");

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { isFiltered, addFilter } = require("./armor/js/antispam.js");

const { validmove, setGame } = require("./armor/tictactoe");

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } = require("./armor/js/addcmd.js");

const { palavrasANA, quizanime, quizanimais } = require("./armor/jogo/jogos.js");

const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre } = require("./armor/js/consts.js"); // DE LEVEL/CASH

const { WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC } = require("./datab/ttt/TTTconfig/tttexp.js"); // JOGO DA VELHA TTT COM MAQUINA

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require("./armor/js/tictactoe.js"); // JOGO DA VELHA

const { wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, getBuffer } = require("./armor/funcoes/functions.js"); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS

const { addVote, delVote } = require("./armor/js/vote");

const { ttthelp } = require("./datab/ttt/TTTconfig/ttthelp");

const { tttme } = require("./datab/ttt/TTTconfig/tttme");

const tttset = require("./datab/ttt/TTTconfig/tttset.json");

const esp = require("./datab/ttt/TTTconfig/tttframe.json");

//\\

// JSON FUNÇÕES ABAIXO CONSTS >

const adeuscara = JSON.parse(fs.readFileSync("./datab/grupos/adeuscara.json"));

const botoff = JSON.parse(fs.readFileSync("./datab/grupos/botoff.json"));

const welcome_group = JSON.parse(fs.readFileSync("./datab/grupos/welcomegp.json"));

const bye_group = JSON.parse(fs.readFileSync("./datab/grupos/byegp.json"));

const welcome_group2 = JSON.parse(fs.readFileSync("./datab/grupos/welcomegp2.json"));

const bye_group2 = JSON.parse(fs.readFileSync("./datab/grupos/byegp2.json"));

const voting = JSON.parse(fs.readFileSync("./armor/funcoes/voting.json"));

const sotoy = JSON.parse(fs.readFileSync("./armor/funcoes/sotoy.json"));

const countMessage = JSON.parse(fs.readFileSync("./datab/grupos/countmsg.json"));

const comandos = JSON.parse(fs.readFileSync("./dono/media/comandos.json"));

const welkom2 = JSON.parse(fs.readFileSync("./datab/usuarios/vacilo.json"));

const modogm = JSON.parse(fs.readFileSync("./datab/grupos/modogamer.json"));

const puxgp = JSON.parse(fs.readFileSync("./datab/grupos/puxadasgp.json"));

const nsfw = JSON.parse(fs.readFileSync("./datab/grupos/nsfw.json"));

const daily = JSON.parse(fs.readFileSync("./datab/usuarios/diario.json"));

const nescessario = JSON.parse(fs.readFileSync("./dono/nescessario.json"));

const welkom = JSON.parse(fs.readFileSync("./datab/grupos/welkom.json"));

const premium = JSON.parse(fs.readFileSync("./datab/usuarios/premium.json"));

const limitefll = JSON.parse(fs.readFileSync("./datab/usuarios/flood.json"));

const antiflood = JSON.parse(fs.readFileSync("./datab/usuarios/antiflood.json"));

const samih = JSON.parse(fs.readFileSync("./datab/usuarios/simi.json"));

const samih2 = JSON.parse(fs.readFileSync("./armor/funcoes/simi.json"));

const _leveling = JSON.parse(fs.readFileSync("./datab/usuarios/leveling.json"));

const _level = JSON.parse(fs.readFileSync("./datab/usuarios/level.json"));

const bancht = JSON.parse(fs.readFileSync("./datab/grupos/banchat.json"));

const anticall = JSON.parse(fs.readFileSync("./datab/usuarios/anticall.json"));

const ban = JSON.parse(fs.readFileSync("./datab/usuarios/banned.json"));

const afk = JSON.parse(fs.readFileSync("./datab/grupos/afk.json"));

const joguinhodavelhajs = JSON.parse(fs.readFileSync("./datab/usuarios/joguinhodavelha.json"));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync("./datab/usuarios/joguinhodavelha2.json"));

const setting = JSON.parse(fs.readFileSync("./dono/settings.json"));

const antilink = JSON.parse(fs.readFileSync("./datab/ants/antilink.json"));

const antifake = JSON.parse(fs.readFileSync("./datab/ants/antifake.json"));

const antilinkhard = JSON.parse(fs.readFileSync("./datab/ants/antilinkhard.json"));

const autofigu = JSON.parse(fs.readFileSync("./datab/grupos/autofigu.json"));

const antilinkgp = JSON.parse(fs.readFileSync("./datab/ants/antilinkgp.json"));

const antiporn = JSON.parse(fs.readFileSync("./datab/ants/antiporn.json"));

const antiimg = JSON.parse(fs.readFileSync("./datab/ants/antiimg.json"));

const antisticker = JSON.parse(fs.readFileSync("./datab/ants/antisticker.json"));

const antinotas = JSON.parse(fs.readFileSync("./datab/ants/antinotas.json"));

const antictt = JSON.parse(fs.readFileSync("./datab/ants/antictt.json"));

const anticatalogo = JSON.parse(fs.readFileSync("./datab/ants/anticatalogo.json"));

const antidoc = JSON.parse(fs.readFileSync("./datab/ants/antidoc.json"));

const antiloc = JSON.parse(fs.readFileSync("./datab/ants/antiloc.json"));

const antipv = JSON.parse(fs.readFileSync("./datab/usuarios/antipv.json"));

const antivid = JSON.parse(fs.readFileSync("./datab/ants/antivideo.json"));

const antiaudio = JSON.parse(fs.readFileSync("./datab/ants/antiaudio.json"));

const palavra = JSON.parse(fs.readFileSync("./datab/grupos/palavras.json"));

const palavrao = JSON.parse(fs.readFileSync("./datab/grupos/palavrao.json"));

//\\

// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { infovotacao } = require("./armor/js/infovotacao.js");

const { infocontador } = require("./armor/js/infocontador.js");

const { infobemvindo } = require("./armor/js/infobv.js");

const { infolistanegra } = require("./armor/js/infolistanegra.js");

const { infopalavrao } = require("./armor/js/infopalavrao.js");

const { anotacao } = require("./armor/js/infoanotacao.js");

const { infobancarac } = require("./armor/js/infobancarac.js");

const { gitdobot } = require("./dono/gitdobot.js");

const { destrava, destrava2 } = require("./armor/funcoes/destrava.js");

const { tabela } = require("./armor/js/tabela");

const { conselhob } = require("./armor/js/conselhob.js");

const { palavras } = require("./armor/js/conselhos.js");

//\\

// Transformar segundos em hora/minutos

function kyun(seconds) {
function pad(s) {
return (s < 10 ? "0" : "") + s;
}
var hours = Math.floor(seconds / (60 * 60));
var minutes = Math.floor((seconds % (60 * 60)) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`;
}

// Loja de dados

// INTELIGENCIA-ARTIFICIAL

const simih = async (text) => {
try {
text = text.replace(/(\W)/gi, '');
if (text == '') return 'Hum'
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e) {
return
}
};

const setJson = (dir, body) => fs.writeFileSync(dir, JSON.stringify(body, null, 2));

module.exports = {
// MÓDULOS ABAIXO >
setJson,
P,
fs,
yts,
hx,
util,
Boom,
axios,
chalk,
encodeUrl,
linkfy,
request,
ms,
ffmpeg,
imgbb,
googleImage,
googleIt,
fetch,
imageToBase64,
EmojiAPI,
qrterminal,
emoji,
exec,
spawn,
execSync,
moment,
color,
time,
hora,
date,

// FUNÇÕES JS ABAIXO >
ttthelp,
tttme,
tttset,
esp,
addVote,
delVote,
getBuffer,
convertSticker,
fetchJson,
fetchText,
getBase64,
createExif,
insert,
response,
addLimit,
getLimit,
upload,
nit,
addBanned,
unBanned,
BannedExpired,
cekBannedUser,
isFiltered,
addFilter,
validmove,
setGame,
addComandosId,
deleteComandos,
getComandoBlock,
getComandos,
addComandos,
palavrasANA,
quizanime,
quizanimais,
getLevelingXp,
getLevelingLevel,
getLevelingId,
addLevelingXp,
addLevelingLevel,
addLevelingId,
bayarLimit,
limitAdd,
addATM,
addKoinUser,
checkATMuser,
getRegisteredRandomId,
addRegisteredUser,
createSerial,
checkRegisteredUser,
confirmATM,
runtime,
getpc,
supre,
WinnerX,
WinnerO,
Tie,
IA,
IAmove1,
IAalter,
priorityC,
addTTTId,
addTTTwin,
addTTTdefeat,
addTTTtie,
addTTTpoints,
getTTTId,
getTTTwins,
getTTTdefeats,
getTTTties,
getTTTpoints,
wait,
getExtension,
h2k,
generateMessageID,
getGroupAdmins,
getRandom,
banner,
banner2,
banner3,
infopd,
success,
start,
close,
temporizador,
cmdadd,
addMetadata,
chyt,
webp2gifFile,
webp_mp4,
simih,

// JSON FUNÇÕES ABAIXO >

voting,
sotoy,
addVote,
delVote,
countMessage,
comandos,
puxgp,
modogm,
nsfw,
daily,
nescessario,
premium,
limitefll,
antiflood,
_leveling,
_level,
bancht,
anticall,
ban,
botoff,

// JSON JUNÇÕES DE ATIconst / DESATIconst

welkom2,
welkom,
afk,
samih,
samih2,
joguinhodavelhajs,
joguinhodavelhajs2,
adeuscara,
welcome_group,
welcome_group2,
bye_group,
bye_group2,
setting,
antilink,
antifake,
antilinkhard,
antilinkgp,
antiporn,
antiimg,
antisticker,
antinotas,
autofigu,
antictt,
anticatalogo,
antidoc,
antiloc,
antipv,
antivid,
antiaudio,
palavra,
palavrao,

// JS DE MENUS, INFORMAÇÕES DE UTILIZAR COMANDOS \\

modogm,
puxgp,
infovotacao,
infocontador,
infobemvindo,
anotacao,
infolistanegra,
infopalavrao,
infobancarac,
gitdobot,
destrava,
destrava2,
tabela,
conselhob,
palavras,
colors,

// FUNÇÃO...

kyun,
};
