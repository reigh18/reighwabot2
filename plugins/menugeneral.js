let handler = async (m, { conn, text, usedPrefix, command }) => {
    // let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    // if (!teks) throw `Command error`
    m.reply(`Coming soon!`)
}

handler.help = ['menugeneral']
handler.tags = ['internet']
handler.command = /^(menugeneral)$/i

// handler.limit = true
handler.group = true
handler.private = false

export default handler