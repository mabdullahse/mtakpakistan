(this.webpackJsonpveterinaryproject=this.webpackJsonpveterinaryproject||[]).push([[0],{48:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var i,a,s=t(2),r=t.n(s),o=t(25),c=t.n(o),l=(t(48),t(4)),d=t(1),m=t(7),h=(Object(l.b)(i||(i=Object(m.a)(["\n/* ------------------- */\n/* Custom properties   */\n/* ------------------- */\n\n:root {\n    /* colors */\n    --clr-primary: 13 97% 65%;\n    --clr-text-secondary: 228 28% 20%;\n    --clr-text-tertiary: 0 0% 45%;\n    --clr-background: 13 100% 99% 100%;\n    \n    /* font-sizes */\n    --fs-900: 3.625rem; //h1\n    --fs-800: 2.5rem; // h2\n    --fs-700: 1.5rem; // h3\n    --fs-600: 1.25rem; // h4\n    --fs-500: 1rem; // h5\n    --fs-400: 0.875rem; // p\n    --fs-300: 0.75rem;\n    \n    /* font-families */\n    --ff-serif: 'Montserrat', sans-serif;\n}\n\n::selection {\n  background-color: #FC724D;\n  color: white;\n}\n\n@media (min-width: 35em) {\n    :root {\n        /* font-sizes */\n\n    }\n}\n\n@media (min-width: 45em) {\n    :root {\n        /* font-sizes */\n        \n    }\n}\n\n\n/* ------------------- */\n/* Reset               */\n/* ------------------- */\n\n\n/* Box sizing */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n\n \n\n/* set up the body */\nbody {\n    font-family: var(--ff-serif);\n    font-size: var(--fs-400);\n    color: hsl( var( --clr-text-tertiary));\n    background-color: hsl( var(--clr-background));\n    line-height: 1.5;\n    min-height: 100vh;\n    text-rendering: optimizeSpeed;\n}\n \n/* ------------------- */\n/* Utility classes     */\n/* ------------------- */\n\n/* general */\n\n.flex {\n    display: flex;\n    gap: var(--flex-gap, 1rem);\n}\n\n.flex-space-between {\n  justify-content: space-between;\n}\n.flex-justify-content-center {\n  justify-content: center;\n}\n\n.flex-align-center {\n   align-items: center;\n}\n.flex-column {\n  flex-direction: column;\n}\n\n.grid {\n    display: grid;\n    gap: var(--grid-gap, 1rem);\n}\n\n.d-block {\n    display: block;\n}\n\n.flow > *:where(:not(:first-child)) {\n    margin-top: var(--flow-space, 1rem);\n}\n\n.flow--space-small {\n    --flow-space: .75rem;\n}\n\n.container {\n    padding-inline: 2em;\n    margin-inline: auto;\n    max-width: 80rem;\n}\n\n.p-1 {\n  padding: 1rem;\n}\n\n.mt-0 {\n  margin-top: 0;\n}\n\n.mt-1 {\n  margin-top: 1rem;\n}\n\n.mb-1 {\n  margin-bottom: 1rem;\n}\n\n.pb-5 {\n  padding-bottom: 5rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.p-relative {\n  position: relative;\n}\n.flex-1 {\n  flex: 1;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n\n\n.sr-only {\n  position: absolute; \n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px; \n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap; /* added line */\n  border: 0;\n}\n\n.skip-to-content {\n    position: absolute;\n    z-index: 9999;\n    background: hsl( var(--clr-white) );\n    color: hsl( var(--clr-dark) ); \n    padding: .5em 1em;\n    margin-inline: auto;\n    transform: translateY(-100%);\n    transition: transform 250ms ease-in;\n}\n\n.skip-to-content:focus {\n    transform: translateY(0);\n}\n\n/* colors */\n\n.bg-primary { background-color: hsl( var(--clr-primary) );}\n.bg-secondary { background-color: hsl( var(--clr-text-tertiary) / 0.1 );}\n\n\n.text-primary { color: hsl(var(--clr-primary));}\n.text-secondary { color: hsl( var(--clr-text-secondary) / 1 );}\n.text-tertiary { color: hsl( var(--clr-text-tertiary) );}\n\n.font-bold {\n  font-weight: bold;\n}\n/* typography */\n\n.ff-serif { font-family: var(--ff-serif); } \n.ff-sans-cond { font-family: var(--ff-sans-cond); } \n.ff-sans-normal { font-family: var(--ff-sans-normal); } \n\n.letter-spacing-1 { letter-spacing: 4.75px; } \n.letter-spacing-2 { letter-spacing: 2.7px; } \n.letter-spacing-3 { letter-spacing: 2.35px; } \n\n.uppercase { text-transform: uppercase; }\n\n.fs-900 { font-size: var(--fs-900); }\n.fs-800 { font-size: var(--fs-800); }\n.fs-700 { font-size: var(--fs-700); }\n.fs-600 { font-size: var(--fs-600); }\n.fs-500 { font-size: var(--fs-500); }\n.fs-400 { font-size: var(--fs-400); }\n.fs-300 { font-size: var(--fs-300); }\n\n.fs-900,\n.fs-800,\n.fs-700,\n.fs-600 {\n    line-height: 1.1;\n}\n\n\n/* ------------------- */\n/* nav               */\n/* ------------------- */\n\n.logo {\n  min-width: 8rem;\n  height: 56px;\n}\n\n.primary-navigation {\n  --gap: clamp(1.5rem, 5vw, 3.5rem);\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.primary-navigation a {\n  text-decoration: none;\n}\n\n.primary-navigation a > span {\n  font-weight: 700;\n  margin-right: .5em;\n}\n\n.primary-header {\n  padding-bottom: 0px;\n  min-height: 22rem;\n}\n\n\n.bg-dashboard-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 20rem;\n  background-size: cover;\n  background-position: center;\n  will-change: opacity;\n  border-radius: 10px;\n}\n\n\n.main-section-shadow {\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;\n  border-radius: 8px;\n}\n\n.product-img {\n  width: 16rem;\n  height: 16rem;\n  object-fit: cover;\n}\n.image-item {\n  width: 16rem !important;\n}\n\n.carousel-container {\n    margin: 1.3125rem;\n}\n\n.fancy-color {\n  background-image: linear-gradient(90deg, red, blue);\n  background-size: 0% 3px;\n  background-repeat: no-repeat;\n  background-position: left bottom;\n  transition: background 500ms ease-in-out;\n}\n\n.fancy-color:hover {\n  background-size: 80% 3px;\n}\n\n.footer {\n  position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\n"]))),t(6)),p=t(9),f=t(10),u=t(11),b=t(3);var x=function(){var e=l.c.div(a||(a=Object(m.a)(["\n    width: 5rem;\n    background-color: ",";\n    height: 7px;\n    border-radius: 5px;\n  "])),(function(e){return e.theme.colors.primaryColor}));return Object(d.jsx)(e,{})};var j,g=l.c.section(j||(j=Object(m.a)(["\n  display: flex;\n  gap: 3rem;\n  & > div {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: 8px;\n    flex: 1;\n    padding: 2rem;\n  }\n"])));var y,v=function(){return Object(d.jsx)(g,{children:Object(d.jsxs)("div",{className:"flex  flex-column  flex-justify-content-center ",children:[Object(d.jsx)("h1",{className:"fs-800 text-secondary",children:"Contact Information"}),Object(d.jsx)(x,{}),Object(d.jsx)("h3",{children:"Factory Address"}),Object(d.jsx)("h5",{className:"fs-300 text-tertiary",children:"D-21/A/1. SITE, Super Highway - Karachi."}),Object(d.jsx)("h3",{children:" Phone No: "}),Object(d.jsx)("h5",{className:"fs-300 text-tertiary",children:"+92-021-36411503-5"}),Object(d.jsx)("h3",{children:" E-mail"}),Object(d.jsx)("h5",{className:"fs-300 text-tertiary",children:"info@apexpharmapk.com"}),Object(d.jsx)("h3",{children:"URL"}),Object(d.jsx)("h5",{className:"fs-300 text-tertiary",children:"https://apexpharmapk.com/contact.html"})]})})},O=(t(54),t(43)),w=t.n(O),N=l.c.div(y||(y=Object(m.a)(["\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  padding: 5px;\n  width: 15rem;\n  border-radius: 5px;\n"])));var k,C=function(e){var n=e.image;return console.log(n),Object(d.jsxs)(N,{children:[Object(d.jsx)("img",{src:n,className:"product-img"}),Object(d.jsx)("h6",{className:"fs-500 text-primary m-0",children:"Panadol"}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, omnis."})]})},z={desktop:{breakpoint:{max:3e3,min:1024},items:3,paritialVisibilityGutter:60},tablet:{breakpoint:{max:1024,min:464},items:2,paritialVisibilityGutter:50},mobile:{breakpoint:{max:464,min:0},items:1,paritialVisibilityGutter:30}},M=["https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],W=function(e){var n=e.deviceType;return Object(d.jsx)(w.a,{swipeable:!0,showDots:!0,infinite:!1,autoPlay:!1,ssr:!0,partialVisbile:!0,deviceType:n,itemClass:"image-item",responsive:z,sliderClass:"carousel-container",children:M.slice(0,5).map((function(e){return Object(d.jsx)(C,{image:e})}))})},q=l.c.section(k||(k=Object(m.a)(["\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 8px;\n  flex: 1;\n  padding: 2rem;\n"])));var A,E=function(){return Object(d.jsxs)(q,{children:[Object(d.jsxs)("div",{className:"flex  flex-column  flex-justify-content-center ",style:{maxWidth:"33rem"},children:[Object(d.jsx)("h1",{className:"fs-800 text-secondary",children:"Our Products"}),Object(d.jsx)(x,{}),Object(d.jsx)("h5",{className:"fs-300 text-tertiary",children:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"})]}),Object(d.jsx)("div",{style:{marginTop:"0.5rem"}}),Object(d.jsx)(W,{deviceType:"desktop"})]})},P=t(14),B=Object(l.c)(P.b)(A||(A=Object(m.a)(["\n  color: #737373;\n  text-decoration: none;\n  font-weight: bold;\n\n  &:hover,\n  &.active {\n    color: ",";\n  }\n\n  &.active {\n  }\n"])),(function(e){return e.theme.colors.primaryColor}));var H,D=function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"primary-navigation  flex",children:[Object(d.jsx)("li",{children:Object(d.jsx)(B,{to:"/",activeClassName:"active",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(B,{to:"/mission",activeClassName:"active",children:"Mission"})}),Object(d.jsx)("li",{children:Object(d.jsx)(B,{to:"/products",activeClassName:"active",children:"Products"})}),Object(d.jsx)("li",{children:Object(d.jsx)(B,{to:"/about-us",activeClassName:"active",children:"About Us"})}),Object(d.jsx)("li",{children:Object(d.jsx)(B,{to:"/ceo-message",activeClassName:"active",children:"CEO Message"})}),Object(d.jsx)("li",{children:Object(d.jsx)(B,{to:"/contact-us",activeClassName:"active",children:"Contact Us"})})]})})};l.c.button(H||(H=Object(m.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  padding: 0.25em 2em;\n  border: 2px solid ",";\n  border-radius: 3px;\n"])),(function(e){return e.outline?e.theme.colors.light:e.theme.colors.primaryColor}),(function(e){return e.outline?e.theme.colors.primaryColor:e.theme.colors.light}),(function(e){return e.theme.colors.primaryColor}));var J=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"flex  flex-space-between flex-align-center ",style:{minHeight:"4rem"},children:[Object(d.jsx)(P.a,{to:"/",children:Object(d.jsx)("img",{src:"/assets/logo.svg",alt:"space tourism logo",className:"logo"})}),Object(d.jsx)(D,{})]}),Object(d.jsx)("br",{}),Object(d.jsx)(b.a,{})]})},T=t(35),Q=t(8),I=t(32),L=[1,2,3,4,5,6];var S,G=function(){var e=Object(s.useState)(0),n=Object(Q.a)(e,2),t=n[0],i=n[1],a=Object(I.useTransition)(t,{key:t,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:3e3}});return Object(s.useEffect)((function(){var e=setInterval((function(){return i((function(e){return(e+1)%L.length}))}),2e3);return function(){return clearTimeout(e)}}),[]),Object(d.jsxs)("section",{className:"primary-header flex main-section-shadow  p-1  mt-0 ",children:[Object(d.jsxs)("div",{className:"flex  flex-column  flex-justify-content-center flex-1",children:[Object(d.jsxs)("h1",{className:"fs-800 text-secondary fancy-color cursor-pointer",children:["Welcome to ",Object(d.jsx)("span",{className:"text-primary",children:"M"}),"TAK Pakistan !"]}),Object(d.jsx)("p",{className:"fs-400 text-tertiary ",children:"Overcame any hurdle or any other problem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aliquid."})]}),Object(d.jsx)("div",{className:"p-relative flex-1",children:a((function(e,n){return Object(d.jsx)(I.animated.div,{className:"bg-dashboard-image",style:Object(T.a)(Object(T.a)({},e),{},{backgroundImage:"url(assets/dashboard/".concat(L[n],".jpg)")})})}))})]})},R=l.c.section(S||(S=Object(m.a)(["\n  display: flex;\n  gap: 3rem;\n  & > div {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: 8px;\n    flex: 1;\n    padding: 2rem;\n  }\n"])));var U,V=function(){return Object(d.jsx)(R,{children:Object(d.jsxs)("div",{className:"flex  flex-column  flex-justify-content-center ",children:[Object(d.jsx)("h1",{className:"fs-800 text-secondary",children:"Our Mission"}),Object(d.jsx)(x,{}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:'"Apex Pharmaceuticals upholds its mission statement\u2014which consists of its mission, its core values and its envisioned future\u2014in order to be a business that meets a diverse array of stakeholder expectations as it realizes its corporate responsibility to society. It is on the basis of this mission statement that Apex Pharmaceuticals conducts its business operations."'}),Object(d.jsx)("h3",{className:"fs-500  ",children:" Mission Statement"}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:"Apex's mission is to dedicate itself to adding exceptional value through the creation of effective medical products for the benefit of the medical community and human health around the world."}),Object(d.jsx)("h3",{className:"fs-500  ",children:" Core values"}),Object(d.jsxs)("p",{className:"fs-300 text-tertiary",children:[Object(d.jsx)("p",{children:"The primary focus of all our activities is patients and customers"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"In all our activities we are committed to the highest ethical and moral standards."}),Object(d.jsx)("li",{children:"We value employees who develop profound expertise and broad perspectives and pursue innovation and challenges without fear of failure."}),Object(d.jsx)("li",{children:"Wherever we operate around the world we seek to understand and respect people and cultures and to behave as good corporate citizens."}),Object(d.jsx)("li",{children:"We promote an open and active corporate culture that respects individuality, ability and teamwork. We care about the global environment."})]})]})]})})},F=l.c.section(U||(U=Object(m.a)(["\n  display: flex;\n  gap: 3rem;\n  & > div {\n    flex: 1;\n    padding: 2rem;\n  }\n  & > div:last-child {\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  }\n"])));var K,Y=function(){return Object(d.jsx)(F,{className:" flex flex-space-between ",children:Object(d.jsxs)("div",{className:"flex  flex-column  flex-justify-content-center ",children:[Object(d.jsx)("h1",{className:"fs-800 text-secondary",children:"Meet Our CEO "}),Object(d.jsx)(x,{}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:"Good Health is indeed a magnificent human possession. And any contribution towards the preservation and consolidation of this blessing is the noblest service to humanity. Motivated by this spirit Apex Pharmaceutical (Pvt) Ltd. was founded in the year 2007."}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:"The Primary objective was obviously to manufacture effective, reliable, and safe pharmaceutical products of high quality. The beginning, no doubt, was modest. But that proved to be a period of little accomplishments having far reaching effects on the will to do more."})]})})},X=l.c.section(K||(K=Object(m.a)(["\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 8px;\n  flex: 1;\n  padding: 2rem;\n  & img {\n    height: auto;\n  }\n"])));var Z,$=function(){return Object(d.jsxs)(X,{children:[Object(d.jsx)("h3",{className:"fs-600 text-primary mb-1",children:"Who are we? "}),Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("p",{className:"fs-400 text-tertiary mt-1 ",children:"Apex is dedicated to enhancing human life through developing & manufacturing quality pharmaceutical products. The company was established in 2005 and started its sales & marketing operation in 12 mega cities of Pakistan with its head office in Karachi. Fulfilling our vision to serve the nation with effective & quality pharmaceutical medicines, our manufacturing facility starts its operation in the year 2010. We manufacture high-quality branded generics, at our cGMP-compliant facility in Pakistan. Licensors, molecule owners and inventors from around the world can avail our toll manufacturing and/or licensing services."}),Object(d.jsx)(P.a,{to:"/",children:Object(d.jsx)("img",{src:"./assets/logo.svg",alt:"space tourism logo",className:"logo"})})]})]})},_=l.c.section(Z||(Z=Object(m.a)(["\n  display: flex;\n  gap: 3rem;\n  & > div {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: 8px;\n    flex: 1;\n    padding: 2rem;\n  }\n"])));var ee=function(){return Object(d.jsx)(_,{children:Object(d.jsxs)("div",{className:"flex  flex-column  flex-justify-content-center ",children:[Object(d.jsx)("h1",{className:"fs-800 text-secondary",children:"About Us"}),Object(d.jsx)(x,{}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:'"Apex Pharmaceuticals upholds its mission statement\u2014which consists of its mission, its core values and its envisioned future\u2014in order to be a business that meets a diverse array of stakeholder expectations as it realizes its corporate responsibility to society. It is on the basis of this mission statement that Apex Pharmaceuticals conducts its business operations."'}),Object(d.jsx)("h3",{className:"fs-500  text-secondary ",children:" Mission Statement"}),Object(d.jsx)("p",{className:"fs-300 text-tertiary",children:"Apex's mission is to dedicate itself to adding exceptional value through the creation of effective medical products for the benefit of the medical community and human health around the world."}),Object(d.jsx)("h3",{className:"fs-500 text-secondary ",children:" Core values"}),Object(d.jsxs)("p",{className:"fs-300 text-tertiary",children:[Object(d.jsx)("p",{children:"The primary focus of all our activities is patients and customers"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"In all our activities we are committed to the highest ethical and moral standards."}),Object(d.jsx)("li",{children:"We value employees who develop profound expertise and broad perspectives and pursue innovation and challenges without fear of failure."}),Object(d.jsx)("li",{children:"Wherever we operate around the world we seek to understand and respect people and cultures and to behave as good corporate citizens."}),Object(d.jsx)("li",{children:"We promote an open and active corporate culture that respects individuality, ability and teamwork. We care about the global environment."})]})]})]})})};s.Component;var ne=function(){return Object(d.jsx)("h1",{children:"Ya ALLah madad"})};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ne,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.cefd6de2.chunk.js.map