(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),i=n(6),s=n.n(i),r=(n(15),n(9)),u=n(2),p=n.p+"static/media/Vector.c2821b38.svg";var l=function(){return Object(a.jsx)("header",{className:"header header__line",children:Object(a.jsx)("img",{src:p,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 '\u041c\u0435\u0441\u0442\u043e'."})})},d=c.a.createContext();var j=function(e){var t=c.a.useContext(d),n=e.card.owner._id===t._id,o="element__delete ".concat(n?"":"element__delete_isHidden"),i=e.card.likes.some((function(e){return e._id===t._id})),s="element__like ".concat(i?"element__like_state_active":"");return Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__photo",onClick:function(){e.onCardClick(e.card)}}),Object(a.jsx)("button",{className:o,onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsxs)("div",{className:"element__container",children:[Object(a.jsx)("h2",{className:"element__heading",children:e.card.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:s,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("span",{className:"element__like-counter",children:e.card.likes.length})]})]})]})};var _=function(e){var t=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,i=e.onCardClick,s=e.\u0441ards,r=e.onCardLike,u=e.onCardDelete,p=c.a.useContext(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("img",{src:p.avatar,className:"profile__image",name:"avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(a.jsx)("button",{className:"profile__edit",onClick:t}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h2",{className:"profile__info-name",children:p.name}),Object(a.jsx)("button",{className:"profile__info-edit",onClick:n}),Object(a.jsx)("p",{className:"profile__info-job",children:p.about})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:o})]}),Object(a.jsx)("section",{className:"elements",children:s.map((function(e){return Object(a.jsx)(j,{card:e,onCardClick:i,onCardLike:r,onCardDelete:u},e._id)}))})]})};var h=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var m=function(e){var t=e.title,n=e.name,o=e.modifier,c=e.isOpened,i=e.buttonTextContent,s=e.children,r=e.onClose,u=e.onSubmit;return Object(a.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(c?"popup_is-opened":""," "),children:Object(a.jsxs)("div",{className:"popup__container popup__container_".concat(o),children:[Object(a.jsx)("button",{className:"popup__close",type:"button",onClick:r}),Object(a.jsx)("h3",{className:"popup__title",children:t}),Object(a.jsxs)("form",{className:"popup__form",name:n,onSubmit:u,noValidate:!0,children:[s,Object(a.jsx)("button",{className:"popup__submit",type:"submit",children:i})]})]})})};var f=function(e){var t=e.isOpened,n=e.onClose,o=e.onAddPlace,i=c.a.useRef(),s=c.a.useRef();return Object(a.jsxs)(m,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"addNewPlace",modifier:"content_text",isOpened:t,buttonTextContent:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),o(i.current.value,s.current.value)},onClose:n,children:[" ",Object(a.jsxs)("section",{className:"popup__form-section",children:[Object(a.jsx)("input",{type:"text",ref:i,required:!0,className:"popup__input popup__input_title",id:"create-title-popup",minLength:"2",maxLength:"30",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsx)("span",{className:"popup__input_error",id:"create-title-popup-error"})]}),Object(a.jsxs)("section",{className:"popup__form-section",children:[Object(a.jsx)("input",{type:"url",ref:s,required:!0,className:"popup__input popup__input_link",id:"create-link-popup",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(a.jsx)("span",{className:"popup__input_error",id:"create-link-popup-error"})]})]})};var b=function(e){var t=e.card,n=e.isOpened,o=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_image ".concat(n),children:Object(a.jsxs)("div",{className:"popup__container popup__container_content_image",children:[Object(a.jsx)("img",{src:t?t.link:"",alt:t.name,className:"popup__image"}),Object(a.jsx)("h3",{className:"popup__title popup__title_content-heading",id:"js__title",children:t.name}),Object(a.jsx)("button",{className:"popup__close",type:"button",onClick:o})]})})};var O=function(e){var t=e.isOpened,n=e.onClose,o=e.onUpdateUser,i=c.a.useState(""),s=Object(u.a)(i,2),r=s[0],p=s[1],l=c.a.useState(""),j=Object(u.a)(l,2),_=j[0],h=j[1],f=c.a.useContext(d);return c.a.useEffect((function(){f&&(p(f.name||""),h(f.about||""))}),[f]),Object(a.jsxs)(m,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"editProfile",modifier:"content_text",isOpened:t,buttonTextContent:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),o({name:r,about:_})},onClose:n,children:[Object(a.jsxs)("section",{className:"popup__form-section",children:[Object(a.jsx)("input",{type:"text",required:!0,className:"popup__input popup__input_name",id:"edit-name-popup",minLength:"2",maxLength:"40",name:"name",placeholder:"\u0418\u043c\u044f",value:r,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input_error",id:"edit-name-popup-error"})]}),Object(a.jsxs)("section",{className:"popup__form-section",children:[Object(a.jsx)("input",{type:"text",required:!0,className:"popup__input popup__input_job",id:"edit-job-popup",minLength:"2",maxLength:"200",name:"about",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",value:_,onChange:function(e){h(e.target.value)}}),Object(a.jsx)("span",{className:"popup__input_error",id:"edit-job-popup-error"})]})]})};var v=function(e){var t=e.isOpened,n=e.onClose,o=e.onUpdateAvatar,i=c.a.useRef();function s(e){e.preventDefault(),o(i.current.value)}return Object(a.jsx)(m,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"editAvatar",modifier:"content_text popup__container_update",isOpened:t,buttonTextContent:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:s,onClose:n,onHandleSubmit:s,children:Object(a.jsxs)("section",{className:"popup__form-section",children:[Object(a.jsx)("input",{type:"url",ref:i,required:!0,className:"popup__input popup__input-update",id:"edit-ava-popup",name:"update",placeholder:"\u041e\u0431\u043d\u043e\u0432\u0438\u043c\u0441\u044f?"}),Object(a.jsx)("span",{className:"popup__input_error",id:"edit-ava-popup-error"})]})})},x=n(7),C=n(8),g=new(function(){function e(t,n,a){Object(x.a)(this,e),this.baseUrl=t,this.group=n,this.token=a}return Object(C.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/users/me"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(t){return e._getResponseData(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/cards"),{headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"setLike",value:function(e,t){var n=this,a=t?"DELETE":"PUT";return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/cards/likes/").concat(e),{method:a,headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return n._getResponseData(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"v1/").concat(this.group,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}}]),e}())("https://mesto.nomoreparties.co/","cohort-17","a3d68f30-ff26-46e5-95a8-5a60641ab807");var N=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=c.a.useState(!1),p=Object(u.a)(s,2),j=p[0],m=p[1],x=c.a.useState(!1),C=Object(u.a)(x,2),N=C[0],k=C[1],y=c.a.useState(null),S=Object(u.a)(y,2),T=S[0],U=S[1],D=c.a.useState({}),P=Object(u.a)(D,2),L=P[0],A=P[1],E=c.a.useState([]),R=Object(u.a)(E,2),z=R[0],w=R[1],I=function(e){U(e)},q=function(){i(!1),m(!1),k(!1),U(null)};return Object(o.useEffect)((function(){Promise.all([g.getUserInfo(),g.getCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];!function(e){A(e)}(n),w(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(d.Provider,{value:L,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(l,{}),Object(a.jsx)(_,{onEditAvatar:function(){i(!0)},onEditProfile:function(){m(!0)},onAddPlace:function(){k(!0)},onCardClick:I,"\u0441ards":z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===L._id}));g.setLike(e._id,t).then((function(t){var n=z.map((function(n){return n._id===e._id?t:n}));w(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(t){var n=z.filter((function(t){return t._id!==e._id}));w(n)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(h,{}),Object(a.jsx)(v,{isOpened:n,onClose:q,onUpdateAvatar:function(e){g.setAvatar(e).then((function(e){A(e),i(!1)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(O,{isOpened:j,onClose:q,onUpdateUser:function(e){g.setUserInfo(e).then((function(e){A(e),m(!1)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(f,{isOpened:N,onClose:q,onAddPlace:function(e,t){g.addCard(e,t).then((function(e){w([e].concat(Object(r.a)(z))),k(!1)})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(b,{card:T||{},isOpened:T&&"popup_is-opened",onCardClick:I,onClose:q})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.dfb7a273.chunk.js.map