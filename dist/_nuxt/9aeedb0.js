(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{439:function(e,o,t){e.exports=t.p+"img/arrow-down.4b61664.svg"},440:function(e,o,t){var content=t(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(78).default)("1c1f4af7",content,!0,{sourceMap:!1})},445:function(e,o,t){"use strict";t.r(o);t(45),t(63);var r=t(0),c={__name:"CardServicos",props:["servico","icone_servicos"],setup:function(e){var o=e;console.log(o.icone_servicos);var c=Object(r.a)((function(){return t(451)("./".concat(o.icone_servicos))}));return{__sfc:!0,props:o,icone:c}}},n=(t(456),t(44)),component=Object(n.a)(c,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"card-servico p-6 md:p-8 rounded-lg"},[o("img",{staticClass:"max-w-[3.5rem] md:max-w-[5rem]",attrs:{src:e._self._setupProxy.icone,alt:""}}),e._v(" "),o("h2",{staticClass:"text-neutral-100 text-base md:text-lg font-semibold mt-2"},[e._v(e._s(e.servico.title))]),e._v(" "),o("p",{staticClass:"text-sm md:text-base leading-[150%] mt-2"},[e._v(e._s(e.servico.description))])])}),[],!1,null,"45c74627",null);o.default=component.exports},451:function(e,o,t){var map={"./aplicacoes.svg":452,"./arrow-down.svg":439,"./ecommerce.svg":453,"./responsivo.svg":454,"./sites.svg":455};function r(e){var o=c(e);return t(o)}function c(e){if(!t.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=451},452:function(e,o,t){e.exports=t.p+"img/aplicacoes.eb016cd.svg"},453:function(e,o,t){e.exports=t.p+"img/ecommerce.a7cd55b.svg"},454:function(e,o,t){e.exports=t.p+"img/responsivo.e380de4.svg"},455:function(e,o,t){e.exports=t.p+"img/sites.573c665.svg"},456:function(e,o,t){"use strict";t(440)},457:function(e,o,t){var r=t(77)((function(i){return i[1]}));r.push([e.i,".card-servico[data-v-45c74627]{background-color:#2c3e50}",""]),r.locals={},e.exports=r},493:function(e,o,t){"use strict";t.r(o);var r=t(0),c=t(445),n={__name:"TheServicos",setup:function(e){return{__sfc:!0,servicos:Object(r.j)([{id:0,title:"Desenvolvimento de Sites",description:"Criação de sites responsivos e eficientes para garantir uma experiência de usuário excepcional em todas as plataformas. Utilização de técnicas de SEO e ferramentas de análise para garantir que o site seja facilmente encontrado pelos usuários e pelos motores de busca. ",icon:"sites.svg"},{id:1,title:"Desenvolvimento de E-commerce",description:"Criação de lojas virtuais eficientes e responsivas, com foco em proporcionar uma experiência de compra excepcional aos usuários. Utilização de técnicas de SEO e integração com plataformas de pagamento seguras. ",icon:"ecommerce.svg"},{id:2,title:"Desenvolvimento de Aplicações Web",description:"Criação de aplicações web modernas e eficientes, utilizando frameworks como Vue.js e React. Desenvolvimento de recursos personalizados para atender às necessidades específicas do negócio, com foco na experiência do usuário e na eficiência do sistema. ",icon:"aplicacoes.svg"},{id:3,title:"Design Responsivo",description:"Criação de layouts responsivos que se adaptam a todas as plataformas, desde desktops até smartphones, proporcionando uma experiência de usuário excepcional em todas as telas. ",icon:"responsivo.svg"}]),CardServicos:c.default}}},d=t(44),component=Object(d.a)(n,(function(){var e=this,o=e._self._c,t=e._self._setupProxy;return o("div",{staticClass:"mt-8 md:mt-12"},[o("div",{staticClass:"mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"},e._l(t.servicos,(function(r){return t.servicos.length?o(t.CardServicos,{key:r.id,attrs:{servico:r,icone_servicos:r.icon,"data-aos":"zoom-in","data-aos-delay":"200"}}):e._e()})),1)])}),[],!1,null,"417a8d8a",null);o.default=component.exports;installComponents(component,{CardServicos:t(445).default})}}]);