(this.webpackJsonpzenifiy=this.webpackJsonpzenifiy||[]).push([[0],{248:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a,s,i,o,r=n(3),c=n(0),l=n.n(c),u=n(26),d=n.n(u),f=n(55),m=n(56),b=n(73),p=n(72),h=n(57),g=n.n(h),j=n(58),y=n(14),v="SET_ACCESS_TOKEN",O="SET_CURRENT_SONG",x="SET_SONG_ANALYSIS",k=function(e){return function(t){var n=e.track;return t({type:O,payload:{isPlaying:e.isPlaying,artists:n.artists,durationMs:n.durationMs,id:n.id,image:n.image,name:n.name,uri:n.uri,progressMs:e.progressMs}})}},w=function(e){return function(t){return t({type:x,payload:{bars:e.bars,beats:e.beats,sections:e.sections,segments:e.segments,tatums:e.tatums,track:e.track}})}},S=1,N=141,T=73,A=0,P=.8,C=0,M=0,z=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).getContainer=function(e){return e.options.particles.move.noise.delay.value=.25,e.options.particles.move.noise.delay.random.enable=!0,e.setNoise({init:function(){},update:function(){},generate:function(e){return e.opacity.value=P,e.moveSpeed=S,e.color.value.h=N,e.color.value.s=T,e.noiseAngle||(e.noiseAngle=0),e.velocity.horizontal=M,e.noiseAngle=A,{angle:e.noiseAngle,length:.2}}}),e},o.togglePlay=function(){o.isPlaying?o.requestAnimationFrame=requestAnimationFrame(o.tick):(S=1,N=141,T=73,A=0,P=.8,C=0,M=0,cancelAnimationFrame(o.requestAnimationFrame))},o.tick=function(){o.timeKeeper(),o.requestAnimationFrame=requestAnimationFrame(o.tick)},o.timeKeeper=function(){var e=new Date;if(s=e-a+o.progress,o.props.segments.length>0&&s>0&&void 0!==o.props.segments[0].start&&o.props.isPlaying)for(var t=0;o.props.segments.length>=t;t++)if(t<o.props.segments.length-1&&Math.floor(1e3*o.props.segments[t].start)<s&&Math.floor(1e3*o.props.segments[t+1].start)>s&&o.props.segments[t]!==i){var n=(i=o.props.segments[t]).loudness_start+60,r=i.timbre[0],c=i.timbre[2],l=i.timbre[1],u=i.timbre[3],d=i.timbre[5];(T=10*c)>90?T=90:T<50&&(T=50),N=r*(S=.2*n)/1.5,C=u%S/2%2,isNaN(C)&&(C=0),A=t%20===0?l/2-d:2*l+d;break}},o.containerRef=Object(c.createRef)(),o.ParticleOptions=j,o.isPlaying=o.props.isPlaying,o.duration=o.props.duration,o.progress=o.props.progress,o.songStartTimestamp=null,o.songEndTimestamp=null,o.remainingDuration=o.props.duration-o.props.progress,o}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.segments=this.props.segments,i=this.props.segments[0],this.containerRef.current=this.getContainer(this.containerRef.current)}},{key:"componentDidUpdate",value:function(){this.segments=this.props.segments,this.isPlaying=this.props.isPlaying,this.remainingDuration=this.props.duration-this.props.progress,this.duration=this.props.duration,this.progress=this.props.progress;var e=new Date;a=e.getTime(),this.togglePlay()}},{key:"componentWillUnmount",value:function(){this.togglePlay(),cancelAnimationFrame(this.requestAnimationFrame)}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(g.a,{style:{pointerEvents:"none"},container:this.containerRef,id:"tsparticles",options:this.ParticleOptions})})}}]),n}(c.Component),D=Object(y.b)((function(e){return{isPlaying:e.setNowPlaying.isPlaying,duration:e.setNowPlaying.durationMs,progress:e.setNowPlaying.progressMs,sections:e.setSongAnalysis.sections,segments:e.setSongAnalysis.segments,bars:e.setSongAnalysis.bars,beats:e.setSongAnalysis.beats,tatums:e.setSongAnalysis.tatums}}),{setNowPlaying:k,setSongAnalysis:w})(z),R=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(D,{})})})},V=n(7),q=n.n(V),B=n(16),I=function(){var e=Object(B.a)(q.a.mark((function e(){var t,n,a,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t={},a=/([^&;=]+)=?([^&;]*)/g,s=window.location.hash.substring(1);n=a.exec(s);)t[n[1]]=decodeURIComponent(n[2]);o=t.access_token;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=n(12),F={accessToken:null,isLoggedIn:!1};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v:return Object(E.a)(Object(E.a)({},e),{},{accessToken:a.accessToken,isLoggedIn:a.isLoggedIn});default:return e}}var _=n.p+"static/media/logo.bb209a6a.svg";n(248);var Z=Object(y.b)((function(e){return{token:e.setToken.accessToken}}),{getToken:function(){return function(e){if(I(),null!==o)return e({type:v,payload:{accessToken:o,isLoggedIn:!0}})}},setToken:L})((function(e){var t=e.getToken;Object(c.useEffect)((function(){(function(){var e=Object(B.a)(q.a.mark((function e(){var n,a,s,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},s=/([^&;=]+)=?([^&;]*)/g,i=window.location.hash.substring(1);a=s.exec(i);)n[a[1]]=decodeURIComponent(a[2]);return e.next=5,n.access_token;case 5:if(!e.sent){e.next=9;break}return e.next=9,t();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var n=function(){var e=Object(B.a)(q.a.mark((function e(){var n,a,s,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},s=/([^&;=]+)=?([^&;]*)/g,i=window.location.hash.substring(1);a=s.exec(i);)n[a[1]]=decodeURIComponent(a[2]);return e.next=5,n.access_token;case 5:if(!e.sent){e.next=9;break}return e.next=9,t();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"authenticationBody",children:[Object(r.jsxs)("div",{className:"introTitle",children:["Zenify",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"introName",children:" By Silvanus Designs "})]}),Object(r.jsx)("img",{src:_,alt:"Silvanus Designs",className:"introLogo"}),Object(r.jsx)("a",{href:"/login",children:Object(r.jsx)("button",{className:"loginButton",onClick:function(){setTimeout((function(){n()}),2e3)},children:"Spotify Login Required"})})]})})),U=n(21),W=n(60),G=n.n(W),J=n(71),K=(n(250),n(251),n.p+"static/media/icon.43aa84d1.svg");var H=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"footerTextContainer",children:[Object(r.jsxs)("div",{className:"linkContainer",children:[Object(r.jsx)("a",{href:"https://github.com/SilasCundiff/zenify",children:Object(r.jsx)("i",{class:"fab fa-github-square"})}),Object(r.jsx)("a",{href:"https://developer.spotify.com/documentation/web-api/",children:Object(r.jsx)("i",{class:"fab fa-spotify"})}),Object(r.jsx)("a",{href:"https://silas-cundiff.dev/",children:Object(r.jsx)("img",{src:K,alt:"Silvanus Designs",className:"footerLogoIcon"})})]}),Object(r.jsx)("span",{className:"spotifySpan",children:"Music provided by Spotify"}),Object(r.jsxs)("span",{className:"reactSpan",children:["Made with ",Object(r.jsx)("i",{class:"fas fa-heart"})," using React"]}),Object(r.jsx)("footer",{className:"footer",children:"Zenify - Silvanus Designs - Silas Cundiff - Copyright\xa9 2021"})]}),Object(r.jsx)("img",{src:K,alt:"Silvanus Designs",className:"footerLogo"})]})},Y=new G.a;var $=Object(y.b)(null,{setNowPlaying:k})((function(e){var t=e.token,n=e.setNowPlaying,a=Object(c.useState)(""),s=Object(U.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(),u=Object(U.a)(l,2),d=u[0],f=u[1],m=Object(c.useState)("Enter a Track"),b=Object(U.a)(m,2),p=b[0],h=b[1],g=Object(c.useState)({type:"",id:""}),j=Object(U.a)(g,2),y=j[0],v=j[1],O=Object(c.useState)(!1),x=Object(U.a)(O,2),k=x[0],w=x[1],S=Object(c.useState)(!1),N=Object(U.a)(S,2),T=N[0],A=N[1];Y.setAccessToken(t);var P=null,C=function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o(t.target.value),!i){e.next=5;break}return e.next=5,n=i,null!==P&&P.abort(),void(P=Y.searchTracks(n,{limit:20})).then((function(e){var t=[];return P=null,e.tracks.items.map((function(e){return t.push(e)})),t}),(function(e){console.error(e)})).then((function(e){e.length>0?(f(e),h("Enter a Track")):h("No Results Found, please try a different track name")}));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e,t){v(Object(E.a)(Object(E.a)({},y),{},{type:"".concat(e),id:"".concat(t)}))};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"buttonContainer",children:[Object(r.jsx)("button",{className:"ZenModePlayer ".concat(T?"zen":"nozen"),id:"ZenPlayerButton",onClick:function(){A(!T)},children:"Zenify Player"}),Object(r.jsx)("button",{id:"ZenButton",className:"ZenMode ".concat(k?"zen":"nozen"),onClick:function(){w(!k)},children:"Zenify Search"})]}),Object(r.jsxs)("div",{className:"spotifyBody ".concat(k?"zen":"nozen"),children:[Object(r.jsx)("div",{className:"Search",children:Object(r.jsxs)("form",{className:"SearchForm show",onSubmit:C,children:[Object(r.jsx)("label",{htmlFor:"trackSearch",children:p}),Object(r.jsx)("input",{name:"trackSearch",type:"text",value:i||"",onChange:function(e){o(e.target.value)}})]})}),Object(r.jsx)("div",{className:"searchResultsTable ".concat(d?"show":"hide"),children:Object(r.jsxs)("table",{children:[d?Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Album cover"}),Object(r.jsx)("th",{children:"Track Name"}),Object(r.jsx)("th",{children:"Album"}),Object(r.jsx)("th",{children:"Artist"})]})}):null,d?Object(r.jsx)("tbody",{children:d.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{className:"searchResultAlbumImage",src:e.album.images[2].url,alt:"".concat(e.album.name)})}),Object(r.jsx)("td",{onClick:function(){M(e.type,e.id)},children:e.name}),Object(r.jsx)("td",{onClick:function(){M(e.album.type,e.album.id)},children:e.album.name}),Object(r.jsx)("td",{onClick:function(){M(e.artists[0].type,e.artists[0].id)},children:e.artists[0].name})]},"".concat(e.type,":").concat(e.id))}))}):null]})})]}),Object(r.jsx)("div",{className:"Player ".concat(T?"zen":"nozen"),children:y.id?Object(r.jsx)(J.a,{styles:{bgColor:"#191414",color:"#1DB954",loaderColor:"#1DB954",sliderColor:"#1DB954",trackArtistColor:"#1DB954",trackNameColor:"#1DB954"},token:t,uris:["spotify:".concat(y.type,":").concat(y.id)],callback:function(e){!function(e){n(e)}(e)}}):null}),k?null:Object(r.jsx)(H,{})]})}));var Q=Object(y.b)((function(e){return{token:e.setToken.accessToken,isLoggedIn:e.setToken.isLoggedIn}}))((function(e){var t=e.isLoggedIn,n=e.token;return Object(r.jsxs)("div",{children:[t?null:Object(r.jsx)(Z,{}),t&&Object(r.jsx)($,{token:n})]})})),X={isPlaying:!1,artists:"",durationMs:0,id:"",image:"",name:"",uri:""};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O:return Object(E.a)(Object(E.a)({},e),{},{isPlaying:a.isPlaying,artists:a.artists,durationMs:a.durationMs,id:a.id,image:a.image,name:a.name,uri:a.uri,progressMs:a.progressMs});default:return e}}var te=Object(y.b)((function(e){return{token:e.setToken.accessToken,id:e.setNowPlaying.id}}),{setToken:L,setNowPlaying:ee,setSongAnalysis:w})((function(e){var t=e.token,n=e.id,a=e.setSongAnalysis;return Object(c.useEffect)((function(){""!==n&&fetch("https://api.spotify.com/v1/audio-analysis/".concat(n),{method:"GET",headers:{Authorization:"Bearer ".concat(t)},mode:"cors",cache:"default"}).then((function(e){return e.json()})).then(function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("err",e)}))}),[n,t,a]),Object(r.jsx)("div",{style:{textAlign:"left"}})})),ne=(n(252),n(18)),ae=n(69),se=n(70),ie={bars:[],beats:[],sections:[],segments:[],tatums:[],track:{}};var oe=Object(ne.combineReducers)({setToken:L,setNowPlaying:ee,setSongAnalysis:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case x:return Object(E.a)(Object(E.a)({},e),{},{bars:a.bars,beats:a.beats,sections:a.sections,segments:a.segments,tatums:a.tatums,track:Object(E.a)({},a.track)});default:return e}}}),re=[se.a],ce=Object(ne.createStore)(oe,{},Object(ae.composeWithDevTools)(ne.applyMiddleware.apply(void 0,re)));function le(){return Object(r.jsx)(y.a,{store:ce,children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(Q,{}),Object(r.jsx)(te,{}),Object(r.jsx)(R,{style:{position:"absolute",top:0,left:0,right:0,bottom:0}})]})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e){e.exports=JSON.parse('{"autoPlay":true,"background":{"color":{"value":"#1a1a1a"},"image":"","position":"","repeat":"","size":"","opacity":1},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"backgroundMode":{"enable":true,"zIndex":-1},"detectRetina":true,"fpsLimit":60,"infection":{"cure":false,"delay":0,"enable":false,"infections":0,"stages":[]},"interactivity":{"detectsOn":"window","events":{"onClick":{"enable":false,"mode":[]},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":false,"mode":"slow","parallax":{"enable":false,"force":2,"smooth":10}},"resize":true},"modes":{"attract":{"distance":200,"duration":0.4,"speed":1},"bounce":{"distance":200},"bubble":{"distance":200,"duration":0.4},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":100,"links":{"blink":false,"consent":false,"opacity":1}},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}},"push":{"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"speed":1},"slow":{"factor":3,"radius":200},"trail":{"delay":0.005,"quantity":5,"particles":{"color":{"value":"#00ff00","animation":{"enable":true,"speed":400,"sync":true}},"collisions":{"enable":false,"bounce":{"horizontal":{"random":{}},"vertical":{"random":{}}}},"links":{"enable":false,"shadow":{},"triangles":{}},"move":{"outMode":"destroy","speed":5,"angle":{},"attract":{"rotate":{}},"gravity":{},"noise":{"delay":{"random":{}}},"outModes":{},"trail":{}},"size":{"value":5,"animation":{"enable":true,"speed":5,"minimumValue":1,"sync":false,"startValue":"min","destroy":"max"},"random":{}},"bounce":{"horizontal":{"random":{}},"vertical":{"random":{}}},"life":{"delay":{"random":{}},"duration":{"random":{}}},"number":{"density":{}},"opacity":{"animation":{},"random":{}},"rotate":{"animation":{}},"shadow":{"offset":{}},"shape":{},"stroke":{"color":{"value":"","animation":{"enable":false,"speed":0,"sync":false}}},"twinkle":{"lines":{},"particles":{}}}}}},"manualParticles":[],"motion":{"disable":false,"reduce":{"factor":4,"value":true}},"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":0},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":0}},"collisions":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"mode":"bounce"},"color":{"value":"#00ff00","animation":{"enable":false,"speed":20,"sync":true}},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"links":{"blink":false,"color":{"value":"random"},"consent":false,"distance":100,"enable":false,"frequency":1,"opacity":1,"shadow":{"blur":5,"color":{"value":"#00ff00"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"move":{"angle":{"offset":45,"value":90},"attract":{"enable":false,"rotate":{"x":3000,"y":3000}},"direction":"top","distance":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"maxSpeed":50},"noise":{"delay":{"random":{"enable":false,"minimumValue":0},"value":20},"enable":true},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":0.5,"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#1a1a1a"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":100},"opacity":{"random":{"enable":false,"minimumValue":0.3},"value":0.99,"animation":{"enable":false,"minimumValue":0,"speed":0.5,"sync":false}},"reduceDuplicates":false,"rotate":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","path":false},"shadow":{"blur":2,"color":{"value":"#ffffff"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{},"type":"circle"},"size":{"random":{"enable":true,"minimumValue":1},"value":5,"animation":{"destroy":"none","enable":true,"minimumValue":1,"speed":3,"startValue":"max","sync":false}},"stroke":{"width":0,"color":{"value":"","animation":{"enable":false,"speed":0,"sync":false}}},"twinkle":{"lines":{"enable":false,"frequency":8,"opacity":1,"color":{"value":"#0080c0"}},"particles":{"enable":false,"frequency":4,"opacity":1}}},"pauseOnBlur":true,"pauseOnOutsideViewport":false,"themes":[]}')}},[[253,1,2]]]);
//# sourceMappingURL=main.198ac893.chunk.js.map