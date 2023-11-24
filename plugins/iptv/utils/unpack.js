const UnpackStream=function(){var t={},n=Uint8Array,i=Uint16Array,e=Uint32Array,r=new n(0),a=new n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),h=function(t,n){for(var r=new i(31),a=0;a<31;++a)r[a]=n+=1<<t[a-1];for(var s=new e(r[30]),o=1;o<30;++o)for(var h=r[o];h<r[o+1];++h)s[h]=h-r[o]<<5|o;return[r,s]},f=h(a,2),l=f[0],p=f[1];l[28]=258,p[258]=28;var v,u=h(s,0)[0],d=new i(32768);for(v=0;v<32768;++v){var c=(43690&v)>>>1|(21845&v)<<1;c=(61680&(c=(52428&c)>>>2|(13107&c)<<2))>>>4|(3855&c)<<4,d[v]=((65280&c)>>>8|(255&c)<<8)>>>1}var g=function(t,n,e){for(var r=t.length,a=0,s=new i(n);a<r;++a)t[a]&&++s[t[a]-1];var o,h=new i(n);for(a=0;a<n;++a)h[a]=h[a-1]+s[a-1]<<1;if(e){o=new i(1<<n);var f=15-n;for(a=0;a<r;++a)if(t[a])for(var l=a<<4|t[a],p=n-t[a],v=h[t[a]-1]++<<p,u=v|(1<<p)-1;v<=u;++v)o[d[v]>>>f]=l}else for(o=new i(r),a=0;a<r;++a)t[a]&&(o[a]=d[h[t[a]-1]++]>>>15-t[a]);return o},w=new n(288);for(v=0;v<144;++v)w[v]=8;for(v=144;v<256;++v)w[v]=9;for(v=256;v<280;++v)w[v]=7;for(v=280;v<288;++v)w[v]=8;var y=new n(32);for(v=0;v<32;++v)y[v]=5;var m=g(w,9,1),b=g(y,5,1),T=function(t){for(var n=t[0],i=1;i<t.length;++i)t[i]>n&&(n=t[i]);return n},E=function(t,n,i){var e=n/8|0;return(t[e]|t[e+1]<<8)>>(7&n)&i},k=function(t,n){var i=n/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&n)},C=function(t,r,a){(null==r||r<0)&&(r=0),(null==a||a>t.length)&&(a=t.length);var s=new(2===t.BYTES_PER_ELEMENT?i:4===t.BYTES_PER_ELEMENT?e:n)(a-r);return s.set(t.subarray(r,a)),s};t.FlateErrorCode={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14};var F=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler","invalid header","no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data","determined by unknown compression method"],S=function(t,n,i){var e=new Error(n||F[t]);if(e.code=t,!i)throw e;return e},x=function(){function t(t){this.s={},this.p=new n(0),this.ondata=t}return t.prototype.e=function(t){this.ondata||S(5),this.d&&S(4);var i=this.p.length,e=new n(i+t.length);e.set(this.p),e.set(t,i),this.p=e},t.prototype.c=function(t){this.d=this.s.i=t||!1;var i=this.s.b,e=function(t,i,e){var r=t.length;if(!r||e&&e.f&&!e.l)return i||new n(0);var h=!i||e,f=!e||e.i;e||(e={}),i||(i=new n(3*r));var p=function(t){var e=i.length;if(t>e){var r=new n(Math.max(2*e,t));r.set(i),i=r}},v=e.f||0,d=e.p||0,c=e.b||0,w=e.l,y=e.d,F=e.m,x=e.n,I=8*r;do{if(!w){v=E(t,d,1);var U=E(t,d+1,3);if(d+=3,!U){var D=4+((d+7)/8|0),L=t[D-4]|t[D-3]<<8,z=D+L;if(z>r){f&&S(0);break}h&&p(c+L),i.set(t.subarray(D,z),c),e.b=c+=L,e.p=d=8*z,e.f=v;continue}if(1===U)w=m,y=b,F=9,x=5;else if(2===U){var B=E(t,d,31)+257,M=E(t,d+10,15)+4,N=B+E(t,d+5,31)+1;d+=14;var _,A=new n(N),G=new n(19);for(_=0;_<M;++_)G[o[_]]=E(t,d+3*_,7);d+=3*M;var H=T(G),O=(1<<H)-1,P=g(G,H,1);for(_=0;_<N;){var R=P[E(t,d,O)];d+=15&R;var Y=R>>>4;if(Y<16)A[_++]=Y;else{var Z=0,j=0;for(16===Y?(j=3+E(t,d,3),d+=2,Z=A[_-1]):17===Y?(j=3+E(t,d,7),d+=3):18===Y&&(j=11+E(t,d,127),d+=7);j--;)A[_++]=Z}}var q=A.subarray(0,B),J=A.subarray(B);F=T(q),x=T(J),w=g(q,F,1),y=g(J,x,1)}else S(1);if(d>I){f&&S(0);break}}h&&p(c+131072);for(var K=(1<<F)-1,Q=(1<<x)-1,V=d;;V=d){var W=w[k(t,d)&K],X=W>>>4;if((d+=15&W)>I){f&&S(0);break}if(W||S(2),X<256)i[c++]=X;else{if(256===X){V=d,w=null;break}var $=X-254;if(X>264){var tt=X-257,nt=a[tt];$=E(t,d,(1<<nt)-1)+l[tt],d+=nt}var it=y[k(t,d)&Q],et=it>>>4;it||S(3),d+=15&it;var rt=u[et];if(et>3){var at=s[et];rt+=k(t,d)&(1<<at)-1,d+=at}if(d>I){f&&S(0);break}h&&p(c+131072);for(var st=c+$;c<st;c+=4)i[c]=i[c-rt],i[c+1]=i[c+1-rt],i[c+2]=i[c+2-rt],i[c+3]=i[c+3-rt];c=st}}e.l=w,e.p=V,e.b=c,e.f=v,w&&(v=1,e.m=F,e.d=y,e.n=x)}while(!v);return c===i.length?i:C(i,0,c)}(this.p,this.o,this.s);this.ondata(C(e,i,this.s.b),this.d),this.o=C(e,this.s.b-32768),this.s.b=this.o.length,this.p=C(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(t,n){this.e(t),this.c(n)},t}();t.Inflate=x;var I=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata(t,n)},t}();t.TextBytes=I;var U=function(){function t(t){this.v=1,x.call(this,t)}return t.prototype.push=function(t,n){if(x.prototype.e.call(this,t),this.v){var i=this.p.length>3?function(t){31===t[0]&&139===t[1]&&8===t[2]||S(6,"invalid gzip data");var n=t[3],i=10;4&n&&(i+=t[10]|2+(t[11]<<8));for(var e=(n>>3&1)+(n>>4&1);e>0;)e-=!t[i++];return i+(2&n)}(this.p):4;if(i>=this.p.length&&!n)return;this.p=this.p.subarray(i),this.v=0}n&&(this.p.length<8&&S(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),x.prototype.c.call(this,n)},t}();t.Gunzip=U,t.Decompress=function(){function t(t){this.G=U,this.I=x,this.T=I,this.ondata=t}return t.prototype.push=function(t,i){if(this.ondata||S(5),this.s)this.s.push(t,i);else{if(this.p&&this.p.length){var e=new n(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length)}else this.p=t;if(this.p.length>2){var r=this,a=function(){r.ondata.apply(r,arguments)};this.s=31===this.p[0]&&139===this.p[1]&&8===this.p[2]?new this.G(a):new this.T(a),this.s.push(this.p,i),this.p=null}}},t}();var D="undefined"!=typeof TextDecoder&&new TextDecoder,L=0;try{D.decode(r,{stream:!0}),L=1}catch(t){}return t.DecodeUTF8=function(){function t(t){this.ondata=t,L?this.t=new TextDecoder:this.p=r}return t.prototype.push=function(t,i){if(this.ondata||S(5),i=!!i,this.t)return this.ondata(this.t.decode(t,{stream:!0}),i),void(i&&(this.t.decode().length&&S(8),this.t=null));this.p||S(4);var e=new n(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length);var r=function(t){for(var n="",i=0;;){var e=t[i++],r=(e>127)+(e>223)+(e>239);if(i+r>t.length)return[n,C(t,i-1)];r?3===r?(e=((15&e)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536,n+=String.fromCharCode(55296|e>>10,56320|1023&e)):n+=1&r?String.fromCharCode((31&e)<<6|63&t[i++]):String.fromCharCode((15&e)<<12|(63&t[i++])<<6|63&t[i++]):n+=String.fromCharCode(e)}}(e),a=r[0],s=r[1];i?(s.length&&S(8),this.p=null):this.p=s,this.ondata(a,i)},t}(),t}();

export default UnpackStream