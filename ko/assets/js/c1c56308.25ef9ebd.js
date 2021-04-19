(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(8),c=(t(0),t(149)),a={title:"useRecoilBridgeAcrossReactRoots()",sidebar_label:"useRecoilBridgeAcrossReactRoots()"},i={unversionedId:"api-reference/core/useRecoilBridgeAcrossReactRoots",id:"api-reference/core/useRecoilBridgeAcrossReactRoots",isDocsHomePage:!1,title:"useRecoilBridgeAcrossReactRoots()",description:"\uc911\ucca9\ub41c React \ub8e8\ud2b8 \ubc0f \ub80c\ub354\ub7ec\ub85c Recoil \uc0c1\ud0dc\ub97c \uc5f0\uacb0\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 hook\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilBridgeAcrossReactRoots.md",slug:"/api-reference/core/useRecoilBridgeAcrossReactRoots",permalink:"/ko/docs/api-reference/core/useRecoilBridgeAcrossReactRoots",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilBridgeAcrossReactRoots.md",version:"current",sidebar_label:"useRecoilBridgeAcrossReactRoots()",sidebar:"docs",previous:{title:"useRecoilCallback(callback, deps)",permalink:"/ko/docs/api-reference/core/useRecoilCallback"},next:{title:"useRecoilCallback(callback, deps)",permalink:"/ko/docs/api-reference/core/useRecoilCallback"}},l=[{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\uc911\ucca9\ub41c React \ub8e8\ud2b8 \ubc0f \ub80c\ub354\ub7ec\ub85c Recoil \uc0c1\ud0dc\ub97c \uc5f0\uacb0\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 hook\uc785\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilBridgeAcrossReactRoots_UNSTABLE():\n  React.AbstractComponent<{children: React.Node}>;\n")),Object(c.b)("p",null,"\uc911\ucca9\ub41c React \ub8e8\ud2b8\uac00 ",Object(c.b)("inlineCode",{parentName:"p"},"ReactDOM.render()"),'\ub85c \uc0dd\uc131\ub418\uac70\ub098, \uc911\ucc9c\ub41c \ucee4\uc2a4\ud140 \ub80c\ub354\ub7ec\ub85c \uc0ac\uc6a9\ub41c \uacbd\uc6b0 React\ub294 context \uc0c1\ud0dc\ub97c \uc790\uc2dd \ub8e8\ud2b8\ub85c \uc804\ud30c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 hook\uc740 \uc911\ucca9\ub41c React root\uc640 Recoil \uc0c1\ud0dc\ub97c "\uc5f0\uacb0"\ud558\uace0 \uacf5\uc720\ud558\ub294\ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. hook\uc740 \uc911\ucca9\ub41c React \ub8e8\ud2b8\uc5d0\uc11c ',Object(c.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," \ub300\uc2e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 React \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubc18\ud658\ud574 \ub3d9\uc77c\ud558\uace0 \uc77c\uad00\ub41c Recoil \uc800\uc7a5\uc18c \uc0c1\ud0dc\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. React \ub8e8\ud2b8\uc5d0\uc11c \uacf5\uc720\ub418\ub294 \ubaa8\ub4e0 \uc0c1\ud0dc\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ubaa8\ub4e0 \uacbd\uc6b0\uc5d0 \uc644\ubcbd\ud558\uac8c \ub3d9\uae30\ud654\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function Bridge() {\n  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();\n\n  return (\n    <CustomRenderer>\n      <RecoilBridge>\n        ...\n      </RecoilBridge>\n    </CustomRenderer>\n  );\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      ...\n      <Bridge />\n    </RecoilRoot>\n  );\n}\n")))}u.isMDXComponent=!0},149:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},R=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),R=n,b=p["".concat(a,".").concat(R)]||p[R]||d[R]||c;return t?o.a.createElement(b,i(i({ref:r},s),{},{components:t})):o.a.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=R;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}R.displayName="MDXCreateElement"}}]);