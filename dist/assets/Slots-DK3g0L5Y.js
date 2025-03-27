import{c as ee,d as te,j as c,r as B,b as re,e as ne,A as L,S as W,y as P,f as oe,g as ae}from"./index-ChrwmaKA.js";var A={exports:{}},U,D;function le(){if(D)return U;D=1;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return U=f,U}var q,K;function se(){if(K)return q;K=1;var f=le();function b(){}function m(){}return m.resetWarningCache=b,q=function(){function o(S,l,_,s,g,C){if(C!==f){var k=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw k.name="Invariant Violation",k}}o.isRequired=o;function n(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:n,element:o,elementType:o,instanceOf:n,node:o,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:m,resetWarningCache:b};return d.PropTypes=d,d},q}var $;function ie(){return $||($=1,A.exports=se()()),A.exports}var x={},G;function ce(){if(G)return x;G=1,Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var f=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var u=arguments[e];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(r[a]=u[a])}return r},b=function(){function r(e,u){for(var a=0;a<u.length;a++){var t=u[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,u,a){return u&&r(e.prototype,u),a&&r(e,a),e}}(),m,o;x.confirmAlert=X;var n=ee(),d=s(n),S=ie(),l=s(S),_=te();function s(r){return r&&r.__esModule?r:{default:r}}function g(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function C(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function k(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var N=(o=m=function(r){k(e,r);function e(){var u,a,t,R;g(this,e);for(var w=arguments.length,T=Array(w),O=0;O<w;O++)T[O]=arguments[O];return R=(a=(t=C(this,(u=e.__proto__||Object.getPrototypeOf(e)).call.apply(u,[this].concat(T))),t),t.handleClickButton=function(i){i.onClick&&i.onClick(),t.close()},t.handleClickOverlay=function(i){var v=t.props,y=v.closeOnClickOutside,h=v.onClickOutside,E=i.target===t.overlay;y&&E&&(h(),t.close()),i.stopPropagation()},t.close=function(){var i=t.props.afterClose;Q(),J(t.props),V(i)},t.keyboard=function(i){var v=t.props,y=v.closeOnEscape,h=v.onKeypressEscape,E=v.onkeyPress,j=v.keyCodeForClose,F=i.keyCode,Z=F===27;j.includes(F)&&t.close(),y&&Z&&(h(i),t.close()),E&&E()},t.componentDidMount=function(){document.addEventListener("keydown",t.keyboard,!1)},t.componentWillUnmount=function(){document.removeEventListener("keydown",t.keyboard,!1),t.props.willUnmount()},t.renderCustomUI=function(){var i=t.props,v=i.title,y=i.message,h=i.buttons,E=i.customUI,j={title:v,message:y,buttons:h,onClose:t.close};return E(j)},a),C(t,R)}return b(e,[{key:"render",value:function(){var a=this,t=this.props,R=t.title,w=t.message,T=t.buttons,O=t.childrenElement,i=t.customUI,v=t.overlayClassName;return d.default.createElement("div",{className:"react-confirm-alert-overlay "+v,ref:function(h){return a.overlay=h},onClick:this.handleClickOverlay},d.default.createElement("div",{className:"react-confirm-alert"},i?this.renderCustomUI():d.default.createElement("div",{className:"react-confirm-alert-body"},R&&d.default.createElement("h1",null,R),w,O(),d.default.createElement("div",{className:"react-confirm-alert-button-group"},T.map(function(y,h){return d.default.createElement("button",f({key:h,className:y.className},y,{onClick:function(j){return a.handleClickButton(y)}}),y.label)})))))}}]),e}(n.Component),m.propTypes={title:l.default.string,message:l.default.string,buttons:l.default.array.isRequired,childrenElement:l.default.func,customUI:l.default.func,closeOnClickOutside:l.default.bool,closeOnEscape:l.default.bool,keyCodeForClose:l.default.arrayOf(l.default.number),willUnmount:l.default.func,afterClose:l.default.func,onClickOutside:l.default.func,onKeypressEscape:l.default.func,onkeyPress:l.default.func,overlayClassName:l.default.string},m.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o);x.default=N;var p=null,I="react-confirm-alert";function M(){var r=document.getElementById("react-confirm-alert-firm-svg");if(!r){var e="http://www.w3.org/2000/svg",u=document.createElementNS(e,"feGaussianBlur");u.setAttribute("stdDeviation","0.3");var a=document.createElementNS(e,"filter");a.setAttribute("id","gaussian-blur"),a.appendChild(u);var t=document.createElementNS(e,"svg");t.setAttribute("id","react-confirm-alert-firm-svg"),t.setAttribute("class","react-confirm-alert-svg"),t.appendChild(a),document.body.appendChild(t)}}function V(r){var e=document.getElementById("react-confirm-alert-firm-svg");e&&e.parentNode.removeChild(e),document.body.children[0].classList.remove("react-confirm-alert-blur"),r()}function H(r){var e=document.getElementById(r.targetId||I);r.targetId&&!e&&console.error("React Confirm Alert:","Can not get element id (#"+r.targetId+")"),e?(p=(0,_.createRoot)(e),p.render(d.default.createElement(N,r))):(document.body.children[0].classList.add("react-confirm-alert-blur"),e=document.createElement("div"),e.id=I,document.body.appendChild(e),p=(0,_.createRoot)(e),p.render(d.default.createElement(N,r)))}function J(r){var e=document.getElementById(r.targetId||I);e&&p.unmount(e)}function z(){document.body.classList.add("react-confirm-alert-body-element")}function Q(){document.body.classList.remove("react-confirm-alert-body-element")}function X(r){z(),M(),H(r)}return x}var ue=ce();const Y=({slots:f,title:b,selectedSlot:m,handleBookSlot:o})=>c.jsxs("div",{className:"mb-6 border p-8",children:[c.jsx("h3",{className:"text-xl font-semibold mb-2",children:b}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",children:f.length>0?f.map(n=>c.jsx("div",{className:`p-4 border rounded ${n._id===m?"bg-blue-300":n.status?"bg-green-100":"bg-red-100"}`,style:{cursor:n.status?"pointer":"not-allowed"},onClick:()=>n.status&&o(n),children:c.jsx("p",{children:n.slotNumber})},n._id)):c.jsx("p",{children:"No slots available"})})]}),fe=()=>{const[f,b]=B.useState(null),[m,o]=B.useState(null),n=re(s=>{var g;return(g=s.user)==null?void 0:g.data});let d=0;B.useEffect(()=>{n&&(d=ne(n.data.DOJ)),S()},[]);const S=async()=>{try{const s=await L({...W.slots});s&&s.data&&b(s.data.data)}catch{P.error("Failed fetching the slots")}},l=s=>{if(s.isReserved&&d<15){P.info("You need at least 15 years of experience to book a reserved slot.");return}ue.confirmAlert({title:"Confirm Booking",message:`Are you sure you want to book slot ${s.slotNumber}?`,buttons:[{label:"Yes",onClick:()=>_(s)},{label:"No",onClick:()=>{}}],overlayClassName:"custom-overlay"})},_=async s=>{var g,C;try{const k=ae();o(s._id);const N={slotNumber:s.slotNumber,sapId:(g=n==null?void 0:n.data)==null?void 0:g.sapId,date:k},p=await L({...W.addSlot,data:N});p&&(await S(),p.data.statusCode=="BS1002"&&P.error(`${(C=p==null?void 0:p.data)==null?void 0:C.message}`))}catch{P.error("Failed to book the slot")}};return f?c.jsxs("div",{className:"container mx-auto p-4",children:[c.jsx("h2",{className:"block text-xl font-bold mb-5 text-center",children:"Book your parking slot"}),c.jsxs("div",{className:"flex gap-10",children:[c.jsx(Y,{slots:[...f.reservedSlots.booked,...f.reservedSlots.nonBooked],title:"Reserved Slots",selectedSlot:m,handleBookSlot:l}),c.jsx(Y,{slots:[...f.nonReservedSlots.booked,...f.nonReservedSlots.nonBooked],title:"Non-Reserved Slots",selectedSlot:m,handleBookSlot:l}),c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"flex flex-col",children:[c.jsx("div",{className:"bg-red-100 p-2 border mr-6 mt-2 w-25 text-center",children:"Booked"}),c.jsx("div",{className:"bg-green-100 p-2 border mt-2 w-25 text-center",children:"Available"}),c.jsx("div",{className:"bg-blue-300 p-2 border mt-2 w-25 text-center",children:"Selected"})]})})]})]}):c.jsx(oe,{})};export{fe as default};
