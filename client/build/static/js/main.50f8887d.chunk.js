(this.webpackJsonpzenifiy=this.webpackJsonpzenifiy||[]).push([[0],{258:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a,s,i,o=n(3),r=n(0),c=n.n(r),l=n(34),u=n.n(l),d=n(65),m=n(66),f=n(84),b=n(83),p=n(67),g=n.n(p),h=n(68),j=n(19),y="SET_ACCESS_TOKEN",v="SET_CURRENT_SONG",O="SET_SONG_ANALYSIS",x=function(e){return function(t){var n=e.track;return t({type:v,payload:{isPlaying:e.isPlaying,artists:n.artists,durationMs:n.durationMs,id:n.id,image:n.image,name:n.name,uri:n.uri,progressMs:e.progressMs}})}},k=function(e){return function(t){return t({type:O,payload:{bars:e.bars,beats:e.beats,sections:e.sections,segments:e.segments,tatums:e.tatums,track:e.track}})}},w=1,S=141,N=73,T=0,A=.8,P=0,C=0,M=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).getContainer=function(e){return e.options.particles.move.noise.delay.value=.25,e.options.particles.move.noise.delay.random.enable=!0,e.setNoise({init:function(){},update:function(){},generate:function(e){return e.opacity.value=A,e.moveSpeed=w,e.color.value.h=S,e.color.value.s=N,e.noiseAngle||(e.noiseAngle=0),e.velocity.horizontal=C,e.noiseAngle=T,{angle:e.noiseAngle,length:.2}}}),e},o.togglePlay=function(){o.isPlaying?o.requestAnimationFrame=requestAnimationFrame(o.tick):(w=1,S=141,N=73,T=0,A=.8,P=0,C=0,cancelAnimationFrame(o.requestAnimationFrame))},o.tick=function(){o.timeKeeper(),o.requestAnimationFrame=requestAnimationFrame(o.tick)},o.timeKeeper=function(){var e=new Date;if(s=e-a+o.progress,o.props.segments.length>0&&s>0&&void 0!==o.props.segments[0].start&&o.props.isPlaying)for(var t=0;o.props.segments.length>=t;t++)if(t<o.props.segments.length-1&&Math.floor(1e3*o.props.segments[t].start)<s&&Math.floor(1e3*o.props.segments[t+1].start)>s&&o.props.segments[t]!==i){var n=(i=o.props.segments[t]).loudness_start+60,r=i.timbre[0],c=i.timbre[2],l=i.timbre[1],u=i.timbre[3],d=i.timbre[5];(N=10*c)>90?N=90:N<50&&(N=50),S=r*(w=.2*n)/1.5,P=u%w/2%2,isNaN(P)&&(P=0),T=t%20===0?l/2-d:2*l+d;break}},o.containerRef=Object(r.createRef)(),o.ParticleOptions=h,o.isPlaying=o.props.isPlaying,o.duration=o.props.duration,o.progress=o.props.progress,o.songStartTimestamp=null,o.songEndTimestamp=null,o.remainingDuration=o.props.duration-o.props.progress,o}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.segments=this.props.segments,i=this.props.segments[0],this.containerRef.current=this.getContainer(this.containerRef.current)}},{key:"componentDidUpdate",value:function(){this.segments=this.props.segments,this.isPlaying=this.props.isPlaying,this.remainingDuration=this.props.duration-this.props.progress,this.duration=this.props.duration,this.progress=this.props.progress;var e=new Date;a=e.getTime()+200,this.togglePlay()}},{key:"componentWillUnmount",value:function(){this.togglePlay(),cancelAnimationFrame(this.requestAnimationFrame)}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g.a,{style:{pointerEvents:"none"},container:this.containerRef,id:"tsparticles",options:this.ParticleOptions})})}}]),n}(r.Component),z=Object(j.b)((function(e){return{isPlaying:e.setNowPlaying.isPlaying,duration:e.setNowPlaying.durationMs,progress:e.setNowPlaying.progressMs,sections:e.setSongAnalysis.sections,segments:e.setSongAnalysis.segments,bars:e.setSongAnalysis.bars,beats:e.setSongAnalysis.beats,tatums:e.setSongAnalysis.tatums}}),{setNowPlaying:x,setSongAnalysis:k})(M),D=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(z,{})})})},V=n(11),q=n.n(V),B=n(26),I=n(15),L={accessToken:null,isLoggedIn:!1};function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return Object(I.a)(Object(I.a)({},e),{},{accessToken:a.accessToken,isLoggedIn:a.isLoggedIn});default:return e}}var E=n.p+"static/media/logo.c91c3072.svg";n(258);var F=Object(j.b)((function(e){return{token:e.setToken.accessToken,isLoggedIn:e.setToken.isLoggedIn}}),{getToken:function(e){return function(t){if(null!==e)return t({type:y,payload:{accessToken:e,isLoggedIn:!0}})}},setToken:R})((function(e){var t=e.getToken;return Object(r.useEffect)((function(){(function(){var e=Object(B.a)(q.a.mark((function e(){var n,a,s,i,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={},s=/([^&;=]+)=?([^&;]*)/g,i=window.location.hash.substring(1);a=s.exec(i);)n[a[1]]=decodeURIComponent(a[2]);return e.next=5,n.access_token;case 5:if(!(o=e.sent)){e.next=9;break}return e.next=9,t(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(o.jsxs)("div",{className:"authenticationBody",children:[Object(o.jsxs)("div",{className:"introTitle",children:["Zenify",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"introName",children:" By Silvanus Designs "})]}),Object(o.jsx)("img",{src:E,alt:"Silvanus Designs",className:"introLogo"}),Object(o.jsx)("a",{href:"/login",children:Object(o.jsx)("button",{className:"loginButton",children:"Spotify Login Required"})})]})})),Z=n(27),_=n(70),U=n.n(_),W=n(82),G=(n(260),n(261),n.p+"static/media/icon.dc240740.svg");var J=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"footerTextContainer",children:[Object(o.jsxs)("div",{className:"linkContainer",children:[Object(o.jsx)("a",{href:"https://github.com/SilasCundiff/zenify",children:Object(o.jsx)("i",{class:"fab fa-github-square"})}),Object(o.jsx)("a",{href:"https://developer.spotify.com/documentation/web-api/",children:Object(o.jsx)("i",{class:"fab fa-spotify"})}),Object(o.jsx)("a",{href:"https://silas-cundiff.dev/",children:Object(o.jsx)("img",{src:G,alt:"Silvanus Designs",className:"footerLogoIcon"})})]}),Object(o.jsx)("span",{className:"spotifySpan",children:"Music provided by Spotify"}),Object(o.jsxs)("span",{className:"reactSpan",children:["Made with ",Object(o.jsx)("i",{class:"fas fa-heart"})," using React"]}),Object(o.jsx)("footer",{className:"footer",children:"Zenify - Silvanus Designs - Silas Cundiff - Copyright\xa9 2021"})]}),Object(o.jsx)("img",{src:G,alt:"Silvanus Designs",className:"footerLogo"})]})},K=new U.a;var H=Object(j.b)(null,{setNowPlaying:x})((function(e){var t=e.token,n=e.setNowPlaying,a=Object(r.useState)(""),s=Object(Z.a)(a,2),i=s[0],c=s[1],l=Object(r.useState)(),u=Object(Z.a)(l,2),d=u[0],m=u[1],f=Object(r.useState)("Enter a Track"),b=Object(Z.a)(f,2),p=b[0],g=b[1],h=Object(r.useState)({type:"",id:""}),j=Object(Z.a)(h,2),y=j[0],v=j[1],O=Object(r.useState)(!1),x=Object(Z.a)(O,2),k=x[0],w=x[1],S=Object(r.useState)(!1),N=Object(Z.a)(S,2),T=N[0],A=N[1];K.setAccessToken(t);var P=null,C=function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c(t.target.value),!i){e.next=5;break}return e.next=5,n=i,null!==P&&P.abort(),void(P=K.searchTracks(n,{limit:20})).then((function(e){var t=[];return P=null,e.tracks.items.map((function(e){return t.push(e)})),t}),(function(e){console.error(e)})).then((function(e){e.length>0?(m(e),g("Enter a Track")):g("No Results Found, please try a different track name")}));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e,t){v(Object(I.a)(Object(I.a)({},y),{},{type:"".concat(e),id:"".concat(t)}))},z=function(e){n(e)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"buttonContainer",children:[Object(o.jsx)("button",{className:"ZenModePlayer ".concat(T?"zen":"nozen"),id:"ZenPlayerButton",onClick:function(){A(!T)},children:"Zenify Player"}),Object(o.jsx)("button",{id:"ZenButton",className:"ZenMode ".concat(k?"zen":"nozen"),onClick:function(){w(!k)},children:"Zenify Search"})]}),Object(o.jsxs)("div",{className:"spotifyBody ".concat(k?"zen":"nozen"),children:[Object(o.jsx)("div",{className:"Search",children:Object(o.jsxs)("form",{className:"SearchForm show",onSubmit:C,children:[Object(o.jsx)("label",{htmlFor:"trackSearch",children:p}),Object(o.jsx)("input",{name:"trackSearch",type:"text",value:i||"",onChange:function(e){c(e.target.value)}})]})}),Object(o.jsx)("div",{className:"searchResultsTable ".concat(d?"show":"hide"),children:Object(o.jsxs)("table",{children:[d?Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Album cover"}),Object(o.jsx)("th",{children:"Track Name"}),Object(o.jsx)("th",{children:"Album"}),Object(o.jsx)("th",{children:"Artist"})]})}):null,d?Object(o.jsx)("tbody",{children:d.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("img",{className:"searchResultAlbumImage",src:e.album.images[2].url,alt:"".concat(e.album.name)})}),Object(o.jsx)("td",{onClick:function(){M(e.type,e.id)},children:e.name}),Object(o.jsx)("td",{onClick:function(){M(e.album.type,e.album.id)},children:e.album.name}),Object(o.jsx)("td",{onClick:function(){M(e.artists[0].type,e.artists[0].id)},children:e.artists[0].name})]},"".concat(e.type,":").concat(e.id))}))}):null]})})]}),Object(o.jsx)("div",{className:"Player ".concat(T?"zen":"nozen"),children:y.id?Object(o.jsx)(W.a,{styles:{bgColor:"#191414",color:"#1DB954",loaderColor:"#1DB954",sliderColor:"#1DB954",trackArtistColor:"#1DB954",trackNameColor:"#1DB954"},token:t,uris:["spotify:".concat(y.type,":").concat(y.id)],callback:function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=z,e.next=3,t;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):null}),k?null:Object(o.jsx)(J,{})]})}));var Y=Object(j.b)((function(e){return{token:e.setToken.accessToken,isLoggedIn:e.setToken.isLoggedIn}}))((function(e){var t=e.isLoggedIn,n=e.token;return Object(o.jsxs)("div",{children:[t?null:Object(o.jsx)(F,{}),t&&Object(o.jsx)(H,{token:n})]})})),$={isPlaying:!1,artists:"",durationMs:0,id:"",image:"",name:"",uri:""};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v:return Object(I.a)(Object(I.a)({},e),{},{isPlaying:a.isPlaying,artists:a.artists,durationMs:a.durationMs,id:a.id,image:a.image,name:a.name,uri:a.uri,progressMs:a.progressMs});default:return e}}var X=Object(j.b)((function(e){return{token:e.setToken.accessToken,id:e.setNowPlaying.id}}),{setToken:R,setNowPlaying:Q,setSongAnalysis:k})((function(e){var t=e.token,n=e.id,a=e.setSongAnalysis,s=e.nowPlaying;return Object(r.useEffect)((function(){""!==n&&fetch("https://api.spotify.com/v1/audio-analysis/".concat(n),{method:"GET",headers:{Authorization:"Bearer ".concat(t)},mode:"cors",cache:"default"}).then((function(e){return e.json()})).then(function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("err",e)}))}),[n,t,a,s]),Object(o.jsx)("div",{style:{textAlign:"left"}})})),ee=n(81),te=n(8),ne=(n(262),n(23)),ae=n(79),se=n(80),ie={bars:[],beats:[],sections:[],segments:[],tatums:[],track:{}};var oe=Object(ne.combineReducers)({setToken:R,setNowPlaying:Q,setSongAnalysis:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O:return Object(I.a)(Object(I.a)({},e),{},{bars:a.bars,beats:a.beats,sections:a.sections,segments:a.segments,tatums:a.tatums,track:Object(I.a)({},a.track)});default:return e}}}),re=[se.a],ce=Object(ne.createStore)(oe,{},Object(ae.composeWithDevTools)(ne.applyMiddleware.apply(void 0,re)));function le(){return Object(o.jsx)(j.a,{store:ce,children:Object(o.jsx)(ee.a,{children:Object(o.jsx)(te.a,{path:"/",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(Y,{}),Object(o.jsx)(X,{}),Object(o.jsx)(D,{style:{position:"absolute",top:0,left:0,right:0,bottom:0}})]})})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e){e.exports=JSON.parse('{"autoPlay":true,"background":{"color":{"value":"#1a1a1a"},"image":"","position":"","repeat":"","size":"","opacity":1},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"backgroundMode":{"enable":true,"zIndex":-1},"detectRetina":true,"fpsLimit":60,"infection":{"cure":false,"delay":0,"enable":false,"infections":0,"stages":[]},"interactivity":{"detectsOn":"window","events":{"onClick":{"enable":false,"mode":[]},"onDiv":{"selectors":[],"enable":false,"mode":[],"type":"circle"},"onHover":{"enable":false,"mode":"slow","parallax":{"enable":false,"force":2,"smooth":10}},"resize":true},"modes":{"attract":{"distance":200,"duration":0.4,"speed":1},"bounce":{"distance":200},"bubble":{"distance":200,"duration":0.4},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":100,"links":{"blink":false,"consent":false,"opacity":1}},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}},"push":{"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"speed":1},"slow":{"factor":3,"radius":200},"trail":{"delay":0.005,"quantity":5,"particles":{"color":{"value":"#00ff00","animation":{"enable":true,"speed":400,"sync":true}},"collisions":{"enable":false,"bounce":{"horizontal":{"random":{}},"vertical":{"random":{}}}},"links":{"enable":false,"shadow":{},"triangles":{}},"move":{"outMode":"destroy","speed":5,"angle":{},"attract":{"rotate":{}},"gravity":{},"noise":{"delay":{"random":{}}},"outModes":{},"trail":{}},"size":{"value":5,"animation":{"enable":true,"speed":5,"minimumValue":1,"sync":false,"startValue":"min","destroy":"max"},"random":{}},"bounce":{"horizontal":{"random":{}},"vertical":{"random":{}}},"life":{"delay":{"random":{}},"duration":{"random":{}}},"number":{"density":{}},"opacity":{"animation":{},"random":{}},"rotate":{"animation":{}},"shadow":{"offset":{}},"shape":{},"stroke":{"color":{"value":"","animation":{"enable":false,"speed":0,"sync":false}}},"twinkle":{"lines":{},"particles":{}}}}}},"manualParticles":[],"motion":{"disable":false,"reduce":{"factor":4,"value":true}},"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":0},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":0}},"collisions":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"mode":"bounce"},"color":{"value":"#00ff00","animation":{"enable":false,"speed":20,"sync":true}},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"links":{"blink":false,"color":{"value":"random"},"consent":false,"distance":100,"enable":false,"frequency":1,"opacity":1,"shadow":{"blur":5,"color":{"value":"#00ff00"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"move":{"angle":{"offset":45,"value":90},"attract":{"enable":false,"rotate":{"x":3000,"y":3000}},"direction":"top","distance":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"maxSpeed":50},"noise":{"delay":{"random":{"enable":false,"minimumValue":0},"value":20},"enable":true},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":0.5,"straight":false,"trail":{"enable":false,"length":10,"fillColor":{"value":"#1a1a1a"}},"vibrate":false,"warp":false},"number":{"density":{"enable":true,"area":800,"factor":1000},"limit":0,"value":100},"opacity":{"random":{"enable":false,"minimumValue":0.3},"value":0.99,"animation":{"enable":false,"minimumValue":0,"speed":0.5,"sync":false}},"reduceDuplicates":false,"rotate":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"sync":false},"direction":"clockwise","path":false},"shadow":{"blur":2,"color":{"value":"#ffffff"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{},"type":"circle"},"size":{"random":{"enable":true,"minimumValue":1},"value":5,"animation":{"destroy":"none","enable":true,"minimumValue":1,"speed":3,"startValue":"max","sync":false}},"stroke":{"width":0,"color":{"value":"","animation":{"enable":false,"speed":0,"sync":false}}},"twinkle":{"lines":{"enable":false,"frequency":8,"opacity":1,"color":{"value":"#0080c0"}},"particles":{"enable":false,"frequency":4,"opacity":1}}},"pauseOnBlur":true,"pauseOnOutsideViewport":false,"themes":[]}')}},[[264,1,2]]]);
//# sourceMappingURL=main.50f8887d.chunk.js.map