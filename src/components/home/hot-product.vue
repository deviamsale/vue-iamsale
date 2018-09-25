<!-- Danh sách sản phẩm phổ biến -->
<template>
    <section class="section section-hot-product">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="title">
                        <h3>{{ source.title }}</h3>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="list-hot-product ">
                        <div class="row row-flex" itemscope="" itemtype="http://schema.org/ItemList">
                            <span itemprop="numberOfItems" hidden="">
                                {{ source.data.length }}
                            </span>
                            <div v-for="(item, index) in source.data"
                                 :key="index + '-' + item._id"
                                 class="col-xs-6 col-sm-4 col-md-3 col-flex"
                                 itemprop="itemListElement"
                                 itemscope="" itemtype="http://schema.org/Product">
                                <div class="item-product-thumb">
                                    <div class="product-inner">
                                        <div class="product-image">
                                            <router-link itemprop="url"
                                                         :title="item.name"
                                                         :to="$helper.alias(item.Alias)" >
                                                <img v-if="item.Image && item.Image.path"
                                                     :src="$helper.domain +'/' + item.Image.path"
                                                     :alt="item.name" itemprop="image"/>
                                                <img v-else src="/static/images/product-404.png" itemprop="image"
                                                     :alt="item.name">
                                            </router-link>
                                            <div class="product-btn-groups">
                                                <button class="btn btn-add-item-to-cart"><i
                                                        class="fas fa-shopping-bag"></i>Lưu
                                                    giỏ hàng
                                                </button>
                                                <button class="btn btn-add-item-to-wishlist"><i
                                                        class="fas fa-heart"></i></button>

                                            </div>
                                        </div>
                                        <div class="product-content">
                                            <router-link :to="$helper.alias(item.Alias)"
                                                         :title="item.name"
                                                         itemprop="url"
                                                         class="product-title">
                                                <span itemprop="name">{{ item.name }}</span>
                                            </router-link>
                                            <div class="product-price" itemprop="offers" itemscope=""
                                                 itemtype="http://schema.org/Offer">
                                                <span itemprop="priceCurrency" content="VND"></span>
                                                <span itemprop="price" :content="item.price_sale_web" class="product-price-new">
                                                    {{ item.price_sale_web | money }}đ
                                                </span>
                                            </div>
                                            <div class="product-rate">
                                                <i class="fas fa-star active"></i>
                                                <i class="fas fa-star"></i>
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
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props : ['source']
    }
</script>