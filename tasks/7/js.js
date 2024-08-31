
const inputt=prompt('enter :')
function mmd (inputt){
    let arr=inputt.trim().split(/\s+/)
    return arr.length
}
alert('کلمات'+'  '+mmd(inputt))
