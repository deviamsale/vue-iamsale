const helper = {
    domain : $('body').data('domain'),
    page_structs : ['news', 'contact', 'about', 'product'],
    getSEOTitle( title, store ){
        if( store.state.default_data.default_meta.title ){
            return title + ' | ' + store.state.default_data.default_meta.title;
        }
        return title;
    },
    alias( alias ){
        if( alias.length ){
            if( alias[0] == '/' ){
                alias = alias.substring(1);
            }
        }
        if( alias != '' && alias != '#' ){
            return {name: 'alias', params: {alias : alias } }
        }
        return alias;
    },
    clone( object ){
        try{
            return JSON.parse( JSON.stringify( object ) );
        }catch(e){
            return null;
        }
    }
}
export default helper