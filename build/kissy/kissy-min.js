/*
Copyright 2010, KISSY UI Library v1.0dev
MIT Licensed
build: 417 Jan 17 22:31
*/
if(typeof KISSY==="undefined"||!KISSY){function KISSY(m){var h=this;if(!(h instanceof KISSY))return new KISSY(m);h._init();h._config(m);h._setup();return h}}
(function(m,h,p){var q=Array.prototype.slice,i=function(a,c,b,e){if(!c||!a)return a;if(b===p)b=true;var f,d,g;if(e&&(g=e.length))for(f=0;f<g;f++){d=e[f];if(d in c)if(b||!(d in a))a[d]=c[d]}else for(d in c)if(b||!(d in a))a[d]=c[d];return a};i(h.prototype,{add:function(a,c,b,e){h.Env.mods[a]={name:a,fn:c,version:b,details:e||{}};return this},_init:function(){var a=this;a.version="1.0dev";a.Env={mods:{},_used:{},_attached:{}};a.Config={debug:true}},_config:function(a){i(this.Config,a)},_setup:function(){this.use("kissy-core")},
use:function(){function a(j){if(!f[j]){var o=e[j],l;if(o){f[j]=true;l=o.details.submodules}n.push(j);if(l){if(typeof l==="string")l=[l];j=0;for(o=l.length;j<o;j++)a(l[j])}}}var c=this,b=q.call(arguments,0),e=h.Env.mods,f=c.Env._used,d=b.length,g=b[d-1],k,n=[];if(typeof g==="function")b.pop();else g=null;if(b[0]==="*"){b=[];for(k in e)b.push(k);g&&b.push(g);return c.use.apply(c,b)}for(k=0;k<d;k++)a(b[k]);c._attach(n);g&&g(c);return c},_attach:function(a){var c=h.Env.mods,b=this.Env._attached,e,f=a.length,
d,g;for(e=0;e<f;e++){d=a[e];g=c[d];if(!b[d]&&g){b[d]=true;g.fn&&g.fn(this)}}},mix:i,merge:function(){var a=arguments,c={},b,e=a.length;for(b=0;b<e;++b)i(c,a[b]);return c},extend:function(a,c,b,e){if(!c||!a)return a;var f=Object.prototype,d=c.prototype,g=function(k){function n(){}n.prototype=k;return new n}(d);a.prototype=g;g.constructor=a;a.superclass=d;if(c!==Object&&d.constructor===f.constructor)d.constructor=c;b&&i(g,b);e&&i(a,e);return a},augment:function(a,c,b,e){return i(a.prototype,c.prototype,
b,e)},each:function(a,c,b){var e=a&&a.length||0,f;for(f=0;f<e;f++)c.call(b||this,a[f],f,a);return this},ready:function(){},weave:function(a,c,b,e){var f=[b[e],a];c==="before"&&f.reverse();b[e]=function(){for(var d=0;d<2;d++)f[d].apply(this,arguments)};return this},cloneTo:function(a){function c(b){if(!(this instanceof c))return new c(b);c.superclass.constructor.call(this,b)}h.extend(c,h,null,h);return m[a]=c},namespace:function(){var a=arguments,c=a.length,b=this,e,f,d;if(typeof b==="object")b=b.constructor;
for(e=0;e<c;e++){d=(""+a[e]).split(".");for(f=m[d[0]]===b?1:0;f<d.length;f++){b[d[f]]=b[d[f]]||{};b=b[d[f]]}}return b},log:function(a,c,b){if(this.Config.debug){b&&(a=b+": "+a);if(m.console!==p&&console.log)console[c&&console[c]?c:"log"](a)}return this}});i(h,h.prototype);h._init()})(window,KISSY);
