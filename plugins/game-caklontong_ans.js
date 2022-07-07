import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*clhint/i.test(m.quoted.text) || /.*(clhint)/i.test(m.text))
        return !0
    this.caklontong = this.caklontong ? this.caklontong : {}
    if (!(id in this.caklontong))
        return m.reply('Soal tersebut telah berakhir.')
    if (m.quoted.id == this.caklontong[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
        let users = global.db.data.users[m.sender]
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            users.exp += this.caklontong[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.caklontong[id][2]} XP\n${json.deskripsi}`, author, null, [['Cak Lontong', '.caklontong']], m)
            clearTimeout(this.caklontong[id][3])
            delete this.caklontong[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Jawabanmu hampir benar*.`)
        else
            m.reply(`*Jawabanmu salah*.`)
    }
    return !0
}
export const exp = 0