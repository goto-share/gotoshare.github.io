(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{8193:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,r,a=[],o=!0,l=!1;try{for(i=i.call(t);!(o=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==i.return||i.return()}finally{if(l)throw r}}return a}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}e.default=function(t){var e=t.src,i=t.sizes,n=t.unoptimized,l=void 0!==n&&n,c=t.priority,u=void 0!==c&&c,h=t.loading,y=t.lazyRoot,z=void 0===y?null:y,E=t.lazyBoundary,I=void 0===E?"200px":E,R=t.className,P=t.quality,q=t.width,L=t.height,_=t.style,N=t.objectFit,C=t.objectPosition,D=t.onLoadingComplete,W=t.loader,M=void 0===W?k:W,U=t.placeholder,B=void 0===U?"empty":U,F=t.blurDataURL,H=b(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),T=s.useContext(m.ImageConfigContext),G=s.useMemo((function(){var t=v||T||f.imageConfigDefault,e=o(t.deviceSizes).concat(o(t.imageSizes)).sort((function(t,e){return t-e})),i=t.deviceSizes.sort((function(t,e){return t-e}));return p({},t,{allSizes:e,deviceSizes:i})}),[T]),J=H,V=i?"responsive":"intrinsic";"layout"in J&&(J.layout&&(V=J.layout),delete J.layout);var Q="";if(function(t){return"object"===typeof t&&(A(t)||function(t){return void 0!==t.src}(t))}(e)){var $=A(e)?e.default:e;if(!$.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(F=F||$.blurDataURL,Q=$.src,(!V||"fill"!==V)&&(L=L||$.height,q=q||$.width,!$.height||!$.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))}e="string"===typeof e?e:Q;var K=O(q),X=O(L),Y=O(P),Z=!u&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(l=!0,Z=!1);w.has(e)&&(Z=!1);var tt,et=a(g.useIntersection({rootRef:z,rootMargin:I,disabled:!Z}),2),it=et[0],nt=et[1],rt=!Z||nt,at={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ot={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},lt=!1,ct={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:C};0;0;var ut=Object.assign({},_,"raw"===V?{aspectRatio:"".concat(K," / ").concat(X)}:ct),st="blur"===B?{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(F,'")'),backgroundPosition:C||"0% 0%"}:{};if("fill"===V)at.display="block",at.position="absolute",at.top=0,at.left=0,at.bottom=0,at.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var dt=X/K,ft=isNaN(dt)?"100%":"".concat(100*dt,"%");"responsive"===V?(at.display="block",at.position="relative",lt=!0,ot.paddingTop=ft):"intrinsic"===V?(at.display="inline-block",at.position="relative",at.maxWidth="100%",lt=!0,ot.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(at.display="inline-block",at.position="relative",at.width=K,at.height=X)}else 0;var gt={src:S,srcSet:void 0,sizes:void 0};rt&&(gt=j({config:G,src:e,unoptimized:l,layout:V,width:K,quality:Y,sizes:i,loader:M}));var mt=e;0;var ht;0;var yt=(r(ht={},"imagesrcset",gt.srcSet),r(ht,"imagesizes",gt.sizes),ht),pt=s.default.useLayoutEffect,bt=s.useRef(D),vt=s.useRef(null);s.useEffect((function(){bt.current=D}),[D]),pt((function(){it(vt.current)}),[it]),s.useEffect((function(){!function(t,e,i,n,r){var a=function(){var i=t.current;i&&(i.src!==S&&("decode"in i?i.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(w.add(e),"blur"===n&&(i.style.filter="",i.style.backgroundSize="",i.style.backgroundImage="",i.style.backgroundPosition=""),r.current)){var a=i.naturalWidth,o=i.naturalHeight;r.current({naturalWidth:a,naturalHeight:o})}})))};t.current&&(t.current.complete?a():t.current.onload=a)}(vt,mt,0,B,bt)}),[mt,V,B,rt]);var wt=p({isLazy:Z,imgAttributes:gt,heightInt:X,widthInt:K,qualityInt:Y,layout:V,className:R,imgStyle:ut,blurStyle:st,imgRef:vt,loading:h,config:G,unoptimized:l,placeholder:B,loader:M,srcString:mt},J);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(x,Object.assign({},wt)):s.default.createElement("span",{style:at},lt?s.default.createElement("span",{style:ot},tt?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,s.default.createElement(x,Object.assign({},wt))),u?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+gt.src+gt.srcSet+gt.sizes,rel:"preload",as:"image",href:gt.srcSet?void 0:gt.src},yt))):null)};var c,u,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}(i(6384)),d=(c=i(4598))&&c.__esModule?c:{default:c},f=i(4820),g=i(7984),m=i(8921),h=(i(6739),i(5451));function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function p(t){for(var e=arguments,i=function(i){var n=null!=e[i]?e[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){y(t,e,n[e])}))},n=1;n<arguments.length;n++)i(n);return t}function b(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(t){var e=t.config,i=t.src,n=t.width,r=t.quality;0;if(i.endsWith(".svg")&&!e.dangerouslyAllowSVG)return i;return"".concat(h.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(t){var e=t.config,i=t.src,n=t.width,r=t.quality,a=new URL("".concat(e.path).concat(E(i))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(t){var e=t.config,i=t.src,n=t.width,r=t.quality,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(e.path).concat(a).concat(E(i))}],["akamai",function(t){var e=t.config,i=t.src,n=t.width;return"".concat(e.path).concat(E(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function A(t){return void 0!==t.default}function j(t){var e=t.config,i=t.src,n=t.unoptimized,r=t.layout,a=t.width,l=t.quality,c=t.sizes,u=t.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var s=function(t,e,i,n){var r=t.deviceSizes,a=t.allSizes;if(n&&("fill"===i||"responsive"===i||"raw"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(n);l)u.push(parseInt(l[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(t){return t>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([e,2*e].map((function(t){return a.find((function(e){return e>=t}))||a[a.length-1]})))),kind:"x"}}(e,a,r,c),d=s.widths,f=s.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(t,n){return"".concat(u({config:e,src:i,quality:l,width:t})," ").concat("w"===f?t:n+1).concat(f)})).join(", "),src:u({config:e,src:i,quality:l,width:d[g]})}}function O(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function k(t){var e,i=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",n=z.get(i);if(n)return n(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}var x=function(t){var e=t.imgAttributes,i=t.heightInt,n=t.widthInt,r=t.qualityInt,a=t.layout,o=t.className,l=t.imgStyle,c=t.blurStyle,u=t.isLazy,d=t.imgRef,f=t.placeholder,g=t.loading,m=t.sizes,h=t.srcString,y=t.config,v=t.unoptimized,w=t.loader,S=b(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","imgRef","placeholder","loading","sizes","srcString","config","unoptimized","loader"]);return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,e,"raw"!==a||m?{}:{height:i,width:n},{decoding:"async","data-nimg":a,className:o,ref:d,style:p({},l,c)})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,j({config:y,src:h,unoptimized:v,layout:a,width:n,quality:r,sizes:m,loader:w}),"raw"!==a||m?{}:{height:i,width:n},{decoding:"async","data-nimg":a,style:l,className:o,loading:g||"lazy"}))))};function E(t){return"/"===t[0]?t.slice(1):t}},9859:function(t,e,i){t.exports=i(8193)}}]);