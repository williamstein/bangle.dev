(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{187:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r),i=n(142),l=n(185),o=n(7),s=n(136),d=n(138),m=(n(53),n(54)),u=n.n(m),f=function(e){return function(t){var n,a=t.id,r=Object(o.a)(t,["id"]),i=Object(d.useThemeConfig)().navbar.hideOnScroll;return a?c.a.createElement(e,r,c.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(n={},n[u.a.enhancedAnchor]=!i,n)),id:a}),r.children,c.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):c.a.createElement(e,r)}},h=n(55),v=n.n(h),E={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?c.a.createElement(l.a,e):c.a.createElement("code",e):t},a:function(e){return c.a.createElement(i.a,e)},pre:function(e){return c.a.createElement("div",Object(a.a)({className:v.a.mdxCodeBlock},e))},h1:f("h1"),h2:f("h2"),h3:f("h3"),h4:f("h4"),h5:f("h5"),h6:f("h6")};t.a=E},211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(136);var i=function(e,t,n){var r=Object(a.useState)(void 0),c=r[0],i=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,l=!1,o=document.getElementsByClassName(e);r<o.length&&!l;){var s=o[r],d=s.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===m&&(c&&c.classList.remove(t),s.classList.add(t),i(s),l=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l=n(58),o=n.n(l),s="table-of-contents__link";function d(e){var t=e.headings,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(d,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return i(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(c.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(d,{headings:t}))}},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(184),i=n(128),l=n(187),o=n(211);t.default=function(e){var t=e.content,n=t.frontMatter,a=t.metadata,s=n.title,d=n.description,m=n.wrapperClassName,u=n.hide_table_of_contents,f=a.permalink;return r.a.createElement(c.a,{title:s,description:d,permalink:f,wrapperClassName:m},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{components:l.a},r.a.createElement(t,null)))),!u&&t.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{headings:t.rightToc})))))))}}}]);