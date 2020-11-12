(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/g4k":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};t.default=n},"8/g6":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(i.default,(0,o.default)({ref:a},t),e)})));0;return a.muiName=i.default.muiName,a};var o=n(a("pVnL")),r=n(a("q1tI")),i=n(a("UJJ5"))},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ce}));var n=a("q1tI"),o=a.n(n),r=a("wx14"),i=a("Ff2n"),c=a("iuhU"),l=a("H2TA"),s=a("NqtD"),d=n.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=e.square,u=void 0!==d&&d,p=e.elevation,m=void 0===p?1:p,f=e.variant,b=void 0===f?"elevation":f,h=Object(i.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(s,Object(r.a)({className:Object(c.a)(a.root,o,"outlined"===b?a.outlined:a["elevation".concat(m)],!u&&a.rounded),ref:t},h))})),u=Object(l.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(d),p=n.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.color,d=void 0===l?"primary":l,p=e.position,m=void 0===p?"fixed":p,f=Object(i.a)(e,["classes","className","color","position"]);return n.createElement(u,Object(r.a)({square:!0,component:"header",elevation:4,className:Object(c.a)(a.root,a["position".concat(Object(s.a)(m))],a["color".concat(Object(s.a)(d))],o,"fixed"===m&&"mui-fixed"),ref:t},f))})),m=Object(l.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(p),f=a("ye/S"),b=a("i8i4"),h=a("bfFb"),g="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function v(e){var t=n.useRef(e);return g((function(){t.current=e})),n.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var x=a("G7As"),y=a("KQm4"),j=a("zLVn"),O=a("JX7q"),S=a("dI71"),w=o.a.createContext(null);function k(e,t){var a=Object.create(null);return e&&n.Children.map(e,(function(e){return e})).forEach((function(e){a[e.key]=function(e){return t&&Object(n.isValidElement)(e)?t(e):e}(e)})),a}function E(e,t,a){return null!=a[t]?a[t]:e.props[t]}function C(e,t,a){var o=k(e.children),r=function(e,t){function a(a){return a in t?t[a]:e[a]}e=e||{},t=t||{};var n,o=Object.create(null),r=[];for(var i in e)i in t?r.length&&(o[i]=r,r=[]):r.push(i);var c={};for(var l in t){if(o[l])for(n=0;n<o[l].length;n++){var s=o[l][n];c[o[l][n]]=a(s)}c[l]=a(l)}for(n=0;n<r.length;n++)c[r[n]]=a(r[n]);return c}(t,o);return Object.keys(r).forEach((function(i){var c=r[i];if(Object(n.isValidElement)(c)){var l=i in t,s=i in o,d=t[i],u=Object(n.isValidElement)(d)&&!d.props.in;!s||l&&!u?s||!l||u?s&&l&&Object(n.isValidElement)(d)&&(r[i]=Object(n.cloneElement)(c,{onExited:a.bind(null,c),in:d.props.in,exit:E(c,"exit",e),enter:E(c,"enter",e)})):r[i]=Object(n.cloneElement)(c,{in:!1}):r[i]=Object(n.cloneElement)(c,{onExited:a.bind(null,c),in:!0,exit:E(c,"exit",e),enter:E(c,"enter",e)})}})),r}var R=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},z=function(e){function t(t,a){var n,o=(n=e.call(this,t,a)||this).handleExited.bind(Object(O.a)(n));return n.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},n}Object(S.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var a,o,r=t.children,i=t.handleExited;return{children:t.firstRender?(a=e,o=i,k(a.children,(function(e){return Object(n.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:E(e,"appear",a),enter:E(e,"enter",a),exit:E(e,"exit",a)})}))):C(e,r,i),firstRender:!1}},a.handleExited=function(e,t){var a=k(this.props.children);e.key in a||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var a=Object(r.a)({},t.children);return delete a[e.key],{children:a}})))},a.render=function(){var e=this.props,t=e.component,a=e.childFactory,n=Object(j.a)(e,["component","childFactory"]),r=this.state.contextValue,i=R(this.state.children).map(a);return delete n.appear,delete n.enter,delete n.exit,null===t?o.a.createElement(w.Provider,{value:r},i):o.a.createElement(w.Provider,{value:r},o.a.createElement(t,n,i))},t}(o.a.Component);z.defaultProps={component:"div",childFactory:function(e){return e}};var N=z,M="undefined"==typeof window?n.useEffect:n.useLayoutEffect;var T=function(e){var t=e.classes,a=e.pulsate,o=void 0!==a&&a,r=e.rippleX,i=e.rippleY,l=e.rippleSize,s=e.in,d=e.onExited,u=void 0===d?function(){}:d,p=e.timeout,m=n.useState(!1),f=m[0],b=m[1],h=Object(c.a)(t.ripple,t.rippleVisible,o&&t.ripplePulsate),g={width:l,height:l,top:-l/2+i,left:-l/2+r},x=Object(c.a)(t.child,f&&t.childLeaving,o&&t.childPulsate),y=v(u);return M((function(){if(!s){b(!0);var e=setTimeout(y,p);return function(){clearTimeout(e)}}}),[y,s,p]),n.createElement("span",{className:h,style:g},n.createElement("span",{className:x}))},I=n.forwardRef((function(e,t){var a=e.center,o=void 0!==a&&a,l=e.classes,s=e.className,d=Object(i.a)(e,["center","classes","className"]),u=n.useState([]),p=u[0],m=u[1],f=n.useRef(0),b=n.useRef(null);n.useEffect((function(){b.current&&(b.current(),b.current=null)}),[p]);var h=n.useRef(!1),g=n.useRef(null),v=n.useRef(null),x=n.useRef(null);n.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var j=n.useCallback((function(e){var t=e.pulsate,a=e.rippleX,o=e.rippleY,r=e.rippleSize,i=e.cb;m((function(e){return[].concat(Object(y.a)(e),[n.createElement(T,{key:f.current,classes:l,timeout:550,pulsate:t,rippleX:a,rippleY:o,rippleSize:r})])})),f.current+=1,b.current=i}),[l]),O=n.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=t.pulsate,r=void 0!==n&&n,i=t.center,c=void 0===i?o||t.pulsate:i,l=t.fakeElement,s=void 0!==l&&l;if("mousedown"===e.type&&h.current)h.current=!1;else{"touchstart"===e.type&&(h.current=!0);var d,u,p,m=s?null:x.current,f=m?m.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)d=Math.round(f.width/2),u=Math.round(f.height/2);else{var b=e.touches?e.touches[0]:e,y=b.clientX,O=b.clientY;d=Math.round(y-f.left),u=Math.round(O-f.top)}if(c)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2==0&&(p+=1);else{var S=2*Math.max(Math.abs((m?m.clientWidth:0)-d),d)+2,w=2*Math.max(Math.abs((m?m.clientHeight:0)-u),u)+2;p=Math.sqrt(Math.pow(S,2)+Math.pow(w,2))}e.touches?null===v.current&&(v.current=function(){j({pulsate:r,rippleX:d,rippleY:u,rippleSize:p,cb:a})},g.current=setTimeout((function(){v.current&&(v.current(),v.current=null)}),80)):j({pulsate:r,rippleX:d,rippleY:u,rippleSize:p,cb:a})}}),[o,j]),S=n.useCallback((function(){O({},{pulsate:!0})}),[O]),w=n.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&v.current)return e.persist(),v.current(),v.current=null,void(g.current=setTimeout((function(){w(e,t)})));v.current=null,m((function(e){return e.length>0?e.slice(1):e})),b.current=t}),[]);return n.useImperativeHandle(t,(function(){return{pulsate:S,start:O,stop:w}}),[S,O,w]),n.createElement("span",Object(r.a)({className:Object(c.a)(l.root,s),ref:x},d),n.createElement(N,{component:null,exit:!0},p))})),W=Object(l.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(n.memo(I)),L=n.forwardRef((function(e,t){var a=e.action,o=e.buttonRef,l=e.centerRipple,s=void 0!==l&&l,d=e.children,u=e.classes,p=e.className,m=e.component,f=void 0===m?"button":m,g=e.disabled,y=void 0!==g&&g,j=e.disableRipple,O=void 0!==j&&j,S=e.disableTouchRipple,w=void 0!==S&&S,k=e.focusRipple,E=void 0!==k&&k,C=e.focusVisibleClassName,R=e.onBlur,z=e.onClick,N=e.onFocus,M=e.onFocusVisible,T=e.onKeyDown,I=e.onKeyUp,L=e.onMouseDown,V=e.onMouseLeave,B=e.onMouseUp,P=e.onTouchEnd,D=e.onTouchMove,F=e.onTouchStart,A=e.onDragLeave,G=e.tabIndex,$=void 0===G?0:G,X=e.TouchRippleProps,q=e.type,Y=void 0===q?"button":q,U=Object(i.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),H=n.useRef(null);var K=n.useRef(null),_=n.useState(!1),J=_[0],Z=_[1];y&&J&&Z(!1);var Q=Object(x.a)(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ae=Q.ref;function ne(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;return v((function(n){return t&&t(n),!a&&K.current&&K.current[e](n),!0}))}n.useImperativeHandle(a,(function(){return{focusVisible:function(){Z(!0),H.current.focus()}}}),[]),n.useEffect((function(){J&&E&&!O&&K.current.pulsate()}),[O,E,J]);var oe=ne("start",L),re=ne("stop",A),ie=ne("stop",B),ce=ne("stop",(function(e){J&&e.preventDefault(),V&&V(e)})),le=ne("start",F),se=ne("stop",P),de=ne("stop",D),ue=ne("stop",(function(e){J&&(te(e),Z(!1)),R&&R(e)}),!1),pe=v((function(e){H.current||(H.current=e.currentTarget),ee(e)&&(Z(!0),M&&M(e)),N&&N(e)})),me=function(){var e=b.findDOMNode(H.current);return f&&"button"!==f&&!("A"===e.tagName&&e.href)},fe=n.useRef(!1),be=v((function(e){E&&!fe.current&&J&&K.current&&" "===e.key&&(fe.current=!0,e.persist(),K.current.stop(e,(function(){K.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),T&&T(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!y&&(e.preventDefault(),z&&z(e))})),he=v((function(e){E&&" "===e.key&&K.current&&J&&!e.defaultPrevented&&(fe.current=!1,e.persist(),K.current.stop(e,(function(){K.current.pulsate(e)}))),I&&I(e),z&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&z(e)})),ge=f;"button"===ge&&U.href&&(ge="a");var ve={};"button"===ge?(ve.type=Y,ve.disabled=y):("a"===ge&&U.href||(ve.role="button"),ve["aria-disabled"]=y);var xe=Object(h.a)(o,t),ye=Object(h.a)(ae,H),je=Object(h.a)(xe,ye),Oe=n.useState(!1),Se=Oe[0],we=Oe[1];n.useEffect((function(){we(!0)}),[]);var ke=Se&&!O&&!y;return n.createElement(ge,Object(r.a)({className:Object(c.a)(u.root,p,J&&[u.focusVisible,C],y&&u.disabled),onBlur:ue,onClick:z,onFocus:pe,onKeyDown:be,onKeyUp:he,onMouseDown:oe,onMouseLeave:ce,onMouseUp:ie,onDragLeave:re,onTouchEnd:se,onTouchMove:de,onTouchStart:le,ref:je,tabIndex:y?-1:$},ve,U),d,ke?n.createElement(W,Object(r.a)({ref:K,center:s},X)):null)})),V=Object(l.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(L),B=n.forwardRef((function(e,t){var a=e.children,o=e.classes,l=e.className,d=e.color,u=void 0===d?"default":d,p=e.component,m=void 0===p?"button":p,f=e.disabled,b=void 0!==f&&f,h=e.disableElevation,g=void 0!==h&&h,v=e.disableFocusRipple,x=void 0!==v&&v,y=e.endIcon,j=e.focusVisibleClassName,O=e.fullWidth,S=void 0!==O&&O,w=e.size,k=void 0===w?"medium":w,E=e.startIcon,C=e.type,R=void 0===C?"button":C,z=e.variant,N=void 0===z?"text":z,M=Object(i.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),T=E&&n.createElement("span",{className:Object(c.a)(o.startIcon,o["iconSize".concat(Object(s.a)(k))])},E),I=y&&n.createElement("span",{className:Object(c.a)(o.endIcon,o["iconSize".concat(Object(s.a)(k))])},y);return n.createElement(V,Object(r.a)({className:Object(c.a)(o.root,o[N],l,"inherit"===u?o.colorInherit:"default"!==u&&o["".concat(N).concat(Object(s.a)(u))],"medium"!==k&&[o["".concat(N,"Size").concat(Object(s.a)(k))],o["size".concat(Object(s.a)(k))]],g&&o.disableElevation,b&&o.disabled,S&&o.fullWidth),component:m,disabled:b,focusRipple:!x,focusVisibleClassName:Object(c.a)(o.focusVisible,j),ref:t,type:R},M),n.createElement("span",{className:o.label},T,a,I))})),P=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(f.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(f.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(f.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(f.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(f.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(B),D=n.forwardRef((function(e,t){var a=e.edge,o=void 0!==a&&a,l=e.children,d=e.classes,u=e.className,p=e.color,m=void 0===p?"default":p,f=e.disabled,b=void 0!==f&&f,h=e.disableFocusRipple,g=void 0!==h&&h,v=e.size,x=void 0===v?"medium":v,y=Object(i.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(V,Object(r.a)({className:Object(c.a)(d.root,u,"default"!==m&&d["color".concat(Object(s.a)(m))],b&&d.disabled,"small"===x&&d["size".concat(Object(s.a)(x))],{start:d.edgeStart,end:d.edgeEnd}[o]),centerRipple:!0,focusRipple:!g,disabled:b,ref:t},y),n.createElement("span",{className:d.label},l))})),F=Object(l.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(f.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(D),A=a("uniG"),G=a.n(A),$=n.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.raised,s=void 0!==l&&l,d=Object(i.a)(e,["classes","className","raised"]);return n.createElement(u,Object(r.a)({className:Object(c.a)(a.root,o),elevation:s?8:1,ref:t},d))})),X=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})($),q=n.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,l=e.classes,s=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(r.a)({className:Object(c.a)(l.root,s,!o&&l.spacing),ref:t},d))})),Y=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(q),U=n.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=Object(i.a)(e,["classes","className","component"]);return n.createElement(s,Object(r.a)({className:Object(c.a)(a.root,o),ref:t},d))})),H=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(U),K=["video","audio","picture","iframe","img"],_=n.forwardRef((function(e,t){var a=e.children,o=e.classes,l=e.className,s=e.component,d=void 0===s?"div":s,u=e.image,p=e.src,m=e.style,f=Object(i.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==K.indexOf(d),h=!b&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},m):m;return n.createElement(d,Object(r.a)({className:Object(c.a)(o.root,l,b&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:h,src:b?u||p:void 0},f),a)})),J=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(_),Z={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},Q=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var ee=Object(l.a)((function(e){return{"@global":{html:Z,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},Q(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,n.createElement(n.Fragment,null,a)})),te=[0,1,2,3,4,5,6,7,8,9,10],ae=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var oe=n.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,u=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,b=void 0!==f&&f,h=e.direction,g=void 0===h?"row":h,v=e.item,x=void 0!==v&&v,y=e.justify,j=void 0===y?"flex-start":y,O=e.lg,S=void 0!==O&&O,w=e.md,k=void 0!==w&&w,E=e.sm,C=void 0!==E&&E,R=e.spacing,z=void 0===R?0:R,N=e.wrap,M=void 0===N?"wrap":N,T=e.xl,I=void 0!==T&&T,W=e.xs,L=void 0!==W&&W,V=e.zeroMinWidth,B=void 0!==V&&V,P=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(c.a)(d.root,u,b&&[d.container,0!==z&&d["spacing-xs-".concat(String(z))]],x&&d.item,B&&d.zeroMinWidth,"row"!==g&&d["direction-xs-".concat(String(g))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==k&&d["grid-md-".concat(String(k))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==I&&d["grid-xl-".concat(String(I))]);return n.createElement(m,Object(r.a)({className:D,ref:t},P))})),re=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return te.forEach((function(n){var o=e.spacing(n);0!==o&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(ne(o,2)),width:"calc(100% + ".concat(ne(o),")"),"& > $item":{padding:ne(o,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};ae.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(oe),ie=a("rePB"),ce=n.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,u=void 0!==d&&d,p=e.variant,m=void 0===p?"regular":p,f=Object(i.a)(e,["classes","className","component","disableGutters","variant"]);return n.createElement(s,Object(r.a)({className:Object(c.a)(a.root,a[m],o,!u&&a.gutters),ref:t},f))})),le=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(ie.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(ce),se=a("ofer"),de=a("R/WZ"),ue=n.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,d=void 0===l?"div":l,u=e.disableGutters,p=void 0!==u&&u,m=e.fixed,f=void 0!==m&&m,b=e.maxWidth,h=void 0===b?"lg":b,g=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return n.createElement(d,Object(r.a)({className:Object(c.a)(a.root,o,f&&a.fixed,p&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(s.a)(String(h)))]),ref:t},g))})),pe=Object(l.a)((function(e){return{root:Object(ie.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(ie.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(ie.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(ie.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(ie.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(ie.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(ue),me=a("W/9C"),fe=function(e){return o.a.createElement("div",null,e.children,o.a.createElement(me.a,null))},be=a("viY9"),he=a("/g4k"),ge=a.n(he),ve=a("vqLa"),xe=a.n(ve),ye=Object(be.a)({palette:{primary:ge.a,secondary:xe.a},overrides:{MuiIconButton:{label:{color:"white"}}}}),je=a("OKji"),Oe=a("aXM8"),Se=a("hfi/");var we=function(e){var t=e.children,a=e.theme,n=Object(Oe.a)(),i=o.a.useMemo((function(){var e=null===n?a:function(e,t){return"function"==typeof t?t(e):Object(r.a)(Object(r.a)({},e),t)}(n,a);return null!=e&&(e[Se.a]=null!==n),e}),[a,n]);return o.a.createElement(je.a.Provider,{value:i},t)},ke=Object(de.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{},cardContent:{flexGrow:1}}})),Ee=[{texts:"VINX 非接触型セルフＰＯＳシステム",description:"This is a media card. You can use this section to describe the content.",media:"https://www.youtube.com/embed/zqwaPGFGO00"},{texts:"VINX Commerce Gate特徴的な機能",description:"This is a media card. You can use this section to describe the content.",media:"https://www.youtube.com/embed/oXYdfsKAigE"},{texts:"VINX 企業紹介",description:"This is a media card. You can use this section to describe the content.",media:"https://www.youtube.com/embed/B0-f_DsllpY"},{texts:"VINX キャッシュレス・セルフPOS",description:"This is a media card. You can use this section to describe the content.",media:"https://www.youtube.com/embed/REZZmsAzYbs"}];function Ce(){var e=ke();return o.a.createElement(o.a.Fragment,null,o.a.createElement(we,{theme:ye},o.a.createElement(fe,null,o.a.createElement(ee,null),o.a.createElement(m,{position:"relative"},o.a.createElement(le,null,o.a.createElement(F,{"aria-label":"delete",className:e.margin},o.a.createElement(G.a,{className:e.icon})),o.a.createElement(se.a,{variant:"h6",color:"inherit",noWrap:!0},"Movie List"))),o.a.createElement("main",null,o.a.createElement("div",{className:e.heroContent},o.a.createElement(pe,{maxWidth:"sm"},o.a.createElement(se.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"React Staticsite"),o.a.createElement(se.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0}),o.a.createElement("div",{className:e.heroButtons},o.a.createElement(re,{container:!0,spacing:2,justify:"center"},o.a.createElement(re,{item:!0},o.a.createElement(P,{variant:"contained",color:"primary"},"Main call to action")))))),o.a.createElement(pe,{className:e.cardGrid,maxWidth:"md"},o.a.createElement(re,{container:!0,spacing:4},Ee.map((function(t,a){return o.a.createElement(re,{item:!0,key:t,xs:12,sm:6,md:4},o.a.createElement(X,{className:e.card},o.a.createElement(J,{component:"iframe",className:e.cardMedia,image:t.media,title:"Image title"}),o.a.createElement(H,{className:e.cardContent},o.a.createElement(se.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.texts),o.a.createElement(se.a,null,t.description)),o.a.createElement(Y,null,o.a.createElement(P,{size:"small",color:"primary"},"View"),o.a.createElement(P,{size:"small",color:"primary"},"Edit"))))}))))))))}},UJJ5:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=a("iuhU"),c=a("H2TA"),l=a("NqtD"),s=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.color,u=void 0===d?"inherit":d,p=e.component,m=void 0===p?"svg":p,f=e.fontSize,b=void 0===f?"default":f,h=e.htmlColor,g=e.titleAccess,v=e.viewBox,x=void 0===v?"0 0 24 24":v,y=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return r.createElement(m,Object(n.a)({className:Object(i.a)(c.root,s,"inherit"!==u&&c["color".concat(Object(l.a)(u))],"default"!==b&&c["fontSize".concat(Object(l.a)(b))]),focusable:"false",viewBox:x,color:h,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},y),a,g?r.createElement("title",null,g):null)}));s.muiName="SvgIcon";var d=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},uniG:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=r},vqLa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};t.default=n}}]);
//# sourceMappingURL=component---src-pages-index-js-eef7b05b2ba47dc69521.js.map