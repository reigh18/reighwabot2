import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level saat ini: *${user.level} (${user.exp - min}/${xp})*
Kurang sebanyak *${max - user.exp}* Exp lagi untuk menuju ke level selanjutnya.
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat, *${conn.getName(m.sender)}* telah naik Level.`
        let str = `
${teks} 
*Level*: ${before} -> ${user.level}

${new Date().toLocaleString('id-ID')}
`.trim()
        try {
            // const img = await levelup(teks, user.level)
            // conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
            m.reply(str)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler