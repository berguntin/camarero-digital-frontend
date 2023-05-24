(function(){"use strict";var t={6057:function(t,e,r){var a=r(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav-component"),e("router-view"),t.error?e("app-error",{attrs:{error:t.error}}):t._e()],1)},o=[],s=function(){var t=this,e=t._self._c;return e("header",[e("nav",[e("router-link",{attrs:{to:"/",alt:"ir al inicio"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{alt:"ver el menú",to:"/menu"}},[t._v("Menu")]),t._v(" | "),e("router-link",{attrs:{name:"carrito",alt:"ver el carrito",to:"/cart"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-basket-shopping"}}),e("small",[t._v(t._s(t.productsInCart))])],1),e("span",{staticClass:"table-id"},[t._v("Mesa: "+t._s(t.getTableID))])],1)])},i=[],c=r(3822),l={name:"NavComponent",data(){return{productsInCart:void 0}},computed:{...(0,c.Se)(["getNumberOfProductsInCart","getTableID"])},watch:{getNumberOfProductsInCart(t){this.productsInCart=t}}},u=l,d=r(1001),p=(0,d.Z)(u,s,i,!1,null,null,null),g=p.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"error-message"},[t._v(" "+t._s(t.translateError)+" ")])},h=[],v={name:"AppError",props:{error:Error},computed:{translateError(){return"TypeError"===this.error.name?"Error de conexion":this.error.message}}},f=v,_=(0,d.Z)(f,m,h,!1,null,"8b0a0576",null),C=_.exports,b={name:"App",components:{NavComponent:g,AppError:C},computed:{...(0,c.rn)(["error"])}},I=b,y=(0,d.Z)(I,n,o,!1,null,null,null),O=y.exports,S=r(2631),T=function(){var t=this;t._self._c;return t._m(0)},E=[function(){var t=this,e=t._self._c;return e("main",{staticClass:"container"},[e("h1",[t._v("Bienvenid@ a la app")]),e("p",[t._v("Para utilizar las funcionalidades de la misma, debes seleccionar una mesa escaneando el QR ")]),e("div",{staticClass:"qr-scaner"},[e("div",{staticClass:"corner top-left"}),e("div",{staticClass:"corner top-right"}),e("div",{staticClass:"corner bottom-left"}),e("div",{staticClass:"corner bottom-right"}),e("video",{attrs:{id:"preview"}})])])}],D=(r(7658),r(851)),A=r.n(D),P={name:"HomeView",methods:{async doLogin(t){await this.$store.dispatch("askForToken",t),this.$router.push("/menu")},async goTo(t){try{const e=new URL(t);if("http://localhost:8080"===e.origin){const t=e.searchParams.get("tableID");await this.doLogin(t)}}catch(e){throw new Error(e)}},setupCamera(){let t=document.getElementById("preview");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(e){t.srcObject=e,t.setAttribute("playsinline",!0),t.play(),requestAnimationFrame(a)}));const e=document.createElement("canvas"),r=e.getContext("2d"),a=()=>{if(t.readyState===t.HAVE_ENOUGH_DATA){e.height=t.videoHeight,e.width=t.videoWidth,r.drawImage(t,0,0,e.width,e.height);let a=r.getImageData(0,0,e.width,e.height),n=A()(a.data,a.width,a.height);n&&(t.srcObject.getTracks().forEach((t=>t.stop())),t.srcObject=null,t.remove(),this.goTo(n.data))}requestAnimationFrame(a)}}},mounted(){this.setupCamera()}},F=P,w=(0,d.Z)(F,T,E,!1,null,"c01f49bc",null),k=w.exports,R=function(){var t=this,e=t._self._c;return e("main",[e("h2",[t._v("Carrito")]),t.refreshCartcount<1?e("section",[e("span",[t._v("No hay productos en el carrito...")]),e("router-link",{staticClass:"router-link",attrs:{to:"/menu"}},[t._v("¿Tienes hambre? Pide algo!")])],1):e("app-cart",{attrs:{cart:t.getProductsInCart,total:t.getCartTotalAmount}}),t.pushingOrder?e("div",{staticClass:"sending-order"},[t._v("Enviando pedido"),e("span",{staticClass:"loading"},[t._v(".")])]):t._e(),t.thereAreOrders?e("app-order"):t._e()],1)},N=[],U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._l(t.cart,(function(t){return e("product-cart-card",{key:t.id,attrs:{product:t}})})),e("div",{staticClass:"total-amount"},[t._v(" Total: "+t._s(t.total.toFixed(2))+"€ ")]),e("button",{staticClass:"submit-order",on:{click:t.submitOrder}},[t._v("Realizar pedido")])],2)},q=[],x=function(){var t=this,e=t._self._c;return e("section",{staticClass:"product-card"},[e("article",{staticClass:"product-details"},[e("h2",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),e("div",{staticClass:"product-quantity-control"},[e("button",{staticClass:"quantity-button",on:{click:function(e){return t.substractQuantityFromCart({product:t.product})}}},[t._v("-")]),e("span",{staticClass:"product-quantity"},[t._v(" "+t._s(t.product.quantity))]),e("button",{staticClass:"quantity-button",on:{click:function(e){return t.addQuantityFromCart({product:t.product})}}},[t._v("+")])]),e("p",{staticClass:"product-total-price"},[t._v(t._s((t.product.price*t.product.quantity).toFixed(2))+"€")])]),e("button",{staticClass:"delete-button",on:{click:function(e){return t.deleteProductFromCart({product:t.product})}}},[e("font-awesome-icon",{staticClass:"product-icon",attrs:{icon:"fa-solid fa-trash"}})],1)])},Z=[],j=r(7749),Q={name:"ProductCartCard",components:{FontAwesomeIcon:j.GN},props:{product:Object},methods:{...(0,c.nv)(["deleteProductFromCart","addQuantityFromCart","substractQuantityFromCart"])}},L=Q,H=(0,d.Z)(L,x,Z,!1,null,"3fd0af4c",null),M=H.exports,G={name:"AppCart",components:{ProductCartCard:M},props:{cart:Array,total:Number},methods:{...(0,c.nv)(["submitOrder"])}},J=G,B=(0,d.Z)(J,U,q,!1,null,"711c66ae",null),V=B.exports,z=(r(6882),function(){var t=this,e=t._self._c;return e("section",{staticClass:"orders container"},[e("h5",[t._v("Pedidos realizados")]),t._l(this.getOrders.toReversed(),(function(r){return e("table",{key:r.id},[e("thead",[e("tr",[e("td",{style:{color:t.calculateTimeFromOrder(r.date)<10?"green":t.calculateTimeFromOrder(r.date)<20?"orange":"red"}},[t._v(" Hace "+t._s(t.calculateTimeFromOrder(r.date))+" min ")]),e("td",{staticClass:"order-status",style:{color:"received"===r.status?"green":"preparing"===r.status?"orange":"black"}},[t._v(" "+t._s(t.translateStatus(r.status))+" ")])])]),e("tbody",t._l(r.items,(function(r,a){return e("tr",{key:a},[e("td",{attrs:{colspan:"2"}},[t._v(t._s(r.name))])])})),0),e("tfoot",[e("tr",[e("td",[t._v("Importe")]),e("td",[t._v(t._s(r.totalPrice)+" €")])])])])})),e("button",{staticClass:"submit-payment"},[t._v("Pagar "+t._s(t.ordersTotalAmount)+" €")])],2)}),$=[],K={name:"AppOrder",data(){return{interval:null}},computed:{...(0,c.rn)(["tableID","orders"]),...(0,c.Se)(["getOrders"]),ordersTotalAmount(){if(this.getOrders&&this.getOrders.length>1){const t=this.getOrders.map((t=>t.totalPrice)),e=t.reduce(((t,e)=>t+e),0),r=e.toFixed(2);return r}return 1===this.getOrders.length?this.getOrders.map((t=>t.totalPrice))[0]:0}},methods:{calculateTimeFromOrder(t){const e=new Date,r=new Date(t),a=e-r,n=Math.floor(a/6e4);return n},...(0,c.nv)(["updateOrderStatus"]),startUpdatingOrders(){this.interval=setInterval((()=>{this.updateOrderStatus(this.tableID)}),3e4)},translateStatus(t){switch(t){case"sent":return"enviado";case"received":return"recibido";case"preparing":return"en preparacion....";case"served":return"servido!";case"payed":return"pagado";default:}}},created(){this.startUpdatingOrders()},beforeDestroy(){clearInterval(this.interval)}},Y=K,W=(0,d.Z)(Y,z,$,!1,null,"e5805782",null),X=W.exports,tt={name:"CartView",components:{AppCart:V,RouterLink:S.rH,AppOrder:X},computed:{...(0,c.Se)(["getProductsInCart","getNumberOfProductsInCart","getCartTotalAmount","getOrders"]),...(0,c.rn)(["pushingOrder"]),refreshCartcount(){return this.getNumberOfProductsInCart},thereAreOrders(){return this.getOrders.length>0}}},et=tt,rt=(0,d.Z)(et,R,N,!1,null,"4b7fb1da",null),at=rt.exports,nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("app-filter"),e("div",{staticClass:"products"},[t.fetchingData?e("span",[t._v("Cargando productos...")]):t._e(),t._l(t.filter,(function(t){return e("AppProduct",{key:t.id,attrs:{product:t}})}))],2)],1)},ot=[],st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-card"},[e("div",{staticClass:"product-header"},[e("div",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),"Bebidas"!=t.product.category?e("div",{staticClass:"distintive-icon"},[t.product.vegan?e("span",[t._v("🥦")]):t._e(),t.product.vegetarian&&!t.product.vegan?e("span",[t._v("🥕")]):t._e()]):t._e()]),e("div",{staticClass:"product-description"},[t._v(t._s(t.product.description))]),e("div",{staticClass:"product-price"},[t._v(t._s(t.product.price)+" €")]),e("div",{staticClass:"product-controls"},[e("div",{staticClass:"product-quantity"},[e("label",{attrs:{for:"quantity"}},[t._v("Cantidad:")]),e("button",{on:{click:t.subtractQuantity}},[t._v("-")]),e("input",{attrs:{type:"number",name:"quantity",id:"quantity",step:"1"},domProps:{value:this.selectedQuantity}}),e("button",{on:{click:t.addQuantity}},[t._v("+")])]),e("button",{on:{click:t.addToCart}},[t._v("Añadir")])]),t.isOrdered?e("small",[t._v("En tu pedido: "+t._s(t.getQuantityInCart))]):t._e()])},it=[],ct={name:"AppProduct",props:{product:Object},data(){return{selectedQuantity:1}},computed:{...(0,c.Se)(["getProductsInCart","getIsVegan","getIsVegetarian"]),productInCart(){return this.getProductsInCart.find((t=>t.id===this.product.id))},getQuantityInCart(){return this.productInCart?this.productInCart.quantity:0},isOrdered(){return!!this.productInCart}},methods:{...(0,c.nv)(["addProductToCart"]),addToCart(){const t={...this.product,quantity:this.selectedQuantity};this.$store.dispatch("addProductToCart",{modifiedProduct:t}),this.resetQuantity()},addQuantity(){this.selectedQuantity++},subtractQuantity(){this.selectedQuantity>1&&this.selectedQuantity--},resetQuantity(){this.selectedQuantity=1}}},lt=ct,ut=(0,d.Z)(lt,st,it,!1,null,"80d37b5a",null),dt=ut.exports,pt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hide,expression:"hide"}],staticClass:"filter-component"},[e("div",{staticClass:"filter-buttons"},[e("button",{staticClass:"allergens-filter-button",on:{click:function(e){t.show=!t.show}}},[t._v(" "+t._s(t.show?"Ocultar filtro X ":"🌾 Filtro alergenos")+" ")]),e("button",{staticClass:"diet-filter-button",on:{click:function(e){return t.toggleDietType("vegan")}}},[t._v(" 🥦 ")]),e("button",{staticClass:"diet-filter-button",on:{click:function(e){return t.toggleDietType("vegetarian")}}},[t._v(" 🥕 ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"allergens-card"},t._l(t.allergens,(function(r,a){return e("div",{key:a,staticClass:"allergen-item",on:{click:function(e){return t.toggleFilter(r.name)}}},[e("span",{staticClass:"allergen-item-text",class:{active:t.isSelected(r.name)}},[t._v(" "+t._s(r.icon)+" "+t._s(r.name)+" ")])])})),0)])},gt=[],mt={name:"AppFilter",data(){return{allergens:[{icon:"🥖",name:"Gluten"},{icon:"🦀",name:"Crustáceos"},{icon:"🥚",name:"Huevo"},{icon:"🥜",name:"Cacahuetes"},{icon:"🫘",name:"Soja"},{icon:"🐟",name:"Pescado"},{icon:"🥛",name:"Lactosa"},{icon:"🌰",name:"Nueces"},{icon:"🥬",name:"Apio"},{icon:"🍯",name:"Mostaza"},{icon:"🫘",name:"Sésamo"},{icon:"🦪",name:"Moluscos"}],show:!1,selected:[]}},computed:{...(0,c.Se)(["getAllergensFilter"])},methods:{...(0,c.nv)(["toggleAllergensFilter","resetAllergensFilter","toggleDietType"]),toggleFilter(t){this.toggleAllergensFilter(t),this.selected.includes(t)?this.selected.filter((e=>e===t)):this.selected.push(t)},isSelected(t){return this.getAllergensFilter.includes(t)},hide(){this.show=!1}}},ht=mt,vt=(0,d.Z)(ht,pt,gt,!1,null,"6ea35271",null),ft=vt.exports,_t={name:"AppCategories",components:{AppProduct:dt,AppFilter:ft},props:{category:String},computed:{...(0,c.rn)(["products","fetchingData","allergensFilter"]),filter(){return Object.values(this.products).filter((t=>Object.values(this.allergensFilter).every((e=>!Object.values(t.allergens).some((t=>t.toLowerCase()===e.toLowerCase()))))))}},methods:{...(0,c.nv)(["fetchProducts"])},created(){this.fetchProducts(this.category)}},Ct=_t,bt=(0,d.Z)(Ct,nt,ot,!1,null,"1515f5d4",null),It=bt.exports,yt=function(){var t=this,e=t._self._c;return e("main",{staticClass:"container"},[e("h2",[t._v("Nuestra carta")]),e("AppMenu")],1)},Ot=[],St=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container container-cat"},[t.fetchingCategories?e("span",{staticClass:"loader"}):e("div",t._l(t.categories,(function(t,r){return e("category-button",{key:r,attrs:{name:t}})})),1)])},Tt=[],Et=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"category-btn",attrs:{to:{name:"products",params:{category:t.name}}}},["Bebidas"===t.name?e("span",{staticClass:"category-icon"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-champagne-glasses"}})],1):t._e(),"Entrantes"===t.name?e("span",{staticClass:"category-icon"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-bowl-food"}})],1):t._e(),"Platos principales"===t.name?e("span",{staticClass:"category-icon"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-burger"}})],1):t._e(),"Postres"===t.name?e("span",{staticClass:"category-icon"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-ice-cream"}})],1):t._e(),t._v(" "+t._s(t.name)+" ")])},Dt=[],At={name:"CategoryButton",props:{name:String}},Pt=At,Ft=(0,d.Z)(Pt,Et,Dt,!1,null,"ecabd9de",null),wt=Ft.exports,kt={name:"AppMenu",components:{CategoryButton:wt},computed:{...(0,c.rn)(["categories","fetchingCategories","currentCategory"])},methods:{...(0,c.nv)(["fetchCategories"])},created(){this.fetchCategories()}},Rt=kt,Nt=(0,d.Z)(Rt,St,Tt,!1,null,null,null),Ut=Nt.exports,qt={name:"MenuView",components:{AppMenu:Ut},computed:{...(0,c.rn)(["error"])},data(){return{showFilter:!0}}},xt=qt,Zt=(0,d.Z)(xt,yt,Ot,!1,null,"212c011f",null),jt=Zt.exports,Qt=r(1598),Lt=r(4572),Ht=r.n(Lt);const Mt=localStorage.getItem("tableID")||null;var Gt={tableID:Mt,auth:!1,fetchingData:!1,fetchingCategories:!1,pushingData:!1,pushingOrder:!1,error:null,orders:JSON.parse(localStorage.getItem("orders_"+Mt))||[],categories:[],products:{},allergensFilter:JSON.parse(localStorage.getItem("filter_"+Mt))||[],vegan:null,vegetarian:null,productsInCart:JSON.parse(localStorage.getItem("cart_"+Mt))||[]};const Jt="FETCH_TOKEN_REQUEST",Bt="FETCH_TOKEN_SUCCESS",Vt="FETCH_TOKEN_FAILURE",zt="CLEAR_STATE",$t="FETCH_CATEGORIES_REQUEST",Kt="FETCH_CATEGORIES_SUCCESS",Yt="FETCH_CATEGORIES_FAILURE",Wt="FETCH_PRODUCTS_REQUEST",Xt="FETCH_PRODUCTS_SUCCESS",te="FETCH_PRODUCTS_FAILURE",ee="ADD_TO_CART",re="DELETE_FROM_CART",ae="SUBSTRACT_QUANTITY_FROM_CART",ne="ADD_QUANTITY_FROM_CART",oe="TOGGLE_ALLERGENS_FILTER",se="RESET_ALLERGENS_FILTER",ie="TOGGLE_DIET_TYPE",ce="SEND_ORDER_REQUEST",le="SEND_ORDER_SUCCESS",ue="SEND_ORDER_FAILURE",de="UPDATE_ORDERS_STATUS_REQUEST",pe="UPDATE_ORDERS_STATUS_SUCCESS",ge="UPDATE_ORDERS_STATUS_FAILURE";var me={[Jt](t){t.fetchingData=!0,t.auth=!1,t.error=null,t.tableID=null},[Bt](t,{tableID:e}){t.fetchingData=!1,t.error=null,t.auth=!0,t.tableID=e},[Vt](t,{error:e}){t.fetchingData=!1,t.auth=!1,t.error=e},[$t](t){t.fetchingData=!0,t.fetchingCategories=!0,t.error=null},[Kt](t,{categories:e}){t.fetchingData=!1,t.fetchingCategories=!1,t.error=null,t.categories=e},[Yt](t,{error:e}){t.fetchingData=!1,t.fetchingCategories=!1,t.error=e},[Wt](t){t.fetchingData=!0,t.error=null},[Xt](t,{products:e}){t.fetchingData=!1,t.error=null,t.products=e},[te](t,{error:e}){t.fetchingData=!1,t.error=e},[ee](t,{modifiedProduct:e}){const r=t.productsInCart;if(r[e.id]){const n=r[e.id],o={...n,quantity:n.quantity+e.quantity};a.ZP.set(t.productsInCart,e.id,o)}else a.ZP.set(t.productsInCart,e.id,e);localStorage.setItem("cart_"+t.tableID,JSON.stringify(t.productsInCart))},[re](t,{product:e}){a.ZP["delete"](t.productsInCart,e.id),localStorage.setItem("cart_"+t.tableID,JSON.stringify(t.productsInCart))},[ne](t,{product:e}){a.ZP.set(t.productsInCart,e.id,{...e,quantity:e.quantity+1}),localStorage.setItem("cart_"+t.tableID,JSON.stringify(t.productsInCart))},[ae](t,{product:e}){e.quantity>1?a.ZP.set(t.productsInCart,e.id,{...e,quantity:e.quantity-1}):a.ZP["delete"](t.productsInCart,e.id),localStorage.setItem("cart_"+t.tableID,JSON.stringify(t.productsInCart))},[oe](t,e){let r=Object.values(t.allergensFilter);r.includes(e)?r=r.filter((t=>t!=e)):r.push(e),t.allergensFilter=r,localStorage.setItem("filter_"+t.tableID,JSON.stringify(t.allergensFilter))},[se](t){t.allergensFilter=[],localStorage.removeItem("filter_"+t.tableID)},[ie](t,e){"vegan"===e?t.vegan=!t.vegan:t.vegetarian=!t.vegetarian,localStorage.setItem("vegan_"+t.tableID,t.vegan),localStorage.setItem("vegetarian_"+t.tableID,t.vegetarian)},[ce](t,{order:e}){t.pushingData=!0,t.pushingOrder=!0,t.error=null,t.orders.push(e)},[le](t){t.pushingData=!1,t.pushingOrder=!1,t.productsInCart={},localStorage.removeItem("cart_"+t.tableID),localStorage.setItem("orders_"+t.tableID,JSON.stringify(t.orders)),t.error=null},[ue](t,{error:e}){t.pushingData=!1,t.pushingOrder=!1,t.error=e},[de](t){t.fetchingData=!0,t.error=null},[pe](t,{response:e}){t.fetchingData=!1,t.pushingOrder=!1,t.error=null,t.orders=e,localStorage.setItem("orders_"+t.tableID,JSON.stringify(t.orders))},[ge](t,{error:e}){t.fetchingData=!1,t.error=e},[zt](t){t.tableID=null,t.fetchingData=!1,t.fetchingCategories=!1,t.pushingData=!1,t.pushingOrder=!1,t.error=!1,t.orders=[],t.allergensFilter=[],t.vegan=null,t.vegetarian=null,t.productsInCart=[]}};const he="https://camarero-digital-api.onrender.com",ve=he;var fe={getToken(t){return fetch(ve+"/api/token",{method:"POST",headers:{tableid:t}}).then((t=>t.ok?t.json():t.text().then((e=>{throw new Error(e||"HTTP error "+t.status)}))))},getCategories(){return new Promise(((t,e)=>{fetch(ve+"/api/products/categories").then((t=>t.json())).then((e=>t(e))).catch((t=>{console.log(t),e(t)}))}))},getProducts(t){return new Promise(((e,r)=>{fetch(ve+"/api/products/"+t).then((t=>t.json())).then((t=>e(t))).catch((t=>r(t)))}))},postOrder(t,e){return fetch(ve+"/api/orders/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(e)}).then((t=>{if(!t.ok)throw new Error("No se ha validado el pedido");return t.json()}))},getOrderStatus(t){return new Promise(((e,r)=>{fetch(ve+"/api/orders/"+t).then((t=>t.json())).then((t=>e(t))).catch((t=>{console.log(t),r(t)}))}))}},_e={initializeTableID({commit:t},e){t("SET_TABLE_ID",e)},async askForToken({commit:t},e){t(Jt);try{const{tableID:r,token:a}=await fe.getToken(e);t(Bt,{tableID:r}),localStorage.setItem("tableID",r),localStorage.setItem("AuthToken",a)}catch(r){console.error(r),t(Vt,{error:r.message})}},fetchCategories({commit:t}){t($t),fe.getCategories().then((e=>t(Kt,{categories:e}))).catch((e=>t(Yt,{error:e})))},fetchProducts({commit:t},e){t(Wt),fe.getProducts(e).then((e=>t(Xt,{products:e}))).catch((e=>t(te,{error:e})))},addProductToCart({commit:t},e){t(ee,e)},deleteProductFromCart({commit:t},e){t(re,e)},addQuantityFromCart({commit:t},e){t(ne,e)},substractQuantityFromCart({commit:t},e){t(ae,e)},toggleAllergensFilter({commit:t},e){t(oe,e)},resetAllergensFilter({commit:t}){t(se)},toggleDietType({commit:t},e){t(ie,e)},submitOrder({commit:t,state:e}){const r=Object.values(e.productsInCart),a=r.map((t=>({productId:t.id,name:t.name,quantity:t.quantity,price:t.price})));let n=a.map((t=>t.price*t.quantity)).reduce(((t,e)=>t+e),0);n=n.toFixed(2);const o={table:e.tableID,status:"sent",date:(new Date).toISOString(),items:a,totalPrice:n};t(ce,{order:o});const s=localStorage.getItem("AuthToken");fe.postOrder(s,o).then((e=>t(le,{response:e}))).catch((e=>{console.error(e),t(ue,{error:e})}))},updateOrderStatus({commit:t},e){t(de),fe.getOrderStatus(e).then((e=>{t(pe,{response:e})})).catch((e=>t(ge,{error:e})))},clearState({commit:t}){t(zt),localStorage.clear()}},Ce={getProductsInCart:t=>Object.values(t.productsInCart),getNumberOfProductsInCart:t=>Object.values(t.productsInCart).length,getCartTotalAmount:t=>Object.values(t.productsInCart).reduce(((t,e)=>t+e.price*e.quantity),0),getTableID:t=>t.tableID,getAllergensFilter:t=>Object.values(t.allergensFilter),getIsVegan:t=>t.vegan,getIsVetetarian:t=>t.vegetarian,getOrders:t=>Object.values(t.orders)!==[]?Object.values(t.orders):[]};a.ZP.use(c.ZP);const be=!1;var Ie=new c.ZP.Store({strict:be,plugins:be?[Ht()()]:[],state:Gt,getters:Ce,mutations:me,actions:_e,modules:{}});a.ZP.use(S.ZP);const ye=[{path:"/",name:"home",component:k},{path:"/menu",name:"menu",component:jt},{path:"/products/:category",name:"products",component:It,props:!0,meta:{requiresAuth:!0}},{path:"/cart",name:"cart",component:at,meta:{requiresAuth:!0}}],Oe=new S.ZP({mode:"history",base:"/",routes:ye});Oe.beforeEach(((t,e,r)=>{if(t.matched.some((t=>t.meta.requiresAuth))){const t=localStorage.getItem("AuthToken");if(t){const e=(0,Qt.Z)(t),a=Date.now()/1e3;return e.exp>a?r():r({name:"home"})}r({name:"home"})}else r()})),Oe.beforeResolve((async(t,e,r)=>{const a=t.query.tableID;if(void 0!==a&&a!==Gt.tableID)try{Ie.dispatch("askForToken",t.query.tableID),Ie.dispatch("clearState"),r()}catch(n){r({name:"home"})}else r()}));var Se=Oe,Te=r(3494),Ee=r(8539);Te.vI.add(Ee.mRB),a.ZP.component("font-awesome-icon",j.GN),a.ZP.config.productionTip=!1,a.ZP.directive("click-outside",{bind:function(t,e,r){t.clickOutsideEvent=function(a){t==a.target||t.contains(a.target)||r.context[e.expression](a)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}),new a.ZP({router:Se,store:Ie,render:t=>t(O)}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(i=!1,o<s&&(s=o));if(i){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,s=a[0],i=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(e&&e(a);l<s.length;l++)o=s[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkcamarero_digital_frontend"]=self["webpackChunkcamarero_digital_frontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(6057)}));a=r.O(a)})();
//# sourceMappingURL=app.7fe24c87.js.map