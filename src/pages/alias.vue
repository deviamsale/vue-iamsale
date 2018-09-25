<!-- Chuyển hướng hiện thị theo alias -->
<template>
    <div>
        <template v-if="!$store.state.loading_alias">
            <page404  v-if="!alias.alias_data" />
            <template v-else>
                <!-- switch page -->
                <template v-if="alias.alias_data.type == 'page' ">
                    <template v-if="$helper.page_structs.indexOf(alias.alias_object.type) !== -1">
                        <post-category v-if="alias.alias_object.type == 'news'" />
                        <about v-if="alias.alias_object.type == 'about'" />
                        <contact v-if="alias.alias_object.type == 'contact'" />
                        <product-category  v-if="alias.alias_object.type == 'product'" />
                    </template>
                    <template v-else>
                        <page  />
                    </template>

                </template>
                <template v-else>
                    <post-single v-if="alias.alias_data.type == 'post'" :source="alias" />
                    <product-single v-if="alias.alias_data.type == 'product'" :source="alias" />
                </template>
                <!-- end switch page -->
            </template>

        </template>

    </div>
</template>
<script>
    /** component chung */
    import Page404 from '@/components/_404'
    import Page from '@/components/page'
    import Contact from '@/components/contact'
    import About from '@/components/about'
    /** Bài viết */
    import PostSingle from '@/components/post/post-single'
    import PostCategory from '@/components/post/post-category'
    import Posts from '@/components/post/posts'
    /** Sản phẩm */
    import ProductSingle from '@/components/product/product-single'
    import ProductCategory from '@/components/product/product-category'
    import Products from '@/components/product/products'
    import Cart from '@/components/product/cart'
    import Checkout from '@/components/product/checkout'
    import Favorite from '@/components/product/favorite'
    import Orders from '@/components/product/orders'
    /** User */
    import Login from '@/components/user/login'
    import ChangePassword from '@/components/user/change-password'
    import Profile from '@/components/user/profile'
    export default {
        components:{
            Page,
            Page404,
            Contact,
            About,
            PostSingle,
            PostCategory,
            Posts,
            ProductSingle,
            ProductCategory,
            Products,
            Cart,
            Checkout,
            Favorite,
            Orders,
            Login,
            ChangePassword,
            Profile,
        },
        computed:{
            alias(){
                return this.$store.state.alias_data;
            }
        },
        created(){
            this.$store.dispatch('loadPageResource', this.$route.params.alias)
        },
        watch:{
            alias( new_val ){

            }
        }
    }
</script>