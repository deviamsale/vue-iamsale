
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';
Vue.use( Vuex )
const createStore = () => {
    return new Vuex.Store({
        state: {
            default_data : null,
            alias_data : {},
            api : $('body').data('api'),
            domain : $('body').data('domain'),
            loading_alias : false,
        },
        mutations: {

        },
        actions: {
            /** Tải tài nguyên mặc định cho layout */
             async loadDefaultResources({ state }){
                $('#loading-box').removeClass('close');
                 var send_data = {
                     resource_filters : [
                         "logo",
                         "favicon",
                         "default_meta",
                         "header_text",
                         "search_categories",
                         "gov",
                         "hotline",
                         "email",
                         "address",
                         "copyright",
                         "social",
                         "feedback",
                         "default_meta"

                     ],
                     prefix_resources : [
                         "menu",
                         "footer",
                     ]
                 }
                 var headers = {
                    Domain : state.domain
                 }
                /** home page */
                const home_resources = [
                    "slider",
                    "popularproduct",
                    "adv",
                    "full_adv",
                    "hot_products",
                    "policy",
                    "banners",
                    "tabproduct",
                    "brand",
                ]
                const home_prefix = [
                    "home",
                    "form_subscribe"
                ]
                home_resources.forEach((i)=>{
                    if( send_data.resource_filters.indexOf( i ) === -1 ){
                        send_data.resource_filters.push(i)
                    }
                })
                home_prefix.forEach((i)=>{
                    if( send_data.prefix_resources.indexOf( i ) === -1 ){
                        send_data.prefix_resources.push(i)
                    }
                })
                /** --- end home page ----*/
               var res = await axios.post( state.api + 'page-data/resources', send_data, { headers : headers })

                res = res.hasOwnProperty('data') ? res.data : {}
                if(res.success){
                    state.default_data = res.data ? res.data : {};
                }
                setTimeout(()=>{
                    $('#loading-box').addClass('close');
                    $("html, body").animate({ scrollTop: 0 }, 500);
                }, 100)
            
            },
            /** Tải tài nguyên cho trang */
            async loadPageResource({state}, page){
                var send_data = {
                    resource_filters : [],
                    prefix_resources : []
                }
                switch ( page ){
                    /** load data trang chủ */
                    // case  '' :
                    //     send_data.resource_filters = [
                    //         "slider",
                    //         "popularproduct",
                    //         "adv",
                    //         "policy",
                    //         "banners",
                    //         "tabproduct",
                    //         "brand"
                    //     ];
                    //     send_data.prefix_resources = [
                    //         "home",
                    //         "form_subscribe"
                    //     ];
                    // break;
                    default:

                        break;
                }
                if( (send_data.resource_filters.length == 0 &&  send_data.prefix_resources == 0 ) && page === '' ){ return }

                send_data.alias = page
                var headers = {
                    Domain : state.domain
                }
                $('#loading-box').removeClass('close');
                state.loading_alias = true;
                if( page !== '' ){
                    var res = await axios.post( state.api + 'page-data/alias-resources', send_data, { headers : headers })
                    res = res.hasOwnProperty('data') ? res.data : {}
                    if( res.success ){
                        state.alias_data = res.data
                    }
                }

                state.loading_alias = false;
                setTimeout(()=>{
                    $('#loading-box').addClass('close');
                    $("html, body").animate({ scrollTop: 0 }, 500);
                }, 100)

            }
        }
    })
}
export default createStore