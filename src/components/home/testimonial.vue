<!-- section-testimonial -->
<template>
    <section v-if="source.allow_show" class="section-testimonial">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="title">
                        <h3>{{ source.title }}</h3>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="list-testimonial" id="list-testimonial">
                        <div v-for="(item, index) in source.data" :key="index" class="item">
                            <div class="item-user">
                                <div class="item-avatar">
                                    <img v-if="item.image.path" :src="$helper.domain + '/' + item.image.path" :alt="item.name">
                                </div>
                                <div class="item-info">
                                    <div class="item-name">{{item.name}}</div>
                                    <div class="item-position">{{item.position}}</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="item-content-quote">
                                    <img src="/static/images/icons/quote.png" alt="">
                                </div>
                                <div class="item-content-text">
                                    <p v-html="item.content"></p>
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