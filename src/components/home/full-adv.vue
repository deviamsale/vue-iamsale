<!-- Template quảng cáo full -->
<template>
    <section v-if="source && source.allow_show" class="section-banners">
        <router-link :to="source.info ? $helper.alias(source.info.link) : ''"
                     :title="source.info ? source.info.title : '' ">
            <img :src="$helper.domain + '/' + source.data.path"
                 :alt="source.info ? source.info.description : ''">
        </router-link>
    </section>
</template>
<script>
    export default {
        props : ["source"]
    }
</script>