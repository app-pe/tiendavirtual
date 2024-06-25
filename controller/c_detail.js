import { data } from '../model/ms_datos.js';
import { retornarId } from '../model/ms_enlaces.js';
//data
var producto = data.producto;
var tienda = data.tienda;
var atributo_producto = data.atributo_producto;
var tallas = data.tallas;
//reutilizar funciones que retornan valor
var id_producto = retornarId();
var objAtributoProducto = retornarObjAtributoProducto();
//objAtributoProducto = Object(objAtributoProducto);
var filtrarProducto = retornarObjProducto();
//filtrarProducto = Object(filtrarProducto);
var filtrarTienda = retornarObjTienda();
//funciones
function retornarObjProducto(){
    var filtrarProducto = producto.find(function(prod){                     
        return prod.id_producto === id_producto        
    });    
    filtrarProducto = Object(filtrarProducto);
    return filtrarProducto;
}
function retornarObjAtributoProducto(){
    var filtrarIdProducto = atributo_producto.find(function(prod){                     
        return prod.id_producto === id_producto        
    });    
    filtrarIdProducto = Object(filtrarIdProducto);
    return filtrarIdProducto;
}
function retornarObjTienda(){
    var id_tienda = filtrarProducto.id_tienda;
    var filtrarTienda = tienda.find(function(shop){                     
        return shop.id_tienda === id_tienda        
    });    
    filtrarTienda = Object(filtrarTienda);
    return filtrarTienda;
}
function mostrarGaleriaImagenes(){ 
    var url_img_cat = filtrarProducto.url_imagen_categoria;   
    objAtributoProducto = Object(objAtributoProducto);  
    //console.log(objAtributoProducto);
    var arrayimagenes = Object(objAtributoProducto.imagen_secundaria);  
    //console.log(arrayimagenes);
    var char_galeria = "";  
    for(var j=0;j<arrayimagenes.length;j++){        
        var url = arrayimagenes[j];       
        if(j === 0){            
            char_galeria =
            `
            <div class="carousel-item active">
            <img class="w-100 h-100" src="${url_img_cat+url}" alt="Image">
            </div>
            `;  
        }else{            
            char_galeria += 
            `
            <div class="carousel-item">
            <img class="w-100 h-100" src="${url_img_cat+url}" alt="Image">
            </div>
            `;
            }
    }   
    return char_galeria;
}
function mostrarNombreTienda(){    
    var nombre_tienda = filtrarTienda.nombre_tienda;
    var id_tienda = filtrarTienda.id_tienda;
    let nombreTienda =
    `
    <div class="d-inline-flex">
        <a class="text-dark px-2" href="">
            <h5 class="pasaridTienda" id="${id_tienda}">${nombre_tienda}</h5>
        </a>                        
    </div>
    `;
    return nombreTienda;
}
function mostrarNombreProducto(){    
    let nombreProducto =
    `
    <h3 class="font-weight-semi-bold">${filtrarProducto.nombre_producto}</h3>
    `;    
    return nombreProducto;
}
function mostrarPriceOferta(){    
    let priceOferta =
    `
    <h3 class="font-weight-semi-bold">S/${filtrarProducto.precio_oferta}</h3>
    `;    
    return priceOferta;
}
function mostrarColores(){
    let char_colores = "";
    let nombre_color = "";
    let id_color = "";
    let galery = "";
    //const id_producto = retornarId(); filtramos los colores del producto
    var filtrarColores = atributo_producto.filter(function(color){
        return color.id_producto === id_producto
    });
    //console.log(filtrarColores);
    for (var j = 0; j < filtrarColores.length; j++) {               
        nombre_color = filtrarColores[j].color;   
        id_color = filtrarColores[j].id_color;
        //console.log(id_color);
        if(j === 0){
            char_colores =
            `
            <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input elegirColor" checked="checked" id="${id_color}" name="colores_prod" value="${nombre_color}">
                            <label class="custom-control-label" for="${id_color}">${nombre_color}</label>
                        </div>
            `;         
        }else{
            char_colores += `
            <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input elegirColor" id="${id_color}" name="colores_prod" value="${nombre_color}">
                            <label class="custom-control-label" for="${id_color}">${nombre_color}</label>
                        </div>
            `;
            }
    }
    return char_colores;
}
function mostrarTallas(){
    const id_producto = retornarId();
    let char_tallas = "";    
    let id_talla = "";
    //valido que la talla exista en el producto
    var arraytallas = Object(objAtributoProducto.id_tallas); 
    //busco en el array de tallas
      for (var j = 0; j < arraytallas.length; j++) {         
        id_talla = arraytallas[j]; 
       //busco nombre de la talla
        var filtrarTallax = tallas.find(function(talla){
            return talla.id_talla === id_talla
        });
        var nombre_talla = filtrarTallax.nombre_talla;
           
        if(j === 0){            
            char_tallas =
            `
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input elegirTalla" checked id="${id_talla}" name="size">
                <label class="custom-control-label" for="${id_talla}">${nombre_talla}</label>
            </div>
            `;             
            console.log("RETORNAR TALLA SELECCIONADA EN 0");
            console.log(id_talla);            
        }else{            
            char_tallas +=
            `
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input elegirTalla" id="${id_talla}" name="size">
                <label class="custom-control-label" for="${id_talla}">${nombre_talla}</label>
            </div>
            `;             
           /*  console.log("RETORNAR LAS DEMAS TALLAS <> 0");
            console.log(id_talla); */
            } 
    } 
    return char_tallas; 
}
    

var xid_atributo = "";
function elegirColorProducto(){
    //var url_img_cat = retornarUrl_imagen_categoria();
    filtrarProducto = Object(filtrarProducto);  
    var url_img_cat = filtrarProducto.url_imagen_categoria;
    console.log(url_img_cat);
    var array_rb = document.querySelectorAll('.elegirColor');
    console.log("array_rb");
    console.log(array_rb);

    for(var i=0;i<array_rb.length;i++){

        array_rb[i].onclick = function(){
            //recupero id_color del rb y lo asigno a una variable
            //console.log("entro"+this.id);
            var id_col = this.id;
            console.log("CAPTURO EL id_color------");         
            console.log(id_col);
            var char_galeria2 = "";
            const id_producto = retornarId();
            //comparo el id_color de la imagen y lo pinto en el rb
            var filtrarId_color_rb = atributo_producto.find(function(id){
                return id.id_producto === id_producto & id.id_color === id_col
            });
            console.log("MUESTRO DATOS DEL ATRIBUTO ELEGIDO EN RB COLORES------");         
            console.log(filtrarId_color_rb);
            //capture el color clikeado   
            console.log("CAPTURO EL id_atributo DEL RB ELEGIDO------");         
            console.log(filtrarId_color_rb.id_atributo);
            xid_atributo = filtrarId_color_rb.id_atributo;
            mostrarTallasRB_elegirColorRB();
            elegirTallaProducto();
            //debo mostrar las tallas que le corresponden a este id_atributo 

            //ahora muestro la foto del color en la galeria
            for(var i=0;i<filtrarId_color_rb.imagen_secundaria.length;i++){               
                var url = filtrarId_color_rb.imagen_secundaria[i];
                //console.log(url);
                if(i === 0){            
                    char_galeria2 =
                    `
                    <div class="carousel-item active">
                    <img class="w-100 h-100" src="${url_img_cat+url}" alt="Image">
                    </div>
                    `;  
                  
                }else{            
                    char_galeria2 += 
                    `
                    <div class="carousel-item">
                    <img class="w-100 h-100" src="${url_img_cat+url}" alt="Image">
                    </div>
                    `;
                    }
            }
            //console.log(char_galeria2);
            document.getElementById("show_img_galeria").innerHTML = char_galeria2;          
        }
    }
}
function mostrarTallasRB_elegirColorRB(){ 
    var id_talla = "";
    var char_tallas = "";
    //console.log("CARGAR TALLAS-----------"+xid_atributo);
    //var array_tallas = document.querySelectorAll('.elegirTalla');
    var array_tallas = atributo_producto.find(function(talla){
        return talla.id_atributo === xid_atributo
    }); 
    var arraytallas = Object(array_tallas.id_tallas); 
    console.log("ENTRO A MOSTRAR TALLAS AL ELEGIR RB COLOR");    
    console.log(arraytallas);
    console.log(arraytallas.length);
    for (var j = 0; j < arraytallas.length; j++) {         
        id_talla = arraytallas[j]; 
        //console.log(id_talla);
       //busco nombre de la talla
        var filtrarTallax = tallas.find(function(talla){
            return talla.id_talla === id_talla
        });
        var nombre_talla = filtrarTallax.nombre_talla;
           
        if(j === 0){            
            char_tallas =
            `
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input elegirTalla" checked id="${id_talla}" name="size">
                <label class="custom-control-label" for="${id_talla}">${nombre_talla}</label>
            </div>
            `; 
            console.log("RETORNAR TALLA SELECCIONADA EN 0");
            console.log(id_talla);
            
        }else{            
            char_tallas +=
            `
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input elegirTalla" id="${id_talla}" name="size">
                <label class="custom-control-label" for="${id_talla}">${nombre_talla}</label>
            </div>
            `;
            
            } 
    }
    document.getElementById("show_tallas").innerHTML = char_tallas;
   
        
} 
function elegirTallaProducto(){
    
    var array_rbTallas = document.querySelectorAll('.elegirTalla');
    for(var i=0;i<array_rbTallas.length;i++){
    array_rbTallas[i].onclick = function(){
        var id_talla = this.id;
        console.log("{TALLA ELEGIDA---}");
        console.log(id_talla);
    }
    }
}





export{mostrarGaleriaImagenes,mostrarNombreProducto,mostrarPriceOferta,mostrarColores,mostrarTallas,elegirColorProducto,mostrarNombreTienda}
