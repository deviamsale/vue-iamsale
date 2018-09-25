<!-- home post -->
<template>
    <section v-if="source.allow_show" class="section section-posts">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="title">
                        <h3>
                           {{ source.title }}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="list-home-post" >
                <div class="row row-flex" itemscope="" itemtype="http://schema.org/ItemList">
                    <div v-for="(item, index) in source.data" class="col-xs-12 col-sm-6 col-md-4 col-flex">
                        <div class="item-post" itemscope=""
                             itemtype="http://schema.org/Article">
                            <div class="item-post-inner">
                                <router-link :to="$helper.alias(item.alias)"
                                            class="item-post-image">
                                    <img v-if="item.photo && item.photo.path"
                                         :src="$helper.domain + '/' + item.photo.path"
                                         :alt="item.name">
                                    <img v-else src="/static/images/product-404.png" />
                                </router-link>
                                <div class="item-post-content">
                                    <div class="item-post-created">
                                        <div class="day">{{ item.created_at | dd }}</div>
                                        <div class="month">{{ item.created_at | mm-yyyy }}</div>
                                        <router-link itemprop="name" :to="$helper.alias(item.alias)"
                                                     class="item-post-title">
                                           {{ item.name }}
                                        </router-link>
                                    </div>
                                    <div itemprop="description" class="item-post-description" data-max-line="3">
                                        <span class="ellip" v-html="item.description">

                                        </span>
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