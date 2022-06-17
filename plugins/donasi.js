let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085822347348]
│ • Axis [083843192208]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [085822347348]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
