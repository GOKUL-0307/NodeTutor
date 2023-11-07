import { readFile } from 'node:fs';

readFile('./file/start.txt','utf8', (err, data) => {//utf8 is used for encoding the data formaas string
  if (err) throw err;
  //console.log(data); it display the data in buffered format
 // console.log(data.toString());//to display the data as it is
 console.log(data);//after adding utf8
}); 

process.on('uncaughtException',err=>{
    console.error(`There  was an uncaught error:${err}`)//used to show what error is occur in this code
    process.exit(1)
})