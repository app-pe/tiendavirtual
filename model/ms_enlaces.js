function enlazar_paginas(){
    var pasarCategoriaTienda = document.getElementsByClassName('pasaridTienda');
        for(var i=0;i<pasarCategoriaTienda.length;i++){
            pasarCategoriaTienda[i].onclick=function(e){
                e.preventDefault();                
                window.open("shop.html?id="+this.id, "_self");                
            }
        }        

    var pasarCategoriaGaleria = document.getElementsByClassName('pasarCategoriaGaleria');
    for(var i=0;i<pasarCategoriaGaleria.length;i++){
        pasarCategoriaGaleria[i].onclick=function(e){
            e.preventDefault();            
            window.open("category.html?id="+this.id, "_self");            
        }
    }   
    var pasaridCategoria = document.getElementsByClassName('pasaridCategoria');
    for(var i=0;i<pasaridCategoria.length;i++){
        pasaridCategoria[i].onclick=function(e){
            e.preventDefault();            
            window.open("detail.html?id="+this.id, "_self");            
        }
    }   

}

function retornarId(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id")
    return id;
}

export {enlazar_paginas,retornarId}