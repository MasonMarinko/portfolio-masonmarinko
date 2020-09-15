(this["webpackJsonpportfolio-masonmarinko"]=this["webpackJsonpportfolio-masonmarinko"]||[]).push([[0],[,,,,,,,,function(e,t,a){var n={"./projects/0.png":18,"./projects/1.png":19,"./projects/2.png":20,"./projects/3.png":21,"./projects/4.png":22,"./projects/5.png":23,"./readme-image/aboutme-full.png":24,"./readme-image/aboutme-mobile.png":25,"./readme-image/contacts-full.png":26,"./readme-image/contacts-mobile.png":27,"./readme-image/header-full.png":28,"./readme-image/header-mobile.png":29,"./readme-image/modal.png":30,"./readme-image/projects-full.png":31,"./readme-image/projects-mobile.png":32};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=8},,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/0.59b91576.png"},function(e,t,a){e.exports=a.p+"static/media/1.56fbdbb1.png"},function(e,t,a){e.exports=a.p+"static/media/2.e42574d9.png"},function(e,t,a){e.exports=a.p+"static/media/3.b68b8dd8.png"},function(e,t,a){e.exports=a.p+"static/media/4.444c8eee.png"},function(e,t,a){e.exports=a.p+"static/media/5.2ddd4a55.png"},function(e,t,a){e.exports=a.p+"static/media/aboutme-full.13a542c9.png"},function(e,t,a){e.exports=a.p+"static/media/aboutme-mobile.e9d1ee13.png"},function(e,t,a){e.exports=a.p+"static/media/contacts-full.ba007f90.png"},function(e,t,a){e.exports=a.p+"static/media/contacts-mobile.a132d37e.png"},function(e,t,a){e.exports=a.p+"static/media/header-full.658776ff.png"},function(e,t,a){e.exports=a.p+"static/media/header-mobile.0f7cc497.png"},function(e,t,a){e.exports=a.p+"static/media/modal.d5a11eb5.png"},function(e,t,a){e.exports=a.p+"static/media/projects-full.efdcd6e2.png"},function(e,t,a){e.exports=a.p+"static/media/projects-mobile.01ad44ae.png"},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),s=(a(17),a(2));function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}var m=function(e){var t=e.categories,a=void 0===t?[]:t,r=e.setCurrentCategory,c=e.currentCategory,s=e.contactSelected,m=e.setContactSelected;return Object(n.useEffect)((function(){document.title=i(c.name)}),[c]),o.a.createElement("header",{className:"flex-row px-1"},o.a.createElement("h2",null,o.a.createElement("a",{className:"page-title","data-testid":"link",href:"https://github.com/masonmarinko"},o.a.createElement("span",{role:"img","aria-label":"camera"}," ")," ","Mason Marinko Portfolio")),o.a.createElement("nav",null,o.a.createElement("ul",{className:"nav-buttons flex-row"},o.a.createElement("li",{className:"mx-1"},o.a.createElement("a",{className:"nav-buttons about-nav","data-testid":"about",href:"#about",onClick:function(){return m(!1)}},"About Me")),o.a.createElement("li",{className:"mx-1 ".concat(s&&"navActive")},o.a.createElement("span",{className:"nav-buttons contact-nav",onClick:function(){return m(!0)}},"Contact")),a.map((function(e){return o.a.createElement("li",{className:"mx-1 ".concat(c.name===e.name&&!s&&"navActive"),key:e.name},o.a.createElement("span",{className:"nav-buttons projects-nav",onClick:function(){r(e),m(!1)}},i(e.name)))})),o.a.createElement("li",{className:"mx-1"},o.a.createElement("a",{className:"nav-buttons about-nav",target:"_blank",href:"https://docs.google.com/document/d/1azzpUd0hBnXtuGDOOkl5xZMQx0bgtK04a-33nAHLQPc/edit?usp=sharing"},"Resume")))))};var l=function(){return o.a.createElement("section",{className:"my-5"},o.a.createElement("h1",{id:"about"},"About Me"),o.a.createElement("div",{className:"about-me"},o.a.createElement("img",{className:"my-photo",src:"https://i.imgur.com/yYGmKfe.jpg",alt:"Photo of Mason Marinko"}),o.a.createElement("p",{className:"about-me-text"},"My name is Mason Marinko, I am a Husband to 1 and Father to 3. I believe a website should be much like a handshake, or a first impression. It invites people to get to know your business at a glance. I would love to make sure your first impression and website gives the right message and helps you grow your business! Contact me today!")))},u=a(3);var p=function(e){var t=e.onClose,n=e.currentPhoto,r=n.name,c=n.url,s=n.github,i=n.category,m=n.description,l=n.index;return o.a.createElement("div",{className:"modalBackdrop"},o.a.createElement("div",{className:"modalContainer"},o.a.createElement("h3",{className:"modalTitle"},"Project Name: ",r),o.a.createElement("img",{className:"modal-image",src:a(8)("./".concat(i,"/").concat(l,".png")),alt:"current category"}),o.a.createElement("p",{className:"description-header"},"Description:"),o.a.createElement("p",{className:"description-text"},m),o.a.createElement("div",{className:"website-button flex-row"},o.a.createElement("button",{className:" close-button",href:c,target:"_blank"},"View Website"),o.a.createElement("button",{className:"close-button",href:s,target:"_blank"},"View Github")),o.a.createElement("br",null),o.a.createElement("div",{className:"close-button flex-row"},o.a.createElement("button",{onClick:t,type:"button"},"Close"))))},d=function(e){var t=e.category,r=Object(n.useState)([{name:"Media Collector",category:"projects",github:"https://www.github.com/masonmarinko/movie-collector",url:"https://media-collector-project.herokuapp.com/",description:"In this project we created a way to easily store your movies and books. You also share and comment with others in the community!"},{name:"Media 4U",category:"projects",github:"https://www.github.com/zqwhiting/media4u",url:"https://ZQWhiting.github.io/media4u",description:"Want an easy way to search books and movies? Look no further Media 4U is here!"},{name:"Run Buddy",category:"projects",github:"https://www.github.com/masonmarinko/runbuddy",url:"https://masonmarinko.github.io/runbuddy",description:'Created a website for workout company "Run Buddy"'},{name:"Scheduler",category:"projects",github:"https://www.github.com/masonmarinko/scheduler",url:"https://masonmarinko.github.io/scheduler",description:"Create tasks based on time, this calendar will change color based on the time and whether it is on-time, past-time, or upcoming"},{name:"Password Generator",category:"projects",github:"https://www.github.com/masonmarinko/password-generator",url:"https://masonmarinko.github.io/password-generator",description:"After answering a few easy questions about the features of your password, this app will create a random and secure password for you!"},{name:"Taskinator",category:"projects",github:"https://www.github.com/masonmarinko/taskinator",url:"https://masonmarinko.github.io/taskinator",description:"Keep track of your daily tasks on this easy to use website that allows you to mark tasks as need to do, currently working on, or done!"}]),c=Object(s.a)(r,1)[0].filter((function(e){return e.category===t})),i=Object(n.useState)(),m=Object(s.a)(i,2),l=m[0],d=m[1],g=Object(n.useState)(!1),h=Object(s.a)(g,2),b=h[0],f=h[1],E=function(e,t){d(Object(u.a)(Object(u.a)({},e),{},{index:t})),f(!b)};return o.a.createElement("div",null,b&&o.a.createElement(p,{currentPhoto:l,onClose:E}),o.a.createElement("div",{className:"project-thumbnail flex-row"},c.map((function(e,n){return o.a.createElement("img",{src:a(8)("./".concat(t,"/").concat(n,".png")),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return E(e,n)},key:e.name})}))))};var g=function(e){var t=e.currentCategory,a=t.name,n=t.description;return o.a.createElement("section",null,o.a.createElement("h1",{className:"project-title","data-testid":"h1tag"},i(a)),o.a.createElement("p",{className:"project-description-text"},n),o.a.createElement(d,{category:t.name}))},h=a(4);var b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({name:"",email:"",message:""}),i=Object(s.a)(c,2),m=i[0],l=i[1],p=m.name,d=m.email,g=m.message;function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),r(t?"":"Your email is invalid.")}l(Object(u.a)(Object(u.a)({},m),{},Object(h.a)({},e.target.name,e.target.value))),a||l(Object(u.a)(Object(u.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))}return o.a.createElement("section",null,o.a.createElement("h1",{className:"contact-title"},"Contact me"),o.a.createElement("form",{className:"contact-form",id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(m)}},o.a.createElement("div",{className:"name-email"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Name:"),o.a.createElement("input",{type:"text",defaultValue:p,onBlur:b,name:"name"})),o.a.createElement("div",{className:"email"},o.a.createElement("label",{htmlFor:"email"},"Email address:"),o.a.createElement("input",{type:"email",defaultValue:d,name:"email",onBlur:b}))),o.a.createElement("div",{className:"message-box"},o.a.createElement("label",{htmlFor:"message"},"Message:"),o.a.createElement("textarea",{name:"message",defaultValue:g,onBlur:b,rows:"5"})),a&&o.a.createElement("div",{className:"error-message"},o.a.createElement("p",{className:"error-text"},a)),o.a.createElement("div",{className:"flex-row-submit"},o.a.createElement("button",{className:"submit-button",type:"submit"},"Submit"))),o.a.createElement("div",{className:"flex-row email"},o.a.createElement("a",{className:"email-address",href:"mailto:Mason.P.Marinko@gmail.com"},"Email: Mason.P.Marinko@gmail.com"),o.a.createElement("p",{className:"phone"},"Phone Number: (707)-301-6690")))},f=a(10),E=a(11);var w=function(){return f.a,E.a,o.a.createElement("footer",null,o.a.createElement("div",{className:"flex-row social-icons"},o.a.createElement("a",{className:"github",target:"_blank",href:"https://github.com/masonmarinko"},o.a.createElement("img",{alt:"Github Logo",src:"https://i.imgur.com/krq0lxo.png",width:"50",height:"50"})),o.a.createElement("a",{className:"linkedin",target:"_blank",href:"https://www.linkedin.com/in/masonmarinko/"},o.a.createElement("img",{alt:"Github Logo",src:"https://i.imgur.com/TkR6RBO.png",width:"170",height:"50"})),o.a.createElement("a",{className:"resume",target:"_blank",href:"https://www.twitter.com/crason8"},o.a.createElement("img",{alt:"Github Logo",src:"https://i.imgur.com/zCIGqvk.png",width:"50",height:"50"})),o.a.createElement("a",{className:"resume",target:"_blank",href:"https://docs.google.com/document/d/1azzpUd0hBnXtuGDOOkl5xZMQx0bgtK04a-33nAHLQPc/edit?usp=sharing"},o.a.createElement("img",{alt:"Github Logo",src:"https://i.imgur.com/GSWNBdD.png",width:"50",height:"50"}))))};var v=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([{name:"projects",description:"Browse some of my previous work"}]),i=Object(s.a)(c,1)[0],u=Object(n.useState)(i[0]),p=Object(s.a)(u,2),d=p[0],h=p[1];return o.a.createElement("div",null,o.a.createElement(m,{categories:i,setCurrentCategory:h,currentCategory:d,contactSelected:a,setContactSelected:r}),o.a.createElement("main",null,o.a.createElement("div",null,a?o.a.createElement(b,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{currentCategory:d}),o.a.createElement(l,null)))),o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.b8009a62.chunk.js.map