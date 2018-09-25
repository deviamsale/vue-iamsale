<!-- Cấu trúc trang chủ -->
<template>
    <section class="wrapper">
        <home-slider v-if="slider" :data="slider"/>
        <section class="section section-out-services">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="item-service">
                            <div class="item-service-image">
                                <img src="/static/images/icons/service-1.png" alt="">
                            </div>
                            <div class="item-service-content">
                                TƯ VẪN MIỄN PHÍ 24/7
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="item-service">
                            <div class="item-service-image">
                                <img src="/static/images/icons/service-2.png" alt="">
                            </div>
                            <div class="item-service-content">
                                ĐỔI TRẢ HÀNG TRONG VÒNG 30 NGÀY
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="item-service">
                            <div class="item-service-image">
                                <img src="/static/images/icons/service-3.png" alt="">
                            </div>
                            <div class="item-service-content">
                                MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="section section-hot-product">
            <div class="container">
                <div class="row">
                    <template v-if="popular_products && popular_products.data">
                        <div class="col-xs-12">
                            <div class="title">
                                <h3>{{popular_products.title}}</h3>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="list-hot-product ">
                                <div class="row row-flex" itemscope="" itemtype="http://schema.org/ItemList">
                                    <span itemprop="numberOfItems" hidden="">{{ popular_products.data.length }}</span>

                                    <div v-for="(item, index) in popular_products.data"
                                         :key="index"
                                         class="col-xs-6 col-sm-4 col-md-3 col-flex" itemprop="itemListElement"
                                         itemscope="" itemtype="http://schema.org/Product">

                                        <div class="item-product-thumb">
                                            <div class="product-inner">
                                                <div class="product-image">
                                                    <router-link :to="$helper.alias(item.Alias)">
                                                        <img :src="$store.state.domain + '/' + item.Image.path"
                                                             itemprop="image"
                                                        >
                                                    </router-link>
                                                    <div class="product-btn-groups">
                                                        <button class="btn btn-add-item-to-cart">
                                                            <i class="fas fa-shopping-bag"></i>
                                                            Lưu giỏ hàng
                                                        </button>
                                                        <button class="btn btn-add-item-to-wishlist">
                                                            <i class="fas fa-heart"></i>
                                                        </button>

                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <router-link itemprop="url" :to="$helper.alias(item.Alias)"
                                                                 :title="item.name" class="product-title">
                                                        <span itemprop="name">{{item.name}}</span>
                                                    </router-link>
                                                    <div class="product-price" itemprop="offers" itemscope=""
                                                         itemtype="http://schema.org/Offer">
                                                        <span itemprop="priceCurrency" content="VND"></span>
                                                        <span itemprop="price" :content="item.price_sale_web"
                                                              class="product-price-new">
                                                      {{item.price_sale_web | money }}đ
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
                    </template>
                    <!-- adv --->
                    <div v-if="advs && advs.allow_show" class="col-xs-12">
                        <div class="list-hot-product-banners">
                            <div class="row">
                                <div v-for="(item, index) in advs.data"
                                     class="col-xs-12 col-sm-6">
                                    <router-link :to="$helper.alias(item.info ? item.info.link : '#')"
                                                 :title="item.info ? item.info.title : ''"
                                                 target="_blank">
                                        <img :src="$store.state.domain + '/' + item.path" :alt="item.info ? item.info.description : ''">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end :adv -->
                </div>
            </div>
        </section>
        <!--<tab-product v-if="product_tabs" :tab_data="product_tabs" />-->
        <full-adv v-if="$store.state.default_data" :source="$store.state.default_data.full_adv" />
        <hot-product v-if="$store.state.default_data && $store.state.default_data.hot_products" :source="$store.state.default_data.hot_products" />
        <home-testimonial v-if="$store.state.default_data" :source="$store.state.default_data.feedback" />
        <home-post v-if="$store.state.default_data" :source="$store.state.default_data.homepost" />
        <home-subscriber v-if="$store.state.default_data && $store.state.default_data.form_subscribe" :source="{ fields : $store.state.default_data.form_subscribe, setting : $store.state.default_data.form_subscribe_background }" />
    </section>
</template>
<script>
    import HomeSlider from '@/components/home/slider'
    import PopularProduct from '@/components/home/popular-product'
    import TabProduct from '@/components/home/product-tabs'
    import FullAdv from '@/components/home/full-adv'
    import HotProduct from '@/components/home/hot-product'
    import HomeTestimonial from '@/components/home/testimonial'
    import HomePost from '@/components/home/post'
    import HomeSubscriber from '@/components/home/subscriber';

    export default {
        components: {
            FullAdv,
            HomeSlider,
            PopularProduct,
            TabProduct,
            HotProduct,
            HomeTestimonial,
            HomePost,
            HomeSubscriber
        },
        computed: {
            slider() {
                return this.$store.state.default_data ? this.$store.state.default_data.slider : null;
            },
            popular_products() {
                return this.$store.state.default_data ? this.$store.state.default_data.popularproduct : null;
            },
            advs() {
                return this.$store.state.default_data ? this.$store.state.default_data.adv : null;
            },
            product_tabs() {
                return this.$store.state.default_data ? this.$store.state.default_data.tabproduct : null;
            },
            full_adv(){
                return this.$store.state.default_data ? this.$store.state.default_data.full_adv : null;
            }
        },
        created() {
            this.$store.dispatch('loadPageResource', '')
        },
        mounted() {
            console.log($.layerSlider)
        }
    }
</script>