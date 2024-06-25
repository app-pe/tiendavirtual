//retornar imagen de tienda, logo, nombre, ruc, razon social
import { data } from '../model/ms_datos.js';
//import { data } from '../microservice/ms_category.js';
import { retornarId } from '../model/ms_enlaces.js';
var tienda = data.tienda;
var productos = data.producto;
var id_tienda = retornarId(); 

function retornarObjTienda(){       
    var filtrarTienda = tienda.find(function(shop){                     
        return shop.id_tienda === id_tienda        
    });    
    filtrarTienda = Object(filtrarTienda);
    return filtrarTienda;
}
function retornarProductosTienda(){       
    var filtrarProductosTienda = productos.filter(function(shop){                     
        return shop.id_tienda === id_tienda        
    });    
    filtrarProductosTienda = Object(filtrarProductosTienda);
    return filtrarProductosTienda;
}



export{retornarObjTienda,retornarProductosTienda}