(this.webpackJsonpnoisetime=this.webpackJsonpnoisetime||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(8),s=n(3),o=n(10),l=n(9),c=n(1),r=n(0),d=n.n(r),h=n(20),u=n.n(h),j=n(15),b=n.n(j),O=n(26),m=n(21),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={playing:!1,loaded:!1,loop:!0,mute:!1,volume:.15,seek:0,isSeeking:!1},i.handleToggle=i.handleToggle.bind(Object(s.a)(i)),i.handleOnLoad=i.handleOnLoad.bind(Object(s.a)(i)),i.handleOnEnd=i.handleOnEnd.bind(Object(s.a)(i)),i.handleOnPlay=i.handleOnPlay.bind(Object(s.a)(i)),i.handleStop=i.handleStop.bind(Object(s.a)(i)),i.renderSeekPos=i.renderSeekPos.bind(Object(s.a)(i)),i.handleLoopToggle=i.handleLoopToggle.bind(Object(s.a)(i)),i.handleMuteToggle=i.handleMuteToggle.bind(Object(s.a)(i)),i.handleMouseDownSeek=i.handleMouseDownSeek.bind(Object(s.a)(i)),i.handleMouseUpSeek=i.handleMouseUpSeek.bind(Object(s.a)(i)),i.handleSeekingChange=i.handleSeekingChange.bind(Object(s.a)(i)),i}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this.clearRAF()}},{key:"handleToggle",value:function(){this.setState({playing:!this.state.playing})}},{key:"handleOnLoad",value:function(){this.setState({loaded:!0,duration:this.player.duration()})}},{key:"handleOnPlay",value:function(){this.setState({playing:!0}),this.renderSeekPos()}},{key:"handleOnEnd",value:function(){this.setState({playing:!1}),this.clearRAF()}},{key:"handleStop",value:function(){this.player.stop(),this.setState({playing:!1}),this.renderSeekPos()}},{key:"handleLoopToggle",value:function(){this.setState({loop:!this.state.loop})}},{key:"handleMuteToggle",value:function(){this.setState({mute:!this.state.mute})}},{key:"handleMouseDownSeek",value:function(){this.setState({isSeeking:!0})}},{key:"handleMouseUpSeek",value:function(e){this.setState({isSeeking:!1}),this.player.seek(e.target.value)}},{key:"handleSeekingChange",value:function(e){this.setState({seek:parseFloat(e.target.value)})}},{key:"renderSeekPos",value:function(){this.state.isSeeking||this.setState({seek:this.player.seek()}),this.state.playing&&(this._raf=b()(this.renderSeekPos))}},{key:"clearRAF",value:function(){b.a.cancel(this._raf)}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"noise-control",children:[Object(c.jsx)(u.a,{src:["noise.mp3"],playing:this.state.playing,onLoad:this.handleOnLoad,onPlay:this.handleOnPlay,onEnd:this.handleOnEnd,loop:this.state.loop,mute:this.state.mute,volume:this.state.volume,ref:function(t){return e.player=t}}),this.state.loaded&&Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"volume my-2",children:Object(c.jsxs)("label",{children:["Volume:",Object(c.jsx)("input",{class:"form-control-range input-lg",type:"range",min:"0",max:"1",step:".01",value:this.state.volume,onChange:function(t){return e.setState({volume:parseFloat(t.target.value)})}})]})}),Object(c.jsx)(O.a,{variant:"outline-primary",size:"lg",onClick:this.handleToggle,children:this.state.playing?"Stop Noise":"Start Noise"})]}),!this.state.loaded&&Object(c.jsx)(m.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})]})}}]),n}(d.a.Component);t.default=p},53:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),o=n(19),l=n.n(o),c=(n(32),n(7)),r=n(8),d=n(10),h=n(9),u=n(33).default,j=n(12),b=n.n(j),O=(n(46),n(23)),m=n(24),p=n(25),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,i=e.items;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsxs)("div",{className:"mt-4",children:["Your IP is ",i.ip]}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(s.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.countapi.xyz/hit/noisify/visits").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,i=e.items;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):n?Object(a.jsxs)("div",{className:"mt-5",children:["Noisify has succesfully launched ",i.value," times in history."]}):Object(a.jsx)("div",{children:"Loading..."})}}]),n}(s.a.Component),f=n(22),y=n.n(f),k=n(16);k.a.initialize("G-49CPNXEPEK"),k.a.pageview(window.location.pathname+window.location.search);var S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O.a,{className:"bg-dark text-light py-5",fluid:!0,children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(p.a,{className:"text-center",children:[Object(a.jsx)("div",{className:"my-5",children:Object(a.jsx)(y.a,{size:50,height:40,margin:50,color:"#5a636d"})}),Object(a.jsx)("h1",{className:"title my-3",children:"Noisify"}),Object(a.jsx)(u,{className:"mt-3 mb-3"}),Object(a.jsx)(g,{}),Object(a.jsx)("div",{className:"mt-5",children:Object(a.jsx)(b.a,{initialTime:12e5,direction:"backward",children:function(){return Object(a.jsxs)(s.a.Fragment,{children:["20 minute burndown: ",Object(a.jsx)(b.a.Minutes,{})," minute ",Object(a.jsx)(b.a.Seconds,{})," seconds"]})}})}),Object(a.jsx)(v,{}),Object(a.jsxs)(b.a,{children:["This session: ",Object(a.jsx)(b.a.Minutes,{})," minutes ",Object(a.jsx)(b.a.Seconds,{})," seconds"]}),Object(a.jsxs)("p",{className:"mt-3",children:["A deep work tool made by ",Object(a.jsx)("a",{href:"https://focalise.ie",children:"Focalise"})]})]})})})}}]),n}(s.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),x()}},[[53,1,2]]]);
//# sourceMappingURL=main.528d70c6.chunk.js.map