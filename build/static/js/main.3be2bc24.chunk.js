(this.webpackJsonpreelmeup=this.webpackJsonpreelmeup||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),i=c(13),r=c.n(i),o=(c(20),c(15)),s=(c(21),c(14).a.initializeApp({apiKey:"AIzaSyDtWUKYuG_LuE1_nyruq1mSM2gqPwHLKk0",authDomain:"reelmeup-9a302.firebaseapp.com",projectId:"reelmeup-9a302",storageBucket:"reelmeup-9a302.appspot.com",messagingSenderId:"866189862352",appId:"1:866189862352:web:d448f8503bc31dcea8c5d5"}).firestore()),p=(c(26),c(7));var u=function(e){var t=e.videoURL;return Object(p.jsx)("div",{className:"video",children:Object(p.jsx)("iframe",{className:"video__player",loop:!0,width:"100%",height:"100%",src:t,title:"Reels",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})};var l=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){s.collection("videos").onSnapshot((function(e){a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("h1",{className:"app__name",children:"ReelMeUp"}),Object(p.jsx)("div",{className:"app__videos",children:c.map((function(e){var t=e.videoURL;return Object(p.jsx)(u,{videoURL:t})}))})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root")),d()}},[[28,1,2]]]);
//# sourceMappingURL=main.3be2bc24.chunk.js.map