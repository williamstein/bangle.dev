(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{187:function(e,a,t){"use strict";var r=t(3),n=t(0),l=t.n(n),m=t(142),c=t(185),i=t(7),s=t(136),o=t(138),u=(t(53),t(54)),d=t.n(u),h=function(e){return function(a){var t,r=a.id,n=Object(i.a)(a,["id"]),m=Object(o.useThemeConfig)().navbar.hideOnScroll;return r?l.a.createElement(e,n,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(t={},t[d.a.enhancedAnchor]=!m,t)),id:r}),n.children,l.a.createElement("a",{className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):l.a.createElement(e,n)}},E=t(55),g=t.n(E),v={code:function(e){var a=e.children;return"string"==typeof a?a.includes("\n")?l.a.createElement(c.a,e):l.a.createElement("code",e):a},a:function(e){return l.a.createElement(m.a,e)},pre:function(e){return l.a.createElement("div",Object(r.a)({className:g.a.mdxCodeBlock},e))},h1:h("h1"),h2:h("h2"),h3:h("h3"),h4:h("h4"),h5:h("h5"),h6:h("h6")};a.a=v},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(0),n=t.n(r),l=t(136),m=t(142),c=t(57),i=t.n(c);function s(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},209:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(136),m=t(128),c=t(23),i=t(142),s=t(187),o=t(158),u=t(60),d=t.n(u),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,E,g=e.children,v=e.frontMatter,b=e.metadata,p=e.truncated,f=e.isBlogPostPage,N=void 0!==f&&f,k=b.date,w=b.permalink,_=b.tags,y=b.readingTime,I=v.author,T=v.title,O=v.image,j=v.keywords,M=v.author_url||v.authorURL,L=v.author_title||v.authorTitle,P=v.author_image_url||v.authorImageURL,x=Object(o.a)(O,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,j&&j.length&&n.a.createElement("meta",{name:"keywords",content:j.join(",")}),O&&n.a.createElement("meta",{property:"og:image",content:x}),O&&n.a.createElement("meta",{property:"twitter:image",content:x}),O&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=k.substring(0,10).split("-"),r=t[0],u=h[parseInt(t[1],10)-1],E=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},N?T:n.a.createElement(i.a,{to:w},T)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:k,className:d.a.blogPostDate},u," ",E,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},P&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:P,alt:I})),n.a.createElement("div",{className:"avatar__intro"},I&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer noopener"},I)),n.a.createElement("small",{className:"avatar__subtitle"},L)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},g)),(_.length>0||p)&&n.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:b.permalink,"aria-label":"Read more about "+T},n.a.createElement("strong",null,"Read More"))))))}},94:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(184),m=t(209),c=t(142),i=t(199);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=a.allTagsPath,o=a.name,u=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"',wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(i.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:s},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}}}]);