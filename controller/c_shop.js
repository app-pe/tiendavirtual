//retornar imagen de tienda, logo, nombre, ruc, razon social
import { data } from '../model/ms_datos.js';
//import { data } from '../microservice/ms_category.js';
import { retornarId } from '../model/ms_enlaces.js';
import { retornarObjTienda,retornarProductosTienda } from '../model/ms_filtros.js';
//var tienda = data.tienda;
var productos = data.producto;

var filtrarTienda2 = retornarObjTienda();
var filtrarProductosTienda = retornarProductosTienda();
var arrayidCategorias = retornarIdCategoriaProductosTienda();

function retornarIdCategoriaProductosTienda(){   
    //retorna las categorias del producto de la tienda    
    var arrayidCategoria = filtrarProductosTienda.map(function(cat){
        return cat.id_categoria
    });
    const arrayidCategorias = arrayidCategoria.reduce((acc,item)=>{
        if(!acc.includes(item)){
          acc.push(item);
        }
        return acc;
    },[])   
    //muestra el id sin repetir de las categorias de los productos de la tienda 
    console.log("<retornarIdCategoriaProductosTienda>");
    console.log(arrayidCategorias);
    return arrayidCategorias;
}
//retornarIdCategoriaProductosTienda();
// function filtrarCategoria(){
//     console.log("filtrarProductosTienda");
    
//     //console.log(filtrarProductosTienda);
//     //var filtropc = ["c4","c5"];
//     var ProductoCategoria = "";
//     var arrayProductosdeCategoriasElegidas = [];
//     for(var i=0;i<filtrarProductosTienda.length;i++){
//         for(var j=0;j<arrayidCategorias.length;j++){
//         if(filtrarProductosTienda[i].id_categoria === arrayidCategorias[j]){            
//             arrayProductosdeCategoriasElegidas.push(filtrarProductosTienda[i]);
//         }
//         }
//     }
//     console.log("arrayProductosdeCategoriasElegidas");
//     console.log(arrayProductosdeCategoriasElegidas);
// }
//filtrarCategoria();


function mostrarCatalogoProductosTienda(){ 
    //let url_imagen_tienda = filtrarTienda2.url_imagen_tienda;
    let url_imagen_tienda = "";
    console.log("URL MOSTRADA--->");
    
    console.log(filtrarProductosTienda);
    let catalogo = "";
    let id_producto = "";
    let nombre_producto = "";
    let precio_catalogo = "";
    let precio_oferta = "";
    let imagen_principal = "";
    //var nombre_tienda = filtrarProductosTienda.nombre_tienda;
    for(var j=0;j<filtrarProductosTienda.length;j++){         
        id_producto = filtrarProductosTienda[j].id_producto;
        nombre_producto = filtrarProductosTienda[j].nombre_producto;
        precio_catalogo = filtrarProductosTienda[j].precio_catalogo;
        precio_oferta = filtrarProductosTienda[j].precio_oferta;
        imagen_principal = filtrarProductosTienda[j].imagen_principal;
        url_imagen_tienda = filtrarProductosTienda[j].url_imagen_categoria;

    catalogo +=
    `
    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <a href="#" class="cat-img position-relative overflow-hidden mb-3">
                <img class="cat-img pasaridCategoria" src="${url_imagen_tienda+imagen_principal}" id="${id_producto}" alt="${nombre_producto}">
            </a>
            </div>
            <div class="card-body border-left border-right text-left p-0 pt-1 pb-1">                
                <div class="ml-2 text-left">
                <h6 class="">${nombre_producto}</h6>
                <h6 class="precio-catalogo">S/ ${precio_catalogo}</h6>
                <h6 class="precio-oferta">S/ ${precio_oferta}</h6>                                   
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Comprar</a>
            </div>
        </div>
    </div>`;    
    }    
    return catalogo;
}
//mostrarCatalogoProductosTienda();
function mostrarDatostienda(){ 
var nombre_tienda = filtrarTienda2.nombre_tienda;
var ruc = filtrarTienda2.ruc;
var razon_social = filtrarTienda2.razon_social;   
let datosTienda =
`
<h3 class="font-weight-semi-bold">${nombre_tienda}</h3>               
<p class="lh-sm">RUC: ${ruc}</p>
<p class="lh-sm">Razón Social: ${razon_social}</p>
`;    
return datosTienda;
}
function mostrarBannertienda(){  
    var imagen_banner = filtrarTienda2.imagen_banner;  
    let datosTienda =
    `
    <img src="${imagen_banner}" class="img-fluid" width="100%" alt="">    
    `;    
    return datosTienda;
}
function mostrarLogotienda(){ 
    var imagen_logo = filtrarTienda2.imagen_logo;   
    let datosTienda =
    `
    <img src="${imagen_logo}" class="" alt="">
    `;    
    return datosTienda;
}





export{mostrarBannertienda,mostrarLogotienda,mostrarDatostienda,mostrarCatalogoProductosTienda}