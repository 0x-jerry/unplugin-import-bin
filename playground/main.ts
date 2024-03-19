import buffer from './test.txt?bin'

const text = new TextDecoder().decode(buffer)

document.getElementById('app')!.innerHTML = '__UNPLUGIN__: ' + text
