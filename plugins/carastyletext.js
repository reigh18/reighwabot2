let handler = async (m, { conn, text, usedPrefix, command }) => {
    // let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    // if (!teks) throw `Command error`
    m.reply(`Cara menggunakan perintah Style text:\nketik .style <text>\nContoh: .style test`)
}

handler.help = ['carastyletext']
handler.tags = ['internet']
handler.command = /^(carastyletext)$/i

// handler.limit = true
handler.group = true
handler.private = false

export default handler