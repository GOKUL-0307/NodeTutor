const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'file','start.txt'),'utf8', (err, data) => {//utf8 is used for encoding the data formaas string
    if (err) throw err;
    //console.log(data); it display the data in buffered format
   // console.log(data.toString());//to display the data as it is
   console.log(data);//after adding utf8
  }); 
  
  // write data to a file
  fs.writeFile(path.join(__dirname,'file','write.txt'),'Hi in this file data is written successfully',(err)=>{
    if(err) throw err;
    console.log('Write complete');
  })
  //insted of utf8 write the content to store in the file

  //add data to the existing file
  fs.appendFile(path.join(__dirname,'file','write.txt'),'\n\n Updated succesfully',(err)=>{
    if(err) throw err;
    console.log('Write complete');
  })

  //another method to append

//   fs.writeFile(path.join(__dirname,'file','write.txt'),'Hi in this file data is written successfully',(err)=>{
//     if(err) throw err;
//     console.log('Write complete');
//     fs.appendFile(path.join(__dirname,'file','write.txt'),'\n\n Updated succesfully',(err)=>{
//         if(err) throw err;
//         console.log('Write complete');
//       })
//   })


  process.on('uncaughtException',err=>{
      console.error(`There  was an uncaught error:${err}`)//used to show what error is occur in this code
      process.exit(1)
  })