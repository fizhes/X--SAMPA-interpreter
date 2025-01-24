
const inputEl = document.getElementById('xsampa-input')
const outputEl = document.getElementById('ipa-output')

const aliasMap = [
    [ "|\\\\|\\\\", "\u0296" ],
    [ "f\\_<", "\u0284" ],
    [ "!\\\\", "\u0297" ],
    [ "|\\\\", "\u0287" ],
    [ "c\\\\", "\u0297" ],
    [ "e\\", "\u0258" ],
    [ "f\\", "\u025f" ],
    [ "m\\", "\u0271" ],
    [ "o\\", "\u0275" ],
    [ "c\\", "\u0255" ],
    [ "u\\", "\u0289" ],
    [ "i\\", "\u0268" ],
    [ "v\\", "\u028b" ],
    [ "9\\", "\u0276" ],
    [ "\'\\", "\u02c8" ],
    [ ",\\", "\u02cc" ],
    [ "_/", "\u030c" ],
    [ "_\\", "\u0302" ],
    [ "_=", "\u0329" ],
    [ "_~", "\u0303" ],
    [ "`", "\u02de" ],
    [ "\'", "\u02b2" ],
    [ "a\\", "\u00E6" ],
    [ "=\\\\", "\u029e" ],
    [ "!\\`\\", "\u03c8" ], 
    [ "O\\\\", "\u024B" ], 
    [ "n\\", "\u0272" ],
    [ "+u\\", "\u1db6" ],
    [ "+?\\", "\u02e4" ],
    [ "+j", "\u02b2" ],
    [ "+G", "\u02e0" ],
    [ "+n", "\u207f" ],
    [ "+l", "\u02e1" ],
    [ "+i\\", "\u1da4" ],
    [ "+f\\", "\u1da1" ],
    [ "+h", "\u02b0" ],
    [ "+m\\", "\u1dac" ],
    [ "+w", "\u02b7" ],
    [ "y\\", "\u028e" ],
    [ "+v\\", "\u1db9" ],
    [ "+n\\", "\u1dae" ],
    
]

const mainMap = [
    [ "q\\", "\u024B" ],
    [ "k\\", "\u029e" ],
    [ "G\\_<", "\u029b" ],
    [ "J\\_<", "\u0284" ],
    [ "|\\|\\", "\u01c1" ],
    [ "_H_T", "\u1dc4" ],
    [ "_B_L", "\u1dc5" ],
    [ "_R_F", "\u1dc8" ],
    [ "_F_R", "\u1dc9" ],
    [ "d`_<", "\u1d91" ],
    [ "P\\", "\u03c8" ],
    [ "_O\\\\", "\u02d2" ],
    [ "_c\\\\", "\u02d3" ],
    [ "b_<", "\u0253" ],
    [ "d_<", "\u0257" ],
    [ "g_<", "\u0260" ],
    [ "r\\`", "\u027b" ],
    [ "_0\\", "\u030a" ],
    [ "_O\\", "\u0357" ],
    [ "_c\\", "\u0351" ],
    [ "_+\\", "\u02d6" ],
    [ "_-\\", "\u02d7" ],
    [ "_=\\", "\u030d" ],
    [ "_^\\", "\u0311" ],
    [ "_?\\", "\u02e4" ],
    [ "_r\\", "\u02d4" ],
    [ "_o\\", "\u02d5" ],
    [ "_d\\", "\u0346" ],
    [ "_~\\", "\u0328" ],
    [ "_T\\", "\u02e5" ],
    [ "_H\\", "\u02e6" ],
    [ "_M\\", "\u02e7" ],
    [ "_L\\", "\u02e8" ],
    [ "_B\\", "\u02e9" ],
    [ "<R>", "\u2197" ],
    [ "<F>", "\u2198" ],
    [ "p_<", "\u01a5" ],
    [ "t_<", "\u01ad" ],
    [ "c_<", "\u0188" ],
    [ "k_<", "\u0199" ],
    [ "q_<", "\u02a0" ],
    [ "?\\\\", "\u0296" ],
    [ "!\\`", "\u203c" ],
    [ "d`", "\u0256" ],
    [ "h\\", "\u0266" ],
    [ "j\\", "\u029d" ],
    [ "l`", "\u026d" ],
    [ "l\\", "\u027a" ],
    [ "n`", "\u0273" ],
    [ "p\\", "\u0278" ],
    [ "r`", "\u027d" ],
    [ "r\\", "\u0279" ],
    [ "s`", "\u0282" ],
    [ "s\\", "\u0255" ],
    [ "t`", "\u0288" ],
    [ "t\\", "\u0287" ],
    [ "x\\", "\u0267" ],
    [ "z`", "\u0290" ],
    [ "z\\", "\u0291" ],
    [ "B\\", "\u0299" ],
    [ "G\\", "\u0262" ],
    [ "H\\", "\u029c" ],
    [ "I\\", "\u1d7b" ],
    [ "J\\", "\u025f" ],
    [ "K\\", "\u026e" ],
    [ "L\\", "\u029f" ],
    [ "M\\", "\u0270" ],
    [ "N\\", "\u0274" ],
    [ "O\\", "\u0298" ],
    [ "R\\", "\u0280" ],
    [ "U\\", "\u1d7f" ],
    [ "U\\\\", "\u0277" ],
    [ "X\\", "\u0127" ],
    [ ":\\", "\u02d1" ],
    [ "@\\", "\u0258" ],
    [ "@`", "\u025a" ],
    [ "3\\", "\u025e" ],
    [ "?\\", "\u0295" ],
    [ "<\\", "\u02a2" ],
    [ ">\\", "\u02a1" ],
    [ "!\\", "\u01c3" ],
    [ "|\\", "\u01c0" ],
    [ "||", "\u2016" ],
    [ "=\\", "\u01c2" ],
    [ "-\\", "\u203f" ],
    [ "_0", "\u0325" ],
    [ "_v", "\u032c" ],
    [ "_h", "\u02b0" ],
    [ "_O", "\u0339" ],
    [ "_c", "\u031c" ],
    [ "_+", "\u031f" ],
    [ "_-", "\u0320" ],
    [ "_\"", "\u0308" ],
    [ "_x", "\u033d" ],
    [ "_^", "\u032f" ],
    [ "_`", "\u02de" ],
    [ "_t", "\u0324" ],
    [ "_k", "\u0330" ],
    [ "_N", "\u033c" ],
    [ "_w", "\u02b7" ],
    [ "_j", "\u02b2" ],
    [ "_G", "\u02e0" ],
    [ "_e", "\u0334" ],
    [ "_r", "\u031d" ],
    [ "_o", "\u031e" ],
    [ "_A", "\u0318" ],
    [ "_q", "\u0319" ],
    [ "_d", "\u032a" ],
    [ "_a", "\u033a" ],
    [ "_m", "\u033b" ],
    [ "_n", "\u207f" ],
    [ "_l", "\u02e1" ],
    [ "_}", "\u031a" ],
    [ "_>", "\u02bc" ],
    [ "_T", "\u030b" ],
    [ "_H", "\u0301" ],
    [ "_M", "\u0304" ],
    [ "_L", "\u0300" ],
    [ "_B", "\u030f" ],
    [ "_R", "\u030c" ],
    [ "_F", "\u0302" ],
    [ "_X", "\u0306" ],
    [ "b\\", "\u2c71" ],
    [ "w\\", "\u03C9" ],
    [ "C\\", "\u0297" ],
    [ "A\\", "\u1d00" ],
    [ "P", "\u028b" ],
    [ "a", "\u0061" ],
    [ "b", "\u0062" ],
    [ "c", "\u0063" ],
    [ "d", "\u0064" ],
    [ "e", "\u0065" ],
    [ "f", "\u0066" ],
    [ "g", "\u0261" ],
    [ "h", "\u0068" ],
    [ "i", "\u0069" ],
    [ "j", "\u006a" ],
    [ "k", "\u006b" ],
    [ "l", "\u006c" ],
    [ "m", "\u006d" ],
    [ "n", "\u006e" ],
    [ "o", "\u006f" ],
    [ "p", "\u0070" ],
    [ "q", "\u0071" ],
    [ "r", "\u0072" ],
    [ "s", "\u0073" ],
    [ "t", "\u0074" ],
    [ "u", "\u0075" ],
    [ "v", "\u0076" ],
    [ "w", "\u0077" ],
    [ "x", "\u0078" ],
    [ "y", "\u0079" ],
    [ "z", "\u007a" ],
    [ "A", "\u0251" ],
    [ "B", "\u03b2" ],
    [ "C", "\u00e7" ],
    [ "D", "\u00f0" ],
    [ "E", "\u025b" ],
    [ "F", "\u0271" ],
    [ "G", "\u0263" ],
    [ "H", "\u0265" ],
    [ "I", "\u026a" ],
    [ "J", "\u0272" ],
    [ "K", "\u026c" ],
    [ "L", "\u028e" ],
    [ "M", "\u026f" ],
    [ "N", "\u014b" ],
    [ "O", "\u0254" ],
    [ "Q", "\u0252" ],
    [ "R", "\u0281" ],
    [ "S", "\u0283" ],
    [ "T", "\u03b8" ],
    [ "U", "\u028a" ],
    [ "V", "\u028c" ],
    [ "W", "\u028d" ],
    [ "X", "\u03c7" ],
    [ "Y", "\u028f" ],
    [ "Z", "\u0292" ],
    [ ".", "\u002e" ],
    [ "\"", "\u02c8" ],
    [ "%", "\u02cc" ],
    [ ":", "\u02d0" ],
    [ "@", "\u0259" ],
    [ "{", "\u00e6" ],
    [ "}", "\u0289" ],
    [ "1", "\u0268" ],
    [ "2", "\u00f8" ],
    [ "3", "\u025c" ],
    [ "4", "\u027e" ],
    [ "5", "\u026b" ],
    [ "6", "\u0250" ],
    [ "7", "\u0264" ],
    [ "8", "\u0275" ],
    [ "9", "\u0153" ],
    [ "&", "\u0276" ],
    [ "?", "\u0294" ],
    [ "/", "\u002f" ],
    [ "<", "\u27e8" ],
    [ ">", "\u27e9" ],
    [ "^", "\ua71b" ],
    [ "!", "\ua71c" ],
    [ "|", "\u007c" ],
    [ "=", "\u0329" ],
    [ "~", "\u0303" ],
    [ ")", "\u0361" ],
    [ "(", "\u035c" ],
    [ "0", "\u25CC" ],
    [ "0\\", "\u2205" ],
    [ "_1", "\u00B9" ],
    [ "_2", "\u00B2" ],
    [ "_3", "\u00B3" ],
    [ "_4", "\u2074" ],
    [ "_5", "\u2075" ],
    [ "_6", "\u2076" ],
    [ "_7", "\u2077" ],
    [ "_8", "\u2078" ],
    [ "_9", "\u2079" ],
    [ "m\\\\", "\u03BC" ],
    [ "s\\\\", "\u03C3" ],
    [ "+R", "\u02b6" ],
    [ "K`", "\ua78e" ],
    [ "j\\\\", "\u0249" ],
    [ "I\\\\", "\u0269" ],
    [ "+B", "\u1d5d" ],
    [ "_`\\\\", "\u0323" ], 
    [ "_`\\", "\u0322" ],
    [ "_w\\", "\u032B" ],
    [ "_j\\", "\u0321" ],
    [ "+r\\`", "\u02b5" ],
    [ "+I\\", "\u1da7" ],
    [ "+I\\\\", "\u1DA5" ],
    [ "+n`", "\u1daf" ],
    [ "+N\\", "\u1db0" ],
    [ "+J\\", "\u1da1" ],
    [ "+p\\", "\u1db2" ],
    [ "+s`", "\u1db3" ],
    [ "+z`", "\u1dbc" ],
    [ "+j\\", "\u1da8" ],
    [ "+P", "\u1db9" ],
    [ "+r\\", "\u02b4" ],
    [ "+M\\", "\u1dad" ],
    [ "+l`", "\u1da9" ],
    [ "+L\\", "\u1dab" ],
    [ "+!\\", "\ua71d" ],
    [ "+i", "\u2071" ],
    [ "+y", "\u02b8" ],
    [ "+1", "\u1da4" ],
    [ "+}", "\u1db6" ],
    [ "+M", "\u1d5a" ],
    [ "+u", "\u1d58" ],
    [ "+I", "\u1da6" ],
    [ "+U", "\u1db7" ],
    [ "+e", "\u1d49" ],
    [ "+8", "\u1db1" ],
    [ "+o", "\u1d52" ],
    [ "+@", "\u1d4a" ],
    [ "+E", "\u1d4b" ],
    [ "+9", "\ua7f9" ],
    [ "+3", "\u1d9f" ],
    [ "+V", "\u1dba" ],
    [ "+O", "\u1d53" ],
    [ "+6", "\u1d44" ],
    [ "+A", "\u1d45" ],
    [ "+Q", "\u1d9b" ],
    [ "+a", "\u1d43" ],
    [ "+m", "\u1d50" ],
    [ "+F", "\u1dac" ],
    [ "+J", "\u1dae" ],
    [ "+N", "\u1d51" ],
    [ "+p", "\u1d56" ],
    [ "+b", "\u1d47" ],
    [ "+t", "\u1d57" ],
    [ "+d", "\u1d48" ],
    [ "+c", "\u1d9c" ],
    [ "+k", "\u1d4f" ],
    [ "+g", "\u1da2" ],
    [ "+?", "\u02c0" ],
    [ "+f", "\u1da0" ],
    [ "+v", "\u1d5b" ],
    [ "+T", "\u1dbf" ],
    [ "+D", "\u1d9e" ],
    [ "+s", "\u02e2" ],
    [ "+z", "\u1dbb" ],
    [ "+S", "\u1db4" ],
    [ "+Z", "\u1dbe" ],
    [ "+x", "\u02e3" ],
    [ "+X", "\u1d61" ],
    [ "+H", "\u1da3" ],
    [ "+r", "\u02b3" ],
    [ "+5", "\uab5e" ],
    // [ "!\\`\\\\", "\ud837" ],
    [ "+h\\", "\u02b1" ],
]

const letterMap = [ ...aliasMap, ...mainMap ].sort(
    (a, b) => (b[0].length - a[0].length)
)

const afterMap = [
    [ "+\\", "+" ],
    [ "\u02cc\\", "%" ],
    [ "\u035c\\", "(" ],
    [ "\u0361\\", ")" ],
    [ "\u00e6\\", "{" ],
    [ "\u0289\\", "}" ],
]

for(const el of document.getElementById('buttons').getElementsByTagName('td')) {
    if(el.innerHTML !== '') {
        el.style.border = '3px solid black'
        el.style.borderRadius = '6px'
        el.style.cursor = 'pointer'
        if(!el.className) el.style.backgroundColor = 'white'

        const char = el.accessKey || (el.innerHTML[el.innerHTML.length > 1 ? 1 : 0])

        el.onclick = evt => {
            for(const [ key, value ] of mainMap)
                if(value === char) {
                    inputEl.value += key
                    return update()
                }
            
            inputEl.value += el.accessKey
            return update()
        }
    }
}

const update = evt => {
    let output = inputEl.value

    for(const [ key, value ] of letterMap) {
        output = output.replaceAll(key, value)
    }
    for(const [ key, value ] of afterMap) {
        output = output.replaceAll(key, value)
    }

    outputEl.value = output


}

inputEl.addEventListener('keydown', update)
inputEl.addEventListener('keyup', update)
inputEl.addEventListener('onchange', update)


const copyIndicator = document.getElementById('copy-indicator')
const copy = () => {
    navigator.clipboard.writeText(outputEl.value)

    copyIndicator.className = 'fadeinout'
    setTimeout(_ => { copyIndicator.className = '' }, 2000)
}

const keys = []
document.addEventListener('keydown', evt => {
    keys[evt.key] = true

    if(keys['Control'] && keys['Shift'] && keys[' ']) copy()

    if(evt.key === 'Escape') aboutMenu.style.visibility = 'hidden'
})
document.addEventListener('keyup', evt => {
    keys[evt.key] = false
})

document.getElementById('copy-button').onclick = copy


const aboutMenu = document.getElementById('about')
document.getElementById('about-button').onclick = evt => {
    if(aboutMenu.style.visibility === 'hidden')
        aboutMenu.style.visibility = ''
    else
        aboutMenu.style.visibility = 'hidden'
}

document.getElementById('close-about').onclick = evt => {
    aboutMenu.style.visibility = 'hidden'
}

document.getElementById('transcribe').onchange = evt => {
    [
        document.getElementById('transcribe-label'),
        ...document.getElementById('about').getElementsByTagName('p'),
        document.getElementById('additional-notes'),
        ...document.getElementById('about').getElementsByTagName('th'),
        document.getElementById('close-about'),
    ].forEach(el => {
        const innerHTML = el.innerHTML
        el.innerHTML = el.accessKey
        el.accessKey = innerHTML
    })
}