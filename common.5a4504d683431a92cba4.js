(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{ptL4:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r("1liP"),o=r("ngZU"),i=r("CcnG"),s=r("ZYCi"),u=r("GZLQ"),c=r("t/Na"),a=function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{c(n.next(t))}catch(e){i(e)}}function u(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,u)}c((n=n.apply(t,e||[])).next())})},h=function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},l=function(){function t(t,e,r,n,o){this.router=t,this.authService=e,this.http=r,this.notificationService=n,this.wordTranslateService=o}return t.prototype.cancelResetPassword=function(t){return this.http.post("auth/cancel-reset-password/"+t,{}).toPromise()},t.prototype.changePassword=function(t){return a(this,void 0,void 0,function(){var e,r,n=this;return h(this,function(o){switch(o.label){case 0:return e=function(t){return n.authService.setToken(JSON.parse(JSON.stringify(t))),t},[4,this.http.post("auth/change-password",t).toPromise()];case 1:return r=o.sent(),e(r),[2,r]}})})},t.prototype.forgotPassword=function(t){return this.http.get("auth/forgot-password/"+t).toPromise()},t.prototype.getToken=function(){return this.authService.getToken()},t.prototype.isAuthenticated=function(){return this.authService.isAuthenticated()},t.prototype.isEmailAddressAvailable=function(t){return this.http.get("auth/check-email-address/"+t,{observe:"response"})},t.prototype.logout=function(t,e){return a(this,void 0,void 0,function(){var r,n=this;return h(this,function(o){switch(o.label){case 0:r=function(){n.authService.logout().subscribe({error:function(t){return n.notificationService.error("Error!","Error Occurred")},complete:function(){t?n.router.navigate([t],e):n.router.navigate(["/login"])}})},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.http.get("auth/logout/").toPromise()];case 2:return o.sent(),r(),[3,4];case 3:return o.sent(),this.notificationService.error("Failed!","Error Occurred"),[3,4];case 4:return[2]}})})},t.prototype.resetPassword=function(t){return this.http.post("auth/reset-password",t).toPromise()},t.prototype.unlink=function(t,e){return a(this,void 0,void 0,function(){var r,n,o=this;return h(this,function(i){switch(i.label){case 0:r=function(t){return o.authService.setToken(JSON.parse(JSON.stringify(t))),t},i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.http.post("auth/unlink/"+t,e).toPromise()];case 2:return n=i.sent(),r(n),[3,4];case 3:return i.sent(),this.notificationService.error("Failed!","Error Occurred"),[3,4];case 4:return[2]}})})},t.ngInjectableDef=i.defineInjectable({factory:function(){return new t(i.inject(s.Router),i.inject(u.a),i.inject(c.c),i.inject(n.a),i.inject(o.a))},token:t,providedIn:"root"}),t}()}}]);