Clicksign=function(n){var e,i,t=window.location.protocol+"//"+window.location.host,o={},r=function(t){(o[t]||[]).forEach(function(t){t()})},s=function(t){r(t.data)};return{endpoint:"https://app.clicksign.com",origin:t,mount:function(t){return path="/sign/"+n,params="?embedded=true&origin="+this.origin,src=this.endpoint+path+params,i=document.getElementById(t),(e=document.createElement("iframe")).setAttribute("src",src),e.setAttribute("style","width: 100%; height: 100%;"),window.addEventListener("message",s),i.appendChild(e)},unmount:function(){return e&&(i.removeChild(e),e=i=null,window.removeEventListener("message",r)),!0},on:function(t,n){return o[t]||(o[t]=[]),o[t].push(n)},trigger:r}};