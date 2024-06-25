import {data} from '../model/ms_datos.js';
import { retornarId } from '../model/ms_enlaces.js';
var categoria = data.categoria;
var producto = data.producto; 

function buscarUrlCategoria(){
    const id_categoria = retornarId(); 
    for(var i=0;i<categoria.length;i++){
        //validar si encuentra el nombre de la url            
        if(id_categoria === categoria[i].id_categoria){            
            var url_imagen_categoria = categoria[i].url_imagen_categoria;   
            return url_imagen_categoria;break;    
        }
    }
}

function generarGaleriaDeCategoria(){
    const id_categoria = retornarId(); 
    var url_imagen_categoria = buscarUrlCategoria();  
    var divCategorias="";   
    for(var i=0;i<producto.length;i++){
        //validar si encuentra el id_categoria en producto            
        if(id_categoria === producto[i].id_categoria){            
            var id_producto = producto[i].id_producto;
            var nombre_producto = producto[i].nombre_producto;
            var precio_catalogo = producto[i].precio_catalogo; 
            var precio_oferta = producto[i].precio_oferta;
            var precio_oferta = producto[i].precio_oferta;
            //var url_imagen_categoria = producto[i].url_imagen_categoria;
            var imagen_principal = producto[i].imagen_principal;
            divCategorias += 
            `
            <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <a href="#" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="cat-img pasaridCategoria" src="${url_imagen_categoria+imagen_principal}" id="${id_producto}" alt="${nombre_producto}">
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
            </div>
            `;
        }
    }
    return divCategorias;
}

let categorym =
`
<div class="col-lg-4 col-md-6 col-sm-12 pb-1">
    <div class="card product-item border-0 mb-4">
        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img class="img-fluid w-100" src="img/product-2.jpg" alt="">
        </div>
        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div class="d-flex justify-content-center">
                <h6>$123.00</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
            </div>
        </div>
        <div class="card-footer d-flex justify-content-between bg-light border">
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
            <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
        </div>
    </div>
</div>
`;

export {generarGaleriaDeCategoria,buscarUrlCategoria}