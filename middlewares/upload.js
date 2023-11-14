const multer= require('multer');


const storage= multer.diskStorage({
   destination: function(req, file, cb){
    cb(null, 'public/upload') //1º argumento: endereço externo; 2º: pasta onde ele salva)
   },
   filename: function(req, file, cb){ //filename: é onde seta as conf da imagem
    const ext= file.originalname.split('.').pop(); //ext - extension
    const newName= Date.now() + '-' + Math.floor(Math.random() * 100000) + '.' + ext;
    cb(null, newName)
   }
})

const uplod= multer({storage:storage})

module.exports= upload;