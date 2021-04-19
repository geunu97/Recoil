(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(8),o=(n(0),n(149)),a={title:"constSelector(constant)",sidebar_label:"constSelector()"},l={unversionedId:"api-reference/utils/constSelector",id:"api-reference/utils/constSelector",isDocsHomePage:!1,title:"constSelector(constant)",description:"\ud56d\uc0c1 \uc0c1\uc218\ub97c \uc81c\uacf5\ud558\ub294 selector\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/constSelector.md",slug:"/api-reference/utils/constSelector",permalink:"/ko/docs/api-reference/utils/constSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/constSelector.md",version:"current",sidebar_label:"constSelector()",sidebar:"docs",previous:{title:"selectorFamily(options)",permalink:"/ko/docs/api-reference/utils/selectorFamily"},next:{title:"errorSelector(message)",permalink:"/ko/docs/api-reference/utils/errorSelector"}},i=[{value:"Example",id:"example",children:[]}],s={toc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\ud56d\uc0c1 \uc0c1\uc218\ub97c \uc81c\uacf5\ud558\ub294 ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector"),"\uc785\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function constSelector<T: Parameter>(constant: T): RecoilValueReadOnly<T>\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"constSelector"),"\ub294 \ub2e4\ub978 selector \uad6c\ud604\uc5d0 \uc758\ud574 \uc81c\uacf5\ub420 \uc218 \uc788\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilValue<T>"),"\ub098 ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly<T>"),"\uac19\uc740 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\ub294 \uacbd\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc774 selector\ub4e4\uc740 \uae30\uc900\uac12 \ub3d9\ub4f1\uc131\uc744 \uae30\uc900\uc73c\ub85c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c, ",Object(o.b)("inlineCode",{parentName:"p"},"constSelector()"),"\ub294 \ub3d9\uc77c\ud55c \uac12\uc73c\ub85c \uc5ec\ub7ec\ubc88 \ud638\ucd9c\ud560 \uc218 \uc788\uc73c\uba70 \ub3d9\uc77c\ud55c selector\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 \uc0c1\uc218\ub85c \uc0ac\uc6a9\ub418\ub294 \uac12\uc740 Recoil \uc9c1\ub82c\ud654(serialization)\ub97c \uc0ac\uc6a9\ud574 \uc9c1\ub82c\ud654 \ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc73c\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4. ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},Object(o.b)("inlineCode",{parentName:"a"},"selectorFamily")),"\ubb38\uc11c\uc5d0 \uc791\uc131\ub41c \ud55c\uacc4\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uc138\uc694."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"type MyInterface = {\n  queryForStuff: RecoilValue<Thing>,\n  ...\n};\n\nconst myInterfaceInstance1: MyInterface = {\n  queryForStuff: selectorThatDoesQuery,\n};\n\nconst myInterfaceInstance2: MyInterface = {\n  queryForStuff: constSelector(thing),\n};\n")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return n?c.a.createElement(m,l(l({ref:t},s),{},{components:n})):c.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);