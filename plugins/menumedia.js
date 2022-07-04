let handler = async (m, { conn, text, usedPrefix, command }) => {
    // let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    // if (!teks) throw `Command error`
    m.reply(`Coming soon!`)
}

handler.help = ['menumedia']
handler.tags = ['internet']
handler.command = /^(menumedia)$/i

// handler.limit = true
handler.group = true
handler.private = false

export default handler