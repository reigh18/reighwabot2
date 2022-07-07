import similarity from 'similarity'

const threshold = 0.72
let handler = m => m
handler.before = async function before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teki/i.test(m.quoted.text)) return !0
        this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
        if (!(id in this.tebakkimia)) return m.reply('Soal tersebut telah berakhir.')
        if (m.quoted.id == this.tebakkimia[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
            let users = global.db.data.users[m.sender]
            // m.reply(JSON.stringify(json, null, '\t'))
            if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
                users.exp += this.tebakkimia[id][2]
                m.reply(`Jawabanmu benar.\nmendapatkan ${this.tebakkimia[id][2]} Exp`)
                clearTimeout(this.tebakkimia[id][3])
                delete this.tebakkimia[id]
            } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`Jawabanmu hampir benar.`)
            else m.reply(`Jawabanmu salah.`)
        }
        return !0
}
handler.exp = 0

export default handler
