import { mostrarCatalogoProductosTienda } from '../controller/c_shop.js';
import { mostrarfiltroPrecio,mostrarFiltroCategoria,mostrarProductoFiltradoporPrecio } from '../controller/c_shop_filtros.js';

let shop_catalogo = 
`
<div class="row px-xl-5">
    <!-- Shop Sidebar Start -->
    <div class="col-lg-3 col-md-12">
        <!-- Price Start -->
        <div class="border-bottom mb-3 pb-3">
        <input id="show_filtros" class="btn btn-primary" type="button" value="Aplicar filtros">
            
        </div>
        <!-- Price End -->

        <div class="accordion accordion-flush" id="accordionFlushExample"> 
            <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Precio
                      </button>
                    </h2>
                    <div id="flush-collapseTwo2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div><label for="customRange2" class="form-label">Elegir precio</label></div>
                      `+mostrarfiltroPrecio()+`
                      
                    </div>
            </div>           
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Categorías
                </button>
              </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">`+                                
                mostrarFiltroCategoria()+
                `</div>
            </div>
            
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample">
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Colores
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Tallas
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
        
    </div>
    <!-- Shop Sidebar End -->


    <!-- Shop Product Start -->
    <div class="col-lg-9 col-md-12">
        <div class="row pb-3">
            <div class="col-12 pb-1">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search by name">
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                    <div class="dropdown ml-4">
                        <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                    Sort by
                                </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Latest</a>
                            <a class="dropdown-item" href="#">Popularity</a>
                            <a class="dropdown-item" href="#">Best Rating</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-12" id="show_filtroprod">`+
            mostrarCatalogoProductosTienda()+
            `</div>
            <div class="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-center mb-3">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
    <!-- Shop Product End -->
</div>
`;
function generarShopCatalogo(bodyy){
    const divShopCatalogo = document.createElement('div');
    divShopCatalogo.classList = 'container-fluid pt-5';
    divShopCatalogo.id = 'show_shopcatalogo';
    divShopCatalogo.innerHTML = shop_catalogo;
    bodyy.appendChild(divShopCatalogo);
    bodyy.insertBefore(divShopCatalogo,bodyy.children[3]); 
    
   
    mostrarProductoFiltradoporPrecio();
}
export {generarShopCatalogo}
