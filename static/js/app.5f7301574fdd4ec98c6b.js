webpackJsonp([1],{"9M+g":function(e,t){},"9dNx":function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.itemClass,on:{click:function(t){return e.$emit("toggle")}}},[n("p",{staticClass:"mt-2 text-center small"},[e._v(e._s(e.description))])])},staticRenderFns:[]};var i=n("VU/8")({props:["description","selected"],computed:{itemClass:function(){var e="col border rounded bingo-item";return this.selected?e+" border-white text-white bingo-item--selected":e+" border-primary"}}},o,!1,function(e){n("Yqve")},"data-v-60cc5421",null).exports,r=n("mvHQ"),s=n.n(r),l=n("Zrlr"),c=n.n(l),u=n("wxAW"),d=n.n(u),m=n("0fgV"),v=n.n(m),p=n("Q9Q/"),f=new(function(){function e(){c()(this,e)}return d()(e,[{key:"getBoard",value:function(){var e=localStorage.getItem("board");if(e)return JSON.parse(e);var t=this.createNewBoard();return localStorage.setItem("board",s()(t)),localStorage.setItem("startedTimestamp",(new Date).toLocaleString("fi-FI")),t}},{key:"createNewBoard",value:function(){for(var e=v()(p.bingoItems,{copy:!0}),t=[],n=0;n<e.length;n+=4){var a=e.slice(n,n+4);4===a.length&&t.push(a)}return t}},{key:"getSelected",value:function(){var e=localStorage.getItem("selected");return e?JSON.parse(e):[]}},{key:"setSelected",value:function(e){localStorage.setItem("selected",s()(e))}},{key:"getTimestamp",value:function(){return localStorage.getItem("startedTimestamp")}},{key:"reset",value:function(){localStorage.removeItem("board"),localStorage.removeItem("selected"),localStorage.removeItem("startedTimestamp")}}]),e}()),g={components:{BingoItem:i},data:function(){return{board:f.getBoard(),selected:f.getSelected(),timestamp:f.getTimestamp()}},methods:{isSelected:function(e,t){var n=this.toItemId(e,t);return this.selected.includes(n)},reset:function(){f.reset(),this.board=f.getBoard(),this.selected=f.getSelected(),this.timestamp=f.getTimestamp()},toggle:function(e,t){var n=this.toItemId(e,t),a=this.selected.indexOf(n);a>=0?this.selected.splice(a,1):this.selected.push(n),f.setSelected(this.selected)},toItemId:function(e,t){return 100*e+t}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bingo-board mt-2 container"},[e._l(e.board,function(t,a){return n("div",{key:"row"+a,staticClass:"row flex-nowrap"},e._l(t,function(t,o){return n("bingo-item",{key:"col"+o,attrs:{description:t,selected:e.isSelected(a,o)},on:{toggle:function(t){return e.toggle(a,o)}}})}),1)}),e._v(" "),n("div",{staticClass:"row mt-2 justify-content-end"},[n("div",[n("i",{staticClass:"small mr-2"},[e._v("Peli aloitettu "+e._s(e.timestamp))])]),e._v(" "),n("button",{staticClass:"btn btn-primary btn-sm mr-1",attrs:{type:"button"},on:{click:e.reset}},[e._v("Uusi peli")])])],2)},staticRenderFns:[]};var h={components:{BingoBoard:n("VU/8")(g,k,!1,function(e){n("iK8V")},"data-v-39f2f466",null).exports},data:function(){return{msg:"Welcome to Your Vue.js App"}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",[this._v("Linnanjuhlat-bingo")]),this._v(" "),t("bingo-board")],1)},staticRenderFns:[]};var S=n("VU/8")(h,b,!1,function(e){n("9dNx")},"data-v-7a940f55",null).exports,I=n("Tqaz");n("Jmt5"),n("9M+g");a.default.use(I.a),a.default.config.productionTip=!1,new a.default({el:"#app",components:{App:S},template:"<App/>"})},"Q9Q/":function(e,t){e.exports={bingoItems:["So­ta­vete­raani bon­gat­tu","Jo­ku as­tuu hel­mal­le","Juon­ta­ja se­koit­taa ni­met","Katri Nis­kasen puku","Pu­ku on kier­rä­tys­ma­te­riaaleista","Kan­sal­lis­puku","Jo­ku kom­pu­roi jo­nos­sa","Vie­ras unoh­taa odot­taa avec­ciaan kät­te­lyn jäl­keen","Pu­ku rik­koo eti­ket­tiä","Näet ka­ve­rin tai tu­tun","Jaa­rit­te­lu kä­tel­les­sä","Teuvo Hak­karainen bon­gat­tu","Ur­hei­li­ja bon­gat­tu","Näy­te­tään ku­vaa mie­len­osoi­tuk­sesta","Sini­valkoinen asu","Par­vel­la ole­vaa vie­ras­jouk­koa näy­te­tään","Ten­na­rit ja­las­sa"]}},Yqve:function(e,t){},iK8V:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5f7301574fdd4ec98c6b.js.map