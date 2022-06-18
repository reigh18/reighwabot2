let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/1e5b3fe8a50ba00faa81c.png', m, { packname: "Sticker by", author: "ArullOfc" })
}

handler.customPrefix = /^(Bot|Woi|Cok|Ngab|Tod|Bang|Hai|P)$/i
handler.command = new RegExp

module.exports = handler
