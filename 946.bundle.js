(self.webpackChunkfec=self.webpackChunkfec||[]).push([[946],{4786:(e,n,t)=>{"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,{Z:()=>o})},6843:(e,n,t)=>{"use strict";function o(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:()=>o})},1946:(e,n,t)=>{"use strict";t.d(n,{Z:()=>Pe});var o=t(4786),r=t(6843),a=t(4184),i=t.n(a);const s=!("undefined"==typeof window||!window.document||!window.document.createElement);var c=!1,u=!1;try{var l={get passive(){return c=!0},get once(){return u=c=!0}};s&&(window.addEventListener("test",l,l),window.removeEventListener("test",l,!0))}catch(e){}const d=function(e,n,t,o){if(o&&"boolean"!=typeof o&&!u){var r=o.once,a=o.capture,i=t;!u&&r&&(i=t.__once||function e(o){this.removeEventListener(n,e,a),t.call(this,o)},t.__once=i),e.addEventListener(n,i,c?o:a)}e.addEventListener(n,t,o)};function f(e){return e&&e.ownerDocument||document}const p=function(e,n,t,o){var r=o&&"boolean"!=typeof o?o.capture:o;e.removeEventListener(n,t,r),t.__once&&e.removeEventListener(n,t.__once,r)};var m;function v(e){if((!m&&0!==m||e)&&s){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),m=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return m}var h=t(7294);function E(e){var n=function(e){var n=(0,h.useRef)(e);return(0,h.useEffect)((function(){n.current=e}),[e]),n}(e);return(0,h.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}function g(e){var n,t,o=(n=e,(t=(0,h.useRef)(n)).current=n,t);(0,h.useEffect)((function(){return function(){return o.current()}}),[])}var y=/([A-Z])/g,b=/^ms-/;function x(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(b,"-ms-")}var N=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const w=function(e,n){var t="",o="";if("string"==typeof n)return e.style.getPropertyValue(x(n))||function(e,n){return function(e){var n=f(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}(e).getPropertyValue(x(n));Object.keys(n).forEach((function(r){var a=n[r];a||0===a?function(e){return!(!e||!N.test(e))}(r)?o+=r+"("+a+") ":t+=x(r)+": "+a+";":e.style.removeProperty(x(r))})),o&&(t+="transform: "+o+";"),e.style.cssText+=";"+t},C=function(e,n,t,o){return d(e,n,t,o),function(){p(e,n,t,o)}};function k(e,n,t,o){var r,a;null==t&&(a=-1===(r=w(e,"transitionDuration")||"").indexOf("ms")?1e3:1,t=parseFloat(r)*a||0);var i=function(e,n,t){void 0===t&&(t=5);var o=!1,r=setTimeout((function(){o||function(e){var n=document.createEvent("HTMLEvents");n.initEvent("transitionend",!0,!0),e.dispatchEvent(n)}(e)}),n+t),a=C(e,"transitionend",(function(){o=!0}),{once:!0});return function(){clearTimeout(r),a()}}(e,t,o),s=C(e,"transitionend",n);return function(){i(),s()}}function O(e){void 0===e&&(e=f());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(n){return e.body}}function S(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var R=t(5697),T=t.n(R),F=t(3935);function D(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"==typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function P(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Z(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=P(e.className,n):e.setAttribute("class",P(e.className&&e.className.baseVal||"",n))}function L(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function M(e){var n;return L(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=L(e)?f():f(e),t=L(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var A=["template","script","style"],H=function(e,n,t){[].forEach.call(e.children,(function(e){var o,r,a;-1===n.indexOf(e)&&(r=(o=e).nodeType,a=o.tagName,1===r&&-1===A.indexOf(a.toLowerCase()))&&t(e)}))};function I(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}const _=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,o=void 0===t||t,r=n.handleContainerOverflow,a=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=o,this.handleContainerOverflow=a,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=v()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return n=this.data,t=function(n){return-1!==n.modals.indexOf(e)},o=-1,n.some((function(e,n){return!!t(e)&&(o=n,!0)})),o;var n,t,o},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(w(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),w(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var o=this.modals.indexOf(e),r=this.containers.indexOf(n);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;H(e,[t,o],(function(e){return I(!0,e)}))}(n,e),-1!==r)return this.data[r].modals.push(e),o;var a={modals:[e],classes:t?t.split(/\s+/):[],overflowing:M(n)};return this.handleContainerOverflow&&this.setContainerStyle(a,n),a.classes.forEach(D.bind(null,n)),this.containers.push(n),this.data.push(a),o},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),o=this.data[t],r=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.classes.forEach(Z.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(o,r),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;H(e,[t,o],(function(e){return I(!1,e)}))}(r,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var a=o.modals[o.modals.length-1],i=a.backdrop;I(!1,a.dialog),I(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}();var B,j=function(e){var n;return"undefined"==typeof document?null:null==e?f().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(n=e)?void 0:n.nodeType)&&e||null)};var U=(0,h.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,i=e.role,c=void 0===i?"dialog":i,u=e.className,l=e.style,d=e.children,f=e.backdrop,p=void 0===f||f,m=e.keyboard,v=void 0===m||m,y=e.onBackdropClick,b=e.onEscapeKeyDown,x=e.transition,N=e.backdropTransition,w=e.autoFocus,k=void 0===w||w,R=e.enforceFocus,T=void 0===R||R,D=e.restoreFocus,P=void 0===D||D,Z=e.restoreFocusOptions,L=e.renderDialog,M=e.renderBackdrop,A=void 0===M?function(e){return h.createElement("div",e)}:M,H=e.manager,I=e.container,U=e.containerClassName,z=e.onShow,V=e.onHide,K=void 0===V?function(){}:V,W=e.onExit,$=e.onExited,X=e.onExiting,q=e.onEnter,G=e.onEntering,Y=e.onEntered,J=(0,r.Z)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),Q=function(e,n){var t=(0,h.useState)((function(){return j(e)})),o=t[0],r=t[1];if(!o){var a=j(e);a&&r(a)}return(0,h.useEffect)((function(){}),[n,o]),(0,h.useEffect)((function(){var n=j(e);n!==o&&r(n)}),[e,o]),o}(I),ee=function(e){var n=e||(B||(B=new _),B),t=(0,h.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,o){return n.add(t.current,e,o)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:(0,h.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:(0,h.useCallback)((function(e){t.current.backdrop=e}),[])})}(H),ne=function(){var e=(0,h.useRef)(!0),n=(0,h.useRef)((function(){return e.current}));return(0,h.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),te=function(e){var n=(0,h.useRef)(null);return(0,h.useEffect)((function(){n.current=e})),n.current}(a),oe=(0,h.useState)(!a),re=oe[0],ae=oe[1],ie=(0,h.useRef)(null);(0,h.useImperativeHandle)(n,(function(){return ee}),[ee]),s&&!te&&a&&(ie.current=O()),x||a||re?a&&re&&ae(!1):ae(!0);var se=E((function(){if(ee.add(Q,U),pe.current=C(document,"keydown",de),fe.current=C(document,"focus",(function(){return setTimeout(ue)}),!0),z&&z(),k){var e=O(document);ee.dialog&&e&&!S(ee.dialog,e)&&(ie.current=e,ee.dialog.focus())}})),ce=E((function(){var e;ee.remove(),null==pe.current||pe.current(),null==fe.current||fe.current(),P&&(null==(e=ie.current)||null==e.focus||e.focus(Z),ie.current=null)}));(0,h.useEffect)((function(){a&&Q&&se()}),[a,Q,se]),(0,h.useEffect)((function(){re&&ce()}),[re,ce]),g((function(){ce()}));var ue=E((function(){if(T&&ne()&&ee.isTopModal()){var e=O();ee.dialog&&e&&!S(ee.dialog,e)&&ee.dialog.focus()}})),le=E((function(e){e.target===e.currentTarget&&(null==y||y(e),!0===p&&K())})),de=E((function(e){v&&27===e.keyCode&&ee.isTopModal()&&(null==b||b(e),e.defaultPrevented||K())})),fe=(0,h.useRef)(),pe=(0,h.useRef)(),me=x;if(!Q||!(a||me&&!re))return null;var ve=(0,o.Z)({role:c,ref:ee.setDialogRef,"aria-modal":"dialog"===c||void 0},J,{style:l,className:u,tabIndex:-1}),he=L?L(ve):h.createElement("div",ve,h.cloneElement(d,{role:"document"}));me&&(he=h.createElement(me,{appear:!0,unmountOnExit:!0,in:!!a,onExit:W,onExiting:X,onExited:function(){ae(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==$||$.apply(void 0,n)},onEnter:q,onEntering:G,onEntered:Y},he));var Ee=null;if(p){var ge=N;Ee=A({ref:ee.setBackdropRef,onClick:le}),ge&&(Ee=h.createElement(ge,{appear:!0,in:!!a},Ee))}return h.createElement(h.Fragment,null,F.createPortal(h.createElement(h.Fragment,null,Ee,he),Q))})),z={show:T().bool,container:T().any,onShow:T().func,onHide:T().func,backdrop:T().oneOfType([T().bool,T().oneOf(["static"])]),renderDialog:T().func,renderBackdrop:T().func,onEscapeKeyDown:T().func,onBackdropClick:T().func,containerClassName:T().string,keyboard:T().bool,transition:T().elementType,backdropTransition:T().elementType,autoFocus:T().bool,enforceFocus:T().bool,restoreFocus:T().bool,restoreFocusOptions:T().shape({preventScroll:T().bool}),onEnter:T().func,onEntering:T().func,onEntered:T().func,onExit:T().func,onExiting:T().func,onExited:T().func,manager:T().instanceOf(_)};U.displayName="Modal",U.propTypes=z;const V=Object.assign(U,{Manager:_});function K(e,n){return(K=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function W(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,K(e,n)}t(2473);var $=Function.prototype.bind.call(Function.prototype.call,[].slice);function X(e,n){return $(e.querySelectorAll(n))}var q=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",G=".sticky-top",Y=".navbar-toggler",J=function(e){function n(){return e.apply(this,arguments)||this}W(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var o,r=n.style[e];n.dataset[e]=r,w(n,((o={})[e]=parseFloat(w(n,e))+t+"px",o))},t.restore=function(e,n){var t,o=n.dataset[e];void 0!==o&&(delete n.dataset[e],w(n,((t={})[e]=o,t)))},t.setContainerStyle=function(n,t){var o=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var r=v();X(t,q).forEach((function(e){return o.adjustAndStore("paddingRight",e,r)})),X(t,G).forEach((function(e){return o.adjustAndStore("marginRight",e,-r)})),X(t,Y).forEach((function(e){return o.adjustAndStore("marginRight",e,r)}))}},t.removeContainerStyle=function(n,t){var o=this;e.prototype.removeContainerStyle.call(this,n,t),X(t,q).forEach((function(e){return o.restore("paddingRight",e)})),X(t,G).forEach((function(e){return o.restore("marginRight",e)})),X(t,Y).forEach((function(e){return o.restore("marginRight",e)}))},n}(_);const Q=h.createContext(null);var ee="unmounted",ne="exited",te="entering",oe="entered",re="exiting",ae=function(e){function n(n,t){var o;o=e.call(this,n,t)||this;var r,a=t&&!t.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?a?(r=ne,o.appearStatus=te):r=oe:r=n.unmountOnExit||n.mountOnEnter?ee:ne,o.state={status:r},o.nextCallback=null,o}W(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===ee?{status:ne}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==te&&t!==oe&&(n=te):t!==te&&t!==oe||(n=re)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,o=this.props.timeout;return e=n=t=o,null!=o&&"number"!=typeof o&&(e=o.exit,n=o.enter,t=void 0!==o.appear?o.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){void 0===e&&(e=!1),null!==n?(this.cancelNextCallback(),n===te?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===ne&&this.setState({status:ee})},t.performEnter=function(e){var n=this,t=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[F.findDOMNode(this),o],a=r[0],i=r[1],s=this.getTimeouts(),c=o?s.appear:s.enter;e||t?(this.props.onEnter(a,i),this.safeSetState({status:te},(function(){n.props.onEntering(a,i),n.onTransitionEnd(c,(function(){n.safeSetState({status:oe},(function(){n.props.onEntered(a,i)}))}))}))):this.safeSetState({status:oe},(function(){n.props.onEntered(a)}))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),o=this.props.nodeRef?void 0:F.findDOMNode(this);n?(this.props.onExit(o),this.safeSetState({status:re},(function(){e.props.onExiting(o),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:ne},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:ne},(function(){e.props.onExited(o)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(o){t&&(t=!1,n.nextCallback=null,e(o))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:F.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(t&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],a=r[0],i=r[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===ee)return null;var n=this.props,t=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,r.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return h.createElement(Q.Provider,{value:null},"function"==typeof t?t(e,o):h.cloneElement(h.Children.only(t),o))},n}(h.Component);function ie(){}ae.contextType=Q,ae.propTypes={},ae.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ie,onEntering:ie,onEntered:ie,onExit:ie,onExiting:ie,onExited:ie},ae.UNMOUNTED=ee,ae.EXITED=ne,ae.ENTERING=te,ae.ENTERED=oe,ae.EXITING=re;const se=ae;function ce(e,n){var t=k(e,(function(o){o.target===e&&(t(),n(o))}))}var ue,le=((ue={}).entering="show",ue.entered="show",ue),de=h.forwardRef((function(e,n){var t=e.className,a=e.children,s=(0,r.Z)(e,["className","children"]),c=(0,h.useCallback)((function(e){!function(e){e.offsetHeight}(e),s.onEnter&&s.onEnter(e)}),[s]);return h.createElement(se,(0,o.Z)({ref:n,addEndListener:ce},s,{onEnter:c}),(function(e,n){return h.cloneElement(a,(0,o.Z)({},n,{className:i()("fade",t,a.props.className,le[e])}))}))}));de.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},de.displayName="Fade";const fe=de;var pe=t(4680);const me=(0,pe.Z)("modal-body"),ve=h.createContext({onHide:function(){}});var he=t(6792),Ee=h.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.contentClassName,c=e.centered,u=e.size,l=e.children,d=e.scrollable,f=(0,r.Z)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),p=(t=(0,he.vE)(t,"modal"))+"-dialog";return h.createElement("div",(0,o.Z)({},f,{ref:n,className:i()(p,a,u&&t+"-"+u,c&&p+"-centered",d&&p+"-scrollable")}),h.createElement("div",{className:i()(t+"-content",s)},l))}));Ee.displayName="ModalDialog";const ge=Ee,ye=(0,pe.Z)("modal-footer");var be={label:T().string.isRequired,onClick:T().func},xe=h.forwardRef((function(e,n){var t=e.label,a=e.onClick,s=e.className,c=(0,r.Z)(e,["label","onClick","className"]);return h.createElement("button",(0,o.Z)({ref:n,type:"button",className:i()("close",s),onClick:a},c),h.createElement("span",{"aria-hidden":"true"},"×"),h.createElement("span",{className:"sr-only"},t))}));xe.displayName="CloseButton",xe.propTypes=be,xe.defaultProps={label:"Close"};const Ne=xe;var we=h.forwardRef((function(e,n){var t=e.bsPrefix,a=e.closeLabel,s=e.closeButton,c=e.onHide,u=e.className,l=e.children,d=(0,r.Z)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=(0,he.vE)(t,"modal-header");var f=(0,h.useContext)(ve),p=E((function(){f&&f.onHide(),c&&c()}));return h.createElement("div",(0,o.Z)({ref:n},d,{className:i()(u,t)}),l,s&&h.createElement(Ne,{label:a,onClick:p}))}));we.displayName="ModalHeader",we.defaultProps={closeLabel:"Close",closeButton:!1};const Ce=we;var ke=("h4",h.forwardRef((function(e,n){return h.createElement("div",(0,o.Z)({},e,{ref:n,className:i()(e.className,"h4")}))})));const Oe=(0,pe.Z)("modal-title",{Component:ke});var Se,Re={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ge};function Te(e){return h.createElement(fe,e)}function Fe(e){return h.createElement(fe,e)}var De=h.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,c=e.style,u=e.dialogClassName,l=e.contentClassName,m=e.children,y=e.dialogAs,b=e["aria-labelledby"],x=e.show,N=e.animation,w=e.backdrop,C=e.keyboard,O=e.onEscapeKeyDown,S=e.onShow,R=e.onHide,T=e.container,F=e.autoFocus,D=e.enforceFocus,P=e.restoreFocus,Z=e.restoreFocusOptions,L=e.onEntered,M=e.onExit,A=e.onExiting,H=e.onEnter,I=e.onEntering,_=e.onExited,B=e.backdropClassName,j=e.manager,U=(0,r.Z)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),z=(0,h.useState)({}),K=z[0],W=z[1],$=(0,h.useState)(!1),X=$[0],q=$[1],G=(0,h.useRef)(!1),Y=(0,h.useRef)(!1),Q=(0,h.useRef)(null),ee=(0,h.useState)(null),ne=ee[0],te=ee[1],oe=E(R);t=(0,he.vE)(t,"modal"),(0,h.useImperativeHandle)(n,(function(){return{get _modal(){return ne}}}),[ne]);var re=(0,h.useMemo)((function(){return{onHide:oe}}),[oe]);function ae(){return j||(Se||(Se=new J),Se)}function ie(e){if(s){var n=ae().isContainerOverflowing(ne),t=e.scrollHeight>f(e).documentElement.clientHeight;W({paddingRight:n&&!t?v():void 0,paddingLeft:!n&&t?v():void 0})}}var se=E((function(){ne&&ie(ne.dialog)}));g((function(){p(window,"resize",se),Q.current&&Q.current()}));var ce=function(){G.current=!0},ue=function(e){G.current&&ne&&e.target===ne.dialog&&(Y.current=!0),G.current=!1},le=function(){q(!0),Q.current=k(ne.dialog,(function(){q(!1)}))},de=function(e){"static"!==w?Y.current||e.target!==e.currentTarget?Y.current=!1:R():function(e){e.target===e.currentTarget&&le()}(e)},fe=(0,h.useCallback)((function(e){return h.createElement("div",(0,o.Z)({},e,{className:i()(t+"-backdrop",B,!N&&"show")}))}),[N,B,t]),pe=(0,o.Z)({},c,K);return N||(pe.display="block"),h.createElement(ve.Provider,{value:re},h.createElement(V,{show:x,ref:te,backdrop:w,container:T,keyboard:!0,autoFocus:F,enforceFocus:D,restoreFocus:P,restoreFocusOptions:Z,onEscapeKeyDown:function(e){C||"static"!==w?C&&O&&O(e):(e.preventDefault(),le())},onShow:S,onHide:R,onEnter:function(e){e&&(e.style.display="block",ie(e));for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];H&&H.apply(void 0,[e].concat(t))},onEntering:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];I&&I.apply(void 0,[e].concat(t)),d(window,"resize",se)},onEntered:L,onExit:function(e){Q.current&&Q.current();for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];M&&M.apply(void 0,[e].concat(t))},onExiting:A,onExited:function(e){e&&(e.style.display="");for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];_&&_.apply(void 0,t),p(window,"resize",se)},manager:ae(),containerClassName:t+"-open",transition:N?Te:void 0,backdropTransition:N?Fe:void 0,renderBackdrop:fe,renderDialog:function(e){return h.createElement("div",(0,o.Z)({role:"dialog"},e,{style:pe,className:i()(a,t,X&&t+"-static"),onClick:w?de:void 0,onMouseUp:ue,"aria-labelledby":b}),h.createElement(y,(0,o.Z)({},U,{onMouseDown:ce,className:u,contentClassName:l}),m))}}))}));De.displayName="Modal",De.defaultProps=Re,De.Body=me,De.Header=Ce,De.Title=Oe,De.Footer=ye,De.Dialog=ge,De.TRANSITION_DURATION=300,De.BACKDROP_TRANSITION_DURATION=150;const Pe=De},6792:(e,n,t)=>{"use strict";t.d(n,{vE:()=>a});var o=t(7294),r=o.createContext({});function a(e,n){var t=(0,o.useContext)(r);return e||t[n]||n}r.Consumer,r.Provider},4680:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var o=t(4786),r=t(6843),a=t(4184),i=t.n(a),s=/-(.)/g,c=t(7294),u=t(6792);function l(e,n){var t,a,l=void 0===n?{}:n,d=l.displayName,f=void 0===d?(t=e)[0].toUpperCase()+(a=t,a.replace(s,(function(e,n){return n.toUpperCase()}))).slice(1):d,p=l.Component,m=l.defaultProps,v=c.forwardRef((function(n,t){var a=n.className,s=n.bsPrefix,l=n.as,d=void 0===l?p||"div":l,f=(0,r.Z)(n,["className","bsPrefix","as"]),m=(0,u.vE)(s,e);return c.createElement(d,(0,o.Z)({ref:t,className:i()(a,m)},f))}));return v.defaultProps=m,v.displayName=f,v}},2473:e=>{"use strict";e.exports=function(){}}}]);