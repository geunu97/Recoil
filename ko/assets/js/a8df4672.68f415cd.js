(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),o=(a(0),a(149)),c={title:"useRecoilValueLoadable(state)",sidebar_label:"useRecoilValueLoadable()"},l={unversionedId:"api-reference/core/useRecoilValueLoadable",id:"api-reference/core/useRecoilValueLoadable",isDocsHomePage:!1,title:"useRecoilValueLoadable(state)",description:"\uc774 hook\uc740 \ube44\ub3d9\uae30 selector\uc758 \uac12\uc744 \uc77d\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 hook\uc740 \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc554\ubb35\uc801\uc73c\ub85c \uad6c\ub3c5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValueLoadable.md",slug:"/api-reference/core/useRecoilValueLoadable",permalink:"/ko/docs/api-reference/core/useRecoilValueLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValueLoadable.md",version:"current",sidebar_label:"useRecoilValueLoadable()",sidebar:"docs",previous:{title:"useRecoilStateLoadable(state)",permalink:"/ko/docs/api-reference/core/useRecoilStateLoadable"},next:{title:"useGetRecoilValueInfo_UNSTABLE()",permalink:"/ko/docs/api-reference/core/useGetRecoilValueInfo"}},i=[{value:"Example",id:"example",children:[]}],u={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\uc774 hook\uc740 \ube44\ub3d9\uae30 selector\uc758 \uac12\uc744 \uc77d\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 hook\uc740 \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc554\ubb35\uc801\uc73c\ub85c \uad6c\ub3c5\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilValue"},Object(o.b)("inlineCode",{parentName:"a"},"useRecoilValue()")),"\uc640\ub294 \ub2e4\ub974\uac8c \uc774 hook\uc740 \ube44\ub3d9\uae30 selector\uc5d0\uc11c \uc77d\uc5b4\uc62c \ub54c (",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),"\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\uae30 \uc704\ud574) ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," \ud639\uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," \ub97c \ub358\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \uc774 hook\uc740 \uac12\uc5d0 \ub300\ud55c ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},Object(o.b)("inlineCode",{parentName:"a"},"Loadable"))," \uac1d\uccb4\ub97c \ub9ac\ud134\ud569\ub2c8\ub2e4."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValueLoadable<T>(state: RecoilValue<T>): Loadable<T>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": \ube44\ub3d9\uae30 \uc791\uc5c5\uc774 \uc788\uc744 \uc218 \uc788\ub294 ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},Object(o.b)("inlineCode",{parentName:"a"},"atom"))," \ud639\uc740 ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},Object(o.b)("inlineCode",{parentName:"a"},"selector")),". \ub9ac\ud134\ub41c loadable\uc758 \uc0c1\ud0dc(status)\ub294 \uc81c\uacf5\ub41c \uc0c1\ud0dc(state) selector\uc758 \uc0c1\ud0dc(status)\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4.")),Object(o.b)("p",null,"\uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\ub294 \ud604\uc7ac \uc0c1\ud0dc ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},Object(o.b)("inlineCode",{parentName:"a"},"Loadable")),"\uc744 \ub9ac\ud134\ud569\ub2c8\ub2e4:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": selector\uc758 \uc0c1\ud0dc(status)\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uac00\ub2a5\ud55c \uac12\uc740 '",Object(o.b)("inlineCode",{parentName:"li"},"hasValue"),"', '",Object(o.b)("inlineCode",{parentName:"li"},"hasError"),"', '",Object(o.b)("inlineCode",{parentName:"li"},"loading"),"'\uc785\ub2c8\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"contents"),": \uc774 ",Object(o.b)("inlineCode",{parentName:"li"},"Loadable"),"\uc774 \ub098\ud0c0\ub0b4\ub294 \uac12\uc785\ub2c8\ub2e4. \ub9cc\uc57d \uc0c1\ud0dc\uac00 ",Object(o.b)("inlineCode",{parentName:"li"},"hasValue"),"\uc774\uba74 \uc774\ub294 \uc2e4\uc81c \uac12\uc774\uba70, \ub9cc\uc57d \uc0c1\ud0dc\uac00 ",Object(o.b)("inlineCode",{parentName:"li"},"hasError"),"\ub77c\uba74 \uc774\ub294 \ub358\uc838\uc9c4 ",Object(o.b)("inlineCode",{parentName:"li"},"Error")," \uac1d\uccb4\uc785\ub2c8\ub2e4. \ub610\ud55c \uc0c1\ud0dc\uac00 ",Object(o.b)("inlineCode",{parentName:"li"},"loading"),"\uc774\uba74 \uac12\uc758 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise"),"\uc785\ub2c8\ub2e4.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n\n")))}b.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return a?r.a.createElement(m,l(l({ref:t},u),{},{components:a})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);