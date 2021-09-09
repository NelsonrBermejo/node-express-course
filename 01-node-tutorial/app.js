const { readFile,writeFile } = require ('fs')
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try{
    //await...promise from result
    // const first = await getText('./content/first.txt')
    const first = await readFilePromise('./content/first.txt', 'utf8')
    //const second = await getText('./content/second.txt')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    await writeFilePromise(
        './content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`,
        { flag: 'a' }
        )
    console.log(first, second)

    }
    catch (error){
     console.log(error)
    }
    
}
//invoca
start()


//obtengo el texto de un sendero
//const getText = (path) =>{
//    return new Promise((resolve,reject)=>{
        //encapsulo
        //readFile('./content/first.txt', 'utf8', (err, data) => {
//        readFile(path,'utf8', (err, data) => {
//            if(err) {
            // return
 //           reject(err)
 //           }
   //         else {
                //console.log(data)
      //          resolve(data)
     //       }
       // })
//encapsulado
//    })
//}



//getText('./content/first.txt')
//.then(result => console.log(result))
//.catch(err=> console.log(err))