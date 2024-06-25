import { data } from '../model/ms_datos.js';
import { retornarId } from '../model/ms_enlaces.js';
import { retornarProductosTienda } from '../model/ms_filtros.js';
var filtrarProductosTienda = retornarProductosTienda();
var categoriasp = data.categoria;
var productos = data.producto;

function mostrarfiltroPrecio(){    
    try {    
    const precioMenor = filtrarProductosTienda.reduce((prev, cur) =>
    cur.precio_oferta < prev.precio_oferta ? cur : prev
    );    
    const precioMayor = filtrarProductosTienda.reduce((prev, cur) =>
    cur.precio_oferta > prev.precio_oferta ? cur : prev
    );
    var catalogo =
    `
    <output>S/${precioMenor.precio_oferta}</output>
    <input id="show_range" type="range" value="" min="${precioMenor.precio_oferta}" max="${precioMayor.precio_oferta}" oninput="this.nextElementSibling.value = this.value">
    S/<output>${precioMayor.precio_oferta}</output>
    `;
    return catalogo;

    } catch (error) {
        console.error(error);
    }
}
function mostrarFiltroCategoria(){    
    var categorias = "";
    var cantidad = 0;
    //sumar las cantidad del producto con categorias repetidas y mostrar 
    const miCarritoSinDuplicados = filtrarProductosTienda.reduce((acumulador, valorActual) => {
        const elementoYaExiste = acumulador.find(elemento => elemento.id_categoria === valorActual.id_categoria);
        if (elementoYaExiste) {
          return acumulador.map((elemento) => {
            if (elemento.id_categoria === valorActual.id_categoria) {
              return {
                ...elemento,
                cantidad: elemento.cantidad + valorActual.cantidad
              }
            }
      
            return elemento;
          });
        }
      
        return [...acumulador, valorActual];
      }, []);
      console.log("miCarritoSinDuplicados");
      console.log(miCarritoSinDuplicados);

    for(var i=0;i<categoriasp.length;i++){
        for(var j=0;j<miCarritoSinDuplicados.length;j++){
        if(categoriasp[i].id_categoria === miCarritoSinDuplicados[j].id_categoria){  
            console.log(categoriasp[i].nombre_categoria);  
            var nombre_categoria = categoriasp[i].nombre_categoria;
            var id_categoria = categoriasp[i].id_categoria;
            var cantidadp = miCarritoSinDuplicados[j].cantidad;
            categorias +=
            `
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
            <input type="checkbox" class="custom-control-input" id="${id_categoria}">
            <label class="custom-control-label" for="${id_categoria}">${nombre_categoria}</label>
            <span class="">${cantidadp}</span>                    
            </div>            
            `;      
            //arrayProductosdeCategoriasElegidas.push(filtrarProductosTienda[i]);

        }
        }
    }

    return categorias;
}
function mostrarProductoFiltradoporPrecio(){
    //let url_imagen_tienda = filtrarTienda2.url_imagen_tienda;
    var id_tiendax = retornarId();
    
    try {
        //document.getElementById("show_filtroprod").innerHTML = null;
    
        var elem = document.getElementById("show_filtros");        
        elem.onclick = function(){
           
            var range = document.getElementById("show_range").value;
            
            console.log("{ENTRO BOTON FILTROS---}");
            console.log(range);
            var filtrarProductosPrecio = productos.filter(function(prod){                     
                return prod.precio_oferta <= range & prod.id_tienda === id_tiendax       
            });    
            filtrarProductosPrecio = Object(filtrarProductosPrecio);
            console.log("filtrarProductosPrecio---");
            console.log(filtrarProductosPrecio);            
            let catalogo2 = "";
            let id_producto2 = "";
            let nombre_producto2 = "";
            let precio_catalogo2 = "";
            let precio_oferta2 = "";
            let imagen_principal2 = "";
            let url_imagen_tienda2 = "";
            for(var j=0;j<filtrarProductosPrecio.length;j++){ 
                var id_tienda = filtrarProductosPrecio[j].id_tienda;
                if(id_tienda === id_tiendax){      
                id_producto2 = filtrarProductosPrecio[j].id_producto;
                nombre_producto2 = filtrarProductosPrecio[j].nombre_producto;
                precio_catalogo2 = filtrarProductosPrecio[j].precio_catalogo;
                precio_oferta2 = filtrarProductosPrecio[j].precio_oferta;
                imagen_principal2 = filtrarProductosPrecio[j].imagen_principal;
                url_imagen_tienda2 = filtrarProductosPrecio[j].url_imagen_categoria;
        
            catalogo2 +=
            `
            <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <a href="#" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="cat-img pasaridCategoria" src="${url_imagen_tienda2+imagen_principal2}" id="${id_producto2}" alt="${nombre_producto2}">
                    </a>
                    </div>
                    <div class="card-body border-left border-right text-left p-0 pt-1 pb-1">                
                        <div class="ml-2 text-left">
                        <h6 class="">${nombre_producto2}</h6>
                        <h6 class="precio-catalogo">S/ ${precio_catalogo2}</h6>
                        <h6 class="precio-oferta">S/ ${precio_oferta2}</h6>                                   
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Ver Detalle</a>
                        <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Comprar</a>
                    </div>
                </div>
            </div>`;    
            }
            
            document.getElementById("show_filtroprod").innerHTML = catalogo2;
        }
        } 
    } catch (error) {
        
    }

}

export{mostrarfiltroPrecio,mostrarFiltroCategoria,mostrarProductoFiltradoporPrecio}