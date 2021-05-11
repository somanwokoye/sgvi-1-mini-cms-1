(this["webpackJsonpuser-react-web-client"]=this["webpackJsonpuser-react-web-client"]||[]).push([[6],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"AppContext",(function(){return w}));var c=a(39),n=a(1),l=a.n(n),o=a(37),s=function(e,t){switch(t.type){case"FetchDataSuccess":return Object(o.a)(Object(o.a)({},e),{},{roles:t.payload.roles,rolesCount:t.payload.rolesCount,actionButtonState:t.payload.actionButtonState});case"FetchDataFailure":return Object(o.a)(Object(o.a)({},e),{},{alert:{show:!0,type:"danger",message:"Could not load remote data: ".concat(t.payload.error)},actionButtonState:t.payload.actionButtonState});case"HandleViewRole":return Object(o.a)(Object(o.a)({},e),{},{onViewRole:!0,onAddRole:!1,onEditRole:!1,role:t.payload.role});case"HandleCloseViewRole":return Object(o.a)(Object(o.a)({},e),{},{onViewRole:!1,role:null});case"HandleOnAddRole":return Object(o.a)(Object(o.a)({},e),{},{onAddRole:!0,onEditRole:!1,alert:Object(o.a)(Object(o.a)({},e.alert),{},{show:!1})});case"HandleCancelCreate":return Object(o.a)(Object(o.a)({},e),{},{onAddRole:!1});case"BeforeCreateRole":return Object(o.a)(Object(o.a)({},e),{},{alert:{show:!0,type:"info",message:"Creating role. Please wait!"},actionButtonState:t.payload.actionButtonState});case"CreateRoleSuccess":return Object(o.a)(Object(o.a)({},e),{},{roles:t.payload.roles,rolesCount:t.payload.roles.length,onAddRole:!1,alert:{show:!0,type:"success",message:"Tenant successfully created!"},actionButtonState:t.payload.actionButtonState});case"CreateRoleFailure":return Object(o.a)(Object(o.a)({},e),{},{alert:{show:!0,type:"danger",message:"Could not create role: ".concat(t.payload.error)},actionButtonState:t.payload.actionButtonState});case"BeforeDeleteRole":return Object(o.a)(Object(o.a)({},e),{},{alert:{show:!0,type:"info",message:"Deleting role. Please wait!"},actionButtonState:t.payload.actionButtonState});case"DeleteRoleSuccess":return Object(o.a)(Object(o.a)({},e),{},{onViewRole:!1,roles:t.payload.roles,rolesCount:t.payload.roles.length,alert:{show:!0,type:"success",message:"Role successfully deleted!"},actionButtonState:t.payload.actionButtonState});case"DeleteRoleFailure":return Object(o.a)(Object(o.a)({},e),{},{onViewRole:!1,alert:{show:!0,type:"danger",message:"Could not delete role: ".concat(t.payload.error)},actionButtonState:t.payload.actionButtonState});case"BeforeUpdateRole":return Object(o.a)(Object(o.a)({},e),{},{alert:{show:!0,type:"info",message:"Updating role. Please wait!"},actionButtonState:t.payload.actionButtonState});case"HandleCancelUpdate":return Object(o.a)(Object(o.a)({},e),{},{onEditRole:!1});case"HandleEditRole":var a=e.roles,c=a.findIndex((function(e){return e.id===t.payload.id})),n=a[c];return Object(o.a)(Object(o.a)({},e),{},{onEditRole:!0,role:n,onAddRole:!1,alert:Object(o.a)(Object(o.a)({},e.alert),{},{show:!1})});case"UpdateRoleSuccess":return Object(o.a)(Object(o.a)({},e),{},{onViewRole:!1,roles:t.payload.roles,role:t.payload.role,onEditRole:!1,alert:{show:!0,type:"success",message:"Role successfully updated!"},actionButtonState:t.payload.actionButtonState});case"UpdateRoleFailure":return Object(o.a)(Object(o.a)({},e),{},{onViewRole:!1,alert:{show:!0,type:"danger",message:"Could not update role: ".concat(t.payload.error)},actionButtonState:t.payload.actionButtonState});case"HandleCloseAlert":return Object(o.a)(Object(o.a)({},e),{},{alert:{show:!1,message:"",type:""}});case"AddUserToRoleSuccess":var l=e.roles,s=l.findIndex((function(e){return e.id===t.payload.role.id}));return l[s]=t.payload.role,Object(o.a)(Object(o.a)({},e),{},{roles:l,role:t.payload.role,alert:{show:!0,type:"success",message:"User successfully added to role!"},actionButtonState:t.payload.actionButtonState});default:return e}},r=a(35),i=a(33),d=a.n(i),u=a(34),j=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,c,n,l=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},e.prev=1,e.next=4,fetch("/v1/roles?findOptions=".concat(encodeURI(JSON.stringify(a))));case 4:if((c=e.sent).ok){e.next=7;break}throw new Error(c.statusText);case 7:return e.next=9,c.json();case 9:n=e.sent,t({type:"FetchDataSuccess",payload:{rolesCount:n[1],roles:n[0]}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t({type:"FetchDataFailure",payload:{error:e.t0}});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),b=a(45),h=function(){var e=Object(u.a)(d.a.mark((function e(t,a,c){var n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"BeforeUpdateRole",payload:{actionButtonState:"is-loading"}}),e.prev=1,e.next=4,fetch("/v1/roles",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error(n.statusText);case 7:return e.next=9,n.json();case 9:l=a.findIndex((function(e){return e.id===t.id})),a[l]=t,c({type:"UpdateRoleSuccess",payload:{role:t,roles:a,actionButtonState:r.b}}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),c({type:"UpdateRoleFailure",payload:{error:e.t0,actionButtonState:r.b}});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(d.a.mark((function e(t,a,c){var n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"BeforeDeleteRole",payload:{actionButtonState:"is-loading"}}),e.prev=1,e.next=4,fetch("/v1/roles/".concat(t),{method:"DELETE"});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error(n.statusText);case 7:l=a.findIndex((function(e){return e.id===t})),a.splice(l,1),c({type:"DeleteRoleSuccess",payload:{id:t,roles:a,actionButtonState:r.b}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({type:"DeleteRoleFailure",payload:{error:e.t0,actionButtonState:r.b}});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(d.a.mark((function e(t,a,c){var n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"BeforeCreateRole",payload:{actionButtonState:"is-loading"}}),e.prev=1,e.next=4,fetch("/v1/roles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error(n.statusText);case 7:return e.next=9,n.json();case 9:l=e.sent,a.push(l),c({type:"CreateRoleSuccess",payload:{roles:a,actionButtonState:r.b}}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),c({type:"CreateRoleFailure",payload:{error:e.t0,actionButtonState:r.b}});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a,c){return e.apply(this,arguments)}}(),m=a(0),x=function(e){var t=e.role,a=Object(n.useContext)(w);return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:t.description}),Object(m.jsx)("td",{children:t.landlord?"Yes":"No"}),Object(m.jsx)("td",{children:Object(m.jsxs)("div",{className:"buttons are-small",children:[Object(m.jsx)("button",{className:"button is-link",onClick:function(){a.dispatch({type:"HandleViewRole",payload:{role:t}})},children:"View Detail"}),Object(m.jsx)("button",{className:"button is-warning",onClick:function(){a.dispatch({type:"HandleEditRole",payload:{id:t.id}})},children:"Edit"}),Object(m.jsx)("button",{className:"button is-danger",onClick:function(){window.confirm("This action cannot be reversed! Are you sure you want to delete?")&&a.handleDeleteRole(t.id,a.currentRoles,a.dispatch)},children:"Delete"})]})})]})},v=function(){return Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Landlord?"}),Object(m.jsx)("th",{children:"Action"})]})})},f=function(e){var t;return t=e.roles.map((function(e){return Object(m.jsx)(x,{role:e},e.id)})),Object(m.jsxs)("table",{className:"table is-striped is-narrow is-hoverable",children:[Object(m.jsx)("caption",{children:Object(m.jsx)("h3",{children:"Available roles"})}),Object(m.jsx)(v,{}),Object(m.jsx)("tbody",{children:t})]})},y=function(e){var t=Object(n.useState)(Object(o.a)({},{role:{name:"",description:"",landlord:!0}})),a=Object(c.a)(t,2),l=a[0],s=a[1],r=function(e){var t=l.role,a=e.target;t[a.name]=a.value,s(Object(o.a)(Object(o.a)({},l),{},{role:t}))};return Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.handleCreateRole(l.role,e.currentRoles,e.dispatch)},children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsx)("h2",{children:"Add Role"})}),Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Name"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input",type:"text",placeholder:"Name input",name:"name",value:l.role.name,onChange:r,required:!0})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Description"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input",type:"text",placeholder:"Description input",name:"description",value:l.role.description,onChange:r,required:!0})})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("div",{className:"control",children:Object(m.jsxs)("span",{children:[Object(m.jsx)("input",{type:"checkbox",name:"landlord",value:"",checked:l.role.landlord,onChange:function(){var e=!l.role.landlord;s(Object(o.a)(Object(o.a)({},l),{},{role:Object(o.a)(Object(o.a)({},l.role),{},{landlord:e})}))}}),"\xa0Landlord role?"]})})})]})})}),Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsxs)("div",{className:"field is-grouped",children:[Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{className:"button is-link",children:"Submit"})}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{className:"button is-link is-light",onClick:function(){e.dispatch({type:"HandleCancelCreate"})},children:"Cancel"})})]})})]})})},N=function(e){var t={role:{id:e.role.id,name:e.role.name,description:e.role.description,landlord:e.role.landlord}},a=Object(n.useState)(Object(o.a)({},t)),l=Object(c.a)(a,2),s=l[0],r=l[1],i=function(e){var t=s.role,a=e.target;t[a.name]=a.value,r(Object(o.a)(Object(o.a)({},s),{},{role:t}))};return Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.handleUpdateRole(s.role,e.currentRoles,e.dispatch)},children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsx)("h2",{children:"Add Role"})}),Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Name"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input",type:"text",placeholder:"Name input",name:"name",value:s.role.name,onChange:i,required:!0})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Description"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input",type:"text",placeholder:"Description input",name:"description",value:s.role.description,onChange:i,required:!0})})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("div",{className:"control",children:Object(m.jsxs)("span",{children:[Object(m.jsx)("input",{type:"checkbox",name:"landlord",value:"",checked:s.role.landlord,onChange:function(){var e=!s.role.landlord;r(Object(o.a)(Object(o.a)({},s),{},{role:Object(o.a)(Object(o.a)({},s.role),{},{landlord:e})}))}}),"\xa0Landlord role?"]})})})]})})}),Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsxs)("div",{className:"field is-grouped",children:[Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{className:"button is-link",children:"Submit"})}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{className:"button is-link is-light",onClick:function(){e.dispatch({type:"HandleCancelUpdate"})},children:"Cancel"})})]})})]})})},R=function(e){var t=e.role,a=Object(n.useContext)(w);return Object(m.jsxs)("div",{className:"modal modal-full-screen modal-fx-fadeInScale is-active",children:[Object(m.jsx)("div",{className:"modal-background"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("header",{className:"modal-card-head",children:[Object(m.jsx)("p",{className:"modal-card-title",children:"Details of ".concat(t.uniqueName)}),Object(m.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){a.dispatch({type:"HandleCloseViewRole"})}})]}),Object(m.jsx)("section",{className:"modal-card-body",children:Object(m.jsx)("div",{className:"columns",children:Object(m.jsxs)("div",{className:"column is-two-thirds",children:[Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsx)("div",{className:"column is-two-fifths",children:"Name:"}),Object(m.jsx)("div",{className:"column",children:t.name})]}),Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsx)("div",{className:"column is-two-fifths",children:"Description:"}),Object(m.jsx)("div",{className:"column",children:t.description})]}),Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsx)("div",{className:"column is-two-fifths",children:"Landlord role?:"}),Object(m.jsx)("div",{className:"column",children:t.landlord?"Yes":"No"})]})]})})}),Object(m.jsx)("footer",{className:"modal-card-foot",children:Object(m.jsxs)("div",{className:"buttons are-small",children:[Object(m.jsx)("button",{className:"button is-warning",onClick:function(){a.dispatch({type:"HandleEditRole",payload:{id:t.id}})},children:"Edit"}),Object(m.jsx)("button",{className:"button is-danger",onClick:function(){window.confirm("This action cannot be reversed! Are you sure you want to delete?")&&a.handleDeleteRole(t.id,a.dispatch)},children:"Delete"})]})})]})]})},w=l.a.createContext(null);t.default=function(e){var t={roles:[],rolesCount:0,role:null,onAddRole:!1,onViewRole:!1,onEditRole:!1,alert:{show:!1,message:"",type:""},actionButtonState:r.b},a=Object(n.useReducer)(s,t),l=Object(c.a)(a,2),o=l[0],i=l[1],d={relations:["users"]};Object(n.useEffect)((function(){j(i,d)}),[]);var u=Object(m.jsx)(b.a,{type:o.alert.type,message:o.alert.message,onClickHandler:function(){i({type:"HandleCloseAlert"})}});return o.onEditRole&&null!==o.role?Object(m.jsx)("div",{className:"container ",children:Object(m.jsxs)("div",{className:"content is-medium",children:[Object(m.jsx)("p",{children:Object(m.jsx)(N,{role:o.role,handleUpdateRole:h,currentRoles:o.roles,dispatch:i})}),Object(m.jsx)("p",{children:o.alert.show&&u}),Object(m.jsx)("p",{children:Object(m.jsx)(w.Provider,{value:{dispatch:i,handleDeleteRole:p,currentRoles:o.roles},children:Object(m.jsx)(f,{roles:o.roles})})})]})}):o.onAddRole?Object(m.jsx)("div",{className:"container ",children:Object(m.jsxs)("div",{className:"content is-medium",children:[Object(m.jsx)("p",{children:Object(m.jsx)(y,{handleCreateRole:O,currentRoles:o.roles,dispatch:i})}),Object(m.jsx)("p",{children:o.alert.show&&u}),Object(m.jsx)("p",{children:Object(m.jsx)(w.Provider,{value:{dispatch:i,handleDeleteRole:p,currentRoles:o.roles},children:Object(m.jsx)(f,{roles:o.roles})})})]})}):o.onViewRole&&null!=o.role?Object(m.jsx)("div",{className:"container ",children:Object(m.jsx)("div",{className:"content is-medium",children:Object(m.jsx)("p",{children:Object(m.jsx)(w.Provider,{value:{dispatch:i,handleDeleteRole:p,currentRoles:o.roles},children:Object(m.jsx)(R,{role:o.role})})})})}):Object(m.jsx)("div",{className:"container ",children:Object(m.jsxs)("div",{className:"content is-medium",children:[Object(m.jsx)("p",{children:Object(m.jsx)("button",{className:"button is-outline",onClick:function(){i({type:"HandleOnAddRole"})},children:"+ Add Role"})}),Object(m.jsx)("p",{children:o.alert.show&&u}),Object(m.jsx)("p",{children:Object(m.jsx)(w.Provider,{value:{dispatch:i,handleDeleteRole:p,currentRoles:o.roles},children:Object(m.jsx)(f,{roles:o.roles})})})]})})}},35:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var c,n,l="is-info",o="/v1";!function(e){e.A="admin",e.M="marketing",e.C="content-manager"}(c||(c={})),function(e){e.M="manager",e.T="tech-support"}(n||(n={}))},45:function(e,t,a){"use strict";a(1);var c=a(47),n=a(0);t.a=function(e){var t=e.message,a=e.type,l=e.onClickHandler;return Object(n.jsxs)(c.Notification,{color:a,onClick:l,children:[t,Object(n.jsx)(c.Button,{remove:!0})]})}}}]);
//# sourceMappingURL=6.8bbafad4.chunk.js.map