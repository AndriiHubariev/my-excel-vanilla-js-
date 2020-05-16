import './scss/index.scss'
console.log('start')
async function start() {
   return await Promise.resolve('working')
}
start().then( console.log);