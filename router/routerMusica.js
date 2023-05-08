const express = require("express");
const artista= require("./musica.json");
const albumes = require("./albumes.json");
const router = express.Router();

router.get("/",(req,res)=>{
res.send(artista)
})

router.get("/albumes",(req,res)=>{
    res.send(albumes)
})
router.get("/albumes/:album",(req,res)=>{
    const nombreAlbum = req.params.album;
    const albumEcontrado= albumes.find((Album)=>{
       return  Album.album.toLowerCase() == nombreAlbum.toLowerCase();
    })
   
    if(albumEcontrado !== undefined){
        res.json(albumEcontrado);
        
    }else{
        res.status(404).send("El album que buscas no existe")
    }
})
module.exports = router