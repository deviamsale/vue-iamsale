<!-- Cấu trúc trang chi tiết bài viết -->
<template>
    <div>
        <pre>
            {{ source }}
        </pre>
        <h1>Chi tiết bài viết</h1>
    </div>
</template>
<script>
    export default {
        props: ['source'],
        metaInfo() {
            return {
                title: this.source.alias_object.name,
                titleTemplate: '%s | ' + ( this.source.seo ? this.source.seo.data.meta_title : ''),
                meta:[
                    {
                        'property': 'og:title',
                        'content': this.source.alias_object.name,
                        'template': '%s | ' + ( this.source.seo ? this.source.seo.data.meta_title : '')
                    },
                    {
                        'property': 'og:description',
                        'content': this.source.alias_object.description,
                    }
                ]
            }
        },
        computed: {

        },
        created() {
            console.log(this.source)
        }
    }
</script>