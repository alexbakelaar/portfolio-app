(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),s=(a(14),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),b=(a(15),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light fixed-top navbar-shrink",id:"mainNav"},c.a.createElement("div",{class:"container"},c.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"#page-top"},"Alex Bakelaar"),c.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",c.a.createElement("i",{class:"fas fa-bars"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},c.a.createElement("ul",{class:"navbar-nav ml-auto"},c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#about"},"About")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#projects"},"Projects")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#hobbies"},"Hobbies")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#contact"},"Contact"))))))}}]),t}(n.Component)),d=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("section",{id:"about",class:"about-section text-center"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-lg-8 mx-auto"},c.a.createElement("h2",{class:"text-white mb-4"},"About"),c.a.createElement("p",{class:"text-white-50"},"I am newly graduated software developer from Sheridan College, where I graduated with a degree in Applied Computer Science. Currently I am developing independent software solutions and learning new software frameworks."))))))}}]),t}(n.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"row justify-content-center no-gutters mb-5 mb-lg-0"},c.a.createElement("div",{class:"col-lg-6"},c.a.createElement("img",{class:"img-fluid mb-3 mb-lg-0",src:this.props.item.image,alt:""})),c.a.createElement("div",{class:"col-lg-6"},c.a.createElement("div",{class:"bg-black text-center h-100 project"},c.a.createElement("div",{class:"d-flex h-100"},c.a.createElement("div",{class:"project-text w-100 my-auto text-center text-lg-left"},c.a.createElement("h4",{class:"text-white"},this.props.item.name),c.a.createElement("p",{class:"mb-0 text-white-50"},this.props.item.description),c.a.createElement("hr",{class:"d-none d-lg-block mb-0 ml-0"}))))))}}]),t}(c.a.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"row justify-content-center no-gutters"},c.a.createElement("div",{class:"col-lg-6"},c.a.createElement("img",{class:"img-fluid mb-3 mb-lg-0",src:this.props.item.image,alt:""})),c.a.createElement("div",{class:"col-lg-6 order-lg-first"},c.a.createElement("div",{class:"bg-black text-center h-100 project"},c.a.createElement("div",{class:"d-flex h-100"},c.a.createElement("div",{class:"project-text w-100 my-auto text-center text-lg-right"},c.a.createElement("h4",{class:"text-white"},this.props.item.name),c.a.createElement("p",{class:"mb-0 text-white-50"},this.props.item.description),c.a.createElement("hr",{class:"d-none d-lg-block mb-0 mr-0"}))))))}}]),t}(c.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var r,l=this.props.items[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var s=r.value;s.code%2==0?e.push(c.a.createElement(h,{item:s})):e.push(c.a.createElement(p,{item:s}))}}catch(i){a=!0,n=i}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}return c.a.createElement("section",{id:"projects",class:"projects-section bg-light"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row align-items-center no-gutters mb-4 mb-lg-5"},c.a.createElement("div",{class:"col-xl-8 col-lg-7"},c.a.createElement("img",{class:"img-fluid mb-3 mb-lg-0",src:"images/logo.svg",alt:""})),c.a.createElement("div",{class:"col-xl-4 col-lg-5"},c.a.createElement("div",{class:"featured-text text-center text-lg-left"},c.a.createElement("h4",null,"My website"),c.a.createElement("p",{class:"text-black-50 mb-0"},"This site uses React and NodeJS to run in the background, a new framework I recently picked up. Each card containing a project or hobby is being read from a json and then added to a component class used by React.")))),e))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={projects:[]},fetch("./project.json").then(function(e){return e.json()}).then(function(t){e.setState({projects:t})}).catch(function(e){return console.log(e)}),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(E,{items:this.state.projects})}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"row justify-content-center no-gutters mb-5 mb-lg-0"},c.a.createElement("div",{class:"col-lg-6"},c.a.createElement("img",{class:"img-fluid mb-3 mb-lg-0",src:this.props.item.image,alt:""})),c.a.createElement("div",{class:"col-lg-6"},c.a.createElement("div",{class:"bg-black text-center h-100 project"},c.a.createElement("div",{class:"d-flex h-100"},c.a.createElement("div",{class:"project-text w-100 my-auto text-center text-lg-left"},c.a.createElement("h4",{class:"text-white"},this.props.item.name),c.a.createElement("p",{class:"mb-0 text-white-50"},this.props.item.description),c.a.createElement("hr",{class:"d-none d-lg-block mb-0 ml-0"}))))))}}]),t}(c.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"row justify-content-center no-gutters"},c.a.createElement("div",{class:"col-lg-6"},c.a.createElement("img",{class:"img-fluid mb-3 mb-lg-0",src:this.props.item.image,alt:""})),c.a.createElement("div",{class:"col-lg-6 order-lg-first"},c.a.createElement("div",{class:"bg-black text-center h-100 project"},c.a.createElement("div",{class:"d-flex h-100"},c.a.createElement("div",{class:"project-text w-100 my-auto text-center text-lg-right"},c.a.createElement("h4",{class:"text-white"},this.props.item.name),c.a.createElement("p",{class:"mb-0 text-white-50"},this.props.item.description),c.a.createElement("hr",{class:"d-none d-lg-block mb-0 mr-0"}))))))}}]),t}(c.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var r,l=this.props.items[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var s=r.value;s.code%2==0?e.push(c.a.createElement(g,{item:s})):e.push(c.a.createElement(f,{item:s}))}}catch(i){a=!0,n=i}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}return c.a.createElement("section",{id:"hobbies",class:"projects-section bg-light"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row align-items-center no-gutters mb-4 mb-lg-5"},c.a.createElement("div",{class:"col-xl-8 col-lg-7"},c.a.createElement("img",{class:"img-fluid mb-3 mb-lg-0",src:"images/roadtrip.jpg",alt:""})),c.a.createElement("div",{class:"col-xl-4 col-lg-5"},c.a.createElement("div",{class:"featured-text text-center text-lg-left"},c.a.createElement("h4",null,"Road Trips"),c.a.createElement("p",{class:"text-black-50 mb-0"},"I ever since I learned to drive it has always been a personal goal of mine to drive across Canada. Starting in Ontario, I have driven to Vancouver Island and back. In the near future I plan on going out east so I can say I offically have been across Canada.")))),e))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={hobbies:[]},fetch("./hobbies.json").then(function(e){return e.json()}).then(function(t){e.setState({hobbies:t})}).catch(function(e){return console.log(e)}),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(j,{items:this.state.hobbies})}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("section",{class:"contact-section bg-black",id:"contact"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-4 mb-3 mb-md-0"},c.a.createElement("div",{class:"card py-4 h-100"},c.a.createElement("div",{class:"card-body text-center"},c.a.createElement("i",{class:"fas fa-map-marked-alt text-primary mb-2"}),c.a.createElement("h4",{class:"text-uppercase m-0"},"Address"),c.a.createElement("hr",{class:"my-4"}),c.a.createElement("div",{class:"small text-black-50"},"1229 Marlborough Court, Apt 314"),c.a.createElement("div",{class:"small text-black-50"},"Oakville ON, Canada")))),c.a.createElement("div",{class:"col-md-4 mb-3 mb-md-0"},c.a.createElement("div",{class:"card py-4 h-100"},c.a.createElement("div",{class:"card-body text-center"},c.a.createElement("i",{class:"fas fa-envelope text-primary mb-2"}),c.a.createElement("h4",{class:"text-uppercase m-0"},"Email"),c.a.createElement("hr",{class:"my-4"}),c.a.createElement("div",{class:"small text-black-50"},c.a.createElement("a",{href:"#"},"alexbakelaar@gmail.com"))))),c.a.createElement("div",{class:"col-md-4 mb-3 mb-md-0"},c.a.createElement("div",{class:"card py-4 h-100"},c.a.createElement("div",{class:"card-body text-center"},c.a.createElement("i",{class:"fas fa-mobile-alt text-primary mb-2"}),c.a.createElement("h4",{class:"text-uppercase m-0"},"Phone"),c.a.createElement("hr",{class:"my-4"}),c.a.createElement("div",{class:"small text-black-50"},"+1 (519) 292-9985"))))),c.a.createElement("div",{class:"social d-flex justify-content-center"},c.a.createElement("a",{href:"https://github.com/alexbakelaar",class:"mx-2"},c.a.createElement("i",{class:"fab fa-github"}))))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{class:"bg-black small text-center text-white-50"},c.a.createElement("div",{class:"container"},"Copyright \xa9 Alex Bakelaar 2019"))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{class:"masthead"},c.a.createElement("div",{class:"container d-flex h-100 align-items-center"},c.a.createElement("div",{class:"mx-auto text-center"},c.a.createElement("h1",{class:"mx-auto my-0 text-uppercase"},"Alex Bakelaar"),c.a.createElement("h2",{class:"text-white-50 mx-auto mt-2 mb-5"},"Software Developer"),c.a.createElement("a",{href:"#about",class:"btn btn-primary js-scroll-trigger"},"About"))))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(k,null),c.a.createElement(d,null),c.a.createElement(v,null),c.a.createElement(x,null),c.a.createElement(O,null),c.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(w,null),document.getElementById("page-top")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.46cf92a2.chunk.js.map