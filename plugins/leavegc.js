let handler = async (m, { conn, args, command }) => {
    // let chat = Object.entries(conn.chats).filter(v => v.jid.endsWith('g.us') && !v.read_only)
    let chat = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && !chat.read_only)
    if (command.endsWith('all') || command.endsWith('semua')) {
        for (let i = 0; i < chat.length; i++) { // For loops
            await m.reply('Bot dipaksa keluar dari grup oleh Owner.', chat[i].jid)
            await conn.groupLeave(chat[i].jid)
            await delay(i * 2000) // Delaynya
        }
        await m.reply('Berhasil keluar dari grup.')
    } else if (args[0] || args.length > 0) {
        let ada = chat.find(bot => bot.jid == args[0]) // Apakah botnya ada disitu
        if (!ada) throw 'Bot tidak berada dalam group itu.'
        await m.reply('Bot dipaksa keluar dari grup oleh Owner.', args[0])
        await conn.groupLeave(args[0])
        await m.reply('Berhasil keluar dari grup.')
    } else {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply('Bot dipaksa keluar dari grup oleh Owner.', m.chat) // WKWKW pesannya sama semua. gk kreatif :v
        await conn.groupLeave(m.chat)
    }
}
    
handler.help = ['gc', 'gcall', 'group'].map(v => 'leave' + v)
handler.tags = ['group']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i

handler.owner = true
// handler.rowner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))