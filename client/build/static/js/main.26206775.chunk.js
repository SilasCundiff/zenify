(this.webpackJsonpzenifiy=this.webpackJsonpzenifiy||[]).push([[0],{258:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a,s,i=n(3),o=n(0),r=n.n(o),c=n(34),l=n.n(c),u=n(65),d=n(66),m=n(84),f=n(83),b=n(67),p=n.n(b),g=n(68),h=n(19),j="SET_ACCESS_TOKEN",y="SET_CURRENT_SONG",v="SET_SONG_ANALYSIS",O=function(e){return function(t){var n=e.track;return t({type:y,payload:{isPlaying:e.isPlaying,artists:n.artists,durationMs:n.durationMs,id:n.id,image:n.image,name:n.name,uri:n.uri,progressMs:e.progressMs}})}},x=function(e){return function(t){return t({type:v,payload:{bars:e.bars,beats:e.beats,sections:e.sections,segments:e.segments,tatums:e.tatums,track:e.track}})}},k=1,w=141,S=73,N=0,T=.8,A=0,P=0,C=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).getContainer=function(e){return e.options.particles.move.noise.delay.value=.25,e.options.particles.move.noise.delay.random.enable=!0,e.setNoise({init:function(){},update:function(){},generate:function(e){return e.opacity.value=T,e.moveSpeed=k,e.color.value.h=w,e.color.value.s=S,e.noiseAngle||(e.noiseAngle=0),e.velocity.horizontal=P,e.noiseAngle=N,{angle:e.noiseAngle,length:.2}}}),e},i.togglePlay=function(){i.isPlaying?i.requestAnimationFrame=requestAnimationFrame(i.tick):(k=1,w=141,S=73,N=0,T=.8,A=0,P=0,cancelAnimationFrame(i.requestAnimationFrame))},i.tick=function(){i.timeKeeper(),i.requestAnimationFrame=requestAnimationFrame(i.tick)},i.timeKeeper=function(){var e=new Date;if(a=e-i.songStartTimestamp+i.progress,i.props.segments.length>0&&a>0&&void 0!==i.props.segments[0].start&&i.props.isPlaying)for(var t=0;i.props.segments.length>=t;t++)if(t<i.props.segments.length-1&&Math.floor(1e3*i.props.segments[t].start)<a&&Math.floor(1e3*i.props.segments[t+1].start)>a&&i.props.segments[t]!==s){var n=(s=i.props.segments[t]).loudness_start+60,o=s.timbre[0],r=s.timbre[2],c=s.timbre[1],l=s.timbre[3],u=s.timbre[5];(S=10*r)>90?S=90:S<50&&(S=50),w=o*(k=.2*n)/1.5,A=l%k/2%2,isNaN(A)&&(A=0),N=t%20===0?c/2-u:2*c+u;break}},i.containerRef=Object(o.createRef)(),i.ParticleOptions=g,i.isPlaying=i.props.isPlaying,i.duration=i.props.duration,i.progress=i.props.progress,i.songStartTimestamp=null,i.songEndTimestamp=null,i.remainingDuration=i.props.duration-i.props.progress,i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.segments=this.props.segments,s=this.props.segments[0],this.containerRef.current=this.getContainer(this.containerRef.current)}},{key:"componentDidUpdate",value:function(){var e=(new Date).getTime()+900;this.segments=this.props.segments,this.isPlaying=this.props.isPlaying,this.remainingDuration=this.props.duration-this.props.progress,this.duration=this.props.duration,this.progress=this.props.progress,this.songStartTimestamp=e,console.log("songStartTimestamp",e),this.togglePlay()}},{key:"componentWillUnmount",value:function(){this.togglePlay(),cancelAnimationFrame(this.requestAnimationFrame)}},{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p.a,{style:{pointerEvents:"none"},container:this.containerRef,id:"tsparticles",options:this.ParticleOptions})})}}]),n}(o.Component),M=Object(h.b)((function(e){return{isPlaying:e.setNowPlaying.isPlaying,duration:e.setNowPlaying.durationMs,progress:e.setNowPlaying.progressMs,sections:e.setSongAnalysis.sections,segments:e.setSongAnalysis.segments,bars:e.setSongAnalysis.bars,beats:e.setSongAnalysis.beats,tatums:e.setSongAnalysis.tatums}}),{setNowPlaying:O,setSongAnalysis:x})(C),z=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(M,{})})})},D=n(11),V=n.n(D),q=n(26),B=n(15),I={accessToken:null,isLoggedIn:!1};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return Object(B.a)(Object(B.a)({},e),{},{accessToken:a.accessToken,isLoggedIn:a.isLoggedIn});default:return e}}var R=n.p+"static/media/logo.c91c3072.svg";n(258);var E=Object(h.b)((function(e){return{token:e.setToken.accessToken,isLoggedIn:e.setToken.isLoggedIn}}),{getToken:function(e){return function(t){if(null!==e)return t({type:j,payload:{accessToken:e,isLoggedIn:!0}})}},setToken:L})((function(e){var t=e.getToken;return Object(o.useEffect)((function(){(function(){var e=Object(q.a)(V.a.mark((function e(){var n,a,s,i,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},s=/([^&;=]+)=?([^&;]*)/g,i=window.location.hash.substring(1);a=s.exec(i);)n[a[1]]=decodeURIComponent(a[2]);return e.next=5,n.access_token;case 5:if(!(o=e.sent)){e.next=9;break}return e.next=9,t(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(i.jsxs)("div",{className:"authenticationBody",children:[Object(i.jsxs)("div",{className:"introTitle",children:["Zenify",Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"introName",children:" By Silvanus Designs "})]}),Object(i.jsx)("img",{src:R,alt:"Silvanus Designs",className:"introLogo"}),Object(i.jsx)("a",{href:"/login",children:Object(i.jsx)("button",{className:"loginButton",children:"Spotify Login Required"})})]})})),F=n(27),Z=n(70),_=n.n(Z),U=n(82),W=(n(260),n(261),n.p+"static/media/icon.dc240740.svg");var G=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"footerTextContainer",children:[Object(i.jsxs)("div",{className:"linkContainer",children:[Object(i.jsx)("a",{href:"https://github.com/SilasCundiff/zenify",children:Object(i.jsx)("i",{class:"fab fa-github-square"})}),Object(i.jsx)("a",{href:"https://developer.spotify.com/documentation/web-api/",children:Object(i.jsx)("i",{class:"fab fa-spotify"})}),Object(i.jsx)("a",{href:"https://silas-cundiff.dev/",children:Object(i.jsx)("img",{src:W,alt:"Silvanus Designs",className:"footerLogoIcon"})})]}),Object(i.jsx)("span",{className:"spotifySpan",children:"Music provided by Spotify"}),Object(i.jsxs)("span",{className:"reactSpan",children:["Made with ",Object(i.jsx)("i",{class:"fas fa-heart"})," using React"]}),Object(i.jsx)("footer",{className:"footer",children:"Zenify - Silvanus Designs - Silas Cundiff - Copyright\xa9 2021"})]}),Object(i.jsx)("img",{src:W,alt:"Silvanus Designs",className:"footerLogo"})]})},J=new _.a;var K=Object(h.b)(null,{setNowPlaying:O})((function(e){var t=e.token,n=e.setNowPlaying,a=Object(o.useState)(""),s=Object(F.a)(a,2),r=s[0],c=s[1],l=Object(o.useState)(),u=Object(F.a)(l,2),d=u[0],m=u[1],f=Object(o.useState)("Enter a Track"),b=Object(F.a)(f,2),p=b[0],g=b[1],h=Object(o.useState)({type:"",id:""}),j=Object(F.a)(h,2),y=j[0],v=j[1],O=Object(o.useState)(!1),x=Object(F.a)(O,2),k=x[0],w=x[1],S=Object(o.useState)(!1),N=Object(F.a)(S,2),T=N[0],A=N[1];J.setAccessToken(t);var P=null,C=function(){var e=Object(q.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c(t.target.value),!r){e.next=5;break}return e.next=5,n=r,null!==P&&P.abort(),void(P=J.searchTracks(n,{limit:20})).then((function(e){var t=[];return P=null,e.tracks.items.map((function(e){return t.push(e)})),t}),(function(e){console.error(e)})).then((function(e){e.length>0?(m(e),g("Enter a Track")):g("No Results Found, please try a different track name")}));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e,t){v(Object(B.a)(Object(B.a)({},y),{},{type:"".concat(e),id:"".concat(t)}))},z=function(e){n(e),console.log(e)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"buttonContainer",children:[Object(i.jsx)("button",{className:"ZenModePlayer ".concat(T?"zen":"nozen"),id:"ZenPlayerButton",onClick:function(){A(!T)},children:"Zenify Player"}),Object(i.jsx)("button",{id:"ZenButton",className:"ZenMode ".concat(k?"zen":"nozen"),onClick:function(){w(!k)},children:"Zenify Search"})]}),Object(i.jsxs)("div",{className:"spotifyBody ".concat(k?"zen":"nozen"),children:[Object(i.jsx)("div",{className:"Search",children:Object(i.jsxs)("form",{className:"SearchForm show",onSubmit:C,children:[Object(i.jsx)("label",{htmlFor:"trackSearch",children:p}),Object(i.jsx)("input",{name:"trackSearch",type:"text",value:r||"",onChange:function(e){c(e.target.value)}})]})}),Object(i.jsx)("div",{className:"searchResultsTable ".concat(d?"show":"hide"),children:Object(i.jsxs)("table",{children:[d?Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Album cover"}),Object(i.jsx)("th",{children:"Track Name"}),Object(i.jsx)("th",{children:"Album"}),Object(i.jsx)("th",{children:"Artist"})]})}):null,d?Object(i.jsx)("tbody",{children:d.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{className:"searchResultAlbumImage",src:e.album.images[2].url,alt:"".concat(e.album.name)})}),Object(i.jsx)("td",{onClick:function(){M(e.type,e.id)},children:e.name}),Object(i.jsx)("td",{onClick:function(){M(e.album.type,e.album.id)},children:e.album.name}),Object(i.jsx)("td",{onClick:function(){M(e.artists[0].type,e.artists[0].id)},children:e.artists[0].name})]},"".concat(e.type,":").concat(e.id))}))}):null]})})]}),Object(i.jsx)("div",{className:"Player ".concat(T?"zen":"nozen"),children:y.id?Object(i.jsx)(U.a,{styles:{bgColor:"#191414",color:"#1DB954",loaderColor:"#1DB954",sliderColor:"#1DB954",trackArtistColor:"#1DB954",trackNameColor:"#1DB954"},token:t,uris:["spotify:".concat(y.type,":").concat(y.id)],callback:function(){var e=Object(q.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,t;case 3:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.t2=z,e.next=8,t;case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):null}),k?null:Object(i.jsx)(G,{})]})}));var H=Object(h.b)((function(e){return{token:e.setToken.accessToken,isLoggedIn:e.setToken.isLoggedIn}}))((function(e){var t=e.isLoggedIn,n=e.token;return Object(i.jsxs)("div",{children:[t?null:Object(i.jsx)(E,{}),t&&Object(i.jsx)(K,{token:n})]})})),Y={isPlaying:!1,artists:"",durationMs:0,id:"",image:"",name:"",uri:""};function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return Object(B.a)(Object(B.a)({},e),{},{isPlaying:a.isPlaying,artists:a.artists,durationMs:a.durationMs,id:a.id,image:a.image,name:a.name,uri:a.uri,progressMs:a.progressMs});default:return e}}var Q=Object(h.b)((function(e){return{token:e.setToken.accessToken,id:e.setNowPlaying.id}}),{setToken:L,setNowPlaying:$,setSongAnalysis:x})((function(e){var t=e.token,n=e.id,a=e.setSongAnalysis,s=e.nowPlaying;return Object(o.useEffect)((function(){""!==n&&fetch("https://api.spotify.com/v1/audio-analysis/".concat(n),{method:"GET",headers:{Authorization:"Bearer ".concat(t)},mode:"cors",cache:"default"}).then((function(e){return e.json()})).then(function(){var e=Object(q.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("err",e)}))}),[n,t,a,s]),Object(i.jsx)("div",{style:{textAlign:"left"}})})),X=n(81),ee=n(8),te=(n(262),n(23)),ne=n(79),ae=n(80),se={bars:[],beats:[],sections:[],segments:[],tatums:[],track:{}};var ie=Object(te.combineReducers)({setToken:L,setNowPlaying:$,setSongAnalysis:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v:return Object(B.a)(Object(B.a)({},e),{},{bars:a.bars,beats:a.beats,sections:a.sections,segments:a.segments,tatums:a.tatums,track:Object(B.a)({},a.track)});default:return e}}}),oe=[ae.a],re=Object(te.createStore)(ie,{},Object(ne.composeWithDevTools)(te.applyMiddleware.apply(void 0,oe)));function ce(){return Object(i.jsx)(h.a,{store:re,children:Object(i.jsx)(X.a,{children:Object(i.jsx)(ee.a,{path:"/",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(H,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(z,{style:{position:"absolute",top:0,left:0,right:0,bottom:0}})]})})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e){e.exports=JSON.parse('{"autoPlay":true,"background":{"color":{"value":"#1a1a1a"},"image":"","position":"","repeat":"","size":"","opacity":1},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"backgroundMode":{"enable":true,"zIndex":-1},"detectRetina":true,"fpsLimit":60,"infection":{"cure":false,"delay":0,"enable":false,"infections":0,"stages":[]},"interactivity":{"detectsOn":"window","events":{"onClick":{"enable":false,"mode":[]},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":false,"mode":"slow","parallax":{"enable":false,"force":2,"smooth":10}},"resize":true},"modes":{"attract":{"distance":200,"duration":0.4,"speed":1},"bounce":{"distance":200},"bubble":{"distance":200,"duration":0.4},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":100,"links":{"blink":false,"consent":false,"opacity":1}},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}},"push":{"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"speed":1},"slow":{"factor":3,"radius":200},"trail":{"delay":0.005,"quantity":5,"particles":{"color":{"value":"#00ff00","animation":{"enable":true,"speed":400,"sync":true}},"collisions":{"enable":false,"bounce":{"horizontal":{"random":{}},"vertical":{"random":{}}}},"links":{"enable":false,"shadow":{},"triangles":{}},"move":{"outMode":"destroy","speed":5,"angle":{},"attract":{"rotate":{}},"gravity":{},"noise":{"delay":{"random":{}}},"outModes":{},"trail":{}},"size":{"value":5,"animation":{"enable":true,"speed":5,"minimumValue":1,"sync":false,"startValue":"min","destroy":"max"},"random":{}},"bounce":{"horizontal":{"random":{}},"vertical":{"random":{}}},"life":{"delay":{"random":{}},"duration":{"random":{}}},"number":{"density":{}},"opacity":{"animation":{},"random":{}},"rotate":{"animation":{}},"shadow":{"offset":{}},"shape":{},"stroke":{"color":{"value":"","animation":{"enable":false,"speed":0,"sync":false}}},"twinkle":{"lines":{},"particles":{}}}}}},"manualParticles":[],"motion":{"disable":false,"reduce":{"factor":4,"value":true}},"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":0},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":0}},"collisions":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"mode":"bounce"},"color":{"value":"#00ff00","animation":{"enable":false,"speed":20,"sync":true}},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"links":{"blink":false,"color":{"value":"random"},"consent":false,"distance":100,"enable":false,"frequency":1,"opacity":1,"shadow":{"blur":5,"color":{"value":"#00ff00"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"move":{"angle":{"offset":45,"value":90},"attract":{"enable":false,"rotate":{"x":3000,"y":3000}},"direction":"top","distance":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"maxSpeed":50},"noise":{"delay":{"random":{"enable":false,"minimumValue":0},"value":20},"enable":true},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":0.5,"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#1a1a1a"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":100},"opacity":{"random":{"enable":false,"minimumValue":0.3},"value":0.99,"animation":{"enable":false,"minimumValue":0,"speed":0.5,"sync":false}},"reduceDuplicates":false,"rotate":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","path":false},"shadow":{"blur":2,"color":{"value":"#ffffff"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{},"type":"circle"},"size":{"random":{"enable":true,"minimumValue":1},"value":5,"animation":{"destroy":"none","enable":true,"minimumValue":1,"speed":3,"startValue":"max","sync":false}},"stroke":{"width":0,"color":{"value":"","animation":{"enable":false,"speed":0,"sync":false}}},"twinkle":{"lines":{"enable":false,"frequency":8,"opacity":1,"color":{"value":"#0080c0"}},"particles":{"enable":false,"frequency":4,"opacity":1}}},"pauseOnBlur":true,"pauseOnOutsideViewport":false,"themes":[]}')}},[[264,1,2]]]);
//# sourceMappingURL=main.26206775.chunk.js.map