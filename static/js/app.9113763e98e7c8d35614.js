webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.itemClass,on:{click:function(e){return t.$emit("toggle")}}},[n("p",{staticClass:"mt-2 text-center small"},[t._v(t._s(t.description))])])},staticRenderFns:[]};var s=n("VU/8")({props:["description","selected"],computed:{itemClass:function(){var t="col border rounded bingo-item";return this.selected?t+" border-white text-white bingo-item--selected":t+" border-primary"}}},a,!1,function(t){n("Yqve")},"data-v-60cc5421",null).exports,o=n("mvHQ"),r=n.n(o),l=n("Zrlr"),c=n.n(l),u=n("wxAW"),m=n.n(u),d=n("0fgV"),v=n.n(d),g=n("Q9Q/"),f=new(function(){function t(){c()(this,t)}return m()(t,[{key:"getBoard",value:function(){var t=localStorage.getItem("board"),e=localStorage.getItem("startedTimestamp");if(t&&e)return{board:JSON.parse(t),timestamp:e};var n=this.createNewBoard(),i=(new Date).toLocaleString("fi-FI");return localStorage.setItem("board",r()(n)),localStorage.setItem("startedTimestamp",i),{board:n,timestamp:i}}},{key:"createNewBoard",value:function(){for(var t=v()(g.bingoItems,{copy:!0}),e=[],n=0;n<t.length&&n<16;n+=4){var i=t.slice(n,n+4);4===i.length&&e.push(i)}return e}},{key:"getSelected",value:function(){var t=localStorage.getItem("selected");return t?JSON.parse(t):[]}},{key:"setSelected",value:function(t){localStorage.setItem("selected",r()(t))}},{key:"getBingos",value:function(t,e){for(var n=0,i=0;i<4;++i){for(var a=0,s=0;s<4;++s)t.some(e(i,s))&&a++;4===a&&n++}for(var o=0;o<4;++o){for(var r=0,l=0;l<4;++l)t.some(e(l,o))&&r++;4===r&&n++}for(var c=[0,3],u=0;u<c.length;u++)for(var m=c[u],d=0,v=0;v<4;++v){var g=v,f=0!==m?m-v:v;t.some(e(g,f))&&d++,4===d&&n++}return n}},{key:"reset",value:function(){localStorage.removeItem("board"),localStorage.removeItem("selected"),localStorage.removeItem("startedTimestamp")}}]),t}()),h={components:{BingoItem:s},data:function(){return{board:[],bingos:0,timestamp:"joskus",selected:[]}},mounted:function(){this.init()},methods:{init:function(){var t=f.getBoard(),e=t.board,n=t.timestamp;this.board=e,this.timestamp=n,this.selected=f.getSelected(),this.bingos=f.getBingos(this.selected,this.itemMatcher)},isSelected:function(t,e){return this.selected.some(this.itemMatcher(t,e))},itemMatcher:function(t,e){return function(n){var i=n.row,a=n.col;return i===t&&a===e}},reset:function(){f.reset(),this.init()},toggle:function(t,e){var n=this,i=this.selected.findIndex(this.itemMatcher(t,e));i>=0?this.selected.splice(i,1):this.selected.push({row:t,col:e}),f.setSelected(this.selected);var a=f.getBingos(this.selected,this.itemMatcher);a>this.bingos?(this.$emit("bingo"),setTimeout(function(){n.bingos=a},5e3)):this.bingos=a}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bingo-board mt-2 container"},[i("div",{staticClass:"row mb-1"},[i("h3",{staticClass:"col-10"},[t._v("Linnanjuhlat-bingo")]),t._v(" "),t.bingos?i("div",{staticClass:"col-2 p-0"},[i("img",{attrs:{src:n("wKQn"),width:"25",height:"auto"}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.bingos>1,expression:"bingos > 1"}],staticClass:"small"},[t._v("×"+t._s(t.bingos))])]):t._e()]),t._v(" "),t._l(t.board,function(e,n){return i("div",{key:"row"+n,staticClass:"row flex-nowrap"},t._l(e,function(e,a){return i("bingo-item",{key:"col"+a,attrs:{description:e,selected:t.isSelected(n,a)},on:{toggle:function(e){return t.toggle(n,a)}}})}),1)}),t._v(" "),i("div",{staticClass:"row mt-2 justify-content-end"},[i("div",[i("i",{staticClass:"small mr-2"},[t._v("Peli aloitettu "+t._s(t.timestamp))])]),t._v(" "),i("button",{staticClass:"btn btn-primary btn-sm mr-1",attrs:{type:"button"},on:{click:t.reset}},[t._v("Uusi peli")])])],2)},staticRenderFns:[]};var b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bingo-overlay"},[e("img",{attrs:{src:n("wKQn")}})])}]};var k={components:{BingoBoard:n("VU/8")(h,p,!1,function(t){n("z8HE")},"data-v-590dbd7a",null).exports,BingoOverlay:n("VU/8")(null,b,!1,function(t){n("qyMp")},"data-v-7ebfaf3e",null).exports},data:function(){return{isBingo:!1}},methods:{showBingo:function(){var t=this;this.isBingo=!0,setTimeout(function(){t.isBingo=!1},5e3)}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("bingo-overlay",{directives:[{name:"show",rawName:"v-show",value:this.isBingo,expression:"isBingo"}]}),this._v(" "),e("bingo-board",{on:{bingo:this.showBingo}})],1)},staticRenderFns:[]};var _=n("VU/8")(k,y,!1,function(t){n("Tori")},"data-v-5bf49083",null).exports,w=n("Tqaz");n("Jmt5"),n("9M+g");i.default.use(w.a),i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:_},template:"<App/>"})},"Q9Q/":function(t,e){t.exports={bingoItems:["So­ta­vete­raani bon­gat­tu","Jo­ku as­tuu hel­mal­le","Juon­ta­ja se­koit­taa ni­met","Katri Nis­kasen puku","Pu­ku on kier­rä­tys­ma­te­riaaleista","Kan­sal­lis­puku","Jo­ku kom­pu­roi jo­nos­sa","Vie­ras unoh­taa odot­taa avec­ciaan kät­te­lyn jäl­keen","Pu­ku rik­koo eti­ket­tiä","Näet ka­ve­rin tai tu­tun","Jaa­rit­te­lu kä­tel­les­sä","Teuvo Hak­karainen bon­gat­tu","Ur­hei­li­ja bon­gat­tu","Näy­te­tään ku­vaa mie­len­osoi­tuk­sesta","Sini­valkoinen asu","Par­vel­la ole­vaa vie­ras­jouk­koa näy­te­tään","Ten­na­rit ja­las­sa","Lot­ta-uni­vor­mu","Vie­ras räp­lää äly­pu­he­lin­taan","Paa­vo Väy­ry­nen bon­gat­tu","Jen­ni Hau­kion asua ihas­tel­laan","Juon­ta­ja ker­too tar­joi­luis­ta","Boo­lin re­sep­tis­tä kes­kus­tel­laan","Sa­maa su­ku­puol­ta ole­va pa­ri","Ta­tu­oin­ti nä­ky­vis­sä","Jo­noon syn­tyy pit­kä vä­li","Kä­si­suu­del­ma"]}},Tori:function(t,e){},Yqve:function(t,e){},qyMp:function(t,e){},wKQn:function(t,e,n){t.exports=n.p+"static/img/sale.6c4feaf.png"},z8HE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9113763e98e7c8d35614.js.map