<!-- template cho slider -->
<template>
    <section v-if="data && data.allow_show" class="slider">
        <div id="layerslider" style="width:1920px;height:650px;" data-navbar="/static/vendor/layerslider/skins/">
            <div class="ls-slide"
                v-for="(item, index) in data.data"
                data-ls="slidedelay:5000;  transition2d: all;timeshift:-1000;">
                    <img :src="$store.state.domain + '/' + item.path" :title="item.info.title" class="ls-bg" alt="Slide background" />
                <a href="#" class="ls-l" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 1000000"></a>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
       props:["data"],
       
       mounted() {
          if ($('#layerslider').length) {
                var slider = $('#layerslider');
                slider.layerSlider({
                    skin: 'v5',
                    autoPlayVideos: false,
                    skinsPath: slider.data('navbar'),
                    navButtons: true,
                    navStartStop: true,
                    hoverPrevNext: false,
                    hoverBottomNav: false,
                    touchNav: true,
                    navStartStop: false,
                    responsive : true,
                    showBarTimer: true,
                    showCircleTimer: true,
                });
            }
       },
    }
</script>