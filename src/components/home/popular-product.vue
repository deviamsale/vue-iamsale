<!-- sản phẩm nổi bật -->
<template>
    <section v-if="data" class="section section-hot-product">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="title">
                        <h3>{{data.title}}</h3>
                    </div>
                </div>
                <!--<pre>-->
                    <!--{{ data }}-->
                <!--</pre>-->
                <!--<div class="col-xs-12">-->
                    <!--<div class="list-hot-product ">-->
                        <!--<div class="row row-flex" itemscope="" itemtype="http://schema.org/ItemList">-->
                            <!--<span itemprop="numberOfItems" hidden="">{{ data.data.length }}</span>-->
                            <!--<div v-for="(item, index) in data.data" class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"-->
                                 <!--itemscope="" itemtype="http://schema.org/Product">-->
                                <!--<div class="item-product-thumb">-->
                                    <!--<div class="product-inner">-->
                                        <!--<div class="product-image">-->
                                            <!--<vue-router itemprop="url" :to="item.alias">-->
                                                <!--<img :src="$store.state.domain + '/' + item.Image.path" itemprop="image"-->
                                                     <!--:alt="item.name">-->
                                            <!--</vue-router>-->
                                            <!--<div class="product-btn-groups">-->
                                                <!--<button class="btn btn-add-item-to-cart"><i class="fas fa-shopping-bag"></i>Lưu-->
                                                    <!--giỏ hàng</button>-->
                                                <!--<button class="btn btn-add-item-to-wishlist"><i class="fas fa-heart"></i></button>-->

                                            <!--</div>-->
                                        <!--</div>-->
                                        <!--<div class="product-content">-->
                                            <!--<vue-router itemprop="url" :to="item.alias" class="product-title">-->
                                                <!--<span itemprop="name">{{item.name}}</span>-->
                                            <!--</vue-router>-->
                                            <!--<div class="product-price" itemprop="offers" itemscope=""-->
                                                 <!--itemtype="http://schema.org/Offer">-->
                                                <!--<span itemprop="priceCurrency" content="VND"></span>-->
                                                <!--<span itemprop="price" :content="item.price_sale_web" class="product-price-new">-->
                                                      <!--{{item.price_sale_web | money }}đ-->
                                                <!--</span>-->
                                            <!--</div>-->
                                            <!--<div class="product-rate">-->
                                                <!--<i class="fas fa-star active"></i>-->
                                                <!--<i class="fas fa-star"></i>-->
                                                <!--<i class="fas fa-star"></i>-->
                                                <!--<i class="fas fa-star"></i>-->
                                                <!--<i class="fas fa-star"></i>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->

            </div>
        </div>
    </section>
</template>
<script>
    import HomeAdv from '@/components/home/adv'
    export default {
        props: [ 'data' ]
    }
</script>