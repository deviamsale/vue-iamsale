<template>
    <section v-if="source.fields.allow_show"
             :style="{ 'background-image' : source.setting.data.background_image.path ? 'url(' + $helper.domain + '/' + source.setting.data.background_image.path + ')' : '', 'background-color' : source.setting.data.background_color ? source.setting.data.background_color : '' }"
             id="subscriber_news" class="section section-subscribe">

        <div class="container" >
            <form novalidate="novalidate" class="form-subscribe vf-form-pristine vf-form-invalid vf-form-touched">
                <div class="form-subscribe-wrap row">

                    <div class="col-xs-12 col-sm-6 col-md-5">
                        <label>{{ source.fields.data.title }}</label>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-7">
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-control input-lg" placeholder="Nhập địa chỉ email ...">
                                <span class="input-group-btn">
                                            <button class="btn btn-default btn-lg">
                                                {{ source.fields.data.btn }}
                                            </button>
                                        </span>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </section>
</template>
<script>
    export default {
        props : ['source']
    }
</script>