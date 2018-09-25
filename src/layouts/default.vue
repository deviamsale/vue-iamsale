<template>
    <section id="app" class="main">
        <div id="loading-box" class="text-center">
            <img src="/static/images/loading.gif" />
        </div>
        <div id="fb-root"></div>
        <app-header/>
        <router-view />
        <app-footer/>
    </section>
</template>
<style  scope>
    #loading-box{
        z-index: 1000;
        background: #fff;
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0;
        height: calc( 100% + 3px);
        transition: all .4s ease-out;
        opacity: 1;
        height: 100%;
    }
    #loading-box img{
        margin: 20px auto;
    }
    #loading-box.close{
        opacity: 0;
        display: none;
    }
</style>
<script>
    import AppHeader from '@/layouts/partials/header'
    import AppFooter from '@/layouts/partials/footer'
    export default{
        components : {
            AppHeader,
            AppFooter
        },
        name : 'default',
        mounted(){
            this.$store.state.loading_alias = true;
           this.$store.dispatch('loadDefaultResources')
            console.log("==========Helper===========")
           console.log( this.$helper )
        }
    }
</script>