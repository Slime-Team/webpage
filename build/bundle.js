var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,s;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function L(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function p(){return g(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t){s=t}const b=[],v=[],k=[],x=[],y=Promise.resolve();let w=!1;function E(t){k.push(t)}const M=new Set;let A=0;function T(){const t=s;do{for(;A<b.length;){const t=b[A];A++,_(t),S(t.$$)}for(_(null),b.length=0,A=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(b.length);for(;x.length;)x.pop()();w=!1,M.clear(),_(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const G=new Set;let D;function I(){D={r:0,c:[],p:D}}function O(){D.r||o(D.c),D=D.p}function N(t,e){t&&t.i&&(G.delete(t),t.i(e))}function Z(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),D.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function B(t){t&&t.c()}function R(t,n,r,a){const{fragment:s,on_mount:c,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,r),a||E((()=>{const n=c.map(e).filter(l);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,y.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,l,r,a,c,i,u,L=[-1]){const f=s;_(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(f?f.$$.context:[])),callbacks:n(),dirty:L,skip_bound:!1,root:l.target||f.$$.root};u&&u(d.root);let g=!1;if(d.ctx=r?r(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),g&&P(e,t)),n})):[],d.update(),g=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();l.intro&&N(e.$$.fragment),R(e,l.target,l.anchor,l.customElement),T()}_(f)}class z{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let n,o,l,r,a,s,c,L,f,g;return{c(){n=d("svg"),o=d("circle"),l=d("path"),r=d("path"),a=d("path"),s=d("path"),c=d("path"),L=d("path"),f=d("path"),g=d("path"),h(o,"cx","221"),h(o,"cy","167"),h(o,"r","160"),h(o,"fill","#080D11"),h(l,"class","back-circle"),h(l,"d","M220.501 0L228.867 6.87906L237.905 0.912109L245.506 8.6279L255.119 3.63843L261.871 12.1064L271.953 8.14909L277.783 17.2765L288.223 14.3947L293.067 24.0815L303.751 22.3068L307.556 32.4469L318.368 31.7987L321.092 42.281L331.912 42.7664L333.525 53.4761L344.235 55.0898L344.72 65.9094L355.203 68.6338L354.554 79.4449L364.695 83.25L362.92 93.9342L372.607 98.7784L369.725 109.218L378.852 115.049L374.895 125.13L383.363 131.883L378.373 141.496L386.089 149.096L380.122 158.135L387.001 166.5L380.122 174.865L386.089 183.904L378.373 191.504L383.363 201.117L374.895 207.87L378.852 217.951L369.725 223.782L372.607 234.222L362.92 239.066L364.695 249.75L354.554 253.555L355.203 264.366L344.72 267.091L344.235 277.91L333.525 279.524L331.912 290.234L321.092 290.719L318.368 301.201L307.556 300.553L303.751 310.693L293.067 308.918L288.223 318.605L277.783 315.724L271.953 324.851L261.871 320.894L255.119 329.362L245.506 324.372L237.905 332.088L228.867 326.121L220.501 333L212.136 326.121L203.097 332.088L195.497 324.372L185.884 329.362L179.132 320.894L169.05 324.851L163.22 315.724L152.78 318.605L147.935 308.918L137.251 310.693L133.446 300.553L122.635 301.201L119.911 290.719L109.091 290.234L107.477 279.524L96.7677 277.91L96.2823 267.091L85.8 264.366L86.4482 253.555L76.3081 249.75L78.0828 239.066L68.396 234.222L71.2778 223.782L62.1504 217.951L66.1077 207.87L57.6397 201.117L62.6292 191.504L54.9134 183.904L60.8804 174.865L54.0013 166.5L60.8804 158.135L54.9134 149.096L62.6292 141.496L57.6397 131.883L66.1077 125.13L62.1504 115.049L71.2778 109.218L68.396 98.7784L78.0828 93.9342L76.3081 83.25L86.4482 79.4449L85.8 68.6338L96.2823 65.9094L96.7677 55.0898L107.477 53.4761L109.091 42.7664L119.911 42.281L122.635 31.7987L133.446 32.4469L137.251 22.3068L147.935 24.0815L152.78 14.3947L163.22 17.2765L169.05 8.14909L179.132 12.1064L185.884 3.63843L195.497 8.6279L203.097 0.912109L212.136 6.87906L220.501 0Z"),h(l,"fill","#080D11"),h(r,"fill-rule","evenodd"),h(r,"clip-rule","evenodd"),h(r,"d","M168.385 204.962C151.755 190.426 141.242 169.058 141.242 145.255C141.242 101.498 176.767 65.9729 220.523 65.9729C264.28 65.9729 299.804 101.498 299.804 145.255C299.804 169.57 290.36 188.683 273.104 203.23C271.217 205.632 271.23 210.47 274.264 212.562C282.063 219.279 289.482 217.517 289.541 233.58C289.58 244.101 275.374 250.605 264.852 250.605C258.118 250.605 248.053 245.359 246.903 243.116C246.903 258.224 234.06 267.99 218.954 267.99C203.847 267.99 191.88 258.412 191.88 243.306C191.88 242.481 191.839 242.546 191.988 240.858C189.34 248.206 176.676 253.128 167.721 251.146C157.448 248.87 151.8 244.149 151.8 233.628C151.8 224.612 161.724 219.792 165.542 215.805C169.318 211.862 170.495 206.982 168.385 204.962ZM194.766 162.945C195.409 166.832 198.372 170.761 202.683 173.985C207.194 177.359 213.501 179.355 219.703 179.677C225.826 179.256 231.864 177.247 236.239 174.086C240.645 170.902 243.633 167.094 244.384 163.696C245.336 160.857 243.802 157.779 240.962 156.828C238.123 155.876 235.046 157.41 234.094 160.25C233.924 160.616 233.424 160.762 233.05 161.11C231.84 162.234 229.989 162.97 227.996 163.754C225.473 164.748 222.536 165.281 219.597 165.136C216.675 165.313 213.684 164.793 211.12 163.752C209.474 163.084 207.898 162.484 206.773 161.499C206.184 160.985 205.471 160.672 205.229 160.066C204.435 157.179 201.446 155.48 198.559 156.274C195.671 157.069 193.972 160.057 194.766 162.945ZM193.604 127.262C193.604 122.282 189.56 118.239 184.581 118.239C179.6 118.239 175.557 122.282 175.557 127.262V136.02C175.557 141.001 179.6 145.044 184.581 145.044C189.56 145.044 193.604 141.001 193.604 136.02V127.262ZM264.263 127.262C264.263 122.282 260.22 118.239 255.239 118.239C250.259 118.239 246.216 122.282 246.216 127.262V136.02C246.216 141.001 250.259 145.044 255.239 145.044C260.22 145.044 264.263 141.001 264.263 136.02V127.262Z"),h(r,"fill","#01F48B"),h(a,"d","M40.0005 204.08C41.2778 197.709 49.7921 196.365 52.9698 202.033L58.7007 212.255C59.6998 214.037 61.4275 215.294 63.4306 215.696L74.9212 217.999C81.2926 219.277 82.6365 227.791 76.9683 230.969L66.7461 236.699C64.964 237.698 63.7073 239.426 63.3058 241.429L61.0022 252.92C59.7249 259.291 51.2106 260.635 48.0328 254.967L42.3019 244.745C41.3029 242.963 39.5751 241.706 37.572 241.304L26.0815 239.001C19.7101 237.724 18.3661 229.209 24.0343 226.032L34.2566 220.301C36.0386 219.302 37.2953 217.574 37.6969 215.571L40.0005 204.08Z"),h(a,"fill","#01F48B"),h(s,"d","M353.587 44.1062C354.732 38.3939 362.365 37.189 365.214 42.2708L370.352 51.4356C371.248 53.0333 372.797 54.16 374.593 54.52L384.895 56.5853C390.607 57.7305 391.812 65.364 386.73 68.213L377.566 73.351C375.968 74.2468 374.841 75.7958 374.481 77.5917L372.416 87.8935C371.271 93.6058 363.637 94.8108 360.788 89.7289L355.65 80.5641C354.754 78.9664 353.205 77.8398 351.41 77.4797L341.108 75.4144C335.395 74.2693 334.19 66.6358 339.272 63.7868L348.437 58.6487C350.035 57.753 351.161 56.204 351.521 54.4081L353.587 44.1062Z"),h(s,"fill","#01F48B"),h(c,"d","M368.722 211.624C371.835 207.423 378.494 209.362 378.866 214.577L379.536 223.982C379.653 225.622 380.48 227.129 381.801 228.107L389.377 233.721C393.578 236.834 391.639 243.493 386.424 243.864L377.019 244.534C375.379 244.651 373.872 245.479 372.894 246.799L367.28 254.376C364.168 258.577 357.509 256.638 357.137 251.423L356.467 242.018C356.35 240.378 355.523 238.871 354.202 237.893L346.626 232.279C342.425 229.166 344.363 222.507 349.578 222.136L358.984 221.466C360.623 221.349 362.13 220.521 363.109 219.201L368.722 211.624Z"),h(c,"fill","#01F48B"),h(L,"d","M100.06 86.6465C102.514 83.3342 107.764 84.8626 108.057 88.9745L108.586 96.3901C108.678 97.6828 109.33 98.8708 110.371 99.6424L116.345 104.068C119.657 106.523 118.129 111.773 114.017 112.066L106.601 112.594C105.308 112.686 104.12 113.339 103.349 114.38L98.9229 120.353C96.4688 123.666 91.2185 122.137 90.9255 118.025L90.397 110.61C90.3049 109.317 89.6526 108.129 88.6112 107.357L82.6378 102.932C79.3256 100.477 80.8539 95.2271 84.9658 94.9341L92.3814 94.4056C93.6742 94.3135 94.8622 93.6612 95.6338 92.6199L100.06 86.6465Z"),h(L,"fill","#01F48B"),h(f,"d","M100.78 245.357C103.234 242.044 108.484 243.573 108.777 247.685L109.306 255.1C109.398 256.393 110.05 257.581 111.091 258.353L117.065 262.778C120.377 265.233 118.849 270.483 114.737 270.776L107.321 271.304C106.028 271.396 104.84 272.049 104.069 273.09L99.6429 279.064C97.1888 282.376 91.9385 280.847 91.6455 276.736L91.117 269.32C91.0249 268.027 90.3726 266.839 89.3312 266.068L83.3578 261.642C80.0456 259.187 81.5739 253.937 85.6858 253.644L93.1014 253.116C94.3942 253.024 95.5822 252.371 96.3538 251.33L100.78 245.357Z"),h(f,"fill","#01F48B"),h(g,"d","M409.78 71.3564C412.234 68.0442 417.484 69.5725 417.777 73.6844L418.306 81.1C418.398 82.3928 419.05 83.5808 420.091 84.3524L426.065 88.7783C429.377 91.2325 427.849 96.4827 423.737 96.7758L416.321 97.3042C415.028 97.3963 413.84 98.0486 413.069 99.09L408.643 105.063C406.189 108.376 400.938 106.847 400.645 102.735L400.117 95.3198C400.025 94.027 399.373 92.839 398.331 92.0674L392.358 87.6415C389.046 85.1874 390.574 79.9371 394.686 79.6441L402.101 79.1156C403.394 79.0235 404.582 78.3712 405.354 77.3298L409.78 71.3564Z"),h(g,"fill","#01F48B"),h(n,"width","312"),h(n,"height","232"),h(n,"viewBox","0 0 444 333"),h(n,"fill","none"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"class","svelte-ypzwim")},m(t,e){u(t,n,e),i(n,o),i(n,l),i(n,r),i(n,a),i(n,s),i(n,c),i(n,L),i(n,f),i(n,g)},p:t,i:t,o:t,d(t){t&&m(n)}}}class j extends z{constructor(t){super(),V(this,t,null,U,r,{})}}function J(e){let n,o,l,r,a,s,c,L,d,g,C;return r=new j({props:{class:"svg"}}),{c(){n=f("section"),o=f("div"),l=p(),B(r.$$.fragment),a=p(),s=f("h1"),s.textContent=`${q}`,c=p(),L=f("h2"),L.textContent=`${Y}`,d=p(),g=f("div"),$(o,"margin-top","32px"),h(s,"id","slime_title"),h(s,"class","svelte-7vop9u"),h(L,"id","subtitle"),h(L,"class","svelte-7vop9u"),$(g,"margin-top","32px"),h(n,"class","profile_block block")},m(t,e){u(t,n,e),i(n,o),i(n,l),R(r,n,null),i(n,a),i(n,s),i(n,c),i(n,L),i(n,d),i(n,g),C=!0},p:t,i(t){C||(N(r.$$.fragment,t),C=!0)},o(t){Z(r.$$.fragment,t),C=!1},d(t){t&&m(n),F(r)}}}let q="SLIME TEAM",Y="PASSIONATE INDIE GAME DEVELOPERS AND ARTIST COLLECTIVE";class W extends z{constructor(t){super(),V(this,t,null,J,r,{})}}function X(e){let n,o,l,r,a,s;return{c(){n=f("div"),o=f("a"),l=f("img"),c(l.src,r=e[0].icon)||h(l,"src",r),h(l,"alt",a=e[0].name),h(l,"class","svelte-1xsxn2y"),h(o,"href",s=e[0].url),h(o,"target","_blank"),h(o,"class","svelte-1xsxn2y"),h(n,"class","social-item svelte-1xsxn2y")},m(t,e){u(t,n,e),i(n,o),i(o,l)},p(t,[e]){1&e&&!c(l.src,r=t[0].icon)&&h(l,"src",r),1&e&&a!==(a=t[0].name)&&h(l,"alt",a),1&e&&s!==(s=t[0].url)&&h(o,"href",s)},i:t,o:t,d(t){t&&m(n)}}}function H(t,e,n){let{data:o}=e;return console.log(o.url),console.log(o.icon),console.log(o.name),t.$$set=t=>{"data"in t&&n(0,o=t.data)},[o]}class K extends z{constructor(t){super(),V(this,t,H,X,r,{data:0})}}function Q(t,e,n){const o=t.slice();return o[0]=e[n],o[2]=n,o}function tt(t){let e,n;return e=new K({props:{data:t[0]}}),{c(){B(e.$$.fragment)},m(t,o){R(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.data=t[0]),e.$set(o)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function et(t){let e,n,o,l=t[0],r=[];for(let e=0;e<l.length;e+=1)r[e]=tt(Q(t,l,e));const a=t=>Z(r[t],1,1,(()=>{r[t]=null}));return{c(){e=f("section"),n=f("div");for(let t=0;t<r.length;t+=1)r[t].c();h(n,"class","social svelte-b772qx")},m(t,l){u(t,e,l),i(e,n);for(let t=0;t<r.length;t+=1)r[t].m(n,null);o=!0},p(t,[e]){if(1&e){let o;for(l=t[0],o=0;o<l.length;o+=1){const a=Q(t,l,o);r[o]?(r[o].p(a,e),N(r[o],1)):(r[o]=tt(a),r[o].c(),N(r[o],1),r[o].m(n,null))}for(I(),o=l.length;o<r.length;o+=1)a(o);O()}},i(t){if(!o){for(let t=0;t<l.length;t+=1)N(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Z(r[t]);o=!1},d(t){t&&m(e),L(r,t)}}}function nt(t,e,n){let{social_data:o}=e;return t.$$set=t=>{"social_data"in t&&n(0,o=t.social_data)},[o]}class ot extends z{constructor(t){super(),V(this,t,nt,et,r,{social_data:0})}}function lt(e){let n,o,l,r,a,s,L,d,_,b,v,k=e[0].name+"",x=e[0].description+"";return{c(){n=f("div"),o=f("a"),l=f("img"),s=p(),L=f("div"),d=g(k),_=p(),b=f("div"),v=g(x),c(l.src,r=e[0].game_title)||h(l,"src",r),h(l,"alt",""),h(l,"class","svelte-1n2iapc"),h(o,"class","game-item-frame svelte-1n2iapc"),h(o,"href",a=e[0].link),h(o,"target","_blank"),$(o,"background-image","url("+e[0].background+")"),h(L,"class","game-item-name svelte-1n2iapc"),h(b,"class","game-item-desc svelte-1n2iapc"),h(n,"class","game-item img-hover-zoom svelte-1n2iapc")},m(t,e){u(t,n,e),i(n,o),i(o,l),i(n,s),i(n,L),i(L,d),i(n,_),i(n,b),i(b,v)},p(t,[e]){1&e&&!c(l.src,r=t[0].game_title)&&h(l,"src",r),1&e&&a!==(a=t[0].link)&&h(o,"href",a),1&e&&$(o,"background-image","url("+t[0].background+")"),1&e&&k!==(k=t[0].name+"")&&C(d,k),1&e&&x!==(x=t[0].description+"")&&C(v,x)},i:t,o:t,d(t){t&&m(n)}}}function rt(t,e,n){let{data:o}=e;return t.$$set=t=>{"data"in t&&n(0,o=t.data)},[o]}class at extends z{constructor(t){super(),V(this,t,rt,lt,r,{data:0})}}function st(t,e,n){const o=t.slice();return o[1]=e[n],o[3]=n,o}function ct(t){let e,n;return e=new at({props:{data:t[1]}}),{c(){B(e.$$.fragment)},m(t,o){R(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.data=t[1]),e.$set(o)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function it(t){let e,n,o,l,r,a,s,c=t[1],d=[];for(let e=0;e<c.length;e+=1)d[e]=ct(st(t,c,e));const $=t=>Z(d[t],1,1,(()=>{d[t]=null}));return{c(){e=f("section"),n=f("h1"),o=f("center"),l=g(t[0]),r=p(),a=f("div");for(let t=0;t<d.length;t+=1)d[t].c();h(n,"class","blue-title svelte-d48ecp"),h(a,"class","block_container svelte-d48ecp")},m(t,c){u(t,e,c),i(e,n),i(n,o),i(o,l),i(e,r),i(e,a);for(let t=0;t<d.length;t+=1)d[t].m(a,null);s=!0},p(t,[e]){if((!s||1&e)&&C(l,t[0]),2&e){let n;for(c=t[1],n=0;n<c.length;n+=1){const o=st(t,c,n);d[n]?(d[n].p(o,e),N(d[n],1)):(d[n]=ct(o),d[n].c(),N(d[n],1),d[n].m(a,null))}for(I(),n=c.length;n<d.length;n+=1)$(n);O()}},i(t){if(!s){for(let t=0;t<c.length;t+=1)N(d[t]);s=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)Z(d[t]);s=!1},d(t){t&&m(e),L(d,t)}}}function ut(t,e,n){let{block_data:o}=e,{block_title:l="OUR TITLE"}=e;return t.$$set=t=>{"block_data"in t&&n(1,o=t.block_data),"block_title"in t&&n(0,l=t.block_title)},[l,o]}class mt extends z{constructor(t){super(),V(this,t,ut,it,r,{block_data:1,block_title:0})}}function Lt(e){let n,o,l;return{c(){n=f("section"),o=f("div"),l=f("p"),l.textContent=`${ft}`,h(o,"class","block svelte-1doy0le")},m(t,e){u(t,n,e),i(n,o),i(o,l)},p:t,i:t,o:t,d(t){t&&m(n)}}}let ft="Slime Team Spa 2022 - All rights reserved.";class dt extends z{constructor(t){super(),V(this,t,null,Lt,r,{})}}var gt={content:{title:"Slime Team Game Development ",subtitle:"PASSIONATE INDIE GAME DEVELOPERS AND ARTIST COLLECTIVE'"},social:[{name:"Twitter",url:"https://twitter.com/slimeteamdev",icon:"./assets/twitter.png"},{name:"Itch.io",url:"https://slimeteam.itch.io",icon:"./assets/itch.png"},{name:"Instagram",url:"https://www.instagram.com/slime_gamedev",icon:"./assets/ig.png"},{name:"Reddit",url:"https://www.reddit.com/user/slimeteamdev",icon:"./assets/reddit.png"}],"current-game":{name:"Rhythm Match",itch_url:"https://slimeteam.itch.io/rhythm-match","game-logo":""},games:[{name:"Slimes Ate My City!",link:"https://franopx.itch.io/slimegamejam",background:"./assets/games/samc.png",game_title:"./assets/games/samc_logo.png",description:"A game made for the Mash-Up Game Jam 2020."},{name:"Speed Thief",link:"https://franopx.itch.io/speed-thief",background:"./assets/games/speed_thief.png",game_title:"./assets/games/speed_thief_logo.png",description:"1st place in the GOTM Game Jam."},{name:"Grow Your Way Out",link:"https://franopx.itch.io/grow-your-way-out",background:"https://img.itch.zone/aW1nLzYwOTYxNzkuZ2lm/original/kGbgGq.gif",game_title:"./assets/games/gywo_logo.png",description:"2nd place in 2D category for the Gogodot Game Jam."},{name:"Rhythm Match",link:"https://slimeteam.itch.io/rhythm-match",background:"./assets/games/rm3.png",game_title:"./assets/games/rm3_title.png",description:"A Match Three game, where the music keeps the rhythm of the action."}],team:[{name:"Juan R.",role:"Producer & Sound Design",icon:"",url:""},{name:"Nicolas A.",role:"UI/UX Designer",icon:"",url:""},{name:"Francisco G.",role:"2D Artist",icon:"",url:""},{name:"Gabriel O.",role:"Developer",icon:"",url:""},{name:"Alonso M.",role:"Game Designer",icon:"",url:""},{name:"Leandro G.",role:"Musician",icon:"",url:""}]};function pt(e){let n,o,l,r,a,s,c,L,d,g,C,$,_,b;return o=new W({}),a=new ot({props:{social_data:gt.social}}),d=new mt({props:{block_title:"OUR GAMES",block_data:gt.games}}),_=new dt({}),{c(){n=f("section"),B(o.$$.fragment),l=p(),r=f("div"),B(a.$$.fragment),s=p(),c=f("hr"),L=p(),B(d.$$.fragment),g=p(),C=f("hr"),$=p(),B(_.$$.fragment),h(r,"class","block svelte-35zehc"),h(n,"class","main-page svelte-35zehc")},m(t,e){u(t,n,e),R(o,n,null),i(n,l),i(n,r),R(a,r,null),i(n,s),i(n,c),i(n,L),R(d,n,null),i(n,g),i(n,C),i(n,$),R(_,n,null),b=!0},p:t,i(t){b||(N(o.$$.fragment,t),N(a.$$.fragment,t),N(d.$$.fragment,t),N(_.$$.fragment,t),b=!0)},o(t){Z(o.$$.fragment,t),Z(a.$$.fragment,t),Z(d.$$.fragment,t),Z(_.$$.fragment,t),b=!1},d(t){t&&m(n),F(o),F(a),F(d),F(_)}}}return new class extends z{constructor(t){super(),V(this,t,null,pt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
