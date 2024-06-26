let categories =
`
<div class="text-center mb-4">
    <h2 class="section-title px-5"><span class="px-2">Categorías</span></h2>
</div>
<div class="row px-xl-5 pb-3">
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="img/product-20.jpg" alt="">
            </a>
            <h5 class="font-weight-semi-bold m-0">Men's dresses</h5>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="img/cat-2.jpg" alt="">
            </a>
            <h5 class="font-weight-semi-bold m-0">Women's dresses</h5>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="img/cat-3.jpg" alt="">
            </a>
            <h5 class="font-weight-semi-bold m-0">Baby's dresses</h5>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="img/cat-4.jpg" alt="">
            </a>
            <h5 class="font-weight-semi-bold m-0">Accerssories</h5>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="img/cat-5.jpg" alt="">
            </a>
            <h5 class="font-weight-semi-bold m-0">Bags</h5>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 pb-1">
        <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" src="img/cat-6.jpg" alt="">
            </a>
            <h5 class="font-weight-semi-bold m-0">Shoes</h5>
        </div>
    </div>
</div>`;

function generarDivCategories(bodyy){
    const divCategories = document.createElement('div');
    divCategories.classList = 'container-fluid pt-5';
    divCategories.id = 'show_categories';
    divCategories.innerHTML = categories;
    bodyy.appendChild(divCategories);
    bodyy.insertBefore(divCategories,bodyy.children[3]);    
}

export { generarDivCategories };