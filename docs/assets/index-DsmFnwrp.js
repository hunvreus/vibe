(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qs="174",_i={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bl=0,ia=1,Tl=2,Pc=1,wl=2,cn=3,An=0,It=1,vt=2,bn=0,Hn=1,Gr=2,sa=3,Vr=4,Al=5,kn=100,Rl=101,Cl=102,Pl=103,Ll=104,Dl=200,Il=201,Ul=202,Nl=203,Hr=204,Wr=205,Fl=206,Ol=207,Bl=208,zl=209,kl=210,Gl=211,Vl=212,Hl=213,Wl=214,Xr=0,qr=1,Yr=2,Mi=3,jr=4,Zr=5,Kr=6,Jr=7,Lc=0,Xl=1,ql=2,Tn=0,Yl=1,jl=2,Zl=3,Kl=4,Jl=5,$l=6,Ql=7,Dc=300,Si=301,Ei=302,$r=303,Qr=304,Ys=306,Fs=1e3,Sn=1001,Os=1002,Ht=1003,Ic=1004,Fi=1005,Kt=1006,Rs=1007,En=1008,dn=1009,Uc=1010,Nc=1011,Xi=1012,Lo=1013,Xn=1014,hn=1015,Ji=1016,Do=1017,Io=1018,bi=1020,Fc=35902,Oc=1021,Bc=1022,Vt=1023,zc=1024,kc=1025,xi=1026,Ti=1027,Gc=1028,Uo=1029,Vc=1030,No=1031,Fo=1033,Cs=33776,Ps=33777,Ls=33778,Ds=33779,eo=35840,to=35841,no=35842,io=35843,so=36196,ro=37492,oo=37496,ao=37808,co=37809,lo=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,xo=37818,vo=37819,yo=37820,Mo=37821,Is=36492,So=36494,Eo=36495,Hc=36283,bo=36284,To=36285,wo=36286,eh=2300,th=2301,nh=3200,ih=3201,Oo=0,sh=1,ln="",Lt="srgb",wi="srgb-linear",Bs="linear",nt="srgb",$n=7680,ra=519,rh=512,oh=513,ah=514,Wc=515,ch=516,lh=517,hh=518,uh=519,oa=35044,aa="300 es",un=2e3,zs=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ca=1234567;const ki=Math.PI/180,qi=180/Math.PI;function Zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Bo(s,e){return(s%e+e)%e}function fh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function dh(s,e,t){return s!==e?(t-s)/(e-s):0}function Gi(s,e,t){return(1-t)*s+t*e}function ph(s,e,t,n){return Gi(s,e,1-Math.exp(-t*n))}function mh(s,e=1){return e-Math.abs(Bo(s,e*2)-e)}function gh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _h(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vh(s,e){return s+Math.random()*(e-s)}function yh(s){return s*(.5-Math.random())}function Mh(s){s!==void 0&&(ca=s);let e=ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sh(s){return s*ki}function Eh(s){return s*qi}function bh(s){return(s&s-1)===0&&s!==0}function Th(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ah(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*p,a*l);break;case"YZY":s.set(c*p,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*p,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:ki,RAD2DEG:qi,generateUUID:Zn,clamp:Xe,euclideanModulo:Bo,mapLinear:fh,inverseLerp:dh,lerp:Gi,damp:ph,pingpong:mh,smoothstep:gh,smootherstep:_h,randInt:xh,randFloat:vh,randFloatSpread:yh,seededRandom:Mh,degToRad:Sh,radToDeg:Eh,isPowerOfTwo:bh,ceilPowerOfTwo:Th,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Ah,normalize:At,denormalize:fi};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,r,o,a,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],v=i[4],x=i[7],D=i[2],L=i[5],C=i[8];return r[0]=o*_+a*M+c*D,r[3]=o*m+a*v+c*L,r[6]=o*f+a*x+c*C,r[1]=l*_+h*M+u*D,r[4]=l*m+h*v+u*L,r[7]=l*f+h*x+u*C,r[2]=p*_+d*M+g*D,r[5]=p*m+d*v+g*L,r[8]=p*f+d*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,d=l*r-o*c,g=t*u+n*p+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=p*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Oe;function Xc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rh(){const s=Yi("canvas");return s.style.display="block",s}const la={};function Bn(s){s in la||(la[s]=!0,console.warn(s))}function Ch(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ph(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ha=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ua=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dh(){const s={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(i.r=fn(i.r),i.g=fn(i.g),i.b=fn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ln?Bs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wi]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:ha,fromXYZ:ua,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ha,fromXYZ:ua,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}const Je=Dh();function fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qn;class Ih{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qn===void 0&&(Qn=Yi("canvas")),Qn.width=e.width,Qn.height=e.height;const n=Qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qn}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uh=0;class js{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sr(i[o].image)):r.push(sr(i[o]))}else r=sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ih.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;class bt extends jn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Sn,i=Sn,r=Kt,o=En,a=Vt,c=dn,l=bt.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Zn(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Dc;bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(d+1)/2,D=(f+1)/2,L=(h+p)/4,C=(u+_)/4,N=(g+m)/4;return v>x&&v>D?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=L/n,r=C/n):x>D?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=L/i,r=N/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=C/r,i=N/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new js(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qc extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==p||l!==d||h!==g){let m=1-a;const f=c*p+l*d+h*g+u*_,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),L=Math.atan2(D,f*M);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D}const x=a*M;if(c=c*m+p*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*p,e[t+1]=c*g+h*p+l*u-a*d,e[t+2]=l*g+h*d+a*p-c*u,e[t+3]=h*g-a*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),p=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new G,fa=new Rn;class wn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(r,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),ns.subVectors(this.max,Li),ei.subVectors(e.a,Li),ti.subVectors(e.b,Li),ni.subVectors(e.c,Li),pn.subVectors(ti,ei),mn.subVectors(ni,ti),Dn.subVectors(ei,ni);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Dn.z,Dn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Dn.z,0,-Dn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Dn.y,Dn.x,0];return!or(t,ei,ti,ni,ns)||(t=[1,0,0,0,1,0,0,0,1],!or(t,ei,ti,ni,ns))?!1:(is.crossVectors(pn,mn),t=[is.x,is.y,is.z],or(t,ei,ti,ni,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new G,new G,new G,new G,new G,new G,new G,new G],qt=new G,ts=new wn,ei=new G,ti=new G,ni=new G,pn=new G,mn=new G,Dn=new G,Li=new G,ns=new G,is=new G,In=new G;function or(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=e.dot(In),l=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bh=new wn,Di=new G,ar=new G;class Zs{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(ar)),this.expandByPoint(Di.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new G,cr=new G,ss=new G,gn=new G,lr=new G,rs=new G,hr=new G;class zo{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cr.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(cr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=gn.dot(this.direction),c=-gn.dot(ss),l=gn.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cr).addScaledVector(ss,p),d}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,r){lr.subVectors(t,e),rs.subVectors(n,e),hr.crossVectors(lr,rs);let o=this.direction.dot(hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const c=a*this.direction.dot(rs.crossVectors(gn,rs));if(c<0)return null;const l=a*this.direction.dot(lr.cross(gn));if(l<0||c+l>o)return null;const h=-a*gn.dot(hr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,r,o,a,c,l,h,u,p,d,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,p,d,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,p,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ii.setFromMatrixColumn(e,0).length(),r=1/ii.setFromMatrixColumn(e,1).length(),o=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,d=c*u,g=l*h,_=l*u;t[0]=p+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,d=c*u,g=l*h,_=l*u;t[0]=p-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-p*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=p-_*u}else if(e.order==="XZY"){const p=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zh,e,kh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),_n.crossVectors(n,Nt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),_n.crossVectors(n,Nt)),_n.normalize(),os.crossVectors(Nt,_n),i[0]=_n.x,i[4]=os.x,i[8]=Nt.x,i[1]=_n.y,i[5]=os.y,i[9]=Nt.y,i[2]=_n.z,i[6]=os.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],v=n[7],x=n[11],D=n[15],L=i[0],C=i[4],N=i[8],T=i[12],y=i[1],O=i[5],I=i[9],B=i[13],Y=i[2],j=i[6],te=i[10],$=i[14],k=i[3],pe=i[7],me=i[11],ve=i[15];return r[0]=o*L+a*y+c*Y+l*k,r[4]=o*C+a*O+c*j+l*pe,r[8]=o*N+a*I+c*te+l*me,r[12]=o*T+a*B+c*$+l*ve,r[1]=h*L+u*y+p*Y+d*k,r[5]=h*C+u*O+p*j+d*pe,r[9]=h*N+u*I+p*te+d*me,r[13]=h*T+u*B+p*$+d*ve,r[2]=g*L+_*y+m*Y+f*k,r[6]=g*C+_*O+m*j+f*pe,r[10]=g*N+_*I+m*te+f*me,r[14]=g*T+_*B+m*$+f*ve,r[3]=M*L+v*y+x*Y+D*k,r[7]=M*C+v*O+x*j+D*pe,r[11]=M*N+v*I+x*te+D*me,r[15]=M*T+v*B+x*$+D*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*p+n*l*p+i*a*d-n*c*d)+_*(+t*c*d-t*l*p+r*o*p-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*p+i*o*u-n*o*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=u*m*l-_*p*l+_*c*d-a*m*d-u*c*f+a*p*f,v=g*p*l-h*m*l-g*c*d+o*m*d+h*c*f-o*p*f,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*f+o*u*f,D=g*u*c-h*_*c-g*a*p+o*_*p+h*a*m-o*u*m,L=t*M+n*v+i*x+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=M*C,e[1]=(_*p*r-u*m*r-_*i*d+n*m*d+u*i*f-n*p*f)*C,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*C,e[3]=(u*c*r-a*p*r-u*i*l+n*p*l+a*i*d-n*c*d)*C,e[4]=v*C,e[5]=(h*m*r-g*p*r+g*i*d-t*m*d-h*i*f+t*p*f)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*f-t*c*f)*C,e[7]=(o*p*r-h*c*r+h*i*l-t*p*l-o*i*d+t*c*d)*C,e[8]=x*C,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*f-t*u*f)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=D*C,e[13]=(h*_*i-g*u*i+g*n*p-t*_*p-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*p+t*a*p)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,d=r*h,g=r*u,_=o*h,m=o*u,f=a*u,M=c*l,v=c*h,x=c*u,D=n.x,L=n.y,C=n.z;return i[0]=(1-(_+f))*D,i[1]=(d+x)*D,i[2]=(g-v)*D,i[3]=0,i[4]=(d-x)*L,i[5]=(1-(p+f))*L,i[6]=(m+M)*L,i[7]=0,i[8]=(g+v)*C,i[9]=(m-M)*C,i[10]=(1-(p+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),a=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const l=1/r,h=1/o,u=1/a;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=u,Yt.elements[9]*=u,Yt.elements[10]*=u,t.setFromRotationMatrix(Yt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=un){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let d,g;if(a===un)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zs)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=un){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),p=(t+e)*l,d=(n+i)*h;let g,_;if(a===un)g=(o+r)*u,_=-2*u;else if(a===zs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new G,Yt=new st,zh=new G(0,0,0),kh=new G(1,1,1),_n=new G,os=new G,Nt=new G,da=new st,pa=new Rn;class Jt{constructor(e=0,t=0,n=0,i=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gh=0;const ma=new G,si=new Rn,sn=new st,as=new G,Ii=new G,Vh=new G,Hh=new Rn,ga=new G(1,0,0),_a=new G(0,1,0),xa=new G(0,0,1),va={type:"added"},Wh={type:"removed"},ri={type:"childadded",child:null},ur={type:"childremoved",child:null};class yt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new G,t=new Jt,n=new Rn,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new Oe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(ga,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ga,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ii,as,this.up):sn.lookAt(as,Ii,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(sn),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(va),ri.child=e,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh),ur.child=e,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(va),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new G(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new G,rn=new G,fr=new G,on=new G,oi=new G,ai=new G,ya=new G,dr=new G,pr=new G,mr=new G,gr=new lt,_r=new lt,xr=new lt;class Zt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),rn.subVectors(n,t),fr.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(rn),c=jt.dot(fr),l=rn.dot(rn),h=rn.dot(fr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return gr.setScalar(0),_r.setScalar(0),xr.setScalar(0),gr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),xr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(gr,r.x),o.addScaledVector(_r,r.y),o.addScaledVector(xr,r.z),o}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),rn.subVectors(e,t),jt.cross(rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),jt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;oi.subVectors(i,n),ai.subVectors(r,n),dr.subVectors(e,n);const c=oi.dot(dr),l=ai.dot(dr);if(c<=0&&l<=0)return t.copy(n);pr.subVectors(e,i);const h=oi.dot(pr),u=ai.dot(pr);if(h>=0&&u<=h)return t.copy(i);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(oi,o);mr.subVectors(e,r);const d=oi.dot(mr),g=ai.dot(mr);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ai,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ya.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(ya,a);const f=1/(m+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function vr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Bo(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vr(o,r,e+1/3),this.g=vr(o,r,e),this.b=vr(o,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Je.fromWorkingColorSpace(Et.copy(this),e),Math.round(Xe(Et.r*255,0,255))*65536+Math.round(Xe(Et.g*255,0,255))*256+Math.round(Xe(Et.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,r=Et.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Lt){Je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(cs);const n=Gi(xn.h,cs.h,t),i=Gi(xn.s,cs.s,t),r=Gi(xn.l,cs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ve;Ve.NAMES=jc;let Xh=0;class Kn extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Hn,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Wr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gn extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new G,ls=new he;let qh=0;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oa,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Zc extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kc extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yh=0;const kt=new st,yr=new yt,ci=new G,Ft=new wn,Ui=new wn,_t=new G;class Tt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Kc:Zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ft.min,Ui.min),Ft.expandByPoint(_t),_t.addVectors(Ft.max,Ui.max),Ft.expandByPoint(_t)):(Ft.expandByPoint(Ui.min),Ft.expandByPoint(Ui.max))}Ft.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_t.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(e,l),_t.add(ci)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new G,c[N]=new G;const l=new G,h=new G,u=new G,p=new he,d=new he,g=new he,_=new G,m=new G;function f(N,T,y){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),p.fromBufferAttribute(r,N),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(p),g.sub(p);const O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(O),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(O),a[N].add(_),a[T].add(_),a[y].add(_),c[N].add(m),c[T].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,T=M.length;N<T;++N){const y=M[N],O=y.start,I=y.count;for(let B=O,Y=O+I;B<Y;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new G,x=new G,D=new G,L=new G;function C(N){D.fromBufferAttribute(i,N),L.copy(D);const T=a[N];v.copy(T),v.sub(D.multiplyScalar(D.dot(T))).normalize(),x.crossVectors(L,T);const O=x.dot(c[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,O)}for(let N=0,T=M.length;N<T;++N){const y=M[N],O=y.start,I=y.count;for(let B=O,Y=O+I;B<Y;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const i=new G,r=new G,o=new G,a=new G,c=new G,l=new G,h=new G,u=new G;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new dt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],d=e(p,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new st,Un=new zo,hs=new Zs,Sa=new G,us=new G,fs=new G,ds=new G,Mr=new G,ps=new G,Ea=new G,ms=new G;class Dt extends yt{constructor(e=new Tt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Mr.fromBufferAttribute(u,e),o?ps.addScaledVector(Mr,h):ps.addScaledVector(Mr.sub(t),h))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(hs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(hs,Sa)===null||Un.origin.distanceToSquared(Sa)>(e.far-e.near)**2))&&(Ma.copy(r).invert(),Un.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,D=v;x<D;x+=3){const L=a.getX(x),C=a.getX(x+1),N=a.getX(x+2);i=gs(this,f,e,n,l,h,u,L,C,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=gs(this,o,e,n,l,h,u,M,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,D=v;x<D;x+=3){const L=x,C=x+1,N=x+2;i=gs(this,f,e,n,l,h,u,L,C,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const M=m,v=m+1,x=m+2;i=gs(this,o,e,n,l,h,u,M,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jh(s,e,t,n,i,r,o,a){let c;if(e.side===It?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===An,a),c===null)return null;ms.copy(a),ms.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ms);return l<t.near||l>t.far?null:{distance:l,point:ms.clone(),object:s}}function gs(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,us),s.getVertexPosition(c,fs),s.getVertexPosition(l,ds);const h=jh(s,e,t,n,us,fs,ds,Ea);if(h){const u=new G;Zt.getBarycoord(Ea,us,fs,ds,u),i&&(h.uv=Zt.getInterpolatedAttribute(i,a,c,l,u,new he)),r&&(h.uv1=Zt.getInterpolatedAttribute(r,a,c,l,u,new he)),o&&(h.normal=Zt.getInterpolatedAttribute(o,a,c,l,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new G,materialIndex:0};Zt.getNormal(us,fs,ds,p.normal),h.face=p,h.barycoord=u}return h}class $i extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,f,M,v,x,D,L,C,N,T){const y=x/C,O=D/N,I=x/2,B=D/2,Y=L/2,j=C+1,te=N+1;let $=0,k=0;const pe=new G;for(let me=0;me<te;me++){const ve=me*O-B;for(let Pe=0;Pe<j;Pe++){const ke=Pe*y-I;pe[_]=ke*M,pe[m]=ve*v,pe[f]=Y,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[f]=L>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Pe/C),u.push(1-me/N),$+=1}}for(let me=0;me<N;me++)for(let ve=0;ve<C;ve++){const Pe=p+ve+j*me,ke=p+ve+j*(me+1),F=p+(ve+1)+j*(me+1),P=p+(ve+1)+j*me;c.push(Pe,ke,P),c.push(ke,F,P),k+=6}a.addGroup(d,k,T),d+=k,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=Ai(s[t]);for(const i in n)e[i]=n[i]}return e}function Zh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Kh={clone:Ai,merge:Rt};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $c extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new G,ba=new he,Ta=new he;class Gt extends $c{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,ba,Ta),t.subVectors(Ta,ba)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ki*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,hi=1;class Qh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(li,hi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(li,hi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(li,hi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(li,hi,e,t);a.layers=this.layers,this.add(a);const c=new Gt(li,hi,e,t);c.layers=this.layers,this.add(c);const l=new Gt(li,hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qc extends bt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eu extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $i(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:bn});r.uniforms.tEquirect.value=t;const o=new Dt(i,r),a=t.minFilter;return t.minFilter===En&&(t.minFilter=Kt),new Qh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class pi extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tu={type:"move"};class Sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gs extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Er=new G,nu=new G,iu=new Oe;class Mn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Er.subVectors(n,t).cross(nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iu.getNormalMatrix(e),i=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Zs,_s=new G;class ko{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],p=i[7],d=i[8],g=i[9],_=i[10],m=i[11],f=i[12],M=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,p-l,m-d,x-f).normalize(),n[1].setComponents(c+r,p+l,m+d,x+f).normalize(),n[2].setComponents(c+o,p+h,m+g,x+M).normalize(),n[3].setComponents(c-o,p-h,m-g,x-M).normalize(),n[4].setComponents(c-a,p-u,m-_,x-v).normalize(),t===un)n[5].setComponents(c+a,p+u,m+_,x+v).normalize();else if(t===zs)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_s.x=i.normal.x>0?e.max.x:e.min.x,_s.y=i.normal.y>0?e.max.y:e.min.y,_s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ks extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vs=new G,Hs=new G,wa=new st,Ni=new zo,xs=new Zs,br=new G,Aa=new G;class su extends yt{constructor(e=new Tt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vs.fromBufferAttribute(t,i-1),Hs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vs.distanceTo(Hs);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,e.ray.intersectsSphere(xs)===!1)return;wa.copy(i).invert(),Ni.copy(e.ray).applyMatrix4(wa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const f=h.getX(_),M=h.getX(_+1),v=vs(this,e,Ni,c,f,M,_);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),f=vs(this,e,Ni,c,_,m,g-1);f&&t.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const f=vs(this,e,Ni,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=vs(this,e,Ni,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vs(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Vs.fromBufferAttribute(a,i),Hs.fromBufferAttribute(a,r),t.distanceSqToSegment(Vs,Hs,br,Aa)>n)return;br.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(br);if(!(l<e.near||l>e.far))return{distance:l,point:Aa.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Ra=new G,Ca=new G;class Go extends su{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ra.fromBufferAttribute(t,i),Ca.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ra.distanceTo(Ca);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tr extends bt{constructor(e,t,n,i,r,o,a,c,l,h,u,p){super(null,o,a,c,l,h,i,r,u,p),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class el extends bt{constructor(e,t,n,i,r,o,a,c,l,h=xi){if(h!==xi&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=Xn),n===void 0&&h===Ti&&(n=bi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],p=n[i+1]-h,d=(o-h)/p;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new he:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new G,i=[],r=[],o=[],a=new G,c=new st;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Xe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vo extends Qt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new he){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ru extends Vo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,d*=h,i(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ys=new G,wr=new Ho,Ar=new Ho,Rr=new Ho;class ou extends Qt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new G){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ys.subVectors(i[0],i[1]).add(i[0]),l=ys);const u=i[a%r],p=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ys.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ys),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wr.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,m),Ar.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,m),Rr.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(wr.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Ar.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Rr.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(wr.calc(c),Ar.calc(c),Rr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new G().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pa(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function au(s,e){const t=1-s;return t*t*e}function cu(s,e){return 2*(1-s)*s*e}function lu(s,e){return s*s*e}function Vi(s,e,t,n){return au(s,e)+cu(s,t)+lu(s,n)}function hu(s,e){const t=1-s;return t*t*t*e}function uu(s,e){const t=1-s;return 3*t*t*s*e}function fu(s,e){return 3*(1-s)*s*s*e}function du(s,e){return s*s*s*e}function Hi(s,e,t,n,i){return hu(s,e)+uu(s,t)+fu(s,n)+du(s,i)}class tl extends Qt{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hi(e,i.x,r.x,o.x,a.x),Hi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pu extends Qt{constructor(e=new G,t=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new G){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hi(e,i.x,r.x,o.x,a.x),Hi(e,i.y,r.y,o.y,a.y),Hi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nl extends Qt{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends Qt{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class il extends Qt{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Vi(e,i.x,r.x,o.x),Vi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends Qt{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Vi(e,i.x,r.x,o.x),Vi(e,i.y,r.y,o.y),Vi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sl extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Pa(a,c.x,l.x,h.x,u.x),Pa(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var Ao=Object.freeze({__proto__:null,ArcCurve:ru,CatmullRomCurve3:ou,CubicBezierCurve:tl,CubicBezierCurve3:pu,EllipseCurve:Vo,LineCurve:nl,LineCurve3:mu,QuadraticBezierCurve:il,QuadraticBezierCurve3:gu,SplineCurve:sl});class _u extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ao[i.type]().fromJSON(i))}return this}}class yi extends _u{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nl(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new il(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new tl(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Vo(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wi extends yi{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new yi().fromJSON(i))}return this}}class xu{static triangulate(e,t,n=2){const i=t&&t.length,r=i?t[0]*n:e.length;let o=rl(e,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,u,p,d,g;if(i&&(o=Eu(e,t,o,n)),e.length>80*n){c=h=e[0],l=u=e[1];for(let _=n;_<r;_+=n)p=e[_],d=e[_+1],p<c&&(c=p),d<l&&(l=d),p>h&&(h=p),d>u&&(u=d);g=Math.max(h-c,u-l),g=g!==0?32767/g:0}return ji(o,a,n,c,l,g,0),a}}function rl(s,e,t,n,i){let r,o;if(i===Uu(s,e,t,n)>0)for(r=e;r<t;r+=n)o=La(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=La(r,s[r],s[r+1],o);return o&&Js(o,o.next)&&(Ki(o),o=o.next),o}function Yn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Js(t,t.next)||ot(t.prev,t,t.next)===0)){if(Ki(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ji(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Ru(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?yu(s,n,i,r):vu(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ki(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Mu(Yn(s),e,t),ji(s,e,t,n,i,r,2)):o===2&&Su(s,e,t,n,i,r):ji(Yn(s),e,t,n,i,r,1);break}}}function vu(s){const e=s.prev,t=s,n=s.next;if(ot(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,p=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&mi(i,a,r,c,o,l,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yu(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ot(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,p=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<p?h:p:u<p?u:p,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>p?h:p:u>p?u:p,f=Ro(d,g,e,t,n),M=Ro(_,m,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=f&&x&&x.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&mi(a,h,c,u,l,p,v.x,v.y)&&ot(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&mi(a,h,c,u,l,p,x.x,x.y)&&ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&mi(a,h,c,u,l,p,v.x,v.y)&&ot(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&mi(a,h,c,u,l,p,x.x,x.y)&&ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Mu(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Js(i,r)&&ol(i,n,n.next,r)&&Zi(i,r)&&Zi(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ki(n),Ki(n.next),n=s=r),n=n.next}while(n!==s);return Yn(n)}function Su(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lu(o,a)){let c=al(o,a);o=Yn(o,o.next),c=Yn(c,c.next),ji(o,e,t,n,i,r,0),ji(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Eu(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=rl(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Pu(l));for(i.sort(bu),r=0;r<i.length;r++)t=Tu(i[r],t);return t}function bu(s,e){return s.x-e.x}function Tu(s,e){const t=wu(s,e);if(!t)return e;const n=al(t,s);return Yn(n,n.next),Yn(t,t.next)}function wu(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,i=t.x<t.next.x?t:t.next,p===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&mi(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Zi(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Au(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Au(s,e){return ot(s.prev,s,e.prev)<0&&ot(e.next,s,s.next)<0}function Ru(s,e,t,n){let i=s;do i.z===0&&(i.z=Ro(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cu(i)}function Cu(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ro(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Pu(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function mi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Lu(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Du(s,e)&&(Zi(s,e)&&Zi(e,s)&&Iu(s,e)&&(ot(s.prev,s,e.prev)||ot(s,e.prev,e))||Js(s,e)&&ot(s.prev,s,s.next)>0&&ot(e.prev,e,e.next)>0)}function ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Js(s,e){return s.x===e.x&&s.y===e.y}function ol(s,e,t,n){const i=Ss(ot(s,e,t)),r=Ss(ot(s,e,n)),o=Ss(ot(t,n,s)),a=Ss(ot(t,n,e));return!!(i!==r&&o!==a||i===0&&Ms(s,t,e)||r===0&&Ms(s,n,e)||o===0&&Ms(t,s,n)||a===0&&Ms(t,e,n))}function Ms(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ss(s){return s>0?1:s<0?-1:0}function Du(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ol(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zi(s,e){return ot(s.prev,s,s.next)<0?ot(s,e,s.next)>=0&&ot(s,s.prev,e)>=0:ot(s,e,s.prev)<0||ot(s,s.next,e)<0}function Iu(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function al(s,e){const t=new Co(s.i,s.x,s.y),n=new Co(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function La(s,e,t,n){const i=new Co(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ki(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Co(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Uu(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Wn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Wn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Da(e),Ia(n,e);let o=e.length;t.forEach(Da);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Ia(n,t[c]);const a=xu.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Da(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ia(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class $s extends Tt{constructor(e=new Wi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ht(i,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Nu;let v,x=!1,D,L,C,N;f&&(v=f.getSpacedPoints(h),x=!0,p=!1,D=f.computeFrenetFrames(h,!1),L=new G,C=new G,N=new G),p||(m=0,d=0,g=0,_=0);const T=a.extractPoints(l);let y=T.shape;const O=T.holes;if(!Wn.isClockWise(y)){y=y.reverse();for(let Q=0,J=O.length;Q<J;Q++){const S=O[Q];Wn.isClockWise(S)&&(O[Q]=S.reverse())}}const B=Wn.triangulateShape(y,O),Y=y;for(let Q=0,J=O.length;Q<J;Q++){const S=O[Q];y=y.concat(S)}function j(Q,J,S){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(J,S)}const te=y.length,$=B.length;function k(Q,J,S){let se,ne,ce;const z=Q.x-J.x,U=Q.y-J.y,ae=S.x-Q.x,R=S.y-Q.y,E=z*z+U*U,Z=z*R-U*ae;if(Math.abs(Z)>Number.EPSILON){const oe=Math.sqrt(E),fe=Math.sqrt(ae*ae+R*R),le=J.x-U/oe,Ae=J.y+z/oe,ye=S.x-R/fe,be=S.y+ae/fe,Ge=((ye-le)*R-(be-Ae)*ae)/(z*R-U*ae);se=le+z*Ge-Q.x,ne=Ae+U*Ge-Q.y;const ge=se*se+ne*ne;if(ge<=2)return new he(se,ne);ce=Math.sqrt(ge/2)}else{let oe=!1;z>Number.EPSILON?ae>Number.EPSILON&&(oe=!0):z<-Number.EPSILON?ae<-Number.EPSILON&&(oe=!0):Math.sign(U)===Math.sign(R)&&(oe=!0),oe?(se=-U,ne=z,ce=Math.sqrt(E)):(se=z,ne=U,ce=Math.sqrt(E/2))}return new he(se/ce,ne/ce)}const pe=[];for(let Q=0,J=Y.length,S=J-1,se=Q+1;Q<J;Q++,S++,se++)S===J&&(S=0),se===J&&(se=0),pe[Q]=k(Y[Q],Y[S],Y[se]);const me=[];let ve,Pe=pe.concat();for(let Q=0,J=O.length;Q<J;Q++){const S=O[Q];ve=[];for(let se=0,ne=S.length,ce=ne-1,z=se+1;se<ne;se++,ce++,z++)ce===ne&&(ce=0),z===ne&&(z=0),ve[se]=k(S[se],S[ce],S[z]);me.push(ve),Pe=Pe.concat(ve)}for(let Q=0;Q<m;Q++){const J=Q/m,S=d*Math.cos(J*Math.PI/2),se=g*Math.sin(J*Math.PI/2)+_;for(let ne=0,ce=Y.length;ne<ce;ne++){const z=j(Y[ne],pe[ne],se);b(z.x,z.y,-S)}for(let ne=0,ce=O.length;ne<ce;ne++){const z=O[ne];ve=me[ne];for(let U=0,ae=z.length;U<ae;U++){const R=j(z[U],ve[U],se);b(R.x,R.y,-S)}}}const ke=g+_;for(let Q=0;Q<te;Q++){const J=p?j(y[Q],Pe[Q],ke):y[Q];x?(C.copy(D.normals[0]).multiplyScalar(J.x),L.copy(D.binormals[0]).multiplyScalar(J.y),N.copy(v[0]).add(C).add(L),b(N.x,N.y,N.z)):b(J.x,J.y,0)}for(let Q=1;Q<=h;Q++)for(let J=0;J<te;J++){const S=p?j(y[J],Pe[J],ke):y[J];x?(C.copy(D.normals[Q]).multiplyScalar(S.x),L.copy(D.binormals[Q]).multiplyScalar(S.y),N.copy(v[Q]).add(C).add(L),b(N.x,N.y,N.z)):b(S.x,S.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const J=Q/m,S=d*Math.cos(J*Math.PI/2),se=g*Math.sin(J*Math.PI/2)+_;for(let ne=0,ce=Y.length;ne<ce;ne++){const z=j(Y[ne],pe[ne],se);b(z.x,z.y,u+S)}for(let ne=0,ce=O.length;ne<ce;ne++){const z=O[ne];ve=me[ne];for(let U=0,ae=z.length;U<ae;U++){const R=j(z[U],ve[U],se);x?b(R.x,R.y+v[h-1].y,v[h-1].x+S):b(R.x,R.y,u+S)}}}F(),P();function F(){const Q=i.length/3;if(p){let J=0,S=te*J;for(let se=0;se<$;se++){const ne=B[se];W(ne[2]+S,ne[1]+S,ne[0]+S)}J=h+m*2,S=te*J;for(let se=0;se<$;se++){const ne=B[se];W(ne[0]+S,ne[1]+S,ne[2]+S)}}else{for(let J=0;J<$;J++){const S=B[J];W(S[2],S[1],S[0])}for(let J=0;J<$;J++){const S=B[J];W(S[0]+te*h,S[1]+te*h,S[2]+te*h)}}n.addGroup(Q,i.length/3-Q,0)}function P(){const Q=i.length/3;let J=0;w(Y,J),J+=Y.length;for(let S=0,se=O.length;S<se;S++){const ne=O[S];w(ne,J),J+=ne.length}n.addGroup(Q,i.length/3-Q,1)}function w(Q,J){let S=Q.length;for(;--S>=0;){const se=S;let ne=S-1;ne<0&&(ne=Q.length-1);for(let ce=0,z=h+m*2;ce<z;ce++){const U=te*ce,ae=te*(ce+1),R=J+se+U,E=J+ne+U,Z=J+ne+ae,oe=J+se+ae;ue(R,E,Z,oe)}}}function b(Q,J,S){c.push(Q),c.push(J),c.push(S)}function W(Q,J,S){V(Q),V(J),V(S);const se=i.length/3,ne=M.generateTopUV(n,i,se-3,se-2,se-1);de(ne[0]),de(ne[1]),de(ne[2])}function ue(Q,J,S,se){V(Q),V(J),V(se),V(J),V(S),V(se);const ne=i.length/3,ce=M.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);de(ce[0]),de(ce[1]),de(ce[3]),de(ce[1]),de(ce[2]),de(ce[3])}function V(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function de(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fu(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ao[i.type]().fromJSON(i)),new $s(n,e.options)}}const Nu={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new he(r,o),new he(a,c),new he(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new he(o,1-c),new he(l,1-u),new he(p,1-g),new he(_,1-f)]:[new he(a,1-c),new he(h,1-u),new he(d,1-g),new he(m,1-f)]}};function Fu(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qs extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,p=t/c,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*p-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const v=M+l*f,x=M+l*(f+1),D=M+1+l*(f+1),L=M+1+l*f;d.push(v,x,L),d.push(x,D,L)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wo extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new G,p=new G,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],v=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let D=0;D<=t;D++){const L=D/t;u.x=-e*Math.cos(i+L*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+L*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(L+x,1-v),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const v=h[f][M+1],x=h[f][M],D=h[f+1][M],L=h[f+1][M+1];(f!==0||o>0)&&d.push(v,x,L),(f!==n-1||c<Math.PI)&&d.push(x,D,L)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ou extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bu extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zu extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ua extends Kn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ws={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ku{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Gu=new ku;class Ri{constructor(e){this.manager=e!==void 0?e:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";const an={};class Vu extends Error{constructor(e,t){super(e),this.response=t}}class cl extends Ri{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ws.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:n,onError:i});return}an[e]=[],an[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=an[e],u=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=p?parseInt(p):0,g=d!==0;let _=0;const m=new ReadableStream({start(f){M();function M(){u.read().then(({done:v,value:x})=>{if(v)f.close();else{_+=x.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let L=0,C=h.length;L<C;L++){const N=h[L];N.onProgress&&N.onProgress(D)}f.enqueue(x),M()}},v=>{f.error(v)})}}});return new Response(m)}else throw new Vu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),p=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(p);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ws.add(e,l);const h=an[e];delete an[e];for(let u=0,p=h.length;u<p;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=an[e];if(h===void 0)throw this.manager.itemError(e),l;delete an[e];for(let u=0,p=h.length;u<p;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hu extends Ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ws.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Yi("img");function c(){h(),Ws.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Wu extends Ri{constructor(e){super(e)}load(e,t,n,i){const r=new bt,o=new Hu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ll extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cr=new st,Na=new G,Fa=new G;class Xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Na.setFromMatrixPosition(e.matrixWorld),t.position.copy(Na),Fa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fa),t.updateMatrixWorld(),Cr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hl extends $c{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qu extends Xu{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oa extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new qu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ba extends ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yu extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Xo="\\[\\]\\.:\\/",ju=new RegExp("["+Xo+"]","g"),qo="[^"+Xo+"]",Zu="[^"+Xo.replace("\\.","")+"]",Ku=/((?:WC+[\/:])*)/.source.replace("WC",qo),Ju=/(WCOD+)?/.source.replace("WCOD",Zu),$u=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),Qu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),ef=new RegExp("^"+Ku+Ju+$u+Qu+"$"),tf=["material","materials","bones","map"];class nf{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ju,"")}static parseTrackName(e){const t=ef.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=nf;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class za{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ka=new he;class sf{constructor(e=new he(1/0,1/0),t=new he(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ka.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ka).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class rf extends Go{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let p=0,d=0,g=-a;p<=t;p++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=p===r?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const h=new Tt;h.setAttribute("position",new ht(c,3)),h.setAttribute("color",new ht(l,3));const u=new Ks({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class of extends Go{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Tt;r.setIndex(new dt(n,1)),r.setAttribute("position",new ht(i,3)),super(r,new Ks({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class af extends Go{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Tt;i.setAttribute("position",new ht(t,3)),i.setAttribute("color",new ht(n,3));const r=new Ks({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Ve,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class yn{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new yi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const M=[];for(let v=0,x=f.length;v<x;v++){const D=f[v],L=new Wi;L.curves=D.curves,M.push(L)}return M}function n(f,M){const v=M.length;let x=!1;for(let D=v-1,L=0;L<v;D=L++){let C=M[D],N=M[L],T=N.x-C.x,y=N.y-C.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(C=M[L],T=-T,N=M[D],y=-y),f.y<C.y||f.y>N.y)continue;if(f.y===C.y){if(f.x===C.x)return!0}else{const O=y*(f.x-C.x)-T*(f.y-C.y);if(O===0)return!0;if(O<0)continue;x=!x}}else{if(f.y!==C.y)continue;if(N.x<=f.x&&f.x<=C.x||C.x<=f.x&&f.x<=N.x)return!0}}return x}const i=Wn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Wi,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],p=[];let d=[],g=0,_;p[g]=void 0,d[g]=[];for(let f=0,M=r.length;f<M;f++)a=r[f],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&p[g]&&g++,p[g]={s:new Wi,p:_},p[g].s.curves=a.curves,h&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!p[0])return t(r);if(p.length>1){let f=!1,M=0;for(let v=0,x=p.length;v<x;v++)u[v]=[];for(let v=0,x=p.length;v<x;v++){const D=d[v];for(let L=0;L<D.length;L++){const C=D[L];let N=!0;for(let T=0;T<p.length;T++)n(C.p,p[T].p)&&(v!==T&&M++,N?(N=!1,u[T].push(C)):f=!0);N&&u[v].push(C)}}M>0&&f===!1&&(d=u)}let m;for(let f=0,M=p.length;f<M;f++){c=p[f].s,l.push(c),m=d[f];for(let v=0,x=m.length;v<x;v++)c.holes.push(m[v].h)}return l}}class cf extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ga(s,e,t,n){const i=lf(n);switch(t){case Oc:return s*e;case zc:return s*e;case kc:return s*e*2;case Gc:return s*e/i.components*i.byteLength;case Uo:return s*e/i.components*i.byteLength;case Vc:return s*e*2/i.components*i.byteLength;case No:return s*e*2/i.components*i.byteLength;case Bc:return s*e*3/i.components*i.byteLength;case Vt:return s*e*4/i.components*i.byteLength;case Fo:return s*e*4/i.components*i.byteLength;case Cs:case Ps:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Ds:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(s,16)*Math.max(e,8)/4;case eo:case no:return Math.max(s,8)*Math.max(e,8)/2;case so:case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Is:case So:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hc:case bo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case To:case wo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(s){switch(s){case dn:case Uc:return{byteLength:1,components:1};case Xi:case Nc:case Ji:return{byteLength:2,components:1};case Do:case Io:return{byteLength:2,components:4};case Xn:case Lo:case hn:return{byteLength:4,components:1};case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qs);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ul(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function hf(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ld=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:uf,alphahash_pars_fragment:ff,alphamap_fragment:df,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:vf,batching_vertex:yf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:Ef,iridescence_fragment:bf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:If,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:zf,emissivemap_pars_fragment:kf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Hf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:id,envmap_vertex:Yf,fog_vertex:jf,fog_pars_vertex:Zf,fog_fragment:Kf,fog_pars_fragment:Jf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Qf,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:od,lights_phong_pars_fragment:ad,lights_physical_fragment:cd,lights_physical_pars_fragment:ld,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:fd,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:xd,map_particle_fragment:vd,map_particle_pars_fragment:yd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphinstance_vertex:Ed,morphcolor_vertex:bd,morphnormal_vertex:Td,morphtarget_pars_vertex:wd,morphtarget_vertex:Ad,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Od,opaque_fragment:Bd,packing:zd,premultiplied_alpha_fragment:kd,project_vertex:Gd,dithering_fragment:Vd,dithering_pars_fragment:Hd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:jd,shadowmask_pars_fragment:Zd,skinbase_vertex:Kd,skinning_pars_vertex:Jd,skinning_vertex:$d,skinnormal_vertex:Qd,specularmap_fragment:ep,specularmap_pars_fragment:tp,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:op,uv_pars_vertex:ap,uv_vertex:cp,worldpos_vertex:lp,background_vert:hp,background_frag:up,backgroundCube_vert:fp,backgroundCube_frag:dp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:xp,distanceRGBA_frag:vp,equirect_vert:yp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:Ep,meshbasic_vert:bp,meshbasic_frag:Tp,meshlambert_vert:wp,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Pp,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Up,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:zp,shadow_vert:kp,shadow_frag:Gp,sprite_vert:Vp,sprite_frag:Hp},Se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},$t={basic:{uniforms:Rt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Rt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Rt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Rt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Rt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Rt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Rt([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Rt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Rt([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Rt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Rt([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Rt([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Rt([Se.lights,Se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};$t.physical={uniforms:Rt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Es={r:0,b:0,g:0},Fn=new Jt,Wp=new st;function Xp(s,e,t,n,i,r,o){const a=new Ve(0);let c=r===!0?0:1,l,h,u=null,p=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const D=g(v);D===null?f(a,c):D&&D.isColor&&(f(D,1),x=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,x){const D=g(x);D&&(D.isCubeTexture||D.mapping===Ys)?(h===void 0&&(h=new Dt(new $i(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ai($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fn.copy(x.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(Fn)),h.material.toneMapped=Je.getTransfer(D.colorSpace)!==nt,(u!==D||p!==D.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=D,p=D.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Dt(new Qs(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ai($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Je.getTransfer(D.colorSpace)!==nt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||p!==D.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=D,p=D.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,x){v.getRGB(Es,Jc(s)),n.buffers.color.setClear(Es.r,Es.g,Es.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:_,addToRenderList:m,dispose:M}}function qp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,o=!1;function a(y,O,I,B,Y){let j=!1;const te=u(B,I,O);r!==te&&(r=te,l(r.object)),j=d(y,B,I,Y),j&&g(y,B,I,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(y,O,I,B),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,O,I){const B=I.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let j=Y[O.id];j===void 0&&(j={},Y[O.id]=j);let te=j[B];return te===void 0&&(te=p(c()),j[B]=te),te}function p(y){const O=[],I=[],B=[];for(let Y=0;Y<t;Y++)O[Y]=0,I[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:I,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,O,I,B){const Y=r.attributes,j=O.attributes;let te=0;const $=I.getAttributes();for(const k in $)if($[k].location>=0){const me=Y[k];let ve=j[k];if(ve===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;te++}return r.attributesNum!==te||r.index!==B}function g(y,O,I,B){const Y={},j=O.attributes;let te=0;const $=I.getAttributes();for(const k in $)if($[k].location>=0){let me=j[k];me===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),Y[k]=ve,te++}r.attributes=Y,r.attributesNum=te,r.index=B}function _(){const y=r.newAttributes;for(let O=0,I=y.length;O<I;O++)y[O]=0}function m(y){f(y,0)}function f(y,O){const I=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;I[y]=1,B[y]===0&&(s.enableVertexAttribArray(y),B[y]=1),Y[y]!==O&&(s.vertexAttribDivisor(y,O),Y[y]=O)}function M(){const y=r.newAttributes,O=r.enabledAttributes;for(let I=0,B=O.length;I<B;I++)O[I]!==y[I]&&(s.disableVertexAttribArray(I),O[I]=0)}function v(y,O,I,B,Y,j,te){te===!0?s.vertexAttribIPointer(y,O,I,Y,j):s.vertexAttribPointer(y,O,I,B,Y,j)}function x(y,O,I,B){_();const Y=B.attributes,j=I.getAttributes(),te=O.defaultAttributeValues;for(const $ in j){const k=j[$];if(k.location>=0){let pe=Y[$];if(pe===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),pe!==void 0){const me=pe.normalized,ve=pe.itemSize,Pe=e.get(pe);if(Pe===void 0)continue;const ke=Pe.buffer,F=Pe.type,P=Pe.bytesPerElement,w=F===s.INT||F===s.UNSIGNED_INT||pe.gpuType===Lo;if(pe.isInterleavedBufferAttribute){const b=pe.data,W=b.stride,ue=pe.offset;if(b.isInstancedInterleavedBuffer){for(let V=0;V<k.locationSize;V++)f(k.location+V,b.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let V=0;V<k.locationSize;V++)m(k.location+V);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let V=0;V<k.locationSize;V++)v(k.location+V,ve/k.locationSize,F,me,W*P,(ue+ve/k.locationSize*V)*P,w)}else{if(pe.isInstancedBufferAttribute){for(let b=0;b<k.locationSize;b++)f(k.location+b,pe.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let b=0;b<k.locationSize;b++)m(k.location+b);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let b=0;b<k.locationSize;b++)v(k.location+b,ve/k.locationSize,F,me,ve*P,ve/k.locationSize*b*P,w)}}else if(te!==void 0){const me=te[$];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(k.location,me);break;case 3:s.vertexAttrib3fv(k.location,me);break;case 4:s.vertexAttrib4fv(k.location,me);break;default:s.vertexAttrib1fv(k.location,me)}}}}M()}function D(){N();for(const y in n){const O=n[y];for(const I in O){const B=O[I];for(const Y in B)h(B[Y].object),delete B[Y];delete O[I]}delete n[y]}}function L(y){if(n[y.id]===void 0)return;const O=n[y.id];for(const I in O){const B=O[I];for(const Y in B)h(B[Y].object),delete B[Y];delete O[I]}delete n[y.id]}function C(y){for(const O in n){const I=n[O];if(I[y.id]===void 0)continue;const B=I[y.id];for(const Y in B)h(B[Y].object),delete B[Y];delete I[y.id]}}function N(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Yp(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,p){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jp(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Vt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==dn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hn&&!N)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:D,maxSamples:L}}function Zp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Mn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||i;return i=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,v=M*4;let x=f.clippingState||null;c.value=x,x=h(g,p,v,d);for(let D=0;D!==v;++D)x[D]=t[D];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=d+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Kp(s){let e=new WeakMap;function t(o,a){return a===$r?o.mapping=Si:a===Qr&&(o.mapping=Ei),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$r||a===Qr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new eu(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const gi=4,Va=[.125,.215,.35,.446,.526,.582],Vn=20,Pr=new hl,Ha=new Ve;let Lr=null,Dr=0,Ir=0,Ur=!1;const zn=(1+Math.sqrt(5))/2,ui=1/zn,Wa=[new G(-zn,ui,0),new G(zn,ui,0),new G(-ui,0,zn),new G(ui,0,zn),new G(0,zn,-ui),new G(0,zn,ui),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Jp=new G;class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Jp}=r;Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Dr,Ir),this._renderer.xr.enabled=Ur,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ji,format:Vt,colorSpace:wi,depthBuffer:!1},i=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Qp(r,e,t)}return i}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,n,i,r){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Ha),u.toneMapping=Tn,u.autoClear=!1;const g=new Gn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Dt(new $i,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Ha),m=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const x=this._cubeSize;bs(i,v*x,M>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(_,c),u.render(e,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Si||e.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wa[(i-r-1)%Wa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[i],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const f=[];let M=0;for(let C=0;C<Vn;++C){const N=C/_,T=Math.exp(-N*N/2);f.push(T),C===0?M+=T:C<m&&(M+=2*T)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const x=this._sizeLods[i],D=3*x*(i>v-gi?i-v+gi:0),L=4*(this._cubeSize-x);bs(t,D,L,3*x,2*x),c.setRenderTarget(t),c.render(u,Pr)}}function $p(s){const e=[],t=[],n=[];let i=s;const r=s-gi+1+Va.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-gi?c=Va[o-s+gi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let L=0;L<d;L++){const C=L%3*2/3-1,N=L>2?0:-1,T=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];M.set(T,_*g*L),v.set(p,m*g*L);const y=[L,L,L,L,L,L];x.set(y,f*g*L)}const D=new Tt;D.setAttribute("position",new dt(M,_)),D.setAttribute("uv",new dt(v,m)),D.setAttribute("faceIndex",new dt(x,f)),e.push(D),i>gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qa(s,e,t){const n=new qn(s,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Qp(s,e,t){const n=new Float32Array(Vn),i=new G(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ya(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ja(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function em(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$r||c===Qr,h=c===Si||c===Ei;if(l||h){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Xa(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Xa(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(s,e,t,n){const i={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const d in p)e.update(p[d],s.ARRAY_BUFFER)}function l(u){const p=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,x=M.length;v<x;v+=3){const D=M[v+0],L=M[v+1],C=M[v+2];p.push(D,L,L,C,C,D)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const D=v+0,L=v+1,C=v+2;p.push(D,L,L,C,C,D)}}else return;const m=new(Xc(p)?Kc:Zc)(p,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function im(s,e,t){let n;function i(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){s.drawElements(n,d,r,p*o),t.update(d,n,1)}function l(p,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,p*o,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function u(p,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=d[M]*_[M];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rm(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let y=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const C=new Float32Array(D*L*4*u),N=new qc(C,D,L,u);N.type=hn,N.needsUpdate=!0;const T=x*4;for(let O=0;O<u;O++){const I=f[O],B=M[O],Y=v[O],j=D*L*4*O;for(let te=0;te<I.count;te++){const $=te*T;g===!0&&(i.fromBufferAttribute(I,te),C[j+$+0]=i.x,C[j+$+1]=i.y,C[j+$+2]=i.z,C[j+$+3]=0),_===!0&&(i.fromBufferAttribute(B,te),C[j+$+4]=i.x,C[j+$+5]=i.y,C[j+$+6]=i.z,C[j+$+7]=0),m===!0&&(i.fromBufferAttribute(Y,te),C[j+$+8]=i.x,C[j+$+9]=i.y,C[j+$+10]=i.z,C[j+$+11]=Y.itemSize===4?i.w:1)}}p={count:u,texture:N,size:new he(D,L)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function om(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const fl=new bt,Za=new el(1,1),dl=new qc,pl=new Oh,ml=new Qc,Ka=[],Ja=[],$a=new Float32Array(16),Qa=new Float32Array(9),ec=new Float32Array(4);function Ci(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ka[i];if(r===void 0&&(r=new Float32Array(i),Ka[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function er(s,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function am(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function um(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ec.set(n),s.uniformMatrix2fv(this.addr,!1,ec),gt(t,n)}}function fm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Qa.set(n),s.uniformMatrix3fv(this.addr,!1,Qa),gt(t,n)}}function dm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;$a.set(n),s.uniformMatrix4fv(this.addr,!1,$a),gt(t,n)}}function pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function Sm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Za.compareFunction=Wc,r=Za):r=fl,t.setTexture2D(e||r,i)}function Em(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pl,i)}function bm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ml,i)}function Tm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dl,i)}function wm(s){switch(s){case 5126:return am;case 35664:return cm;case 35665:return lm;case 35666:return hm;case 35674:return um;case 35675:return fm;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Tm}}function Am(s,e){s.uniform1fv(this.addr,e)}function Rm(s,e){const t=Ci(e,this.size,2);s.uniform2fv(this.addr,t)}function Cm(s,e){const t=Ci(e,this.size,3);s.uniform3fv(this.addr,t)}function Pm(s,e){const t=Ci(e,this.size,4);s.uniform4fv(this.addr,t)}function Lm(s,e){const t=Ci(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Dm(s,e){const t=Ci(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Im(s,e){const t=Ci(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Um(s,e){s.uniform1iv(this.addr,e)}function Nm(s,e){s.uniform2iv(this.addr,e)}function Fm(s,e){s.uniform3iv(this.addr,e)}function Om(s,e){s.uniform4iv(this.addr,e)}function Bm(s,e){s.uniform1uiv(this.addr,e)}function zm(s,e){s.uniform2uiv(this.addr,e)}function km(s,e){s.uniform3uiv(this.addr,e)}function Gm(s,e){s.uniform4uiv(this.addr,e)}function Vm(s,e,t){const n=this.cache,i=e.length,r=er(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||fl,r[o])}function Hm(s,e,t){const n=this.cache,i=e.length,r=er(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pl,r[o])}function Wm(s,e,t){const n=this.cache,i=e.length,r=er(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ml,r[o])}function Xm(s,e,t){const n=this.cache,i=e.length,r=er(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dl,r[o])}function qm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}}class jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function tc(s,e){s.seq.push(e),s.map[e.id]=e}function Km(s,e,t){const n=s.name,i=n.length;for(Nr.lastIndex=0;;){const r=Nr.exec(n),o=Nr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){tc(t,l===void 0?new Ym(a,s,e):new jm(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Zm(a),tc(t,u)),t=u}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Km(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function nc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Jm=37297;let $m=0;function Qm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ic=new Oe;function eg(s){Je._getMatrix(ic,Je.workingColorSpace,s);const e=`mat3( ${ic.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case Bs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qm(s.getShaderSource(e),o)}else return i}function tg(s,e){const t=eg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ng(s,e){let t;switch(e){case Yl:t="Linear";break;case jl:t="Reinhard";break;case Zl:t="Cineon";break;case Kl:t="ACESFilmic";break;case $l:t="AgX";break;case Ql:t="Neutral";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new G;function ig(){Je.getLuminanceCoefficients(Ts);const s=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function rg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function og(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Oi(s){return s!==""}function rc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(s){return s.replace(ag,lg)}const cg=new Map;function lg(s,e){let t=We[e];if(t===void 0){const n=cg.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Po(t)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(s){return s.replace(hg,ug)}function ug(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function dg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function mg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Xl:e="ENVMAP_BLENDING_MIX";break;case ql:e="ENVMAP_BLENDING_ADD";break}return e}function gg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _g(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=fg(t),l=dg(t),h=pg(t),u=mg(t),p=gg(t),d=sg(t),g=rg(r),_=i.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),f.length>0&&(f+=`
`)):(m=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),f=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?We.tonemapping_pars_fragment:"",t.toneMapping!==Tn?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Po(o),o=rc(o,t),o=oc(o,t),a=Po(a),a=rc(a,t),a=oc(a,t),o=ac(o),a=ac(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=M+m+o,x=M+f+a,D=nc(i,i.VERTEX_SHADER,v),L=nc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,L),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(O){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(D).trim(),Y=i.getShaderInfoLog(L).trim();let j=!0,te=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,L);else{const $=sc(i,D,"vertex"),k=sc(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+I+`
`+$+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||Y==="")&&(te=!1);te&&(O.diagnostics={runnable:j,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(D),i.deleteShader(L),N=new Us(i,_),T=og(i,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Jm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=L,this}let xg=0;class vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yg(e),t.set(e,n)),n}}class yg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function Mg(s,e,t,n,i,r,o){const a=new Yc,c=new vg,l=new Set,h=[],u=i.logarithmicDepthBuffer,p=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,y,O,I,B){const Y=I.fog,j=B.geometry,te=T.isMeshStandardMaterial?I.environment:null,$=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),k=$&&$.mapping===Ys?$.image.height:null,pe=g[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=me!==void 0?me.length:0;let Pe=0;j.morphAttributes.position!==void 0&&(Pe=1),j.morphAttributes.normal!==void 0&&(Pe=2),j.morphAttributes.color!==void 0&&(Pe=3);let ke,F,P,w;if(pe){const et=$t[pe];ke=et.vertexShader,F=et.fragmentShader}else ke=T.vertexShader,F=T.fragmentShader,c.update(T),P=c.getVertexShaderID(T),w=c.getFragmentShaderID(T);const b=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),ue=B.isInstancedMesh===!0,V=B.isBatchedMesh===!0,de=!!T.map,Q=!!T.matcap,J=!!$,S=!!T.aoMap,se=!!T.lightMap,ne=!!T.bumpMap,ce=!!T.normalMap,z=!!T.displacementMap,U=!!T.emissiveMap,ae=!!T.metalnessMap,R=!!T.roughnessMap,E=T.anisotropy>0,Z=T.clearcoat>0,oe=T.dispersion>0,fe=T.iridescence>0,le=T.sheen>0,Ae=T.transmission>0,ye=E&&!!T.anisotropyMap,be=Z&&!!T.clearcoatMap,Ge=Z&&!!T.clearcoatNormalMap,ge=Z&&!!T.clearcoatRoughnessMap,we=fe&&!!T.iridescenceMap,Ue=fe&&!!T.iridescenceThicknessMap,Fe=le&&!!T.sheenColorMap,Re=le&&!!T.sheenRoughnessMap,qe=!!T.specularMap,De=!!T.specularColorMap,tt=!!T.specularIntensityMap,H=Ae&&!!T.transmissionMap,Ee=Ae&&!!T.thicknessMap,K=!!T.gradientMap,ee=!!T.alphaMap,_e=T.alphaTest>0,Me=!!T.alphaHash,He=!!T.extensions;let at=Tn;T.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=s.toneMapping);const Mt={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:ke,fragmentShader:F,defines:T.defines,customVertexShaderID:P,customFragmentShaderID:w,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:V,batchingColor:V&&B._colorsTexture!==null,instancing:ue,instancingColor:ue&&B.instanceColor!==null,instancingMorph:ue&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:b===null?s.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wi,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:Q,envMap:J,envMapMode:J&&$.mapping,envMapCubeUVHeight:k,aoMap:S,lightMap:se,bumpMap:ne,normalMap:ce,displacementMap:p&&z,emissiveMap:U,normalMapObjectSpace:ce&&T.normalMapType===sh,normalMapTangentSpace:ce&&T.normalMapType===Oo,metalnessMap:ae,roughnessMap:R,anisotropy:E,anisotropyMap:ye,clearcoat:Z,clearcoatMap:be,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ge,dispersion:oe,iridescence:fe,iridescenceMap:we,iridescenceThicknessMap:Ue,sheen:le,sheenColorMap:Fe,sheenRoughnessMap:Re,specularMap:qe,specularColorMap:De,specularIntensityMap:tt,transmission:Ae,transmissionMap:H,thicknessMap:Ee,gradientMap:K,opaque:T.transparent===!1&&T.blending===Hn&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:_e,alphaHash:Me,combine:T.combine,mapUv:de&&_(T.map.channel),aoMapUv:S&&_(T.aoMap.channel),lightMapUv:se&&_(T.lightMap.channel),bumpMapUv:ne&&_(T.bumpMap.channel),normalMapUv:ce&&_(T.normalMap.channel),displacementMapUv:z&&_(T.displacementMap.channel),emissiveMapUv:U&&_(T.emissiveMap.channel),metalnessMapUv:ae&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:ye&&_(T.anisotropyMap.channel),clearcoatMapUv:be&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(T.sheenRoughnessMap.channel),specularMapUv:qe&&_(T.specularMap.channel),specularColorMapUv:De&&_(T.specularColorMap.channel),specularIntensityMapUv:tt&&_(T.specularIntensityMap.channel),transmissionMapUv:H&&_(T.transmissionMap.channel),thicknessMapUv:Ee&&_(T.thicknessMap.channel),alphaMapUv:ee&&_(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ce||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(de||ee),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:W,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===nt,decodeVideoTextureEmissive:U&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===vt,flipSided:T.side===It,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function f(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)y.push(O),y.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(M(y,T),v(y,T),y.push(s.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function M(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=g[T.type];let O;if(y){const I=$t[y];O=Kh.clone(I.uniforms)}else O=T.uniforms;return O}function D(T,y){let O;for(let I=0,B=h.length;I<B;I++){const Y=h[I];if(Y.cacheKey===y){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new _g(s,y,T,r),h.push(O)),O}function L(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function C(T){c.remove(T)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:D,releaseProgram:L,releaseShaderCache:C,programs:h,dispose:N}}function Sg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,p,d,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function c(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,p){t.length>1&&t.sort(u||Eg),n.length>1&&n.sort(p||lc),i.length>1&&i.sort(p||lc)}function h(){for(let u=e,p=s.length;u<p;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function bg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new hc,s.set(n,[o])):i>=r.length?(o=new hc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ve};break;case"SpotLight":t={position:new G,direction:new G,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function wg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ag=0;function Rg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cg(s){const e=new Tg,t=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const i=new G,r=new st,o=new st;function a(l){let h=0,u=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,M=0,v=0,x=0,D=0,L=0,C=0;l.sort(Rg);for(let T=0,y=l.length;T<y;T++){const O=l[T],I=O.color,B=O.intensity,Y=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=I.r*B,u+=I.g*B,p+=I.b*B;else if(O.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(O.sh.coefficients[te],B);C++}else if(O.isDirectionalLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,k=t.get(O);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=O.shadow.matrix,M++}n.directional[d]=te,d++}else if(O.isSpotLight){const te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(I).multiplyScalar(B),te.distance=Y,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,n.spot[_]=te;const $=O.shadow;if(O.map&&(n.spotLightMap[D]=O.map,D++,$.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[_]=$.matrix,O.castShadow){const k=t.get(O);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=j,x++}_++}else if(O.isRectAreaLight){const te=e.get(O);te.color.copy(I).multiplyScalar(B),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=te,m++}else if(O.isPointLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){const $=O.shadow,k=t.get(O);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=O.shadow.matrix,v++}n.point[g]=te,g++}else if(O.isHemisphereLight){const te=e.get(O);te.skyColor.copy(O.color).multiplyScalar(B),te.groundColor.copy(O.groundColor).multiplyScalar(B),n.hemi[f]=te,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==M||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==D||N.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+D-L,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=M,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=D,N.numLightProbes=C,n.version=Ag++)}function c(l,h){let u=0,p=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const v=l[f];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function uc(s){const e=new Cg(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Pg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new uc(s),e.set(i,[a])):r>=o.length?(a=new uc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ig(s,e,t){let n=new ko;const i=new he,r=new he,o=new lt,a=new Bu({depthPacking:ih}),c=new zu,l={},h=t.maxTextureSize,u={[An]:It,[It]:An,[vt]:vt},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Lg,fragmentShader:Dg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let f=this.type;this.render=function(L,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=s.getRenderTarget(),y=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),I=s.state;I.setBlending(bn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=f!==cn&&this.type===cn,Y=f===cn&&this.type!==cn;for(let j=0,te=L.length;j<te;j++){const $=L[j],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const pe=k.getFrameExtents();if(i.multiply(pe),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/pe.x),i.x=r.x*pe.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/pe.y),i.y=r.y*pe.y,k.mapSize.y=r.y)),k.map===null||B===!0||Y===!0){const ve=this.type!==cn?{minFilter:Ht,magFilter:Ht}:{};k.map!==null&&k.map.dispose(),k.map=new qn(i.x,i.y,ve),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const me=k.getViewportCount();for(let ve=0;ve<me;ve++){const Pe=k.getViewport(ve);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),I.viewport(o),k.updateMatrices($,ve),n=k.getFrustum(),x(C,N,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===cn&&M(k,N),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(T,y,O)};function M(L,C){const N=e.update(_);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qn(i.x,i.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(C,null,N,p,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(C,null,N,d,_,null)}function v(L,C,N,T){let y=null;const O=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)y=O;else if(y=N.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=y.uuid,B=C.uuid;let Y=l[I];Y===void 0&&(Y={},l[I]=Y);let j=Y[B];j===void 0&&(j=y.clone(),Y[B]=j,C.addEventListener("dispose",D)),y=j}if(y.visible=C.visible,y.wireframe=C.wireframe,T===cn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=s.properties.get(y);I.light=N}return y}function x(L,C,N,T,y){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===cn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const B=e.update(L),Y=L.material;if(Array.isArray(Y)){const j=B.groups;for(let te=0,$=j.length;te<$;te++){const k=j[te],pe=Y[k.materialIndex];if(pe&&pe.visible){const me=v(L,pe,T,y);L.onBeforeShadow(s,L,C,N,B,me,k),s.renderBufferDirect(N,null,B,me,L,k),L.onAfterShadow(s,L,C,N,B,me,k)}}}else if(Y.visible){const j=v(L,Y,T,y);L.onBeforeShadow(s,L,C,N,B,j,null),s.renderBufferDirect(N,null,B,j,L,null),L.onAfterShadow(s,L,C,N,B,j,null)}}const I=L.children;for(let B=0,Y=I.length;B<Y;B++)x(I[B],C,N,T,y)}function D(L){L.target.removeEventListener("dispose",D);for(const N in l){const T=l[N],y=L.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const Ug={[Xr]:qr,[Yr]:Kr,[jr]:Jr,[Mi]:Zr,[qr]:Xr,[Kr]:Yr,[Jr]:jr,[Zr]:Mi};function Ng(s,e){function t(){let H=!1;const Ee=new lt;let K=null;const ee=new lt(0,0,0,0);return{setMask:function(_e){K!==_e&&!H&&(s.colorMask(_e,_e,_e,_e),K=_e)},setLocked:function(_e){H=_e},setClear:function(_e,Me,He,at,Mt){Mt===!0&&(_e*=at,Me*=at,He*=at),Ee.set(_e,Me,He,at),ee.equals(Ee)===!1&&(s.clearColor(_e,Me,He,at),ee.copy(Ee))},reset:function(){H=!1,K=null,ee.set(-1,0,0,0)}}}function n(){let H=!1,Ee=!1,K=null,ee=null,_e=null;return{setReversed:function(Me){if(Ee!==Me){const He=e.get("EXT_clip_control");Ee?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const at=_e;_e=null,this.setClear(at)}Ee=Me},getReversed:function(){return Ee},setTest:function(Me){Me?b(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(Me){K!==Me&&!H&&(s.depthMask(Me),K=Me)},setFunc:function(Me){if(Ee&&(Me=Ug[Me]),ee!==Me){switch(Me){case Xr:s.depthFunc(s.NEVER);break;case qr:s.depthFunc(s.ALWAYS);break;case Yr:s.depthFunc(s.LESS);break;case Mi:s.depthFunc(s.LEQUAL);break;case jr:s.depthFunc(s.EQUAL);break;case Zr:s.depthFunc(s.GEQUAL);break;case Kr:s.depthFunc(s.GREATER);break;case Jr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=Me}},setLocked:function(Me){H=Me},setClear:function(Me){_e!==Me&&(Ee&&(Me=1-Me),s.clearDepth(Me),_e=Me)},reset:function(){H=!1,K=null,ee=null,_e=null,Ee=!1}}}function i(){let H=!1,Ee=null,K=null,ee=null,_e=null,Me=null,He=null,at=null,Mt=null;return{setTest:function(et){H||(et?b(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(et){Ee!==et&&!H&&(s.stencilMask(et),Ee=et)},setFunc:function(et,Wt,en){(K!==et||ee!==Wt||_e!==en)&&(s.stencilFunc(et,Wt,en),K=et,ee=Wt,_e=en)},setOp:function(et,Wt,en){(Me!==et||He!==Wt||at!==en)&&(s.stencilOp(et,Wt,en),Me=et,He=Wt,at=en)},setLocked:function(et){H=et},setClear:function(et){Mt!==et&&(s.clearStencil(et),Mt=et)},reset:function(){H=!1,Ee=null,K=null,ee=null,_e=null,Me=null,He=null,at=null,Mt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,M=null,v=null,x=null,D=null,L=null,C=new Ve(0,0,0),N=0,T=!1,y=null,O=null,I=null,B=null,Y=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,$=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),te=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),te=$>=2);let pe=null,me={};const ve=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),ke=new lt().fromArray(ve),F=new lt().fromArray(Pe);function P(H,Ee,K,ee){const _e=new Uint8Array(4),Me=s.createTexture();s.bindTexture(H,Me),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<K;He++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Ee+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Me}const w={};w[s.TEXTURE_2D]=P(s.TEXTURE_2D,s.TEXTURE_2D,1),w[s.TEXTURE_CUBE_MAP]=P(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[s.TEXTURE_2D_ARRAY]=P(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),w[s.TEXTURE_3D]=P(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),b(s.DEPTH_TEST),o.setFunc(Mi),ne(!1),ce(ia),b(s.CULL_FACE),S(bn);function b(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function W(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function ue(H,Ee){return u[H]!==Ee?(s.bindFramebuffer(H,Ee),u[H]=Ee,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ee),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function V(H,Ee){let K=d,ee=!1;if(H){K=p.get(Ee),K===void 0&&(K=[],p.set(Ee,K));const _e=H.textures;if(K.length!==_e.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,He=_e.length;Me<He;Me++)K[Me]=s.COLOR_ATTACHMENT0+Me;K.length=_e.length,ee=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ee=!0);ee&&s.drawBuffers(K)}function de(H){return g!==H?(s.useProgram(H),g=H,!0):!1}const Q={[kn]:s.FUNC_ADD,[Rl]:s.FUNC_SUBTRACT,[Cl]:s.FUNC_REVERSE_SUBTRACT};Q[Pl]=s.MIN,Q[Ll]=s.MAX;const J={[Dl]:s.ZERO,[Il]:s.ONE,[Ul]:s.SRC_COLOR,[Hr]:s.SRC_ALPHA,[kl]:s.SRC_ALPHA_SATURATE,[Bl]:s.DST_COLOR,[Fl]:s.DST_ALPHA,[Nl]:s.ONE_MINUS_SRC_COLOR,[Wr]:s.ONE_MINUS_SRC_ALPHA,[zl]:s.ONE_MINUS_DST_COLOR,[Ol]:s.ONE_MINUS_DST_ALPHA,[Gl]:s.CONSTANT_COLOR,[Vl]:s.ONE_MINUS_CONSTANT_COLOR,[Hl]:s.CONSTANT_ALPHA,[Wl]:s.ONE_MINUS_CONSTANT_ALPHA};function S(H,Ee,K,ee,_e,Me,He,at,Mt,et){if(H===bn){_===!0&&(W(s.BLEND),_=!1);return}if(_===!1&&(b(s.BLEND),_=!0),H!==Al){if(H!==m||et!==T){if((f!==kn||x!==kn)&&(s.blendEquation(s.FUNC_ADD),f=kn,x=kn),et)switch(H){case Hn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFunc(s.ONE,s.ONE);break;case sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Hn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,v=null,D=null,L=null,C.set(0,0,0),N=0,m=H,T=et}return}_e=_e||Ee,Me=Me||K,He=He||ee,(Ee!==f||_e!==x)&&(s.blendEquationSeparate(Q[Ee],Q[_e]),f=Ee,x=_e),(K!==M||ee!==v||Me!==D||He!==L)&&(s.blendFuncSeparate(J[K],J[ee],J[Me],J[He]),M=K,v=ee,D=Me,L=He),(at.equals(C)===!1||Mt!==N)&&(s.blendColor(at.r,at.g,at.b,Mt),C.copy(at),N=Mt),m=H,T=!1}function se(H,Ee){H.side===vt?W(s.CULL_FACE):b(s.CULL_FACE);let K=H.side===It;Ee&&(K=!K),ne(K),H.blending===Hn&&H.transparent===!1?S(bn):S(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ee=H.stencilWrite;a.setTest(ee),ee&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),U(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?b(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){y!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),y=H)}function ce(H){H!==bl?(b(s.CULL_FACE),H!==O&&(H===ia?s.cullFace(s.BACK):H===Tl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),O=H}function z(H){H!==I&&(te&&s.lineWidth(H),I=H)}function U(H,Ee,K){H?(b(s.POLYGON_OFFSET_FILL),(B!==Ee||Y!==K)&&(s.polygonOffset(Ee,K),B=Ee,Y=K)):W(s.POLYGON_OFFSET_FILL)}function ae(H){H?b(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function R(H){H===void 0&&(H=s.TEXTURE0+j-1),pe!==H&&(s.activeTexture(H),pe=H)}function E(H,Ee,K){K===void 0&&(pe===null?K=s.TEXTURE0+j-1:K=pe);let ee=me[K];ee===void 0&&(ee={type:void 0,texture:void 0},me[K]=ee),(ee.type!==H||ee.texture!==Ee)&&(pe!==K&&(s.activeTexture(K),pe=K),s.bindTexture(H,Ee||w[H]),ee.type=H,ee.texture=Ee)}function Z(){const H=me[pe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{s.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{s.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(H){ke.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ke.copy(H))}function Re(H){F.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),F.copy(H))}function qe(H,Ee){let K=l.get(Ee);K===void 0&&(K=new WeakMap,l.set(Ee,K));let ee=K.get(H);ee===void 0&&(ee=s.getUniformBlockIndex(Ee,H.name),K.set(H,ee))}function De(H,Ee){const ee=l.get(Ee).get(H);c.get(Ee)!==ee&&(s.uniformBlockBinding(Ee,ee,H.__bindingPointIndex),c.set(Ee,ee))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},pe=null,me={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,M=null,v=null,x=null,D=null,L=null,C=new Ve(0,0,0),N=0,T=!1,y=null,O=null,I=null,B=null,Y=null,ke.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:b,disable:W,bindFramebuffer:ue,drawBuffers:V,useProgram:de,setBlending:S,setMaterial:se,setFlipSided:ne,setCullFace:ce,setLineWidth:z,setPolygonOffset:U,setScissorTest:ae,activeTexture:R,bindTexture:E,unbindTexture:Z,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:we,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:De,texStorage2D:Ge,texStorage3D:ge,texSubImage2D:le,texSubImage3D:Ae,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:Fe,viewport:Re,reset:tt}}function Fg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):Yi("canvas")}function _(R,E,Z){let oe=1;const fe=ae(R);if((fe.width>Z||fe.height>Z)&&(oe=Z/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(oe*fe.width),Ae=Math.floor(oe*fe.height);u===void 0&&(u=g(le,Ae));const ye=E?g(le,Ae):u;return ye.width=le,ye.height=Ae,ye.getContext("2d").drawImage(R,0,0,le,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+Ae+")."),ye}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,E,Z,oe,fe=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=E;if(E===s.RED&&(Z===s.FLOAT&&(le=s.R32F),Z===s.HALF_FLOAT&&(le=s.R16F),Z===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.R8UI),Z===s.UNSIGNED_SHORT&&(le=s.R16UI),Z===s.UNSIGNED_INT&&(le=s.R32UI),Z===s.BYTE&&(le=s.R8I),Z===s.SHORT&&(le=s.R16I),Z===s.INT&&(le=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(le=s.RG32F),Z===s.HALF_FLOAT&&(le=s.RG16F),Z===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RG8UI),Z===s.UNSIGNED_SHORT&&(le=s.RG16UI),Z===s.UNSIGNED_INT&&(le=s.RG32UI),Z===s.BYTE&&(le=s.RG8I),Z===s.SHORT&&(le=s.RG16I),Z===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(le=s.RGB16UI),Z===s.UNSIGNED_INT&&(le=s.RGB32UI),Z===s.BYTE&&(le=s.RGB8I),Z===s.SHORT&&(le=s.RGB16I),Z===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),Z===s.UNSIGNED_INT&&(le=s.RGBA32UI),Z===s.BYTE&&(le=s.RGBA8I),Z===s.SHORT&&(le=s.RGBA16I),Z===s.INT&&(le=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),E===s.RGBA){const Ae=fe?Bs:Je.getTransfer(oe);Z===s.FLOAT&&(le=s.RGBA32F),Z===s.HALF_FLOAT&&(le=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(le=Ae===nt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(R,E){let Z;return R?E===null||E===Xn||E===bi?Z=s.DEPTH24_STENCIL8:E===hn?Z=s.DEPTH32F_STENCIL8:E===Xi&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xn||E===bi?Z=s.DEPTH_COMPONENT24:E===hn?Z=s.DEPTH_COMPONENT32F:E===Xi&&(Z=s.DEPTH_COMPONENT16),Z}function D(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function L(R){const E=R.target;E.removeEventListener("dispose",L),N(E),E.isVideoTexture&&h.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),y(E)}function N(R){const E=n.get(R);if(E.__webglInit===void 0)return;const Z=R.source,oe=p.get(Z);if(oe){const fe=oe[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&T(R),Object.keys(oe).length===0&&p.delete(Z)}n.remove(R)}function T(R){const E=n.get(R);s.deleteTexture(E.__webglTexture);const Z=R.source,oe=p.get(Z);delete oe[E.__cacheKey],o.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let fe=0;fe<E.__webglFramebuffer[oe].length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[oe][fe]);else s.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)s.deleteFramebuffer(E.__webglFramebuffer[oe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=R.textures;for(let oe=0,fe=Z.length;oe<fe;oe++){const le=n.get(Z[oe]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Z[oe])}n.remove(R)}let O=0;function I(){O=0}function B(){const R=O;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),O+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const Z=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(Z,R,E);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function te(R,E){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){F(Z,R,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function $(R,E){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){F(Z,R,E);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function k(R,E){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){P(Z,R,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const pe={[Fs]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Os]:s.MIRRORED_REPEAT},me={[Ht]:s.NEAREST,[Ic]:s.NEAREST_MIPMAP_NEAREST,[Fi]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[Rs]:s.LINEAR_MIPMAP_NEAREST,[En]:s.LINEAR_MIPMAP_LINEAR},ve={[rh]:s.NEVER,[uh]:s.ALWAYS,[oh]:s.LESS,[Wc]:s.LEQUAL,[ah]:s.EQUAL,[hh]:s.GEQUAL,[ch]:s.GREATER,[lh]:s.NOTEQUAL};function Pe(R,E){if(E.type===hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===Rs||E.magFilter===Fi||E.magFilter===En||E.minFilter===Kt||E.minFilter===Rs||E.minFilter===Fi||E.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,pe[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,pe[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,pe[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,me[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ht||E.minFilter!==Fi&&E.minFilter!==En||E.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ke(R,E){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",L));const oe=E.source;let fe=p.get(oe);fe===void 0&&(fe={},p.set(oe,fe));const le=Y(E);if(le!==R.__cacheKey){fe[le]===void 0&&(fe[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),fe[le].usedTimes++;const Ae=fe[R.__cacheKey];Ae!==void 0&&(fe[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(E)),R.__cacheKey=le,R.__webglTexture=fe[le].texture}return Z}function F(R,E,Z){let oe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=s.TEXTURE_3D);const fe=ke(R,E),le=E.source;t.bindTexture(oe,R.__webglTexture,s.TEXTURE0+Z);const Ae=n.get(le);if(le.version!==Ae.__version||fe===!0){t.activeTexture(s.TEXTURE0+Z);const ye=Je.getPrimaries(Je.workingColorSpace),be=E.colorSpace===ln?null:Je.getPrimaries(E.colorSpace),Ge=E.colorSpace===ln||ye===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ge=_(E.image,!1,i.maxTextureSize);ge=U(E,ge);const we=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type);let Fe=v(E.internalFormat,we,Ue,E.colorSpace,E.isVideoTexture);Pe(oe,E);let Re;const qe=E.mipmaps,De=E.isVideoTexture!==!0,tt=Ae.__version===void 0||fe===!0,H=le.dataReady,Ee=D(E,ge);if(E.isDepthTexture)Fe=x(E.format===Ti,E.type),tt&&(De?t.texStorage2D(s.TEXTURE_2D,1,Fe,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ge.width,ge.height,0,we,Ue,null));else if(E.isDataTexture)if(qe.length>0){De&&tt&&t.texStorage2D(s.TEXTURE_2D,Ee,Fe,qe[0].width,qe[0].height);for(let K=0,ee=qe.length;K<ee;K++)Re=qe[K],De?H&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Re.width,Re.height,we,Ue,Re.data):t.texImage2D(s.TEXTURE_2D,K,Fe,Re.width,Re.height,0,we,Ue,Re.data);E.generateMipmaps=!1}else De?(tt&&t.texStorage2D(s.TEXTURE_2D,Ee,Fe,ge.width,ge.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,we,Ue,ge.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ge.width,ge.height,0,we,Ue,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,qe[0].width,qe[0].height,ge.depth);for(let K=0,ee=qe.length;K<ee;K++)if(Re=qe[K],E.format!==Vt)if(we!==null)if(De){if(H)if(E.layerUpdates.size>0){const _e=Ga(Re.width,Re.height,E.format,E.type);for(const Me of E.layerUpdates){const He=Re.data.subarray(Me*_e/Re.data.BYTES_PER_ELEMENT,(Me+1)*_e/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Me,Re.width,Re.height,1,we,He)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,ge.depth,we,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Fe,Re.width,Re.height,ge.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,ge.depth,we,Ue,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Fe,Re.width,Re.height,ge.depth,0,we,Ue,Re.data)}else{De&&tt&&t.texStorage2D(s.TEXTURE_2D,Ee,Fe,qe[0].width,qe[0].height);for(let K=0,ee=qe.length;K<ee;K++)Re=qe[K],E.format!==Vt?we!==null?De?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?H&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Re.width,Re.height,we,Ue,Re.data):t.texImage2D(s.TEXTURE_2D,K,Fe,Re.width,Re.height,0,we,Ue,Re.data)}else if(E.isDataArrayTexture)if(De){if(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,ge.width,ge.height,ge.depth),H)if(E.layerUpdates.size>0){const K=Ga(ge.width,ge.height,E.format,E.type);for(const ee of E.layerUpdates){const _e=ge.data.subarray(ee*K/ge.data.BYTES_PER_ELEMENT,(ee+1)*K/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,ge.width,ge.height,1,we,Ue,_e)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,we,Ue,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ge.width,ge.height,ge.depth,0,we,Ue,ge.data);else if(E.isData3DTexture)De?(tt&&t.texStorage3D(s.TEXTURE_3D,Ee,Fe,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,we,Ue,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ge.width,ge.height,ge.depth,0,we,Ue,ge.data);else if(E.isFramebufferTexture){if(tt)if(De)t.texStorage2D(s.TEXTURE_2D,Ee,Fe,ge.width,ge.height);else{let K=ge.width,ee=ge.height;for(let _e=0;_e<Ee;_e++)t.texImage2D(s.TEXTURE_2D,_e,Fe,K,ee,0,we,Ue,null),K>>=1,ee>>=1}}else if(qe.length>0){if(De&&tt){const K=ae(qe[0]);t.texStorage2D(s.TEXTURE_2D,Ee,Fe,K.width,K.height)}for(let K=0,ee=qe.length;K<ee;K++)Re=qe[K],De?H&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,we,Ue,Re):t.texImage2D(s.TEXTURE_2D,K,Fe,we,Ue,Re);E.generateMipmaps=!1}else if(De){if(tt){const K=ae(ge);t.texStorage2D(s.TEXTURE_2D,Ee,Fe,K.width,K.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ue,ge)}else t.texImage2D(s.TEXTURE_2D,0,Fe,we,Ue,ge);m(E)&&f(oe),Ae.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function P(R,E,Z){if(E.image.length!==6)return;const oe=ke(R,E),fe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Z);const le=n.get(fe);if(fe.version!==le.__version||oe===!0){t.activeTexture(s.TEXTURE0+Z);const Ae=Je.getPrimaries(Je.workingColorSpace),ye=E.colorSpace===ln?null:Je.getPrimaries(E.colorSpace),be=E.colorSpace===ln||Ae===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,ge=E.image[0]&&E.image[0].isDataTexture,we=[];for(let ee=0;ee<6;ee++)!Ge&&!ge?we[ee]=_(E.image[ee],!0,i.maxCubemapSize):we[ee]=ge?E.image[ee].image:E.image[ee],we[ee]=U(E,we[ee]);const Ue=we[0],Fe=r.convert(E.format,E.colorSpace),Re=r.convert(E.type),qe=v(E.internalFormat,Fe,Re,E.colorSpace),De=E.isVideoTexture!==!0,tt=le.__version===void 0||oe===!0,H=fe.dataReady;let Ee=D(E,Ue);Pe(s.TEXTURE_CUBE_MAP,E);let K;if(Ge){De&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,qe,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){K=we[ee].mipmaps;for(let _e=0;_e<K.length;_e++){const Me=K[_e];E.format!==Vt?Fe!==null?De?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,qe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,Me.width,Me.height,Fe,Re,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,qe,Me.width,Me.height,0,Fe,Re,Me.data)}}}else{if(K=E.mipmaps,De&&tt){K.length>0&&Ee++;const ee=ae(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ee,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ge){De?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we[ee].width,we[ee].height,Fe,Re,we[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,we[ee].width,we[ee].height,0,Fe,Re,we[ee].data);for(let _e=0;_e<K.length;_e++){const He=K[_e].image[ee].image;De?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,He.width,He.height,Fe,Re,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,qe,He.width,He.height,0,Fe,Re,He.data)}}else{De?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,Re,we[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Fe,Re,we[ee]);for(let _e=0;_e<K.length;_e++){const Me=K[_e];De?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Fe,Re,Me.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,qe,Fe,Re,Me.image[ee])}}}m(E)&&f(s.TEXTURE_CUBE_MAP),le.__version=fe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function w(R,E,Z,oe,fe,le){const Ae=r.convert(Z.format,Z.colorSpace),ye=r.convert(Z.type),be=v(Z.internalFormat,Ae,ye,Z.colorSpace),Ge=n.get(E),ge=n.get(Z);if(ge.__renderTarget=E,!Ge.__hasExternalTextures){const we=Math.max(1,E.width>>le),Ue=Math.max(1,E.height>>le);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,be,we,Ue,E.depth,0,Ae,ye,null):t.texImage2D(fe,le,be,we,Ue,0,Ae,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,fe,ge.__webglTexture,0,ne(E)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,fe,ge.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function b(R,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const oe=E.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,le=x(E.stencilBuffer,fe),Ae=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=ne(E);ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,le,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,R)}else{const oe=E.textures;for(let fe=0;fe<oe.length;fe++){const le=oe[fe],Ae=r.convert(le.format,le.colorSpace),ye=r.convert(le.type),be=v(le.internalFormat,Ae,ye,le.colorSpace),Ge=ne(E);Z&&ce(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,be,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,be,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function W(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(E.depthTexture);oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const fe=oe.__webglTexture,le=ne(E);if(E.depthTexture.format===xi)ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Ti)ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ue(R){const E=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const oe=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=oe}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");W(E.__webglFramebuffer,R)}else if(Z){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=s.createRenderbuffer(),b(E.__webglDepthbuffer[oe],R,!1);else{const fe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,le)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),b(E.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function V(R,E,Z){const oe=n.get(R);E!==void 0&&w(oe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ue(R)}function de(R){const E=R.texture,Z=n.get(R),oe=n.get(E);R.addEventListener("dispose",C);const fe=R.textures,le=R.isWebGLCubeRenderTarget===!0,Ae=fe.length>1;if(Ae||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=E.version,o.memory.textures++),le){Z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ye]=[];for(let be=0;be<E.mipmaps.length;be++)Z.__webglFramebuffer[ye][be]=s.createFramebuffer()}else Z.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)Z.__webglFramebuffer[ye]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ye=0,be=fe.length;ye<be;ye++){const Ge=n.get(fe[ye]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ce(R)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const be=fe[ye];Z.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ye]);const Ge=r.convert(be.format,be.colorSpace),ge=r.convert(be.type),we=v(be.internalFormat,Ge,ge,be.colorSpace,R.isXRRenderTarget===!0),Ue=ne(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,we,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),b(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)w(Z.__webglFramebuffer[ye][be],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else w(Z.__webglFramebuffer[ye],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(E)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ye=0,be=fe.length;ye<be;ye++){const Ge=fe[ye],ge=n.get(Ge);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),Pe(s.TEXTURE_2D,Ge),w(Z.__webglFramebuffer,R,Ge,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),m(Ge)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,oe.__webglTexture),Pe(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)w(Z.__webglFramebuffer[be],R,E,s.COLOR_ATTACHMENT0,ye,be);else w(Z.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,ye,0);m(E)&&f(ye),t.unbindTexture()}R.depthBuffer&&ue(R)}function Q(R){const E=R.textures;for(let Z=0,oe=E.length;Z<oe;Z++){const fe=E[Z];if(m(fe)){const le=M(R),Ae=n.get(fe).__webglTexture;t.bindTexture(le,Ae),f(le),t.unbindTexture()}}}const J=[],S=[];function se(R){if(R.samples>0){if(ce(R)===!1){const E=R.textures,Z=R.width,oe=R.height;let fe=s.COLOR_BUFFER_BIT;const le=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(R),ye=E.length>1;if(ye)for(let be=0;be<E.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let be=0;be<E.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const Ge=n.get(E[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,fe,s.NEAREST),c===!0&&(J.length=0,S.length=0,J.push(s.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(le),S.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,S)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<E.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const Ge=n.get(E[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ne(R){return Math.min(i.maxSamples,R.samples)}function ce(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function U(R,E){const Z=R.colorSpace,oe=R.format,fe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==wi&&Z!==ln&&(Je.getTransfer(Z)===nt?(oe!==Vt||fe!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=$,this.setTextureCube=k,this.rebindTextures=V,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=w,this.useMultisampledRTT=ce}function Og(s,e){function t(n,i=ln){let r;const o=Je.getTransfer(i);if(n===dn)return s.UNSIGNED_BYTE;if(n===Do)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return s.BYTE;if(n===Nc)return s.SHORT;if(n===Xi)return s.UNSIGNED_SHORT;if(n===Lo)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Ji)return s.HALF_FLOAT;if(n===Oc)return s.ALPHA;if(n===Bc)return s.RGB;if(n===Vt)return s.RGBA;if(n===zc)return s.LUMINANCE;if(n===kc)return s.LUMINANCE_ALPHA;if(n===xi)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===Gc)return s.RED;if(n===Uo)return s.RED_INTEGER;if(n===Vc)return s.RG;if(n===No)return s.RG_INTEGER;if(n===Fo)return s.RGBA_INTEGER;if(n===Cs||n===Ps||n===Ls||n===Ds)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Is||n===So||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Is)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===bo||n===To||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Is)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends jn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null;const _=new kg,m=t.getContextAttributes();let f=null,M=null;const v=[],x=[],D=new he;let L=null;const C=new Gt;C.viewport=new lt;const N=new Gt;N.viewport=new lt;const T=[C,N],y=new Yu;let O=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let P=v[F];return P===void 0&&(P=new Sr,v[F]=P),P.getTargetRaySpace()},this.getControllerGrip=function(F){let P=v[F];return P===void 0&&(P=new Sr,v[F]=P),P.getGripSpace()},this.getHand=function(F){let P=v[F];return P===void 0&&(P=new Sr,v[F]=P),P.getHandSpace()};function B(F){const P=x.indexOf(F.inputSource);if(P===-1)return;const w=v[P];w!==void 0&&(w.update(F.inputSource,F.frame,l||o),w.dispatchEvent({type:F.type,data:F.inputSource}))}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",j);for(let F=0;F<v.length;F++){const P=x[F];P!==null&&(x[F]=null,v[F].disconnect(P))}O=null,I=null,_.reset(),e.setRenderTarget(f),d=null,p=null,u=null,i=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let w=null,b=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,w=m.stencil?Ti:xi,b=m.stencil?bi:Xn);const ue={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(ue),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new qn(p.textureWidth,p.textureHeight,{format:Vt,type:dn,depthTexture:new el(p.textureWidth,p.textureHeight,b,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const w={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,w),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new qn(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(F){for(let P=0;P<F.removed.length;P++){const w=F.removed[P],b=x.indexOf(w);b>=0&&(x[b]=null,v[b].disconnect(w))}for(let P=0;P<F.added.length;P++){const w=F.added[P];let b=x.indexOf(w);if(b===-1){for(let ue=0;ue<v.length;ue++)if(ue>=x.length){x.push(w),b=ue;break}else if(x[ue]===null){x[ue]=w,b=ue;break}if(b===-1)break}const W=v[b];W&&W.connect(w)}}const te=new G,$=new G;function k(F,P,w){te.setFromMatrixPosition(P.matrixWorld),$.setFromMatrixPosition(w.matrixWorld);const b=te.distanceTo($),W=P.projectionMatrix.elements,ue=w.projectionMatrix.elements,V=W[14]/(W[10]-1),de=W[14]/(W[10]+1),Q=(W[9]+1)/W[5],J=(W[9]-1)/W[5],S=(W[8]-1)/W[0],se=(ue[8]+1)/ue[0],ne=V*S,ce=V*se,z=b/(-S+se),U=z*-S;if(P.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(U),F.translateZ(z),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),W[10]===-1)F.projectionMatrix.copy(P.projectionMatrix),F.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const ae=V+z,R=de+z,E=ne-U,Z=ce+(b-U),oe=Q*de/R*ae,fe=J*de/R*ae;F.projectionMatrix.makePerspective(E,Z,oe,fe,ae,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function pe(F,P){P===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(P.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let P=F.near,w=F.far;_.texture!==null&&(_.depthNear>0&&(P=_.depthNear),_.depthFar>0&&(w=_.depthFar)),y.near=N.near=C.near=P,y.far=N.far=C.far=w,(O!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,I=y.far),C.layers.mask=F.layers.mask|2,N.layers.mask=F.layers.mask|4,y.layers.mask=C.layers.mask|N.layers.mask;const b=F.parent,W=y.cameras;pe(y,b);for(let ue=0;ue<W.length;ue++)pe(W[ue],b);W.length===2?k(y,C,N):y.projectionMatrix.copy(C.projectionMatrix),me(F,y,b)};function me(F,P,w){w===null?F.matrix.copy(P.matrixWorld):(F.matrix.copy(w.matrixWorld),F.matrix.invert(),F.matrix.multiply(P.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(P.projectionMatrix),F.projectionMatrixInverse.copy(P.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=qi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(F){c=F,p!==null&&(p.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ve=null;function Pe(F,P){if(h=P.getViewerPose(l||o),g=P,h!==null){const w=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let b=!1;w.length!==y.cameras.length&&(y.cameras.length=0,b=!0);for(let V=0;V<w.length;V++){const de=w[V];let Q=null;if(d!==null)Q=d.getViewport(de);else{const S=u.getViewSubImage(p,de);Q=S.viewport,V===0&&(e.setRenderTargetTextures(M,S.colorTexture,p.ignoreDepthValues?void 0:S.depthStencilTexture),e.setRenderTarget(M))}let J=T[V];J===void 0&&(J=new Gt,J.layers.enable(V),J.viewport=new lt,T[V]=J),J.matrix.fromArray(de.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(de.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),V===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),b===!0&&y.cameras.push(J)}const W=i.enabledFeatures;if(W&&W.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const V=u.getDepthInformation(w[0]);V&&V.isValid&&V.texture&&_.init(e,V,i.renderState)}}for(let w=0;w<v.length;w++){const b=x[w],W=v[w];b!==null&&W!==void 0&&W.update(b,P,l||o)}ve&&ve(F,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),g=null}const ke=new ul;ke.setAnimationLoop(Pe),this.setAnimationLoop=function(F){ve=F},this.dispose=function(){}}}const On=new Jt,Vg=new st;function Hg(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Jc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,On.copy(x),On.x*=-1,On.y*=-1,On.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(On)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wg(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function l(M,v){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const D=v.program;n.updateUBOMapping(M,D);const L=e.render.frame;r[M.id]!==L&&(p(M),r[M.id]=L)}function h(M){const v=u();M.__bindingPointIndex=v;const x=s.createBuffer(),D=M.__size,L=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const v=i[M.id],x=M.uniforms,D=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let L=0,C=x.length;L<C;L++){const N=Array.isArray(x[L])?x[L]:[x[L]];for(let T=0,y=N.length;T<y;T++){const O=N[T];if(d(O,L,T,D)===!0){const I=O.__offset,B=Array.isArray(O.value)?O.value:[O.value];let Y=0;for(let j=0;j<B.length;j++){const te=B[j],$=_(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,I+Y,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):(te.toArray(O.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,v,x,D){const L=M.value,C=v+"_"+x;if(D[C]===void 0)return typeof L=="number"||typeof L=="boolean"?D[C]=L:D[C]=L.clone(),!0;{const N=D[C];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return D[C]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(M){const v=M.uniforms;let x=0;const D=16;for(let C=0,N=v.length;C<N;C++){const T=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,O=T.length;y<O;y++){const I=T[y],B=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,j=B.length;Y<j;Y++){const te=B[Y],$=_(te),k=x%D,pe=k%$.boundary,me=k+pe;x+=pe,me!==0&&D-me<$.storage&&(x+=D-me),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=$.storage}}}const L=x%D;return L>0&&(x+=D-L),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class fc{constructor(e={}){const{canvas:t=Rh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Tn,this.toneMappingExposure=1;const x=this;let D=!1,L=0,C=0,N=null,T=-1,y=null;const O=new lt,I=new lt;let B=null;const Y=new Ve(0);let j=0,te=t.width,$=t.height,k=1,pe=null,me=null;const ve=new lt(0,0,te,$),Pe=new lt(0,0,te,$);let ke=!1;const F=new ko;let P=!1,w=!1;this.transmissionResolutionScale=1;const b=new st,W=new st,ue=new G,V=new lt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function J(){return N===null?k:1}let S=n;function se(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qs}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Me,!1),S===null){const X="webgl2";if(S=se(X,A),S===null)throw se(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,ce,z,U,ae,R,E,Z,oe,fe,le,Ae,ye,be,Ge,ge,we,Ue,Fe,Re,qe,De,tt,H;function Ee(){ne=new tm(S),ne.init(),De=new Og(S,ne),ce=new jp(S,ne,e,De),z=new Ng(S,ne),ce.reverseDepthBuffer&&p&&z.buffers.depth.setReversed(!0),U=new sm(S),ae=new Sg,R=new Fg(S,ne,z,ae,ce,De,U),E=new Kp(x),Z=new em(x),oe=new hf(S),tt=new qp(S,oe),fe=new nm(S,oe,U,tt),le=new om(S,fe,oe,U),Fe=new rm(S,ce,R),ge=new Zp(ae),Ae=new Mg(x,E,Z,ne,ce,tt,ge),ye=new Hg(x,ae),be=new bg,Ge=new Pg(ne),Ue=new Xp(x,E,Z,z,le,d,c),we=new Ig(x,le,ce),H=new Wg(S,U,ce,z),Re=new Yp(S,ne,U),qe=new im(S,ne,U),U.programs=Ae.programs,x.capabilities=ce,x.extensions=ne,x.properties=ae,x.renderLists=be,x.shadowMap=we,x.state=z,x.info=U}Ee();const K=new Gg(x,S);this.xr=K,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(te,$,!1))},this.getSize=function(A){return A.set(te,$)},this.setSize=function(A,X,ie=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,$=X,t.width=Math.floor(A*k),t.height=Math.floor(X*k),ie===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(te*k,$*k).floor()},this.setDrawingBufferSize=function(A,X,ie){te=A,$=X,k=ie,t.width=Math.floor(A*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,X,ie,re){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,X,ie,re),z.viewport(O.copy(ve).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,X,ie,re){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,X,ie,re),z.scissor(I.copy(Pe).multiplyScalar(k).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){z.setScissorTest(ke=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ie=!0){let re=0;if(A){let q=!1;if(N!==null){const xe=N.texture.format;q=xe===Fo||xe===No||xe===Uo}if(q){const xe=N.texture.type,Te=xe===dn||xe===Xn||xe===Xi||xe===bi||xe===Do||xe===Io,Ce=Ue.getClearColor(),Le=Ue.getClearAlpha(),Be=Ce.r,ze=Ce.g,Ie=Ce.b;Te?(g[0]=Be,g[1]=ze,g[2]=Ie,g[3]=Le,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=Ie,_[3]=Le,S.clearBufferiv(S.COLOR,0,_))}else re|=S.COLOR_BUFFER_BIT}X&&(re|=S.DEPTH_BUFFER_BIT),ie&&(re|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ue.dispose(),be.dispose(),Ge.dispose(),ae.dispose(),E.dispose(),Z.dispose(),le.dispose(),tt.dispose(),H.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ko),K.removeEventListener("sessionend",Jo),Pn.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=U.autoReset,X=we.enabled,ie=we.autoUpdate,re=we.needsUpdate,q=we.type;Ee(),U.autoReset=A,we.enabled=X,we.autoUpdate=ie,we.needsUpdate=re,we.type=q}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const X=A.target;X.removeEventListener("dispose",He),at(X)}function at(A){Mt(A),ae.remove(A)}function Mt(A){const X=ae.get(A).programs;X!==void 0&&(X.forEach(function(ie){Ae.releaseProgram(ie)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,re,q,xe){X===null&&(X=de);const Te=q.isMesh&&q.matrixWorld.determinant()<0,Ce=xl(A,X,ie,re,q);z.setMaterial(re,Te);let Le=ie.index,Be=1;if(re.wireframe===!0){if(Le=fe.getWireframeAttribute(ie),Le===void 0)return;Be=2}const ze=ie.drawRange,Ie=ie.attributes.position;let je=ze.start*Be,$e=(ze.start+ze.count)*Be;xe!==null&&(je=Math.max(je,xe.start*Be),$e=Math.min($e,(xe.start+xe.count)*Be)),Le!==null?(je=Math.max(je,0),$e=Math.min($e,Le.count)):Ie!=null&&(je=Math.max(je,0),$e=Math.min($e,Ie.count));const ut=$e-je;if(ut<0||ut===1/0)return;tt.setup(q,re,Ce,ie,Le);let ct,Ze=Re;if(Le!==null&&(ct=oe.get(Le),Ze=qe,Ze.setIndex(ct)),q.isMesh)re.wireframe===!0?(z.setLineWidth(re.wireframeLinewidth*J()),Ze.setMode(S.LINES)):Ze.setMode(S.TRIANGLES);else if(q.isLine){let Ne=re.linewidth;Ne===void 0&&(Ne=1),z.setLineWidth(Ne*J()),q.isLineSegments?Ze.setMode(S.LINES):q.isLineLoop?Ze.setMode(S.LINE_LOOP):Ze.setMode(S.LINE_STRIP)}else q.isPoints?Ze.setMode(S.POINTS):q.isSprite&&Ze.setMode(S.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Bn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ne=q._multiDrawStarts,xt=q._multiDrawCounts,Qe=q._multiDrawCount,Xt=Le?oe.get(Le).bytesPerElement:1,Jn=ae.get(re).currentProgram.getUniforms();for(let Ut=0;Ut<Qe;Ut++)Jn.setValue(S,"_gl_DrawID",Ut),Ze.render(Ne[Ut]/Xt,xt[Ut])}else if(q.isInstancedMesh)Ze.renderInstances(je,ut,q.count);else if(ie.isInstancedBufferGeometry){const Ne=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,xt=Math.min(ie.instanceCount,Ne);Ze.renderInstances(je,ut,xt)}else Ze.render(je,ut)};function et(A,X,ie){A.transparent===!0&&A.side===vt&&A.forceSinglePass===!1?(A.side=It,A.needsUpdate=!0,es(A,X,ie),A.side=An,A.needsUpdate=!0,es(A,X,ie),A.side=vt):es(A,X,ie)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),f=Ge.get(ie),f.init(X),v.push(f),ie.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),A!==ie&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();const re=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xe=q.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Ce=xe[Te];et(Ce,ie,q),re.add(Ce)}else et(xe,ie,q),re.add(xe)}),f=v.pop(),re},this.compileAsync=function(A,X,ie=null){const re=this.compile(A,X,ie);return new Promise(q=>{function xe(){if(re.forEach(function(Te){ae.get(Te).currentProgram.isReady()&&re.delete(Te)}),re.size===0){q(A);return}setTimeout(xe,10)}ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Wt=null;function en(A){Wt&&Wt(A)}function Ko(){Pn.stop()}function Jo(){Pn.start()}const Pn=new ul;Pn.setAnimationLoop(en),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(A){Wt=A,K.setAnimationLoop(A),A===null?Pn.stop():Pn.start()},K.addEventListener("sessionstart",Ko),K.addEventListener("sessionend",Jo),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(X),X=K.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,X,N),f=Ge.get(A,v.length),f.init(X),v.push(f),W.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),F.setFromProjectionMatrix(W),w=this.localClippingEnabled,P=ge.init(this.clippingPlanes,w),m=be.get(A,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){const xe=x.xr.getDepthSensingMesh();xe!==null&&tr(xe,X,-1/0,x.sortObjects)}tr(A,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pe,me),Q=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Q&&Ue.addToRenderList(m,A),this.info.render.frame++,P===!0&&ge.beginShadows();const ie=f.state.shadowsArray;we.render(ie,A,X),P===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,q=m.transmissive;if(f.setupLights(),X.isArrayCamera){const xe=X.cameras;if(q.length>0)for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Le=xe[Te];Qo(re,q,A,Le)}Q&&Ue.render(A);for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Le=xe[Te];$o(m,A,Le,Le.viewport)}}else q.length>0&&Qo(re,q,A,X),Q&&Ue.render(A),$o(m,A,X);N!==null&&C===0&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(x,A,X),tt.resetDefaultState(),T=-1,y=null,v.pop(),v.length>0?(f=v[v.length-1],P===!0&&ge.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function tr(A,X,ie,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){re&&V.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const Te=le.update(A),Ce=A.material;Ce.visible&&m.push(A,Te,Ce,ie,V.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const Te=le.update(A),Ce=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),V.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),V.copy(Te.boundingSphere.center)),V.applyMatrix4(A.matrixWorld).applyMatrix4(W)),Array.isArray(Ce)){const Le=Te.groups;for(let Be=0,ze=Le.length;Be<ze;Be++){const Ie=Le[Be],je=Ce[Ie.materialIndex];je&&je.visible&&m.push(A,Te,je,ie,V.z,Ie)}}else Ce.visible&&m.push(A,Te,Ce,ie,V.z,null)}}const xe=A.children;for(let Te=0,Ce=xe.length;Te<Ce;Te++)tr(xe[Te],X,ie,re)}function $o(A,X,ie,re){const q=A.opaque,xe=A.transmissive,Te=A.transparent;f.setupLightsView(ie),P===!0&&ge.setGlobalState(x.clippingPlanes,ie),re&&z.viewport(O.copy(re)),q.length>0&&Qi(q,X,ie),xe.length>0&&Qi(xe,X,ie),Te.length>0&&Qi(Te,X,ie),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Qo(A,X,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[re.id]===void 0&&(f.state.transmissionRenderTarget[re.id]=new qn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ji:dn,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const xe=f.state.transmissionRenderTarget[re.id],Te=re.viewport||O;xe.setSize(Te.z*x.transmissionResolutionScale,Te.w*x.transmissionResolutionScale);const Ce=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(Y),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ue.render(ie);const Le=x.toneMapping;x.toneMapping=Tn;const Be=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),f.setupLightsView(re),P===!0&&ge.setGlobalState(x.clippingPlanes,re),Qi(A,ie,re),R.updateMultisampleRenderTarget(xe),R.updateRenderTargetMipmap(xe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ie=0,je=X.length;Ie<je;Ie++){const $e=X[Ie],ut=$e.object,ct=$e.geometry,Ze=$e.material,Ne=$e.group;if(Ze.side===vt&&ut.layers.test(re.layers)){const xt=Ze.side;Ze.side=It,Ze.needsUpdate=!0,ea(ut,ie,re,ct,Ze,Ne),Ze.side=xt,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(xe),R.updateRenderTargetMipmap(xe))}x.setRenderTarget(Ce),x.setClearColor(Y,j),Be!==void 0&&(re.viewport=Be),x.toneMapping=Le}function Qi(A,X,ie){const re=X.isScene===!0?X.overrideMaterial:null;for(let q=0,xe=A.length;q<xe;q++){const Te=A[q],Ce=Te.object,Le=Te.geometry,Be=re===null?Te.material:re,ze=Te.group;Ce.layers.test(ie.layers)&&ea(Ce,X,ie,Le,Be,ze)}}function ea(A,X,ie,re,q,xe){A.onBeforeRender(x,X,ie,re,q,xe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(x,X,ie,re,A,xe),q.transparent===!0&&q.side===vt&&q.forceSinglePass===!1?(q.side=It,q.needsUpdate=!0,x.renderBufferDirect(ie,X,re,q,A,xe),q.side=An,q.needsUpdate=!0,x.renderBufferDirect(ie,X,re,q,A,xe),q.side=vt):x.renderBufferDirect(ie,X,re,q,A,xe),A.onAfterRender(x,X,ie,re,q,xe)}function es(A,X,ie){X.isScene!==!0&&(X=de);const re=ae.get(A),q=f.state.lights,xe=f.state.shadowsArray,Te=q.state.version,Ce=Ae.getParameters(A,q.state,xe,X,ie),Le=Ae.getProgramCacheKey(Ce);let Be=re.programs;re.environment=A.isMeshStandardMaterial?X.environment:null,re.fog=X.fog,re.envMap=(A.isMeshStandardMaterial?Z:E).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",He),Be=new Map,re.programs=Be);let ze=Be.get(Le);if(ze!==void 0){if(re.currentProgram===ze&&re.lightsStateVersion===Te)return na(A,Ce),ze}else Ce.uniforms=Ae.getUniforms(A),A.onBeforeCompile(Ce,x),ze=Ae.acquireProgram(Ce,Le),Be.set(Le,ze),re.uniforms=Ce.uniforms;const Ie=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ge.uniform),na(A,Ce),re.needsLights=yl(A),re.lightsStateVersion=Te,re.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMap.value=q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotShadowMap.value=q.state.spotShadowMap,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMap.value=q.state.pointShadowMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),re.currentProgram=ze,re.uniformsList=null,ze}function ta(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Us.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function na(A,X){const ie=ae.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function xl(A,X,ie,re,q){X.isScene!==!0&&(X=de),R.resetTextureUnits();const xe=X.fog,Te=re.isMeshStandardMaterial?X.environment:null,Ce=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:wi,Le=(re.isMeshStandardMaterial?Z:E).get(re.envMap||Te),Be=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ze=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ie=!!ie.morphAttributes.position,je=!!ie.morphAttributes.normal,$e=!!ie.morphAttributes.color;let ut=Tn;re.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ut=x.toneMapping);const ct=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ze=ct!==void 0?ct.length:0,Ne=ae.get(re),xt=f.state.lights;if(P===!0&&(w===!0||A!==y)){const wt=A===y&&re.id===T;ge.setState(re,A,wt)}let Qe=!1;re.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==xt.state.version||Ne.outputColorSpace!==Ce||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Le||re.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ge.numPlanes||Ne.numIntersection!==ge.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ze||Ne.morphTargets!==Ie||Ne.morphNormals!==je||Ne.morphColors!==$e||Ne.toneMapping!==ut||Ne.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ne.__version=re.version);let Xt=Ne.currentProgram;Qe===!0&&(Xt=es(re,X,q));let Jn=!1,Ut=!1,Pi=!1;const rt=Xt.getUniforms(),Bt=Ne.uniforms;if(z.useProgram(Xt.program)&&(Jn=!0,Ut=!0,Pi=!0),re.id!==T&&(T=re.id,Ut=!0),Jn||y!==A){z.buffers.depth.getReversed()?(b.copy(A.projectionMatrix),Ph(b),Lh(b),rt.setValue(S,"projectionMatrix",b)):rt.setValue(S,"projectionMatrix",A.projectionMatrix),rt.setValue(S,"viewMatrix",A.matrixWorldInverse);const Ct=rt.map.cameraPosition;Ct!==void 0&&Ct.setValue(S,ue.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&rt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&rt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Ut=!0,Pi=!0)}if(q.isSkinnedMesh){rt.setOptional(S,q,"bindMatrix"),rt.setOptional(S,q,"bindMatrixInverse");const wt=q.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),rt.setValue(S,"boneTexture",wt.boneTexture,R))}q.isBatchedMesh&&(rt.setOptional(S,q,"batchingTexture"),rt.setValue(S,"batchingTexture",q._matricesTexture,R),rt.setOptional(S,q,"batchingIdTexture"),rt.setValue(S,"batchingIdTexture",q._indirectTexture,R),rt.setOptional(S,q,"batchingColorTexture"),q._colorsTexture!==null&&rt.setValue(S,"batchingColorTexture",q._colorsTexture,R));const zt=ie.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&Fe.update(q,ie,Xt),(Ut||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,rt.setValue(S,"receiveShadow",q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Bt.envMap.value=Le,Bt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&X.environment!==null&&(Bt.envMapIntensity.value=X.environmentIntensity),Ut&&(rt.setValue(S,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&vl(Bt,Pi),xe&&re.fog===!0&&ye.refreshFogUniforms(Bt,xe),ye.refreshMaterialUniforms(Bt,re,k,$,f.state.transmissionRenderTarget[A.id]),Us.upload(S,ta(Ne),Bt,R)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Us.upload(S,ta(Ne),Bt,R),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&rt.setValue(S,"center",q.center),rt.setValue(S,"modelViewMatrix",q.modelViewMatrix),rt.setValue(S,"normalMatrix",q.normalMatrix),rt.setValue(S,"modelMatrix",q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const wt=re.uniformsGroups;for(let Ct=0,nr=wt.length;Ct<nr;Ct++){const Ln=wt[Ct];H.update(Ln,Xt),H.bind(Ln,Xt)}}return Xt}function vl(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,X,ie){ae.get(A.texture).__webglTexture=X,ae.get(A.depthTexture).__webglTexture=ie;const re=ae.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ie=ae.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Ml=S.createFramebuffer();this.setRenderTarget=function(A,X=0,ie=0){N=A,L=X,C=ie;let re=!0,q=null,xe=!1,Te=!1;if(A){const Le=ae.get(A);if(Le.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(S.FRAMEBUFFER,null),re=!1;else if(Le.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Le.__hasExternalTextures)R.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ie=A.depthTexture;if(Le.__boundDepthTexture!==Ie){if(Ie!==null&&ae.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ze=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[X])?q=ze[X][ie]:q=ze[X],xe=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?q=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[ie]:q=ze,O.copy(A.viewport),I.copy(A.scissor),B=A.scissorTest}else O.copy(ve).multiplyScalar(k).floor(),I.copy(Pe).multiplyScalar(k).floor(),B=ke;if(ie!==0&&(q=Ml),z.bindFramebuffer(S.FRAMEBUFFER,q)&&re&&z.drawBuffers(A,q),z.viewport(O),z.scissor(I),z.setScissorTest(B),xe){const Le=ae.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,ie)}else if(Te){const Le=ae.get(A.texture),Be=X;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Le.__webglTexture,ie,Be)}else if(A!==null&&ie!==0){const Le=ae.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Le.__webglTexture,ie)}T=-1},this.readRenderTargetPixels=function(A,X,ie,re,q,xe,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){z.bindFramebuffer(S.FRAMEBUFFER,Ce);try{const Le=A.texture,Be=Le.format,ze=Le.type;if(!ce.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ie>=0&&ie<=A.height-q&&S.readPixels(X,ie,re,q,De.convert(Be),De.convert(ze),xe)}finally{const Le=N!==null?ae.get(N).__webglFramebuffer:null;z.bindFramebuffer(S.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,re,q,xe,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){const Le=A.texture,Be=Le.format,ze=Le.type;if(!ce.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-re&&ie>=0&&ie<=A.height-q){z.bindFramebuffer(S.FRAMEBUFFER,Ce);const Ie=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ie),S.bufferData(S.PIXEL_PACK_BUFFER,xe.byteLength,S.STREAM_READ),S.readPixels(X,ie,re,q,De.convert(Be),De.convert(ze),0);const je=N!==null?ae.get(N).__webglFramebuffer:null;z.bindFramebuffer(S.FRAMEBUFFER,je);const $e=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Ch(S,$e,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ie),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,xe),S.deleteBuffer(Ie),S.deleteSync($e),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ie=0){A.isTexture!==!0&&(Bn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-ie),q=Math.floor(A.image.width*re),xe=Math.floor(A.image.height*re),Te=X!==null?X.x:0,Ce=X!==null?X.y:0;R.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,ie,0,0,Te,Ce,q,xe),z.unbindTexture()};const Sl=S.createFramebuffer(),El=S.createFramebuffer();this.copyTextureToTexture=function(A,X,ie=null,re=null,q=0,xe=null){A.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],X=arguments[2],xe=arguments[3]||0,ie=null),xe===null&&(q!==0?(Bn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=q,q=0):xe=0);let Te,Ce,Le,Be,ze,Ie,je,$e,ut;const ct=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(ie!==null)Te=ie.max.x-ie.min.x,Ce=ie.max.y-ie.min.y,Le=ie.isBox3?ie.max.z-ie.min.z:1,Be=ie.min.x,ze=ie.min.y,Ie=ie.isBox3?ie.min.z:0;else{const zt=Math.pow(2,-q);Te=Math.floor(ct.width*zt),Ce=Math.floor(ct.height*zt),A.isDataArrayTexture?Le=ct.depth:A.isData3DTexture?Le=Math.floor(ct.depth*zt):Le=1,Be=0,ze=0,Ie=0}re!==null?(je=re.x,$e=re.y,ut=re.z):(je=0,$e=0,ut=0);const Ze=De.convert(X.format),Ne=De.convert(X.type);let xt;X.isData3DTexture?(R.setTexture3D(X,0),xt=S.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(R.setTexture2DArray(X,0),xt=S.TEXTURE_2D_ARRAY):(R.setTexture2D(X,0),xt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,X.unpackAlignment);const Qe=S.getParameter(S.UNPACK_ROW_LENGTH),Xt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Jn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ut=S.getParameter(S.UNPACK_SKIP_ROWS),Pi=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ct.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ct.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(S.UNPACK_SKIP_ROWS,ze),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ie);const rt=A.isDataArrayTexture||A.isData3DTexture,Bt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const zt=ae.get(A),wt=ae.get(X),Ct=ae.get(zt.__renderTarget),nr=ae.get(wt.__renderTarget);z.bindFramebuffer(S.READ_FRAMEBUFFER,Ct.__webglFramebuffer),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let Ln=0;Ln<Le;Ln++)rt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,q,Ie+Ln),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ae.get(X).__webglTexture,xe,ut+Ln)),S.blitFramebuffer(Be,ze,Te,Ce,je,$e,Te,Ce,S.DEPTH_BUFFER_BIT,S.NEAREST);z.bindFramebuffer(S.READ_FRAMEBUFFER,null),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||ae.has(A)){const zt=ae.get(A),wt=ae.get(X);z.bindFramebuffer(S.READ_FRAMEBUFFER,Sl),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,El);for(let Ct=0;Ct<Le;Ct++)rt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,zt.__webglTexture,q,Ie+Ct):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,zt.__webglTexture,q),Bt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,wt.__webglTexture,xe,ut+Ct):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,wt.__webglTexture,xe),q!==0?S.blitFramebuffer(Be,ze,Te,Ce,je,$e,Te,Ce,S.COLOR_BUFFER_BIT,S.NEAREST):Bt?S.copyTexSubImage3D(xt,xe,je,$e,ut+Ct,Be,ze,Te,Ce):S.copyTexSubImage2D(xt,xe,je,$e,Be,ze,Te,Ce);z.bindFramebuffer(S.READ_FRAMEBUFFER,null),z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(xt,xe,je,$e,ut,Te,Ce,Le,Ze,Ne,ct.data):X.isCompressedArrayTexture?S.compressedTexSubImage3D(xt,xe,je,$e,ut,Te,Ce,Le,Ze,ct.data):S.texSubImage3D(xt,xe,je,$e,ut,Te,Ce,Le,Ze,Ne,ct):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,xe,je,$e,Te,Ce,Ze,Ne,ct.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,xe,je,$e,ct.width,ct.height,Ze,ct.data):S.texSubImage2D(S.TEXTURE_2D,xe,je,$e,Te,Ce,Ze,Ne,ct);S.pixelStorei(S.UNPACK_ROW_LENGTH,Qe),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Xt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Jn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ut),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Pi),xe===0&&X.generateMipmaps&&S.generateMipmap(xt),z.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ie=null,re=null,q=0){return A.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,A=arguments[2],X=arguments[3],q=arguments[4]||0),Bn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ie,re,q)},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){L=0,C=0,N=null,z.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Xg=Lt;class jo extends Ri{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const r=this,o=new cl(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(F,P){if(F.nodeType!==1)return;const w=x(F);let b=!1,W=null;switch(F.nodeName){case"svg":P=g(F,P);break;case"style":r(F);break;case"g":P=g(F,P);break;case"path":P=g(F,P),F.hasAttribute("d")&&(W=i(F));break;case"rect":P=g(F,P),W=c(F);break;case"polygon":P=g(F,P),W=l(F);break;case"polyline":P=g(F,P),W=h(F);break;case"circle":P=g(F,P),W=u(F);break;case"ellipse":P=g(F,P),W=p(F);break;case"line":P=g(F,P),W=d(F);break;case"defs":b=!0;break;case"use":P=g(F,P);const de=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Q=F.viewportElement.getElementById(de);Q?n(Q,P):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}W&&(P.fill!==void 0&&P.fill!=="none"&&W.color.setStyle(P.fill,Xg),L(W,ve),I.push(W),W.userData={node:F,style:P});const ue=F.childNodes;for(let V=0;V<ue.length;V++){const de=ue[V];b&&de.nodeName!=="style"&&de.nodeName!=="defs"||n(de,P)}w&&(Y.pop(),Y.length>0?ve.copy(Y[Y.length-1]):ve.identity())}function i(F){const P=new yn,w=new he,b=new he,W=new he;let ue=!0,V=!1;const de=F.getAttribute("d");if(de===""||de==="none")return null;const Q=de.match(/[a-df-z][^a-df-z]*/ig);for(let J=0,S=Q.length;J<S;J++){const se=Q[J],ne=se.charAt(0),ce=se.slice(1).trim();ue===!0&&(V=!0,ue=!1);let z;switch(ne){case"M":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=2)w.x=z[U+0],w.y=z[U+1],b.x=w.x,b.y=w.y,U===0?P.moveTo(w.x,w.y):P.lineTo(w.x,w.y),U===0&&W.copy(w);break;case"H":z=m(ce);for(let U=0,ae=z.length;U<ae;U++)w.x=z[U],b.x=w.x,b.y=w.y,P.lineTo(w.x,w.y),U===0&&V===!0&&W.copy(w);break;case"V":z=m(ce);for(let U=0,ae=z.length;U<ae;U++)w.y=z[U],b.x=w.x,b.y=w.y,P.lineTo(w.x,w.y),U===0&&V===!0&&W.copy(w);break;case"L":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=2)w.x=z[U+0],w.y=z[U+1],b.x=w.x,b.y=w.y,P.lineTo(w.x,w.y),U===0&&V===!0&&W.copy(w);break;case"C":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=6)P.bezierCurveTo(z[U+0],z[U+1],z[U+2],z[U+3],z[U+4],z[U+5]),b.x=z[U+2],b.y=z[U+3],w.x=z[U+4],w.y=z[U+5],U===0&&V===!0&&W.copy(w);break;case"S":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=4)P.bezierCurveTo(_(w.x,b.x),_(w.y,b.y),z[U+0],z[U+1],z[U+2],z[U+3]),b.x=z[U+0],b.y=z[U+1],w.x=z[U+2],w.y=z[U+3],U===0&&V===!0&&W.copy(w);break;case"Q":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=4)P.quadraticCurveTo(z[U+0],z[U+1],z[U+2],z[U+3]),b.x=z[U+0],b.y=z[U+1],w.x=z[U+2],w.y=z[U+3],U===0&&V===!0&&W.copy(w);break;case"T":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=2){const R=_(w.x,b.x),E=_(w.y,b.y);P.quadraticCurveTo(R,E,z[U+0],z[U+1]),b.x=R,b.y=E,w.x=z[U+0],w.y=z[U+1],U===0&&V===!0&&W.copy(w)}break;case"A":z=m(ce,[3,4],7);for(let U=0,ae=z.length;U<ae;U+=7){if(z[U+5]==w.x&&z[U+6]==w.y)continue;const R=w.clone();w.x=z[U+5],w.y=z[U+6],b.x=w.x,b.y=w.y,o(P,z[U],z[U+1],z[U+2],z[U+3],z[U+4],R,w),U===0&&V===!0&&W.copy(w)}break;case"m":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=2)w.x+=z[U+0],w.y+=z[U+1],b.x=w.x,b.y=w.y,U===0?P.moveTo(w.x,w.y):P.lineTo(w.x,w.y),U===0&&W.copy(w);break;case"h":z=m(ce);for(let U=0,ae=z.length;U<ae;U++)w.x+=z[U],b.x=w.x,b.y=w.y,P.lineTo(w.x,w.y),U===0&&V===!0&&W.copy(w);break;case"v":z=m(ce);for(let U=0,ae=z.length;U<ae;U++)w.y+=z[U],b.x=w.x,b.y=w.y,P.lineTo(w.x,w.y),U===0&&V===!0&&W.copy(w);break;case"l":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=2)w.x+=z[U+0],w.y+=z[U+1],b.x=w.x,b.y=w.y,P.lineTo(w.x,w.y),U===0&&V===!0&&W.copy(w);break;case"c":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=6)P.bezierCurveTo(w.x+z[U+0],w.y+z[U+1],w.x+z[U+2],w.y+z[U+3],w.x+z[U+4],w.y+z[U+5]),b.x=w.x+z[U+2],b.y=w.y+z[U+3],w.x+=z[U+4],w.y+=z[U+5],U===0&&V===!0&&W.copy(w);break;case"s":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=4)P.bezierCurveTo(_(w.x,b.x),_(w.y,b.y),w.x+z[U+0],w.y+z[U+1],w.x+z[U+2],w.y+z[U+3]),b.x=w.x+z[U+0],b.y=w.y+z[U+1],w.x+=z[U+2],w.y+=z[U+3],U===0&&V===!0&&W.copy(w);break;case"q":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=4)P.quadraticCurveTo(w.x+z[U+0],w.y+z[U+1],w.x+z[U+2],w.y+z[U+3]),b.x=w.x+z[U+0],b.y=w.y+z[U+1],w.x+=z[U+2],w.y+=z[U+3],U===0&&V===!0&&W.copy(w);break;case"t":z=m(ce);for(let U=0,ae=z.length;U<ae;U+=2){const R=_(w.x,b.x),E=_(w.y,b.y);P.quadraticCurveTo(R,E,w.x+z[U+0],w.y+z[U+1]),b.x=R,b.y=E,w.x=w.x+z[U+0],w.y=w.y+z[U+1],U===0&&V===!0&&W.copy(w)}break;case"a":z=m(ce,[3,4],7);for(let U=0,ae=z.length;U<ae;U+=7){if(z[U+5]==0&&z[U+6]==0)continue;const R=w.clone();w.x+=z[U+5],w.y+=z[U+6],b.x=w.x,b.y=w.y,o(P,z[U],z[U+1],z[U+2],z[U+3],z[U+4],R,w),U===0&&V===!0&&W.copy(w)}break;case"Z":case"z":P.currentPath.autoClose=!0,P.currentPath.curves.length>0&&(w.copy(W),P.currentPath.currentPoint.copy(w),ue=!0);break;default:console.warn(se)}V=!1}return P}function r(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let P=0;P<F.sheet.cssRules.length;P++){const w=F.sheet.cssRules[P];if(w.type!==1)continue;const b=w.selectorText.split(/,/gm).filter(Boolean).map(W=>W.trim());for(let W=0;W<b.length;W++){const ue=Object.fromEntries(Object.entries(w.style).filter(([,V])=>V!==""));B[b[W]]=Object.assign(B[b[W]]||{},ue)}}}function o(F,P,w,b,W,ue,V,de){if(P==0||w==0){F.lineTo(de.x,de.y);return}b=b*Math.PI/180,P=Math.abs(P),w=Math.abs(w);const Q=(V.x-de.x)/2,J=(V.y-de.y)/2,S=Math.cos(b)*Q+Math.sin(b)*J,se=-Math.sin(b)*Q+Math.cos(b)*J;let ne=P*P,ce=w*w;const z=S*S,U=se*se,ae=z/ne+U/ce;if(ae>1){const Ge=Math.sqrt(ae);P=Ge*P,w=Ge*w,ne=P*P,ce=w*w}const R=ne*U+ce*z,E=(ne*ce-R)/R;let Z=Math.sqrt(Math.max(0,E));W===ue&&(Z=-Z);const oe=Z*P*se/w,fe=-Z*w*S/P,le=Math.cos(b)*oe-Math.sin(b)*fe+(V.x+de.x)/2,Ae=Math.sin(b)*oe+Math.cos(b)*fe+(V.y+de.y)/2,ye=a(1,0,(S-oe)/P,(se-fe)/w),be=a((S-oe)/P,(se-fe)/w,(-S-oe)/P,(-se-fe)/w)%(Math.PI*2);F.currentPath.absellipse(le,Ae,P,w,ye,ye+be,ue===0,b)}function a(F,P,w,b){const W=F*w+P*b,ue=Math.sqrt(F*F+P*P)*Math.sqrt(w*w+b*b);let V=Math.acos(Math.max(-1,Math.min(1,W/ue)));return F*b-P*w<0&&(V=-V),V}function c(F){const P=v(F.getAttribute("x")||0),w=v(F.getAttribute("y")||0),b=v(F.getAttribute("rx")||F.getAttribute("ry")||0),W=v(F.getAttribute("ry")||F.getAttribute("rx")||0),ue=v(F.getAttribute("width")),V=v(F.getAttribute("height")),de=1-.551915024494,Q=new yn;return Q.moveTo(P+b,w),Q.lineTo(P+ue-b,w),(b!==0||W!==0)&&Q.bezierCurveTo(P+ue-b*de,w,P+ue,w+W*de,P+ue,w+W),Q.lineTo(P+ue,w+V-W),(b!==0||W!==0)&&Q.bezierCurveTo(P+ue,w+V-W*de,P+ue-b*de,w+V,P+ue-b,w+V),Q.lineTo(P+b,w+V),(b!==0||W!==0)&&Q.bezierCurveTo(P+b*de,w+V,P,w+V-W*de,P,w+V-W),Q.lineTo(P,w+W),(b!==0||W!==0)&&Q.bezierCurveTo(P,w+W*de,P+b*de,w,P+b,w),Q}function l(F){function P(ue,V,de){const Q=v(V),J=v(de);W===0?b.moveTo(Q,J):b.lineTo(Q,J),W++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new yn;let W=0;return F.getAttribute("points").replace(w,P),b.currentPath.autoClose=!0,b}function h(F){function P(ue,V,de){const Q=v(V),J=v(de);W===0?b.moveTo(Q,J):b.lineTo(Q,J),W++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new yn;let W=0;return F.getAttribute("points").replace(w,P),b.currentPath.autoClose=!1,b}function u(F){const P=v(F.getAttribute("cx")||0),w=v(F.getAttribute("cy")||0),b=v(F.getAttribute("r")||0),W=new yi;W.absarc(P,w,b,0,Math.PI*2);const ue=new yn;return ue.subPaths.push(W),ue}function p(F){const P=v(F.getAttribute("cx")||0),w=v(F.getAttribute("cy")||0),b=v(F.getAttribute("rx")||0),W=v(F.getAttribute("ry")||0),ue=new yi;ue.absellipse(P,w,b,W,0,Math.PI*2);const V=new yn;return V.subPaths.push(ue),V}function d(F){const P=v(F.getAttribute("x1")||0),w=v(F.getAttribute("y1")||0),b=v(F.getAttribute("x2")||0),W=v(F.getAttribute("y2")||0),ue=new yn;return ue.moveTo(P,w),ue.lineTo(b,W),ue.currentPath.autoClose=!1,ue}function g(F,P){P=Object.assign({},P);let w={};if(F.hasAttribute("class")){const V=F.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<V.length;de++)w=Object.assign(w,B["."+V[de]])}F.hasAttribute("id")&&(w=Object.assign(w,B["#"+F.getAttribute("id")]));function b(V,de,Q){Q===void 0&&(Q=function(S){return S.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),S}),F.hasAttribute(V)&&(P[de]=Q(F.getAttribute(V))),w[V]&&(P[de]=Q(w[V])),F.style&&F.style[V]!==""&&(P[de]=Q(F.style[V]))}function W(V){return Math.max(0,Math.min(1,v(V)))}function ue(V){return Math.max(0,v(V))}return b("fill","fill"),b("fill-opacity","fillOpacity",W),b("fill-rule","fillRule"),b("opacity","opacity",W),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",W),b("stroke-width","strokeWidth",ue),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",ue),b("visibility","visibility"),P}function _(F,P){return F-(P-F)}function m(F,P,w){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);const b={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},W=0,ue=1,V=2,de=3;let Q=W,J=!0,S="",se="";const ne=[];function ce(R,E,Z){const oe=new SyntaxError('Unexpected character "'+R+'" at index '+E+".");throw oe.partial=Z,oe}function z(){S!==""&&(se===""?ne.push(Number(S)):ne.push(Number(S)*Math.pow(10,Number(se)))),S="",se=""}let U;const ae=F.length;for(let R=0;R<ae;R++){if(U=F[R],Array.isArray(P)&&P.includes(ne.length%w)&&b.FLAGS.test(U)){Q=ue,S=U,z();continue}if(Q===W){if(b.WHITESPACE.test(U))continue;if(b.DIGIT.test(U)||b.SIGN.test(U)){Q=ue,S=U;continue}if(b.POINT.test(U)){Q=V,S=U;continue}b.COMMA.test(U)&&(J&&ce(U,R,ne),J=!0)}if(Q===ue){if(b.DIGIT.test(U)){S+=U;continue}if(b.POINT.test(U)){S+=U,Q=V;continue}if(b.EXP.test(U)){Q=de;continue}b.SIGN.test(U)&&S.length===1&&b.SIGN.test(S[0])&&ce(U,R,ne)}if(Q===V){if(b.DIGIT.test(U)){S+=U;continue}if(b.EXP.test(U)){Q=de;continue}b.POINT.test(U)&&S[S.length-1]==="."&&ce(U,R,ne)}if(Q===de){if(b.DIGIT.test(U)){se+=U;continue}if(b.SIGN.test(U)){if(se===""){se+=U;continue}se.length===1&&b.SIGN.test(se)&&ce(U,R,ne)}}b.WHITESPACE.test(U)?(z(),Q=W,J=!1):b.COMMA.test(U)?(z(),Q=W,J=!0):b.SIGN.test(U)?(z(),Q=ue,S=U):b.POINT.test(U)?(z(),Q=V,S=U):ce(U,R,ne)}return z(),ne}const f=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(F){let P="px";if(typeof F=="string"||F instanceof String)for(let b=0,W=f.length;b<W;b++){const ue=f[b];if(F.endsWith(ue)){P=ue,F=F.substring(0,F.length-ue.length);break}}let w;return P==="px"&&t.defaultUnit!=="px"?w=M.in[t.defaultUnit]/t.defaultDPI:(w=M[P][t.defaultUnit],w<0&&(w=M[P].in*t.defaultDPI)),w*parseFloat(F)}function x(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;const P=D(F);return Y.length>0&&P.premultiply(Y[Y.length-1]),ve.copy(P),Y.push(P),P}function D(F){const P=new Oe,w=j;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){const b=v(F.getAttribute("x")),W=v(F.getAttribute("y"));P.translate(b,W)}if(F.hasAttribute("transform")){const b=F.getAttribute("transform").split(")");for(let W=b.length-1;W>=0;W--){const ue=b[W].trim();if(ue==="")continue;const V=ue.indexOf("("),de=ue.length;if(V>0&&V<de){const Q=ue.slice(0,V),J=m(ue.slice(V+1));switch(w.identity(),Q){case"translate":if(J.length>=1){const S=J[0];let se=0;J.length>=2&&(se=J[1]),w.translate(S,se)}break;case"rotate":if(J.length>=1){let S=0,se=0,ne=0;S=J[0]*Math.PI/180,J.length>=3&&(se=J[1],ne=J[2]),te.makeTranslation(-se,-ne),$.makeRotation(S),k.multiplyMatrices($,te),te.makeTranslation(se,ne),w.multiplyMatrices(te,k)}break;case"scale":if(J.length>=1){const S=J[0];let se=S;J.length>=2&&(se=J[1]),w.scale(S,se)}break;case"skewX":J.length===1&&w.set(1,Math.tan(J[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":J.length===1&&w.set(1,0,0,Math.tan(J[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":J.length===6&&w.set(J[0],J[2],J[4],J[1],J[3],J[5],0,0,1);break}}P.premultiply(w)}}return P}function L(F,P){function w(V){me.set(V.x,V.y,1).applyMatrix3(P),V.set(me.x,me.y)}function b(V){const de=V.xRadius,Q=V.yRadius,J=Math.cos(V.aRotation),S=Math.sin(V.aRotation),se=new G(de*J,de*S,0),ne=new G(-Q*S,Q*J,0),ce=se.applyMatrix3(P),z=ne.applyMatrix3(P),U=j.set(ce.x,z.x,0,ce.y,z.y,0,0,0,1),ae=te.copy(U).invert(),Z=$.copy(ae).transpose().multiply(ae).elements,oe=O(Z[0],Z[1],Z[4]),fe=Math.sqrt(oe.rt1),le=Math.sqrt(oe.rt2);if(V.xRadius=1/fe,V.yRadius=1/le,V.aRotation=Math.atan2(oe.sn,oe.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ye=te.set(fe,0,0,0,le,0,0,0,1),be=$.set(oe.cs,oe.sn,0,-oe.sn,oe.cs,0,0,0,1),Ge=ye.multiply(be).multiply(U),ge=we=>{const{x:Ue,y:Fe}=new G(Math.cos(we),Math.sin(we),0).applyMatrix3(Ge);return Math.atan2(Fe,Ue)};V.aStartAngle=ge(V.aStartAngle),V.aEndAngle=ge(V.aEndAngle),C(P)&&(V.aClockwise=!V.aClockwise)}}function W(V){const de=T(P),Q=y(P);V.xRadius*=de,V.yRadius*=Q;const J=de>Number.EPSILON?Math.atan2(P.elements[1],P.elements[0]):Math.atan2(-P.elements[3],P.elements[4]);V.aRotation+=J,C(P)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const ue=F.subPaths;for(let V=0,de=ue.length;V<de;V++){const J=ue[V].curves;for(let S=0;S<J.length;S++){const se=J[S];se.isLineCurve?(w(se.v1),w(se.v2)):se.isCubicBezierCurve?(w(se.v0),w(se.v1),w(se.v2),w(se.v3)):se.isQuadraticBezierCurve?(w(se.v0),w(se.v1),w(se.v2)):se.isEllipseCurve&&(pe.set(se.aX,se.aY),w(pe),se.aX=pe.x,se.aY=pe.y,N(P)?b(se):W(se))}}}function C(F){const P=F.elements;return P[0]*P[4]-P[1]*P[3]<0}function N(F){const P=F.elements,w=P[0]*P[3]+P[1]*P[4];if(w===0)return!1;const b=T(F),W=y(F);return Math.abs(w/(b*W))>Number.EPSILON}function T(F){const P=F.elements;return Math.sqrt(P[0]*P[0]+P[1]*P[1])}function y(F){const P=F.elements;return Math.sqrt(P[3]*P[3]+P[4]*P[4])}function O(F,P,w){let b,W,ue,V,de;const Q=F+w,J=F-w,S=Math.sqrt(J*J+4*P*P);return Q>0?(b=.5*(Q+S),de=1/b,W=F*de*w-P*de*P):Q<0?W=.5*(Q-S):(b=.5*S,W=-.5*S),J>0?ue=J+S:ue=J-S,Math.abs(ue)>2*Math.abs(P)?(de=-2*P/ue,V=1/Math.sqrt(1+de*de),ue=de*V):Math.abs(P)===0?(ue=1,V=0):(de=-.5*ue/P,ue=1/Math.sqrt(1+de*de),V=de*ue),J>0&&(de=ue,ue=-V,V=de),{rt1:b,rt2:W,cs:ue,sn:V}}const I=[],B={},Y=[],j=new Oe,te=new Oe,$=new Oe,k=new Oe,pe=new he,me=new G,ve=new Oe,Pe=new DOMParser().parseFromString(e,"image/svg+xml");return n(Pe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:I,xml:Pe.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(_,m,f,M){const v=_.x,x=m.x,D=f.x,L=M.x,C=_.y,N=m.y,T=f.y,y=M.y,O=(L-D)*(C-T)-(y-T)*(v-D),I=(x-v)*(C-T)-(N-C)*(v-D),B=(y-T)*(x-v)-(L-D)*(N-C),Y=O/B,j=I/B;if(B===0&&O!==0||Y<=0||Y>=1||j<0||j>1)return null;if(O===0&&B===0){for(let te=0;te<2;te++)if(o(te===0?f:M,_,m),i.loc==n.ORIGIN){const $=te===0?f:M;return{x:$.x,y:$.y,t:i.t}}else if(i.loc==n.BETWEEN){const $=+(v+i.t*(x-v)).toPrecision(10),k=+(C+i.t*(N-C)).toPrecision(10);return{x:$,y:k,t:i.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?f:M,_,m),i.loc==n.ORIGIN){const pe=k===0?f:M;return{x:pe.x,y:pe.y,t:i.t}}const te=+(v+Y*(x-v)).toPrecision(10),$=+(C+Y*(N-C)).toPrecision(10);return{x:te,y:$,t:Y}}}function o(_,m,f){const M=f.x-m.x,v=f.y-m.y,x=_.x-m.x,D=_.y-m.y,L=M*D-x*v;if(_.x===m.x&&_.y===m.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===f.x&&_.y===f.y){i.loc=n.DESTINATION,i.t=1;return}if(L<-Number.EPSILON){i.loc=n.LEFT;return}if(L>Number.EPSILON){i.loc=n.RIGHT;return}if(M*x<0||v*D<0){i.loc=n.BEHIND;return}if(Math.sqrt(M*M+v*v)<Math.sqrt(x*x+D*D)){i.loc=n.BEYOND;return}let C;M!==0?C=x/M:C=D/v,i.loc=n.BETWEEN,i.t=C}function a(_,m){const f=[],M=[];for(let v=1;v<_.length;v++){const x=_[v-1],D=_[v];for(let L=1;L<m.length;L++){const C=m[L-1],N=m[L],T=r(x,D,C,N);T!==null&&f.find(y=>y.t<=T.t+Number.EPSILON&&y.t>=T.t-Number.EPSILON)===void 0&&(f.push(T),M.push(new he(T.x,T.y)))}}return M}function c(_,m,f){const M=new he;m.getCenter(M);const v=[];return f.forEach(x=>{x.boundingBox.containsPoint(M)&&a(_,x.points).forEach(L=>{v.push({identifier:x.identifier,isCW:x.isCW,point:L})})}),v.sort((x,D)=>x.point.x-D.point.x),v}function l(_,m,f,M,v){(v==null||v==="")&&(v="nonzero");const x=new he;_.boundingBox.getCenter(x);const D=[new he(f,x.y),new he(M,x.y)],L=c(D,_.boundingBox,m);L.sort((I,B)=>I.point.x-B.point.x);const C=[],N=[];L.forEach(I=>{I.identifier===_.identifier?C.push(I):N.push(I)});const T=C[0].point.x,y=[];let O=0;for(;O<N.length&&N[O].point.x<T;)y.length>0&&y[y.length-1]===N[O].identifier?y.pop():y.push(N[O].identifier),O++;if(y.push(_.identifier),v==="evenodd"){const I=y.length%2===0,B=y[y.length-2];return{identifier:_.identifier,isHole:I,for:B}}else if(v==="nonzero"){let I=!0,B=null,Y=null;for(let j=0;j<y.length;j++){const te=y[j];I?(Y=m[te].isCW,I=!1,B=te):Y!==m[te].isCW&&(Y=m[te].isCW,I=!0)}return{identifier:_.identifier,isHole:I,for:B}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let h=999999999,u=-999999999,p=e.subPaths.map(_=>{const m=_.getPoints();let f=-999999999,M=999999999,v=-999999999,x=999999999;for(let D=0;D<m.length;D++){const L=m[D];L.y>f&&(f=L.y),L.y<M&&(M=L.y),L.x>v&&(v=L.x),L.x<x&&(x=L.x)}return u<=v&&(u=v+1),h>=x&&(h=x-1),{curves:_.curves,points:m,isCW:Wn.isClockWise(m),identifier:-1,boundingBox:new sf(new he(x,M),new he(v,f))}});p=p.filter(_=>_.points.length>1);for(let _=0;_<p.length;_++)p[_].identifier=_;const d=p.map(_=>l(_,p,h,u,e.userData?e.userData.style.fillRule:void 0)),g=[];return p.forEach(_=>{if(!d[_.identifier].isHole){const f=new Wi;f.curves=_.curves,d.filter(v=>v.isHole&&v.for===_.identifier).forEach(v=>{const x=p[v.identifier],D=new yi;D.curves=x.curves,f.holes.push(D)}),g.push(f)}}),g}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){const r=[],o=[],a=[];if(jo.pointsToStrokeWithBuffers(e,t,n,i,r,o,a)===0)return null;const c=new Tt;return c.setAttribute("position",new ht(r,3)),c.setAttribute("normal",new ht(o,3)),c.setAttribute("uv",new ht(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,i,r,o,a,c){const l=new he,h=new he,u=new he,p=new he,d=new he,g=new he,_=new he,m=new he,f=new he,M=new he,v=new he,x=new he,D=new he,L=new he,C=new he,N=new he,T=new he;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,e=J(e);const y=e.length;if(y<2)return 0;const O=e[0].equals(e[y-1]);let I,B=e[0],Y;const j=t.strokeWidth/2,te=1/(y-1);let $=0,k,pe,me,ve,Pe=!1,ke=0,F=c*3,P=c*2;w(e[0],e[1],l).multiplyScalar(j),m.copy(e[0]).sub(l),f.copy(e[0]).add(l),M.copy(m),v.copy(f);for(let S=1;S<y;S++){I=e[S],S===y-1?O?Y=e[1]:Y=void 0:Y=e[S+1];const se=l;if(w(B,I,se),u.copy(se).multiplyScalar(j),x.copy(I).sub(u),D.copy(I).add(u),k=$+te,pe=!1,Y!==void 0){w(I,Y,h),u.copy(h).multiplyScalar(j),L.copy(I).sub(u),C.copy(I).add(u),me=!0,u.subVectors(Y,B),se.dot(u)<0&&(me=!1),S===1&&(Pe=me),u.subVectors(Y,I),u.normalize();const ne=Math.abs(se.dot(u));if(ne>Number.EPSILON){const ce=j/ne;u.multiplyScalar(-ce),p.subVectors(I,B),d.copy(p).setLength(ce).add(u),N.copy(d).negate();const z=d.length(),U=p.length();p.divideScalar(U),g.subVectors(Y,I);const ae=g.length();switch(g.divideScalar(ae),p.dot(N)<U&&g.dot(N)<ae&&(pe=!0),T.copy(d).add(I),N.add(I),ve=!1,pe?me?(C.copy(N),D.copy(N)):(L.copy(N),x.copy(N)):ue(),t.strokeLineJoin){case"bevel":V(me,pe,k);break;case"round":de(me,pe),me?W(I,x,L,k,0):W(I,C,D,k,1);break;case"miter":case"miter-clip":default:const R=j*t.strokeMiterLimit/z;if(R<1)if(t.strokeLineJoin!=="miter-clip"){V(me,pe,k);break}else de(me,pe),me?(g.subVectors(T,x).multiplyScalar(R).add(x),_.subVectors(T,L).multiplyScalar(R).add(L),b(x,k,0),b(g,k,0),b(I,k,.5),b(I,k,.5),b(g,k,0),b(_,k,0),b(I,k,.5),b(_,k,0),b(L,k,0)):(g.subVectors(T,D).multiplyScalar(R).add(D),_.subVectors(T,C).multiplyScalar(R).add(C),b(D,k,1),b(g,k,1),b(I,k,.5),b(I,k,.5),b(g,k,1),b(_,k,1),b(I,k,.5),b(_,k,1),b(C,k,1));else pe?(me?(b(f,$,1),b(m,$,0),b(T,k,0),b(f,$,1),b(T,k,0),b(N,k,1)):(b(f,$,1),b(m,$,0),b(T,k,1),b(m,$,0),b(N,k,0),b(T,k,1)),me?L.copy(T):C.copy(T)):me?(b(x,k,0),b(T,k,0),b(I,k,.5),b(I,k,.5),b(T,k,0),b(L,k,0)):(b(D,k,1),b(T,k,1),b(I,k,.5),b(I,k,.5),b(T,k,1),b(C,k,1)),ve=!0;break}}else ue()}else ue();!O&&S===y-1&&Q(e[0],M,v,me,!0,$),$=k,B=I,m.copy(L),f.copy(C)}if(!O)Q(I,x,D,me,!1,k);else if(pe&&r){let S=T,se=N;Pe!==me&&(S=N,se=T),me?(ve||Pe)&&(se.toArray(r,0*3),se.toArray(r,3*3),ve&&S.toArray(r,1*3)):(ve||!Pe)&&(se.toArray(r,1*3),se.toArray(r,3*3),ve&&S.toArray(r,0*3))}return ke;function w(S,se,ne){return ne.subVectors(se,S),ne.set(-ne.y,ne.x).normalize()}function b(S,se,ne){r&&(r[F]=S.x,r[F+1]=S.y,r[F+2]=0,o&&(o[F]=0,o[F+1]=0,o[F+2]=1),F+=3,a&&(a[P]=se,a[P+1]=ne,P+=2)),ke+=3}function W(S,se,ne,ce,z){l.copy(se).sub(S).normalize(),h.copy(ne).sub(S).normalize();let U=Math.PI;const ae=l.dot(h);Math.abs(ae)<1&&(U=Math.abs(Math.acos(ae))),U/=n,u.copy(se);for(let R=0,E=n-1;R<E;R++)p.copy(u).rotateAround(S,U),b(u,ce,z),b(p,ce,z),b(S,ce,.5),u.copy(p);b(p,ce,z),b(ne,ce,z),b(S,ce,.5)}function ue(){b(f,$,1),b(m,$,0),b(x,k,0),b(f,$,1),b(x,k,0),b(D,k,1)}function V(S,se,ne){se?S?(b(f,$,1),b(m,$,0),b(x,k,0),b(f,$,1),b(x,k,0),b(N,k,1),b(x,ne,0),b(L,ne,0),b(N,ne,.5)):(b(f,$,1),b(m,$,0),b(D,k,1),b(m,$,0),b(N,k,0),b(D,k,1),b(D,ne,1),b(N,ne,0),b(C,ne,1)):S?(b(x,ne,0),b(L,ne,0),b(I,ne,.5)):(b(D,ne,1),b(C,ne,0),b(I,ne,.5))}function de(S,se){se&&(S?(b(f,$,1),b(m,$,0),b(x,k,0),b(f,$,1),b(x,k,0),b(N,k,1),b(x,$,0),b(I,k,.5),b(N,k,1),b(I,k,.5),b(L,$,0),b(N,k,1)):(b(f,$,1),b(m,$,0),b(D,k,1),b(m,$,0),b(N,k,0),b(D,k,1),b(D,$,1),b(N,k,0),b(I,k,.5),b(I,k,.5),b(N,k,0),b(C,$,1)))}function Q(S,se,ne,ce,z,U){switch(t.strokeLineCap){case"round":z?W(S,ne,se,U,.5):W(S,se,ne,U,.5);break;case"square":if(z)l.subVectors(se,S),h.set(l.y,-l.x),u.addVectors(l,h).add(S),p.subVectors(h,l).add(S),ce?(u.toArray(r,1*3),p.toArray(r,0*3),p.toArray(r,3*3)):(u.toArray(r,1*3),a[3*2+1]===1?p.toArray(r,3*3):u.toArray(r,3*3),p.toArray(r,0*3));else{l.subVectors(ne,S),h.set(l.y,-l.x),u.addVectors(l,h).add(S),p.subVectors(h,l).add(S);const ae=r.length;ce?(u.toArray(r,ae-1*3),p.toArray(r,ae-2*3),p.toArray(r,ae-4*3)):(p.toArray(r,ae-2*3),u.toArray(r,ae-1*3),p.toArray(r,ae-4*3))}break}}function J(S){let se=!1;for(let ce=1,z=S.length-1;ce<z;ce++)if(S[ce].distanceTo(S[ce+1])<i){se=!0;break}if(!se)return S;const ne=[];ne.push(S[0]);for(let ce=1,z=S.length-1;ce<z;ce++)S[ce].distanceTo(S[ce+1])>=i&&ne.push(S[ce]);return ne.push(S[S.length-1]),ne}}}const dc={type:"change"},Zo={type:"start"},gl={type:"end"},ws=new zo,pc=new Mn,qg=Math.cos(70*ks.DEG2RAD),pt=new G,Pt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fr=1e-6;class Yg extends cf{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Rn,this._lastTargetPosition=new G,this._quat=new Rn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new za,this._sphericalDelta=new za,this._scale=1,this._panOffset=new G,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new G,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zg.bind(this),this._onPointerDown=jg.bind(this),this._onPointerUp=Kg.bind(this),this._onContextMenu=i_.bind(this),this._onMouseWheel=Qg.bind(this),this._onKeyDown=e_.bind(this),this._onTouchStart=t_.bind(this),this._onTouchMove=n_.bind(this),this._onMouseDown=Jg.bind(this),this._onMouseMove=$g.bind(this),this._interceptControlDown=s_.bind(this),this._interceptControlUp=r_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dc),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Pt:n>Math.PI&&(n-=Pt),i<-Math.PI?i+=Pt:i>Math.PI&&(i-=Pt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<qg?this.object.lookAt(this.target):(pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(pc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fr||this._lastTargetPosition.distanceToSquared(this.target)>Fr?(this.dispatchEvent(dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pt/60*this.autoRotateSpeed*e:Pt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;pt.copy(i).sub(this.target);let r=pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Zg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Kg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gl),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Jg(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=it.DOLLY;break;case _i.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}break;case _i.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Zo)}function $g(s){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Qg(s){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(s.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(gl))}function e_(s){this.enabled!==!1&&this._handleKeyDown(s)}function t_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=it.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=it.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Zo)}function n_(s){switch(this._trackPointer(s),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=it.NONE}}function i_(s){this.enabled!==!1&&s.preventDefault()}function s_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mc={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Xs{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new m_(e)}),this.register(function(e){return new g_(e)}),this.register(function(e){return new y_(e)}),this.register(function(e){return new M_(e)}),this.register(function(e){return new S_(e)}),this.register(function(e){return new E_(e)}),this.register(function(e){return new __(e)}),this.register(function(e){return new x_(e)}),this.register(function(e){return new v_(e)}),this.register(function(e){return new b_(e)}),this.register(function(e){return new T_(e)}),this.register(function(e){return new w_(e)}),this.register(function(e){return new A_(e)}),this.register(function(e){return new R_(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const r=new p_,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Or="KHR_mesh_quantization",Ot={};Ot[Ht]=Ye.NEAREST;Ot[Ic]=Ye.NEAREST_MIPMAP_NEAREST;Ot[Fi]=Ye.NEAREST_MIPMAP_LINEAR;Ot[Kt]=Ye.LINEAR;Ot[Rs]=Ye.LINEAR_MIPMAP_NEAREST;Ot[En]=Ye.LINEAR_MIPMAP_LINEAR;Ot[Sn]=Ye.CLAMP_TO_EDGE;Ot[Fs]=Ye.REPEAT;Ot[Os]=Ye.MIRRORED_REPEAT;const _c={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},o_=new Ve,xc=12,a_=1179937895,c_=2,vc=8,l_=1313821514,h_=5130562;function Bi(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function u_(s){return new TextEncoder().encode(s).buffer}function f_(s){return Bi(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function d_(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=ks.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function _l(s){return Math.ceil(s/4)*4}function Br(s,e=0){const t=_l(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function yc(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Mc(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class p_{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+qs}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,r=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,c=i.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(c);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){const p=new FileReader;p.readAsArrayBuffer(l),p.onloadend=function(){const d=Br(p.result),g=new DataView(new ArrayBuffer(vc));g.setUint32(0,d.byteLength,!0),g.setUint32(4,h_,!0);const _=Br(u_(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(vc));m.setUint32(0,_.byteLength,!0),m.setUint32(4,l_,!0);const f=new ArrayBuffer(xc),M=new DataView(f);M.setUint32(0,a_,!0),M.setUint32(4,c_,!0);const v=xc+m.byteLength+_.byteLength+g.byteLength+d.byteLength;M.setUint32(8,v,!0);const x=new Blob([f,m,_,g,d],{type:"application/octet-stream"}),D=new FileReader;D.readAsArrayBuffer(x),D.onloadend=function(){t(D.result)}}}else if(o.buffers&&o.buffers.length>0){const p=new FileReader;p.readAsDataURL(l),p.onloadend=function(){const d=p.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new G;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new G;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===Lt?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof Tr&&(e=await this.decompressTextureAsync(e)),t instanceof Tr&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),c=yc();c.width=o,c.height=a;const l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);const h=l.getImageData(0,0,o,a);if(i){l.drawImage(i,0,0,o,a);const d=n(e),g=l.getImageData(0,0,o,a).data;for(let _=2;_<g.length;_+=4)h.data[_]=d(g[_]/256)*256}if(r){l.drawImage(r,0,0,o,a);const d=n(t),g=l.getImageData(0,0,o,a).data;for(let _=1;_<g.length;_+=4)h.data[_]=d(g[_]/256)*256}l.putImageData(h,0,0);const p=(e||t).clone();return p.source=new js(c),p.colorSpace=ln,p.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),p}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Ye.BYTE:case Ye.UNSIGNED_BYTE:a=1;break;case Ye.SHORT:case Ye.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;r===Ye.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const l=_l(i*c),h=new DataView(new ArrayBuffer(l));let u=0;for(let g=n;g<n+i;g++){for(let _=0;_<e.itemSize;_++){let m;e.itemSize>4?m=e.array[g*e.itemSize+_]:(_===0?m=e.getX(g):_===1?m=e.getY(g):_===2?m=e.getZ(g):_===3&&(m=e.getW(g)),e.normalized===!0&&(m=ks.normalize(m,e.array))),t===Ye.FLOAT?h.setFloat32(u,m,!0):t===Ye.INT?h.setInt32(u,m,!0):t===Ye.UNSIGNED_INT?h.setUint32(u,m,!0):t===Ye.SHORT?h.setInt16(u,m,!0):t===Ye.UNSIGNED_SHORT?h.setUint16(u,m,!0):t===Ye.BYTE?h.setInt8(u,m):t===Ye.UNSIGNED_BYTE&&h.setUint8(u,m),u+=a}u%c!==0&&(u+=c-u%c)}const p={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(p.target=r),r===Ye.ARRAY_BUFFER&&(p.byteStride=c),this.byteOffset+=l,o.bufferViews.push(p),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=Br(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=Ye.FLOAT;else if(e.array.constructor===Int32Array)a=Ye.INT;else if(e.array.constructor===Uint32Array)a=Ye.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Ye.SHORT;else if(e.array.constructor===Uint16Array)a=Ye.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Ye.BYTE;else if(e.array.constructor===Uint8Array)a=Ye.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const c=d_(e,n,i);let l;t!==void 0&&(l=e===t.index?Ye.ELEMENT_ARRAY_BUFFER:Ye.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,i,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const p={mimeType:i},d=yc();d.width=Math.min(e.width,c.maxTextureSize),d.height=Math.min(e.height,c.maxTextureSize);const g=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,d.height),g.scale(1,-1)),e.data!==void 0){t!==Vt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let f=0;f<m.length;f+=4)m[f+0]=e.data[f+0],m[f+1]=e.data[f+1],m[f+2]=e.data[f+2],m[f+3]=e.data[f+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(Mc(d,i).then(m=>r.processBufferViewImage(m)).then(m=>{p.bufferView=m})):d.toDataURL!==void 0?p.uri=d.toDataURL(i):l.push(Mc(d,i).then(m=>new FileReader().readAsDataURL(m)).then(m=>{p.uri=m}));const _=a.images.push(p)-1;return h[u]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Ot[e.magFilter],minFilter:Ot[e.minFilter],wrapS:Ot[e.wrapS],wrapT:Ot[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Tr&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(e,a)});const c=r.textures.push(a)-1;return i.textures.set(e,c),c}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Bi(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),i.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),i.emissiveTexture=l}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===vt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,i)});const o=n.materials.push(i)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,D=e.material.length;x<D;x++)i.push(e.material[x].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=Ye.LINES:e.isLineLoop?a=Ye.LINE_LOOP:e.isLine?a=Ye.LINE_STRIP:e.isPoints?a=Ye.POINTS:a=e.material.wireframe?Ye.LINES:Ye.TRIANGLES;const c={},l={},h=[],u=[],p={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let g=null;for(let x in o.attributes){if(x.slice(0,5)==="morph")continue;const D=o.attributes[x];if(x=p[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(D))){l[x]=t.attributes.get(this.getUID(D));continue}g=null;const C=D.array;x==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new dt(new Uint16Array(C),D.itemSize,D.normalized)):(C instanceof Uint32Array||C instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),g=Xs.Utils.toFloat32BufferAttribute(D));const N=this.processAccessor(g||D,o);N!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,D),l[x]=N,t.attributes.set(this.getUID(D),N))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],D=[],L={};if(e.morphTargetDictionary!==void 0)for(const C in e.morphTargetDictionary)L[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){const N={};let T=!1;for(const y in o.morphAttributes){if(y!=="position"&&y!=="normal"){T||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),T=!0);continue}const O=o.morphAttributes[y][C],I=y.toUpperCase(),B=o.attributes[y];if(t.attributes.has(this.getUID(O,!0))){N[I]=t.attributes.get(this.getUID(O,!0));continue}const Y=O.clone();if(!o.morphTargetsRelative)for(let j=0,te=O.count;j<te;j++)for(let $=0;$<O.itemSize;$++)$===0&&Y.setX(j,O.getX(j)-B.getX(j)),$===1&&Y.setY(j,O.getY(j)-B.getY(j)),$===2&&Y.setZ(j,O.getZ(j)-B.getZ(j)),$===3&&Y.setW(j,O.getW(j)-B.getW(j));N[I]=this.processAccessor(Y,o),t.attributes.set(this.getUID(B,!0),N[I])}u.push(N),x.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&D.push(L[C])}c.weights=x,D.length>0&&(c.extras={},c.extras.targetNames=D)}const _=Array.isArray(e.material);if(_&&o.groups.length===0)return null;let m=!1;if(_&&o.index===null){const x=[];for(let D=0,L=o.attributes.position.count;D<L;D++)x[D]=D;o.setIndex(x),m=!0}const f=_?e.material:[e.material],M=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,D=M.length;x<D;x++){const L={mode:a,attributes:l};if(this.serializeUserData(o,L),u.length>0&&(L.targets=u),o.index!==null){let N=this.getUID(o.index);(M[x].start!==void 0||M[x].count!==void 0)&&(N+=":"+M[x].start+":"+M[x].count),t.attributes.has(N)?L.indices=t.attributes.get(N):(L.indices=this.processAccessor(o.index,o,M[x].start,M[x].count),t.attributes.set(N,L.indices)),L.indices===null&&delete L.indices}const C=await this.processMaterialAsync(f[M[x].materialIndex]);C!==null&&(L.material=C),h.push(L)}m===!0&&o.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(e,c)});const v=n.meshes.push(c)-1;return t.meshes.set(r,v),v}detectMeshQuantization(e,t){if(this.extensionsUsed[Or])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];mc[i]&&mc[i].includes(n)&&(this.extensionsUsed[Or]=!0,this.extensionsRequired[Or]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:ks.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Xs.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){const l=r[c],h=Ke.parseTrackName(l.name);let u=Ke.findNode(t,h.nodeName);const p=_c[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!p){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}const d=1;let g=l.values.length/l.times.length;p===_c.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let _;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",g/=3):l.getInterpolation()===eh?_="STEP":_="LINEAR",a.push({input:this.processAccessor(new dt(l.times,d)),output:this.processAccessor(new dt(l.values,g)),interpolation:_}),o.push({sampler:a.length-1,target:{node:i.get(u),path:p}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],c=new Float32Array(r.bones.length*16),l=new st;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new dt(c,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();Bi(a,[0,0,0,1])||(r.rotation=a),Bi(c,[0,0,0])||(r.translation=c),Bi(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),f_(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let c=0,l=e.children.length;c<l;c++){const h=e.children[c];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)});const o=t.nodes.push(r)-1;return i.set(e,o),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let o=0,a=e.children.length;o<a;o++){const c=e.children[o];if(c.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new Gs;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Gs?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class m_{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class g_{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class __{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class x_{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class v_{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class y_{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class M_{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class S_{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class E_{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(o_)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class b_{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class T_{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class w_{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class A_{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class R_{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),c=new st,l=new G,h=new Rn,u=new G;for(let d=0;d<i.count;d++)i.getMatrixAt(d,c),c.decompose(l,h,u),l.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);const p={TRANSLATION:n.processAccessor(new dt(r,3)),ROTATION:n.processAccessor(new dt(o,4)),SCALE:n.processAccessor(new dt(a,3))};i.instanceColor&&(p._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:p},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Xs.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n));let a;if(s.times.length===0){i[0]=e;for(let c=0;c<n;c++)r[c]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let c=0;c<s.times.length;c++){if(Math.abs(s.times[c]-e)<.001)return c;if(s.times[c]<e&&s.times[c+1]>e){i.set(s.times.slice(0,c+1),0),i[c+1]=e,i.set(s.times.slice(c+1),c+2),r.set(s.values.slice(0,(c+1)*n),0),r.set(o.evaluate(e),(c+1)*n),r.set(s.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r];const a=Ke.parseTrackName(o.name),c=Ke.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(th)}const l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[c.uuid]===void 0){u=o.clone();const d=new u.ValueBufferType(l*u.times.length);for(let g=0;g<u.times.length;g++)d[g*l+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,n[c.uuid]=u,t.push(u);continue}const p=o.createInterpolant(new o.ValueBufferType(1));u=n[c.uuid];for(let d=0;d<u.times.length;d++)u.values[d*l+h]=p.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){const g=this.insertKeyframe(u,o.times[d]);u.values[g*l+h]=o.values[d]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new dt(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};class C_ extends Ri{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new cl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new P_(e)}}class P_{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=L_(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function L_(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=r;else{const u=D_(h,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function D_(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new yn;let a,c,l,h,u,p,d,g;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":a=_[m++]*e+t,c=_[m++]*e+n,o.moveTo(a,c);break;case"l":a=_[m++]*e+t,c=_[m++]*e+n,o.lineTo(a,c);break;case"q":l=_[m++]*e+t,h=_[m++]*e+n,u=_[m++]*e+t,p=_[m++]*e+n,o.quadraticCurveTo(u,p,l,h);break;case"b":l=_[m++]*e+t,h=_[m++]*e+n,u=_[m++]*e+t,p=_[m++]*e+n,d=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(u,p,d,g,l,h);break}}return{offsetX:r.ha*e,path:o}}class I_ extends $s{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function Sc(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Tt;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let p=0;p<s.length;++p){const d=s[p].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[p].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Ec(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<u;++p){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][p]);const g=Ec(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ec(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new dt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<t;g++){const _=h.getComponent(p,g);a.setComponent(p+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function U_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function N_(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var zi={exports:{}},zr={exports:{}},Tc;function F_(){return Tc||(Tc=1,function(s){(function(){var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];function t(a){var c,l=new Uint8Array(a);for(c=0;c<a;c+=1)l[c]=0;return l}function n(a,c,l,h){var u=c+l,p=t((parseInt(u/h)+1)*h);return p.set(a),p}function i(a,c,l){return a=a.toString(l||8),"000000000000".substr(a.length+12-c)+a}function r(a,c,l){var h,u;for(c=c||t(a.length),l=l||0,h=0,u=a.length;h<u;h+=1)c[l]=a.charCodeAt(h),l+=1;return c}function o(a){var c,l=a.length%3,h="",u,p;function d(g){return e[g>>18&63]+e[g>>12&63]+e[g>>6&63]+e[g&63]}for(c=0,p=a.length-l;c<p;c+=3)u=(a[c]<<16)+(a[c+1]<<8)+a[c+2],h+=d(u);switch(h.length%4){case 1:h+="=";break;case 2:h+="==";break}return h}window.utils={},window.utils.clean=t,window.utils.pad=i,window.utils.extend=n,window.utils.stringToUint8=r,window.utils.uint8ToBase64=o})(),function(){var e=window.utils,t;t=[{field:"fileName",length:100},{field:"fileMode",length:8},{field:"uid",length:8},{field:"gid",length:8},{field:"fileSize",length:12},{field:"mtime",length:12},{field:"checksum",length:8},{field:"type",length:1},{field:"linkName",length:100},{field:"ustar",length:8},{field:"owner",length:32},{field:"group",length:32},{field:"majorNumber",length:8},{field:"minorNumber",length:8},{field:"filenamePrefix",length:155},{field:"padding",length:12}];function n(i,r){var o=e.clean(512),a=0;return t.forEach(function(c){var l=i[c.field]||"",h,u;for(h=0,u=l.length;h<u;h+=1)o[a]=l.charCodeAt(h),a+=1;a+=c.length-h}),typeof r=="function"?r(o,a):o}window.header={},window.header.structure=t,window.header.format=n}(),function(){var e=window.header,t=window.utils,n=512,i;function r(o){this.written=0,i=(o||20)*n,this.out=t.clean(i),this.blocks=[],this.length=0}r.prototype.append=function(o,a,c,l){var h,u,p,d,g,_,m;if(typeof a=="string")a=t.stringToUint8(a);else if(a.constructor!==Uint8Array.prototype.constructor)throw"Invalid input type. You gave me: "+a.constructor.toString().match(/function\s*([$A-Za-z_][0-9A-Za-z_]*)\s*\(/)[1];typeof c=="function"&&(c={}),c=c||{},p=c.mode||parseInt("777",8)&4095,d=c.mtime||Math.floor(+new Date/1e3),g=c.uid||0,_=c.gid||0,h={fileName:o,fileMode:t.pad(p,7),uid:t.pad(g,7),gid:t.pad(_,7),fileSize:t.pad(a.length,11),mtime:t.pad(d,11),checksum:"        ",type:"0",ustar:"ustar  ",owner:c.owner||"",group:c.group||""},u=0,Object.keys(h).forEach(function(v){var x,D=h[v],L;for(x=0,L=D.length;x<L;x+=1)u+=D.charCodeAt(x)}),h.checksum=t.pad(u,6)+"\0 ",m=e.format(h);var f=Math.ceil(m.length/n)*n,M=Math.ceil(a.length/n)*n;this.blocks.push({header:m,input:a,headerLength:f,inputLength:M})},r.prototype.save=function(){var o=[],a=[],c=0,l=Math.pow(2,20),h=[];return this.blocks.forEach(function(u){c+u.headerLength+u.inputLength>l&&(a.push({blocks:h,length:c}),h=[],c=0),h.push(u),c+=u.headerLength+u.inputLength}),a.push({blocks:h,length:c}),a.forEach(function(u){var p=new Uint8Array(u.length),d=0;u.blocks.forEach(function(g){p.set(g.header,d),d+=g.headerLength,p.set(g.input,d),d+=g.inputLength}),o.push(p)}),o.push(new Uint8Array(2*n)),new Blob(o,{type:"octet/stream"})},r.prototype.clear=function(){this.written=0,this.out=t.clean(i)},s.exports=r}()}(zr)),zr.exports}var Ns={exports:{}},O_=Ns.exports,wc;function B_(){return wc||(wc=1,function(s,e){(function(t,n){s.exports=n()})(O_,function(){return function t(n,i,r){var o=window,a="application/octet-stream",c=r||a,l=n,h=!i&&!r&&l,u=document.createElement("a"),p=function(C){return String(C)},d=o.Blob||o.MozBlob||o.WebKitBlob||p,g=i||"download",_,m;if(d=d.call?d.bind(o):Blob,String(this)==="true"&&(l=[l,c],c=l[0],l=l[1]),h&&h.length<2048&&(g=h.split("/").pop().split("?")[0],u.href=h,u.href.indexOf(h)!==-1)){var f=new XMLHttpRequest;return f.open("GET",h,!0),f.responseType="blob",f.onload=function(C){t(C.target.response,g,a)},setTimeout(function(){f.send()},0),f}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(l))if(l.length>1024*1024*1.999&&d!==p)l=D(l),c=l.type||a;else return navigator.msSaveBlob?navigator.msSaveBlob(D(l),g):L(l);else if(/([\x80-\xff])/.test(l)){var M=0,v=new Uint8Array(l.length),x=v.length;for(M;M<x;++M)v[M]=l.charCodeAt(M);l=new d([v],{type:c})}_=l instanceof d?l:new d([l],{type:c});function D(C){var N=C.split(/[:;,]/),T=N[1],y=C.indexOf("charset")>0?3:2,O=N[y]=="base64"?atob:decodeURIComponent,I=O(N.pop()),B=I.length,Y=0,j=new Uint8Array(B);for(Y;Y<B;++Y)j[Y]=I.charCodeAt(Y);return new d([j],{type:T})}function L(C,N){if("download"in u)return u.href=C,u.setAttribute("download",g),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",u.addEventListener("click",function(y){y.stopPropagation(),this.removeEventListener("click",arguments.callee)}),document.body.appendChild(u),setTimeout(function(){u.click(),document.body.removeChild(u),N===!0&&setTimeout(function(){o.URL.revokeObjectURL(u.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,a)),window.open(C)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=C),!0;var T=document.createElement("iframe");document.body.appendChild(T),!N&&/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,a)),T.src=C,setTimeout(function(){document.body.removeChild(T)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(_,g);if(o.URL)L(o.URL.createObjectURL(_),!0);else{if(typeof _=="string"||_.constructor===p)try{return L("data:"+c+";base64,"+o.btoa(_))}catch{return L("data:"+c+","+encodeURIComponent(_))}m=new FileReader,m.onload=function(C){L(this.result)},m.readAsDataURL(_)}return!0}})}(Ns)),Ns.exports}var As={},Ac;function z_(){return Ac||(Ac=1,(function(s){function e(n,i){if({}.hasOwnProperty.call(e.cache,n))return e.cache[n];var r=e.resolve(n);if(!r)throw new Error("Failed to resolve module "+n);var o={id:n,require:e,filename:n,exports:{},loaded:!1,parent:i,children:[]};i&&i.children.push(o);var a=n.slice(0,n.lastIndexOf("/")+1);return e.cache[n]=o.exports,r.call(o.exports,o,o.exports,a,n),o.loaded=!0,e.cache[n]=o.exports}e.modules={},e.cache={},e.resolve=function(n){return{}.hasOwnProperty.call(e.modules,n)?e.modules[n]:void 0},e.define=function(n,i){e.modules[n]=i};var t=function(n){return n="/",{title:"browser",version:"v0.10.26",browser:!0,env:{},argv:[],nextTick:s.setImmediate||function(i){setTimeout(i,0)},cwd:function(){return n},chdir:function(i){n=i}}}();e.define("/gif.coffee",function(n,i,r,o){function a(_,m){return{}.hasOwnProperty.call(_,m)}function c(_,m){for(var f=0,M=m.length;f<M;++f)if(f in m&&m[f]===_)return!0;return!1}function l(_,m){function f(){this.constructor=_}for(var M in m)a(m,M)&&(_[M]=m[M]);return f.prototype=m.prototype,_.prototype=new f,_.__super__=m.prototype,_}var h,u,p,d,g;p=e("events",n).EventEmitter,h=e("/browser.coffee",n),g=function(_){function m(f){var M,v;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(f);for(M in u)v=u[M],this.options[M]!=null?this.options[M]:this.options[M]=v}return l(m,_),u={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null},d={delay:500,copy:!1},m.prototype.setOption=function(f,M){return this.options[f]=M,this._canvas!=null&&(f==="width"||f==="height")?this._canvas[f]=M:void 0},m.prototype.setOptions=function(f){var M,v;return(function(x){for(M in f)a(f,M)&&(v=f[M],x.push(this.setOption(M,v)));return x}).call(this,[])},m.prototype.addFrame=function(f,M){var v,x;M==null&&(M={}),v={},v.transparent=this.options.transparent;for(x in d)v[x]=M[x]||d[x];if(this.options.width!=null||this.setOption("width",f.width),this.options.height!=null||this.setOption("height",f.height),typeof ImageData<"u"&&ImageData!=null&&f instanceof ImageData)v.data=f.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!=null&&f instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!=null&&f instanceof WebGLRenderingContext)M.copy?v.data=this.getContextData(f):v.context=f;else if(f.childNodes!=null)M.copy?v.data=this.getImageData(f):v.image=f;else throw new Error("Invalid image");return this.frames.push(v)},m.prototype.render=function(){var f;if(this.running)throw new Error("Already running");if(!(this.options.width!=null&&this.options.height!=null))throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(function(D){for(var L=(function(){var T;T=[];for(var y=0;0<=this.frames.length?y<this.frames.length:y>this.frames.length;0<=this.frames.length?++y:--y)T.push(y);return T}).apply(this,arguments),C=0,N=L.length;C<N;++C)L[C],D.push(null);return D}).call(this,[]),f=this.spawnWorkers();for(var M=(function(){var D;D=[];for(var L=0;0<=f?L<f:L>f;0<=f?++L:--L)D.push(L);return D}).apply(this,arguments),v=0,x=M.length;v<x;++v)M[v],this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},m.prototype.abort=function(){for(var f;f=this.activeWorkers.shift(),f!=null;)console.log("killing active worker"),f.terminate();return this.running=!1,this.emit("abort")},m.prototype.spawnWorkers=function(){var f;return f=Math.min(this.options.workers,this.frames.length),(function(){var M;M=[];for(var v=this.freeWorkers.length;this.freeWorkers.length<=f?v<f:v>f;this.freeWorkers.length<=f?++v:--v)M.push(v);return M}).apply(this,arguments).forEach(function(M){return function(v){var x;return console.log("spawning worker "+v),x=new Worker(M.options.workerScript),x.onmessage=function(D){return function(L){return D.activeWorkers.splice(D.activeWorkers.indexOf(x),1),D.freeWorkers.push(x),D.frameFinished(L.data)}}(M),M.freeWorkers.push(x)}}(this)),f},m.prototype.frameFinished=function(f){return console.log("frame "+f.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[f.index]=f,c(null,this.imageParts)?this.renderNextFrame():this.finishRendering()},m.prototype.finishRendering=function(){var f,M,v,x,D,L,C;D=0;for(var N=0,T=this.imageParts.length;N<T;++N)M=this.imageParts[N],D+=(M.data.length-1)*M.pageSize+M.cursor;D+=M.pageSize-M.cursor,console.log("rendering finished - filesize "+Math.round(D/1e3)+"kb"),f=new Uint8Array(D),L=0;for(var y=0,O=this.imageParts.length;y<O;++y){M=this.imageParts[y];for(var I=0,B=M.data.length;I<B;++I)C=M.data[I],v=I,f.set(C,L),v===M.data.length-1?L+=M.cursor:L+=M.pageSize}return x=new Blob([f],{type:"image/gif"}),this.emit("finished",x,f)},m.prototype.renderNextFrame=function(){var f,M,v;if(this.freeWorkers.length===0)throw new Error("No free workers");return this.nextFrame>=this.frames.length?void 0:(f=this.frames[this.nextFrame++],v=this.freeWorkers.shift(),M=this.getTask(f),console.log("starting frame "+(M.index+1)+" of "+this.frames.length),this.activeWorkers.push(v),v.postMessage(M))},m.prototype.getContextData=function(f){return f.getImageData(0,0,this.options.width,this.options.height).data},m.prototype.getImageData=function(f){var M;return this._canvas!=null||(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),M=this._canvas.getContext("2d"),M.setFill=this.options.background,M.fillRect(0,0,this.options.width,this.options.height),M.drawImage(f,0,0),this.getContextData(M)},m.prototype.getTask=function(f){var M,v;if(M=this.frames.indexOf(f),v={index:M,last:M===this.frames.length-1,delay:f.delay,transparent:f.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,repeat:this.options.repeat,canTransfer:h.name==="chrome"},f.data!=null)v.data=f.data;else if(f.context!=null)v.data=this.getContextData(f.context);else if(f.image!=null)v.data=this.getImageData(f.image);else throw new Error("Invalid frame");return v},m}(p),n.exports=g}),e.define("/browser.coffee",function(n,i,r,o){var a,c,l,h,u;h=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),u=h.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],c=u[1]==="ie"&&document.documentMode,a={name:u[1]==="version"?u[3]:u[1],version:c||parseFloat(u[1]==="opera"&&u[4]?u[4]:u[2]),platform:{name:h.match(/ip(?:ad|od|hone)/)?"ios":(h.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}},a[a.name]=!0,a[a.name+parseInt(a.version,10)]=!0,a.platform[a.platform.name]=!0,n.exports=a}),e.define("events",function(n,i,r,o){t.EventEmitter||(t.EventEmitter=function(){});var a=i.EventEmitter=t.EventEmitter,c=typeof Array.isArray=="function"?Array.isArray:function(h){return Object.prototype.toString.call(h)==="[object Array]"},l=10;a.prototype.setMaxListeners=function(h){this._events||(this._events={}),this._events.maxListeners=h},a.prototype.emit=function(h){if(h==="error"&&(!(this._events&&this._events.error)||c(this._events.error)&&!this._events.error.length))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");if(!this._events)return!1;var u=this._events[h];if(!u)return!1;if(typeof u!="function")if(c(u)){for(var p=Array.prototype.slice.call(arguments,1),d=u.slice(),g=0,_=d.length;g<_;g++)d[g].apply(this,p);return!0}else return!1;switch(arguments.length){case 1:u.call(this);break;case 2:u.call(this,arguments[1]);break;case 3:u.call(this,arguments[1],arguments[2]);break;default:var p=Array.prototype.slice.call(arguments,1);u.apply(this,p)}return!0},a.prototype.addListener=function(h,u){if(typeof u!="function")throw new Error("addListener only takes instances of Function");if(this._events||(this._events={}),this.emit("newListener",h,u),!this._events[h])this._events[h]=u;else if(c(this._events[h])){if(!this._events[h].warned){var p;this._events.maxListeners!==void 0?p=this._events.maxListeners:p=l,p&&p>0&&this._events[h].length>p&&(this._events[h].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[h].length),console.trace())}this._events[h].push(u)}else this._events[h]=[this._events[h],u];return this},a.prototype.on=a.prototype.addListener,a.prototype.once=function(h,u){var p=this;return p.on(h,function d(){p.removeListener(h,d),u.apply(this,arguments)}),this},a.prototype.removeListener=function(h,u){if(typeof u!="function")throw new Error("removeListener only takes instances of Function");if(!(this._events&&this._events[h]))return this;var p=this._events[h];if(c(p)){var d=p.indexOf(u);if(d<0)return this;p.splice(d,1),p.length==0&&delete this._events[h]}else this._events[h]===u&&delete this._events[h];return this},a.prototype.removeAllListeners=function(h){return h&&this._events&&this._events[h]&&(this._events[h]=null),this},a.prototype.listeners=function(h){return this._events||(this._events={}),this._events[h]||(this._events[h]=[]),c(this._events[h])||(this._events[h]=[this._events[h]]),this._events[h]}}),s.GIF=e("/gif.coffee")}).call(As,As)),As}var kr={exports:{}};const k_={},G_=Object.freeze(Object.defineProperty({__proto__:null,default:k_},Symbol.toStringTag,{value:"Module"})),V_=N_(G_);var Rc;function H_(){return Rc||(Rc=1,function(s){(function(){var e=function(i){this.data=new Uint8Array(i),this.pos=0};e.prototype.seek=function(i){this.pos=i},e.prototype.writeBytes=function(i){for(var r=0;r<i.length;r++)this.data[this.pos++]=i[r]},e.prototype.writeByte=function(i){this.data[this.pos++]=i},e.prototype.writeU8=e.prototype.writeByte,e.prototype.writeU16BE=function(i){this.data[this.pos++]=i>>8,this.data[this.pos++]=i},e.prototype.writeDoubleBE=function(i){for(var r=new Uint8Array(new Float64Array([i]).buffer),o=r.length-1;o>=0;o--)this.writeByte(r[o])},e.prototype.writeFloatBE=function(i){for(var r=new Uint8Array(new Float32Array([i]).buffer),o=r.length-1;o>=0;o--)this.writeByte(r[o])},e.prototype.writeString=function(i){for(var r=0;r<i.length;r++)this.data[this.pos++]=i.charCodeAt(r)},e.prototype.writeEBMLVarIntWidth=function(i,r){switch(r){case 1:this.writeU8(128|i);break;case 2:this.writeU8(64|i>>8),this.writeU8(i);break;case 3:this.writeU8(32|i>>16),this.writeU8(i>>8),this.writeU8(i);break;case 4:this.writeU8(16|i>>24),this.writeU8(i>>16),this.writeU8(i>>8),this.writeU8(i);break;case 5:this.writeU8(8|i/4294967296&7),this.writeU8(i>>24),this.writeU8(i>>16),this.writeU8(i>>8),this.writeU8(i);break;default:throw new RuntimeException("Bad EBML VINT size "+r)}},e.prototype.measureEBMLVarInt=function(i){if(i<127)return 1;if(i<16383)return 2;if(i<(1<<21)-1)return 3;if(i<(1<<28)-1)return 4;if(i<34359738367)return 5;throw new RuntimeException("EBML VINT size not supported "+i)},e.prototype.writeEBMLVarInt=function(i){this.writeEBMLVarIntWidth(i,this.measureEBMLVarInt(i))},e.prototype.writeUnsignedIntBE=function(i,r){switch(r===void 0&&(r=this.measureUnsignedInt(i)),r){case 5:this.writeU8(Math.floor(i/4294967296));case 4:this.writeU8(i>>24);case 3:this.writeU8(i>>16);case 2:this.writeU8(i>>8);case 1:this.writeU8(i);break;default:throw new RuntimeException("Bad UINT size "+r)}},e.prototype.measureUnsignedInt=function(i){return i<256?1:i<65536?2:i<1<<24?3:i<4294967296?4:5},e.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw"ArrayBufferDataStream's pos lies beyond end of buffer"},window.ArrayBufferDataStream=e;var t=function(i){return function(r){var o=[],a=Promise.resolve(),c=null,l=null;typeof FileWriter<"u"&&r instanceof FileWriter?c=r:i&&r&&(l=r),this.pos=0,this.length=0;function h(d){return new Promise(function(g,_){var m=new FileReader;m.addEventListener("loadend",function(){g(m.result)}),m.readAsArrayBuffer(d)})}function u(d){return new Promise(function(g,_){d instanceof Uint8Array?g(d):d instanceof ArrayBuffer||ArrayBuffer.isView(d)?g(new Uint8Array(d)):d instanceof Blob?g(h(d).then(function(m){return new Uint8Array(m)})):g(h(new Blob([d])).then(function(m){return new Uint8Array(m)}))})}function p(d){var g=d.byteLength||d.length||d.size;if(!Number.isInteger(g))throw"Failed to determine size of element";return g}this.seek=function(d){if(d<0)throw"Offset may not be negative";if(isNaN(d))throw"Offset may not be NaN";if(d>this.length)throw"Seeking beyond the end of file is not allowed";this.pos=d},this.write=function(d){var g={offset:this.pos,data:d,length:p(d)},_=g.offset>=this.length;this.pos+=g.length,this.length=Math.max(this.length,this.pos),a=a.then(function(){if(l)return new Promise(function(M,v){u(g.data).then(function(x){var D=0,L=Buffer.from(x.buffer),C=function(N,T,y){D+=T,D>=y.length?M():i.write(l,y,D,y.length-D,g.offset+D,C)};i.write(l,L,0,L.length,g.offset,C)})});if(c)return new Promise(function(M,v){c.onwriteend=M,c.seek(g.offset),c.write(new Blob([g.data]))});if(!_)for(var m=0;m<o.length;m++){var f=o[m];if(!(g.offset+g.length<=f.offset||g.offset>=f.offset+f.length)){if(g.offset<f.offset||g.offset+g.length>f.offset+f.length)throw new Error("Overwrite crosses blob boundaries");if(g.offset==f.offset&&g.length==f.length){f.data=g.data;return}else return u(f.data).then(function(M){return f.data=M,u(g.data)}).then(function(M){g.data=M,f.data.set(g.data,g.offset-f.offset)})}}o.push(g)})},this.complete=function(d){return l||c?a=a.then(function(){return null}):a=a.then(function(){for(var g=[],_=0;_<o.length;_++)g.push(o[_].data);return new Blob(g,{mimeType:d})}),a}}}(V_);window.BlobBuffer=t;var n=function(i,r){function o(d,g){var _={};return[d,g].forEach(function(m){for(var f in m)Object.prototype.hasOwnProperty.call(m,f)&&(_[f]=m[f])}),_}function a(d){return typeof d!="string"||!d.match(/^data:image\/webp;base64,/i)?!1:window.atob(d.substring(23))}function c(d,g){var _=d.toDataURL("image/webp",{quality:g});return a(_)}function l(d){var g=d.indexOf("VP8 ");if(g==-1)throw"Failed to identify beginning of keyframe in WebP image";return g+=8,d.substring(g)}function h(d){this.value=d}function u(d){this.value=d}function p(d,g,_){if(Array.isArray(_))for(var m=0;m<_.length;m++)p(d,g,_[m]);else if(typeof _=="string")d.writeString(_);else if(_ instanceof Uint8Array)d.writeBytes(_);else if(_.id)if(_.offset=d.pos+g,d.writeUnsignedIntBE(_.id),Array.isArray(_.data)){var f,M,v;_.size===-1?d.writeByte(255):(f=d.pos,d.writeBytes([0,0,0,0])),M=d.pos,_.dataOffset=M+g,p(d,g,_.data),_.size!==-1&&(v=d.pos,_.size=v-M,d.seek(f),d.writeEBMLVarIntWidth(_.size,4),d.seek(v))}else if(typeof _.data=="string")d.writeEBMLVarInt(_.data.length),_.dataOffset=d.pos+g,d.writeString(_.data);else if(typeof _.data=="number")_.size||(_.size=d.measureUnsignedInt(_.data)),d.writeEBMLVarInt(_.size),_.dataOffset=d.pos+g,d.writeUnsignedIntBE(_.data,_.size);else if(_.data instanceof u)d.writeEBMLVarInt(8),_.dataOffset=d.pos+g,d.writeDoubleBE(_.data.value);else if(_.data instanceof h)d.writeEBMLVarInt(4),_.dataOffset=d.pos+g,d.writeFloatBE(_.data.value);else if(_.data instanceof Uint8Array)d.writeEBMLVarInt(_.data.byteLength),_.dataOffset=d.pos+g,d.writeBytes(_.data);else throw"Bad EBML datatype "+typeof _.data;else throw"Bad EBML datatype "+typeof _.data}return function(d){var g=5e3,_=1,m=!1,f,M,v=[],x=0,D=0,L={quality:.95,fileWriter:null,fd:null,frameDuration:null,frameRate:null},C={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},N,T={id:17545,data:new u(0)},y,O=[],I=new r(d.fileWriter||d.fd);function B(P){return P-N.dataOffset}function Y(){var P={id:21420,size:5,data:0},w={id:290298740,data:[]};for(var b in C){var W=C[b];W.positionEBML=Object.create(P),w.data.push({id:19899,data:[{id:21419,data:W.id},W.positionEBML]})}return w}function j(){y=Y();var P={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:"webm"},{id:17031,data:2},{id:17029,data:2}]},w={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:"webm-writer-js"},{id:22337,data:"webm-writer-js"},T]},b={id:374648427,data:[{id:174,data:[{id:215,data:_},{id:29637,data:_},{id:156,data:0},{id:2274716,data:"und"},{id:134,data:"V_VP8"},{id:2459272,data:"VP8"},{id:131,data:1},{id:224,data:[{id:176,data:f},{id:186,data:M}]}]}]};N={id:408125543,size:-1,data:[y,w,b]};var W=new i(256);p(W,I.pos,[P,N]),I.write(W.getAsDataArray()),C.SegmentInfo.positionEBML.data=B(w.offset),C.Tracks.positionEBML.data=B(b.offset)}function te(P){var w=new i(4);if(!(P.trackNumber>0&&P.trackNumber<127))throw"TrackNumber must be > 0 and < 127";return w.writeEBMLVarInt(P.trackNumber),w.writeU16BE(P.timecode),w.writeByte(128),{id:163,data:[w.getAsDataArray(),P.frame]}}function $(P){return{id:524531317,data:[{id:231,data:Math.round(P.timecode)}]}}function k(P,w,b){O.push({id:187,data:[{id:179,data:w},{id:183,data:[{id:247,data:P},{id:241,data:B(b)}]}]})}function pe(){var P={id:475249515,data:O},w=new i(16+O.length*32);p(w,I.pos,P),I.write(w.getAsDataArray()),C.Cues.positionEBML.data=B(P.offset)}function me(){if(v.length!=0){for(var P=0,w=0;w<v.length;w++)P+=v[w].frame.length;for(var b=new i(P+v.length*32),W=$({timecode:Math.round(x)}),w=0;w<v.length;w++)W.data.push(te(v[w]));p(b,I.pos,W),I.write(b.getAsDataArray()),k(_,Math.round(x),W.offset),v=[],x+=D,D=0}}function ve(){if(!d.frameDuration)if(d.frameRate)d.frameDuration=1e3/d.frameRate;else throw"Missing required frameDuration or frameRate setting"}function Pe(P){P.trackNumber=_,P.timecode=Math.round(D),v.push(P),D+=P.duration,D>=g&&me()}function ke(){var P=new i(y.size),w=I.pos;p(P,y.dataOffset,y.data),I.seek(y.dataOffset),I.write(P.getAsDataArray()),I.seek(w)}function F(){var P=new i(8),w=I.pos;P.writeDoubleBE(x),I.seek(T.dataOffset),I.write(P.getAsDataArray()),I.seek(w)}this.addFrame=function(P){if(m){if(P.width!=f||P.height!=M)throw"Frame size differs from previous frames"}else f=P.width,M=P.height,j(),m=!0;var w=c(P,{quality:d.quality});if(!w)throw"Couldn't decode WebP frame, does the browser support WebP?";Pe({frame:l(w),duration:d.frameDuration})},this.complete=function(){return me(),pe(),ke(),F(),I.complete("video/webm")},this.getWrittenSize=function(){return I.length},d=o(L,d||{}),ve()}};s.exports=n(e,t)})()}(kr)),kr.exports}zi.exports;var Cc;function W_(){return Cc||(Cc=1,function(s,e){(function(){var t=F_(),n=B_(),i=z_().GIF,r=H_(),o={function:!0,object:!0};function a(I){return I&&I.Object===Object?I:null}var c=e&&!e.nodeType?e:void 0,l=s&&!s.nodeType?s:void 0,h=l&&l.exports===c?c:void 0,u=a(c&&l&&typeof bc=="object"&&bc),p=a(o[typeof self]&&self),d=a(o[typeof window]&&window),g=a(o[typeof this]&&this),_=u||d!==(g&&g.window)&&d||p||g||Function("return this")();"gc"in window||(window.gc=function(){}),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(I,B,Y){for(var j=atob(this.toDataURL(B,Y).split(",")[1]),te=j.length,$=new Uint8Array(te),k=0;k<te;k++)$[k]=j.charCodeAt(k);I(new Blob([$],{type:B||"image/png"}))}});// @license http://opensource.org/licenses/MIT
(function(){if("performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var I=Date.now();performance.timing&&performance.timing.navigationStart&&(I=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-I}}})();function m(I){return("0000000"+I).slice(-7)}var f=window.Date.now();function M(){function I(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return I()+I()+"-"+I()+"-"+I()+"-"+I()+"-"+I()+I()+I()}function v(I){var B={};this.settings=I,this.on=function(Y,j){B[Y]=j},this.emit=function(Y){var j=B[Y];j&&j.apply(null,Array.prototype.slice.call(arguments,1))},this.filename=I.name||M(),this.extension="",this.mimeType=""}v.prototype.start=function(){},v.prototype.stop=function(){},v.prototype.add=function(){},v.prototype.save=function(){},v.prototype.dispose=function(){},v.prototype.safeToProceed=function(){return!0},v.prototype.step=function(){console.log("Step not set!")};function x(I){v.call(this,I),this.extension=".tar",this.mimeType="application/x-tar",this.fileExtension="",this.baseFilename=this.filename,this.tape=null,this.count=0,this.part=1,this.frames=0}x.prototype=Object.create(v.prototype),x.prototype.start=function(){this.dispose()},x.prototype.add=function(I){var B=new FileReader;B.onload=(function(){this.tape.append(m(this.count)+this.fileExtension,new Uint8Array(B.result)),this.settings.autoSaveTime>0&&this.frames/this.settings.framerate>=this.settings.autoSaveTime?this.save((function(Y){this.filename=this.baseFilename+"-part-"+m(this.part),n(Y,this.filename+this.extension,this.mimeType);var j=this.count;this.dispose(),this.count=j+1,this.part++,this.filename=this.baseFilename+"-part-"+m(this.part),this.frames=0,this.step()}).bind(this)):(this.count++,this.frames++,this.step())}).bind(this),B.readAsArrayBuffer(I)},x.prototype.save=function(I){I(this.tape.save())},x.prototype.dispose=function(){this.tape=new t,this.count=0};function D(I){x.call(this,I),this.type="image/png",this.fileExtension=".png"}D.prototype=Object.create(x.prototype),D.prototype.add=function(I){I.toBlob((function(B){x.prototype.add.call(this,B)}).bind(this),this.type)};function L(I){x.call(this,I),this.type="image/jpeg",this.fileExtension=".jpg",this.quality=I.quality/100||.8}L.prototype=Object.create(x.prototype),L.prototype.add=function(I){I.toBlob((function(B){x.prototype.add.call(this,B)}).bind(this),this.type,this.quality)};function C(I){var B=document.createElement("canvas");B.toDataURL("image/webp").substr(5,10)!=="image/webp"&&console.log("WebP not supported - try another export format"),v.call(this,I),this.quality=I.quality/100||.8,this.extension=".webm",this.mimeType="video/webm",this.baseFilename=this.filename,this.framerate=I.framerate,this.frames=0,this.part=1,this.videoWriter=new r({quality:this.quality,fileWriter:null,fd:null,frameRate:this.framerate})}C.prototype=Object.create(v.prototype),C.prototype.start=function(I){this.dispose()},C.prototype.add=function(I){this.videoWriter.addFrame(I),this.settings.autoSaveTime>0&&this.frames/this.settings.framerate>=this.settings.autoSaveTime?this.save((function(B){this.filename=this.baseFilename+"-part-"+m(this.part),n(B,this.filename+this.extension,this.mimeType),this.dispose(),this.part++,this.filename=this.baseFilename+"-part-"+m(this.part),this.step()}).bind(this)):(this.frames++,this.step())},C.prototype.save=function(I){this.videoWriter.complete().then(I)},C.prototype.dispose=function(I){this.frames=0,this.videoWriter=new r({quality:this.quality,fileWriter:null,fd:null,frameRate:this.framerate})};function N(I){v.call(this,I),I.quality=I.quality/100||.8,this.encoder=new FFMpegServer.Video(I),this.encoder.on("process",(function(){this.emit("process")}).bind(this)),this.encoder.on("finished",(function(B,Y){var j=this.callback;j&&(this.callback=void 0,j(B,Y))}).bind(this)),this.encoder.on("progress",(function(B){this.settings.onProgress&&this.settings.onProgress(B)}).bind(this)),this.encoder.on("error",(function(B){alert(JSON.stringify(B,null,2))}).bind(this))}N.prototype=Object.create(v.prototype),N.prototype.start=function(){this.encoder.start(this.settings)},N.prototype.add=function(I){this.encoder.add(I)},N.prototype.save=function(I){this.callback=I,this.encoder.end()},N.prototype.safeToProceed=function(){return this.encoder.safeToProceed()};function T(I){v.call(this,I),this.framerate=this.settings.framerate,this.type="video/webm",this.extension=".webm",this.stream=null,this.mediaRecorder=null,this.chunks=[]}T.prototype=Object.create(v.prototype),T.prototype.add=function(I){this.stream||(this.stream=I.captureStream(this.framerate),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.start(),this.mediaRecorder.ondataavailable=(function(B){this.chunks.push(B.data)}).bind(this)),this.step()},T.prototype.save=function(I){this.mediaRecorder.onstop=(function(B){var Y=new Blob(this.chunks,{type:"video/webm"});this.chunks=[],I(Y)}).bind(this),this.mediaRecorder.stop()};function y(I){v.call(this,I),I.quality=31-(I.quality*30/100||10),I.workers=I.workers||4,this.extension=".gif",this.mimeType="image/gif",this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.sizeSet=!1;var B="(function(b){function a(b,d){if({}.hasOwnProperty.call(a.cache,b))return a.cache[b];var e=a.resolve(b);if(!e)throw new Error('Failed to resolve module '+b);var c={id:b,require:a,filename:b,exports:{},loaded:!1,parent:d,children:[]};d&&d.children.push(c);var f=b.slice(0,b.lastIndexOf('/')+1);return a.cache[b]=c.exports,e.call(c.exports,c,c.exports,f,b),c.loaded=!0,a.cache[b]=c.exports}a.modules={},a.cache={},a.resolve=function(b){return{}.hasOwnProperty.call(a.modules,b)?a.modules[b]:void 0},a.define=function(b,c){a.modules[b]=c},a.define('/gif.worker.coffee',function(d,e,f,g){var b,c;b=a('/GIFEncoder.js',d),c=function(a){var c,e,d,f;return c=new b(a.width,a.height),a.index===0?c.writeHeader():c.firstFrame=!1,c.setTransparent(a.transparent),c.setRepeat(a.repeat),c.setDelay(a.delay),c.setQuality(a.quality),c.addFrame(a.data),a.last&&c.finish(),d=c.stream(),a.data=d.pages,a.cursor=d.cursor,a.pageSize=d.constructor.pageSize,a.canTransfer?(f=function(c){for(var b=0,d=a.data.length;b<d;++b)e=a.data[b],c.push(e.buffer);return c}.call(this,[]),self.postMessage(a,f)):self.postMessage(a)},self.onmessage=function(a){return c(a.data)}}),a.define('/GIFEncoder.js',function(e,h,i,j){function c(){this.page=-1,this.pages=[],this.newPage()}function b(a,b){this.width=~~a,this.height=~~b,this.transparent=null,this.transIndex=0,this.repeat=-1,this.delay=0,this.image=null,this.pixels=null,this.indexedPixels=null,this.colorDepth=null,this.colorTab=null,this.usedEntry=new Array,this.palSize=7,this.dispose=-1,this.firstFrame=!0,this.sample=10,this.out=new c}var f=a('/TypedNeuQuant.js',e),g=a('/LZWEncoder.js',e);c.pageSize=4096,c.charMap={};for(var d=0;d<256;d++)c.charMap[d]=String.fromCharCode(d);c.prototype.newPage=function(){this.pages[++this.page]=new Uint8Array(c.pageSize),this.cursor=0},c.prototype.getData=function(){var d='';for(var a=0;a<this.pages.length;a++)for(var b=0;b<c.pageSize;b++)d+=c.charMap[this.pages[a][b]];return d},c.prototype.writeByte=function(a){this.cursor>=c.pageSize&&this.newPage(),this.pages[this.page][this.cursor++]=a},c.prototype.writeUTFBytes=function(b){for(var c=b.length,a=0;a<c;a++)this.writeByte(b.charCodeAt(a))},c.prototype.writeBytes=function(b,d,e){for(var c=e||b.length,a=d||0;a<c;a++)this.writeByte(b[a])},b.prototype.setDelay=function(a){this.delay=Math.round(a/10)},b.prototype.setFrameRate=function(a){this.delay=Math.round(100/a)},b.prototype.setDispose=function(a){a>=0&&(this.dispose=a)},b.prototype.setRepeat=function(a){this.repeat=a},b.prototype.setTransparent=function(a){this.transparent=a},b.prototype.addFrame=function(a){this.image=a,this.getImagePixels(),this.analyzePixels(),this.firstFrame&&(this.writeLSD(),this.writePalette(),this.repeat>=0&&this.writeNetscapeExt()),this.writeGraphicCtrlExt(),this.writeImageDesc(),this.firstFrame||this.writePalette(),this.writePixels(),this.firstFrame=!1},b.prototype.finish=function(){this.out.writeByte(59)},b.prototype.setQuality=function(a){a<1&&(a=1),this.sample=a},b.prototype.writeHeader=function(){this.out.writeUTFBytes('GIF89a')},b.prototype.analyzePixels=function(){var g=this.pixels.length,d=g/3;this.indexedPixels=new Uint8Array(d);var a=new f(this.pixels,this.sample);a.buildColormap(),this.colorTab=a.getColormap();var b=0;for(var c=0;c<d;c++){var e=a.lookupRGB(this.pixels[b++]&255,this.pixels[b++]&255,this.pixels[b++]&255);this.usedEntry[e]=!0,this.indexedPixels[c]=e}this.pixels=null,this.colorDepth=8,this.palSize=7,this.transparent!==null&&(this.transIndex=this.findClosest(this.transparent))},b.prototype.findClosest=function(e){if(this.colorTab===null)return-1;var k=(e&16711680)>>16,l=(e&65280)>>8,m=e&255,c=0,d=16777216,j=this.colorTab.length;for(var a=0;a<j;){var f=k-(this.colorTab[a++]&255),g=l-(this.colorTab[a++]&255),h=m-(this.colorTab[a]&255),i=f*f+g*g+h*h,b=parseInt(a/3);this.usedEntry[b]&&i<d&&(d=i,c=b),a++}return c},b.prototype.getImagePixels=function(){var a=this.width,g=this.height;this.pixels=new Uint8Array(a*g*3);var b=this.image,c=0;for(var d=0;d<g;d++)for(var e=0;e<a;e++){var f=d*a*4+e*4;this.pixels[c++]=b[f],this.pixels[c++]=b[f+1],this.pixels[c++]=b[f+2]}},b.prototype.writeGraphicCtrlExt=function(){this.out.writeByte(33),this.out.writeByte(249),this.out.writeByte(4);var b,a;this.transparent===null?(b=0,a=0):(b=1,a=2),this.dispose>=0&&(a=dispose&7),a<<=2,this.out.writeByte(0|a|0|b),this.writeShort(this.delay),this.out.writeByte(this.transIndex),this.out.writeByte(0)},b.prototype.writeImageDesc=function(){this.out.writeByte(44),this.writeShort(0),this.writeShort(0),this.writeShort(this.width),this.writeShort(this.height),this.firstFrame?this.out.writeByte(0):this.out.writeByte(128|this.palSize)},b.prototype.writeLSD=function(){this.writeShort(this.width),this.writeShort(this.height),this.out.writeByte(240|this.palSize),this.out.writeByte(0),this.out.writeByte(0)},b.prototype.writeNetscapeExt=function(){this.out.writeByte(33),this.out.writeByte(255),this.out.writeByte(11),this.out.writeUTFBytes('NETSCAPE2.0'),this.out.writeByte(3),this.out.writeByte(1),this.writeShort(this.repeat),this.out.writeByte(0)},b.prototype.writePalette=function(){this.out.writeBytes(this.colorTab);var b=768-this.colorTab.length;for(var a=0;a<b;a++)this.out.writeByte(0)},b.prototype.writeShort=function(a){this.out.writeByte(a&255),this.out.writeByte(a>>8&255)},b.prototype.writePixels=function(){var a=new g(this.width,this.height,this.indexedPixels,this.colorDepth);a.encode(this.out)},b.prototype.stream=function(){return this.out},e.exports=b}),a.define('/LZWEncoder.js',function(e,g,h,i){function f(y,D,C,B){function w(a,b){r[f++]=a,f>=254&&t(b)}function x(b){u(a),k=i+2,j=!0,l(i,b)}function u(b){for(var a=0;a<b;++a)h[a]=-1}function A(z,r){var g,t,d,e,y,w,s;for(q=z,j=!1,n_bits=q,m=p(n_bits),i=1<<z-1,o=i+1,k=i+2,f=0,e=v(),s=0,g=a;g<65536;g*=2)++s;s=8-s,w=a,u(w),l(i,r);a:while((t=v())!=c){if(g=(t<<b)+e,d=t<<s^e,h[d]===g){e=n[d];continue}if(h[d]>=0){y=w-d,d===0&&(y=1);do if((d-=y)<0&&(d+=w),h[d]===g){e=n[d];continue a}while(h[d]>=0)}l(e,r),e=t,k<1<<b?(n[d]=k++,h[d]=g):x(r)}l(e,r),l(o,r)}function z(a){a.writeByte(s),remaining=y*D,curPixel=0,A(s+1,a),a.writeByte(0)}function t(a){f>0&&(a.writeByte(f),a.writeBytes(r,0,f),f=0)}function p(a){return(1<<a)-1}function v(){if(remaining===0)return c;--remaining;var a=C[curPixel++];return a&255}function l(a,c){g&=d[e],e>0?g|=a<<e:g=a,e+=n_bits;while(e>=8)w(g&255,c),g>>=8,e-=8;if((k>m||j)&&(j?(m=p(n_bits=q),j=!1):(++n_bits,n_bits==b?m=1<<b:m=p(n_bits))),a==o){while(e>0)w(g&255,c),g>>=8,e-=8;t(c)}}var s=Math.max(2,B),r=new Uint8Array(256),h=new Int32Array(a),n=new Int32Array(a),g,e=0,f,k=0,m,j=!1,q,i,o;this.encode=z}var c=-1,b=12,a=5003,d=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];e.exports=f}),a.define('/TypedNeuQuant.js',function(A,F,E,D){function C(A,B){function I(){o=[],q=new Int32Array(256),t=new Int32Array(a),y=new Int32Array(a),z=new Int32Array(a>>3);var c,d;for(c=0;c<a;c++)d=(c<<b+8)/a,o[c]=new Float64Array([d,d,d,0]),y[c]=e/a,t[c]=0}function J(){for(var c=0;c<a;c++)o[c][0]>>=b,o[c][1]>>=b,o[c][2]>>=b,o[c][3]=c}function K(b,a,c,e,f){o[a][0]-=b*(o[a][0]-c)/d,o[a][1]-=b*(o[a][1]-e)/d,o[a][2]-=b*(o[a][2]-f)/d}function L(j,e,n,l,k){var h=Math.abs(e-j),i=Math.min(e+j,a),g=e+1,f=e-1,m=1,b,d;while(g<i||f>h)d=z[m++],g<i&&(b=o[g++],b[0]-=d*(b[0]-n)/c,b[1]-=d*(b[1]-l)/c,b[2]-=d*(b[2]-k)/c),f>h&&(b=o[f--],b[0]-=d*(b[0]-n)/c,b[1]-=d*(b[1]-l)/c,b[2]-=d*(b[2]-k)/c)}function C(p,s,q){var h=2147483647,k=h,d=-1,m=d,c,j,e,n,l;for(c=0;c<a;c++)j=o[c],e=Math.abs(j[0]-p)+Math.abs(j[1]-s)+Math.abs(j[2]-q),e<h&&(h=e,d=c),n=e-(t[c]>>i-b),n<k&&(k=n,m=c),l=y[c]>>g,y[c]-=l,t[c]+=l<<f;return y[d]+=x,t[d]-=r,m}function D(){var d,b,e,c,h,g,f=0,i=0;for(d=0;d<a;d++){for(e=o[d],h=d,g=e[1],b=d+1;b<a;b++)c=o[b],c[1]<g&&(h=b,g=c[1]);if(c=o[h],d!=h&&(b=c[0],c[0]=e[0],e[0]=b,b=c[1],c[1]=e[1],e[1]=b,b=c[2],c[2]=e[2],e[2]=b,b=c[3],c[3]=e[3],e[3]=b),g!=f){for(q[f]=i+d>>1,b=f+1;b<g;b++)q[b]=d;f=g,i=d}}for(q[f]=i+n>>1,b=f+1;b<256;b++)q[b]=n}function E(j,i,k){var b,d,c,e=1e3,h=-1,f=q[i],g=f-1;while(f<a||g>=0)f<a&&(d=o[f],c=d[1]-i,c>=e?f=a:(f++,c<0&&(c=-c),b=d[0]-j,b<0&&(b=-b),c+=b,c<e&&(b=d[2]-k,b<0&&(b=-b),c+=b,c<e&&(e=c,h=d[3])))),g>=0&&(d=o[g],c=i-d[1],c>=e?g=-1:(g--,c<0&&(c=-c),b=d[0]-j,b<0&&(b=-b),c+=b,c<e&&(b=d[2]-k,b<0&&(b=-b),c+=b,c<e&&(e=c,h=d[3]))));return h}function F(){var c,f=A.length,D=30+(B-1)/3,y=f/(3*B),q=~~(y/w),n=d,o=u,a=o>>h;for(a<=1&&(a=0),c=0;c<a;c++)z[c]=n*((a*a-c*c)*m/(a*a));var i;f<s?(B=1,i=3):f%l!==0?i=3*l:f%k!==0?i=3*k:f%p!==0?i=3*p:i=3*j;var r,t,x,e,g=0;c=0;while(c<y)if(r=(A[g]&255)<<b,t=(A[g+1]&255)<<b,x=(A[g+2]&255)<<b,e=C(r,t,x),K(n,e,r,t,x),a!==0&&L(a,e,r,t,x),g+=i,g>=f&&(g-=f),c++,q===0&&(q=1),c%q===0)for(n-=n/D,o-=o/v,a=o>>h,a<=1&&(a=0),e=0;e<a;e++)z[e]=n*((a*a-e*e)*m/(a*a))}function G(){I(),F(),J(),D()}function H(){var b=[],g=[];for(var c=0;c<a;c++)g[o[c][3]]=c;var d=0;for(var e=0;e<a;e++){var f=g[e];b[d++]=o[f][0],b[d++]=o[f][1],b[d++]=o[f][2]}return b}var o,q,t,y,z;this.buildColormap=G,this.getColormap=H,this.lookupRGB=E}var w=100,a=256,n=a-1,b=4,i=16,e=1<<i,f=10,B=1<<f,g=10,x=e>>g,r=e<<f-g,z=a>>3,h=6,t=1<<h,u=z*t,v=30,o=10,d=1<<o,q=8,m=1<<q,y=o+q,c=1<<y,l=499,k=491,p=487,j=503,s=3*j;A.exports=C}),a('/gif.worker.coffee')}.call(this,this))",Y=new Blob([B],{type:"application/javascript"}),j=URL.createObjectURL(Y);this.encoder=new i({workers:I.workers,quality:I.quality,workerScript:j}),this.encoder.on("progress",(function(te){this.settings.onProgress&&this.settings.onProgress(te)}).bind(this)),this.encoder.on("finished",(function(te){var $=this.callback;$&&(this.callback=void 0,$(te))}).bind(this))}y.prototype=Object.create(v.prototype),y.prototype.add=function(I){this.sizeSet||(this.encoder.setOption("width",I.width),this.encoder.setOption("height",I.height),this.sizeSet=!0),this.canvas.width=I.width,this.canvas.height=I.height,this.ctx.drawImage(I,0,0),this.encoder.addFrame(this.ctx,{copy:!0,delay:this.settings.step}),this.step()},y.prototype.save=function(I){this.callback=I,this.encoder.render()};function O(I){var B=I||{},Y,j,te,$,k,ye,pe,me=[],ve=[],Pe=0,ke=0,F=[],P=!1,w={};B.framerate=B.framerate||60,B.motionBlurFrames=2*(B.motionBlurFrames||1),Y=B.verbose||!1,B.display,B.step=1e3/B.framerate,B.timeLimit=B.timeLimit||0,B.frameLimit=B.frameLimit||0,B.startTime=B.startTime||0;var b=document.createElement("div");b.style.position="absolute",b.style.left=b.style.top=0,b.style.backgroundColor="black",b.style.fontFamily="monospace",b.style.fontSize="11px",b.style.padding="5px",b.style.color="red",b.style.zIndex=1e5,B.display&&document.body.appendChild(b);var W=document.createElement("canvas"),ue=W.getContext("2d"),V,de;De("Step is set to "+B.step+"ms");var Q={gif:y,webm:C,ffmpegserver:N,png:D,jpg:L,"webm-mediarecorder":T},J=Q[B.format];if(!J)throw"Error: Incorrect or missing format: Valid formats are "+Object.keys(Q).join(", ");if(pe=new J(B),pe.step=ye,pe.on("process",Re),pe.on("progress",Ee),"performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var S=Date.now();performance.timing&&performance.timing.navigationStart&&(S=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-S}}var se=window.setTimeout,ne=window.setInterval,ce=window.clearInterval,z=window.clearTimeout,U=window.requestAnimationFrame,ae=window.Date.now,R=window.performance.now,E=window.Date.prototype.getTime,Z=[];function oe(){De("Capturer start"),te=window.Date.now(),j=te+B.startTime,k=window.performance.now(),$=k+B.startTime,window.Date.prototype.getTime=function(){return j},window.Date.now=function(){return j},window.setTimeout=function(ee,_e){var Me={callback:ee,time:_e,triggerTime:j+_e};return me.push(Me),De("Timeout set to "+Me.time),Me},window.clearTimeout=function(ee){for(var _e=0;_e<me.length;_e++)if(me[_e]==ee){me.splice(_e,1),De("Timeout cleared");continue}},window.setInterval=function(ee,_e){var Me={callback:ee,time:_e,triggerTime:j+_e};return ve.push(Me),De("Interval set to "+Me.time),Me},window.clearInterval=function(ee){return De("clear Interval"),null},window.requestAnimationFrame=function(ee){F.push(ee)},window.performance.now=function(){return $};function K(){return this._hooked||(this._hooked=!0,this._hookedTime=this.currentTime||0,this.pause(),Z.push(this)),this._hookedTime+B.startTime}try{Object.defineProperty(HTMLVideoElement.prototype,"currentTime",{get:K}),Object.defineProperty(HTMLAudioElement.prototype,"currentTime",{get:K})}catch(ee){De(ee)}}function fe(){oe(),pe.start(),P=!0}function le(){P=!1,pe.stop(),be()}function Ae(K,ee){se(K,0,ee)}function ye(){Ae(Re)}function be(){De("Capturer stop"),window.setTimeout=se,window.setInterval=ne,window.clearInterval=ce,window.clearTimeout=z,window.requestAnimationFrame=U,window.Date.prototype.getTime=E,window.Date.now=ae,window.performance.now=R}function Ge(){var K=Pe/B.framerate;(B.frameLimit&&Pe>=B.frameLimit||B.timeLimit&&K>=B.timeLimit)&&(le(),qe());var ee=new Date(null);ee.setSeconds(K),B.motionBlurFrames>2?b.textContent="CCapture "+B.format+" | "+Pe+" frames ("+ke+" inter) | "+ee.toISOString().substr(11,8):b.textContent="CCapture "+B.format+" | "+Pe+" frames | "+ee.toISOString().substr(11,8)}function ge(K){(W.width!==K.width||W.height!==K.height)&&(W.width=K.width,W.height=K.height,V=new Uint16Array(W.height*W.width*4),ue.fillStyle="#0",ue.fillRect(0,0,W.width,W.height))}function we(K){ue.drawImage(K,0,0),de=ue.getImageData(0,0,W.width,W.height);for(var ee=0;ee<V.length;ee+=4)V[ee]+=de.data[ee],V[ee+1]+=de.data[ee+1],V[ee+2]+=de.data[ee+2];ke++}function Ue(){for(var K=de.data,ee=0;ee<V.length;ee+=4)K[ee]=V[ee]*2/B.motionBlurFrames,K[ee+1]=V[ee+1]*2/B.motionBlurFrames,K[ee+2]=V[ee+2]*2/B.motionBlurFrames;ue.putImageData(de,0,0),pe.add(W),Pe++,ke=0,De("Full MB Frame! "+Pe+" "+j);for(var ee=0;ee<V.length;ee+=4)V[ee]=0,V[ee+1]=0,V[ee+2]=0;gc()}function Fe(K){P&&(B.motionBlurFrames>2?(ge(K),we(K),ke>=.5*B.motionBlurFrames?Ue():ye()):(pe.add(K),Pe++,De("Full Frame! "+Pe)))}function Re(){var K=1e3/B.framerate,ee=(Pe+ke/B.motionBlurFrames)*K;j=te+ee,$=k+ee,Z.forEach(function(Me){Me._hookedTime=ee/1e3}),Ge(),De("Frame: "+Pe+" "+ke);for(var _e=0;_e<me.length;_e++)if(j>=me[_e].triggerTime){Ae(me[_e].callback),me.splice(_e,1);continue}for(var _e=0;_e<ve.length;_e++)if(j>=ve[_e].triggerTime){Ae(ve[_e].callback),ve[_e].triggerTime+=ve[_e].time;continue}F.forEach(function(Me){Ae(Me,j-f)}),F=[]}function qe(K){K||(K=function(ee){return n(ee,pe.filename+pe.extension,pe.mimeType),!1}),pe.save(K)}function De(K){Y&&console.log(K)}function tt(K,ee){w[K]=ee}function H(K){var ee=w[K];ee&&ee.apply(null,Array.prototype.slice.call(arguments,1))}function Ee(K){H("progress",K)}return{start:fe,capture:Fe,stop:le,save:qe,on:tt}}(d||p||{}).CCapture=O,c&&l?(h&&((l.exports=O).CCapture=O),c.CCapture=O):_.CCapture=O})()}(zi,zi.exports)),zi.exports}var X_=W_();const q_=U_(X_);class Y_{constructor(){this.config={extrusion:{depth:2,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelSegments:100},text:{content:"",size:50,height:20,curveSegments:12,font:null},size:{scale:15},rotation:{speed:.01,enabled:!0},background:"#000000",zoom:20,showHelpers:!1,mergeMeshes:!1,materialType:"matcap4",material:{baseColor:"#00FF00",blendMode:"additive",opacity:.8,emissiveIntensity:1,wireframe:!1,doubleLayer:!1},video:{fps:60,duration:4,format:"webm",rotations:1,aspectRatio:"16:9",width:1920,height:1080,padding:.2}},this.isRecording=!1,this.capturer=null,this.recordingStartTime=0,this.recordingFrames=0,this.regenerateDebounced=this.debounce(this.regenerate3D.bind(this),100),this.matcapTextures=new Map,this.localMatcapPath="./",this.remoteMatcapBasePath="https://raw.githubusercontent.com/nidorx/matcaps/master/",this.init()}async init(){this.scene=new Gs,this.updateBackgroundColor(),this.camera=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3),this.updateCameraPosition(),this.renderer=new fc({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.controls=new Yg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.enabled=!1,this.svgGroup=new pi,this.scene.add(this.svgGroup),this.statusElement=document.createElement("div"),this.statusElement.style.position="absolute",this.statusElement.style.bottom="10px",this.statusElement.style.left="10px",this.statusElement.style.color="white",this.statusElement.style.fontFamily="monospace",this.statusElement.style.padding="10px",this.statusElement.style.backgroundColor="rgba(0,0,0,0.5)",document.body.appendChild(this.statusElement),window.addEventListener("resize",()=>this.onWindowResize()),await this.loadTextures(),this.addHelpers(),this.setupControls(),this.animate(),this.loadSVG("./logo.svg"),await this.loadFont("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json")}loadTextures(){return new Promise(e=>{this.textureLoader=new Wu;const t=n=>new Promise(i=>{this.textureLoader.load(n,r=>i(r),void 0,r=>{console.error(`Error loading texture ${n}:`,r),i(null)})});Promise.all([t("./Spidververse2_MatCap.png").then(n=>this.matcapTexture1=n),t("./matcap-2.png").then(n=>this.matcapTexture2=n),t("./matcap-3.png").then(n=>this.matcapTexture3=n),t("./matcap-4.png").then(n=>this.matcapTexture4=n),t("./matcap-5.png").then(n=>this.matcapTexture5=n),t("./matcap-6.png").then(n=>this.matcapTexture6=n),t("./matcap-7.png").then(n=>this.matcapTexture7=n),t("./matcap-8.png").then(n=>this.matcapTexture8=n),t("./matcap-9.png").then(n=>this.matcapTexture9=n),t("./matcap-10.png").then(n=>this.matcapTexture10=n)]).then(()=>{console.log("All textures loaded or attempted"),e()}).catch(n=>{console.error("Error in texture loading:",n),e()})})}addHelpers(){this.helpersGroup=new pi,this.scene.add(this.helpersGroup);const e=new af(5);this.helpersGroup.add(e);const t=new Wo(.2,16,16),n=new Gn({color:16776960}),i=new Dt(t,n);this.helpersGroup.add(i);const r=new rf(10,10,8947848,4473924);this.helpersGroup.add(r),this.boxHelper=new of(new wn,65535),this.helpersGroup.add(this.boxHelper),this.updateHelperVisibility()}updateHelperVisibility(){this.helpersGroup&&(this.helpersGroup.visible=this.config.showHelpers)}updateBackgroundColor(){this.scene.background=new Ve(this.config.background)}updateCameraPosition(){this.camera.position.z=this.config.zoom,this.camera.updateProjectionMatrix()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setupControls(){const e=document.createElement("div");e.className="control-panel";const t=document.createElement("h3");t.textContent="Controls",e.appendChild(t);const n=document.createElement("div");n.className="control-group";const i=document.createElement("div");i.textContent="Export",i.className="group-title",n.appendChild(i);const r=document.createElement("div");r.className="button-group";const o=document.createElement("button");o.textContent="Video",o.addEventListener("click",()=>{if(!this.isRecording){o.disabled=!0,o.textContent="Preparing...",this.startRecording();const u=()=>{if(this.isRecording){const p=Math.round(this.recordingFrames/(this.config.video.fps*this.config.video.duration)*100);o.textContent=`${p}%`,requestAnimationFrame(u)}else o.disabled=!1,o.textContent="Video"};u()}}),r.appendChild(o);const a=document.createElement("button");a.textContent="GLTF",a.addEventListener("click",()=>{this.exportToGLTF()}),r.appendChild(a),n.appendChild(r),e.appendChild(n);const c=document.createElement("div");c.className="control-group";const l=document.createElement("div");l.textContent="Upload SVG",l.className="group-title",c.appendChild(l);const h=document.createElement("input");h.type="file",h.accept=".svg",h.className="file-input",h.addEventListener("change",u=>{const p=u.target.files[0];if(p){const d=new FileReader;d.onload=g=>{const _=g.target.result,m=new Blob([_],{type:"image/svg+xml"}),f=URL.createObjectURL(m);this.loadSVG(f)},d.readAsText(p)}}),c.appendChild(h),e.appendChild(c),this.addControlGroup(e,"Text Input",[{name:"Text",type:"text",value:this.config.text.content,callback:u=>{this.config.text.content=u,u&&this.generateText()}},{name:"Text Size",min:10,max:200,step:1,value:this.config.text.size,callback:u=>{this.config.text.size=Number(u),this.config.text.content&&this.generateText()}},{name:"Text Depth",min:0,max:50,step:.5,value:this.config.text.extrusion,callback:u=>{this.config.text.extrusion=Number(u),this.config.text.content&&this.generateText()}}]),this.addControlGroup(e,"Size Settings",[{name:"Scale",min:1,max:50,step:.5,value:this.config.size.scale,callback:u=>{this.config.size.scale=Number(u),this.regenerateDebounced()}}]),this.addControlGroup(e,"Extrusion Settings",[{name:"Depth",min:.1,max:100,step:.1,value:this.config.extrusion.depth,callback:u=>{this.config.extrusion.depth=Number(u),this.regenerateDebounced()}}]),this.addControlGroup(e,"Bevel Settings",[{name:"Thickness",min:0,max:10,step:.1,value:this.config.extrusion.bevelThickness,callback:u=>{this.config.extrusion.bevelThickness=Number(u),this.regenerateDebounced()}},{name:"Size",min:0,max:10,step:.1,value:this.config.extrusion.bevelSize,callback:u=>{this.config.extrusion.bevelSize=Number(u),this.regenerateDebounced()}},{name:"Segments",min:1,max:100,value:this.config.extrusion.bevelSegments,callback:u=>{this.config.extrusion.bevelSegments=Number(u),this.regenerateDebounced()}},{name:"Enable Bevel",type:"checkbox",checked:this.config.extrusion.bevelEnabled,callback:u=>{this.config.extrusion.bevelEnabled=u,this.regenerateDebounced()}}]),this.addControlGroup(e,"Animation",[{name:"Rotation Speed",min:0,max:.2,step:.001,value:this.config.rotation.speed,callback:u=>{this.config.rotation.speed=Number(u)}},{name:"Enable Rotation",type:"checkbox",checked:this.config.rotation.enabled,callback:u=>{this.config.rotation.enabled=u}}]),this.addControlGroup(e,"Visual Settings",[{name:"Background Color",type:"color",value:this.config.background,callback:u=>{this.config.background=u,this.updateBackgroundColor()}},{name:"Zoom",min:5,max:200,step:1,value:this.config.zoom,callback:u=>{this.config.zoom=Number(u),this.updateCameraPosition()}},{name:"Show Helpers",type:"checkbox",checked:this.config.showHelpers,callback:u=>{this.config.showHelpers=u,this.updateHelperVisibility()}},{name:"Merge Meshes",type:"checkbox",checked:this.config.mergeMeshes,callback:u=>{this.config.mergeMeshes=u,this.regenerateDebounced()}}]),this.addControlGroup(e,"Material Type",[{name:"Material",type:"select",options:[{value:"matcap1",label:"Matcap 1"},{value:"matcap2",label:"Matcap 2"},{value:"matcap3",label:"Matcap 3"},{value:"matcap4",label:"Matcap 4"},{value:"matcap5",label:"Matcap 5"},{value:"matcap6",label:"Matcap 6"},{value:"matcap7",label:"Matcap 7"},{value:"matcap8",label:"Matcap 8"},{value:"matcap9",label:"Matcap 9"},{value:"matcap10",label:"Matcap 10"},{value:"standard",label:"Standard"},{value:"basic",label:"Basic"}],value:this.config.materialType,callback:u=>{this.config.materialType=u,this.regenerateDebounced()}}]),this.addControlGroup(e,"Material Settings",[{name:"Base Color",type:"color",value:this.config.material.baseColor,callback:u=>{this.config.material.baseColor=u,this.regenerateDebounced()}},{name:"Double Layer",type:"checkbox",checked:this.config.material.doubleLayer,callback:u=>{this.config.material.doubleLayer=u,this.regenerateDebounced()}},{name:"Blend Mode",type:"select",options:[{value:"normal",label:"Normal"},{value:"additive",label:"Additive (Screen)"},{value:"multiply",label:"Multiply"}],value:this.config.material.blendMode,callback:u=>{this.config.material.blendMode=u,this.regenerateDebounced()}},{name:"Opacity",min:0,max:1,step:.05,value:this.config.material.opacity,callback:u=>{this.config.material.opacity=Number(u),this.regenerateDebounced()}},{name:"Wireframe",type:"checkbox",checked:this.config.material.wireframe,callback:u=>{this.config.material.wireframe=u,this.regenerateDebounced()}}]),this.addControlGroup(e,"Video Export",[{name:"Format",type:"select",options:[{value:"webm",label:"WebM (Best Quality)"},{value:"gif",label:"GIF (Smaller Size)"}],value:this.config.video.format,callback:u=>{this.config.video.format=u}},{name:"Aspect Ratio",type:"select",options:[{value:"16:9",label:"16:9 Landscape (1920×1080)"},{value:"9:16",label:"9:16 Portrait (1080×1920)"},{value:"1:1",label:"1:1 Square (1080×1080)"},{value:"4:3",label:"4:3 Classic (1440×1080)"}],value:this.config.video.aspectRatio,callback:u=>{this.config.video.aspectRatio=u,this.updateVideoResolution()}},{name:"FPS",min:24,max:60,step:1,value:this.config.video.fps,callback:u=>{this.config.video.fps=Number(u)}},{name:"Rotations",min:1,max:4,step:1,value:1,callback:u=>{const p=Number(u);this.config.video.rotations=p}}]),document.body.appendChild(e)}addControlGroup(e,t,n){const i=document.createElement("div");i.className="control-group";const r=document.createElement("div");r.textContent=t,r.className="group-title",i.appendChild(r),n.forEach(o=>{const a=document.createElement("div");a.className="control-row";const c=document.createElement("label");c.textContent=o.name+": ",a.appendChild(c);let l;if(o.type==="checkbox")l=document.createElement("input"),l.type="checkbox",l.checked=o.checked,l.addEventListener("change",()=>o.callback(l.checked)),a.appendChild(l);else if(o.type==="color")l=document.createElement("input"),l.type="color",l.value=o.value,l.addEventListener("input",()=>o.callback(l.value)),a.appendChild(l);else if(o.type==="select")l=document.createElement("select"),o.options.forEach(h=>{const u=document.createElement("option");u.value=h.value,u.textContent=h.label,l.appendChild(u)}),l.value=o.value,l.addEventListener("change",()=>o.callback(l.value)),a.appendChild(l);else if(o.type==="text")l=document.createElement("input"),l.type="text",l.value=o.value,l.addEventListener("input",()=>o.callback(l.value)),a.appendChild(l);else{l=document.createElement("input"),l.type="range",l.min=o.min,l.max=o.max,l.step=o.step||1,l.value=o.value;const h=document.createElement("span");h.textContent=o.value,h.className="value-display",l.addEventListener("input",()=>{const u=l.value;h.textContent=u,o.callback(u)}),a.appendChild(l),a.appendChild(h)}i.appendChild(a)}),e.appendChild(i)}loadSVG(e){this.clearSVGGroup(),this.statusElement.textContent="Loading SVG...",new jo().load(e,n=>this.processSVG(n),n=>{this.statusElement.textContent=`Loading: ${Math.round(n.loaded/n.total*100)}%`},n=>{console.error("Error loading SVG:",n),this.statusElement.textContent=`Error loading SVG: ${n.message}`})}clearSVGGroup(){this.disposeObject(this.svgGroup),this.svgGroup.position.set(0,0,0),this.svgGroup.rotation.set(0,0,0),this.svgGroup.scale.set(1,1,1)}disposeObject(e){for(;e.children.length>0;){const t=e.children[0];this.disposeObject(t),e.remove(t)}e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>this.disposeMaterial(t)):this.disposeMaterial(e.material))}disposeMaterial(e){for(const t in e){const n=e[t];n&&typeof n=="object"&&"isTexture"in n&&n.dispose()}e.dispose()}processSVG(e){this.statusElement.textContent="Processing SVG...",console.log("SVG loaded successfully");const t=e.paths;if(console.log(`Found ${t.length} paths in SVG`),t.length===0){this.statusElement.textContent="Error: No paths found in SVG";return}this.svgData=e,this.generate3D()}createMaterial(){if(this.config.material.wireframe)return new Gn({color:new Ve(this.config.material.baseColor),side:vt,wireframe:!0,transparent:this.config.material.doubleLayer,opacity:this.config.material.doubleLayer?this.config.material.opacity:1,blending:this.getBlendMode()});const e=this.config.materialType.match(/^matcap(\d+)$/);if(e){const t=parseInt(e[1]);if(t>=1&&t<=10){const n=this[`matcapTexture${t}`];return n?this.config.material.doubleLayer?[new Ua({matcap:n,side:vt,transparent:!1,blending:this.getBlendMode()}),new Gn({color:new Ve(this.config.material.baseColor),side:vt,transparent:!0,opacity:this.config.material.opacity,blending:this.getBlendMode()})]:new Ua({matcap:n,side:vt,transparent:!1}):(console.warn(`Matcap texture ${t} not loaded, falling back to basic`),new Gn({color:3368652,side:vt}))}}switch(this.config.materialType){case"standard":return new Ou({color:new Ve(this.config.material.baseColor),metalness:.5,roughness:.5,side:vt,transparent:this.config.material.doubleLayer,opacity:this.config.material.doubleLayer?this.config.material.opacity:1,wireframe:this.config.material.wireframe});case"basic":default:return new Gn({color:new Ve(this.config.material.baseColor),side:vt,transparent:this.config.material.doubleLayer,opacity:this.config.material.doubleLayer?this.config.material.opacity:1,wireframe:this.config.material.wireframe})}}generate3D(){if(!this.svgData)return;this.clearSVGGroup();const e=this.svgData.paths,t=this.createMaterial(),n=[];for(let i=0;i<e.length;i++){const r=e[i];try{const o=r.toShapes(!0);if(o.length===0){console.warn(`Path ${i} has no shapes`);continue}for(let a=0;a<o.length;a++){const c=o[a],l={depth:this.config.extrusion.depth,bevelEnabled:this.config.extrusion.bevelEnabled,bevelThickness:this.config.extrusion.bevelThickness,bevelSize:this.config.extrusion.bevelSize,bevelSegments:this.config.extrusion.bevelSegments},h=new $s(c,l);h.applyMatrix4(new st().makeScale(1,-1,1)),n.push(h)}}catch(o){console.error(`Error processing path ${i}:`,o)}}if(n.length>0){let i;if(this.config.mergeMeshes)try{i=Sc(n)}catch(r){console.error("Error merging geometries:",r),i=n[0]}else{i=new Tt;const r=Sc(n);i.copy(r)}if(i.center(),Array.isArray(t))t.forEach(r=>{const o=new Dt(i.clone(),r);this.svgGroup.add(o)});else{const r=new Dt(i,t);this.svgGroup.add(r)}n.forEach(r=>r.dispose())}this.config.materialType==="standard"&&this.addLighting(),this.centerSVG(),this.statusElement.textContent=`SVG converted to 3D: ${e.length} paths, ${this.svgGroup.children.length} meshes`}addLighting(){this.scene.children.forEach(n=>{n.isLight&&this.scene.remove(n)});const e=new Ba(4210752,.5);this.scene.add(e);const t=new Oa(16777215,1);t.position.set(1,1,1),this.scene.add(t)}regenerate3D(){const e=new Jt().copy(this.svgGroup.rotation);this.svgGroup.rotation.set(0,0,0),this.config.text.content?this.generateText():this.generate3D(),this.svgGroup.rotation.copy(e)}centerSVG(){this.svgGroup.scale.set(1,1,1),this.svgGroup.updateMatrixWorld(!0);const e=new wn().setFromObject(this.svgGroup);if(e.isEmpty()){console.warn("Empty bounding box detected");return}const t=e.getSize(new G),n=Math.max(t.x,t.y),i=this.config.size.scale/n;if(this.svgGroup.scale.set(i,i,i),this.svgGroup.updateMatrixWorld(!0),this.boxHelper){const r=new wn().setFromObject(this.svgGroup);this.boxHelper.box.copy(r)}}exportToGLTF(){const e=this.svgGroup.clone(),t=new Gs;if(t.add(e),this.config.materialType==="standard"){const i=new Ba(4210752,.5);t.add(i);const r=new Oa(16777215,1);r.position.set(1,1,1),t.add(r)}new Xs().parse(t,i=>{const r=new Blob([i],{type:"application/octet-stream"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download="svg-3d-model.glb",o.click(),URL.revokeObjectURL(o.href)},i=>{console.error("Error exporting GLTF:",i),this.statusElement.textContent=`Error exporting: ${i.message}`},{binary:!0}),this.statusElement.textContent="Exporting model..."}updateVideoResolution(){switch(this.config.video.aspectRatio){case"16:9":this.config.video.width=1920,this.config.video.height=1080;break;case"9:16":this.config.video.width=1080,this.config.video.height=1920;break;case"1:1":this.config.video.width=1080,this.config.video.height=1080;break;case"4:3":this.config.video.width=1440,this.config.video.height=1080;break}}startRecording(){if(this.isRecording)return;let e=500,t=500;switch(this.config.video.aspectRatio){case"16:9":t=Math.round(e*(9/16));break;case"9:16":e=Math.round(t*(9/16));break;case"4:3":t=Math.round(e*(3/4));break}const n={format:this.config.video.format,workersPath:"./",framerate:this.config.video.fps,verbose:!1};this.config.video.format==="gif"?Object.assign(n,{quality:10,width:e,height:t,workers:2,workerScript:"./gif.worker.js",dithering:"FloydSteinberg"}):Object.assign(n,{quality:100,name:"animation"}),this.capturer=new q_(n);const r=Math.ceil(2*Math.PI/this.config.rotation.speed)*this.config.video.rotations;this.isRecording=!0,this.recordingFrames=0,this.totalFrames=r,this.gifDimensions={width:e,height:t},this.originalRotationSpeed=this.config.rotation.speed,this.originalCameraAspect=this.camera.aspect,this.svgGroup.rotation.y=0,this.capturer.start()}recordFrame(){this.isRecording&&(this.svgGroup.rotation.y+=this.config.rotation.speed,this.config.video.format==="gif"?(this.gifRenderer||(this.gifRenderer=new fc({antialias:!1,preserveDrawingBuffer:!0}),this.gifRenderer.setSize(this.gifDimensions.width,this.gifDimensions.height)),this.camera.aspect=this.gifDimensions.width/this.gifDimensions.height,this.camera.updateProjectionMatrix(),this.gifRenderer.render(this.scene,this.camera),this.capturer.capture(this.gifRenderer.domElement)):this.capturer.capture(this.renderer.domElement),this.recordingFrames++,this.statusElement.textContent=`Recording: ${Math.round(this.recordingFrames/this.totalFrames*100)}%`,this.recordingFrames>=this.totalFrames&&this.stopRecording())}stopRecording(){this.isRecording&&(this.isRecording=!1,this.statusElement.textContent="Processing video...",this.config.rotation.speed=this.originalRotationSpeed,this.originalCameraAspect&&(this.camera.aspect=this.originalCameraAspect,this.camera.updateProjectionMatrix()),this.capturer.stop(),this.capturer.save(e=>{const t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`animation.${this.config.video.format}`,n.click(),URL.revokeObjectURL(t),this.statusElement.textContent="Video saved!",this.gifRenderer&&(this.gifRenderer.dispose(),this.gifRenderer=null)}))}animate(e){requestAnimationFrame(t=>this.animate(t)),this.config.rotation.enabled&&this.svgGroup.children.length>0&&(this.svgGroup.rotation.y+=this.config.rotation.speed),this.controls.update(),this.renderer.render(this.scene,this.camera),this.isRecording&&this.recordFrame()}debounce(e,t){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>e.apply(this,i),t)}}getBlendMode(){switch(this.config.material.blendMode){case"additive":return Gr;case"multiply":return Vr;case"normal":default:return Hn}}async loadFont(e){return new Promise((t,n)=>{new C_().load(e,r=>{this.config.text.font=r,t(r)},void 0,r=>{console.error("Error loading font:",r),n(r)})})}generateText(){if(!this.config.text.font||!this.config.text.content)return;this.clearSVGGroup();const e=new I_(this.config.text.content,{font:this.config.text.font,size:this.config.text.size,height:this.config.text.extrusion,curveSegments:this.config.text.curveSegments,bevelEnabled:this.config.extrusion.bevelEnabled,bevelThickness:this.config.extrusion.bevelThickness,bevelSize:this.config.extrusion.bevelSize,bevelSegments:this.config.extrusion.bevelSegments});e.center();const t=this.createMaterial();if(Array.isArray(t))t.forEach(n=>{const i=new Dt(e.clone(),n);this.svgGroup.add(i)});else{const n=new Dt(e,t);this.svgGroup.add(n)}this.centerSVG(),this.statusElement.textContent="Text generated successfully"}}new Y_;
