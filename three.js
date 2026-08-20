/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
!function(t,e){"object"=3D=3Dtypeof exports&amp;&amp;"undefined"!=3Dtypeof =
module?e(exports):"function"=3D=3Dtypeof define&amp;&amp;define.amd?define(=
["exports"],e):e((t=3D"undefined"!=3Dtypeof globalThis?globalThis:t||self).=
THREE=3D{})}(this,(function(t){"use strict";const e=3D"128",n=3D100,i=3D300=
,r=3D301,s=3D302,a=3D303,o=3D304,l=3D306,c=3D307,h=3D1e3,u=3D1001,d=3D1002,=
p=3D1003,m=3D1004,f=3D1005,g=3D1006,v=3D1007,y=3D1008,x=3D1009,_=3D1012,w=
=3D1014,b=3D1015,M=3D1016,S=3D1020,T=3D1022,E=3D1023,A=3D1026,L=3D1027,R=3D=
33776,C=3D33777,P=3D33778,D=3D33779,I=3D35840,N=3D35841,B=3D35842,z=3D35843=
,F=3D37492,O=3D37496,H=3D2300,G=3D2301,U=3D2302,k=3D2400,V=3D2401,W=3D2402,=
j=3D2500,q=3D2501,X=3D3e3,Y=3D3001,Z=3D3007,J=3D3002,Q=3D3004,K=3D3005,$=3D=
3006,tt=3D7680,et=3D35044,nt=3D35048,it=3D"300 es";class rt{addEventListene=
r(t,e){void 0=3D=3D=3Dthis._listeners&amp;&amp;(this._listeners=3D{});const=
 n=3Dthis._listeners;void 0=3D=3D=3Dn[t]&amp;&amp;(n[t]=3D[]),-1=3D=3D=3Dn[=
t].indexOf(e)&amp;&amp;n[t].push(e)}hasEventListener(t,e){if(void 0=3D=3D=
=3Dthis._listeners)return!1;const n=3Dthis._listeners;return void 0!=3D=3Dn=
[t]&amp;&amp;-1!=3D=3Dn[t].indexOf(e)}removeEventListener(t,e){if(void 0=3D=
=3D=3Dthis._listeners)return;const n=3Dthis._listeners[t];if(void 0!=3D=3Dn=
){const t=3Dn.indexOf(e);-1!=3D=3Dt&amp;&amp;n.splice(t,1)}}dispatchEvent(t=
){if(void 0=3D=3D=3Dthis._listeners)return;const e=3Dthis._listeners[t.type=
];if(void 0!=3D=3De){t.target=3Dthis;const n=3De.slice(0);for(let e=3D0,i=
=3Dn.length;e&lt;i;e++)n[e].call(this,t);t.target=3Dnull}}}const st=3D[];fo=
r(let t=3D0;t&lt;256;t++)st[t]=3D(t&lt;16?"0":"")+t.toString(16);let at=3D1=
234567;const ot=3DMath.PI/180,lt=3D180/Math.PI;function ct(){const t=3D4294=
967295*Math.random()|0,e=3D4294967295*Math.random()|0,n=3D4294967295*Math.r=
andom()|0,i=3D4294967295*Math.random()|0;return(st[255&amp;t]+st[t&gt;&gt;8=
&amp;255]+st[t&gt;&gt;16&amp;255]+st[t&gt;&gt;24&amp;255]+"-"+st[255&amp;e]=
+st[e&gt;&gt;8&amp;255]+"-"+st[e&gt;&gt;16&amp;15|64]+st[e&gt;&gt;24&amp;25=
5]+"-"+st[63&amp;n|128]+st[n&gt;&gt;8&amp;255]+"-"+st[n&gt;&gt;16&amp;255]+=
st[n&gt;&gt;24&amp;255]+st[255&amp;i]+st[i&gt;&gt;8&amp;255]+st[i&gt;&gt;16=
&amp;255]+st[i&gt;&gt;24&amp;255]).toUpperCase()}function ht(t,e,n){return =
Math.max(e,Math.min(n,t))}function ut(t,e){return(t%e+e)%e}function dt(t,e,=
n){return(1-n)*t+n*e}function pt(t){return 0=3D=3D(t&amp;t-1)&amp;&amp;0!=
=3D=3Dt}function mt(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}f=
unction ft(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}var gt=3D=
Object.freeze({__proto__:null,DEG2RAD:ot,RAD2DEG:lt,generateUUID:ct,clamp:h=
t,euclideanModulo:ut,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-=
e)},inverseLerp:function(t,e,n){return t!=3D=3De?(n-t)/(e-t):0},lerp:dt,dam=
p:function(t,e,n,i){return dt(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=
=3D1){return e-Math.abs(ut(t,2*e)-e)},smoothstep:function(t,e,n){return t&l=
t;=3De?0:t&gt;=3Dn?1:(t=3D(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e=
,n){return t&lt;=3De?0:t&gt;=3Dn?1:(t=3D(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},r=
andInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:=
function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){ret=
urn t*(.5-Math.random())},seededRandom:function(t){return void 0!=3D=3Dt&am=
p;&amp;(at=3Dt%2147483647),at=3D16807*at%2147483647,(at-1)/2147483646},degT=
oRad:function(t){return t*ot},radToDeg:function(t){return t*lt},isPowerOfTw=
o:pt,ceilPowerOfTwo:mt,floorPowerOfTwo:ft,setQuaternionFromProperEuler:func=
tion(t,e,n,i,r){const s=3DMath.cos,a=3DMath.sin,o=3Ds(n/2),l=3Da(n/2),c=3Ds=
((e+i)/2),h=3Da((e+i)/2),u=3Ds((e-i)/2),d=3Da((e-i)/2),p=3Ds((i-e)/2),m=3Da=
((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(=
l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.s=
et(o*h,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*m,o*c);break;case"ZYZ":=
t.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQua=
ternionFromProperEuler() encountered an unknown order: "+r)}}});class vt{co=
nstructor(t=3D0,e=3D0){this.x=3Dt,this.y=3De}get width(){return this.x}set =
width(t){this.x=3Dt}get height(){return this.y}set height(t){this.y=3Dt}set=
(t,e){return this.x=3Dt,this.y=3De,this}setScalar(t){return this.x=3Dt,this=
.y=3Dt,this}setX(t){return this.x=3Dt,this}setY(t){return this.y=3Dt,this}s=
etComponent(t,e){switch(t){case 0:this.x=3De;break;case 1:this.y=3De;break;=
default:throw new Error("index is out of range: "+t)}return this}getCompone=
nt(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new=
 Error("index is out of range: "+t)}}clone(){return new this.constructor(th=
is.x,this.y)}copy(t){return this.x=3Dt.x,this.y=3Dt.y,this}add(t,e){return =
void 0!=3D=3De?(console.warn("THREE.Vector2: .add() now only accepts one ar=
gument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=
=3Dt.x,this.y+=3Dt.y,this)}addScalar(t){return this.x+=3Dt,this.y+=3Dt,this=
}addVectors(t,e){return this.x=3Dt.x+e.x,this.y=3Dt.y+e.y,this}addScaledVec=
tor(t,e){return this.x+=3Dt.x*e,this.y+=3Dt.y*e,this}sub(t,e){return void 0=
!=3D=3De?(console.warn("THREE.Vector2: .sub() now only accepts one argument=
. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=3Dt.x,t=
his.y-=3Dt.y,this)}subScalar(t){return this.x-=3Dt,this.y-=3Dt,this}subVect=
ors(t,e){return this.x=3Dt.x-e.x,this.y=3Dt.y-e.y,this}multiply(t){return t=
his.x*=3Dt.x,this.y*=3Dt.y,this}multiplyScalar(t){return this.x*=3Dt,this.y=
*=3Dt,this}divide(t){return this.x/=3Dt.x,this.y/=3Dt.y,this}divideScalar(t=
){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=3Dthis.x,n=3Dthis=
.y,i=3Dt.elements;return this.x=3Di[0]*e+i[3]*n+i[6],this.y=3Di[1]*e+i[4]*n=
+i[7],this}min(t){return this.x=3DMath.min(this.x,t.x),this.y=3DMath.min(th=
is.y,t.y),this}max(t){return this.x=3DMath.max(this.x,t.x),this.y=3DMath.ma=
x(this.y,t.y),this}clamp(t,e){return this.x=3DMath.max(t.x,Math.min(e.x,thi=
s.x)),this.y=3DMath.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){ret=
urn this.x=3DMath.max(t,Math.min(e,this.x)),this.y=3DMath.max(t,Math.min(e,=
this.y)),this}clampLength(t,e){const n=3Dthis.length();return this.divideSc=
alar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=
=3DMath.floor(this.x),this.y=3DMath.floor(this.y),this}ceil(){return this.x=
=3DMath.ceil(this.x),this.y=3DMath.ceil(this.y),this}round(){return this.x=
=3DMath.round(this.x),this.y=3DMath.round(this.y),this}roundToZero(){return=
 this.x=3Dthis.x&lt;0?Math.ceil(this.x):Math.floor(this.x),this.y=3Dthis.y&=
lt;0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=3D-th=
is.x,this.y=3D-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){ret=
urn this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}len=
gth(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){retur=
n Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(th=
is.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distance=
To(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){cons=
t e=3Dthis.x-t.x,n=3Dthis.y-t.y;return e*e+n*n}manhattanDistanceTo(t){retur=
n Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normal=
ize().multiplyScalar(t)}lerp(t,e){return this.x+=3D(t.x-this.x)*e,this.y+=
=3D(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=3Dt.x+(e.x-t.x)*n,t=
his.y=3Dt.y+(e.y-t.y)*n,this}equals(t){return t.x=3D=3D=3Dthis.x&amp;&amp;t=
.y=3D=3D=3Dthis.y}fromArray(t,e=3D0){return this.x=3Dt[e],this.y=3Dt[e+1],t=
his}toArray(t=3D[],e=3D0){return t[e]=3Dthis.x,t[e+1]=3Dthis.y,t}fromBuffer=
Attribute(t,e,n){return void 0!=3D=3Dn&amp;&amp;console.warn("THREE.Vector2=
: offset has been removed from .fromBufferAttribute()."),this.x=3Dt.getX(e)=
,this.y=3Dt.getY(e),this}rotateAround(t,e){const n=3DMath.cos(e),i=3DMath.s=
in(e),r=3Dthis.x-t.x,s=3Dthis.y-t.y;return this.x=3Dr*n-s*i+t.x,this.y=3Dr*=
i+s*n+t.y,this}random(){return this.x=3DMath.random(),this.y=3DMath.random(=
),this}}vt.prototype.isVector2=3D!0;class yt{constructor(){this.elements=3D=
[1,0,0,0,1,0,0,0,1],arguments.length&gt;0&amp;&amp;console.error("THREE.Mat=
rix3: the constructor no longer reads arguments. use .set() instead.")}set(=
t,e,n,i,r,s,a,o,l){const c=3Dthis.elements;return c[0]=3Dt,c[1]=3Di,c[2]=3D=
a,c[3]=3De,c[4]=3Dr,c[5]=3Do,c[6]=3Dn,c[7]=3Ds,c[8]=3Dl,this}identity(){ret=
urn this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=3Dthis.elements,n=3Dt.=
elements;return e[0]=3Dn[0],e[1]=3Dn[1],e[2]=3Dn[2],e[3]=3Dn[3],e[4]=3Dn[4]=
,e[5]=3Dn[5],e[6]=3Dn[6],e[7]=3Dn[7],e[8]=3Dn[8],this}extractBasis(t,e,n){r=
eturn t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFr=
omMatrix3Column(this,2),this}setFromMatrix4(t){const e=3Dt.elements;return =
this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){re=
turn this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatri=
ces(t,this)}multiplyMatrices(t,e){const n=3Dt.elements,i=3De.elements,r=3Dt=
his.elements,s=3Dn[0],a=3Dn[3],o=3Dn[6],l=3Dn[1],c=3Dn[4],h=3Dn[7],u=3Dn[2]=
,d=3Dn[5],p=3Dn[8],m=3Di[0],f=3Di[3],g=3Di[6],v=3Di[1],y=3Di[4],x=3Di[7],_=
=3Di[2],w=3Di[5],b=3Di[8];return r[0]=3Ds*m+a*v+o*_,r[3]=3Ds*f+a*y+o*w,r[6]=
=3Ds*g+a*x+o*b,r[1]=3Dl*m+c*v+h*_,r[4]=3Dl*f+c*y+h*w,r[7]=3Dl*g+c*x+h*b,r[2=
]=3Du*m+d*v+p*_,r[5]=3Du*f+d*y+p*w,r[8]=3Du*g+d*x+p*b,this}multiplyScalar(t=
){const e=3Dthis.elements;return e[0]*=3Dt,e[3]*=3Dt,e[6]*=3Dt,e[1]*=3Dt,e[=
4]*=3Dt,e[7]*=3Dt,e[2]*=3Dt,e[5]*=3Dt,e[8]*=3Dt,this}determinant(){const t=
=3Dthis.elements,e=3Dt[0],n=3Dt[1],i=3Dt[2],r=3Dt[3],s=3Dt[4],a=3Dt[5],o=3D=
t[6],l=3Dt[7],c=3Dt[8];return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){=
const t=3Dthis.elements,e=3Dt[0],n=3Dt[1],i=3Dt[2],r=3Dt[3],s=3Dt[4],a=3Dt[=
5],o=3Dt[6],l=3Dt[7],c=3Dt[8],h=3Dc*s-a*l,u=3Da*o-c*r,d=3Dl*r-s*o,p=3De*h+n=
*u+i*d;if(0=3D=3D=3Dp)return this.set(0,0,0,0,0,0,0,0,0);const m=3D1/p;retu=
rn t[0]=3Dh*m,t[1]=3D(i*l-c*n)*m,t[2]=3D(a*n-i*s)*m,t[3]=3Du*m,t[4]=3D(c*e-=
i*o)*m,t[5]=3D(i*r-a*e)*m,t[6]=3Dd*m,t[7]=3D(n*o-l*e)*m,t[8]=3D(s*e-n*r)*m,=
this}transpose(){let t;const e=3Dthis.elements;return t=3De[1],e[1]=3De[3],=
e[3]=3Dt,t=3De[2],e[2]=3De[6],e[6]=3Dt,t=3De[5],e[5]=3De[7],e[7]=3Dt,this}g=
etNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transp=
oseIntoArray(t){const e=3Dthis.elements;return t[0]=3De[0],t[1]=3De[3],t[2]=
=3De[6],t[3]=3De[1],t[4]=3De[4],t[5]=3De[7],t[6]=3De[2],t[7]=3De[5],t[8]=3D=
e[8],this}setUvTransform(t,e,n,i,r,s,a){const o=3DMath.cos(r),l=3DMath.sin(=
r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,=
1),this}scale(t,e){const n=3Dthis.elements;return n[0]*=3Dt,n[3]*=3Dt,n[6]*=
=3Dt,n[1]*=3De,n[4]*=3De,n[7]*=3De,this}rotate(t){const e=3DMath.cos(t),n=
=3DMath.sin(t),i=3Dthis.elements,r=3Di[0],s=3Di[3],a=3Di[6],o=3Di[1],l=3Di[=
4],c=3Di[7];return i[0]=3De*r+n*o,i[3]=3De*s+n*l,i[6]=3De*a+n*c,i[1]=3D-n*r=
+e*o,i[4]=3D-n*s+e*l,i[7]=3D-n*a+e*c,this}translate(t,e){const n=3Dthis.ele=
ments;return n[0]+=3Dt*n[2],n[3]+=3Dt*n[5],n[6]+=3Dt*n[8],n[1]+=3De*n[2],n[=
4]+=3De*n[5],n[7]+=3De*n[8],this}equals(t){const e=3Dthis.elements,n=3Dt.el=
ements;for(let t=3D0;t&lt;9;t++)if(e[t]!=3D=3Dn[t])return!1;return!0}fromAr=
ray(t,e=3D0){for(let n=3D0;n&lt;9;n++)this.elements[n]=3Dt[n+e];return this=
}toArray(t=3D[],e=3D0){const n=3Dthis.elements;return t[e]=3Dn[0],t[e+1]=3D=
n[1],t[e+2]=3Dn[2],t[e+3]=3Dn[3],t[e+4]=3Dn[4],t[e+5]=3Dn[5],t[e+6]=3Dn[6],=
t[e+7]=3Dn[7],t[e+8]=3Dn[8],t}clone(){return(new this.constructor).fromArra=
y(this.elements)}}let xt;yt.prototype.isMatrix3=3D!0;class _t{static getDat=
aURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"=3D=3Dtypeof HT=
MLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=3Dt;=
else{void 0=3D=3D=3Dxt&amp;&amp;(xt=3Ddocument.createElementNS("http://www.=
w3.org/1999/xhtml","canvas")),xt.width=3Dt.width,xt.height=3Dt.height;const=
 n=3Dxt.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.dra=
wImage(t,0,0,t.width,t.height),e=3Dxt}return e.width&gt;2048||e.height&gt;2=
048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for =
performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/pn=
g")}}let wt=3D0;class bt extends rt{constructor(t=3Dbt.DEFAULT_IMAGE,e=3Dbt=
.DEFAULT_MAPPING,n=3D1001,i=3D1001,r=3D1006,s=3D1008,a=3D1023,o=3D1009,l=3D=
1,c=3D3e3){super(),Object.defineProperty(this,"id",{value:wt++}),this.uuid=
=3Dct(),this.name=3D"",this.image=3Dt,this.mipmaps=3D[],this.mapping=3De,th=
is.wrapS=3Dn,this.wrapT=3Di,this.magFilter=3Dr,this.minFilter=3Ds,this.anis=
otropy=3Dl,this.format=3Da,this.internalFormat=3Dnull,this.type=3Do,this.of=
fset=3Dnew vt(0,0),this.repeat=3Dnew vt(1,1),this.center=3Dnew vt(0,0),this=
.rotation=3D0,this.matrixAutoUpdate=3D!0,this.matrix=3Dnew yt,this.generate=
Mipmaps=3D!0,this.premultiplyAlpha=3D!1,this.flipY=3D!0,this.unpackAlignmen=
t=3D4,this.encoding=3Dc,this.version=3D0,this.onUpdate=3Dnull}updateMatrix(=
){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this=
.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new thi=
s.constructor).copy(this)}copy(t){return this.name=3Dt.name,this.image=3Dt.=
image,this.mipmaps=3Dt.mipmaps.slice(0),this.mapping=3Dt.mapping,this.wrapS=
=3Dt.wrapS,this.wrapT=3Dt.wrapT,this.magFilter=3Dt.magFilter,this.minFilter=
=3Dt.minFilter,this.anisotropy=3Dt.anisotropy,this.format=3Dt.format,this.i=
nternalFormat=3Dt.internalFormat,this.type=3Dt.type,this.offset.copy(t.offs=
et),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=3Dt=
.rotation,this.matrixAutoUpdate=3Dt.matrixAutoUpdate,this.matrix.copy(t.mat=
rix),this.generateMipmaps=3Dt.generateMipmaps,this.premultiplyAlpha=3Dt.pre=
multiplyAlpha,this.flipY=3Dt.flipY,this.unpackAlignment=3Dt.unpackAlignment=
,this.encoding=3Dt.encoding,this}toJSON(t){const e=3Dvoid 0=3D=3D=3Dt||"str=
ing"=3D=3Dtypeof t;if(!e&amp;&amp;void 0!=3D=3Dt.textures[this.uuid])return=
 t.textures[this.uuid];const n=3D{metadata:{version:4.5,type:"Texture",gene=
rator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,=
repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],c=
enter:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS=
,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFi=
lter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,fli=
pY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.u=
npackAlignment};if(void 0!=3D=3Dthis.image){const i=3Dthis.image;if(void 0=
=3D=3D=3Di.uuid&amp;&amp;(i.uuid=3Dct()),!e&amp;&amp;void 0=3D=3D=3Dt.image=
s[i.uuid]){let e;if(Array.isArray(i)){e=3D[];for(let t=3D0,n=3Di.length;t&l=
t;n;t++)i[t].isDataTexture?e.push(Mt(i[t].image)):e.push(Mt(i[t]))}else e=
=3DMt(i);t.images[i.uuid]=3D{uuid:i.uuid,url:e}}n.image=3Di.uuid}return e||=
(t.textures[this.uuid]=3Dn),n}dispose(){this.dispatchEvent({type:"dispose"}=
)}transformUv(t){if(this.mapping!=3D=3Di)return t;if(t.applyMatrix3(this.ma=
trix),t.x&lt;0||t.x&gt;1)switch(this.wrapS){case h:t.x=3Dt.x-Math.floor(t.x=
);break;case u:t.x=3Dt.x&lt;0?0:1;break;case d:1=3D=3D=3DMath.abs(Math.floo=
r(t.x)%2)?t.x=3DMath.ceil(t.x)-t.x:t.x=3Dt.x-Math.floor(t.x)}if(t.y&lt;0||t=
.y&gt;1)switch(this.wrapT){case h:t.y=3Dt.y-Math.floor(t.y);break;case u:t.=
y=3Dt.y&lt;0?0:1;break;case d:1=3D=3D=3DMath.abs(Math.floor(t.y)%2)?t.y=3DM=
ath.ceil(t.y)-t.y:t.y=3Dt.y-Math.floor(t.y)}return this.flipY&amp;&amp;(t.y=
=3D1-t.y),t}set needsUpdate(t){!0=3D=3D=3Dt&amp;&amp;this.version++}}functi=
on Mt(t){return"undefined"!=3Dtypeof HTMLImageElement&amp;&amp;t instanceof=
 HTMLImageElement||"undefined"!=3Dtypeof HTMLCanvasElement&amp;&amp;t insta=
nceof HTMLCanvasElement||"undefined"!=3Dtypeof ImageBitmap&amp;&amp;t insta=
nceof ImageBitmap?_t.getDataURL(t):t.data?{data:Array.prototype.slice.call(=
t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(consol=
e.warn("THREE.Texture: Unable to serialize Texture."),{})}bt.DEFAULT_IMAGE=
=3Dvoid 0,bt.DEFAULT_MAPPING=3Di,bt.prototype.isTexture=3D!0;class St{const=
ructor(t=3D0,e=3D0,n=3D0,i=3D1){this.x=3Dt,this.y=3De,this.z=3Dn,this.w=3Di=
}get width(){return this.z}set width(t){this.z=3Dt}get height(){return this=
.w}set height(t){this.w=3Dt}set(t,e,n,i){return this.x=3Dt,this.y=3De,this.=
z=3Dn,this.w=3Di,this}setScalar(t){return this.x=3Dt,this.y=3Dt,this.z=3Dt,=
this.w=3Dt,this}setX(t){return this.x=3Dt,this}setY(t){return this.y=3Dt,th=
is}setZ(t){return this.z=3Dt,this}setW(t){return this.w=3Dt,this}setCompone=
nt(t,e){switch(t){case 0:this.x=3De;break;case 1:this.y=3De;break;case 2:th=
is.z=3De;break;case 3:this.w=3De;break;default:throw new Error("index is ou=
t of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x=
;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:thr=
ow new Error("index is out of range: "+t)}}clone(){return new this.construc=
tor(this.x,this.y,this.z,this.w)}copy(t){return this.x=3Dt.x,this.y=3Dt.y,t=
his.z=3Dt.z,this.w=3Dvoid 0!=3D=3Dt.w?t.w:1,this}add(t,e){return void 0!=3D=
=3De?(console.warn("THREE.Vector4: .add() now only accepts one argument. Us=
e .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=3Dt.x,this.=
y+=3Dt.y,this.z+=3Dt.z,this.w+=3Dt.w,this)}addScalar(t){return this.x+=3Dt,=
this.y+=3Dt,this.z+=3Dt,this.w+=3Dt,this}addVectors(t,e){return this.x=3Dt.=
x+e.x,this.y=3Dt.y+e.y,this.z=3Dt.z+e.z,this.w=3Dt.w+e.w,this}addScaledVect=
or(t,e){return this.x+=3Dt.x*e,this.y+=3Dt.y*e,this.z+=3Dt.z*e,this.w+=3Dt.=
w*e,this}sub(t,e){return void 0!=3D=3De?(console.warn("THREE.Vector4: .sub(=
) now only accepts one argument. Use .subVectors( a, b ) instead."),this.su=
bVectors(t,e)):(this.x-=3Dt.x,this.y-=3Dt.y,this.z-=3Dt.z,this.w-=3Dt.w,thi=
s)}subScalar(t){return this.x-=3Dt,this.y-=3Dt,this.z-=3Dt,this.w-=3Dt,this=
}subVectors(t,e){return this.x=3Dt.x-e.x,this.y=3Dt.y-e.y,this.z=3Dt.z-e.z,=
this.w=3Dt.w-e.w,this}multiply(t){return this.x*=3Dt.x,this.y*=3Dt.y,this.z=
*=3Dt.z,this.w*=3Dt.w,this}multiplyScalar(t){return this.x*=3Dt,this.y*=3Dt=
,this.z*=3Dt,this.w*=3Dt,this}applyMatrix4(t){const e=3Dthis.x,n=3Dthis.y,i=
=3Dthis.z,r=3Dthis.w,s=3Dt.elements;return this.x=3Ds[0]*e+s[4]*n+s[8]*i+s[=
12]*r,this.y=3Ds[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=3Ds[2]*e+s[6]*n+s[10]*i+=
s[14]*r,this.w=3Ds[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return =
this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=3D2*Math.acos=
(t.w);const e=3DMath.sqrt(1-t.w*t.w);return e&lt;1e-4?(this.x=3D1,this.y=3D=
0,this.z=3D0):(this.x=3Dt.x/e,this.y=3Dt.y/e,this.z=3Dt.z/e),this}setAxisAn=
gleFromRotationMatrix(t){let e,n,i,r;const s=3D.01,a=3D.1,o=3Dt.elements,l=
=3Do[0],c=3Do[4],h=3Do[8],u=3Do[1],d=3Do[5],p=3Do[9],m=3Do[2],f=3Do[6],g=3D=
o[10];if(Math.abs(c-u)&lt;s&amp;&amp;Math.abs(h-m)&lt;s&amp;&amp;Math.abs(p=
-f)&lt;s){if(Math.abs(c+u)&lt;a&amp;&amp;Math.abs(h+m)&lt;a&amp;&amp;Math.a=
bs(p+f)&lt;a&amp;&amp;Math.abs(l+d+g-3)&lt;a)return this.set(1,0,0,0),this;=
e=3DMath.PI;const t=3D(l+1)/2,o=3D(d+1)/2,v=3D(g+1)/2,y=3D(c+u)/4,x=3D(h+m)=
/4,_=3D(p+f)/4;return t&gt;o&amp;&amp;t&gt;v?t&lt;s?(n=3D0,i=3D.707106781,r=
=3D.707106781):(n=3DMath.sqrt(t),i=3Dy/n,r=3Dx/n):o&gt;v?o&lt;s?(n=3D.70710=
6781,i=3D0,r=3D.707106781):(i=3DMath.sqrt(o),n=3Dy/i,r=3D_/i):v&lt;s?(n=3D.=
707106781,i=3D.707106781,r=3D0):(r=3DMath.sqrt(v),n=3Dx/r,i=3D_/r),this.set=
(n,i,r,e),this}let v=3DMath.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));retur=
n Math.abs(v)&lt;.001&amp;&amp;(v=3D1),this.x=3D(f-p)/v,this.y=3D(h-m)/v,th=
is.z=3D(u-c)/v,this.w=3DMath.acos((l+d+g-1)/2),this}min(t){return this.x=3D=
Math.min(this.x,t.x),this.y=3DMath.min(this.y,t.y),this.z=3DMath.min(this.z=
,t.z),this.w=3DMath.min(this.w,t.w),this}max(t){return this.x=3DMath.max(th=
is.x,t.x),this.y=3DMath.max(this.y,t.y),this.z=3DMath.max(this.z,t.z),this.=
w=3DMath.max(this.w,t.w),this}clamp(t,e){return this.x=3DMath.max(t.x,Math.=
min(e.x,this.x)),this.y=3DMath.max(t.y,Math.min(e.y,this.y)),this.z=3DMath.=
max(t.z,Math.min(e.z,this.z)),this.w=3DMath.max(t.w,Math.min(e.w,this.w)),t=
his}clampScalar(t,e){return this.x=3DMath.max(t,Math.min(e,this.x)),this.y=
=3DMath.max(t,Math.min(e,this.y)),this.z=3DMath.max(t,Math.min(e,this.z)),t=
his.w=3DMath.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=3Dthis=
.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min=
(e,n)))}floor(){return this.x=3DMath.floor(this.x),this.y=3DMath.floor(this=
.y),this.z=3DMath.floor(this.z),this.w=3DMath.floor(this.w),this}ceil(){ret=
urn this.x=3DMath.ceil(this.x),this.y=3DMath.ceil(this.y),this.z=3DMath.cei=
l(this.z),this.w=3DMath.ceil(this.w),this}round(){return this.x=3DMath.roun=
d(this.x),this.y=3DMath.round(this.y),this.z=3DMath.round(this.z),this.w=3D=
Math.round(this.w),this}roundToZero(){return this.x=3Dthis.x&lt;0?Math.ceil=
(this.x):Math.floor(this.x),this.y=3Dthis.y&lt;0?Math.ceil(this.y):Math.flo=
or(this.y),this.z=3Dthis.z&lt;0?Math.ceil(this.z):Math.floor(this.z),this.w=
=3Dthis.w&lt;0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return th=
is.x=3D-this.x,this.y=3D-this.y,this.z=3D-this.z,this.w=3D-this.w,this}dot(=
t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return thi=
s.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.s=
qrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLengt=
h(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this=
.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){ret=
urn this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=3D(t.x-this=
.x)*e,this.y+=3D(t.y-this.y)*e,this.z+=3D(t.z-this.z)*e,this.w+=3D(t.w-this=
.w)*e,this}lerpVectors(t,e,n){return this.x=3Dt.x+(e.x-t.x)*n,this.y=3Dt.y+=
(e.y-t.y)*n,this.z=3Dt.z+(e.z-t.z)*n,this.w=3Dt.w+(e.w-t.w)*n,this}equals(t=
){return t.x=3D=3D=3Dthis.x&amp;&amp;t.y=3D=3D=3Dthis.y&amp;&amp;t.z=3D=3D=
=3Dthis.z&amp;&amp;t.w=3D=3D=3Dthis.w}fromArray(t,e=3D0){return this.x=3Dt[=
e],this.y=3Dt[e+1],this.z=3Dt[e+2],this.w=3Dt[e+3],this}toArray(t=3D[],e=3D=
0){return t[e]=3Dthis.x,t[e+1]=3Dthis.y,t[e+2]=3Dthis.z,t[e+3]=3Dthis.w,t}f=
romBufferAttribute(t,e,n){return void 0!=3D=3Dn&amp;&amp;console.warn("THRE=
E.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=3D=
t.getX(e),this.y=3Dt.getY(e),this.z=3Dt.getZ(e),this.w=3Dt.getW(e),this}ran=
dom(){return this.x=3DMath.random(),this.y=3DMath.random(),this.z=3DMath.ra=
ndom(),this.w=3DMath.random(),this}}St.prototype.isVector4=3D!0;class Tt ex=
tends rt{constructor(t,e,n){super(),this.width=3Dt,this.height=3De,this.dep=
th=3D1,this.scissor=3Dnew St(0,0,t,e),this.scissorTest=3D!1,this.viewport=
=3Dnew St(0,0,t,e),n=3Dn||{},this.texture=3Dnew bt(void 0,n.mapping,n.wrapS=
,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),t=
his.texture.image=3D{},this.texture.image.width=3Dt,this.texture.image.heig=
ht=3De,this.texture.image.depth=3D1,this.texture.generateMipmaps=3Dvoid 0!=
=3D=3Dn.generateMipmaps&amp;&amp;n.generateMipmaps,this.texture.minFilter=
=3Dvoid 0!=3D=3Dn.minFilter?n.minFilter:g,this.depthBuffer=3Dvoid 0=3D=3D=
=3Dn.depthBuffer||n.depthBuffer,this.stencilBuffer=3Dvoid 0!=3D=3Dn.stencil=
Buffer&amp;&amp;n.stencilBuffer,this.depthTexture=3Dvoid 0!=3D=3Dn.depthTex=
ture?n.depthTexture:null}setTexture(t){t.image=3D{width:this.width,height:t=
his.height,depth:this.depth},this.texture=3Dt}setSize(t,e,n=3D1){this.width=
=3D=3D=3Dt&amp;&amp;this.height=3D=3D=3De&amp;&amp;this.depth=3D=3D=3Dn||(t=
his.width=3Dt,this.height=3De,this.depth=3Dn,this.texture.image.width=3Dt,t=
his.texture.image.height=3De,this.texture.image.depth=3Dn,this.dispose()),t=
his.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new this=
.constructor).copy(this)}copy(t){return this.width=3Dt.width,this.height=3D=
t.height,this.depth=3Dt.depth,this.viewport.copy(t.viewport),this.texture=
=3Dt.texture.clone(),this.depthBuffer=3Dt.depthBuffer,this.stencilBuffer=3D=
t.stencilBuffer,this.depthTexture=3Dt.depthTexture,this}dispose(){this.disp=
atchEvent({type:"dispose"})}}Tt.prototype.isWebGLRenderTarget=3D!0;class Et=
 extends Tt{constructor(t,e,n){super(t,e,n),this.samples=3D4}copy(t){return=
 super.copy.call(this,t),this.samples=3Dt.samples,this}}Et.prototype.isWebG=
LMultisampleRenderTarget=3D!0;class At{constructor(t=3D0,e=3D0,n=3D0,i=3D1)=
{this._x=3Dt,this._y=3De,this._z=3Dn,this._w=3Di}static slerp(t,e,n,i){retu=
rn console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use=
 qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}stat=
ic slerpFlat(t,e,n,i,r,s,a){let o=3Dn[i+0],l=3Dn[i+1],c=3Dn[i+2],h=3Dn[i+3]=
;const u=3Dr[s+0],d=3Dr[s+1],p=3Dr[s+2],m=3Dr[s+3];if(0=3D=3D=3Da)return t[=
e+0]=3Do,t[e+1]=3Dl,t[e+2]=3Dc,void(t[e+3]=3Dh);if(1=3D=3D=3Da)return t[e+0=
]=3Du,t[e+1]=3Dd,t[e+2]=3Dp,void(t[e+3]=3Dm);if(h!=3D=3Dm||o!=3D=3Du||l!=3D=
=3Dd||c!=3D=3Dp){let t=3D1-a;const e=3Do*u+l*d+c*p+h*m,n=3De&gt;=3D0?1:-1,i=
=3D1-e*e;if(i&gt;Number.EPSILON){const r=3DMath.sqrt(i),s=3DMath.atan2(r,e*=
n);t=3DMath.sin(t*s)/r,a=3DMath.sin(a*s)/r}const r=3Da*n;if(o=3Do*t+u*r,l=
=3Dl*t+d*r,c=3Dc*t+p*r,h=3Dh*t+m*r,t=3D=3D=3D1-a){const t=3D1/Math.sqrt(o*o=
+l*l+c*c+h*h);o*=3Dt,l*=3Dt,c*=3Dt,h*=3Dt}}t[e]=3Do,t[e+1]=3Dl,t[e+2]=3Dc,t=
[e+3]=3Dh}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=3Dn[i],o=3Dn[=
i+1],l=3Dn[i+2],c=3Dn[i+3],h=3Dr[s],u=3Dr[s+1],d=3Dr[s+2],p=3Dr[s+3];return=
 t[e]=3Da*p+c*h+o*d-l*u,t[e+1]=3Do*p+c*u+l*h-a*d,t[e+2]=3Dl*p+c*d+a*u-o*h,t=
[e+3]=3Dc*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=3Dt,this.=
_onChangeCallback()}get y(){return this._y}set y(t){this._y=3Dt,this._onCha=
ngeCallback()}get z(){return this._z}set z(t){this._z=3Dt,this._onChangeCal=
lback()}get w(){return this._w}set w(t){this._w=3Dt,this._onChangeCallback(=
)}set(t,e,n,i){return this._x=3Dt,this._y=3De,this._z=3Dn,this._w=3Di,this.=
_onChangeCallback(),this}clone(){return new this.constructor(this._x,this._=
y,this._z,this._w)}copy(t){return this._x=3Dt.x,this._y=3Dt.y,this._z=3Dt.z=
,this._w=3Dt.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!t||!t.is=
Euler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Eul=
er rotation rather than a Vector3 and order.");const n=3Dt._x,i=3Dt._y,r=3D=
t._z,s=3Dt._order,a=3DMath.cos,o=3DMath.sin,l=3Da(n/2),c=3Da(i/2),h=3Da(r/2=
),u=3Do(n/2),d=3Do(i/2),p=3Do(r/2);switch(s){case"XYZ":this._x=3Du*c*h+l*d*=
p,this._y=3Dl*d*h-u*c*p,this._z=3Dl*c*p+u*d*h,this._w=3Dl*c*h-u*d*p;break;c=
ase"YXZ":this._x=3Du*c*h+l*d*p,this._y=3Dl*d*h-u*c*p,this._z=3Dl*c*p-u*d*h,=
this._w=3Dl*c*h+u*d*p;break;case"ZXY":this._x=3Du*c*h-l*d*p,this._y=3Dl*d*h=
+u*c*p,this._z=3Dl*c*p+u*d*h,this._w=3Dl*c*h-u*d*p;break;case"ZYX":this._x=
=3Du*c*h-l*d*p,this._y=3Dl*d*h+u*c*p,this._z=3Dl*c*p-u*d*h,this._w=3Dl*c*h+=
u*d*p;break;case"YZX":this._x=3Du*c*h+l*d*p,this._y=3Dl*d*h+u*c*p,this._z=
=3Dl*c*p-u*d*h,this._w=3Dl*c*h-u*d*p;break;case"XZY":this._x=3Du*c*h-l*d*p,=
this._y=3Dl*d*h-u*c*p,this._z=3Dl*c*p+u*d*h,this._w=3Dl*c*h+u*d*p;break;def=
ault:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown=
 order: "+s)}return!1!=3D=3De&amp;&amp;this._onChangeCallback(),this}setFro=
mAxisAngle(t,e){const n=3De/2,i=3DMath.sin(n);return this._x=3Dt.x*i,this._=
y=3Dt.y*i,this._z=3Dt.z*i,this._w=3DMath.cos(n),this._onChangeCallback(),th=
is}setFromRotationMatrix(t){const e=3Dt.elements,n=3De[0],i=3De[4],r=3De[8]=
,s=3De[1],a=3De[5],o=3De[9],l=3De[2],c=3De[6],h=3De[10],u=3Dn+a+h;if(u&gt;0=
){const t=3D.5/Math.sqrt(u+1);this._w=3D.25/t,this._x=3D(c-o)*t,this._y=3D(=
r-l)*t,this._z=3D(s-i)*t}else if(n&gt;a&amp;&amp;n&gt;h){const t=3D2*Math.s=
qrt(1+n-a-h);this._w=3D(c-o)/t,this._x=3D.25*t,this._y=3D(i+s)/t,this._z=3D=
(r+l)/t}else if(a&gt;h){const t=3D2*Math.sqrt(1+a-n-h);this._w=3D(r-l)/t,th=
is._x=3D(i+s)/t,this._y=3D.25*t,this._z=3D(o+c)/t}else{const t=3D2*Math.sqr=
t(1+h-n-a);this._w=3D(s-i)/t,this._x=3D(r+l)/t,this._y=3D(o+c)/t,this._z=3D=
.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=3D=
t.dot(e)+1;return n&lt;Number.EPSILON?(n=3D0,Math.abs(t.x)&gt;Math.abs(t.z)=
?(this._x=3D-t.y,this._y=3Dt.x,this._z=3D0,this._w=3Dn):(this._x=3D0,this._=
y=3D-t.z,this._z=3Dt.y,this._w=3Dn)):(this._x=3Dt.y*e.z-t.z*e.y,this._y=3Dt=
.z*e.x-t.x*e.z,this._z=3Dt.x*e.y-t.y*e.x,this._w=3Dn),this.normalize()}angl=
eTo(t){return 2*Math.acos(Math.abs(ht(this.dot(t),-1,1)))}rotateTowards(t,e=
){const n=3Dthis.angleTo(t);if(0=3D=3D=3Dn)return this;const i=3DMath.min(1=
,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}inver=
t(){return this.conjugate()}conjugate(){return this._x*=3D-1,this._y*=3D-1,=
this._z*=3D-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this=
._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._=
y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x=
*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=
=3Dthis.length();return 0=3D=3D=3Dt?(this._x=3D0,this._y=3D0,this._z=3D0,th=
is._w=3D1):(t=3D1/t,this._x=3Dthis._x*t,this._y=3Dthis._y*t,this._z=3Dthis.=
_z*t,this._w=3Dthis._w*t),this._onChangeCallback(),this}multiply(t,e){retur=
n void 0!=3D=3De?(console.warn("THREE.Quaternion: .multiply() now only acce=
pts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiply=
Quaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return th=
is.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=3Dt._x,i=3D=
t._y,r=3Dt._z,s=3Dt._w,a=3De._x,o=3De._y,l=3De._z,c=3De._w;return this._x=
=3Dn*c+s*a+i*l-r*o,this._y=3Di*c+s*o+r*a-n*l,this._z=3Dr*c+s*l+n*o-i*a,this=
._w=3Ds*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0=3D=3D=
=3De)return this;if(1=3D=3D=3De)return this.copy(t);const n=3Dthis._x,i=3Dt=
his._y,r=3Dthis._z,s=3Dthis._w;let a=3Ds*t._w+n*t._x+i*t._y+r*t._z;if(a&lt;=
0?(this._w=3D-t._w,this._x=3D-t._x,this._y=3D-t._y,this._z=3D-t._z,a=3D-a):=
this.copy(t),a&gt;=3D1)return this._w=3Ds,this._x=3Dn,this._y=3Di,this._z=
=3Dr,this;const o=3D1-a*a;if(o&lt;=3DNumber.EPSILON){const t=3D1-e;return t=
his._w=3Dt*s+e*this._w,this._x=3Dt*n+e*this._x,this._y=3Dt*i+e*this._y,this=
._z=3Dt*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=
=3DMath.sqrt(o),c=3DMath.atan2(l,a),h=3DMath.sin((1-e)*c)/l,u=3DMath.sin(e*=
c)/l;return this._w=3Ds*h+this._w*u,this._x=3Dn*h+this._x*u,this._y=3Di*h+t=
his._y*u,this._z=3Dr*h+this._z*u,this._onChangeCallback(),this}slerpQuatern=
ions(t,e,n){this.copy(t).slerp(e,n)}equals(t){return t._x=3D=3D=3Dthis._x&a=
mp;&amp;t._y=3D=3D=3Dthis._y&amp;&amp;t._z=3D=3D=3Dthis._z&amp;&amp;t._w=3D=
=3D=3Dthis._w}fromArray(t,e=3D0){return this._x=3Dt[e],this._y=3Dt[e+1],thi=
s._z=3Dt[e+2],this._w=3Dt[e+3],this._onChangeCallback(),this}toArray(t=3D[]=
,e=3D0){return t[e]=3Dthis._x,t[e+1]=3Dthis._y,t[e+2]=3Dthis._z,t[e+3]=3Dth=
is._w,t}fromBufferAttribute(t,e){return this._x=3Dt.getX(e),this._y=3Dt.get=
Y(e),this._z=3Dt.getZ(e),this._w=3Dt.getW(e),this}_onChange(t){return this.=
_onChangeCallback=3Dt,this}_onChangeCallback(){}}At.prototype.isQuaternion=
=3D!0;class Lt{constructor(t=3D0,e=3D0,n=3D0){this.x=3Dt,this.y=3De,this.z=
=3Dn}set(t,e,n){return void 0=3D=3D=3Dn&amp;&amp;(n=3Dthis.z),this.x=3Dt,th=
is.y=3De,this.z=3Dn,this}setScalar(t){return this.x=3Dt,this.y=3Dt,this.z=
=3Dt,this}setX(t){return this.x=3Dt,this}setY(t){return this.y=3Dt,this}set=
Z(t){return this.z=3Dt,this}setComponent(t,e){switch(t){case 0:this.x=3De;b=
reak;case 1:this.y=3De;break;case 2:this.z=3De;break;default:throw new Erro=
r("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0=
:return this.x;case 1:return this.y;case 2:return this.z;default:throw new =
Error("index is out of range: "+t)}}clone(){return new this.constructor(thi=
s.x,this.y,this.z)}copy(t){return this.x=3Dt.x,this.y=3Dt.y,this.z=3Dt.z,th=
is}add(t,e){return void 0!=3D=3De?(console.warn("THREE.Vector3: .add() now =
only accepts one argument. Use .addVectors( a, b ) instead."),this.addVecto=
rs(t,e)):(this.x+=3Dt.x,this.y+=3Dt.y,this.z+=3Dt.z,this)}addScalar(t){retu=
rn this.x+=3Dt,this.y+=3Dt,this.z+=3Dt,this}addVectors(t,e){return this.x=
=3Dt.x+e.x,this.y=3Dt.y+e.y,this.z=3Dt.z+e.z,this}addScaledVector(t,e){retu=
rn this.x+=3Dt.x*e,this.y+=3Dt.y*e,this.z+=3Dt.z*e,this}sub(t,e){return voi=
d 0!=3D=3De?(console.warn("THREE.Vector3: .sub() now only accepts one argum=
ent. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=3Dt.=
x,this.y-=3Dt.y,this.z-=3Dt.z,this)}subScalar(t){return this.x-=3Dt,this.y-=
=3Dt,this.z-=3Dt,this}subVectors(t,e){return this.x=3Dt.x-e.x,this.y=3Dt.y-=
e.y,this.z=3Dt.z-e.z,this}multiply(t,e){return void 0!=3D=3De?(console.warn=
("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVe=
ctors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=3Dt.x,this.y*=
=3Dt.y,this.z*=3Dt.z,this)}multiplyScalar(t){return this.x*=3Dt,this.y*=3Dt=
,this.z*=3Dt,this}multiplyVectors(t,e){return this.x=3Dt.x*e.x,this.y=3Dt.y=
*e.y,this.z=3Dt.z*e.z,this}applyEuler(t){return t&amp;&amp;t.isEuler||conso=
le.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather=
 than a Vector3 and order."),this.applyQuaternion(Ct.setFromEuler(t))}apply=
AxisAngle(t,e){return this.applyQuaternion(Ct.setFromAxisAngle(t,e))}applyM=
atrix3(t){const e=3Dthis.x,n=3Dthis.y,i=3Dthis.z,r=3Dt.elements;return this=
.x=3Dr[0]*e+r[3]*n+r[6]*i,this.y=3Dr[1]*e+r[4]*n+r[7]*i,this.z=3Dr[2]*e+r[5=
]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize(=
)}applyMatrix4(t){const e=3Dthis.x,n=3Dthis.y,i=3Dthis.z,r=3Dt.elements,s=
=3D1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=3D(r[0]*e+r[4]*n+r[8]*i+r[=
12])*s,this.y=3D(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=3D(r[2]*e+r[6]*n+r[10=
]*i+r[14])*s,this}applyQuaternion(t){const e=3Dthis.x,n=3Dthis.y,i=3Dthis.z=
,r=3Dt.x,s=3Dt.y,a=3Dt.z,o=3Dt.w,l=3Do*e+s*i-a*n,c=3Do*n+a*e-r*i,h=3Do*i+r*=
n-s*e,u=3D-r*e-s*n-a*i;return this.x=3Dl*o+u*-r+c*-a-h*-s,this.y=3Dc*o+u*-s=
+h*-r-l*-a,this.z=3Dh*o+u*-a+l*-s-c*-r,this}project(t){return this.applyMat=
rix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){re=
turn this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorl=
d)}transformDirection(t){const e=3Dthis.x,n=3Dthis.y,i=3Dthis.z,r=3Dt.eleme=
nts;return this.x=3Dr[0]*e+r[4]*n+r[8]*i,this.y=3Dr[1]*e+r[5]*n+r[9]*i,this=
.z=3Dr[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=3Dt.x,=
this.y/=3Dt.y,this.z/=3Dt.z,this}divideScalar(t){return this.multiplyScalar=
(1/t)}min(t){return this.x=3DMath.min(this.x,t.x),this.y=3DMath.min(this.y,=
t.y),this.z=3DMath.min(this.z,t.z),this}max(t){return this.x=3DMath.max(thi=
s.x,t.x),this.y=3DMath.max(this.y,t.y),this.z=3DMath.max(this.z,t.z),this}c=
lamp(t,e){return this.x=3DMath.max(t.x,Math.min(e.x,this.x)),this.y=3DMath.=
max(t.y,Math.min(e.y,this.y)),this.z=3DMath.max(t.z,Math.min(e.z,this.z)),t=
his}clampScalar(t,e){return this.x=3DMath.max(t,Math.min(e,this.x)),this.y=
=3DMath.max(t,Math.min(e,this.y)),this.z=3DMath.max(t,Math.min(e,this.z)),t=
his}clampLength(t,e){const n=3Dthis.length();return this.divideScalar(n||1)=
.multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=3DMath.flo=
or(this.x),this.y=3DMath.floor(this.y),this.z=3DMath.floor(this.z),this}cei=
l(){return this.x=3DMath.ceil(this.x),this.y=3DMath.ceil(this.y),this.z=3DM=
ath.ceil(this.z),this}round(){return this.x=3DMath.round(this.x),this.y=3DM=
ath.round(this.y),this.z=3DMath.round(this.z),this}roundToZero(){return thi=
s.x=3Dthis.x&lt;0?Math.ceil(this.x):Math.floor(this.x),this.y=3Dthis.y&lt;0=
?Math.ceil(this.y):Math.floor(this.y),this.z=3Dthis.z&lt;0?Math.ceil(this.z=
):Math.floor(this.z),this}negate(){return this.x=3D-this.x,this.y=3D-this.y=
,this.z=3D-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengt=
hSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math=
.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return M=
ath.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.d=
ivideScalar(this.length()||1)}setLength(t){return this.normalize().multiply=
Scalar(t)}lerp(t,e){return this.x+=3D(t.x-this.x)*e,this.y+=3D(t.y-this.y)*=
e,this.z+=3D(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=3Dt.x+(e.x=
-t.x)*n,this.y=3Dt.y+(e.y-t.y)*n,this.z=3Dt.z+(e.z-t.z)*n,this}cross(t,e){r=
eturn void 0!=3D=3De?(console.warn("THREE.Vector3: .cross() now only accept=
s one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)=
):this.crossVectors(this,t)}crossVectors(t,e){const n=3Dt.x,i=3Dt.y,r=3Dt.z=
,s=3De.x,a=3De.y,o=3De.z;return this.x=3Di*o-r*a,this.y=3Dr*s-n*o,this.z=3D=
n*a-i*s,this}projectOnVector(t){const e=3Dt.lengthSq();if(0=3D=3D=3De)retur=
n this.set(0,0,0);const n=3Dt.dot(this)/e;return this.copy(t).multiplyScala=
r(n)}projectOnPlane(t){return Rt.copy(this).projectOnVector(t),this.sub(Rt)=
}reflect(t){return this.sub(Rt.copy(t).multiplyScalar(2*this.dot(t)))}angle=
To(t){const e=3DMath.sqrt(this.lengthSq()*t.lengthSq());if(0=3D=3D=3De)retu=
rn Math.PI/2;const n=3Dthis.dot(t)/e;return Math.acos(ht(n,-1,1))}distanceT=
o(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const=
 e=3Dthis.x-t.x,n=3Dthis.y-t.y,i=3Dthis.z-t.z;return e*e+n*n+i*i}manhattanD=
istanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this=
.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.p=
hi,t.theta)}setFromSphericalCoords(t,e,n){const i=3DMath.sin(e)*t;return th=
is.x=3Di*Math.sin(n),this.y=3DMath.cos(e)*t,this.z=3Di*Math.cos(n),this}set=
FromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.=
y)}setFromCylindricalCoords(t,e,n){return this.x=3Dt*Math.sin(e),this.y=3Dn=
,this.z=3Dt*Math.cos(e),this}setFromMatrixPosition(t){const e=3Dt.elements;=
return this.x=3De[12],this.y=3De[13],this.z=3De[14],this}setFromMatrixScale=
(t){const e=3Dthis.setFromMatrixColumn(t,0).length(),n=3Dthis.setFromMatrix=
Column(t,1).length(),i=3Dthis.setFromMatrixColumn(t,2).length();return this=
.x=3De,this.y=3Dn,this.z=3Di,this}setFromMatrixColumn(t,e){return this.from=
Array(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.ele=
ments,3*e)}equals(t){return t.x=3D=3D=3Dthis.x&amp;&amp;t.y=3D=3D=3Dthis.y&=
amp;&amp;t.z=3D=3D=3Dthis.z}fromArray(t,e=3D0){return this.x=3Dt[e],this.y=
=3Dt[e+1],this.z=3Dt[e+2],this}toArray(t=3D[],e=3D0){return t[e]=3Dthis.x,t=
[e+1]=3Dthis.y,t[e+2]=3Dthis.z,t}fromBufferAttribute(t,e,n){return void 0!=
=3D=3Dn&amp;&amp;console.warn("THREE.Vector3: offset has been removed from =
.fromBufferAttribute()."),this.x=3Dt.getX(e),this.y=3Dt.getY(e),this.z=3Dt.=
getZ(e),this}random(){return this.x=3DMath.random(),this.y=3DMath.random(),=
this.z=3DMath.random(),this}}Lt.prototype.isVector3=3D!0;const Rt=3Dnew Lt,=
Ct=3Dnew At;class Pt{constructor(t=3Dnew Lt(1/0,1/0,1/0),e=3Dnew Lt(-1/0,-1=
/0,-1/0)){this.min=3Dt,this.max=3De}set(t,e){return this.min.copy(t),this.m=
ax.copy(e),this}setFromArray(t){let e=3D1/0,n=3D1/0,i=3D1/0,r=3D-1/0,s=3D-1=
/0,a=3D-1/0;for(let o=3D0,l=3Dt.length;o&lt;l;o+=3D3){const l=3Dt[o],c=3Dt[=
o+1],h=3Dt[o+2];l&lt;e&amp;&amp;(e=3Dl),c&lt;n&amp;&amp;(n=3Dc),h&lt;i&amp;=
&amp;(i=3Dh),l&gt;r&amp;&amp;(r=3Dl),c&gt;s&amp;&amp;(s=3Dc),h&gt;a&amp;&am=
p;(a=3Dh)}return this.min.set(e,n,i),this.max.set(r,s,a),this}setFromBuffer=
Attribute(t){let e=3D1/0,n=3D1/0,i=3D1/0,r=3D-1/0,s=3D-1/0,a=3D-1/0;for(let=
 o=3D0,l=3Dt.count;o&lt;l;o++){const l=3Dt.getX(o),c=3Dt.getY(o),h=3Dt.getZ=
(o);l&lt;e&amp;&amp;(e=3Dl),c&lt;n&amp;&amp;(n=3Dc),h&lt;i&amp;&amp;(i=3Dh)=
,l&gt;r&amp;&amp;(r=3Dl),c&gt;s&amp;&amp;(s=3Dc),h&gt;a&amp;&amp;(a=3Dh)}re=
turn this.min.set(e,n,i),this.max.set(r,s,a),this}setFromPoints(t){this.mak=
eEmpty();for(let e=3D0,n=3Dt.length;e&lt;n;e++)this.expandByPoint(t[e]);ret=
urn this}setFromCenterAndSize(t,e){const n=3DIt.copy(e).multiplyScalar(.5);=
return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t=
){return this.makeEmpty(),this.expandByObject(t)}clone(){return(new this.co=
nstructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.m=
ax),this}makeEmpty(){return this.min.x=3Dthis.min.y=3Dthis.min.z=3D1/0,this=
.max.x=3Dthis.max.y=3Dthis.max.z=3D-1/0,this}isEmpty(){return this.max.x&lt=
;this.min.x||this.max.y&lt;this.min.y||this.max.z&lt;this.min.z}getCenter(t=
){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("THREE.Box3: .getCenter() =
target is now required"),t=3Dnew Lt),this.isEmpty()?t.set(0,0,0):t.addVecto=
rs(this.min,this.max).multiplyScalar(.5)}getSize(t){return void 0=3D=3D=3Dt=
&amp;&amp;(console.warn("THREE.Box3: .getSize() target is now required"),t=
=3Dnew Lt),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expa=
ndByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){=
return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.m=
in.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorld=
Matrix(!1,!1);const e=3Dt.geometry;void 0!=3D=3De&amp;&amp;(null=3D=3D=3De.=
boundingBox&amp;&amp;e.computeBoundingBox(),Nt.copy(e.boundingBox),Nt.apply=
Matrix4(t.matrixWorld),this.union(Nt));const n=3Dt.children;for(let t=3D0,e=
=3Dn.length;t&lt;e;t++)this.expandByObject(n[t]);return this}containsPoint(=
t){return!(t.x&lt;this.min.x||t.x&gt;this.max.x||t.y&lt;this.min.y||t.y&gt;=
this.max.y||t.z&lt;this.min.z||t.z&gt;this.max.z)}containsBox(t){return thi=
s.min.x&lt;=3Dt.min.x&amp;&amp;t.max.x&lt;=3Dthis.max.x&amp;&amp;this.min.y=
&lt;=3Dt.min.y&amp;&amp;t.max.y&lt;=3Dthis.max.y&amp;&amp;this.min.z&lt;=3D=
t.min.z&amp;&amp;t.max.z&lt;=3Dthis.max.z}getParameter(t,e){return void 0=
=3D=3D=3De&amp;&amp;(console.warn("THREE.Box3: .getParameter() target is no=
w required"),e=3Dnew Lt),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.=
y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min=
.z))}intersectsBox(t){return!(t.max.x&lt;this.min.x||t.min.x&gt;this.max.x|=
|t.max.y&lt;this.min.y||t.min.y&gt;this.max.y||t.max.z&lt;this.min.z||t.min=
.z&gt;this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,It),I=
t.distanceToSquared(t.center)&lt;=3Dt.radius*t.radius}intersectsPlane(t){le=
t e,n;return t.normal.x&gt;0?(e=3Dt.normal.x*this.min.x,n=3Dt.normal.x*this=
.max.x):(e=3Dt.normal.x*this.max.x,n=3Dt.normal.x*this.min.x),t.normal.y&gt=
;0?(e+=3Dt.normal.y*this.min.y,n+=3Dt.normal.y*this.max.y):(e+=3Dt.normal.y=
*this.max.y,n+=3Dt.normal.y*this.min.y),t.normal.z&gt;0?(e+=3Dt.normal.z*th=
is.min.z,n+=3Dt.normal.z*this.max.z):(e+=3Dt.normal.z*this.max.z,n+=3Dt.nor=
mal.z*this.min.z),e&lt;=3D-t.constant&amp;&amp;n&gt;=3D-t.constant}intersec=
tsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ut),kt.subVectors(t=
his.max,Ut),Bt.subVectors(t.a,Ut),zt.subVectors(t.b,Ut),Ft.subVectors(t.c,U=
t),Ot.subVectors(zt,Bt),Ht.subVectors(Ft,zt),Gt.subVectors(Bt,Ft);let e=3D[=
0,-Ot.z,Ot.y,0,-Ht.z,Ht.y,0,-Gt.z,Gt.y,Ot.z,0,-Ot.x,Ht.z,0,-Ht.x,Gt.z,0,-Gt=
.x,-Ot.y,Ot.x,0,-Ht.y,Ht.x,0,-Gt.y,Gt.x,0];return!!jt(e,Bt,zt,Ft,kt)&amp;&a=
mp;(e=3D[1,0,0,0,1,0,0,0,1],!!jt(e,Bt,zt,Ft,kt)&amp;&amp;(Vt.crossVectors(O=
t,Ht),e=3D[Vt.x,Vt.y,Vt.z],jt(e,Bt,zt,Ft,kt)))}clampPoint(t,e){return void =
0=3D=3D=3De&amp;&amp;(console.warn("THREE.Box3: .clampPoint() target is now=
 required"),e=3Dnew Lt),e.copy(t).clamp(this.min,this.max)}distanceToPoint(=
t){return It.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSp=
here(t){return void 0=3D=3D=3Dt&amp;&amp;console.error("THREE.Box3: .getBou=
ndingSphere() target is now required"),this.getCenter(t.center),t.radius=3D=
.5*this.getSize(It).length(),t}intersect(t){return this.min.max(t.min),this=
.max.min(t.max),this.isEmpty()&amp;&amp;this.makeEmpty(),this}union(t){retu=
rn this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this=
.isEmpty()||(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dt=
[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dt[2].set(this.mi=
n.x,this.max.y,this.min.z).applyMatrix4(t),Dt[3].set(this.min.x,this.max.y,=
this.max.z).applyMatrix4(t),Dt[4].set(this.max.x,this.min.y,this.min.z).app=
lyMatrix4(t),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dt=
[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dt[7].set(this.ma=
x.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dt)),this}tra=
nslate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.mi=
n.equals(this.min)&amp;&amp;t.max.equals(this.max)}}Pt.prototype.isBox3=3D!=
0;const Dt=3D[new Lt,new Lt,new Lt,new Lt,new Lt,new Lt,new Lt,new Lt],It=
=3Dnew Lt,Nt=3Dnew Pt,Bt=3Dnew Lt,zt=3Dnew Lt,Ft=3Dnew Lt,Ot=3Dnew Lt,Ht=3D=
new Lt,Gt=3Dnew Lt,Ut=3Dnew Lt,kt=3Dnew Lt,Vt=3Dnew Lt,Wt=3Dnew Lt;function=
 jt(t,e,n,i,r){for(let s=3D0,a=3Dt.length-3;s&lt;=3Da;s+=3D3){Wt.fromArray(=
t,s);const a=3Dr.x*Math.abs(Wt.x)+r.y*Math.abs(Wt.y)+r.z*Math.abs(Wt.z),o=
=3De.dot(Wt),l=3Dn.dot(Wt),c=3Di.dot(Wt);if(Math.max(-Math.max(o,l,c),Math.=
min(o,l,c))&gt;a)return!1}return!0}const qt=3Dnew Pt,Xt=3Dnew Lt,Yt=3Dnew L=
t,Zt=3Dnew Lt;class Jt{constructor(t=3Dnew Lt,e=3D-1){this.center=3Dt,this.=
radius=3De}set(t,e){return this.center.copy(t),this.radius=3De,this}setFrom=
Points(t,e){const n=3Dthis.center;void 0!=3D=3De?n.copy(e):qt.setFromPoints=
(t).getCenter(n);let i=3D0;for(let e=3D0,r=3Dt.length;e&lt;r;e++)i=3DMath.m=
ax(i,n.distanceToSquared(t[e]));return this.radius=3DMath.sqrt(i),this}copy=
(t){return this.center.copy(t.center),this.radius=3Dt.radius,this}isEmpty()=
{return this.radius&lt;0}makeEmpty(){return this.center.set(0,0,0),this.rad=
ius=3D-1,this}containsPoint(t){return t.distanceToSquared(this.center)&lt;=
=3Dthis.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.cent=
er)-this.radius}intersectsSphere(t){const e=3Dthis.radius+t.radius;return t=
.center.distanceToSquared(this.center)&lt;=3De*e}intersectsBox(t){return t.=
intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint=
(this.center))&lt;=3Dthis.radius}clampPoint(t,e){const n=3Dthis.center.dist=
anceToSquared(t);return void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Sphe=
re: .clampPoint() target is now required"),e=3Dnew Lt),e.copy(t),n&gt;this.=
radius*this.radius&amp;&amp;(e.sub(this.center).normalize(),e.multiplyScala=
r(this.radius).add(this.center)),e}getBoundingBox(t){return void 0=3D=3D=3D=
t&amp;&amp;(console.warn("THREE.Sphere: .getBoundingBox() target is now req=
uired"),t=3Dnew Pt),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,thi=
s.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.cent=
er.applyMatrix4(t),this.radius=3Dthis.radius*t.getMaxScaleOnAxis(),this}tra=
nslate(t){return this.center.add(t),this}expandByPoint(t){Zt.subVectors(t,t=
his.center);const e=3DZt.lengthSq();if(e&gt;this.radius*this.radius){const =
t=3DMath.sqrt(e),n=3D.5*(t-this.radius);this.center.add(Zt.multiplyScalar(n=
/t)),this.radius+=3Dn}return this}union(t){return Yt.subVectors(t.center,th=
is.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Xt.copy(=
t.center).add(Yt)),this.expandByPoint(Xt.copy(t.center).sub(Yt)),this}equal=
s(t){return t.center.equals(this.center)&amp;&amp;t.radius=3D=3D=3Dthis.rad=
ius}clone(){return(new this.constructor).copy(this)}}const Qt=3Dnew Lt,Kt=
=3Dnew Lt,$t=3Dnew Lt,te=3Dnew Lt,ee=3Dnew Lt,ne=3Dnew Lt,ie=3Dnew Lt;class=
 re{constructor(t=3Dnew Lt,e=3Dnew Lt(0,0,-1)){this.origin=3Dt,this.directi=
on=3De}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy=
(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this=
}at(t,e){return void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Ray: .at() t=
arget is now required"),e=3Dnew Lt),e.copy(this.direction).multiplyScalar(t=
).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin)=
.normalize(),this}recast(t){return this.origin.copy(this.at(t,Qt)),this}clo=
sestPointToPoint(t,e){void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Ray: .=
closestPointToPoint() target is now required"),e=3Dnew Lt),e.subVectors(t,t=
his.origin);const n=3De.dot(this.direction);return n&lt;0?e.copy(this.origi=
n):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoin=
t(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const=
 e=3DQt.subVectors(t,this.origin).dot(this.direction);return e&lt;0?this.or=
igin.distanceToSquared(t):(Qt.copy(this.direction).multiplyScalar(e).add(th=
is.origin),Qt.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kt.copy(t)=
.add(e).multiplyScalar(.5),$t.copy(e).sub(t).normalize(),te.copy(this.origi=
n).sub(Kt);const r=3D.5*t.distanceTo(e),s=3D-this.direction.dot($t),a=3Dte.=
dot(this.direction),o=3D-te.dot($t),l=3Dte.lengthSq(),c=3DMath.abs(1-s*s);l=
et h,u,d,p;if(c&gt;0)if(h=3Ds*o-a,u=3Ds*a-o,p=3Dr*c,h&gt;=3D0)if(u&gt;=3D-p=
)if(u&lt;=3Dp){const t=3D1/c;h*=3Dt,u*=3Dt,d=3Dh*(h+s*u+2*a)+u*(s*h+u+2*o)+=
l}else u=3Dr,h=3DMath.max(0,-(s*u+a)),d=3D-h*h+u*(u+2*o)+l;else u=3D-r,h=3D=
Math.max(0,-(s*u+a)),d=3D-h*h+u*(u+2*o)+l;else u&lt;=3D-p?(h=3DMath.max(0,-=
(-s*r+a)),u=3Dh&gt;0?-r:Math.min(Math.max(-r,-o),r),d=3D-h*h+u*(u+2*o)+l):u=
&lt;=3Dp?(h=3D0,u=3DMath.min(Math.max(-r,-o),r),d=3Du*(u+2*o)+l):(h=3DMath.=
max(0,-(s*r+a)),u=3Dh&gt;0?r:Math.min(Math.max(-r,-o),r),d=3D-h*h+u*(u+2*o)=
+l);else u=3Ds&gt;0?-r:r,h=3DMath.max(0,-(s*u+a)),d=3D-h*h+u*(u+2*o)+l;retu=
rn n&amp;&amp;n.copy(this.direction).multiplyScalar(h).add(this.origin),i&a=
mp;&amp;i.copy($t).multiplyScalar(u).add(Kt),d}intersectSphere(t,e){Qt.subV=
ectors(t.center,this.origin);const n=3DQt.dot(this.direction),i=3DQt.dot(Qt=
)-n*n,r=3Dt.radius*t.radius;if(i&gt;r)return null;const s=3DMath.sqrt(r-i),=
a=3Dn-s,o=3Dn+s;return a&lt;0&amp;&amp;o&lt;0?null:a&lt;0?this.at(o,e):this=
.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)&lt;=3D=
t.radius*t.radius}distanceToPlane(t){const e=3Dt.normal.dot(this.direction)=
;if(0=3D=3D=3De)return 0=3D=3D=3Dt.distanceToPoint(this.origin)?0:null;cons=
t n=3D-(this.origin.dot(t.normal)+t.constant)/e;return n&gt;=3D0?n:null}int=
ersectPlane(t,e){const n=3Dthis.distanceToPlane(t);return null=3D=3D=3Dn?nu=
ll:this.at(n,e)}intersectsPlane(t){const e=3Dt.distanceToPoint(this.origin)=
;if(0=3D=3D=3De)return!0;return t.normal.dot(this.direction)*e&lt;0}interse=
ctBox(t,e){let n,i,r,s,a,o;const l=3D1/this.direction.x,c=3D1/this.directio=
n.y,h=3D1/this.direction.z,u=3Dthis.origin;return l&gt;=3D0?(n=3D(t.min.x-u=
.x)*l,i=3D(t.max.x-u.x)*l):(n=3D(t.max.x-u.x)*l,i=3D(t.min.x-u.x)*l),c&gt;=
=3D0?(r=3D(t.min.y-u.y)*c,s=3D(t.max.y-u.y)*c):(r=3D(t.max.y-u.y)*c,s=3D(t.=
min.y-u.y)*c),n&gt;s||r&gt;i?null:((r&gt;n||n!=3Dn)&amp;&amp;(n=3Dr),(s&lt;=
i||i!=3Di)&amp;&amp;(i=3Ds),h&gt;=3D0?(a=3D(t.min.z-u.z)*h,o=3D(t.max.z-u.z=
)*h):(a=3D(t.max.z-u.z)*h,o=3D(t.min.z-u.z)*h),n&gt;o||a&gt;i?null:((a&gt;n=
||n!=3Dn)&amp;&amp;(n=3Da),(o&lt;i||i!=3Di)&amp;&amp;(i=3Do),i&lt;0?null:th=
is.at(n&gt;=3D0?n:i,e)))}intersectsBox(t){return null!=3D=3Dthis.intersectB=
ox(t,Qt)}intersectTriangle(t,e,n,i,r){ee.subVectors(e,t),ne.subVectors(n,t)=
,ie.crossVectors(ee,ne);let s,a=3Dthis.direction.dot(ie);if(a&gt;0){if(i)re=
turn null;s=3D1}else{if(!(a&lt;0))return null;s=3D-1,a=3D-a}te.subVectors(t=
his.origin,t);const o=3Ds*this.direction.dot(ne.crossVectors(te,ne));if(o&l=
t;0)return null;const l=3Ds*this.direction.dot(ee.cross(te));if(l&lt;0)retu=
rn null;if(o+l&gt;a)return null;const c=3D-s*te.dot(ie);return c&lt;0?null:=
this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.dire=
ction.transformDirection(t),this}equals(t){return t.origin.equals(this.orig=
in)&amp;&amp;t.direction.equals(this.direction)}clone(){return(new this.con=
structor).copy(this)}}class se{constructor(){this.elements=3D[1,0,0,0,0,1,0=
,0,0,0,1,0,0,0,0,1],arguments.length&gt;0&amp;&amp;console.error("THREE.Mat=
rix4: the constructor no longer reads arguments. use .set() instead.")}set(=
t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const g=3Dthis.elements;return g[0]=3Dt,g[=
4]=3De,g[8]=3Dn,g[12]=3Di,g[1]=3Dr,g[5]=3Ds,g[9]=3Da,g[13]=3Do,g[2]=3Dl,g[6=
]=3Dc,g[10]=3Dh,g[14]=3Du,g[3]=3Dd,g[7]=3Dp,g[11]=3Dm,g[15]=3Df,this}identi=
ty(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(n=
ew se).fromArray(this.elements)}copy(t){const e=3Dthis.elements,n=3Dt.eleme=
nts;return e[0]=3Dn[0],e[1]=3Dn[1],e[2]=3Dn[2],e[3]=3Dn[3],e[4]=3Dn[4],e[5]=
=3Dn[5],e[6]=3Dn[6],e[7]=3Dn[7],e[8]=3Dn[8],e[9]=3Dn[9],e[10]=3Dn[10],e[11]=
=3Dn[11],e[12]=3Dn[12],e[13]=3Dn[13],e[14]=3Dn[14],e[15]=3Dn[15],this}copyP=
osition(t){const e=3Dthis.elements,n=3Dt.elements;return e[12]=3Dn[12],e[13=
]=3Dn[13],e[14]=3Dn[14],this}setFromMatrix3(t){const e=3Dt.elements;return =
this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}e=
xtractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColu=
mn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.=
set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation=
(t){const e=3Dthis.elements,n=3Dt.elements,i=3D1/ae.setFromMatrixColumn(t,0=
).length(),r=3D1/ae.setFromMatrixColumn(t,1).length(),s=3D1/ae.setFromMatri=
xColumn(t,2).length();return e[0]=3Dn[0]*i,e[1]=3Dn[1]*i,e[2]=3Dn[2]*i,e[3]=
=3D0,e[4]=3Dn[4]*r,e[5]=3Dn[5]*r,e[6]=3Dn[6]*r,e[7]=3D0,e[8]=3Dn[8]*s,e[9]=
=3Dn[9]*s,e[10]=3Dn[10]*s,e[11]=3D0,e[12]=3D0,e[13]=3D0,e[14]=3D0,e[15]=3D1=
,this}makeRotationFromEuler(t){t&amp;&amp;t.isEuler||console.error("THREE.M=
atrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a=
 Vector3 and order.");const e=3Dthis.elements,n=3Dt.x,i=3Dt.y,r=3Dt.z,s=3DM=
ath.cos(n),a=3DMath.sin(n),o=3DMath.cos(i),l=3DMath.sin(i),c=3DMath.cos(r),=
h=3DMath.sin(r);if("XYZ"=3D=3D=3Dt.order){const t=3Ds*c,n=3Ds*h,i=3Da*c,r=
=3Da*h;e[0]=3Do*c,e[4]=3D-o*h,e[8]=3Dl,e[1]=3Dn+i*l,e[5]=3Dt-r*l,e[9]=3D-a*=
o,e[2]=3Dr-t*l,e[6]=3Di+n*l,e[10]=3Ds*o}else if("YXZ"=3D=3D=3Dt.order){cons=
t t=3Do*c,n=3Do*h,i=3Dl*c,r=3Dl*h;e[0]=3Dt+r*a,e[4]=3Di*a-n,e[8]=3Ds*l,e[1]=
=3Ds*h,e[5]=3Ds*c,e[9]=3D-a,e[2]=3Dn*a-i,e[6]=3Dr+t*a,e[10]=3Ds*o}else if("=
ZXY"=3D=3D=3Dt.order){const t=3Do*c,n=3Do*h,i=3Dl*c,r=3Dl*h;e[0]=3Dt-r*a,e[=
4]=3D-s*h,e[8]=3Di+n*a,e[1]=3Dn+i*a,e[5]=3Ds*c,e[9]=3Dr-t*a,e[2]=3D-s*l,e[6=
]=3Da,e[10]=3Ds*o}else if("ZYX"=3D=3D=3Dt.order){const t=3Ds*c,n=3Ds*h,i=3D=
a*c,r=3Da*h;e[0]=3Do*c,e[4]=3Di*l-n,e[8]=3Dt*l+r,e[1]=3Do*h,e[5]=3Dr*l+t,e[=
9]=3Dn*l-i,e[2]=3D-l,e[6]=3Da*o,e[10]=3Ds*o}else if("YZX"=3D=3D=3Dt.order){=
const t=3Ds*o,n=3Ds*l,i=3Da*o,r=3Da*l;e[0]=3Do*c,e[4]=3Dr-t*h,e[8]=3Di*h+n,=
e[1]=3Dh,e[5]=3Ds*c,e[9]=3D-a*c,e[2]=3D-l*c,e[6]=3Dn*h+i,e[10]=3Dt-r*h}else=
 if("XZY"=3D=3D=3Dt.order){const t=3Ds*o,n=3Ds*l,i=3Da*o,r=3Da*l;e[0]=3Do*c=
,e[4]=3D-h,e[8]=3Dl*c,e[1]=3Dt*h+r,e[5]=3Ds*c,e[9]=3Dn*h-i,e[2]=3Di*h-n,e[6=
]=3Da*c,e[10]=3Dr*h+t}return e[3]=3D0,e[7]=3D0,e[11]=3D0,e[12]=3D0,e[13]=3D=
0,e[14]=3D0,e[15]=3D1,this}makeRotationFromQuaternion(t){return this.compos=
e(le,t,ce)}lookAt(t,e,n){const i=3Dthis.elements;return de.subVectors(t,e),=
0=3D=3D=3Dde.lengthSq()&amp;&amp;(de.z=3D1),de.normalize(),he.crossVectors(=
n,de),0=3D=3D=3Dhe.lengthSq()&amp;&amp;(1=3D=3D=3DMath.abs(n.z)?de.x+=3D1e-=
4:de.z+=3D1e-4,de.normalize(),he.crossVectors(n,de)),he.normalize(),ue.cros=
sVectors(de,he),i[0]=3Dhe.x,i[4]=3Due.x,i[8]=3Dde.x,i[1]=3Dhe.y,i[5]=3Due.y=
,i[9]=3Dde.y,i[2]=3Dhe.z,i[6]=3Due.z,i[10]=3Dde.z,this}multiply(t,e){return=
 void 0!=3D=3De?(console.warn("THREE.Matrix4: .multiply() now only accepts =
one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrice=
s(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMa=
trices(t,this)}multiplyMatrices(t,e){const n=3Dt.elements,i=3De.elements,r=
=3Dthis.elements,s=3Dn[0],a=3Dn[4],o=3Dn[8],l=3Dn[12],c=3Dn[1],h=3Dn[5],u=
=3Dn[9],d=3Dn[13],p=3Dn[2],m=3Dn[6],f=3Dn[10],g=3Dn[14],v=3Dn[3],y=3Dn[7],x=
=3Dn[11],_=3Dn[15],w=3Di[0],b=3Di[4],M=3Di[8],S=3Di[12],T=3Di[1],E=3Di[5],A=
=3Di[9],L=3Di[13],R=3Di[2],C=3Di[6],P=3Di[10],D=3Di[14],I=3Di[3],N=3Di[7],B=
=3Di[11],z=3Di[15];return r[0]=3Ds*w+a*T+o*R+l*I,r[4]=3Ds*b+a*E+o*C+l*N,r[8=
]=3Ds*M+a*A+o*P+l*B,r[12]=3Ds*S+a*L+o*D+l*z,r[1]=3Dc*w+h*T+u*R+d*I,r[5]=3Dc=
*b+h*E+u*C+d*N,r[9]=3Dc*M+h*A+u*P+d*B,r[13]=3Dc*S+h*L+u*D+d*z,r[2]=3Dp*w+m*=
T+f*R+g*I,r[6]=3Dp*b+m*E+f*C+g*N,r[10]=3Dp*M+m*A+f*P+g*B,r[14]=3Dp*S+m*L+f*=
D+g*z,r[3]=3Dv*w+y*T+x*R+_*I,r[7]=3Dv*b+y*E+x*C+_*N,r[11]=3Dv*M+y*A+x*P+_*B=
,r[15]=3Dv*S+y*L+x*D+_*z,this}multiplyScalar(t){const e=3Dthis.elements;ret=
urn e[0]*=3Dt,e[4]*=3Dt,e[8]*=3Dt,e[12]*=3Dt,e[1]*=3Dt,e[5]*=3Dt,e[9]*=3Dt,=
e[13]*=3Dt,e[2]*=3Dt,e[6]*=3Dt,e[10]*=3Dt,e[14]*=3Dt,e[3]*=3Dt,e[7]*=3Dt,e[=
11]*=3Dt,e[15]*=3Dt,this}determinant(){const t=3Dthis.elements,e=3Dt[0],n=
=3Dt[4],i=3Dt[8],r=3Dt[12],s=3Dt[1],a=3Dt[5],o=3Dt[9],l=3Dt[13],c=3Dt[2],h=
=3Dt[6],u=3Dt[10],d=3Dt[14];return t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o=
*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n=
*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){=
const t=3Dthis.elements;let e;return e=3Dt[1],t[1]=3Dt[4],t[4]=3De,e=3Dt[2]=
,t[2]=3Dt[8],t[8]=3De,e=3Dt[6],t[6]=3Dt[9],t[9]=3De,e=3Dt[3],t[3]=3Dt[12],t=
[12]=3De,e=3Dt[7],t[7]=3Dt[13],t[13]=3De,e=3Dt[11],t[11]=3Dt[14],t[14]=3De,=
this}setPosition(t,e,n){const i=3Dthis.elements;return t.isVector3?(i[12]=
=3Dt.x,i[13]=3Dt.y,i[14]=3Dt.z):(i[12]=3Dt,i[13]=3De,i[14]=3Dn),this}invert=
(){const t=3Dthis.elements,e=3Dt[0],n=3Dt[1],i=3Dt[2],r=3Dt[3],s=3Dt[4],a=
=3Dt[5],o=3Dt[6],l=3Dt[7],c=3Dt[8],h=3Dt[9],u=3Dt[10],d=3Dt[11],p=3Dt[12],m=
=3Dt[13],f=3Dt[14],g=3Dt[15],v=3Dh*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,y=3Dp*=
u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,x=3Dc*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,_=
=3Dp*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,w=3De*v+n*y+i*x+r*_;if(0=3D=3D=3Dw)r=
eturn this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=3D1/w;return t[0]=
=3Dv*b,t[1]=3D(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*b,t[2]=3D(a*f*r-m*o*r+m=
*i*l-n*f*l-a*i*g+n*o*g)*b,t[3]=3D(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*b,t[=
4]=3Dy*b,t[5]=3D(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*b,t[6]=3D(p*o*r-s*f*r=
-p*i*l+e*f*l+s*i*g-e*o*g)*b,t[7]=3D(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*b,=
t[8]=3Dx*b,t[9]=3D(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*b,t[10]=3D(s*m*r-p*=
a*r+p*n*l-e*m*l-s*n*g+e*a*g)*b,t[11]=3D(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d=
)*b,t[12]=3D_*b,t[13]=3D(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*b,t[14]=3D(p*=
a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*b,t[15]=3D(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u=
+e*a*u)*b,this}scale(t){const e=3Dthis.elements,n=3Dt.x,i=3Dt.y,r=3Dt.z;ret=
urn e[0]*=3Dn,e[4]*=3Di,e[8]*=3Dr,e[1]*=3Dn,e[5]*=3Di,e[9]*=3Dr,e[2]*=3Dn,e=
[6]*=3Di,e[10]*=3Dr,e[3]*=3Dn,e[7]*=3Di,e[11]*=3Dr,this}getMaxScaleOnAxis()=
{const t=3Dthis.elements,e=3Dt[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=3Dt[4]*t[4]+t[=
5]*t[5]+t[6]*t[6],i=3Dt[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math=
.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n=
,0,0,0,1),this}makeRotationX(t){const e=3DMath.cos(t),n=3DMath.sin(t);retur=
n this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=
=3DMath.cos(t),n=3DMath.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0=
,0,1),this}makeRotationZ(t){const e=3DMath.cos(t),n=3DMath.sin(t);return th=
is.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=
=3DMath.cos(e),i=3DMath.sin(e),r=3D1-n,s=3Dt.x,a=3Dt.y,o=3Dt.z,l=3Dr*s,c=3D=
r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a=
,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0=
,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n){return this.set(1,e,n,0,t,1,n=
,0,t,e,1,0,0,0,0,1),this}compose(t,e,n){const i=3Dthis.elements,r=3De._x,s=
=3De._y,a=3De._z,o=3De._w,l=3Dr+r,c=3Ds+s,h=3Da+a,u=3Dr*l,d=3Dr*c,p=3Dr*h,m=
=3Ds*c,f=3Ds*h,g=3Da*h,v=3Do*l,y=3Do*c,x=3Do*h,_=3Dn.x,w=3Dn.y,b=3Dn.z;retu=
rn i[0]=3D(1-(m+g))*_,i[1]=3D(d+x)*_,i[2]=3D(p-y)*_,i[3]=3D0,i[4]=3D(d-x)*w=
,i[5]=3D(1-(u+g))*w,i[6]=3D(f+v)*w,i[7]=3D0,i[8]=3D(p+y)*b,i[9]=3D(f-v)*b,i=
[10]=3D(1-(u+m))*b,i[11]=3D0,i[12]=3Dt.x,i[13]=3Dt.y,i[14]=3Dt.z,i[15]=3D1,=
this}decompose(t,e,n){const i=3Dthis.elements;let r=3Dae.set(i[0],i[1],i[2]=
).length();const s=3Dae.set(i[4],i[5],i[6]).length(),a=3Dae.set(i[8],i[9],i=
[10]).length();this.determinant()&lt;0&amp;&amp;(r=3D-r),t.x=3Di[12],t.y=3D=
i[13],t.z=3Di[14],oe.copy(this);const o=3D1/r,l=3D1/s,c=3D1/a;return oe.ele=
ments[0]*=3Do,oe.elements[1]*=3Do,oe.elements[2]*=3Do,oe.elements[4]*=3Dl,o=
e.elements[5]*=3Dl,oe.elements[6]*=3Dl,oe.elements[8]*=3Dc,oe.elements[9]*=
=3Dc,oe.elements[10]*=3Dc,e.setFromRotationMatrix(oe),n.x=3Dr,n.y=3Ds,n.z=
=3Da,this}makePerspective(t,e,n,i,r,s){void 0=3D=3D=3Ds&amp;&amp;console.wa=
rn("THREE.Matrix4: .makePerspective() has been redefined and has a new sign=
ature. Please check the docs.");const a=3Dthis.elements,o=3D2*r/(e-t),l=3D2=
*r/(n-i),c=3D(e+t)/(e-t),h=3D(n+i)/(n-i),u=3D-(s+r)/(s-r),d=3D-2*s*r/(s-r);=
return a[0]=3Do,a[4]=3D0,a[8]=3Dc,a[12]=3D0,a[1]=3D0,a[5]=3Dl,a[9]=3Dh,a[13=
]=3D0,a[2]=3D0,a[6]=3D0,a[10]=3Du,a[14]=3Dd,a[3]=3D0,a[7]=3D0,a[11]=3D-1,a[=
15]=3D0,this}makeOrthographic(t,e,n,i,r,s){const a=3Dthis.elements,o=3D1/(e=
-t),l=3D1/(n-i),c=3D1/(s-r),h=3D(e+t)*o,u=3D(n+i)*l,d=3D(s+r)*c;return a[0]=
=3D2*o,a[4]=3D0,a[8]=3D0,a[12]=3D-h,a[1]=3D0,a[5]=3D2*l,a[9]=3D0,a[13]=3D-u=
,a[2]=3D0,a[6]=3D0,a[10]=3D-2*c,a[14]=3D-d,a[3]=3D0,a[7]=3D0,a[11]=3D0,a[15=
]=3D1,this}equals(t){const e=3Dthis.elements,n=3Dt.elements;for(let t=3D0;t=
&lt;16;t++)if(e[t]!=3D=3Dn[t])return!1;return!0}fromArray(t,e=3D0){for(let =
n=3D0;n&lt;16;n++)this.elements[n]=3Dt[n+e];return this}toArray(t=3D[],e=3D=
0){const n=3Dthis.elements;return t[e]=3Dn[0],t[e+1]=3Dn[1],t[e+2]=3Dn[2],t=
[e+3]=3Dn[3],t[e+4]=3Dn[4],t[e+5]=3Dn[5],t[e+6]=3Dn[6],t[e+7]=3Dn[7],t[e+8]=
=3Dn[8],t[e+9]=3Dn[9],t[e+10]=3Dn[10],t[e+11]=3Dn[11],t[e+12]=3Dn[12],t[e+1=
3]=3Dn[13],t[e+14]=3Dn[14],t[e+15]=3Dn[15],t}}se.prototype.isMatrix4=3D!0;c=
onst ae=3Dnew Lt,oe=3Dnew se,le=3Dnew Lt(0,0,0),ce=3Dnew Lt(1,1,1),he=3Dnew=
 Lt,ue=3Dnew Lt,de=3Dnew Lt,pe=3Dnew se,me=3Dnew At;class fe{constructor(t=
=3D0,e=3D0,n=3D0,i=3Dfe.DefaultOrder){this._x=3Dt,this._y=3De,this._z=3Dn,t=
his._order=3Di}get x(){return this._x}set x(t){this._x=3Dt,this._onChangeCa=
llback()}get y(){return this._y}set y(t){this._y=3Dt,this._onChangeCallback=
()}get z(){return this._z}set z(t){this._z=3Dt,this._onChangeCallback()}get=
 order(){return this._order}set order(t){this._order=3Dt,this._onChangeCall=
back()}set(t,e,n,i){return this._x=3Dt,this._y=3De,this._z=3Dn,this._order=
=3Di||this._order,this._onChangeCallback(),this}clone(){return new this.con=
structor(this._x,this._y,this._z,this._order)}copy(t){return this._x=3Dt._x=
,this._y=3Dt._y,this._z=3Dt._z,this._order=3Dt._order,this._onChangeCallbac=
k(),this}setFromRotationMatrix(t,e,n){const i=3Dt.elements,r=3Di[0],s=3Di[4=
],a=3Di[8],o=3Di[1],l=3Di[5],c=3Di[9],h=3Di[2],u=3Di[6],d=3Di[10];switch(e=
=3De||this._order){case"XYZ":this._y=3DMath.asin(ht(a,-1,1)),Math.abs(a)&lt=
;.9999999?(this._x=3DMath.atan2(-c,d),this._z=3DMath.atan2(-s,r)):(this._x=
=3DMath.atan2(u,l),this._z=3D0);break;case"YXZ":this._x=3DMath.asin(-ht(c,-=
1,1)),Math.abs(c)&lt;.9999999?(this._y=3DMath.atan2(a,d),this._z=3DMath.ata=
n2(o,l)):(this._y=3DMath.atan2(-h,r),this._z=3D0);break;case"ZXY":this._x=
=3DMath.asin(ht(u,-1,1)),Math.abs(u)&lt;.9999999?(this._y=3DMath.atan2(-h,d=
),this._z=3DMath.atan2(-s,l)):(this._y=3D0,this._z=3DMath.atan2(o,r));break=
;case"ZYX":this._y=3DMath.asin(-ht(h,-1,1)),Math.abs(h)&lt;.9999999?(this._=
x=3DMath.atan2(u,d),this._z=3DMath.atan2(o,r)):(this._x=3D0,this._z=3DMath.=
atan2(-s,l));break;case"YZX":this._z=3DMath.asin(ht(o,-1,1)),Math.abs(o)&lt=
;.9999999?(this._x=3DMath.atan2(-c,l),this._y=3DMath.atan2(-h,r)):(this._x=
=3D0,this._y=3DMath.atan2(a,d));break;case"XZY":this._z=3DMath.asin(-ht(s,-=
1,1)),Math.abs(s)&lt;.9999999?(this._x=3DMath.atan2(u,l),this._y=3DMath.ata=
n2(a,r)):(this._x=3DMath.atan2(-c,d),this._y=3D0);break;default:console.war=
n("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)=
}return this._order=3De,!1!=3D=3Dn&amp;&amp;this._onChangeCallback(),this}s=
etFromQuaternion(t,e,n){return pe.makeRotationFromQuaternion(t),this.setFro=
mRotationMatrix(pe,e,n)}setFromVector3(t,e){return this.set(t.x,t.y,t.z,e||=
this._order)}reorder(t){return me.setFromEuler(this),this.setFromQuaternion=
(me,t)}equals(t){return t._x=3D=3D=3Dthis._x&amp;&amp;t._y=3D=3D=3Dthis._y&=
amp;&amp;t._z=3D=3D=3Dthis._z&amp;&amp;t._order=3D=3D=3Dthis._order}fromArr=
ay(t){return this._x=3Dt[0],this._y=3Dt[1],this._z=3Dt[2],void 0!=3D=3Dt[3]=
&amp;&amp;(this._order=3Dt[3]),this._onChangeCallback(),this}toArray(t=3D[]=
,e=3D0){return t[e]=3Dthis._x,t[e+1]=3Dthis._y,t[e+2]=3Dthis._z,t[e+3]=3Dth=
is._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new Lt(thi=
s._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=3Dt,this}_=
onChangeCallback(){}}fe.prototype.isEuler=3D!0,fe.DefaultOrder=3D"XYZ",fe.R=
otationOrders=3D["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ge{constructor(=
){this.mask=3D1}set(t){this.mask=3D1&lt;&lt;t|0}enable(t){this.mask|=3D1&lt=
;&lt;t|0}enableAll(){this.mask=3D-1}toggle(t){this.mask^=3D1&lt;&lt;t|0}dis=
able(t){this.mask&amp;=3D~(1&lt;&lt;t|0)}disableAll(){this.mask=3D0}test(t)=
{return 0!=3D(this.mask&amp;t.mask)}}let ve=3D0;const ye=3Dnew Lt,xe=3Dnew =
At,_e=3Dnew se,we=3Dnew Lt,be=3Dnew Lt,Me=3Dnew Lt,Se=3Dnew At,Te=3Dnew Lt(=
1,0,0),Ee=3Dnew Lt(0,1,0),Ae=3Dnew Lt(0,0,1),Le=3D{type:"added"},Re=3D{type=
:"removed"};class Ce extends rt{constructor(){super(),Object.defineProperty=
(this,"id",{value:ve++}),this.uuid=3Dct(),this.name=3D"",this.type=3D"Objec=
t3D",this.parent=3Dnull,this.children=3D[],this.up=3DCe.DefaultUp.clone();c=
onst t=3Dnew Lt,e=3Dnew fe,n=3Dnew At,i=3Dnew Lt(1,1,1);e._onChange((functi=
on(){n.setFromEuler(e,!1)})),n._onChange((function(){e.setFromQuaternion(n,=
void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enume=
rable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaterni=
on:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerabl=
e:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new yt}}),=
this.matrix=3Dnew se,this.matrixWorld=3Dnew se,this.matrixAutoUpdate=3DCe.D=
efaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=3D!1,this.layers=3Dnew g=
e,this.visible=3D!0,this.castShadow=3D!1,this.receiveShadow=3D!1,this.frust=
umCulled=3D!0,this.renderOrder=3D0,this.animations=3D[],this.userData=3D{}}=
onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&am=
p;&amp;this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose=
(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.q=
uaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion=
.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler=
(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}se=
tRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return=
 xe.setFromAxisAngle(t,e),this.quaternion.multiply(xe),this}rotateOnWorldAx=
is(t,e){return xe.setFromAxisAngle(t,e),this.quaternion.premultiply(xe),thi=
s}rotateX(t){return this.rotateOnAxis(Te,t)}rotateY(t){return this.rotateOn=
Axis(Ee,t)}rotateZ(t){return this.rotateOnAxis(Ae,t)}translateOnAxis(t,e){r=
eturn ye.copy(t).applyQuaternion(this.quaternion),this.position.add(ye.mult=
iplyScalar(e)),this}translateX(t){return this.translateOnAxis(Te,t)}transla=
teY(t){return this.translateOnAxis(Ee,t)}translateZ(t){return this.translat=
eOnAxis(Ae,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}world=
ToLocal(t){return t.applyMatrix4(_e.copy(this.matrixWorld).invert())}lookAt=
(t,e,n){t.isVector3?we.copy(t):we.set(t,e,n);const i=3Dthis.parent;this.upd=
ateWorldMatrix(!0,!1),be.setFromMatrixPosition(this.matrixWorld),this.isCam=
era||this.isLight?_e.lookAt(be,we,this.up):_e.lookAt(we,be,this.up),this.qu=
aternion.setFromRotationMatrix(_e),i&amp;&amp;(_e.extractRotation(i.matrixW=
orld),xe.setFromRotationMatrix(_e),this.quaternion.premultiply(xe.invert())=
)}add(t){if(arguments.length&gt;1){for(let t=3D0;t&lt;arguments.length;t++)=
this.add(arguments[t]);return this}return t=3D=3D=3Dthis?(console.error("TH=
REE.Object3D.add: object can't be added as a child of itself.",t),this):(t&=
amp;&amp;t.isObject3D?(null!=3D=3Dt.parent&amp;&amp;t.parent.remove(t),t.pa=
rent=3Dthis,this.children.push(t),t.dispatchEvent(Le)):console.error("THREE=
.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t=
){if(arguments.length&gt;1){for(let t=3D0;t&lt;arguments.length;t++)this.re=
move(arguments[t]);return this}const e=3Dthis.children.indexOf(t);return-1!=
=3D=3De&amp;&amp;(t.parent=3Dnull,this.children.splice(e,1),t.dispatchEvent=
(Re)),this}clear(){for(let t=3D0;t&lt;this.children.length;t++){const e=3Dt=
his.children[t];e.parent=3Dnull,e.dispatchEvent(Re)}return this.children.le=
ngth=3D0,this}attach(t){return this.updateWorldMatrix(!0,!1),_e.copy(this.m=
atrixWorld).invert(),null!=3D=3Dt.parent&amp;&amp;(t.parent.updateWorldMatr=
ix(!0,!1),_e.multiply(t.parent.matrixWorld)),t.applyMatrix4(_e),this.add(t)=
,t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByPr=
operty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)=
}getObjectByProperty(t,e){if(this[t]=3D=3D=3De)return this;for(let n=3D0,i=
=3Dthis.children.length;n&lt;i;n++){const i=3Dthis.children[n].getObjectByP=
roperty(t,e);if(void 0!=3D=3Di)return i}}getWorldPosition(t){return void 0=
=3D=3D=3Dt&amp;&amp;(console.warn("THREE.Object3D: .getWorldPosition() targ=
et is now required"),t=3Dnew Lt),this.updateWorldMatrix(!0,!1),t.setFromMat=
rixPosition(this.matrixWorld)}getWorldQuaternion(t){return void 0=3D=3D=3Dt=
&amp;&amp;(console.warn("THREE.Object3D: .getWorldQuaternion() target is no=
w required"),t=3Dnew At),this.updateWorldMatrix(!0,!1),this.matrixWorld.dec=
ompose(be,t,Me),t}getWorldScale(t){return void 0=3D=3D=3Dt&amp;&amp;(consol=
e.warn("THREE.Object3D: .getWorldScale() target is now required"),t=3Dnew L=
t),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(be,Se,t),t}getW=
orldDirection(t){void 0=3D=3D=3Dt&amp;&amp;(console.warn("THREE.Object3D: .=
getWorldDirection() target is now required"),t=3Dnew Lt),this.updateWorldMa=
trix(!0,!1);const e=3Dthis.matrixWorld.elements;return t.set(e[8],e[9],e[10=
]).normalize()}raycast(){}traverse(t){t(this);const e=3Dthis.children;for(l=
et n=3D0,i=3De.length;n&lt;i;n++)e[n].traverse(t)}traverseVisible(t){if(!1=
=3D=3D=3Dthis.visible)return;t(this);const e=3Dthis.children;for(let n=3D0,=
i=3De.length;n&lt;i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const =
e=3Dthis.parent;null!=3D=3De&amp;&amp;(t(e),e.traverseAncestors(t))}updateM=
atrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.=
matrixWorldNeedsUpdate=3D!0}updateMatrixWorld(t){this.matrixAutoUpdate&amp;=
&amp;this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&amp;&amp;(null=3D=
=3D=3Dthis.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multi=
plyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdat=
e=3D!1,t=3D!0);const e=3Dthis.children;for(let n=3D0,i=3De.length;n&lt;i;n+=
+)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=3Dthis.parent;if=
(!0=3D=3D=3Dt&amp;&amp;null!=3D=3Dn&amp;&amp;n.updateWorldMatrix(!0,!1),thi=
s.matrixAutoUpdate&amp;&amp;this.updateMatrix(),null=3D=3D=3Dthis.parent?th=
is.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.par=
ent.matrixWorld,this.matrix),!0=3D=3D=3De){const t=3Dthis.children;for(let =
e=3D0,n=3Dt.length;e&lt;n;e++)t[e].updateWorldMatrix(!1,!0)}}toJSON(t){cons=
t e=3Dvoid 0=3D=3D=3Dt||"string"=3D=3Dtypeof t,n=3D{};e&amp;&amp;(t=3D{geom=
etries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animati=
ons:{}},n.metadata=3D{version:4.5,type:"Object",generator:"Object3D.toJSON"=
});const i=3D{};function r(e,n){return void 0=3D=3D=3De[n.uuid]&amp;&amp;(e=
[n.uuid]=3Dn.toJSON(t)),n.uuid}if(i.uuid=3Dthis.uuid,i.type=3Dthis.type,""!=
=3D=3Dthis.name&amp;&amp;(i.name=3Dthis.name),!0=3D=3D=3Dthis.castShadow&am=
p;&amp;(i.castShadow=3D!0),!0=3D=3D=3Dthis.receiveShadow&amp;&amp;(i.receiv=
eShadow=3D!0),!1=3D=3D=3Dthis.visible&amp;&amp;(i.visible=3D!1),!1=3D=3D=3D=
this.frustumCulled&amp;&amp;(i.frustumCulled=3D!1),0!=3D=3Dthis.renderOrder=
&amp;&amp;(i.renderOrder=3Dthis.renderOrder),"{}"!=3D=3DJSON.stringify(this=
.userData)&amp;&amp;(i.userData=3Dthis.userData),i.layers=3Dthis.layers.mas=
k,i.matrix=3Dthis.matrix.toArray(),!1=3D=3D=3Dthis.matrixAutoUpdate&amp;&am=
p;(i.matrixAutoUpdate=3D!1),this.isInstancedMesh&amp;&amp;(i.type=3D"Instan=
cedMesh",i.count=3Dthis.count,i.instanceMatrix=3Dthis.instanceMatrix.toJSON=
(),null!=3D=3Dthis.instanceColor&amp;&amp;(i.instanceColor=3Dthis.instanceC=
olor.toJSON())),this.isMesh||this.isLine||this.isPoints){i.geometry=3Dr(t.g=
eometries,this.geometry);const e=3Dthis.geometry.parameters;if(void 0!=3D=
=3De&amp;&amp;void 0!=3D=3De.shapes){const n=3De.shapes;if(Array.isArray(n)=
)for(let e=3D0,i=3Dn.length;e&lt;i;e++){const i=3Dn[e];r(t.shapes,i)}else r=
(t.shapes,n)}}if(this.isSkinnedMesh&amp;&amp;(i.bindMode=3Dthis.bindMode,i.=
bindMatrix=3Dthis.bindMatrix.toArray(),void 0!=3D=3Dthis.skeleton&amp;&amp;=
(r(t.skeletons,this.skeleton),i.skeleton=3Dthis.skeleton.uuid)),void 0!=3D=
=3Dthis.material)if(Array.isArray(this.material)){const e=3D[];for(let n=3D=
0,i=3Dthis.material.length;n&lt;i;n++)e.push(r(t.materials,this.material[n]=
));i.material=3De}else i.material=3Dr(t.materials,this.material);if(this.ch=
ildren.length&gt;0){i.children=3D[];for(let e=3D0;e&lt;this.children.length=
;e++)i.children.push(this.children[e].toJSON(t).object)}if(this.animations.=
length&gt;0){i.animations=3D[];for(let e=3D0;e&lt;this.animations.length;e+=
+){const n=3Dthis.animations[e];i.animations.push(r(t.animations,n))}}if(e)=
{const e=3Ds(t.geometries),i=3Ds(t.materials),r=3Ds(t.textures),a=3Ds(t.ima=
ges),o=3Ds(t.shapes),l=3Ds(t.skeletons),c=3Ds(t.animations);e.length&gt;0&a=
mp;&amp;(n.geometries=3De),i.length&gt;0&amp;&amp;(n.materials=3Di),r.lengt=
h&gt;0&amp;&amp;(n.textures=3Dr),a.length&gt;0&amp;&amp;(n.images=3Da),o.le=
ngth&gt;0&amp;&amp;(n.shapes=3Do),l.length&gt;0&amp;&amp;(n.skeletons=3Dl),=
c.length&gt;0&amp;&amp;(n.animations=3Dc)}return n.object=3Di,n;function s(=
t){const e=3D[];for(const n in t){const i=3Dt[n];delete i.metadata,e.push(i=
)}return e}}clone(t){return(new this.constructor).copy(this,t)}copy(t,e=3D!=
0){if(this.name=3Dt.name,this.up.copy(t.up),this.position.copy(t.position),=
this.rotation.order=3Dt.rotation.order,this.quaternion.copy(t.quaternion),t=
his.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.=
matrixWorld),this.matrixAutoUpdate=3Dt.matrixAutoUpdate,this.matrixWorldNee=
dsUpdate=3Dt.matrixWorldNeedsUpdate,this.layers.mask=3Dt.layers.mask,this.v=
isible=3Dt.visible,this.castShadow=3Dt.castShadow,this.receiveShadow=3Dt.re=
ceiveShadow,this.frustumCulled=3Dt.frustumCulled,this.renderOrder=3Dt.rende=
rOrder,this.userData=3DJSON.parse(JSON.stringify(t.userData)),!0=3D=3D=3De)=
for(let e=3D0;e&lt;t.children.length;e++){const n=3Dt.children[e];this.add(=
n.clone())}return this}}Ce.DefaultUp=3Dnew Lt(0,1,0),Ce.DefaultMatrixAutoUp=
date=3D!0,Ce.prototype.isObject3D=3D!0;const Pe=3Dnew Lt,De=3Dnew Lt,Ie=3Dn=
ew yt;class Ne{constructor(t=3Dnew Lt(1,0,0),e=3D0){this.normal=3Dt,this.co=
nstant=3De}set(t,e){return this.normal.copy(t),this.constant=3De,this}setCo=
mponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=3Di,this}setF=
romNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=3D-=
e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=3DPe.subVector=
s(n,e).cross(De.subVectors(t,e)).normalize();return this.setFromNormalAndCo=
planarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.consta=
nt=3Dt.constant,this}normalize(){const t=3D1/this.normal.length();return th=
is.normal.multiplyScalar(t),this.constant*=3Dt,this}negate(){return this.co=
nstant*=3D-1,this.normal.negate(),this}distanceToPoint(t){return this.norma=
l.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.ce=
nter)-t.radius}projectPoint(t,e){return void 0=3D=3D=3De&amp;&amp;(console.=
warn("THREE.Plane: .projectPoint() target is now required"),e=3Dnew Lt),e.c=
opy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectL=
ine(t,e){void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Plane: .intersectLi=
ne() target is now required"),e=3Dnew Lt);const n=3Dt.delta(Pe),i=3Dthis.no=
rmal.dot(n);if(0=3D=3D=3Di)return 0=3D=3D=3Dthis.distanceToPoint(t.start)?e=
.copy(t.start):null;const r=3D-(t.start.dot(this.normal)+this.constant)/i;r=
eturn r&lt;0||r&gt;1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersec=
tsLine(t){const e=3Dthis.distanceToPoint(t.start),n=3Dthis.distanceToPoint(=
t.end);return e&lt;0&amp;&amp;n&gt;0||n&lt;0&amp;&amp;e&gt;0}intersectsBox(=
t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPl=
ane(this)}coplanarPoint(t){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("=
THREE.Plane: .coplanarPoint() target is now required"),t=3Dnew Lt),t.copy(t=
his.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=3De||I=
e.getNormalMatrix(t),i=3Dthis.coplanarPoint(Pe).applyMatrix4(t),r=3Dthis.no=
rmal.applyMatrix3(n).normalize();return this.constant=3D-i.dot(r),this}tran=
slate(t){return this.constant-=3Dt.dot(this.normal),this}equals(t){return t=
.normal.equals(this.normal)&amp;&amp;t.constant=3D=3D=3Dthis.constant}clone=
(){return(new this.constructor).copy(this)}}Ne.prototype.isPlane=3D!0;const=
 Be=3Dnew Lt,ze=3Dnew Lt,Fe=3Dnew Lt,Oe=3Dnew Lt,He=3Dnew Lt,Ge=3Dnew Lt,Ue=
=3Dnew Lt,ke=3Dnew Lt,Ve=3Dnew Lt,We=3Dnew Lt;class je{constructor(t=3Dnew =
Lt,e=3Dnew Lt,n=3Dnew Lt){this.a=3Dt,this.b=3De,this.c=3Dn}static getNormal=
(t,e,n,i){void 0=3D=3D=3Di&amp;&amp;(console.warn("THREE.Triangle: .getNorm=
al() target is now required"),i=3Dnew Lt),i.subVectors(n,e),Be.subVectors(t=
,e),i.cross(Be);const r=3Di.lengthSq();return r&gt;0?i.multiplyScalar(1/Mat=
h.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Be.subVectors(i,e),z=
e.subVectors(n,e),Fe.subVectors(t,e);const s=3DBe.dot(Be),a=3DBe.dot(ze),o=
=3DBe.dot(Fe),l=3Dze.dot(ze),c=3Dze.dot(Fe),h=3Ds*l-a*a;if(void 0=3D=3D=3Dr=
&amp;&amp;(console.warn("THREE.Triangle: .getBarycoord() target is now requ=
ired"),r=3Dnew Lt),0=3D=3D=3Dh)return r.set(-2,-1,-1);const u=3D1/h,d=3D(l*=
o-a*c)*u,p=3D(s*c-a*o)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n=
,i){return this.getBarycoord(t,e,n,i,Oe),Oe.x&gt;=3D0&amp;&amp;Oe.y&gt;=3D0=
&amp;&amp;Oe.x+Oe.y&lt;=3D1}static getUV(t,e,n,i,r,s,a,o){return this.getBa=
rycoord(t,e,n,i,Oe),o.set(0,0),o.addScaledVector(r,Oe.x),o.addScaledVector(=
s,Oe.y),o.addScaledVector(a,Oe.z),o}static isFrontFacing(t,e,n,i){return Be=
.subVectors(n,e),ze.subVectors(t,e),Be.cross(ze).dot(i)&lt;0}set(t,e,n){ret=
urn this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndic=
es(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),th=
is}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.co=
py(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVecto=
rs(this.c,this.b),ze.subVectors(this.a,this.b),.5*Be.cross(ze).length()}get=
Midpoint(t){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("THREE.Triangle:=
 .getMidpoint() target is now required"),t=3Dnew Lt),t.addVectors(this.a,th=
is.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this=
.a,this.b,this.c,t)}getPlane(t){return void 0=3D=3D=3Dt&amp;&amp;(console.w=
arn("THREE.Triangle: .getPlane() target is now required"),t=3Dnew Ne),t.set=
FromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBar=
ycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return je.getUV(t,this.a,=
this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,th=
is.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,=
t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t=
,e){void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Triangle: .closestPointT=
oPoint() target is now required"),e=3Dnew Lt);const n=3Dthis.a,i=3Dthis.b,r=
=3Dthis.c;let s,a;He.subVectors(i,n),Ge.subVectors(r,n),ke.subVectors(t,n);=
const o=3DHe.dot(ke),l=3DGe.dot(ke);if(o&lt;=3D0&amp;&amp;l&lt;=3D0)return =
e.copy(n);Ve.subVectors(t,i);const c=3DHe.dot(Ve),h=3DGe.dot(Ve);if(c&gt;=
=3D0&amp;&amp;h&lt;=3Dc)return e.copy(i);const u=3Do*h-c*l;if(u&lt;=3D0&amp=
;&amp;o&gt;=3D0&amp;&amp;c&lt;=3D0)return s=3Do/(o-c),e.copy(n).addScaledVe=
ctor(He,s);We.subVectors(t,r);const d=3DHe.dot(We),p=3DGe.dot(We);if(p&gt;=
=3D0&amp;&amp;d&lt;=3Dp)return e.copy(r);const m=3Dd*l-o*p;if(m&lt;=3D0&amp=
;&amp;l&gt;=3D0&amp;&amp;p&lt;=3D0)return a=3Dl/(l-p),e.copy(n).addScaledVe=
ctor(Ge,a);const f=3Dc*p-d*h;if(f&lt;=3D0&amp;&amp;h-c&gt;=3D0&amp;&amp;d-p=
&gt;=3D0)return Ue.subVectors(r,i),a=3D(h-c)/(h-c+(d-p)),e.copy(i).addScale=
dVector(Ue,a);const g=3D1/(f+m+u);return s=3Dm*g,a=3Du*g,e.copy(n).addScale=
dVector(He,s).addScaledVector(Ge,a)}equals(t){return t.a.equals(this.a)&amp=
;&amp;t.b.equals(this.b)&amp;&amp;t.c.equals(this.c)}}let qe=3D0;function X=
e(){Object.defineProperty(this,"id",{value:qe++}),this.uuid=3Dct(),this.nam=
e=3D"",this.type=3D"Material",this.fog=3D!0,this.blending=3D1,this.side=3D0=
,this.vertexColors=3D!1,this.opacity=3D1,this.transparent=3D!1,this.blendSr=
c=3D204,this.blendDst=3D205,this.blendEquation=3Dn,this.blendSrcAlpha=3Dnul=
l,this.blendDstAlpha=3Dnull,this.blendEquationAlpha=3Dnull,this.depthFunc=
=3D3,this.depthTest=3D!0,this.depthWrite=3D!0,this.stencilWriteMask=3D255,t=
his.stencilFunc=3D519,this.stencilRef=3D0,this.stencilFuncMask=3D255,this.s=
tencilFail=3Dtt,this.stencilZFail=3Dtt,this.stencilZPass=3Dtt,this.stencilW=
rite=3D!1,this.clippingPlanes=3Dnull,this.clipIntersection=3D!1,this.clipSh=
adows=3D!1,this.shadowSide=3Dnull,this.colorWrite=3D!0,this.precision=3Dnul=
l,this.polygonOffset=3D!1,this.polygonOffsetFactor=3D0,this.polygonOffsetUn=
its=3D0,this.dithering=3D!1,this.alphaTest=3D0,this.alphaToCoverage=3D!1,th=
is.premultipliedAlpha=3D!1,this.visible=3D!0,this.toneMapped=3D!0,this.user=
Data=3D{},this.version=3D0}Xe.prototype=3DObject.assign(Object.create(rt.pr=
ototype),{constructor:Xe,isMaterial:!0,onBuild:function(){},onBeforeCompile=
:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.=
toString()},setValues:function(t){if(void 0!=3D=3Dt)for(const e in t){const=
 n=3Dt[e];if(void 0=3D=3D=3Dn){console.warn("THREE.Material: '"+e+"' parame=
ter is undefined.");continue}if("shading"=3D=3D=3De){console.warn("THREE."+=
this.type+": .shading has been removed. Use the boolean .flatShading instea=
d."),this.flatShading=3D1=3D=3D=3Dn;continue}const i=3Dthis[e];void 0!=3D=
=3Di?i&amp;&amp;i.isColor?i.set(n):i&amp;&amp;i.isVector3&amp;&amp;n&amp;&a=
mp;n.isVector3?i.copy(n):this[e]=3Dn:console.warn("THREE."+this.type+": '"+=
e+"' is not a property of this material.")}},toJSON:function(t){const e=3Dv=
oid 0=3D=3D=3Dt||"string"=3D=3Dtypeof t;e&amp;&amp;(t=3D{textures:{},images=
:{}});const n=3D{metadata:{version:4.5,type:"Material",generator:"Material.=
toJSON"}};function i(t){const e=3D[];for(const n in t){const i=3Dt[n];delet=
e i.metadata,e.push(i)}return e}if(n.uuid=3Dthis.uuid,n.type=3Dthis.type,""=
!=3D=3Dthis.name&amp;&amp;(n.name=3Dthis.name),this.color&amp;&amp;this.col=
or.isColor&amp;&amp;(n.color=3Dthis.color.getHex()),void 0!=3D=3Dthis.rough=
ness&amp;&amp;(n.roughness=3Dthis.roughness),void 0!=3D=3Dthis.metalness&am=
p;&amp;(n.metalness=3Dthis.metalness),this.sheen&amp;&amp;this.sheen.isColo=
r&amp;&amp;(n.sheen=3Dthis.sheen.getHex()),this.emissive&amp;&amp;this.emis=
sive.isColor&amp;&amp;(n.emissive=3Dthis.emissive.getHex()),this.emissiveIn=
tensity&amp;&amp;1!=3D=3Dthis.emissiveIntensity&amp;&amp;(n.emissiveIntensi=
ty=3Dthis.emissiveIntensity),this.specular&amp;&amp;this.specular.isColor&a=
mp;&amp;(n.specular=3Dthis.specular.getHex()),void 0!=3D=3Dthis.shininess&a=
mp;&amp;(n.shininess=3Dthis.shininess),void 0!=3D=3Dthis.clearcoat&amp;&amp=
;(n.clearcoat=3Dthis.clearcoat),void 0!=3D=3Dthis.clearcoatRoughness&amp;&a=
mp;(n.clearcoatRoughness=3Dthis.clearcoatRoughness),this.clearcoatMap&amp;&=
amp;this.clearcoatMap.isTexture&amp;&amp;(n.clearcoatMap=3Dthis.clearcoatMa=
p.toJSON(t).uuid),this.clearcoatRoughnessMap&amp;&amp;this.clearcoatRoughne=
ssMap.isTexture&amp;&amp;(n.clearcoatRoughnessMap=3Dthis.clearcoatRoughness=
Map.toJSON(t).uuid),this.clearcoatNormalMap&amp;&amp;this.clearcoatNormalMa=
p.isTexture&amp;&amp;(n.clearcoatNormalMap=3Dthis.clearcoatNormalMap.toJSON=
(t).uuid,n.clearcoatNormalScale=3Dthis.clearcoatNormalScale.toArray()),this=
.map&amp;&amp;this.map.isTexture&amp;&amp;(n.map=3Dthis.map.toJSON(t).uuid)=
,this.matcap&amp;&amp;this.matcap.isTexture&amp;&amp;(n.matcap=3Dthis.matca=
p.toJSON(t).uuid),this.alphaMap&amp;&amp;this.alphaMap.isTexture&amp;&amp;(=
n.alphaMap=3Dthis.alphaMap.toJSON(t).uuid),this.lightMap&amp;&amp;this.ligh=
tMap.isTexture&amp;&amp;(n.lightMap=3Dthis.lightMap.toJSON(t).uuid,n.lightM=
apIntensity=3Dthis.lightMapIntensity),this.aoMap&amp;&amp;this.aoMap.isText=
ure&amp;&amp;(n.aoMap=3Dthis.aoMap.toJSON(t).uuid,n.aoMapIntensity=3Dthis.a=
oMapIntensity),this.bumpMap&amp;&amp;this.bumpMap.isTexture&amp;&amp;(n.bum=
pMap=3Dthis.bumpMap.toJSON(t).uuid,n.bumpScale=3Dthis.bumpScale),this.norma=
lMap&amp;&amp;this.normalMap.isTexture&amp;&amp;(n.normalMap=3Dthis.normalM=
ap.toJSON(t).uuid,n.normalMapType=3Dthis.normalMapType,n.normalScale=3Dthis=
.normalScale.toArray()),this.displacementMap&amp;&amp;this.displacementMap.=
isTexture&amp;&amp;(n.displacementMap=3Dthis.displacementMap.toJSON(t).uuid=
,n.displacementScale=3Dthis.displacementScale,n.displacementBias=3Dthis.dis=
placementBias),this.roughnessMap&amp;&amp;this.roughnessMap.isTexture&amp;&=
amp;(n.roughnessMap=3Dthis.roughnessMap.toJSON(t).uuid),this.metalnessMap&a=
mp;&amp;this.metalnessMap.isTexture&amp;&amp;(n.metalnessMap=3Dthis.metalne=
ssMap.toJSON(t).uuid),this.emissiveMap&amp;&amp;this.emissiveMap.isTexture&=
amp;&amp;(n.emissiveMap=3Dthis.emissiveMap.toJSON(t).uuid),this.specularMap=
&amp;&amp;this.specularMap.isTexture&amp;&amp;(n.specularMap=3Dthis.specula=
rMap.toJSON(t).uuid),this.envMap&amp;&amp;this.envMap.isTexture&amp;&amp;(n=
.envMap=3Dthis.envMap.toJSON(t).uuid,void 0!=3D=3Dthis.combine&amp;&amp;(n.=
combine=3Dthis.combine)),void 0!=3D=3Dthis.envMapIntensity&amp;&amp;(n.envM=
apIntensity=3Dthis.envMapIntensity),void 0!=3D=3Dthis.reflectivity&amp;&amp=
;(n.reflectivity=3Dthis.reflectivity),void 0!=3D=3Dthis.refractionRatio&amp=
;&amp;(n.refractionRatio=3Dthis.refractionRatio),this.gradientMap&amp;&amp;=
this.gradientMap.isTexture&amp;&amp;(n.gradientMap=3Dthis.gradientMap.toJSO=
N(t).uuid),void 0!=3D=3Dthis.size&amp;&amp;(n.size=3Dthis.size),null!=3D=3D=
this.shadowSide&amp;&amp;(n.shadowSide=3Dthis.shadowSide),void 0!=3D=3Dthis=
.sizeAttenuation&amp;&amp;(n.sizeAttenuation=3Dthis.sizeAttenuation),1!=3D=
=3Dthis.blending&amp;&amp;(n.blending=3Dthis.blending),0!=3D=3Dthis.side&am=
p;&amp;(n.side=3Dthis.side),this.vertexColors&amp;&amp;(n.vertexColors=3D!0=
),this.opacity&lt;1&amp;&amp;(n.opacity=3Dthis.opacity),!0=3D=3D=3Dthis.tra=
nsparent&amp;&amp;(n.transparent=3Dthis.transparent),n.depthFunc=3Dthis.dep=
thFunc,n.depthTest=3Dthis.depthTest,n.depthWrite=3Dthis.depthWrite,n.colorW=
rite=3Dthis.colorWrite,n.stencilWrite=3Dthis.stencilWrite,n.stencilWriteMas=
k=3Dthis.stencilWriteMask,n.stencilFunc=3Dthis.stencilFunc,n.stencilRef=3Dt=
his.stencilRef,n.stencilFuncMask=3Dthis.stencilFuncMask,n.stencilFail=3Dthi=
s.stencilFail,n.stencilZFail=3Dthis.stencilZFail,n.stencilZPass=3Dthis.sten=
cilZPass,this.rotation&amp;&amp;0!=3D=3Dthis.rotation&amp;&amp;(n.rotation=
=3Dthis.rotation),!0=3D=3D=3Dthis.polygonOffset&amp;&amp;(n.polygonOffset=
=3D!0),0!=3D=3Dthis.polygonOffsetFactor&amp;&amp;(n.polygonOffsetFactor=3Dt=
his.polygonOffsetFactor),0!=3D=3Dthis.polygonOffsetUnits&amp;&amp;(n.polygo=
nOffsetUnits=3Dthis.polygonOffsetUnits),this.linewidth&amp;&amp;1!=3D=3Dthi=
s.linewidth&amp;&amp;(n.linewidth=3Dthis.linewidth),void 0!=3D=3Dthis.dashS=
ize&amp;&amp;(n.dashSize=3Dthis.dashSize),void 0!=3D=3Dthis.gapSize&amp;&am=
p;(n.gapSize=3Dthis.gapSize),void 0!=3D=3Dthis.scale&amp;&amp;(n.scale=3Dth=
is.scale),!0=3D=3D=3Dthis.dithering&amp;&amp;(n.dithering=3D!0),this.alphaT=
est&gt;0&amp;&amp;(n.alphaTest=3Dthis.alphaTest),!0=3D=3D=3Dthis.alphaToCov=
erage&amp;&amp;(n.alphaToCoverage=3Dthis.alphaToCoverage),!0=3D=3D=3Dthis.p=
remultipliedAlpha&amp;&amp;(n.premultipliedAlpha=3Dthis.premultipliedAlpha)=
,!0=3D=3D=3Dthis.wireframe&amp;&amp;(n.wireframe=3Dthis.wireframe),this.wir=
eframeLinewidth&gt;1&amp;&amp;(n.wireframeLinewidth=3Dthis.wireframeLinewid=
th),"round"!=3D=3Dthis.wireframeLinecap&amp;&amp;(n.wireframeLinecap=3Dthis=
.wireframeLinecap),"round"!=3D=3Dthis.wireframeLinejoin&amp;&amp;(n.wirefra=
meLinejoin=3Dthis.wireframeLinejoin),!0=3D=3D=3Dthis.morphTargets&amp;&amp;=
(n.morphTargets=3D!0),!0=3D=3D=3Dthis.morphNormals&amp;&amp;(n.morphNormals=
=3D!0),!0=3D=3D=3Dthis.skinning&amp;&amp;(n.skinning=3D!0),!0=3D=3D=3Dthis.=
flatShading&amp;&amp;(n.flatShading=3Dthis.flatShading),!1=3D=3D=3Dthis.vis=
ible&amp;&amp;(n.visible=3D!1),!1=3D=3D=3Dthis.toneMapped&amp;&amp;(n.toneM=
apped=3D!1),"{}"!=3D=3DJSON.stringify(this.userData)&amp;&amp;(n.userData=
=3Dthis.userData),e){const e=3Di(t.textures),r=3Di(t.images);e.length&gt;0&=
amp;&amp;(n.textures=3De),r.length&gt;0&amp;&amp;(n.images=3Dr)}return n},c=
lone:function(){return(new this.constructor).copy(this)},copy:function(t){t=
his.name=3Dt.name,this.fog=3Dt.fog,this.blending=3Dt.blending,this.side=3Dt=
.side,this.vertexColors=3Dt.vertexColors,this.opacity=3Dt.opacity,this.tran=
sparent=3Dt.transparent,this.blendSrc=3Dt.blendSrc,this.blendDst=3Dt.blendD=
st,this.blendEquation=3Dt.blendEquation,this.blendSrcAlpha=3Dt.blendSrcAlph=
a,this.blendDstAlpha=3Dt.blendDstAlpha,this.blendEquationAlpha=3Dt.blendEqu=
ationAlpha,this.depthFunc=3Dt.depthFunc,this.depthTest=3Dt.depthTest,this.d=
epthWrite=3Dt.depthWrite,this.stencilWriteMask=3Dt.stencilWriteMask,this.st=
encilFunc=3Dt.stencilFunc,this.stencilRef=3Dt.stencilRef,this.stencilFuncMa=
sk=3Dt.stencilFuncMask,this.stencilFail=3Dt.stencilFail,this.stencilZFail=
=3Dt.stencilZFail,this.stencilZPass=3Dt.stencilZPass,this.stencilWrite=3Dt.=
stencilWrite;const e=3Dt.clippingPlanes;let n=3Dnull;if(null!=3D=3De){const=
 t=3De.length;n=3Dnew Array(t);for(let i=3D0;i!=3D=3Dt;++i)n[i]=3De[i].clon=
e()}return this.clippingPlanes=3Dn,this.clipIntersection=3Dt.clipIntersecti=
on,this.clipShadows=3Dt.clipShadows,this.shadowSide=3Dt.shadowSide,this.col=
orWrite=3Dt.colorWrite,this.precision=3Dt.precision,this.polygonOffset=3Dt.=
polygonOffset,this.polygonOffsetFactor=3Dt.polygonOffsetFactor,this.polygon=
OffsetUnits=3Dt.polygonOffsetUnits,this.dithering=3Dt.dithering,this.alphaT=
est=3Dt.alphaTest,this.alphaToCoverage=3Dt.alphaToCoverage,this.premultipli=
edAlpha=3Dt.premultipliedAlpha,this.visible=3Dt.visible,this.toneMapped=3Dt=
.toneMapped,this.userData=3DJSON.parse(JSON.stringify(t.userData)),this},di=
spose:function(){this.dispatchEvent({type:"dispose"})}}),Object.definePrope=
rty(Xe.prototype,"needsUpdate",{set:function(t){!0=3D=3D=3Dt&amp;&amp;this.=
version++}});const Ye=3D{aliceblue:15792383,antiquewhite:16444375,aqua:6553=
5,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,=
blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywoo=
d:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16=
744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535=
,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkg=
reen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkoli=
vegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,dar=
ksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3=
100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppin=
k:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:200=
3199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16=
711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329=
120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:157=
94160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,kha=
ki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemo=
nchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599=
,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightg=
rey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,=
lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightste=
elblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:164=
45670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:2=
05,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,medium=
slateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvio=
letred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,=
moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421=
376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,pa=
legoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletre=
d:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:167610=
35,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,r=
ed:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon=
:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:105=
06797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,s=
lategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:1380=
8780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:1=
5631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,y=
ellowgreen:10145074},Ze=3D{h:0,s:0,l:0},Je=3D{h:0,s:0,l:0};function Qe(t,e,=
n){return n&lt;0&amp;&amp;(n+=3D1),n&gt;1&amp;&amp;(n-=3D1),n&lt;1/6?t+6*(e=
-t)*n:n&lt;.5?e:n&lt;2/3?t+6*(e-t)*(2/3-n):t}function Ke(t){return t&lt;.04=
045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function $e(t){re=
turn t&lt;.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}class tn{construct=
or(t,e,n){return void 0=3D=3D=3De&amp;&amp;void 0=3D=3D=3Dn?this.set(t):thi=
s.setRGB(t,e,n)}set(t){return t&amp;&amp;t.isColor?this.copy(t):"number"=3D=
=3Dtypeof t?this.setHex(t):"string"=3D=3Dtypeof t&amp;&amp;this.setStyle(t)=
,this}setScalar(t){return this.r=3Dt,this.g=3Dt,this.b=3Dt,this}setHex(t){r=
eturn t=3DMath.floor(t),this.r=3D(t&gt;&gt;16&amp;255)/255,this.g=3D(t&gt;&=
gt;8&amp;255)/255,this.b=3D(255&amp;t)/255,this}setRGB(t,e,n){return this.r=
=3Dt,this.g=3De,this.b=3Dn,this}setHSL(t,e,n){if(t=3Dut(t,1),e=3Dht(e,0,1),=
n=3Dht(n,0,1),0=3D=3D=3De)this.r=3Dthis.g=3Dthis.b=3Dn;else{const i=3Dn&lt;=
=3D.5?n*(1+e):n+e-n*e,r=3D2*n-i;this.r=3DQe(r,i,t+1/3),this.g=3DQe(r,i,t),t=
his.b=3DQe(r,i,t-1/3)}return this}setStyle(t){function e(e){void 0!=3D=3De&=
amp;&amp;parseFloat(e)&lt;1&amp;&amp;console.warn("THREE.Color: Alpha compo=
nent of "+t+" will be ignored.")}let n;if(n=3D/^((?:rgb|hsl)a?)\(([^\)]*)\)=
/.exec(t)){let t;const i=3Dn[1],r=3Dn[2];switch(i){case"rgb":case"rgba":if(=
t=3D/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))=
return this.r=3DMath.min(255,parseInt(t[1],10))/255,this.g=3DMath.min(255,p=
arseInt(t[2],10))/255,this.b=3DMath.min(255,parseInt(t[3],10))/255,e(t[4]),=
this;if(t=3D/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s=
*)?$/.exec(r))return this.r=3DMath.min(100,parseInt(t[1],10))/100,this.g=3D=
Math.min(100,parseInt(t[2],10))/100,this.b=3DMath.min(100,parseInt(t[3],10)=
)/100,e(t[4]),this;break;case"hsl":case"hsla":if(t=3D/^\s*(\d*\.?\d+)\s*,\s=
*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const n=3Dparse=
Float(t[1])/360,i=3DparseInt(t[2],10)/100,r=3DparseInt(t[3],10)/100;return =
e(t[4]),this.setHSL(n,i,r)}}}else if(n=3D/^\#([A-Fa-f\d]+)$/.exec(t)){const=
 t=3Dn[1],e=3Dt.length;if(3=3D=3D=3De)return this.r=3DparseInt(t.charAt(0)+=
t.charAt(0),16)/255,this.g=3DparseInt(t.charAt(1)+t.charAt(1),16)/255,this.=
b=3DparseInt(t.charAt(2)+t.charAt(2),16)/255,this;if(6=3D=3D=3De)return thi=
s.r=3DparseInt(t.charAt(0)+t.charAt(1),16)/255,this.g=3DparseInt(t.charAt(2=
)+t.charAt(3),16)/255,this.b=3DparseInt(t.charAt(4)+t.charAt(5),16)/255,thi=
s}return t&amp;&amp;t.length&gt;0?this.setColorName(t):this}setColorName(t)=
{const e=3DYe[t.toLowerCase()];return void 0!=3D=3De?this.setHex(e):console=
.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constru=
ctor(this.r,this.g,this.b)}copy(t){return this.r=3Dt.r,this.g=3Dt.g,this.b=
=3Dt.b,this}copyGammaToLinear(t,e=3D2){return this.r=3DMath.pow(t.r,e),this=
.g=3DMath.pow(t.g,e),this.b=3DMath.pow(t.b,e),this}copyLinearToGamma(t,e=3D=
2){const n=3De&gt;0?1/e:1;return this.r=3DMath.pow(t.r,n),this.g=3DMath.pow=
(t.g,n),this.b=3DMath.pow(t.b,n),this}convertGammaToLinear(t){return this.c=
opyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinea=
rToGamma(this,t),this}copySRGBToLinear(t){return this.r=3DKe(t.r),this.g=3D=
Ke(t.g),this.b=3DKe(t.b),this}copyLinearToSRGB(t){return this.r=3D$e(t.r),t=
his.g=3D$e(t.g),this.b=3D$e(t.b),this}convertSRGBToLinear(){return this.cop=
ySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB=
(this),this}getHex(){return 255*this.r&lt;&lt;16^255*this.g&lt;&lt;8^255*th=
is.b&lt;&lt;0}getHexString(){return("000000"+this.getHex().toString(16)).sl=
ice(-6)}getHSL(t){void 0=3D=3D=3Dt&amp;&amp;(console.warn("THREE.Color: .ge=
tHSL() target is now required"),t=3D{h:0,s:0,l:0});const e=3Dthis.r,n=3Dthi=
s.g,i=3Dthis.b,r=3DMath.max(e,n,i),s=3DMath.min(e,n,i);let a,o;const l=3D(s=
+r)/2;if(s=3D=3D=3Dr)a=3D0,o=3D0;else{const t=3Dr-s;switch(o=3Dl&lt;=3D.5?t=
/(r+s):t/(2-r-s),r){case e:a=3D(n-i)/t+(n&lt;i?6:0);break;case n:a=3D(i-e)/=
t+2;break;case i:a=3D(e-n)/t+4}a/=3D6}return t.h=3Da,t.s=3Do,t.l=3Dl,t}getS=
tyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")=
"}offsetHSL(t,e,n){return this.getHSL(Ze),Ze.h+=3Dt,Ze.s+=3De,Ze.l+=3Dn,thi=
s.setHSL(Ze.h,Ze.s,Ze.l),this}add(t){return this.r+=3Dt.r,this.g+=3Dt.g,thi=
s.b+=3Dt.b,this}addColors(t,e){return this.r=3Dt.r+e.r,this.g=3Dt.g+e.g,thi=
s.b=3Dt.b+e.b,this}addScalar(t){return this.r+=3Dt,this.g+=3Dt,this.b+=3Dt,=
this}sub(t){return this.r=3DMath.max(0,this.r-t.r),this.g=3DMath.max(0,this=
.g-t.g),this.b=3DMath.max(0,this.b-t.b),this}multiply(t){return this.r*=3Dt=
.r,this.g*=3Dt.g,this.b*=3Dt.b,this}multiplyScalar(t){return this.r*=3Dt,th=
is.g*=3Dt,this.b*=3Dt,this}lerp(t,e){return this.r+=3D(t.r-this.r)*e,this.g=
+=3D(t.g-this.g)*e,this.b+=3D(t.b-this.b)*e,this}lerpColors(t,e,n){return t=
his.r=3Dt.r+(e.r-t.r)*n,this.g=3Dt.g+(e.g-t.g)*n,this.b=3Dt.b+(e.b-t.b)*n,t=
his}lerpHSL(t,e){this.getHSL(Ze),t.getHSL(Je);const n=3Ddt(Ze.h,Je.h,e),i=
=3Ddt(Ze.s,Je.s,e),r=3Ddt(Ze.l,Je.l,e);return this.setHSL(n,i,r),this}equal=
s(t){return t.r=3D=3D=3Dthis.r&amp;&amp;t.g=3D=3D=3Dthis.g&amp;&amp;t.b=3D=
=3D=3Dthis.b}fromArray(t,e=3D0){return this.r=3Dt[e],this.g=3Dt[e+1],this.b=
=3Dt[e+2],this}toArray(t=3D[],e=3D0){return t[e]=3Dthis.r,t[e+1]=3Dthis.g,t=
[e+2]=3Dthis.b,t}fromBufferAttribute(t,e){return this.r=3Dt.getX(e),this.g=
=3Dt.getY(e),this.b=3Dt.getZ(e),!0=3D=3D=3Dt.normalized&amp;&amp;(this.r/=
=3D255,this.g/=3D255,this.b/=3D255),this}toJSON(){return this.getHex()}}tn.=
NAMES=3DYe,tn.prototype.isColor=3D!0,tn.prototype.r=3D1,tn.prototype.g=3D1,=
tn.prototype.b=3D1;class en extends Xe{constructor(t){super(),this.type=3D"=
MeshBasicMaterial",this.color=3Dnew tn(16777215),this.map=3Dnull,this.light=
Map=3Dnull,this.lightMapIntensity=3D1,this.aoMap=3Dnull,this.aoMapIntensity=
=3D1,this.specularMap=3Dnull,this.alphaMap=3Dnull,this.envMap=3Dnull,this.c=
ombine=3D0,this.reflectivity=3D1,this.refractionRatio=3D.98,this.wireframe=
=3D!1,this.wireframeLinewidth=3D1,this.wireframeLinecap=3D"round",this.wire=
frameLinejoin=3D"round",this.skinning=3D!1,this.morphTargets=3D!1,this.setV=
alues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=3Dt=
.map,this.lightMap=3Dt.lightMap,this.lightMapIntensity=3Dt.lightMapIntensit=
y,this.aoMap=3Dt.aoMap,this.aoMapIntensity=3Dt.aoMapIntensity,this.specular=
Map=3Dt.specularMap,this.alphaMap=3Dt.alphaMap,this.envMap=3Dt.envMap,this.=
combine=3Dt.combine,this.reflectivity=3Dt.reflectivity,this.refractionRatio=
=3Dt.refractionRatio,this.wireframe=3Dt.wireframe,this.wireframeLinewidth=
=3Dt.wireframeLinewidth,this.wireframeLinecap=3Dt.wireframeLinecap,this.wir=
eframeLinejoin=3Dt.wireframeLinejoin,this.skinning=3Dt.skinning,this.morphT=
argets=3Dt.morphTargets,this}}en.prototype.isMeshBasicMaterial=3D!0;const n=
n=3Dnew Lt,rn=3Dnew vt;class sn{constructor(t,e,n){if(Array.isArray(t))thro=
w new TypeError("THREE.BufferAttribute: array should be a Typed Array.");th=
is.name=3D"",this.array=3Dt,this.itemSize=3De,this.count=3Dvoid 0!=3D=3Dt?t=
.length/e:0,this.normalized=3D!0=3D=3D=3Dn,this.usage=3Det,this.updateRange=
=3D{offset:0,count:-1},this.version=3D0,this.onUploadCallback=3Dfunction(){=
}}set needsUpdate(t){!0=3D=3D=3Dt&amp;&amp;this.version++}setUsage(t){retur=
n this.usage=3Dt,this}copy(t){return this.name=3Dt.name,this.array=3Dnew t.=
array.constructor(t.array),this.itemSize=3Dt.itemSize,this.count=3Dt.count,=
this.normalized=3Dt.normalized,this.usage=3Dt.usage,this}copyAt(t,e,n){t*=
=3Dthis.itemSize,n*=3De.itemSize;for(let i=3D0,r=3Dthis.itemSize;i&lt;r;i++=
)this.array[t+i]=3De.array[n+i];return this}copyArray(t){return this.array.=
set(t),this}copyColorsArray(t){const e=3Dthis.array;let n=3D0;for(let i=3D0=
,r=3Dt.length;i&lt;r;i++){let r=3Dt[i];void 0=3D=3D=3Dr&amp;&amp;(console.w=
arn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=3Dne=
w tn),e[n++]=3Dr.r,e[n++]=3Dr.g,e[n++]=3Dr.b}return this}copyVector2sArray(=
t){const e=3Dthis.array;let n=3D0;for(let i=3D0,r=3Dt.length;i&lt;r;i++){le=
t r=3Dt[i];void 0=3D=3D=3Dr&amp;&amp;(console.warn("THREE.BufferAttribute.c=
opyVector2sArray(): vector is undefined",i),r=3Dnew vt),e[n++]=3Dr.x,e[n++]=
=3Dr.y}return this}copyVector3sArray(t){const e=3Dthis.array;let n=3D0;for(=
let i=3D0,r=3Dt.length;i&lt;r;i++){let r=3Dt[i];void 0=3D=3D=3Dr&amp;&amp;(=
console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefine=
d",i),r=3Dnew Lt),e[n++]=3Dr.x,e[n++]=3Dr.y,e[n++]=3Dr.z}return this}copyVe=
ctor4sArray(t){const e=3Dthis.array;let n=3D0;for(let i=3D0,r=3Dt.length;i&=
lt;r;i++){let r=3Dt[i];void 0=3D=3D=3Dr&amp;&amp;(console.warn("THREE.Buffe=
rAttribute.copyVector4sArray(): vector is undefined",i),r=3Dnew St),e[n++]=
=3Dr.x,e[n++]=3Dr.y,e[n++]=3Dr.z,e[n++]=3Dr.w}return this}applyMatrix3(t){i=
f(2=3D=3D=3Dthis.itemSize)for(let e=3D0,n=3Dthis.count;e&lt;n;e++)rn.fromBu=
fferAttribute(this,e),rn.applyMatrix3(t),this.setXY(e,rn.x,rn.y);else if(3=
=3D=3D=3Dthis.itemSize)for(let e=3D0,n=3Dthis.count;e&lt;n;e++)nn.fromBuffe=
rAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return =
this}applyMatrix4(t){for(let e=3D0,n=3Dthis.count;e&lt;n;e++)nn.x=3Dthis.ge=
tX(e),nn.y=3Dthis.getY(e),nn.z=3Dthis.getZ(e),nn.applyMatrix4(t),this.setXY=
Z(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=3D0,n=3Dthis=
.count;e&lt;n;e++)nn.x=3Dthis.getX(e),nn.y=3Dthis.getY(e),nn.z=3Dthis.getZ(=
e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transf=
ormDirection(t){for(let e=3D0,n=3Dthis.count;e&lt;n;e++)nn.x=3Dthis.getX(e)=
,nn.y=3Dthis.getY(e),nn.z=3Dthis.getZ(e),nn.transformDirection(t),this.setX=
YZ(e,nn.x,nn.y,nn.z);return this}set(t,e=3D0){return this.array.set(t,e),th=
is}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t=
*this.itemSize]=3De,this}getY(t){return this.array[t*this.itemSize+1]}setY(=
t,e){return this.array[t*this.itemSize+1]=3De,this}getZ(t){return this.arra=
y[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=3De,thi=
s}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[=
t*this.itemSize+3]=3De,this}setXY(t,e,n){return t*=3Dthis.itemSize,this.arr=
ay[t+0]=3De,this.array[t+1]=3Dn,this}setXYZ(t,e,n,i){return t*=3Dthis.itemS=
ize,this.array[t+0]=3De,this.array[t+1]=3Dn,this.array[t+2]=3Di,this}setXYZ=
W(t,e,n,i,r){return t*=3Dthis.itemSize,this.array[t+0]=3De,this.array[t+1]=
=3Dn,this.array[t+2]=3Di,this.array[t+3]=3Dr,this}onUpload(t){return this.o=
nUploadCallback=3Dt,this}clone(){return new this.constructor(this.array,thi=
s.itemSize).copy(this)}toJSON(){const t=3D{itemSize:this.itemSize,type:this=
.array.constructor.name,array:Array.prototype.slice.call(this.array),normal=
ized:this.normalized};return""!=3D=3Dthis.name&amp;&amp;(t.name=3Dthis.name=
),this.usage!=3D=3Det&amp;&amp;(t.usage=3Dthis.usage),0=3D=3D=3Dthis.update=
Range.offset&amp;&amp;-1=3D=3D=3Dthis.updateRange.count||(t.updateRange=3Dt=
his.updateRange),t}}sn.prototype.isBufferAttribute=3D!0;class an extends sn=
{constructor(t,e,n){super(new Int8Array(t),e,n)}}class on extends sn{constr=
uctor(t,e,n){super(new Uint8Array(t),e,n)}}class ln extends sn{constructor(=
t,e,n){super(new Uint8ClampedArray(t),e,n)}}class cn extends sn{constructor=
(t,e,n){super(new Int16Array(t),e,n)}}class hn extends sn{constructor(t,e,n=
){super(new Uint16Array(t),e,n)}}class un extends sn{constructor(t,e,n){sup=
er(new Int32Array(t),e,n)}}class dn extends sn{constructor(t,e,n){super(new=
 Uint32Array(t),e,n)}}class pn extends sn{constructor(t,e,n){super(new Uint=
16Array(t),e,n)}}pn.prototype.isFloat16BufferAttribute=3D!0;class mn extend=
s sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}class fn extends sn=
{constructor(t,e,n){super(new Float64Array(t),e,n)}}function gn(t){if(0=3D=
=3D=3Dt.length)return-1/0;let e=3Dt[0];for(let n=3D1,i=3Dt.length;n&lt;i;++=
n)t[n]&gt;e&amp;&amp;(e=3Dt[n]);return e}const vn=3D{Int8Array:Int8Array,Ui=
nt8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Arr=
ay,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Fl=
oat32Array:Float32Array,Float64Array:Float64Array};function yn(t,e){return =
new vn[t](e)}let xn=3D0;const _n=3Dnew se,wn=3Dnew Ce,bn=3Dnew Lt,Mn=3Dnew =
Pt,Sn=3Dnew Pt,Tn=3Dnew Lt;class En extends rt{constructor(){super(),Object=
.defineProperty(this,"id",{value:xn++}),this.uuid=3Dct(),this.name=3D"",thi=
s.type=3D"BufferGeometry",this.index=3Dnull,this.attributes=3D{},this.morph=
Attributes=3D{},this.morphTargetsRelative=3D!1,this.groups=3D[],this.boundi=
ngBox=3Dnull,this.boundingSphere=3Dnull,this.drawRange=3D{start:0,count:1/0=
},this.userData=3D{}}getIndex(){return this.index}setIndex(t){return Array.=
isArray(t)?this.index=3Dnew(gn(t)&gt;65535?dn:hn)(t,1):this.index=3Dt,this}=
getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.att=
ributes[t]=3De,this}deleteAttribute(t){return delete this.attributes[t],thi=
s}hasAttribute(t){return void 0!=3D=3Dthis.attributes[t]}addGroup(t,e,n=3D0=
){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.gr=
oups=3D[]}setDrawRange(t,e){this.drawRange.start=3Dt,this.drawRange.count=
=3De}applyMatrix4(t){const e=3Dthis.attributes.position;void 0!=3D=3De&amp;=
&amp;(e.applyMatrix4(t),e.needsUpdate=3D!0);const n=3Dthis.attributes.norma=
l;if(void 0!=3D=3Dn){const e=3D(new yt).getNormalMatrix(t);n.applyNormalMat=
rix(e),n.needsUpdate=3D!0}const i=3Dthis.attributes.tangent;return void 0!=
=3D=3Di&amp;&amp;(i.transformDirection(t),i.needsUpdate=3D!0),null!=3D=3Dth=
is.boundingBox&amp;&amp;this.computeBoundingBox(),null!=3D=3Dthis.boundingS=
phere&amp;&amp;this.computeBoundingSphere(),this}rotateX(t){return _n.makeR=
otationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t=
),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.app=
lyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.a=
pplyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatr=
ix4(_n),this}lookAt(t){return wn.lookAt(t),wn.updateMatrix(),this.applyMatr=
ix4(wn.matrix),this}center(){return this.computeBoundingBox(),this.bounding=
Box.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoint=
s(t){const e=3D[];for(let n=3D0,i=3Dt.length;n&lt;i;n++){const i=3Dt[n];e.p=
ush(i.x,i.y,i.z||0)}return this.setAttribute("position",new mn(e,3)),this}c=
omputeBoundingBox(){null=3D=3D=3Dthis.boundingBox&amp;&amp;(this.boundingBo=
x=3Dnew Pt);const t=3Dthis.attributes.position,e=3Dthis.morphAttributes.pos=
ition;if(t&amp;&amp;t.isGLBufferAttribute)return console.error('THREE.Buffe=
rGeometry.computeBoundingBox(): GLBufferAttribute requires a manual boundin=
g box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.=
boundingBox.set(new Lt(-1/0,-1/0,-1/0),new Lt(1/0,1/0,1/0));if(void 0!=3D=
=3Dt){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=3D0,n=3De.l=
ength;t&lt;n;t++){const n=3De[t];Mn.setFromBufferAttribute(n),this.morphTar=
getsRelative?(Tn.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.e=
xpandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Mn.max),this.boundingBo=
x.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Mn.min),this.boundingB=
ox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.bo=
undingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min=
.z))&amp;&amp;console.error('THREE.BufferGeometry.computeBoundingBox(): Com=
puted min/max have NaN values. The "position" attribute is likely to have N=
aN values.',this)}computeBoundingSphere(){null=3D=3D=3Dthis.boundingSphere&=
amp;&amp;(this.boundingSphere=3Dnew Jt);const t=3Dthis.attributes.position,=
e=3Dthis.morphAttributes.position;if(t&amp;&amp;t.isGLBufferAttribute)retur=
n console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttr=
ibute requires a manual bounding sphere. Alternatively set "mesh.frustumCul=
led" to "false".',this),void this.boundingSphere.set(new Lt,1/0);if(t){cons=
t n=3Dthis.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let =
t=3D0,n=3De.length;t&lt;n;t++){const n=3De[t];Sn.setFromBufferAttribute(n),=
this.morphTargetsRelative?(Tn.addVectors(Mn.min,Sn.min),Mn.expandByPoint(Tn=
),Tn.addVectors(Mn.max,Sn.max),Mn.expandByPoint(Tn)):(Mn.expandByPoint(Sn.m=
in),Mn.expandByPoint(Sn.max))}Mn.getCenter(n);let i=3D0;for(let e=3D0,r=3Dt=
.count;e&lt;r;e++)Tn.fromBufferAttribute(t,e),i=3DMath.max(i,n.distanceToSq=
uared(Tn));if(e)for(let r=3D0,s=3De.length;r&lt;s;r++){const s=3De[r],a=3Dt=
his.morphTargetsRelative;for(let e=3D0,r=3Ds.count;e&lt;r;e++)Tn.fromBuffer=
Attribute(s,e),a&amp;&amp;(bn.fromBufferAttribute(t,e),Tn.add(bn)),i=3DMath=
.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=3DMath.sqrt(i),i=
sNaN(this.boundingSphere.radius)&amp;&amp;console.error('THREE.BufferGeomet=
ry.computeBoundingSphere(): Computed radius is NaN. The "position" attribut=
e is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangen=
ts(){const t=3Dthis.index,e=3Dthis.attributes;if(null=3D=3D=3Dt||void 0=3D=
=3D=3De.position||void 0=3D=3D=3De.normal||void 0=3D=3D=3De.uv)return void =
console.error("THREE.BufferGeometry: .computeTangents() failed. Missing req=
uired attributes (index, position, normal or uv)");const n=3Dt.array,i=3De.=
position.array,r=3De.normal.array,s=3De.uv.array,a=3Di.length/3;void 0=3D=
=3D=3De.tangent&amp;&amp;this.setAttribute("tangent",new sn(new Float32Arra=
y(4*a),4));const o=3De.tangent.array,l=3D[],c=3D[];for(let t=3D0;t&lt;a;t++=
)l[t]=3Dnew Lt,c[t]=3Dnew Lt;const h=3Dnew Lt,u=3Dnew Lt,d=3Dnew Lt,p=3Dnew=
 vt,m=3Dnew vt,f=3Dnew vt,g=3Dnew Lt,v=3Dnew Lt;function y(t,e,n){h.fromArr=
ay(i,3*t),u.fromArray(i,3*e),d.fromArray(i,3*n),p.fromArray(s,2*t),m.fromAr=
ray(s,2*e),f.fromArray(s,2*n),u.sub(h),d.sub(h),m.sub(p),f.sub(p);const r=
=3D1/(m.x*f.y-f.x*m.y);isFinite(r)&amp;&amp;(g.copy(u).multiplyScalar(f.y).=
addScaledVector(d,-m.y).multiplyScalar(r),v.copy(d).multiplyScalar(m.x).add=
ScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[n].add(g),=
c[t].add(v),c[e].add(v),c[n].add(v))}let x=3Dthis.groups;0=3D=3D=3Dx.length=
&amp;&amp;(x=3D[{start:0,count:n.length}]);for(let t=3D0,e=3Dx.length;t&lt;=
e;++t){const e=3Dx[t],i=3De.start;for(let t=3Di,r=3Di+e.count;t&lt;r;t+=3D3=
)y(n[t+0],n[t+1],n[t+2])}const _=3Dnew Lt,w=3Dnew Lt,b=3Dnew Lt,M=3Dnew Lt;=
function S(t){b.fromArray(r,3*t),M.copy(b);const e=3Dl[t];_.copy(e),_.sub(b=
.multiplyScalar(b.dot(e))).normalize(),w.crossVectors(M,e);const n=3Dw.dot(=
c[t])&lt;0?-1:1;o[4*t]=3D_.x,o[4*t+1]=3D_.y,o[4*t+2]=3D_.z,o[4*t+3]=3Dn}for=
(let t=3D0,e=3Dx.length;t&lt;e;++t){const e=3Dx[t],i=3De.start;for(let t=3D=
i,r=3Di+e.count;t&lt;r;t+=3D3)S(n[t+0]),S(n[t+1]),S(n[t+2])}}computeVertexN=
ormals(){const t=3Dthis.index,e=3Dthis.getAttribute("position");if(void 0!=
=3D=3De){let n=3Dthis.getAttribute("normal");if(void 0=3D=3D=3Dn)n=3Dnew sn=
(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let =
t=3D0,e=3Dn.count;t&lt;e;t++)n.setXYZ(t,0,0,0);const i=3Dnew Lt,r=3Dnew Lt,=
s=3Dnew Lt,a=3Dnew Lt,o=3Dnew Lt,l=3Dnew Lt,c=3Dnew Lt,h=3Dnew Lt;if(t)for(=
let u=3D0,d=3Dt.count;u&lt;d;u+=3D3){const d=3Dt.getX(u+0),p=3Dt.getX(u+1),=
m=3Dt.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fro=
mBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.from=
BufferAttribute(n,d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),=
a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(p,o.x,o.y,o.z),=
n.setXYZ(m,l.x,l.y,l.z)}else for(let t=3D0,a=3De.count;t&lt;a;t+=3D3)i.from=
BufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e=
,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c=
.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNorma=
ls(),n.needsUpdate=3D!0}}merge(t,e){if(!t||!t.isBufferGeometry)return void =
console.error("THREE.BufferGeometry.merge(): geometry not an instance of TH=
REE.BufferGeometry.",t);void 0=3D=3D=3De&amp;&amp;(e=3D0,console.warn("THRE=
E.BufferGeometry.merge(): Overwriting original geometry, starting at offset=
=3D0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")=
);const n=3Dthis.attributes;for(const i in n){if(void 0=3D=3D=3Dt.attribute=
s[i])continue;const r=3Dn[i].array,s=3Dt.attributes[i],a=3Ds.array,o=3Ds.it=
emSize*e,l=3DMath.min(a.length,r.length-o);for(let t=3D0,e=3Do;t&lt;l;t++,e=
++)r[e]=3Da[t]}return this}normalizeNormals(){const t=3Dthis.attributes.nor=
mal;for(let e=3D0,n=3Dt.count;e&lt;n;e++)Tn.fromBufferAttribute(t,e),Tn.nor=
malize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(t,e){const n=
=3Dt.array,i=3Dt.itemSize,r=3Dt.normalized,s=3Dnew n.constructor(e.length*i=
);let a=3D0,o=3D0;for(let t=3D0,r=3De.length;t&lt;r;t++){a=3De[t]*i;for(let=
 t=3D0;t&lt;i;t++)s[o++]=3Dn[a++]}return new sn(s,i,r)}if(null=3D=3D=3Dthis=
.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeom=
etry is already non-indexed."),this;const e=3Dnew En,n=3Dthis.index.array,i=
=3Dthis.attributes;for(const r in i){const s=3Dt(i[r],n);e.setAttribute(r,s=
)}const r=3Dthis.morphAttributes;for(const i in r){const s=3D[],a=3Dr[i];fo=
r(let e=3D0,i=3Da.length;e&lt;i;e++){const i=3Dt(a[e],n);s.push(i)}e.morphA=
ttributes[i]=3Ds}e.morphTargetsRelative=3Dthis.morphTargetsRelative;const s=
=3Dthis.groups;for(let t=3D0,n=3Ds.length;t&lt;n;t++){const n=3Ds[t];e.addG=
roup(n.start,n.count,n.materialIndex)}return e}toJSON(){const t=3D{metadata=
:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(=
t.uuid=3Dthis.uuid,t.type=3Dthis.type,""!=3D=3Dthis.name&amp;&amp;(t.name=
=3Dthis.name),Object.keys(this.userData).length&gt;0&amp;&amp;(t.userData=
=3Dthis.userData),void 0!=3D=3Dthis.parameters){const e=3Dthis.parameters;f=
or(const n in e)void 0!=3D=3De[n]&amp;&amp;(t[n]=3De[n]);return t}t.data=3D=
{attributes:{}};const e=3Dthis.index;null!=3D=3De&amp;&amp;(t.data.index=3D=
{type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});=
const n=3Dthis.attributes;for(const e in n){const i=3Dn[e];t.data.attribute=
s[e]=3Di.toJSON(t.data)}const i=3D{};let r=3D!1;for(const e in this.morphAt=
tributes){const n=3Dthis.morphAttributes[e],s=3D[];for(let e=3D0,i=3Dn.leng=
th;e&lt;i;e++){const i=3Dn[e];s.push(i.toJSON(t.data))}s.length&gt;0&amp;&a=
mp;(i[e]=3Ds,r=3D!0)}r&amp;&amp;(t.data.morphAttributes=3Di,t.data.morphTar=
getsRelative=3Dthis.morphTargetsRelative);const s=3Dthis.groups;s.length&gt=
;0&amp;&amp;(t.data.groups=3DJSON.parse(JSON.stringify(s)));const a=3Dthis.=
boundingSphere;return null!=3D=3Da&amp;&amp;(t.data.boundingSphere=3D{cente=
r:a.center.toArray(),radius:a.radius}),t}clone(){return(new En).copy(this)}=
copy(t){this.index=3Dnull,this.attributes=3D{},this.morphAttributes=3D{},th=
is.groups=3D[],this.boundingBox=3Dnull,this.boundingSphere=3Dnull;const e=
=3D{};this.name=3Dt.name;const n=3Dt.index;null!=3D=3Dn&amp;&amp;this.setIn=
dex(n.clone(e));const i=3Dt.attributes;for(const t in i){const n=3Di[t];thi=
s.setAttribute(t,n.clone(e))}const r=3Dt.morphAttributes;for(const t in r){=
const n=3D[],i=3Dr[t];for(let t=3D0,r=3Di.length;t&lt;r;t++)n.push(i[t].clo=
ne(e));this.morphAttributes[t]=3Dn}this.morphTargetsRelative=3Dt.morphTarge=
tsRelative;const s=3Dt.groups;for(let t=3D0,e=3Ds.length;t&lt;e;t++){const =
e=3Ds[t];this.addGroup(e.start,e.count,e.materialIndex)}const a=3Dt.boundin=
gBox;null!=3D=3Da&amp;&amp;(this.boundingBox=3Da.clone());const o=3Dt.bound=
ingSphere;return null!=3D=3Do&amp;&amp;(this.boundingSphere=3Do.clone()),th=
is.drawRange.start=3Dt.drawRange.start,this.drawRange.count=3Dt.drawRange.c=
ount,this.userData=3Dt.userData,this}dispose(){this.dispatchEvent({type:"di=
spose"})}}En.prototype.isBufferGeometry=3D!0;const An=3Dnew se,Ln=3Dnew re,=
Rn=3Dnew Jt,Cn=3Dnew Lt,Pn=3Dnew Lt,Dn=3Dnew Lt,In=3Dnew Lt,Nn=3Dnew Lt,Bn=
=3Dnew Lt,zn=3Dnew Lt,Fn=3Dnew Lt,On=3Dnew Lt,Hn=3Dnew vt,Gn=3Dnew vt,Un=3D=
new vt,kn=3Dnew Lt,Vn=3Dnew Lt;class Wn extends Ce{constructor(t=3Dnew En,e=
=3Dnew en){super(),this.type=3D"Mesh",this.geometry=3Dt,this.material=3De,t=
his.updateMorphTargets()}copy(t){return super.copy(t),void 0!=3D=3Dt.morphT=
argetInfluences&amp;&amp;(this.morphTargetInfluences=3Dt.morphTargetInfluen=
ces.slice()),void 0!=3D=3Dt.morphTargetDictionary&amp;&amp;(this.morphTarge=
tDictionary=3DObject.assign({},t.morphTargetDictionary)),this.material=3Dt.=
material,this.geometry=3Dt.geometry,this}updateMorphTargets(){const t=3Dthi=
s.geometry;if(t.isBufferGeometry){const e=3Dt.morphAttributes,n=3DObject.ke=
ys(e);if(n.length&gt;0){const t=3De[n[0]];if(void 0!=3D=3Dt){this.morphTarg=
etInfluences=3D[],this.morphTargetDictionary=3D{};for(let e=3D0,n=3Dt.lengt=
h;e&lt;n;e++){const n=3Dt[e].name||String(e);this.morphTargetInfluences.pus=
h(0),this.morphTargetDictionary[n]=3De}}}}else{const e=3Dt.morphTargets;voi=
d 0!=3D=3De&amp;&amp;e.length&gt;0&amp;&amp;console.error("THREE.Mesh.updat=
eMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry=
 instead.")}}raycast(t,e){const n=3Dthis.geometry,i=3Dthis.material,r=3Dthi=
s.matrixWorld;if(void 0=3D=3D=3Di)return;if(null=3D=3D=3Dn.boundingSphere&a=
mp;&amp;n.computeBoundingSphere(),Rn.copy(n.boundingSphere),Rn.applyMatrix4=
(r),!1=3D=3D=3Dt.ray.intersectsSphere(Rn))return;if(An.copy(r).invert(),Ln.=
copy(t.ray).applyMatrix4(An),null!=3D=3Dn.boundingBox&amp;&amp;!1=3D=3D=3DL=
n.intersectsBox(n.boundingBox))return;let s;if(n.isBufferGeometry){const r=
=3Dn.index,a=3Dn.attributes.position,o=3Dn.morphAttributes.position,l=3Dn.m=
orphTargetsRelative,c=3Dn.attributes.uv,h=3Dn.attributes.uv2,u=3Dn.groups,d=
=3Dn.drawRange;if(null!=3D=3Dr)if(Array.isArray(i))for(let n=3D0,p=3Du.leng=
th;n&lt;p;n++){const p=3Du[n],m=3Di[p.materialIndex];for(let n=3DMath.max(p=
.start,d.start),i=3DMath.min(p.start+p.count,d.start+d.count);n&lt;i;n+=3D3=
){const i=3Dr.getX(n),u=3Dr.getX(n+1),d=3Dr.getX(n+2);s=3Djn(this,m,t,Ln,a,=
o,l,c,h,i,u,d),s&amp;&amp;(s.faceIndex=3DMath.floor(n/3),s.face.materialInd=
ex=3Dp.materialIndex,e.push(s))}}else{for(let n=3DMath.max(0,d.start),u=3DM=
ath.min(r.count,d.start+d.count);n&lt;u;n+=3D3){const u=3Dr.getX(n),d=3Dr.g=
etX(n+1),p=3Dr.getX(n+2);s=3Djn(this,i,t,Ln,a,o,l,c,h,u,d,p),s&amp;&amp;(s.=
faceIndex=3DMath.floor(n/3),e.push(s))}}else if(void 0!=3D=3Da)if(Array.isA=
rray(i))for(let n=3D0,r=3Du.length;n&lt;r;n++){const r=3Du[n],p=3Di[r.mater=
ialIndex];for(let n=3DMath.max(r.start,d.start),i=3DMath.min(r.start+r.coun=
t,d.start+d.count);n&lt;i;n+=3D3){s=3Djn(this,p,t,Ln,a,o,l,c,h,n,n+1,n+2),s=
&amp;&amp;(s.faceIndex=3DMath.floor(n/3),s.face.materialIndex=3Dr.materialI=
ndex,e.push(s))}}else{for(let n=3DMath.max(0,d.start),r=3DMath.min(a.count,=
d.start+d.count);n&lt;r;n+=3D3){s=3Djn(this,i,t,Ln,a,o,l,c,h,n,n+1,n+2),s&a=
mp;&amp;(s.faceIndex=3DMath.floor(n/3),e.push(s))}}}else n.isGeometry&amp;&=
amp;console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. =
Use THREE.BufferGeometry instead.")}}function jn(t,e,n,i,r,s,a,o,l,c,h,u){C=
n.fromBufferAttribute(r,c),Pn.fromBufferAttribute(r,h),Dn.fromBufferAttribu=
te(r,u);const d=3Dt.morphTargetInfluences;if(e.morphTargets&amp;&amp;s&amp;=
&amp;d){zn.set(0,0,0),Fn.set(0,0,0),On.set(0,0,0);for(let t=3D0,e=3Ds.lengt=
h;t&lt;e;t++){const e=3Dd[t],n=3Ds[t];0!=3D=3De&amp;&amp;(In.fromBufferAttr=
ibute(n,c),Nn.fromBufferAttribute(n,h),Bn.fromBufferAttribute(n,u),a?(zn.ad=
dScaledVector(In,e),Fn.addScaledVector(Nn,e),On.addScaledVector(Bn,e)):(zn.=
addScaledVector(In.sub(Cn),e),Fn.addScaledVector(Nn.sub(Pn),e),On.addScaled=
Vector(Bn.sub(Dn),e)))}Cn.add(zn),Pn.add(Fn),Dn.add(On)}t.isSkinnedMesh&amp=
;&amp;e.skinning&amp;&amp;(t.boneTransform(c,Cn),t.boneTransform(h,Pn),t.bo=
neTransform(u,Dn));const p=3Dfunction(t,e,n,i,r,s,a,o){let l;if(l=3D1=3D=3D=
=3De.side?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,2!=3D=
=3De.side,o),null=3D=3D=3Dl)return null;Vn.copy(o),Vn.applyMatrix4(t.matrix=
World);const c=3Dn.ray.origin.distanceTo(Vn);return c&lt;n.near||c&gt;n.far=
?null:{distance:c,point:Vn.clone(),object:t}}(t,e,n,i,Cn,Pn,Dn,kn);if(p){o&=
amp;&amp;(Hn.fromBufferAttribute(o,c),Gn.fromBufferAttribute(o,h),Un.fromBu=
fferAttribute(o,u),p.uv=3Dje.getUV(kn,Cn,Pn,Dn,Hn,Gn,Un,new vt)),l&amp;&amp=
;(Hn.fromBufferAttribute(l,c),Gn.fromBufferAttribute(l,h),Un.fromBufferAttr=
ibute(l,u),p.uv2=3Dje.getUV(kn,Cn,Pn,Dn,Hn,Gn,Un,new vt));const t=3D{a:c,b:=
h,c:u,normal:new Lt,materialIndex:0};je.getNormal(Cn,Pn,Dn,t.normal),p.face=
=3Dt}return p}Wn.prototype.isMesh=3D!0;class qn extends En{constructor(t=3D=
1,e=3D1,n=3D1,i=3D1,r=3D1,s=3D1){super(),this.type=3D"BoxGeometry",this.par=
ameters=3D{width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthS=
egments:s};const a=3Dthis;i=3DMath.floor(i),r=3DMath.floor(r),s=3DMath.floo=
r(s);const o=3D[],l=3D[],c=3D[],h=3D[];let u=3D0,d=3D0;function p(t,e,n,i,r=
,s,p,m,f,g,v){const y=3Ds/f,x=3Dp/g,_=3Ds/2,w=3Dp/2,b=3Dm/2,M=3Df+1,S=3Dg+1=
;let T=3D0,E=3D0;const A=3Dnew Lt;for(let s=3D0;s&lt;S;s++){const a=3Ds*x-w=
;for(let o=3D0;o&lt;M;o++){const u=3Do*y-_;A[t]=3Du*i,A[e]=3Da*r,A[n]=3Db,l=
.push(A.x,A.y,A.z),A[t]=3D0,A[e]=3D0,A[n]=3Dm&gt;0?1:-1,c.push(A.x,A.y,A.z)=
,h.push(o/f),h.push(1-s/g),T+=3D1}}for(let t=3D0;t&lt;g;t++)for(let e=3D0;e=
&lt;f;e++){const n=3Du+e+M*t,i=3Du+e+M*(t+1),r=3Du+(e+1)+M*(t+1),s=3Du+(e+1=
)+M*t;o.push(n,i,s),o.push(i,r,s),E+=3D6}a.addGroup(d,E,v),d+=3DE,u+=3DT}p(=
"z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","=
y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e=
,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttrib=
ute("position",new mn(l,3)),this.setAttribute("normal",new mn(c,3)),this.se=
tAttribute("uv",new mn(h,2))}}function Xn(t){const e=3D{};for(const n in t)=
{e[n]=3D{};for(const i in t[n]){const r=3Dt[n][i];r&amp;&amp;(r.isColor||r.=
isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture|=
|r.isQuaternion)?e[n][i]=3Dr.clone():Array.isArray(r)?e[n][i]=3Dr.slice():e=
[n][i]=3Dr}}return e}function Yn(t){const e=3D{};for(let n=3D0;n&lt;t.lengt=
h;n++){const i=3DXn(t[n]);for(const t in i)e[t]=3Di[t]}return e}const Zn=3D=
{clone:Xn,merge:Yn};class Jn extends Xe{constructor(t){super(),this.type=3D=
"ShaderMaterial",this.defines=3D{},this.uniforms=3D{},this.vertexShader=3D"=
void main() {\n\tgl_Position =3D projectionMatrix * modelViewMatrix * vec4(=
 position, 1.0 );\n}",this.fragmentShader=3D"void main() {\n\tgl_FragColor =
=3D vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=3D1,this.wireframe=3D!1,=
this.wireframeLinewidth=3D1,this.fog=3D!1,this.lights=3D!1,this.clipping=3D=
!1,this.skinning=3D!1,this.morphTargets=3D!1,this.morphNormals=3D!1,this.ex=
tensions=3D{derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1}=
,this.defaultAttributeValues=3D{color:[1,1,1],uv:[0,0],uv2:[0,0]},this.inde=
x0AttributeName=3Dvoid 0,this.uniformsNeedUpdate=3D!1,this.glslVersion=3Dnu=
ll,void 0!=3D=3Dt&amp;&amp;(void 0!=3D=3Dt.attributes&amp;&amp;console.erro=
r("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGe=
ometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.frag=
mentShader=3Dt.fragmentShader,this.vertexShader=3Dt.vertexShader,this.unifo=
rms=3DXn(t.uniforms),this.defines=3DObject.assign({},t.defines),this.wirefr=
ame=3Dt.wireframe,this.wireframeLinewidth=3Dt.wireframeLinewidth,this.light=
s=3Dt.lights,this.clipping=3Dt.clipping,this.skinning=3Dt.skinning,this.mor=
phTargets=3Dt.morphTargets,this.morphNormals=3Dt.morphNormals,this.extensio=
ns=3DObject.assign({},t.extensions),this.glslVersion=3Dt.glslVersion,this}t=
oJSON(t){const e=3Dsuper.toJSON(t);e.glslVersion=3Dthis.glslVersion,e.unifo=
rms=3D{};for(const n in this.uniforms){const i=3Dthis.uniforms[n].value;i&a=
mp;&amp;i.isTexture?e.uniforms[n]=3D{type:"t",value:i.toJSON(t).uuid}:i&amp=
;&amp;i.isColor?e.uniforms[n]=3D{type:"c",value:i.getHex()}:i&amp;&amp;i.is=
Vector2?e.uniforms[n]=3D{type:"v2",value:i.toArray()}:i&amp;&amp;i.isVector=
3?e.uniforms[n]=3D{type:"v3",value:i.toArray()}:i&amp;&amp;i.isVector4?e.un=
iforms[n]=3D{type:"v4",value:i.toArray()}:i&amp;&amp;i.isMatrix3?e.uniforms=
[n]=3D{type:"m3",value:i.toArray()}:i&amp;&amp;i.isMatrix4?e.uniforms[n]=3D=
{type:"m4",value:i.toArray()}:e.uniforms[n]=3D{value:i}}Object.keys(this.de=
fines).length&gt;0&amp;&amp;(e.defines=3Dthis.defines),e.vertexShader=3Dthi=
s.vertexShader,e.fragmentShader=3Dthis.fragmentShader;const n=3D{};for(cons=
t t in this.extensions)!0=3D=3D=3Dthis.extensions[t]&amp;&amp;(n[t]=3D!0);r=
eturn Object.keys(n).length&gt;0&amp;&amp;(e.extensions=3Dn),e}}Jn.prototyp=
e.isShaderMaterial=3D!0;class Qn extends Ce{constructor(){super(),this.type=
=3D"Camera",this.matrixWorldInverse=3Dnew se,this.projectionMatrix=3Dnew se=
,this.projectionMatrixInverse=3Dnew se}copy(t,e){return super.copy(t,e),thi=
s.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(=
t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInv=
erse),this}getWorldDirection(t){void 0=3D=3D=3Dt&amp;&amp;(console.warn("TH=
REE.Camera: .getWorldDirection() target is now required"),t=3Dnew Lt),this.=
updateWorldMatrix(!0,!1);const e=3Dthis.matrixWorld.elements;return t.set(-=
e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld=
(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatr=
ix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matr=
ixWorld).invert()}clone(){return(new this.constructor).copy(this)}}Qn.proto=
type.isCamera=3D!0;class Kn extends Qn{constructor(t=3D50,e=3D1,n=3D.1,i=3D=
2e3){super(),this.type=3D"PerspectiveCamera",this.fov=3Dt,this.zoom=3D1,thi=
s.near=3Dn,this.far=3Di,this.focus=3D10,this.aspect=3De,this.view=3Dnull,th=
is.filmGauge=3D35,this.filmOffset=3D0,this.updateProjectionMatrix()}copy(t,=
e){return super.copy(t,e),this.fov=3Dt.fov,this.zoom=3Dt.zoom,this.near=3Dt=
.near,this.far=3Dt.far,this.focus=3Dt.focus,this.aspect=3Dt.aspect,this.vie=
w=3Dnull=3D=3D=3Dt.view?null:Object.assign({},t.view),this.filmGauge=3Dt.fi=
lmGauge,this.filmOffset=3Dt.filmOffset,this}setFocalLength(t){const e=3D.5*=
this.getFilmHeight()/t;this.fov=3D2*lt*Math.atan(e),this.updateProjectionMa=
trix()}getFocalLength(){const t=3DMath.tan(.5*ot*this.fov);return.5*this.ge=
tFilmHeight()/t}getEffectiveFOV(){return 2*lt*Math.atan(Math.tan(.5*ot*this=
.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,=
1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOff=
set(t,e,n,i,r,s){this.aspect=3Dt/e,null=3D=3D=3Dthis.view&amp;&amp;(this.vi=
ew=3D{enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,heigh=
t:1}),this.view.enabled=3D!0,this.view.fullWidth=3Dt,this.view.fullHeight=
=3De,this.view.offsetX=3Dn,this.view.offsetY=3Di,this.view.width=3Dr,this.v=
iew.height=3Ds,this.updateProjectionMatrix()}clearViewOffset(){null!=3D=3Dt=
his.view&amp;&amp;(this.view.enabled=3D!1),this.updateProjectionMatrix()}up=
dateProjectionMatrix(){const t=3Dthis.near;let e=3Dt*Math.tan(.5*ot*this.fo=
v)/this.zoom,n=3D2*e,i=3Dthis.aspect*n,r=3D-.5*i;const s=3Dthis.view;if(nul=
l!=3D=3Dthis.view&amp;&amp;this.view.enabled){const t=3Ds.fullWidth,a=3Ds.f=
ullHeight;r+=3Ds.offsetX*i/t,e-=3Ds.offsetY*n/a,i*=3Ds.width/t,n*=3Ds.heigh=
t/a}const a=3Dthis.filmOffset;0!=3D=3Da&amp;&amp;(r+=3Dt*a/this.getFilmWidt=
h()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.pro=
jectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=
=3Dsuper.toJSON(t);return e.object.fov=3Dthis.fov,e.object.zoom=3Dthis.zoom=
,e.object.near=3Dthis.near,e.object.far=3Dthis.far,e.object.focus=3Dthis.fo=
cus,e.object.aspect=3Dthis.aspect,null!=3D=3Dthis.view&amp;&amp;(e.object.v=
iew=3DObject.assign({},this.view)),e.object.filmGauge=3Dthis.filmGauge,e.ob=
ject.filmOffset=3Dthis.filmOffset,e}}Kn.prototype.isPerspectiveCamera=3D!0;=
const $n=3D90;class ti extends Ce{constructor(t,e,n){if(super(),this.type=
=3D"CubeCamera",!0!=3D=3Dn.isWebGLCubeRenderTarget)return void console.erro=
r("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRe=
nderTarget as third parameter.");this.renderTarget=3Dn;const i=3Dnew Kn($n,=
1,t,e);i.layers=3Dthis.layers,i.up.set(0,-1,0),i.lookAt(new Lt(1,0,0)),this=
.add(i);const r=3Dnew Kn($n,1,t,e);r.layers=3Dthis.layers,r.up.set(0,-1,0),=
r.lookAt(new Lt(-1,0,0)),this.add(r);const s=3Dnew Kn($n,1,t,e);s.layers=3D=
this.layers,s.up.set(0,0,1),s.lookAt(new Lt(0,1,0)),this.add(s);const a=3Dn=
ew Kn($n,1,t,e);a.layers=3Dthis.layers,a.up.set(0,0,-1),a.lookAt(new Lt(0,-=
1,0)),this.add(a);const o=3Dnew Kn($n,1,t,e);o.layers=3Dthis.layers,o.up.se=
t(0,-1,0),o.lookAt(new Lt(0,0,1)),this.add(o);const l=3Dnew Kn($n,1,t,e);l.=
layers=3Dthis.layers,l.up.set(0,-1,0),l.lookAt(new Lt(0,0,-1)),this.add(l)}=
update(t,e){null=3D=3D=3Dthis.parent&amp;&amp;this.updateMatrixWorld();cons=
t n=3Dthis.renderTarget,[i,r,s,a,o,l]=3Dthis.children,c=3Dt.xr.enabled,h=3D=
t.getRenderTarget();t.xr.enabled=3D!1;const u=3Dn.texture.generateMipmaps;n=
.texture.generateMipmaps=3D!1,t.setRenderTarget(n,0),t.render(e,i),t.setRen=
derTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRend=
erTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,o),n.texture.=
generateMipmaps=3Du,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(=
h),t.xr.enabled=3Dc}}class ei extends bt{constructor(t,e,n,i,s,a,o,l,c,h){s=
uper(t=3Dvoid 0!=3D=3Dt?t:[],e=3Dvoid 0!=3D=3De?e:r,n,i,s,a,o=3Dvoid 0!=3D=
=3Do?o:T,l,c,h),this._needsFlipEnvMap=3D!0,this.flipY=3D!1}get images(){ret=
urn this.image}set images(t){this.image=3Dt}}ei.prototype.isCubeTexture=3D!=
0;class ni extends Tt{constructor(t,e,n){Number.isInteger(e)&amp;&amp;(cons=
ole.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCu=
beRenderTarget( size, options )"),e=3Dn),super(t,t,e),e=3De||{},this.textur=
e=3Dnew ei(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.forma=
t,e.type,e.anisotropy,e.encoding),this.texture.generateMipmaps=3Dvoid 0!=3D=
=3De.generateMipmaps&amp;&amp;e.generateMipmaps,this.texture.minFilter=3Dvo=
id 0!=3D=3De.minFilter?e.minFilter:g,this.texture._needsFlipEnvMap=3D!1}fro=
mEquirectangularTexture(t,e){this.texture.type=3De.type,this.texture.format=
=3DE,this.texture.encoding=3De.encoding,this.texture.generateMipmaps=3De.ge=
nerateMipmaps,this.texture.minFilter=3De.minFilter,this.texture.magFilter=
=3De.magFilter;const n=3D{uniforms:{tEquirect:{value:null}},vertexShader:"\=
n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection=
( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix *=
 vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\=
t\tvWorldDirection =3D transformDirection( position, modelMatrix );\n\n\t\t=
\t\t\t#include &lt;begin_vertex&gt;\n\t\t\t\t\t#include &lt;project_vertex&=
gt;\n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform sampler2D tEq=
uirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include &lt;co=
mmon&gt;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction =3D normalize=
( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV =3D equirectUv( direction )=
;\n\n\t\t\t\t\tgl_FragColor =3D texture2D( tEquirect, sampleUV );\n\n\t\t\t=
\t}\n\t\t\t"},i=3Dnew qn(5,5,5),r=3Dnew Jn({name:"CubemapFromEquirect",unif=
orms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentSh=
ader,side:1,blending:0});r.uniforms.tEquirect.value=3De;const s=3Dnew Wn(i,=
r),a=3De.minFilter;e.minFilter=3D=3D=3Dy&amp;&amp;(e.minFilter=3Dg);return =
new ti(1,10,this).update(t,s),e.minFilter=3Da,s.geometry.dispose(),s.materi=
al.dispose(),this}clear(t,e,n,i){const r=3Dt.getRenderTarget();for(let r=3D=
0;r&lt;6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(r)}=
}ni.prototype.isWebGLCubeRenderTarget=3D!0;class ii extends bt{constructor(=
t,e,n,i,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,i,r,h,u),this.image=3D{data:t=
||null,width:e||1,height:n||1},this.magFilter=3Dvoid 0!=3D=3Dl?l:p,this.min=
Filter=3Dvoid 0!=3D=3Dc?c:p,this.generateMipmaps=3D!1,this.flipY=3D!1,this.=
unpackAlignment=3D1,this.needsUpdate=3D!0}}ii.prototype.isDataTexture=3D!0;=
const ri=3Dnew Jt,si=3Dnew Lt;class ai{constructor(t=3Dnew Ne,e=3Dnew Ne,n=
=3Dnew Ne,i=3Dnew Ne,r=3Dnew Ne,s=3Dnew Ne){this.planes=3D[t,e,n,i,r,s]}set=
(t,e,n,i,r,s){const a=3Dthis.planes;return a[0].copy(t),a[1].copy(e),a[2].c=
opy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=3Dthis.p=
lanes;for(let n=3D0;n&lt;6;n++)e[n].copy(t.planes[n]);return this}setFromPr=
ojectionMatrix(t){const e=3Dthis.planes,n=3Dt.elements,i=3Dn[0],r=3Dn[1],s=
=3Dn[2],a=3Dn[3],o=3Dn[4],l=3Dn[5],c=3Dn[6],h=3Dn[7],u=3Dn[8],d=3Dn[9],p=3D=
n[10],m=3Dn[11],f=3Dn[12],g=3Dn[13],v=3Dn[14],y=3Dn[15];return e[0].setComp=
onents(a-i,h-o,m-u,y-f).normalize(),e[1].setComponents(a+i,h+o,m+u,y+f).nor=
malize(),e[2].setComponents(a+r,h+l,m+d,y+g).normalize(),e[3].setComponents=
(a-r,h-l,m-d,y-g).normalize(),e[4].setComponents(a-s,h-c,m-p,y-v).normalize=
(),e[5].setComponents(a+s,h+c,m+p,y+v).normalize(),this}intersectsObject(t)=
{const e=3Dt.geometry;return null=3D=3D=3De.boundingSphere&amp;&amp;e.compu=
teBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),th=
is.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.=
radius=3D.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSp=
here(ri)}intersectsSphere(t){const e=3Dthis.planes,n=3Dt.center,i=3D-t.radi=
us;for(let t=3D0;t&lt;6;t++){if(e[t].distanceToPoint(n)&lt;i)return!1}retur=
n!0}intersectsBox(t){const e=3Dthis.planes;for(let n=3D0;n&lt;6;n++){const =
i=3De[n];if(si.x=3Di.normal.x&gt;0?t.max.x:t.min.x,si.y=3Di.normal.y&gt;0?t=
.max.y:t.min.y,si.z=3Di.normal.z&gt;0?t.max.z:t.min.z,i.distanceToPoint(si)=
&lt;0)return!1}return!0}containsPoint(t){const e=3Dthis.planes;for(let n=3D=
0;n&lt;6;n++)if(e[n].distanceToPoint(t)&lt;0)return!1;return!0}clone(){retu=
rn(new this.constructor).copy(this)}}function oi(){let t=3Dnull,e=3D!1,n=3D=
null,i=3Dnull;function r(e,s){n(e,s),i=3Dt.requestAnimationFrame(r)}return{=
start:function(){!0!=3D=3De&amp;&amp;null!=3D=3Dn&amp;&amp;(i=3Dt.requestAn=
imationFrame(r),e=3D!0)},stop:function(){t.cancelAnimationFrame(i),e=3D!1},=
setAnimationLoop:function(t){n=3Dt},setContext:function(e){t=3De}}}function=
 li(t,e){const n=3De.isWebGL2,i=3Dnew WeakMap;return{get:function(t){return=
 t.isInterleavedBufferAttribute&amp;&amp;(t=3Dt.data),i.get(t)},remove:func=
tion(e){e.isInterleavedBufferAttribute&amp;&amp;(e=3De.data);const n=3Di.ge=
t(e);n&amp;&amp;(t.deleteBuffer(n.buffer),i.delete(e))},update:function(e,r=
){if(e.isGLBufferAttribute){const t=3Di.get(e);return void((!t||t.version&l=
t;e.version)&amp;&amp;i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:=
e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&amp;&amp;=
(e=3De.data);const s=3Di.get(e);void 0=3D=3D=3Ds?i.set(e,function(e,i){cons=
t r=3De.array,s=3De.usage,a=3Dt.createBuffer();t.bindBuffer(i,a),t.bufferDa=
ta(i,r,s),e.onUploadCallback();let o=3D5126;return r instanceof Float32Arra=
y?o=3D5126:r instanceof Float64Array?console.warn("THREE.WebGLAttributes: U=
nsupported data buffer format: Float64Array."):r instanceof Uint16Array?e.i=
sFloat16BufferAttribute?n?o=3D5131:console.warn("THREE.WebGLAttributes: Usa=
ge of Float16BufferAttribute requires WebGL2."):o=3D5123:r instanceof Int16=
Array?o=3D5122:r instanceof Uint32Array?o=3D5125:r instanceof Int32Array?o=
=3D5124:r instanceof Int8Array?o=3D5120:r instanceof Uint8Array&amp;&amp;(o=
=3D5121),{buffer:a,type:o,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.ver=
sion}}(e,r)):s.version&lt;e.version&amp;&amp;(!function(e,i,r){const s=3Di.=
array,a=3Di.updateRange;t.bindBuffer(r,e),-1=3D=3D=3Da.count?t.bufferSubDat=
a(r,0,s):(n?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.cou=
nt):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.of=
fset+a.count)),a.count=3D-1)}(s.buffer,e,r),s.version=3De.version)}}}class =
ci extends En{constructor(t=3D1,e=3D1,n=3D1,i=3D1){super(),this.type=3D"Pla=
neGeometry",this.parameters=3D{width:t,height:e,widthSegments:n,heightSegme=
nts:i};const r=3Dt/2,s=3De/2,a=3DMath.floor(n),o=3DMath.floor(i),l=3Da+1,c=
=3Do+1,h=3Dt/a,u=3De/o,d=3D[],p=3D[],m=3D[],f=3D[];for(let t=3D0;t&lt;c;t++=
){const e=3Dt*u-s;for(let n=3D0;n&lt;l;n++){const i=3Dn*h-r;p.push(i,-e,0),=
m.push(0,0,1),f.push(n/a),f.push(1-t/o)}}for(let t=3D0;t&lt;o;t++)for(let e=
=3D0;e&lt;a;e++){const n=3De+l*t,i=3De+l*(t+1),r=3De+1+l*(t+1),s=3De+1+l*t;=
d.push(n,i,s),d.push(i,r,s)}this.setIndex(d),this.setAttribute("position",n=
ew mn(p,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",=
new mn(f,2))}}const hi=3D{alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuse=
Color.a *=3D texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:=
"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_frag=
ment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a &lt; ALPHATEST ) discard;\n#e=
ndif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion =3D ( text=
ure2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.in=
directDiffuse *=3D ambientOcclusion;\n\t#if defined( USE_ENVMAP ) &amp;&amp=
; defined( STANDARD )\n\t\tfloat dotNV =3D saturate( dot( geometry.normal, =
geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *=3D computeSpec=
ularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#e=
ndif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D ao=
Map;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transform=
ed =3D vec3( position );",beginnormal_vertex:"vec3 objectNormal =3D vec3( n=
ormal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent =3D vec3( tangent.xyz );=
\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in=
 float roughness ) {\n\tconst vec4 c0 =3D vec4( - 1, - 0.0275, - 0.572, 0.0=
22 );\n\tconst vec4 c1 =3D vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r =3D r=
oughness * c0 + c1;\n\tfloat a004 =3D min( r.x * r.x, exp2( - 9.28 * dotNV =
) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat pun=
ctualLightIntensityToIrradianceFactor( const in float lightDistance, const =
in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PH=
YSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff =3D 1.0 / max( pow( ligh=
tDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance &gt; 0.0 ) {\n\t\=
tdistanceFalloff *=3D pow2( saturate( 1.0 - pow4( lightDistance / cutoffDis=
tance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance &=
gt; 0.0 &amp;&amp; decayExponent &gt; 0.0 ) {\n\t\treturn pow( saturate( -l=
ightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;=
\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\tr=
eturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specu=
larColor, const in float dotLH ) {\n\tfloat fresnel =3D exp2( ( -5.55473 * =
dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + =
specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, con=
st in float dotNV, const in float roughness ) {\n\tfloat fresnel =3D exp2( =
( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr =3D max( vec3( 1.0 - r=
oughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( =
const in float alpha, const in float dotNL, const in float dotNV ) {\n\tflo=
at a2 =3D pow2( alpha );\n\tfloat gl =3D dotNL + sqrt( a2 + ( 1.0 - a2 ) * =
pow2( dotNL ) );\n\tfloat gv =3D dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( do=
tNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( cons=
t in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a=
2 =3D pow2( alpha );\n\tfloat gv =3D dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2=
( dotNV ) );\n\tfloat gl =3D dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL =
) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in flo=
at alpha, const in float dotNH ) {\n\tfloat a2 =3D pow2( alpha );\n\tfloat =
denom =3D pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 =
/ pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight inciden=
tLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specular=
Color, const in float roughness ) {\n\tfloat alpha =3D pow2( roughness );\n=
\tvec3 halfDir =3D normalize( incidentLight.direction + viewDir );\n\tfloat=
 dotNL =3D saturate( dot( normal, incidentLight.direction ) );\n\tfloat dot=
NV =3D saturate( dot( normal, viewDir ) );\n\tfloat dotNH =3D saturate( dot=
( normal, halfDir ) );\n\tfloat dotLH =3D saturate( dot( incidentLight.dire=
ction, halfDir ) );\n\tvec3 F =3D F_Schlick( specularColor, dotLH );\n\tflo=
at G =3D G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D =3D D_GGX=
( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N=
, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE =3D=
 64.0;\n\tconst float LUT_SCALE =3D ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst=
 float LUT_BIAS =3D 0.5 / LUT_SIZE;\n\tfloat dotNV =3D saturate( dot( N, V =
) );\n\tvec2 uv =3D vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv =3D uv * =
LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( =
const in vec3 f ) {\n\tfloat l =3D length( f );\n\treturn max( ( l * l + f.=
z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 =
v1, const in vec3 v2 ) {\n\tfloat x =3D dot( v1, v2 );\n\tfloat y =3D abs( =
x );\n\tfloat a =3D 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat=
 b =3D 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v =3D a / b;\n\tfloat th=
eta_sintheta =3D ( x &gt; 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, =
1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Eval=
uate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv=
, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 =3D rectCoords[ 1 ] - rectCo=
ords[ 0 ];\n\tvec3 v2 =3D rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightN=
ormal =3D cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) &=
lt; 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 =3D normalize( V - N * =
dot( V, N ) );\n\tT2 =3D - cross( N, T1 );\n\tmat3 mat =3D mInv * transpose=
Mat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] =3D mat * ( =
rectCoords[ 0 ] - P );\n\tcoords[ 1 ] =3D mat * ( rectCoords[ 1 ] - P );\n\=
tcoords[ 2 ] =3D mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] =3D mat * ( =
rectCoords[ 3 ] - P );\n\tcoords[ 0 ] =3D normalize( coords[ 0 ] );\n\tcoor=
ds[ 1 ] =3D normalize( coords[ 1 ] );\n\tcoords[ 2 ] =3D normalize( coords[=
 2 ] );\n\tcoords[ 3 ] =3D normalize( coords[ 3 ] );\n\tvec3 vectorFormFact=
or =3D vec3( 0.0 );\n\tvectorFormFactor +=3D LTC_EdgeVectorFormFactor( coor=
ds[ 0 ], coords[ 1 ] );\n\tvectorFormFactor +=3D LTC_EdgeVectorFormFactor( =
coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor +=3D LTC_EdgeVectorFormFact=
or( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor +=3D LTC_EdgeVectorForm=
Factor( coords[ 3 ], coords[ 0 ] );\n\tfloat result =3D LTC_ClippedSphereFo=
rmFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specu=
lar_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in =
vec3 specularColor, const in float roughness ) {\n\tfloat dotNV =3D saturat=
e( dot( normal, viewDir ) );\n\tvec2 brdf =3D integrateSpecularBRDF( dotNV,=
 roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Spec=
ular_Multiscattering_Environment( const in GeometricContext geometry, const=
 in vec3 specularColor, const in float roughness, inout vec3 singleScatter,=
 inout vec3 multiScatter ) {\n\tfloat dotNV =3D saturate( dot( geometry.nor=
mal, geometry.viewDir ) );\n\tvec3 F =3D F_Schlick_RoughnessDependent( spec=
ularColor, dotNV, roughness );\n\tvec2 brdf =3D integrateSpecularBRDF( dotN=
V, roughness );\n\tvec3 FssEss =3D F * brdf.x + brdf.y;\n\tfloat Ess =3D br=
df.x + brdf.y;\n\tfloat Ems =3D 1.0 - Ess;\n\tvec3 Favg =3D specularColor +=
 ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms =3D FssEss * Favg / ( 1.0 - =
Ems * Favg );\n\tsingleScatter +=3D FssEss;\n\tmultiScatter +=3D Fms * Ems;=
\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhon=
g( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_=
PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Spe=
cular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricC=
ontext geometry, const in vec3 specularColor, const in float shininess ) {\=
n\tvec3 halfDir =3D normalize( incidentLight.direction + geometry.viewDir )=
;\n\tfloat dotNH =3D saturate( dot( geometry.normal, halfDir ) );\n\tfloat =
dotLH =3D saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F =
=3D F_Schlick( specularColor, dotLH );\n\tfloat G =3D G_BlinnPhong_Implicit=
( );\n\tfloat D =3D D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D=
 );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\=
n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExp=
onentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 /=
 ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(f=
loat roughness, float NoH) {\n\tfloat invAlpha =3D 1.0 / roughness;\n\tfloa=
t cos2h =3D NoH * NoH;\n\tfloat sin2h =3D max(1.0 - cos2h, 0.0078125);\tret=
urn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V=
_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV=
 - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, co=
nst in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n=
\tvec3 N =3D geometry.normal;\n\tvec3 V =3D geometry.viewDir;\n\tvec3 H =3D=
 normalize( V + L );\n\tfloat dotNH =3D saturate( dot( N, H ) );\n\treturn =
specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N=
, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sa=
mpler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec=
2 dSTdx =3D dFdx( vUv );\n\t\tvec2 dSTdy =3D dFdy( vUv );\n\t\tfloat Hll =
=3D bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx =3D bumpScale *=
 texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy =3D bumpScale * =
texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\=
t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, flo=
at faceDirection ) {\n\t\tvec3 vSigmaX =3D vec3( dFdx( surf_pos.x ), dFdx( =
surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY =3D vec3( dFdy( surf_=
pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN =3D surf_no=
rm;\n\t\tvec3 R1 =3D cross( vSigmaY, vN );\n\t\tvec3 R2 =3D cross( vN, vSig=
maX );\n\t\tfloat fDet =3D dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vG=
rad =3D sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normali=
ze( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragme=
nt:"#if NUM_CLIPPING_PLANES &gt; 0\n\tvec4 plane;\n\t#pragma unroll_loop_st=
art\n\tfor ( int i =3D 0; i &lt; UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane=
 =3D clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) &gt; pl=
ane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLAN=
ES &lt; NUM_CLIPPING_PLANES\n\t\tbool clipped =3D true;\n\t\t#pragma unroll=
_loop_start\n\t\tfor ( int i =3D UNION_CLIPPING_PLANES; i &lt; NUM_CLIPPING=
_PLANES; i ++ ) {\n\t\t\tplane =3D clippingPlanes[ i ];\n\t\t\tclipped =3D =
( dot( vClipPosition, plane.xyz ) &gt; plane.w ) &amp;&amp; clipped;\n\t\t}=
\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endi=
f",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES &gt; 0\n\tvarying=
 vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];=
\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES &gt; 0\n\tva=
rying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING=
_PLANES &gt; 0\n\tvClipPosition =3D - mvPosition.xyz;\n#endif",color_fragme=
nt:"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *=3D vColor;\n#elif defi=
ned( USE_COLOR )\n\tdiffuseColor.rgb *=3D vColor;\n#endif",color_pars_fragm=
ent:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined(=
 USE_COLOR )\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if define=
d( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) ||=
 defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_ver=
tex:"#if defined( USE_COLOR_ALPHA )\n\tvColor =3D vec4( 1.0 );\n#elif defin=
ed( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor =3D vec3( 1.0 =
);\n#endif\n#ifdef USE_COLOR\n\tvColor *=3D color;\n#endif\n#ifdef USE_INST=
ANCING_COLOR\n\tvColor.xyz *=3D instanceColor.xyz;\n#endif",common:"#define=
 PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.570=
7963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL=
_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define s=
aturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 -=
 saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow=
3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { f=
loat x2 =3D x*x; return x2*x2; }\nfloat average( const in vec3 color ) { re=
turn dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) =
{\n\tconst highp float a =3D 12.9898, b =3D 78.233, c =3D 43758.5453;\n\thi=
ghp float dt =3D dot( uv.xy, vec2( a,b ) ), sn =3D mod( dt, PI );\n\treturn=
 fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength=
( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return =
max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t=
\tfloat maxComponent =3D max3( abs( v ) );\n\t\treturn length( v / maxCompo=
nent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\=
n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 di=
rectDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indir=
ectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 norma=
l;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\=
nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normali=
ze( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection=
( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) *=
 matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlan=
e, in vec3 planeNormal ) {\n\tfloat distance =3D dot( planeNormal, point - =
pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideO=
fPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tret=
urn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneInt=
ersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, i=
n vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointO=
nPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;=
\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] =3D v=
ec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] =3D vec3( m[ 0 ].y, m[ 1 ]=
.y, m[ 2 ].y );\n\ttmp[ 2 ] =3D vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\tre=
turn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tv=
ec3 weights =3D vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, col=
or.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] =
=3D=3D - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u =3D atan( dir=
.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v =3D asin( clamp( dir.y, - 1.=
0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",cube_uv_refle=
ction_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.=
0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t=
#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tv=
ec3 absDirection =3D abs( direction );\n\t\tfloat face =3D - 1.0;\n\t\tif (=
 absDirection.x &gt; absDirection.z ) {\n\t\t\tif ( absDirection.x &gt; abs=
Direction.y )\n\t\t\t\tface =3D direction.x &gt; 0.0 ? 0.0 : 3.0;\n\t\t\tel=
se\n\t\t\t\tface =3D direction.y &gt; 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\=
tif ( absDirection.z &gt; absDirection.y )\n\t\t\t\tface =3D direction.z &g=
t; 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface =3D direction.y &gt; 0.0 ? 1.=
0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float=
 face ) {\n\t\tvec2 uv;\n\t\tif ( face =3D=3D 0.0 ) {\n\t\t\tuv =3D vec2( d=
irection.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face =3D=
=3D 1.0 ) {\n\t\t\tuv =3D vec2( - direction.x, - direction.z ) / abs( direc=
tion.y );\n\t\t} else if ( face =3D=3D 2.0 ) {\n\t\t\tuv =3D vec2( - direct=
ion.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face =3D=3D 3.0=
 ) {\n\t\t\tuv =3D vec2( - direction.z, direction.y ) / abs( direction.x );=
\n\t\t} else if ( face =3D=3D 4.0 ) {\n\t\t\tuv =3D vec2( - direction.x, di=
rection.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv =3D vec2( directi=
on.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1=
.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float =
mipInt ) {\n\t\tfloat face =3D getFace( direction );\n\t\tfloat filterInt =
=3D max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt =3D max( mipInt, c=
ubeUV_minMipLevel );\n\t\tfloat faceSize =3D exp2( mipInt );\n\t\tfloat tex=
elSize =3D 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv =3D getUV( dire=
ction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f =3D fract( uv );\n\t\tuv +=
=3D 0.5 - f;\n\t\tif ( face &gt; 2.0 ) {\n\t\t\tuv.y +=3D faceSize;\n\t\t\t=
face -=3D 3.0;\n\t\t}\n\t\tuv.x +=3D face * faceSize;\n\t\tif ( mipInt &lt;=
 cubeUV_maxMipLevel ) {\n\t\t\tuv.y +=3D 2.0 * cubeUV_maxTileSize;\n\t\t}\n=
\t\tuv.y +=3D filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x +=3D 3.0 * ma=
x( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *=3D texelSize;\n\t\=
tvec3 tl =3D envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x =
+=3D texelSize;\n\t\tvec3 tr =3D envMapTexelToLinear( texture2D( envMap, uv=
 ) ).rgb;\n\t\tuv.y +=3D texelSize;\n\t\tvec3 br =3D envMapTexelToLinear( t=
exture2D( envMap, uv ) ).rgb;\n\t\tuv.x -=3D texelSize;\n\t\tvec3 bl =3D en=
vMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm =3D mix( tl,=
 tr, f.x );\n\t\tvec3 bm =3D mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f=
.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#de=
fine r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#d=
efine v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\=
t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n=
\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip =3D 0.0;\n\t\tif=
 ( roughness &gt;=3D r1 ) {\n\t\t\tmip =3D ( r0 - roughness ) * ( m1 - m0 )=
 / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness &gt;=3D r4 ) {\n\t\t\tmip =
=3D ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( r=
oughness &gt;=3D r5 ) {\n\t\t\tmip =3D ( r4 - roughness ) * ( m5 - m4 ) / (=
 r4 - r5 ) + m4;\n\t\t} else if ( roughness &gt;=3D r6 ) {\n\t\t\tmip =3D (=
 r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmi=
p =3D - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 =
textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tf=
loat mip =3D clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\=
n\t\tfloat mipF =3D fract( mip );\n\t\tfloat mipInt =3D floor( mip );\n\t\t=
vec3 color0 =3D bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF=
 =3D=3D 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec=
3 color1 =3D bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\tretu=
rn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultno=
rmal_vertex:"vec3 transformedNormal =3D objectNormal;\n#ifdef USE_INSTANCIN=
G\n\tmat3 m =3D mat3( instanceMatrix );\n\ttransformedNormal /=3D vec3( dot=
( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttran=
sformedNormal =3D m * transformedNormal;\n#endif\ntransformedNormal =3D nor=
malMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal =3D =
- transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent=
 =3D ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_S=
IDED\n\t\ttransformedTangent =3D - transformedTangent;\n\t#endif\n#endif",d=
isplacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D=
 displacementMap;\n\tuniform float displacementScale;\n\tuniform float disp=
lacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n=
\ttransformed +=3D normalize( objectNormal ) * ( texture2D( displacementMap=
, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fr=
agment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor =3D texture2D( emissiv=
eMap, vUv );\n\temissiveColor.rgb =3D emissiveMapTexelToLinear( emissiveCol=
or ).rgb;\n\ttotalEmissiveRadiance *=3D emissiveColor.rgb;\n#endif",emissiv=
emap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap=
;\n#endif",encodings_fragment:"gl_FragColor =3D linearToOutputTexel( gl_Fra=
gColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) =
{\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFac=
tor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n=
}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn ve=
c4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBTo=
Linear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.947867298=
6 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( le=
ssThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTo=
sRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 =
) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.=
rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 val=
ue ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\=
n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent =3D max( max=
( value.r, value.g ), value.b );\n\tfloat fExp =3D clamp( ceil( log2( maxCo=
mponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( f=
Exp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float max=
Range ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 L=
inearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB =3D max( =
value.r, max( value.g, value.b ) );\n\tfloat M =3D clamp( maxRGB / maxRange=
, 0.0, 1.0 );\n\tM =3D ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb=
 / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float ma=
xRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), =
1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat=
 maxRGB =3D max( value.r, max( value.g, value.b ) );\n\tfloat D =3D max( ma=
xRange / maxRGB, 1.0 );\n\tD =3D clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\t=
return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 =
cLogLuvM =3D mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, =
0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp=
 =3D cLogLuvM * value.rgb;\n\tXp_Y_XYZp =3D max( Xp_Y_XYZp, vec3( 1e-6, 1e-=
6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy =3D Xp_Y_XYZp.xy / Xp_Y_XYZp.z;=
\n\tfloat Le =3D 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w =3D fract( L=
e );\n\tvResult.z =3D ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255=
.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM =3D mat3( 6.0014, -2.=
7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 L=
ogLuvToLinear( in vec4 value ) {\n\tfloat Le =3D value.z * 255.0 + value.w;=
\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y =3D exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_=
Y_XYZp.z =3D Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x =3D value.x * Xp_Y_XYZp.=
z;\n\tvec3 vRGB =3D cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( v=
RGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WOR=
LDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToF=
rag =3D normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - =
viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag =3D normalize( =
vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal =3D inverse=
TransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTIO=
N\n\t\t\tvec3 reflectVec =3D reflect( cameraToFrag, worldNormal );\n\t\t#el=
se\n\t\t\tvec3 reflectVec =3D refract( cameraToFrag, worldNormal, refractio=
nRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec =3D vReflect;\n\t#endif=
\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor =3D textureCube( envMap, vec=
3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_T=
YPE_CUBE_UV )\n\t\tvec4 envColor =3D textureCubeUV( envMap, reflectVec, 0.0=
 );\n\t#else\n\t\tvec4 envColor =3D vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMA=
P_TYPE_CUBE_UV\n\t\tenvColor =3D envMapTexelToLinear( envColor );\n\t#endif=
\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight =3D mix( outgoingLig=
ht, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#el=
if defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight =3D mix( outgoingLight=
, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP=
_BLENDING_ADD )\n\t\toutgoingLight +=3D envColor.xyz * specularStrength * r=
eflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENV=
MAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tunifo=
rm int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube env=
Map;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_=
pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defi=
ned( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#de=
fine ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorld=
Position;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vR=
eflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if def=
ined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#de=
fine ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 =
vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float ref=
ractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined=
( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refracti=
onRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in Geomet=
ricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal =3D=
 inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVM=
AP_TYPE_CUBE\n\t\t\tvec3 queryVec =3D vec3( flipEnvMap * worldNormal.x, wor=
ldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor =3D =
textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n=
\t\t\t\tvec4 envMapColor =3D textureCube( envMap, queryVec, float( maxMIPLe=
vel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb =3D envMapTexelToLinear( envM=
apColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMap=
Color =3D textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4=
 envMapColor =3D vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb =
* envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughn=
ess, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar =3D float( m=
axMIPLevel );\n\t\tfloat sigma =3D PI * roughness * roughness / ( 1.0 + rou=
ghness );\n\t\tfloat desiredMIPLevel =3D maxMIPLevelScalar + log2( sigma );=
\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3=
 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal=
, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP=
_MODE_REFLECTION\n\t\t\tvec3 reflectVec =3D reflect( -viewDir, normal );\n\=
t\t\treflectVec =3D normalize( mix( reflectVec, normal, roughness * roughne=
ss) );\n\t\t#else\n\t\t\tvec3 reflectVec =3D refract( -viewDir, normal, ref=
ractionRatio );\n\t\t#endif\n\t\treflectVec =3D inverseTransformDirection( =
reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel =3D getSpecularMIPLev=
el( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 quer=
yReflectVec =3D vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#i=
fdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor =3D textureCubeLodEXT( envMa=
p, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapCo=
lor =3D textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#e=
ndif\n\t\t\tenvMapColor.rgb =3D envMapTexelToLinear( envMapColor ).rgb;\n\t=
\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor =3D textureC=
ubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor=
.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#=
ifdef ENV_WORLDPOS\n\t\tvWorldPosition =3D worldPosition.xyz;\n\t#else\n\t\=
tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex =
=3D normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - view=
Matrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex =3D normalize( wo=
rldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal =3D invers=
eTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MO=
DE_REFLECTION\n\t\t\tvReflect =3D reflect( cameraToVertex, worldNormal );\n=
\t\t#else\n\t\t\tvReflect =3D refract( cameraToVertex, worldNormal, refract=
ionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfo=
gDepth =3D - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvary=
ing float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP=
2\n\t\tfloat fogFactor =3D 1.0 - exp( - fogDensity * fogDensity * fogDepth =
* fogDepth );\n\t#else\n\t\tfloat fogFactor =3D smoothstep( fogNear, fogFar=
, fogDepth );\n\t#endif\n\tgl_FragColor.rgb =3D mix( gl_FragColor.rgb, fogC=
olor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform ve=
c3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform flo=
at fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogF=
ar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\=
tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 n=
ormal, vec3 lightDirection ) {\n\tfloat dotNL =3D dot( normal, lightDirecti=
on );\n\tvec2 coord =3D vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADI=
ENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\tretur=
n ( coord.x &lt; 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_=
fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel=3D texture2D( lightMap,=
 vUv2 );\n\treflectedLight.indirectDiffuse +=3D PI * lightMapTexelToLinear(=
 lightMapTexel ).rgb * lightMapIntensity;\n#endif",lightmap_pars_fragment:"=
#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMa=
pIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse =3D vec3( 1.0 );\n=
GeometricContext geometry;\ngeometry.position =3D mvPosition.xyz;\ngeometry=
.normal =3D normalize( transformedNormal );\ngeometry.viewDir =3D ( isOrtho=
graphic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricConte=
xt backGeometry;\nbackGeometry.position =3D geometry.position;\nbackGeometr=
y.normal =3D -geometry.normal;\nbackGeometry.viewDir =3D geometry.viewDir;\=
nvLightFront =3D vec3( 0.0 );\nvIndirectFront =3D vec3( 0.0 );\n#ifdef DOUB=
LE_SIDED\n\tvLightBack =3D vec3( 0.0 );\n\tvIndirectBack =3D vec3( 0.0 );\n=
#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Dif=
fuse;\nvIndirectFront +=3D getAmbientLightIrradiance( ambientLightColor );\=
nvIndirectFront +=3D getLightProbeIrradiance( lightProbe, geometry );\n#ifd=
ef DOUBLE_SIDED\n\tvIndirectBack +=3D getAmbientLightIrradiance( ambientLig=
htColor );\n\tvIndirectBack +=3D getLightProbeIrradiance( lightProbe, backG=
eometry );\n#endif\n#if NUM_POINT_LIGHTS &gt; 0\n\t#pragma unroll_loop_star=
t\n\tfor ( int i =3D 0; i &lt; NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDire=
ctLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL =
=3D dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Di=
ffuse =3D PI * directLight.color;\n\t\tvLightFront +=3D saturate( dotNL ) *=
 directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack +=3D =
saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma =
unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS &gt; 0\n\t#pragma unroll_loop_=
start\n\tfor ( int i =3D 0; i &lt; NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDi=
rectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL =
=3D dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Di=
ffuse =3D PI * directLight.color;\n\t\tvLightFront +=3D saturate( dotNL ) *=
 directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack +=3D =
saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma =
unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS &gt; 0\n\t#pragma unroll_loop_s=
tart\n\tfor ( int i =3D 0; i &lt; NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectio=
nalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\=
n\t\tdotNL =3D dot( geometry.normal, directLight.direction );\n\t\tdirectLi=
ghtColor_Diffuse =3D PI * directLight.color;\n\t\tvLightFront +=3D saturate=
( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLigh=
tBack +=3D saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\=
n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS &gt; 0\n\t#pragma u=
nroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_HEMI_LIGHTS; i ++ ) {\n\t=
\tvIndirectFront +=3D getHemisphereLightIrradiance( hemisphereLights[ i ], =
geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack +=3D getHemispher=
eLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n=
\t#pragma unroll_loop_end\n#endif",lights_pars_begin:"uniform bool receiveS=
hadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec=
3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tflo=
at x =3D normal.x, y =3D normal.y, z =3D normal.z;\n\tvec3 result =3D shCoe=
fficients[ 0 ] * 0.886227;\n\tresult +=3D shCoefficients[ 1 ] * 2.0 * 0.511=
664 * y;\n\tresult +=3D shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult=
 +=3D shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult +=3D shCoefficien=
ts[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult +=3D shCoefficients[ 5 ] * 2.0 =
* 0.429043 * y * z;\n\tresult +=3D shCoefficients[ 6 ] * ( 0.743125 * z * z=
 - 0.247708 );\n\tresult +=3D shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;=
\n\tresult +=3D shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\tretu=
rn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ],=
 const in GeometricContext geometry ) {\n\tvec3 worldNormal =3D inverseTran=
sformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance =3D shGet=
IrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 get=
AmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradia=
nce =3D ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradi=
ance *=3D PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS &gt; 0=
\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n=
\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid get=
DirectionalDirectLightIrradiance( const in DirectionalLight directionalLigh=
t, const in GeometricContext geometry, out IncidentLight directLight ) {\n\=
t\tdirectLight.color =3D directionalLight.color;\n\t\tdirectLight.direction=
 =3D directionalLight.direction;\n\t\tdirectLight.visible =3D true;\n\t}\n#=
endif\n#if NUM_POINT_LIGHTS &gt; 0\n\tstruct PointLight {\n\t\tvec3 positio=
n;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform=
 PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrr=
adiance( const in PointLight pointLight, const in GeometricContext geometry=
, out IncidentLight directLight ) {\n\t\tvec3 lVector =3D pointLight.positi=
on - geometry.position;\n\t\tdirectLight.direction =3D normalize( lVector )=
;\n\t\tfloat lightDistance =3D length( lVector );\n\t\tdirectLight.color =
=3D pointLight.color;\n\t\tdirectLight.color *=3D punctualLightIntensityToI=
rradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\=
t\tdirectLight.visible =3D ( directLight.color !=3D vec3( 0.0 ) );\n\t}\n#e=
ndif\n#if NUM_SPOT_LIGHTS &gt; 0\n\tstruct SpotLight {\n\t\tvec3 position;\=
n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay=
;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight sp=
otLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in=
 SpotLight spotLight, const in GeometricContext geometry, out IncidentLight=
 directLight ) {\n\t\tvec3 lVector =3D spotLight.position - geometry.positi=
on;\n\t\tdirectLight.direction =3D normalize( lVector );\n\t\tfloat lightDi=
stance =3D length( lVector );\n\t\tfloat angleCos =3D dot( directLight.dire=
ction, spotLight.direction );\n\t\tif ( angleCos &gt; spotLight.coneCos ) {=
\n\t\t\tfloat spotEffect =3D smoothstep( spotLight.coneCos, spotLight.penum=
braCos, angleCos );\n\t\t\tdirectLight.color =3D spotLight.color;\n\t\t\tdi=
rectLight.color *=3D spotEffect * punctualLightIntensityToIrradianceFactor(=
 lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.v=
isible =3D true;\n\t\t} else {\n\t\t\tdirectLight.color =3D vec3( 0.0 );\n\=
t\t\tdirectLight.visible =3D false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_=
LIGHTS &gt; 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position=
;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc=
_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_=
RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS &gt; 0\n\tstruct Hemispher=
eLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\=
t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3=
 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in=
 GeometricContext geometry ) {\n\t\tfloat dotNL =3D dot( geometry.normal, h=
emiLight.direction );\n\t\tfloat hemiDiffuseWeight =3D 0.5 * dotNL + 0.5;\n=
\t\tvec3 irradiance =3D mix( hemiLight.groundColor, hemiLight.skyColor, hem=
iDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance =
*=3D PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_frag=
ment:"ToonMaterial material;\nmaterial.diffuseColor =3D diffuseColor.rgb;",=
lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED=
\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseCol=
or;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in =
GeometricContext geometry, const in ToonMaterial material, inout ReflectedL=
ight reflectedLight ) {\n\tvec3 irradiance =3D getGradientIrradiance( geome=
try.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICA=
LLY_CORRECT_LIGHTS\n\t\tirradiance *=3D PI;\n\t#endif\n\treflectedLight.dir=
ectDiffuse +=3D irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );=
\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in Geome=
tricContext geometry, const in ToonMaterial material, inout ReflectedLight =
reflectedLight ) {\n\treflectedLight.indirectDiffuse +=3D irradiance * BRDF=
_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_=
Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define=
 Material_LightProbeLOD( material )\t(0)",lights_phong_fragment:"BlinnPhong=
Material material;\nmaterial.diffuseColor =3D diffuseColor.rgb;\nmaterial.s=
pecularColor =3D specular;\nmaterial.specularShininess =3D shininess;\nmate=
rial.specularStrength =3D specularStrength;",lights_phong_pars_fragment:"va=
rying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#e=
ndif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularCol=
or;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Dir=
ect_BlinnPhong( const in IncidentLight directLight, const in GeometricConte=
xt geometry, const in BlinnPhongMaterial material, inout ReflectedLight ref=
lectedLight ) {\n\tfloat dotNL =3D saturate( dot( geometry.normal, directLi=
ght.direction ) );\n\tvec3 irradiance =3D dotNL * directLight.color;\n\t#if=
ndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *=3D PI;\n\t#endif\n\treflec=
tedLight.directDiffuse +=3D irradiance * BRDF_Diffuse_Lambert( material.dif=
fuseColor );\n\treflectedLight.directSpecular +=3D irradiance * BRDF_Specul=
ar_BlinnPhong( directLight, geometry, material.specularColor, material.spec=
ularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Bl=
innPhong( const in vec3 irradiance, const in GeometricContext geometry, con=
st in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\=
n\treflectedLight.indirectDiffuse +=3D irradiance * BRDF_Diffuse_Lambert( m=
aterial.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n=
#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Materi=
al_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMateri=
al material;\nmaterial.diffuseColor =3D diffuseColor.rgb * ( 1.0 - metalnes=
sFactor );\nvec3 dxy =3D max( abs( dFdx( geometryNormal ) ), abs( dFdy( geo=
metryNormal ) ) );\nfloat geometryRoughness =3D max( max( dxy.x, dxy.y ), d=
xy.z );\nmaterial.specularRoughness =3D max( roughnessFactor, 0.0525 );mate=
rial.specularRoughness +=3D geometryRoughness;\nmaterial.specularRoughness =
=3D min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmateria=
l.specularColor =3D mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflect=
ivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specular=
Color =3D mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, meta=
lnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat =3D clearcoa=
t;\n\tmaterial.clearcoatRoughness =3D clearcoatRoughness;\n\t#ifdef USE_CLE=
ARCOATMAP\n\t\tmaterial.clearcoat *=3D texture2D( clearcoatMap, vUv ).x;\n\=
t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughne=
ss *=3D texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.cl=
earcoat =3D saturate( material.clearcoat );\tmaterial.clearcoatRoughness =
=3D max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughn=
ess +=3D geometryRoughness;\n\tmaterial.clearcoatRoughness =3D min( materia=
l.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenCol=
or =3D sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMateri=
al {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColo=
r;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#end=
if\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECU=
LAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clea=
rcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\tretur=
n DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * (=
 pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_=
AREA_LIGHTS &gt; 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLi=
ght rectAreaLight, const in GeometricContext geometry, const in PhysicalMat=
erial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal =
=3D geometry.normal;\n\t\tvec3 viewDir =3D geometry.viewDir;\n\t\tvec3 posi=
tion =3D geometry.position;\n\t\tvec3 lightPos =3D rectAreaLight.position;\=
n\t\tvec3 halfWidth =3D rectAreaLight.halfWidth;\n\t\tvec3 halfHeight =3D r=
ectAreaLight.halfHeight;\n\t\tvec3 lightColor =3D rectAreaLight.color;\n\t\=
tfloat roughness =3D material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];=
\n\t\trectCoords[ 0 ] =3D lightPos + halfWidth - halfHeight;\t\trectCoords[=
 1 ] =3D lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] =3D lightP=
os - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] =3D lightPos + halfWidth =
+ halfHeight;\n\t\tvec2 uv =3D LTC_Uv( normal, viewDir, roughness );\n\t\tv=
ec4 t1 =3D texture2D( ltc_1, uv );\n\t\tvec4 t2 =3D texture2D( ltc_2, uv );=
\n\t\tmat3 mInv =3D mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, =
1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel =3D ( mat=
erial.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.=
y );\n\t\treflectedLight.directSpecular +=3D lightColor * fresnel * LTC_Eva=
luate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.d=
irectDiffuse +=3D lightColor * material.diffuseColor * LTC_Evaluate( normal=
, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direc=
t_Physical( const in IncidentLight directLight, const in GeometricContext g=
eometry, const in PhysicalMaterial material, inout ReflectedLight reflected=
Light ) {\n\tfloat dotNL =3D saturate( dot( geometry.normal, directLight.di=
rection ) );\n\tvec3 irradiance =3D dotNL * directLight.color;\n\t#ifndef P=
HYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *=3D PI;\n\t#endif\n\t#ifdef CLEAR=
COAT\n\t\tfloat ccDotNL =3D saturate( dot( geometry.clearcoatNormal, direct=
Light.direction ) );\n\t\tvec3 ccIrradiance =3D ccDotNL * directLight.color=
;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *=3D PI;\n\t\t=
#endif\n\t\tfloat clearcoatDHR =3D material.clearcoat * clearcoatDHRApprox(=
 material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular=
 +=3D ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, g=
eometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIE=
NT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR =3D 0=
.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular +=3D (=
 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.s=
pecularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmat=
erial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular +=3D (=
 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geomet=
ry.viewDir, geometry.normal, material.specularColor, material.specularRough=
ness);\n\t#endif\n\treflectedLight.directDiffuse +=3D ( 1.0 - clearcoatDHR =
) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE=
_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricCont=
ext geometry, const in PhysicalMaterial material, inout ReflectedLight refl=
ectedLight ) {\n\treflectedLight.indirectDiffuse +=3D irradiance * BRDF_Dif=
fuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physica=
l( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoa=
tRadiance, const in GeometricContext geometry, const in PhysicalMaterial ma=
terial, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tflo=
at ccDotNV =3D saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) =
);\n\t\treflectedLight.indirectSpecular +=3D clearcoatRadiance * material.c=
learcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearc=
oatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughnes=
s );\n\t\tfloat ccDotNL =3D ccDotNV;\n\t\tfloat clearcoatDHR =3D material.c=
learcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#=
else\n\t\tfloat clearcoatDHR =3D 0.0;\n\t#endif\n\tfloat clearcoatInv =3D 1=
.0 - clearcoatDHR;\n\tvec3 singleScattering =3D vec3( 0.0 );\n\tvec3 multiS=
cattering =3D vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance =3D irradiance =
* RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, ma=
terial.specularColor, material.specularRoughness, singleScattering, multiSc=
attering );\n\tvec3 diffuse =3D material.diffuseColor * ( 1.0 - ( singleSca=
ttering + multiScattering ) );\n\treflectedLight.indirectSpecular +=3D clea=
rcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular =
+=3D multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirect=
Diffuse +=3D diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\=
t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Phy=
sical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define R=
E_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOc=
clusion( const in float dotNV, const in float ambientOcclusion, const in fl=
oat roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( =
- 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragmen=
t_begin:"\nGeometricContext geometry;\ngeometry.position =3D - vViewPositio=
n;\ngeometry.normal =3D normal;\ngeometry.viewDir =3D ( isOrthographic ) ? =
vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry=
.clearcoatNormal =3D clearcoatNormal;\n#endif\nIncidentLight directLight;\n=
#if ( NUM_POINT_LIGHTS &gt; 0 ) &amp;&amp; defined( RE_Direct )\n\tPointLig=
ht pointLight;\n\t#if defined( USE_SHADOWMAP ) &amp;&amp; NUM_POINT_LIGHT_S=
HADOWS &gt; 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma un=
roll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_POINT_LIGHTS; i ++ ) {\n\t=
\tpointLight =3D pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( poin=
tLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) &amp;&am=
p; ( UNROLLED_LOOP_INDEX &lt; NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShad=
ow =3D pointLightShadows[ i ];\n\t\tdirectLight.color *=3D all( bvec2( dire=
ctLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], p=
ointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShado=
w.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, =
pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( direc=
tLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_e=
nd\n#endif\n#if ( NUM_SPOT_LIGHTS &gt; 0 ) &amp;&amp; defined( RE_Direct )\=
n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) &amp;&amp; NUM_SPOT=
_LIGHT_SHADOWS &gt; 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pra=
gma unroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_SPOT_LIGHTS; i ++ ) =
{\n\t\tspotLight =3D spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( sp=
otLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) &amp;&a=
mp; ( UNROLLED_LOOP_INDEX &lt; NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShado=
w =3D spotLightShadows[ i ];\n\t\tdirectLight.color *=3D all( bvec2( direct=
Light.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight=
Shadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRad=
ius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight=
, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#e=
ndif\n#if ( NUM_DIR_LIGHTS &gt; 0 ) &amp;&amp; defined( RE_Direct )\n\tDire=
ctionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) &amp;&amp; N=
UM_DIR_LIGHT_SHADOWS &gt; 0\n\tDirectionalLightShadow directionalLightShado=
w;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_=
DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight =3D directionalLights[ i ];\n\t\=
tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLig=
ht );\n\t\t#if defined( USE_SHADOWMAP ) &amp;&amp; ( UNROLLED_LOOP_INDEX &l=
t; NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow =3D directionalLight=
Shadows[ i ];\n\t\tdirectLight.color *=3D all( bvec2( directLight.visible, =
receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightS=
hadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightSha=
dow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE=
_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma=
 unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS &gt; 0 ) &amp;&amp; de=
fined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unro=
ll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_RECT_AREA_LIGHTS; i ++ ) {\n=
\t\trectAreaLight =3D rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAre=
aLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_e=
nd\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance =3D vec=
3( 0.0 );\n\tvec3 irradiance =3D getAmbientLightIrradiance( ambientLightCol=
or );\n\tirradiance +=3D getLightProbeIrradiance( lightProbe, geometry );\n=
\t#if ( NUM_HEMI_LIGHTS &gt; 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( =
int i =3D 0; i &lt; NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance +=3D getHem=
isphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pra=
gma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n=
\tvec3 radiance =3D vec3( 0.0 );\n\tvec3 clearcoatRadiance =3D vec3( 0.0 );=
\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef=
 USE_LIGHTMAP\n\t\tvec4 lightMapTexel=3D texture2D( lightMap, vUv2 );\n\t\t=
vec3 lightMapIrradiance =3D lightMapTexelToLinear( lightMapTexel ).rgb * li=
ghtMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrra=
diance *=3D PI;\n\t\t#endif\n\t\tirradiance +=3D lightMapIrradiance;\n\t#en=
dif\n\t#if defined( USE_ENVMAP ) &amp;&amp; defined( STANDARD ) &amp;&amp; =
defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance +=3D getLightProbeIndirec=
tIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_E=
NVMAP ) &amp;&amp; defined( RE_IndirectSpecular )\n\tradiance +=3D getLight=
ProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specular=
Roughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance +=3D g=
etLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, m=
aterial.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragme=
nt_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance=
, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSp=
ecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance=
, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if =
defined( USE_LOGDEPTHBUF ) &amp;&amp; defined( USE_LOGDEPTHBUF_EXT )\n\tgl_=
FragDepthEXT =3D vIsPerspective =3D=3D 0.0 ? gl_FragCoord.z : log2( vFragDe=
pth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if define=
d( USE_LOGDEPTHBUF ) &amp;&amp; defined( USE_LOGDEPTHBUF_EXT )\n\tuniform f=
loat logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspe=
ctive;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef U=
SE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPer=
spective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",log=
depthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\t=
vFragDepth =3D 1.0 + gl_Position.w;\n\t\tvIsPerspective =3D float( isPerspe=
ctiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( =
projectionMatrix ) ) {\n\t\t\tgl_Position.z =3D log2( max( EPSILON, gl_Posi=
tion.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *=3D gl_Positi=
on.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelC=
olor =3D texture2D( map, vUv );\n\ttexelColor =3D mapTexelToLinear( texelCo=
lor );\n\tdiffuseColor *=3D texelColor;\n#endif",map_pars_fragment:"#ifdef =
USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defin=
ed( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv =3D ( uvTransform * vec=
3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MA=
P\n\tvec4 mapTexel =3D texture2D( map, uv );\n\tdiffuseColor *=3D mapTexelT=
oLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *=3D te=
xture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined=
( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif=
\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\t=
uniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalness=
Factor =3D metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness =3D t=
exture2D( metalnessMap, vUv );\n\tmetalnessFactor *=3D texelMetalness.b;\n#=
endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampl=
er2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\t=
objectNormal *=3D morphTargetBaseInfluence;\n\tobjectNormal +=3D morphNorma=
l0 * morphTargetInfluences[ 0 ];\n\tobjectNormal +=3D morphNormal1 * morphT=
argetInfluences[ 1 ];\n\tobjectNormal +=3D morphNormal2 * morphTargetInflue=
nces[ 2 ];\n\tobjectNormal +=3D morphNormal3 * morphTargetInfluences[ 3 ];\=
n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float =
morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float mo=
rphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences=
[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttr=
ansformed *=3D morphTargetBaseInfluence;\n\ttransformed +=3D morphTarget0 *=
 morphTargetInfluences[ 0 ];\n\ttransformed +=3D morphTarget1 * morphTarget=
Influences[ 1 ];\n\ttransformed +=3D morphTarget2 * morphTargetInfluences[ =
2 ];\n\ttransformed +=3D morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifn=
def USE_MORPHNORMALS\n\t\ttransformed +=3D morphTarget4 * morphTargetInflue=
nces[ 4 ];\n\t\ttransformed +=3D morphTarget5 * morphTargetInfluences[ 5 ];=
\n\t\ttransformed +=3D morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttran=
sformed +=3D morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",=
normal_fragment_begin:"float faceDirection =3D gl_FrontFacing ? 1.0 : - 1.0=
;\n#ifdef FLAT_SHADED\n\tvec3 fdx =3D vec3( dFdx( vViewPosition.x ), dFdx( =
vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy =3D vec3( dFdy( v=
ViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tve=
c3 normal =3D normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal =3D nor=
malize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal =3D normal * faceDire=
ction;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent =3D normalize( vTa=
ngent );\n\t\tvec3 bitangent =3D normalize( vBitangent );\n\t\t#ifdef DOUBL=
E_SIDED\n\t\t\ttangent =3D tangent * faceDirection;\n\t\t\tbitangent =3D bi=
tangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALM=
AP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN =3D mat3( tange=
nt, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal=
 =3D normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal =
=3D texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\t=
normal =3D - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal =3D norma=
l * faceDirection;\n\t#endif\n\tnormal =3D normalize( normalMatrix * normal=
 );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN =3D texture2D( no=
rmalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *=3D normalScale;\n\t#ifdef USE_=
TANGENT\n\t\tnormal =3D normalize( vTBN * mapN );\n\t#else\n\t\tnormal =3D =
perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif=
\n#elif defined( USE_BUMPMAP )\n\tnormal =3D perturbNormalArb( -vViewPositi=
on, normal, dHdxy_fwd(), faceDirection );\n#endif",normalmap_pars_fragment:=
"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 norma=
lScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;=
\n#endif\n#if ! defined ( USE_TANGENT ) &amp;&amp; ( defined ( TANGENTSPACE=
_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal=
2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\=
tvec3 q0 =3D vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) =
);\n\t\tvec3 q1 =3D vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_p=
os.z ) );\n\t\tvec2 st0 =3D dFdx( vUv.st );\n\t\tvec2 st1 =3D dFdy( vUv.st =
);\n\t\tvec3 N =3D surf_norm;\n\t\tvec3 q1perp =3D cross( q1, N );\n\t\tvec=
3 q0perp =3D cross( N, q0 );\n\t\tvec3 T =3D q1perp * st0.x + q0perp * st1.=
x;\n\t\tvec3 B =3D q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det =3D max(=
 dot( T, T ), dot( B, B ) );\n\t\tfloat scale =3D ( det =3D=3D 0.0 ) ? 0.0 =
: faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x *=
 scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",clearcoat_n=
ormal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal =3D geometry=
Normal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMA=
LMAP\n\tvec3 clearcoatMapN =3D texture2D( clearcoatNormalMap, vUv ).xyz * 2=
.0 - 1.0;\n\tclearcoatMapN.xy *=3D clearcoatNormalScale;\n\t#ifdef USE_TANG=
ENT\n\t\tclearcoatNormal =3D normalize( vTBN * clearcoatMapN );\n\t#else\n\=
t\tclearcoatNormal =3D perturbNormal2Arb( - vViewPosition, clearcoatNormal,=
 clearcoatMapN, faceDirection );\n\t#endif\n#endif",clearcoat_pars_fragment=
:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifde=
f USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#=
endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalM=
ap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormal=
ToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\=
n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz -=
 1.0;\n}\nconst float PackUpscale =3D 256. / 255.;const float UnpackDownsca=
le =3D 255. / 256.;\nconst vec3 PackFactors =3D vec3( 256. * 256. * 256., 2=
56. * 256., 256. );\nconst vec4 UnpackFactors =3D UnpackDownscale / vec4( P=
ackFactors, 1. );\nconst float ShiftRight8 =3D 1. / 256.;\nvec4 packDepthTo=
RGBA( const in float v ) {\n\tvec4 r =3D vec4( fract( v * PackFactors ), v =
);\n\tr.yzw -=3D r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat un=
packRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\=
nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r =3D vec4( v.x, fract( v.x * 255=
.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r=
.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn ve=
c2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthog=
raphicDepth( const in float viewZ, const in float near, const in float far =
) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDept=
hToViewZ( const in float linearClipZ, const in float near, const in float f=
ar ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPers=
pectiveDepth( const in float viewZ, const in float near, const in float far=
 ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nf=
loat perspectiveDepthToViewZ( const in float invClipZ, const in float near,=
 const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invCl=
ipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n=
\tgl_FragColor.rgb *=3D gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPos=
ition =3D vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition =
=3D instanceMatrix * mvPosition;\n#endif\nmvPosition =3D modelViewMatrix * =
mvPosition;\ngl_Position =3D projectionMatrix * mvPosition;",dithering_frag=
ment:"#ifdef DITHERING\n\tgl_FragColor.rgb =3D dithering( gl_FragColor.rgb =
);\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( ve=
c3 color ) {\n\t\tfloat grid_position =3D rand( gl_FragCoord.xy );\n\t\tvec=
3 dither_shift_RGB =3D vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n=
\t\tdither_shift_RGB =3D mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_R=
GB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",ro=
ughnessmap_fragment:"float roughnessFactor =3D roughness;\n#ifdef USE_ROUGH=
NESSMAP\n\tvec4 texelRoughness =3D texture2D( roughnessMap, vUv );\n\trough=
nessFactor *=3D texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifd=
ef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_p=
ars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS &gt; 0\n\t\=
tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvary=
ing vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct Dire=
ctionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias=
;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tunifor=
m DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\=
n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\t\tuniform sampler2D spotS=
hadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM=
_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBia=
s;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 sh=
adowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPO=
T_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS &gt; 0\n\t\tuni=
form sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4=
 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow=
 {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat sha=
dowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\=
tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightSha=
dows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampl=
er2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRG=
BAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution(=
 sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( sh=
adow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float com=
pare ){\n\t\tfloat occlusion =3D 1.0;\n\t\tvec2 distribution =3D texture2DD=
istribution( shadow, uv );\n\t\tfloat hard_shadow =3D step( compare , distr=
ibution.x );\n\t\tif (hard_shadow !=3D 1.0 ) {\n\t\t\tfloat distance =3D co=
mpare - distribution.x ;\n\t\t\tfloat variance =3D max( 0.00000, distributi=
on.y * distribution.y );\n\t\t\tfloat softness_probability =3D variance / (=
variance + distance * distance );\t\t\tsoftness_probability =3D clamp( ( so=
ftness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion =3D=
 clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\tr=
eturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowM=
apSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tflo=
at shadow =3D 1.0;\n\t\tshadowCoord.xyz /=3D shadowCoord.w;\n\t\tshadowCoor=
d.z +=3D shadowBias;\n\t\tbvec4 inFrustumVec =3D bvec4 ( shadowCoord.x &gt;=
=3D 0.0, shadowCoord.x &lt;=3D 1.0, shadowCoord.y &gt;=3D 0.0, shadowCoord.=
y &lt;=3D 1.0 );\n\t\tbool inFrustum =3D all( inFrustumVec );\n\t\tbvec2 fr=
ustumTestVec =3D bvec2( inFrustum, shadowCoord.z &lt;=3D 1.0 );\n\t\tbool f=
rustumTest =3D all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if de=
fined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize =3D vec2( 1.0 ) / shadowM=
apSize;\n\t\t\tfloat dx0 =3D - texelSize.x * shadowRadius;\n\t\t\tfloat dy0=
 =3D - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 =3D + texelSize.x * sha=
dowRadius;\n\t\t\tfloat dy1 =3D + texelSize.y * shadowRadius;\n\t\t\tfloat =
dx2 =3D dx0 / 2.0;\n\t\t\tfloat dy2 =3D dy0 / 2.0;\n\t\t\tfloat dx3 =3D dx1=
 / 2.0;\n\t\t\tfloat dy3 =3D dy1 / 2.0;\n\t\t\tshadow =3D (\n\t\t\t\ttextur=
e2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +=
\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), s=
hadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec=
2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shad=
owCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare(=
 shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\tt=
exture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.=
z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0=
 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy =
+ vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap,=
 shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, sh=
adowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompar=
e( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\=
ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoor=
d.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, d=
y3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.x=
y + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMa=
p, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DC=
ompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t=
\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shado=
wCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PC=
F_SOFT )\n\t\t\tvec2 texelSize =3D vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloa=
t dx =3D texelSize.x;\n\t\t\tfloat dy =3D texelSize.y;\n\t\t\tvec2 uv =3D s=
hadowCoord.xy;\n\t\t\tvec2 f =3D fract( uv * shadowMapSize + 0.5 );\n\t\t\t=
uv -=3D f * texelSize;\n\t\t\tshadow =3D (\n\t\t\t\ttexture2DCompare( shado=
wMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2=
( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + v=
ec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv =
+ texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, u=
v + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shado=
wMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\=
t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z =
), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), sha=
dowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap=
, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( sh=
adowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n=
\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord=
.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), =
shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( s=
hadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2D=
Compare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\=
t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2=
.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv=
 + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t=
\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_V=
SM )\n\t\t\tshadow =3D VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z =
);\n\t\t#else\n\t\t\tshadow =3D texture2DCompare( shadowMap, shadowCoord.xy=
, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cube=
ToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV =3D abs( v );\n\t\tfloat =
scaleToCube =3D 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *=3D =
scaleToCube;\n\t\tv *=3D scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec=
2 planar =3D v.xy;\n\t\tfloat almostATexel =3D 1.5 * texelSizeY;\n\t\tfloat=
 almostOne =3D 1.0 - almostATexel;\n\t\tif ( absV.z &gt;=3D almostOne ) {\n=
\t\t\tif ( v.z &gt; 0.0 )\n\t\t\t\tplanar.x =3D 4.0 - v.x;\n\t\t} else if (=
 absV.x &gt;=3D almostOne ) {\n\t\t\tfloat signX =3D sign( v.x );\n\t\t\tpl=
anar.x =3D v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y &gt;=3D almos=
tOne ) {\n\t\t\tfloat signY =3D sign( v.y );\n\t\t\tplanar.x =3D v.x + 2.0 =
* signY + 2.0;\n\t\t\tplanar.y =3D v.z * signY - 2.0;\n\t\t}\n\t\treturn ve=
c2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointSha=
dow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shado=
wRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) =
{\n\t\tvec2 texelSize =3D vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) =
);\n\t\tvec3 lightToPosition =3D shadowCoord.xyz;\n\t\tfloat dp =3D ( lengt=
h( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCamer=
aNear );\t\tdp +=3D shadowBias;\n\t\tvec3 bd3D =3D normalize( lightToPositi=
on );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF=
_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset =3D vec2( - 1, =
1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare=
( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\tte=
xture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp )=
 +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texel=
Size.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + off=
set.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeTo=
UV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeT=
oUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( sh=
adowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttextur=
e2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n=
\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize=
.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DComp=
are( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#end=
if",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOW=
S &gt; 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ]=
;\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\t=
struct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shado=
wNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\=
n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_=
SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\t\tuniform mat4=
 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowC=
oord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat =
shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t=
\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows=
[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS &gt; 0=
\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvaryi=
ng vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLigh=
tShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfl=
oat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;=
\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointL=
ightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex=
:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS &gt; 0 || NUM_SPOT_LIGH=
T_SHADOWS &gt; 0 || NUM_POINT_LIGHT_SHADOWS &gt; 0\n\t\tvec3 shadowWorldNor=
mal =3D inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tve=
c4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS &gt; 0\n\t#p=
ragma unroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_DIR_LIGHT_SHADOWS;=
 i ++ ) {\n\t\tshadowWorldPosition =3D worldPosition + vec4( shadowWorldNor=
mal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectional=
ShadowCoord[ i ] =3D directionalShadowMatrix[ i ] * shadowWorldPosition;\n\=
t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS &gt; =
0\n\t#pragma unroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_SPOT_LIGHT_=
SHADOWS; i ++ ) {\n\t\tshadowWorldPosition =3D worldPosition + vec4( shadow=
WorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadow=
Coord[ i ] =3D spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma=
 unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS &gt; 0\n\t#pragma=
 unroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_POINT_LIGHT_SHADOWS; i =
++ ) {\n\t\tshadowWorldPosition =3D worldPosition + vec4( shadowWorldNormal=
 * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i =
] =3D pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_=
loop_end\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask()=
 {\n\tfloat shadow =3D 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SH=
ADOWS &gt; 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_=
loop_start\n\tfor ( int i =3D 0; i &lt; NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t=
\tdirectionalLight =3D directionalLightShadows[ i ];\n\t\tshadow *=3D recei=
veShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMap=
Size, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectio=
nalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#=
if NUM_SPOT_LIGHT_SHADOWS &gt; 0\n\tSpotLightShadow spotLight;\n\t#pragma u=
nroll_loop_start\n\tfor ( int i =3D 0; i &lt; NUM_SPOT_LIGHT_SHADOWS; i ++ =
) {\n\t\tspotLight =3D spotLightShadows[ i ];\n\t\tshadow *=3D receiveShado=
w ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shado=
wBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#prag=
ma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS &gt; 0\n\tPoint=
LightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i =3D 0; =
i &lt; NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight =3D pointLightShad=
ows[ i ];\n\t\tshadow *=3D receiveShadow ? getPointShadow( pointShadowMap[ =
i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadi=
us, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowC=
ameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\tre=
turn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX =3D =
getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY =3D getBoneMatrix( skinIndex=
.y );\n\tmat4 boneMatZ =3D getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW =
=3D getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE=
_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\=
t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform=
 int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\t=
float j =3D i * 4.0;\n\t\t\tfloat x =3D mod( j, float( boneTextureSize ) );=
\n\t\t\tfloat y =3D floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx =
=3D 1.0 / float( boneTextureSize );\n\t\t\tfloat dy =3D 1.0 / float( boneTe=
xtureSize );\n\t\t\ty =3D dy * ( y + 0.5 );\n\t\t\tvec4 v1 =3D texture2D( b=
oneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 =3D texture2D( bo=
neTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 =3D texture2D( bon=
eTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 =3D texture2D( bone=
Texture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone =3D mat4( v1, v2, =
v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrice=
s[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 b=
one =3D boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endi=
f",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex =3D bindMatrix *=
 vec4( transformed, 1.0 );\n\tvec4 skinned =3D vec4( 0.0 );\n\tskinned +=3D=
 boneMatX * skinVertex * skinWeight.x;\n\tskinned +=3D boneMatY * skinVerte=
x * skinWeight.y;\n\tskinned +=3D boneMatZ * skinVertex * skinWeight.z;\n\t=
skinned +=3D boneMatW * skinVertex * skinWeight.w;\n\ttransformed =3D ( bin=
dMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKIN=
NING\n\tmat4 skinMatrix =3D mat4( 0.0 );\n\tskinMatrix +=3D skinWeight.x * =
boneMatX;\n\tskinMatrix +=3D skinWeight.y * boneMatY;\n\tskinMatrix +=3D sk=
inWeight.z * boneMatZ;\n\tskinMatrix +=3D skinWeight.w * boneMatW;\n\tskinM=
atrix =3D bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal =3D =
vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n=
\t\tobjectTangent =3D vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\=
n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef US=
E_SPECULARMAP\n\tvec4 texelSpecular =3D texture2D( specularMap, vUv );\n\ts=
pecularStrength =3D texelSpecular.r;\n#else\n\tspecularStrength =3D 1.0;\n#=
endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler=
2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\=
n\tgl_FragColor.rgb =3D toneMapping( gl_FragColor.rgb );\n#endif",tonemappi=
ng_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 =
)\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3=
 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapp=
ing( vec3 color ) {\n\tcolor *=3D toneMappingExposure;\n\treturn saturate( =
color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec=
3 color ) {\n\tcolor *=3D toneMappingExposure;\n\tcolor =3D max( vec3( 0.0 =
), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( co=
lor * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit(=
 vec3 v ) {\n\tvec3 a =3D v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b =
=3D v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 =
ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat =3D mat3(\=
n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 =
),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat=
 =3D mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1=
.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolo=
r *=3D toneMappingExposure / 0.6;\n\tcolor =3D ACESInputMat * color;\n\tcol=
or =3D RRTAndODTFit( color );\n\tcolor =3D ACESOutputMat * color;\n\treturn=
 saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color=
; }",transmissionmap_fragment:"#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmiss=
ion *=3D texture2D( transmissionMap, vUv ).r;\n#endif",transmissionmap_pars=
_fragment:"#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;=
\n#endif",uv_pars_fragment:"#if ( defined( USE_UV ) &amp;&amp; ! defined( U=
VS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE=
_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv=
;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\=
n\tvUv =3D ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"=
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n=
#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP =
)\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform=
;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\=
n\tvUv2 =3D ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:=
"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMA=
P )\n\tvec4 worldPosition =3D vec4( transformed, 1.0 );\n\t#ifdef USE_INSTA=
NCING\n\t\tworldPosition =3D instanceMatrix * worldPosition;\n\t#endif\n\tw=
orldPosition =3D modelMatrix * worldPosition;\n#endif",background_frag:"uni=
form sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor =3D =
texture2D( t2D, vUv );\n\tgl_FragColor =3D mapTexelToLinear( texColor );\n\=
t#include &lt;tonemapping_fragment&gt;\n\t#include &lt;encodings_fragment&g=
t;\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid =
main() {\n\tvUv =3D ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position =3D =
vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include &lt;envmap_common_pa=
rs_fragment&gt;\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#in=
clude &lt;cube_uv_reflection_fragment&gt;\nvoid main() {\n\tvec3 vReflect =
=3D vWorldDirection;\n\t#include &lt;envmap_fragment&gt;\n\tgl_FragColor =
=3D envColor;\n\tgl_FragColor.a *=3D opacity;\n\t#include &lt;tonemapping_f=
ragment&gt;\n\t#include &lt;encodings_fragment&gt;\n}",cube_vert:"varying v=
ec3 vWorldDirection;\n#include &lt;common&gt;\nvoid main() {\n\tvWorldDirec=
tion =3D transformDirection( position, modelMatrix );\n\t#include &lt;begin=
_vertex&gt;\n\t#include &lt;project_vertex&gt;\n\tgl_Position.z =3D gl_Posi=
tion.w;\n}",depth_frag:"#if DEPTH_PACKING =3D=3D 3200\n\tuniform float opac=
ity;\n#endif\n#include &lt;common&gt;\n#include &lt;packing&gt;\n#include &=
lt;uv_pars_fragment&gt;\n#include &lt;map_pars_fragment&gt;\n#include &lt;a=
lphamap_pars_fragment&gt;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#inc=
lude &lt;clipping_planes_pars_fragment&gt;\nvarying vec2 vHighPrecisionZW;\=
nvoid main() {\n\t#include &lt;clipping_planes_fragment&gt;\n\tvec4 diffuse=
Color =3D vec4( 1.0 );\n\t#if DEPTH_PACKING =3D=3D 3200\n\t\tdiffuseColor.a=
 =3D opacity;\n\t#endif\n\t#include &lt;map_fragment&gt;\n\t#include &lt;al=
phamap_fragment&gt;\n\t#include &lt;alphatest_fragment&gt;\n\t#include &lt;=
logdepthbuf_fragment&gt;\n\tfloat fragCoordZ =3D 0.5 * vHighPrecisionZW[0] =
/ vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING =3D=3D 3200\n\t\tgl_FragC=
olor =3D vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING =
=3D=3D 3201\n\t\tgl_FragColor =3D packDepthToRGBA( fragCoordZ );\n\t#endif\=
n}",depth_vert:"#include &lt;common&gt;\n#include &lt;uv_pars_vertex&gt;\n#=
include &lt;displacementmap_pars_vertex&gt;\n#include &lt;morphtarget_pars_=
vertex&gt;\n#include &lt;skinning_pars_vertex&gt;\n#include &lt;logdepthbuf=
_pars_vertex&gt;\n#include &lt;clipping_planes_pars_vertex&gt;\nvarying vec=
2 vHighPrecisionZW;\nvoid main() {\n\t#include &lt;uv_vertex&gt;\n\t#includ=
e &lt;skinbase_vertex&gt;\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include &lt;b=
eginnormal_vertex&gt;\n\t\t#include &lt;morphnormal_vertex&gt;\n\t\t#includ=
e &lt;skinnormal_vertex&gt;\n\t#endif\n\t#include &lt;begin_vertex&gt;\n\t#=
include &lt;morphtarget_vertex&gt;\n\t#include &lt;skinning_vertex&gt;\n\t#=
include &lt;displacementmap_vertex&gt;\n\t#include &lt;project_vertex&gt;\n=
\t#include &lt;logdepthbuf_vertex&gt;\n\t#include &lt;clipping_planes_verte=
x&gt;\n\tvHighPrecisionZW =3D gl_Position.zw;\n}",distanceRGBA_frag:"#defin=
e DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nu=
niform float farDistance;\nvarying vec3 vWorldPosition;\n#include &lt;commo=
n&gt;\n#include &lt;packing&gt;\n#include &lt;uv_pars_fragment&gt;\n#includ=
e &lt;map_pars_fragment&gt;\n#include &lt;alphamap_pars_fragment&gt;\n#incl=
ude &lt;clipping_planes_pars_fragment&gt;\nvoid main () {\n\t#include &lt;c=
lipping_planes_fragment&gt;\n\tvec4 diffuseColor =3D vec4( 1.0 );\n\t#inclu=
de &lt;map_fragment&gt;\n\t#include &lt;alphamap_fragment&gt;\n\t#include &=
lt;alphatest_fragment&gt;\n\tfloat dist =3D length( vWorldPosition - refere=
ncePosition );\n\tdist =3D ( dist - nearDistance ) / ( farDistance - nearDi=
stance );\n\tdist =3D saturate( dist );\n\tgl_FragColor =3D packDepthToRGBA=
( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosit=
ion;\n#include &lt;common&gt;\n#include &lt;uv_pars_vertex&gt;\n#include &l=
t;displacementmap_pars_vertex&gt;\n#include &lt;morphtarget_pars_vertex&gt;=
\n#include &lt;skinning_pars_vertex&gt;\n#include &lt;clipping_planes_pars_=
vertex&gt;\nvoid main() {\n\t#include &lt;uv_vertex&gt;\n\t#include &lt;ski=
nbase_vertex&gt;\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include &lt;beginnorma=
l_vertex&gt;\n\t\t#include &lt;morphnormal_vertex&gt;\n\t\t#include &lt;ski=
nnormal_vertex&gt;\n\t#endif\n\t#include &lt;begin_vertex&gt;\n\t#include &=
lt;morphtarget_vertex&gt;\n\t#include &lt;skinning_vertex&gt;\n\t#include &=
lt;displacementmap_vertex&gt;\n\t#include &lt;project_vertex&gt;\n\t#includ=
e &lt;worldpos_vertex&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n\tvWo=
rldPosition =3D worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEq=
uirect;\nvarying vec3 vWorldDirection;\n#include &lt;common&gt;\nvoid main(=
) {\n\tvec3 direction =3D normalize( vWorldDirection );\n\tvec2 sampleUV =
=3D equirectUv( direction );\n\tvec4 texColor =3D texture2D( tEquirect, sam=
pleUV );\n\tgl_FragColor =3D mapTexelToLinear( texColor );\n\t#include &lt;=
tonemapping_fragment&gt;\n\t#include &lt;encodings_fragment&gt;\n}",equirec=
t_vert:"varying vec3 vWorldDirection;\n#include &lt;common&gt;\nvoid main()=
 {\n\tvWorldDirection =3D transformDirection( position, modelMatrix );\n\t#=
include &lt;begin_vertex&gt;\n\t#include &lt;project_vertex&gt;\n}",linedas=
hed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dash=
Size;\nuniform float totalSize;\nvarying float vLineDistance;\n#include &lt=
;common&gt;\n#include &lt;color_pars_fragment&gt;\n#include &lt;fog_pars_fr=
agment&gt;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#include &lt;clippi=
ng_planes_pars_fragment&gt;\nvoid main() {\n\t#include &lt;clipping_planes_=
fragment&gt;\n\tif ( mod( vLineDistance, totalSize ) &gt; dashSize ) {\n\t\=
tdiscard;\n\t}\n\tvec3 outgoingLight =3D vec3( 0.0 );\n\tvec4 diffuseColor =
=3D vec4( diffuse, opacity );\n\t#include &lt;logdepthbuf_fragment&gt;\n\t#=
include &lt;color_fragment&gt;\n\toutgoingLight =3D diffuseColor.rgb;\n\tgl=
_FragColor =3D vec4( outgoingLight, diffuseColor.a );\n\t#include &lt;tonem=
apping_fragment&gt;\n\t#include &lt;encodings_fragment&gt;\n\t#include &lt;=
fog_fragment&gt;\n\t#include &lt;premultiplied_alpha_fragment&gt;\n}",lined=
ashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying fl=
oat vLineDistance;\n#include &lt;common&gt;\n#include &lt;color_pars_vertex=
&gt;\n#include &lt;fog_pars_vertex&gt;\n#include &lt;morphtarget_pars_verte=
x&gt;\n#include &lt;logdepthbuf_pars_vertex&gt;\n#include &lt;clipping_plan=
es_pars_vertex&gt;\nvoid main() {\n\tvLineDistance =3D scale * lineDistance=
;\n\t#include &lt;color_vertex&gt;\n\t#include &lt;begin_vertex&gt;\n\t#inc=
lude &lt;morphtarget_vertex&gt;\n\t#include &lt;project_vertex&gt;\n\t#incl=
ude &lt;logdepthbuf_vertex&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n=
\t#include &lt;fog_vertex&gt;\n}",meshbasic_frag:"uniform vec3 diffuse;\nun=
iform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\=
n#include &lt;common&gt;\n#include &lt;dithering_pars_fragment&gt;\n#includ=
e &lt;color_pars_fragment&gt;\n#include &lt;uv_pars_fragment&gt;\n#include =
&lt;uv2_pars_fragment&gt;\n#include &lt;map_pars_fragment&gt;\n#include &lt=
;alphamap_pars_fragment&gt;\n#include &lt;aomap_pars_fragment&gt;\n#include=
 &lt;lightmap_pars_fragment&gt;\n#include &lt;envmap_common_pars_fragment&g=
t;\n#include &lt;envmap_pars_fragment&gt;\n#include &lt;cube_uv_reflection_=
fragment&gt;\n#include &lt;fog_pars_fragment&gt;\n#include &lt;specularmap_=
pars_fragment&gt;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#include &lt=
;clipping_planes_pars_fragment&gt;\nvoid main() {\n\t#include &lt;clipping_=
planes_fragment&gt;\n\tvec4 diffuseColor =3D vec4( diffuse, opacity );\n\t#=
include &lt;logdepthbuf_fragment&gt;\n\t#include &lt;map_fragment&gt;\n\t#i=
nclude &lt;color_fragment&gt;\n\t#include &lt;alphamap_fragment&gt;\n\t#inc=
lude &lt;alphatest_fragment&gt;\n\t#include &lt;specularmap_fragment&gt;\n\=
tReflectedLight reflectedLight =3D ReflectedLight( vec3( 0.0 ), vec3( 0.0 )=
, vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMap=
Texel=3D texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse +=
=3D lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#els=
e\n\t\treflectedLight.indirectDiffuse +=3D vec3( 1.0 );\n\t#endif\n\t#inclu=
de &lt;aomap_fragment&gt;\n\treflectedLight.indirectDiffuse *=3D diffuseCol=
or.rgb;\n\tvec3 outgoingLight =3D reflectedLight.indirectDiffuse;\n\t#inclu=
de &lt;envmap_fragment&gt;\n\tgl_FragColor =3D vec4( outgoingLight, diffuse=
Color.a );\n\t#include &lt;tonemapping_fragment&gt;\n\t#include &lt;encodin=
gs_fragment&gt;\n\t#include &lt;fog_fragment&gt;\n\t#include &lt;premultipl=
ied_alpha_fragment&gt;\n\t#include &lt;dithering_fragment&gt;\n}",meshbasic=
_vert:"#include &lt;common&gt;\n#include &lt;uv_pars_vertex&gt;\n#include &=
lt;uv2_pars_vertex&gt;\n#include &lt;envmap_pars_vertex&gt;\n#include &lt;c=
olor_pars_vertex&gt;\n#include &lt;fog_pars_vertex&gt;\n#include &lt;morpht=
arget_pars_vertex&gt;\n#include &lt;skinning_pars_vertex&gt;\n#include &lt;=
logdepthbuf_pars_vertex&gt;\n#include &lt;clipping_planes_pars_vertex&gt;\n=
void main() {\n\t#include &lt;uv_vertex&gt;\n\t#include &lt;uv2_vertex&gt;\=
n\t#include &lt;color_vertex&gt;\n\t#include &lt;skinbase_vertex&gt;\n\t#if=
def USE_ENVMAP\n\t#include &lt;beginnormal_vertex&gt;\n\t#include &lt;morph=
normal_vertex&gt;\n\t#include &lt;skinnormal_vertex&gt;\n\t#include &lt;def=
aultnormal_vertex&gt;\n\t#endif\n\t#include &lt;begin_vertex&gt;\n\t#includ=
e &lt;morphtarget_vertex&gt;\n\t#include &lt;skinning_vertex&gt;\n\t#includ=
e &lt;project_vertex&gt;\n\t#include &lt;logdepthbuf_vertex&gt;\n\t#include=
 &lt;worldpos_vertex&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n\t#inc=
lude &lt;envmap_vertex&gt;\n\t#include &lt;fog_vertex&gt;\n}",meshlambert_f=
rag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\=
nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SID=
ED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#inc=
lude &lt;common&gt;\n#include &lt;packing&gt;\n#include &lt;dithering_pars_=
fragment&gt;\n#include &lt;color_pars_fragment&gt;\n#include &lt;uv_pars_fr=
agment&gt;\n#include &lt;uv2_pars_fragment&gt;\n#include &lt;map_pars_fragm=
ent&gt;\n#include &lt;alphamap_pars_fragment&gt;\n#include &lt;aomap_pars_f=
ragment&gt;\n#include &lt;lightmap_pars_fragment&gt;\n#include &lt;emissive=
map_pars_fragment&gt;\n#include &lt;envmap_common_pars_fragment&gt;\n#inclu=
de &lt;envmap_pars_fragment&gt;\n#include &lt;cube_uv_reflection_fragment&g=
t;\n#include &lt;bsdfs&gt;\n#include &lt;lights_pars_begin&gt;\n#include &l=
t;fog_pars_fragment&gt;\n#include &lt;shadowmap_pars_fragment&gt;\n#include=
 &lt;shadowmask_pars_fragment&gt;\n#include &lt;specularmap_pars_fragment&g=
t;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#include &lt;clipping_plane=
s_pars_fragment&gt;\nvoid main() {\n\t#include &lt;clipping_planes_fragment=
&gt;\n\tvec4 diffuseColor =3D vec4( diffuse, opacity );\n\tReflectedLight r=
eflectedLight =3D ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), ve=
c3( 0.0 ) );\n\tvec3 totalEmissiveRadiance =3D emissive;\n\t#include &lt;lo=
gdepthbuf_fragment&gt;\n\t#include &lt;map_fragment&gt;\n\t#include &lt;col=
or_fragment&gt;\n\t#include &lt;alphamap_fragment&gt;\n\t#include &lt;alpha=
test_fragment&gt;\n\t#include &lt;specularmap_fragment&gt;\n\t#include &lt;=
emissivemap_fragment&gt;\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirec=
tDiffuse +=3D ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else=
\n\t\treflectedLight.indirectDiffuse +=3D vIndirectFront;\n\t#endif\n\t#inc=
lude &lt;lightmap_fragment&gt;\n\treflectedLight.indirectDiffuse *=3D BRDF_=
Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedL=
ight.directDiffuse =3D ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#e=
lse\n\t\treflectedLight.directDiffuse =3D vLightFront;\n\t#endif\n\treflect=
edLight.directDiffuse *=3D BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getSh=
adowMask();\n\t#include &lt;aomap_fragment&gt;\n\tvec3 outgoingLight =3D re=
flectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissive=
Radiance;\n\t#include &lt;envmap_fragment&gt;\n\tgl_FragColor =3D vec4( out=
goingLight, diffuseColor.a );\n\t#include &lt;tonemapping_fragment&gt;\n\t#=
include &lt;encodings_fragment&gt;\n\t#include &lt;fog_fragment&gt;\n\t#inc=
lude &lt;premultiplied_alpha_fragment&gt;\n\t#include &lt;dithering_fragmen=
t&gt;\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvar=
ying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\=
n\tvarying vec3 vIndirectBack;\n#endif\n#include &lt;common&gt;\n#include &=
lt;uv_pars_vertex&gt;\n#include &lt;uv2_pars_vertex&gt;\n#include &lt;envma=
p_pars_vertex&gt;\n#include &lt;bsdfs&gt;\n#include &lt;lights_pars_begin&g=
t;\n#include &lt;color_pars_vertex&gt;\n#include &lt;fog_pars_vertex&gt;\n#=
include &lt;morphtarget_pars_vertex&gt;\n#include &lt;skinning_pars_vertex&=
gt;\n#include &lt;shadowmap_pars_vertex&gt;\n#include &lt;logdepthbuf_pars_=
vertex&gt;\n#include &lt;clipping_planes_pars_vertex&gt;\nvoid main() {\n\t=
#include &lt;uv_vertex&gt;\n\t#include &lt;uv2_vertex&gt;\n\t#include &lt;c=
olor_vertex&gt;\n\t#include &lt;beginnormal_vertex&gt;\n\t#include &lt;morp=
hnormal_vertex&gt;\n\t#include &lt;skinbase_vertex&gt;\n\t#include &lt;skin=
normal_vertex&gt;\n\t#include &lt;defaultnormal_vertex&gt;\n\t#include &lt;=
begin_vertex&gt;\n\t#include &lt;morphtarget_vertex&gt;\n\t#include &lt;ski=
nning_vertex&gt;\n\t#include &lt;project_vertex&gt;\n\t#include &lt;logdept=
hbuf_vertex&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n\t#include &lt;=
worldpos_vertex&gt;\n\t#include &lt;envmap_vertex&gt;\n\t#include &lt;light=
s_lambert_vertex&gt;\n\t#include &lt;shadowmap_vertex&gt;\n\t#include &lt;f=
og_vertex&gt;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nu=
niform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPositio=
n;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include &lt;comm=
on&gt;\n#include &lt;dithering_pars_fragment&gt;\n#include &lt;color_pars_f=
ragment&gt;\n#include &lt;uv_pars_fragment&gt;\n#include &lt;map_pars_fragm=
ent&gt;\n#include &lt;alphamap_pars_fragment&gt;\n#include &lt;fog_pars_fra=
gment&gt;\n#include &lt;bumpmap_pars_fragment&gt;\n#include &lt;normalmap_p=
ars_fragment&gt;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#include &lt;=
clipping_planes_pars_fragment&gt;\nvoid main() {\n\t#include &lt;clipping_p=
lanes_fragment&gt;\n\tvec4 diffuseColor =3D vec4( diffuse, opacity );\n\t#i=
nclude &lt;logdepthbuf_fragment&gt;\n\t#include &lt;map_fragment&gt;\n\t#in=
clude &lt;color_fragment&gt;\n\t#include &lt;alphamap_fragment&gt;\n\t#incl=
ude &lt;alphatest_fragment&gt;\n\t#include &lt;normal_fragment_begin&gt;\n\=
t#include &lt;normal_fragment_maps&gt;\n\tvec3 viewDir =3D normalize( vView=
Position );\n\tvec3 x =3D normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );=
\n\tvec3 y =3D cross( viewDir, x );\n\tvec2 uv =3D vec2( dot( x, normal ), =
dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColo=
r =3D texture2D( matcap, uv );\n\t\tmatcapColor =3D matcapTexelToLinear( ma=
tcapColor );\n\t#else\n\t\tvec4 matcapColor =3D vec4( 1.0 );\n\t#endif\n\tv=
ec3 outgoingLight =3D diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor =
=3D vec4( outgoingLight, diffuseColor.a );\n\t#include &lt;tonemapping_frag=
ment&gt;\n\t#include &lt;encodings_fragment&gt;\n\t#include &lt;fog_fragmen=
t&gt;\n\t#include &lt;premultiplied_alpha_fragment&gt;\n\t#include &lt;dith=
ering_fragment&gt;\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewP=
osition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include &l=
t;common&gt;\n#include &lt;uv_pars_vertex&gt;\n#include &lt;color_pars_vert=
ex&gt;\n#include &lt;displacementmap_pars_vertex&gt;\n#include &lt;fog_pars=
_vertex&gt;\n#include &lt;morphtarget_pars_vertex&gt;\n#include &lt;skinnin=
g_pars_vertex&gt;\n#include &lt;logdepthbuf_pars_vertex&gt;\n#include &lt;c=
lipping_planes_pars_vertex&gt;\nvoid main() {\n\t#include &lt;uv_vertex&gt;=
\n\t#include &lt;color_vertex&gt;\n\t#include &lt;beginnormal_vertex&gt;\n\=
t#include &lt;morphnormal_vertex&gt;\n\t#include &lt;skinbase_vertex&gt;\n\=
t#include &lt;skinnormal_vertex&gt;\n\t#include &lt;defaultnormal_vertex&gt=
;\n\t#ifndef FLAT_SHADED\n\t\tvNormal =3D normalize( transformedNormal );\n=
\t#endif\n\t#include &lt;begin_vertex&gt;\n\t#include &lt;morphtarget_verte=
x&gt;\n\t#include &lt;skinning_vertex&gt;\n\t#include &lt;displacementmap_v=
ertex&gt;\n\t#include &lt;project_vertex&gt;\n\t#include &lt;logdepthbuf_ve=
rtex&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n\t#include &lt;fog_ver=
tex&gt;\n\tvViewPosition =3D - mvPosition.xyz;\n}",meshtoon_frag:"#define T=
OON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\=
n#include &lt;common&gt;\n#include &lt;packing&gt;\n#include &lt;dithering_=
pars_fragment&gt;\n#include &lt;color_pars_fragment&gt;\n#include &lt;uv_pa=
rs_fragment&gt;\n#include &lt;uv2_pars_fragment&gt;\n#include &lt;map_pars_=
fragment&gt;\n#include &lt;alphamap_pars_fragment&gt;\n#include &lt;aomap_p=
ars_fragment&gt;\n#include &lt;lightmap_pars_fragment&gt;\n#include &lt;emi=
ssivemap_pars_fragment&gt;\n#include &lt;gradientmap_pars_fragment&gt;\n#in=
clude &lt;fog_pars_fragment&gt;\n#include &lt;bsdfs&gt;\n#include &lt;light=
s_pars_begin&gt;\n#include &lt;lights_toon_pars_fragment&gt;\n#include &lt;=
shadowmap_pars_fragment&gt;\n#include &lt;bumpmap_pars_fragment&gt;\n#inclu=
de &lt;normalmap_pars_fragment&gt;\n#include &lt;logdepthbuf_pars_fragment&=
gt;\n#include &lt;clipping_planes_pars_fragment&gt;\nvoid main() {\n\t#incl=
ude &lt;clipping_planes_fragment&gt;\n\tvec4 diffuseColor =3D vec4( diffuse=
, opacity );\n\tReflectedLight reflectedLight =3D ReflectedLight( vec3( 0.0=
 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance =
=3D emissive;\n\t#include &lt;logdepthbuf_fragment&gt;\n\t#include &lt;map_=
fragment&gt;\n\t#include &lt;color_fragment&gt;\n\t#include &lt;alphamap_fr=
agment&gt;\n\t#include &lt;alphatest_fragment&gt;\n\t#include &lt;normal_fr=
agment_begin&gt;\n\t#include &lt;normal_fragment_maps&gt;\n\t#include &lt;e=
missivemap_fragment&gt;\n\t#include &lt;lights_toon_fragment&gt;\n\t#includ=
e &lt;lights_fragment_begin&gt;\n\t#include &lt;lights_fragment_maps&gt;\n\=
t#include &lt;lights_fragment_end&gt;\n\t#include &lt;aomap_fragment&gt;\n\=
tvec3 outgoingLight =3D reflectedLight.directDiffuse + reflectedLight.indir=
ectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor =3D vec4( outgoingLight=
, diffuseColor.a );\n\t#include &lt;tonemapping_fragment&gt;\n\t#include &l=
t;encodings_fragment&gt;\n\t#include &lt;fog_fragment&gt;\n\t#include &lt;p=
remultiplied_alpha_fragment&gt;\n\t#include &lt;dithering_fragment&gt;\n}",=
meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHAD=
ED\n\tvarying vec3 vNormal;\n#endif\n#include &lt;common&gt;\n#include &lt;=
uv_pars_vertex&gt;\n#include &lt;uv2_pars_vertex&gt;\n#include &lt;displace=
mentmap_pars_vertex&gt;\n#include &lt;color_pars_vertex&gt;\n#include &lt;f=
og_pars_vertex&gt;\n#include &lt;morphtarget_pars_vertex&gt;\n#include &lt;=
skinning_pars_vertex&gt;\n#include &lt;shadowmap_pars_vertex&gt;\n#include =
&lt;logdepthbuf_pars_vertex&gt;\n#include &lt;clipping_planes_pars_vertex&g=
t;\nvoid main() {\n\t#include &lt;uv_vertex&gt;\n\t#include &lt;uv2_vertex&=
gt;\n\t#include &lt;color_vertex&gt;\n\t#include &lt;beginnormal_vertex&gt;=
\n\t#include &lt;morphnormal_vertex&gt;\n\t#include &lt;skinbase_vertex&gt;=
\n\t#include &lt;skinnormal_vertex&gt;\n\t#include &lt;defaultnormal_vertex=
&gt;\n#ifndef FLAT_SHADED\n\tvNormal =3D normalize( transformedNormal );\n#=
endif\n\t#include &lt;begin_vertex&gt;\n\t#include &lt;morphtarget_vertex&g=
t;\n\t#include &lt;skinning_vertex&gt;\n\t#include &lt;displacementmap_vert=
ex&gt;\n\t#include &lt;project_vertex&gt;\n\t#include &lt;logdepthbuf_verte=
x&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n\tvViewPosition =3D - mvP=
osition.xyz;\n\t#include &lt;worldpos_vertex&gt;\n\t#include &lt;shadowmap_=
vertex&gt;\n\t#include &lt;fog_vertex&gt;\n}",meshphong_frag:"#define PHONG=
\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nun=
iform float shininess;\nuniform float opacity;\n#include &lt;common&gt;\n#i=
nclude &lt;packing&gt;\n#include &lt;dithering_pars_fragment&gt;\n#include =
&lt;color_pars_fragment&gt;\n#include &lt;uv_pars_fragment&gt;\n#include &l=
t;uv2_pars_fragment&gt;\n#include &lt;map_pars_fragment&gt;\n#include &lt;a=
lphamap_pars_fragment&gt;\n#include &lt;aomap_pars_fragment&gt;\n#include &=
lt;lightmap_pars_fragment&gt;\n#include &lt;emissivemap_pars_fragment&gt;\n=
#include &lt;envmap_common_pars_fragment&gt;\n#include &lt;envmap_pars_frag=
ment&gt;\n#include &lt;cube_uv_reflection_fragment&gt;\n#include &lt;fog_pa=
rs_fragment&gt;\n#include &lt;bsdfs&gt;\n#include &lt;lights_pars_begin&gt;=
\n#include &lt;lights_phong_pars_fragment&gt;\n#include &lt;shadowmap_pars_=
fragment&gt;\n#include &lt;bumpmap_pars_fragment&gt;\n#include &lt;normalma=
p_pars_fragment&gt;\n#include &lt;specularmap_pars_fragment&gt;\n#include &=
lt;logdepthbuf_pars_fragment&gt;\n#include &lt;clipping_planes_pars_fragmen=
t&gt;\nvoid main() {\n\t#include &lt;clipping_planes_fragment&gt;\n\tvec4 d=
iffuseColor =3D vec4( diffuse, opacity );\n\tReflectedLight reflectedLight =
=3D ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n=
\tvec3 totalEmissiveRadiance =3D emissive;\n\t#include &lt;logdepthbuf_frag=
ment&gt;\n\t#include &lt;map_fragment&gt;\n\t#include &lt;color_fragment&gt=
;\n\t#include &lt;alphamap_fragment&gt;\n\t#include &lt;alphatest_fragment&=
gt;\n\t#include &lt;specularmap_fragment&gt;\n\t#include &lt;normal_fragmen=
t_begin&gt;\n\t#include &lt;normal_fragment_maps&gt;\n\t#include &lt;emissi=
vemap_fragment&gt;\n\t#include &lt;lights_phong_fragment&gt;\n\t#include &l=
t;lights_fragment_begin&gt;\n\t#include &lt;lights_fragment_maps&gt;\n\t#in=
clude &lt;lights_fragment_end&gt;\n\t#include &lt;aomap_fragment&gt;\n\tvec=
3 outgoingLight =3D reflectedLight.directDiffuse + reflectedLight.indirectD=
iffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + =
totalEmissiveRadiance;\n\t#include &lt;envmap_fragment&gt;\n\tgl_FragColor =
=3D vec4( outgoingLight, diffuseColor.a );\n\t#include &lt;tonemapping_frag=
ment&gt;\n\t#include &lt;encodings_fragment&gt;\n\t#include &lt;fog_fragmen=
t&gt;\n\t#include &lt;premultiplied_alpha_fragment&gt;\n\t#include &lt;dith=
ering_fragment&gt;\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPos=
ition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include &lt;=
common&gt;\n#include &lt;uv_pars_vertex&gt;\n#include &lt;uv2_pars_vertex&g=
t;\n#include &lt;displacementmap_pars_vertex&gt;\n#include &lt;envmap_pars_=
vertex&gt;\n#include &lt;color_pars_vertex&gt;\n#include &lt;fog_pars_verte=
x&gt;\n#include &lt;morphtarget_pars_vertex&gt;\n#include &lt;skinning_pars=
_vertex&gt;\n#include &lt;shadowmap_pars_vertex&gt;\n#include &lt;logdepthb=
uf_pars_vertex&gt;\n#include &lt;clipping_planes_pars_vertex&gt;\nvoid main=
() {\n\t#include &lt;uv_vertex&gt;\n\t#include &lt;uv2_vertex&gt;\n\t#inclu=
de &lt;color_vertex&gt;\n\t#include &lt;beginnormal_vertex&gt;\n\t#include =
&lt;morphnormal_vertex&gt;\n\t#include &lt;skinbase_vertex&gt;\n\t#include =
&lt;skinnormal_vertex&gt;\n\t#include &lt;defaultnormal_vertex&gt;\n#ifndef=
 FLAT_SHADED\n\tvNormal =3D normalize( transformedNormal );\n#endif\n\t#inc=
lude &lt;begin_vertex&gt;\n\t#include &lt;morphtarget_vertex&gt;\n\t#includ=
e &lt;skinning_vertex&gt;\n\t#include &lt;displacementmap_vertex&gt;\n\t#in=
clude &lt;project_vertex&gt;\n\t#include &lt;logdepthbuf_vertex&gt;\n\t#inc=
lude &lt;clipping_planes_vertex&gt;\n\tvViewPosition =3D - mvPosition.xyz;\=
n\t#include &lt;worldpos_vertex&gt;\n\t#include &lt;envmap_vertex&gt;\n\t#i=
nclude &lt;shadowmap_vertex&gt;\n\t#include &lt;fog_vertex&gt;\n}",meshphys=
ical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#de=
fine CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nunif=
orm vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuni=
form float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#e=
ndif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CL=
EARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#=
endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewP=
osition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGEN=
T\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#end=
if\n#include &lt;common&gt;\n#include &lt;packing&gt;\n#include &lt;ditheri=
ng_pars_fragment&gt;\n#include &lt;color_pars_fragment&gt;\n#include &lt;uv=
_pars_fragment&gt;\n#include &lt;uv2_pars_fragment&gt;\n#include &lt;map_pa=
rs_fragment&gt;\n#include &lt;alphamap_pars_fragment&gt;\n#include &lt;aoma=
p_pars_fragment&gt;\n#include &lt;lightmap_pars_fragment&gt;\n#include &lt;=
emissivemap_pars_fragment&gt;\n#include &lt;transmissionmap_pars_fragment&g=
t;\n#include &lt;bsdfs&gt;\n#include &lt;cube_uv_reflection_fragment&gt;\n#=
include &lt;envmap_common_pars_fragment&gt;\n#include &lt;envmap_physical_p=
ars_fragment&gt;\n#include &lt;fog_pars_fragment&gt;\n#include &lt;lights_p=
ars_begin&gt;\n#include &lt;lights_physical_pars_fragment&gt;\n#include &lt=
;shadowmap_pars_fragment&gt;\n#include &lt;bumpmap_pars_fragment&gt;\n#incl=
ude &lt;normalmap_pars_fragment&gt;\n#include &lt;clearcoat_pars_fragment&g=
t;\n#include &lt;roughnessmap_pars_fragment&gt;\n#include &lt;metalnessmap_=
pars_fragment&gt;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#include &lt=
;clipping_planes_pars_fragment&gt;\nvoid main() {\n\t#include &lt;clipping_=
planes_fragment&gt;\n\tvec4 diffuseColor =3D vec4( diffuse, opacity );\n\tR=
eflectedLight reflectedLight =3D ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), =
vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance =3D emissive;\n\t=
#ifdef TRANSMISSION\n\t\tfloat totalTransmission =3D transmission;\n\t#endi=
f\n\t#include &lt;logdepthbuf_fragment&gt;\n\t#include &lt;map_fragment&gt;=
\n\t#include &lt;color_fragment&gt;\n\t#include &lt;alphamap_fragment&gt;\n=
\t#include &lt;alphatest_fragment&gt;\n\t#include &lt;roughnessmap_fragment=
&gt;\n\t#include &lt;metalnessmap_fragment&gt;\n\t#include &lt;normal_fragm=
ent_begin&gt;\n\t#include &lt;normal_fragment_maps&gt;\n\t#include &lt;clea=
rcoat_normal_fragment_begin&gt;\n\t#include &lt;clearcoat_normal_fragment_m=
aps&gt;\n\t#include &lt;emissivemap_fragment&gt;\n\t#include &lt;transmissi=
onmap_fragment&gt;\n\t#include &lt;lights_physical_fragment&gt;\n\t#include=
 &lt;lights_fragment_begin&gt;\n\t#include &lt;lights_fragment_maps&gt;\n\t=
#include &lt;lights_fragment_end&gt;\n\t#include &lt;aomap_fragment&gt;\n\t=
vec3 outgoingLight =3D reflectedLight.directDiffuse + reflectedLight.indire=
ctDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular=
 + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *=3D m=
ix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflected=
Light.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness =
);\n\t#endif\n\tgl_FragColor =3D vec4( outgoingLight, diffuseColor.a );\n\t=
#include &lt;tonemapping_fragment&gt;\n\t#include &lt;encodings_fragment&gt=
;\n\t#include &lt;fog_fragment&gt;\n\t#include &lt;premultiplied_alpha_frag=
ment&gt;\n\t#include &lt;dithering_fragment&gt;\n}",meshphysical_vert:"#def=
ine STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying v=
ec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying=
 vec3 vBitangent;\n\t#endif\n#endif\n#include &lt;common&gt;\n#include &lt;=
uv_pars_vertex&gt;\n#include &lt;uv2_pars_vertex&gt;\n#include &lt;displace=
mentmap_pars_vertex&gt;\n#include &lt;color_pars_vertex&gt;\n#include &lt;f=
og_pars_vertex&gt;\n#include &lt;morphtarget_pars_vertex&gt;\n#include &lt;=
skinning_pars_vertex&gt;\n#include &lt;shadowmap_pars_vertex&gt;\n#include =
&lt;logdepthbuf_pars_vertex&gt;\n#include &lt;clipping_planes_pars_vertex&g=
t;\nvoid main() {\n\t#include &lt;uv_vertex&gt;\n\t#include &lt;uv2_vertex&=
gt;\n\t#include &lt;color_vertex&gt;\n\t#include &lt;beginnormal_vertex&gt;=
\n\t#include &lt;morphnormal_vertex&gt;\n\t#include &lt;skinbase_vertex&gt;=
\n\t#include &lt;skinnormal_vertex&gt;\n\t#include &lt;defaultnormal_vertex=
&gt;\n#ifndef FLAT_SHADED\n\tvNormal =3D normalize( transformedNormal );\n\=
t#ifdef USE_TANGENT\n\t\tvTangent =3D normalize( transformedTangent );\n\t\=
tvBitangent =3D normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#en=
dif\n#endif\n\t#include &lt;begin_vertex&gt;\n\t#include &lt;morphtarget_ve=
rtex&gt;\n\t#include &lt;skinning_vertex&gt;\n\t#include &lt;displacementma=
p_vertex&gt;\n\t#include &lt;project_vertex&gt;\n\t#include &lt;logdepthbuf=
_vertex&gt;\n\t#include &lt;clipping_planes_vertex&gt;\n\tvViewPosition =3D=
 - mvPosition.xyz;\n\t#include &lt;worldpos_vertex&gt;\n\t#include &lt;shad=
owmap_vertex&gt;\n\t#include &lt;fog_vertex&gt;\n}",normal_frag:"#define NO=
RMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BU=
MPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;=
\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGEN=
T\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#end=
if\n#include &lt;packing&gt;\n#include &lt;uv_pars_fragment&gt;\n#include &=
lt;bumpmap_pars_fragment&gt;\n#include &lt;normalmap_pars_fragment&gt;\n#in=
clude &lt;logdepthbuf_pars_fragment&gt;\n#include &lt;clipping_planes_pars_=
fragment&gt;\nvoid main() {\n\t#include &lt;clipping_planes_fragment&gt;\n\=
t#include &lt;logdepthbuf_fragment&gt;\n\t#include &lt;normal_fragment_begi=
n&gt;\n\t#include &lt;normal_fragment_maps&gt;\n\tgl_FragColor =3D vec4( pa=
ckNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if de=
fined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NOR=
MALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvar=
ying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tv=
arying vec3 vBitangent;\n\t#endif\n#endif\n#include &lt;common&gt;\n#includ=
e &lt;uv_pars_vertex&gt;\n#include &lt;displacementmap_pars_vertex&gt;\n#in=
clude &lt;morphtarget_pars_vertex&gt;\n#include &lt;skinning_pars_vertex&gt=
;\n#include &lt;logdepthbuf_pars_vertex&gt;\n#include &lt;clipping_planes_p=
ars_vertex&gt;\nvoid main() {\n\t#include &lt;uv_vertex&gt;\n\t#include &lt=
;beginnormal_vertex&gt;\n\t#include &lt;morphnormal_vertex&gt;\n\t#include =
&lt;skinbase_vertex&gt;\n\t#include &lt;skinnormal_vertex&gt;\n\t#include &=
lt;defaultnormal_vertex&gt;\n#ifndef FLAT_SHADED\n\tvNormal =3D normalize( =
transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent =3D normalize( tra=
nsformedTangent );\n\t\tvBitangent =3D normalize( cross( vNormal, vTangent =
) * tangent.w );\n\t#endif\n#endif\n\t#include &lt;begin_vertex&gt;\n\t#inc=
lude &lt;morphtarget_vertex&gt;\n\t#include &lt;skinning_vertex&gt;\n\t#inc=
lude &lt;displacementmap_vertex&gt;\n\t#include &lt;project_vertex&gt;\n\t#=
include &lt;logdepthbuf_vertex&gt;\n\t#include &lt;clipping_planes_vertex&g=
t;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGEN=
TSPACE_NORMALMAP )\n\tvViewPosition =3D - mvPosition.xyz;\n#endif\n}",point=
s_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include &lt;common&=
gt;\n#include &lt;color_pars_fragment&gt;\n#include &lt;map_particle_pars_f=
ragment&gt;\n#include &lt;fog_pars_fragment&gt;\n#include &lt;logdepthbuf_p=
ars_fragment&gt;\n#include &lt;clipping_planes_pars_fragment&gt;\nvoid main=
() {\n\t#include &lt;clipping_planes_fragment&gt;\n\tvec3 outgoingLight =3D=
 vec3( 0.0 );\n\tvec4 diffuseColor =3D vec4( diffuse, opacity );\n\t#includ=
e &lt;logdepthbuf_fragment&gt;\n\t#include &lt;map_particle_fragment&gt;\n\=
t#include &lt;color_fragment&gt;\n\t#include &lt;alphatest_fragment&gt;\n\t=
outgoingLight =3D diffuseColor.rgb;\n\tgl_FragColor =3D vec4( outgoingLight=
, diffuseColor.a );\n\t#include &lt;tonemapping_fragment&gt;\n\t#include &l=
t;encodings_fragment&gt;\n\t#include &lt;fog_fragment&gt;\n\t#include &lt;p=
remultiplied_alpha_fragment&gt;\n}",points_vert:"uniform float size;\nunifo=
rm float scale;\n#include &lt;common&gt;\n#include &lt;color_pars_vertex&gt=
;\n#include &lt;fog_pars_vertex&gt;\n#include &lt;morphtarget_pars_vertex&g=
t;\n#include &lt;logdepthbuf_pars_vertex&gt;\n#include &lt;clipping_planes_=
pars_vertex&gt;\nvoid main() {\n\t#include &lt;color_vertex&gt;\n\t#include=
 &lt;begin_vertex&gt;\n\t#include &lt;morphtarget_vertex&gt;\n\t#include &l=
t;project_vertex&gt;\n\tgl_PointSize =3D size;\n\t#ifdef USE_SIZEATTENUATIO=
N\n\t\tbool isPerspective =3D isPerspectiveMatrix( projectionMatrix );\n\t\=
tif ( isPerspective ) gl_PointSize *=3D ( scale / - mvPosition.z );\n\t#end=
if\n\t#include &lt;logdepthbuf_vertex&gt;\n\t#include &lt;clipping_planes_v=
ertex&gt;\n\t#include &lt;worldpos_vertex&gt;\n\t#include &lt;fog_vertex&gt=
;\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include &l=
t;common&gt;\n#include &lt;packing&gt;\n#include &lt;fog_pars_fragment&gt;\=
n#include &lt;bsdfs&gt;\n#include &lt;lights_pars_begin&gt;\n#include &lt;s=
hadowmap_pars_fragment&gt;\n#include &lt;shadowmask_pars_fragment&gt;\nvoid=
 main() {\n\tgl_FragColor =3D vec4( color, opacity * ( 1.0 - getShadowMask(=
) ) );\n\t#include &lt;tonemapping_fragment&gt;\n\t#include &lt;encodings_f=
ragment&gt;\n\t#include &lt;fog_fragment&gt;\n}",shadow_vert:"#include &lt;=
common&gt;\n#include &lt;fog_pars_vertex&gt;\n#include &lt;shadowmap_pars_v=
ertex&gt;\nvoid main() {\n\t#include &lt;begin_vertex&gt;\n\t#include &lt;p=
roject_vertex&gt;\n\t#include &lt;worldpos_vertex&gt;\n\t#include &lt;begin=
normal_vertex&gt;\n\t#include &lt;morphnormal_vertex&gt;\n\t#include &lt;sk=
inbase_vertex&gt;\n\t#include &lt;skinnormal_vertex&gt;\n\t#include &lt;def=
aultnormal_vertex&gt;\n\t#include &lt;shadowmap_vertex&gt;\n\t#include &lt;=
fog_vertex&gt;\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacit=
y;\n#include &lt;common&gt;\n#include &lt;uv_pars_fragment&gt;\n#include &l=
t;map_pars_fragment&gt;\n#include &lt;alphamap_pars_fragment&gt;\n#include =
&lt;fog_pars_fragment&gt;\n#include &lt;logdepthbuf_pars_fragment&gt;\n#inc=
lude &lt;clipping_planes_pars_fragment&gt;\nvoid main() {\n\t#include &lt;c=
lipping_planes_fragment&gt;\n\tvec3 outgoingLight =3D vec3( 0.0 );\n\tvec4 =
diffuseColor =3D vec4( diffuse, opacity );\n\t#include &lt;logdepthbuf_frag=
ment&gt;\n\t#include &lt;map_fragment&gt;\n\t#include &lt;alphamap_fragment=
&gt;\n\t#include &lt;alphatest_fragment&gt;\n\toutgoingLight =3D diffuseCol=
or.rgb;\n\tgl_FragColor =3D vec4( outgoingLight, diffuseColor.a );\n\t#incl=
ude &lt;tonemapping_fragment&gt;\n\t#include &lt;encodings_fragment&gt;\n\t=
#include &lt;fog_fragment&gt;\n}",sprite_vert:"uniform float rotation;\nuni=
form vec2 center;\n#include &lt;common&gt;\n#include &lt;uv_pars_vertex&gt;=
\n#include &lt;fog_pars_vertex&gt;\n#include &lt;logdepthbuf_pars_vertex&gt=
;\n#include &lt;clipping_planes_pars_vertex&gt;\nvoid main() {\n\t#include =
&lt;uv_vertex&gt;\n\tvec4 mvPosition =3D modelViewMatrix * vec4( 0.0, 0.0, =
0.0, 1.0 );\n\tvec2 scale;\n\tscale.x =3D length( vec3( modelMatrix[ 0 ].x,=
 modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y =3D length( vec3( m=
odelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef U=
SE_SIZEATTENUATION\n\t\tbool isPerspective =3D isPerspectiveMatrix( project=
ionMatrix );\n\t\tif ( isPerspective ) scale *=3D - mvPosition.z;\n\t#endif=
\n\tvec2 alignedPosition =3D ( position.xy - ( center - vec2( 0.5 ) ) ) * s=
cale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x =3D cos( rotation ) * a=
lignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.=
y =3D sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPositi=
on.y;\n\tmvPosition.xy +=3D rotatedPosition;\n\tgl_Position =3D projectionM=
atrix * mvPosition;\n\t#include &lt;logdepthbuf_vertex&gt;\n\t#include &lt;=
clipping_planes_vertex&gt;\n\t#include &lt;fog_vertex&gt;\n}"},ui=3D{common=
:{diffuse:{value:new tn(15658734)},opacity:{value:1},map:{value:null},uvTra=
nsform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null}},sp=
ecularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap=
:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:=
{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{li=
ghtMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{=
value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{=
normalMap:{value:null},normalScale:{value:new vt(1,1)}},displacementmap:{di=
splacementMap:{value:null},displacementScale:{value:1},displacementBias:{va=
lue:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap=
:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{valu=
e:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tn(167772=
15)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directiona=
lLights:{value:[],properties:{direction:{},color:{}}},directionalLightShado=
ws:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},=
shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:=
{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:=
{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value=
:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMap=
Size:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:=
{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLigh=
tShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadi=
us:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadow=
Map:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],prop=
erties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],=
properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},lt=
c_2:{value:null}},points:{diffuse:{value:new tn(15658734)},opacity:{value:1=
},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvT=
ransform:{value:new yt}},sprite:{diffuse:{value:new tn(15658734)},opacity:{=
value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},a=
lphaMap:{value:null},uvTransform:{value:new yt}}},di=3D{basic:{uniforms:Yn(=
[ui.common,ui.specularmap,ui.envmap,ui.aomap,ui.lightmap,ui.fog]),vertexSha=
der:hi.meshbasic_vert,fragmentShader:hi.meshbasic_frag},lambert:{uniforms:Y=
n([ui.common,ui.specularmap,ui.envmap,ui.aomap,ui.lightmap,ui.emissivemap,u=
i.fog,ui.lights,{emissive:{value:new tn(0)}}]),vertexShader:hi.meshlambert_=
vert,fragmentShader:hi.meshlambert_frag},phong:{uniforms:Yn([ui.common,ui.s=
pecularmap,ui.envmap,ui.aomap,ui.lightmap,ui.emissivemap,ui.bumpmap,ui.norm=
almap,ui.displacementmap,ui.fog,ui.lights,{emissive:{value:new tn(0)},specu=
lar:{value:new tn(1118481)},shininess:{value:30}}]),vertexShader:hi.meshpho=
ng_vert,fragmentShader:hi.meshphong_frag},standard:{uniforms:Yn([ui.common,=
ui.envmap,ui.aomap,ui.lightmap,ui.emissivemap,ui.bumpmap,ui.normalmap,ui.di=
splacementmap,ui.roughnessmap,ui.metalnessmap,ui.fog,ui.lights,{emissive:{v=
alue:new tn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{va=
lue:1}}]),vertexShader:hi.meshphysical_vert,fragmentShader:hi.meshphysical_=
frag},toon:{uniforms:Yn([ui.common,ui.aomap,ui.lightmap,ui.emissivemap,ui.b=
umpmap,ui.normalmap,ui.displacementmap,ui.gradientmap,ui.fog,ui.lights,{emi=
ssive:{value:new tn(0)}}]),vertexShader:hi.meshtoon_vert,fragmentShader:hi.=
meshtoon_frag},matcap:{uniforms:Yn([ui.common,ui.bumpmap,ui.normalmap,ui.di=
splacementmap,ui.fog,{matcap:{value:null}}]),vertexShader:hi.meshmatcap_ver=
t,fragmentShader:hi.meshmatcap_frag},points:{uniforms:Yn([ui.points,ui.fog]=
),vertexShader:hi.points_vert,fragmentShader:hi.points_frag},dashed:{unifor=
ms:Yn([ui.common,ui.fog,{scale:{value:1},dashSize:{value:1},totalSize:{valu=
e:2}}]),vertexShader:hi.linedashed_vert,fragmentShader:hi.linedashed_frag},=
depth:{uniforms:Yn([ui.common,ui.displacementmap]),vertexShader:hi.depth_ve=
rt,fragmentShader:hi.depth_frag},normal:{uniforms:Yn([ui.common,ui.bumpmap,=
ui.normalmap,ui.displacementmap,{opacity:{value:1}}]),vertexShader:hi.norma=
l_vert,fragmentShader:hi.normal_frag},sprite:{uniforms:Yn([ui.sprite,ui.fog=
]),vertexShader:hi.sprite_vert,fragmentShader:hi.sprite_frag},background:{u=
niforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:hi.backg=
round_vert,fragmentShader:hi.background_frag},cube:{uniforms:Yn([ui.envmap,=
{opacity:{value:1}}]),vertexShader:hi.cube_vert,fragmentShader:hi.cube_frag=
},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:hi.equirect_vert=
,fragmentShader:hi.equirect_frag},distanceRGBA:{uniforms:Yn([ui.common,ui.d=
isplacementmap,{referencePosition:{value:new Lt},nearDistance:{value:1},far=
Distance:{value:1e3}}]),vertexShader:hi.distanceRGBA_vert,fragmentShader:hi=
.distanceRGBA_frag},shadow:{uniforms:Yn([ui.lights,ui.fog,{color:{value:new=
 tn(0)},opacity:{value:1}}]),vertexShader:hi.shadow_vert,fragmentShader:hi.=
shadow_frag}};function pi(t,e,n,i,r){const s=3Dnew tn(0);let a,o,c=3D0,h=3D=
null,u=3D0,d=3Dnull;function p(t,e){n.buffers.color.setClear(t.r,t.g,t.b,e,=
r)}return{getClearColor:function(){return s},setClearColor:function(t,e=3D1=
){s.set(t),c=3De,p(s,c)},getClearAlpha:function(){return c},setClearAlpha:f=
unction(t){c=3Dt,p(s,c)},render:function(n,r,m,f){let g=3D!0=3D=3D=3Dr.isSc=
ene?r.background:null;g&amp;&amp;g.isTexture&amp;&amp;(g=3De.get(g));const =
v=3Dt.xr,y=3Dv.getSession&amp;&amp;v.getSession();y&amp;&amp;"additive"=3D=
=3D=3Dy.environmentBlendMode&amp;&amp;(g=3Dnull),null=3D=3D=3Dg?p(s,c):g&am=
p;&amp;g.isColor&amp;&amp;(p(g,1),f=3D!0),(t.autoClear||f)&amp;&amp;t.clear=
(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&amp;&amp;(g.isCube=
Texture||g.mapping=3D=3D=3Dl)?(void 0=3D=3D=3Do&amp;&amp;(o=3Dnew Wn(new qn=
(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Xn(di.cube.uniforms)=
,vertexShader:di.cube.vertexShader,fragmentShader:di.cube.fragmentShader,si=
de:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("norma=
l"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=3Dfunction(t,e,n){thi=
s.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(o.material=
,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o))=
,o.material.uniforms.envMap.value=3Dg,o.material.uniforms.flipEnvMap.value=
=3Dg.isCubeTexture&amp;&amp;g._needsFlipEnvMap?-1:1,h=3D=3D=3Dg&amp;&amp;u=
=3D=3D=3Dg.version&amp;&amp;d=3D=3D=3Dt.toneMapping||(o.material.needsUpdat=
e=3D!0,h=3Dg,u=3Dg.version,d=3Dt.toneMapping),n.unshift(o,o.geometry,o.mate=
rial,0,0,null)):g&amp;&amp;g.isTexture&amp;&amp;(void 0=3D=3D=3Da&amp;&amp;=
(a=3Dnew Wn(new ci(2,2),new Jn({name:"BackgroundMaterial",uniforms:Xn(di.ba=
ckground.uniforms),vertexShader:di.background.vertexShader,fragmentShader:d=
i.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.g=
eometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{g=
et:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uni=
forms.t2D.value=3Dg,!0=3D=3D=3Dg.matrixAutoUpdate&amp;&amp;g.updateMatrix()=
,a.material.uniforms.uvTransform.value.copy(g.matrix),h=3D=3D=3Dg&amp;&amp;=
u=3D=3D=3Dg.version&amp;&amp;d=3D=3D=3Dt.toneMapping||(a.material.needsUpda=
te=3D!0,h=3Dg,u=3Dg.version,d=3Dt.toneMapping),n.unshift(a,a.geometry,a.mat=
erial,0,0,null))}}}function mi(t,e,n,i){const r=3Dt.getParameter(34921),s=
=3Di.isWebGL2?null:e.get("OES_vertex_array_object"),a=3Di.isWebGL2||null!=
=3D=3Ds,o=3D{},l=3Dd(null);let c=3Dl;function h(e){return i.isWebGL2?t.bind=
VertexArray(e):s.bindVertexArrayOES(e)}function u(e){return i.isWebGL2?t.de=
leteVertexArray(e):s.deleteVertexArrayOES(e)}function d(t){const e=3D[],n=
=3D[],i=3D[];for(let t=3D0;t&lt;r;t++)e[t]=3D0,n[t]=3D0,i[t]=3D0;return{geo=
metry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,at=
tributeDivisors:i,object:t,attributes:{},index:null}}function p(){const t=
=3Dc.newAttributes;for(let e=3D0,n=3Dt.length;e&lt;n;e++)t[e]=3D0}function =
m(t){f(t,0)}function f(n,r){const s=3Dc.newAttributes,a=3Dc.enabledAttribut=
es,o=3Dc.attributeDivisors;if(s[n]=3D1,0=3D=3D=3Da[n]&amp;&amp;(t.enableVer=
texAttribArray(n),a[n]=3D1),o[n]!=3D=3Dr){(i.isWebGL2?t:e.get("ANGLE_instan=
ced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](=
n,r),o[n]=3Dr}}function g(){const e=3Dc.newAttributes,n=3Dc.enabledAttribut=
es;for(let i=3D0,r=3Dn.length;i&lt;r;i++)n[i]!=3D=3De[i]&amp;&amp;(t.disabl=
eVertexAttribArray(i),n[i]=3D0)}function v(e,n,r,s,a,o){!0!=3D=3Di.isWebGL2=
||5124!=3D=3Dr&amp;&amp;5125!=3D=3Dr?t.vertexAttribPointer(e,n,r,s,a,o):t.v=
ertexAttribIPointer(e,n,r,a,o)}function y(){x(),c!=3D=3Dl&amp;&amp;(c=3Dl,h=
(c.object))}function x(){l.geometry=3Dnull,l.program=3Dnull,l.wireframe=3D!=
1}return{setup:function(r,l,u,y,x){let _=3D!1;if(a){const e=3Dfunction(e,n,=
r){const a=3D!0=3D=3D=3Dr.wireframe;let l=3Do[e.id];void 0=3D=3D=3Dl&amp;&a=
mp;(l=3D{},o[e.id]=3Dl);let c=3Dl[n.id];void 0=3D=3D=3Dc&amp;&amp;(c=3D{},l=
[n.id]=3Dc);let h=3Dc[a];void 0=3D=3D=3Dh&amp;&amp;(h=3Dd(i.isWebGL2?t.crea=
teVertexArray():s.createVertexArrayOES()),c[a]=3Dh);return h}(y,u,l);c!=3D=
=3De&amp;&amp;(c=3De,h(c.object)),_=3Dfunction(t,e){const n=3Dc.attributes,=
i=3Dt.attributes;let r=3D0;for(const t in i){const e=3Dn[t],s=3Di[t];if(voi=
d 0=3D=3D=3De)return!0;if(e.attribute!=3D=3Ds)return!0;if(e.data!=3D=3Ds.da=
ta)return!0;r++}return c.attributesNum!=3D=3Dr||c.index!=3D=3De}(y,x),_&amp=
;&amp;function(t,e){const n=3D{},i=3Dt.attributes;let r=3D0;for(const t in =
i){const e=3Di[t],s=3D{};s.attribute=3De,e.data&amp;&amp;(s.data=3De.data),=
n[t]=3Ds,r++}c.attributes=3Dn,c.attributesNum=3Dr,c.index=3De}(y,x)}else{co=
nst t=3D!0=3D=3D=3Dl.wireframe;c.geometry=3D=3D=3Dy.id&amp;&amp;c.program=
=3D=3D=3Du.id&amp;&amp;c.wireframe=3D=3D=3Dt||(c.geometry=3Dy.id,c.program=
=3Du.id,c.wireframe=3Dt,_=3D!0)}!0=3D=3D=3Dr.isInstancedMesh&amp;&amp;(_=3D=
!0),null!=3D=3Dx&amp;&amp;n.update(x,34963),_&amp;&amp;(!function(r,s,a,o){=
if(!1=3D=3D=3Di.isWebGL2&amp;&amp;(r.isInstancedMesh||o.isInstancedBufferGe=
ometry)&amp;&amp;null=3D=3D=3De.get("ANGLE_instanced_arrays"))return;p();co=
nst l=3Do.attributes,c=3Da.getAttributes(),h=3Ds.defaultAttributeValues;for=
(const e in c){const i=3Dc[e];if(i&gt;=3D0){const s=3Dl[e];if(void 0!=3D=3D=
s){const e=3Ds.normalized,r=3Ds.itemSize,a=3Dn.get(s);if(void 0=3D=3D=3Da)c=
ontinue;const l=3Da.buffer,c=3Da.type,h=3Da.bytesPerElement;if(s.isInterlea=
vedBufferAttribute){const n=3Ds.data,a=3Dn.stride,u=3Ds.offset;n&amp;&amp;n=
.isInstancedInterleavedBuffer?(f(i,n.meshPerAttribute),void 0=3D=3D=3Do._ma=
xInstanceCount&amp;&amp;(o._maxInstanceCount=3Dn.meshPerAttribute*n.count))=
:m(i),t.bindBuffer(34962,l),v(i,r,c,e,a*h,u*h)}else s.isInstancedBufferAttr=
ibute?(f(i,s.meshPerAttribute),void 0=3D=3D=3Do._maxInstanceCount&amp;&amp;=
(o._maxInstanceCount=3Ds.meshPerAttribute*s.count)):m(i),t.bindBuffer(34962=
,l),v(i,r,c,e,0,0)}else if("instanceMatrix"=3D=3D=3De){const e=3Dn.get(r.in=
stanceMatrix);if(void 0=3D=3D=3De)continue;const s=3De.buffer,a=3De.type;f(=
i+0,1),f(i+1,1),f(i+2,1),f(i+3,1),t.bindBuffer(34962,s),t.vertexAttribPoint=
er(i+0,4,a,!1,64,0),t.vertexAttribPointer(i+1,4,a,!1,64,16),t.vertexAttribP=
ointer(i+2,4,a,!1,64,32),t.vertexAttribPointer(i+3,4,a,!1,64,48)}else if("i=
nstanceColor"=3D=3D=3De){const e=3Dn.get(r.instanceColor);if(void 0=3D=3D=
=3De)continue;const s=3De.buffer,a=3De.type;f(i,1),t.bindBuffer(34962,s),t.=
vertexAttribPointer(i,3,a,!1,12,0)}else if(void 0!=3D=3Dh){const n=3Dh[e];i=
f(void 0!=3D=3Dn)switch(n.length){case 2:t.vertexAttrib2fv(i,n);break;case =
3:t.vertexAttrib3fv(i,n);break;case 4:t.vertexAttrib4fv(i,n);break;default:=
t.vertexAttrib1fv(i,n)}}}}g()}(r,l,u,y),null!=3D=3Dx&amp;&amp;t.bindBuffer(=
34963,n.get(x).buffer))},reset:y,resetDefaultState:x,dispose:function(){y()=
;for(const t in o){const e=3Do[t];for(const t in e){const n=3De[t];for(cons=
t t in n)u(n[t].object),delete n[t];delete e[t]}delete o[t]}},releaseStates=
OfGeometry:function(t){if(void 0=3D=3D=3Do[t.id])return;const e=3Do[t.id];f=
or(const t in e){const n=3De[t];for(const t in n)u(n[t].object),delete n[t]=
;delete e[t]}delete o[t.id]},releaseStatesOfProgram:function(t){for(const e=
 in o){const n=3Do[e];if(void 0=3D=3D=3Dn[t.id])continue;const i=3Dn[t.id];=
for(const t in i)u(i[t].object),delete i[t];delete n[t.id]}},initAttributes=
:p,enableAttribute:m,disableUnusedAttributes:g}}function fi(t,e,n,i){const =
r=3Di.isWebGL2;let s;this.setMode=3Dfunction(t){s=3Dt},this.render=3Dfuncti=
on(e,i){t.drawArrays(s,e,i),n.update(i,s,1)},this.renderInstances=3Dfunctio=
n(i,a,o){if(0=3D=3D=3Do)return;let l,c;if(r)l=3Dt,c=3D"drawArraysInstanced"=
;else if(l=3De.get("ANGLE_instanced_arrays"),c=3D"drawArraysInstancedANGLE"=
,null=3D=3D=3Dl)return void console.error("THREE.WebGLBufferRenderer: using=
 THREE.InstancedBufferGeometry but hardware does not support extension ANGL=
E_instanced_arrays.");l[c](s,i,a,o),n.update(a,s,o)}}function gi(t,e,n){let=
 i;function r(e){if("highp"=3D=3D=3De){if(t.getShaderPrecisionFormat(35633,=
36338).precision&gt;0&amp;&amp;t.getShaderPrecisionFormat(35632,36338).prec=
ision&gt;0)return"highp";e=3D"mediump"}return"mediump"=3D=3D=3De&amp;&amp;t=
.getShaderPrecisionFormat(35633,36337).precision&gt;0&amp;&amp;t.getShaderP=
recisionFormat(35632,36337).precision&gt;0?"mediump":"lowp"}const s=3D"unde=
fined"!=3Dtypeof WebGL2RenderingContext&amp;&amp;t instanceof WebGL2Renderi=
ngContext||"undefined"!=3Dtypeof WebGL2ComputeRenderingContext&amp;&amp;t i=
nstanceof WebGL2ComputeRenderingContext;let a=3Dvoid 0!=3D=3Dn.precision?n.=
precision:"highp";const o=3Dr(a);o!=3D=3Da&amp;&amp;(console.warn("THREE.We=
bGLRenderer:",a,"not supported, using",o,"instead."),a=3Do);const l=3D!0=3D=
=3D=3Dn.logarithmicDepthBuffer,c=3Dt.getParameter(34930),h=3Dt.getParameter=
(35660),u=3Dt.getParameter(3379),d=3Dt.getParameter(34076),p=3Dt.getParamet=
er(34921),m=3Dt.getParameter(36347),f=3Dt.getParameter(36348),g=3Dt.getPara=
meter(36349),v=3Dh&gt;0,y=3Ds||e.has("OES_texture_float");return{isWebGL2:s=
,getMaxAnisotropy:function(){if(void 0!=3D=3Di)return i;if(!0=3D=3D=3De.has=
("EXT_texture_filter_anisotropic")){const n=3De.get("EXT_texture_filter_ani=
sotropic");i=3Dt.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=3D0;=
return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTexture=
s:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:p,m=
axVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,flo=
atFragmentTextures:y,floatVertexTextures:v&amp;&amp;y,maxSamples:s?t.getPar=
ameter(36183):0}}function vi(t){const e=3Dthis;let n=3Dnull,i=3D0,r=3D!1,s=
=3D!1;const a=3Dnew Ne,o=3Dnew yt,l=3D{value:null,needsUpdate:!1};function =
c(){l.value!=3D=3Dn&amp;&amp;(l.value=3Dn,l.needsUpdate=3Di&gt;0),e.numPlan=
es=3Di,e.numIntersection=3D0}function h(t,n,i,r){const s=3Dnull!=3D=3Dt?t.l=
ength:0;let c=3Dnull;if(0!=3D=3Ds){if(c=3Dl.value,!0!=3D=3Dr||null=3D=3D=3D=
c){const e=3Di+4*s,r=3Dn.matrixWorldInverse;o.getNormalMatrix(r),(null=3D=
=3D=3Dc||c.length&lt;e)&amp;&amp;(c=3Dnew Float32Array(e));for(let e=3D0,n=
=3Di;e!=3D=3Ds;++e,n+=3D4)a.copy(t[e]).applyMatrix4(r,o),a.normal.toArray(c=
,n),c[n+3]=3Da.constant}l.value=3Dc,l.needsUpdate=3D!0}return e.numPlanes=
=3Ds,e.numIntersection=3D0,c}this.uniform=3Dl,this.numPlanes=3D0,this.numIn=
tersection=3D0,this.init=3Dfunction(t,e,s){const a=3D0!=3D=3Dt.length||e||0=
!=3D=3Di||r;return r=3De,n=3Dh(t,s,0),i=3Dt.length,a},this.beginShadows=3Df=
unction(){s=3D!0,h(null)},this.endShadows=3Dfunction(){s=3D!1,c()},this.set=
State=3Dfunction(e,a,o){const u=3De.clippingPlanes,d=3De.clipIntersection,p=
=3De.clipShadows,m=3Dt.get(e);if(!r||null=3D=3D=3Du||0=3D=3D=3Du.length||s&=
amp;&amp;!p)s?h(null):c();else{const t=3Ds?0:i,e=3D4*t;let r=3Dm.clippingSt=
ate||null;l.value=3Dr,r=3Dh(u,a,e,o);for(let t=3D0;t!=3D=3De;++t)r[t]=3Dn[t=
];m.clippingState=3Dr,this.numIntersection=3Dd?this.numPlanes:0,this.numPla=
nes+=3Dt}}}function yi(t){let e=3Dnew WeakMap;function n(t,e){return e=3D=
=3D=3Da?t.mapping=3Dr:e=3D=3D=3Do&amp;&amp;(t.mapping=3Ds),t}function i(t){=
const n=3Dt.target;n.removeEventListener("dispose",i);const r=3De.get(n);vo=
id 0!=3D=3Dr&amp;&amp;(e.delete(n),r.dispose())}return{get:function(r){if(r=
&amp;&amp;r.isTexture){const s=3Dr.mapping;if(s=3D=3D=3Da||s=3D=3D=3Do){if(=
e.has(r)){return n(e.get(r).texture,r.mapping)}{const s=3Dr.image;if(s&amp;=
&amp;s.height&gt;0){const a=3Dt.getRenderTarget(),o=3Dnew ni(s.height/2);re=
turn o.fromEquirectangularTexture(t,r),e.set(r,o),t.setRenderTarget(a),r.ad=
dEventListener("dispose",i),n(o.texture,r.mapping)}return null}}}return r},=
dispose:function(){e=3Dnew WeakMap}}}function xi(t){const e=3D{};function n=
(n){if(void 0!=3D=3De[n])return e[n];let i;switch(n){case"WEBGL_depth_textu=
re":i=3Dt.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_de=
pth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_=
texture_filter_anisotropic":i=3Dt.getExtension("EXT_texture_filter_anisotro=
pic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension=
("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_textu=
re_s3tc":i=3Dt.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtensio=
n("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compre=
ssed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=3Dt.getExt=
ension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_comp=
ressed_texture_pvrtc");break;default:i=3Dt.getExtension(n)}return e[n]=3Di,=
i}return{has:function(t){return null!=3D=3Dn(t)},init:function(t){t.isWebGL=
2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_floa=
t"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_s=
tandard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_objec=
t"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color=
_buffer_half_float")},get:function(t){const e=3Dn(t);return null=3D=3D=3De&=
amp;&amp;console.warn("THREE.WebGLRenderer: "+t+" extension not supported."=
),e}}}function _i(t,e,n,i){const r=3D{},s=3Dnew WeakMap;function a(t){const=
 o=3Dt.target;null!=3D=3Do.index&amp;&amp;e.remove(o.index);for(const t in =
o.attributes)e.remove(o.attributes[t]);o.removeEventListener("dispose",a),d=
elete r[o.id];const l=3Ds.get(o);l&amp;&amp;(e.remove(l),s.delete(o)),i.rel=
easeStatesOfGeometry(o),!0=3D=3D=3Do.isInstancedBufferGeometry&amp;&amp;del=
ete o._maxInstanceCount,n.memory.geometries--}function o(t){const n=3D[],i=
=3Dt.index,r=3Dt.attributes.position;let a=3D0;if(null!=3D=3Di){const t=3Di=
.array;a=3Di.version;for(let e=3D0,i=3Dt.length;e&lt;i;e+=3D3){const i=3Dt[=
e+0],r=3Dt[e+1],s=3Dt[e+2];n.push(i,r,r,s,s,i)}}else{const t=3Dr.array;a=3D=
r.version;for(let e=3D0,i=3Dt.length/3-1;e&lt;i;e+=3D3){const t=3De+0,i=3De=
+1,r=3De+2;n.push(t,i,i,r,r,t)}}const o=3Dnew(gn(n)&gt;65535?dn:hn)(n,1);o.=
version=3Da;const l=3Ds.get(t);l&amp;&amp;e.remove(l),s.set(t,o)}return{get=
:function(t,e){return!0=3D=3D=3Dr[e.id]||(e.addEventListener("dispose",a),r=
[e.id]=3D!0,n.memory.geometries++),e},update:function(t){const n=3Dt.attrib=
utes;for(const t in n)e.update(n[t],34962);const i=3Dt.morphAttributes;for(=
const t in i){const n=3Di[t];for(let t=3D0,i=3Dn.length;t&lt;i;t++)e.update=
(n[t],34962)}},getWireframeAttribute:function(t){const e=3Ds.get(t);if(e){c=
onst n=3Dt.index;null!=3D=3Dn&amp;&amp;e.version&lt;n.version&amp;&amp;o(t)=
}else o(t);return s.get(t)}}}function wi(t,e,n,i){const r=3Di.isWebGL2;let =
s,a,o;this.setMode=3Dfunction(t){s=3Dt},this.setIndex=3Dfunction(t){a=3Dt.t=
ype,o=3Dt.bytesPerElement},this.render=3Dfunction(e,i){t.drawElements(s,i,a=
,e*o),n.update(i,s,1)},this.renderInstances=3Dfunction(i,l,c){if(0=3D=3D=3D=
c)return;let h,u;if(r)h=3Dt,u=3D"drawElementsInstanced";else if(h=3De.get("=
ANGLE_instanced_arrays"),u=3D"drawElementsInstancedANGLE",null=3D=3D=3Dh)re=
turn void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.Inst=
ancedBufferGeometry but hardware does not support extension ANGLE_instanced=
_arrays.");h[u](s,l,a,i*o,c),n.update(l,s,c)}}function bi(t){const e=3D{fra=
me:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,text=
ures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.ca=
lls=3D0,e.triangles=3D0,e.points=3D0,e.lines=3D0},update:function(t,n,i){sw=
itch(e.calls++,n){case 4:e.triangles+=3Di*(t/3);break;case 1:e.lines+=3Di*(=
t/2);break;case 3:e.lines+=3Di*(t-1);break;case 2:e.lines+=3Di*t;break;case=
 0:e.points+=3Di*t;break;default:console.error("THREE.WebGLInfo: Unknown dr=
aw mode:",n)}}}}function Mi(t,e){return t[0]-e[0]}function Si(t,e){return M=
ath.abs(e[1])-Math.abs(t[1])}function Ti(t){const e=3D{},n=3Dnew Float32Arr=
ay(8),i=3D[];for(let t=3D0;t&lt;8;t++)i[t]=3D[t,0];return{update:function(r=
,s,a,o){const l=3Dr.morphTargetInfluences,c=3Dvoid 0=3D=3D=3Dl?0:l.length;l=
et h=3De[s.id];if(void 0=3D=3D=3Dh){h=3D[];for(let t=3D0;t&lt;c;t++)h[t]=3D=
[t,0];e[s.id]=3Dh}for(let t=3D0;t&lt;c;t++){const e=3Dh[t];e[0]=3Dt,e[1]=3D=
l[t]}h.sort(Si);for(let t=3D0;t&lt;8;t++)t&lt;c&amp;&amp;h[t][1]?(i[t][0]=
=3Dh[t][0],i[t][1]=3Dh[t][1]):(i[t][0]=3DNumber.MAX_SAFE_INTEGER,i[t][1]=3D=
0);i.sort(Mi);const u=3Da.morphTargets&amp;&amp;s.morphAttributes.position,=
d=3Da.morphNormals&amp;&amp;s.morphAttributes.normal;let p=3D0;for(let t=3D=
0;t&lt;8;t++){const e=3Di[t],r=3De[0],a=3De[1];r!=3D=3DNumber.MAX_SAFE_INTE=
GER&amp;&amp;a?(u&amp;&amp;s.getAttribute("morphTarget"+t)!=3D=3Du[r]&amp;&=
amp;s.setAttribute("morphTarget"+t,u[r]),d&amp;&amp;s.getAttribute("morphNo=
rmal"+t)!=3D=3Dd[r]&amp;&amp;s.setAttribute("morphNormal"+t,d[r]),n[t]=3Da,=
p+=3Da):(u&amp;&amp;!0=3D=3D=3Ds.hasAttribute("morphTarget"+t)&amp;&amp;s.d=
eleteAttribute("morphTarget"+t),d&amp;&amp;!0=3D=3D=3Ds.hasAttribute("morph=
Normal"+t)&amp;&amp;s.deleteAttribute("morphNormal"+t),n[t]=3D0)}const m=3D=
s.morphTargetsRelative?1:1-p;o.getUniforms().setValue(t,"morphTargetBaseInf=
luence",m),o.getUniforms().setValue(t,"morphTargetInfluences",n)}}}function=
 Ei(t,e,n,i){let r=3Dnew WeakMap;function s(t){const e=3Dt.target;e.removeE=
ventListener("dispose",s),n.remove(e.instanceMatrix),null!=3D=3De.instanceC=
olor&amp;&amp;n.remove(e.instanceColor)}return{update:function(t){const a=
=3Di.render.frame,o=3Dt.geometry,l=3De.get(t,o);return r.get(l)!=3D=3Da&amp=
;&amp;(e.update(l),r.set(l,a)),t.isInstancedMesh&amp;&amp;(!1=3D=3D=3Dt.has=
EventListener("dispose",s)&amp;&amp;t.addEventListener("dispose",s),n.updat=
e(t.instanceMatrix,34962),null!=3D=3Dt.instanceColor&amp;&amp;n.update(t.in=
stanceColor,34962)),l},dispose:function(){r=3Dnew WeakMap}}}di.physical=3D{=
uniforms:Yn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:=
null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clear=
coatNormalScale:{value:new vt(1,1)},clearcoatNormalMap:{value:null},sheen:{=
value:new tn(0)},transmission:{value:0},transmissionMap:{value:null}}]),ver=
texShader:hi.meshphysical_vert,fragmentShader:hi.meshphysical_frag};class A=
i extends bt{constructor(t=3Dnull,e=3D1,n=3D1,i=3D1){super(null),this.image=
=3D{data:t,width:e,height:n,depth:i},this.magFilter=3Dp,this.minFilter=3Dp,=
this.wrapR=3Du,this.generateMipmaps=3D!1,this.flipY=3D!1,this.unpackAlignme=
nt=3D1,this.needsUpdate=3D!0}}Ai.prototype.isDataTexture2DArray=3D!0;class =
Li extends bt{constructor(t=3Dnull,e=3D1,n=3D1,i=3D1){super(null),this.imag=
e=3D{data:t,width:e,height:n,depth:i},this.magFilter=3Dp,this.minFilter=3Dp=
,this.wrapR=3Du,this.generateMipmaps=3D!1,this.flipY=3D!1,this.unpackAlignm=
ent=3D1,this.needsUpdate=3D!0}}Li.prototype.isDataTexture3D=3D!0;const Ri=
=3Dnew bt,Ci=3Dnew Ai,Pi=3Dnew Li,Di=3Dnew ei,Ii=3D[],Ni=3D[],Bi=3Dnew Floa=
t32Array(16),zi=3Dnew Float32Array(9),Fi=3Dnew Float32Array(4);function Oi(=
t,e,n){const i=3Dt[0];if(i&lt;=3D0||i&gt;0)return t;const r=3De*n;let s=3DI=
i[r];if(void 0=3D=3D=3Ds&amp;&amp;(s=3Dnew Float32Array(r),Ii[r]=3Ds),0!=3D=
=3De){i.toArray(s,0);for(let i=3D1,r=3D0;i!=3D=3De;++i)r+=3Dn,t[i].toArray(=
s,r)}return s}function Hi(t,e){if(t.length!=3D=3De.length)return!1;for(let =
n=3D0,i=3Dt.length;n&lt;i;n++)if(t[n]!=3D=3De[n])return!1;return!0}function=
 Gi(t,e){for(let n=3D0,i=3De.length;n&lt;i;n++)t[n]=3De[n]}function Ui(t,e)=
{let n=3DNi[e];void 0=3D=3D=3Dn&amp;&amp;(n=3Dnew Int32Array(e),Ni[e]=3Dn);=
for(let i=3D0;i!=3D=3De;++i)n[i]=3Dt.allocateTextureUnit();return n}functio=
n ki(t,e){const n=3Dthis.cache;n[0]!=3D=3De&amp;&amp;(t.uniform1f(this.addr=
,e),n[0]=3De)}function Vi(t,e){const n=3Dthis.cache;if(void 0!=3D=3De.x)n[0=
]=3D=3D=3De.x&amp;&amp;n[1]=3D=3D=3De.y||(t.uniform2f(this.addr,e.x,e.y),n[=
0]=3De.x,n[1]=3De.y);else{if(Hi(n,e))return;t.uniform2fv(this.addr,e),Gi(n,=
e)}}function Wi(t,e){const n=3Dthis.cache;if(void 0!=3D=3De.x)n[0]=3D=3D=3D=
e.x&amp;&amp;n[1]=3D=3D=3De.y&amp;&amp;n[2]=3D=3D=3De.z||(t.uniform3f(this.=
addr,e.x,e.y,e.z),n[0]=3De.x,n[1]=3De.y,n[2]=3De.z);else if(void 0!=3D=3De.=
r)n[0]=3D=3D=3De.r&amp;&amp;n[1]=3D=3D=3De.g&amp;&amp;n[2]=3D=3D=3De.b||(t.=
uniform3f(this.addr,e.r,e.g,e.b),n[0]=3De.r,n[1]=3De.g,n[2]=3De.b);else{if(=
Hi(n,e))return;t.uniform3fv(this.addr,e),Gi(n,e)}}function ji(t,e){const n=
=3Dthis.cache;if(void 0!=3D=3De.x)n[0]=3D=3D=3De.x&amp;&amp;n[1]=3D=3D=3De.=
y&amp;&amp;n[2]=3D=3D=3De.z&amp;&amp;n[3]=3D=3D=3De.w||(t.uniform4f(this.ad=
dr,e.x,e.y,e.z,e.w),n[0]=3De.x,n[1]=3De.y,n[2]=3De.z,n[3]=3De.w);else{if(Hi=
(n,e))return;t.uniform4fv(this.addr,e),Gi(n,e)}}function qi(t,e){const n=3D=
this.cache,i=3De.elements;if(void 0=3D=3D=3Di){if(Hi(n,e))return;t.uniformM=
atrix2fv(this.addr,!1,e),Gi(n,e)}else{if(Hi(n,i))return;Fi.set(i),t.uniform=
Matrix2fv(this.addr,!1,Fi),Gi(n,i)}}function Xi(t,e){const n=3Dthis.cache,i=
=3De.elements;if(void 0=3D=3D=3Di){if(Hi(n,e))return;t.uniformMatrix3fv(thi=
s.addr,!1,e),Gi(n,e)}else{if(Hi(n,i))return;zi.set(i),t.uniformMatrix3fv(th=
is.addr,!1,zi),Gi(n,i)}}function Yi(t,e){const n=3Dthis.cache,i=3De.element=
s;if(void 0=3D=3D=3Di){if(Hi(n,e))return;t.uniformMatrix4fv(this.addr,!1,e)=
,Gi(n,e)}else{if(Hi(n,i))return;Bi.set(i),t.uniformMatrix4fv(this.addr,!1,B=
i),Gi(n,i)}}function Zi(t,e){const n=3Dthis.cache;n[0]!=3D=3De&amp;&amp;(t.=
uniform1i(this.addr,e),n[0]=3De)}function Ji(t,e){const n=3Dthis.cache;Hi(n=
,e)||(t.uniform2iv(this.addr,e),Gi(n,e))}function Qi(t,e){const n=3Dthis.ca=
che;Hi(n,e)||(t.uniform3iv(this.addr,e),Gi(n,e))}function Ki(t,e){const n=
=3Dthis.cache;Hi(n,e)||(t.uniform4iv(this.addr,e),Gi(n,e))}function $i(t,e)=
{const n=3Dthis.cache;n[0]!=3D=3De&amp;&amp;(t.uniform1ui(this.addr,e),n[0]=
=3De)}function tr(t,e){const n=3Dthis.cache;Hi(n,e)||(t.uniform2uiv(this.ad=
dr,e),Gi(n,e))}function er(t,e){const n=3Dthis.cache;Hi(n,e)||(t.uniform3ui=
v(this.addr,e),Gi(n,e))}function nr(t,e){const n=3Dthis.cache;Hi(n,e)||(t.u=
niform4uiv(this.addr,e),Gi(n,e))}function ir(t,e,n){const i=3Dthis.cache,r=
=3Dn.allocateTextureUnit();i[0]!=3D=3Dr&amp;&amp;(t.uniform1i(this.addr,r),=
i[0]=3Dr),n.safeSetTexture2D(e||Ri,r)}function rr(t,e,n){const i=3Dthis.cac=
he,r=3Dn.allocateTextureUnit();i[0]!=3D=3Dr&amp;&amp;(t.uniform1i(this.addr=
,r),i[0]=3Dr),n.setTexture3D(e||Pi,r)}function sr(t,e,n){const i=3Dthis.cac=
he,r=3Dn.allocateTextureUnit();i[0]!=3D=3Dr&amp;&amp;(t.uniform1i(this.addr=
,r),i[0]=3Dr),n.safeSetTextureCube(e||Di,r)}function ar(t,e,n){const i=3Dth=
is.cache,r=3Dn.allocateTextureUnit();i[0]!=3D=3Dr&amp;&amp;(t.uniform1i(thi=
s.addr,r),i[0]=3Dr),n.setTexture2DArray(e||Ci,r)}function or(t,e){t.uniform=
1fv(this.addr,e)}function lr(t,e){const n=3DOi(e,this.size,2);t.uniform2fv(=
this.addr,n)}function cr(t,e){const n=3DOi(e,this.size,3);t.uniform3fv(this=
.addr,n)}function hr(t,e){const n=3DOi(e,this.size,4);t.uniform4fv(this.add=
r,n)}function ur(t,e){const n=3DOi(e,this.size,4);t.uniformMatrix2fv(this.a=
ddr,!1,n)}function dr(t,e){const n=3DOi(e,this.size,9);t.uniformMatrix3fv(t=
his.addr,!1,n)}function pr(t,e){const n=3DOi(e,this.size,16);t.uniformMatri=
x4fv(this.addr,!1,n)}function mr(t,e){t.uniform1iv(this.addr,e)}function fr=
(t,e){t.uniform2iv(this.addr,e)}function gr(t,e){t.uniform3iv(this.addr,e)}=
function vr(t,e){t.uniform4iv(this.addr,e)}function yr(t,e){t.uniform1uiv(t=
his.addr,e)}function xr(t,e){t.uniform2uiv(this.addr,e)}function _r(t,e){t.=
uniform3uiv(this.addr,e)}function wr(t,e){t.uniform4uiv(this.addr,e)}functi=
on br(t,e,n){const i=3De.length,r=3DUi(n,i);t.uniform1iv(this.addr,r);for(l=
et t=3D0;t!=3D=3Di;++t)n.safeSetTexture2D(e[t]||Ri,r[t])}function Mr(t,e,n)=
{const i=3De.length,r=3DUi(n,i);t.uniform1iv(this.addr,r);for(let t=3D0;t!=
=3D=3Di;++t)n.safeSetTextureCube(e[t]||Di,r[t])}function Sr(t,e,n){this.id=
=3Dt,this.addr=3Dn,this.cache=3D[],this.setValue=3Dfunction(t){switch(t){ca=
se 5126:return ki;case 35664:return Vi;case 35665:return Wi;case 35666:retu=
rn ji;case 35674:return qi;case 35675:return Xi;case 35676:return Yi;case 5=
124:case 35670:return Zi;case 35667:case 35671:return Ji;case 35668:case 35=
672:return Qi;case 35669:case 35673:return Ki;case 5125:return $i;case 3629=
4:return tr;case 36295:return er;case 36296:return nr;case 35678:case 36198=
:case 36298:case 36306:case 35682:return ir;case 35679:case 36299:case 3630=
7:return rr;case 35680:case 36300:case 36308:case 36293:return sr;case 3628=
9:case 36303:case 36311:case 36292:return ar}}(e.type)}function Tr(t,e,n){t=
his.id=3Dt,this.addr=3Dn,this.cache=3D[],this.size=3De.size,this.setValue=
=3Dfunction(t){switch(t){case 5126:return or;case 35664:return lr;case 3566=
5:return cr;case 35666:return hr;case 35674:return ur;case 35675:return dr;=
case 35676:return pr;case 5124:case 35670:return mr;case 35667:case 35671:r=
eturn fr;case 35668:case 35672:return gr;case 35669:case 35673:return vr;ca=
se 5125:return yr;case 36294:return xr;case 36295:return _r;case 36296:retu=
rn wr;case 35678:case 36198:case 36298:case 36306:case 35682:return br;case=
 35680:case 36300:case 36308:case 36293:return Mr}}(e.type)}function Er(t){=
this.id=3Dt,this.seq=3D[],this.map=3D{}}Tr.prototype.updateCache=3Dfunction=
(t){const e=3Dthis.cache;t instanceof Float32Array&amp;&amp;e.length!=3D=3D=
t.length&amp;&amp;(this.cache=3Dnew Float32Array(t.length)),Gi(e,t)},Er.pro=
totype.setValue=3Dfunction(t,e,n){const i=3Dthis.seq;for(let r=3D0,s=3Di.le=
ngth;r!=3D=3Ds;++r){const s=3Di[r];s.setValue(t,e[s.id],n)}};const Ar=3D/(\=
w+)(\])?(\[|\.)?/g;function Lr(t,e){t.seq.push(e),t.map[e.id]=3De}function =
Rr(t,e,n){const i=3Dt.name,r=3Di.length;for(Ar.lastIndex=3D0;;){const s=3DA=
r.exec(i),a=3DAr.lastIndex;let o=3Ds[1];const l=3D"]"=3D=3D=3Ds[2],c=3Ds[3]=
;if(l&amp;&amp;(o|=3D0),void 0=3D=3D=3Dc||"["=3D=3D=3Dc&amp;&amp;a+2=3D=3D=
=3Dr){Lr(n,void 0=3D=3D=3Dc?new Sr(o,t,e):new Tr(o,t,e));break}{let t=3Dn.m=
ap[o];void 0=3D=3D=3Dt&amp;&amp;(t=3Dnew Er(o),Lr(n,t)),n=3Dt}}}function Cr=
(t,e){this.seq=3D[],this.map=3D{};const n=3Dt.getProgramParameter(e,35718);=
for(let i=3D0;i&lt;n;++i){const n=3Dt.getActiveUniform(e,i);Rr(n,t.getUnifo=
rmLocation(e,n.name),this)}}function Pr(t,e,n){const i=3Dt.createShader(e);=
return t.shaderSource(i,n),t.compileShader(i),i}Cr.prototype.setValue=3Dfun=
ction(t,e,n,i){const r=3Dthis.map[e];void 0!=3D=3Dr&amp;&amp;r.setValue(t,n=
,i)},Cr.prototype.setOptional=3Dfunction(t,e,n){const i=3De[n];void 0!=3D=
=3Di&amp;&amp;this.setValue(t,n,i)},Cr.upload=3Dfunction(t,e,n,i){for(let r=
=3D0,s=3De.length;r!=3D=3Ds;++r){const s=3De[r],a=3Dn[s.id];!1!=3D=3Da.need=
sUpdate&amp;&amp;s.setValue(t,a.value,i)}},Cr.seqWithValue=3Dfunction(t,e){=
const n=3D[];for(let i=3D0,r=3Dt.length;i!=3D=3Dr;++i){const r=3Dt[i];r.id =
in e&amp;&amp;n.push(r)}return n};let Dr=3D0;function Ir(t){switch(t){case =
X:return["Linear","( value )"];case Y:return["sRGB","( value )"];case J:ret=
urn["RGBE","( value )"];case Q:return["RGBM","( value, 7.0 )"];case K:retur=
n["RGBM","( value, 16.0 )"];case $:return["RGBD","( value, 256.0 )"];case Z=
:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLu=
v","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupporte=
d encoding:",t),["Linear","( value )"]}}function Nr(t,e,n){const i=3Dt.getS=
haderParameter(e,35713),r=3Dt.getShaderInfoLog(e).trim();if(i&amp;&amp;""=
=3D=3D=3Dr)return"";return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+"\n=
"+r+function(t){const e=3Dt.split("\n");for(let t=3D0;t&lt;e.length;t++)e[t=
]=3Dt+1+": "+e[t];return e.join("\n")}(t.getShaderSource(e))}function Br(t,=
e){const n=3DIr(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinea=
r"+n[1]+"; }"}function zr(t,e){const n=3DIr(e);return"vec4 "+t+"( vec4 valu=
e ) { return LinearTo"+n[0]+n[1]+"; }"}function Fr(t,e){let n;switch(e){cas=
e 1:n=3D"Linear";break;case 2:n=3D"Reinhard";break;case 3:n=3D"OptimizedCin=
eon";break;case 4:n=3D"ACESFilmic";break;case 5:n=3D"Custom";break;default:=
console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n=3D"Linear"=
}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}fun=
ction Or(t){return""!=3D=3Dt}function Hr(t,e){return t.replace(/NUM_DIR_LIG=
HTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/=
NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.n=
umPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR=
_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.=
numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShad=
ows)}function Gr(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClipping=
Planes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipInter=
section)}const Ur=3D/^[ \t]*#include +&lt;([\w\d./]+)&gt;/gm;function kr(t)=
{return t.replace(Ur,Vr)}function Vr(t,e){const n=3Dhi[e];if(void 0=3D=3D=
=3Dn)throw new Error("Can not resolve #include &lt;"+e+"&gt;");return kr(n)=
}const Wr=3D/#pragma unroll_loop[\s]+?for \( int i \=3D (\d+)\; i &lt; (\d+=
)\; i \+\+ \) \{([\s\S]+?)(?=3D\})\}/g,jr=3D/#pragma unroll_loop_start\s+fo=
r\s*\(\s*int\s+i\s*=3D\s*(\d+)\s*;\s*i\s*&lt;\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s=
*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qr(t){return t.replace(j=
r,Yr).replace(Wr,Xr)}function Xr(t,e,n,i){return console.warn("WebGLProgram=
: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unrol=
l_loop_start syntax instead."),Yr(t,e,n,i)}function Yr(t,e,n,i){let r=3D"";=
for(let t=3DparseInt(e);t&lt;parseInt(n);t++)r+=3Di.replace(/\[\s*i\s*\]/g,=
"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return r}function Zr(t){let =
e=3D"precision "+t.precision+" float;\nprecision "+t.precision+" int;";retu=
rn"highp"=3D=3D=3Dt.precision?e+=3D"\n#define HIGH_PRECISION":"mediump"=3D=
=3D=3Dt.precision?e+=3D"\n#define MEDIUM_PRECISION":"lowp"=3D=3D=3Dt.precis=
ion&amp;&amp;(e+=3D"\n#define LOW_PRECISION"),e}function Jr(t,e,n,i){const =
a=3Dt.getContext(),o=3Dn.defines;let h=3Dn.vertexShader,u=3Dn.fragmentShade=
r;const d=3Dfunction(t){let e=3D"SHADOWMAP_TYPE_BASIC";return 1=3D=3D=3Dt.s=
hadowMapType?e=3D"SHADOWMAP_TYPE_PCF":2=3D=3D=3Dt.shadowMapType?e=3D"SHADOW=
MAP_TYPE_PCF_SOFT":3=3D=3D=3Dt.shadowMapType&amp;&amp;(e=3D"SHADOWMAP_TYPE_=
VSM"),e}(n),p=3Dfunction(t){let e=3D"ENVMAP_TYPE_CUBE";if(t.envMap)switch(t=
.envMapMode){case r:case s:e=3D"ENVMAP_TYPE_CUBE";break;case l:case c:e=3D"=
ENVMAP_TYPE_CUBE_UV"}return e}(n),m=3Dfunction(t){let e=3D"ENVMAP_MODE_REFL=
ECTION";if(t.envMap)switch(t.envMapMode){case s:case c:e=3D"ENVMAP_MODE_REF=
RACTION"}return e}(n),f=3Dfunction(t){let e=3D"ENVMAP_BLENDING_NONE";if(t.e=
nvMap)switch(t.combine){case 0:e=3D"ENVMAP_BLENDING_MULTIPLY";break;case 1:=
e=3D"ENVMAP_BLENDING_MIX";break;case 2:e=3D"ENVMAP_BLENDING_ADD"}return e}(=
n),g=3Dt.gammaFactor&gt;0?t.gammaFactor:1,v=3Dn.isWebGL2?"":function(t){ret=
urn[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormal=
Map||t.clearcoatNormalMap||t.flatShading||"physical"=3D=3D=3Dt.shaderID?"#e=
xtension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.=
logarithmicDepthBuffer)&amp;&amp;t.rendererExtensionFragDepth?"#extension G=
L_EXT_frag_depth : enable":"",t.extensionDrawBuffers&amp;&amp;t.rendererExt=
ensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensio=
nShaderTextureLOD||t.envMap)&amp;&amp;t.rendererExtensionShaderTextureLod?"=
#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join("\n")}(n=
),y=3Dfunction(t){const e=3D[];for(const n in t){const i=3Dt[n];!1!=3D=3Di&=
amp;&amp;e.push("#define "+n+" "+i)}return e.join("\n")}(o),x=3Da.createPro=
gram();let _,w,b=3Dn.glslVersion?"#version "+n.glslVersion+"\n":"";n.isRawS=
haderMaterial?(_=3D[y].filter(Or).join("\n"),_.length&gt;0&amp;&amp;(_+=3D"=
\n"),w=3D[v,y].filter(Or).join("\n"),w.length&gt;0&amp;&amp;(w+=3D"\n")):(_=
=3D[Zr(n),"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_I=
NSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.support=
sVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+g,"#de=
fine MAX_BONES "+n.maxBones,n.useFog&amp;&amp;n.fog?"#define USE_FOG":"",n.=
useFog&amp;&amp;n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",=
n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#defi=
ne USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define U=
SE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define =
USE_NORMALMAP":"",n.normalMap&amp;&amp;n.objectSpaceNormalMap?"#define OBJE=
CTSPACE_NORMALMAP":"",n.normalMap&amp;&amp;n.tangentSpaceNormalMap?"#define=
 TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.=
clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNo=
rmalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&amp;&amp;n.s=
upportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#defi=
ne USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metal=
nessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",=
n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#defin=
e USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#de=
fine USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#=
define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinnin=
g?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.=
morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&amp;&amp;!1=3D=3D=
=3Dn.flatShading?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBL=
E_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define=
 USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#d=
efine USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPT=
HBUF":"",n.logarithmicDepthBuffer&amp;&amp;n.rendererExtensionFragDepth?"#d=
efine USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 mod=
elViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;",=
"uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool i=
sOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;",=
"#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#=
endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 =
uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined=
( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )"=
,"\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute =
vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morp=
hTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t=
\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tatt=
ribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t=
\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tatt=
ribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#=
endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec=
4 skinWeight;","#endif","\n"].filter(Or).join("\n"),w=3D[v,Zr(n),"#define S=
HADER_NAME "+n.shaderName,y,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n=
.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+g,n.useFog&amp;&amp;n.fog?=
"#define USE_FOG":"",n.useFog&amp;&amp;n.fogExp2?"#define FOG_EXP2":"",n.ma=
p?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define U=
SE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",n.envMap?"#=
define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOM=
AP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BU=
MPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&amp;&amp;n.obj=
ectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&amp;&amp;n=
.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"=
#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT=
_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":""=
,n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROU=
GHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#def=
ine USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#def=
ine USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.ver=
texColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define=
 USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#defi=
ne UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatSha=
ding?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.fli=
pSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"=
",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTI=
PLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHT=
S":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDe=
pthBuffer&amp;&amp;n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EX=
T":"",(n.extensionShaderTextureLOD||n.envMap)&amp;&amp;n.rendererExtensionS=
haderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","un=
iform vec3 cameraPosition;","uniform bool isOrthographic;",0!=3D=3Dn.toneMa=
pping?"#define TONE_MAPPING":"",0!=3D=3Dn.toneMapping?hi.tonemapping_pars_f=
ragment:"",0!=3D=3Dn.toneMapping?Fr("toneMapping",n.toneMapping):"",n.dithe=
ring?"#define DITHERING":"",hi.encodings_pars_fragment,n.map?Br("mapTexelTo=
Linear",n.mapEncoding):"",n.matcap?Br("matcapTexelToLinear",n.matcapEncodin=
g):"",n.envMap?Br("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?=
Br("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Br("ligh=
tMapTexelToLinear",n.lightMapEncoding):"",zr("linearToOutputTexel",n.output=
Encoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].f=
ilter(Or).join("\n")),h=3Dkr(h),h=3DHr(h,n),h=3DGr(h,n),u=3Dkr(u),u=3DHr(u,=
n),u=3DGr(u,n),h=3Dqr(h),u=3Dqr(u),n.isWebGL2&amp;&amp;!0!=3D=3Dn.isRawShad=
erMaterial&amp;&amp;(b=3D"#version 300 es\n",_=3D["#define attribute in","#=
define varying out","#define texture2D texture"].join("\n")+"\n"+_,w=3D["#d=
efine varying in",n.glslVersion=3D=3D=3Dit?"":"out highp vec4 pc_fragColor;=
",n.glslVersion=3D=3D=3Dit?"":"#define gl_FragColor pc_fragColor","#define =
gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureC=
ube texture","#define texture2DProj textureProj","#define texture2DLodEXT t=
extureLod","#define texture2DProjLodEXT textureProjLod","#define textureCub=
eLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture=
2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].jo=
in("\n")+"\n"+w);const M=3Db+w+u,S=3DPr(a,35633,b+_+h),T=3DPr(a,35632,M);if=
(a.attachShader(x,S),a.attachShader(x,T),void 0!=3D=3Dn.index0AttributeName=
?a.bindAttribLocation(x,0,n.index0AttributeName):!0=3D=3D=3Dn.morphTargets&=
amp;&amp;a.bindAttribLocation(x,0,"position"),a.linkProgram(x),t.debug.chec=
kShaderErrors){const t=3Da.getProgramInfoLog(x).trim(),e=3Da.getShaderInfoL=
og(S).trim(),n=3Da.getShaderInfoLog(T).trim();let i=3D!0,r=3D!0;if(!1=3D=3D=
=3Da.getProgramParameter(x,35714)){i=3D!1;const e=3DNr(a,S,"vertex"),n=3DNr=
(a,T,"fragment");console.error("THREE.WebGLProgram: shader error: ",a.getEr=
ror(),"35715",a.getProgramParameter(x,35715),"gl.getProgramInfoLog",t,e,n)}=
else""!=3D=3Dt?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",t)=
:""!=3D=3De&amp;&amp;""!=3D=3Dn||(r=3D!1);r&amp;&amp;(this.diagnostics=3D{r=
unnable:i,programLog:t,vertexShader:{log:e,prefix:_},fragmentShader:{log:n,=
prefix:w}})}let E,A;return a.deleteShader(S),a.deleteShader(T),this.getUnif=
orms=3Dfunction(){return void 0=3D=3D=3DE&amp;&amp;(E=3Dnew Cr(a,x)),E},thi=
s.getAttributes=3Dfunction(){return void 0=3D=3D=3DA&amp;&amp;(A=3Dfunction=
(t,e){const n=3D{},i=3Dt.getProgramParameter(e,35721);for(let r=3D0;r&lt;i;=
r++){const i=3Dt.getActiveAttrib(e,r).name;n[i]=3Dt.getAttribLocation(e,i)}=
return n}(a,x)),A},this.destroy=3Dfunction(){i.releaseStatesOfProgram(this)=
,a.deleteProgram(x),this.program=3Dvoid 0},this.name=3Dn.shaderName,this.id=
=3DDr++,this.cacheKey=3De,this.usedTimes=3D1,this.program=3Dx,this.vertexSh=
ader=3DS,this.fragmentShader=3DT,this}function Qr(t,e,n,i,r,s){const a=3D[]=
,o=3Di.isWebGL2,h=3Di.logarithmicDepthBuffer,u=3Di.floatVertexTextures,d=3D=
i.maxVertexUniforms,p=3Di.vertexTextures;let m=3Di.precision;const f=3D{Mes=
hDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMateri=
al:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPho=
ngMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",=
MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMateri=
al:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMateri=
al:"shadow",SpriteMaterial:"sprite"},g=3D["precision","isWebGL2","supportsV=
ertexTextures","outputEncoding","instancing","instancingColor","map","mapEn=
coding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","e=
nvMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveM=
apEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNorma=
lMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displace=
mentMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMa=
p","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uv=
sVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","loga=
rithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets"=
,"morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSp=
otLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPoin=
tLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","to=
neMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided",=
"numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen=
","transmissionMap"];function v(t){let e;return t&amp;&amp;t.isTexture?e=3D=
t.encoding:t&amp;&amp;t.isWebGLRenderTarget?(console.warn("THREE.WebGLProgr=
ams.getTextureEncodingFromMap: don't use render targets as textures. Use th=
eir .texture property instead."),e=3Dt.texture.encoding):e=3DX,e}return{get=
Parameters:function(r,a,g,y,x){const _=3Dy.fog,w=3Dr.isMeshStandardMaterial=
?y.environment:null,b=3De.get(r.envMap||w),M=3Df[r.type],S=3Dx.isSkinnedMes=
h?function(t){const e=3Dt.skeleton.bones;if(u)return 1024;{const t=3Dd,n=3D=
Math.floor((t-20)/4),i=3DMath.min(n,e.length);return i&lt;e.length?(console=
.warn("THREE.WebGLRenderer: Skeleton has "+e.length+" bones. This GPU suppo=
rts "+i+"."),0):i}}(x):0;let T,E;if(null!=3D=3Dr.precision&amp;&amp;(m=3Di.=
getMaxPrecision(r.precision),m!=3D=3Dr.precision&amp;&amp;console.warn("THR=
EE.WebGLProgram.getParameters:",r.precision,"not supported, using",m,"inste=
ad.")),M){const t=3Ddi[M];T=3Dt.vertexShader,E=3Dt.fragmentShader}else T=3D=
r.vertexShader,E=3Dr.fragmentShader;const A=3Dt.getRenderTarget();return{is=
WebGL2:o,shaderID:M,shaderName:r.type,vertexShader:T,fragmentShader:E,defin=
es:r.defines,isRawShaderMaterial:!0=3D=3D=3Dr.isRawShaderMaterial,glslVersi=
on:r.glslVersion,precision:m,instancing:!0=3D=3D=3Dx.isInstancedMesh,instan=
cingColor:!0=3D=3D=3Dx.isInstancedMesh&amp;&amp;null!=3D=3Dx.instanceColor,=
supportsVertexTextures:p,outputEncoding:null!=3D=3DA?v(A.texture):t.outputE=
ncoding,map:!!r.map,mapEncoding:v(r.map),matcap:!!r.matcap,matcapEncoding:v=
(r.matcap),envMap:!!b,envMapMode:b&amp;&amp;b.mapping,envMapEncoding:v(b),e=
nvMapCubeUV:!!b&amp;&amp;(b.mapping=3D=3D=3Dl||b.mapping=3D=3D=3Dc),lightMa=
p:!!r.lightMap,lightMapEncoding:v(r.lightMap),aoMap:!!r.aoMap,emissiveMap:!=
!r.emissiveMap,emissiveMapEncoding:v(r.emissiveMap),bumpMap:!!r.bumpMap,nor=
malMap:!!r.normalMap,objectSpaceNormalMap:1=3D=3D=3Dr.normalMapType,tangent=
SpaceNormalMap:0=3D=3D=3Dr.normalMapType,clearcoatMap:!!r.clearcoatMap,clea=
rcoatRoughnessMap:!!r.clearcoatRoughnessMap,clearcoatNormalMap:!!r.clearcoa=
tNormalMap,displacementMap:!!r.displacementMap,roughnessMap:!!r.roughnessMa=
p,metalnessMap:!!r.metalnessMap,specularMap:!!r.specularMap,alphaMap:!!r.al=
phaMap,gradientMap:!!r.gradientMap,sheen:!!r.sheen,transmissionMap:!!r.tran=
smissionMap,combine:r.combine,vertexTangents:r.normalMap&amp;&amp;r.vertexT=
angents,vertexColors:r.vertexColors,vertexAlphas:!0=3D=3D=3Dr.vertexColors&=
amp;&amp;x.geometry&amp;&amp;x.geometry.attributes.color&amp;&amp;4=3D=3D=
=3Dx.geometry.attributes.color.itemSize,vertexUvs:!!(r.map||r.bumpMap||r.no=
rmalMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metaln=
essMap||r.clearcoatMap||r.clearcoatRoughnessMap||r.clearcoatNormalMap||r.di=
splacementMap||r.transmissionMap),uvsVertexOnly:!(r.map||r.bumpMap||r.norma=
lMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metalness=
Map||r.clearcoatNormalMap||r.transmissionMap||!r.displacementMap),fog:!!_,u=
seFog:r.fog,fogExp2:_&amp;&amp;_.isFogExp2,flatShading:!!r.flatShading,size=
Attenuation:r.sizeAttenuation,logarithmicDepthBuffer:h,skinning:r.skinning&=
amp;&amp;S&gt;0,maxBones:S,useVertexTexture:u,morphTargets:r.morphTargets,m=
orphNormals:r.morphNormals,numDirLights:a.directional.length,numPointLights=
:a.point.length,numSpotLights:a.spot.length,numRectAreaLights:a.rectArea.le=
ngth,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.=
length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.s=
potShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.num=
Intersection,dithering:r.dithering,shadowMapEnabled:t.shadowMap.enabled&amp=
;&amp;g.length&gt;0,shadowMapType:t.shadowMap.type,toneMapping:r.toneMapped=
?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premulti=
pliedAlpha:r.premultipliedAlpha,alphaTest:r.alphaTest,doubleSided:2=3D=3D=
=3Dr.side,flipSided:1=3D=3D=3Dr.side,depthPacking:void 0!=3D=3Dr.depthPacki=
ng&amp;&amp;r.depthPacking,index0AttributeName:r.index0AttributeName,extens=
ionDerivatives:r.extensions&amp;&amp;r.extensions.derivatives,extensionFrag=
Depth:r.extensions&amp;&amp;r.extensions.fragDepth,extensionDrawBuffers:r.e=
xtensions&amp;&amp;r.extensions.drawBuffers,extensionShaderTextureLOD:r.ext=
ensions&amp;&amp;r.extensions.shaderTextureLOD,rendererExtensionFragDepth:o=
||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||n.has("WEBGL_draw=
_buffers"),rendererExtensionShaderTextureLod:o||n.has("EXT_shader_texture_l=
od"),customProgramCacheKey:r.customProgramCacheKey()}},getProgramCacheKey:f=
unction(e){const n=3D[];if(e.shaderID?n.push(e.shaderID):(n.push(e.fragment=
Shader),n.push(e.vertexShader)),void 0!=3D=3De.defines)for(const t in e.def=
ines)n.push(t),n.push(e.defines[t]);if(!1=3D=3D=3De.isRawShaderMaterial){fo=
r(let t=3D0;t&lt;g.length;t++)n.push(e[g[t]]);n.push(t.outputEncoding),n.pu=
sh(t.gammaFactor)}return n.push(e.customProgramCacheKey),n.join()},getUnifo=
rms:function(t){const e=3Df[t.type];let n;if(e){const t=3Ddi[e];n=3DZn.clon=
e(t.uniforms)}else n=3Dt.uniforms;return n},acquireProgram:function(e,n){le=
t i;for(let t=3D0,e=3Da.length;t&lt;e;t++){const e=3Da[t];if(e.cacheKey=3D=
=3D=3Dn){i=3De,++i.usedTimes;break}}return void 0=3D=3D=3Di&amp;&amp;(i=3Dn=
ew Jr(t,n,e,r),a.push(i)),i},releaseProgram:function(t){if(0=3D=3D--t.usedT=
imes){const e=3Da.indexOf(t);a[e]=3Da[a.length-1],a.pop(),t.destroy()}},pro=
grams:a}}function Kr(){let t=3Dnew WeakMap;return{get:function(e){let n=3Dt=
.get(e);return void 0=3D=3D=3Dn&amp;&amp;(n=3D{},t.set(e,n)),n},remove:func=
tion(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=3Di},dispose:functi=
on(){t=3Dnew WeakMap}}}function $r(t,e){return t.groupOrder!=3D=3De.groupOr=
der?t.groupOrder-e.groupOrder:t.renderOrder!=3D=3De.renderOrder?t.renderOrd=
er-e.renderOrder:t.program!=3D=3De.program?t.program.id-e.program.id:t.mate=
rial.id!=3D=3De.material.id?t.material.id-e.material.id:t.z!=3D=3De.z?t.z-e=
.z:t.id-e.id}function ts(t,e){return t.groupOrder!=3D=3De.groupOrder?t.grou=
pOrder-e.groupOrder:t.renderOrder!=3D=3De.renderOrder?t.renderOrder-e.rende=
rOrder:t.z!=3D=3De.z?e.z-t.z:t.id-e.id}function es(t){const e=3D[];let n=3D=
0;const i=3D[],r=3D[],s=3D{id:-1};function a(i,r,a,o,l,c){let h=3De[n];cons=
t u=3Dt.get(a);return void 0=3D=3D=3Dh?(h=3D{id:i.id,object:i,geometry:r,ma=
terial:a,program:u.program||s,groupOrder:o,renderOrder:i.renderOrder,z:l,gr=
oup:c},e[n]=3Dh):(h.id=3Di.id,h.object=3Di,h.geometry=3Dr,h.material=3Da,h.=
program=3Du.program||s,h.groupOrder=3Do,h.renderOrder=3Di.renderOrder,h.z=
=3Dl,h.group=3Dc),n++,h}return{opaque:i,transparent:r,init:function(){n=3D0=
,i.length=3D0,r.length=3D0},push:function(t,e,n,s,o,l){const c=3Da(t,e,n,s,=
o,l);(!0=3D=3D=3Dn.transparent?r:i).push(c)},unshift:function(t,e,n,s,o,l){=
const c=3Da(t,e,n,s,o,l);(!0=3D=3D=3Dn.transparent?r:i).unshift(c)},finish:=
function(){for(let t=3Dn,i=3De.length;t&lt;i;t++){const n=3De[t];if(null=3D=
=3D=3Dn.id)break;n.id=3Dnull,n.object=3Dnull,n.geometry=3Dnull,n.material=
=3Dnull,n.program=3Dnull,n.group=3Dnull}},sort:function(t,e){i.length&gt;1&=
amp;&amp;i.sort(t||$r),r.length&gt;1&amp;&amp;r.sort(e||ts)}}}function ns(t=
){let e=3Dnew WeakMap;return{get:function(n,i){let r;return!1=3D=3D=3De.has=
(n)?(r=3Dnew es(t),e.set(n,[r])):i&gt;=3De.get(n).length?(r=3Dnew es(t),e.g=
et(n).push(r)):r=3De.get(n)[i],r},dispose:function(){e=3Dnew WeakMap}}}func=
tion is(){const t=3D{};return{get:function(e){if(void 0!=3D=3Dt[e.id])retur=
n t[e.id];let n;switch(e.type){case"DirectionalLight":n=3D{direction:new Lt=
,color:new tn};break;case"SpotLight":n=3D{position:new Lt,direction:new Lt,=
color:new tn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLi=
ght":n=3D{position:new Lt,color:new tn,distance:0,decay:0};break;case"Hemis=
phereLight":n=3D{direction:new Lt,skyColor:new tn,groundColor:new tn};break=
;case"RectAreaLight":n=3D{color:new tn,position:new Lt,halfWidth:new Lt,hal=
fHeight:new Lt}}return t[e.id]=3Dn,n}}}let rs=3D0;function ss(t,e){return(e=
.castShadow?1:0)-(t.castShadow?1:0)}function as(t,e){const n=3Dnew is,i=3Df=
unction(){const t=3D{};return{get:function(e){if(void 0!=3D=3Dt[e.id])retur=
n t[e.id];let n;switch(e.type){case"DirectionalLight":case"SpotLight":n=3D{=
shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;=
case"PointLight":n=3D{shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadow=
MapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3}}return t[e.id]=3Dn,n=
}}}(),r=3D{version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-=
1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:=
-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalSh=
adow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShad=
ow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,re=
ctAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix=
:[],hemi:[]};for(let t=3D0;t&lt;9;t++)r.probe.push(new Lt);const s=3Dnew Lt=
,a=3Dnew se,o=3Dnew se;return{setup:function(s){let a=3D0,o=3D0,l=3D0;for(l=
et t=3D0;t&lt;9;t++)r.probe[t].set(0,0,0);let c=3D0,h=3D0,u=3D0,d=3D0,p=3D0=
,m=3D0,f=3D0,g=3D0;s.sort(ss);for(let t=3D0,e=3Ds.length;t&lt;e;t++){const =
e=3Ds[t],v=3De.color,y=3De.intensity,x=3De.distance,_=3De.shadow&amp;&amp;e=
.shadow.map?e.shadow.map.texture:null;if(e.isAmbientLight)a+=3Dv.r*y,o+=3Dv=
.g*y,l+=3Dv.b*y;else if(e.isLightProbe)for(let t=3D0;t&lt;9;t++)r.probe[t].=
addScaledVector(e.sh.coefficients[t],y);else if(e.isDirectionalLight){const=
 t=3Dn.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity),e.castSh=
adow){const t=3De.shadow,n=3Di.get(e);n.shadowBias=3Dt.bias,n.shadowNormalB=
ias=3Dt.normalBias,n.shadowRadius=3Dt.radius,n.shadowMapSize=3Dt.mapSize,r.=
directionalShadow[c]=3Dn,r.directionalShadowMap[c]=3D_,r.directionalShadowM=
atrix[c]=3De.shadow.matrix,m++}r.directional[c]=3Dt,c++}else if(e.isSpotLig=
ht){const t=3Dn.get(e);if(t.position.setFromMatrixPosition(e.matrixWorld),t=
.color.copy(v).multiplyScalar(y),t.distance=3Dx,t.coneCos=3DMath.cos(e.angl=
e),t.penumbraCos=3DMath.cos(e.angle*(1-e.penumbra)),t.decay=3De.decay,e.cas=
tShadow){const t=3De.shadow,n=3Di.get(e);n.shadowBias=3Dt.bias,n.shadowNorm=
alBias=3Dt.normalBias,n.shadowRadius=3Dt.radius,n.shadowMapSize=3Dt.mapSize=
,r.spotShadow[u]=3Dn,r.spotShadowMap[u]=3D_,r.spotShadowMatrix[u]=3De.shado=
w.matrix,g++}r.spot[u]=3Dt,u++}else if(e.isRectAreaLight){const t=3Dn.get(e=
);t.color.copy(v).multiplyScalar(y),t.halfWidth.set(.5*e.width,0,0),t.halfH=
eight.set(0,.5*e.height,0),r.rectArea[d]=3Dt,d++}else if(e.isPointLight){co=
nst t=3Dn.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity),t.dis=
tance=3De.distance,t.decay=3De.decay,e.castShadow){const t=3De.shadow,n=3Di=
.get(e);n.shadowBias=3Dt.bias,n.shadowNormalBias=3Dt.normalBias,n.shadowRad=
ius=3Dt.radius,n.shadowMapSize=3Dt.mapSize,n.shadowCameraNear=3Dt.camera.ne=
ar,n.shadowCameraFar=3Dt.camera.far,r.pointShadow[h]=3Dn,r.pointShadowMap[h=
]=3D_,r.pointShadowMatrix[h]=3De.shadow.matrix,f++}r.point[h]=3Dt,h++}else =
if(e.isHemisphereLight){const t=3Dn.get(e);t.skyColor.copy(e.color).multipl=
yScalar(y),t.groundColor.copy(e.groundColor).multiplyScalar(y),r.hemi[p]=3D=
t,p++}}d&gt;0&amp;&amp;(e.isWebGL2||!0=3D=3D=3Dt.has("OES_texture_float_lin=
ear")?(r.rectAreaLTC1=3Dui.LTC_FLOAT_1,r.rectAreaLTC2=3Dui.LTC_FLOAT_2):!0=
=3D=3D=3Dt.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=3Dui.LTC_HA=
LF_1,r.rectAreaLTC2=3Dui.LTC_HALF_2):console.error("THREE.WebGLRenderer: Un=
able to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=3Da,r.=
ambient[1]=3Do,r.ambient[2]=3Dl;const v=3Dr.hash;v.directionalLength=3D=3D=
=3Dc&amp;&amp;v.pointLength=3D=3D=3Dh&amp;&amp;v.spotLength=3D=3D=3Du&amp;&=
amp;v.rectAreaLength=3D=3D=3Dd&amp;&amp;v.hemiLength=3D=3D=3Dp&amp;&amp;v.n=
umDirectionalShadows=3D=3D=3Dm&amp;&amp;v.numPointShadows=3D=3D=3Df&amp;&am=
p;v.numSpotShadows=3D=3D=3Dg||(r.directional.length=3Dc,r.spot.length=3Du,r=
.rectArea.length=3Dd,r.point.length=3Dh,r.hemi.length=3Dp,r.directionalShad=
ow.length=3Dm,r.directionalShadowMap.length=3Dm,r.pointShadow.length=3Df,r.=
pointShadowMap.length=3Df,r.spotShadow.length=3Dg,r.spotShadowMap.length=3D=
g,r.directionalShadowMatrix.length=3Dm,r.pointShadowMatrix.length=3Df,r.spo=
tShadowMatrix.length=3Dg,v.directionalLength=3Dc,v.pointLength=3Dh,v.spotLe=
ngth=3Du,v.rectAreaLength=3Dd,v.hemiLength=3Dp,v.numDirectionalShadows=3Dm,=
v.numPointShadows=3Df,v.numSpotShadows=3Dg,r.version=3Drs++)},setupView:fun=
ction(t,e){let n=3D0,i=3D0,l=3D0,c=3D0,h=3D0;const u=3De.matrixWorldInverse=
;for(let e=3D0,d=3Dt.length;e&lt;d;e++){const d=3Dt[e];if(d.isDirectionalLi=
ght){const t=3Dr.directional[n];t.direction.setFromMatrixPosition(d.matrixW=
orld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.di=
rection.transformDirection(u),n++}else if(d.isSpotLight){const t=3Dr.spot[l=
];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u=
),t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(=
d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),=
l++}else if(d.isRectAreaLight){const t=3Dr.rectArea[c];t.position.setFromMa=
trixPosition(d.matrixWorld),t.position.applyMatrix4(u),o.identity(),a.copy(=
d.matrixWorld),a.premultiply(u),o.extractRotation(a),t.halfWidth.set(.5*d.w=
idth,0,0),t.halfHeight.set(0,.5*d.height,0),t.halfWidth.applyMatrix4(o),t.h=
alfHeight.applyMatrix4(o),c++}else if(d.isPointLight){const t=3Dr.point[i];=
t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),=
i++}else if(d.isHemisphereLight){const t=3Dr.hemi[h];t.direction.setFromMat=
rixPosition(d.matrixWorld),t.direction.transformDirection(u),t.direction.no=
rmalize(),h++}}},state:r}}function os(t,e){const n=3Dnew as(t,e),i=3D[],r=
=3D[];return{init:function(){i.length=3D0,r.length=3D0},state:{lightsArray:=
i,shadowsArray:r,lights:n},setupLights:function(){n.setup(i)},setupLightsVi=
ew:function(t){n.setupView(i,t)},pushLight:function(t){i.push(t)},pushShado=
w:function(t){r.push(t)}}}function ls(t,e){let n=3Dnew WeakMap;return{get:f=
unction(i,r=3D0){let s;return!1=3D=3D=3Dn.has(i)?(s=3Dnew os(t,e),n.set(i,[=
s])):r&gt;=3Dn.get(i).length?(s=3Dnew os(t,e),n.get(i).push(s)):s=3Dn.get(i=
)[r],s},dispose:function(){n=3Dnew WeakMap}}}class cs extends Xe{constructo=
r(t){super(),this.type=3D"MeshDepthMaterial",this.depthPacking=3D3200,this.=
skinning=3D!1,this.morphTargets=3D!1,this.map=3Dnull,this.alphaMap=3Dnull,t=
his.displacementMap=3Dnull,this.displacementScale=3D1,this.displacementBias=
=3D0,this.wireframe=3D!1,this.wireframeLinewidth=3D1,this.fog=3D!1,this.set=
Values(t)}copy(t){return super.copy(t),this.depthPacking=3Dt.depthPacking,t=
his.skinning=3Dt.skinning,this.morphTargets=3Dt.morphTargets,this.map=3Dt.m=
ap,this.alphaMap=3Dt.alphaMap,this.displacementMap=3Dt.displacementMap,this=
.displacementScale=3Dt.displacementScale,this.displacementBias=3Dt.displace=
mentBias,this.wireframe=3Dt.wireframe,this.wireframeLinewidth=3Dt.wireframe=
Linewidth,this}}cs.prototype.isMeshDepthMaterial=3D!0;class hs extends Xe{c=
onstructor(t){super(),this.type=3D"MeshDistanceMaterial",this.referencePosi=
tion=3Dnew Lt,this.nearDistance=3D1,this.farDistance=3D1e3,this.skinning=3D=
!1,this.morphTargets=3D!1,this.map=3Dnull,this.alphaMap=3Dnull,this.displac=
ementMap=3Dnull,this.displacementScale=3D1,this.displacementBias=3D0,this.f=
og=3D!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePositi=
on.copy(t.referencePosition),this.nearDistance=3Dt.nearDistance,this.farDis=
tance=3Dt.farDistance,this.skinning=3Dt.skinning,this.morphTargets=3Dt.morp=
hTargets,this.map=3Dt.map,this.alphaMap=3Dt.alphaMap,this.displacementMap=
=3Dt.displacementMap,this.displacementScale=3Dt.displacementScale,this.disp=
lacementBias=3Dt.displacementBias,this}}hs.prototype.isMeshDistanceMaterial=
=3D!0;function us(t,e,n){let i=3Dnew ai;const r=3Dnew vt,s=3Dnew vt,a=3Dnew=
 St,o=3D[],l=3D[],c=3D{},h=3Dn.maxTextureSize,u=3D{0:1,1:0,2:2},d=3Dnew Jn(=
{defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{valu=
e:null},resolution:{value:new vt},radius:{value:4}},vertexShader:"void main=
() {\n\tgl_Position =3D vec4( position, 1.0 );\n}",fragmentShader:"uniform =
sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#i=
nclude &lt;packing&gt;\nvoid main() {\n\tfloat mean =3D 0.0;\n\tfloat squar=
ed_mean =3D 0.0;\n\tfloat depth =3D unpackRGBAToDepth( texture2D( shadow_pa=
ss, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i =3D -1.0; i &lt;=
 1.0 ; i +=3D SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distri=
bution =3D unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + v=
ec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean +=3D distribution.x;=
\n\t\t\tsquared_mean +=3D distribution.y * distribution.y + distribution.x =
* distribution.x;\n\t\t#else\n\t\t\tfloat depth =3D unpackRGBAToDepth( text=
ure2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolut=
ion ) );\n\t\t\tmean +=3D depth;\n\t\t\tsquared_mean +=3D depth * depth;\n\=
t\t#endif\n\t}\n\tmean =3D mean * HALF_SAMPLE_RATE;\n\tsquared_mean =3D squ=
ared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev =3D sqrt( squared_mean - mea=
n * mean );\n\tgl_FragColor =3D pack2HalfToRGBA( vec2( mean, std_dev ) );\n=
}"}),m=3Dd.clone();m.defines.HORIZONTAL_PASS=3D1;const f=3Dnew En;f.setAttr=
ibute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));co=
nst v=3Dnew Wn(f,d),y=3Dthis;function x(n,i){const r=3De.update(v);d.unifor=
ms.shadow_pass.value=3Dn.map.texture,d.uniforms.resolution.value=3Dn.mapSiz=
e,d.uniforms.radius.value=3Dn.radius,t.setRenderTarget(n.mapPass),t.clear()=
,t.renderBufferDirect(i,null,r,d,v,null),m.uniforms.shadow_pass.value=3Dn.m=
apPass.texture,m.uniforms.resolution.value=3Dn.mapSize,m.uniforms.radius.va=
lue=3Dn.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,nu=
ll,r,m,v,null)}function _(t,e,n){const i=3Dt&lt;&lt;0|e&lt;&lt;1|n&lt;&lt;2=
;let r=3Do[i];return void 0=3D=3D=3Dr&amp;&amp;(r=3Dnew cs({depthPacking:32=
01,morphTargets:t,skinning:e}),o[i]=3Dr),r}function w(t,e,n){const i=3Dt&lt=
;&lt;0|e&lt;&lt;1|n&lt;&lt;2;let r=3Dl[i];return void 0=3D=3D=3Dr&amp;&amp;=
(r=3Dnew hs({morphTargets:t,skinning:e}),l[i]=3Dr),r}function b(e,n,i,r,s,a=
,o){let l=3Dnull,h=3D_,d=3De.customDepthMaterial;if(!0=3D=3D=3Dr.isPointLig=
ht&amp;&amp;(h=3Dw,d=3De.customDistanceMaterial),void 0=3D=3D=3Dd){let t=3D=
!1;!0=3D=3D=3Di.morphTargets&amp;&amp;(t=3Dn.morphAttributes&amp;&amp;n.mor=
phAttributes.position&amp;&amp;n.morphAttributes.position.length&gt;0);let =
r=3D!1;!0=3D=3D=3De.isSkinnedMesh&amp;&amp;(!0=3D=3D=3Di.skinning?r=3D!0:co=
nsole.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning =
set to false:",e));l=3Dh(t,r,!0=3D=3D=3De.isInstancedMesh)}else l=3Dd;if(t.=
localClippingEnabled&amp;&amp;!0=3D=3D=3Di.clipShadows&amp;&amp;0!=3D=3Di.c=
lippingPlanes.length){const t=3Dl.uuid,e=3Di.uuid;let n=3Dc[t];void 0=3D=3D=
=3Dn&amp;&amp;(n=3D{},c[t]=3Dn);let r=3Dn[e];void 0=3D=3D=3Dr&amp;&amp;(r=
=3Dl.clone(),n[e]=3Dr),l=3Dr}return l.visible=3Di.visible,l.wireframe=3Di.w=
ireframe,l.side=3D3=3D=3D=3Do?null!=3D=3Di.shadowSide?i.shadowSide:i.side:n=
ull!=3D=3Di.shadowSide?i.shadowSide:u[i.side],l.clipShadows=3Di.clipShadows=
,l.clippingPlanes=3Di.clippingPlanes,l.clipIntersection=3Di.clipIntersectio=
n,l.wireframeLinewidth=3Di.wireframeLinewidth,l.linewidth=3Di.linewidth,!0=
=3D=3D=3Dr.isPointLight&amp;&amp;!0=3D=3D=3Dl.isMeshDistanceMaterial&amp;&a=
mp;(l.referencePosition.setFromMatrixPosition(r.matrixWorld),l.nearDistance=
=3Ds,l.farDistance=3Da),l}function M(n,r,s,a,o){if(!1=3D=3D=3Dn.visible)ret=
urn;if(n.layers.test(r.layers)&amp;&amp;(n.isMesh||n.isLine||n.isPoints)&am=
p;&amp;(n.castShadow||n.receiveShadow&amp;&amp;3=3D=3D=3Do)&amp;&amp;(!n.fr=
ustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.m=
atrixWorldInverse,n.matrixWorld);const i=3De.update(n),r=3Dn.material;if(Ar=
ray.isArray(r)){const e=3Di.groups;for(let l=3D0,c=3De.length;l&lt;c;l++){c=
onst c=3De[l],h=3Dr[c.materialIndex];if(h&amp;&amp;h.visible){const e=3Db(n=
,i,h,a,s.near,s.far,o);t.renderBufferDirect(s,null,i,e,n,c)}}}else if(r.vis=
ible){const e=3Db(n,i,r,a,s.near,s.far,o);t.renderBufferDirect(s,null,i,e,n=
,null)}}const l=3Dn.children;for(let t=3D0,e=3Dl.length;t&lt;e;t++)M(l[t],r=
,s,a,o)}this.enabled=3D!1,this.autoUpdate=3D!0,this.needsUpdate=3D!1,this.t=
ype=3D1,this.render=3Dfunction(e,n,o){if(!1=3D=3D=3Dy.enabled)return;if(!1=
=3D=3D=3Dy.autoUpdate&amp;&amp;!1=3D=3D=3Dy.needsUpdate)return;if(0=3D=3D=
=3De.length)return;const l=3Dt.getRenderTarget(),c=3Dt.getActiveCubeFace(),=
u=3Dt.getActiveMipmapLevel(),d=3Dt.state;d.setBlending(0),d.buffers.color.s=
etClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);for(let l=
=3D0,c=3De.length;l&lt;c;l++){const c=3De[l],u=3Dc.shadow;if(void 0=3D=3D=
=3Du){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(=
!1=3D=3D=3Du.autoUpdate&amp;&amp;!1=3D=3D=3Du.needsUpdate)continue;r.copy(u=
.mapSize);const m=3Du.getFrameExtents();if(r.multiply(m),s.copy(u.mapSize),=
(r.x&gt;h||r.y&gt;h)&amp;&amp;(r.x&gt;h&amp;&amp;(s.x=3DMath.floor(h/m.x),r=
.x=3Ds.x*m.x,u.mapSize.x=3Ds.x),r.y&gt;h&amp;&amp;(s.y=3DMath.floor(h/m.y),=
r.y=3Ds.y*m.y,u.mapSize.y=3Ds.y)),null=3D=3D=3Du.map&amp;&amp;!u.isPointLig=
htShadow&amp;&amp;3=3D=3D=3Dthis.type){const t=3D{minFilter:g,magFilter:g,f=
ormat:E};u.map=3Dnew Tt(r.x,r.y,t),u.map.texture.name=3Dc.name+".shadowMap"=
,u.mapPass=3Dnew Tt(r.x,r.y,t),u.camera.updateProjectionMatrix()}if(null=3D=
=3D=3Du.map){const t=3D{minFilter:p,magFilter:p,format:E};u.map=3Dnew Tt(r.=
x,r.y,t),u.map.texture.name=3Dc.name+".shadowMap",u.camera.updateProjection=
Matrix()}t.setRenderTarget(u.map),t.clear();const f=3Du.getViewportCount();=
for(let t=3D0;t&lt;f;t++){const e=3Du.getViewport(t);a.set(s.x*e.x,s.y*e.y,=
s.x*e.z,s.y*e.w),d.viewport(a),u.updateMatrices(c,t),i=3Du.getFrustum(),M(n=
,o,u.camera,c,this.type)}u.isPointLightShadow||3!=3D=3Dthis.type||x(u,o),u.=
needsUpdate=3D!1}y.needsUpdate=3D!1,t.setRenderTarget(l,c,u)}}function ds(t=
,e,i){const r=3Di.isWebGL2;const s=3Dnew function(){let e=3D!1;const n=3Dne=
w St;let i=3Dnull;const r=3Dnew St(0,0,0,0);return{setMask:function(n){i=3D=
=3D=3Dn||e||(t.colorMask(n,n,n,n),i=3Dn)},setLocked:function(t){e=3Dt},setC=
lear:function(e,i,s,a,o){!0=3D=3D=3Do&amp;&amp;(e*=3Da,i*=3Da,s*=3Da),n.set=
(e,i,s,a),!1=3D=3D=3Dr.equals(n)&amp;&amp;(t.clearColor(e,i,s,a),r.copy(n))=
},reset:function(){e=3D!1,i=3Dnull,r.set(-1,0,0,0)}}},a=3Dnew function(){le=
t e=3D!1,n=3Dnull,i=3Dnull,r=3Dnull;return{setTest:function(t){t?z(2929):F(=
2929)},setMask:function(i){n=3D=3D=3Di||e||(t.depthMask(i),n=3Di)},setFunc:=
function(e){if(i!=3D=3De){if(e)switch(e){case 0:t.depthFunc(512);break;case=
 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:t.depthFunc(=
515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case=
 6:t.depthFunc(516);break;case 7:t.depthFunc(517);break;default:t.depthFunc=
(515)}else t.depthFunc(515);i=3De}},setLocked:function(t){e=3Dt},setClear:f=
unction(e){r!=3D=3De&amp;&amp;(t.clearDepth(e),r=3De)},reset:function(){e=
=3D!1,n=3Dnull,i=3Dnull,r=3Dnull}}},o=3Dnew function(){let e=3D!1,n=3Dnull,=
i=3Dnull,r=3Dnull,s=3Dnull,a=3Dnull,o=3Dnull,l=3Dnull,c=3Dnull;return{setTe=
st:function(t){e||(t?z(2960):F(2960))},setMask:function(i){n=3D=3D=3Di||e||=
(t.stencilMask(i),n=3Di)},setFunc:function(e,n,a){i=3D=3D=3De&amp;&amp;r=3D=
=3D=3Dn&amp;&amp;s=3D=3D=3Da||(t.stencilFunc(e,n,a),i=3De,r=3Dn,s=3Da)},set=
Op:function(e,n,i){a=3D=3D=3De&amp;&amp;o=3D=3D=3Dn&amp;&amp;l=3D=3D=3Di||(=
t.stencilOp(e,n,i),a=3De,o=3Dn,l=3Di)},setLocked:function(t){e=3Dt},setClea=
r:function(e){c!=3D=3De&amp;&amp;(t.clearStencil(e),c=3De)},reset:function(=
){e=3D!1,n=3Dnull,i=3Dnull,r=3Dnull,s=3Dnull,a=3Dnull,o=3Dnull,l=3Dnull,c=
=3Dnull}}};let l=3D{},c=3Dnull,h=3D{},u=3Dnull,d=3D!1,p=3Dnull,m=3Dnull,f=
=3Dnull,g=3Dnull,v=3Dnull,y=3Dnull,x=3Dnull,_=3D!1,w=3Dnull,b=3Dnull,M=3Dnu=
ll,S=3Dnull,T=3Dnull;const E=3Dt.getParameter(35661);let A=3D!1,L=3D0;const=
 R=3Dt.getParameter(7938);-1!=3D=3DR.indexOf("WebGL")?(L=3DparseFloat(/^Web=
GL (\d)/.exec(R)[1]),A=3DL&gt;=3D1):-1!=3D=3DR.indexOf("OpenGL ES")&amp;&am=
p;(L=3DparseFloat(/^OpenGL ES (\d)/.exec(R)[1]),A=3DL&gt;=3D2);let C=3Dnull=
,P=3D{};const D=3Dnew St(0,0,t.canvas.width,t.canvas.height),I=3Dnew St(0,0=
,t.canvas.width,t.canvas.height);function N(e,n,i){const r=3Dnew Uint8Array=
(4),s=3Dt.createTexture();t.bindTexture(e,s),t.texParameteri(e,10241,9728),=
t.texParameteri(e,10240,9728);for(let e=3D0;e&lt;i;e++)t.texImage2D(n+e,0,6=
408,1,1,0,6408,5121,r);return s}const B=3D{};function z(e){!0!=3D=3Dl[e]&am=
p;&amp;(t.enable(e),l[e]=3D!0)}function F(e){!1!=3D=3Dl[e]&amp;&amp;(t.disa=
ble(e),l[e]=3D!1)}B[3553]=3DN(3553,3553,1),B[34067]=3DN(34067,34069,6),s.se=
tClear(0,0,0,1),a.setClear(1),o.setClear(0),z(2929),a.setFunc(3),U(!1),k(1)=
,z(2884),G(0);const O=3D{[n]:32774,101:32778,102:32779};if(r)O[103]=3D32775=
,O[104]=3D32776;else{const t=3De.get("EXT_blend_minmax");null!=3D=3Dt&amp;&=
amp;(O[103]=3Dt.MIN_EXT,O[104]=3Dt.MAX_EXT)}const H=3D{200:0,201:1,202:768,=
204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function G=
(e,i,r,s,a,o,l,c){if(0!=3D=3De){if(!1=3D=3D=3Dd&amp;&amp;(z(3042),d=3D!0),5=
=3D=3D=3De)a=3Da||i,o=3Do||r,l=3Dl||s,i=3D=3D=3Dm&amp;&amp;a=3D=3D=3Dv||(t.=
blendEquationSeparate(O[i],O[a]),m=3Di,v=3Da),r=3D=3D=3Df&amp;&amp;s=3D=3D=
=3Dg&amp;&amp;o=3D=3D=3Dy&amp;&amp;l=3D=3D=3Dx||(t.blendFuncSeparate(H[r],H=
[s],H[o],H[l]),f=3Dr,g=3Ds,y=3Do,x=3Dl),p=3De,_=3Dnull;else if(e!=3D=3Dp||c=
!=3D=3D_){if(m=3D=3D=3Dn&amp;&amp;v=3D=3D=3Dn||(t.blendEquation(32774),m=3D=
n,v=3Dn),c)switch(e){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t=
.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,0,769,771);break;case 4:=
t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLSt=
ate: Invalid blending: ",e)}else switch(e){case 1:t.blendFuncSeparate(770,7=
71,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFunc(0,769);b=
reak;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLStat=
e: Invalid blending: ",e)}f=3Dnull,g=3Dnull,y=3Dnull,x=3Dnull,p=3De,_=3Dc}}=
else!0=3D=3D=3Dd&amp;&amp;(F(3042),d=3D!1)}function U(e){w!=3D=3De&amp;&amp=
;(e?t.frontFace(2304):t.frontFace(2305),w=3De)}function k(e){0!=3D=3De?(z(2=
884),e!=3D=3Db&amp;&amp;(1=3D=3D=3De?t.cullFace(1029):2=3D=3D=3De?t.cullFac=
e(1028):t.cullFace(1032))):F(2884),b=3De}function V(e,n,i){e?(z(32823),S=3D=
=3D=3Dn&amp;&amp;T=3D=3D=3Di||(t.polygonOffset(n,i),S=3Dn,T=3Di)):F(32823)}=
function W(e){void 0=3D=3D=3De&amp;&amp;(e=3D33984+E-1),C!=3D=3De&amp;&amp;=
(t.activeTexture(e),C=3De)}return{buffers:{color:s,depth:a,stencil:o},enabl=
e:z,disable:F,bindFramebuffer:function(e,n){null=3D=3D=3Dn&amp;&amp;null!=
=3D=3Dc&amp;&amp;(n=3Dc),h[e]!=3D=3Dn&amp;&amp;(t.bindFramebuffer(e,n),h[e]=
=3Dn,r&amp;&amp;(36009=3D=3D=3De&amp;&amp;(h[36160]=3Dn),36160=3D=3D=3De&am=
p;&amp;(h[36009]=3Dn)))},bindXRFramebuffer:function(e){e!=3D=3Dc&amp;&amp;(=
t.bindFramebuffer(36160,e),c=3De)},useProgram:function(e){return u!=3D=3De&=
amp;&amp;(t.useProgram(e),u=3De,!0)},setBlending:G,setMaterial:function(t,e=
){2=3D=3D=3Dt.side?F(2884):z(2884);let n=3D1=3D=3D=3Dt.side;e&amp;&amp;(n=
=3D!n),U(n),1=3D=3D=3Dt.blending&amp;&amp;!1=3D=3D=3Dt.transparent?G(0):G(t=
.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blen=
dSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.se=
tTest(t.depthTest),a.setMask(t.depthWrite),s.setMask(t.colorWrite);const i=
=3Dt.stencilWrite;o.setTest(i),i&amp;&amp;(o.setMask(t.stencilWriteMask),o.=
setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail=
,t.stencilZFail,t.stencilZPass)),V(t.polygonOffset,t.polygonOffsetFactor,t.=
polygonOffsetUnits),!0=3D=3D=3Dt.alphaToCoverage?z(32926):F(32926)},setFlip=
Sided:U,setCullFace:k,setLineWidth:function(e){e!=3D=3DM&amp;&amp;(A&amp;&a=
mp;t.lineWidth(e),M=3De)},setPolygonOffset:V,setScissorTest:function(t){t?z=
(3089):F(3089)},activeTexture:W,bindTexture:function(e,n){null=3D=3D=3DC&am=
p;&amp;W();let i=3DP[C];void 0=3D=3D=3Di&amp;&amp;(i=3D{type:void 0,texture=
:void 0},P[C]=3Di),i.type=3D=3D=3De&amp;&amp;i.texture=3D=3D=3Dn||(t.bindTe=
xture(e,n||B[e]),i.type=3De,i.texture=3Dn)},unbindTexture:function(){const =
e=3DP[C];void 0!=3D=3De&amp;&amp;void 0!=3D=3De.type&amp;&amp;(t.bindTextur=
e(e.type,null),e.type=3Dvoid 0,e.texture=3Dvoid 0)},compressedTexImage2D:fu=
nction(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){console.err=
or("THREE.WebGLState:",t)}},texImage2D:function(){try{t.texImage2D.apply(t,=
arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage3D:funct=
ion(){try{t.texImage3D.apply(t,arguments)}catch(t){console.error("THREE.Web=
GLState:",t)}},scissor:function(e){!1=3D=3D=3DD.equals(e)&amp;&amp;(t.sciss=
or(e.x,e.y,e.z,e.w),D.copy(e))},viewport:function(e){!1=3D=3D=3DI.equals(e)=
&amp;&amp;(t.viewport(e.x,e.y,e.z,e.w),I.copy(e))},reset:function(){t.disab=
le(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t=
.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.b=
lendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.=
depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.=
stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0)=
,t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33=
984),t.bindFramebuffer(36160,null),!0=3D=3D=3Dr&amp;&amp;(t.bindFramebuffer=
(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(=
1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.wi=
dth,t.canvas.height),l=3D{},C=3Dnull,P=3D{},c=3Dnull,h=3D{},u=3Dnull,d=3D!1=
,p=3Dnull,m=3Dnull,f=3Dnull,g=3Dnull,v=3Dnull,y=3Dnull,x=3Dnull,_=3D!1,w=3D=
null,b=3Dnull,M=3Dnull,S=3Dnull,T=3Dnull,D.set(0,0,t.canvas.width,t.canvas.=
height),I.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.res=
et()}}}function ps(t,e,n,i,r,s,a){const o=3Dr.isWebGL2,l=3Dr.maxTextures,c=
=3Dr.maxCubemapSize,x=3Dr.maxTextureSize,R=3Dr.maxSamples,C=3Dnew WeakMap;l=
et P,D=3D!1;try{D=3D"undefined"!=3Dtypeof OffscreenCanvas&amp;&amp;null!=3D=
=3Dnew OffscreenCanvas(1,1).getContext("2d")}catch(t){}function I(t,e){retu=
rn D?new OffscreenCanvas(t,e):document.createElementNS("http://www.w3.org/1=
999/xhtml","canvas")}function N(t,e,n,i){let r=3D1;if((t.width&gt;i||t.heig=
ht&gt;i)&amp;&amp;(r=3Di/Math.max(t.width,t.height)),r&lt;1||!0=3D=3D=3De){=
if("undefined"!=3Dtypeof HTMLImageElement&amp;&amp;t instanceof HTMLImageEl=
ement||"undefined"!=3Dtypeof HTMLCanvasElement&amp;&amp;t instanceof HTMLCa=
nvasElement||"undefined"!=3Dtypeof ImageBitmap&amp;&amp;t instanceof ImageB=
itmap){const i=3De?ft:Math.floor,s=3Di(r*t.width),a=3Di(r*t.height);void 0=
=3D=3D=3DP&amp;&amp;(P=3DI(s,a));const o=3Dn?I(s,a):P;o.width=3Ds,o.height=
=3Da;return o.getContext("2d").drawImage(t,0,0,s,a),console.warn("THREE.Web=
GLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+=
s+"x"+a+")."),o}return"data"in t&amp;&amp;console.warn("THREE.WebGLRenderer=
: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}=
function B(t){return pt(t.width)&amp;&amp;pt(t.height)}function z(t,e){retu=
rn t.generateMipmaps&amp;&amp;e&amp;&amp;t.minFilter!=3D=3Dp&amp;&amp;t.min=
Filter!=3D=3Dg}function F(e,n,r,s){t.generateMipmap(e);i.get(n).__maxMipLev=
el=3DMath.log2(Math.max(r,s))}function O(n,i,r){if(!1=3D=3D=3Do)return i;if=
(null!=3D=3Dn){if(void 0!=3D=3Dt[n])return t[n];console.warn("THREE.WebGLRe=
nderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let s=
=3Di;return 6403=3D=3D=3Di&amp;&amp;(5126=3D=3D=3Dr&amp;&amp;(s=3D33326),51=
31=3D=3D=3Dr&amp;&amp;(s=3D33325),5121=3D=3D=3Dr&amp;&amp;(s=3D33321)),6407=
=3D=3D=3Di&amp;&amp;(5126=3D=3D=3Dr&amp;&amp;(s=3D34837),5131=3D=3D=3Dr&amp=
;&amp;(s=3D34843),5121=3D=3D=3Dr&amp;&amp;(s=3D32849)),6408=3D=3D=3Di&amp;&=
amp;(5126=3D=3D=3Dr&amp;&amp;(s=3D34836),5131=3D=3D=3Dr&amp;&amp;(s=3D34842=
),5121=3D=3D=3Dr&amp;&amp;(s=3D32856)),33325!=3D=3Ds&amp;&amp;33326!=3D=3Ds=
&amp;&amp;34842!=3D=3Ds&amp;&amp;34836!=3D=3Ds||e.get("EXT_color_buffer_flo=
at"),s}function H(t){return t=3D=3D=3Dp||t=3D=3D=3Dm||t=3D=3D=3Df?9728:9729=
}function G(e){const n=3De.target;n.removeEventListener("dispose",G),functi=
on(e){const n=3Di.get(e);if(void 0=3D=3D=3Dn.__webglInit)return;t.deleteTex=
ture(n.__webglTexture),i.remove(e)}(n),n.isVideoTexture&amp;&amp;C.delete(n=
),a.memory.textures--}function U(e){const n=3De.target;n.removeEventListene=
r("dispose",U),function(e){const n=3De.texture,r=3Di.get(e),s=3Di.get(n);if=
(!e)return;void 0!=3D=3Ds.__webglTexture&amp;&amp;t.deleteTexture(s.__webgl=
Texture);e.depthTexture&amp;&amp;e.depthTexture.dispose();if(e.isWebGLCubeR=
enderTarget)for(let e=3D0;e&lt;6;e++)t.deleteFramebuffer(r.__webglFramebuff=
er[e]),r.__webglDepthbuffer&amp;&amp;t.deleteRenderbuffer(r.__webglDepthbuf=
fer[e]);else t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer=
&amp;&amp;t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledF=
ramebuffer&amp;&amp;t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r=
.__webglColorRenderbuffer&amp;&amp;t.deleteRenderbuffer(r.__webglColorRende=
rbuffer),r.__webglDepthRenderbuffer&amp;&amp;t.deleteRenderbuffer(r.__webgl=
DepthRenderbuffer);i.remove(n),i.remove(e)}(n),a.memory.textures--}let k=3D=
0;function V(t,e){const r=3Di.get(t);if(t.isVideoTexture&amp;&amp;function(=
t){const e=3Da.render.frame;C.get(t)!=3D=3De&amp;&amp;(C.set(t,e),t.update(=
))}(t),t.version&gt;0&amp;&amp;r.__version!=3D=3Dt.version){const n=3Dt.ima=
ge;if(void 0=3D=3D=3Dn)console.warn("THREE.WebGLRenderer: Texture marked fo=
r update but image is undefined");else{if(!1!=3D=3Dn.complete)return void Z=
(r,t,e);console.warn("THREE.WebGLRenderer: Texture marked for update but im=
age is incomplete")}}n.activeTexture(33984+e),n.bindTexture(3553,r.__webglT=
exture)}function W(e,r){const a=3Di.get(e);e.version&gt;0&amp;&amp;a.__vers=
ion!=3D=3De.version?function(e,i,r){if(6!=3D=3Di.image.length)return;Y(e,i)=
,n.activeTexture(33984+r),n.bindTexture(34067,e.__webglTexture),t.pixelStor=
ei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlpha),t.pixelStorei(331=
7,i.unpackAlignment),t.pixelStorei(37443,0);const a=3Di&amp;&amp;(i.isCompr=
essedTexture||i.image[0].isCompressedTexture),l=3Di.image[0]&amp;&amp;i.ima=
ge[0].isDataTexture,h=3D[];for(let t=3D0;t&lt;6;t++)h[t]=3Da||l?l?i.image[t=
].image:i.image[t]:N(i.image[t],!1,!0,c);const u=3Dh[0],d=3DB(u)||o,p=3Ds.c=
onvert(i.format),m=3Ds.convert(i.type),f=3DO(i.internalFormat,p,m);let g;if=
(X(34067,i,d),a){for(let t=3D0;t&lt;6;t++){g=3Dh[t].mipmaps;for(let e=3D0;e=
&lt;g.length;e++){const r=3Dg[e];i.format!=3D=3DE&amp;&amp;i.format!=3D=3DT=
?null!=3D=3Dp?n.compressedTexImage2D(34069+t,e,f,r.width,r.height,0,r.data)=
:console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed =
texture format in .setTextureCube()"):n.texImage2D(34069+t,e,f,r.width,r.he=
ight,0,p,m,r.data)}}e.__maxMipLevel=3Dg.length-1}else{g=3Di.mipmaps;for(let=
 t=3D0;t&lt;6;t++)if(l){n.texImage2D(34069+t,0,f,h[t].width,h[t].height,0,p=
,m,h[t].data);for(let e=3D0;e&lt;g.length;e++){const i=3Dg[e].image[t].imag=
e;n.texImage2D(34069+t,e+1,f,i.width,i.height,0,p,m,i.data)}}else{n.texImag=
e2D(34069+t,0,f,p,m,h[t]);for(let e=3D0;e&lt;g.length;e++){const i=3Dg[e];n=
.texImage2D(34069+t,e+1,f,p,m,i.image[t])}}e.__maxMipLevel=3Dg.length}z(i,d=
)&amp;&amp;F(34067,i,u.width,u.height);e.__version=3Di.version,i.onUpdate&a=
mp;&amp;i.onUpdate(i)}(a,e,r):(n.activeTexture(33984+r),n.bindTexture(34067=
,a.__webglTexture))}const j=3D{[h]:10497,[u]:33071,[d]:33648},q=3D{[p]:9728=
,[m]:9984,[f]:9986,[g]:9729,[v]:9985,[y]:9987};function X(n,s,a){if(a?(t.te=
xParameteri(n,10242,j[s.wrapS]),t.texParameteri(n,10243,j[s.wrapT]),32879!=
=3D=3Dn&amp;&amp;35866!=3D=3Dn||t.texParameteri(n,32882,j[s.wrapR]),t.texPa=
rameteri(n,10240,q[s.magFilter]),t.texParameteri(n,10241,q[s.minFilter])):(=
t.texParameteri(n,10242,33071),t.texParameteri(n,10243,33071),32879!=3D=3Dn=
&amp;&amp;35866!=3D=3Dn||t.texParameteri(n,32882,33071),s.wrapS=3D=3D=3Du&a=
mp;&amp;s.wrapT=3D=3D=3Du||console.warn("THREE.WebGLRenderer: Texture is no=
t power of two. Texture.wrapS and Texture.wrapT should be set to THREE.Clam=
pToEdgeWrapping."),t.texParameteri(n,10240,H(s.magFilter)),t.texParameteri(=
n,10241,H(s.minFilter)),s.minFilter!=3D=3Dp&amp;&amp;s.minFilter!=3D=3Dg&am=
p;&amp;console.warn("THREE.WebGLRenderer: Texture is not power of two. Text=
ure.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")=
),!0=3D=3D=3De.has("EXT_texture_filter_anisotropic")){const a=3De.get("EXT_=
texture_filter_anisotropic");if(s.type=3D=3D=3Db&amp;&amp;!1=3D=3D=3De.has(=
"OES_texture_float_linear"))return;if(!1=3D=3D=3Do&amp;&amp;s.type=3D=3D=3D=
M&amp;&amp;!1=3D=3D=3De.has("OES_texture_half_float_linear"))return;(s.anis=
otropy&gt;1||i.get(s).__currentAnisotropy)&amp;&amp;(t.texParameterf(n,a.TE=
XTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get=
(s).__currentAnisotropy=3Ds.anisotropy)}}function Y(e,n){void 0=3D=3D=3De._=
_webglInit&amp;&amp;(e.__webglInit=3D!0,n.addEventListener("dispose",G),e._=
_webglTexture=3Dt.createTexture(),a.memory.textures++)}function Z(e,i,r){le=
t a=3D3553;i.isDataTexture2DArray&amp;&amp;(a=3D35866),i.isDataTexture3D&am=
p;&amp;(a=3D32879),Y(e,i),n.activeTexture(33984+r),n.bindTexture(a,e.__webg=
lTexture),t.pixelStorei(37440,i.flipY),t.pixelStorei(37441,i.premultiplyAlp=
ha),t.pixelStorei(3317,i.unpackAlignment),t.pixelStorei(37443,0);const l=3D=
function(t){return!o&amp;&amp;(t.wrapS!=3D=3Du||t.wrapT!=3D=3Du||t.minFilte=
r!=3D=3Dp&amp;&amp;t.minFilter!=3D=3Dg)}(i)&amp;&amp;!1=3D=3D=3DB(i.image),=
c=3DN(i.image,l,!1,x),h=3DB(c)||o,d=3Ds.convert(i.format);let m,f=3Ds.conve=
rt(i.type),v=3DO(i.internalFormat,d,f);X(a,i,h);const y=3Di.mipmaps;if(i.is=
DepthTexture)v=3D6402,o?v=3Di.type=3D=3D=3Db?36012:i.type=3D=3D=3Dw?33190:i=
.type=3D=3D=3DS?35056:33189:i.type=3D=3D=3Db&amp;&amp;console.error("WebGLR=
enderer: Floating point depth texture requires WebGL2."),i.format=3D=3D=3DA=
&amp;&amp;6402=3D=3D=3Dv&amp;&amp;i.type!=3D=3D_&amp;&amp;i.type!=3D=3Dw&am=
p;&amp;(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or Unsigne=
dIntType for DepthFormat DepthTexture."),i.type=3D_,f=3Ds.convert(i.type)),=
i.format=3D=3D=3DL&amp;&amp;6402=3D=3D=3Dv&amp;&amp;(v=3D34041,i.type!=3D=
=3DS&amp;&amp;(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type fo=
r DepthStencilFormat DepthTexture."),i.type=3DS,f=3Ds.convert(i.type))),n.t=
exImage2D(3553,0,v,c.width,c.height,0,d,f,null);else if(i.isDataTexture)if(=
y.length&gt;0&amp;&amp;h){for(let t=3D0,e=3Dy.length;t&lt;e;t++)m=3Dy[t],n.=
texImage2D(3553,t,v,m.width,m.height,0,d,f,m.data);i.generateMipmaps=3D!1,e=
.__maxMipLevel=3Dy.length-1}else n.texImage2D(3553,0,v,c.width,c.height,0,d=
,f,c.data),e.__maxMipLevel=3D0;else if(i.isCompressedTexture){for(let t=3D0=
,e=3Dy.length;t&lt;e;t++)m=3Dy[t],i.format!=3D=3DE&amp;&amp;i.format!=3D=3D=
T?null!=3D=3Dd?n.compressedTexImage2D(3553,t,v,m.width,m.height,0,m.data):c=
onsole.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed te=
xture format in .uploadTexture()"):n.texImage2D(3553,t,v,m.width,m.height,0=
,d,f,m.data);e.__maxMipLevel=3Dy.length-1}else if(i.isDataTexture2DArray)n.=
texImage3D(35866,0,v,c.width,c.height,c.depth,0,d,f,c.data),e.__maxMipLevel=
=3D0;else if(i.isDataTexture3D)n.texImage3D(32879,0,v,c.width,c.height,c.de=
pth,0,d,f,c.data),e.__maxMipLevel=3D0;else if(y.length&gt;0&amp;&amp;h){for=
(let t=3D0,e=3Dy.length;t&lt;e;t++)m=3Dy[t],n.texImage2D(3553,t,v,d,f,m);i.=
generateMipmaps=3D!1,e.__maxMipLevel=3Dy.length-1}else n.texImage2D(3553,0,=
v,d,f,c),e.__maxMipLevel=3D0;z(i,h)&amp;&amp;F(a,i,c.width,c.height),e.__ve=
rsion=3Di.version,i.onUpdate&amp;&amp;i.onUpdate(i)}function J(e,r,a,o){con=
st l=3Dr.texture,c=3Ds.convert(l.format),h=3Ds.convert(l.type),u=3DO(l.inte=
rnalFormat,c,h);32879=3D=3D=3Do||35866=3D=3D=3Do?n.texImage3D(o,0,u,r.width=
,r.height,r.depth,0,c,h,null):n.texImage2D(o,0,u,r.width,r.height,0,c,h,nul=
l),n.bindFramebuffer(36160,e),t.framebufferTexture2D(36160,a,o,i.get(l).__w=
ebglTexture,0),n.bindFramebuffer(36160,null)}function Q(e,n,i){if(t.bindRen=
derbuffer(36161,e),n.depthBuffer&amp;&amp;!n.stencilBuffer){let r=3D33189;i=
f(i){const e=3Dn.depthTexture;e&amp;&amp;e.isDepthTexture&amp;&amp;(e.type=
=3D=3D=3Db?r=3D36012:e.type=3D=3D=3Dw&amp;&amp;(r=3D33190));const i=3D$(n);=
t.renderbufferStorageMultisample(36161,i,r,n.width,n.height)}else t.renderb=
ufferStorage(36161,r,n.width,n.height);t.framebufferRenderbuffer(36160,3609=
6,36161,e)}else if(n.depthBuffer&amp;&amp;n.stencilBuffer){if(i){const e=3D=
$(n);t.renderbufferStorageMultisample(36161,e,35056,n.width,n.height)}else =
t.renderbufferStorage(36161,34041,n.width,n.height);t.framebufferRenderbuff=
er(36160,33306,36161,e)}else{const e=3Dn.texture,r=3Ds.convert(e.format),a=
=3Ds.convert(e.type),o=3DO(e.internalFormat,r,a);if(i){const e=3D$(n);t.ren=
derbufferStorageMultisample(36161,e,o,n.width,n.height)}else t.renderbuffer=
Storage(36161,o,n.width,n.height)}t.bindRenderbuffer(36161,null)}function K=
(e){const r=3Di.get(e),s=3D!0=3D=3D=3De.isWebGLCubeRenderTarget;if(e.depthT=
exture){if(s)throw new Error("target.depthTexture not supported in Cube ren=
der targets");!function(e,r){if(r&amp;&amp;r.isWebGLCubeRenderTarget)throw =
new Error("Depth Texture with cube render targets is not supported");if(n.b=
indFramebuffer(36160,e),!r.depthTexture||!r.depthTexture.isDepthTexture)thr=
ow new Error("renderTarget.depthTexture must be an instance of THREE.DepthT=
exture");i.get(r.depthTexture).__webglTexture&amp;&amp;r.depthTexture.image=
.width=3D=3D=3Dr.width&amp;&amp;r.depthTexture.image.height=3D=3D=3Dr.heigh=
t||(r.depthTexture.image.width=3Dr.width,r.depthTexture.image.height=3Dr.he=
ight,r.depthTexture.needsUpdate=3D!0),V(r.depthTexture,0);const s=3Di.get(r=
.depthTexture).__webglTexture;if(r.depthTexture.format=3D=3D=3DA)t.framebuf=
ferTexture2D(36160,36096,3553,s,0);else{if(r.depthTexture.format!=3D=3DL)th=
row new Error("Unknown depthTexture format");t.framebufferTexture2D(36160,3=
3306,3553,s,0)}}(r.__webglFramebuffer,e)}else if(s){r.__webglDepthbuffer=3D=
[];for(let i=3D0;i&lt;6;i++)n.bindFramebuffer(36160,r.__webglFramebuffer[i]=
),r.__webglDepthbuffer[i]=3Dt.createRenderbuffer(),Q(r.__webglDepthbuffer[i=
],e,!1)}else n.bindFramebuffer(36160,r.__webglFramebuffer),r.__webglDepthbu=
ffer=3Dt.createRenderbuffer(),Q(r.__webglDepthbuffer,e,!1);n.bindFramebuffe=
r(36160,null)}function $(t){return o&amp;&amp;t.isWebGLMultisampleRenderTar=
get?Math.min(R,t.samples):0}let tt=3D!1,et=3D!1;this.allocateTextureUnit=3D=
function(){const t=3Dk;return t&gt;=3Dl&amp;&amp;console.warn("THREE.WebGLT=
extures: Trying to use "+t+" texture units while this GPU supports only "+l=
),k+=3D1,t},this.resetTextureUnits=3Dfunction(){k=3D0},this.setTexture2D=3D=
V,this.setTexture2DArray=3Dfunction(t,e){const r=3Di.get(t);t.version&gt;0&=
amp;&amp;r.__version!=3D=3Dt.version?Z(r,t,e):(n.activeTexture(33984+e),n.b=
indTexture(35866,r.__webglTexture))},this.setTexture3D=3Dfunction(t,e){cons=
t r=3Di.get(t);t.version&gt;0&amp;&amp;r.__version!=3D=3Dt.version?Z(r,t,e)=
:(n.activeTexture(33984+e),n.bindTexture(32879,r.__webglTexture))},this.set=
TextureCube=3DW,this.setupRenderTarget=3Dfunction(e){const r=3De.texture,l=
=3Di.get(e),c=3Di.get(r);e.addEventListener("dispose",U),c.__webglTexture=
=3Dt.createTexture(),c.__version=3Dr.version,a.memory.textures++;const h=3D=
!0=3D=3D=3De.isWebGLCubeRenderTarget,u=3D!0=3D=3D=3De.isWebGLMultisampleRen=
derTarget,d=3Dr.isDataTexture3D||r.isDataTexture2DArray,p=3DB(e)||o;if(!o||=
r.format!=3D=3DT||r.type!=3D=3Db&amp;&amp;r.type!=3D=3DM||(r.format=3DE,con=
sole.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is no=
t supported. Using RGBA format instead.")),h){l.__webglFramebuffer=3D[];for=
(let e=3D0;e&lt;6;e++)l.__webglFramebuffer[e]=3Dt.createFramebuffer()}else =
if(l.__webglFramebuffer=3Dt.createFramebuffer(),u)if(o){l.__webglMultisampl=
edFramebuffer=3Dt.createFramebuffer(),l.__webglColorRenderbuffer=3Dt.create=
Renderbuffer(),t.bindRenderbuffer(36161,l.__webglColorRenderbuffer);const i=
=3Ds.convert(r.format),a=3Ds.convert(r.type),o=3DO(r.internalFormat,i,a),c=
=3D$(e);t.renderbufferStorageMultisample(36161,c,o,e.width,e.height),n.bind=
Framebuffer(36160,l.__webglMultisampledFramebuffer),t.framebufferRenderbuff=
er(36160,36064,36161,l.__webglColorRenderbuffer),t.bindRenderbuffer(36161,n=
ull),e.depthBuffer&amp;&amp;(l.__webglDepthRenderbuffer=3Dt.createRenderbuf=
fer(),Q(l.__webglDepthRenderbuffer,e,!0)),n.bindFramebuffer(36160,null)}els=
e console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only =
be used with WebGL2.");if(h){n.bindTexture(34067,c.__webglTexture),X(34067,=
r,p);for(let t=3D0;t&lt;6;t++)J(l.__webglFramebuffer[t],e,36064,34069+t);z(=
r,p)&amp;&amp;F(34067,r,e.width,e.height),n.bindTexture(34067,null)}else{le=
t t=3D3553;if(d)if(o){t=3Dr.isDataTexture3D?32879:35866}else console.warn("=
THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2=
.");n.bindTexture(t,c.__webglTexture),X(t,r,p),J(l.__webglFramebuffer,e,360=
64,t),z(r,p)&amp;&amp;F(3553,r,e.width,e.height),n.bindTexture(3553,null)}e=
.depthBuffer&amp;&amp;K(e)},this.updateRenderTargetMipmap=3Dfunction(t){con=
st e=3Dt.texture;if(z(e,B(t)||o)){const r=3Dt.isWebGLCubeRenderTarget?34067=
:3553,s=3Di.get(e).__webglTexture;n.bindTexture(r,s),F(r,e,t.width,t.height=
),n.bindTexture(r,null)}},this.updateMultisampleRenderTarget=3Dfunction(e){=
if(e.isWebGLMultisampleRenderTarget)if(o){const r=3De.width,s=3De.height;le=
t a=3D16384;e.depthBuffer&amp;&amp;(a|=3D256),e.stencilBuffer&amp;&amp;(a|=
=3D1024);const o=3Di.get(e);n.bindFramebuffer(36008,o.__webglMultisampledFr=
amebuffer),n.bindFramebuffer(36009,o.__webglFramebuffer),t.blitFramebuffer(=
0,0,r,s,0,0,r,s,a,9728),n.bindFramebuffer(36008,null),n.bindFramebuffer(360=
09,o.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer=
: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSe=
tTexture2D=3Dfunction(t,e){t&amp;&amp;t.isWebGLRenderTarget&amp;&amp;(!1=3D=
=3D=3Dtt&amp;&amp;(console.warn("THREE.WebGLTextures.safeSetTexture2D: don'=
t use render targets as textures. Use their .texture property instead."),tt=
=3D!0),t=3Dt.texture),V(t,e)},this.safeSetTextureCube=3Dfunction(t,e){t&amp=
;&amp;t.isWebGLCubeRenderTarget&amp;&amp;(!1=3D=3D=3Det&amp;&amp;(console.w=
arn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets =
as textures. Use their .texture property instead."),et=3D!0),t=3Dt.texture)=
,W(t,e)}}function ms(t,e,n){const i=3Dn.isWebGL2;return{convert:function(t)=
{let n;if(t=3D=3D=3Dx)return 5121;if(1017=3D=3D=3Dt)return 32819;if(1018=3D=
=3D=3Dt)return 32820;if(1019=3D=3D=3Dt)return 33635;if(1010=3D=3D=3Dt)retur=
n 5120;if(1011=3D=3D=3Dt)return 5122;if(t=3D=3D=3D_)return 5123;if(1013=3D=
=3D=3Dt)return 5124;if(t=3D=3D=3Dw)return 5125;if(t=3D=3D=3Db)return 5126;i=
f(t=3D=3D=3DM)return i?5131:(n=3De.get("OES_texture_half_float"),null!=3D=
=3Dn?n.HALF_FLOAT_OES:null);if(1021=3D=3D=3Dt)return 6406;if(t=3D=3D=3DT)re=
turn 6407;if(t=3D=3D=3DE)return 6408;if(1024=3D=3D=3Dt)return 6409;if(1025=
=3D=3D=3Dt)return 6410;if(t=3D=3D=3DA)return 6402;if(t=3D=3D=3DL)return 340=
41;if(1028=3D=3D=3Dt)return 6403;if(1029=3D=3D=3Dt)return 36244;if(1030=3D=
=3D=3Dt)return 33319;if(1031=3D=3D=3Dt)return 33320;if(1032=3D=3D=3Dt)retur=
n 36248;if(1033=3D=3D=3Dt)return 36249;if(t=3D=3D=3DR||t=3D=3D=3DC||t=3D=3D=
=3DP||t=3D=3D=3DD){if(n=3De.get("WEBGL_compressed_texture_s3tc"),null=3D=3D=
=3Dn)return null;if(t=3D=3D=3DR)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t=
=3D=3D=3DC)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t=3D=3D=3DP)return n.C=
OMPRESSED_RGBA_S3TC_DXT3_EXT;if(t=3D=3D=3DD)return n.COMPRESSED_RGBA_S3TC_D=
XT5_EXT}if(t=3D=3D=3DI||t=3D=3D=3DN||t=3D=3D=3DB||t=3D=3D=3Dz){if(n=3De.get=
("WEBGL_compressed_texture_pvrtc"),null=3D=3D=3Dn)return null;if(t=3D=3D=3D=
I)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t=3D=3D=3DN)return n.COMPRESS=
ED_RGB_PVRTC_2BPPV1_IMG;if(t=3D=3D=3DB)return n.COMPRESSED_RGBA_PVRTC_4BPPV=
1_IMG;if(t=3D=3D=3Dz)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196=3D=
=3D=3Dt)return n=3De.get("WEBGL_compressed_texture_etc1"),null!=3D=3Dn?n.CO=
MPRESSED_RGB_ETC1_WEBGL:null;if((t=3D=3D=3DF||t=3D=3D=3DO)&amp;&amp;(n=3De.=
get("WEBGL_compressed_texture_etc"),null!=3D=3Dn)){if(t=3D=3D=3DF)return n.=
COMPRESSED_RGB8_ETC2;if(t=3D=3D=3DO)return n.COMPRESSED_RGBA8_ETC2_EAC}retu=
rn 37808=3D=3D=3Dt||37809=3D=3D=3Dt||37810=3D=3D=3Dt||37811=3D=3D=3Dt||3781=
2=3D=3D=3Dt||37813=3D=3D=3Dt||37814=3D=3D=3Dt||37815=3D=3D=3Dt||37816=3D=3D=
=3Dt||37817=3D=3D=3Dt||37818=3D=3D=3Dt||37819=3D=3D=3Dt||37820=3D=3D=3Dt||3=
7821=3D=3D=3Dt||37840=3D=3D=3Dt||37841=3D=3D=3Dt||37842=3D=3D=3Dt||37843=3D=
=3D=3Dt||37844=3D=3D=3Dt||37845=3D=3D=3Dt||37846=3D=3D=3Dt||37847=3D=3D=3Dt=
||37848=3D=3D=3Dt||37849=3D=3D=3Dt||37850=3D=3D=3Dt||37851=3D=3D=3Dt||37852=
=3D=3D=3Dt||37853=3D=3D=3Dt?(n=3De.get("WEBGL_compressed_texture_astc"),nul=
l!=3D=3Dn?t:null):36492=3D=3D=3Dt?(n=3De.get("EXT_texture_compression_bptc"=
),null!=3D=3Dn?t:null):t=3D=3D=3DS?i?34042:(n=3De.get("WEBGL_depth_texture"=
),null!=3D=3Dn?n.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class fs extends Kn=
{constructor(t=3D[]){super(),this.cameras=3Dt}}fs.prototype.isArrayCamera=
=3D!0;class gs extends Ce{constructor(){super(),this.type=3D"Group"}}gs.pro=
totype.isGroup=3D!0;const vs=3D{type:"move"};class ys{constructor(){this._t=
argetRay=3Dnull,this._grip=3Dnull,this._hand=3Dnull}getHandSpace(){return n=
ull=3D=3D=3Dthis._hand&amp;&amp;(this._hand=3Dnew gs,this._hand.matrixAutoU=
pdate=3D!1,this._hand.visible=3D!1,this._hand.joints=3D{},this._hand.inputS=
tate=3D{pinching:!1}),this._hand}getTargetRaySpace(){return null=3D=3D=3Dth=
is._targetRay&amp;&amp;(this._targetRay=3Dnew gs,this._targetRay.matrixAuto=
Update=3D!1,this._targetRay.visible=3D!1,this._targetRay.hasLinearVelocity=
=3D!1,this._targetRay.linearVelocity=3Dnew Lt,this._targetRay.hasAngularVel=
ocity=3D!1,this._targetRay.angularVelocity=3Dnew Lt),this._targetRay}getGri=
pSpace(){return null=3D=3D=3Dthis._grip&amp;&amp;(this._grip=3Dnew gs,this.=
_grip.matrixAutoUpdate=3D!1,this._grip.visible=3D!1,this._grip.hasLinearVel=
ocity=3D!1,this._grip.linearVelocity=3Dnew Lt,this._grip.hasAngularVelocity=
=3D!1,this._grip.angularVelocity=3Dnew Lt),this._grip}dispatchEvent(t){retu=
rn null!=3D=3Dthis._targetRay&amp;&amp;this._targetRay.dispatchEvent(t),nul=
l!=3D=3Dthis._grip&amp;&amp;this._grip.dispatchEvent(t),null!=3D=3Dthis._ha=
nd&amp;&amp;this._hand.dispatchEvent(t),this}disconnect(t){return this.disp=
atchEvent({type:"disconnected",data:t}),null!=3D=3Dthis._targetRay&amp;&amp=
;(this._targetRay.visible=3D!1),null!=3D=3Dthis._grip&amp;&amp;(this._grip.=
visible=3D!1),null!=3D=3Dthis._hand&amp;&amp;(this._hand.visible=3D!1),this=
}update(t,e,n){let i=3Dnull,r=3Dnull,s=3Dnull;const a=3Dthis._targetRay,o=
=3Dthis._grip,l=3Dthis._hand;if(t&amp;&amp;"visible-blurred"!=3D=3De.sessio=
n.visibilityState)if(null!=3D=3Da&amp;&amp;(i=3De.getPose(t.targetRaySpace,=
n),null!=3D=3Di&amp;&amp;(a.matrix.fromArray(i.transform.matrix),a.matrix.d=
ecompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVeloci=
ty=3D!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=3D!1,i=
.angularVelocity?(a.hasAngularVelocity=3D!0,a.angularVelocity.copy(i.angula=
rVelocity)):a.hasAngularVelocity=3D!1,this.dispatchEvent(vs))),l&amp;&amp;t=
.hand){s=3D!0;for(const i of t.hand.values()){const t=3De.getJointPose(i,n)=
;if(void 0=3D=3D=3Dl.joints[i.jointName]){const t=3Dnew gs;t.matrixAutoUpda=
te=3D!1,t.visible=3D!1,l.joints[i.jointName]=3Dt,l.add(t)}const r=3Dl.joint=
s[i.jointName];null!=3D=3Dt&amp;&amp;(r.matrix.fromArray(t.transform.matrix=
),r.matrix.decompose(r.position,r.rotation,r.scale),r.jointRadius=3Dt.radiu=
s),r.visible=3Dnull!=3D=3Dt}const i=3Dl.joints["index-finger-tip"],r=3Dl.jo=
ints["thumb-tip"],a=3Di.position.distanceTo(r.position),o=3D.02,c=3D.005;l.=
inputState.pinching&amp;&amp;a&gt;o+c?(l.inputState.pinching=3D!1,this.disp=
atchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputS=
tate.pinching&amp;&amp;a&lt;=3Do-c&amp;&amp;(l.inputState.pinching=3D!0,thi=
s.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}e=
lse null!=3D=3Do&amp;&amp;t.gripSpace&amp;&amp;(r=3De.getPose(t.gripSpace,n=
),null!=3D=3Dr&amp;&amp;(o.matrix.fromArray(r.transform.matrix),o.matrix.de=
compose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocit=
y=3D!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=3D!1,r.=
angularVelocity?(o.hasAngularVelocity=3D!0,o.angularVelocity.copy(r.angular=
Velocity)):o.hasAngularVelocity=3D!1));return null!=3D=3Da&amp;&amp;(a.visi=
ble=3Dnull!=3D=3Di),null!=3D=3Do&amp;&amp;(o.visible=3Dnull!=3D=3Dr),null!=
=3D=3Dl&amp;&amp;(l.visible=3Dnull!=3D=3Ds),this}}class xs extends rt{const=
ructor(t,e){super();const n=3Dthis,i=3Dt.state;let r=3Dnull,s=3D1,a=3Dnull,=
o=3D"local-floor",l=3Dnull;const c=3D[],h=3Dnew Map,u=3Dnew Kn;u.layers.ena=
ble(1),u.viewport=3Dnew St;const d=3Dnew Kn;d.layers.enable(2),d.viewport=
=3Dnew St;const p=3D[u,d],m=3Dnew fs;m.layers.enable(1),m.layers.enable(2);=
let f=3Dnull,g=3Dnull;function v(t){const e=3Dh.get(t.inputSource);e&amp;&a=
mp;e.dispatchEvent({type:t.type,data:t.inputSource})}function y(){h.forEach=
((function(t,e){t.disconnect(e)})),h.clear(),f=3Dnull,g=3Dnull,i.bindXRFram=
ebuffer(null),t.setRenderTarget(t.getRenderTarget()),S.stop(),n.isPresentin=
g=3D!1,n.dispatchEvent({type:"sessionend"})}function x(t){const e=3Dr.input=
Sources;for(let t=3D0;t&lt;c.length;t++)h.set(e[t],c[t]);for(let e=3D0;e&lt=
;t.removed.length;e++){const n=3Dt.removed[e],i=3Dh.get(n);i&amp;&amp;(i.di=
spatchEvent({type:"disconnected",data:n}),h.delete(n))}for(let e=3D0;e&lt;t=
.added.length;e++){const n=3Dt.added[e],i=3Dh.get(n);i&amp;&amp;i.dispatchE=
vent({type:"connected",data:n})}}this.enabled=3D!1,this.isPresenting=3D!1,t=
his.getController=3Dfunction(t){let e=3Dc[t];return void 0=3D=3D=3De&amp;&a=
mp;(e=3Dnew ys,c[t]=3De),e.getTargetRaySpace()},this.getControllerGrip=3Dfu=
nction(t){let e=3Dc[t];return void 0=3D=3D=3De&amp;&amp;(e=3Dnew ys,c[t]=3D=
e),e.getGripSpace()},this.getHand=3Dfunction(t){let e=3Dc[t];return void 0=
=3D=3D=3De&amp;&amp;(e=3Dnew ys,c[t]=3De),e.getHandSpace()},this.setFramebu=
fferScaleFactor=3Dfunction(t){s=3Dt,!0=3D=3D=3Dn.isPresenting&amp;&amp;cons=
ole.warn("THREE.WebXRManager: Cannot change framebuffer scale while present=
ing.")},this.setReferenceSpaceType=3Dfunction(t){o=3Dt,!0=3D=3D=3Dn.isPrese=
nting&amp;&amp;console.warn("THREE.WebXRManager: Cannot change reference sp=
ace type while presenting.")},this.getReferenceSpace=3Dfunction(){return a}=
,this.getSession=3Dfunction(){return r},this.setSession=3Dasync function(t)=
{if(r=3Dt,null!=3D=3Dr){r.addEventListener("select",v),r.addEventListener("=
selectstart",v),r.addEventListener("selectend",v),r.addEventListener("squee=
ze",v),r.addEventListener("squeezestart",v),r.addEventListener("squeezeend"=
,v),r.addEventListener("end",y),r.addEventListener("inputsourceschange",x);=
const t=3De.getContextAttributes();!0!=3D=3Dt.xrCompatible&amp;&amp;await e=
.makeXRCompatible();const i=3D{antialias:t.antialias,alpha:t.alpha,depth:t.=
depth,stencil:t.stencil,framebufferScaleFactor:s},l=3Dnew XRWebGLLayer(r,e,=
i);r.updateRenderState({baseLayer:l}),a=3Dawait r.requestReferenceSpace(o),=
S.setContext(r),S.start(),n.isPresenting=3D!0,n.dispatchEvent({type:"sessio=
nstart"})}};const _=3Dnew Lt,w=3Dnew Lt;function b(t,e){null=3D=3D=3De?t.ma=
trixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.mat=
rix),t.matrixWorldInverse.copy(t.matrixWorld).invert()}this.getCamera=3Dfun=
ction(t){m.near=3Dd.near=3Du.near=3Dt.near,m.far=3Dd.far=3Du.far=3Dt.far,f=
=3D=3D=3Dm.near&amp;&amp;g=3D=3D=3Dm.far||(r.updateRenderState({depthNear:m=
.near,depthFar:m.far}),f=3Dm.near,g=3Dm.far);const e=3Dt.parent,n=3Dm.camer=
as;b(m,e);for(let t=3D0;t&lt;n.length;t++)b(n[t],e);t.matrixWorld.copy(m.ma=
trixWorld),t.matrix.copy(m.matrix),t.matrix.decompose(t.position,t.quaterni=
on,t.scale);const i=3Dt.children;for(let t=3D0,e=3Di.length;t&lt;e;t++)i[t]=
.updateMatrixWorld(!0);return 2=3D=3D=3Dn.length?function(t,e,n){_.setFromM=
atrixPosition(e.matrixWorld),w.setFromMatrixPosition(n.matrixWorld);const i=
=3D_.distanceTo(w),r=3De.projectionMatrix.elements,s=3Dn.projectionMatrix.e=
lements,a=3Dr[14]/(r[10]-1),o=3Dr[14]/(r[10]+1),l=3D(r[9]+1)/r[5],c=3D(r[9]=
-1)/r[5],h=3D(r[8]-1)/r[0],u=3D(s[8]+1)/s[0],d=3Da*h,p=3Da*u,m=3Di/(-h+u),f=
=3Dm*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translat=
eX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale=
),t.matrixWorldInverse.copy(t.matrixWorld).invert();const g=3Da+m,v=3Do+m,y=
=3Dd-f,x=3Dp+(i-f),b=3Dl*o/v*g,M=3Dc*o/v*g;t.projectionMatrix.makePerspecti=
ve(y,x,b,M,g,v)}(m,u,d):m.projectionMatrix.copy(u.projectionMatrix),m};let =
M=3Dnull;const S=3Dnew oi;S.setAnimationLoop((function(t,e){if(l=3De.getVie=
werPose(a),null!=3D=3Dl){const t=3Dl.views,e=3Dr.renderState.baseLayer;i.bi=
ndXRFramebuffer(e.framebuffer);let n=3D!1;t.length!=3D=3Dm.cameras.length&a=
mp;&amp;(m.cameras.length=3D0,n=3D!0);for(let i=3D0;i&lt;t.length;i++){cons=
t r=3Dt[i],s=3De.getViewport(r),a=3Dp[i];a.matrix.fromArray(r.transform.mat=
rix),a.projectionMatrix.fromArray(r.projectionMatrix),a.viewport.set(s.x,s.=
y,s.width,s.height),0=3D=3D=3Di&amp;&amp;m.matrix.copy(a.matrix),!0=3D=3D=
=3Dn&amp;&amp;m.cameras.push(a)}}const n=3Dr.inputSources;for(let t=3D0;t&l=
t;c.length;t++){const i=3Dc[t],r=3Dn[t];i.update(r,e,a)}M&amp;&amp;M(t,e)})=
),this.setAnimationLoop=3Dfunction(t){M=3Dt},this.dispose=3Dfunction(){}}}f=
unction _s(t){function e(e,n){e.opacity.value=3Dn.opacity,n.color&amp;&amp;=
e.diffuse.value.copy(n.color),n.emissive&amp;&amp;e.emissive.value.copy(n.e=
missive).multiplyScalar(n.emissiveIntensity),n.map&amp;&amp;(e.map.value=3D=
n.map),n.alphaMap&amp;&amp;(e.alphaMap.value=3Dn.alphaMap),n.specularMap&am=
p;&amp;(e.specularMap.value=3Dn.specularMap);const i=3Dt.get(n).envMap;if(i=
){e.envMap.value=3Di,e.flipEnvMap.value=3Di.isCubeTexture&amp;&amp;i._needs=
FlipEnvMap?-1:1,e.reflectivity.value=3Dn.reflectivity,e.refractionRatio.val=
ue=3Dn.refractionRatio;const r=3Dt.get(i).__maxMipLevel;void 0!=3D=3Dr&amp;=
&amp;(e.maxMipLevel.value=3Dr)}let r,s;n.lightMap&amp;&amp;(e.lightMap.valu=
e=3Dn.lightMap,e.lightMapIntensity.value=3Dn.lightMapIntensity),n.aoMap&amp=
;&amp;(e.aoMap.value=3Dn.aoMap,e.aoMapIntensity.value=3Dn.aoMapIntensity),n=
.map?r=3Dn.map:n.specularMap?r=3Dn.specularMap:n.displacementMap?r=3Dn.disp=
lacementMap:n.normalMap?r=3Dn.normalMap:n.bumpMap?r=3Dn.bumpMap:n.roughness=
Map?r=3Dn.roughnessMap:n.metalnessMap?r=3Dn.metalnessMap:n.alphaMap?r=3Dn.a=
lphaMap:n.emissiveMap?r=3Dn.emissiveMap:n.clearcoatMap?r=3Dn.clearcoatMap:n=
.clearcoatNormalMap?r=3Dn.clearcoatNormalMap:n.clearcoatRoughnessMap&amp;&a=
mp;(r=3Dn.clearcoatRoughnessMap),void 0!=3D=3Dr&amp;&amp;(r.isWebGLRenderTa=
rget&amp;&amp;(r=3Dr.texture),!0=3D=3D=3Dr.matrixAutoUpdate&amp;&amp;r.upda=
teMatrix(),e.uvTransform.value.copy(r.matrix)),n.aoMap?s=3Dn.aoMap:n.lightM=
ap&amp;&amp;(s=3Dn.lightMap),void 0!=3D=3Ds&amp;&amp;(s.isWebGLRenderTarget=
&amp;&amp;(s=3Ds.texture),!0=3D=3D=3Ds.matrixAutoUpdate&amp;&amp;s.updateMa=
trix(),e.uv2Transform.value.copy(s.matrix))}function n(e,n){e.roughness.val=
ue=3Dn.roughness,e.metalness.value=3Dn.metalness,n.roughnessMap&amp;&amp;(e=
.roughnessMap.value=3Dn.roughnessMap),n.metalnessMap&amp;&amp;(e.metalnessM=
ap.value=3Dn.metalnessMap),n.emissiveMap&amp;&amp;(e.emissiveMap.value=3Dn.=
emissiveMap),n.bumpMap&amp;&amp;(e.bumpMap.value=3Dn.bumpMap,e.bumpScale.va=
lue=3Dn.bumpScale,1=3D=3D=3Dn.side&amp;&amp;(e.bumpScale.value*=3D-1)),n.no=
rmalMap&amp;&amp;(e.normalMap.value=3Dn.normalMap,e.normalScale.value.copy(=
n.normalScale),1=3D=3D=3Dn.side&amp;&amp;e.normalScale.value.negate()),n.di=
splacementMap&amp;&amp;(e.displacementMap.value=3Dn.displacementMap,e.displ=
acementScale.value=3Dn.displacementScale,e.displacementBias.value=3Dn.displ=
acementBias);t.get(n).envMap&amp;&amp;(e.envMapIntensity.value=3Dn.envMapIn=
tensity)}return{refreshFogUniforms:function(t,e){t.fogColor.value.copy(e.co=
lor),e.isFog?(t.fogNear.value=3De.near,t.fogFar.value=3De.far):e.isFogExp2&=
amp;&amp;(t.fogDensity.value=3De.density)},refreshMaterialUniforms:function=
(t,i,r,s){i.isMeshBasicMaterial?e(t,i):i.isMeshLambertMaterial?(e(t,i),func=
tion(t,e){e.emissiveMap&amp;&amp;(t.emissiveMap.value=3De.emissiveMap)}(t,i=
)):i.isMeshToonMaterial?(e(t,i),function(t,e){e.gradientMap&amp;&amp;(t.gra=
dientMap.value=3De.gradientMap);e.emissiveMap&amp;&amp;(t.emissiveMap.value=
=3De.emissiveMap);e.bumpMap&amp;&amp;(t.bumpMap.value=3De.bumpMap,t.bumpSca=
le.value=3De.bumpScale,1=3D=3D=3De.side&amp;&amp;(t.bumpScale.value*=3D-1))=
;e.normalMap&amp;&amp;(t.normalMap.value=3De.normalMap,t.normalScale.value.=
copy(e.normalScale),1=3D=3D=3De.side&amp;&amp;t.normalScale.value.negate())=
;e.displacementMap&amp;&amp;(t.displacementMap.value=3De.displacementMap,t.=
displacementScale.value=3De.displacementScale,t.displacementBias.value=3De.=
displacementBias)}(t,i)):i.isMeshPhongMaterial?(e(t,i),function(t,e){t.spec=
ular.value.copy(e.specular),t.shininess.value=3DMath.max(e.shininess,1e-4),=
e.emissiveMap&amp;&amp;(t.emissiveMap.value=3De.emissiveMap);e.bumpMap&amp;=
&amp;(t.bumpMap.value=3De.bumpMap,t.bumpScale.value=3De.bumpScale,1=3D=3D=
=3De.side&amp;&amp;(t.bumpScale.value*=3D-1));e.normalMap&amp;&amp;(t.norma=
lMap.value=3De.normalMap,t.normalScale.value.copy(e.normalScale),1=3D=3D=3D=
e.side&amp;&amp;t.normalScale.value.negate());e.displacementMap&amp;&amp;(t=
.displacementMap.value=3De.displacementMap,t.displacementScale.value=3De.di=
splacementScale,t.displacementBias.value=3De.displacementBias)}(t,i)):i.isM=
eshStandardMaterial?(e(t,i),i.isMeshPhysicalMaterial?function(t,e){n(t,e),t=
.reflectivity.value=3De.reflectivity,t.clearcoat.value=3De.clearcoat,t.clea=
rcoatRoughness.value=3De.clearcoatRoughness,e.sheen&amp;&amp;t.sheen.value.=
copy(e.sheen);e.clearcoatMap&amp;&amp;(t.clearcoatMap.value=3De.clearcoatMa=
p);e.clearcoatRoughnessMap&amp;&amp;(t.clearcoatRoughnessMap.value=3De.clea=
rcoatRoughnessMap);e.clearcoatNormalMap&amp;&amp;(t.clearcoatNormalScale.va=
lue.copy(e.clearcoatNormalScale),t.clearcoatNormalMap.value=3De.clearcoatNo=
rmalMap,1=3D=3D=3De.side&amp;&amp;t.clearcoatNormalScale.value.negate());t.=
transmission.value=3De.transmission,e.transmissionMap&amp;&amp;(t.transmiss=
ionMap.value=3De.transmissionMap)}(t,i):n(t,i)):i.isMeshMatcapMaterial?(e(t=
,i),function(t,e){e.matcap&amp;&amp;(t.matcap.value=3De.matcap);e.bumpMap&a=
mp;&amp;(t.bumpMap.value=3De.bumpMap,t.bumpScale.value=3De.bumpScale,1=3D=
=3D=3De.side&amp;&amp;(t.bumpScale.value*=3D-1));e.normalMap&amp;&amp;(t.no=
rmalMap.value=3De.normalMap,t.normalScale.value.copy(e.normalScale),1=3D=3D=
=3De.side&amp;&amp;t.normalScale.value.negate());e.displacementMap&amp;&amp=
;(t.displacementMap.value=3De.displacementMap,t.displacementScale.value=3De=
.displacementScale,t.displacementBias.value=3De.displacementBias)}(t,i)):i.=
isMeshDepthMaterial?(e(t,i),function(t,e){e.displacementMap&amp;&amp;(t.dis=
placementMap.value=3De.displacementMap,t.displacementScale.value=3De.displa=
cementScale,t.displacementBias.value=3De.displacementBias)}(t,i)):i.isMeshD=
istanceMaterial?(e(t,i),function(t,e){e.displacementMap&amp;&amp;(t.displac=
ementMap.value=3De.displacementMap,t.displacementScale.value=3De.displaceme=
ntScale,t.displacementBias.value=3De.displacementBias);t.referencePosition.=
value.copy(e.referencePosition),t.nearDistance.value=3De.nearDistance,t.far=
Distance.value=3De.farDistance}(t,i)):i.isMeshNormalMaterial?(e(t,i),functi=
on(t,e){e.bumpMap&amp;&amp;(t.bumpMap.value=3De.bumpMap,t.bumpScale.value=
=3De.bumpScale,1=3D=3D=3De.side&amp;&amp;(t.bumpScale.value*=3D-1));e.norma=
lMap&amp;&amp;(t.normalMap.value=3De.normalMap,t.normalScale.value.copy(e.n=
ormalScale),1=3D=3D=3De.side&amp;&amp;t.normalScale.value.negate());e.displ=
acementMap&amp;&amp;(t.displacementMap.value=3De.displacementMap,t.displace=
mentScale.value=3De.displacementScale,t.displacementBias.value=3De.displace=
mentBias)}(t,i)):i.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(=
e.color),t.opacity.value=3De.opacity}(t,i),i.isLineDashedMaterial&amp;&amp;=
function(t,e){t.dashSize.value=3De.dashSize,t.totalSize.value=3De.dashSize+=
e.gapSize,t.scale.value=3De.scale}(t,i)):i.isPointsMaterial?function(t,e,n,=
i){t.diffuse.value.copy(e.color),t.opacity.value=3De.opacity,t.size.value=
=3De.size*n,t.scale.value=3D.5*i,e.map&amp;&amp;(t.map.value=3De.map);e.alp=
haMap&amp;&amp;(t.alphaMap.value=3De.alphaMap);let r;e.map?r=3De.map:e.alph=
aMap&amp;&amp;(r=3De.alphaMap);void 0!=3D=3Dr&amp;&amp;(!0=3D=3D=3Dr.matrix=
AutoUpdate&amp;&amp;r.updateMatrix(),t.uvTransform.value.copy(r.matrix))}(t=
,i,r,s):i.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.op=
acity.value=3De.opacity,t.rotation.value=3De.rotation,e.map&amp;&amp;(t.map=
.value=3De.map);e.alphaMap&amp;&amp;(t.alphaMap.value=3De.alphaMap);let n;e=
.map?n=3De.map:e.alphaMap&amp;&amp;(n=3De.alphaMap);void 0!=3D=3Dn&amp;&amp=
;(!0=3D=3D=3Dn.matrixAutoUpdate&amp;&amp;n.updateMatrix(),t.uvTransform.val=
ue.copy(n.matrix))}(t,i):i.isShadowMaterial?(t.color.value.copy(i.color),t.=
opacity.value=3Di.opacity):i.isShaderMaterial&amp;&amp;(i.uniformsNeedUpdat=
e=3D!1)}}}function ws(t){const e=3Dvoid 0!=3D=3D(t=3Dt||{}).canvas?t.canvas=
:function(){const t=3Ddocument.createElementNS("http://www.w3.org/1999/xhtm=
l","canvas");return t.style.display=3D"block",t}(),n=3Dvoid 0!=3D=3Dt.conte=
xt?t.context:null,i=3Dvoid 0!=3D=3Dt.alpha&amp;&amp;t.alpha,r=3Dvoid 0=3D=
=3D=3Dt.depth||t.depth,s=3Dvoid 0=3D=3D=3Dt.stencil||t.stencil,a=3Dvoid 0!=
=3D=3Dt.antialias&amp;&amp;t.antialias,o=3Dvoid 0=3D=3D=3Dt.premultipliedAl=
pha||t.premultipliedAlpha,l=3Dvoid 0!=3D=3Dt.preserveDrawingBuffer&amp;&amp=
;t.preserveDrawingBuffer,c=3Dvoid 0!=3D=3Dt.powerPreference?t.powerPreferen=
ce:"default",h=3Dvoid 0!=3D=3Dt.failIfMajorPerformanceCaveat&amp;&amp;t.fai=
lIfMajorPerformanceCaveat;let u=3Dnull,d=3Dnull;const p=3D[],m=3D[];this.do=
mElement=3De,this.debug=3D{checkShaderErrors:!0},this.autoClear=3D!0,this.a=
utoClearColor=3D!0,this.autoClearDepth=3D!0,this.autoClearStencil=3D!0,this=
.sortObjects=3D!0,this.clippingPlanes=3D[],this.localClippingEnabled=3D!1,t=
his.gammaFactor=3D2,this.outputEncoding=3DX,this.physicallyCorrectLights=3D=
!1,this.toneMapping=3D0,this.toneMappingExposure=3D1;const f=3Dthis;let g=
=3D!1,v=3D0,y=3D0,_=3Dnull,w=3D-1,S=3Dnull;const T=3Dnew St,A=3Dnew St;let =
L=3Dnull,R=3De.width,C=3De.height,P=3D1,D=3Dnull,I=3Dnull;const N=3Dnew St(=
0,0,R,C),B=3Dnew St(0,0,R,C);let z=3D!1;const F=3Dnew ai;let O=3D!1,H=3D!1;=
const G=3Dnew se,U=3Dnew Lt,k=3D{background:null,fog:null,environment:null,=
overrideMaterial:null,isScene:!0};function V(){return null=3D=3D=3D_?P:1}le=
t W,j,q,Y,Z,J,Q,K,$,tt,et,nt,it,rt,st,at,ot,lt,ct,ht,ut,dt,pt=3Dn;function =
ft(t,n){for(let i=3D0;i&lt;t.length;i++){const r=3Dt[i],s=3De.getContext(r,=
n);if(null!=3D=3Ds)return s}return null}try{const t=3D{alpha:i,depth:r,sten=
cil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPrefere=
nce:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlo=
st",xt,!1),e.addEventListener("webglcontextrestored",_t,!1),null=3D=3D=3Dpt=
){const e=3D["webgl2","webgl","experimental-webgl"];if(!0=3D=3D=3Df.isWebGL=
1Renderer&amp;&amp;e.shift(),pt=3Dft(e,t),null=3D=3D=3Dpt)throw ft(e)?new E=
rror("Error creating WebGL context with your selected attributes."):new Err=
or("Error creating WebGL context.")}void 0=3D=3D=3Dpt.getShaderPrecisionFor=
mat&amp;&amp;(pt.getShaderPrecisionFormat=3Dfunction(){return{rangeMin:1,ra=
ngeMax:1,precision:1}})}catch(t){throw console.error("THREE.WebGLRenderer: =
"+t.message),t}function gt(){W=3Dnew xi(pt),j=3Dnew gi(pt,W,t),W.init(j),ut=
=3Dnew ms(pt,W,j),q=3Dnew ds(pt,W,j),Y=3Dnew bi(pt),Z=3Dnew Kr,J=3Dnew ps(p=
t,W,q,Z,j,ut,Y),Q=3Dnew yi(f),K=3Dnew li(pt,j),dt=3Dnew mi(pt,W,K,j),$=3Dne=
w _i(pt,K,Y,dt),tt=3Dnew Ei(pt,$,K,Y),lt=3Dnew Ti(pt),st=3Dnew vi(Z),et=3Dn=
ew Qr(f,Q,W,j,dt,st),nt=3Dnew _s(Z),it=3Dnew ns(Z),rt=3Dnew ls(W,j),ot=3Dne=
w pi(f,Q,q,tt,o),at=3Dnew us(f,tt,j),ct=3Dnew fi(pt,W,Y,j),ht=3Dnew wi(pt,W=
,Y,j),Y.programs=3Det.programs,f.capabilities=3Dj,f.extensions=3DW,f.proper=
ties=3DZ,f.renderLists=3Dit,f.shadowMap=3Dat,f.state=3Dq,f.info=3DY}gt();co=
nst yt=3Dnew xs(f,pt);function xt(t){t.preventDefault(),console.log("THREE.=
WebGLRenderer: Context Lost."),g=3D!0}function _t(){console.log("THREE.WebG=
LRenderer: Context Restored."),g=3D!1;const t=3DY.autoReset,e=3Dat.enabled,=
n=3Dat.autoUpdate,i=3Dat.needsUpdate,r=3Dat.type;gt(),Y.autoReset=3Dt,at.en=
abled=3De,at.autoUpdate=3Dn,at.needsUpdate=3Di,at.type=3Dr}function wt(t){c=
onst e=3Dt.target;e.removeEventListener("dispose",wt),function(t){(function=
(t){const e=3DZ.get(t).programs;void 0!=3D=3De&amp;&amp;e.forEach((function=
(t){et.releaseProgram(t)}))})(t),Z.remove(t)}(e)}this.xr=3Dyt,this.getConte=
xt=3Dfunction(){return pt},this.getContextAttributes=3Dfunction(){return pt=
.getContextAttributes()},this.forceContextLoss=3Dfunction(){const t=3DW.get=
("WEBGL_lose_context");t&amp;&amp;t.loseContext()},this.forceContextRestore=
=3Dfunction(){const t=3DW.get("WEBGL_lose_context");t&amp;&amp;t.restoreCon=
text()},this.getPixelRatio=3Dfunction(){return P},this.setPixelRatio=3Dfunc=
tion(t){void 0!=3D=3Dt&amp;&amp;(P=3Dt,this.setSize(R,C,!1))},this.getSize=
=3Dfunction(t){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("WebGLRendere=
r: .getsize() now requires a Vector2 as an argument"),t=3Dnew vt),t.set(R,C=
)},this.setSize=3Dfunction(t,n,i){yt.isPresenting?console.warn("THREE.WebGL=
Renderer: Can't change size while VR device is presenting."):(R=3Dt,C=3Dn,e=
.width=3DMath.floor(t*P),e.height=3DMath.floor(n*P),!1!=3D=3Di&amp;&amp;(e.=
style.width=3Dt+"px",e.style.height=3Dn+"px"),this.setViewport(0,0,t,n))},t=
his.getDrawingBufferSize=3Dfunction(t){return void 0=3D=3D=3Dt&amp;&amp;(co=
nsole.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 a=
s an argument"),t=3Dnew vt),t.set(R*P,C*P).floor()},this.setDrawingBufferSi=
ze=3Dfunction(t,n,i){R=3Dt,C=3Dn,P=3Di,e.width=3DMath.floor(t*i),e.height=
=3DMath.floor(n*i),this.setViewport(0,0,t,n)},this.getCurrentViewport=3Dfun=
ction(t){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("WebGLRenderer: .ge=
tCurrentViewport() now requires a Vector4 as an argument"),t=3Dnew St),t.co=
py(T)},this.getViewport=3Dfunction(t){return t.copy(N)},this.setViewport=3D=
function(t,e,n,i){t.isVector4?N.set(t.x,t.y,t.z,t.w):N.set(t,e,n,i),q.viewp=
ort(T.copy(N).multiplyScalar(P).floor())},this.getScissor=3Dfunction(t){ret=
urn t.copy(B)},this.setScissor=3Dfunction(t,e,n,i){t.isVector4?B.set(t.x,t.=
y,t.z,t.w):B.set(t,e,n,i),q.scissor(A.copy(B).multiplyScalar(P).floor())},t=
his.getScissorTest=3Dfunction(){return z},this.setScissorTest=3Dfunction(t)=
{q.setScissorTest(z=3Dt)},this.setOpaqueSort=3Dfunction(t){D=3Dt},this.setT=
ransparentSort=3Dfunction(t){I=3Dt},this.getClearColor=3Dfunction(t){return=
 void 0=3D=3D=3Dt&amp;&amp;(console.warn("WebGLRenderer: .getClearColor() n=
ow requires a Color as an argument"),t=3Dnew tn),t.copy(ot.getClearColor())=
},this.setClearColor=3Dfunction(){ot.setClearColor.apply(ot,arguments)},thi=
s.getClearAlpha=3Dfunction(){return ot.getClearAlpha()},this.setClearAlpha=
=3Dfunction(){ot.setClearAlpha.apply(ot,arguments)},this.clear=3Dfunction(t=
,e,n){let i=3D0;(void 0=3D=3D=3Dt||t)&amp;&amp;(i|=3D16384),(void 0=3D=3D=
=3De||e)&amp;&amp;(i|=3D256),(void 0=3D=3D=3Dn||n)&amp;&amp;(i|=3D1024),pt.=
clear(i)},this.clearColor=3Dfunction(){this.clear(!0,!1,!1)},this.clearDept=
h=3Dfunction(){this.clear(!1,!0,!1)},this.clearStencil=3Dfunction(){this.cl=
ear(!1,!1,!0)},this.dispose=3Dfunction(){e.removeEventListener("webglcontex=
tlost",xt,!1),e.removeEventListener("webglcontextrestored",_t,!1),it.dispos=
e(),rt.dispose(),Z.dispose(),Q.dispose(),tt.dispose(),dt.dispose(),yt.dispo=
se(),yt.removeEventListener("sessionstart",Mt),yt.removeEventListener("sess=
ionend",Tt),Et.stop()},this.renderBufferImmediate=3Dfunction(t,e){dt.initAt=
tributes();const n=3DZ.get(t);t.hasPositions&amp;&amp;!n.position&amp;&amp;=
(n.position=3Dpt.createBuffer()),t.hasNormals&amp;&amp;!n.normal&amp;&amp;(=
n.normal=3Dpt.createBuffer()),t.hasUvs&amp;&amp;!n.uv&amp;&amp;(n.uv=3Dpt.c=
reateBuffer()),t.hasColors&amp;&amp;!n.color&amp;&amp;(n.color=3Dpt.createB=
uffer());const i=3De.getAttributes();t.hasPositions&amp;&amp;(pt.bindBuffer=
(34962,n.position),pt.bufferData(34962,t.positionArray,35048),dt.enableAttr=
ibute(i.position),pt.vertexAttribPointer(i.position,3,5126,!1,0,0)),t.hasNo=
rmals&amp;&amp;(pt.bindBuffer(34962,n.normal),pt.bufferData(34962,t.normalA=
rray,35048),dt.enableAttribute(i.normal),pt.vertexAttribPointer(i.normal,3,=
5126,!1,0,0)),t.hasUvs&amp;&amp;(pt.bindBuffer(34962,n.uv),pt.bufferData(34=
962,t.uvArray,35048),dt.enableAttribute(i.uv),pt.vertexAttribPointer(i.uv,2=
,5126,!1,0,0)),t.hasColors&amp;&amp;(pt.bindBuffer(34962,n.color),pt.buffer=
Data(34962,t.colorArray,35048),dt.enableAttribute(i.color),pt.vertexAttribP=
ointer(i.color,3,5126,!1,0,0)),dt.disableUnusedAttributes(),pt.drawArrays(4=
,0,t.count),t.count=3D0},this.renderBufferDirect=3Dfunction(t,e,n,i,r,s){nu=
ll=3D=3D=3De&amp;&amp;(e=3Dk);const a=3Dr.isMesh&amp;&amp;r.matrixWorld.det=
erminant()&lt;0,o=3DIt(t,e,i,r);q.setMaterial(i,a);let l=3Dn.index;const c=
=3Dn.attributes.position;if(null=3D=3D=3Dl){if(void 0=3D=3D=3Dc||0=3D=3D=3D=
c.count)return}else if(0=3D=3D=3Dl.count)return;let h,u=3D1;!0=3D=3D=3Di.wi=
reframe&amp;&amp;(l=3D$.getWireframeAttribute(n),u=3D2),(i.morphTargets||i.=
morphNormals)&amp;&amp;lt.update(r,n,i,o),dt.setup(r,i,o,n,l);let d=3Dct;nu=
ll!=3D=3Dl&amp;&amp;(h=3DK.get(l),d=3Dht,d.setIndex(h));const p=3Dnull!=3D=
=3Dl?l.count:c.count,m=3Dn.drawRange.start*u,f=3Dn.drawRange.count*u,g=3Dnu=
ll!=3D=3Ds?s.start*u:0,v=3Dnull!=3D=3Ds?s.count*u:1/0,y=3DMath.max(m,g),x=
=3DMath.min(p,m+f,g+v)-1,_=3DMath.max(0,x-y+1);if(0!=3D=3D_){if(r.isMesh)!0=
=3D=3D=3Di.wireframe?(q.setLineWidth(i.wireframeLinewidth*V()),d.setMode(1)=
):d.setMode(4);else if(r.isLine){let t=3Di.linewidth;void 0=3D=3D=3Dt&amp;&=
amp;(t=3D1),q.setLineWidth(t*V()),r.isLineSegments?d.setMode(1):r.isLineLoo=
p?d.setMode(2):d.setMode(3)}else r.isPoints?d.setMode(0):r.isSprite&amp;&am=
p;d.setMode(4);if(r.isInstancedMesh)d.renderInstances(y,_,r.count);else if(=
n.isInstancedBufferGeometry){const t=3DMath.min(n.instanceCount,n._maxInsta=
nceCount);d.renderInstances(y,_,t)}else d.render(y,_)}},this.compile=3Dfunc=
tion(t,e){d=3Drt.get(t),d.init(),t.traverseVisible((function(t){t.isLight&a=
mp;&amp;t.layers.test(e.layers)&amp;&amp;(d.pushLight(t),t.castShadow&amp;&=
amp;d.pushShadow(t))})),d.setupLights(),t.traverse((function(e){const n=3De=
.material;if(n)if(Array.isArray(n))for(let i=3D0;i&lt;n.length;i++){Pt(n[i]=
,t,e)}else Pt(n,t,e)}))};let bt=3Dnull;function Mt(){Et.stop()}function Tt(=
){Et.start()}const Et=3Dnew oi;function At(t,e,n,i){if(!1=3D=3D=3Dt.visible=
)return;if(t.layers.test(e.layers))if(t.isGroup)n=3Dt.renderOrder;else if(t=
.isLOD)!0=3D=3D=3Dt.autoUpdate&amp;&amp;t.update(e);else if(t.isLight)d.pus=
hLight(t),t.castShadow&amp;&amp;d.pushShadow(t);else if(t.isSprite){if(!t.f=
rustumCulled||F.intersectsSprite(t)){i&amp;&amp;U.setFromMatrixPosition(t.m=
atrixWorld).applyMatrix4(G);const e=3Dtt.update(t),r=3Dt.material;r.visible=
&amp;&amp;u.push(t,e,r,n,U.z,null)}}else if(t.isImmediateRenderObject)i&amp=
;&amp;U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G),u.push(t,null,=
t.material,n,U.z,null);else if((t.isMesh||t.isLine||t.isPoints)&amp;&amp;(t=
.isSkinnedMesh&amp;&amp;t.skeleton.frame!=3D=3DY.render.frame&amp;&amp;(t.s=
keleton.update(),t.skeleton.frame=3DY.render.frame),!t.frustumCulled||F.int=
ersectsObject(t))){i&amp;&amp;U.setFromMatrixPosition(t.matrixWorld).applyM=
atrix4(G);const e=3Dtt.update(t),r=3Dt.material;if(Array.isArray(r)){const =
i=3De.groups;for(let s=3D0,a=3Di.length;s&lt;a;s++){const a=3Di[s],o=3Dr[a.=
materialIndex];o&amp;&amp;o.visible&amp;&amp;u.push(t,e,o,n,U.z,a)}}else r.=
visible&amp;&amp;u.push(t,e,r,n,U.z,null)}const r=3Dt.children;for(let t=3D=
0,s=3Dr.length;t&lt;s;t++)At(r[t],e,n,i)}function Rt(t,e,n){const i=3D!0=3D=
=3D=3De.isScene?e.overrideMaterial:null;for(let r=3D0,s=3Dt.length;r&lt;s;r=
++){const s=3Dt[r],a=3Ds.object,o=3Ds.geometry,l=3Dnull=3D=3D=3Di?s.materia=
l:i,c=3Ds.group;if(n.isArrayCamera){const t=3Dn.cameras;for(let n=3D0,i=3Dt=
.length;n&lt;i;n++){const i=3Dt[n];a.layers.test(i.layers)&amp;&amp;(q.view=
port(T.copy(i.viewport)),d.setupLightsView(i),Ct(a,e,i,o,l,c))}}else Ct(a,e=
,n,o,l,c)}}function Ct(t,e,n,i,r,s){if(t.onBeforeRender(f,e,n,i,r,s),t.mode=
lViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMa=
trix.getNormalMatrix(t.modelViewMatrix),t.isImmediateRenderObject){const i=
=3DIt(n,e,r,t);q.setMaterial(r),dt.reset(),function(t,e){t.render((function=
(t){f.renderBufferImmediate(t,e)}))}(t,i)}else f.renderBufferDirect(n,e,i,r=
,t,s);t.onAfterRender(f,e,n,i,r,s)}function Pt(t,e,n){!0!=3D=3De.isScene&am=
p;&amp;(e=3Dk);const i=3DZ.get(t),r=3Dd.state.lights,s=3Dd.state.shadowsArr=
ay,a=3Dr.state.version,o=3Det.getParameters(t,r.state,s,e,n),l=3Det.getProg=
ramCacheKey(o);let c=3Di.programs;i.environment=3Dt.isMeshStandardMaterial?=
e.environment:null,i.fog=3De.fog,i.envMap=3DQ.get(t.envMap||i.environment),=
void 0=3D=3D=3Dc&amp;&amp;(t.addEventListener("dispose",wt),c=3Dnew Map,i.p=
rograms=3Dc);let h=3Dc.get(l);if(void 0!=3D=3Dh){if(i.currentProgram=3D=3D=
=3Dh&amp;&amp;i.lightsStateVersion=3D=3D=3Da)return Dt(t,o),h}else o.unifor=
ms=3Det.getUniforms(t),t.onBuild(o,f),t.onBeforeCompile(o,f),h=3Det.acquire=
Program(o,l),c.set(l,h),i.uniforms=3Do.uniforms;const u=3Di.uniforms;(t.isS=
haderMaterial||t.isRawShaderMaterial)&amp;&amp;!0!=3D=3Dt.clipping||(u.clip=
pingPlanes=3Dst.uniform),Dt(t,o),i.needsLights=3Dfunction(t){return t.isMes=
hLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStan=
dardMaterial||t.isShadowMaterial||t.isShaderMaterial&amp;&amp;!0=3D=3D=3Dt.=
lights}(t),i.lightsStateVersion=3Da,i.needsLights&amp;&amp;(u.ambientLightC=
olor.value=3Dr.state.ambient,u.lightProbe.value=3Dr.state.probe,u.direction=
alLights.value=3Dr.state.directional,u.directionalLightShadows.value=3Dr.st=
ate.directionalShadow,u.spotLights.value=3Dr.state.spot,u.spotLightShadows.=
value=3Dr.state.spotShadow,u.rectAreaLights.value=3Dr.state.rectArea,u.ltc_=
1.value=3Dr.state.rectAreaLTC1,u.ltc_2.value=3Dr.state.rectAreaLTC2,u.point=
Lights.value=3Dr.state.point,u.pointLightShadows.value=3Dr.state.pointShado=
w,u.hemisphereLights.value=3Dr.state.hemi,u.directionalShadowMap.value=3Dr.=
state.directionalShadowMap,u.directionalShadowMatrix.value=3Dr.state.direct=
ionalShadowMatrix,u.spotShadowMap.value=3Dr.state.spotShadowMap,u.spotShado=
wMatrix.value=3Dr.state.spotShadowMatrix,u.pointShadowMap.value=3Dr.state.p=
ointShadowMap,u.pointShadowMatrix.value=3Dr.state.pointShadowMatrix);const =
p=3Dh.getUniforms(),m=3DCr.seqWithValue(p.seq,u);return i.currentProgram=3D=
h,i.uniformsList=3Dm,h}function Dt(t,e){const n=3DZ.get(t);n.outputEncoding=
=3De.outputEncoding,n.instancing=3De.instancing,n.numClippingPlanes=3De.num=
ClippingPlanes,n.numIntersection=3De.numClipIntersection,n.vertexAlphas=3De=
.vertexAlphas}function It(t,e,n,i){!0!=3D=3De.isScene&amp;&amp;(e=3Dk),J.re=
setTextureUnits();const r=3De.fog,s=3Dn.isMeshStandardMaterial?e.environmen=
t:null,a=3Dnull=3D=3D=3D_?f.outputEncoding:_.texture.encoding,o=3DQ.get(n.e=
nvMap||s),l=3D!0=3D=3D=3Dn.vertexColors&amp;&amp;i.geometry&amp;&amp;i.geom=
etry.attributes.color&amp;&amp;4=3D=3D=3Di.geometry.attributes.color.itemSi=
ze,c=3DZ.get(n),h=3Dd.state.lights;if(!0=3D=3D=3DO&amp;&amp;(!0=3D=3D=3DH||=
t!=3D=3DS)){const e=3Dt=3D=3D=3DS&amp;&amp;n.id=3D=3D=3Dw;st.setState(n,t,e=
)}let u=3D!1;n.version=3D=3D=3Dc.__version?c.needsLights&amp;&amp;c.lightsS=
tateVersion!=3D=3Dh.state.version||c.outputEncoding!=3D=3Da||i.isInstancedM=
esh&amp;&amp;!1=3D=3D=3Dc.instancing?u=3D!0:i.isInstancedMesh||!0!=3D=3Dc.i=
nstancing?c.envMap!=3D=3Do||n.fog&amp;&amp;c.fog!=3D=3Dr?u=3D!0:void 0=3D=
=3D=3Dc.numClippingPlanes||c.numClippingPlanes=3D=3D=3Dst.numPlanes&amp;&am=
p;c.numIntersection=3D=3D=3Dst.numIntersection?c.vertexAlphas!=3D=3Dl&amp;&=
amp;(u=3D!0):u=3D!0:u=3D!0:(u=3D!0,c.__version=3Dn.version);let p=3Dc.curre=
ntProgram;!0=3D=3D=3Du&amp;&amp;(p=3DPt(n,e,i));let m=3D!1,g=3D!1,v=3D!1;co=
nst y=3Dp.getUniforms(),x=3Dc.uniforms;if(q.useProgram(p.program)&amp;&amp;=
(m=3D!0,g=3D!0,v=3D!0),n.id!=3D=3Dw&amp;&amp;(w=3Dn.id,g=3D!0),m||S!=3D=3Dt=
){if(y.setValue(pt,"projectionMatrix",t.projectionMatrix),j.logarithmicDept=
hBuffer&amp;&amp;y.setValue(pt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN=
2)),S!=3D=3Dt&amp;&amp;(S=3Dt,g=3D!0,v=3D!0),n.isShaderMaterial||n.isMeshPh=
ongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){cons=
t e=3Dy.map.cameraPosition;void 0!=3D=3De&amp;&amp;e.setValue(pt,U.setFromM=
atrixPosition(t.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial|=
|n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||=
n.isShaderMaterial)&amp;&amp;y.setValue(pt,"isOrthographic",!0=3D=3D=3Dt.is=
OrthographicCamera),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshL=
ambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShader=
Material||n.isShadowMaterial||n.skinning)&amp;&amp;y.setValue(pt,"viewMatri=
x",t.matrixWorldInverse)}if(n.skinning){y.setOptional(pt,i,"bindMatrix"),y.=
setOptional(pt,i,"bindMatrixInverse");const t=3Di.skeleton;if(t){const e=3D=
t.bones;if(j.floatVertexTextures){if(null=3D=3D=3Dt.boneTexture){let n=3DMa=
th.sqrt(4*e.length);n=3Dmt(n),n=3DMath.max(n,4);const i=3Dnew Float32Array(=
n*n*4);i.set(t.boneMatrices);const r=3Dnew ii(i,n,n,E,b);t.boneMatrices=3Di=
,t.boneTexture=3Dr,t.boneTextureSize=3Dn}y.setValue(pt,"boneTexture",t.bone=
Texture,J),y.setValue(pt,"boneTextureSize",t.boneTextureSize)}else y.setOpt=
ional(pt,t,"boneMatrices")}}var M,T;return(g||c.receiveShadow!=3D=3Di.recei=
veShadow)&amp;&amp;(c.receiveShadow=3Di.receiveShadow,y.setValue(pt,"receiv=
eShadow",i.receiveShadow)),g&amp;&amp;(y.setValue(pt,"toneMappingExposure",=
f.toneMappingExposure),c.needsLights&amp;&amp;(T=3Dv,(M=3Dx).ambientLightCo=
lor.needsUpdate=3DT,M.lightProbe.needsUpdate=3DT,M.directionalLights.needsU=
pdate=3DT,M.directionalLightShadows.needsUpdate=3DT,M.pointLights.needsUpda=
te=3DT,M.pointLightShadows.needsUpdate=3DT,M.spotLights.needsUpdate=3DT,M.s=
potLightShadows.needsUpdate=3DT,M.rectAreaLights.needsUpdate=3DT,M.hemisphe=
reLights.needsUpdate=3DT),r&amp;&amp;n.fog&amp;&amp;nt.refreshFogUniforms(x=
,r),nt.refreshMaterialUniforms(x,n,P,C),Cr.upload(pt,c.uniformsList,x,J)),n=
.isShaderMaterial&amp;&amp;!0=3D=3D=3Dn.uniformsNeedUpdate&amp;&amp;(Cr.upl=
oad(pt,c.uniformsList,x,J),n.uniformsNeedUpdate=3D!1),n.isSpriteMaterial&am=
p;&amp;y.setValue(pt,"center",i.center),y.setValue(pt,"modelViewMatrix",i.m=
odelViewMatrix),y.setValue(pt,"normalMatrix",i.normalMatrix),y.setValue(pt,=
"modelMatrix",i.matrixWorld),p}Et.setAnimationLoop((function(t){bt&amp;&amp=
;bt(t)})),"undefined"!=3Dtypeof window&amp;&amp;Et.setContext(window),this.=
setAnimationLoop=3Dfunction(t){bt=3Dt,yt.setAnimationLoop(t),null=3D=3D=3Dt=
?Et.stop():Et.start()},yt.addEventListener("sessionstart",Mt),yt.addEventLi=
stener("sessionend",Tt),this.render=3Dfunction(t,e){let n,i;if(void 0!=3D=
=3Darguments[2]&amp;&amp;(console.warn("THREE.WebGLRenderer.render(): the r=
enderTarget argument has been removed. Use .setRenderTarget() instead."),n=
=3Darguments[2]),void 0!=3D=3Darguments[3]&amp;&amp;(console.warn("THREE.We=
bGLRenderer.render(): the forceClear argument has been removed. Use .clear(=
) instead."),i=3Darguments[3]),void 0!=3D=3De&amp;&amp;!0!=3D=3De.isCamera)=
return void console.error("THREE.WebGLRenderer.render: camera is not an ins=
tance of THREE.Camera.");if(!0=3D=3D=3Dg)return;!0=3D=3D=3Dt.autoUpdate&amp=
;&amp;t.updateMatrixWorld(),null=3D=3D=3De.parent&amp;&amp;e.updateMatrixWo=
rld(),!0=3D=3D=3Dyt.enabled&amp;&amp;!0=3D=3D=3Dyt.isPresenting&amp;&amp;(e=
=3Dyt.getCamera(e)),!0=3D=3D=3Dt.isScene&amp;&amp;t.onBeforeRender(f,t,e,n|=
|_),d=3Drt.get(t,m.length),d.init(),m.push(d),G.multiplyMatrices(e.projecti=
onMatrix,e.matrixWorldInverse),F.setFromProjectionMatrix(G),H=3Dthis.localC=
lippingEnabled,O=3Dst.init(this.clippingPlanes,H,e),u=3Dit.get(t,p.length),=
u.init(),p.push(u),At(t,e,0,f.sortObjects),u.finish(),!0=3D=3D=3Df.sortObje=
cts&amp;&amp;u.sort(D,I),!0=3D=3D=3DO&amp;&amp;st.beginShadows();const r=3D=
d.state.shadowsArray;at.render(r,t,e),d.setupLights(),d.setupLightsView(e),=
!0=3D=3D=3DO&amp;&amp;st.endShadows(),!0=3D=3D=3Dthis.info.autoReset&amp;&a=
mp;this.info.reset(),void 0!=3D=3Dn&amp;&amp;this.setRenderTarget(n),ot.ren=
der(u,t,e,i);const s=3Du.opaque,a=3Du.transparent;s.length&gt;0&amp;&amp;Rt=
(s,t,e),a.length&gt;0&amp;&amp;Rt(a,t,e),null!=3D=3D_&amp;&amp;(J.updateRen=
derTargetMipmap(_),J.updateMultisampleRenderTarget(_)),!0=3D=3D=3Dt.isScene=
&amp;&amp;t.onAfterRender(f,t,e),q.buffers.depth.setTest(!0),q.buffers.dept=
h.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1),dt.resetDe=
faultState(),w=3D-1,S=3Dnull,m.pop(),d=3Dm.length&gt;0?m[m.length-1]:null,p=
.pop(),u=3Dp.length&gt;0?p[p.length-1]:null},this.getActiveCubeFace=3Dfunct=
ion(){return v},this.getActiveMipmapLevel=3Dfunction(){return y},this.getRe=
nderTarget=3Dfunction(){return _},this.setRenderTarget=3Dfunction(t,e=3D0,n=
=3D0){_=3Dt,v=3De,y=3Dn,t&amp;&amp;void 0=3D=3D=3DZ.get(t).__webglFramebuff=
er&amp;&amp;J.setupRenderTarget(t);let i=3Dnull,r=3D!1,s=3D!1;if(t){const n=
=3Dt.texture;(n.isDataTexture3D||n.isDataTexture2DArray)&amp;&amp;(s=3D!0);=
const a=3DZ.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(i=3Da[e],r=
=3D!0):i=3Dt.isWebGLMultisampleRenderTarget?Z.get(t).__webglMultisampledFra=
mebuffer:a,T.copy(t.viewport),A.copy(t.scissor),L=3Dt.scissorTest}else T.co=
py(N).multiplyScalar(P).floor(),A.copy(B).multiplyScalar(P).floor(),L=3Dz;i=
f(q.bindFramebuffer(36160,i),q.viewport(T),q.scissor(A),q.setScissorTest(L)=
,r){const i=3DZ.get(t.texture);pt.framebufferTexture2D(36160,36064,34069+e,=
i.__webglTexture,n)}else if(s){const i=3DZ.get(t.texture),r=3De||0;pt.frame=
bufferTextureLayer(36160,36064,i.__webglTexture,n||0,r)}},this.readRenderTa=
rgetPixels=3Dfunction(t,e,n,i,r,s,a){if(!t||!t.isWebGLRenderTarget)return v=
oid console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget=
 is not THREE.WebGLRenderTarget.");let o=3DZ.get(t).__webglFramebuffer;if(t=
.isWebGLCubeRenderTarget&amp;&amp;void 0!=3D=3Da&amp;&amp;(o=3Do[a]),o){q.b=
indFramebuffer(36160,o);try{const a=3Dt.texture,o=3Da.format,l=3Da.type;if(=
o!=3D=3DE&amp;&amp;ut.convert(o)!=3D=3Dpt.getParameter(35739))return void c=
onsole.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is n=
ot in RGBA or implementation defined format.");const c=3Dl=3D=3D=3DM&amp;&a=
mp;(W.has("EXT_color_buffer_half_float")||j.isWebGL2&amp;&amp;W.has("EXT_co=
lor_buffer_float"));if(!(l=3D=3D=3Dx||ut.convert(l)=3D=3D=3Dpt.getParameter=
(35738)||l=3D=3D=3Db&amp;&amp;(j.isWebGL2||W.has("OES_texture_float")||W.ha=
s("WEBGL_color_buffer_float"))||c))return void console.error("THREE.WebGLRe=
nderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or i=
mplementation defined type.");36053=3D=3D=3Dpt.checkFramebufferStatus(36160=
)?e&gt;=3D0&amp;&amp;e&lt;=3Dt.width-i&amp;&amp;n&gt;=3D0&amp;&amp;n&lt;=3D=
t.height-r&amp;&amp;pt.readPixels(e,n,i,r,ut.convert(o),ut.convert(l),s):co=
nsole.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from re=
nderTarget failed. Framebuffer not complete.")}finally{const t=3Dnull!=3D=
=3D_?Z.get(_).__webglFramebuffer:null;q.bindFramebuffer(36160,t)}}},this.co=
pyFramebufferToTexture=3Dfunction(t,e,n=3D0){const i=3DMath.pow(2,-n),r=3DM=
ath.floor(e.image.width*i),s=3DMath.floor(e.image.height*i),a=3Dut.convert(=
e.format);J.setTexture2D(e,0),pt.copyTexImage2D(3553,n,a,t.x,t.y,r,s,0),q.u=
nbindTexture()},this.copyTextureToTexture=3Dfunction(t,e,n,i=3D0){const r=
=3De.image.width,s=3De.image.height,a=3Dut.convert(n.format),o=3Dut.convert=
(n.type);J.setTexture2D(n,0),pt.pixelStorei(37440,n.flipY),pt.pixelStorei(3=
7441,n.premultiplyAlpha),pt.pixelStorei(3317,n.unpackAlignment),e.isDataTex=
ture?pt.texSubImage2D(3553,i,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTe=
xture?pt.compressedTexSubImage2D(3553,i,t.x,t.y,e.mipmaps[0].width,e.mipmap=
s[0].height,a,e.mipmaps[0].data):pt.texSubImage2D(3553,i,t.x,t.y,a,o,e.imag=
e),0=3D=3D=3Di&amp;&amp;n.generateMipmaps&amp;&amp;pt.generateMipmap(3553),=
q.unbindTexture()},this.copyTextureToTexture3D=3Dfunction(t,e,n,i,r=3D0){if=
(f.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextu=
reToTexture3D: can only be used with WebGL2.");const{width:s,height:a,data:=
o}=3Dn.image,l=3Dut.convert(i.format),c=3Dut.convert(i.type);let h;if(i.isD=
ataTexture3D)J.setTexture3D(i,0),h=3D32879;else{if(!i.isDataTexture2DArray)=
return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only =
supports THREE.DataTexture3D and THREE.DataTexture2DArray.");J.setTexture2D=
Array(i,0),h=3D35866}pt.pixelStorei(37440,i.flipY),pt.pixelStorei(37441,i.p=
remultiplyAlpha),pt.pixelStorei(3317,i.unpackAlignment);const u=3Dpt.getPar=
ameter(3314),d=3Dpt.getParameter(32878),p=3Dpt.getParameter(3316),m=3Dpt.ge=
tParameter(3315),g=3Dpt.getParameter(32877);pt.pixelStorei(3314,s),pt.pixel=
Storei(32878,a),pt.pixelStorei(3316,t.min.x),pt.pixelStorei(3315,t.min.y),p=
t.pixelStorei(32877,t.min.z),pt.texSubImage3D(h,r,e.x,e.y,e.z,t.max.x-t.min=
.x+1,t.max.y-t.min.y+1,t.max.z-t.min.z+1,l,c,o),pt.pixelStorei(3314,u),pt.p=
ixelStorei(32878,d),pt.pixelStorei(3316,p),pt.pixelStorei(3315,m),pt.pixelS=
torei(32877,g),0=3D=3D=3Dr&amp;&amp;i.generateMipmaps&amp;&amp;pt.generateM=
ipmap(h),q.unbindTexture()},this.initTexture=3Dfunction(t){J.setTexture2D(t=
,0),q.unbindTexture()},this.resetState=3Dfunction(){v=3D0,y=3D0,_=3Dnull,q.=
reset(),dt.reset()},"undefined"!=3Dtypeof __THREE_DEVTOOLS__&amp;&amp;__THR=
EE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class=
 bs extends ws{}bs.prototype.isWebGL1Renderer=3D!0;class Ms{constructor(t,e=
=3D25e-5){this.name=3D"",this.color=3Dnew tn(t),this.density=3De}clone(){re=
turn new Ms(this.color,this.density)}toJSON(){return{type:"FogExp2",color:t=
his.color.getHex(),density:this.density}}}Ms.prototype.isFogExp2=3D!0;class=
 Ss{constructor(t,e=3D1,n=3D1e3){this.name=3D"",this.color=3Dnew tn(t),this=
.near=3De,this.far=3Dn}clone(){return new Ss(this.color,this.near,this.far)=
}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:th=
is.far}}}Ss.prototype.isFog=3D!0;class Ts extends Ce{constructor(){super(),=
this.type=3D"Scene",this.background=3Dnull,this.environment=3Dnull,this.fog=
=3Dnull,this.overrideMaterial=3Dnull,this.autoUpdate=3D!0,"undefined"!=3Dty=
peof __THREE_DEVTOOLS__&amp;&amp;__THREE_DEVTOOLS__.dispatchEvent(new Custo=
mEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),null!=3D=
=3Dt.background&amp;&amp;(this.background=3Dt.background.clone()),null!=3D=
=3Dt.environment&amp;&amp;(this.environment=3Dt.environment.clone()),null!=
=3D=3Dt.fog&amp;&amp;(this.fog=3Dt.fog.clone()),null!=3D=3Dt.overrideMateri=
al&amp;&amp;(this.overrideMaterial=3Dt.overrideMaterial.clone()),this.autoU=
pdate=3Dt.autoUpdate,this.matrixAutoUpdate=3Dt.matrixAutoUpdate,this}toJSON=
(t){const e=3Dsuper.toJSON(t);return null!=3D=3Dthis.background&amp;&amp;(e=
.object.background=3Dthis.background.toJSON(t)),null!=3D=3Dthis.environment=
&amp;&amp;(e.object.environment=3Dthis.environment.toJSON(t)),null!=3D=3Dth=
is.fog&amp;&amp;(e.object.fog=3Dthis.fog.toJSON()),e}}Ts.prototype.isScene=
=3D!0;class Es{constructor(t,e){this.array=3Dt,this.stride=3De,this.count=
=3Dvoid 0!=3D=3Dt?t.length/e:0,this.usage=3Det,this.updateRange=3D{offset:0=
,count:-1},this.version=3D0,this.uuid=3Dct(),this.onUploadCallback=3Dfuncti=
on(){}}set needsUpdate(t){!0=3D=3D=3Dt&amp;&amp;this.version++}setUsage(t){=
return this.usage=3Dt,this}copy(t){return this.array=3Dnew t.array.construc=
tor(t.array),this.count=3Dt.count,this.stride=3Dt.stride,this.usage=3Dt.usa=
ge,this}copyAt(t,e,n){t*=3Dthis.stride,n*=3De.stride;for(let i=3D0,r=3Dthis=
.stride;i&lt;r;i++)this.array[t+i]=3De.array[n+i];return this}set(t,e=3D0){=
return this.array.set(t,e),this}clone(t){void 0=3D=3D=3Dt.arrayBuffers&amp;=
&amp;(t.arrayBuffers=3D{}),void 0=3D=3D=3Dthis.array.buffer._uuid&amp;&amp;=
(this.array.buffer._uuid=3Dct()),void 0=3D=3D=3Dt.arrayBuffers[this.array.b=
uffer._uuid]&amp;&amp;(t.arrayBuffers[this.array.buffer._uuid]=3Dthis.array=
.slice(0).buffer);const e=3Dnew this.array.constructor(t.arrayBuffers[this.=
array.buffer._uuid]),n=3Dnew Es(e,this.stride);return n.setUsage(this.usage=
),n}onUpload(t){return this.onUploadCallback=3Dt,this}toJSON(t){return void=
 0=3D=3D=3Dt.arrayBuffers&amp;&amp;(t.arrayBuffers=3D{}),void 0=3D=3D=3Dthi=
s.array.buffer._uuid&amp;&amp;(this.array.buffer._uuid=3Dct()),void 0=3D=3D=
=3Dt.arrayBuffers[this.array.buffer._uuid]&amp;&amp;(t.arrayBuffers[this.ar=
ray.buffer._uuid]=3DArray.prototype.slice.call(new Uint32Array(this.array.b=
uffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.con=
structor.name,stride:this.stride}}}Es.prototype.isInterleavedBuffer=3D!0;co=
nst As=3Dnew Lt;class Ls{constructor(t,e,n,i){this.name=3D"",this.data=3Dt,=
this.itemSize=3De,this.offset=3Dn,this.normalized=3D!0=3D=3D=3Di}get count(=
){return this.data.count}get array(){return this.data.array}set needsUpdate=
(t){this.data.needsUpdate=3Dt}applyMatrix4(t){for(let e=3D0,n=3Dthis.data.c=
ount;e&lt;n;e++)As.x=3Dthis.getX(e),As.y=3Dthis.getY(e),As.z=3Dthis.getZ(e)=
,As.applyMatrix4(t),this.setXYZ(e,As.x,As.y,As.z);return this}applyNormalMa=
trix(t){for(let e=3D0,n=3Dthis.count;e&lt;n;e++)As.x=3Dthis.getX(e),As.y=3D=
this.getY(e),As.z=3Dthis.getZ(e),As.applyNormalMatrix(t),this.setXYZ(e,As.x=
,As.y,As.z);return this}transformDirection(t){for(let e=3D0,n=3Dthis.count;=
e&lt;n;e++)As.x=3Dthis.getX(e),As.y=3Dthis.getY(e),As.z=3Dthis.getZ(e),As.t=
ransformDirection(t),this.setXYZ(e,As.x,As.y,As.z);return this}setX(t,e){re=
turn this.data.array[t*this.data.stride+this.offset]=3De,this}setY(t,e){ret=
urn this.data.array[t*this.data.stride+this.offset+1]=3De,this}setZ(t,e){re=
turn this.data.array[t*this.data.stride+this.offset+2]=3De,this}setW(t,e){r=
eturn this.data.array[t*this.data.stride+this.offset+3]=3De,this}getX(t){re=
turn this.data.array[t*this.data.stride+this.offset]}getY(t){return this.da=
ta.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t=
*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data=
.stride+this.offset+3]}setXY(t,e,n){return t=3Dt*this.data.stride+this.offs=
et,this.data.array[t+0]=3De,this.data.array[t+1]=3Dn,this}setXYZ(t,e,n,i){r=
eturn t=3Dt*this.data.stride+this.offset,this.data.array[t+0]=3De,this.data=
.array[t+1]=3Dn,this.data.array[t+2]=3Di,this}setXYZW(t,e,n,i,r){return t=
=3Dt*this.data.stride+this.offset,this.data.array[t+0]=3De,this.data.array[=
t+1]=3Dn,this.data.array[t+2]=3Di,this.data.array[t+3]=3Dr,this}clone(t){if=
(void 0=3D=3D=3Dt){console.log("THREE.InterleavedBufferAttribute.clone(): C=
loning an interlaved buffer attribute will deinterleave buffer data.");cons=
t t=3D[];for(let e=3D0;e&lt;this.count;e++){const n=3De*this.data.stride+th=
is.offset;for(let e=3D0;e&lt;this.itemSize;e++)t.push(this.data.array[n+e])=
}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)=
}return void 0=3D=3D=3Dt.interleavedBuffers&amp;&amp;(t.interleavedBuffers=
=3D{}),void 0=3D=3D=3Dt.interleavedBuffers[this.data.uuid]&amp;&amp;(t.inte=
rleavedBuffers[this.data.uuid]=3Dthis.data.clone(t)),new Ls(t.interleavedBu=
ffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){=
if(void 0=3D=3D=3Dt){console.log("THREE.InterleavedBufferAttribute.toJSON()=
: Serializing an interlaved buffer attribute will deinterleave buffer data.=
");const t=3D[];for(let e=3D0;e&lt;this.count;e++){const n=3De*this.data.st=
ride+this.offset;for(let e=3D0;e&lt;this.itemSize;e++)t.push(this.data.arra=
y[n+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,arra=
y:t,normalized:this.normalized}}return void 0=3D=3D=3Dt.interleavedBuffers&=
amp;&amp;(t.interleavedBuffers=3D{}),void 0=3D=3D=3Dt.interleavedBuffers[th=
is.data.uuid]&amp;&amp;(t.interleavedBuffers[this.data.uuid]=3Dthis.data.to=
JSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.=
data.uuid,offset:this.offset,normalized:this.normalized}}}Ls.prototype.isIn=
terleavedBufferAttribute=3D!0;class Rs extends Xe{constructor(t){super(),th=
is.type=3D"SpriteMaterial",this.color=3Dnew tn(16777215),this.map=3Dnull,th=
is.alphaMap=3Dnull,this.rotation=3D0,this.sizeAttenuation=3D!0,this.transpa=
rent=3D!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.=
color),this.map=3Dt.map,this.alphaMap=3Dt.alphaMap,this.rotation=3Dt.rotati=
on,this.sizeAttenuation=3Dt.sizeAttenuation,this}}let Cs;Rs.prototype.isSpr=
iteMaterial=3D!0;const Ps=3Dnew Lt,Ds=3Dnew Lt,Is=3Dnew Lt,Ns=3Dnew vt,Bs=
=3Dnew vt,zs=3Dnew se,Fs=3Dnew Lt,Os=3Dnew Lt,Hs=3Dnew Lt,Gs=3Dnew vt,Us=3D=
new vt,ks=3Dnew vt;class Vs extends Ce{constructor(t){if(super(),this.type=
=3D"Sprite",void 0=3D=3D=3DCs){Cs=3Dnew En;const t=3Dnew Float32Array([-.5,=
-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=3Dnew Es(t,5);Cs.setInd=
ex([0,1,2,0,2,3]),Cs.setAttribute("position",new Ls(e,3,0,!1)),Cs.setAttrib=
ute("uv",new Ls(e,2,3,!1))}this.geometry=3DCs,this.material=3Dvoid 0!=3D=3D=
t?t:new Rs,this.center=3Dnew vt(.5,.5)}raycast(t,e){null=3D=3D=3Dt.camera&a=
mp;&amp;console.error('THREE.Sprite: "Raycaster.camera" needs to be set in =
order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld)=
,zs.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.came=
ra.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.model=
ViewMatrix),t.camera.isPerspectiveCamera&amp;&amp;!1=3D=3D=3Dthis.material.=
sizeAttenuation&amp;&amp;Ds.multiplyScalar(-Is.z);const n=3Dthis.material.r=
otation;let i,r;0!=3D=3Dn&amp;&amp;(r=3DMath.cos(n),i=3DMath.sin(n));const =
s=3Dthis.center;Ws(Fs.set(-.5,-.5,0),Is,s,Ds,i,r),Ws(Os.set(.5,-.5,0),Is,s,=
Ds,i,r),Ws(Hs.set(.5,.5,0),Is,s,Ds,i,r),Gs.set(0,0),Us.set(1,0),ks.set(1,1)=
;let a=3Dt.ray.intersectTriangle(Fs,Os,Hs,!1,Ps);if(null=3D=3D=3Da&amp;&amp=
;(Ws(Os.set(-.5,.5,0),Is,s,Ds,i,r),Us.set(0,1),a=3Dt.ray.intersectTriangle(=
Fs,Hs,Os,!1,Ps),null=3D=3D=3Da))return;const o=3Dt.ray.origin.distanceTo(Ps=
);o&lt;t.near||o&gt;t.far||e.push({distance:o,point:Ps.clone(),uv:je.getUV(=
Ps,Fs,Os,Hs,Gs,Us,ks,new vt),face:null,object:this})}copy(t){return super.c=
opy(t),void 0!=3D=3Dt.center&amp;&amp;this.center.copy(t.center),this.mater=
ial=3Dt.material,this}}function Ws(t,e,n,i,r,s){Ns.subVectors(t,n).addScala=
r(.5).multiply(i),void 0!=3D=3Dr?(Bs.x=3Ds*Ns.x-r*Ns.y,Bs.y=3Dr*Ns.x+s*Ns.y=
):Bs.copy(Ns),t.copy(e),t.x+=3DBs.x,t.y+=3DBs.y,t.applyMatrix4(zs)}Vs.proto=
type.isSprite=3D!0;const js=3Dnew Lt,qs=3Dnew Lt;class Xs extends Ce{constr=
uctor(){super(),this._currentLevel=3D0,this.type=3D"LOD",Object.definePrope=
rties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpd=
ate=3D!0}copy(t){super.copy(t,!1);const e=3Dt.levels;for(let t=3D0,n=3De.le=
ngth;t&lt;n;t++){const n=3De[t];this.addLevel(n.object.clone(),n.distance)}=
return this.autoUpdate=3Dt.autoUpdate,this}addLevel(t,e=3D0){e=3DMath.abs(e=
);const n=3Dthis.levels;let i;for(i=3D0;i&lt;n.length&amp;&amp;!(e&lt;n[i].=
distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this}=
getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=
=3Dthis.levels;if(e.length&gt;0){let n,i;for(n=3D1,i=3De.length;n&lt;i&amp;=
&amp;!(t&lt;e[n].distance);n++);return e[n-1].object}return null}raycast(t,=
e){if(this.levels.length&gt;0){js.setFromMatrixPosition(this.matrixWorld);c=
onst n=3Dt.ray.origin.distanceTo(js);this.getObjectForDistance(n).raycast(t=
,e)}}update(t){const e=3Dthis.levels;if(e.length&gt;1){js.setFromMatrixPosi=
tion(t.matrixWorld),qs.setFromMatrixPosition(this.matrixWorld);const n=3Djs=
.distanceTo(qs)/t.zoom;let i,r;for(e[0].object.visible=3D!0,i=3D1,r=3De.len=
gth;i&lt;r&amp;&amp;n&gt;=3De[i].distance;i++)e[i-1].object.visible=3D!1,e[=
i].object.visible=3D!0;for(this._currentLevel=3Di-1;i&lt;r;i++)e[i].object.=
visible=3D!1}}toJSON(t){const e=3Dsuper.toJSON(t);!1=3D=3D=3Dthis.autoUpdat=
e&amp;&amp;(e.object.autoUpdate=3D!1),e.object.levels=3D[];const n=3Dthis.l=
evels;for(let t=3D0,i=3Dn.length;t&lt;i;t++){const i=3Dn[t];e.object.levels=
.push({object:i.object.uuid,distance:i.distance})}return e}}const Ys=3Dnew =
Lt,Zs=3Dnew St,Js=3Dnew St,Qs=3Dnew Lt,Ks=3Dnew se;class $s extends Wn{cons=
tructor(t,e){super(t,e),this.type=3D"SkinnedMesh",this.bindMode=3D"attached=
",this.bindMatrix=3Dnew se,this.bindMatrixInverse=3Dnew se}copy(t){return s=
uper.copy(t),this.bindMode=3Dt.bindMode,this.bindMatrix.copy(t.bindMatrix),=
this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=3Dt.skeleton=
,this}bind(t,e){this.skeleton=3Dt,void 0=3D=3D=3De&amp;&amp;(this.updateMat=
rixWorld(!0),this.skeleton.calculateInverses(),e=3Dthis.matrixWorld),this.b=
indMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skele=
ton.pose()}normalizeSkinWeights(){const t=3Dnew St,e=3Dthis.geometry.attrib=
utes.skinWeight;for(let n=3D0,i=3De.count;n&lt;i;n++){t.x=3De.getX(n),t.y=
=3De.getY(n),t.z=3De.getZ(n),t.w=3De.getW(n);const i=3D1/t.manhattanLength(=
);i!=3D=3D1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.=
w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),"attached"=3D=3D=3Dthis=
.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"=
=3D=3D=3Dthis.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert(=
):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}=
boneTransform(t,e){const n=3Dthis.skeleton,i=3Dthis.geometry;Zs.fromBufferA=
ttribute(i.attributes.skinIndex,t),Js.fromBufferAttribute(i.attributes.skin=
Weight,t),Ys.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this=
.bindMatrix),e.set(0,0,0);for(let t=3D0;t&lt;4;t++){const i=3DJs.getCompone=
nt(t);if(0!=3D=3Di){const r=3DZs.getComponent(t);Ks.multiplyMatrices(n.bone=
s[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Qs.copy(Ys).applyMatr=
ix4(Ks),i)}}return e.applyMatrix4(this.bindMatrixInverse)}}$s.prototype.isS=
kinnedMesh=3D!0;class ta extends Ce{constructor(){super(),this.type=3D"Bone=
"}}ta.prototype.isBone=3D!0;const ea=3Dnew se,na=3Dnew se;class ia{construc=
tor(t=3D[],e=3D[]){this.uuid=3Dct(),this.bones=3Dt.slice(0),this.boneInvers=
es=3De,this.boneMatrices=3Dnull,this.boneTexture=3Dnull,this.boneTextureSiz=
e=3D0,this.frame=3D-1,this.init()}init(){const t=3Dthis.bones,e=3Dthis.bone=
Inverses;if(this.boneMatrices=3Dnew Float32Array(16*t.length),0=3D=3D=3De.l=
ength)this.calculateInverses();else if(t.length!=3D=3De.length){console.war=
n("THREE.Skeleton: Number of inverse bone matrices does not match amount of=
 bones."),this.boneInverses=3D[];for(let t=3D0,e=3Dthis.bones.length;t&lt;e=
;t++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.=
length=3D0;for(let t=3D0,e=3Dthis.bones.length;t&lt;e;t++){const e=3Dnew se=
;this.bones[t]&amp;&amp;e.copy(this.bones[t].matrixWorld).invert(),this.bon=
eInverses.push(e)}}pose(){for(let t=3D0,e=3Dthis.bones.length;t&lt;e;t++){c=
onst e=3Dthis.bones[t];e&amp;&amp;e.matrixWorld.copy(this.boneInverses[t]).=
invert()}for(let t=3D0,e=3Dthis.bones.length;t&lt;e;t++){const e=3Dthis.bon=
es[t];e&amp;&amp;(e.parent&amp;&amp;e.parent.isBone?(e.matrix.copy(e.parent=
.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.ma=
trixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){c=
onst t=3Dthis.bones,e=3Dthis.boneInverses,n=3Dthis.boneMatrices,i=3Dthis.bo=
neTexture;for(let i=3D0,r=3Dt.length;i&lt;r;i++){const r=3Dt[i]?t[i].matrix=
World:na;ea.multiplyMatrices(r,e[i]),ea.toArray(n,16*i)}null!=3D=3Di&amp;&a=
mp;(i.needsUpdate=3D!0)}clone(){return new ia(this.bones,this.boneInverses)=
}getBoneByName(t){for(let e=3D0,n=3Dthis.bones.length;e&lt;n;e++){const n=
=3Dthis.bones[e];if(n.name=3D=3D=3Dt)return n}}dispose(){null!=3D=3Dthis.bo=
neTexture&amp;&amp;(this.boneTexture.dispose(),this.boneTexture=3Dnull)}fro=
mJSON(t,e){this.uuid=3Dt.uuid;for(let n=3D0,i=3Dt.bones.length;n&lt;i;n++){=
const i=3Dt.bones[n];let r=3De[i];void 0=3D=3D=3Dr&amp;&amp;(console.warn("=
THREE.Skeleton: No bone found with UUID:",i),r=3Dnew ta),this.bones.push(r)=
,this.boneInverses.push((new se).fromArray(t.boneInverses[n]))}return this.=
init(),this}toJSON(){const t=3D{metadata:{version:4.5,type:"Skeleton",gener=
ator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=3Dthis.uuid;const =
e=3Dthis.bones,n=3Dthis.boneInverses;for(let i=3D0,r=3De.length;i&lt;r;i++)=
{const r=3De[i];t.bones.push(r.uuid);const s=3Dn[i];t.boneInverses.push(s.t=
oArray())}return t}}const ra=3Dnew se,sa=3Dnew se,aa=3D[],oa=3Dnew Wn;class=
 la extends Wn{constructor(t,e,n){super(t,e),this.instanceMatrix=3Dnew sn(n=
ew Float32Array(16*n),16),this.instanceColor=3Dnull,this.count=3Dn,this.fru=
stumCulled=3D!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.ins=
tanceMatrix),null!=3D=3Dt.instanceColor&amp;&amp;(this.instanceColor=3Dt.in=
stanceColor.clone()),this.count=3Dt.count,this}getColorAt(t,e){e.fromArray(=
this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMat=
rix.array,16*t)}raycast(t,e){const n=3Dthis.matrixWorld,i=3Dthis.count;if(o=
a.geometry=3Dthis.geometry,oa.material=3Dthis.material,void 0!=3D=3Doa.mate=
rial)for(let r=3D0;r&lt;i;r++){this.getMatrixAt(r,ra),sa.multiplyMatrices(n=
,ra),oa.matrixWorld=3Dsa,oa.raycast(t,aa);for(let t=3D0,n=3Daa.length;t&lt;=
n;t++){const n=3Daa[t];n.instanceId=3Dr,n.object=3Dthis,e.push(n)}aa.length=
=3D0}}setColorAt(t,e){null=3D=3D=3Dthis.instanceColor&amp;&amp;(this.instan=
ceColor=3Dnew sn(new Float32Array(3*this.count),3)),e.toArray(this.instance=
Color.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)=
}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}la.p=
rototype.isInstancedMesh=3D!0;class ca extends Xe{constructor(t){super(),th=
is.type=3D"LineBasicMaterial",this.color=3Dnew tn(16777215),this.linewidth=
=3D1,this.linecap=3D"round",this.linejoin=3D"round",this.morphTargets=3D!1,=
this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),thi=
s.linewidth=3Dt.linewidth,this.linecap=3Dt.linecap,this.linejoin=3Dt.linejo=
in,this.morphTargets=3Dt.morphTargets,this}}ca.prototype.isLineBasicMateria=
l=3D!0;const ha=3Dnew Lt,ua=3Dnew Lt,da=3Dnew se,pa=3Dnew re,ma=3Dnew Jt;cl=
ass fa extends Ce{constructor(t=3Dnew En,e=3Dnew ca){super(),this.type=3D"L=
ine",this.geometry=3Dt,this.material=3De,this.updateMorphTargets()}copy(t){=
return super.copy(t),this.material=3Dt.material,this.geometry=3Dt.geometry,=
this}computeLineDistances(){const t=3Dthis.geometry;if(t.isBufferGeometry)i=
f(null=3D=3D=3Dt.index){const e=3Dt.attributes.position,n=3D[0];for(let t=
=3D1,i=3De.count;t&lt;i;t++)ha.fromBufferAttribute(e,t-1),ua.fromBufferAttr=
ibute(e,t),n[t]=3Dn[t-1],n[t]+=3Dha.distanceTo(ua);t.setAttribute("lineDist=
ance",new mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Co=
mputation only possible with non-indexed BufferGeometry.");else t.isGeometr=
y&amp;&amp;console.error("THREE.Line.computeLineDistances() no longer suppo=
rts THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast=
(t,e){const n=3Dthis.geometry,i=3Dthis.matrixWorld,r=3Dt.params.Line.thresh=
old,s=3Dn.drawRange;if(null=3D=3D=3Dn.boundingSphere&amp;&amp;n.computeBoun=
dingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=3Dr,!1=
=3D=3D=3Dt.ray.intersectsSphere(ma))return;da.copy(i).invert(),pa.copy(t.ra=
y).applyMatrix4(da);const a=3Dr/((this.scale.x+this.scale.y+this.scale.z)/3=
),o=3Da*a,l=3Dnew Lt,c=3Dnew Lt,h=3Dnew Lt,u=3Dnew Lt,d=3Dthis.isLineSegmen=
ts?2:1;if(n.isBufferGeometry){const i=3Dn.index,r=3Dn.attributes.position;i=
f(null!=3D=3Di){for(let n=3DMath.max(0,s.start),a=3DMath.min(i.count,s.star=
t+s.count)-1;n&lt;a;n+=3Dd){const s=3Di.getX(n),a=3Di.getX(n+1);l.fromBuffe=
rAttribute(r,s),c.fromBufferAttribute(r,a);if(pa.distanceSqToSegment(l,c,u,=
h)&gt;o)continue;u.applyMatrix4(this.matrixWorld);const d=3Dt.ray.origin.di=
stanceTo(u);d&lt;t.near||d&gt;t.far||e.push({distance:d,point:h.clone().app=
lyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}=
}else{for(let n=3DMath.max(0,s.start),i=3DMath.min(r.count,s.start+s.count)=
-1;n&lt;i;n+=3Dd){l.fromBufferAttribute(r,n),c.fromBufferAttribute(r,n+1);i=
f(pa.distanceSqToSegment(l,c,u,h)&gt;o)continue;u.applyMatrix4(this.matrixW=
orld);const i=3Dt.ray.origin.distanceTo(u);i&lt;t.near||i&gt;t.far||e.push(=
{distance:i,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:nul=
l,faceIndex:null,object:this})}}}else n.isGeometry&amp;&amp;console.error("=
THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeo=
metry instead.")}updateMorphTargets(){const t=3Dthis.geometry;if(t.isBuffer=
Geometry){const e=3Dt.morphAttributes,n=3DObject.keys(e);if(n.length&gt;0){=
const t=3De[n[0]];if(void 0!=3D=3Dt){this.morphTargetInfluences=3D[],this.m=
orphTargetDictionary=3D{};for(let e=3D0,n=3Dt.length;e&lt;n;e++){const n=3D=
t[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDic=
tionary[n]=3De}}}}else{const e=3Dt.morphTargets;void 0!=3D=3De&amp;&amp;e.l=
ength&gt;0&amp;&amp;console.error("THREE.Line.updateMorphTargets() does not=
 support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}fa.prototype=
.isLine=3D!0;const ga=3Dnew Lt,va=3Dnew Lt;class ya extends fa{constructor(=
t,e){super(t,e),this.type=3D"LineSegments"}computeLineDistances(){const t=
=3Dthis.geometry;if(t.isBufferGeometry)if(null=3D=3D=3Dt.index){const e=3Dt=
.attributes.position,n=3D[];for(let t=3D0,i=3De.count;t&lt;i;t+=3D2)ga.from=
BufferAttribute(e,t),va.fromBufferAttribute(e,t+1),n[t]=3D0=3D=3D=3Dt?0:n[t=
-1],n[t+1]=3Dn[t]+ga.distanceTo(va);t.setAttribute("lineDistance",new mn(n,=
1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computati=
on only possible with non-indexed BufferGeometry.");else t.isGeometry&amp;&=
amp;console.error("THREE.LineSegments.computeLineDistances() no longer supp=
orts THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ya.pr=
ototype.isLineSegments=3D!0;class xa extends fa{constructor(t,e){super(t,e)=
,this.type=3D"LineLoop"}}xa.prototype.isLineLoop=3D!0;class _a extends Xe{c=
onstructor(t){super(),this.type=3D"PointsMaterial",this.color=3Dnew tn(1677=
7215),this.map=3Dnull,this.alphaMap=3Dnull,this.size=3D1,this.sizeAttenuati=
on=3D!0,this.morphTargets=3D!1,this.setValues(t)}copy(t){return super.copy(=
t),this.color.copy(t.color),this.map=3Dt.map,this.alphaMap=3Dt.alphaMap,thi=
s.size=3Dt.size,this.sizeAttenuation=3Dt.sizeAttenuation,this.morphTargets=
=3Dt.morphTargets,this}}_a.prototype.isPointsMaterial=3D!0;const wa=3Dnew s=
e,ba=3Dnew re,Ma=3Dnew Jt,Sa=3Dnew Lt;class Ta extends Ce{constructor(t=3Dn=
ew En,e=3Dnew _a){super(),this.type=3D"Points",this.geometry=3Dt,this.mater=
ial=3De,this.updateMorphTargets()}copy(t){return super.copy(t),this.materia=
l=3Dt.material,this.geometry=3Dt.geometry,this}raycast(t,e){const n=3Dthis.=
geometry,i=3Dthis.matrixWorld,r=3Dt.params.Points.threshold,s=3Dn.drawRange=
;if(null=3D=3D=3Dn.boundingSphere&amp;&amp;n.computeBoundingSphere(),Ma.cop=
y(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=3Dr,!1=3D=3D=3Dt.ray.inte=
rsectsSphere(Ma))return;wa.copy(i).invert(),ba.copy(t.ray).applyMatrix4(wa)=
;const a=3Dr/((this.scale.x+this.scale.y+this.scale.z)/3),o=3Da*a;if(n.isBu=
fferGeometry){const r=3Dn.index,a=3Dn.attributes.position;if(null!=3D=3Dr){=
for(let n=3DMath.max(0,s.start),l=3DMath.min(r.count,s.start+s.count);n&lt;=
l;n++){const s=3Dr.getX(n);Sa.fromBufferAttribute(a,s),Ea(Sa,s,o,i,t,e,this=
)}}else{for(let n=3DMath.max(0,s.start),r=3DMath.min(a.count,s.start+s.coun=
t);n&lt;r;n++)Sa.fromBufferAttribute(a,n),Ea(Sa,n,o,i,t,e,this)}}else conso=
le.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THR=
EE.BufferGeometry instead.")}updateMorphTargets(){const t=3Dthis.geometry;i=
f(t.isBufferGeometry){const e=3Dt.morphAttributes,n=3DObject.keys(e);if(n.l=
ength&gt;0){const t=3De[n[0]];if(void 0!=3D=3Dt){this.morphTargetInfluences=
=3D[],this.morphTargetDictionary=3D{};for(let e=3D0,n=3Dt.length;e&lt;n;e++=
){const n=3Dt[e].name||String(e);this.morphTargetInfluences.push(0),this.mo=
rphTargetDictionary[n]=3De}}}}else{const e=3Dt.morphTargets;void 0!=3D=3De&=
amp;&amp;e.length&gt;0&amp;&amp;console.error("THREE.Points.updateMorphTarg=
ets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}=
}}function Ea(t,e,n,i,r,s,a){const o=3Dba.distanceSqToPoint(t);if(o&lt;n){c=
onst n=3Dnew Lt;ba.closestPointToPoint(t,n),n.applyMatrix4(i);const l=3Dr.r=
ay.origin.distanceTo(n);if(l&lt;r.near||l&gt;r.far)return;s.push({distance:=
l,distanceToRay:Math.sqrt(o),point:n,index:e,face:null,object:a})}}Ta.proto=
type.isPoints=3D!0;class Aa extends bt{constructor(t,e,n,i,r,s,a,o,l){super=
(t,e,n,i,r,s,a,o,l),this.format=3Dvoid 0!=3D=3Da?a:T,this.minFilter=3Dvoid =
0!=3D=3Ds?s:g,this.magFilter=3Dvoid 0!=3D=3Dr?r:g,this.generateMipmaps=3D!1=
;const c=3Dthis;"requestVideoFrameCallback"in t&amp;&amp;t.requestVideoFram=
eCallback((function e(){c.needsUpdate=3D!0,t.requestVideoFrameCallback(e)})=
)}clone(){return new this.constructor(this.image).copy(this)}update(){const=
 t=3Dthis.image;!1=3D=3D=3D"requestVideoFrameCallback"in t&amp;&amp;t.ready=
State&gt;=3Dt.HAVE_CURRENT_DATA&amp;&amp;(this.needsUpdate=3D!0)}}Aa.protot=
ype.isVideoTexture=3D!0;class La extends bt{constructor(t,e,n,i,r,s,a,o,l,c=
,h,u){super(null,s,a,o,l,c,i,r,h,u),this.image=3D{width:e,height:n},this.mi=
pmaps=3Dt,this.flipY=3D!1,this.generateMipmaps=3D!1}}La.prototype.isCompres=
sedTexture=3D!0;class Ra extends bt{constructor(t,e,n,i,r,s,a,o,l){super(t,=
e,n,i,r,s,a,o,l),this.needsUpdate=3D!0}}Ra.prototype.isCanvasTexture=3D!0;c=
lass Ca extends bt{constructor(t,e,n,i,r,s,a,o,l,c){if((c=3Dvoid 0!=3D=3Dc?=
c:A)!=3D=3DA&amp;&amp;c!=3D=3DL)throw new Error("DepthTexture format must b=
e either THREE.DepthFormat or THREE.DepthStencilFormat");void 0=3D=3D=3Dn&a=
mp;&amp;c=3D=3D=3DA&amp;&amp;(n=3D_),void 0=3D=3D=3Dn&amp;&amp;c=3D=3D=3DL&=
amp;&amp;(n=3DS),super(null,i,r,s,a,o,c,n,l),this.image=3D{width:t,height:e=
},this.magFilter=3Dvoid 0!=3D=3Da?a:p,this.minFilter=3Dvoid 0!=3D=3Do?o:p,t=
his.flipY=3D!1,this.generateMipmaps=3D!1}}Ca.prototype.isDepthTexture=3D!0;=
class Pa extends En{constructor(t=3D1,e=3D8,n=3D0,i=3D2*Math.PI){super(),th=
is.type=3D"CircleGeometry",this.parameters=3D{radius:t,segments:e,thetaStar=
t:n,thetaLength:i},e=3DMath.max(3,e);const r=3D[],s=3D[],a=3D[],o=3D[],l=3D=
new Lt,c=3Dnew vt;s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let r=3D0,h=
=3D3;r&lt;=3De;r++,h+=3D3){const u=3Dn+r/e*i;l.x=3Dt*Math.cos(u),l.y=3Dt*Ma=
th.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=3D(s[h]/t+1)/2,c.y=3D(s[h+1=
]/t+1)/2,o.push(c.x,c.y)}for(let t=3D1;t&lt;=3De;t++)r.push(t,t+1,0);this.s=
etIndex(r),this.setAttribute("position",new mn(s,3)),this.setAttribute("nor=
mal",new mn(a,3)),this.setAttribute("uv",new mn(o,2))}}class Da extends En{=
constructor(t=3D1,e=3D1,n=3D1,i=3D8,r=3D1,s=3D!1,a=3D0,o=3D2*Math.PI){super=
(),this.type=3D"CylinderGeometry",this.parameters=3D{radiusTop:t,radiusBott=
om:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,th=
etaLength:o};const l=3Dthis;i=3DMath.floor(i),r=3DMath.floor(r);const c=3D[=
],h=3D[],u=3D[],d=3D[];let p=3D0;const m=3D[],f=3Dn/2;let g=3D0;function v(=
n){const r=3Dp,s=3Dnew vt,m=3Dnew Lt;let v=3D0;const y=3D!0=3D=3D=3Dn?t:e,x=
=3D!0=3D=3D=3Dn?1:-1;for(let t=3D1;t&lt;=3Di;t++)h.push(0,f*x,0),u.push(0,x=
,0),d.push(.5,.5),p++;const _=3Dp;for(let t=3D0;t&lt;=3Di;t++){const e=3Dt/=
i*o+a,n=3DMath.cos(e),r=3DMath.sin(e);m.x=3Dy*r,m.y=3Df*x,m.z=3Dy*n,h.push(=
m.x,m.y,m.z),u.push(0,x,0),s.x=3D.5*n+.5,s.y=3D.5*r*x+.5,d.push(s.x,s.y),p+=
+}for(let t=3D0;t&lt;i;t++){const e=3Dr+t,i=3D_+t;!0=3D=3D=3Dn?c.push(i,i+1=
,e):c.push(i+1,i,e),v+=3D3}l.addGroup(g,v,!0=3D=3D=3Dn?1:2),g+=3Dv}!functio=
n(){const s=3Dnew Lt,v=3Dnew Lt;let y=3D0;const x=3D(e-t)/n;for(let l=3D0;l=
&lt;=3Dr;l++){const c=3D[],g=3Dl/r,y=3Dg*(e-t)+t;for(let t=3D0;t&lt;=3Di;t+=
+){const e=3Dt/i,r=3De*o+a,l=3DMath.sin(r),m=3DMath.cos(r);v.x=3Dy*l,v.y=3D=
-g*n+f,v.z=3Dy*m,h.push(v.x,v.y,v.z),s.set(l,x,m).normalize(),u.push(s.x,s.=
y,s.z),d.push(e,1-g),c.push(p++)}m.push(c)}for(let t=3D0;t&lt;i;t++)for(let=
 e=3D0;e&lt;r;e++){const n=3Dm[e][t],i=3Dm[e+1][t],r=3Dm[e+1][t+1],s=3Dm[e]=
[t+1];c.push(n,i,s),c.push(i,r,s),y+=3D6}l.addGroup(g,y,0),g+=3Dy}(),!1=3D=
=3D=3Ds&amp;&amp;(t&gt;0&amp;&amp;v(!0),e&gt;0&amp;&amp;v(!1)),this.setInde=
x(c),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",n=
ew mn(u,3)),this.setAttribute("uv",new mn(d,2))}}class Ia extends Da{constr=
uctor(t=3D1,e=3D1,n=3D8,i=3D1,r=3D!1,s=3D0,a=3D2*Math.PI){super(0,t,e,n,i,r=
,s,a),this.type=3D"ConeGeometry",this.parameters=3D{radius:t,height:e,radia=
lSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}}class=
 Na extends En{constructor(t,e,n=3D1,i=3D0){super(),this.type=3D"Polyhedron=
Geometry",this.parameters=3D{vertices:t,indices:e,radius:n,detail:i};const =
r=3D[],s=3D[];function a(t,e,n,i){const r=3Di+1,s=3D[];for(let i=3D0;i&lt;=
=3Dr;i++){s[i]=3D[];const a=3Dt.clone().lerp(n,i/r),o=3De.clone().lerp(n,i/=
r),l=3Dr-i;for(let t=3D0;t&lt;=3Dl;t++)s[i][t]=3D0=3D=3D=3Dt&amp;&amp;i=3D=
=3D=3Dr?a:a.clone().lerp(o,t/l)}for(let t=3D0;t&lt;r;t++)for(let e=3D0;e&lt=
;2*(r-t)-1;e++){const n=3DMath.floor(e/2);e%2=3D=3D0?(o(s[t][n+1]),o(s[t+1]=
[n]),o(s[t][n])):(o(s[t][n+1]),o(s[t+1][n+1]),o(s[t+1][n]))}}function o(t){=
r.push(t.x,t.y,t.z)}function l(e,n){const i=3D3*e;n.x=3Dt[i+0],n.y=3Dt[i+1]=
,n.z=3Dt[i+2]}function c(t,e,n,i){i&lt;0&amp;&amp;1=3D=3D=3Dt.x&amp;&amp;(s=
[e]=3Dt.x-1),0=3D=3D=3Dn.x&amp;&amp;0=3D=3D=3Dn.z&amp;&amp;(s[e]=3Di/2/Math=
.PI+.5)}function h(t){return Math.atan2(t.z,-t.x)}!function(t){const n=3Dne=
w Lt,i=3Dnew Lt,r=3Dnew Lt;for(let s=3D0;s&lt;e.length;s+=3D3)l(e[s+0],n),l=
(e[s+1],i),l(e[s+2],r),a(n,i,r,t)}(i),function(t){const e=3Dnew Lt;for(let =
n=3D0;n&lt;r.length;n+=3D3)e.x=3Dr[n+0],e.y=3Dr[n+1],e.z=3Dr[n+2],e.normali=
ze().multiplyScalar(t),r[n+0]=3De.x,r[n+1]=3De.y,r[n+2]=3De.z}(n),function(=
){const t=3Dnew Lt;for(let n=3D0;n&lt;r.length;n+=3D3){t.x=3Dr[n+0],t.y=3Dr=
[n+1],t.z=3Dr[n+2];const i=3Dh(t)/2/Math.PI+.5,a=3D(e=3Dt,Math.atan2(-e.y,M=
ath.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5);s.push(i,1-a)}var e;(function(){cons=
t t=3Dnew Lt,e=3Dnew Lt,n=3Dnew Lt,i=3Dnew Lt,a=3Dnew vt,o=3Dnew vt,l=3Dnew=
 vt;for(let u=3D0,d=3D0;u&lt;r.length;u+=3D9,d+=3D6){t.set(r[u+0],r[u+1],r[=
u+2]),e.set(r[u+3],r[u+4],r[u+5]),n.set(r[u+6],r[u+7],r[u+8]),a.set(s[d+0],=
s[d+1]),o.set(s[d+2],s[d+3]),l.set(s[d+4],s[d+5]),i.copy(t).add(e).add(n).d=
ivideScalar(3);const p=3Dh(i);c(a,d+0,t,p),c(o,d+2,e,p),c(l,d+4,n,p)}})(),f=
unction(){for(let t=3D0;t&lt;s.length;t+=3D6){const e=3Ds[t+0],n=3Ds[t+2],i=
=3Ds[t+4],r=3DMath.max(e,n,i),a=3DMath.min(e,n,i);r&gt;.9&amp;&amp;a&lt;.1&=
amp;&amp;(e&lt;.2&amp;&amp;(s[t+0]+=3D1),n&lt;.2&amp;&amp;(s[t+2]+=3D1),i&l=
t;.2&amp;&amp;(s[t+4]+=3D1))}}()}(),this.setAttribute("position",new mn(r,3=
)),this.setAttribute("normal",new mn(r.slice(),3)),this.setAttribute("uv",n=
ew mn(s,2)),0=3D=3D=3Di?this.computeVertexNormals():this.normalizeNormals()=
}}class Ba extends Na{constructor(t=3D1,e=3D0){const n=3D(1+Math.sqrt(5))/2=
,i=3D1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1=
,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,=
0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,1=
0,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,1=
8,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,=
11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type=3D"Dod=
ecahedronGeometry",this.parameters=3D{radius:t,detail:e}}}const za=3Dnew Lt=
,Fa=3Dnew Lt,Oa=3Dnew Lt,Ha=3Dnew je;class Ga extends En{constructor(t,e){i=
f(super(),this.type=3D"EdgesGeometry",this.parameters=3D{thresholdAngle:e},=
e=3Dvoid 0!=3D=3De?e:1,!0=3D=3D=3Dt.isGeometry)return void console.error("T=
HREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeome=
try instead.");const n=3DMath.pow(10,4),i=3DMath.cos(ot*e),r=3Dt.getIndex()=
,s=3Dt.getAttribute("position"),a=3Dr?r.count:s.count,o=3D[0,0,0],l=3D["a",=
"b","c"],c=3Dnew Array(3),h=3D{},u=3D[];for(let t=3D0;t&lt;a;t+=3D3){r?(o[0=
]=3Dr.getX(t),o[1]=3Dr.getX(t+1),o[2]=3Dr.getX(t+2)):(o[0]=3Dt,o[1]=3Dt+1,o=
[2]=3Dt+2);const{a:e,b:a,c:d}=3DHa;if(e.fromBufferAttribute(s,o[0]),a.fromB=
ufferAttribute(s,o[1]),d.fromBufferAttribute(s,o[2]),Ha.getNormal(Oa),c[0]=
=3D`${Math.round(e.x*n)},${Math.round(e.y*n)},${Math.round(e.z*n)}`,c[1]=3D=
`${Math.round(a.x*n)},${Math.round(a.y*n)},${Math.round(a.z*n)}`,c[2]=3D`${=
Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,c[0]!=3D=3Dc[=
1]&amp;&amp;c[1]!=3D=3Dc[2]&amp;&amp;c[2]!=3D=3Dc[0])for(let t=3D0;t&lt;3;t=
++){const e=3D(t+1)%3,n=3Dc[t],r=3Dc[e],s=3DHa[l[t]],a=3DHa[l[e]],d=3D`${n}=
_${r}`,p=3D`${r}_${n}`;p in h&amp;&amp;h[p]?(Oa.dot(h[p].normal)&lt;=3Di&am=
p;&amp;(u.push(s.x,s.y,s.z),u.push(a.x,a.y,a.z)),h[p]=3Dnull):d in h||(h[d]=
=3D{index0:o[t],index1:o[e],normal:Oa.clone()})}}for(const t in h)if(h[t]){=
const{index0:e,index1:n}=3Dh[t];za.fromBufferAttribute(s,e),Fa.fromBufferAt=
tribute(s,n),u.push(za.x,za.y,za.z),u.push(Fa.x,Fa.y,Fa.z)}this.setAttribut=
e("position",new mn(u,3))}}const Ua=3Dfunction(t,e,n){n=3Dn||2;const i=3De&=
amp;&amp;e.length,r=3Di?e[0]*n:t.length;let s=3Dka(t,0,r,n,!0);const a=3D[]=
;if(!s||s.next=3D=3D=3Ds.prev)return a;let o,l,c,h,u,d,p;if(i&amp;&amp;(s=
=3Dfunction(t,e,n,i){const r=3D[];let s,a,o,l,c;for(s=3D0,a=3De.length;s&lt=
;a;s++)o=3De[s]*i,l=3Ds&lt;a-1?e[s+1]*i:t.length,c=3Dka(t,o,l,i,!1),c=3D=3D=
=3Dc.next&amp;&amp;(c.steiner=3D!0),r.push($a(c));for(r.sort(Za),s=3D0;s&lt=
;r.length;s++)Ja(r[s],n),n=3DVa(n,n.next);return n}(t,e,s,n)),t.length&gt;8=
0*n){o=3Dc=3Dt[0],l=3Dh=3Dt[1];for(let e=3Dn;e&lt;r;e+=3Dn)u=3Dt[e],d=3Dt[e=
+1],u&lt;o&amp;&amp;(o=3Du),d&lt;l&amp;&amp;(l=3Dd),u&gt;c&amp;&amp;(c=3Du)=
,d&gt;h&amp;&amp;(h=3Dd);p=3DMath.max(c-o,h-l),p=3D0!=3D=3Dp?1/p:0}return W=
a(s,a,n,o,l,p),a};function ka(t,e,n,i,r){let s,a;if(r=3D=3D=3Dfunction(t,e,=
n,i){let r=3D0;for(let s=3De,a=3Dn-i;s&lt;n;s+=3Di)r+=3D(t[a]-t[s])*(t[s+1]=
+t[a+1]),a=3Ds;return r}(t,e,n,i)&gt;0)for(s=3De;s&lt;n;s+=3Di)a=3Dco(s,t[s=
],t[s+1],a);else for(s=3Dn-i;s&gt;=3De;s-=3Di)a=3Dco(s,t[s],t[s+1],a);retur=
n a&amp;&amp;io(a,a.next)&amp;&amp;(ho(a),a=3Da.next),a}function Va(t,e){if=
(!t)return t;e||(e=3Dt);let n,i=3Dt;do{if(n=3D!1,i.steiner||!io(i,i.next)&a=
mp;&amp;0!=3D=3Dno(i.prev,i,i.next))i=3Di.next;else{if(ho(i),i=3De=3Di.prev=
,i=3D=3D=3Di.next)break;n=3D!0}}while(n||i!=3D=3De);return e}function Wa(t,=
e,n,i,r,s,a){if(!t)return;!a&amp;&amp;s&amp;&amp;function(t,e,n,i){let r=3D=
t;do{null=3D=3D=3Dr.z&amp;&amp;(r.z=3DKa(r.x,r.y,e,n,i)),r.prevZ=3Dr.prev,r=
.nextZ=3Dr.next,r=3Dr.next}while(r!=3D=3Dt);r.prevZ.nextZ=3Dnull,r.prevZ=3D=
null,function(t){let e,n,i,r,s,a,o,l,c=3D1;do{for(n=3Dt,t=3Dnull,s=3Dnull,a=
=3D0;n;){for(a++,i=3Dn,o=3D0,e=3D0;e&lt;c&amp;&amp;(o++,i=3Di.nextZ,i);e++)=
;for(l=3Dc;o&gt;0||l&gt;0&amp;&amp;i;)0!=3D=3Do&amp;&amp;(0=3D=3D=3Dl||!i||=
n.z&lt;=3Di.z)?(r=3Dn,n=3Dn.nextZ,o--):(r=3Di,i=3Di.nextZ,l--),s?s.nextZ=3D=
r:t=3Dr,r.prevZ=3Ds,s=3Dr;n=3Di}s.nextZ=3Dnull,c*=3D2}while(a&gt;1)}(r)}(t,=
i,r,s);let o,l,c=3Dt;for(;t.prev!=3D=3Dt.next;)if(o=3Dt.prev,l=3Dt.next,s?q=
a(t,i,r,s):ja(t))e.push(o.i/n),e.push(t.i/n),e.push(l.i/n),ho(t),t=3Dl.next=
,c=3Dl.next;else if((t=3Dl)=3D=3D=3Dc){a?1=3D=3D=3Da?Wa(t=3DXa(Va(t),e,n),e=
,n,i,r,s,2):2=3D=3D=3Da&amp;&amp;Ya(t,e,n,i,r,s):Wa(Va(t),e,n,i,r,s,1);brea=
k}}function ja(t){const e=3Dt.prev,n=3Dt,i=3Dt.next;if(no(e,n,i)&gt;=3D0)re=
turn!1;let r=3Dt.next.next;for(;r!=3D=3Dt.prev;){if(to(e.x,e.y,n.x,n.y,i.x,=
i.y,r.x,r.y)&amp;&amp;no(r.prev,r,r.next)&gt;=3D0)return!1;r=3Dr.next}retur=
n!0}function qa(t,e,n,i){const r=3Dt.prev,s=3Dt,a=3Dt.next;if(no(r,s,a)&gt;=
=3D0)return!1;const o=3Dr.x&lt;s.x?r.x&lt;a.x?r.x:a.x:s.x&lt;a.x?s.x:a.x,l=
=3Dr.y&lt;s.y?r.y&lt;a.y?r.y:a.y:s.y&lt;a.y?s.y:a.y,c=3Dr.x&gt;s.x?r.x&gt;a=
.x?r.x:a.x:s.x&gt;a.x?s.x:a.x,h=3Dr.y&gt;s.y?r.y&gt;a.y?r.y:a.y:s.y&gt;a.y?=
s.y:a.y,u=3DKa(o,l,e,n,i),d=3DKa(c,h,e,n,i);let p=3Dt.prevZ,m=3Dt.nextZ;for=
(;p&amp;&amp;p.z&gt;=3Du&amp;&amp;m&amp;&amp;m.z&lt;=3Dd;){if(p!=3D=3Dt.pre=
v&amp;&amp;p!=3D=3Dt.next&amp;&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,p.x,p.y)&amp;=
&amp;no(p.prev,p,p.next)&gt;=3D0)return!1;if(p=3Dp.prevZ,m!=3D=3Dt.prev&amp=
;&amp;m!=3D=3Dt.next&amp;&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&amp;&amp;=
no(m.prev,m,m.next)&gt;=3D0)return!1;m=3Dm.nextZ}for(;p&amp;&amp;p.z&gt;=3D=
u;){if(p!=3D=3Dt.prev&amp;&amp;p!=3D=3Dt.next&amp;&amp;to(r.x,r.y,s.x,s.y,a=
.x,a.y,p.x,p.y)&amp;&amp;no(p.prev,p,p.next)&gt;=3D0)return!1;p=3Dp.prevZ}f=
or(;m&amp;&amp;m.z&lt;=3Dd;){if(m!=3D=3Dt.prev&amp;&amp;m!=3D=3Dt.next&amp;=
&amp;to(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&amp;&amp;no(m.prev,m,m.next)&gt;=
=3D0)return!1;m=3Dm.nextZ}return!0}function Xa(t,e,n){let i=3Dt;do{const r=
=3Di.prev,s=3Di.next.next;!io(r,s)&amp;&amp;ro(r,i,i.next,s)&amp;&amp;oo(r,=
s)&amp;&amp;oo(s,r)&amp;&amp;(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),ho(=
i),ho(i.next),i=3Dt=3Ds),i=3Di.next}while(i!=3D=3Dt);return Va(i)}function =
Ya(t,e,n,i,r,s){let a=3Dt;do{let t=3Da.next.next;for(;t!=3D=3Da.prev;){if(a=
.i!=3D=3Dt.i&amp;&amp;eo(a,t)){let o=3Dlo(a,t);return a=3DVa(a,a.next),o=3D=
Va(o,o.next),Wa(a,e,n,i,r,s),void Wa(o,e,n,i,r,s)}t=3Dt.next}a=3Da.next}whi=
le(a!=3D=3Dt)}function Za(t,e){return t.x-e.x}function Ja(t,e){if(e=3Dfunct=
ion(t,e){let n=3De;const i=3Dt.x,r=3Dt.y;let s,a=3D-1/0;do{if(r&lt;=3Dn.y&a=
mp;&amp;r&gt;=3Dn.next.y&amp;&amp;n.next.y!=3D=3Dn.y){const t=3Dn.x+(r-n.y)=
*(n.next.x-n.x)/(n.next.y-n.y);if(t&lt;=3Di&amp;&amp;t&gt;a){if(a=3Dt,t=3D=
=3D=3Di){if(r=3D=3D=3Dn.y)return n;if(r=3D=3D=3Dn.next.y)return n.next}s=3D=
n.x&lt;n.next.x?n:n.next}}n=3Dn.next}while(n!=3D=3De);if(!s)return null;if(=
i=3D=3D=3Da)return s;const o=3Ds,l=3Ds.x,c=3Ds.y;let h,u=3D1/0;n=3Ds;do{i&g=
t;=3Dn.x&amp;&amp;n.x&gt;=3Dl&amp;&amp;i!=3D=3Dn.x&amp;&amp;to(r&lt;c?i:a,r=
,l,c,r&lt;c?a:i,r,n.x,n.y)&amp;&amp;(h=3DMath.abs(r-n.y)/(i-n.x),oo(n,t)&am=
p;&amp;(h&lt;u||h=3D=3D=3Du&amp;&amp;(n.x&gt;s.x||n.x=3D=3D=3Ds.x&amp;&amp;=
Qa(s,n)))&amp;&amp;(s=3Dn,u=3Dh)),n=3Dn.next}while(n!=3D=3Do);return s}(t,e=
)){const n=3Dlo(e,t);Va(e,e.next),Va(n,n.next)}}function Qa(t,e){return no(=
t.prev,t,e.prev)&lt;0&amp;&amp;no(e.next,t,t.next)&lt;0}function Ka(t,e,n,i=
,r){return(t=3D1431655765&amp;((t=3D858993459&amp;((t=3D252645135&amp;((t=
=3D16711935&amp;((t=3D32767*(t-n)*r)|t&lt;&lt;8))|t&lt;&lt;4))|t&lt;&lt;2))=
|t&lt;&lt;1))|(e=3D1431655765&amp;((e=3D858993459&amp;((e=3D252645135&amp;(=
(e=3D16711935&amp;((e=3D32767*(e-i)*r)|e&lt;&lt;8))|e&lt;&lt;4))|e&lt;&lt;2=
))|e&lt;&lt;1))&lt;&lt;1}function $a(t){let e=3Dt,n=3Dt;do{(e.x&lt;n.x||e.x=
=3D=3D=3Dn.x&amp;&amp;e.y&lt;n.y)&amp;&amp;(n=3De),e=3De.next}while(e!=3D=
=3Dt);return n}function to(t,e,n,i,r,s,a,o){return(r-a)*(e-o)-(t-a)*(s-o)&g=
t;=3D0&amp;&amp;(t-a)*(i-o)-(n-a)*(e-o)&gt;=3D0&amp;&amp;(n-a)*(s-o)-(r-a)*=
(i-o)&gt;=3D0}function eo(t,e){return t.next.i!=3D=3De.i&amp;&amp;t.prev.i!=
=3D=3De.i&amp;&amp;!function(t,e){let n=3Dt;do{if(n.i!=3D=3Dt.i&amp;&amp;n.=
next.i!=3D=3Dt.i&amp;&amp;n.i!=3D=3De.i&amp;&amp;n.next.i!=3D=3De.i&amp;&am=
p;ro(n,n.next,t,e))return!0;n=3Dn.next}while(n!=3D=3Dt);return!1}(t,e)&amp;=
&amp;(oo(t,e)&amp;&amp;oo(e,t)&amp;&amp;function(t,e){let n=3Dt,i=3D!1;cons=
t r=3D(t.x+e.x)/2,s=3D(t.y+e.y)/2;do{n.y&gt;s!=3Dn.next.y&gt;s&amp;&amp;n.n=
ext.y!=3D=3Dn.y&amp;&amp;r&lt;(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&amp=
;&amp;(i=3D!i),n=3Dn.next}while(n!=3D=3Dt);return i}(t,e)&amp;&amp;(no(t.pr=
ev,t,e.prev)||no(t,e.prev,e))||io(t,e)&amp;&amp;no(t.prev,t,t.next)&gt;0&am=
p;&amp;no(e.prev,e,e.next)&gt;0)}function no(t,e,n){return(e.y-t.y)*(n.x-e.=
x)-(e.x-t.x)*(n.y-e.y)}function io(t,e){return t.x=3D=3D=3De.x&amp;&amp;t.y=
=3D=3D=3De.y}function ro(t,e,n,i){const r=3Dao(no(t,e,n)),s=3Dao(no(t,e,i))=
,a=3Dao(no(n,i,t)),o=3Dao(no(n,i,e));return r!=3D=3Ds&amp;&amp;a!=3D=3Do||(=
!(0!=3D=3Dr||!so(t,n,e))||(!(0!=3D=3Ds||!so(t,i,e))||(!(0!=3D=3Da||!so(n,t,=
i))||!(0!=3D=3Do||!so(n,e,i)))))}function so(t,e,n){return e.x&lt;=3DMath.m=
ax(t.x,n.x)&amp;&amp;e.x&gt;=3DMath.min(t.x,n.x)&amp;&amp;e.y&lt;=3DMath.ma=
x(t.y,n.y)&amp;&amp;e.y&gt;=3DMath.min(t.y,n.y)}function ao(t){return t&gt;=
0?1:t&lt;0?-1:0}function oo(t,e){return no(t.prev,t,t.next)&lt;0?no(t,e,t.n=
ext)&gt;=3D0&amp;&amp;no(t,t.prev,e)&gt;=3D0:no(t,e,t.prev)&lt;0||no(t,t.ne=
xt,e)&lt;0}function lo(t,e){const n=3Dnew uo(t.i,t.x,t.y),i=3Dnew uo(e.i,e.=
x,e.y),r=3Dt.next,s=3De.prev;return t.next=3De,e.prev=3Dt,n.next=3Dr,r.prev=
=3Dn,i.next=3Dn,n.prev=3Di,s.next=3Di,i.prev=3Ds,i}function co(t,e,n,i){con=
st r=3Dnew uo(t,e,n);return i?(r.next=3Di.next,r.prev=3Di,i.next.prev=3Dr,i=
.next=3Dr):(r.prev=3Dr,r.next=3Dr),r}function ho(t){t.next.prev=3Dt.prev,t.=
prev.next=3Dt.next,t.prevZ&amp;&amp;(t.prevZ.nextZ=3Dt.nextZ),t.nextZ&amp;&=
amp;(t.nextZ.prevZ=3Dt.prevZ)}function uo(t,e,n){this.i=3Dt,this.x=3De,this=
.y=3Dn,this.prev=3Dnull,this.next=3Dnull,this.z=3Dnull,this.prevZ=3Dnull,th=
is.nextZ=3Dnull,this.steiner=3D!1}class po{static area(t){const e=3Dt.lengt=
h;let n=3D0;for(let i=3De-1,r=3D0;r&lt;e;i=3Dr++)n+=3Dt[i].x*t[r].y-t[r].x*=
t[i].y;return.5*n}static isClockWise(t){return po.area(t)&lt;0}static trian=
gulateShape(t,e){const n=3D[],i=3D[],r=3D[];mo(t),fo(n,t);let s=3Dt.length;=
e.forEach(mo);for(let t=3D0;t&lt;e.length;t++)i.push(s),s+=3De[t].length,fo=
(n,e[t]);const a=3DUa(n,i);for(let t=3D0;t&lt;a.length;t+=3D3)r.push(a.slic=
e(t,t+3));return r}}function mo(t){const e=3Dt.length;e&gt;2&amp;&amp;t[e-1=
].equals(t[0])&amp;&amp;t.pop()}function fo(t,e){for(let n=3D0;n&lt;e.lengt=
h;n++)t.push(e[n].x),t.push(e[n].y)}class go extends En{constructor(t,e){su=
per(),this.type=3D"ExtrudeGeometry",this.parameters=3D{shapes:t,options:e},=
t=3DArray.isArray(t)?t:[t];const n=3Dthis,i=3D[],r=3D[];for(let e=3D0,n=3Dt=
.length;e&lt;n;e++){s(t[e])}function s(t){const s=3D[],a=3Dvoid 0!=3D=3De.c=
urveSegments?e.curveSegments:12,o=3Dvoid 0!=3D=3De.steps?e.steps:1;let l=3D=
void 0!=3D=3De.depth?e.depth:100,c=3Dvoid 0=3D=3D=3De.bevelEnabled||e.bevel=
Enabled,h=3Dvoid 0!=3D=3De.bevelThickness?e.bevelThickness:6,u=3Dvoid 0!=3D=
=3De.bevelSize?e.bevelSize:h-2,d=3Dvoid 0!=3D=3De.bevelOffset?e.bevelOffset=
:0,p=3Dvoid 0!=3D=3De.bevelSegments?e.bevelSegments:3;const m=3De.extrudePa=
th,f=3Dvoid 0!=3D=3De.UVGenerator?e.UVGenerator:vo;void 0!=3D=3De.amount&am=
p;&amp;(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed =
to depth."),l=3De.amount);let g,v,y,x,_,w=3D!1;m&amp;&amp;(g=3Dm.getSpacedP=
oints(o),w=3D!0,c=3D!1,v=3Dm.computeFrenetFrames(o,!1),y=3Dnew Lt,x=3Dnew L=
t,_=3Dnew Lt),c||(p=3D0,h=3D0,u=3D0,d=3D0);const b=3Dt.extractPoints(a);let=
 M=3Db.shape;const S=3Db.holes;if(!po.isClockWise(M)){M=3DM.reverse();for(l=
et t=3D0,e=3DS.length;t&lt;e;t++){const e=3DS[t];po.isClockWise(e)&amp;&amp=
;(S[t]=3De.reverse())}}const T=3Dpo.triangulateShape(M,S),E=3DM;for(let t=
=3D0,e=3DS.length;t&lt;e;t++){const e=3DS[t];M=3DM.concat(e)}function A(t,e=
,n){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.=
clone().multiplyScalar(n).add(t)}const L=3DM.length,R=3DT.length;function C=
(t,e,n){let i,r,s;const a=3Dt.x-e.x,o=3Dt.y-e.y,l=3Dn.x-t.x,c=3Dn.y-t.y,h=
=3Da*a+o*o,u=3Da*c-o*l;if(Math.abs(u)&gt;Number.EPSILON){const u=3DMath.sqr=
t(h),d=3DMath.sqrt(l*l+c*c),p=3De.x-o/u,m=3De.y+a/u,f=3D((n.x-c/d-p)*c-(n.y=
+l/d-m)*l)/(a*c-o*l);i=3Dp+a*f-t.x,r=3Dm+o*f-t.y;const g=3Di*i+r*r;if(g&lt;=
=3D2)return new vt(i,r);s=3DMath.sqrt(g/2)}else{let t=3D!1;a&gt;Number.EPSI=
LON?l&gt;Number.EPSILON&amp;&amp;(t=3D!0):a&lt;-Number.EPSILON?l&lt;-Number=
.EPSILON&amp;&amp;(t=3D!0):Math.sign(o)=3D=3D=3DMath.sign(c)&amp;&amp;(t=3D=
!0),t?(i=3D-o,r=3Da,s=3DMath.sqrt(h)):(i=3Da,r=3Do,s=3DMath.sqrt(h/2))}retu=
rn new vt(i/s,r/s)}const P=3D[];for(let t=3D0,e=3DE.length,n=3De-1,i=3Dt+1;=
t&lt;e;t++,n++,i++)n=3D=3D=3De&amp;&amp;(n=3D0),i=3D=3D=3De&amp;&amp;(i=3D0=
),P[t]=3DC(E[t],E[n],E[i]);const D=3D[];let I,N=3DP.concat();for(let t=3D0,=
e=3DS.length;t&lt;e;t++){const e=3DS[t];I=3D[];for(let t=3D0,n=3De.length,i=
=3Dn-1,r=3Dt+1;t&lt;n;t++,i++,r++)i=3D=3D=3Dn&amp;&amp;(i=3D0),r=3D=3D=3Dn&=
amp;&amp;(r=3D0),I[t]=3DC(e[t],e[i],e[r]);D.push(I),N=3DN.concat(I)}for(let=
 t=3D0;t&lt;p;t++){const e=3Dt/p,n=3Dh*Math.cos(e*Math.PI/2),i=3Du*Math.sin=
(e*Math.PI/2)+d;for(let t=3D0,e=3DE.length;t&lt;e;t++){const e=3DA(E[t],P[t=
],i);F(e.x,e.y,-n)}for(let t=3D0,e=3DS.length;t&lt;e;t++){const e=3DS[t];I=
=3DD[t];for(let t=3D0,r=3De.length;t&lt;r;t++){const r=3DA(e[t],I[t],i);F(r=
.x,r.y,-n)}}}const B=3Du+d;for(let t=3D0;t&lt;L;t++){const e=3Dc?A(M[t],N[t=
],B):M[t];w?(x.copy(v.normals[0]).multiplyScalar(e.x),y.copy(v.binormals[0]=
).multiplyScalar(e.y),_.copy(g[0]).add(x).add(y),F(_.x,_.y,_.z)):F(e.x,e.y,=
0)}for(let t=3D1;t&lt;=3Do;t++)for(let e=3D0;e&lt;L;e++){const n=3Dc?A(M[e]=
,N[e],B):M[e];w?(x.copy(v.normals[t]).multiplyScalar(n.x),y.copy(v.binormal=
s[t]).multiplyScalar(n.y),_.copy(g[t]).add(x).add(y),F(_.x,_.y,_.z)):F(n.x,=
n.y,l/o*t)}for(let t=3Dp-1;t&gt;=3D0;t--){const e=3Dt/p,n=3Dh*Math.cos(e*Ma=
th.PI/2),i=3Du*Math.sin(e*Math.PI/2)+d;for(let t=3D0,e=3DE.length;t&lt;e;t+=
+){const e=3DA(E[t],P[t],i);F(e.x,e.y,l+n)}for(let t=3D0,e=3DS.length;t&lt;=
e;t++){const e=3DS[t];I=3DD[t];for(let t=3D0,r=3De.length;t&lt;r;t++){const=
 r=3DA(e[t],I[t],i);w?F(r.x,r.y+g[o-1].y,g[o-1].x+n):F(r.x,r.y,l+n)}}}funct=
ion z(t,e){let n=3Dt.length;for(;--n&gt;=3D0;){const i=3Dn;let r=3Dn-1;r&lt=
;0&amp;&amp;(r=3Dt.length-1);for(let t=3D0,n=3Do+2*p;t&lt;n;t++){const n=3D=
L*t,s=3DL*(t+1);H(e+i+n,e+r+n,e+r+s,e+i+s)}}}function F(t,e,n){s.push(t),s.=
push(e),s.push(n)}function O(t,e,r){G(t),G(e),G(r);const s=3Di.length/3,a=
=3Df.generateTopUV(n,i,s-3,s-2,s-1);U(a[0]),U(a[1]),U(a[2])}function H(t,e,=
r,s){G(t),G(e),G(s),G(e),G(r),G(s);const a=3Di.length/3,o=3Df.generateSideW=
allUV(n,i,a-6,a-3,a-2,a-1);U(o[0]),U(o[1]),U(o[3]),U(o[1]),U(o[2]),U(o[3])}=
function G(t){i.push(s[3*t+0]),i.push(s[3*t+1]),i.push(s[3*t+2])}function U=
(t){r.push(t.x),r.push(t.y)}!function(){const t=3Di.length/3;if(c){let t=3D=
0,e=3DL*t;for(let t=3D0;t&lt;R;t++){const n=3DT[t];O(n[2]+e,n[1]+e,n[0]+e)}=
t=3Do+2*p,e=3DL*t;for(let t=3D0;t&lt;R;t++){const n=3DT[t];O(n[0]+e,n[1]+e,=
n[2]+e)}}else{for(let t=3D0;t&lt;R;t++){const e=3DT[t];O(e[2],e[1],e[0])}fo=
r(let t=3D0;t&lt;R;t++){const e=3DT[t];O(e[0]+L*o,e[1]+L*o,e[2]+L*o)}}n.add=
Group(t,i.length/3-t,0)}(),function(){const t=3Di.length/3;let e=3D0;z(E,e)=
,e+=3DE.length;for(let t=3D0,n=3DS.length;t&lt;n;t++){const n=3DS[t];z(n,e)=
,e+=3Dn.length}n.addGroup(t,i.length/3-t,1)}()}this.setAttribute("position"=
,new mn(i,3)),this.setAttribute("uv",new mn(r,2)),this.computeVertexNormals=
()}toJSON(){const t=3DEn.prototype.toJSON.call(this);return function(t,e,n)=
{if(n.shapes=3D[],Array.isArray(t))for(let e=3D0,i=3Dt.length;e&lt;i;e++){c=
onst i=3Dt[e];n.shapes.push(i.uuid)}else n.shapes.push(t.uuid);void 0!=3D=
=3De.extrudePath&amp;&amp;(n.options.extrudePath=3De.extrudePath.toJSON());=
return n}(this.parameters.shapes,this.parameters.options,t)}}const vo=3D{ge=
nerateTopUV:function(t,e,n,i,r){const s=3De[3*n],a=3De[3*n+1],o=3De[3*i],l=
=3De[3*i+1],c=3De[3*r],h=3De[3*r+1];return[new vt(s,a),new vt(o,l),new vt(c=
,h)]},generateSideWallUV:function(t,e,n,i,r,s){const a=3De[3*n],o=3De[3*n+1=
],l=3De[3*n+2],c=3De[3*i],h=3De[3*i+1],u=3De[3*i+2],d=3De[3*r],p=3De[3*r+1]=
,m=3De[3*r+2],f=3De[3*s],g=3De[3*s+1],v=3De[3*s+2];return Math.abs(o-h)&lt;=
.01?[new vt(a,1-l),new vt(c,1-u),new vt(d,1-m),new vt(f,1-v)]:[new vt(o,1-l=
),new vt(h,1-u),new vt(p,1-m),new vt(g,1-v)]}};class yo extends Na{construc=
tor(t=3D1,e=3D0){const n=3D(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1=
,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,=
1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,=
3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type=3D"IcosahedronG=
eometry",this.parameters=3D{radius:t,detail:e}}}class xo extends En{constru=
ctor(t,e=3D12,n=3D0,i=3D2*Math.PI){super(),this.type=3D"LatheGeometry",this=
.parameters=3D{points:t,segments:e,phiStart:n,phiLength:i},e=3DMath.floor(e=
),i=3Dht(i,0,2*Math.PI);const r=3D[],s=3D[],a=3D[],o=3D1/e,l=3Dnew Lt,c=3Dn=
ew vt;for(let r=3D0;r&lt;=3De;r++){const h=3Dn+r*o*i,u=3DMath.sin(h),d=3DMa=
th.cos(h);for(let n=3D0;n&lt;=3Dt.length-1;n++)l.x=3Dt[n].x*u,l.y=3Dt[n].y,=
l.z=3Dt[n].x*d,s.push(l.x,l.y,l.z),c.x=3Dr/e,c.y=3Dn/(t.length-1),a.push(c.=
x,c.y)}for(let n=3D0;n&lt;e;n++)for(let e=3D0;e&lt;t.length-1;e++){const i=
=3De+n*t.length,s=3Di,a=3Di+t.length,o=3Di+t.length+1,l=3Di+1;r.push(s,a,l)=
,r.push(a,o,l)}if(this.setIndex(r),this.setAttribute("position",new mn(s,3)=
),this.setAttribute("uv",new mn(a,2)),this.computeVertexNormals(),i=3D=3D=
=3D2*Math.PI){const n=3Dthis.attributes.normal.array,i=3Dnew Lt,r=3Dnew Lt,=
s=3Dnew Lt,a=3De*t.length*3;for(let e=3D0,o=3D0;e&lt;t.length;e++,o+=3D3)i.=
x=3Dn[o+0],i.y=3Dn[o+1],i.z=3Dn[o+2],r.x=3Dn[a+o+0],r.y=3Dn[a+o+1],r.z=3Dn[=
a+o+2],s.addVectors(i,r).normalize(),n[o+0]=3Dn[a+o+0]=3Ds.x,n[o+1]=3Dn[a+o=
+1]=3Ds.y,n[o+2]=3Dn[a+o+2]=3Ds.z}}}class _o extends Na{constructor(t=3D1,e=
=3D0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5=
,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type=3D"OctahedronGeometry",this.para=
meters=3D{radius:t,detail:e}}}class wo extends En{constructor(t,e,n){super(=
),this.type=3D"ParametricGeometry",this.parameters=3D{func:t,slices:e,stack=
s:n};const i=3D[],r=3D[],s=3D[],a=3D[],o=3D1e-5,l=3Dnew Lt,c=3Dnew Lt,h=3Dn=
ew Lt,u=3Dnew Lt,d=3Dnew Lt;t.length&lt;3&amp;&amp;console.error("THREE.Par=
ametricGeometry: Function must now modify a Vector3 as third parameter.");c=
onst p=3De+1;for(let i=3D0;i&lt;=3Dn;i++){const p=3Di/n;for(let n=3D0;n&lt;=
=3De;n++){const i=3Dn/e;t(i,p,c),r.push(c.x,c.y,c.z),i-o&gt;=3D0?(t(i-o,p,h=
),u.subVectors(c,h)):(t(i+o,p,h),u.subVectors(h,c)),p-o&gt;=3D0?(t(i,p-o,h)=
,d.subVectors(c,h)):(t(i,p+o,h),d.subVectors(h,c)),l.crossVectors(u,d).norm=
alize(),s.push(l.x,l.y,l.z),a.push(i,p)}}for(let t=3D0;t&lt;n;t++)for(let n=
=3D0;n&lt;e;n++){const e=3Dt*p+n,r=3Dt*p+n+1,s=3D(t+1)*p+n+1,a=3D(t+1)*p+n;=
i.push(e,r,a),i.push(r,s,a)}this.setIndex(i),this.setAttribute("position",n=
ew mn(r,3)),this.setAttribute("normal",new mn(s,3)),this.setAttribute("uv",=
new mn(a,2))}}class bo extends En{constructor(t=3D.5,e=3D1,n=3D8,i=3D1,r=3D=
0,s=3D2*Math.PI){super(),this.type=3D"RingGeometry",this.parameters=3D{inne=
rRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLen=
gth:s},n=3DMath.max(3,n);const a=3D[],o=3D[],l=3D[],c=3D[];let h=3Dt;const =
u=3D(e-t)/(i=3DMath.max(1,i)),d=3Dnew Lt,p=3Dnew vt;for(let t=3D0;t&lt;=3Di=
;t++){for(let t=3D0;t&lt;=3Dn;t++){const i=3Dr+t/n*s;d.x=3Dh*Math.cos(i),d.=
y=3Dh*Math.sin(i),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=3D(d.x/e+1)/2,p.y=
=3D(d.y/e+1)/2,c.push(p.x,p.y)}h+=3Du}for(let t=3D0;t&lt;i;t++){const e=3Dt=
*(n+1);for(let t=3D0;t&lt;n;t++){const i=3Dt+e,r=3Di,s=3Di+n+1,o=3Di+n+2,l=
=3Di+1;a.push(r,s,l),a.push(s,o,l)}}this.setIndex(a),this.setAttribute("pos=
ition",new mn(o,3)),this.setAttribute("normal",new mn(l,3)),this.setAttribu=
te("uv",new mn(c,2))}}class Mo extends En{constructor(t,e=3D12){super(),thi=
s.type=3D"ShapeGeometry",this.parameters=3D{shapes:t,curveSegments:e};const=
 n=3D[],i=3D[],r=3D[],s=3D[];let a=3D0,o=3D0;if(!1=3D=3D=3DArray.isArray(t)=
)l(t);else for(let e=3D0;e&lt;t.length;e++)l(t[e]),this.addGroup(a,o,e),a+=
=3Do,o=3D0;function l(t){const a=3Di.length/3,l=3Dt.extractPoints(e);let c=
=3Dl.shape;const h=3Dl.holes;!1=3D=3D=3Dpo.isClockWise(c)&amp;&amp;(c=3Dc.r=
everse());for(let t=3D0,e=3Dh.length;t&lt;e;t++){const e=3Dh[t];!0=3D=3D=3D=
po.isClockWise(e)&amp;&amp;(h[t]=3De.reverse())}const u=3Dpo.triangulateSha=
pe(c,h);for(let t=3D0,e=3Dh.length;t&lt;e;t++){const e=3Dh[t];c=3Dc.concat(=
e)}for(let t=3D0,e=3Dc.length;t&lt;e;t++){const e=3Dc[t];i.push(e.x,e.y,0),=
r.push(0,0,1),s.push(e.x,e.y)}for(let t=3D0,e=3Du.length;t&lt;e;t++){const =
e=3Du[t],i=3De[0]+a,r=3De[1]+a,s=3De[2]+a;n.push(i,r,s),o+=3D3}}this.setInd=
ex(n),this.setAttribute("position",new mn(i,3)),this.setAttribute("normal",=
new mn(r,3)),this.setAttribute("uv",new mn(s,2))}toJSON(){const t=3DEn.prot=
otype.toJSON.call(this);return function(t,e){if(e.shapes=3D[],Array.isArray=
(t))for(let n=3D0,i=3Dt.length;n&lt;i;n++){const i=3Dt[n];e.shapes.push(i.u=
uid)}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)}}class =
So extends En{constructor(t=3D1,e=3D8,n=3D6,i=3D0,r=3D2*Math.PI,s=3D0,a=3DM=
ath.PI){super(),this.type=3D"SphereGeometry",this.parameters=3D{radius:t,wi=
dthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLen=
gth:a},e=3DMath.max(3,Math.floor(e)),n=3DMath.max(2,Math.floor(n));const o=
=3DMath.min(s+a,Math.PI);let l=3D0;const c=3D[],h=3Dnew Lt,u=3Dnew Lt,d=3D[=
],p=3D[],m=3D[],f=3D[];for(let d=3D0;d&lt;=3Dn;d++){const g=3D[],v=3Dd/n;le=
t y=3D0;0=3D=3Dd&amp;&amp;0=3D=3Ds?y=3D.5/e:d=3D=3Dn&amp;&amp;o=3D=3DMath.P=
I&amp;&amp;(y=3D-.5/e);for(let n=3D0;n&lt;=3De;n++){const o=3Dn/e;h.x=3D-t*=
Math.cos(i+o*r)*Math.sin(s+v*a),h.y=3Dt*Math.cos(s+v*a),h.z=3Dt*Math.sin(i+=
o*r)*Math.sin(s+v*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u=
.y,u.z),f.push(o+y,1-v),g.push(l++)}c.push(g)}for(let t=3D0;t&lt;n;t++)for(=
let i=3D0;i&lt;e;i++){const e=3Dc[t][i+1],r=3Dc[t][i],a=3Dc[t+1][i],l=3Dc[t=
+1][i+1];(0!=3D=3Dt||s&gt;0)&amp;&amp;d.push(e,r,l),(t!=3D=3Dn-1||o&lt;Math=
.PI)&amp;&amp;d.push(r,a,l)}this.setIndex(d),this.setAttribute("position",n=
ew mn(p,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",=
new mn(f,2))}}class To extends Na{constructor(t=3D1,e=3D0){super([1,1,1,-1,=
-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type=3D"Tetrahedr=
onGeometry",this.parameters=3D{radius:t,detail:e}}}class Eo extends go{cons=
tructor(t,e=3D{}){const n=3De.font;if(!n||!n.isFont)return console.error("T=
HREE.TextGeometry: font parameter is not an instance of THREE.Font."),new E=
n;const i=3Dn.generateShapes(t,e.size);e.depth=3Dvoid 0!=3D=3De.height?e.he=
ight:50,void 0=3D=3D=3De.bevelThickness&amp;&amp;(e.bevelThickness=3D10),vo=
id 0=3D=3D=3De.bevelSize&amp;&amp;(e.bevelSize=3D8),void 0=3D=3D=3De.bevelE=
nabled&amp;&amp;(e.bevelEnabled=3D!1),super(i,e),this.type=3D"TextGeometry"=
}}class Ao extends En{constructor(t=3D1,e=3D.4,n=3D8,i=3D6,r=3D2*Math.PI){s=
uper(),this.type=3D"TorusGeometry",this.parameters=3D{radius:t,tube:e,radia=
lSegments:n,tubularSegments:i,arc:r},n=3DMath.floor(n),i=3DMath.floor(i);co=
nst s=3D[],a=3D[],o=3D[],l=3D[],c=3Dnew Lt,h=3Dnew Lt,u=3Dnew Lt;for(let s=
=3D0;s&lt;=3Dn;s++)for(let d=3D0;d&lt;=3Di;d++){const p=3Dd/i*r,m=3Ds/n*Mat=
h.PI*2;h.x=3D(t+e*Math.cos(m))*Math.cos(p),h.y=3D(t+e*Math.cos(m))*Math.sin=
(p),h.z=3De*Math.sin(m),a.push(h.x,h.y,h.z),c.x=3Dt*Math.cos(p),c.y=3Dt*Mat=
h.sin(p),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(d/i),l.pu=
sh(s/n)}for(let t=3D1;t&lt;=3Dn;t++)for(let e=3D1;e&lt;=3Di;e++){const n=3D=
(i+1)*t+e-1,r=3D(i+1)*(t-1)+e-1,a=3D(i+1)*(t-1)+e,o=3D(i+1)*t+e;s.push(n,r,=
o),s.push(r,a,o)}this.setIndex(s),this.setAttribute("position",new mn(a,3))=
,this.setAttribute("normal",new mn(o,3)),this.setAttribute("uv",new mn(l,2)=
)}}class Lo extends En{constructor(t=3D1,e=3D.4,n=3D64,i=3D8,r=3D2,s=3D3){s=
uper(),this.type=3D"TorusKnotGeometry",this.parameters=3D{radius:t,tube:e,t=
ubularSegments:n,radialSegments:i,p:r,q:s},n=3DMath.floor(n),i=3DMath.floor=
(i);const a=3D[],o=3D[],l=3D[],c=3D[],h=3Dnew Lt,u=3Dnew Lt,d=3Dnew Lt,p=3D=
new Lt,m=3Dnew Lt,f=3Dnew Lt,g=3Dnew Lt;for(let a=3D0;a&lt;=3Dn;++a){const =
y=3Da/n*r*Math.PI*2;v(y,r,s,t,d),v(y+.01,r,s,t,p),f.subVectors(p,d),g.addVe=
ctors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normaliz=
e();for(let t=3D0;t&lt;=3Di;++t){const r=3Dt/i*Math.PI*2,s=3D-e*Math.cos(r)=
,p=3De*Math.sin(r);h.x=3Dd.x+(s*g.x+p*m.x),h.y=3Dd.y+(s*g.y+p*m.y),h.z=3Dd.=
z+(s*g.z+p*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.=
x,u.y,u.z),c.push(a/n),c.push(t/i)}}for(let t=3D1;t&lt;=3Dn;t++)for(let e=
=3D1;e&lt;=3Di;e++){const n=3D(i+1)*(t-1)+(e-1),r=3D(i+1)*t+(e-1),s=3D(i+1)=
*t+e,o=3D(i+1)*(t-1)+e;a.push(n,r,o),a.push(r,s,o)}function v(t,e,n,i,r){co=
nst s=3DMath.cos(t),a=3DMath.sin(t),o=3Dn/e*t,l=3DMath.cos(o);r.x=3Di*(2+l)=
*.5*s,r.y=3Di*(2+l)*a*.5,r.z=3Di*Math.sin(o)*.5}this.setIndex(a),this.setAt=
tribute("position",new mn(o,3)),this.setAttribute("normal",new mn(l,3)),thi=
s.setAttribute("uv",new mn(c,2))}}class Ro extends En{constructor(t,e=3D64,=
n=3D1,i=3D8,r=3D!1){super(),this.type=3D"TubeGeometry",this.parameters=3D{p=
ath:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const s=3Dt.com=
puteFrenetFrames(e,r);this.tangents=3Ds.tangents,this.normals=3Ds.normals,t=
his.binormals=3Ds.binormals;const a=3Dnew Lt,o=3Dnew Lt,l=3Dnew vt;let c=3D=
new Lt;const h=3D[],u=3D[],d=3D[],p=3D[];function m(r){c=3Dt.getPointAt(r/e=
,c);const l=3Ds.normals[r],d=3Ds.binormals[r];for(let t=3D0;t&lt;=3Di;t++){=
const e=3Dt/i*Math.PI*2,r=3DMath.sin(e),s=3D-Math.cos(e);o.x=3Ds*l.x+r*d.x,=
o.y=3Ds*l.y+r*d.y,o.z=3Ds*l.z+r*d.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=
=3Dc.x+n*o.x,a.y=3Dc.y+n*o.y,a.z=3Dc.z+n*o.z,h.push(a.x,a.y,a.z)}}!function=
(){for(let t=3D0;t&lt;e;t++)m(t);m(!1=3D=3D=3Dr?e:0),function(){for(let t=
=3D0;t&lt;=3De;t++)for(let n=3D0;n&lt;=3Di;n++)l.x=3Dt/e,l.y=3Dn/i,d.push(l=
.x,l.y)}(),function(){for(let t=3D1;t&lt;=3De;t++)for(let e=3D1;e&lt;=3Di;e=
++){const n=3D(i+1)*(t-1)+(e-1),r=3D(i+1)*t+(e-1),s=3D(i+1)*t+e,a=3D(i+1)*(=
t-1)+e;p.push(n,r,a),p.push(r,s,a)}}()}(),this.setIndex(p),this.setAttribut=
e("position",new mn(h,3)),this.setAttribute("normal",new mn(u,3)),this.setA=
ttribute("uv",new mn(d,2))}toJSON(){const t=3DEn.prototype.toJSON.call(this=
);return t.path=3Dthis.parameters.path.toJSON(),t}}class Co extends En{cons=
tructor(t){if(super(),this.type=3D"WireframeGeometry",!0=3D=3D=3Dt.isGeomet=
ry)return void console.error("THREE.WireframeGeometry no longer supports TH=
REE.Geometry. Use THREE.BufferGeometry instead.");const e=3D[],n=3D[0,0],i=
=3D{},r=3Dnew Lt;if(null!=3D=3Dt.index){const s=3Dt.attributes.position,a=
=3Dt.index;let o=3Dt.groups;0=3D=3D=3Do.length&amp;&amp;(o=3D[{start:0,coun=
t:a.count,materialIndex:0}]);for(let t=3D0,e=3Do.length;t&lt;e;++t){const e=
=3Do[t],r=3De.start;for(let t=3Dr,s=3Dr+e.count;t&lt;s;t+=3D3)for(let e=3D0=
;e&lt;3;e++){const r=3Da.getX(t+e),s=3Da.getX(t+(e+1)%3);n[0]=3DMath.min(r,=
s),n[1]=3DMath.max(r,s);const o=3Dn[0]+","+n[1];void 0=3D=3D=3Di[o]&amp;&am=
p;(i[o]=3D{index1:n[0],index2:n[1]})}}for(const t in i){const n=3Di[t];r.fr=
omBufferAttribute(s,n.index1),e.push(r.x,r.y,r.z),r.fromBufferAttribute(s,n=
.index2),e.push(r.x,r.y,r.z)}}else{const n=3Dt.attributes.position;for(let =
t=3D0,i=3Dn.count/3;t&lt;i;t++)for(let i=3D0;i&lt;3;i++){const s=3D3*t+i;r.=
fromBufferAttribute(n,s),e.push(r.x,r.y,r.z);const a=3D3*t+(i+1)%3;r.fromBu=
fferAttribute(n,a),e.push(r.x,r.y,r.z)}}this.setAttribute("position",new mn=
(e,3))}}var Po=3DObject.freeze({__proto__:null,BoxGeometry:qn,BoxBufferGeom=
etry:qn,CircleGeometry:Pa,CircleBufferGeometry:Pa,ConeGeometry:Ia,ConeBuffe=
rGeometry:Ia,CylinderGeometry:Da,CylinderBufferGeometry:Da,DodecahedronGeom=
etry:Ba,DodecahedronBufferGeometry:Ba,EdgesGeometry:Ga,ExtrudeGeometry:go,E=
xtrudeBufferGeometry:go,IcosahedronGeometry:yo,IcosahedronBufferGeometry:yo=
,LatheGeometry:xo,LatheBufferGeometry:xo,OctahedronGeometry:_o,OctahedronBu=
fferGeometry:_o,ParametricGeometry:wo,ParametricBufferGeometry:wo,PlaneGeom=
etry:ci,PlaneBufferGeometry:ci,PolyhedronGeometry:Na,PolyhedronBufferGeomet=
ry:Na,RingGeometry:bo,RingBufferGeometry:bo,ShapeGeometry:Mo,ShapeBufferGeo=
metry:Mo,SphereGeometry:So,SphereBufferGeometry:So,TetrahedronGeometry:To,T=
etrahedronBufferGeometry:To,TextGeometry:Eo,TextBufferGeometry:Eo,TorusGeom=
etry:Ao,TorusBufferGeometry:Ao,TorusKnotGeometry:Lo,TorusKnotBufferGeometry=
:Lo,TubeGeometry:Ro,TubeBufferGeometry:Ro,WireframeGeometry:Co});class Do e=
xtends Xe{constructor(t){super(),this.type=3D"ShadowMaterial",this.color=3D=
new tn(0),this.transparent=3D!0,this.setValues(t)}copy(t){return super.copy=
(t),this.color.copy(t.color),this}}Do.prototype.isShadowMaterial=3D!0;class=
 Io extends Jn{constructor(t){super(t),this.type=3D"RawShaderMaterial"}}Io.=
prototype.isRawShaderMaterial=3D!0;class No extends Xe{constructor(t){super=
(),this.defines=3D{STANDARD:""},this.type=3D"MeshStandardMaterial",this.col=
or=3Dnew tn(16777215),this.roughness=3D1,this.metalness=3D0,this.map=3Dnull=
,this.lightMap=3Dnull,this.lightMapIntensity=3D1,this.aoMap=3Dnull,this.aoM=
apIntensity=3D1,this.emissive=3Dnew tn(0),this.emissiveIntensity=3D1,this.e=
missiveMap=3Dnull,this.bumpMap=3Dnull,this.bumpScale=3D1,this.normalMap=3Dn=
ull,this.normalMapType=3D0,this.normalScale=3Dnew vt(1,1),this.displacement=
Map=3Dnull,this.displacementScale=3D1,this.displacementBias=3D0,this.roughn=
essMap=3Dnull,this.metalnessMap=3Dnull,this.alphaMap=3Dnull,this.envMap=3Dn=
ull,this.envMapIntensity=3D1,this.refractionRatio=3D.98,this.wireframe=3D!1=
,this.wireframeLinewidth=3D1,this.wireframeLinecap=3D"round",this.wireframe=
Linejoin=3D"round",this.skinning=3D!1,this.morphTargets=3D!1,this.morphNorm=
als=3D!1,this.flatShading=3D!1,this.vertexTangents=3D!1,this.setValues(t)}c=
opy(t){return super.copy(t),this.defines=3D{STANDARD:""},this.color.copy(t.=
color),this.roughness=3Dt.roughness,this.metalness=3Dt.metalness,this.map=
=3Dt.map,this.lightMap=3Dt.lightMap,this.lightMapIntensity=3Dt.lightMapInte=
nsity,this.aoMap=3Dt.aoMap,this.aoMapIntensity=3Dt.aoMapIntensity,this.emis=
sive.copy(t.emissive),this.emissiveMap=3Dt.emissiveMap,this.emissiveIntensi=
ty=3Dt.emissiveIntensity,this.bumpMap=3Dt.bumpMap,this.bumpScale=3Dt.bumpSc=
ale,this.normalMap=3Dt.normalMap,this.normalMapType=3Dt.normalMapType,this.=
normalScale.copy(t.normalScale),this.displacementMap=3Dt.displacementMap,th=
is.displacementScale=3Dt.displacementScale,this.displacementBias=3Dt.displa=
cementBias,this.roughnessMap=3Dt.roughnessMap,this.metalnessMap=3Dt.metalne=
ssMap,this.alphaMap=3Dt.alphaMap,this.envMap=3Dt.envMap,this.envMapIntensit=
y=3Dt.envMapIntensity,this.refractionRatio=3Dt.refractionRatio,this.wirefra=
me=3Dt.wireframe,this.wireframeLinewidth=3Dt.wireframeLinewidth,this.wirefr=
ameLinecap=3Dt.wireframeLinecap,this.wireframeLinejoin=3Dt.wireframeLinejoi=
n,this.skinning=3Dt.skinning,this.morphTargets=3Dt.morphTargets,this.morphN=
ormals=3Dt.morphNormals,this.flatShading=3Dt.flatShading,this.vertexTangent=
s=3Dt.vertexTangents,this}}No.prototype.isMeshStandardMaterial=3D!0;class B=
o extends No{constructor(t){super(),this.defines=3D{STANDARD:"",PHYSICAL:""=
},this.type=3D"MeshPhysicalMaterial",this.clearcoat=3D0,this.clearcoatMap=
=3Dnull,this.clearcoatRoughness=3D0,this.clearcoatRoughnessMap=3Dnull,this.=
clearcoatNormalScale=3Dnew vt(1,1),this.clearcoatNormalMap=3Dnull,this.refl=
ectivity=3D.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*=
this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectiv=
ity=3Dht(2.5*(t-1)/(t+1),0,1)}}),this.sheen=3Dnull,this.transmission=3D0,th=
is.transmissionMap=3Dnull,this.setValues(t)}copy(t){return super.copy(t),th=
is.defines=3D{STANDARD:"",PHYSICAL:""},this.clearcoat=3Dt.clearcoat,this.cl=
earcoatMap=3Dt.clearcoatMap,this.clearcoatRoughness=3Dt.clearcoatRoughness,=
this.clearcoatRoughnessMap=3Dt.clearcoatRoughnessMap,this.clearcoatNormalMa=
p=3Dt.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalSc=
ale),this.reflectivity=3Dt.reflectivity,t.sheen?this.sheen=3D(this.sheen||n=
ew tn).copy(t.sheen):this.sheen=3Dnull,this.transmission=3Dt.transmission,t=
his.transmissionMap=3Dt.transmissionMap,this}}Bo.prototype.isMeshPhysicalMa=
terial=3D!0;class zo extends Xe{constructor(t){super(),this.type=3D"MeshPho=
ngMaterial",this.color=3Dnew tn(16777215),this.specular=3Dnew tn(1118481),t=
his.shininess=3D30,this.map=3Dnull,this.lightMap=3Dnull,this.lightMapIntens=
ity=3D1,this.aoMap=3Dnull,this.aoMapIntensity=3D1,this.emissive=3Dnew tn(0)=
,this.emissiveIntensity=3D1,this.emissiveMap=3Dnull,this.bumpMap=3Dnull,thi=
s.bumpScale=3D1,this.normalMap=3Dnull,this.normalMapType=3D0,this.normalSca=
le=3Dnew vt(1,1),this.displacementMap=3Dnull,this.displacementScale=3D1,thi=
s.displacementBias=3D0,this.specularMap=3Dnull,this.alphaMap=3Dnull,this.en=
vMap=3Dnull,this.combine=3D0,this.reflectivity=3D1,this.refractionRatio=3D.=
98,this.wireframe=3D!1,this.wireframeLinewidth=3D1,this.wireframeLinecap=3D=
"round",this.wireframeLinejoin=3D"round",this.skinning=3D!1,this.morphTarge=
ts=3D!1,this.morphNormals=3D!1,this.flatShading=3D!1,this.setValues(t)}copy=
(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.spec=
ular),this.shininess=3Dt.shininess,this.map=3Dt.map,this.lightMap=3Dt.light=
Map,this.lightMapIntensity=3Dt.lightMapIntensity,this.aoMap=3Dt.aoMap,this.=
aoMapIntensity=3Dt.aoMapIntensity,this.emissive.copy(t.emissive),this.emiss=
iveMap=3Dt.emissiveMap,this.emissiveIntensity=3Dt.emissiveIntensity,this.bu=
mpMap=3Dt.bumpMap,this.bumpScale=3Dt.bumpScale,this.normalMap=3Dt.normalMap=
,this.normalMapType=3Dt.normalMapType,this.normalScale.copy(t.normalScale),=
this.displacementMap=3Dt.displacementMap,this.displacementScale=3Dt.displac=
ementScale,this.displacementBias=3Dt.displacementBias,this.specularMap=3Dt.=
specularMap,this.alphaMap=3Dt.alphaMap,this.envMap=3Dt.envMap,this.combine=
=3Dt.combine,this.reflectivity=3Dt.reflectivity,this.refractionRatio=3Dt.re=
fractionRatio,this.wireframe=3Dt.wireframe,this.wireframeLinewidth=3Dt.wire=
frameLinewidth,this.wireframeLinecap=3Dt.wireframeLinecap,this.wireframeLin=
ejoin=3Dt.wireframeLinejoin,this.skinning=3Dt.skinning,this.morphTargets=3D=
t.morphTargets,this.morphNormals=3Dt.morphNormals,this.flatShading=3Dt.flat=
Shading,this}}zo.prototype.isMeshPhongMaterial=3D!0;class Fo extends Xe{con=
structor(t){super(),this.defines=3D{TOON:""},this.type=3D"MeshToonMaterial"=
,this.color=3Dnew tn(16777215),this.map=3Dnull,this.gradientMap=3Dnull,this=
.lightMap=3Dnull,this.lightMapIntensity=3D1,this.aoMap=3Dnull,this.aoMapInt=
ensity=3D1,this.emissive=3Dnew tn(0),this.emissiveIntensity=3D1,this.emissi=
veMap=3Dnull,this.bumpMap=3Dnull,this.bumpScale=3D1,this.normalMap=3Dnull,t=
his.normalMapType=3D0,this.normalScale=3Dnew vt(1,1),this.displacementMap=
=3Dnull,this.displacementScale=3D1,this.displacementBias=3D0,this.alphaMap=
=3Dnull,this.wireframe=3D!1,this.wireframeLinewidth=3D1,this.wireframeLinec=
ap=3D"round",this.wireframeLinejoin=3D"round",this.skinning=3D!1,this.morph=
Targets=3D!1,this.morphNormals=3D!1,this.setValues(t)}copy(t){return super.=
copy(t),this.color.copy(t.color),this.map=3Dt.map,this.gradientMap=3Dt.grad=
ientMap,this.lightMap=3Dt.lightMap,this.lightMapIntensity=3Dt.lightMapInten=
sity,this.aoMap=3Dt.aoMap,this.aoMapIntensity=3Dt.aoMapIntensity,this.emiss=
ive.copy(t.emissive),this.emissiveMap=3Dt.emissiveMap,this.emissiveIntensit=
y=3Dt.emissiveIntensity,this.bumpMap=3Dt.bumpMap,this.bumpScale=3Dt.bumpSca=
le,this.normalMap=3Dt.normalMap,this.normalMapType=3Dt.normalMapType,this.n=
ormalScale.copy(t.normalScale),this.displacementMap=3Dt.displacementMap,thi=
s.displacementScale=3Dt.displacementScale,this.displacementBias=3Dt.displac=
ementBias,this.alphaMap=3Dt.alphaMap,this.wireframe=3Dt.wireframe,this.wire=
frameLinewidth=3Dt.wireframeLinewidth,this.wireframeLinecap=3Dt.wireframeLi=
necap,this.wireframeLinejoin=3Dt.wireframeLinejoin,this.skinning=3Dt.skinni=
ng,this.morphTargets=3Dt.morphTargets,this.morphNormals=3Dt.morphNormals,th=
is}}Fo.prototype.isMeshToonMaterial=3D!0;class Oo extends Xe{constructor(t)=
{super(),this.type=3D"MeshNormalMaterial",this.bumpMap=3Dnull,this.bumpScal=
e=3D1,this.normalMap=3Dnull,this.normalMapType=3D0,this.normalScale=3Dnew v=
t(1,1),this.displacementMap=3Dnull,this.displacementScale=3D1,this.displace=
mentBias=3D0,this.wireframe=3D!1,this.wireframeLinewidth=3D1,this.fog=3D!1,=
this.skinning=3D!1,this.morphTargets=3D!1,this.morphNormals=3D!1,this.flatS=
hading=3D!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=3Dt=
.bumpMap,this.bumpScale=3Dt.bumpScale,this.normalMap=3Dt.normalMap,this.nor=
malMapType=3Dt.normalMapType,this.normalScale.copy(t.normalScale),this.disp=
lacementMap=3Dt.displacementMap,this.displacementScale=3Dt.displacementScal=
e,this.displacementBias=3Dt.displacementBias,this.wireframe=3Dt.wireframe,t=
his.wireframeLinewidth=3Dt.wireframeLinewidth,this.skinning=3Dt.skinning,th=
is.morphTargets=3Dt.morphTargets,this.morphNormals=3Dt.morphNormals,this.fl=
atShading=3Dt.flatShading,this}}Oo.prototype.isMeshNormalMaterial=3D!0;clas=
s Ho extends Xe{constructor(t){super(),this.type=3D"MeshLambertMaterial",th=
is.color=3Dnew tn(16777215),this.map=3Dnull,this.lightMap=3Dnull,this.light=
MapIntensity=3D1,this.aoMap=3Dnull,this.aoMapIntensity=3D1,this.emissive=3D=
new tn(0),this.emissiveIntensity=3D1,this.emissiveMap=3Dnull,this.specularM=
ap=3Dnull,this.alphaMap=3Dnull,this.envMap=3Dnull,this.combine=3D0,this.ref=
lectivity=3D1,this.refractionRatio=3D.98,this.wireframe=3D!1,this.wireframe=
Linewidth=3D1,this.wireframeLinecap=3D"round",this.wireframeLinejoin=3D"rou=
nd",this.skinning=3D!1,this.morphTargets=3D!1,this.morphNormals=3D!1,this.s=
etValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=
=3Dt.map,this.lightMap=3Dt.lightMap,this.lightMapIntensity=3Dt.lightMapInte=
nsity,this.aoMap=3Dt.aoMap,this.aoMapIntensity=3Dt.aoMapIntensity,this.emis=
sive.copy(t.emissive),this.emissiveMap=3Dt.emissiveMap,this.emissiveIntensi=
ty=3Dt.emissiveIntensity,this.specularMap=3Dt.specularMap,this.alphaMap=3Dt=
.alphaMap,this.envMap=3Dt.envMap,this.combine=3Dt.combine,this.reflectivity=
=3Dt.reflectivity,this.refractionRatio=3Dt.refractionRatio,this.wireframe=
=3Dt.wireframe,this.wireframeLinewidth=3Dt.wireframeLinewidth,this.wirefram=
eLinecap=3Dt.wireframeLinecap,this.wireframeLinejoin=3Dt.wireframeLinejoin,=
this.skinning=3Dt.skinning,this.morphTargets=3Dt.morphTargets,this.morphNor=
mals=3Dt.morphNormals,this}}Ho.prototype.isMeshLambertMaterial=3D!0;class G=
o extends Xe{constructor(t){super(),this.defines=3D{MATCAP:""},this.type=3D=
"MeshMatcapMaterial",this.color=3Dnew tn(16777215),this.matcap=3Dnull,this.=
map=3Dnull,this.bumpMap=3Dnull,this.bumpScale=3D1,this.normalMap=3Dnull,thi=
s.normalMapType=3D0,this.normalScale=3Dnew vt(1,1),this.displacementMap=3Dn=
ull,this.displacementScale=3D1,this.displacementBias=3D0,this.alphaMap=3Dnu=
ll,this.skinning=3D!1,this.morphTargets=3D!1,this.morphNormals=3D!1,this.fl=
atShading=3D!1,this.setValues(t)}copy(t){return super.copy(t),this.defines=
=3D{MATCAP:""},this.color.copy(t.color),this.matcap=3Dt.matcap,this.map=3Dt=
.map,this.bumpMap=3Dt.bumpMap,this.bumpScale=3Dt.bumpScale,this.normalMap=
=3Dt.normalMap,this.normalMapType=3Dt.normalMapType,this.normalScale.copy(t=
.normalScale),this.displacementMap=3Dt.displacementMap,this.displacementSca=
le=3Dt.displacementScale,this.displacementBias=3Dt.displacementBias,this.al=
phaMap=3Dt.alphaMap,this.skinning=3Dt.skinning,this.morphTargets=3Dt.morphT=
argets,this.morphNormals=3Dt.morphNormals,this.flatShading=3Dt.flatShading,=
this}}Go.prototype.isMeshMatcapMaterial=3D!0;class Uo extends ca{constructo=
r(t){super(),this.type=3D"LineDashedMaterial",this.scale=3D1,this.dashSize=
=3D3,this.gapSize=3D1,this.setValues(t)}copy(t){return super.copy(t),this.s=
cale=3Dt.scale,this.dashSize=3Dt.dashSize,this.gapSize=3Dt.gapSize,this}}Uo=
.prototype.isLineDashedMaterial=3D!0;var ko=3DObject.freeze({__proto__:null=
,ShadowMaterial:Do,SpriteMaterial:Rs,RawShaderMaterial:Io,ShaderMaterial:Jn=
,PointsMaterial:_a,MeshPhysicalMaterial:Bo,MeshStandardMaterial:No,MeshPhon=
gMaterial:zo,MeshToonMaterial:Fo,MeshNormalMaterial:Oo,MeshLambertMaterial:=
Ho,MeshDepthMaterial:cs,MeshDistanceMaterial:hs,MeshBasicMaterial:en,MeshMa=
tcapMaterial:Go,LineDashedMaterial:Uo,LineBasicMaterial:ca,Material:Xe});co=
nst Vo=3D{arraySlice:function(t,e,n){return Vo.isTypedArray(t)?new t.constr=
uctor(t.subarray(e,void 0!=3D=3Dn?n:t.length)):t.slice(e,n)},convertArray:f=
unction(t,e,n){return!t||!n&amp;&amp;t.constructor=3D=3D=3De?t:"number"=3D=
=3Dtypeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTyp=
edArray:function(t){return ArrayBuffer.isView(t)&amp;&amp;!(t instanceof Da=
taView)},getKeyframeOrder:function(t){const e=3Dt.length,n=3Dnew Array(e);f=
or(let t=3D0;t!=3D=3De;++t)n[t]=3Dt;return n.sort((function(e,n){return t[e=
]-t[n]})),n},sortedArray:function(t,e,n){const i=3Dt.length,r=3Dnew t.const=
ructor(i);for(let s=3D0,a=3D0;a!=3D=3Di;++s){const i=3Dn[s]*e;for(let n=3D0=
;n!=3D=3De;++n)r[a++]=3Dt[i+n]}return r},flattenJSON:function(t,e,n,i){let =
r=3D1,s=3Dt[0];for(;void 0!=3D=3Ds&amp;&amp;void 0=3D=3D=3Ds[i];)s=3Dt[r++]=
;if(void 0=3D=3D=3Ds)return;let a=3Ds[i];if(void 0!=3D=3Da)if(Array.isArray=
(a))do{a=3Ds[i],void 0!=3D=3Da&amp;&amp;(e.push(s.time),n.push.apply(n,a)),=
s=3Dt[r++]}while(void 0!=3D=3Ds);else if(void 0!=3D=3Da.toArray)do{a=3Ds[i]=
,void 0!=3D=3Da&amp;&amp;(e.push(s.time),a.toArray(n,n.length)),s=3Dt[r++]}=
while(void 0!=3D=3Ds);else do{a=3Ds[i],void 0!=3D=3Da&amp;&amp;(e.push(s.ti=
me),n.push(a)),s=3Dt[r++]}while(void 0!=3D=3Ds)},subclip:function(t,e,n,i,r=
=3D30){const s=3Dt.clone();s.name=3De;const a=3D[];for(let t=3D0;t&lt;s.tra=
cks.length;++t){const e=3Ds.tracks[t],o=3De.getValueSize(),l=3D[],c=3D[];fo=
r(let t=3D0;t&lt;e.times.length;++t){const s=3De.times[t]*r;if(!(s&lt;n||s&=
gt;=3Di)){l.push(e.times[t]);for(let n=3D0;n&lt;o;++n)c.push(e.values[t*o+n=
])}}0!=3D=3Dl.length&amp;&amp;(e.times=3DVo.convertArray(l,e.times.construc=
tor),e.values=3DVo.convertArray(c,e.values.constructor),a.push(e))}s.tracks=
=3Da;let o=3D1/0;for(let t=3D0;t&lt;s.tracks.length;++t)o&gt;s.tracks[t].ti=
mes[0]&amp;&amp;(o=3Ds.tracks[t].times[0]);for(let t=3D0;t&lt;s.tracks.leng=
th;++t)s.tracks[t].shift(-1*o);return s.resetDuration(),s},makeClipAdditive=
:function(t,e=3D0,n=3Dt,i=3D30){i&lt;=3D0&amp;&amp;(i=3D30);const r=3Dn.tra=
cks.length,s=3De/i;for(let e=3D0;e&lt;r;++e){const i=3Dn.tracks[e],r=3Di.Va=
lueTypeName;if("bool"=3D=3D=3Dr||"string"=3D=3D=3Dr)continue;const a=3Dt.tr=
acks.find((function(t){return t.name=3D=3D=3Di.name&amp;&amp;t.ValueTypeNam=
e=3D=3D=3Dr}));if(void 0=3D=3D=3Da)continue;let o=3D0;const l=3Di.getValueS=
ize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&amp;&am=
p;(o=3Dl/3);let c=3D0;const h=3Da.getValueSize();a.createInterpolant.isInte=
rpolantFactoryMethodGLTFCubicSpline&amp;&amp;(c=3Dh/3);const u=3Di.times.le=
ngth-1;let d;if(s&lt;=3Di.times[0]){const t=3Do,e=3Dl-o;d=3DVo.arraySlice(i=
.values,t,e)}else if(s&gt;=3Di.times[u]){const t=3Du*l+o,e=3Dt+l-o;d=3DVo.a=
rraySlice(i.values,t,e)}else{const t=3Di.createInterpolant(),e=3Do,n=3Dl-o;=
t.evaluate(s),d=3DVo.arraySlice(t.resultBuffer,e,n)}if("quaternion"=3D=3D=
=3Dr){(new At).fromArray(d).normalize().conjugate().toArray(d)}const p=3Da.=
times.length;for(let t=3D0;t&lt;p;++t){const e=3Dt*h+c;if("quaternion"=3D=
=3D=3Dr)At.multiplyQuaternionsFlat(a.values,e,d,0,a.values,e);else{const t=
=3Dh-2*c;for(let n=3D0;n&lt;t;++n)a.values[e+n]-=3Dd[n]}}}return t.blendMod=
e=3Dq,t}};class Wo{constructor(t,e,n,i){this.parameterPositions=3Dt,this._c=
achedIndex=3D0,this.resultBuffer=3Dvoid 0!=3D=3Di?i:new e.constructor(n),th=
is.sampleValues=3De,this.valueSize=3Dn,this.settings=3Dnull,this.DefaultSet=
tings_=3D{}}evaluate(t){const e=3Dthis.parameterPositions;let n=3Dthis._cac=
hedIndex,i=3De[n],r=3De[n-1];t:{e:{let s;n:{i:if(!(t&lt;i)){for(let s=3Dn+2=
;;){if(void 0=3D=3D=3Di){if(t&lt;r)break i;return n=3De.length,this._cached=
Index=3Dn,this.afterEnd_(n-1,t,r)}if(n=3D=3D=3Ds)break;if(r=3Di,i=3De[++n],=
t&lt;i)break e}s=3De.length;break n}if(t&gt;=3Dr)break t;{const a=3De[1];t&=
lt;a&amp;&amp;(n=3D2,r=3Da);for(let s=3Dn-2;;){if(void 0=3D=3D=3Dr)return t=
his._cachedIndex=3D0,this.beforeStart_(0,t,i);if(n=3D=3D=3Ds)break;if(i=3Dr=
,r=3De[--n-1],t&gt;=3Dr)break e}s=3Dn,n=3D0}}for(;n&lt;s;){const i=3Dn+s&gt=
;&gt;&gt;1;t&lt;e[i]?s=3Di:n=3Di+1}if(i=3De[n],r=3De[n-1],void 0=3D=3D=3Dr)=
return this._cachedIndex=3D0,this.beforeStart_(0,t,i);if(void 0=3D=3D=3Di)r=
eturn n=3De.length,this._cachedIndex=3Dn,this.afterEnd_(n-1,r,t)}this._cach=
edIndex=3Dn,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}=
getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_=
(t){const e=3Dthis.resultBuffer,n=3Dthis.sampleValues,i=3Dthis.valueSize,r=
=3Dt*i;for(let t=3D0;t!=3D=3Di;++t)e[t]=3Dn[r+t];return e}interpolate_(){th=
row new Error("call to abstract method")}intervalChanged_(){}}Wo.prototype.=
beforeStart_=3DWo.prototype.copySampleValue_,Wo.prototype.afterEnd_=3DWo.pr=
ototype.copySampleValue_;class jo extends Wo{constructor(t,e,n,i){super(t,e=
,n,i),this._weightPrev=3D-0,this._offsetPrev=3D-0,this._weightNext=3D-0,thi=
s._offsetNext=3D-0,this.DefaultSettings_=3D{endingStart:k,endingEnd:k}}inte=
rvalChanged_(t,e,n){const i=3Dthis.parameterPositions;let r=3Dt-2,s=3Dt+1,a=
=3Di[r],o=3Di[s];if(void 0=3D=3D=3Da)switch(this.getSettings_().endingStart=
){case V:r=3Dt,a=3D2*e-n;break;case W:r=3Di.length-2,a=3De+i[r]-i[r+1];brea=
k;default:r=3Dt,a=3Dn}if(void 0=3D=3D=3Do)switch(this.getSettings_().ending=
End){case V:s=3Dt,o=3D2*n-e;break;case W:s=3D1,o=3Dn+i[1]-i[0];break;defaul=
t:s=3Dt-1,o=3De}const l=3D.5*(n-e),c=3Dthis.valueSize;this._weightPrev=3Dl/=
(e-a),this._weightNext=3Dl/(o-n),this._offsetPrev=3Dr*c,this._offsetNext=3D=
s*c}interpolate_(t,e,n,i){const r=3Dthis.resultBuffer,s=3Dthis.sampleValues=
,a=3Dthis.valueSize,o=3Dt*a,l=3Do-a,c=3Dthis._offsetPrev,h=3Dthis._offsetNe=
xt,u=3Dthis._weightPrev,d=3Dthis._weightNext,p=3D(n-e)/(i-e),m=3Dp*p,f=3Dm*=
p,g=3D-u*f+2*u*m-u*p,v=3D(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,y=3D(-1-d)*f+(1.5=
+d)*m+.5*p,x=3Dd*f-d*m;for(let t=3D0;t!=3D=3Da;++t)r[t]=3Dg*s[c+t]+v*s[l+t]=
+y*s[o+t]+x*s[h+t];return r}}class qo extends Wo{constructor(t,e,n,i){super=
(t,e,n,i)}interpolate_(t,e,n,i){const r=3Dthis.resultBuffer,s=3Dthis.sample=
Values,a=3Dthis.valueSize,o=3Dt*a,l=3Do-a,c=3D(n-e)/(i-e),h=3D1-c;for(let t=
=3D0;t!=3D=3Da;++t)r[t]=3Ds[l+t]*h+s[o+t]*c;return r}}class Xo extends Wo{c=
onstructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleVa=
lue_(t-1)}}class Yo{constructor(t,e,n,i){if(void 0=3D=3D=3Dt)throw new Erro=
r("THREE.KeyframeTrack: track name is undefined");if(void 0=3D=3D=3De||0=3D=
=3D=3De.length)throw new Error("THREE.KeyframeTrack: no keyframes in track =
named "+t);this.name=3Dt,this.times=3DVo.convertArray(e,this.TimeBufferType=
),this.values=3DVo.convertArray(n,this.ValueBufferType),this.setInterpolati=
on(i||this.DefaultInterpolation)}static toJSON(t){const e=3Dt.constructor;l=
et n;if(e.toJSON!=3D=3Dthis.toJSON)n=3De.toJSON(t);else{n=3D{name:t.name,ti=
mes:Vo.convertArray(t.times,Array),values:Vo.convertArray(t.values,Array)};=
const e=3Dt.getInterpolation();e!=3D=3Dt.DefaultInterpolation&amp;&amp;(n.i=
nterpolation=3De)}return n.type=3Dt.ValueTypeName,n}InterpolantFactoryMetho=
dDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}In=
terpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.g=
etValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times=
,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){cas=
e H:e=3Dthis.InterpolantFactoryMethodDiscrete;break;case G:e=3Dthis.Interpo=
lantFactoryMethodLinear;break;case U:e=3Dthis.InterpolantFactoryMethodSmoot=
h}if(void 0=3D=3D=3De){const e=3D"unsupported interpolation for "+this.Valu=
eTypeName+" keyframe track named "+this.name;if(void 0=3D=3D=3Dthis.createI=
nterpolant){if(t=3D=3D=3Dthis.DefaultInterpolation)throw new Error(e);this.=
setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.Keyf=
rameTrack:",e),this}return this.createInterpolant=3De,this}getInterpolation=
(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscret=
e:return H;case this.InterpolantFactoryMethodLinear:return G;case this.Inte=
rpolantFactoryMethodSmooth:return U}}getValueSize(){return this.values.leng=
th/this.times.length}shift(t){if(0!=3D=3Dt){const e=3Dthis.times;for(let n=
=3D0,i=3De.length;n!=3D=3Di;++n)e[n]+=3Dt}return this}scale(t){if(1!=3D=3Dt=
){const e=3Dthis.times;for(let n=3D0,i=3De.length;n!=3D=3Di;++n)e[n]*=3Dt}r=
eturn this}trim(t,e){const n=3Dthis.times,i=3Dn.length;let r=3D0,s=3Di-1;fo=
r(;r!=3D=3Di&amp;&amp;n[r]&lt;t;)++r;for(;-1!=3D=3Ds&amp;&amp;n[s]&gt;e;)--=
s;if(++s,0!=3D=3Dr||s!=3D=3Di){r&gt;=3Ds&amp;&amp;(s=3DMath.max(s,1),r=3Ds-=
1);const t=3Dthis.getValueSize();this.times=3DVo.arraySlice(n,r,s),this.val=
ues=3DVo.arraySlice(this.values,r*t,s*t)}return this}validate(){let t=3D!0;=
const e=3Dthis.getValueSize();e-Math.floor(e)!=3D0&amp;&amp;(console.error(=
"THREE.KeyframeTrack: Invalid value size in track.",this),t=3D!1);const n=
=3Dthis.times,i=3Dthis.values,r=3Dn.length;0=3D=3D=3Dr&amp;&amp;(console.er=
ror("THREE.KeyframeTrack: Track is empty.",this),t=3D!1);let s=3Dnull;for(l=
et e=3D0;e!=3D=3Dr;e++){const i=3Dn[e];if("number"=3D=3Dtypeof i&amp;&amp;i=
sNaN(i)){console.error("THREE.KeyframeTrack: Time is not a valid number.",t=
his,e,i),t=3D!1;break}if(null!=3D=3Ds&amp;&amp;s&gt;i){console.error("THREE=
.KeyframeTrack: Out of order keys.",this,e,i,s),t=3D!1;break}s=3Di}if(void =
0!=3D=3Di&amp;&amp;Vo.isTypedArray(i))for(let e=3D0,n=3Di.length;e!=3D=3Dn;=
++e){const n=3Di[e];if(isNaN(n)){console.error("THREE.KeyframeTrack: Value =
is not a valid number.",this,e,n),t=3D!1;break}}return t}optimize(){const t=
=3DVo.arraySlice(this.times),e=3DVo.arraySlice(this.values),n=3Dthis.getVal=
ueSize(),i=3Dthis.getInterpolation()=3D=3D=3DU,r=3Dt.length-1;let s=3D1;for=
(let a=3D1;a&lt;r;++a){let r=3D!1;const o=3Dt[a];if(o!=3D=3Dt[a+1]&amp;&amp=
;(1!=3D=3Da||o!=3D=3Dt[0]))if(i)r=3D!0;else{const t=3Da*n,i=3Dt-n,s=3Dt+n;f=
or(let a=3D0;a!=3D=3Dn;++a){const n=3De[t+a];if(n!=3D=3De[i+a]||n!=3D=3De[s=
+a]){r=3D!0;break}}}if(r){if(a!=3D=3Ds){t[s]=3Dt[a];const i=3Da*n,r=3Ds*n;f=
or(let t=3D0;t!=3D=3Dn;++t)e[r+t]=3De[i+t]}++s}}if(r&gt;0){t[s]=3Dt[r];for(=
let t=3Dr*n,i=3Ds*n,a=3D0;a!=3D=3Dn;++a)e[i+a]=3De[t+a];++s}return s!=3D=3D=
t.length?(this.times=3DVo.arraySlice(t,0,s),this.values=3DVo.arraySlice(e,0=
,s*n)):(this.times=3Dt,this.values=3De),this}clone(){const t=3DVo.arraySlic=
e(this.times,0),e=3DVo.arraySlice(this.values,0),n=3Dnew(0,this.constructor=
)(this.name,t,e);return n.createInterpolant=3Dthis.createInterpolant,n}}Yo.=
prototype.TimeBufferType=3DFloat32Array,Yo.prototype.ValueBufferType=3DFloa=
t32Array,Yo.prototype.DefaultInterpolation=3DG;class Zo extends Yo{}Zo.prot=
otype.ValueTypeName=3D"bool",Zo.prototype.ValueBufferType=3DArray,Zo.protot=
ype.DefaultInterpolation=3DH,Zo.prototype.InterpolantFactoryMethodLinear=3D=
void 0,Zo.prototype.InterpolantFactoryMethodSmooth=3Dvoid 0;class Jo extend=
s Yo{}Jo.prototype.ValueTypeName=3D"color";class Qo extends Yo{}Qo.prototyp=
e.ValueTypeName=3D"number";class Ko extends Wo{constructor(t,e,n,i){super(t=
,e,n,i)}interpolate_(t,e,n,i){const r=3Dthis.resultBuffer,s=3Dthis.sampleVa=
lues,a=3Dthis.valueSize,o=3D(n-e)/(i-e);let l=3Dt*a;for(let t=3Dl+a;l!=3D=
=3Dt;l+=3D4)At.slerpFlat(r,0,s,l-a,s,l,o);return r}}class $o extends Yo{Int=
erpolantFactoryMethodLinear(t){return new Ko(this.times,this.values,this.ge=
tValueSize(),t)}}$o.prototype.ValueTypeName=3D"quaternion",$o.prototype.Def=
aultInterpolation=3DG,$o.prototype.InterpolantFactoryMethodSmooth=3Dvoid 0;=
class tl extends Yo{}tl.prototype.ValueTypeName=3D"string",tl.prototype.Val=
ueBufferType=3DArray,tl.prototype.DefaultInterpolation=3DH,tl.prototype.Int=
erpolantFactoryMethodLinear=3Dvoid 0,tl.prototype.InterpolantFactoryMethodS=
mooth=3Dvoid 0;class el extends Yo{}el.prototype.ValueTypeName=3D"vector";c=
lass nl{constructor(t,e=3D-1,n,i=3D2500){this.name=3Dt,this.tracks=3Dn,this=
.duration=3De,this.blendMode=3Di,this.uuid=3Dct(),this.duration&lt;0&amp;&a=
mp;this.resetDuration()}static parse(t){const e=3D[],n=3Dt.tracks,i=3D1/(t.=
fps||1);for(let t=3D0,r=3Dn.length;t!=3D=3Dr;++t)e.push(il(n[t]).scale(i));=
const r=3Dnew this(t.name,t.duration,e,t.blendMode);return r.uuid=3Dt.uuid,=
r}static toJSON(t){const e=3D[],n=3Dt.tracks,i=3D{name:t.name,duration:t.du=
ration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let t=3D0,i=3Dn.leng=
th;t!=3D=3Di;++t)e.push(Yo.toJSON(n[t]));return i}static CreateFromMorphTar=
getSequence(t,e,n,i){const r=3De.length,s=3D[];for(let t=3D0;t&lt;r;t++){le=
t a=3D[],o=3D[];a.push((t+r-1)%r,t,(t+1)%r),o.push(0,1,0);const l=3DVo.getK=
eyframeOrder(a);a=3DVo.sortedArray(a,1,l),o=3DVo.sortedArray(o,1,l),i||0!=
=3D=3Da[0]||(a.push(r),o.push(o[0])),s.push(new Qo(".morphTargetInfluences[=
"+e[t].name+"]",a,o).scale(1/n))}return new this(t,-1,s)}static findByName(=
t,e){let n=3Dt;if(!Array.isArray(t)){const e=3Dt;n=3De.geometry&amp;&amp;e.=
geometry.animations||e.animations}for(let t=3D0;t&lt;n.length;t++)if(n[t].n=
ame=3D=3D=3De)return n[t];return null}static CreateClipsFromMorphTargetSequ=
ences(t,e,n){const i=3D{},r=3D/^([\w-]*?)([\d]+)$/;for(let e=3D0,n=3Dt.leng=
th;e&lt;n;e++){const n=3Dt[e],s=3Dn.name.match(r);if(s&amp;&amp;s.length&gt=
;1){const t=3Ds[1];let e=3Di[t];e||(i[t]=3De=3D[]),e.push(n)}}const s=3D[];=
for(const t in i)s.push(this.CreateFromMorphTargetSequence(t,i[t],e,n));ret=
urn s}static parseAnimation(t,e){if(!t)return console.error("THREE.Animatio=
nClip: No animation in JSONLoader data."),null;const n=3Dfunction(t,e,n,i,r=
){if(0!=3D=3Dn.length){const s=3D[],a=3D[];Vo.flattenJSON(n,s,a,i),0!=3D=3D=
s.length&amp;&amp;r.push(new t(e,s,a))}},i=3D[],r=3Dt.name||"default",s=3Dt=
.fps||30,a=3Dt.blendMode;let o=3Dt.length||-1;const l=3Dt.hierarchy||[];for=
(let t=3D0;t&lt;l.length;t++){const r=3Dl[t].keys;if(r&amp;&amp;0!=3D=3Dr.l=
ength)if(r[0].morphTargets){const t=3D{};let e;for(e=3D0;e&lt;r.length;e++)=
if(r[e].morphTargets)for(let n=3D0;n&lt;r[e].morphTargets.length;n++)t[r[e]=
.morphTargets[n]]=3D-1;for(const n in t){const t=3D[],s=3D[];for(let i=3D0;=
i!=3D=3Dr[e].morphTargets.length;++i){const i=3Dr[e];t.push(i.time),s.push(=
i.morphTarget=3D=3D=3Dn?1:0)}i.push(new Qo(".morphTargetInfluence["+n+"]",t=
,s))}o=3Dt.length*(s||1)}else{const s=3D".bones["+e[t].name+"]";n(el,s+".po=
sition",r,"pos",i),n($o,s+".quaternion",r,"rot",i),n(el,s+".scale",r,"scl",=
i)}}if(0=3D=3D=3Di.length)return null;return new this(r,o,i,a)}resetDuratio=
n(){let t=3D0;for(let e=3D0,n=3Dthis.tracks.length;e!=3D=3Dn;++e){const n=
=3Dthis.tracks[e];t=3DMath.max(t,n.times[n.times.length-1])}return this.dur=
ation=3Dt,this}trim(){for(let t=3D0;t&lt;this.tracks.length;t++)this.tracks=
[t].trim(0,this.duration);return this}validate(){let t=3D!0;for(let e=3D0;e=
&lt;this.tracks.length;e++)t=3Dt&amp;&amp;this.tracks[e].validate();return =
t}optimize(){for(let t=3D0;t&lt;this.tracks.length;t++)this.tracks[t].optim=
ize();return this}clone(){const t=3D[];for(let e=3D0;e&lt;this.tracks.lengt=
h;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,=
this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(thi=
s)}}function il(t){if(void 0=3D=3D=3Dt.type)throw new Error("THREE.Keyframe=
Track: track type undefined, can not parse");const e=3Dfunction(t){switch(t=
.toLowerCase()){case"scalar":case"double":case"float":case"number":case"int=
eger":return Qo;case"vector":case"vector2":case"vector3":case"vector4":retu=
rn el;case"color":return Jo;case"quaternion":return $o;case"bool":case"bool=
ean":return Zo;case"string":return tl}throw new Error("THREE.KeyframeTrack:=
 Unsupported typeName: "+t)}(t.type);if(void 0=3D=3D=3Dt.times){const e=3D[=
],n=3D[];Vo.flattenJSON(t.keys,e,n,"value"),t.times=3De,t.values=3Dn}return=
 void 0!=3D=3De.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolat=
ion)}const rl=3D{enabled:!1,files:{},add:function(t,e){!1!=3D=3Dthis.enable=
d&amp;&amp;(this.files[t]=3De)},get:function(t){if(!1!=3D=3Dthis.enabled)re=
turn this.files[t]},remove:function(t){delete this.files[t]},clear:function=
(){this.files=3D{}}};class sl{constructor(t,e,n){const i=3Dthis;let r,s=3D!=
1,a=3D0,o=3D0;const l=3D[];this.onStart=3Dvoid 0,this.onLoad=3Dt,this.onPro=
gress=3De,this.onError=3Dn,this.itemStart=3Dfunction(t){o++,!1=3D=3D=3Ds&am=
p;&amp;void 0!=3D=3Di.onStart&amp;&amp;i.onStart(t,a,o),s=3D!0},this.itemEn=
d=3Dfunction(t){a++,void 0!=3D=3Di.onProgress&amp;&amp;i.onProgress(t,a,o),=
a=3D=3D=3Do&amp;&amp;(s=3D!1,void 0!=3D=3Di.onLoad&amp;&amp;i.onLoad())},th=
is.itemError=3Dfunction(t){void 0!=3D=3Di.onError&amp;&amp;i.onError(t)},th=
is.resolveURL=3Dfunction(t){return r?r(t):t},this.setURLModifier=3Dfunction=
(t){return r=3Dt,this},this.addHandler=3Dfunction(t,e){return l.push(t,e),t=
his},this.removeHandler=3Dfunction(t){const e=3Dl.indexOf(t);return-1!=3D=
=3De&amp;&amp;l.splice(e,2),this},this.getHandler=3Dfunction(t){for(let e=
=3D0,n=3Dl.length;e&lt;n;e+=3D2){const n=3Dl[e],i=3Dl[e+1];if(n.global&amp;=
&amp;(n.lastIndex=3D0),n.test(t))return i}return null}}}const al=3Dnew sl;c=
lass ol{constructor(t){this.manager=3Dvoid 0!=3D=3Dt?t:al,this.crossOrigin=
=3D"anonymous",this.withCredentials=3D!1,this.path=3D"",this.resourcePath=
=3D"",this.requestHeader=3D{}}load(){}loadAsync(t,e){const n=3Dthis;return =
new Promise((function(i,r){n.load(t,i,e,r)}))}parse(){}setCrossOrigin(t){re=
turn this.crossOrigin=3Dt,this}setWithCredentials(t){return this.withCreden=
tials=3Dt,this}setPath(t){return this.path=3Dt,this}setResourcePath(t){retu=
rn this.resourcePath=3Dt,this}setRequestHeader(t){return this.requestHeader=
=3Dt,this}}const ll=3D{};class cl extends ol{constructor(t){super(t)}load(t=
,e,n,i){void 0=3D=3D=3Dt&amp;&amp;(t=3D""),void 0!=3D=3Dthis.path&amp;&amp;=
(t=3Dthis.path+t),t=3Dthis.manager.resolveURL(t);const r=3Dthis,s=3Drl.get(=
t);if(void 0!=3D=3Ds)return r.manager.itemStart(t),setTimeout((function(){e=
&amp;&amp;e(s),r.manager.itemEnd(t)}),0),s;if(void 0!=3D=3Dll[t])return voi=
d ll[t].push({onLoad:e,onProgress:n,onError:i});const a=3Dt.match(/^data:(.=
*?)(;base64)?,(.*)$/);let o;if(a){const n=3Da[1],s=3D!!a[2];let o=3Da[3];o=
=3DdecodeURIComponent(o),s&amp;&amp;(o=3Datob(o));try{let i;const s=3D(this=
.responseType||"").toLowerCase();switch(s){case"arraybuffer":case"blob":con=
st t=3Dnew Uint8Array(o.length);for(let e=3D0;e&lt;o.length;e++)t[e]=3Do.ch=
arCodeAt(e);i=3D"blob"=3D=3D=3Ds?new Blob([t.buffer],{type:n}):t.buffer;bre=
ak;case"document":const e=3Dnew DOMParser;i=3De.parseFromString(o,n);break;=
case"json":i=3DJSON.parse(o);break;default:i=3Do}setTimeout((function(){e&a=
mp;&amp;e(i),r.manager.itemEnd(t)}),0)}catch(e){setTimeout((function(){i&am=
p;&amp;i(e),r.manager.itemError(t),r.manager.itemEnd(t)}),0)}}else{ll[t]=3D=
[],ll[t].push({onLoad:e,onProgress:n,onError:i}),o=3Dnew XMLHttpRequest,o.o=
pen("GET",t,!0),o.addEventListener("load",(function(e){const n=3Dthis.respo=
nse,i=3Dll[t];if(delete ll[t],200=3D=3D=3Dthis.status||0=3D=3D=3Dthis.statu=
s){0=3D=3D=3Dthis.status&amp;&amp;console.warn("THREE.FileLoader: HTTP Stat=
us 0 received."),rl.add(t,n);for(let t=3D0,e=3Di.length;t&lt;e;t++){const e=
=3Di[t];e.onLoad&amp;&amp;e.onLoad(n)}r.manager.itemEnd(t)}else{for(let t=
=3D0,n=3Di.length;t&lt;n;t++){const n=3Di[t];n.onError&amp;&amp;n.onError(e=
)}r.manager.itemError(t),r.manager.itemEnd(t)}}),!1),o.addEventListener("pr=
ogress",(function(e){const n=3Dll[t];for(let t=3D0,i=3Dn.length;t&lt;i;t++)=
{const i=3Dn[t];i.onProgress&amp;&amp;i.onProgress(e)}}),!1),o.addEventList=
ener("error",(function(e){const n=3Dll[t];delete ll[t];for(let t=3D0,i=3Dn.=
length;t&lt;i;t++){const i=3Dn[t];i.onError&amp;&amp;i.onError(e)}r.manager=
.itemError(t),r.manager.itemEnd(t)}),!1),o.addEventListener("abort",(functi=
on(e){const n=3Dll[t];delete ll[t];for(let t=3D0,i=3Dn.length;t&lt;i;t++){c=
onst i=3Dn[t];i.onError&amp;&amp;i.onError(e)}r.manager.itemError(t),r.mana=
ger.itemEnd(t)}),!1),void 0!=3D=3Dthis.responseType&amp;&amp;(o.responseTyp=
e=3Dthis.responseType),void 0!=3D=3Dthis.withCredentials&amp;&amp;(o.withCr=
edentials=3Dthis.withCredentials),o.overrideMimeType&amp;&amp;o.overrideMim=
eType(void 0!=3D=3Dthis.mimeType?this.mimeType:"text/plain");for(const t in=
 this.requestHeader)o.setRequestHeader(t,this.requestHeader[t]);o.send(null=
)}return r.manager.itemStart(t),o}setResponseType(t){return this.responseTy=
pe=3Dt,this}setMimeType(t){return this.mimeType=3Dt,this}}class hl extends =
ol{constructor(t){super(t)}load(t,e,n,i){void 0!=3D=3Dthis.path&amp;&amp;(t=
=3Dthis.path+t),t=3Dthis.manager.resolveURL(t);const r=3Dthis,s=3Drl.get(t)=
;if(void 0!=3D=3Ds)return r.manager.itemStart(t),setTimeout((function(){e&a=
mp;&amp;e(s),r.manager.itemEnd(t)}),0),s;const a=3Ddocument.createElementNS=
("http://www.w3.org/1999/xhtml","img");function o(){a.removeEventListener("=
load",o,!1),a.removeEventListener("error",l,!1),rl.add(t,this),e&amp;&amp;e=
(this),r.manager.itemEnd(t)}function l(e){a.removeEventListener("load",o,!1=
),a.removeEventListener("error",l,!1),i&amp;&amp;i(e),r.manager.itemError(t=
),r.manager.itemEnd(t)}return a.addEventListener("load",o,!1),a.addEventLis=
tener("error",l,!1),"data:"!=3D=3Dt.substr(0,5)&amp;&amp;void 0!=3D=3Dthis.=
crossOrigin&amp;&amp;(a.crossOrigin=3Dthis.crossOrigin),r.manager.itemStart=
(t),a.src=3Dt,a}}class ul extends ol{constructor(t){super(t)}load(t,e,n,i){=
const r=3Dnew ei,s=3Dnew hl(this.manager);s.setCrossOrigin(this.crossOrigin=
),s.setPath(this.path);let a=3D0;function o(n){s.load(t[n],(function(t){r.i=
mages[n]=3Dt,a++,6=3D=3D=3Da&amp;&amp;(r.needsUpdate=3D!0,e&amp;&amp;e(r))}=
),void 0,i)}for(let e=3D0;e&lt;t.length;++e)o(e);return r}}class dl extends=
 ol{constructor(t){super(t)}load(t,e,n,i){const r=3Dthis,s=3Dnew ii,a=3Dnew=
 cl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeade=
r(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCrede=
ntials),a.load(t,(function(t){const n=3Dr.parse(t);n&amp;&amp;(void 0!=3D=
=3Dn.image?s.image=3Dn.image:void 0!=3D=3Dn.data&amp;&amp;(s.image.width=3D=
n.width,s.image.height=3Dn.height,s.image.data=3Dn.data),s.wrapS=3Dvoid 0!=
=3D=3Dn.wrapS?n.wrapS:u,s.wrapT=3Dvoid 0!=3D=3Dn.wrapT?n.wrapT:u,s.magFilte=
r=3Dvoid 0!=3D=3Dn.magFilter?n.magFilter:g,s.minFilter=3Dvoid 0!=3D=3Dn.min=
Filter?n.minFilter:g,s.anisotropy=3Dvoid 0!=3D=3Dn.anisotropy?n.anisotropy:=
1,void 0!=3D=3Dn.encoding&amp;&amp;(s.encoding=3Dn.encoding),void 0!=3D=3Dn=
.flipY&amp;&amp;(s.flipY=3Dn.flipY),void 0!=3D=3Dn.format&amp;&amp;(s.forma=
t=3Dn.format),void 0!=3D=3Dn.type&amp;&amp;(s.type=3Dn.type),void 0!=3D=3Dn=
.mipmaps&amp;&amp;(s.mipmaps=3Dn.mipmaps,s.minFilter=3Dy),1=3D=3D=3Dn.mipma=
pCount&amp;&amp;(s.minFilter=3Dg),void 0!=3D=3Dn.generateMipmaps&amp;&amp;(=
s.generateMipmaps=3Dn.generateMipmaps),s.needsUpdate=3D!0,e&amp;&amp;e(s,n)=
)}),n,i),s}}class pl extends ol{constructor(t){super(t)}load(t,e,n,i){const=
 r=3Dnew bt,s=3Dnew hl(this.manager);return s.setCrossOrigin(this.crossOrig=
in),s.setPath(this.path),s.load(t,(function(n){r.image=3Dn;const i=3Dt.sear=
ch(/\.jpe?g($|\?)/i)&gt;0||0=3D=3D=3Dt.search(/^data\:image\/jpeg/);r.forma=
t=3Di?T:E,r.needsUpdate=3D!0,void 0!=3D=3De&amp;&amp;e(r)}),n,i),r}}class m=
l{constructor(){this.type=3D"Curve",this.arcLengthDivisions=3D200}getPoint(=
){return console.warn("THREE.Curve: .getPoint() not implemented."),null}get=
PointAt(t,e){const n=3Dthis.getUtoTmapping(t);return this.getPoint(n,e)}get=
Points(t=3D5){const e=3D[];for(let n=3D0;n&lt;=3Dt;n++)e.push(this.getPoint=
(n/t));return e}getSpacedPoints(t=3D5){const e=3D[];for(let n=3D0;n&lt;=3Dt=
;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=3Dthis.getLe=
ngths();return t[t.length-1]}getLengths(t=3Dthis.arcLengthDivisions){if(thi=
s.cacheArcLengths&amp;&amp;this.cacheArcLengths.length=3D=3D=3Dt+1&amp;&amp=
;!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=3D!1;const =
e=3D[];let n,i=3Dthis.getPoint(0),r=3D0;e.push(0);for(let s=3D1;s&lt;=3Dt;s=
++)n=3Dthis.getPoint(s/t),r+=3Dn.distanceTo(i),e.push(r),i=3Dn;return this.=
cacheArcLengths=3De,e}updateArcLengths(){this.needsUpdate=3D!0,this.getLeng=
ths()}getUtoTmapping(t,e){const n=3Dthis.getLengths();let i=3D0;const r=3Dn=
.length;let s;s=3De||t*n[r-1];let a,o=3D0,l=3Dr-1;for(;o&lt;=3Dl;)if(i=3DMa=
th.floor(o+(l-o)/2),a=3Dn[i]-s,a&lt;0)o=3Di+1;else{if(!(a&gt;0)){l=3Di;brea=
k}l=3Di-1}if(i=3Dl,n[i]=3D=3D=3Ds)return i/(r-1);const c=3Dn[i];return(i+(s=
-c)/(n[i+1]-c))/(r-1)}getTangent(t,e){const n=3D1e-4;let i=3Dt-n,r=3Dt+n;i&=
lt;0&amp;&amp;(i=3D0),r&gt;1&amp;&amp;(r=3D1);const s=3Dthis.getPoint(i),a=
=3Dthis.getPoint(r),o=3De||(s.isVector2?new vt:new Lt);return o.copy(a).sub=
(s).normalize(),o}getTangentAt(t,e){const n=3Dthis.getUtoTmapping(t);return=
 this.getTangent(n,e)}computeFrenetFrames(t,e){const n=3Dnew Lt,i=3D[],r=3D=
[],s=3D[],a=3Dnew Lt,o=3Dnew se;for(let e=3D0;e&lt;=3Dt;e++){const n=3De/t;=
i[e]=3Dthis.getTangentAt(n,new Lt),i[e].normalize()}r[0]=3Dnew Lt,s[0]=3Dne=
w Lt;let l=3DNumber.MAX_VALUE;const c=3DMath.abs(i[0].x),h=3DMath.abs(i[0].=
y),u=3DMath.abs(i[0].z);c&lt;=3Dl&amp;&amp;(l=3Dc,n.set(1,0,0)),h&lt;=3Dl&a=
mp;&amp;(l=3Dh,n.set(0,1,0)),u&lt;=3Dl&amp;&amp;n.set(0,0,1),a.crossVectors=
(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0])=
;for(let e=3D1;e&lt;=3Dt;e++){if(r[e]=3Dr[e-1].clone(),s[e]=3Ds[e-1].clone(=
),a.crossVectors(i[e-1],i[e]),a.length()&gt;Number.EPSILON){a.normalize();c=
onst t=3DMath.acos(ht(i[e-1].dot(i[e]),-1,1));r[e].applyMatrix4(o.makeRotat=
ionAxis(a,t))}s[e].crossVectors(i[e],r[e])}if(!0=3D=3D=3De){let e=3DMath.ac=
os(ht(r[0].dot(r[t]),-1,1));e/=3Dt,i[0].dot(a.crossVectors(r[0],r[t]))&gt;0=
&amp;&amp;(e=3D-e);for(let n=3D1;n&lt;=3Dt;n++)r[n].applyMatrix4(o.makeRota=
tionAxis(i[n],e*n)),s[n].crossVectors(i[n],r[n])}return{tangents:i,normals:=
r,binormals:s}}clone(){return(new this.constructor).copy(this)}copy(t){retu=
rn this.arcLengthDivisions=3Dt.arcLengthDivisions,this}toJSON(){const t=3D{=
metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcL=
engthDivisions=3Dthis.arcLengthDivisions,t.type=3Dthis.type,t}fromJSON(t){r=
eturn this.arcLengthDivisions=3Dt.arcLengthDivisions,this}}class fl extends=
 ml{constructor(t=3D0,e=3D0,n=3D1,i=3D1,r=3D0,s=3D2*Math.PI,a=3D!1,o=3D0){s=
uper(),this.type=3D"EllipseCurve",this.aX=3Dt,this.aY=3De,this.xRadius=3Dn,=
this.yRadius=3Di,this.aStartAngle=3Dr,this.aEndAngle=3Ds,this.aClockwise=3D=
a,this.aRotation=3Do}getPoint(t,e){const n=3De||new vt,i=3D2*Math.PI;let r=
=3Dthis.aEndAngle-this.aStartAngle;const s=3DMath.abs(r)&lt;Number.EPSILON;=
for(;r&lt;0;)r+=3Di;for(;r&gt;i;)r-=3Di;r&lt;Number.EPSILON&amp;&amp;(r=3Ds=
?0:i),!0!=3D=3Dthis.aClockwise||s||(r=3D=3D=3Di?r=3D-i:r-=3Di);const a=3Dth=
is.aStartAngle+t*r;let o=3Dthis.aX+this.xRadius*Math.cos(a),l=3Dthis.aY+thi=
s.yRadius*Math.sin(a);if(0!=3D=3Dthis.aRotation){const t=3DMath.cos(this.aR=
otation),e=3DMath.sin(this.aRotation),n=3Do-this.aX,i=3Dl-this.aY;o=3Dn*t-i=
*e+this.aX,l=3Dn*e+i*t+this.aY}return n.set(o,l)}copy(t){return super.copy(=
t),this.aX=3Dt.aX,this.aY=3Dt.aY,this.xRadius=3Dt.xRadius,this.yRadius=3Dt.=
yRadius,this.aStartAngle=3Dt.aStartAngle,this.aEndAngle=3Dt.aEndAngle,this.=
aClockwise=3Dt.aClockwise,this.aRotation=3Dt.aRotation,this}toJSON(){const =
t=3Dsuper.toJSON();return t.aX=3Dthis.aX,t.aY=3Dthis.aY,t.xRadius=3Dthis.xR=
adius,t.yRadius=3Dthis.yRadius,t.aStartAngle=3Dthis.aStartAngle,t.aEndAngle=
=3Dthis.aEndAngle,t.aClockwise=3Dthis.aClockwise,t.aRotation=3Dthis.aRotati=
on,t}fromJSON(t){return super.fromJSON(t),this.aX=3Dt.aX,this.aY=3Dt.aY,thi=
s.xRadius=3Dt.xRadius,this.yRadius=3Dt.yRadius,this.aStartAngle=3Dt.aStartA=
ngle,this.aEndAngle=3Dt.aEndAngle,this.aClockwise=3Dt.aClockwise,this.aRota=
tion=3Dt.aRotation,this}}fl.prototype.isEllipseCurve=3D!0;class gl extends =
fl{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.type=3D"ArcCurve"}}fu=
nction vl(){let t=3D0,e=3D0,n=3D0,i=3D0;function r(r,s,a,o){t=3Dr,e=3Da,n=
=3D-3*r+3*s-2*a-o,i=3D2*r-2*s+a+o}return{initCatmullRom:function(t,e,n,i,s)=
{r(e,n,s*(n-t),s*(i-e))},initNonuniformCatmullRom:function(t,e,n,i,s,a,o){l=
et l=3D(e-t)/s-(n-t)/(s+a)+(n-e)/a,c=3D(n-e)/a-(i-e)/(a+o)+(i-n)/o;l*=3Da,c=
*=3Da,r(e,n,l,c)},calc:function(r){const s=3Dr*r;return t+e*r+n*s+i*(s*r)}}=
}gl.prototype.isArcCurve=3D!0;const yl=3Dnew Lt,xl=3Dnew vl,_l=3Dnew vl,wl=
=3Dnew vl;class bl extends ml{constructor(t=3D[],e=3D!1,n=3D"centripetal",i=
=3D.5){super(),this.type=3D"CatmullRomCurve3",this.points=3Dt,this.closed=
=3De,this.curveType=3Dn,this.tension=3Di}getPoint(t,e=3Dnew Lt){const n=3De=
,i=3Dthis.points,r=3Di.length,s=3D(r-(this.closed?0:1))*t;let a,o,l=3DMath.=
floor(s),c=3Ds-l;this.closed?l+=3Dl&gt;0?0:(Math.floor(Math.abs(l)/r)+1)*r:=
0=3D=3D=3Dc&amp;&amp;l=3D=3D=3Dr-1&amp;&amp;(l=3Dr-2,c=3D1),this.closed||l&=
gt;0?a=3Di[(l-1)%r]:(yl.subVectors(i[0],i[1]).add(i[0]),a=3Dyl);const h=3Di=
[l%r],u=3Di[(l+1)%r];if(this.closed||l+2&lt;r?o=3Di[(l+2)%r]:(yl.subVectors=
(i[r-1],i[r-2]).add(i[r-1]),o=3Dyl),"centripetal"=3D=3D=3Dthis.curveType||"=
chordal"=3D=3D=3Dthis.curveType){const t=3D"chordal"=3D=3D=3Dthis.curveType=
?.5:.25;let e=3DMath.pow(a.distanceToSquared(h),t),n=3DMath.pow(h.distanceT=
oSquared(u),t),i=3DMath.pow(u.distanceToSquared(o),t);n&lt;1e-4&amp;&amp;(n=
=3D1),e&lt;1e-4&amp;&amp;(e=3Dn),i&lt;1e-4&amp;&amp;(i=3Dn),xl.initNonunifo=
rmCatmullRom(a.x,h.x,u.x,o.x,e,n,i),_l.initNonuniformCatmullRom(a.y,h.y,u.y=
,o.y,e,n,i),wl.initNonuniformCatmullRom(a.z,h.z,u.z,o.z,e,n,i)}else"catmull=
rom"=3D=3D=3Dthis.curveType&amp;&amp;(xl.initCatmullRom(a.x,h.x,u.x,o.x,thi=
s.tension),_l.initCatmullRom(a.y,h.y,u.y,o.y,this.tension),wl.initCatmullRo=
m(a.z,h.z,u.z,o.z,this.tension));return n.set(xl.calc(c),_l.calc(c),wl.calc=
(c)),n}copy(t){super.copy(t),this.points=3D[];for(let e=3D0,n=3Dt.points.le=
ngth;e&lt;n;e++){const n=3Dt.points[e];this.points.push(n.clone())}return t=
his.closed=3Dt.closed,this.curveType=3Dt.curveType,this.tension=3Dt.tension=
,this}toJSON(){const t=3Dsuper.toJSON();t.points=3D[];for(let e=3D0,n=3Dthi=
s.points.length;e&lt;n;e++){const n=3Dthis.points[e];t.points.push(n.toArra=
y())}return t.closed=3Dthis.closed,t.curveType=3Dthis.curveType,t.tension=
=3Dthis.tension,t}fromJSON(t){super.fromJSON(t),this.points=3D[];for(let e=
=3D0,n=3Dt.points.length;e&lt;n;e++){const n=3Dt.points[e];this.points.push=
((new Lt).fromArray(n))}return this.closed=3Dt.closed,this.curveType=3Dt.cu=
rveType,this.tension=3Dt.tension,this}}function Ml(t,e,n,i,r){const s=3D.5*=
(i-e),a=3D.5*(r-n),o=3Dt*t;return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t=
+n}function Sl(t,e,n,i){return function(t,e){const n=3D1-t;return n*n*e}(t,=
e)+function(t,e){return 2*(1-t)*t*e}(t,n)+function(t,e){return t*t*e}(t,i)}=
function Tl(t,e,n,i,r){return function(t,e){const n=3D1-t;return n*n*n*e}(t=
,e)+function(t,e){const n=3D1-t;return 3*n*n*t*e}(t,n)+function(t,e){return=
 3*(1-t)*t*t*e}(t,i)+function(t,e){return t*t*t*e}(t,r)}bl.prototype.isCatm=
ullRomCurve3=3D!0;class El extends ml{constructor(t=3Dnew vt,e=3Dnew vt,n=
=3Dnew vt,i=3Dnew vt){super(),this.type=3D"CubicBezierCurve",this.v0=3Dt,th=
is.v1=3De,this.v2=3Dn,this.v3=3Di}getPoint(t,e=3Dnew vt){const n=3De,i=3Dth=
is.v0,r=3Dthis.v1,s=3Dthis.v2,a=3Dthis.v3;return n.set(Tl(t,i.x,r.x,s.x,a.x=
),Tl(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),=
this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){cons=
t t=3Dsuper.toJSON();return t.v0=3Dthis.v0.toArray(),t.v1=3Dthis.v1.toArray=
(),t.v2=3Dthis.v2.toArray(),t.v3=3Dthis.v3.toArray(),t}fromJSON(t){return s=
uper.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fr=
omArray(t.v2),this.v3.fromArray(t.v3),this}}El.prototype.isCubicBezierCurve=
=3D!0;class Al extends ml{constructor(t=3Dnew Lt,e=3Dnew Lt,n=3Dnew Lt,i=3D=
new Lt){super(),this.type=3D"CubicBezierCurve3",this.v0=3Dt,this.v1=3De,thi=
s.v2=3Dn,this.v3=3Di}getPoint(t,e=3Dnew Lt){const n=3De,i=3Dthis.v0,r=3Dthi=
s.v1,s=3Dthis.v2,a=3Dthis.v3;return n.set(Tl(t,i.x,r.x,s.x,a.x),Tl(t,i.y,r.=
y,s.y,a.y),Tl(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.co=
py(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJS=
ON(){const t=3Dsuper.toJSON();return t.v0=3Dthis.v0.toArray(),t.v1=3Dthis.v=
1.toArray(),t.v2=3Dthis.v2.toArray(),t.v3=3Dthis.v3.toArray(),t}fromJSON(t)=
{return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),t=
his.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Al.prototype.isCubicBe=
zierCurve3=3D!0;class Ll extends ml{constructor(t=3Dnew vt,e=3Dnew vt){supe=
r(),this.type=3D"LineCurve",this.v1=3Dt,this.v2=3De}getPoint(t,e=3Dnew vt){=
const n=3De;return 1=3D=3D=3Dt?n.copy(this.v2):(n.copy(this.v2).sub(this.v1=
),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(=
t,e)}getTangent(t,e){const n=3De||new vt;return n.copy(this.v2).sub(this.v1=
).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.cop=
y(t.v2),this}toJSON(){const t=3Dsuper.toJSON();return t.v1=3Dthis.v1.toArra=
y(),t.v2=3Dthis.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1=
.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Ll.prototype.isLineCurve=3D!=
0;class Rl extends ml{constructor(t=3Dnew Lt,e=3Dnew Lt){super(),this.type=
=3D"LineCurve3",this.isLineCurve3=3D!0,this.v1=3Dt,this.v2=3De}getPoint(t,e=
=3Dnew Lt){const n=3De;return 1=3D=3D=3Dt?n.copy(this.v2):(n.copy(this.v2).=
sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return thi=
s.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.cop=
y(t.v2),this}toJSON(){const t=3Dsuper.toJSON();return t.v1=3Dthis.v1.toArra=
y(),t.v2=3Dthis.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1=
.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends ml{construc=
tor(t=3Dnew vt,e=3Dnew vt,n=3Dnew vt){super(),this.type=3D"QuadraticBezierC=
urve",this.v0=3Dt,this.v1=3De,this.v2=3Dn}getPoint(t,e=3Dnew vt){const n=3D=
e,i=3Dthis.v0,r=3Dthis.v1,s=3Dthis.v2;return n.set(Sl(t,i.x,r.x,s.x),Sl(t,i=
.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy=
(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=3Dsuper.toJSON();return t.v=
0=3Dthis.v0.toArray(),t.v1=3Dthis.v1.toArray(),t.v2=3Dthis.v2.toArray(),t}f=
romJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArr=
ay(t.v1),this.v2.fromArray(t.v2),this}}Cl.prototype.isQuadraticBezierCurve=
=3D!0;class Pl extends ml{constructor(t=3Dnew Lt,e=3Dnew Lt,n=3Dnew Lt){sup=
er(),this.type=3D"QuadraticBezierCurve3",this.v0=3Dt,this.v1=3De,this.v2=3D=
n}getPoint(t,e=3Dnew Lt){const n=3De,i=3Dthis.v0,r=3Dthis.v1,s=3Dthis.v2;re=
turn n.set(Sl(t,i.x,r.x,s.x),Sl(t,i.y,r.y,s.y),Sl(t,i.z,r.z,s.z)),n}copy(t)=
{return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.=
v2),this}toJSON(){const t=3Dsuper.toJSON();return t.v0=3Dthis.v0.toArray(),=
t.v1=3Dthis.v1.toArray(),t.v2=3Dthis.v2.toArray(),t}fromJSON(t){return supe=
r.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromA=
rray(t.v2),this}}Pl.prototype.isQuadraticBezierCurve3=3D!0;class Dl extends=
 ml{constructor(t=3D[]){super(),this.type=3D"SplineCurve",this.points=3Dt}g=
etPoint(t,e=3Dnew vt){const n=3De,i=3Dthis.points,r=3D(i.length-1)*t,s=3DMa=
th.floor(r),a=3Dr-s,o=3Di[0=3D=3D=3Ds?s:s-1],l=3Di[s],c=3Di[s&gt;i.length-2=
?i.length-1:s+1],h=3Di[s&gt;i.length-3?i.length-1:s+2];return n.set(Ml(a,o.=
x,l.x,c.x,h.x),Ml(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=
=3D[];for(let e=3D0,n=3Dt.points.length;e&lt;n;e++){const n=3Dt.points[e];t=
his.points.push(n.clone())}return this}toJSON(){const t=3Dsuper.toJSON();t.=
points=3D[];for(let e=3D0,n=3Dthis.points.length;e&lt;n;e++){const n=3Dthis=
.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t=
),this.points=3D[];for(let e=3D0,n=3Dt.points.length;e&lt;n;e++){const n=3D=
t.points[e];this.points.push((new vt).fromArray(n))}return this}}Dl.prototy=
pe.isSplineCurve=3D!0;var Il=3DObject.freeze({__proto__:null,ArcCurve:gl,Ca=
tmullRomCurve3:bl,CubicBezierCurve:El,CubicBezierCurve3:Al,EllipseCurve:fl,=
LineCurve:Ll,LineCurve3:Rl,QuadraticBezierCurve:Cl,QuadraticBezierCurve3:Pl=
,SplineCurve:Dl});class Nl extends ml{constructor(){super(),this.type=3D"Cu=
rvePath",this.curves=3D[],this.autoClose=3D!1}add(t){this.curves.push(t)}cl=
osePath(){const t=3Dthis.curves[0].getPoint(0),e=3Dthis.curves[this.curves.=
length-1].getPoint(1);t.equals(e)||this.curves.push(new Ll(e,t))}getPoint(t=
){const e=3Dt*this.getLength(),n=3Dthis.getCurveLengths();let i=3D0;for(;i&=
lt;n.length;){if(n[i]&gt;=3De){const t=3Dn[i]-e,r=3Dthis.curves[i],s=3Dr.ge=
tLength(),a=3D0=3D=3D=3Ds?0:1-t/s;return r.getPointAt(a)}i++}return null}ge=
tLength(){const t=3Dthis.getCurveLengths();return t[t.length-1]}updateArcLe=
ngths(){this.needsUpdate=3D!0,this.cacheLengths=3Dnull,this.getCurveLengths=
()}getCurveLengths(){if(this.cacheLengths&amp;&amp;this.cacheLengths.length=
=3D=3D=3Dthis.curves.length)return this.cacheLengths;const t=3D[];let e=3D0=
;for(let n=3D0,i=3Dthis.curves.length;n&lt;i;n++)e+=3Dthis.curves[n].getLen=
gth(),t.push(e);return this.cacheLengths=3Dt,t}getSpacedPoints(t=3D40){cons=
t e=3D[];for(let n=3D0;n&lt;=3Dt;n++)e.push(this.getPoint(n/t));return this=
.autoClose&amp;&amp;e.push(e[0]),e}getPoints(t=3D12){const e=3D[];let n;for=
(let i=3D0,r=3Dthis.curves;i&lt;r.length;i++){const s=3Dr[i],a=3Ds&amp;&amp=
;s.isEllipseCurve?2*t:s&amp;&amp;(s.isLineCurve||s.isLineCurve3)?1:s&amp;&a=
mp;s.isSplineCurve?t*s.points.length:t,o=3Ds.getPoints(a);for(let t=3D0;t&l=
t;o.length;t++){const i=3Do[t];n&amp;&amp;n.equals(i)||(e.push(i),n=3Di)}}r=
eturn this.autoClose&amp;&amp;e.length&gt;1&amp;&amp;!e[e.length-1].equals(=
e[0])&amp;&amp;e.push(e[0]),e}copy(t){super.copy(t),this.curves=3D[];for(le=
t e=3D0,n=3Dt.curves.length;e&lt;n;e++){const n=3Dt.curves[e];this.curves.p=
ush(n.clone())}return this.autoClose=3Dt.autoClose,this}toJSON(){const t=3D=
super.toJSON();t.autoClose=3Dthis.autoClose,t.curves=3D[];for(let e=3D0,n=
=3Dthis.curves.length;e&lt;n;e++){const n=3Dthis.curves[e];t.curves.push(n.=
toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=3Dt.autoClo=
se,this.curves=3D[];for(let e=3D0,n=3Dt.curves.length;e&lt;n;e++){const n=
=3Dt.curves[e];this.curves.push((new Il[n.type]).fromJSON(n))}return this}}=
class Bl extends Nl{constructor(t){super(),this.type=3D"Path",this.currentP=
oint=3Dnew vt,t&amp;&amp;this.setFromPoints(t)}setFromPoints(t){this.moveTo=
(t[0].x,t[0].y);for(let e=3D1,n=3Dt.length;e&lt;n;e++)this.lineTo(t[e].x,t[=
e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo=
(t,e){const n=3Dnew Ll(this.currentPoint.clone(),new vt(t,e));return this.c=
urves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){con=
st r=3Dnew Cl(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return thi=
s.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s)=
{const a=3Dnew El(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(=
r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru=
(t){const e=3D[this.currentPoint.clone()].concat(t),n=3Dnew Dl(e);return th=
is.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,=
s){const a=3Dthis.currentPoint.x,o=3Dthis.currentPoint.y;return this.absarc=
(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i=
,r,s),this}ellipse(t,e,n,i,r,s,a,o){const l=3Dthis.currentPoint.x,c=3Dthis.=
currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,s,a,o),this}absellipse(=
t,e,n,i,r,s,a,o){const l=3Dnew fl(t,e,n,i,r,s,a,o);if(this.curves.length&gt=
;0){const t=3Dl.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.=
y)}this.curves.push(l);const c=3Dl.getPoint(1);return this.currentPoint.cop=
y(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoin=
t),this}toJSON(){const t=3Dsuper.toJSON();return t.currentPoint=3Dthis.curr=
entPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint=
.fromArray(t.currentPoint),this}}class zl extends Bl{constructor(t){super(t=
),this.uuid=3Dct(),this.type=3D"Shape",this.holes=3D[]}getPointsHoles(t){co=
nst e=3D[];for(let n=3D0,i=3Dthis.holes.length;n&lt;i;n++)e[n]=3Dthis.holes=
[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),h=
oles:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=3D[];for(let =
e=3D0,n=3Dt.holes.length;e&lt;n;e++){const n=3Dt.holes[e];this.holes.push(n=
.clone())}return this}toJSON(){const t=3Dsuper.toJSON();t.uuid=3Dthis.uuid,=
t.holes=3D[];for(let e=3D0,n=3Dthis.holes.length;e&lt;n;e++){const n=3Dthis=
.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),t=
his.uuid=3Dt.uuid,this.holes=3D[];for(let e=3D0,n=3Dt.holes.length;e&lt;n;e=
++){const n=3Dt.holes[e];this.holes.push((new Bl).fromJSON(n))}return this}=
}class Fl extends Ce{constructor(t,e=3D1){super(),this.type=3D"Light",this.=
color=3Dnew tn(t),this.intensity=3De}dispose(){}copy(t){return super.copy(t=
),this.color.copy(t.color),this.intensity=3Dt.intensity,this}toJSON(t){cons=
t e=3Dsuper.toJSON(t);return e.object.color=3Dthis.color.getHex(),e.object.=
intensity=3Dthis.intensity,void 0!=3D=3Dthis.groundColor&amp;&amp;(e.object=
.groundColor=3Dthis.groundColor.getHex()),void 0!=3D=3Dthis.distance&amp;&a=
mp;(e.object.distance=3Dthis.distance),void 0!=3D=3Dthis.angle&amp;&amp;(e.=
object.angle=3Dthis.angle),void 0!=3D=3Dthis.decay&amp;&amp;(e.object.decay=
=3Dthis.decay),void 0!=3D=3Dthis.penumbra&amp;&amp;(e.object.penumbra=3Dthi=
s.penumbra),void 0!=3D=3Dthis.shadow&amp;&amp;(e.object.shadow=3Dthis.shado=
w.toJSON()),e}}Fl.prototype.isLight=3D!0;class Ol extends Fl{constructor(t,=
e,n){super(t,n),this.type=3D"HemisphereLight",this.position.copy(Ce.Default=
Up),this.updateMatrix(),this.groundColor=3Dnew tn(e)}copy(t){return Fl.prot=
otype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}Ol.proto=
type.isHemisphereLight=3D!0;const Hl=3Dnew se,Gl=3Dnew Lt,Ul=3Dnew Lt;class=
 kl{constructor(t){this.camera=3Dt,this.bias=3D0,this.normalBias=3D0,this.r=
adius=3D1,this.mapSize=3Dnew vt(512,512),this.map=3Dnull,this.mapPass=3Dnul=
l,this.matrix=3Dnew se,this.autoUpdate=3D!0,this.needsUpdate=3D!1,this._fru=
stum=3Dnew ai,this._frameExtents=3Dnew vt(1,1),this._viewportCount=3D1,this=
._viewports=3D[new St(0,0,1,1)]}getViewportCount(){return this._viewportCou=
nt}getFrustum(){return this._frustum}updateMatrices(t){const e=3Dthis.camer=
a,n=3Dthis.matrix;Gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(G=
l),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatr=
ixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this=
._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0=
,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}get=
Viewport(t){return this._viewports[t]}getFrameExtents(){return this._frameE=
xtents}dispose(){this.map&amp;&amp;this.map.dispose(),this.mapPass&amp;&amp=
;this.mapPass.dispose()}copy(t){return this.camera=3Dt.camera.clone(),this.=
bias=3Dt.bias,this.radius=3Dt.radius,this.mapSize.copy(t.mapSize),this}clon=
e(){return(new this.constructor).copy(this)}toJSON(){const t=3D{};return 0!=
=3D=3Dthis.bias&amp;&amp;(t.bias=3Dthis.bias),0!=3D=3Dthis.normalBias&amp;&=
amp;(t.normalBias=3Dthis.normalBias),1!=3D=3Dthis.radius&amp;&amp;(t.radius=
=3Dthis.radius),512=3D=3D=3Dthis.mapSize.x&amp;&amp;512=3D=3D=3Dthis.mapSiz=
e.y||(t.mapSize=3Dthis.mapSize.toArray()),t.camera=3Dthis.camera.toJSON(!1)=
.object,delete t.camera.matrix,t}}class Vl extends kl{constructor(){super(n=
ew Kn(50,1,.5,500)),this.focus=3D1}updateMatrices(t){const e=3Dthis.camera,=
n=3D2*lt*t.angle*this.focus,i=3Dthis.mapSize.width/this.mapSize.height,r=3D=
t.distance||e.far;n=3D=3D=3De.fov&amp;&amp;i=3D=3D=3De.aspect&amp;&amp;r=3D=
=3D=3De.far||(e.fov=3Dn,e.aspect=3Di,e.far=3Dr,e.updateProjectionMatrix()),=
super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=3Dt.focus,t=
his}}Vl.prototype.isSpotLightShadow=3D!0;class Wl extends Fl{constructor(t,=
e,n=3D0,i=3DMath.PI/3,r=3D0,s=3D1){super(t,e),this.type=3D"SpotLight",this.=
position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=3Dnew Ce,this.d=
istance=3Dn,this.angle=3Di,this.penumbra=3Dr,this.decay=3Ds,this.shadow=3Dn=
ew Vl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=
=3Dt/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),t=
his.distance=3Dt.distance,this.angle=3Dt.angle,this.penumbra=3Dt.penumbra,t=
his.decay=3Dt.decay,this.target=3Dt.target.clone(),this.shadow=3Dt.shadow.c=
lone(),this}}Wl.prototype.isSpotLight=3D!0;const jl=3Dnew se,ql=3Dnew Lt,Xl=
=3Dnew Lt;class Yl extends kl{constructor(){super(new Kn(90,1,.5,500)),this=
._frameExtents=3Dnew vt(4,2),this._viewportCount=3D6,this._viewports=3D[new=
 St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1=
),new St(1,0,1,1)],this._cubeDirections=3D[new Lt(1,0,0),new Lt(-1,0,0),new=
 Lt(0,0,1),new Lt(0,0,-1),new Lt(0,1,0),new Lt(0,-1,0)],this._cubeUps=3D[ne=
w Lt(0,1,0),new Lt(0,1,0),new Lt(0,1,0),new Lt(0,1,0),new Lt(0,0,1),new Lt(=
0,0,-1)]}updateMatrices(t,e=3D0){const n=3Dthis.camera,i=3Dthis.matrix,r=3D=
t.distance||n.far;r!=3D=3Dn.far&amp;&amp;(n.far=3Dr,n.updateProjectionMatri=
x()),ql.setFromMatrixPosition(t.matrixWorld),n.position.copy(ql),Xl.copy(n.=
position),Xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.loo=
kAt(Xl),n.updateMatrixWorld(),i.makeTranslation(-ql.x,-ql.y,-ql.z),jl.multi=
plyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromP=
rojectionMatrix(jl)}}Yl.prototype.isPointLightShadow=3D!0;class Zl extends =
Fl{constructor(t,e,n=3D0,i=3D1){super(t,e),this.type=3D"PointLight",this.di=
stance=3Dn,this.decay=3Di,this.shadow=3Dnew Yl}get power(){return 4*this.in=
tensity*Math.PI}set power(t){this.intensity=3Dt/(4*Math.PI)}dispose(){this.=
shadow.dispose()}copy(t){return super.copy(t),this.distance=3Dt.distance,th=
is.decay=3Dt.decay,this.shadow=3Dt.shadow.clone(),this}}Zl.prototype.isPoin=
tLight=3D!0;class Jl extends Qn{constructor(t=3D-1,e=3D1,n=3D1,i=3D-1,r=3D.=
1,s=3D2e3){super(),this.type=3D"OrthographicCamera",this.zoom=3D1,this.view=
=3Dnull,this.left=3Dt,this.right=3De,this.top=3Dn,this.bottom=3Di,this.near=
=3Dr,this.far=3Ds,this.updateProjectionMatrix()}copy(t,e){return super.copy=
(t,e),this.left=3Dt.left,this.right=3Dt.right,this.top=3Dt.top,this.bottom=
=3Dt.bottom,this.near=3Dt.near,this.far=3Dt.far,this.zoom=3Dt.zoom,this.vie=
w=3Dnull=3D=3D=3Dt.view?null:Object.assign({},t.view),this}setViewOffset(t,=
e,n,i,r,s){null=3D=3D=3Dthis.view&amp;&amp;(this.view=3D{enabled:!0,fullWid=
th:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=
=3D!0,this.view.fullWidth=3Dt,this.view.fullHeight=3De,this.view.offsetX=3D=
n,this.view.offsetY=3Di,this.view.width=3Dr,this.view.height=3Ds,this.updat=
eProjectionMatrix()}clearViewOffset(){null!=3D=3Dthis.view&amp;&amp;(this.v=
iew.enabled=3D!1),this.updateProjectionMatrix()}updateProjectionMatrix(){co=
nst t=3D(this.right-this.left)/(2*this.zoom),e=3D(this.top-this.bottom)/(2*=
this.zoom),n=3D(this.right+this.left)/2,i=3D(this.top+this.bottom)/2;let r=
=3Dn-t,s=3Dn+t,a=3Di+e,o=3Di-e;if(null!=3D=3Dthis.view&amp;&amp;this.view.e=
nabled){const t=3D(this.right-this.left)/this.view.fullWidth/this.zoom,e=3D=
(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=3Dt*this.view.offs=
etX,s=3Dr+t*this.view.width,a-=3De*this.view.offsetY,o=3Da-e*this.view.heig=
ht}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.=
projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){cons=
t e=3Dsuper.toJSON(t);return e.object.zoom=3Dthis.zoom,e.object.left=3Dthis=
.left,e.object.right=3Dthis.right,e.object.top=3Dthis.top,e.object.bottom=
=3Dthis.bottom,e.object.near=3Dthis.near,e.object.far=3Dthis.far,null!=3D=
=3Dthis.view&amp;&amp;(e.object.view=3DObject.assign({},this.view)),e}}Jl.p=
rototype.isOrthographicCamera=3D!0;class Ql extends kl{constructor(){super(=
new Jl(-5,5,5,-5,.5,500))}}Ql.prototype.isDirectionalLightShadow=3D!0;class=
 Kl extends Fl{constructor(t,e){super(t,e),this.type=3D"DirectionalLight",t=
his.position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=3Dnew Ce,th=
is.shadow=3Dnew Ql}dispose(){this.shadow.dispose()}copy(t){return super.cop=
y(t),this.target=3Dt.target.clone(),this.shadow=3Dt.shadow.clone(),this}}Kl=
.prototype.isDirectionalLight=3D!0;class $l extends Fl{constructor(t,e){sup=
er(t,e),this.type=3D"AmbientLight"}}$l.prototype.isAmbientLight=3D!0;class =
tc extends Fl{constructor(t,e,n=3D10,i=3D10){super(t,e),this.type=3D"RectAr=
eaLight",this.width=3Dn,this.height=3Di}copy(t){return super.copy(t),this.w=
idth=3Dt.width,this.height=3Dt.height,this}toJSON(t){const e=3Dsuper.toJSON=
(t);return e.object.width=3Dthis.width,e.object.height=3Dthis.height,e}}tc.=
prototype.isRectAreaLight=3D!0;class ec{constructor(){this.coefficients=3D[=
];for(let t=3D0;t&lt;9;t++)this.coefficients.push(new Lt)}set(t){for(let e=
=3D0;e&lt;9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let =
t=3D0;t&lt;9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){con=
st n=3Dt.x,i=3Dt.y,r=3Dt.z,s=3Dthis.coefficients;return e.copy(s[0]).multip=
lyScalar(.282095),e.addScaledVector(s[1],.488603*i),e.addScaledVector(s[2],=
.488603*r),e.addScaledVector(s[3],.488603*n),e.addScaledVector(s[4],n*i*1.0=
92548),e.addScaledVector(s[5],i*r*1.092548),e.addScaledVector(s[6],.315392*=
(3*r*r-1)),e.addScaledVector(s[7],n*r*1.092548),e.addScaledVector(s[8],.546=
274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=3Dt.x,i=3Dt.y,r=3Dt.z,s=3Dthi=
s.coefficients;return e.copy(s[0]).multiplyScalar(.886227),e.addScaledVecto=
r(s[1],1.023328*i),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3=
],1.023328*n),e.addScaledVector(s[4],.858086*n*i),e.addScaledVector(s[5],.8=
58086*i*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[=
7],.858086*n*r),e.addScaledVector(s[8],.429043*(n*n-i*i)),e}add(t){for(let =
e=3D0;e&lt;9;e++)this.coefficients[e].add(t.coefficients[e]);return this}ad=
dScaledSH(t,e){for(let n=3D0;n&lt;9;n++)this.coefficients[n].addScaledVecto=
r(t.coefficients[n],e);return this}scale(t){for(let e=3D0;e&lt;9;e++)this.c=
oefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=3D0;n&lt;9=
;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){f=
or(let e=3D0;e&lt;9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))=
return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return(ne=
w this.constructor).copy(this)}fromArray(t,e=3D0){const n=3Dthis.coefficien=
ts;for(let i=3D0;i&lt;9;i++)n[i].fromArray(t,e+3*i);return this}toArray(t=
=3D[],e=3D0){const n=3Dthis.coefficients;for(let i=3D0;i&lt;9;i++)n[i].toAr=
ray(t,e+3*i);return t}static getBasisAt(t,e){const n=3Dt.x,i=3Dt.y,r=3Dt.z;=
e[0]=3D.282095,e[1]=3D.488603*i,e[2]=3D.488603*r,e[3]=3D.488603*n,e[4]=3D1.=
092548*n*i,e[5]=3D1.092548*i*r,e[6]=3D.315392*(3*r*r-1),e[7]=3D1.092548*n*r=
,e[8]=3D.546274*(n*n-i*i)}}ec.prototype.isSphericalHarmonics3=3D!0;class nc=
 extends Fl{constructor(t=3Dnew ec,e=3D1){super(void 0,e),this.sh=3Dt}copy(=
t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.int=
ensity=3Dt.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=3Dsuper=
.toJSON(t);return e.object.sh=3Dthis.sh.toArray(),e}}nc.prototype.isLightPr=
obe=3D!0;class ic extends ol{constructor(t){super(t),this.textures=3D{}}loa=
d(t,e,n,i){const r=3Dthis,s=3Dnew cl(r.manager);s.setPath(r.path),s.setRequ=
estHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t=
,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e=
),r.manager.itemError(t)}}),n,i)}parse(t){const e=3Dthis.textures;function =
n(t){return void 0=3D=3D=3De[t]&amp;&amp;console.warn("THREE.MaterialLoader=
: Undefined texture",t),e[t]}const i=3Dnew ko[t.type];if(void 0!=3D=3Dt.uui=
d&amp;&amp;(i.uuid=3Dt.uuid),void 0!=3D=3Dt.name&amp;&amp;(i.name=3Dt.name)=
,void 0!=3D=3Dt.color&amp;&amp;void 0!=3D=3Di.color&amp;&amp;i.color.setHex=
(t.color),void 0!=3D=3Dt.roughness&amp;&amp;(i.roughness=3Dt.roughness),voi=
d 0!=3D=3Dt.metalness&amp;&amp;(i.metalness=3Dt.metalness),void 0!=3D=3Dt.s=
heen&amp;&amp;(i.sheen=3D(new tn).setHex(t.sheen)),void 0!=3D=3Dt.emissive&=
amp;&amp;void 0!=3D=3Di.emissive&amp;&amp;i.emissive.setHex(t.emissive),voi=
d 0!=3D=3Dt.specular&amp;&amp;void 0!=3D=3Di.specular&amp;&amp;i.specular.s=
etHex(t.specular),void 0!=3D=3Dt.shininess&amp;&amp;(i.shininess=3Dt.shinin=
ess),void 0!=3D=3Dt.clearcoat&amp;&amp;(i.clearcoat=3Dt.clearcoat),void 0!=
=3D=3Dt.clearcoatRoughness&amp;&amp;(i.clearcoatRoughness=3Dt.clearcoatRoug=
hness),void 0!=3D=3Dt.fog&amp;&amp;(i.fog=3Dt.fog),void 0!=3D=3Dt.flatShadi=
ng&amp;&amp;(i.flatShading=3Dt.flatShading),void 0!=3D=3Dt.blending&amp;&am=
p;(i.blending=3Dt.blending),void 0!=3D=3Dt.combine&amp;&amp;(i.combine=3Dt.=
combine),void 0!=3D=3Dt.side&amp;&amp;(i.side=3Dt.side),void 0!=3D=3Dt.shad=
owSide&amp;&amp;(i.shadowSide=3Dt.shadowSide),void 0!=3D=3Dt.opacity&amp;&a=
mp;(i.opacity=3Dt.opacity),void 0!=3D=3Dt.transparent&amp;&amp;(i.transpare=
nt=3Dt.transparent),void 0!=3D=3Dt.alphaTest&amp;&amp;(i.alphaTest=3Dt.alph=
aTest),void 0!=3D=3Dt.depthTest&amp;&amp;(i.depthTest=3Dt.depthTest),void 0=
!=3D=3Dt.depthWrite&amp;&amp;(i.depthWrite=3Dt.depthWrite),void 0!=3D=3Dt.c=
olorWrite&amp;&amp;(i.colorWrite=3Dt.colorWrite),void 0!=3D=3Dt.stencilWrit=
e&amp;&amp;(i.stencilWrite=3Dt.stencilWrite),void 0!=3D=3Dt.stencilWriteMas=
k&amp;&amp;(i.stencilWriteMask=3Dt.stencilWriteMask),void 0!=3D=3Dt.stencil=
Func&amp;&amp;(i.stencilFunc=3Dt.stencilFunc),void 0!=3D=3Dt.stencilRef&amp=
;&amp;(i.stencilRef=3Dt.stencilRef),void 0!=3D=3Dt.stencilFuncMask&amp;&amp=
;(i.stencilFuncMask=3Dt.stencilFuncMask),void 0!=3D=3Dt.stencilFail&amp;&am=
p;(i.stencilFail=3Dt.stencilFail),void 0!=3D=3Dt.stencilZFail&amp;&amp;(i.s=
tencilZFail=3Dt.stencilZFail),void 0!=3D=3Dt.stencilZPass&amp;&amp;(i.stenc=
ilZPass=3Dt.stencilZPass),void 0!=3D=3Dt.wireframe&amp;&amp;(i.wireframe=3D=
t.wireframe),void 0!=3D=3Dt.wireframeLinewidth&amp;&amp;(i.wireframeLinewid=
th=3Dt.wireframeLinewidth),void 0!=3D=3Dt.wireframeLinecap&amp;&amp;(i.wire=
frameLinecap=3Dt.wireframeLinecap),void 0!=3D=3Dt.wireframeLinejoin&amp;&am=
p;(i.wireframeLinejoin=3Dt.wireframeLinejoin),void 0!=3D=3Dt.rotation&amp;&=
amp;(i.rotation=3Dt.rotation),1!=3D=3Dt.linewidth&amp;&amp;(i.linewidth=3Dt=
.linewidth),void 0!=3D=3Dt.dashSize&amp;&amp;(i.dashSize=3Dt.dashSize),void=
 0!=3D=3Dt.gapSize&amp;&amp;(i.gapSize=3Dt.gapSize),void 0!=3D=3Dt.scale&am=
p;&amp;(i.scale=3Dt.scale),void 0!=3D=3Dt.polygonOffset&amp;&amp;(i.polygon=
Offset=3Dt.polygonOffset),void 0!=3D=3Dt.polygonOffsetFactor&amp;&amp;(i.po=
lygonOffsetFactor=3Dt.polygonOffsetFactor),void 0!=3D=3Dt.polygonOffsetUnit=
s&amp;&amp;(i.polygonOffsetUnits=3Dt.polygonOffsetUnits),void 0!=3D=3Dt.ski=
nning&amp;&amp;(i.skinning=3Dt.skinning),void 0!=3D=3Dt.morphTargets&amp;&a=
mp;(i.morphTargets=3Dt.morphTargets),void 0!=3D=3Dt.morphNormals&amp;&amp;(=
i.morphNormals=3Dt.morphNormals),void 0!=3D=3Dt.dithering&amp;&amp;(i.dithe=
ring=3Dt.dithering),void 0!=3D=3Dt.alphaToCoverage&amp;&amp;(i.alphaToCover=
age=3Dt.alphaToCoverage),void 0!=3D=3Dt.premultipliedAlpha&amp;&amp;(i.prem=
ultipliedAlpha=3Dt.premultipliedAlpha),void 0!=3D=3Dt.vertexTangents&amp;&a=
mp;(i.vertexTangents=3Dt.vertexTangents),void 0!=3D=3Dt.visible&amp;&amp;(i=
.visible=3Dt.visible),void 0!=3D=3Dt.toneMapped&amp;&amp;(i.toneMapped=3Dt.=
toneMapped),void 0!=3D=3Dt.userData&amp;&amp;(i.userData=3Dt.userData),void=
 0!=3D=3Dt.vertexColors&amp;&amp;("number"=3D=3Dtypeof t.vertexColors?i.ver=
texColors=3Dt.vertexColors&gt;0:i.vertexColors=3Dt.vertexColors),void 0!=3D=
=3Dt.uniforms)for(const e in t.uniforms){const r=3Dt.uniforms[e];switch(i.u=
niforms[e]=3D{},r.type){case"t":i.uniforms[e].value=3Dn(r.value);break;case=
"c":i.uniforms[e].value=3D(new tn).setHex(r.value);break;case"v2":i.uniform=
s[e].value=3D(new vt).fromArray(r.value);break;case"v3":i.uniforms[e].value=
=3D(new Lt).fromArray(r.value);break;case"v4":i.uniforms[e].value=3D(new St=
).fromArray(r.value);break;case"m3":i.uniforms[e].value=3D(new yt).fromArra=
y(r.value);break;case"m4":i.uniforms[e].value=3D(new se).fromArray(r.value)=
;break;default:i.uniforms[e].value=3Dr.value}}if(void 0!=3D=3Dt.defines&amp=
;&amp;(i.defines=3Dt.defines),void 0!=3D=3Dt.vertexShader&amp;&amp;(i.verte=
xShader=3Dt.vertexShader),void 0!=3D=3Dt.fragmentShader&amp;&amp;(i.fragmen=
tShader=3Dt.fragmentShader),void 0!=3D=3Dt.extensions)for(const e in t.exte=
nsions)i.extensions[e]=3Dt.extensions[e];if(void 0!=3D=3Dt.shading&amp;&amp=
;(i.flatShading=3D1=3D=3D=3Dt.shading),void 0!=3D=3Dt.size&amp;&amp;(i.size=
=3Dt.size),void 0!=3D=3Dt.sizeAttenuation&amp;&amp;(i.sizeAttenuation=3Dt.s=
izeAttenuation),void 0!=3D=3Dt.map&amp;&amp;(i.map=3Dn(t.map)),void 0!=3D=
=3Dt.matcap&amp;&amp;(i.matcap=3Dn(t.matcap)),void 0!=3D=3Dt.alphaMap&amp;&=
amp;(i.alphaMap=3Dn(t.alphaMap)),void 0!=3D=3Dt.bumpMap&amp;&amp;(i.bumpMap=
=3Dn(t.bumpMap)),void 0!=3D=3Dt.bumpScale&amp;&amp;(i.bumpScale=3Dt.bumpSca=
le),void 0!=3D=3Dt.normalMap&amp;&amp;(i.normalMap=3Dn(t.normalMap)),void 0=
!=3D=3Dt.normalMapType&amp;&amp;(i.normalMapType=3Dt.normalMapType),void 0!=
=3D=3Dt.normalScale){let e=3Dt.normalScale;!1=3D=3D=3DArray.isArray(e)&amp;=
&amp;(e=3D[e,e]),i.normalScale=3D(new vt).fromArray(e)}return void 0!=3D=3D=
t.displacementMap&amp;&amp;(i.displacementMap=3Dn(t.displacementMap)),void =
0!=3D=3Dt.displacementScale&amp;&amp;(i.displacementScale=3Dt.displacementS=
cale),void 0!=3D=3Dt.displacementBias&amp;&amp;(i.displacementBias=3Dt.disp=
lacementBias),void 0!=3D=3Dt.roughnessMap&amp;&amp;(i.roughnessMap=3Dn(t.ro=
ughnessMap)),void 0!=3D=3Dt.metalnessMap&amp;&amp;(i.metalnessMap=3Dn(t.met=
alnessMap)),void 0!=3D=3Dt.emissiveMap&amp;&amp;(i.emissiveMap=3Dn(t.emissi=
veMap)),void 0!=3D=3Dt.emissiveIntensity&amp;&amp;(i.emissiveIntensity=3Dt.=
emissiveIntensity),void 0!=3D=3Dt.specularMap&amp;&amp;(i.specularMap=3Dn(t=
.specularMap)),void 0!=3D=3Dt.envMap&amp;&amp;(i.envMap=3Dn(t.envMap)),void=
 0!=3D=3Dt.envMapIntensity&amp;&amp;(i.envMapIntensity=3Dt.envMapIntensity)=
,void 0!=3D=3Dt.reflectivity&amp;&amp;(i.reflectivity=3Dt.reflectivity),voi=
d 0!=3D=3Dt.refractionRatio&amp;&amp;(i.refractionRatio=3Dt.refractionRatio=
),void 0!=3D=3Dt.lightMap&amp;&amp;(i.lightMap=3Dn(t.lightMap)),void 0!=3D=
=3Dt.lightMapIntensity&amp;&amp;(i.lightMapIntensity=3Dt.lightMapIntensity)=
,void 0!=3D=3Dt.aoMap&amp;&amp;(i.aoMap=3Dn(t.aoMap)),void 0!=3D=3Dt.aoMapI=
ntensity&amp;&amp;(i.aoMapIntensity=3Dt.aoMapIntensity),void 0!=3D=3Dt.grad=
ientMap&amp;&amp;(i.gradientMap=3Dn(t.gradientMap)),void 0!=3D=3Dt.clearcoa=
tMap&amp;&amp;(i.clearcoatMap=3Dn(t.clearcoatMap)),void 0!=3D=3Dt.clearcoat=
RoughnessMap&amp;&amp;(i.clearcoatRoughnessMap=3Dn(t.clearcoatRoughnessMap)=
),void 0!=3D=3Dt.clearcoatNormalMap&amp;&amp;(i.clearcoatNormalMap=3Dn(t.cl=
earcoatNormalMap)),void 0!=3D=3Dt.clearcoatNormalScale&amp;&amp;(i.clearcoa=
tNormalScale=3D(new vt).fromArray(t.clearcoatNormalScale)),void 0!=3D=3Dt.t=
ransmission&amp;&amp;(i.transmission=3Dt.transmission),void 0!=3D=3Dt.trans=
missionMap&amp;&amp;(i.transmissionMap=3Dn(t.transmissionMap)),i}setTexture=
s(t){return this.textures=3Dt,this}}class rc{static decodeText(t){if("undef=
ined"!=3Dtypeof TextDecoder)return(new TextDecoder).decode(t);let e=3D"";fo=
r(let n=3D0,i=3Dt.length;n&lt;i;n++)e+=3DString.fromCharCode(t[n]);try{retu=
rn decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t=
){const e=3Dt.lastIndexOf("/");return-1=3D=3D=3De?"./":t.substr(0,e+1)}}cla=
ss sc extends En{constructor(){super(),this.type=3D"InstancedBufferGeometry=
",this.instanceCount=3D1/0}copy(t){return super.copy(t),this.instanceCount=
=3Dt.instanceCount,this}clone(){return(new this.constructor).copy(this)}toJ=
SON(){const t=3Dsuper.toJSON(this);return t.instanceCount=3Dthis.instanceCo=
unt,t.isInstancedBufferGeometry=3D!0,t}}sc.prototype.isInstancedBufferGeome=
try=3D!0;class ac extends sn{constructor(t,e,n,i){"number"=3D=3Dtypeof n&am=
p;&amp;(i=3Dn,n=3D!1,console.error("THREE.InstancedBufferAttribute: The con=
structor now expects normalized as the third argument.")),super(t,e,n),this=
.meshPerAttribute=3Di||1}copy(t){return super.copy(t),this.meshPerAttribute=
=3Dt.meshPerAttribute,this}toJSON(){const t=3Dsuper.toJSON();return t.meshP=
erAttribute=3Dthis.meshPerAttribute,t.isInstancedBufferAttribute=3D!0,t}}ac=
.prototype.isInstancedBufferAttribute=3D!0;class oc extends ol{constructor(=
t){super(t)}load(t,e,n,i){const r=3Dthis,s=3Dnew cl(r.manager);s.setPath(r.=
path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCreden=
tials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):=
console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e=3D{},n=3D{=
};function i(t,i){if(void 0!=3D=3De[i])return e[i];const r=3Dt.interleavedB=
uffers[i],s=3Dfunction(t,e){if(void 0!=3D=3Dn[e])return n[e];const i=3Dt.ar=
rayBuffers[e],r=3Dnew Uint32Array(i).buffer;return n[e]=3Dr,r}(t,r.buffer),=
a=3Dyn(r.type,s),o=3Dnew Es(a,r.stride);return o.uuid=3Dr.uuid,e[i]=3Do,o}c=
onst r=3Dt.isInstancedBufferGeometry?new sc:new En,s=3Dt.data.index;if(void=
 0!=3D=3Ds){const t=3Dyn(s.type,s.array);r.setIndex(new sn(t,1))}const a=3D=
t.data.attributes;for(const e in a){const n=3Da[e];let s;if(n.isInterleaved=
BufferAttribute){const e=3Di(t.data,n.data);s=3Dnew Ls(e,n.itemSize,n.offse=
t,n.normalized)}else{const t=3Dyn(n.type,n.array);s=3Dnew(n.isInstancedBuff=
erAttribute?ac:sn)(t,n.itemSize,n.normalized)}void 0!=3D=3Dn.name&amp;&amp;=
(s.name=3Dn.name),void 0!=3D=3Dn.usage&amp;&amp;s.setUsage(n.usage),void 0!=
=3D=3Dn.updateRange&amp;&amp;(s.updateRange.offset=3Dn.updateRange.offset,s=
.updateRange.count=3Dn.updateRange.count),r.setAttribute(e,s)}const o=3Dt.d=
ata.morphAttributes;if(o)for(const e in o){const n=3Do[e],s=3D[];for(let e=
=3D0,r=3Dn.length;e&lt;r;e++){const r=3Dn[e];let a;if(r.isInterleavedBuffer=
Attribute){const e=3Di(t.data,r.data);a=3Dnew Ls(e,r.itemSize,r.offset,r.no=
rmalized)}else{const t=3Dyn(r.type,r.array);a=3Dnew sn(t,r.itemSize,r.norma=
lized)}void 0!=3D=3Dr.name&amp;&amp;(a.name=3Dr.name),s.push(a)}r.morphAttr=
ibutes[e]=3Ds}t.data.morphTargetsRelative&amp;&amp;(r.morphTargetsRelative=
=3D!0);const l=3Dt.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!=
=3D=3Dl)for(let t=3D0,e=3Dl.length;t!=3D=3De;++t){const e=3Dl[t];r.addGroup=
(e.start,e.count,e.materialIndex)}const c=3Dt.data.boundingSphere;if(void 0=
!=3D=3Dc){const t=3Dnew Lt;void 0!=3D=3Dc.center&amp;&amp;t.fromArray(c.cen=
ter),r.boundingSphere=3Dnew Jt(t,c.radius)}return t.name&amp;&amp;(r.name=
=3Dt.name),t.userData&amp;&amp;(r.userData=3Dt.userData),r}}const lc=3D{UVM=
apping:i,CubeReflectionMapping:r,CubeRefractionMapping:s,EquirectangularRef=
lectionMapping:a,EquirectangularRefractionMapping:o,CubeUVReflectionMapping=
:l,CubeUVRefractionMapping:c},cc=3D{RepeatWrapping:h,ClampToEdgeWrapping:u,=
MirroredRepeatWrapping:d},hc=3D{NearestFilter:p,NearestMipmapNearestFilter:=
m,NearestMipmapLinearFilter:f,LinearFilter:g,LinearMipmapNearestFilter:v,Li=
nearMipmapLinearFilter:y};class uc extends ol{constructor(t){super(t),"unde=
fined"=3D=3Dtypeof createImageBitmap&amp;&amp;console.warn("THREE.ImageBitm=
apLoader: createImageBitmap() not supported."),"undefined"=3D=3Dtypeof fetc=
h&amp;&amp;console.warn("THREE.ImageBitmapLoader: fetch() not supported."),=
this.options=3D{premultiplyAlpha:"none"}}setOptions(t){return this.options=
=3Dt,this}load(t,e,n,i){void 0=3D=3D=3Dt&amp;&amp;(t=3D""),void 0!=3D=3Dthi=
s.path&amp;&amp;(t=3Dthis.path+t),t=3Dthis.manager.resolveURL(t);const r=3D=
this,s=3Drl.get(t);if(void 0!=3D=3Ds)return r.manager.itemStart(t),setTimeo=
ut((function(){e&amp;&amp;e(s),r.manager.itemEnd(t)}),0),s;const a=3D{};a.c=
redentials=3D"anonymous"=3D=3D=3Dthis.crossOrigin?"same-origin":"include",a=
.headers=3Dthis.requestHeader,fetch(t,a).then((function(t){return t.blob()}=
)).then((function(t){return createImageBitmap(t,Object.assign(r.options,{co=
lorSpaceConversion:"none"}))})).then((function(n){rl.add(t,n),e&amp;&amp;e(=
n),r.manager.itemEnd(t)})).catch((function(e){i&amp;&amp;i(e),r.manager.ite=
mError(t),r.manager.itemEnd(t)})),r.manager.itemStart(t)}}uc.prototype.isIm=
ageBitmapLoader=3D!0;class dc{constructor(){this.type=3D"ShapePath",this.co=
lor=3Dnew tn,this.subPaths=3D[],this.currentPath=3Dnull}moveTo(t,e){return =
this.currentPath=3Dnew Bl,this.subPaths.push(this.currentPath),this.current=
Path.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}=
quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i)=
,this}bezierCurveTo(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,=
n,i,r,s),this}splineThru(t){return this.currentPath.splineThru(t),this}toSh=
apes(t,e){function n(t){const e=3D[];for(let n=3D0,i=3Dt.length;n&lt;i;n++)=
{const i=3Dt[n],r=3Dnew zl;r.curves=3Di.curves,e.push(r)}return e}function =
i(t,e){const n=3De.length;let i=3D!1;for(let r=3Dn-1,s=3D0;s&lt;n;r=3Ds++){=
let n=3De[r],a=3De[s],o=3Da.x-n.x,l=3Da.y-n.y;if(Math.abs(l)&gt;Number.EPSI=
LON){if(l&lt;0&amp;&amp;(n=3De[s],o=3D-o,a=3De[r],l=3D-l),t.y&lt;n.y||t.y&g=
t;a.y)continue;if(t.y=3D=3D=3Dn.y){if(t.x=3D=3D=3Dn.x)return!0}else{const e=
=3Dl*(t.x-n.x)-o*(t.y-n.y);if(0=3D=3D=3De)return!0;if(e&lt;0)continue;i=3D!=
i}}else{if(t.y!=3D=3Dn.y)continue;if(a.x&lt;=3Dt.x&amp;&amp;t.x&lt;=3Dn.x||=
n.x&lt;=3Dt.x&amp;&amp;t.x&lt;=3Da.x)return!0}}return i}const r=3Dpo.isCloc=
kWise,s=3Dthis.subPaths;if(0=3D=3D=3Ds.length)return[];if(!0=3D=3D=3De)retu=
rn n(s);let a,o,l;const c=3D[];if(1=3D=3D=3Ds.length)return o=3Ds[0],l=3Dne=
w zl,l.curves=3Do.curves,c.push(l),c;let h=3D!r(s[0].getPoints());h=3Dt?!h:=
h;const u=3D[],d=3D[];let p,m,f=3D[],g=3D0;d[g]=3Dvoid 0,f[g]=3D[];for(let =
e=3D0,n=3Ds.length;e&lt;n;e++)o=3Ds[e],p=3Do.getPoints(),a=3Dr(p),a=3Dt?!a:=
a,a?(!h&amp;&amp;d[g]&amp;&amp;g++,d[g]=3D{s:new zl,p:p},d[g].s.curves=3Do.=
curves,h&amp;&amp;g++,f[g]=3D[]):f[g].push({h:o,p:p[0]});if(!d[0])return n(=
s);if(d.length&gt;1){let t=3D!1;const e=3D[];for(let t=3D0,e=3Dd.length;t&l=
t;e;t++)u[t]=3D[];for(let n=3D0,r=3Dd.length;n&lt;r;n++){const r=3Df[n];for=
(let s=3D0;s&lt;r.length;s++){const a=3Dr[s];let o=3D!0;for(let r=3D0;r&lt;=
d.length;r++)i(a.p,d[r].p)&amp;&amp;(n!=3D=3Dr&amp;&amp;e.push({froms:n,tos=
:r,hole:s}),o?(o=3D!1,u[r].push(a)):t=3D!0);o&amp;&amp;u[n].push(a)}}e.leng=
th&gt;0&amp;&amp;(t||(f=3Du))}for(let t=3D0,e=3Dd.length;t&lt;e;t++){l=3Dd[=
t].s,c.push(l),m=3Df[t];for(let t=3D0,e=3Dm.length;t&lt;e;t++)l.holes.push(=
m[t].h)}return c}}class pc{constructor(t){this.type=3D"Font",this.data=3Dt}=
generateShapes(t,e=3D100){const n=3D[],i=3Dfunction(t,e,n){const i=3DArray.=
from(t),r=3De/n.resolution,s=3D(n.boundingBox.yMax-n.boundingBox.yMin+n.und=
erlineThickness)*r,a=3D[];let o=3D0,l=3D0;for(let t=3D0;t&lt;i.length;t++){=
const e=3Di[t];if("\n"=3D=3D=3De)o=3D0,l-=3Ds;else{const t=3Dmc(e,r,o,l,n);=
o+=3Dt.offsetX,a.push(t.path)}}return a}(t,e,this.data);for(let t=3D0,e=3Di=
.length;t&lt;e;t++)Array.prototype.push.apply(n,i[t].toShapes());return n}}=
function mc(t,e,n,i,r){const s=3Dr.glyphs[t]||r.glyphs["?"];if(!s)return vo=
id console.error('THREE.Font: character "'+t+'" does not exists in font fam=
ily '+r.familyName+".");const a=3Dnew dc;let o,l,c,h,u,d,p,m;if(s.o){const =
t=3Ds._cachedOutline||(s._cachedOutline=3Ds.o.split(" "));for(let r=3D0,s=
=3Dt.length;r&lt;s;){switch(t[r++]){case"m":o=3Dt[r++]*e+n,l=3Dt[r++]*e+i,a=
.moveTo(o,l);break;case"l":o=3Dt[r++]*e+n,l=3Dt[r++]*e+i,a.lineTo(o,l);brea=
k;case"q":c=3Dt[r++]*e+n,h=3Dt[r++]*e+i,u=3Dt[r++]*e+n,d=3Dt[r++]*e+i,a.qua=
draticCurveTo(u,d,c,h);break;case"b":c=3Dt[r++]*e+n,h=3Dt[r++]*e+i,u=3Dt[r+=
+]*e+n,d=3Dt[r++]*e+i,p=3Dt[r++]*e+n,m=3Dt[r++]*e+i,a.bezierCurveTo(u,d,p,m=
,c,h)}}}return{offsetX:s.ha*e,path:a}}pc.prototype.isFont=3D!0;let fc;const=
 gc=3D{getContext:function(){return void 0=3D=3D=3Dfc&amp;&amp;(fc=3Dnew(wi=
ndow.AudioContext||window.webkitAudioContext)),fc},setContext:function(t){f=
c=3Dt}};class vc extends ol{constructor(t){super(t)}load(t,e,n,i){const r=
=3Dthis,s=3Dnew cl(this.manager);s.setResponseType("arraybuffer"),s.setPath=
(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(thi=
s.withCredentials),s.load(t,(function(n){try{const t=3Dn.slice(0);gc.getCon=
text().decodeAudioData(t,(function(t){e(t)}))}catch(e){i?i(e):console.error=
(e),r.manager.itemError(t)}}),n,i)}}class yc extends nc{constructor(t,e,n=
=3D1){super(void 0,n);const i=3D(new tn).set(t),r=3D(new tn).set(e),s=3Dnew=
 Lt(i.r,i.g,i.b),a=3Dnew Lt(r.r,r.g,r.b),o=3DMath.sqrt(Math.PI),l=3Do*Math.=
sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.=
coefficients[1].copy(s).sub(a).multiplyScalar(l)}}yc.prototype.isHemisphere=
LightProbe=3D!0;class xc extends nc{constructor(t,e=3D1){super(void 0,e);co=
nst n=3D(new tn).set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplySc=
alar(2*Math.sqrt(Math.PI))}}xc.prototype.isAmbientLightProbe=3D!0;const _c=
=3Dnew se,wc=3Dnew se;class bc{constructor(t=3D!0){this.autoStart=3Dt,this.=
startTime=3D0,this.oldTime=3D0,this.elapsedTime=3D0,this.running=3D!1}start=
(){this.startTime=3DMc(),this.oldTime=3Dthis.startTime,this.elapsedTime=3D0=
,this.running=3D!0}stop(){this.getElapsedTime(),this.running=3D!1,this.auto=
Start=3D!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelt=
a(){let t=3D0;if(this.autoStart&amp;&amp;!this.running)return this.start(),=
0;if(this.running){const e=3DMc();t=3D(e-this.oldTime)/1e3,this.oldTime=3De=
,this.elapsedTime+=3Dt}return t}}function Mc(){return("undefined"=3D=3Dtype=
of performance?Date:performance).now()}const Sc=3Dnew Lt,Tc=3Dnew At,Ec=3Dn=
ew Lt,Ac=3Dnew Lt;class Lc extends Ce{constructor(t){super(),this.type=3D"A=
udio",this.listener=3Dt,this.context=3Dt.context,this.gain=3Dthis.context.c=
reateGain(),this.gain.connect(t.getInput()),this.autoplay=3D!1,this.buffer=
=3Dnull,this.detune=3D0,this.loop=3D!1,this.loopStart=3D0,this.loopEnd=3D0,=
this.offset=3D0,this.duration=3Dvoid 0,this.playbackRate=3D1,this.isPlaying=
=3D!1,this.hasPlaybackControl=3D!0,this.source=3Dnull,this.sourceType=3D"em=
pty",this._startedAt=3D0,this._progress=3D0,this._connected=3D!1,this.filte=
rs=3D[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlayba=
ckControl=3D!1,this.sourceType=3D"audioNode",this.source=3Dt,this.connect()=
,this}setMediaElementSource(t){return this.hasPlaybackControl=3D!1,this.sou=
rceType=3D"mediaNode",this.source=3Dthis.context.createMediaElementSource(t=
),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackContro=
l=3D!1,this.sourceType=3D"mediaStreamNode",this.source=3Dthis.context.creat=
eMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=
=3Dt,this.sourceType=3D"buffer",this.autoplay&amp;&amp;this.play(),this}pla=
y(t=3D0){if(!0=3D=3D=3Dthis.isPlaying)return void console.warn("THREE.Audio=
: Audio is already playing.");if(!1=3D=3D=3Dthis.hasPlaybackControl)return =
void console.warn("THREE.Audio: this Audio has no playback control.");this.=
_startedAt=3Dthis.context.currentTime+t;const e=3Dthis.context.createBuffer=
Source();return e.buffer=3Dthis.buffer,e.loop=3Dthis.loop,e.loopStart=3Dthi=
s.loopStart,e.loopEnd=3Dthis.loopEnd,e.onended=3Dthis.onEnded.bind(this),e.=
start(this._startedAt,this._progress+this.offset,this.duration),this.isPlay=
ing=3D!0,this.source=3De,this.setDetune(this.detune),this.setPlaybackRate(t=
his.playbackRate),this.connect()}pause(){if(!1!=3D=3Dthis.hasPlaybackContro=
l)return!0=3D=3D=3Dthis.isPlaying&amp;&amp;(this._progress+=3DMath.max(this=
.context.currentTime-this._startedAt,0)*this.playbackRate,!0=3D=3D=3Dthis.l=
oop&amp;&amp;(this._progress=3Dthis._progress%(this.duration||this.buffer.d=
uration)),this.source.stop(),this.source.onended=3Dnull,this.isPlaying=3D!1=
),this;console.warn("THREE.Audio: this Audio has no playback control.")}sto=
p(){if(!1!=3D=3Dthis.hasPlaybackControl)return this._progress=3D0,this.sour=
ce.stop(),this.source.onended=3Dnull,this.isPlaying=3D!1,this;console.warn(=
"THREE.Audio: this Audio has no playback control.")}connect(){if(this.filte=
rs.length&gt;0){this.source.connect(this.filters[0]);for(let t=3D1,e=3Dthis=
.filters.length;t&lt;e;t++)this.filters[t-1].connect(this.filters[t]);this.=
filters[this.filters.length-1].connect(this.getOutput())}else this.source.c=
onnect(this.getOutput());return this._connected=3D!0,this}disconnect(){if(t=
his.filters.length&gt;0){this.source.disconnect(this.filters[0]);for(let t=
=3D1,e=3Dthis.filters.length;t&lt;e;t++)this.filters[t-1].disconnect(this.f=
ilters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())=
}else this.source.disconnect(this.getOutput());return this._connected=3D!1,=
this}getFilters(){return this.filters}setFilters(t){return t||(t=3D[]),!0=
=3D=3D=3Dthis._connected?(this.disconnect(),this.filters=3Dt.slice(),this.c=
onnect()):this.filters=3Dt.slice(),this}setDetune(t){if(this.detune=3Dt,voi=
d 0!=3D=3Dthis.source.detune)return!0=3D=3D=3Dthis.isPlaying&amp;&amp;this.=
source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),thi=
s}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}se=
tFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(!1!=3D=3D=
this.hasPlaybackControl)return this.playbackRate=3Dt,!0=3D=3D=3Dthis.isPlay=
ing&amp;&amp;this.source.playbackRate.setTargetAtTime(this.playbackRate,thi=
s.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has n=
o playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){=
this.isPlaying=3D!1}getLoop(){return!1=3D=3D=3Dthis.hasPlaybackControl?(con=
sole.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop=
}setLoop(t){if(!1!=3D=3Dthis.hasPlaybackControl)return this.loop=3Dt,!0=3D=
=3D=3Dthis.isPlaying&amp;&amp;(this.source.loop=3Dthis.loop),this;console.w=
arn("THREE.Audio: this Audio has no playback control.")}setLoopStart(t){ret=
urn this.loopStart=3Dt,this}setLoopEnd(t){return this.loopEnd=3Dt,this}getV=
olume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setT=
argetAtTime(t,this.context.currentTime,.01),this}}const Rc=3Dnew Lt,Cc=3Dne=
w At,Pc=3Dnew Lt,Dc=3Dnew Lt;class Ic{constructor(t,e=3D2048){this.analyser=
=3Dt.context.createAnalyser(),this.analyser.fftSize=3De,this.data=3Dnew Uin=
t8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyse=
r)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),=
this.data}getAverageFrequency(){let t=3D0;const e=3Dthis.getFrequencyData()=
;for(let n=3D0;n&lt;e.length;n++)t+=3De[n];return t/e.length}}class Nc{cons=
tructor(t,e,n){let i,r,s;switch(this.binding=3Dt,this.valueSize=3Dn,e){case=
"quaternion":i=3Dthis._slerp,r=3Dthis._slerpAdditive,s=3Dthis._setAdditiveI=
dentityQuaternion,this.buffer=3Dnew Float64Array(6*n),this._workIndex=3D5;b=
reak;case"string":case"bool":i=3Dthis._select,r=3Dthis._select,s=3Dthis._se=
tAdditiveIdentityOther,this.buffer=3Dnew Array(5*n);break;default:i=3Dthis.=
_lerp,r=3Dthis._lerpAdditive,s=3Dthis._setAdditiveIdentityNumeric,this.buff=
er=3Dnew Float64Array(5*n)}this._mixBufferRegion=3Di,this._mixBufferRegionA=
dditive=3Dr,this._setIdentity=3Ds,this._origIndex=3D3,this._addIndex=3D4,th=
is.cumulativeWeight=3D0,this.cumulativeWeightAdditive=3D0,this.useCount=3D0=
,this.referenceCount=3D0}accumulate(t,e){const n=3Dthis.buffer,i=3Dthis.val=
ueSize,r=3Dt*i+i;let s=3Dthis.cumulativeWeight;if(0=3D=3D=3Ds){for(let t=3D=
0;t!=3D=3Di;++t)n[r+t]=3Dn[t];s=3De}else{s+=3De;const t=3De/s;this._mixBuff=
erRegion(n,r,0,t,i)}this.cumulativeWeight=3Ds}accumulateAdditive(t){const e=
=3Dthis.buffer,n=3Dthis.valueSize,i=3Dn*this._addIndex;0=3D=3D=3Dthis.cumul=
ativeWeightAdditive&amp;&amp;this._setIdentity(),this._mixBufferRegionAddit=
ive(e,i,0,t,n),this.cumulativeWeightAdditive+=3Dt}apply(t){const e=3Dthis.v=
alueSize,n=3Dthis.buffer,i=3Dt*e+e,r=3Dthis.cumulativeWeight,s=3Dthis.cumul=
ativeWeightAdditive,a=3Dthis.binding;if(this.cumulativeWeight=3D0,this.cumu=
lativeWeightAdditive=3D0,r&lt;1){const t=3De*this._origIndex;this._mixBuffe=
rRegion(n,i,t,1-r,e)}s&gt;0&amp;&amp;this._mixBufferRegionAdditive(n,i,this=
._addIndex*e,1,e);for(let t=3De,r=3De+e;t!=3D=3Dr;++t)if(n[t]!=3D=3Dn[t+e])=
{a.setValue(n,i);break}}saveOriginalState(){const t=3Dthis.binding,e=3Dthis=
.buffer,n=3Dthis.valueSize,i=3Dn*this._origIndex;t.getValue(e,i);for(let t=
=3Dn,r=3Di;t!=3D=3Dr;++t)e[t]=3De[i+t%n];this._setIdentity(),this.cumulativ=
eWeight=3D0,this.cumulativeWeightAdditive=3D0}restoreOriginalState(){const =
t=3D3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdent=
ityNumeric(){const t=3Dthis._addIndex*this.valueSize,e=3Dt+this.valueSize;f=
or(let n=3Dt;n&lt;e;n++)this.buffer[n]=3D0}_setAdditiveIdentityQuaternion()=
{this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSi=
ze+3]=3D1}_setAdditiveIdentityOther(){const t=3Dthis._origIndex*this.valueS=
ize,e=3Dthis._addIndex*this.valueSize;for(let n=3D0;n&lt;this.valueSize;n++=
)this.buffer[e+n]=3Dthis.buffer[t+n]}_select(t,e,n,i,r){if(i&gt;=3D.5)for(l=
et i=3D0;i!=3D=3Dr;++i)t[e+i]=3Dt[n+i]}_slerp(t,e,n,i){At.slerpFlat(t,e,t,e=
,t,n,i)}_slerpAdditive(t,e,n,i,r){const s=3Dthis._workIndex*r;At.multiplyQu=
aternionsFlat(t,s,t,e,t,n),At.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){con=
st s=3D1-i;for(let a=3D0;a!=3D=3Dr;++a){const r=3De+a;t[r]=3Dt[r]*s+t[n+a]*=
i}}_lerpAdditive(t,e,n,i,r){for(let s=3D0;s!=3D=3Dr;++s){const r=3De+s;t[r]=
=3Dt[r]+t[n+s]*i}}}const Bc=3D"\\[\\]\\.:\\/",zc=3Dnew RegExp("[\\[\\]\\.:\=
\/]","g"),Fc=3D"[^\\[\\]\\.:\\/]",Oc=3D"[^"+Bc.replace("\\.","")+"]",Hc=3D/=
((?:WC+[\/:])*)/.source.replace("WC",Fc),Gc=3D/(WCOD+)?/.source.replace("WC=
OD",Oc),Uc=3D/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),kc=3D/\.(W=
C+)(?:\[(.+)\])?/.source.replace("WC",Fc),Vc=3Dnew RegExp("^"+Hc+Gc+Uc+kc+"=
$"),Wc=3D["material","materials","bones"];class jc{constructor(t,e,n){this.=
path=3De,this.parsedPath=3Dn||jc.parseTrackName(e),this.node=3Djc.findNode(=
t,this.parsedPath.nodeName)||t,this.rootNode=3Dt,this.getValue=3Dthis._getV=
alue_unbound,this.setValue=3Dthis._setValue_unbound}static create(t,e,n){re=
turn t&amp;&amp;t.isAnimationObjectGroup?new jc.Composite(t,e,n):new jc(t,e=
,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zc,"")}s=
tatic parseTrackName(t){const e=3DVc.exec(t);if(!e)throw new Error("Propert=
yBinding: Cannot parse trackName: "+t);const n=3D{nodeName:e[2],objectName:=
e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=3Dn.nodeName&=
amp;&amp;n.nodeName.lastIndexOf(".");if(void 0!=3D=3Di&amp;&amp;-1!=3D=3Di)=
{const t=3Dn.nodeName.substring(i+1);-1!=3D=3DWc.indexOf(t)&amp;&amp;(n.nod=
eName=3Dn.nodeName.substring(0,i),n.objectName=3Dt)}if(null=3D=3D=3Dn.prope=
rtyName||0=3D=3D=3Dn.propertyName.length)throw new Error("PropertyBinding: =
can not parse propertyName from trackName: "+t);return n}static findNode(t,=
e){if(!e||""=3D=3D=3De||"."=3D=3D=3De||-1=3D=3D=3De||e=3D=3D=3Dt.name||e=3D=
=3D=3Dt.uuid)return t;if(t.skeleton){const n=3Dt.skeleton.getBoneByName(e);=
if(void 0!=3D=3Dn)return n}if(t.children){const n=3Dfunction(t){for(let i=
=3D0;i&lt;t.length;i++){const r=3Dt[i];if(r.name=3D=3D=3De||r.uuid=3D=3D=3D=
e)return r;const s=3Dn(r.children);if(s)return s}return null},i=3Dn(t.child=
ren);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailab=
le(){}_getValue_direct(t,e){t[e]=3Dthis.node[this.propertyName]}_getValue_a=
rray(t,e){const n=3Dthis.resolvedProperty;for(let i=3D0,r=3Dn.length;i!=3D=
=3Dr;++i)t[e++]=3Dn[i]}_getValue_arrayElement(t,e){t[e]=3Dthis.resolvedProp=
erty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArr=
ay(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=3Dt[e]}_=
setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=3D=
t[e],this.targetObject.needsUpdate=3D!0}_setValue_direct_setMatrixWorldNeed=
sUpdate(t,e){this.targetObject[this.propertyName]=3Dt[e],this.targetObject.=
matrixWorldNeedsUpdate=3D!0}_setValue_array(t,e){const n=3Dthis.resolvedPro=
perty;for(let i=3D0,r=3Dn.length;i!=3D=3Dr;++i)n[i]=3Dt[e++]}_setValue_arra=
y_setNeedsUpdate(t,e){const n=3Dthis.resolvedProperty;for(let i=3D0,r=3Dn.l=
ength;i!=3D=3Dr;++i)n[i]=3Dt[e++];this.targetObject.needsUpdate=3D!0}_setVa=
lue_array_setMatrixWorldNeedsUpdate(t,e){const n=3Dthis.resolvedProperty;fo=
r(let i=3D0,r=3Dn.length;i!=3D=3Dr;++i)n[i]=3Dt[e++];this.targetObject.matr=
ixWorldNeedsUpdate=3D!0}_setValue_arrayElement(t,e){this.resolvedProperty[t=
his.propertyIndex]=3Dt[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.r=
esolvedProperty[this.propertyIndex]=3Dt[e],this.targetObject.needsUpdate=3D=
!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedPrope=
rty[this.propertyIndex]=3Dt[e],this.targetObject.matrixWorldNeedsUpdate=3D!=
0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_f=
romArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targ=
etObject.needsUpdate=3D!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e=
){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUp=
date=3D!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_u=
nbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=3Dthis.node;const e=
=3Dthis.parsedPath,n=3De.objectName,i=3De.propertyName;let r=3De.propertyIn=
dex;if(t||(t=3Djc.findNode(this.rootNode,e.nodeName)||this.rootNode,this.no=
de=3Dt),this.getValue=3Dthis._getValue_unavailable,this.setValue=3Dthis._se=
tValue_unavailable,!t)return void console.error("THREE.PropertyBinding: Try=
ing to update node for track: "+this.path+" but it wasn't found.");if(n){le=
t i=3De.objectIndex;switch(n){case"materials":if(!t.material)return void co=
nsole.error("THREE.PropertyBinding: Can not bind to material as node does n=
ot have a material.",this);if(!t.material.materials)return void console.err=
or("THREE.PropertyBinding: Can not bind to material.materials as node.mater=
ial does not have a materials array.",this);t=3Dt.material.materials;break;=
case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding=
: Can not bind to bones as node does not have a skeleton.",this);t=3Dt.skel=
eton.bones;for(let e=3D0;e&lt;t.length;e++)if(t[e].name=3D=3D=3Di){i=3De;br=
eak}break;default:if(void 0=3D=3D=3Dt[n])return void console.error("THREE.P=
ropertyBinding: Can not bind to objectName of node undefined.",this);t=3Dt[=
n]}if(void 0!=3D=3Di){if(void 0=3D=3D=3Dt[i])return void console.error("THR=
EE.PropertyBinding: Trying to bind to objectIndex of objectName, but is und=
efined.",this,t);t=3Dt[i]}}const s=3Dt[i];if(void 0=3D=3D=3Ds){const n=3De.=
nodeName;return void console.error("THREE.PropertyBinding: Trying to update=
 property for track: "+n+"."+i+" but it wasn't found.",t)}let a=3Dthis.Vers=
ioning.None;this.targetObject=3Dt,void 0!=3D=3Dt.needsUpdate?a=3Dthis.Versi=
oning.NeedsUpdate:void 0!=3D=3Dt.matrixWorldNeedsUpdate&amp;&amp;(a=3Dthis.=
Versioning.MatrixWorldNeedsUpdate);let o=3Dthis.BindingType.Direct;if(void =
0!=3D=3Dr){if("morphTargetInfluences"=3D=3D=3Di){if(!t.geometry)return void=
 console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluence=
s because node does not have a geometry.",this);if(!t.geometry.isBufferGeom=
etry)return void console.error("THREE.PropertyBinding: Can not bind to morp=
hTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",thi=
s);if(!t.geometry.morphAttributes)return void console.error("THREE.Property=
Binding: Can not bind to morphTargetInfluences because node does not have a=
 geometry.morphAttributes.",this);void 0!=3D=3Dt.morphTargetDictionary[r]&a=
mp;&amp;(r=3Dt.morphTargetDictionary[r])}o=3Dthis.BindingType.ArrayElement,=
this.resolvedProperty=3Ds,this.propertyIndex=3Dr}else void 0!=3D=3Ds.fromAr=
ray&amp;&amp;void 0!=3D=3Ds.toArray?(o=3Dthis.BindingType.HasFromToArray,th=
is.resolvedProperty=3Ds):Array.isArray(s)?(o=3Dthis.BindingType.EntireArray=
,this.resolvedProperty=3Ds):this.propertyName=3Di;this.getValue=3Dthis.Gett=
erByBindingType[o],this.setValue=3Dthis.SetterByBindingTypeAndVersioning[o]=
[a]}unbind(){this.node=3Dnull,this.getValue=3Dthis._getValue_unbound,this.s=
etValue=3Dthis._setValue_unbound}}jc.Composite=3Dclass{constructor(t,e,n){c=
onst i=3Dn||jc.parseTrackName(e);this._targetGroup=3Dt,this._bindings=3Dt.s=
ubscribe_(e,i)}getValue(t,e){this.bind();const n=3Dthis._targetGroup.nCache=
dObjects_,i=3Dthis._bindings[n];void 0!=3D=3Di&amp;&amp;i.getValue(t,e)}set=
Value(t,e){const n=3Dthis._bindings;for(let i=3Dthis._targetGroup.nCachedOb=
jects_,r=3Dn.length;i!=3D=3Dr;++i)n[i].setValue(t,e)}bind(){const t=3Dthis.=
_bindings;for(let e=3Dthis._targetGroup.nCachedObjects_,n=3Dt.length;e!=3D=
=3Dn;++e)t[e].bind()}unbind(){const t=3Dthis._bindings;for(let e=3Dthis._ta=
rgetGroup.nCachedObjects_,n=3Dt.length;e!=3D=3Dn;++e)t[e].unbind()}},jc.pro=
totype.BindingType=3D{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:=
3},jc.prototype.Versioning=3D{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2=
},jc.prototype.GetterByBindingType=3D[jc.prototype._getValue_direct,jc.prot=
otype._getValue_array,jc.prototype._getValue_arrayElement,jc.prototype._get=
Value_toArray],jc.prototype.SetterByBindingTypeAndVersioning=3D[[jc.prototy=
pe._setValue_direct,jc.prototype._setValue_direct_setNeedsUpdate,jc.prototy=
pe._setValue_direct_setMatrixWorldNeedsUpdate],[jc.prototype._setValue_arra=
y,jc.prototype._setValue_array_setNeedsUpdate,jc.prototype._setValue_array_=
setMatrixWorldNeedsUpdate],[jc.prototype._setValue_arrayElement,jc.prototyp=
e._setValue_arrayElement_setNeedsUpdate,jc.prototype._setValue_arrayElement=
_setMatrixWorldNeedsUpdate],[jc.prototype._setValue_fromArray,jc.prototype.=
_setValue_fromArray_setNeedsUpdate,jc.prototype._setValue_fromArray_setMatr=
ixWorldNeedsUpdate]];class qc{constructor(){this.uuid=3Dct(),this._objects=
=3DArray.prototype.slice.call(arguments),this.nCachedObjects_=3D0;const t=
=3D{};this._indicesByUUID=3Dt;for(let e=3D0,n=3Darguments.length;e!=3D=3Dn;=
++e)t[arguments[e].uuid]=3De;this._paths=3D[],this._parsedPaths=3D[],this._=
bindings=3D[],this._bindingsIndicesByPath=3D{};const e=3Dthis;this.stats=3D=
{objects:{get total(){return e._objects.length},get inUse(){return this.tot=
al-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}=
add(){const t=3Dthis._objects,e=3Dthis._indicesByUUID,n=3Dthis._paths,i=3Dt=
his._parsedPaths,r=3Dthis._bindings,s=3Dr.length;let a,o=3Dt.length,l=3Dthi=
s.nCachedObjects_;for(let c=3D0,h=3Darguments.length;c!=3D=3Dh;++c){const h=
=3Darguments[c],u=3Dh.uuid;let d=3De[u];if(void 0=3D=3D=3Dd){d=3Do++,e[u]=
=3Dd,t.push(h);for(let t=3D0,e=3Ds;t!=3D=3De;++t)r[t].push(new jc(h,n[t],i[=
t]))}else if(d&lt;l){a=3Dt[d];const o=3D--l,c=3Dt[o];e[c.uuid]=3Dd,t[d]=3Dc=
,e[u]=3Do,t[o]=3Dh;for(let t=3D0,e=3Ds;t!=3D=3De;++t){const e=3Dr[t],s=3De[=
o];let a=3De[d];e[d]=3Ds,void 0=3D=3D=3Da&amp;&amp;(a=3Dnew jc(h,n[t],i[t])=
),e[o]=3Da}}else t[d]!=3D=3Da&amp;&amp;console.error("THREE.AnimationObject=
Group: Different objects with the same UUID detected. Clean the caches or r=
ecreate your infrastructure when reloading scenes.")}this.nCachedObjects_=
=3Dl}remove(){const t=3Dthis._objects,e=3Dthis._indicesByUUID,n=3Dthis._bin=
dings,i=3Dn.length;let r=3Dthis.nCachedObjects_;for(let s=3D0,a=3Darguments=
.length;s!=3D=3Da;++s){const a=3Darguments[s],o=3Da.uuid,l=3De[o];if(void 0=
!=3D=3Dl&amp;&amp;l&gt;=3Dr){const s=3Dr++,c=3Dt[s];e[c.uuid]=3Dl,t[l]=3Dc,=
e[o]=3Ds,t[s]=3Da;for(let t=3D0,e=3Di;t!=3D=3De;++t){const e=3Dn[t],i=3De[s=
],r=3De[l];e[l]=3Di,e[s]=3Dr}}}this.nCachedObjects_=3Dr}uncache(){const t=
=3Dthis._objects,e=3Dthis._indicesByUUID,n=3Dthis._bindings,i=3Dn.length;le=
t r=3Dthis.nCachedObjects_,s=3Dt.length;for(let a=3D0,o=3Darguments.length;=
a!=3D=3Do;++a){const o=3Darguments[a].uuid,l=3De[o];if(void 0!=3D=3Dl)if(de=
lete e[o],l&lt;r){const a=3D--r,o=3Dt[a],c=3D--s,h=3Dt[c];e[o.uuid]=3Dl,t[l=
]=3Do,e[h.uuid]=3Da,t[a]=3Dh,t.pop();for(let t=3D0,e=3Di;t!=3D=3De;++t){con=
st e=3Dn[t],i=3De[a],r=3De[c];e[l]=3Di,e[a]=3Dr,e.pop()}}else{const r=3D--s=
,a=3Dt[r];r&gt;0&amp;&amp;(e[a.uuid]=3Dl),t[l]=3Da,t.pop();for(let t=3D0,e=
=3Di;t!=3D=3De;++t){const e=3Dn[t];e[l]=3De[r],e.pop()}}}this.nCachedObject=
s_=3Dr}subscribe_(t,e){const n=3Dthis._bindingsIndicesByPath;let i=3Dn[t];c=
onst r=3Dthis._bindings;if(void 0!=3D=3Di)return r[i];const s=3Dthis._paths=
,a=3Dthis._parsedPaths,o=3Dthis._objects,l=3Do.length,c=3Dthis.nCachedObjec=
ts_,h=3Dnew Array(l);i=3Dr.length,n[t]=3Di,s.push(t),a.push(e),r.push(h);fo=
r(let n=3Dc,i=3Do.length;n!=3D=3Di;++n){const i=3Do[n];h[n]=3Dnew jc(i,t,e)=
}return h}unsubscribe_(t){const e=3Dthis._bindingsIndicesByPath,n=3De[t];if=
(void 0!=3D=3Dn){const i=3Dthis._paths,r=3Dthis._parsedPaths,s=3Dthis._bind=
ings,a=3Ds.length-1,o=3Ds[a];e[t[a]]=3Dn,s[n]=3Do,s.pop(),r[n]=3Dr[a],r.pop=
(),i[n]=3Di[a],i.pop()}}}qc.prototype.isAnimationObjectGroup=3D!0;class Xc{=
constructor(t,e,n=3Dnull,i=3De.blendMode){this._mixer=3Dt,this._clip=3De,th=
is._localRoot=3Dn,this.blendMode=3Di;const r=3De.tracks,s=3Dr.length,a=3Dne=
w Array(s),o=3D{endingStart:k,endingEnd:k};for(let t=3D0;t!=3D=3Ds;++t){con=
st e=3Dr[t].createInterpolant(null);a[t]=3De,e.settings=3Do}this._interpola=
ntSettings=3Do,this._interpolants=3Da,this._propertyBindings=3Dnew Array(s)=
,this._cacheIndex=3Dnull,this._byClipCacheIndex=3Dnull,this._timeScaleInter=
polant=3Dnull,this._weightInterpolant=3Dnull,this.loop=3D2201,this._loopCou=
nt=3D-1,this._startTime=3Dnull,this.time=3D0,this.timeScale=3D1,this._effec=
tiveTimeScale=3D1,this.weight=3D1,this._effectiveWeight=3D1,this.repetition=
s=3D1/0,this.paused=3D!1,this.enabled=3D!0,this.clampWhenFinished=3D!1,this=
.zeroSlopeAtStart=3D!0,this.zeroSlopeAtEnd=3D!0}play(){return this._mixer._=
activateAction(this),this}stop(){return this._mixer._deactivateAction(this)=
,this.reset()}reset(){return this.paused=3D!1,this.enabled=3D!0,this.time=
=3D0,this._loopCount=3D-1,this._startTime=3Dnull,this.stopFading().stopWarp=
ing()}isRunning(){return this.enabled&amp;&amp;!this.paused&amp;&amp;0!=3D=
=3Dthis.timeScale&amp;&amp;null=3D=3D=3Dthis._startTime&amp;&amp;this._mixe=
r._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(th=
is)}startAt(t){return this._startTime=3Dt,this}setLoop(t,e){return this.loo=
p=3Dt,this.repetitions=3De,this}setEffectiveWeight(t){return this.weight=3D=
t,this._effectiveWeight=3Dthis.enabled?t:0,this.stopFading()}getEffectiveWe=
ight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t=
,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if=
(t.fadeOut(e),this.fadeIn(e),n){const n=3Dthis._clip.duration,i=3Dt._clip.d=
uration,r=3Di/n,s=3Dn/i;t.warp(1,r,e),this.warp(s,1,e)}return this}crossFad=
eTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=3Dthis._we=
ightInterpolant;return null!=3D=3Dt&amp;&amp;(this._weightInterpolant=3Dnul=
l,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t)=
{return this.timeScale=3Dt,this._effectiveTimeScale=3Dthis.paused?0:t,this.=
stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDu=
ration(t){return this.timeScale=3Dthis._clip.duration/t,this.stopWarping()}=
syncWith(t){return this.time=3Dt.time,this.timeScale=3Dt.timeScale,this.sto=
pWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,=
n){const i=3Dthis._mixer,r=3Di.time,s=3Dthis.timeScale;let a=3Dthis._timeSc=
aleInterpolant;null=3D=3D=3Da&amp;&amp;(a=3Di._lendControlInterpolant(),thi=
s._timeScaleInterpolant=3Da);const o=3Da.parameterPositions,l=3Da.sampleVal=
ues;return o[0]=3Dr,o[1]=3Dr+n,l[0]=3Dt/s,l[1]=3De/s,this}stopWarping(){con=
st t=3Dthis._timeScaleInterpolant;return null!=3D=3Dt&amp;&amp;(this._timeS=
caleInterpolant=3Dnull,this._mixer._takeBackControlInterpolant(t)),this}get=
Mixer(){return this._mixer}getClip(){return this._clip}getRoot(){return thi=
s._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return vo=
id this._updateWeight(t);const r=3Dthis._startTime;if(null!=3D=3Dr){const i=
=3D(t-r)*n;if(i&lt;0||0=3D=3D=3Dn)return;this._startTime=3Dnull,e=3Dn*i}e*=
=3Dthis._updateTimeScale(t);const s=3Dthis._updateTime(e),a=3Dthis._updateW=
eight(t);if(a&gt;0){const t=3Dthis._interpolants,e=3Dthis._propertyBindings=
;switch(this.blendMode){case q:for(let n=3D0,i=3Dt.length;n!=3D=3Di;++n)t[n=
].evaluate(s),e[n].accumulateAdditive(a);break;case j:default:for(let n=3D0=
,r=3Dt.length;n!=3D=3Dr;++n)t[n].evaluate(s),e[n].accumulate(i,a)}}}_update=
Weight(t){let e=3D0;if(this.enabled){e=3Dthis.weight;const n=3Dthis._weight=
Interpolant;if(null!=3D=3Dn){const i=3Dn.evaluate(t)[0];e*=3Di,t&gt;n.param=
eterPositions[1]&amp;&amp;(this.stopFading(),0=3D=3D=3Di&amp;&amp;(this.ena=
bled=3D!1))}}return this._effectiveWeight=3De,e}_updateTimeScale(t){let e=
=3D0;if(!this.paused){e=3Dthis.timeScale;const n=3Dthis._timeScaleInterpola=
nt;if(null!=3D=3Dn){e*=3Dn.evaluate(t)[0],t&gt;n.parameterPositions[1]&amp;=
&amp;(this.stopWarping(),0=3D=3D=3De?this.paused=3D!0:this.timeScale=3De)}}=
return this._effectiveTimeScale=3De,e}_updateTime(t){const e=3Dthis._clip.d=
uration,n=3Dthis.loop;let i=3Dthis.time+t,r=3Dthis._loopCount;const s=3D220=
2=3D=3D=3Dn;if(0=3D=3D=3Dt)return-1=3D=3D=3Dr?i:s&amp;&amp;1=3D=3D(1&amp;r)=
?e-i:i;if(2200=3D=3D=3Dn){-1=3D=3D=3Dr&amp;&amp;(this._loopCount=3D0,this._=
setEndings(!0,!0,!1));t:{if(i&gt;=3De)i=3De;else{if(!(i&lt;0)){this.time=3D=
i;break t}i=3D0}this.clampWhenFinished?this.paused=3D!0:this.enabled=3D!1,t=
his.time=3Di,this._mixer.dispatchEvent({type:"finished",action:this,directi=
on:t&lt;0?-1:1})}}else{if(-1=3D=3D=3Dr&amp;&amp;(t&gt;=3D0?(r=3D0,this._set=
Endings(!0,0=3D=3D=3Dthis.repetitions,s)):this._setEndings(0=3D=3D=3Dthis.r=
epetitions,!0,s)),i&gt;=3De||i&lt;0){const n=3DMath.floor(i/e);i-=3De*n,r+=
=3DMath.abs(n);const a=3Dthis.repetitions-r;if(a&lt;=3D0)this.clampWhenFini=
shed?this.paused=3D!0:this.enabled=3D!1,i=3Dt&gt;0?e:0,this.time=3Di,this._=
mixer.dispatchEvent({type:"finished",action:this,direction:t&gt;0?1:-1});el=
se{if(1=3D=3D=3Da){const e=3Dt&lt;0;this._setEndings(e,!e,s)}else this._set=
Endings(!1,!1,s);this._loopCount=3Dr,this.time=3Di,this._mixer.dispatchEven=
t({type:"loop",action:this,loopDelta:n})}}else this.time=3Di;if(s&amp;&amp;=
1=3D=3D(1&amp;r))return e-i}return i}_setEndings(t,e,n){const i=3Dthis._int=
erpolantSettings;n?(i.endingStart=3DV,i.endingEnd=3DV):(i.endingStart=3Dt?t=
his.zeroSlopeAtStart?V:k:W,i.endingEnd=3De?this.zeroSlopeAtEnd?V:k:W)}_sche=
duleFading(t,e,n){const i=3Dthis._mixer,r=3Di.time;let s=3Dthis._weightInte=
rpolant;null=3D=3D=3Ds&amp;&amp;(s=3Di._lendControlInterpolant(),this._weig=
htInterpolant=3Ds);const a=3Ds.parameterPositions,o=3Ds.sampleValues;return=
 a[0]=3Dr,o[0]=3De,a[1]=3Dr+t,o[1]=3Dn,this}}class Yc extends rt{constructo=
r(t){super(),this._root=3Dt,this._initMemoryManager(),this._accuIndex=3D0,t=
his.time=3D0,this.timeScale=3D1}_bindAction(t,e){const n=3Dt._localRoot||th=
is._root,i=3Dt._clip.tracks,r=3Di.length,s=3Dt._propertyBindings,a=3Dt._int=
erpolants,o=3Dn.uuid,l=3Dthis._bindingsByRootAndName;let c=3Dl[o];void 0=3D=
=3D=3Dc&amp;&amp;(c=3D{},l[o]=3Dc);for(let t=3D0;t!=3D=3Dr;++t){const r=3Di=
[t],l=3Dr.name;let h=3Dc[l];if(void 0!=3D=3Dh)s[t]=3Dh;else{if(h=3Ds[t],voi=
d 0!=3D=3Dh){null=3D=3D=3Dh._cacheIndex&amp;&amp;(++h.referenceCount,this._=
addInactiveBinding(h,o,l));continue}const i=3De&amp;&amp;e._propertyBinding=
s[t].binding.parsedPath;h=3Dnew Nc(jc.create(n,l,i),r.ValueTypeName,r.getVa=
lueSize()),++h.referenceCount,this._addInactiveBinding(h,o,l),s[t]=3Dh}a[t]=
.resultBuffer=3Dh.buffer}}_activateAction(t){if(!this._isActiveAction(t)){i=
f(null=3D=3D=3Dt._cacheIndex){const e=3D(t._localRoot||this._root).uuid,n=
=3Dt._clip.uuid,i=3Dthis._actionsByClip[n];this._bindAction(t,i&amp;&amp;i.=
knownActions[0]),this._addInactiveAction(t,n,e)}const e=3Dt._propertyBindin=
gs;for(let t=3D0,n=3De.length;t!=3D=3Dn;++t){const n=3De[t];0=3D=3Dn.useCou=
nt++&amp;&amp;(this._lendBinding(n),n.saveOriginalState())}this._lendAction=
(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=3Dt._property=
Bindings;for(let t=3D0,n=3De.length;t!=3D=3Dn;++t){const n=3De[t];0=3D=3D--=
n.useCount&amp;&amp;(n.restoreOriginalState(),this._takeBackBinding(n))}thi=
s._takeBackAction(t)}}_initMemoryManager(){this._actions=3D[],this._nActive=
Actions=3D0,this._actionsByClip=3D{},this._bindings=3D[],this._nActiveBindi=
ngs=3D0,this._bindingsByRootAndName=3D{},this._controlInterpolants=3D[],thi=
s._nActiveControlInterpolants=3D0;const t=3Dthis;this.stats=3D{actions:{get=
 total(){return t._actions.length},get inUse(){return t._nActiveActions}},b=
indings:{get total(){return t._bindings.length},get inUse(){return t._nActi=
veBindings}},controlInterpolants:{get total(){return t._controlInterpolants=
.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveActio=
n(t){const e=3Dt._cacheIndex;return null!=3D=3De&amp;&amp;e&lt;this._nActiv=
eActions}_addInactiveAction(t,e,n){const i=3Dthis._actions,r=3Dthis._action=
sByClip;let s=3Dr[e];if(void 0=3D=3D=3Ds)s=3D{knownActions:[t],actionByRoot=
:{}},t._byClipCacheIndex=3D0,r[e]=3Ds;else{const e=3Ds.knownActions;t._byCl=
ipCacheIndex=3De.length,e.push(t)}t._cacheIndex=3Di.length,i.push(t),s.acti=
onByRoot[n]=3Dt}_removeInactiveAction(t){const e=3Dthis._actions,n=3De[e.le=
ngth-1],i=3Dt._cacheIndex;n._cacheIndex=3Di,e[i]=3Dn,e.pop(),t._cacheIndex=
=3Dnull;const r=3Dt._clip.uuid,s=3Dthis._actionsByClip,a=3Ds[r],o=3Da.known=
Actions,l=3Do[o.length-1],c=3Dt._byClipCacheIndex;l._byClipCacheIndex=3Dc,o=
[c]=3Dl,o.pop(),t._byClipCacheIndex=3Dnull;delete a.actionByRoot[(t._localR=
oot||this._root).uuid],0=3D=3D=3Do.length&amp;&amp;delete s[r],this._remove=
InactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=3D=
t._propertyBindings;for(let t=3D0,n=3De.length;t!=3D=3Dn;++t){const n=3De[t=
];0=3D=3D--n.referenceCount&amp;&amp;this._removeInactiveBinding(n)}}_lendA=
ction(t){const e=3Dthis._actions,n=3Dt._cacheIndex,i=3Dthis._nActiveActions=
++,r=3De[i];t._cacheIndex=3Di,e[i]=3Dt,r._cacheIndex=3Dn,e[n]=3Dr}_takeBack=
Action(t){const e=3Dthis._actions,n=3Dt._cacheIndex,i=3D--this._nActiveActi=
ons,r=3De[i];t._cacheIndex=3Di,e[i]=3Dt,r._cacheIndex=3Dn,e[n]=3Dr}_addInac=
tiveBinding(t,e,n){const i=3Dthis._bindingsByRootAndName,r=3Dthis._bindings=
;let s=3Di[e];void 0=3D=3D=3Ds&amp;&amp;(s=3D{},i[e]=3Ds),s[n]=3Dt,t._cache=
Index=3Dr.length,r.push(t)}_removeInactiveBinding(t){const e=3Dthis._bindin=
gs,n=3Dt.binding,i=3Dn.rootNode.uuid,r=3Dn.path,s=3Dthis._bindingsByRootAnd=
Name,a=3Ds[i],o=3De[e.length-1],l=3Dt._cacheIndex;o._cacheIndex=3Dl,e[l]=3D=
o,e.pop(),delete a[r],0=3D=3D=3DObject.keys(a).length&amp;&amp;delete s[i]}=
_lendBinding(t){const e=3Dthis._bindings,n=3Dt._cacheIndex,i=3Dthis._nActiv=
eBindings++,r=3De[i];t._cacheIndex=3Di,e[i]=3Dt,r._cacheIndex=3Dn,e[n]=3Dr}=
_takeBackBinding(t){const e=3Dthis._bindings,n=3Dt._cacheIndex,i=3D--this._=
nActiveBindings,r=3De[i];t._cacheIndex=3Di,e[i]=3Dt,r._cacheIndex=3Dn,e[n]=
=3Dr}_lendControlInterpolant(){const t=3Dthis._controlInterpolants,e=3Dthis=
._nActiveControlInterpolants++;let n=3Dt[e];return void 0=3D=3D=3Dn&amp;&am=
p;(n=3Dnew qo(new Float32Array(2),new Float32Array(2),1,this._controlInterp=
olantsResultBuffer),n.__cacheIndex=3De,t[e]=3Dn),n}_takeBackControlInterpol=
ant(t){const e=3Dthis._controlInterpolants,n=3Dt.__cacheIndex,i=3D--this._n=
ActiveControlInterpolants,r=3De[i];t.__cacheIndex=3Di,e[i]=3Dt,r.__cacheInd=
ex=3Dn,e[n]=3Dr}clipAction(t,e,n){const i=3De||this._root,r=3Di.uuid;let s=
=3D"string"=3D=3Dtypeof t?nl.findByName(i,t):t;const a=3Dnull!=3D=3Ds?s.uui=
d:t,o=3Dthis._actionsByClip[a];let l=3Dnull;if(void 0=3D=3D=3Dn&amp;&amp;(n=
=3Dnull!=3D=3Ds?s.blendMode:j),void 0!=3D=3Do){const t=3Do.actionByRoot[r];=
if(void 0!=3D=3Dt&amp;&amp;t.blendMode=3D=3D=3Dn)return t;l=3Do.knownAction=
s[0],null=3D=3D=3Ds&amp;&amp;(s=3Dl._clip)}if(null=3D=3D=3Ds)return null;co=
nst c=3Dnew Xc(this,s,e,n);return this._bindAction(c,l),this._addInactiveAc=
tion(c,a,r),c}existingAction(t,e){const n=3De||this._root,i=3Dn.uuid,r=3D"s=
tring"=3D=3Dtypeof t?nl.findByName(n,t):t,s=3Dr?r.uuid:t,a=3Dthis._actionsB=
yClip[s];return void 0!=3D=3Da&amp;&amp;a.actionByRoot[i]||null}stopAllActi=
on(){const t=3Dthis._actions;for(let e=3Dthis._nActiveActions-1;e&gt;=3D0;-=
-e)t[e].stop();return this}update(t){t*=3Dthis.timeScale;const e=3Dthis._ac=
tions,n=3Dthis._nActiveActions,i=3Dthis.time+=3Dt,r=3DMath.sign(t),s=3Dthis=
._accuIndex^=3D1;for(let a=3D0;a!=3D=3Dn;++a){e[a]._update(i,t,r,s)}const a=
=3Dthis._bindings,o=3Dthis._nActiveBindings;for(let t=3D0;t!=3D=3Do;++t)a[t=
].apply(s);return this}setTime(t){this.time=3D0;for(let t=3D0;t&lt;this._ac=
tions.length;t++)this._actions[t].time=3D0;return this.update(t)}getRoot(){=
return this._root}uncacheClip(t){const e=3Dthis._actions,n=3Dt.uuid,i=3Dthi=
s._actionsByClip,r=3Di[n];if(void 0!=3D=3Dr){const t=3Dr.knownActions;for(l=
et n=3D0,i=3Dt.length;n!=3D=3Di;++n){const i=3Dt[n];this._deactivateAction(=
i);const r=3Di._cacheIndex,s=3De[e.length-1];i._cacheIndex=3Dnull,i._byClip=
CacheIndex=3Dnull,s._cacheIndex=3Dr,e[r]=3Ds,e.pop(),this._removeInactiveBi=
ndingsForAction(i)}delete i[n]}}uncacheRoot(t){const e=3Dt.uuid,n=3Dthis._a=
ctionsByClip;for(const t in n){const i=3Dn[t].actionByRoot[e];void 0!=3D=3D=
i&amp;&amp;(this._deactivateAction(i),this._removeInactiveAction(i))}const =
i=3Dthis._bindingsByRootAndName[e];if(void 0!=3D=3Di)for(const t in i){cons=
t e=3Di[t];e.restoreOriginalState(),this._removeInactiveBinding(e)}}uncache=
Action(t,e){const n=3Dthis.existingAction(t,e);null!=3D=3Dn&amp;&amp;(this.=
_deactivateAction(n),this._removeInactiveAction(n))}}Yc.prototype._controlI=
nterpolantsResultBuffer=3Dnew Float32Array(1);class Zc{constructor(t){"stri=
ng"=3D=3Dtypeof t&amp;&amp;(console.warn("THREE.Uniform: Type parameter is =
no longer needed."),t=3Darguments[1]),this.value=3Dt}clone(){return new Zc(=
void 0=3D=3D=3Dthis.value.clone?this.value:this.value.clone())}}class Jc ex=
tends Es{constructor(t,e,n=3D1){super(t,e),this.meshPerAttribute=3Dn||1}cop=
y(t){return super.copy(t),this.meshPerAttribute=3Dt.meshPerAttribute,this}c=
lone(t){const e=3Dsuper.clone(t);return e.meshPerAttribute=3Dthis.meshPerAt=
tribute,e}toJSON(t){const e=3Dsuper.toJSON(t);return e.isInstancedInterleav=
edBuffer=3D!0,e.meshPerAttribute=3Dthis.meshPerAttribute,e}}Jc.prototype.is=
InstancedInterleavedBuffer=3D!0;class Qc{constructor(t,e,n,i,r){this.buffer=
=3Dt,this.type=3De,this.itemSize=3Dn,this.elementSize=3Di,this.count=3Dr,th=
is.version=3D0}set needsUpdate(t){!0=3D=3D=3Dt&amp;&amp;this.version++}setB=
uffer(t){return this.buffer=3Dt,this}setType(t,e){return this.type=3Dt,this=
.elementSize=3De,this}setItemSize(t){return this.itemSize=3Dt,this}setCount=
(t){return this.count=3Dt,this}}Qc.prototype.isGLBufferAttribute=3D!0;funct=
ion Kc(t,e){return t.distance-e.distance}function $c(t,e,n,i){if(t.layers.t=
est(e.layers)&amp;&amp;t.raycast(e,n),!0=3D=3D=3Di){const i=3Dt.children;fo=
r(let t=3D0,r=3Di.length;t&lt;r;t++)$c(i[t],e,n,!0)}}const th=3Dnew vt;clas=
s eh{constructor(t=3Dnew vt(1/0,1/0),e=3Dnew vt(-1/0,-1/0)){this.min=3Dt,th=
is.max=3De}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPo=
ints(t){this.makeEmpty();for(let e=3D0,n=3Dt.length;e&lt;n;e++)this.expandB=
yPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=3Dth.copy(e).mul=
tiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this=
}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.co=
py(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=3Dthis.mi=
n.y=3D1/0,this.max.x=3Dthis.max.y=3D-1/0,this}isEmpty(){return this.max.x&l=
t;this.min.x||this.max.y&lt;this.min.y}getCenter(t){return void 0=3D=3D=3Dt=
&amp;&amp;(console.warn("THREE.Box2: .getCenter() target is now required"),=
t=3Dnew vt),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multi=
plyScalar(.5)}getSize(t){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("TH=
REE.Box2: .getSize() target is now required"),t=3Dnew vt),this.isEmpty()?t.=
set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.m=
in(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.ma=
x.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addS=
calar(t),this}containsPoint(t){return!(t.x&lt;this.min.x||t.x&gt;this.max.x=
||t.y&lt;this.min.y||t.y&gt;this.max.y)}containsBox(t){return this.min.x&lt=
;=3Dt.min.x&amp;&amp;t.max.x&lt;=3Dthis.max.x&amp;&amp;this.min.y&lt;=3Dt.m=
in.y&amp;&amp;t.max.y&lt;=3Dthis.max.y}getParameter(t,e){return void 0=3D=
=3D=3De&amp;&amp;(console.warn("THREE.Box2: .getParameter() target is now r=
equired"),e=3Dnew vt),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-t=
his.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x&lt;thi=
s.min.x||t.min.x&gt;this.max.x||t.max.y&lt;this.min.y||t.min.y&gt;this.max.=
y)}clampPoint(t,e){return void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Bo=
x2: .clampPoint() target is now required"),e=3Dnew vt),e.copy(t).clamp(this=
.min,this.max)}distanceToPoint(t){return th.copy(t).clamp(this.min,this.max=
).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.ma=
x),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}transl=
ate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.e=
quals(this.min)&amp;&amp;t.max.equals(this.max)}}eh.prototype.isBox2=3D!0;c=
onst nh=3Dnew Lt,ih=3Dnew Lt;class rh{constructor(t=3Dnew Lt,e=3Dnew Lt){th=
is.start=3Dt,this.end=3De}set(t,e){return this.start.copy(t),this.end.copy(=
e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}g=
etCenter(t){return void 0=3D=3D=3Dt&amp;&amp;(console.warn("THREE.Line3: .g=
etCenter() target is now required"),t=3Dnew Lt),t.addVectors(this.start,thi=
s.end).multiplyScalar(.5)}delta(t){return void 0=3D=3D=3Dt&amp;&amp;(consol=
e.warn("THREE.Line3: .delta() target is now required"),t=3Dnew Lt),t.subVec=
tors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(=
this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return =
void 0=3D=3D=3De&amp;&amp;(console.warn("THREE.Line3: .at() target is now r=
equired"),e=3Dnew Lt),this.delta(e).multiplyScalar(t).add(this.start)}close=
stPointToPointParameter(t,e){nh.subVectors(t,this.start),ih.subVectors(this=
.end,this.start);const n=3Dih.dot(ih);let i=3Dih.dot(nh)/n;return e&amp;&am=
p;(i=3Dht(i,0,1)),i}closestPointToPoint(t,e,n){const i=3Dthis.closestPointT=
oPointParameter(t,e);return void 0=3D=3D=3Dn&amp;&amp;(console.warn("THREE.=
Line3: .closestPointToPoint() target is now required"),n=3Dnew Lt),this.del=
ta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.a=
pplyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equal=
s(this.start)&amp;&amp;t.end.equals(this.end)}clone(){return(new this.const=
ructor).copy(this)}}class sh extends Ce{constructor(t){super(),this.materia=
l=3Dt,this.render=3Dfunction(){},this.hasPositions=3D!1,this.hasNormals=3D!=
1,this.hasColors=3D!1,this.hasUvs=3D!1,this.positionArray=3Dnull,this.norma=
lArray=3Dnull,this.colorArray=3Dnull,this.uvArray=3Dnull,this.count=3D0}}sh=
.prototype.isImmediateRenderObject=3D!0;const ah=3Dnew Lt;const oh=3Dnew Lt=
,lh=3Dnew se,ch=3Dnew se;class hh extends ya{constructor(t){const e=3Duh(t)=
,n=3Dnew En,i=3D[],r=3D[],s=3Dnew tn(0,0,1),a=3Dnew tn(0,1,0);for(let t=3D0=
;t&lt;e.length;t++){const n=3De[t];n.parent&amp;&amp;n.parent.isBone&amp;&a=
mp;(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}n.=
setAttribute("position",new mn(i,3)),n.setAttribute("color",new mn(r,3));su=
per(n,new ca({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,tran=
sparent:!0})),this.type=3D"SkeletonHelper",this.isSkeletonHelper=3D!0,this.=
root=3Dt,this.bones=3De,this.matrix=3Dt.matrixWorld,this.matrixAutoUpdate=
=3D!1}updateMatrixWorld(t){const e=3Dthis.bones,n=3Dthis.geometry,i=3Dn.get=
Attribute("position");ch.copy(this.root.matrixWorld).invert();for(let t=3D0=
,n=3D0;t&lt;e.length;t++){const r=3De[t];r.parent&amp;&amp;r.parent.isBone&=
amp;&amp;(lh.multiplyMatrices(ch,r.matrixWorld),oh.setFromMatrixPosition(lh=
),i.setXYZ(n,oh.x,oh.y,oh.z),lh.multiplyMatrices(ch,r.parent.matrixWorld),o=
h.setFromMatrixPosition(lh),i.setXYZ(n+1,oh.x,oh.y,oh.z),n+=3D2)}n.getAttri=
bute("position").needsUpdate=3D!0,super.updateMatrixWorld(t)}}function uh(t=
){const e=3D[];t&amp;&amp;t.isBone&amp;&amp;e.push(t);for(let n=3D0;n&lt;t.=
children.length;n++)e.push.apply(e,uh(t.children[n]));return e}const dh=3Dn=
ew Lt,ph=3Dnew tn,mh=3Dnew tn;class fh extends ya{constructor(t=3D10,e=3D10=
,n=3D4473924,i=3D8947848){n=3Dnew tn(n),i=3Dnew tn(i);const r=3De/2,s=3Dt/e=
,a=3Dt/2,o=3D[],l=3D[];for(let t=3D0,c=3D0,h=3D-a;t&lt;=3De;t++,h+=3Ds){o.p=
ush(-a,0,h,a,0,h),o.push(h,0,-a,h,0,a);const e=3Dt=3D=3D=3Dr?n:i;e.toArray(=
l,c),c+=3D3,e.toArray(l,c),c+=3D3,e.toArray(l,c),c+=3D3,e.toArray(l,c),c+=
=3D3}const c=3Dnew En;c.setAttribute("position",new mn(o,3)),c.setAttribute=
("color",new mn(l,3));super(c,new ca({vertexColors:!0,toneMapped:!1})),this=
.type=3D"GridHelper"}}const gh=3Dnew Lt,vh=3Dnew Lt,yh=3Dnew Lt;const xh=3D=
new Lt,_h=3Dnew Qn;function wh(t,e,n,i,r,s,a){xh.set(r,s,a).unproject(i);co=
nst o=3De[t];if(void 0!=3D=3Do){const t=3Dn.getAttribute("position");for(le=
t e=3D0,n=3Do.length;e&lt;n;e++)t.setXYZ(o[e],xh.x,xh.y,xh.z)}}const bh=3Dn=
ew Pt;class Mh extends ya{constructor(t,e=3D16776960){const n=3Dnew Uint16A=
rray([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=3Dnew Float32Arra=
y(24),r=3Dnew En;r.setIndex(new sn(n,1)),r.setAttribute("position",new sn(i=
,3)),super(r,new ca({color:e,toneMapped:!1})),this.object=3Dt,this.type=3D"=
BoxHelper",this.matrixAutoUpdate=3D!1,this.update()}update(t){if(void 0!=3D=
=3Dt&amp;&amp;console.warn("THREE.BoxHelper: .update() has no longer argume=
nts."),void 0!=3D=3Dthis.object&amp;&amp;bh.setFromObject(this.object),bh.i=
sEmpty())return;const e=3Dbh.min,n=3Dbh.max,i=3Dthis.geometry.attributes.po=
sition,r=3Di.array;r[0]=3Dn.x,r[1]=3Dn.y,r[2]=3Dn.z,r[3]=3De.x,r[4]=3Dn.y,r=
[5]=3Dn.z,r[6]=3De.x,r[7]=3De.y,r[8]=3Dn.z,r[9]=3Dn.x,r[10]=3De.y,r[11]=3Dn=
.z,r[12]=3Dn.x,r[13]=3Dn.y,r[14]=3De.z,r[15]=3De.x,r[16]=3Dn.y,r[17]=3De.z,=
r[18]=3De.x,r[19]=3De.y,r[20]=3De.z,r[21]=3Dn.x,r[22]=3De.y,r[23]=3De.z,i.n=
eedsUpdate=3D!0,this.geometry.computeBoundingSphere()}setFromObject(t){retu=
rn this.object=3Dt,this.update(),this}copy(t){return ya.prototype.copy.call=
(this,t),this.object=3Dt.object,this}}const Sh=3Dnew Lt;let Th,Eh;class Ah =
extends ya{constructor(t=3D1){const e=3D[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,=
t],n=3Dnew En;n.setAttribute("position",new mn(e,3)),n.setAttribute("color"=
,new mn([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));super(n,new ca({vertex=
Colors:!0,toneMapped:!1})),this.type=3D"AxesHelper"}dispose(){this.geometry=
.dispose(),this.material.dispose()}}const Lh=3Dnew Float32Array(1),Rh=3Dnew=
 Int32Array(Lh.buffer);const Ch=3DMath.pow(2,8),Ph=3D[.125,.215,.35,.446,.5=
26,.582],Dh=3D5+Ph.length,Ih=3D20,Nh=3D{[X]:0,[Y]:1,[J]:2,[Q]:3,[K]:4,[$]:5=
,[Z]:6},Bh=3Dnew en({side:1,depthWrite:!1,depthTest:!1}),zh=3Dnew Wn(new qn=
,Bh),Fh=3Dnew Jl,{_lodPlanes:Oh,_sizeLods:Hh,_sigmas:Gh}=3DYh(),Uh=3Dnew tn=
;let kh=3Dnull;const Vh=3D(1+Math.sqrt(5))/2,Wh=3D1/Vh,jh=3D[new Lt(1,1,1),=
new Lt(-1,1,1),new Lt(1,1,-1),new Lt(-1,1,-1),new Lt(0,Vh,Wh),new Lt(0,Vh,-=
Wh),new Lt(Wh,0,Vh),new Lt(-Wh,0,Vh),new Lt(Vh,Wh,0),new Lt(-Vh,Wh,0)];func=
tion qh(t){const e=3DMath.max(t.r,t.g,t.b),n=3DMath.min(Math.max(Math.ceil(=
Math.log2(e)),-128),127);t.multiplyScalar(Math.pow(2,-n));return(n+128)/255=
}function Xh(t){return void 0!=3D=3Dt&amp;&amp;t.type=3D=3D=3Dx&amp;&amp;(t=
.encoding=3D=3D=3DX||t.encoding=3D=3D=3DY||t.encoding=3D=3D=3DZ)}function Y=
h(){const t=3D[],e=3D[],n=3D[];let i=3D8;for(let r=3D0;r&lt;Dh;r++){const s=
=3DMath.pow(2,i);e.push(s);let a=3D1/s;r&gt;4?a=3DPh[r-8+4-1]:0=3D=3Dr&amp;=
&amp;(a=3D0),n.push(a);const o=3D1/(s-1),l=3D-o/2,c=3D1+o/2,h=3D[l,l,c,l,c,=
c,l,l,c,c,l,c],u=3D6,d=3D6,p=3D3,m=3D2,f=3D1,g=3Dnew Float32Array(p*d*u),v=
=3Dnew Float32Array(m*d*u),y=3Dnew Float32Array(f*d*u);for(let t=3D0;t&lt;u=
;t++){const e=3Dt%3*2/3-1,n=3Dt&gt;2?0:-1,i=3D[e,n,0,e+2/3,n,0,e+2/3,n+1,0,=
e,n,0,e+2/3,n+1,0,e,n+1,0];g.set(i,p*d*t),v.set(h,m*d*t);const r=3D[t,t,t,t=
,t,t];y.set(r,f*d*t)}const x=3Dnew En;x.setAttribute("position",new sn(g,p)=
),x.setAttribute("uv",new sn(v,m)),x.setAttribute("faceIndex",new sn(y,f)),=
t.push(x),i&gt;4&amp;&amp;i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}fu=
nction Zh(t){const e=3Dnew Tt(3*Ch,3*Ch,t);return e.texture.mapping=3Dl,e.t=
exture.name=3D"PMREM.cubeUv",e.scissorTest=3D!0,e}function Jh(t,e,n,i,r){t.=
viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qh(){const t=3Dnew vt=
(1,1);return new Io({name:"EquirectangularToCubeUV",uniforms:{envMap:{value=
:null},texelSize:{value:t},inputEncoding:{value:Nh[3e3]},outputEncoding:{va=
lue:Nh[3e3]}},vertexShader:$h(),fragmentShader:`\n\n\t\t\tprecision mediump=
 float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirectio=
n;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\=
t\t${tu()}\n\n\t\t\t#include &lt;common&gt;\n\n\t\t\tvoid main() {\n\n\t\t\=
t\tgl_FragColor =3D vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirec=
tion =3D normalize( vOutputDirection );\n\t\t\t\tvec2 uv =3D equirectUv( ou=
tputDirection );\n\n\t\t\t\tvec2 f =3D fract( uv / texelSize - 0.5 );\n\t\t=
\t\tuv -=3D f * texelSize;\n\t\t\t\tvec3 tl =3D envMapTexelToLinear( textur=
e2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x +=3D texelSize.x;\n\t\t\t\tvec3 tr =
=3D envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y +=3D=
 texelSize.y;\n\t\t\t\tvec3 br =3D envMapTexelToLinear( texture2D ( envMap,=
 uv ) ).rgb;\n\t\t\t\tuv.x -=3D texelSize.x;\n\t\t\t\tvec3 bl =3D envMapTex=
elToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm =3D mix( tl,=
 tr, f.x );\n\t\t\t\tvec3 bm =3D mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.=
rgb =3D mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor =3D linearToOutputTexel=
( gl_FragColor );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})=
}function Kh(){return new Io({name:"CubemapToCubeUV",uniforms:{envMap:{valu=
e:null},inputEncoding:{value:Nh[3e3]},outputEncoding:{value:Nh[3e3]}},verte=
xShader:$h(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprec=
ision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform=
 samplerCube envMap;\n\n\t\t\t${tu()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_=
FragColor =3D vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb =3D env=
MapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputD=
irection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor =3D linearToOutputTexel( gl_Fr=
agColor );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthWrite:!1})}functi=
on $h(){return"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;=
\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute flo=
at faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate=
 system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, fl=
oat face ) {\n\n\t\t\tuv =3D 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction =3D ve=
c3( uv, 1.0 );\n\n\t\t\tif ( face =3D=3D 0.0 ) {\n\n\t\t\t\tdirection =3D d=
irection.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face =3D=3D 1.0 ) {=
\n\n\t\t\t\tdirection =3D direction.xzy;\n\t\t\t\tdirection.xz *=3D -1.0; /=
/ ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face =3D=3D 2.0 ) {\n\n\t\t\t\td=
irection.x *=3D -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face =3D=
=3D 3.0 ) {\n\n\t\t\t\tdirection =3D direction.zyx;\n\t\t\t\tdirection.xz *=
=3D -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face =3D=3D 4.0 ) {\n=
\n\t\t\t\tdirection =3D direction.xzy;\n\t\t\t\tdirection.xy *=3D -1.0; // =
( -u, -1, v ) neg y\n\n\t\t\t} else if ( face =3D=3D 5.0 ) {\n\n\t\t\t\tdir=
ection.z *=3D -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direct=
ion;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection =3D getDirecti=
on( uv, faceIndex );\n\t\t\tgl_Position =3D vec4( position, 1.0 );\n\n\t\t}=
\n\t"}function tu(){return"\n\n\t\tuniform int inputEncoding;\n\t\tuniform =
int outputEncoding;\n\n\t\t#include &lt;encodings_pars_fragment&gt;\n\n\t\t=
vec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding =3D=3D =
0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding =3D=3D 1 =
) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEnco=
ding =3D=3D 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else =
if ( inputEncoding =3D=3D 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 =
);\n\n\t\t\t} else if ( inputEncoding =3D=3D 4 ) {\n\n\t\t\t\treturn RGBMTo=
Linear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding =3D=3D 5 ) {\n\n\=
t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\tre=
turn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToO=
utputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding =3D=3D 0 ) {\n\n\t\=
t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding =3D=3D 1 ) {\n\n\t\t=
\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding =3D=
=3D 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( out=
putEncoding =3D=3D 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\=
t\t\t} else if ( outputEncoding =3D=3D 4 ) {\n\n\t\t\t\treturn LinearToRGBM=
( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding =3D=3D 5 ) {\n\n\t\t\t=
\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn =
LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToL=
inear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}=
\n\t"}ml.create=3Dfunction(t,e){return console.log("THREE.Curve.create() ha=
s been deprecated"),t.prototype=3DObject.create(ml.prototype),t.prototype.c=
onstructor=3Dt,t.prototype.getPoint=3De,t},Bl.prototype.fromPoints=3Dfuncti=
on(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .s=
etFromPoints()."),this.setFromPoints(t)},fh.prototype.setColors=3Dfunction(=
){console.error("THREE.GridHelper: setColors() has been deprecated, pass th=
em in the constructor instead.")},hh.prototype.update=3Dfunction(){console.=
error("THREE.SkeletonHelper: update() no longer needs to be called.")},ol.p=
rototype.extractUrlBase=3Dfunction(t){return console.warn("THREE.Loader: .e=
xtractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase()=
 instead."),rc.extractUrlBase(t)},ol.Handlers=3D{add:function(){console.err=
or("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHa=
ndler() instead.")},get:function(){console.error("THREE.Loader: Handlers.ge=
t() has been removed. Use LoadingManager.getHandler() instead.")}},eh.proto=
type.center=3Dfunction(t){return console.warn("THREE.Box2: .center() has be=
en renamed to .getCenter()."),this.getCenter(t)},eh.prototype.empty=3Dfunct=
ion(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpt=
y()."),this.isEmpty()},eh.prototype.isIntersectionBox=3Dfunction(t){return =
console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .interse=
ctsBox()."),this.intersectsBox(t)},eh.prototype.size=3Dfunction(t){return c=
onsole.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.get=
Size(t)},Pt.prototype.center=3Dfunction(t){return console.warn("THREE.Box3:=
 .center() has been renamed to .getCenter()."),this.getCenter(t)},Pt.protot=
ype.empty=3Dfunction(){return console.warn("THREE.Box3: .empty() has been r=
enamed to .isEmpty()."),this.isEmpty()},Pt.prototype.isIntersectionBox=3Dfu=
nction(t){return console.warn("THREE.Box3: .isIntersectionBox() has been re=
named to .intersectsBox()."),this.intersectsBox(t)},Pt.prototype.isIntersec=
tionSphere=3Dfunction(t){return console.warn("THREE.Box3: .isIntersectionSp=
here() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}=
,Pt.prototype.size=3Dfunction(t){return console.warn("THREE.Box3: .size() h=
as been renamed to .getSize()."),this.getSize(t)},Jt.prototype.empty=3Dfunc=
tion(){return console.warn("THREE.Sphere: .empty() has been renamed to .isE=
mpty()."),this.isEmpty()},ai.prototype.setFromMatrix=3Dfunction(t){return c=
onsole.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromPr=
ojectionMatrix()."),this.setFromProjectionMatrix(t)},rh.prototype.center=3D=
function(t){return console.warn("THREE.Line3: .center() has been renamed to=
 .getCenter()."),this.getCenter(t)},yt.prototype.flattenToArrayOffset=3Dfun=
ction(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has =
been deprecated. Use .toArray() instead."),this.toArray(t,e)},yt.prototype.=
multiplyVector3=3Dfunction(t){return console.warn("THREE.Matrix3: .multiply=
Vector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.=
applyMatrix3(this)},yt.prototype.multiplyVector3Array=3Dfunction(){console.=
error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},yt.proto=
type.applyToBufferAttribute=3Dfunction(t){return console.warn("THREE.Matrix=
3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( =
matrix ) instead."),t.applyMatrix3(this)},yt.prototype.applyToVector3Array=
=3Dfunction(){console.error("THREE.Matrix3: .applyToVector3Array() has been=
 removed.")},yt.prototype.getInverse=3Dfunction(t){return console.warn("THR=
EE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).in=
vert(); instead."),this.copy(t).invert()},se.prototype.extractPosition=3Dfu=
nction(t){return console.warn("THREE.Matrix4: .extractPosition() has been r=
enamed to .copyPosition()."),this.copyPosition(t)},se.prototype.flattenToAr=
rayOffset=3Dfunction(t,e){return console.warn("THREE.Matrix4: .flattenToArr=
ayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)=
},se.prototype.getPosition=3Dfunction(){return console.warn("THREE.Matrix4:=
 .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix=
 ) instead."),(new Lt).setFromMatrixColumn(this,3)},se.prototype.setRotatio=
nFromQuaternion=3Dfunction(t){return console.warn("THREE.Matrix4: .setRotat=
ionFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),th=
is.makeRotationFromQuaternion(t)},se.prototype.multiplyToArray=3Dfunction()=
{console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},se.pr=
ototype.multiplyVector3=3Dfunction(t){return console.warn("THREE.Matrix4: .=
multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) inste=
ad."),t.applyMatrix4(this)},se.prototype.multiplyVector4=3Dfunction(t){retu=
rn console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use ve=
ctor.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},se.prototype.m=
ultiplyVector3Array=3Dfunction(){console.error("THREE.Matrix4: .multiplyVec=
tor3Array() has been removed.")},se.prototype.rotateAxis=3Dfunction(t){cons=
ole.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transf=
ormDirection( matrix ) instead."),t.transformDirection(this)},se.prototype.=
crossVector=3Dfunction(t){return console.warn("THREE.Matrix4: .crossVector(=
) has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMat=
rix4(this)},se.prototype.translate=3Dfunction(){console.error("THREE.Matrix=
4: .translate() has been removed.")},se.prototype.rotateX=3Dfunction(){cons=
ole.error("THREE.Matrix4: .rotateX() has been removed.")},se.prototype.rota=
teY=3Dfunction(){console.error("THREE.Matrix4: .rotateY() has been removed.=
")},se.prototype.rotateZ=3Dfunction(){console.error("THREE.Matrix4: .rotate=
Z() has been removed.")},se.prototype.rotateByAxis=3Dfunction(){console.err=
or("THREE.Matrix4: .rotateByAxis() has been removed.")},se.prototype.applyT=
oBufferAttribute=3Dfunction(t){return console.warn("THREE.Matrix4: .applyTo=
BufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) in=
stead."),t.applyMatrix4(this)},se.prototype.applyToVector3Array=3Dfunction(=
){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")}=
,se.prototype.makeFrustum=3Dfunction(t,e,n,i,r,s){return console.warn("THRE=
E.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, rig=
ht, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},=
se.prototype.getInverse=3Dfunction(t){return console.warn("THREE.Matrix4: .=
getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); inste=
ad."),this.copy(t).invert()},Ne.prototype.isIntersectionLine=3Dfunction(t){=
return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to=
 .intersectsLine()."),this.intersectsLine(t)},At.prototype.multiplyVector3=
=3Dfunction(t){return console.warn("THREE.Quaternion: .multiplyVector3() ha=
s been removed. Use is now vector.applyQuaternion( quaternion ) instead."),=
t.applyQuaternion(this)},At.prototype.inverse=3Dfunction(){return console.w=
arn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.inve=
rt()},re.prototype.isIntersectionBox=3Dfunction(t){return console.warn("THR=
EE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.i=
ntersectsBox(t)},re.prototype.isIntersectionPlane=3Dfunction(t){return cons=
ole.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersects=
Plane()."),this.intersectsPlane(t)},re.prototype.isIntersectionSphere=3Dfun=
ction(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been r=
enamed to .intersectsSphere()."),this.intersectsSphere(t)},je.prototype.are=
a=3Dfunction(){return console.warn("THREE.Triangle: .area() has been rename=
d to .getArea()."),this.getArea()},je.prototype.barycoordFromPoint=3Dfuncti=
on(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been=
 renamed to .getBarycoord()."),this.getBarycoord(t,e)},je.prototype.midpoin=
t=3Dfunction(t){return console.warn("THREE.Triangle: .midpoint() has been r=
enamed to .getMidpoint()."),this.getMidpoint(t)},je.prototypenormal=3Dfunct=
ion(t){return console.warn("THREE.Triangle: .normal() has been renamed to .=
getNormal()."),this.getNormal(t)},je.prototype.plane=3Dfunction(t){return c=
onsole.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),th=
is.getPlane(t)},je.barycoordFromPoint=3Dfunction(t,e,n,i,r){return console.=
warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoo=
rd()."),je.getBarycoord(t,e,n,i,r)},je.normal=3Dfunction(t,e,n,i){return co=
nsole.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),j=
e.getNormal(t,e,n,i)},zl.prototype.extractAllPoints=3Dfunction(t){return co=
nsole.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extract=
Points() instead."),this.extractPoints(t)},zl.prototype.extrude=3Dfunction(=
t){return console.warn("THREE.Shape: .extrude() has been removed. Use Extru=
deGeometry() instead."),new go(this,t)},zl.prototype.makeGeometry=3Dfunctio=
n(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Us=
e ShapeGeometry() instead."),new Mo(this,t)},vt.prototype.fromAttribute=3Df=
unction(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has bee=
n renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},vt.=
prototype.distanceToManhattan=3Dfunction(t){return console.warn("THREE.Vect=
or2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),t=
his.manhattanDistanceTo(t)},vt.prototype.lengthManhattan=3Dfunction(){retur=
n console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manh=
attanLength()."),this.manhattanLength()},Lt.prototype.setEulerFromRotationM=
atrix=3Dfunction(){console.error("THREE.Vector3: .setEulerFromRotationMatri=
x() has been removed. Use Euler.setFromRotationMatrix() instead.")},Lt.prot=
otype.setEulerFromQuaternion=3Dfunction(){console.error("THREE.Vector3: .se=
tEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() inst=
ead.")},Lt.prototype.getPositionFromMatrix=3Dfunction(t){return console.war=
n("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatr=
ixPosition()."),this.setFromMatrixPosition(t)},Lt.prototype.getScaleFromMat=
rix=3Dfunction(t){return console.warn("THREE.Vector3: .getScaleFromMatrix()=
 has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},L=
t.prototype.getColumnFromMatrix=3Dfunction(t,e){return console.warn("THREE.=
Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().=
"),this.setFromMatrixColumn(e,t)},Lt.prototype.applyProjection=3Dfunction(t=
){return console.warn("THREE.Vector3: .applyProjection() has been removed. =
Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},Lt.prototype.fromAt=
tribute=3Dfunction(t,e,n){return console.warn("THREE.Vector3: .fromAttribut=
e() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(=
t,e,n)},Lt.prototype.distanceToManhattan=3Dfunction(t){return console.warn(=
"THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistan=
ceTo()."),this.manhattanDistanceTo(t)},Lt.prototype.lengthManhattan=3Dfunct=
ion(){return console.warn("THREE.Vector3: .lengthManhattan() has been renam=
ed to .manhattanLength()."),this.manhattanLength()},St.prototype.fromAttrib=
ute=3Dfunction(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() =
has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,=
n)},St.prototype.lengthManhattan=3Dfunction(){return console.warn("THREE.Ve=
ctor4: .lengthManhattan() has been renamed to .manhattanLength()."),this.ma=
nhattanLength()},Ce.prototype.getChildByName=3Dfunction(t){return console.w=
arn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName=
()."),this.getObjectByName(t)},Ce.prototype.renderDepth=3Dfunction(){consol=
e.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, in=
stead.")},Ce.prototype.translate=3Dfunction(t,e){return console.warn("THREE=
.Object3D: .translate() has been removed. Use .translateOnAxis( axis, dista=
nce ) instead."),this.translateOnAxis(e,t)},Ce.prototype.getWorldRotation=
=3Dfunction(){console.error("THREE.Object3D: .getWorldRotation() has been r=
emoved. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Ce.prot=
otype.applyMatrix=3Dfunction(t){return console.warn("THREE.Object3D: .apply=
Matrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)},Objec=
t.defineProperties(Ce.prototype,{eulerOrder:{get:function(){return console.=
warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.o=
rder},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rot=
ation.order."),this.rotation.order=3Dt}},useQuaternion:{get:function(){cons=
ole.warn("THREE.Object3D: .useQuaternion has been removed. The library now =
uses quaternions by default.")},set:function(){console.warn("THREE.Object3D=
: .useQuaternion has been removed. The library now uses quaternions by defa=
ult.")}}}),Wn.prototype.setDrawMode=3Dfunction(){console.error("THREE.Mesh:=
 .setDrawMode() has been removed. The renderer now always assumes THREE.Tri=
anglesDrawMode. Transform your geometry via BufferGeometryUtils.toTriangles=
DrawMode() if necessary.")},Object.defineProperties(Wn.prototype,{drawMode:=
{get:function(){return console.error("THREE.Mesh: .drawMode has been remove=
d. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:functi=
on(){console.error("THREE.Mesh: .drawMode has been removed. The renderer no=
w always assumes THREE.TrianglesDrawMode. Transform your geometry via Buffe=
rGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),$s.prototype.initB=
ones=3Dfunction(){console.error("THREE.SkinnedMesh: initBones() has been re=
moved.")},Kn.prototype.setLens=3Dfunction(t,e){console.warn("THREE.Perspect=
iveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a p=
hotographic setup."),void 0!=3D=3De&amp;&amp;(this.filmGauge=3De),this.setF=
ocalLength(t)},Object.defineProperties(Fl.prototype,{onlyShadow:{set:functi=
on(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCam=
eraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now =
.shadow.camera.fov."),this.shadow.camera.fov=3Dt}},shadowCameraLeft:{set:fu=
nction(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camer=
a.left."),this.shadow.camera.left=3Dt}},shadowCameraRight:{set:function(t){=
console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."=
),this.shadow.camera.right=3Dt}},shadowCameraTop:{set:function(t){console.w=
arn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow=
.camera.top=3Dt}},shadowCameraBottom:{set:function(t){console.warn("THREE.L=
ight: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camer=
a.bottom=3Dt}},shadowCameraNear:{set:function(t){console.warn("THREE.Light:=
 .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=3D=
t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCame=
raFar is now .shadow.camera.far."),this.shadow.camera.far=3Dt}},shadowCamer=
aVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible ha=
s been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."=
)}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is n=
ow .shadow.bias."),this.shadow.bias=3Dt}},shadowDarkness:{set:function(){co=
nsole.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWid=
th:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shad=
ow.mapSize.width."),this.shadow.mapSize.width=3Dt}},shadowMapHeight:{set:fu=
nction(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSiz=
e.height."),this.shadow.mapSize.height=3Dt}}}),Object.defineProperties(sn.p=
rototype,{length:{get:function(){return console.warn("THREE.BufferAttribute=
: .length has been deprecated. Use .count instead."),this.array.length}},dy=
namic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic =
has been deprecated. Use .usage instead."),this.usage=3D=3D=3Dnt},set:funct=
ion(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Us=
e .usage instead."),this.setUsage(nt)}}}),sn.prototype.setDynamic=3Dfunctio=
n(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been dep=
recated. Use .setUsage() instead."),this.setUsage(!0=3D=3D=3Dt?nt:et),this}=
,sn.prototype.copyIndicesArray=3Dfunction(){console.error("THREE.BufferAttr=
ibute: .copyIndicesArray() has been removed.")},sn.prototype.setArray=3Dfun=
ction(){console.error("THREE.BufferAttribute: .setArray has been removed. U=
se BufferGeometry .setAttribute to replace/resize attribute buffers")},En.p=
rototype.addIndex=3Dfunction(t){console.warn("THREE.BufferGeometry: .addInd=
ex() has been renamed to .setIndex()."),this.setIndex(t)},En.prototype.addA=
ttribute=3Dfunction(t,e){return console.warn("THREE.BufferGeometry: .addAtt=
ribute() has been renamed to .setAttribute()."),e&amp;&amp;e.isBufferAttrib=
ute||e&amp;&amp;e.isInterleavedBufferAttribute?"index"=3D=3D=3Dt?(console.w=
arn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute=
."),this.setIndex(e),this):this.setAttribute(t,e):(console.warn("THREE.Buff=
erGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttr=
ibute(t,new sn(arguments[1],arguments[2])))},En.prototype.addDrawCall=3Dfun=
ction(t,e,n){void 0!=3D=3Dn&amp;&amp;console.warn("THREE.BufferGeometry: .a=
ddDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGe=
ometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},En.prototy=
pe.clearDrawCalls=3Dfunction(){console.warn("THREE.BufferGeometry: .clearDr=
awCalls() is now .clearGroups()."),this.clearGroups()},En.prototype.compute=
Offsets=3Dfunction(){console.warn("THREE.BufferGeometry: .computeOffsets() =
has been removed.")},En.prototype.removeAttribute=3Dfunction(t){return cons=
ole.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .del=
eteAttribute()."),this.deleteAttribute(t)},En.prototype.applyMatrix=3Dfunct=
ion(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been r=
enamed to .applyMatrix4()."),this.applyMatrix4(t)},Object.defineProperties(=
En.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferG=
eometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{g=
et:function(){return console.warn("THREE.BufferGeometry: .offsets has been =
renamed to .groups."),this.groups}}}),Es.prototype.setDynamic=3Dfunction(t)=
{return console.warn("THREE.InterleavedBuffer: .setDynamic() has been depre=
cated. Use .setUsage() instead."),this.setUsage(!0=3D=3D=3Dt?nt:et),this},E=
s.prototype.setArray=3Dfunction(){console.error("THREE.InterleavedBuffer: .=
setArray has been removed. Use BufferGeometry .setAttribute to replace/resi=
ze attribute buffers")},go.prototype.getArrays=3Dfunction(){console.error("=
THREE.ExtrudeGeometry: .getArrays() has been removed.")},go.prototype.addSh=
apeList=3Dfunction(){console.error("THREE.ExtrudeGeometry: .addShapeList() =
has been removed.")},go.prototype.addShape=3Dfunction(){console.error("THRE=
E.ExtrudeGeometry: .addShape() has been removed.")},Ts.prototype.dispose=3D=
function(){console.error("THREE.Scene: .dispose() has been removed.")},Zc.p=
rototype.onUpdate=3Dfunction(){return console.warn("THREE.Uniform: .onUpdat=
e() has been removed. Use object.onBeforeRender() instead."),this},Object.d=
efineProperties(Xe.prototype,{wrapAround:{get:function(){console.warn("THRE=
E.Material: .wrapAround has been removed.")},set:function(){console.warn("T=
HREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){c=
onsole.warn("THREE.Material: .overdraw has been removed.")},set:function(){=
console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:=
function(){return console.warn("THREE.Material: .wrapRGB has been removed."=
),new tn}},shading:{get:function(){console.error("THREE."+this.type+": .sha=
ding has been removed. Use the boolean .flatShading instead.")},set:functio=
n(t){console.warn("THREE."+this.type+": .shading has been removed. Use the =
boolean .flatShading instead."),this.flatShading=3D1=3D=3D=3Dt}},stencilMas=
k:{get:function(){return console.warn("THREE."+this.type+": .stencilMask ha=
s been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:f=
unction(t){console.warn("THREE."+this.type+": .stencilMask has been removed=
. Use .stencilFuncMask instead."),this.stencilFuncMask=3Dt}}}),Object.defin=
eProperties(Jn.prototype,{derivatives:{get:function(){return console.warn("=
THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivative=
s."),this.extensions.derivatives},set:function(t){console.warn("THREE. Shad=
erMaterial: .derivatives has been moved to .extensions.derivatives."),this.=
extensions.derivatives=3Dt}}}),ws.prototype.clearTarget=3Dfunction(t,e,n,i)=
{console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use=
 .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.cl=
ear(e,n,i)},ws.prototype.animate=3Dfunction(t){console.warn("THREE.WebGLRen=
derer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},w=
s.prototype.getCurrentRenderTarget=3Dfunction(){return console.warn("THREE.=
WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.=
getRenderTarget()},ws.prototype.getMaxAnisotropy=3Dfunction(){return consol=
e.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMa=
xAnisotropy()."),this.capabilities.getMaxAnisotropy()},ws.prototype.getPrec=
ision=3Dfunction(){return console.warn("THREE.WebGLRenderer: .getPrecision(=
) is now .capabilities.precision."),this.capabilities.precision},ws.prototy=
pe.resetGLState=3Dfunction(){return console.warn("THREE.WebGLRenderer: .res=
etGLState() is now .state.reset()."),this.state.reset()},ws.prototype.suppo=
rtsFloatTextures=3Dfunction(){return console.warn("THREE.WebGLRenderer: .su=
pportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this=
.extensions.get("OES_texture_float")},ws.prototype.supportsHalfFloatTexture=
s=3Dfunction(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloat=
Textures() is now .extensions.get( 'OES_texture_half_float' )."),this.exten=
sions.get("OES_texture_half_float")},ws.prototype.supportsStandardDerivativ=
es=3Dfunction(){return console.warn("THREE.WebGLRenderer: .supportsStandard=
Derivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.=
extensions.get("OES_standard_derivatives")},ws.prototype.supportsCompressed=
TextureS3TC=3Dfunction(){return console.warn("THREE.WebGLRenderer: .support=
sCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_=
s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},ws.prototy=
pe.supportsCompressedTexturePVRTC=3Dfunction(){return console.warn("THREE.W=
ebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WE=
BGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_te=
xture_pvrtc")},ws.prototype.supportsBlendMinMax=3Dfunction(){return console=
.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( =
'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},ws.prototy=
pe.supportsVertexTextures=3Dfunction(){return console.warn("THREE.WebGLRend=
erer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this=
.capabilities.vertexTextures},ws.prototype.supportsInstancedArrays=3Dfuncti=
on(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() i=
s now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("A=
NGLE_instanced_arrays")},ws.prototype.enableScissorTest=3Dfunction(t){conso=
le.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()=
."),this.setScissorTest(t)},ws.prototype.initMaterial=3Dfunction(){console.=
warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},ws.prototyp=
e.addPrePlugin=3Dfunction(){console.warn("THREE.WebGLRenderer: .addPrePlugi=
n() has been removed.")},ws.prototype.addPostPlugin=3Dfunction(){console.wa=
rn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},ws.prototype=
.updateShadowMap=3Dfunction(){console.warn("THREE.WebGLRenderer: .updateSha=
dowMap() has been removed.")},ws.prototype.setFaceCulling=3Dfunction(){cons=
ole.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},ws.pr=
ototype.allocTextureUnit=3Dfunction(){console.warn("THREE.WebGLRenderer: .a=
llocTextureUnit() has been removed.")},ws.prototype.setTexture=3Dfunction()=
{console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},ws.p=
rototype.setTexture2D=3Dfunction(){console.warn("THREE.WebGLRenderer: .setT=
exture2D() has been removed.")},ws.prototype.setTextureCube=3Dfunction(){co=
nsole.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},ws.=
prototype.getActiveMipMapLevel=3Dfunction(){return console.warn("THREE.WebG=
LRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.g=
etActiveMipmapLevel()},Object.defineProperties(ws.prototype,{shadowMapEnabl=
ed:{get:function(){return this.shadowMap.enabled},set:function(t){console.w=
arn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),th=
is.shadowMap.enabled=3Dt}},shadowMapType:{get:function(){return this.shadow=
Map.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType=
 is now .shadowMap.type."),this.shadowMap.type=3Dt}},shadowMapCullFace:{get=
:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been =
removed. Set Material.shadowSide instead.")},set:function(){console.warn("T=
HREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shado=
wSide instead.")}},context:{get:function(){return console.warn("THREE.WebGL=
Renderer: .context has been removed. Use .getContext() instead."),this.getC=
ontext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr=
 has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return cons=
ole.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encodi=
ng for textures via Texture.encoding instead."),!1},set:function(){console.=
warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding f=
or textures via Texture.encoding instead.")}},gammaOutput:{get:function(){r=
eturn console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set=
 WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("=
THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outpu=
tEncoding instead."),this.outputEncoding=3D!0=3D=3D=3Dt?Y:X}},toneMappingWh=
itePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMap=
pingWhitePoint has been removed."),1},set:function(){console.warn("THREE.We=
bGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.definePr=
operties(us.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRe=
nderer: .shadowMap.cullFace has been removed. Set Material.shadowSide inste=
ad.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFac=
e has been removed. Set Material.shadowSide instead.")}},renderReverseSided=
:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderRevers=
eSided has been removed. Set Material.shadowSide instead.")},set:function()=
{console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been =
removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:functi=
on(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has be=
en removed. Set Material.shadowSide instead.")},set:function(){console.warn=
("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set M=
aterial.shadowSide instead.")}}}),Object.defineProperties(Tt.prototype,{wra=
pS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is =
now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THR=
EE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=3D=
t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wr=
apT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.wa=
rn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.w=
rapT=3Dt}},magFilter:{get:function(){return console.warn("THREE.WebGLRender=
Target: .magFilter is now .texture.magFilter."),this.texture.magFilter},set=
:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .text=
ure.magFilter."),this.texture.magFilter=3Dt}},minFilter:{get:function(){ret=
urn console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFi=
lter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRe=
nderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=
=3Dt}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTar=
get: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set=
:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .tex=
ture.anisotropy."),this.texture.anisotropy=3Dt}},offset:{get:function(){ret=
urn console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."=
),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarge=
t: .offset is now .texture.offset."),this.texture.offset=3Dt}},repeat:{get:=
function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .te=
xture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.We=
bGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=3Dt}=
},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .for=
mat is now .texture.format."),this.texture.format},set:function(t){console.=
warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.textu=
re.format=3Dt}},type:{get:function(){return console.warn("THREE.WebGLRender=
Target: .type is now .texture.type."),this.texture.type},set:function(t){co=
nsole.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.tex=
ture.type=3Dt}},generateMipmaps:{get:function(){return console.warn("THREE.=
WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this=
.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTa=
rget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.gene=
rateMipmaps=3Dt}}}),Lc.prototype.load=3Dfunction(t){console.warn("THREE.Aud=
io: .load has been deprecated. Use THREE.AudioLoader instead.");const e=3Dt=
his;return(new vc).load(t,(function(t){e.setBuffer(t)})),this},Ic.prototype=
.getData=3Dfunction(){return console.warn("THREE.AudioAnalyser: .getData() =
is now .getFrequencyData()."),this.getFrequencyData()},ti.prototype.updateC=
ubeMap=3Dfunction(t,e){return console.warn("THREE.CubeCamera: .updateCubeMa=
p() is now .update()."),this.update(t,e)},ti.prototype.clear=3Dfunction(t,e=
,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.=
clear()."),this.renderTarget.clear(t,e,n,i)},_t.crossOrigin=3Dvoid 0,_t.loa=
dTexture=3Dfunction(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has=
 been deprecated. Use THREE.TextureLoader() instead.");const r=3Dnew pl;r.s=
etCrossOrigin(this.crossOrigin);const s=3Dr.load(t,n,void 0,i);return e&amp=
;&amp;(s.mapping=3De),s},_t.loadTextureCube=3Dfunction(t,e,n,i){console.war=
n("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeText=
ureLoader() instead.");const r=3Dnew ul;r.setCrossOrigin(this.crossOrigin);=
const s=3Dr.load(t,n,void 0,i);return e&amp;&amp;(s.mapping=3De),s},_t.load=
CompressedTexture=3Dfunction(){console.error("THREE.ImageUtils.loadCompress=
edTexture has been removed. Use THREE.DDSLoader instead.")},_t.loadCompress=
edTextureCube=3Dfunction(){console.error("THREE.ImageUtils.loadCompressedTe=
xtureCube has been removed. Use THREE.DDSLoader instead.")};const eu=3D{cre=
ateMultiMaterialObject:function(){console.error("THREE.SceneUtils has been =
moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.err=
or("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}=
,attach:function(){console.error("THREE.SceneUtils has been moved to /examp=
les/jsm/utils/SceneUtils.js")}};"undefined"!=3Dtypeof __THREE_DEVTOOLS__&am=
p;&amp;__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:=
{revision:e}})),"undefined"!=3Dtypeof window&amp;&amp;(window.__THREE__?con=
sole.warn("WARNING: Multiple instances of Three.js being imported."):window=
.__THREE__=3De),t.ACESFilmicToneMapping=3D4,t.AddEquation=3Dn,t.AddOperatio=
n=3D2,t.AdditiveAnimationBlendMode=3Dq,t.AdditiveBlending=3D2,t.AlphaFormat=
=3D1021,t.AlwaysDepth=3D1,t.AlwaysStencilFunc=3D519,t.AmbientLight=3D$l,t.A=
mbientLightProbe=3Dxc,t.AnimationClip=3Dnl,t.AnimationLoader=3Dclass extend=
s ol{constructor(t){super(t)}load(t,e,n,i){const r=3Dthis,s=3Dnew cl(this.m=
anager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWi=
thCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(JSO=
N.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i=
)}parse(t){const e=3D[];for(let n=3D0;n&lt;t.length;n++){const i=3Dnl.parse=
(t[n]);e.push(i)}return e}},t.AnimationMixer=3DYc,t.AnimationObjectGroup=3D=
qc,t.AnimationUtils=3DVo,t.ArcCurve=3Dgl,t.ArrayCamera=3Dfs,t.ArrowHelper=
=3Dclass extends Ce{constructor(t=3Dnew Lt(0,0,1),e=3Dnew Lt(0,0,0),n=3D1,i=
=3D16776960,r=3D.2*n,s=3D.2*r){super(),this.type=3D"ArrowHelper",void 0=3D=
=3D=3DTh&amp;&amp;(Th=3Dnew En,Th.setAttribute("position",new mn([0,0,0,0,1=
,0],3)),Eh=3Dnew Da(0,.5,1,5,1),Eh.translate(0,-.5,0)),this.position.copy(e=
),this.line=3Dnew fa(Th,new ca({color:i,toneMapped:!1})),this.line.matrixAu=
toUpdate=3D!1,this.add(this.line),this.cone=3Dnew Wn(Eh,new en({color:i,ton=
eMapped:!1})),this.cone.matrixAutoUpdate=3D!1,this.add(this.cone),this.setD=
irection(t),this.setLength(n,r,s)}setDirection(t){if(t.y&gt;.99999)this.qua=
ternion.set(0,0,0,1);else if(t.y&lt;-.99999)this.quaternion.set(1,0,0,0);el=
se{Sh.set(t.z,0,-t.x).normalize();const e=3DMath.acos(t.y);this.quaternion.=
setFromAxisAngle(Sh,e)}}setLength(t,e=3D.2*t,n=3D.2*e){this.line.scale.set(=
1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n)=
,this.cone.position.y=3Dt,this.cone.updateMatrix()}setColor(t){this.line.ma=
terial.color.set(t),this.cone.material.color.set(t)}copy(t){return super.co=
py(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}},t.Audio=3DLc,=
t.AudioAnalyser=3DIc,t.AudioContext=3Dgc,t.AudioListener=3Dclass extends Ce=
{constructor(){super(),this.type=3D"AudioListener",this.context=3Dgc.getCon=
text(),this.gain=3Dthis.context.createGain(),this.gain.connect(this.context=
.destination),this.filter=3Dnull,this.timeDelta=3D0,this._clock=3Dnew bc}ge=
tInput(){return this.gain}removeFilter(){return null!=3D=3Dthis.filter&amp;=
&amp;(this.gain.disconnect(this.filter),this.filter.disconnect(this.context=
.destination),this.gain.connect(this.context.destination),this.filter=3Dnul=
l),this}getFilter(){return this.filter}setFilter(t){return null!=3D=3Dthis.=
filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.conte=
xt.destination)):this.gain.disconnect(this.context.destination),this.filter=
=3Dt,this.gain.connect(this.filter),this.filter.connect(this.context.destin=
ation),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t=
){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),thi=
s}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=3Dthis.context.li=
stener,n=3Dthis.up;if(this.timeDelta=3Dthis._clock.getDelta(),this.matrixWo=
rld.decompose(Sc,Tc,Ec),Ac.set(0,0,-1).applyQuaternion(Tc),e.positionX){con=
st t=3Dthis.context.currentTime+this.timeDelta;e.positionX.linearRampToValu=
eAtTime(Sc.x,t),e.positionY.linearRampToValueAtTime(Sc.y,t),e.positionZ.lin=
earRampToValueAtTime(Sc.z,t),e.forwardX.linearRampToValueAtTime(Ac.x,t),e.f=
orwardY.linearRampToValueAtTime(Ac.y,t),e.forwardZ.linearRampToValueAtTime(=
Ac.z,t),e.upX.linearRampToValueAtTime(n.x,t),e.upY.linearRampToValueAtTime(=
n.y,t),e.upZ.linearRampToValueAtTime(n.z,t)}else e.setPosition(Sc.x,Sc.y,Sc=
.z),e.setOrientation(Ac.x,Ac.y,Ac.z,n.x,n.y,n.z)}},t.AudioLoader=3Dvc,t.Axe=
sHelper=3DAh,t.AxisHelper=3Dfunction(t){return console.warn("THREE.AxisHelp=
er has been renamed to THREE.AxesHelper."),new Ah(t)},t.BackSide=3D1,t.Basi=
cDepthPacking=3D3200,t.BasicShadowMap=3D0,t.BinaryTextureLoader=3Dfunction(=
t){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE=
.DataTextureLoader."),new dl(t)},t.Bone=3Dta,t.BooleanKeyframeTrack=3DZo,t.=
BoundingBoxHelper=3Dfunction(t,e){return console.warn("THREE.BoundingBoxHel=
per has been deprecated. Creating a THREE.BoxHelper instead."),new Mh(t,e)}=
,t.Box2=3Deh,t.Box3=3DPt,t.Box3Helper=3Dclass extends ya{constructor(t,e=3D=
16776960){const n=3Dnew Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,=
5,2,6,3,7]),i=3Dnew En;i.setIndex(new sn(n,1)),i.setAttribute("position",ne=
w mn([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),supe=
r(i,new ca({color:e,toneMapped:!1})),this.box=3Dt,this.type=3D"Box3Helper",=
this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=3Dthis.b=
ox;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scal=
e.multiplyScalar(.5),super.updateMatrixWorld(t))}},t.BoxBufferGeometry=3Dqn=
,t.BoxGeometry=3Dqn,t.BoxHelper=3DMh,t.BufferAttribute=3Dsn,t.BufferGeometr=
y=3DEn,t.BufferGeometryLoader=3Doc,t.ByteType=3D1010,t.Cache=3Drl,t.Camera=
=3DQn,t.CameraHelper=3Dclass extends ya{constructor(t){const e=3Dnew En,n=
=3Dnew ca({color:16777215,vertexColors:!0,toneMapped:!1}),i=3D[],r=3D[],s=
=3D{},a=3Dnew tn(16755200),o=3Dnew tn(16711680),l=3Dnew tn(43775),c=3Dnew t=
n(16777215),h=3Dnew tn(3355443);function u(t,e,n){d(t,n),d(e,n)}function d(=
t,e){i.push(0,0,0),r.push(e.r,e.g,e.b),void 0=3D=3D=3Ds[t]&amp;&amp;(s[t]=
=3D[]),s[t].push(i.length/3-1)}u("n1","n2",a),u("n2","n4",a),u("n4","n3",a)=
,u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a)=
,u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",o),=
u("p","n2",o),u("p","n3",o),u("p","n4",o),u("u1","u2",l),u("u2","u3",l),u("=
u3","u1",l),u("c","t",c),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("=
cf1","cf2",h),u("cf3","cf4",h),e.setAttribute("position",new mn(i,3)),e.set=
Attribute("color",new mn(r,3)),super(e,n),this.type=3D"CameraHelper",this.c=
amera=3Dt,this.camera.updateProjectionMatrix&amp;&amp;this.camera.updatePro=
jectionMatrix(),this.matrix=3Dt.matrixWorld,this.matrixAutoUpdate=3D!1,this=
.pointMap=3Ds,this.update()}update(){const t=3Dthis.geometry,e=3Dthis.point=
Map;_h.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),wh=
("c",e,t,_h,0,0,-1),wh("t",e,t,_h,0,0,1),wh("n1",e,t,_h,-1,-1,-1),wh("n2",e=
,t,_h,1,-1,-1),wh("n3",e,t,_h,-1,1,-1),wh("n4",e,t,_h,1,1,-1),wh("f1",e,t,_=
h,-1,-1,1),wh("f2",e,t,_h,1,-1,1),wh("f3",e,t,_h,-1,1,1),wh("f4",e,t,_h,1,1=
,1),wh("u1",e,t,_h,.7,1.1,-1),wh("u2",e,t,_h,-.7,1.1,-1),wh("u3",e,t,_h,0,2=
,-1),wh("cf1",e,t,_h,-1,0,1),wh("cf2",e,t,_h,1,0,1),wh("cf3",e,t,_h,0,-1,1)=
,wh("cf4",e,t,_h,0,1,1),wh("cn1",e,t,_h,-1,0,-1),wh("cn2",e,t,_h,1,0,-1),wh=
("cn3",e,t,_h,0,-1,-1),wh("cn4",e,t,_h,0,1,-1),t.getAttribute("position").n=
eedsUpdate=3D!0}dispose(){this.geometry.dispose(),this.material.dispose()}}=
,t.CanvasRenderer=3Dfunction(){console.error("THREE.CanvasRenderer has been=
 removed")},t.CanvasTexture=3DRa,t.CatmullRomCurve3=3Dbl,t.CineonToneMappin=
g=3D3,t.CircleBufferGeometry=3DPa,t.CircleGeometry=3DPa,t.ClampToEdgeWrappi=
ng=3Du,t.Clock=3Dbc,t.Color=3Dtn,t.ColorKeyframeTrack=3DJo,t.CompressedText=
ure=3DLa,t.CompressedTextureLoader=3Dclass extends ol{constructor(t){super(=
t)}load(t,e,n,i){const r=3Dthis,s=3D[],a=3Dnew La,o=3Dnew cl(this.manager);=
o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(th=
is.requestHeader),o.setWithCredentials(r.withCredentials);let l=3D0;functio=
n c(c){o.load(t[c],(function(t){const n=3Dr.parse(t,!0);s[c]=3D{width:n.wid=
th,height:n.height,format:n.format,mipmaps:n.mipmaps},l+=3D1,6=3D=3D=3Dl&am=
p;&amp;(1=3D=3D=3Dn.mipmapCount&amp;&amp;(a.minFilter=3Dg),a.image=3Ds,a.fo=
rmat=3Dn.format,a.needsUpdate=3D!0,e&amp;&amp;e(a))}),n,i)}if(Array.isArray=
(t))for(let e=3D0,n=3Dt.length;e&lt;n;++e)c(e);else o.load(t,(function(t){c=
onst n=3Dr.parse(t,!0);if(n.isCubemap){const t=3Dn.mipmaps.length/n.mipmapC=
ount;for(let e=3D0;e&lt;t;e++){s[e]=3D{mipmaps:[]};for(let t=3D0;t&lt;n.mip=
mapCount;t++)s[e].mipmaps.push(n.mipmaps[e*n.mipmapCount+t]),s[e].format=3D=
n.format,s[e].width=3Dn.width,s[e].height=3Dn.height}a.image=3Ds}else a.ima=
ge.width=3Dn.width,a.image.height=3Dn.height,a.mipmaps=3Dn.mipmaps;1=3D=3D=
=3Dn.mipmapCount&amp;&amp;(a.minFilter=3Dg),a.format=3Dn.format,a.needsUpda=
te=3D!0,e&amp;&amp;e(a)}),n,i);return a}},t.ConeBufferGeometry=3DIa,t.ConeG=
eometry=3DIa,t.CubeCamera=3Dti,t.CubeReflectionMapping=3Dr,t.CubeRefraction=
Mapping=3Ds,t.CubeTexture=3Dei,t.CubeTextureLoader=3Dul,t.CubeUVReflectionM=
apping=3Dl,t.CubeUVRefractionMapping=3Dc,t.CubicBezierCurve=3DEl,t.CubicBez=
ierCurve3=3DAl,t.CubicInterpolant=3Djo,t.CullFaceBack=3D1,t.CullFaceFront=
=3D2,t.CullFaceFrontBack=3D3,t.CullFaceNone=3D0,t.Curve=3Dml,t.CurvePath=3D=
Nl,t.CustomBlending=3D5,t.CustomToneMapping=3D5,t.CylinderBufferGeometry=3D=
Da,t.CylinderGeometry=3DDa,t.Cylindrical=3Dclass{constructor(t=3D1,e=3D0,n=
=3D0){return this.radius=3Dt,this.theta=3De,this.y=3Dn,this}set(t,e,n){retu=
rn this.radius=3Dt,this.theta=3De,this.y=3Dn,this}copy(t){return this.radiu=
s=3Dt.radius,this.theta=3Dt.theta,this.y=3Dt.y,this}setFromVector3(t){retur=
n this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){re=
turn this.radius=3DMath.sqrt(t*t+n*n),this.theta=3DMath.atan2(t,n),this.y=
=3De,this}clone(){return(new this.constructor).copy(this)}},t.DataTexture=
=3Dii,t.DataTexture2DArray=3DAi,t.DataTexture3D=3DLi,t.DataTextureLoader=3D=
dl,t.DataUtils=3Dclass{static toHalfFloat(t){Lh[0]=3Dt;const e=3DRh[0];let =
n=3De&gt;&gt;16&amp;32768,i=3De&gt;&gt;12&amp;2047;const r=3De&gt;&gt;23&am=
p;255;return r&lt;103?n:r&gt;142?(n|=3D31744,n|=3D(255=3D=3Dr?0:1)&amp;&amp=
;8388607&amp;e,n):r&lt;113?(i|=3D2048,n|=3D(i&gt;&gt;114-r)+(i&gt;&gt;113-r=
&amp;1),n):(n|=3Dr-112&lt;&lt;10|i&gt;&gt;1,n+=3D1&amp;i,n)}},t.DecrementSt=
encilOp=3D7683,t.DecrementWrapStencilOp=3D34056,t.DefaultLoadingManager=3Da=
l,t.DepthFormat=3DA,t.DepthStencilFormat=3DL,t.DepthTexture=3DCa,t.Directio=
nalLight=3DKl,t.DirectionalLightHelper=3Dclass extends Ce{constructor(t,e,n=
){super(),this.light=3Dt,this.light.updateMatrixWorld(),this.matrix=3Dt.mat=
rixWorld,this.matrixAutoUpdate=3D!1,this.color=3Dn,void 0=3D=3D=3De&amp;&am=
p;(e=3D1);let i=3Dnew En;i.setAttribute("position",new mn([-e,e,0,e,e,0,e,-=
e,0,-e,-e,0,-e,e,0],3));const r=3Dnew ca({fog:!1,toneMapped:!1});this.light=
Plane=3Dnew fa(i,r),this.add(this.lightPlane),i=3Dnew En,i.setAttribute("po=
sition",new mn([0,0,0,0,0,1],3)),this.targetLine=3Dnew fa(i,r),this.add(thi=
s.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),th=
is.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.ta=
rgetLine.material.dispose()}update(){gh.setFromMatrixPosition(this.light.ma=
trixWorld),vh.setFromMatrixPosition(this.light.target.matrixWorld),yh.subVe=
ctors(vh,gh),this.lightPlane.lookAt(vh),void 0!=3D=3Dthis.color?(this.light=
Plane.material.color.set(this.color),this.targetLine.material.color.set(thi=
s.color)):(this.lightPlane.material.color.copy(this.light.color),this.targe=
tLine.material.color.copy(this.light.color)),this.targetLine.lookAt(vh),thi=
s.targetLine.scale.z=3Dyh.length()}},t.DiscreteInterpolant=3DXo,t.Dodecahed=
ronBufferGeometry=3DBa,t.DodecahedronGeometry=3DBa,t.DoubleSide=3D2,t.DstAl=
phaFactor=3D206,t.DstColorFactor=3D208,t.DynamicBufferAttribute=3Dfunction(=
t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Us=
e new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.")=
,new sn(t,e).setUsage(nt)},t.DynamicCopyUsage=3D35050,t.DynamicDrawUsage=3D=
nt,t.DynamicReadUsage=3D35049,t.EdgesGeometry=3DGa,t.EdgesHelper=3Dfunction=
(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.Ed=
gesGeometry instead."),new ya(new Ga(t.geometry),new ca({color:void 0!=3D=
=3De?e:16777215}))},t.EllipseCurve=3Dfl,t.EqualDepth=3D4,t.EqualStencilFunc=
=3D514,t.EquirectangularReflectionMapping=3Da,t.EquirectangularRefractionMa=
pping=3Do,t.Euler=3Dfe,t.EventDispatcher=3Drt,t.ExtrudeBufferGeometry=3Dgo,=
t.ExtrudeGeometry=3Dgo,t.FaceColors=3D1,t.FileLoader=3Dcl,t.FlatShading=3D1=
,t.Float16BufferAttribute=3Dpn,t.Float32Attribute=3Dfunction(t,e){return co=
nsole.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32B=
ufferAttribute() instead."),new mn(t,e)},t.Float32BufferAttribute=3Dmn,t.Fl=
oat64Attribute=3Dfunction(t,e){return console.warn("THREE.Float64Attribute =
has been removed. Use new THREE.Float64BufferAttribute() instead."),new fn(=
t,e)},t.Float64BufferAttribute=3Dfn,t.FloatType=3Db,t.Fog=3DSs,t.FogExp2=3D=
Ms,t.Font=3Dpc,t.FontLoader=3Dclass extends ol{constructor(t){super(t)}load=
(t,e,n,i){const r=3Dthis,s=3Dnew cl(this.manager);s.setPath(this.path),s.se=
tRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),=
s.load(t,(function(t){let n;try{n=3DJSON.parse(t)}catch(e){console.warn("TH=
REE.FontLoader: typeface.js support is being deprecated. Use typeface.json =
instead."),n=3DJSON.parse(t.substring(65,t.length-2))}const i=3Dr.parse(n);=
e&amp;&amp;e(i)}),n,i)}parse(t){return new pc(t)}},t.FrontSide=3D0,t.Frustu=
m=3Dai,t.GLBufferAttribute=3DQc,t.GLSL1=3D"100",t.GLSL3=3Dit,t.GammaEncodin=
g=3DZ,t.GreaterDepth=3D6,t.GreaterEqualDepth=3D5,t.GreaterEqualStencilFunc=
=3D518,t.GreaterStencilFunc=3D516,t.GridHelper=3Dfh,t.Group=3Dgs,t.HalfFloa=
tType=3DM,t.HemisphereLight=3DOl,t.HemisphereLightHelper=3Dclass extends Ce=
{constructor(t,e,n){super(),this.light=3Dt,this.light.updateMatrixWorld(),t=
his.matrix=3Dt.matrixWorld,this.matrixAutoUpdate=3D!1,this.color=3Dn;const =
i=3Dnew _o(e);i.rotateY(.5*Math.PI),this.material=3Dnew en({wireframe:!0,fo=
g:!1,toneMapped:!1}),void 0=3D=3D=3Dthis.color&amp;&amp;(this.material.vert=
exColors=3D!0);const r=3Di.getAttribute("position"),s=3Dnew Float32Array(3*=
r.count);i.setAttribute("color",new sn(s,3)),this.add(new Wn(i,this.materia=
l)),this.update()}dispose(){this.children[0].geometry.dispose(),this.childr=
en[0].material.dispose()}update(){const t=3Dthis.children[0];if(void 0!=3D=
=3Dthis.color)this.material.color.set(this.color);else{const e=3Dt.geometry=
.getAttribute("color");ph.copy(this.light.color),mh.copy(this.light.groundC=
olor);for(let t=3D0,n=3De.count;t&lt;n;t++){const i=3Dt&lt;n/2?ph:mh;e.setX=
YZ(t,i.r,i.g,i.b)}e.needsUpdate=3D!0}t.lookAt(dh.setFromMatrixPosition(this=
.light.matrixWorld).negate())}},t.HemisphereLightProbe=3Dyc,t.IcosahedronBu=
fferGeometry=3Dyo,t.IcosahedronGeometry=3Dyo,t.ImageBitmapLoader=3Duc,t.Ima=
geLoader=3Dhl,t.ImageUtils=3D_t,t.ImmediateRenderObject=3Dsh,t.IncrementSte=
ncilOp=3D7682,t.IncrementWrapStencilOp=3D34055,t.InstancedBufferAttribute=
=3Dac,t.InstancedBufferGeometry=3Dsc,t.InstancedInterleavedBuffer=3DJc,t.In=
stancedMesh=3Dla,t.Int16Attribute=3Dfunction(t,e){return console.warn("THRE=
E.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() ins=
tead."),new cn(t,e)},t.Int16BufferAttribute=3Dcn,t.Int32Attribute=3Dfunctio=
n(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new =
THREE.Int32BufferAttribute() instead."),new un(t,e)},t.Int32BufferAttribute=
=3Dun,t.Int8Attribute=3Dfunction(t,e){return console.warn("THREE.Int8Attrib=
ute has been removed. Use new THREE.Int8BufferAttribute() instead."),new an=
(t,e)},t.Int8BufferAttribute=3Dan,t.IntType=3D1013,t.InterleavedBuffer=3DEs=
,t.InterleavedBufferAttribute=3DLs,t.Interpolant=3DWo,t.InterpolateDiscrete=
=3DH,t.InterpolateLinear=3DG,t.InterpolateSmooth=3DU,t.InvertStencilOp=3D53=
86,t.JSONLoader=3Dfunction(){console.error("THREE.JSONLoader has been remov=
ed.")},t.KeepStencilOp=3Dtt,t.KeyframeTrack=3DYo,t.LOD=3DXs,t.LatheBufferGe=
ometry=3Dxo,t.LatheGeometry=3Dxo,t.Layers=3Dge,t.LensFlare=3Dfunction(){con=
sole.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensfla=
re.js")},t.LessDepth=3D2,t.LessEqualDepth=3D3,t.LessEqualStencilFunc=3D515,=
t.LessStencilFunc=3D513,t.Light=3DFl,t.LightProbe=3Dnc,t.Line=3Dfa,t.Line3=
=3Drh,t.LineBasicMaterial=3Dca,t.LineCurve=3DLl,t.LineCurve3=3DRl,t.LineDas=
hedMaterial=3DUo,t.LineLoop=3Dxa,t.LinePieces=3D1,t.LineSegments=3Dya,t.Lin=
eStrip=3D0,t.LinearEncoding=3DX,t.LinearFilter=3Dg,t.LinearInterpolant=3Dqo=
,t.LinearMipMapLinearFilter=3D1008,t.LinearMipMapNearestFilter=3D1007,t.Lin=
earMipmapLinearFilter=3Dy,t.LinearMipmapNearestFilter=3Dv,t.LinearToneMappi=
ng=3D1,t.Loader=3Dol,t.LoaderUtils=3Drc,t.LoadingManager=3Dsl,t.LogLuvEncod=
ing=3D3003,t.LoopOnce=3D2200,t.LoopPingPong=3D2202,t.LoopRepeat=3D2201,t.Lu=
minanceAlphaFormat=3D1025,t.LuminanceFormat=3D1024,t.MOUSE=3D{LEFT:0,MIDDLE=
:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t.Material=3DXe,t.MaterialLoader=3Dic,t.=
Math=3Dgt,t.MathUtils=3Dgt,t.Matrix3=3Dyt,t.Matrix4=3Dse,t.MaxEquation=3D10=
4,t.Mesh=3DWn,t.MeshBasicMaterial=3Den,t.MeshDepthMaterial=3Dcs,t.MeshDista=
nceMaterial=3Dhs,t.MeshFaceMaterial=3Dfunction(t){return console.warn("THRE=
E.MeshFaceMaterial has been removed. Use an Array instead."),t},t.MeshLambe=
rtMaterial=3DHo,t.MeshMatcapMaterial=3DGo,t.MeshNormalMaterial=3DOo,t.MeshP=
hongMaterial=3Dzo,t.MeshPhysicalMaterial=3DBo,t.MeshStandardMaterial=3DNo,t=
.MeshToonMaterial=3DFo,t.MinEquation=3D103,t.MirroredRepeatWrapping=3Dd,t.M=
ixOperation=3D1,t.MultiMaterial=3Dfunction(t=3D[]){return console.warn("THR=
EE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMateria=
l=3D!0,t.materials=3Dt,t.clone=3Dfunction(){return t.slice()},t},t.Multiply=
Blending=3D4,t.MultiplyOperation=3D0,t.NearestFilter=3Dp,t.NearestMipMapLin=
earFilter=3D1005,t.NearestMipMapNearestFilter=3D1004,t.NearestMipmapLinearF=
ilter=3Df,t.NearestMipmapNearestFilter=3Dm,t.NeverDepth=3D0,t.NeverStencilF=
unc=3D512,t.NoBlending=3D0,t.NoColors=3D0,t.NoToneMapping=3D0,t.NormalAnima=
tionBlendMode=3Dj,t.NormalBlending=3D1,t.NotEqualDepth=3D7,t.NotEqualStenci=
lFunc=3D517,t.NumberKeyframeTrack=3DQo,t.Object3D=3DCe,t.ObjectLoader=3Dcla=
ss extends ol{constructor(t){super(t)}load(t,e,n,i){const r=3Dthis,s=3D""=
=3D=3D=3Dthis.path?rc.extractUrlBase(t):this.path;this.resourcePath=3Dthis.=
resourcePath||s;const a=3Dnew cl(this.manager);a.setPath(this.path),a.setRe=
questHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),=
a.load(t,(function(n){let s=3Dnull;try{s=3DJSON.parse(n)}catch(e){return vo=
id 0!=3D=3Di&amp;&amp;i(e),void console.error("THREE:ObjectLoader: Can't pa=
rse "+t+".",e.message)}const a=3Ds.metadata;void 0!=3D=3Da&amp;&amp;void 0!=
=3D=3Da.type&amp;&amp;"geometry"!=3D=3Da.type.toLowerCase()?r.parse(s,e):co=
nsole.error("THREE.ObjectLoader: Can't load "+t)}),n,i)}parse(t,e){const n=
=3Dthis.parseAnimations(t.animations),i=3Dthis.parseShapes(t.shapes),r=3Dth=
is.parseGeometries(t.geometries,i),s=3Dthis.parseImages(t.images,(function(=
){void 0!=3D=3De&amp;&amp;e(l)})),a=3Dthis.parseTextures(t.textures,s),o=3D=
this.parseMaterials(t.materials,a),l=3Dthis.parseObject(t.object,r,o,n),c=
=3Dthis.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,c),void 0!=3D=
=3De){let t=3D!1;for(const e in s)if(s[e]instanceof HTMLImageElement){t=3D!=
0;break}!1=3D=3D=3Dt&amp;&amp;e(l)}return l}parseShapes(t){const e=3D{};if(=
void 0!=3D=3Dt)for(let n=3D0,i=3Dt.length;n&lt;i;n++){const i=3D(new zl).fr=
omJSON(t[n]);e[i.uuid]=3Di}return e}parseSkeletons(t,e){const n=3D{},i=3D{}=
;if(e.traverse((function(t){t.isBone&amp;&amp;(i[t.uuid]=3Dt)})),void 0!=3D=
=3Dt)for(let e=3D0,r=3Dt.length;e&lt;r;e++){const r=3D(new ia).fromJSON(t[e=
],i);n[r.uuid]=3Dr}return n}parseGeometries(t,e){const n=3D{};let i;if(void=
 0!=3D=3Dt){const r=3Dnew oc;for(let s=3D0,a=3Dt.length;s&lt;a;s++){let a;c=
onst o=3Dt[s];switch(o.type){case"PlaneGeometry":case"PlaneBufferGeometry":=
a=3Dnew Po[o.type](o.width,o.height,o.widthSegments,o.heightSegments);break=
;case"BoxGeometry":case"BoxBufferGeometry":a=3Dnew Po[o.type](o.width,o.hei=
ght,o.depth,o.widthSegments,o.heightSegments,o.depthSegments);break;case"Ci=
rcleGeometry":case"CircleBufferGeometry":a=3Dnew Po[o.type](o.radius,o.segm=
ents,o.thetaStart,o.thetaLength);break;case"CylinderGeometry":case"Cylinder=
BufferGeometry":a=3Dnew Po[o.type](o.radiusTop,o.radiusBottom,o.height,o.ra=
dialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break=
;case"ConeGeometry":case"ConeBufferGeometry":a=3Dnew Po[o.type](o.radius,o.=
height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLe=
ngth);break;case"SphereGeometry":case"SphereBufferGeometry":a=3Dnew Po[o.ty=
pe](o.radius,o.widthSegments,o.heightSegments,o.phiStart,o.phiLength,o.thet=
aStart,o.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBuf=
ferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case=
"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometr=
y":case"TetrahedronBufferGeometry":a=3Dnew Po[o.type](o.radius,o.detail);br=
eak;case"RingGeometry":case"RingBufferGeometry":a=3Dnew Po[o.type](o.innerR=
adius,o.outerRadius,o.thetaSegments,o.phiSegments,o.thetaStart,o.thetaLengt=
h);break;case"TorusGeometry":case"TorusBufferGeometry":a=3Dnew Po[o.type](o=
.radius,o.tube,o.radialSegments,o.tubularSegments,o.arc);break;case"TorusKn=
otGeometry":case"TorusKnotBufferGeometry":a=3Dnew Po[o.type](o.radius,o.tub=
e,o.tubularSegments,o.radialSegments,o.p,o.q);break;case"TubeGeometry":case=
"TubeBufferGeometry":a=3Dnew Po[o.type]((new Il[o.path.type]).fromJSON(o.pa=
th),o.tubularSegments,o.radius,o.radialSegments,o.closed);break;case"LatheG=
eometry":case"LatheBufferGeometry":a=3Dnew Po[o.type](o.points,o.segments,o=
.phiStart,o.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBuffer=
Geometry":a=3Dnew Po[o.type](o.vertices,o.indices,o.radius,o.details);break=
;case"ShapeGeometry":case"ShapeBufferGeometry":i=3D[];for(let t=3D0,n=3Do.s=
hapes.length;t&lt;n;t++){const n=3De[o.shapes[t]];i.push(n)}a=3Dnew Po[o.ty=
pe](i,o.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeomet=
ry":i=3D[];for(let t=3D0,n=3Do.shapes.length;t&lt;n;t++){const n=3De[o.shap=
es[t]];i.push(n)}const t=3Do.options.extrudePath;void 0!=3D=3Dt&amp;&amp;(o=
.options.extrudePath=3D(new Il[t.type]).fromJSON(t)),a=3Dnew Po[o.type](i,o=
.options);break;case"BufferGeometry":case"InstancedBufferGeometry":a=3Dr.pa=
rse(o);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geo=
metry" is not supported anymore.');break;default:console.warn('THREE.Object=
Loader: Unsupported geometry type "'+o.type+'"');continue}a.uuid=3Do.uuid,v=
oid 0!=3D=3Do.name&amp;&amp;(a.name=3Do.name),!0=3D=3D=3Da.isBufferGeometry=
&amp;&amp;void 0!=3D=3Do.userData&amp;&amp;(a.userData=3Do.userData),n[o.uu=
id]=3Da}}return n}parseMaterials(t,e){const n=3D{},i=3D{};if(void 0!=3D=3Dt=
){const r=3Dnew ic;r.setTextures(e);for(let e=3D0,s=3Dt.length;e&lt;s;e++){=
const s=3Dt[e];if("MultiMaterial"=3D=3D=3Ds.type){const t=3D[];for(let e=3D=
0;e&lt;s.materials.length;e++){const i=3Ds.materials[e];void 0=3D=3D=3Dn[i.=
uuid]&amp;&amp;(n[i.uuid]=3Dr.parse(i)),t.push(n[i.uuid])}i[s.uuid]=3Dt}els=
e void 0=3D=3D=3Dn[s.uuid]&amp;&amp;(n[s.uuid]=3Dr.parse(s)),i[s.uuid]=3Dn[=
s.uuid]}}return i}parseAnimations(t){const e=3D{};if(void 0!=3D=3Dt)for(let=
 n=3D0;n&lt;t.length;n++){const i=3Dt[n],r=3Dnl.parse(i);e[r.uuid]=3Dr}retu=
rn e}parseImages(t,e){const n=3Dthis,i=3D{};let r;function s(t){if("string"=
=3D=3Dtypeof t){const e=3Dt;return function(t){return n.manager.itemStart(t=
),r.load(t,(function(){n.manager.itemEnd(t)}),void 0,(function(){n.manager.=
itemError(t),n.manager.itemEnd(t)}))}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e=
:n.resourcePath+e)}return t.data?{data:yn(t.type,t.data),width:t.width,heig=
ht:t.height}:null}if(void 0!=3D=3Dt&amp;&amp;t.length&gt;0){const n=3Dnew s=
l(e);r=3Dnew hl(n),r.setCrossOrigin(this.crossOrigin);for(let e=3D0,n=3Dt.l=
ength;e&lt;n;e++){const n=3Dt[e],r=3Dn.url;if(Array.isArray(r)){i[n.uuid]=
=3D[];for(let t=3D0,e=3Dr.length;t&lt;e;t++){const e=3Ds(r[t]);null!=3D=3De=
&amp;&amp;(e instanceof HTMLImageElement?i[n.uuid].push(e):i[n.uuid].push(n=
ew ii(e.data,e.width,e.height)))}}else{const t=3Ds(n.url);null!=3D=3Dt&amp;=
&amp;(i[n.uuid]=3Dt)}}}return i}parseTextures(t,e){function n(t,e){return"n=
umber"=3D=3Dtypeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Cons=
tant should be in numeric form.",t),e[t])}const i=3D{};if(void 0!=3D=3Dt)fo=
r(let r=3D0,s=3Dt.length;r&lt;s;r++){const s=3Dt[r];let a;void 0=3D=3D=3Ds.=
image&amp;&amp;console.warn('THREE.ObjectLoader: No "image" specified for',=
s.uuid),void 0=3D=3D=3De[s.image]&amp;&amp;console.warn("THREE.ObjectLoader=
: Undefined image",s.image);const o=3De[s.image];Array.isArray(o)?(a=3Dnew =
ei(o),6=3D=3D=3Do.length&amp;&amp;(a.needsUpdate=3D!0)):(a=3Do&amp;&amp;o.d=
ata?new ii(o.data,o.width,o.height):new bt(o),o&amp;&amp;(a.needsUpdate=3D!=
0)),a.uuid=3Ds.uuid,void 0!=3D=3Ds.name&amp;&amp;(a.name=3Ds.name),void 0!=
=3D=3Ds.mapping&amp;&amp;(a.mapping=3Dn(s.mapping,lc)),void 0!=3D=3Ds.offse=
t&amp;&amp;a.offset.fromArray(s.offset),void 0!=3D=3Ds.repeat&amp;&amp;a.re=
peat.fromArray(s.repeat),void 0!=3D=3Ds.center&amp;&amp;a.center.fromArray(=
s.center),void 0!=3D=3Ds.rotation&amp;&amp;(a.rotation=3Ds.rotation),void 0=
!=3D=3Ds.wrap&amp;&amp;(a.wrapS=3Dn(s.wrap[0],cc),a.wrapT=3Dn(s.wrap[1],cc)=
),void 0!=3D=3Ds.format&amp;&amp;(a.format=3Ds.format),void 0!=3D=3Ds.type&=
amp;&amp;(a.type=3Ds.type),void 0!=3D=3Ds.encoding&amp;&amp;(a.encoding=3Ds=
.encoding),void 0!=3D=3Ds.minFilter&amp;&amp;(a.minFilter=3Dn(s.minFilter,h=
c)),void 0!=3D=3Ds.magFilter&amp;&amp;(a.magFilter=3Dn(s.magFilter,hc)),voi=
d 0!=3D=3Ds.anisotropy&amp;&amp;(a.anisotropy=3Ds.anisotropy),void 0!=3D=3D=
s.flipY&amp;&amp;(a.flipY=3Ds.flipY),void 0!=3D=3Ds.premultiplyAlpha&amp;&a=
mp;(a.premultiplyAlpha=3Ds.premultiplyAlpha),void 0!=3D=3Ds.unpackAlignment=
&amp;&amp;(a.unpackAlignment=3Ds.unpackAlignment),i[s.uuid]=3Da}return i}pa=
rseObject(t,e,n,i){let r,s,a;function o(t){return void 0=3D=3D=3De[t]&amp;&=
amp;console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function =
l(t){if(void 0!=3D=3Dt){if(Array.isArray(t)){const e=3D[];for(let i=3D0,r=
=3Dt.length;i&lt;r;i++){const r=3Dt[i];void 0=3D=3D=3Dn[r]&amp;&amp;console=
.warn("THREE.ObjectLoader: Undefined material",r),e.push(n[r])}return e}ret=
urn void 0=3D=3D=3Dn[t]&amp;&amp;console.warn("THREE.ObjectLoader: Undefine=
d material",t),n[t]}}switch(t.type){case"Scene":r=3Dnew Ts,void 0!=3D=3Dt.b=
ackground&amp;&amp;Number.isInteger(t.background)&amp;&amp;(r.background=3D=
new tn(t.background)),void 0!=3D=3Dt.fog&amp;&amp;("Fog"=3D=3D=3Dt.fog.type=
?r.fog=3Dnew Ss(t.fog.color,t.fog.near,t.fog.far):"FogExp2"=3D=3D=3Dt.fog.t=
ype&amp;&amp;(r.fog=3Dnew Ms(t.fog.color,t.fog.density)));break;case"Perspe=
ctiveCamera":r=3Dnew Kn(t.fov,t.aspect,t.near,t.far),void 0!=3D=3Dt.focus&a=
mp;&amp;(r.focus=3Dt.focus),void 0!=3D=3Dt.zoom&amp;&amp;(r.zoom=3Dt.zoom),=
void 0!=3D=3Dt.filmGauge&amp;&amp;(r.filmGauge=3Dt.filmGauge),void 0!=3D=3D=
t.filmOffset&amp;&amp;(r.filmOffset=3Dt.filmOffset),void 0!=3D=3Dt.view&amp=
;&amp;(r.view=3DObject.assign({},t.view));break;case"OrthographicCamera":r=
=3Dnew Jl(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!=3D=3Dt.zoom&a=
mp;&amp;(r.zoom=3Dt.zoom),void 0!=3D=3Dt.view&amp;&amp;(r.view=3DObject.ass=
ign({},t.view));break;case"AmbientLight":r=3Dnew $l(t.color,t.intensity);br=
eak;case"DirectionalLight":r=3Dnew Kl(t.color,t.intensity);break;case"Point=
Light":r=3Dnew Zl(t.color,t.intensity,t.distance,t.decay);break;case"RectAr=
eaLight":r=3Dnew tc(t.color,t.intensity,t.width,t.height);break;case"SpotLi=
ght":r=3Dnew Wl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);=
break;case"HemisphereLight":r=3Dnew Ol(t.color,t.groundColor,t.intensity);b=
reak;case"LightProbe":r=3D(new nc).fromJSON(t);break;case"SkinnedMesh":s=3D=
o(t.geometry),a=3Dl(t.material),r=3Dnew $s(s,a),void 0!=3D=3Dt.bindMode&amp=
;&amp;(r.bindMode=3Dt.bindMode),void 0!=3D=3Dt.bindMatrix&amp;&amp;r.bindMa=
trix.fromArray(t.bindMatrix),void 0!=3D=3Dt.skeleton&amp;&amp;(r.skeleton=
=3Dt.skeleton);break;case"Mesh":s=3Do(t.geometry),a=3Dl(t.material),r=3Dnew=
 Wn(s,a);break;case"InstancedMesh":s=3Do(t.geometry),a=3Dl(t.material);cons=
t e=3Dt.count,n=3Dt.instanceMatrix,i=3Dt.instanceColor;r=3Dnew la(s,a,e),r.=
instanceMatrix=3Dnew sn(new Float32Array(n.array),16),void 0!=3D=3Di&amp;&a=
mp;(r.instanceColor=3Dnew sn(new Float32Array(i.array),i.itemSize));break;c=
ase"LOD":r=3Dnew Xs;break;case"Line":r=3Dnew fa(o(t.geometry),l(t.material)=
);break;case"LineLoop":r=3Dnew xa(o(t.geometry),l(t.material));break;case"L=
ineSegments":r=3Dnew ya(o(t.geometry),l(t.material));break;case"PointCloud"=
:case"Points":r=3Dnew Ta(o(t.geometry),l(t.material));break;case"Sprite":r=
=3Dnew Vs(l(t.material));break;case"Group":r=3Dnew gs;break;case"Bone":r=3D=
new ta;break;default:r=3Dnew Ce}if(r.uuid=3Dt.uuid,void 0!=3D=3Dt.name&amp;=
&amp;(r.name=3Dt.name),void 0!=3D=3Dt.matrix?(r.matrix.fromArray(t.matrix),=
void 0!=3D=3Dt.matrixAutoUpdate&amp;&amp;(r.matrixAutoUpdate=3Dt.matrixAuto=
Update),r.matrixAutoUpdate&amp;&amp;r.matrix.decompose(r.position,r.quatern=
ion,r.scale)):(void 0!=3D=3Dt.position&amp;&amp;r.position.fromArray(t.posi=
tion),void 0!=3D=3Dt.rotation&amp;&amp;r.rotation.fromArray(t.rotation),voi=
d 0!=3D=3Dt.quaternion&amp;&amp;r.quaternion.fromArray(t.quaternion),void 0=
!=3D=3Dt.scale&amp;&amp;r.scale.fromArray(t.scale)),void 0!=3D=3Dt.castShad=
ow&amp;&amp;(r.castShadow=3Dt.castShadow),void 0!=3D=3Dt.receiveShadow&amp;=
&amp;(r.receiveShadow=3Dt.receiveShadow),t.shadow&amp;&amp;(void 0!=3D=3Dt.=
shadow.bias&amp;&amp;(r.shadow.bias=3Dt.shadow.bias),void 0!=3D=3Dt.shadow.=
normalBias&amp;&amp;(r.shadow.normalBias=3Dt.shadow.normalBias),void 0!=3D=
=3Dt.shadow.radius&amp;&amp;(r.shadow.radius=3Dt.shadow.radius),void 0!=3D=
=3Dt.shadow.mapSize&amp;&amp;r.shadow.mapSize.fromArray(t.shadow.mapSize),v=
oid 0!=3D=3Dt.shadow.camera&amp;&amp;(r.shadow.camera=3Dthis.parseObject(t.=
shadow.camera))),void 0!=3D=3Dt.visible&amp;&amp;(r.visible=3Dt.visible),vo=
id 0!=3D=3Dt.frustumCulled&amp;&amp;(r.frustumCulled=3Dt.frustumCulled),voi=
d 0!=3D=3Dt.renderOrder&amp;&amp;(r.renderOrder=3Dt.renderOrder),void 0!=3D=
=3Dt.userData&amp;&amp;(r.userData=3Dt.userData),void 0!=3D=3Dt.layers&amp;=
&amp;(r.layers.mask=3Dt.layers),void 0!=3D=3Dt.children){const s=3Dt.childr=
en;for(let t=3D0;t&lt;s.length;t++)r.add(this.parseObject(s[t],e,n,i))}if(v=
oid 0!=3D=3Dt.animations){const e=3Dt.animations;for(let t=3D0;t&lt;e.lengt=
h;t++){const n=3De[t];r.animations.push(i[n])}}if("LOD"=3D=3D=3Dt.type){voi=
d 0!=3D=3Dt.autoUpdate&amp;&amp;(r.autoUpdate=3Dt.autoUpdate);const e=3Dt.l=
evels;for(let t=3D0;t&lt;e.length;t++){const n=3De[t],i=3Dr.getObjectByProp=
erty("uuid",n.object);void 0!=3D=3Di&amp;&amp;r.addLevel(i,n.distance)}}ret=
urn r}bindSkeletons(t,e){0!=3D=3DObject.keys(e).length&amp;&amp;t.traverse(=
(function(t){if(!0=3D=3D=3Dt.isSkinnedMesh&amp;&amp;void 0!=3D=3Dt.skeleton=
){const n=3De[t.skeleton];void 0=3D=3D=3Dn?console.warn("THREE.ObjectLoader=
: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}}))}setT=
exturePath(t){return console.warn("THREE.ObjectLoader: .setTexturePath() ha=
s been renamed to .setResourcePath()."),this.setResourcePath(t)}},t.ObjectS=
paceNormalMap=3D1,t.OctahedronBufferGeometry=3D_o,t.OctahedronGeometry=3D_o=
,t.OneFactor=3D201,t.OneMinusDstAlphaFactor=3D207,t.OneMinusDstColorFactor=
=3D209,t.OneMinusSrcAlphaFactor=3D205,t.OneMinusSrcColorFactor=3D203,t.Orth=
ographicCamera=3DJl,t.PCFShadowMap=3D1,t.PCFSoftShadowMap=3D2,t.PMREMGenera=
tor=3Dclass{constructor(t){this._renderer=3Dt,this._pingPongRenderTarget=3D=
null,this._blurMaterial=3Dfunction(t){const e=3Dnew Float32Array(t),n=3Dnew=
 Lt(0,1,0);return new Io({name:"SphericalGaussianBlur",defines:{n:t},unifor=
ms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{va=
lue:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:=
{value:Nh[3e3]},outputEncoding:{value:Nh[3e3]}},vertexShader:$h(),fragmentS=
hader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n=
\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t=
\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform =
bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;=
\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${tu()}\n\n\t\t\t#define ENVMAP_TYP=
E_CUBE_UV\n\t\t\t#include &lt;cube_uv_reflection_fragment&gt;\n\n\t\t\tvec3=
 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta =3D cos( t=
heta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDire=
ction =3D vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDire=
ction ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * =
( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirecti=
on, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis =3D la=
titudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif (=
 all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis =3D vec3( vOutputD=
irection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis =3D n=
ormalize( axis );\n\n\t\t\t\tgl_FragColor =3D vec4( 0.0, 0.0, 0.0, 1.0 );\n=
\t\t\t\tgl_FragColor.rgb +=3D weights[ 0 ] * getSample( 0.0, axis );\n\n\t\=
t\t\tfor ( int i =3D 1; i &lt; n; i++ ) {\n\n\t\t\t\t\tif ( i &gt;=3D sampl=
es ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta =3D dT=
heta * float( i );\n\t\t\t\t\tgl_FragColor.rgb +=3D weights[ i ] * getSampl=
e( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb +=3D weights[ i ] * ge=
tSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor =3D linearToOu=
tputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,blending:0,depthTest:!1,depthW=
rite:!1})}(Ih),this._equirectShader=3Dnull,this._cubemapShader=3Dnull,this.=
_compileMaterial(this._blurMaterial)}fromScene(t,e=3D0,n=3D.1,i=3D100){kh=
=3Dthis._renderer.getRenderTarget();const r=3Dthis._allocateTargets();retur=
n this._sceneToCubeUV(t,n,i,r),e&gt;0&amp;&amp;this._blur(r,0,0,e),this._ap=
plyPMREM(r),this._cleanup(r),r}fromEquirectangular(t){return this._fromText=
ure(t)}fromCubemap(t){return this._fromTexture(t)}compileCubemapShader(){nu=
ll=3D=3D=3Dthis._cubemapShader&amp;&amp;(this._cubemapShader=3DKh(),this._c=
ompileMaterial(this._cubemapShader))}compileEquirectangularShader(){null=3D=
=3D=3Dthis._equirectShader&amp;&amp;(this._equirectShader=3DQh(),this._comp=
ileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),n=
ull!=3D=3Dthis._cubemapShader&amp;&amp;this._cubemapShader.dispose(),null!=
=3D=3Dthis._equirectShader&amp;&amp;this._equirectShader.dispose();for(let =
t=3D0;t&lt;Oh.length;t++)Oh[t].dispose()}_cleanup(t){this._pingPongRenderTa=
rget.dispose(),this._renderer.setRenderTarget(kh),t.scissorTest=3D!1,Jh(t,0=
,0,t.width,t.height)}_fromTexture(t){kh=3Dthis._renderer.getRenderTarget();=
const e=3Dthis._allocateTargets(t);return this._textureToCubeUV(t,e),this._=
applyPMREM(e),this._cleanup(e),e}_allocateTargets(t){const e=3D{magFilter:p=
,minFilter:p,generateMipmaps:!1,type:x,format:1023,encoding:Xh(t)?t.encodin=
g:J,depthBuffer:!1},n=3DZh(e);return n.depthBuffer=3D!t,this._pingPongRende=
rTarget=3DZh(e),n}_compileMaterial(t){const e=3Dnew Wn(Oh[0],t);this._rende=
rer.compile(e,Fh)}_sceneToCubeUV(t,e,n,i){const r=3Dnew Kn(90,1,e,n),s=3D[1=
,-1,1,1,1,1],a=3D[1,1,1,-1,-1,-1],o=3Dthis._renderer,l=3Do.autoClear,c=3Do.=
outputEncoding,h=3Do.toneMapping;o.getClearColor(Uh),o.toneMapping=3D0,o.ou=
tputEncoding=3DX,o.autoClear=3D!1;let u=3D!1;const d=3Dt.background;if(d){i=
f(d.isColor){Bh.color.copy(d).convertSRGBToLinear(),t.background=3Dnull;con=
st e=3Dqh(Bh.color);Bh.opacity=3De,u=3D!0}}else{Bh.color.copy(Uh).convertSR=
GBToLinear();const t=3Dqh(Bh.color);Bh.opacity=3Dt,u=3D!0}for(let e=3D0;e&l=
t;6;e++){const n=3De%3;0=3D=3Dn?(r.up.set(0,s[e],0),r.lookAt(a[e],0,0)):1=
=3D=3Dn?(r.up.set(0,0,s[e]),r.lookAt(0,a[e],0)):(r.up.set(0,s[e],0),r.lookA=
t(0,0,a[e])),Jh(i,n*Ch,e&gt;2?Ch:0,Ch,Ch),o.setRenderTarget(i),u&amp;&amp;o=
.render(zh,r),o.render(t,r)}o.toneMapping=3Dh,o.outputEncoding=3Dc,o.autoCl=
ear=3Dl}_textureToCubeUV(t,e){const n=3Dthis._renderer;t.isCubeTexture?null=
=3D=3Dthis._cubemapShader&amp;&amp;(this._cubemapShader=3DKh()):null=3D=3Dt=
his._equirectShader&amp;&amp;(this._equirectShader=3DQh());const i=3Dt.isCu=
beTexture?this._cubemapShader:this._equirectShader,r=3Dnew Wn(Oh[0],i),s=3D=
i.uniforms;s.envMap.value=3Dt,t.isCubeTexture||s.texelSize.value.set(1/t.im=
age.width,1/t.image.height),s.inputEncoding.value=3DNh[t.encoding],s.output=
Encoding.value=3DNh[e.texture.encoding],Jh(e,0,0,3*Ch,2*Ch),n.setRenderTarg=
et(e),n.render(r,Fh)}_applyPMREM(t){const e=3Dthis._renderer,n=3De.autoClea=
r;e.autoClear=3D!1;for(let e=3D1;e&lt;Dh;e++){const n=3DMath.sqrt(Gh[e]*Gh[=
e]-Gh[e-1]*Gh[e-1]),i=3Djh[(e-1)%jh.length];this._blur(t,e-1,e,n,i)}e.autoC=
lear=3Dn}_blur(t,e,n,i,r){const s=3Dthis._pingPongRenderTarget;this._halfBl=
ur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_h=
alfBlur(t,e,n,i,r,s,a){const o=3Dthis._renderer,l=3Dthis._blurMaterial;"lat=
itudinal"!=3D=3Ds&amp;&amp;"longitudinal"!=3D=3Ds&amp;&amp;console.error("b=
lur direction must be either latitudinal or longitudinal!");const c=3Dnew W=
n(Oh[i],l),h=3Dl.uniforms,u=3DHh[n]-1,d=3DisFinite(r)?Math.PI/(2*u):2*Math.=
PI/39,p=3Dr/d,m=3DisFinite(r)?1+Math.floor(3*p):Ih;m&gt;Ih&amp;&amp;console=
.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m}=
 samples when the maximum is set to 20`);const f=3D[];let g=3D0;for(let t=
=3D0;t&lt;Ih;++t){const e=3Dt/p,n=3DMath.exp(-e*e/2);f.push(n),0=3D=3Dt?g+=
=3Dn:t&lt;m&amp;&amp;(g+=3D2*n)}for(let t=3D0;t&lt;f.length;t++)f[t]=3Df[t]=
/g;h.envMap.value=3Dt.texture,h.samples.value=3Dm,h.weights.value=3Df,h.lat=
itudinal.value=3D"latitudinal"=3D=3D=3Ds,a&amp;&amp;(h.poleAxis.value=3Da),=
h.dTheta.value=3Dd,h.mipInt.value=3D8-n,h.inputEncoding.value=3DNh[t.textur=
e.encoding],h.outputEncoding.value=3DNh[t.texture.encoding];const v=3DHh[i]=
;Jh(e,3*Math.max(0,Ch-2*v),(0=3D=3D=3Di?0:2*Ch)+2*v*(i&gt;4?i-8+4:0),3*v,2*=
v),o.setRenderTarget(e),o.render(c,Fh)}},t.ParametricBufferGeometry=3Dwo,t.=
ParametricGeometry=3Dwo,t.Particle=3Dfunction(t){return console.warn("THREE=
.Particle has been renamed to THREE.Sprite."),new Vs(t)},t.ParticleBasicMat=
erial=3Dfunction(t){return console.warn("THREE.ParticleBasicMaterial has be=
en renamed to THREE.PointsMaterial."),new _a(t)},t.ParticleSystem=3Dfunctio=
n(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.=
Points."),new Ta(t,e)},t.ParticleSystemMaterial=3Dfunction(t){return consol=
e.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMateri=
al."),new _a(t)},t.Path=3DBl,t.PerspectiveCamera=3DKn,t.Plane=3DNe,t.PlaneB=
ufferGeometry=3Dci,t.PlaneGeometry=3Dci,t.PlaneHelper=3Dclass extends fa{co=
nstructor(t,e=3D1,n=3D16776960){const i=3Dn,r=3Dnew En;r.setAttribute("posi=
tion",new mn([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1=
,0,0,0],3)),r.computeBoundingSphere(),super(r,new ca({color:i,toneMapped:!1=
})),this.type=3D"PlaneHelper",this.plane=3Dt,this.size=3De;const s=3Dnew En=
;s.setAttribute("position",new mn([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,=
1],3)),s.computeBoundingSphere(),this.add(new Wn(s,new en({color:i,opacity:=
.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){let =
e=3D-this.plane.constant;Math.abs(e)&lt;1e-8&amp;&amp;(e=3D1e-8),this.scale=
.set(.5*this.size,.5*this.size,e),this.children[0].material.side=3De&lt;0?1=
:0,this.lookAt(this.plane.normal),super.updateMatrixWorld(t)}},t.PointCloud=
=3Dfunction(t,e){return console.warn("THREE.PointCloud has been renamed to =
THREE.Points."),new Ta(t,e)},t.PointCloudMaterial=3Dfunction(t){return cons=
ole.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial=
."),new _a(t)},t.PointLight=3DZl,t.PointLightHelper=3Dclass extends Wn{cons=
tructor(t,e,n){super(new So(e,4,2),new en({wireframe:!0,fog:!1,toneMapped:!=
1})),this.light=3Dt,this.light.updateMatrixWorld(),this.color=3Dn,this.type=
=3D"PointLightHelper",this.matrix=3Dthis.light.matrixWorld,this.matrixAutoU=
pdate=3D!1,this.update()}dispose(){this.geometry.dispose(),this.material.di=
spose()}update(){void 0!=3D=3Dthis.color?this.material.color.set(this.color=
):this.material.color.copy(this.light.color)}},t.Points=3DTa,t.PointsMateri=
al=3D_a,t.PolarGridHelper=3Dclass extends ya{constructor(t=3D10,e=3D16,n=3D=
8,i=3D64,r=3D4473924,s=3D8947848){r=3Dnew tn(r),s=3Dnew tn(s);const a=3D[],=
o=3D[];for(let n=3D0;n&lt;=3De;n++){const i=3Dn/e*(2*Math.PI),l=3DMath.sin(=
i)*t,c=3DMath.cos(i)*t;a.push(0,0,0),a.push(l,0,c);const h=3D1&amp;n?r:s;o.=
push(h.r,h.g,h.b),o.push(h.r,h.g,h.b)}for(let e=3D0;e&lt;=3Dn;e++){const l=
=3D1&amp;e?r:s,c=3Dt-t/n*e;for(let t=3D0;t&lt;i;t++){let e=3Dt/i*(2*Math.PI=
),n=3DMath.sin(e)*c,r=3DMath.cos(e)*c;a.push(n,0,r),o.push(l.r,l.g,l.b),e=
=3D(t+1)/i*(2*Math.PI),n=3DMath.sin(e)*c,r=3DMath.cos(e)*c,a.push(n,0,r),o.=
push(l.r,l.g,l.b)}}const l=3Dnew En;l.setAttribute("position",new mn(a,3)),=
l.setAttribute("color",new mn(o,3));super(l,new ca({vertexColors:!0,toneMap=
ped:!1})),this.type=3D"PolarGridHelper"}},t.PolyhedronBufferGeometry=3DNa,t=
.PolyhedronGeometry=3DNa,t.PositionalAudio=3Dclass extends Lc{constructor(t=
){super(t),this.panner=3Dthis.context.createPanner(),this.panner.panningMod=
el=3D"HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}g=
etRefDistance(){return this.panner.refDistance}setRefDistance(t){return thi=
s.panner.refDistance=3Dt,this}getRolloffFactor(){return this.panner.rolloff=
Factor}setRolloffFactor(t){return this.panner.rolloffFactor=3Dt,this}getDis=
tanceModel(){return this.panner.distanceModel}setDistanceModel(t){return th=
is.panner.distanceModel=3Dt,this}getMaxDistance(){return this.panner.maxDis=
tance}setMaxDistance(t){return this.panner.maxDistance=3Dt,this}setDirectio=
nalCone(t,e,n){return this.panner.coneInnerAngle=3Dt,this.panner.coneOuterA=
ngle=3De,this.panner.coneOuterGain=3Dn,this}updateMatrixWorld(t){if(super.u=
pdateMatrixWorld(t),!0=3D=3D=3Dthis.hasPlaybackControl&amp;&amp;!1=3D=3D=3D=
this.isPlaying)return;this.matrixWorld.decompose(Rc,Cc,Pc),Dc.set(0,0,1).ap=
plyQuaternion(Cc);const e=3Dthis.panner;if(e.positionX){const t=3Dthis.cont=
ext.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime=
(Rc.x,t),e.positionY.linearRampToValueAtTime(Rc.y,t),e.positionZ.linearRamp=
ToValueAtTime(Rc.z,t),e.orientationX.linearRampToValueAtTime(Dc.x,t),e.orie=
ntationY.linearRampToValueAtTime(Dc.y,t),e.orientationZ.linearRampToValueAt=
Time(Dc.z,t)}else e.setPosition(Rc.x,Rc.y,Rc.z),e.setOrientation(Dc.x,Dc.y,=
Dc.z)}},t.PropertyBinding=3Djc,t.PropertyMixer=3DNc,t.QuadraticBezierCurve=
=3DCl,t.QuadraticBezierCurve3=3DPl,t.Quaternion=3DAt,t.QuaternionKeyframeTr=
ack=3D$o,t.QuaternionLinearInterpolant=3DKo,t.REVISION=3De,t.RGBADepthPacki=
ng=3D3201,t.RGBAFormat=3DE,t.RGBAIntegerFormat=3D1033,t.RGBA_ASTC_10x10_For=
mat=3D37819,t.RGBA_ASTC_10x5_Format=3D37816,t.RGBA_ASTC_10x6_Format=3D37817=
,t.RGBA_ASTC_10x8_Format=3D37818,t.RGBA_ASTC_12x10_Format=3D37820,t.RGBA_AS=
TC_12x12_Format=3D37821,t.RGBA_ASTC_4x4_Format=3D37808,t.RGBA_ASTC_5x4_Form=
at=3D37809,t.RGBA_ASTC_5x5_Format=3D37810,t.RGBA_ASTC_6x5_Format=3D37811,t.=
RGBA_ASTC_6x6_Format=3D37812,t.RGBA_ASTC_8x5_Format=3D37813,t.RGBA_ASTC_8x6=
_Format=3D37814,t.RGBA_ASTC_8x8_Format=3D37815,t.RGBA_BPTC_Format=3D36492,t=
.RGBA_ETC2_EAC_Format=3DO,t.RGBA_PVRTC_2BPPV1_Format=3Dz,t.RGBA_PVRTC_4BPPV=
1_Format=3DB,t.RGBA_S3TC_DXT1_Format=3DC,t.RGBA_S3TC_DXT3_Format=3DP,t.RGBA=
_S3TC_DXT5_Format=3DD,t.RGBDEncoding=3D$,t.RGBEEncoding=3DJ,t.RGBEFormat=3D=
1023,t.RGBFormat=3DT,t.RGBIntegerFormat=3D1032,t.RGBM16Encoding=3DK,t.RGBM7=
Encoding=3DQ,t.RGB_ETC1_Format=3D36196,t.RGB_ETC2_Format=3DF,t.RGB_PVRTC_2B=
PPV1_Format=3DN,t.RGB_PVRTC_4BPPV1_Format=3DI,t.RGB_S3TC_DXT1_Format=3DR,t.=
RGFormat=3D1030,t.RGIntegerFormat=3D1031,t.RawShaderMaterial=3DIo,t.Ray=3Dr=
e,t.Raycaster=3Dclass{constructor(t,e,n=3D0,i=3D1/0){this.ray=3Dnew re(t,e)=
,this.near=3Dn,this.far=3Di,this.camera=3Dnull,this.layers=3Dnew ge,this.pa=
rams=3D{Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}s=
et(t,e){this.ray.set(t,e)}setFromCamera(t,e){e&amp;&amp;e.isPerspectiveCame=
ra?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction=
.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=
=3De):e&amp;&amp;e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.nea=
r+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transf=
ormDirection(e.matrixWorld),this.camera=3De):console.error("THREE.Raycaster=
: Unsupported camera type: "+e.type)}intersectObject(t,e=3D!1,n=3D[]){retur=
n $c(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=3D!1,n=3D[]){for(let i=
=3D0,r=3Dt.length;i&lt;r;i++)$c(t[i],this,n,e);return n.sort(Kc),n}},t.Rect=
AreaLight=3Dtc,t.RedFormat=3D1028,t.RedIntegerFormat=3D1029,t.ReinhardToneM=
apping=3D2,t.RepeatWrapping=3Dh,t.ReplaceStencilOp=3D7681,t.ReverseSubtract=
Equation=3D102,t.RingBufferGeometry=3Dbo,t.RingGeometry=3Dbo,t.SRGB8_ALPHA8=
_ASTC_10x10_Format=3D37851,t.SRGB8_ALPHA8_ASTC_10x5_Format=3D37848,t.SRGB8_=
ALPHA8_ASTC_10x6_Format=3D37849,t.SRGB8_ALPHA8_ASTC_10x8_Format=3D37850,t.S=
RGB8_ALPHA8_ASTC_12x10_Format=3D37852,t.SRGB8_ALPHA8_ASTC_12x12_Format=3D37=
853,t.SRGB8_ALPHA8_ASTC_4x4_Format=3D37840,t.SRGB8_ALPHA8_ASTC_5x4_Format=
=3D37841,t.SRGB8_ALPHA8_ASTC_5x5_Format=3D37842,t.SRGB8_ALPHA8_ASTC_6x5_For=
mat=3D37843,t.SRGB8_ALPHA8_ASTC_6x6_Format=3D37844,t.SRGB8_ALPHA8_ASTC_8x5_=
Format=3D37845,t.SRGB8_ALPHA8_ASTC_8x6_Format=3D37846,t.SRGB8_ALPHA8_ASTC_8=
x8_Format=3D37847,t.Scene=3DTs,t.SceneUtils=3Deu,t.ShaderChunk=3Dhi,t.Shade=
rLib=3Ddi,t.ShaderMaterial=3DJn,t.ShadowMaterial=3DDo,t.Shape=3Dzl,t.ShapeB=
ufferGeometry=3DMo,t.ShapeGeometry=3DMo,t.ShapePath=3Ddc,t.ShapeUtils=3Dpo,=
t.ShortType=3D1011,t.Skeleton=3Dia,t.SkeletonHelper=3Dhh,t.SkinnedMesh=3D$s=
,t.SmoothShading=3D2,t.Sphere=3DJt,t.SphereBufferGeometry=3DSo,t.SphereGeom=
etry=3DSo,t.Spherical=3Dclass{constructor(t=3D1,e=3D0,n=3D0){return this.ra=
dius=3Dt,this.phi=3De,this.theta=3Dn,this}set(t,e,n){return this.radius=3Dt=
,this.phi=3De,this.theta=3Dn,this}copy(t){return this.radius=3Dt.radius,thi=
s.phi=3Dt.phi,this.theta=3Dt.theta,this}makeSafe(){const t=3D1e-6;return th=
is.phi=3DMath.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){re=
turn this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n)=
{return this.radius=3DMath.sqrt(t*t+e*e+n*n),0=3D=3D=3Dthis.radius?(this.th=
eta=3D0,this.phi=3D0):(this.theta=3DMath.atan2(t,n),this.phi=3DMath.acos(ht=
(e/this.radius,-1,1))),this}clone(){return(new this.constructor).copy(this)=
}},t.SphericalHarmonics3=3Dec,t.SplineCurve=3DDl,t.SpotLight=3DWl,t.SpotLig=
htHelper=3Dclass extends Ce{constructor(t,e){super(),this.light=3Dt,this.li=
ght.updateMatrixWorld(),this.matrix=3Dt.matrixWorld,this.matrixAutoUpdate=
=3D!1,this.color=3De;const n=3Dnew En,i=3D[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1=
,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let t=3D0,e=3D1,n=3D32;t&lt;n;t++,e++){c=
onst r=3Dt/n*Math.PI*2,s=3De/n*Math.PI*2;i.push(Math.cos(r),Math.sin(r),1,M=
ath.cos(s),Math.sin(s),1)}n.setAttribute("position",new mn(i,3));const r=3D=
new ca({fog:!1,toneMapped:!1});this.cone=3Dnew ya(n,r),this.add(this.cone),=
this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dis=
pose()}update(){this.light.updateMatrixWorld();const t=3Dthis.light.distanc=
e?this.light.distance:1e3,e=3Dt*Math.tan(this.light.angle);this.cone.scale.=
set(e,e,t),ah.setFromMatrixPosition(this.light.target.matrixWorld),this.con=
e.lookAt(ah),void 0!=3D=3Dthis.color?this.cone.material.color.set(this.colo=
r):this.cone.material.color.copy(this.light.color)}},t.Sprite=3DVs,t.Sprite=
Material=3DRs,t.SrcAlphaFactor=3D204,t.SrcAlphaSaturateFactor=3D210,t.SrcCo=
lorFactor=3D202,t.StaticCopyUsage=3D35046,t.StaticDrawUsage=3Det,t.StaticRe=
adUsage=3D35045,t.StereoCamera=3Dclass{constructor(){this.type=3D"StereoCam=
era",this.aspect=3D1,this.eyeSep=3D.064,this.cameraL=3Dnew Kn,this.cameraL.=
layers.enable(1),this.cameraL.matrixAutoUpdate=3D!1,this.cameraR=3Dnew Kn,t=
his.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=3D!1,this._cache=
=3D{focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:nul=
l}}update(t){const e=3Dthis._cache;if(e.focus!=3D=3Dt.focus||e.fov!=3D=3Dt.=
fov||e.aspect!=3D=3Dt.aspect*this.aspect||e.near!=3D=3Dt.near||e.far!=3D=3D=
t.far||e.zoom!=3D=3Dt.zoom||e.eyeSep!=3D=3Dthis.eyeSep){e.focus=3Dt.focus,e=
.fov=3Dt.fov,e.aspect=3Dt.aspect*this.aspect,e.near=3Dt.near,e.far=3Dt.far,=
e.zoom=3Dt.zoom,e.eyeSep=3Dthis.eyeSep;const n=3Dt.projectionMatrix.clone()=
,i=3De.eyeSep/2,r=3Di*e.near/e.focus,s=3De.near*Math.tan(ot*e.fov*.5)/e.zoo=
m;let a,o;wc.elements[12]=3D-i,_c.elements[12]=3Di,a=3D-s*e.aspect+r,o=3Ds*=
e.aspect+r,n.elements[0]=3D2*e.near/(o-a),n.elements[8]=3D(o+a)/(o-a),this.=
cameraL.projectionMatrix.copy(n),a=3D-s*e.aspect-r,o=3Ds*e.aspect-r,n.eleme=
nts[0]=3D2*e.near/(o-a),n.elements[8]=3D(o+a)/(o-a),this.cameraR.projection=
Matrix.copy(n)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(wc),th=
is.cameraR.matrixWorld.copy(t.matrixWorld).multiply(_c)}},t.StreamCopyUsage=
=3D35042,t.StreamDrawUsage=3D35040,t.StreamReadUsage=3D35041,t.StringKeyfra=
meTrack=3Dtl,t.SubtractEquation=3D101,t.SubtractiveBlending=3D3,t.TOUCH=3D{=
ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t.TangentSpaceNormalMap=3D0,t.Te=
trahedronBufferGeometry=3DTo,t.TetrahedronGeometry=3DTo,t.TextBufferGeometr=
y=3DEo,t.TextGeometry=3DEo,t.Texture=3Dbt,t.TextureLoader=3Dpl,t.TorusBuffe=
rGeometry=3DAo,t.TorusGeometry=3DAo,t.TorusKnotBufferGeometry=3DLo,t.TorusK=
notGeometry=3DLo,t.Triangle=3Dje,t.TriangleFanDrawMode=3D2,t.TriangleStripD=
rawMode=3D1,t.TrianglesDrawMode=3D0,t.TubeBufferGeometry=3DRo,t.TubeGeometr=
y=3DRo,t.UVMapping=3Di,t.Uint16Attribute=3Dfunction(t,e){return console.war=
n("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttrib=
ute() instead."),new hn(t,e)},t.Uint16BufferAttribute=3Dhn,t.Uint32Attribut=
e=3Dfunction(t,e){return console.warn("THREE.Uint32Attribute has been remov=
ed. Use new THREE.Uint32BufferAttribute() instead."),new dn(t,e)},t.Uint32B=
ufferAttribute=3Ddn,t.Uint8Attribute=3Dfunction(t,e){return console.warn("T=
HREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() =
instead."),new on(t,e)},t.Uint8BufferAttribute=3Don,t.Uint8ClampedAttribute=
=3Dfunction(t,e){return console.warn("THREE.Uint8ClampedAttribute has been =
removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new ln(t,e)=
},t.Uint8ClampedBufferAttribute=3Dln,t.Uniform=3DZc,t.UniformsLib=3Dui,t.Un=
iformsUtils=3DZn,t.UnsignedByteType=3Dx,t.UnsignedInt248Type=3DS,t.Unsigned=
IntType=3Dw,t.UnsignedShort4444Type=3D1017,t.UnsignedShort5551Type=3D1018,t=
.UnsignedShort565Type=3D1019,t.UnsignedShortType=3D_,t.VSMShadowMap=3D3,t.V=
ector2=3Dvt,t.Vector3=3DLt,t.Vector4=3DSt,t.VectorKeyframeTrack=3Del,t.Vert=
ex=3Dfunction(t,e,n){return console.warn("THREE.Vertex has been removed. Us=
e THREE.Vector3 instead."),new Lt(t,e,n)},t.VertexColors=3D2,t.VideoTexture=
=3DAa,t.WebGL1Renderer=3Dbs,t.WebGLCubeRenderTarget=3Dni,t.WebGLMultisample=
RenderTarget=3DEt,t.WebGLRenderTarget=3DTt,t.WebGLRenderTargetCube=3Dfuncti=
on(t,e,n){return console.warn("THREE.WebGLRenderTargetCube( width, height, =
options ) is now WebGLCubeRenderTarget( size, options )."),new ni(t,n)},t.W=
ebGLRenderer=3Dws,t.WebGLUtils=3Dms,t.WireframeGeometry=3DCo,t.WireframeHel=
per=3Dfunction(t,e){return console.warn("THREE.WireframeHelper has been rem=
oved. Use THREE.WireframeGeometry instead."),new ya(new Co(t.geometry),new =
ca({color:void 0!=3D=3De?e:16777215}))},t.WrapAroundEnding=3DW,t.XHRLoader=
=3Dfunction(t){return console.warn("THREE.XHRLoader has been renamed to THR=
EE.FileLoader."),new cl(t)},t.ZeroCurvatureEnding=3Dk,t.ZeroFactor=3D200,t.=
ZeroSlopeEnding=3DV,t.ZeroStencilOp=3D0,t.sRGBEncoding=3DY,Object.definePro=
perty(t,"__esModule",{value:!0})}));