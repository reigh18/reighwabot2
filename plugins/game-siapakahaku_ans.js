import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(sahint)/i.test(m.quoted.text) || /.*(sahint)/i.test(m.text)) return !0
    this.siapakahaku = this.siapakahaku ? this.siapakahaku : {}
    if (!(id in this.siapakahaku)) return this.sendButton(m.chat, 'Game tersebut telah berakhir.', author, ['Main lagi', '/siapakahaku'], m)
    if (m.quoted.id == this.siapakahaku[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.siapakahaku[id][1]))
        let users = global.db.data.users[m.sender]
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            users.exp += this.siapakahaku[id][2]
            this.sendButton(m.chat, `*Jawabanmu benar.*\nmendapatkan ${this.siapakahaku[id][2]} Exp`, author, ['Main lagi', '/siapakahaku'], m)
            clearTimeout(this.siapakahaku[id][3])
            delete this.siapakahaku[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Jawabanmu hampir benar.*`)
        else m.reply(`*Jawabanmu salah.*`)
    }
    return !0
}
handler.exp = 0

export default handler