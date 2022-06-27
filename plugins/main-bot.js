let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/1e5b3fe8a50ba00faa81c.png', m, { packname: "Sticker by", author: "ReighBot" })
}

handler.customPrefix = /^(Bot|Woi|Hai|P)$/i
handler.command = new RegExp

module.exports = handler
