(this["webpackJsonpuser-react-web-client"]=this["webpackJsonpuser-react-web-client"]||[]).push([[7],{56:function(e,t,s){"use strict";s.r(t);var n=s(31),r=s.n(n),a=s(34),c=s(32),u=s(35),i=s(0),o=s(1),l=s(42),h=s.n(l),b=s(39),j=function e(){Object(b.a)(this,e)};j.fetchSuggestions=function(){var e=Object(c.a)(r.a.mark((function e(t){var s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v1/users/suggest?search-string=".concat(t));case 2:if((s=e.sent).ok){e.next=5;break}throw new Error(s.statusText);case 5:return e.next=7,s.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j.getUser=function(){var e=Object(c.a)(r.a.mark((function e(t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v1/users/".concat(t));case 2:if((s=e.sent).ok){e.next=5;break}throw new Error(s.statusText);case 5:return e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j.searchUsers=function(){var e=Object(c.a)(r.a.mark((function e(t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/v1/users/search?search-string=".concat(t));case 2:if((s=e.sent).ok){e.next=5;break}throw new Error(s.statusText);case 5:return e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var d=function(e){var t=e.searchResult,s=e.handleViewSearchResult;return Object(i.jsxs)("tr",{onClick:function(){s(t)},className:"column is-full",children:[Object(i.jsxs)("td",{children:["The information here is about user number ",t.id,". You may or may not present this in a tabular form. First name of user is ",t.firstName,", surname is ",t.lastName," and the user is a ",t.landlord?"landlord":"tenant",". Click on any row to retrieve user details."]}),Object(i.jsx)("td",{children:t.firstName}),Object(i.jsx)("td",{children:t.lastName}),Object(i.jsx)("td",{children:t.landlord?"Landlord":"Tenant"})]})},f=function(e){var t,s=e.searchResults,n=e.handleViewSearchResult;return t=s.map((function(e){return Object(i.jsx)(d,{searchResult:e,handleViewSearchResult:n},e.id)})),Object(i.jsxs)("table",{className:"table is-hoverable content",children:[Object(i.jsx)("h3",{children:"Users found:"}),Object(i.jsx)("tbody",{children:t.length>0?t:"None"})]})},v=s(3);t.default=function(){var e=Object(o.useState)({suggestions:[],value:"",showUser:!1,user:null,searchResults:null,showSearchResults:!1}),t=Object(u.a)(e,2),s=t[0],n=t[1],l=Object(v.g)(),b=l.path,d=(l.url,Object(v.f)()),g=function(){var e=Object(c.a)(r.a.mark((function e(t){var c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.value,e.prev=1,e.next=4,j.fetchSuggestions(c);case 4:u=e.sent,n(Object(a.a)(Object(a.a)({},s),{},{suggestions:u,value:c})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(a.a)(Object(a.a)({},s),{},{suggestions:[],value:""})),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t,c){var u,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.suggestion,u=c.suggestionValue,c.suggestionIndex,c.sectionIndex,c.method,e.prev=1,e.next=4,j.getUser(u);case 4:i=e.sent,n(Object(a.a)(Object(a.a)({},s),{},{showUser:!0,user:i})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,s){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.searchUsers(s.value);case 4:c=e.sent,n(Object(a.a)(Object(a.a)({},s),{},{searchResults:c,showSearchResults:!0,value:""})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),x={placeholder:"Start typing user full name for search",value:s.value,name:"autosuggest",onChange:function(e,t){var r=t.newValue;t.method;n(Object(a.a)(Object(a.a)({},s),{},{value:r}))}};return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("div",{className:"columns is-mobile",children:Object(i.jsx)("form",{onSubmit:O,className:"column is-one-third",children:Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{className:"label",children:"Search:"}),Object(i.jsx)(h.a,{suggestions:s.suggestions,onSuggestionsFetchRequested:g,onSuggestionsClearRequested:function(){n(Object(a.a)(Object(a.a)({},s),{},{suggestions:[],value:""}))},getSuggestionValue:function(e){return"".concat(e.id)},renderSuggestion:function(e){return Object(i.jsx)("div",{children:"".concat(e.firstName," ").concat(e.lastName)})},inputProps:x,onSuggestionSelected:p,highlightFirstSuggestion:!1})]})})}),Object(i.jsx)("div",{className:"columns is-mobile",children:Object(i.jsxs)("div",{className:"column is-full",children:[s.user&&s.showUser&&d.push("".concat(b,"/view-selected"),JSON.stringify(Object(a.a)(Object(a.a)({},s.user),{},{returnUrl:b}))),s.searchResults&&s.showSearchResults&&Object(i.jsx)(f,{searchResults:s.searchResults,handleViewSearchResult:function(e){n(Object(a.a)(Object(a.a)({},s),{},{showUser:!0,user:e}))}})]})})]})})})}}}]);
//# sourceMappingURL=7.33b091ed.chunk.js.map