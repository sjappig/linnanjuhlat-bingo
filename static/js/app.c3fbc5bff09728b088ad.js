webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.itemClass,on:{click:function(e){return t.$emit("toggle")}}},[n("p",{staticClass:"mt-2 text-center small"},[t._v(t._s(t.description))])])},staticRenderFns:[]};var o=n("VU/8")({props:["description","selected"],computed:{itemClass:function(){var t="col border rounded bingo-item";return this.selected?t+" border-white text-white bingo-item--selected":t+" border-primary"}}},i,!1,function(t){n("Yqve")},"data-v-60cc5421",null).exports,s=n("mvHQ"),r=n.n(s),l=n("Zrlr"),u=n.n(l),c=n("wxAW"),d=n.n(c),m=n("0fgV"),v=n.n(m),g=n("Q9Q/"),f=new(function(){function t(){u()(this,t)}return d()(t,[{key:"getBoard",value:function(){var t=localStorage.getItem("board");if(t)return JSON.parse(t);var e=this.createNewBoard();return localStorage.setItem("board",r()(e)),localStorage.setItem("startedTimestamp",(new Date).toLocaleString("fi-FI")),e}},{key:"createNewBoard",value:function(){for(var t=v()(g.bingoItems,{copy:!0}),e=[],n=0;n<t.length&&n<16;n+=4){var a=t.slice(n,n+4);4===a.length&&e.push(a)}return e}},{key:"getSelected",value:function(){var t=localStorage.getItem("selected");return t?JSON.parse(t):[]}},{key:"setSelected",value:function(t){var e=this.getBingos(this.getSelected());return localStorage.setItem("selected",r()(t)),this.getBingos(t)-e>0}},{key:"getBingos",value:function(t){for(var e=0,n=0;n<4;++n){for(var a=0,i=0;i<4;++i)t.includes(100*n+i)&&a++;4===a&&e++}for(var o=0;o<4;++o){for(var s=0,r=0;r<4;++r)t.includes(100*r+o)&&s++;4===s&&e++}return e}},{key:"getTimestamp",value:function(){return localStorage.getItem("startedTimestamp")}},{key:"reset",value:function(){localStorage.removeItem("board"),localStorage.removeItem("selected"),localStorage.removeItem("startedTimestamp")}}]),t}()),p={components:{BingoItem:o},data:function(){return{board:f.getBoard(),selected:f.getSelected(),timestamp:f.getTimestamp()}},methods:{isSelected:function(t,e){var n=this.toItemId(t,e);return this.selected.includes(n)},reset:function(){f.reset(),this.board=f.getBoard(),this.selected=f.getSelected(),this.timestamp=f.getTimestamp()},toggle:function(t,e){var n=this.toItemId(t,e),a=this.selected.indexOf(n);a>=0?this.selected.splice(a,1):this.selected.push(n),f.setSelected(this.selected)&&this.$emit("bingo")},toItemId:function(t,e){return 100*t+e}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bingo-board mt-2 container"},[n("h3",[t._v("Linnanjuhlat-bingo")]),t._v(" "),t._l(t.board,function(e,a){return n("div",{key:"row"+a,staticClass:"row flex-nowrap"},t._l(e,function(e,i){return n("bingo-item",{key:"col"+i,attrs:{description:e,selected:t.isSelected(a,i)},on:{toggle:function(e){return t.toggle(a,i)}}})}),1)}),t._v(" "),n("div",{staticClass:"row mt-2 justify-content-end"},[n("div",[n("i",{staticClass:"small mr-2"},[t._v("Peli aloitettu "+t._s(t.timestamp))])]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-sm mr-1",attrs:{type:"button"},on:{click:t.reset}},[t._v("Uusi peli")])])],2)},staticRenderFns:[]};var k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bingo-overlay"},[e("img",{attrs:{src:n("wKQn")}})])}]};var b={components:{BingoBoard:n("VU/8")(p,h,!1,function(t){n("UtXN")},"data-v-e9c3e530",null).exports,BingoOverlay:n("VU/8")(null,k,!1,function(t){n("znOR")},"data-v-5dcdbd64",null).exports},data:function(){return{isBingo:!1}},methods:{showBingo:function(){var t=this;this.isBingo=!0,setTimeout(function(){t.isBingo=!1},5e3)}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("bingo-overlay",{directives:[{name:"show",rawName:"v-show",value:this.isBingo,expression:"isBingo"}]}),this._v(" "),e("bingo-board",{on:{bingo:this.showBingo}})],1)},staticRenderFns:[]};var _=n("VU/8")(b,y,!1,function(t){n("Tori")},"data-v-5bf49083",null).exports,S=n("Tqaz");n("Jmt5"),n("9M+g");a.default.use(S.a),a.default.config.productionTip=!1,new a.default({el:"#app",components:{App:_},template:"<App/>"})},"Q9Q/":function(t,e){t.exports={bingoItems:["So­ta­vete­raani bon­gat­tu","Jo­ku as­tuu hel­mal­le","Juon­ta­ja se­koit­taa ni­met","Katri Nis­kasen puku","Pu­ku on kier­rä­tys­ma­te­riaaleista","Kan­sal­lis­puku","Jo­ku kom­pu­roi jo­nos­sa","Vie­ras unoh­taa odot­taa avec­ciaan kät­te­lyn jäl­keen","Pu­ku rik­koo eti­ket­tiä","Näet ka­ve­rin tai tu­tun","Jaa­rit­te­lu kä­tel­les­sä","Teuvo Hak­karainen bon­gat­tu","Ur­hei­li­ja bon­gat­tu","Näy­te­tään ku­vaa mie­len­osoi­tuk­sesta","Sini­valkoinen asu","Par­vel­la ole­vaa vie­ras­jouk­koa näy­te­tään","Ten­na­rit ja­las­sa","Lot­ta-uni­vor­mu","Vie­ras räp­lää äly­pu­he­lin­taan","Paa­vo Väy­ry­nen bon­gat­tu","Jen­ni Hau­kion asua ihas­tel­laan","Juon­ta­ja ker­too tar­joi­luis­ta","Boo­lin re­sep­tis­tä kes­kus­tel­laan","Sa­maa su­ku­puol­ta ole­va pa­ri","Ta­tu­oin­ti nä­ky­vis­sä","Jo­noon syn­tyy pit­kä vä­li","Kä­si­suu­del­ma"]}},Tori:function(t,e){},UtXN:function(t,e){},Yqve:function(t,e){},wKQn:function(t,e,n){t.exports=n.p+"static/img/sale.6c4feaf.png"},znOR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c3fbc5bff09728b088ad.js.map