<!-- template product tabs -->
<template>
    <section v-if="tab_data.allow_show" class="section section-categories " id="tab-list-product">
        <div class="container">
            <div class="row ">
                <div class="col-xs-12">
                    <div class="title">
                        <h3>{{ tab_data.title }}</h3>
                    </div>
                </div>
                <div class="col-xs-12 ">
                    <ul class="nav nav-pills">
                        <li v-for="(tab, tab_index) in tab_data.data.tab_labels"
                            role="presentation" :class="{  active : current_tab == tab }">
                            <a href="#tab-new-product-0" role="tab" data-toggle="tab">{{ tab }}</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tab-new-product-0">
                            <div class="list-tab-product">
                                <div class="row row-flex" itemscope="" itemtype="http://schema.org/ItemList">
                                    <span itemprop="numberOfItems" hidden="">6</span>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/01.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/02.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/03.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/04.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/05.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/06.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/07.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/08.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade " id="tab-new-product-1">
                            <div class="list-tab-product">
                                <div class="row row-flex" itemscope="" itemtype="http://schema.org/ItemList">
                                    <span itemprop="numberOfItems" hidden="">6</span>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/01.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/02.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/03.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/04.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/05.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/06.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/07.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">
                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan">
                                                        <img src="/static/images/products/08.jpg" itemprop="image"
                                                             alt="Áo cột eo">
                                                    </a>
                                                    <div class="product-btn-groups">

                                                        <button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu
                                                            giỏ hàng</button>
                                                        <button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <a itemprop="url" href="ao-thun-in-hinh-co-tron-tay-ngan"
                                                       class="product-title">
                                                        <span itemprop="name">Áo thun in hình cổ tròn</span>
                                                    </a>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" content="220000" class="product-price-new">
                                                                    220.000đ
                                                                </span>
                                                        <span itemprop="price" content="220000" class="product-price-old">
                                                                    320.000đ
                                                                </span>
                                                    </div>
                                                    <div class="product-rate">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star active"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade " id="tab-new-product-3">
                            <div class="list-tab-product">
                                <div class="row row-flex">
                                    <div class="col-xs-12">
                                        <div class="text-center">
                                            <h3>Chưa có sản phẩm</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['tab_data'],
        data(){
            return {
                current_tab : ''
            }
        },
        mounted(){
            if( this.data.tab_labels.length ){
                alert(12)
                this.current_tab = this.data.tab_labels.length ? this.data.tab_labels[0] : '';
            }
        }
    }
</script>