/* Auto generated, hash = 90d22umjselkp5q5gm7q9i58o */
(function(e){e.LIRenderAll=function(){function q(a){encodeURIComponent(a.firstChild.getAttribute("href"));var m=a.getAttribute("data-size"),r=a.getAttribute("data-locale"),e=a.getAttribute("data-type"),f=a.getAttribute("data-theme"),c=a.getAttribute("data-canonical"),b=a.getAttribute("data-vanity"),h=a.getAttribute("data-encodedid"),k=a.getAttribute("data-version"),l=a.getAttribute("data-ei"),g=a.getAttribute("data-iscreate"),d=Math.round(1E6*Math.random()),m=[l?"https://badges.linkedin-ei.com/profile":
"https://badges.linkedin.com/profile","?locale\x3d",r,"\x26badgetype\x3d",e,"\x26badgetheme\x3d",f,"\x26uid\x3d",d,"\x26maxsize\x3d",m,"\x26version\x3d",k,"\x26trk\x3d","profile-badge"];g&&m.push("\x26fromCreate\x3dtrue");g=m.join("");g=b?g+("\x26vanityname\x3d"+b):g+("\x26canonicalname\x3d"+c+"\x26id\x3d"+h);a.setAttribute("data-uid",d);a=g;c=document.createElement("script");c.src=a;n.push(c);document.body.appendChild(c)}function s(){if(l>=d&&0<d||l>=c.length)delete e.LIBadgeCallback,n.map(function(a){document.body.removeChild(a)})}
var l=0,d=0,n=[],c=document.getElementsByClassName("LI-profile-badge"),b,h,k,p;b=0;for(h=c.length;b<h;b++)k=c[b],p=k.getAttribute("data-rendered"),p||(d++,k.setAttribute("data-rendered",!0),q(k));e.LIBadgeCallback=function(a,e){l++;var b,d,f;b=0;for(h=c.length;b<h;b++)d=c[b],f=parseInt(d.getAttribute("data-uid"),10),f===e&&(f=document.createElement("div"),f.innerHTML=a,d.appendChild(f));s()}};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e.LIRenderAll,!1):e.LIRenderAll()})(window);