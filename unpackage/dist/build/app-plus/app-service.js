var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'uni-card']],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'isFull']],[1,true]],[[2,'==='],[[7],[3,'isFull']],[1,'true']]],[1,'uni-card--full'],[1,'']]],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'isShadow']],[1,true]],[[2,'==='],[[7],[3,'isShadow']],[1,'true']]],[1,'uni-card--shadow'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'==='],[[7],[3,'mode']],[1,'style']])
Z([[7],[3,'title']])
Z([[2,'==='],[[7],[3,'mode']],[1,'title']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'basic']],[[7],[3,'title']]])
Z([3,'uni-card__header'])
Z([[7],[3,'thumbnail']])
Z([[7],[3,'extra']])
Z([3,'uni-card__content uni-card__content--pd'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'style']],[[7],[3,'extra']]])
Z([[7],[3,'note']])
Z([3,'uni-card__footer'])
Z([[6],[[7],[3,'$slots']],[3,'footer']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'width']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-grid-item__box']],[[2,'?:'],[[7],[3,'showBorder']],[1,'border'],[1,'']]],[[2,'?:'],[[7],[3,'square']],[1,'uni-grid-item__box-square'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'<'],[[7],[3,'index']],[[7],[3,'column']]]],[1,'border-top'],[1,'']]],[[2,'?:'],[[7],[3,'highlight']],[1,'uni-highlight'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'border-color:'],[[7],[3,'borderColor']]],[1,';']])
Z([[2,'==='],[[7],[3,'marker']],[1,'dot']])
Z([[2,'==='],[[7],[3,'marker']],[1,'badge']])
Z([3,'__l'])
Z([[7],[3,'inverted']])
Z([[7],[3,'size']])
Z([[7],[3,'text']])
Z([[7],[3,'type']])
Z([3,'1'])
Z([[2,'==='],[[7],[3,'marker']],[1,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item']],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'showSwitch']]],[1,''],[1,'uni-list-item--hover']])
Z([3,'uni-list-item__container'])
Z([[7],[3,'thumb']])
Z([[7],[3,'showExtraIcon']])
Z([3,'__l'])
Z([3,'uni-icon-wrapper'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([[7],[3,'note']])
Z([[2,'||'],[[2,'||'],[[7],[3,'showBadge']],[[7],[3,'showArrow']]],[[7],[3,'showSwitch']]])
Z([3,'uni-list-item__extra'])
Z([[7],[3,'showBadge']])
Z(z[7])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[7],[3,'showSwitch']])
Z([[7],[3,'showArrow']])
Z(z[7])
Z(z[8])
Z([3,'#bbb'])
Z([1,20])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-953410a0'])
Z([1,5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([1,true])
Z([1,35])
Z([1,false])
Z(z[7])
Z([[2,'-'],[1,45]])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'headerList']])
Z(z[12])
Z(z[0])
Z([[4],[[5],[[5],[1,'data-v-953410a0']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'text']],[[7],[3,'selectedIcon']]],[1,'selectedColor'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-41e48d81'])
Z([1,5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([1,true])
Z([1,false])
Z(z[6])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'headerList']])
Z(z[10])
Z(z[0])
Z([[4],[[5],[[5],[1,'data-v-41e48d81']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'text']],[[7],[3,'selectedIcon']]],[1,'selectedColor'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'v_form data-v-3f01c400'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'user']],[3,'msg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-5cfaa766'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isshowgrid']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-5c6b4d6e'])
Z([1,8])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([1,true])
Z([1,false])
Z(z[7])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'emojis']])
Z(z[11])
Z(z[1])
Z(z[3])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-4bae580e'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'msg'])
Z([[7],[3,'lastMsgs']])
Z(z[4])
Z([[2,'+'],[[6],[[7],[3,'msg']],[3,'unReadCount']],[1,'']])
Z(z[0])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'showMsg']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'lastMsgs']],[1,'']],[[7],[3,'index']]],[1,'from']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'lastMsgs']],[1,'']],[[7],[3,'index']]],[1,'to']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'msg']],[3,'content']])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'../../static/images/'],[[6],[[6],[[7],[3,'msg']],[3,'targetUser']],[3,'header']]],[1,'.png']])
Z([[6],[[6],[[7],[3,'msg']],[3,'targetUser']],[3,'username']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-75457923'])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'scrollH']],[1,'upx']]],[1,';']])
Z([3,'__l'])
Z(z[0])
Z([3,'basic'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z(z[0])
Z(z[5])
Z([3,'2'])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'user']],[3,'type']],[1,'laoban']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'userlist']])
Z(z[0])
Z([3,'data-v-3d597ebd'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'laoban']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'p_card data-v-3d597ebd'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'sendChat']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'userlist']],[1,'']],[[7],[3,'index']]],[1,'_id']]]]]]]]]]]]]]])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[4],[[5],[1,'default']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'v_form data-v-ec523caa'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'user']],[3,'msg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-badge/uni-badge.wxml','./components/uni-card/uni-card.wxml','./components/uni-grid-item/uni-grid-item.wxml','./components/uni-grid/uni-grid.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./pages/dashen/dashen.wxml','./pages/index/index.wxml','./pages/laoban/laoban.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/message/message.wxml','./pages/messagelist/messagelist.wxml','./pages/person/person.wxml','./pages/personList/personList.wxml','./pages/register/register.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
var cI=_v()
_(fE,cI)
if(_oz(z,4,e,s,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oD,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
var oJ=_n('view')
_rz(z,oJ,'class',7,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,8,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(oJ,aL)
if(_oz(z,9,e,s,gg)){aL.wxVkey=1
}
lK.wxXCkey=1
aL.wxXCkey=1
_(hG,oJ)
}
var tM=_n('view')
_rz(z,tM,'class',10,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,11,e,s,gg)){eN.wxVkey=1
}
var bO=_n('slot')
_(tM,bO)
eN.wxXCkey=1
_(oD,tM)
var oH=_v()
_(oD,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
var oP=_n('view')
_rz(z,oP,'class',13,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,14,e,s,gg)){xQ.wxVkey=1
var oR=_n('slot')
_rz(z,oR,'name',15,e,s,gg)
_(xQ,oR)
}
else{xQ.wxVkey=2
}
xQ.wxXCkey=1
_(oH,oP)
}
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cT=_v()
_(r,cT)
if(_oz(z,0,e,s,gg)){cT.wxVkey=1
var hU=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,5,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,6,e,s,gg)){cW.wxVkey=1
var lY=_mz(z,'uni-badge',['bind:__l',7,'inverted',1,'size',2,'text',3,'type',4,'vueId',5],[],e,s,gg)
_(cW,lY)
}
var oX=_v()
_(hU,oX)
if(_oz(z,13,e,s,gg)){oX.wxVkey=1
}
var aZ=_n('slot')
_(hU,aZ)
oV.wxXCkey=1
cW.wxXCkey=1
cW.wxXCkey=3
oX.wxXCkey=1
_(cT,hU)
}
cT.wxXCkey=1
cT.wxXCkey=3
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var e2=_n('slot')
_(r,e2)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var x5=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var o6=_n('view')
_rz(z,o6,'class',4,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,5,e,s,gg)){f7.wxVkey=1
}
else{f7.wxVkey=2
var o0=_v()
_(f7,o0)
if(_oz(z,6,e,s,gg)){o0.wxVkey=1
var cAB=_mz(z,'uni-icons',['bind:__l',7,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(o0,cAB)
}
o0.wxXCkey=1
o0.wxXCkey=3
}
var c8=_v()
_(o6,c8)
if(_oz(z,13,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(o6,h9)
if(_oz(z,14,e,s,gg)){h9.wxVkey=1
var oBB=_n('view')
_rz(z,oBB,'class',15,e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,16,e,s,gg)){lCB.wxVkey=1
var eFB=_mz(z,'uni-badge',['bind:__l',17,'text',1,'type',2,'vueId',3],[],e,s,gg)
_(lCB,eFB)
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,21,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(oBB,tEB)
if(_oz(z,22,e,s,gg)){tEB.wxVkey=1
var bGB=_mz(z,'uni-icons',['bind:__l',23,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(tEB,bGB)
}
lCB.wxXCkey=1
lCB.wxXCkey=3
aDB.wxXCkey=1
tEB.wxXCkey=1
tEB.wxXCkey=3
_(h9,oBB)
}
f7.wxXCkey=1
f7.wxXCkey=3
c8.wxXCkey=1
h9.wxXCkey=1
h9.wxXCkey=3
_(x5,o6)
_(r,x5)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var xIB=_n('slot')
_(r,xIB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var fKB=_mz(z,'uni-grid',['bind:__l',0,'bind:change',1,'class',1,'column',2,'data-event-opts',3,'highlight',4,'hor',5,'showBorder',6,'square',7,'ver',8,'vueId',9,'vueSlots',10],[],e,s,gg)
var cLB=_v()
_(fKB,cLB)
var hMB=function(cOB,oNB,oPB,gg){
var aRB=_mz(z,'uni-grid-item',['bind:__l',16,'class',1,'vueId',2,'vueSlots',3],[],cOB,oNB,gg)
_(oPB,aRB)
return oPB
}
cLB.wxXCkey=4
_2z(z,14,hMB,e,s,gg,cLB,'item','index','index')
_(r,fKB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bUB=_mz(z,'uni-grid',['bind:__l',0,'bind:change',1,'class',1,'column',2,'data-event-opts',3,'highlight',4,'showBorder',5,'square',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
var xWB=function(fYB,oXB,cZB,gg){
var o2B=_mz(z,'uni-grid-item',['bind:__l',14,'class',1,'vueId',2,'vueSlots',3],[],fYB,oXB,gg)
_(cZB,o2B)
return cZB
}
oVB.wxXCkey=4
_2z(z,12,xWB,e,s,gg,oVB,'item','index','index')
_(r,bUB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o4B=_mz(z,'form',['bindsubmit',0,'class',1,'data-event-opts',1],[],e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,3,e,s,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
_(r,o4B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var t7B=_mz(z,'person-list',['bind:__l',0,'class',1,'vueId',1],[],e,s,gg)
_(r,t7B)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var b9B=_v()
_(r,b9B)
if(_oz(z,0,e,s,gg)){b9B.wxVkey=1
var o0B=_mz(z,'uni-grid',['bind:__l',1,'bind:change',1,'class',2,'column',3,'data-event-opts',4,'highlight',5,'showBorder',6,'square',7,'vueId',8,'vueSlots',9],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_mz(z,'uni-grid-item',['bind:__l',15,'class',1,'vueId',2,'vueSlots',3],[],cDC,fCC,gg)
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=4
_2z(z,13,oBC,e,s,gg,xAC,'item','index','index')
_(b9B,o0B)
}
b9B.wxXCkey=1
b9B.wxXCkey=3
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var lIC=_mz(z,'uni-list',['bind:__l',0,'class',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var aJC=_v()
_(lIC,aJC)
var tKC=function(bMC,eLC,oNC,gg){
var oPC=_mz(z,'uni-list-item',['badgeText',8,'bind:__l',1,'bind:click',2,'class',3,'data-event-opts',4,'note',5,'showBadge',6,'thumb',7,'title',8,'vueId',9],[],bMC,eLC,gg)
_(oNC,oPC)
return oNC
}
aJC.wxXCkey=4
_2z(z,6,tKC,e,s,gg,aJC,'msg','index','index')
_(r,lIC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cRC=_mz(z,'scroll-view',['class',0,'scrollY',1,'style',1],[],e,s,gg)
var hSC=_mz(z,'uni-card',['bind:__l',3,'class',1,'mode',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(cRC,hSC)
var oTC=_mz(z,'uni-card',['bind:__l',8,'class',1,'mode',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,13,e,s,gg)){cUC.wxVkey=1
}
cUC.wxXCkey=1
_(cRC,oTC)
_(r,cRC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var lWC=_v()
_(r,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_v()
_(b1C,x3C)
if(_oz(z,5,eZC,tYC,gg)){x3C.wxVkey=1
var o4C=_mz(z,'uni-card',['bind:__l',6,'bind:click',1,'class',2,'data-event-opts',3,'vueId',4,'vueSlots',5],[],eZC,tYC,gg)
_(x3C,o4C)
}
else{x3C.wxVkey=2
var f5C=_mz(z,'uni-card',['bind:__l',12,'bind:click',1,'class',2,'data-event-opts',3,'vueId',4,'vueSlots',5],[],eZC,tYC,gg)
_(x3C,f5C)
}
x3C.wxXCkey=1
x3C.wxXCkey=3
x3C.wxXCkey=3
return b1C
}
lWC.wxXCkey=4
_2z(z,2,aXC,e,s,gg,lWC,'item','index','index')
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var h7C=_mz(z,'form',['bindsubmit',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,3,e,s,gg)){o8C.wxVkey=1
}
o8C.wxXCkey=1
_(r,h7C)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/main/main","pages/index/index","pages/login/login","pages/register/register","pages/dashen/dashen","pages/laoban/laoban","pages/person/person","pages/personList/personList","pages/messagelist/messagelist","pages/message/message"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#007aff","backgroundColor":"#007aff","softinputMode":"adjustResize","softinputNavBar":"none"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","iconPath":"static/images/foot/dashen.png","selectedIconPath":"static/images/foot/dashen-selected.png","text":"大神"},{"pagePath":"pages/messagelist/messagelist","iconPath":"static/images/foot/message.png","selectedIconPath":"static/images/foot/message-selected.png","text":"消息"},{"pagePath":"pages/person/person","iconPath":"static/images/foot/personal.png","selectedIconPath":"static/images/foot/personal-selected.png","text":"个人"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-zhipin","compilerVersion":"2.3.7","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-card/uni-card.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-card/uni-card.wxml']=$gwx('./components/uni-card/uni-card.wxml');

__wxAppCode__['components/uni-grid-item/uni-grid-item.json']={"usingComponents":{"uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-grid-item/uni-grid-item.wxml']=$gwx('./components/uni-grid-item/uni-grid-item.wxml');

__wxAppCode__['components/uni-grid/uni-grid.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-grid/uni-grid.wxml']=$gwx('./components/uni-grid/uni-grid.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons","uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['pages/dashen/dashen.json']={"usingComponents":{"uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item"}};
__wxAppCode__['pages/dashen/dashen.wxml']=$gwx('./pages/dashen/dashen.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"uni-app","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/laoban/laoban.json']={"usingComponents":{"uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item"}};
__wxAppCode__['pages/laoban/laoban.wxml']=$gwx('./pages/laoban/laoban.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"usingComponents":{"person-list":"/pages/personList/personList"}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/message/message.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons","uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item"}};
__wxAppCode__['pages/message/message.wxml']=$gwx('./pages/message/message.wxml');

__wxAppCode__['pages/messagelist/messagelist.json']={"navigationBarTitleText":"消息列表","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}};
__wxAppCode__['pages/messagelist/messagelist.wxml']=$gwx('./pages/messagelist/messagelist.wxml');

__wxAppCode__['pages/person/person.json']={"navigationBarTitleText":"用户中心","usingComponents":{"uni-card":"/components/uni-card/uni-card"}};
__wxAppCode__['pages/person/person.wxml']=$gwx('./pages/person/person.wxml');

__wxAppCode__['pages/personList/personList.json']={"usingComponents":{"uni-card":"/components/uni-card/uni-card"}};
__wxAppCode__['pages/personList/personList.wxml']=$gwx('./pages/personList/personList.wxml');

__wxAppCode__['pages/register/register.json']={"usingComponents":{}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0815":function(e,t,n){"use strict";n.r(t);var o=n("9540");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("fa73");var u,c,a=n("2877"),i=Object(a["a"])(o["default"],u,c,!1,null,null,null);t["default"]=i.exports},1991:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),u=n("5dcb");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={methods:c({},(0,r.mapActions)(["initScoket","getMsgList"])),onLaunch:function(){console.log(e("App Launch"," at App.vue:10"))},onShow:function(){console.log(e("App Show"," at App.vue:13"));var t=o.getStorageSync(u.CACH_USER);o.getStorageSync(u.CACH_MESSAGE);if(t){var n=JSON.parse(t);this.initScoket(n._id)}},onHide:function(){console.log(e("App Hide"," at App.vue:29"))}};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},9540:function(e,t,n){"use strict";n.r(t);var o=n("1991"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},a875:function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");var t=u(n("66fd")),o=u(n("0815")),r=u(n("5359"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,o.default.mpType="app";var i=new t.default(c({store:r.default},o.default));e(i).$mount()}).call(this,n("6e42")["createApp"])},b0f7:function(e,t,n){},fa73:function(e,t,n){"use strict";var o=n("b0f7"),r=n.n(o);r.a}},[["a875","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var r, i, c = n[0], s = n[1], a = n[2], l = 0, m = []; l < c.length; l++) {
      i = c[l], o[i] && m.push(o[i][0]), o[i] = 0;
    }

    for (r in s) {
      Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    }

    p && p(n);

    while (m.length) {
      m.shift()();
    }

    return u.push.apply(u, a || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], r = !0, i = 1; i < t.length; i++) {
        var c = t[i];
        0 !== o[c] && (r = !1);
      }

      r && (u.splice(n--, 1), e = s(s.s = t[0]));
    }

    return e;
  }

  var r = {},
      i = {
    "common/runtime": 0
  },
      o = {
    "common/runtime": 0
  },
      u = [];

  function c(e) {
    return s.p + "" + e + ".js";
  }

  function s(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.e = function (e) {
    var n = [],
        t = {
      "components/uni-card/uni-card": 1,
      "components/uni-grid-item/uni-grid-item": 1,
      "components/uni-grid/uni-grid": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/uni-icons/uni-icons": 1,
      "components/uni-badge/uni-badge": 1
    };
    i[e] ? n.push(i[e]) : 0 !== i[e] && t[e] && n.push(i[e] = new Promise(function (n, t) {
      for (var r = ({
        "components/uni-card/uni-card": "components/uni-card/uni-card",
        "components/uni-grid-item/uni-grid-item": "components/uni-grid-item/uni-grid-item",
        "components/uni-grid/uni-grid": "components/uni-grid/uni-grid",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge"
      }[e] || e) + ".wxss", o = s.p + r, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
        var a = u[c],
            l = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (l === r || l === o)) return n();
      }

      var m = document.getElementsByTagName("style");

      for (c = 0; c < m.length; c++) {
        a = m[c], l = a.getAttribute("data-href");
        if (l === r || l === o) return n();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = n, p.onerror = function (n) {
        var r = n && n.target && n.target.src || o,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete i[e], p.parentNode.removeChild(p), t(u);
      }, p.href = o;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      i[e] = 0;
    }));
    var r = o[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var u = new Promise(function (n, t) {
        r = o[e] = [n, t];
      });
      n.push(r[2] = u);
      var a,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = c(e), a = function a(n) {
        l.onerror = l.onload = null, clearTimeout(m);
        var t = o[e];

        if (0 !== t) {
          if (t) {
            var r = n && ("load" === n.type ? "missing" : n.type),
                i = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + i + ")");
            u.type = r, u.request = i, t[1](u);
          }

          o[e] = void 0;
        }
      };
      var m = setTimeout(function () {
        a({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = a, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, s.m = e, s.c = r, s.d = function (e, n, t) {
    s.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, n) {
    if (1 & n && (e = s(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      s.d(t, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return t;
  }, s.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(n, "a", n), n;
  }, s.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var a = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = a.push.bind(a);
  a.push = n, a = a.slice();

  for (var m = 0; m < a.length; m++) {
    n(a[m]);
  }

  var p = l;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{0:function(t,e){},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var s=o.pop();i=o.join("---COMMA---"),0===s.indexOf(" at ")?i+=s:i+="---COMMA---"+s}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},1468:function(t,e){var n=1e3,r=60*n,o=60*r,i=24*o,s=7*i,a=365.25*i;function c(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var c=parseFloat(e[1]),u=(e[2]||"ms").toLowerCase();switch(u){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*s;case"days":case"day":case"d":return c*i;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function u(t){var e=Math.abs(t);return e>=i?Math.round(t/i)+"d":e>=o?Math.round(t/o)+"h":e>=r?Math.round(t/r)+"m":e>=n?Math.round(t/n)+"s":t+"ms"}function f(t){var e=Math.abs(t);return e>=i?p(t,e,i,"day"):e>=o?p(t,e,o,"hour"):e>=r?p(t,e,r,"minute"):e>=n?p(t,e,n,"second"):t+" ms"}function p(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,e){e=e||{};var n=typeof t;if("string"===n&&t.length>0)return c(t);if("number"===n&&!1===isNaN(t))return e.long?f(t):u(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},1803:function(t,e,n){"use strict";var r=n("1b2b"),o=n("a29b"),i=n("7297"),s=n("75a4"),a=n("2570"),c=n("e5bc"),u=n("34eb")("socket.io-client:manager"),f=n("ee34"),p=n("7a3b"),h=Object.prototype.hasOwnProperty;function l(t,e){if(!(this instanceof l))return new l(t,e);t&&"object"===typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new p({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||s;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=!1!==e.autoConnect,this.autoConnect&&this.open()}t.exports=l,l.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)h.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},l.prototype.updateSocketIds=function(){for(var t in this.nsps)h.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},l.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},i(l.prototype),l.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},l.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},l.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},l.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},l.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},l.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},l.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},l.prototype.open=l.prototype.connect=function(t,e){if(u("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;u("opening %s",this.uri),this.engine=r(this.uri,this.opts);var n=this.engine,o=this;this.readyState="opening",this.skipReconnect=!1;var i=a(n,"open",function(){o.onopen(),t&&t()}),s=a(n,"error",function(e){if(u("connect_error"),o.cleanup(),o.readyState="closed",o.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else o.maybeReconnectOnOpen()});if(!1!==this._timeout){var c=this._timeout;u("connect attempt will timeout after %d",c);var f=setTimeout(function(){u("connect attempt timed out after %d",c),i.destroy(),n.close(),n.emit("error","timeout"),o.emitAll("connect_timeout",c)},c);this.subs.push({destroy:function(){clearTimeout(f)}})}return this.subs.push(i),this.subs.push(s),this},l.prototype.onopen=function(){u("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(a(t,"data",c(this,"ondata"))),this.subs.push(a(t,"ping",c(this,"onping"))),this.subs.push(a(t,"pong",c(this,"onpong"))),this.subs.push(a(t,"error",c(this,"onerror"))),this.subs.push(a(t,"close",c(this,"onclose"))),this.subs.push(a(this.decoder,"decoded",c(this,"ondecoded")))},l.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},l.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},l.prototype.ondata=function(t){this.decoder.add(t)},l.prototype.ondecoded=function(t){this.emit("packet",t)},l.prototype.onerror=function(t){u("error",t),this.emitAll("error",t)},l.prototype.socket=function(t,e){var n=this.nsps[t];if(!n){n=new o(this,t,e),this.nsps[t]=n;var r=this;n.on("connecting",i),n.on("connect",function(){n.id=r.generateId(t)}),this.autoConnect&&i()}function i(){~f(r.connecting,n)||r.connecting.push(n)}return n},l.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},l.prototype.packet=function(t){u("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},l.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},l.prototype.cleanup=function(){u("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},l.prototype.close=l.prototype.disconnect=function(){u("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},l.prototype.onclose=function(t){u("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},l.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)u("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();u("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(u("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(u("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(u("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},l.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},"1b2b":function(t,e,n){"use strict";t.exports=n("ff6d"),t.exports.parser=n("333d")},"1fb5":function(t,e,n){"use strict";e.byteLength=f,e.toByteArray=h,e.fromByteArray=m;for(var r=[],o=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=s.length;a<c;++a)r[a]=s[a],o[s.charCodeAt(a)]=a;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function f(t){var e=u(t),n=e[0],r=e[1];return 3*(n+r)/4-r}function p(t,e,n){return 3*(e+n)/4-n}function h(t){for(var e,n=u(t),r=n[0],s=n[1],a=new i(p(t,r,s)),c=0,f=s>0?r-4:r,h=0;h<f;h+=4)e=o[t.charCodeAt(h)]<<18|o[t.charCodeAt(h+1)]<<12|o[t.charCodeAt(h+2)]<<6|o[t.charCodeAt(h+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=255&e;return 2===s&&(e=o[t.charCodeAt(h)]<<2|o[t.charCodeAt(h+1)]>>4,a[c++]=255&e),1===s&&(e=o[t.charCodeAt(h)]<<10|o[t.charCodeAt(h+1)]<<4|o[t.charCodeAt(h+2)]>>2,a[c++]=e>>8&255,a[c++]=255&e),a}function l(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function d(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(l(r));return o.join("")}function m(t){for(var e,n=t.length,o=n%3,i=[],s=16383,a=0,c=n-o;a<c;a+=s)i.push(d(t,a,a+s>c?c:a+s));return 1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),i.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},2042:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__83A459D"};e.default=r},2570:function(t,e,n){"use strict";function r(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=r},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"28d6":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=u(n("a800")),s=n("facc"),a=n("5dcb"),c=u(n("b7dd"));function u(t){return t&&t.__esModule?t:{default:t}}function f(t){return l(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){m(t,e,n[e])})}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(e,n){i.default.socket||(i.default.socket=(0,i.default)("ws://".concat(a.URL_BASE_SERVER)),i.default.socket.on("receiveMsg",function(o){console.log(t("客户端接收服务器发送的消息",o," at store\\user.js:35")),e=e||JSON.parse(r.getStorageSync(a.CACH_USER))._id,e!==o.from&&e!==o.to||n(s.RECEIVE_MSG,{chatMsg:o,userid:e})}),i.default.socket.on("disconnect",function(){console.log(t("失去连接"," at store\\user.js:47")),g(e,n)}))}var y={state:{user:{header:"",username:"",type:"",msg:"",redirectTo:""},userlist:[],messages:{users:{},chatMsgs:[],unReadCount:0},message:{from:"",to:"",cotent:""}},getters:{user:function(t){return t.user},userlist:function(t){return t.userlist},messages:function(t){return t.messages},message:function(t){return t.message}},mutations:(o={},m(o,s.INIT_SCOKET,function(t,e){t.user=d({},t.user,e)}),m(o,s.AUTH_SUCCESS,function(t,e){var n=t.user,o=n.type,i=n.header;t.user=d({},t.user,e,{redirectTo:(0,a.getRedirectTo)(o,i)}),r.setStorageSync(a.CACH_USER,JSON.stringify(t.user))}),m(o,s.ERROR_MSG,function(t,e){t.user=d({},t.user,{msg:e})}),m(o,s.RESET_USER,function(t,e){t.user=e}),m(o,s.RESET_USER_LIST,function(t,e){t.userlist=e}),m(o,s.RECEIVE_USER_LIST,function(t,e){t.userlist=[].concat(f(t.userlist),f(e))}),m(o,s.RECEIVE_USER,function(t,e){t.user=d({},t.user,e),r.setStorageSync(a.CACH_USER,JSON.stringify(t.user))}),m(o,s.RECEIVE_HEADER,function(t,e){t.user=d({},t.user,{header:e})}),m(o,s.RECEIVE_MSG_LIST,function(t,e){var n=e.chatMsgs,o=e.userid,i=n.reduce(function(t,e){return t+(e.read||e.to!==o?0:1)},0);t.messages=d({},t.messages,e,{unReadCount:i}),r.setStorageSync(a.CACH_MESSAGE,JSON.stringify(t.messages))}),m(o,s.RECEIVE_MSG,function(t,e){var n=e.chatMsg,o=e.userid,i=[].concat(f(t.messages.chatMsgs),[n]),s=t.messages.unReadCount+(n.read||n.to!==o?0:1);t.messages=d({},t.messages,{chatMsgs:i,unReadCount:s}),r.setStorageSync(a.CACH_MESSAGE,JSON.stringify(t.messages))}),m(o,s.MSG_READ,function(t,e){var n=e.from,o=e.to,i=e.count;t.messages.chatMsgs.forEach(function(t){t.from!==n||t.to!==o||t.read||(t.read=!0)});var s=t.messages.chatMsgs.map(function(t){return t.from!==n||t.to!==o||t.read?t:d({},t,{read:!0})}),c=t.messages.unReadCount-i;t.messages=d({},t.messages,{chatMsgs:s,unReadCount:c}),r.setStorageSync(a.CACH_MESSAGE,JSON.stringify(t.messages))}),m(o,s.MSG_SEND,function(t,e){var n=e.from,r=e.to,o=e.content;t.message=d({},t.message,{from:n,to:r,content:o})}),o),actions:{login:function(e,n){var o=e.commit;e.state;return new Promise(function(e,i){(0,c.default)({url:"/login",params:n,method:"POST"}).then(function(n){var i=n.data;if(i.code)o(s.ERROR_MSG,i.msg);else try{r.setStorageSync(a.CACH_USER,JSON.stringify(i.data)),o(s.AUTH_SUCCESS,i.data),e(i.data._id),r.switchTab({url:"../main/main"})}catch(c){console.log(t(c," at store\\user.js:225"))}})})},errorMsg:function(t,e){var n=t.commit;t.state;n(s.ERROR_MSG,e)},register:function(e,n){e.state;var o=e.commit;return new Promise(function(e,i){(0,c.default)({url:"/register",params:n,method:"POST"}).then(function(n){var i=n.data;if(i.code)o(s.ERROR_MSG,i.msg);else try{r.setStorageSync(a.CACH_USER,JSON.stringify(i.data)),o(s.AUTH_SUCCESS,i.data),e(i.data._id),"laoban"==i.data.type?r.reLaunch({url:"../laoban/laoban?path=reg"}):"dashen"==i.data.type&&r.reLaunch({url:"../dashen/dashen?path=reg"})}catch(c){console.log(t(c," at store\\user.js:273"))}})})},updateUser:function(t,e){t.state;var n=t.commit;(0,c.default)({url:"/update",params:e,method:"POST"}).then(function(t){var o=t.data;if(o.code)n(s.ERROR_MSG,o.msg),r.showToast({title:o.msg}),r.reLaunch({url:"../login/login"});else try{n(s.AUTH_SUCCESS,o.data),r.setStorageSync(a.CACH_USER,JSON.stringify(o.data)),"reg"==e.path?r.switchTab({url:"../main/main"}):r.reLaunch({url:"../person/person"})}catch(i){}})},getUserList:function(t,e){t.state;var n=t.commit;n(s.RESET_USER_LIST,[]),(0,c.default)({url:"/userlist",params:{type:e},method:"GET"}).then(function(t){var e=t.data;if(e.code)n(s.ERROR_MSG,e.msg);else try{n(s.RECEIVE_USER_LIST,e.data)}catch(r){}})},resetUser:function(t,e){t.state;var n=t.commit;n(s.RESET_USER,e)},resetUserList:function(t,e){t.state;var n=t.commit;n(s.RESET_USER_LIST,e)},getUser:function(t){t.state;var e=t.commit;(0,c.default)({url:"/user",method:"GET"}).then(function(t){var n=t.data;if(n.code)e(s.ERROR_MSG,n.msg),r.showToast({title:n.msg}),r.reLaunch({url:"../login/login"});else try{e(s.RECEIVE_USER,n.data)}catch(o){}})},getHeader:function(t,e){t.state;var n=t.commit;n(s.RECEIVE_HEADER,e)},getMsgList:function(t,e){t.state;var n=t.commit;g(e,n),(0,c.default)({url:"/msglist",method:"GET"}).then(function(t){var r=t.data;if(r.code)n(s.ERROR_MSG,r.msg);else try{n(s.RECEIVE_MSG_LIST,d({},r.data,{userid:e}))}catch(o){}})},receiveMsg:function(t,e){t.state;var n=t.commit,r=e.chatMsg,o=e.userid;n(s.RECEIVE_MSG,{chatMsg:r,userid:o})},sendMsg:function(t,e){t.state;var n=t.commit,r=e.from,o=e.to,a=e.content;r!=o&&(i.default.socket.emit("sendMsg",{from:r,to:o,content:a}),n(s.MSG_SEND,{from:r,to:o,content:a}))},msgRead:function(e,n){e.state;var r=e.commit,o=n.from,i=n.to;(0,c.default)({url:"/readmsg",method:"POST",params:{from:o}}).then(function(e){try{var n=e.data;if(0===n.code){var a=n.data;r(s.MSG_READ,{count:a,from:o,to:i})}}catch(c){console.log(t("e",c," at store\\user.js:510"))}})},initScoket:function(t,e){t.state;var n=t.commit;g(e._id,n)}}};e.default=y}).call(this,n("0de9")["default"],n("6e42")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return R}),n.d(e,"mapMutations",function(){return T}),n.d(e,"mapGetters",function(){return $}),n.d(e,"mapActions",function(){return q}),n.d(e,"createNamespacedHelpers",function(){return P});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function s(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){s(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,f);var p=function(t){this.register([],t,!1)};function h(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;h(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},p.prototype.update=function(t){h([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&s(e.modules,function(e,o){r.register(t.concat(o),e,n)})},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var l;var d=function(t){var e=this;void 0===t&&(t={}),!l&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new l;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return u.call(s,t,e,n)},this.strict=r,_(this,o,[],this._modules.root),v(this,o),n.forEach(function(t){return t(e)}),l.config.devtools&&i(this)},m={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),v(t,n,e)}function v(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};s(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=l.config.silent;l.config.silent=!0,t._vm=new l({data:{$$state:e},computed:i}),l.config.silent=a,t.strict&&A(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),l.nextTick(function(){return r.$destroy()}))}function _(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]=r),!i&&!o){var a=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){l.set(a,c,r.state)})}var u=r.context=b(t,s,n);r.forEachMutation(function(e,n){var r=s+n;x(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:s+n,o=e.handler||e;E(t,r,o,u)}),r.forEachGetter(function(e,n){var r=s+n;S(t,r,e,u)}),r.forEachChild(function(r,i){_(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=C(n,r,o),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,o){var i=C(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return k(t.state,n)}}}),o}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function x(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function E(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function C(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){l&&t===l||(l=t,r(l))}m.state.get=function(){return this._vm._data.$$state},m.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=C(t,e,n),i=o.type,s=o.payload,a=(o.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=C(t,e),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a)return this._actionSubscribers.forEach(function(t){return t(s,n.state)}),a.length>1?Promise.all(a.map(function(t){return t(i)})):a[0](i)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),v(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));l.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,m);var R=j(function(t,e){var n={};return B(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=D(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),T=j(function(t,e){var n={};return B(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=D(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),$=j(function(t,e){var n={};return B(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),q=j(function(t,e){var n={};return B(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=D(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),P=function(t){return{mapState:R.bind(null,t),mapGetters:$.bind(null,t),mapMutations:T.bind(null,t),mapActions:q.bind(null,t)}};function B(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function j(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var r=t._modulesNamespaceMap[n];return r}var I={Store:d,install:O,version:"3.0.1",mapState:R,mapMutations:T,mapGetters:$,mapActions:q,createNamespacedHelpers:P};e["default"]=I},"32f6":function(t,e,n){"use strict";var r=n("333d"),o=n("7297");function i(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}t.exports=i,o(i.prototype),i.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},i.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},i.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},i.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},i.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},i.prototype.onData=function(t){var e=r.decodePacket(t,this.socket.binaryType);this.onPacket(e)},i.prototype.onPacket=function(t){this.emit("packet",t)},i.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},"333d":function(t,e,n){"use strict";var r,o=n("829e"),i=n("87be"),s=n("78e8"),a=n("82af"),c=n("7027");"undefined"!==typeof ArrayBuffer&&(r=n("8390"));var u="undefined"!==typeof navigator&&/Android/i.test(navigator.userAgent),f="undefined"!==typeof navigator&&/PhantomJS/i.test(navigator.userAgent),p=u||f;e.protocol=3;var h=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},l=o(h),d={type:"error",data:"parser error"},m=n("60bd");function g(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function y(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=h[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function v(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function _(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(p)return v(t,n,r);var o=new Uint8Array(1);o[0]=h[t.type];var i=new m([o.buffer,t.data]);return r(i)}function b(t){try{t=c.decode(t,{strict:!1})}catch(e){return!1}return t}function w(t,e,n){for(var r=new Array(t.length),o=a(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}e.encodePacket=function(t,e,n,r){"function"===typeof e&&(r=e,e=!1),"function"===typeof n&&(r=n,n=null);var o=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!==typeof ArrayBuffer&&o instanceof ArrayBuffer)return y(t,e,r);if("undefined"!==typeof m&&o instanceof m)return _(t,e,r);if(o&&o.base64)return g(t,r);var i=h[t.type];return void 0!==t.data&&(i+=n?c.encode(String(t.data),{strict:!1}):String(t.data)),r(""+i)},e.encodeBase64Packet=function(t,n){var r,o="b"+e.packets[t.type];if("undefined"!==typeof m&&t.data instanceof m){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(t.data)}try{r=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(u){for(var s=new Uint8Array(t.data),a=new Array(s.length),c=0;c<s.length;c++)a[c]=s[c];r=String.fromCharCode.apply(null,a)}return o+=btoa(r),n(o)},e.decodePacket=function(t,n,r){if(void 0===t)return d;if("string"===typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=b(t),!1===t))return d;var o=t.charAt(0);return Number(o)==o&&l[o]?t.length>1?{type:l[o],data:t.substring(1)}:{type:l[o]}:d}var i=new Uint8Array(t),a=(o=i[0],s(t,1));return m&&"blob"===n&&(a=new m([a])),{type:l[o],data:a}},e.decodeBase64Packet=function(t,e){var n=l[t.charAt(0)];if(!r)return{type:n,data:{base64:!0,data:t.substr(1)}};var o=r.decode(t.substr(1));return"blob"===e&&m&&(o=new m([o])),{type:n,data:o}},e.encodePayload=function(t,n,r){"function"===typeof n&&(r=n,n=null);var o=i(t);if(n&&o)return m&&!p?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r);if(!t.length)return r("0:");function s(t){return t.length+":"+t}function a(t,r){e.encodePacket(t,!!o&&n,!1,function(t){r(null,s(t))})}w(t,a,function(t,e){return r(e.join(""))})},e.decodePayload=function(t,n,r){if("string"!==typeof t)return e.decodePayloadAsBinary(t,n,r);var o;if("function"===typeof n&&(r=n,n=null),""===t)return r(d,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var f=t.charAt(c);if(":"===f){if(""===a||a!=(i=Number(a)))return r(d,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(d,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),d.type===o.type&&d.data===o.data)return r(d,0,1);var p=r(o,c+i,u);if(!1===p)return}c+=i,a=""}else a+=f}return""!==a?r(d,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){if(!t.length)return n(new ArrayBuffer(0));function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}w(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"===typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"===typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}o[i++]=e?0:1;var a=n.byteLength.toString();for(s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)})},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"===typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1);for(o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,m){var c=new m([e.buffer,a.buffer,t]);n(null,c)}})}w(t,r,function(t,e){return n(new m(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"===typeof n&&(r=n,n=null);var o=t,i=[];while(o.byteLength>0){for(var a=new Uint8Array(o),c=0===a[0],u="",f=1;;f++){if(255===a[f])break;if(u.length>310)return r(d,0,1);u+=a[f]}o=s(o,2+u.length),u=parseInt(u);var p=s(o,0,u);if(c)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(m){var h=new Uint8Array(p);p="";for(f=0;f<h.length;f++)p+=String.fromCharCode(h[f])}i.push(p),o=s(o,u)}var l=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,l)})}},"34eb":function(t,e,n){(function(r){function o(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"===typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,t=>{"%%"!==t&&(r++,"%c"===t&&(o=r))}),e.splice(o,0,n)}function s(...t){return"object"===typeof console&&console.log&&console.log(...t)}function a(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(n){}}function c(){let t;try{t=e.storage.getItem("debug")}catch(n){}return!t&&"undefined"!==typeof r&&"env"in r&&(t=Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).DEBUG),t}function u(){try{return localStorage}catch(t){}}e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage=u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.exports=n("dc90")(e);const{formatters:f}=t.exports;f.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n("4362"))},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"43fe":function(t,e,n){"use strict";(function(e){var r=n("d9cf"),o=n("ec22");t.exports=f;var i,s=/\n/g,a=/\\n/g;function c(){}function u(){return"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}function f(t){if(r.call(this,t),this.query=this.query||{},!i){var e=u();i=e.___eio=e.___eio||[]}this.index=i.length;var n=this;i.push(function(t){n.onData(t)}),this.query.j=this.index,"function"===typeof addEventListener&&addEventListener("beforeunload",function(){n.script&&(n.script.onerror=c)},!1)}o(f,r),f.prototype.supportsBinary=!1,f.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),r.prototype.doClose.call(this)},f.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!==typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},f.prototype.doWrite=function(t,e){var n=this;if(!this.form){var r,o=document.createElement("form"),i=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;o.className="socketio",o.style.position="absolute",o.style.top="-1000px",o.style.left="-1000px",o.target=c,o.method="POST",o.setAttribute("accept-charset","utf-8"),i.name="d",o.appendChild(i),document.body.appendChild(o),this.form=o,this.area=i}function u(){f(),e()}function f(){if(n.iframe)try{n.form.removeChild(n.iframe)}catch(e){n.onError("jsonp polling iframe removal error",e)}try{var t='<iframe src="javascript:0" name="'+n.iframeId+'">';r=document.createElement(t)}catch(e){r=document.createElement("iframe"),r.name=n.iframeId,r.src="javascript:0"}r.id=n.iframeId,n.form.appendChild(r),n.iframe=r}this.form.action=this.uri(),f(),t=t.replace(a,"\\\n"),this.area.value=t.replace(s,"\\n");try{this.form.submit()}catch(p){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===n.iframe.readyState&&u()}:this.iframe.onload=u}}).call(this,n("c8ba"))},"50bb":function(t,e,n){},5359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("66fd")),o=s(n("2f62")),i=s(n("28d6"));function s(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({modules:{user:i.default}}),c=a;e.default=c},"5dcb":function(t,e,n){"use strict";function r(t,e){var n;return n="laoban"===t?"/laoban":"/dashen",e||(n+="info"),n}Object.defineProperty(e,"__esModule",{value:!0}),e.getRedirectTo=r,e.EMOTIONS=e.CACH_SOCKET=e.CACH_MESSAGE=e.CACH_LASTMSG=e.CACH_USER=e.URL_BASE_SERVER=e.URL_BASE=void 0;var o="/uniAppZhipinApi";e.URL_BASE=o;var i="49.233.86.85:4000";e.URL_BASE_SERVER=i;var s="UNIUSER";e.CACH_USER=s;var a="CACH_LASTMSG";e.CACH_LASTMSG=a;var c="CACH_MESSAGE";e.CACH_MESSAGE=c;var u="CACH_SOCKET";e.CACH_SOCKET=u;var f=[{code:"/::)",text:"[微笑]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif"},{code:"/::~",text:"[伤心]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif"},{code:"/::B",text:"[美女]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif"},{code:"/::|",text:"[发呆]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif"},{code:"/:8-)",text:"[墨镜]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif"},{code:"/::<",text:"[哭]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif"},{code:"/::$",text:"[羞]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif"},{code:"/::X",text:"[哑]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif"},{code:"/::Z",text:"[睡]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif"},{code:"/::'(",text:"[哭]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif"},{code:"/::-|",text:"[囧]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif"},{code:"/::@",text:"[怒]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif"},{code:"/::P",text:"[调皮]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif"},{code:"/::D",text:"[笑]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif"},{code:"/::O",text:"[惊讶]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif"},{code:"/::(",text:"[难过]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif"},{code:"/::+",text:"[酷]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif"},{code:"/:--b",text:"[汗]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif"},{code:"/::Q",text:"[抓狂]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif"},{code:"/::T",text:"[吐]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif"},{code:"/:,@P",text:"[笑]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif"},{code:"/:,@-D",text:"[快乐]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif"},{code:"/::d",text:"[奇]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif"},{code:"/:,@o",text:"[傲]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif"},{code:"/::g",text:"[饿]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif"},{code:"/:|-)",text:"[累]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif"},{code:"/::!",text:"[吓]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif"},{code:"/::L",text:"[汗]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif"},{code:"/::>",text:"[高兴]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif"},{code:"/::,@",text:"[闲]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif"},{code:"/:,@f",text:"[努力]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif"},{code:"/::-S",text:"[骂]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif"},{code:"/:?",text:"[疑问]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif"},{code:"/:,@x",text:"[秘密]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif"},{code:"/:,@@",text:"[乱]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif"},{code:"/::8",text:"[疯]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif"},{code:"/:,@!",text:"[哀]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif"},{code:"/:!!!",text:"[鬼]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif"},{code:"/:xx",text:"[打击]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif"},{code:"/:bye",text:"[bye]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif"},{code:"/:wipe",text:"[汗]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif"},{code:"/:dig",text:"[抠]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif"},{code:"/:handclap",text:"[鼓掌]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif"},{code:"/:&-(",text:"[糟糕]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif"},{code:"/:B-)",text:"[坏笑]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif"},{code:"/:<@",text:"[左哼哼]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif"},{code:"/:@>",text:"[右哼哼]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif"},{code:"/::-O",text:"[委屈]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif"},{code:"/:>-|",text:"[鄙视]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif"},{code:"/:P-(",text:"[委屈]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif"},{code:"/::'|",text:"[快哭了]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif"},{code:"/:X-)",text:"[阴险]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif"},{code:"/::*",text:"[亲亲]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif"},{code:"/:@x",text:"[吓]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif"},{code:"/:8*",text:"[可怜]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif"},{code:"/:pd",text:"[菜刀]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif"},{code:"/:<W>",text:"[西瓜]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif"},{code:"/:beer",text:"[啤酒]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif"},{code:"/:basketb",text:"[篮球]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif"},{code:"/:oo",text:"[乒乓]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif"},{code:"/:coffee",text:"[咖啡]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif"},{code:"/:eat",text:"[饭]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif"},{code:"/:pig",text:"[猪头]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif"},{code:"/:rose",text:"[玫瑰]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif"},{code:"/:fade",text:"[凋谢]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif"},{code:"/:showlove",text:"[献吻]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif"},{code:"/:heart",text:"[爱心]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif"},{code:"/:break",text:"[心碎]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif"},{code:"/:cake",text:"[蛋糕]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif"},{code:"/:li",text:"[闪电]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif"},{code:"/:bome",text:"[炸弹]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif"},{code:"/:kn",text:"[刀]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif"},{code:"/:footb",text:"[足球]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif"},{code:"/:ladybug",text:"[瓢虫]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif"},{code:"/:shit",text:"[便便]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif"},{code:"/:moon",text:"[月亮]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif"},{code:"/:sun",text:"[太阳]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif"},{code:"/:gift",text:"[礼物]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif"},{code:"/:hug",text:"[拥抱]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif"},{code:"/:strong",text:"[强]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif"},{code:"/:weak",text:"[弱]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif"},{code:"/:share",text:"[握手]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif"},{code:"/:v",text:"[胜利]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif"},{code:"/:@)",text:"[抱拳]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif"},{code:"/:jj",text:"[勾引]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif"},{code:"/:@@",text:"[拳头]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif"},{code:"/:bad",text:"[差劲]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif"},{code:"/:lvu",text:"[爱你]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif"},{code:"/:no",text:"[NO]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif"},{code:"/:ok",text:"[OK]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif"},{code:"/:love",text:"[爱情]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif"},{code:"/:<L>",text:"[飞吻]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif"},{code:"/:jump",text:"[跳跳]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif"},{code:"/:shake",text:"[发抖]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif"},{code:"/:<O>",text:"[怄火]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif"},{code:"/:circle",text:"[转圈]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif"},{code:"/:kotow",text:"[磕头]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif"},{code:"/:turn",text:"[回头]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif"},{code:"/:skip",text:"[跳绳]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif"},{code:"/:oY",text:"[投降]",img:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif"}];e.EMOTIONS=f},"60bd":function(t,e,n){"use strict";var r="undefined"!==typeof r?r:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!==typeof MSBlobBuilder?MSBlobBuilder:"undefined"!==typeof MozBlobBuilder&&MozBlobBuilder,o=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),i=o&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),s=r&&r.prototype.append&&r.prototype.getBlob;function a(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function c(t,e){e=e||{};var n=new r;return a(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function u(t,e){return new Blob(a(t),e||{})}"undefined"!==typeof Blob&&(c.prototype=Blob.prototype,u.prototype=Blob.prototype),t.exports=function(){return o?i?Blob:u:s?c:void 0}()},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function f(t){return"[object Object]"===u.call(t)}function p(t){return"[object RegExp]"===u.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function l(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,E=w(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),S=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/\B([A-Z])/g,k=w(function(t){return t.replace(A,"-$1").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var R=Function.prototype.bind?O:C;function T(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function $(t,e){for(var n in e)t[n]=e[n];return t}function q(t){for(var e={},n=0;n<t.length;n++)t[n]&&$(e,t[n]);return e}function P(t,e,n){}var B=function(t,e,n){return!1},j=function(t){return t};function D(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return D(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every(function(n){return D(t[n],e[n])})}catch(u){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function N(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:B,isReservedAttr:B,isUnknownElement:B,getTagNamespace:P,parsePlatformTagName:j,mustUseProp:B,async:!0,_lifecycleHooks:U},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");function G(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y,J="__proto__"in{},X="undefined"!==typeof window,W="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=W&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(X)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===Y&&(Y=!X&&!W&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Y},it=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function st(t){return"function"===typeof t&&/native code/.test(t.toString())}var at,ct="undefined"!==typeof Symbol&&st(Symbol)&&"undefined"!==typeof Reflect&&st(Reflect.ownKeys);at="undefined"!==typeof Set&&st(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=P,ft=0,pt=function(){this.id=ft++,this.subs=[]};function ht(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function lt(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){v(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},mt={child:{configurable:!0}};mt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,mt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function vt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,bt=Object.create(_t),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=_t[t];V(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),i})});var xt=Object.getOwnPropertyNames(bt),Et=!0;function St(t){Et=t}var At=function(t){this.value=t,this.dep=new pt,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?Ct(t,bt,xt):kt(t,bt):Ct(t,bt,xt),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function Ct(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];V(t,i,e[i])}}function Ot(t,e){var n;if(c(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Et&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Rt(t,e,n,r,o){var i=new pt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!o&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return pt.SharedObject.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&qt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!o&&Ot(e),i.notify())}})}}function Tt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Rt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function $t(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function qt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&qt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Rt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Pt=L.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),s=0;s<i.length;s++)n=i[s],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Bt(r,o):Tt(t,n,o));return t}function jt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Bt(r,o):o}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Dt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Nt(t,e,n,r){var o=Object.create(t||null);return e?$(o,e):o}Pt.data=function(t,e,n){return n?jt(t,e,n):e&&"function"!==typeof e?t:jt(t,e)},U.forEach(function(t){Pt[t]=Dt}),M.forEach(function(t){Pt[t+"s"]=Nt}),Pt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in $(o,t),e){var s=o[i],a=e[i];s&&!Array.isArray(s)&&(s=[s]),o[i]=s?s.concat(a):Array.isArray(a)?a:[a]}return o},Pt.props=Pt.methods=Pt.inject=Pt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return $(o,t),e&&$(o,e),o},Pt.provide=jt;var Mt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,s={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=E(o),s[i]={type:null})}else if(f(n))for(var a in n)o=n[a],i=E(a),s[i]=f(o)?o:{type:o};else 0;t.props=s}}function Lt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var s=n[i];r[i]=f(s)?$({from:i},s):{from:s}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Lt(e,n),Ft(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ht(t,e.mixins[r],n);var i,s={};for(i in t)a(i);for(i in e)b(t,i)||a(i);function a(r){var o=Pt[r]||Mt;s[r]=o(t[r],e[r],n,r)}return s}function Vt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=E(n);if(b(o,i))return o[i];var s=S(i);if(b(o,s))return o[s];var a=o[n]||o[i]||o[s];return a}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),s=n[t],a=Xt(Boolean,o.type);if(a>-1)if(i&&!b(o,"default"))s=!1;else if(""===s||s===k(t)){var c=Xt(String,o.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Gt(r,o,t);var u=Et;St(!0),Ot(s),St(u)}return s}function Gt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Yt(e.type)?r.call(t):r}}function Yt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return Yt(t)===Yt(e)}function Xt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Jt(e[n],t))return n;return-1}function Wt(t,e,n){ht();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var s=!1===o[i].call(r,t,e,n);if(s)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{lt()}}function Kt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&l(i)&&!i._handled&&(i.catch(function(t){return Wt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Wt(eo,r,o)}return i}function Zt(t,e,n){if(L.errorHandler)try{return L.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Qt(eo,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!X&&!W||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&st(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(P)}}else if(Q||"undefined"===typeof MutationObserver||!st(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&st(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,se=new MutationObserver(re),ae=document.createTextNode(String(ie));se.observe(ae,{characterData:!0}),te=function(){ie=(ie+1)%2,ae.data=String(ie)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Wt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new at;function fe(t){pe(t,ue),ue.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var he=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function le(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Kt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Kt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,s,a){var c,u,f,p;for(c in t)u=t[c],f=e[c],p=he(c),r(u)||(r(f)?(r(u.fns)&&(u=t[c]=le(u,a)),i(p.once)&&(u=t[c]=s(p.name,u,p.capture)),n(p.name,u,p.capture,p.passive,p.params)):u!==f&&(f.fns=u,t[c]=f));for(c in e)r(t[c])&&(p=he(c),o(p.name,e[c],p.capture))}function me(t,e,n){var i=e.options.props;if(!r(i)){var s={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in i){var f=k(u);ge(s,c,u,f,!0)||ge(s,a,u,f,!1)}return s}}function ge(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ve(t){return a(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function _e(t){return o(t)&&o(t.text)&&s(t.isComment)}function be(t,e){var n,s,c,u,f=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=f.length-1,u=f[c],Array.isArray(s)?s.length>0&&(s=be(s,(e||"")+"_"+n),_e(s[0])&&_e(u)&&(f[c]=yt(u.text+s[0].text),s.shift()),f.push.apply(f,s)):a(s)?_e(u)?f[c]=yt(u.text+s):""!==s&&f.push(yt(s)):_e(s)&&_e(u)?f[c]=yt(u.text+s.text):(i(t._isVList)&&o(s.tag)&&r(s.key)&&o(e)&&(s.key="__vlist"+e+"_"+n+"__"),f.push(s)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=Ee(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Rt(t,n,e[n])}),St(!0))}function Ee(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var s=t[i].from,a=e;while(a){if(a._provided&&b(a._provided,s)){n[i]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,i.context!==e&&i.fnContext!==e||!s||null==s.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Ae)&&delete n[u];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=Ce(e,c,t[c]))}else o={};for(var u in e)u in o||(o[u]=Oe(e,u));return t&&Object.isExtensible(t)&&(t._normalized=o),V(o,"$stable",s),V(o,"$key",a),V(o,"$hasNormal",i),o}function Ce(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ve(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Oe(t,e){return function(){return t[e]}}function Re(t,e){var n,r,i,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),f=u.next();while(!f.done)n.push(e(f.value,n.length)),f=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,i=s.length;r<i;r++)a=s[r],n[r]=e(t[a],a,r);return o(n)||(n=[]),n._isVList=!0,n}function Te(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=$($({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function $e(t){return Vt(this.$options,"filters",t,!0)||j}function qe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Pe(t,e,n,r,o){var i=L.keyCodes[e]||n;return o&&r&&!L.keyCodes[e]?qe(o,r):i?qe(i,t):r?k(r)!==e:void 0}function Be(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=q(n));var s=function(s){if("class"===s||"style"===s||y(s))i=t;else{var a=t.attrs&&t.attrs.type;i=r||L.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=E(s),u=k(s);if(!(c in i)&&!(u in i)&&(i[s]=n[s],o)){var f=t.on||(t.on={});f["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function je(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(r,"__static__"+t,!1),r)}function De(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ne(t[r],e+"_"+r,n);else Ne(t,e,n)}function Ne(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Me(t,e){if(e)if(f(e)){var n=t.on=t.on?$({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ue(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Le(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=De,t._n=m,t._s=d,t._l=Re,t._t=Te,t._q=D,t._i=I,t._m=je,t._f=$e,t._k=Pe,t._b=Be,t._v=yt,t._e=gt,t._u=Ue,t._g=Me,t._d=Le,t._p=Fe}function Ve(t,e,r,o,s){var a,c=this,u=s.options;b(o,"_uid")?(a=Object.create(o),a._original=o):(a=o,o=o._original);var f=i(u._compiled),p=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Ee(u.inject,o),this.slots=function(){return c.$slots||ke(t.scopedSlots,c.$slots=Se(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),f&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var i=rn(a,t,e,n,r,p);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(a,t,e,n,r,p)}}function ze(t,e,r,i,s){var a=t.options,c={},u=a.props;if(o(u))for(var f in u)c[f]=zt(f,u,e||n);else o(r.attrs)&&Ye(c,r.attrs),o(r.props)&&Ye(c,r.props);var p=new Ve(r,c,s,i,t),h=a.render.call(null,p._c,p);if(h instanceof dt)return Ge(h,r,p.parent,a,p);if(Array.isArray(h)){for(var l=ve(h)||[],d=new Array(l.length),m=0;m<l.length;m++)d[m]=Ge(l[m],r,p.parent,a,p);return d}}function Ge(t,e,n,r,o){var i=vt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ye(t,e){for(var n in e)t[E(n)]=e[n]}He(Ve.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var r=t.componentInstance=Ke(t,En);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Cn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Rn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Tn(e,!0):e.$destroy())}},Xe=Object.keys(Je);function We(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,u),void 0===t))return ln(f,e,n,s,a);e=e||{},hr(t),o(e.model)&&tn(t.options,e);var p=me(e,t,a);if(i(t.options.functional))return ze(t,p,e,n,s);var h=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var l=e.slot;e={},l&&(e.slot=l)}Ze(e);var d=t.options.name||a,m=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:h,tag:a,children:s},f);return m}}}function Ke(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Xe.length;n++){var r=Xe[n],o=e[r],i=Je[r];o===i||o&&o._merged||(e[r]=o?Qe(i,o):i)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[r],a=e.model.callback;o(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[r]=[a].concat(s)):i[r]=a}var en=1,nn=2;function rn(t,e,n,r,o,s){return(Array.isArray(n)||a(n))&&(o=r,r=n,n=void 0),i(s)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return gt();if(o(n)&&o(n.is)&&(e=n.is),!e)return gt();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=ve(r):i===en&&(r=ye(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||L.getTagNamespace(e),s=L.isReservedTag(e)?new dt(L.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Vt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):We(c,n,t,r,e)):s=We(e,n,t,r);return Array.isArray(s)?s:o(s)?(o(a)&&sn(s,a),o(n)&&an(n),s):gt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&sn(c,e,n)}}function an(t){c(t.style)&&fe(t.style),c(t.class)&&fe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Se(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Rt(t,"$attrs",i&&i.attrs||n,null,!0),Rt(t,"$listeners",e._parentListeners||n,null,!0)}var un,fn=null;function pn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Wt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=o,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function ln(t,e,n,r,o){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var s=t.owners=[n],a=!0,u=null,f=null;n.$on("hook:destroyed",function(){return v(s,n)});var p=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==f&&(clearTimeout(f),f=null))},h=N(function(n){t.resolved=hn(n,e),a?s.length=0:p(!0)}),d=N(function(e){o(t.errorComp)&&(t.error=!0,p(!0))}),m=t(h,d);return c(m)&&(l(m)?r(t.resolved)&&m.then(h,d):l(m.component)&&(m.component.then(h,d),o(m.error)&&(t.errorComp=hn(m.error,e)),o(m.loading)&&(t.loadingComp=hn(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,p(!1))},m.delay||200)),o(m.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function mn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||mn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function vn(t,e){un.$on(t,e)}function _n(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){un=t,de(e,n||{},vn,_n,bn,t),un=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(i=s[a],i===e||i.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?T(n):n;for(var r=T(arguments,1),o='event handler for "'+t+'"',i=0,s=n.length;i<s;i++)Kt(n[i],e,r,e,o)}return e}}var En=null;function Sn(t){var e=En;return En=t,function(){En=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Sn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$n(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$n(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Cn(t,e,r,o,i){var s=o.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key),u=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var f=t._props,p=t.$options._propKeys||[],h=0;h<p.length;h++){var l=p[h],d=t.$options.props;f[l]=zt(l,d,e,t)}St(!0),t.$options.propsData=e}r=r||n;var m=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,m),u&&(t.$slots=Se(i,o.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Rn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Rn(t.$children[n]);$n(t,"activated")}}function Tn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Tn(t.$children[n]);$n(t,"deactivated")}}function $n(t,e){ht();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Kt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),lt()}var qn=[],Pn=[],Bn={},jn=!1,Dn=!1,In=0;function Nn(){In=qn.length=Pn.length=0,Bn={},jn=Dn=!1}var Mn=Date.now;if(X&&!Q){var Un=window.performance;Un&&"function"===typeof Un.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return Un.now()})}function Ln(){var t,e;for(Mn(),Dn=!0,qn.sort(function(t,e){return t.id-e.id}),In=0;In<qn.length;In++)t=qn[In],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=Pn.slice(),r=qn.slice();Nn(),Vn(n),Fn(r),it&&L.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function Hn(t){t._inactive=!1,Pn.push(t)}function Vn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Rn(t[e],!0)}function zn(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Dn){var n=qn.length-1;while(n>In&&qn[n].id>t.id)n--;qn.splice(n+1,0,t)}else qn.push(t);jn||(jn=!0,ce(Ln))}}var Gn=0,Yn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new at,this.newDepIds=new at,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};Yn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Wt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),lt(),this.cleanupDeps()}return t},Yn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Yn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Yn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Yn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Wt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Yn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Yn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Yn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:P,set:P};function Xn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Wn(t){t._watchers=[];var e=t.$options;e.props&&Kn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):Ot(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Kn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||St(!1);var s=function(i){o.push(i);var s=zt(i,e,n,t);Rt(r,i,s),i in t||Xn(t,"_props",i)};for(var a in e)s(a);St(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||H(i)||Xn(t,"_data",i)}Ot(e,!0)}function Qn(t,e){ht();try{return t.call(e,e)}catch(eo){return Wt(eo,e,"data()"),{}}finally{lt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],s="function"===typeof i?i:i.get;0,r||(n[o]=new Yn(t,s||P,P,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Jn.get=r?rr(e):or(n),Jn.set=P):(Jn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):P,Jn.set=n.set||P),Object.defineProperty(t,e,Jn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:R(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ar(t,n,r[o]);else ar(t,n,r)}}function ar(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Tt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return ar(r,t,e,n);n=n||{},n.user=!0;var o=new Yn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Wt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var ur=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=ur++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Ht(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),yn(e),cn(e),$n(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&xe(e),Wn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&$n(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=lr(t);o&&$(t.extendOptions,o),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function lr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function mr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=T(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Ht(n.options,t),s["super"]=n,s.options.props&&vr(s),s.options.computed&&_r(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,M.forEach(function(t){s[t]=n[t]}),i&&(s.options.components[i]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=$({},s.options),o[r]=s,s}}function vr(t){var e=t.options.props;for(var n in e)Xn(t.prototype,"_props",n)}function _r(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function xr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Er(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var s=n[i];if(s){var a=wr(s.componentOptions);a&&!e(a)&&Sr(n,i,r,o)}}}function Sr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,v(n,e)}fr(dr),cr(dr),xn(dr),kn(dr),pn(dr);var Ar=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Sr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Er(t,function(t){return xr(e,t)})}),this.$watch("exclude",function(e){Er(t,function(t){return!xr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,s=o.exclude;if(i&&(!r||!xr(i,r))||s&&r&&xr(s,r))return e;var a=this,c=a.cache,u=a.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[f]?(e.componentInstance=c[f].componentInstance,v(u,f),u.push(f)):(c[f]=e,u.push(f),this.max&&u.length>parseInt(this.max)&&Sr(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Cr={KeepAlive:kr};function Or(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:$,mergeOptions:Ht,defineReactive:Rt},t.set=Tt,t.delete=$t,t.nextTick=ce,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,$(t.options.components,Cr),mr(t),gr(t),yr(t),br(t)}Or(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Ve}),dr.version="2.6.10";var Rr="[object Array]",Tr="[object Object]";function $r(t,e){var n={};return qr(t,e),Pr(t,e,"",n),n}function qr(t,e){if(t!==e){var n=jr(t),r=jr(e);if(n==Tr&&r==Tr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:qr(i,e[o])}}else n==Rr&&r==Rr&&t.length>=e.length&&e.forEach(function(e,n){qr(t[n],e)})}}function Pr(t,e,n,r){if(t!==e){var o=jr(t),i=jr(e);if(o==Tr)if(i!=Tr||Object.keys(t).length<Object.keys(e).length)Br(r,n,t);else{var s=function(o){var i=t[o],s=e[o],a=jr(i),c=jr(s);if(a!=Rr&&a!=Tr)i!=e[o]&&Br(r,(""==n?"":n+".")+o,i);else if(a==Rr)c!=Rr?Br(r,(""==n?"":n+".")+o,i):i.length<s.length?Br(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Pr(t,s[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(a==Tr)if(c!=Tr||Object.keys(i).length<Object.keys(s).length)Br(r,(""==n?"":n+".")+o,i);else for(var u in i)Pr(i[u],s[u],(""==n?"":n+".")+o+"."+u,r)};for(var a in t)s(a)}else o==Rr?i!=Rr?Br(r,n,t):t.length<e.length?Br(r,n,t):t.forEach(function(t,o){Pr(t,e[o],n+"["+o+"]",r)}):Br(r,n,t)}}function Br(t,e,n){t[e]=n}function jr(t){return Object.prototype.toString.call(t)}function Dr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Ir(t){return qn.find(function(e){return t._watcher===e})}function Nr(t,e){if(!t.__next_tick_pending&&!Ir(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Wt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Mr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Mr(this)}catch(a){console.error(a)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var s=$r(o,i);Object.keys(s).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(s)),this.__next_tick_pending=!0,r.setData(s,function(){n.__next_tick_pending=!1,Dr(n)})):Dr(this)}};function Lr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Lr),t.$options.render||(t.$options.render=Lr),"mp-toutiao"!==t.mpHost&&$n(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Yn(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&$n(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return o(t)||o(e)?Vr(t,zr(e)):""}function Vr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Gr(t):c(t)?Yr(t):"string"===typeof t?t:""}function Gr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Yr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Jr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Xr(t){return Array.isArray(t)?q(t):"string"===typeof t?Jr(t):t}var Wr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Kr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Kr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:T(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Nr(this,t)},Wr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=xe,t.prototype.__call_hook=function(t,e){var n=this;ht();var r,o=n.$options[t],i=t+" hook";if(o)for(var s=0,a=o.length;s<a;s++)r=Kt(o[s],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),lt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Kr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Xr(t),r=e?$(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,s;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(c(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)s=i[r],n[s]=e(t[s],s,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}dr.prototype.__patch__=Ur,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Se,e.createPage=Ee,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||a(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return l(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,m=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function v(t){return"[object Object]"===d.call(t)}function _(t,e){return m.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,E=w(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],A={},k={};function C(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function R(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function T(t,e){Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&g(e[n])&&(t[n]=C(t[n],e[n]))})}function $(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&g(e[n])&&R(t[n],e[n])})}function q(t,e){"string"===typeof t&&v(e)?T(k[t]||(k[t]={}),e):v(t)&&T(A,t)}function P(t,e){"string"===typeof t?v(e)?$(k[t],e):delete k[t]:v(t)&&$(A,t)}function B(t){return function(e){return t(e)||e}}function j(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function D(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(B(o));else{var i=o(e);if(j(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){D(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function N(t,e){var n=[];Array.isArray(A.returnValue)&&n.push.apply(n,f(A.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(A).forEach(function(t){"returnValue"!==t&&(e[t]=A[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var s=M(t);if(s&&Object.keys(s).length){if(Array.isArray(s.invoke)){var a=D(s.invoke,n);return a.then(function(t){return e.apply(void 0,[I(s,t)].concat(o))})}return e.apply(void 0,[I(s,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var L={returnValue:function(t){return j(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,V=/^on/;function z(t){return H.test(t)}function G(t){return F.test(t)}function Y(t){return V.test(t)}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function X(t){return!(z(t)||G(t)||Y(t))}function W(t,e){return X(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return g(n.success)||g(n.fail)||g(n.complete)?N(t,U.apply(void 0,[t,e,n].concat(o))):N(t,J(new Promise(function(r,i){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Q?.5:1:t<0?-n:n}var ot={promiseInterceptor:L},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:q,removeInterceptor:P}),st={},at=[],ct=[],ut=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(ht(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v(e)){var i=!0===o?e:{};for(var s in g(n)&&(n=n(e,i)||{}),e)if(_(n,s)){var a=n[s];g(a)&&(a=a(e[s],e,i)),a?y(a)?i[a]=e[s]:v(a)&&(i[a.name?a.name:s]=a.value):console.warn("app-plus ".concat(t,"暂不支持").concat(s))}else-1!==ut.indexOf(s)?i[s]=ft(t,e[s],r):o||(i[s]=e[s]);return i}return g(e)&&(e=ft(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(st.returnValue)&&(e=st.returnValue(t,e)),pt(t,e,n,{},r)}function lt(t,e){if(_(st,t)){var n=st[t];return n?function(e,r){var o=n;g(n)&&(o=n(e)),e=pt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var s=wx[o.name||t].apply(wx,i);return G(t)?ht(t,s,o.returnValue,z(t)):s}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),mt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(o),g(r)&&r(o)}}mt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function vt(t,e,n){return t[e].apply(t,n)}function _t(){return vt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return vt(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return vt(yt(),"$once",Array.prototype.slice.call(arguments))}function xt(){return vt(yt(),"$emit",Array.prototype.slice.call(arguments))}var Et=Object.freeze({$on:_t,$off:bt,$once:wt,$emit:xt});function St(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;St("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,s=t.close,a=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){a();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return s.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}var Ct=Object.freeze({getSubNVueById:kt,requireNativePlugin:St}),Ot=Page,Rt=Component,Tt=/:/g,$t=w(function(t){return E(t.replace(Tt,"-"))});function qt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[$t(n)].concat(o))}}}function Pt(t,e){var n=e[t];e[t]=n?function(){qt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){qt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pt("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pt("created",t),Rt(t)};var Bt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function jt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Dt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Dt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Dt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Nt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Lt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return v(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var s=[];return Array.isArray(n)&&n.forEach(function(t){s.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),v(r)&&r.props&&s.push(e({properties:Gt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){v(t)&&t.props&&s.push(e({properties:Gt(t.props,!0)}))}),s}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):v(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(v(r)){var o=r["default"];g(o)&&(o=o()),r.type=zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:Ht(e)}}else{var i=zt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Ht(e)}}}),n}function Yt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},_(t,"detail")||(t.detail={}),v(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],s=e[3],a=r?t.__get_value(r,n):n;Number.isInteger(a)?n=o:i?Array.isArray(a)?n=a.find(function(e){return t.__get_value(i,e)===o}):v(a)?n=Object.keys(a).find(function(e){return t.__get_value(i,a[e])===o}):console.error("v-for 暂不支持循环数据：",a):n=a[o],s&&(n=t.__get_value(s,n))}}),n}function Xt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Jt(t,e)}),r}function Wt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,s=!1;if(o&&(s=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return s?[e]:e.detail.__args__||e.detail;var a=Xt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!s?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Wt(t)):"string"===typeof t&&_(a,t)?c.push(a[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Yt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],s=n[1],a=r.charAt(0)===Qt;r=a?r.slice(1):r;var c=r.charAt(0)===Zt;r=c?r.slice(1):r,s&&te(o,r)&&s.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var s=o[r];if(!g(s))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(s.once)return;s.once=!0}i.push(s.apply(o,Kt(e.$vm,t,n[1],n[2],a,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),jt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},It(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function se(t){return Behavior(t)}function ae(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function pe(t){return re(t,{mocks:oe,initRefs:ue})}var he=["onUniNViewMessage"];function le(t){var e=pe(t);return It(e,he),e}function de(t){return App(le(t)),t}function me(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,s=Nt(r.default,t),a=i(s,2),c=a[0],u=a[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Lt(u,r.default.prototype),behaviors:Vt(u,se),properties:Gt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,c]}function ge(t){return me(t,{isPage:ae,initRelation:ce})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ve=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,ve,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return _e(t,{isPage:ae,initRelation:ce})}ve.push.apply(ve,Bt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function xe(t){var e=be(t);return It(e.methods,we),e}function Ee(t){return Component(xe(t))}function Se(t){return Component(ye(t))}at.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var Ae={};Object.keys(it).forEach(function(t){Ae[t]=it[t]}),Object.keys(Et).forEach(function(t){Ae[t]=Et[t]}),Object.keys(Ct).forEach(function(t){Ae[t]=W(t,Ct[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(st,t))&&(Ae[t]=W(t,lt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ae,t.UniEmitter=Et),wx.createApp=de,wx.createPage=Ee,wx.createComponent=Se;var ke=Ae,Ce=ke;e.default=Ce}).call(this,n("c8ba"))},7027:function(t,e,n){"use strict";
/*! https://mths.be/utf8js v2.1.2 by @mathias */var r,o,i,s=String.fromCharCode;function a(t){var e,n,r=[],o=0,i=t.length;while(o<i)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function c(t){var e,n=t.length,r=-1,o="";while(++r<n)e=t[r],e>65535&&(e-=65536,o+=s(e>>>10&1023|55296),e=56320|1023&e),o+=s(e);return o}function u(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function f(t,e){return s(t>>e&63|128)}function p(t,e){if(0==(4294967168&t))return s(t);var n="";return 0==(4294965248&t)?n=s(t>>6&31|192):0==(4294901760&t)?(u(t,e)||(t=65533),n=s(t>>12&15|224),n+=f(t,6)):0==(4292870144&t)&&(n=s(t>>18&7|240),n+=f(t,12),n+=f(t,6)),n+=s(63&t|128),n}function h(t,e){e=e||{};var n,r=!1!==e.strict,o=a(t),i=o.length,s=-1,c="";while(++s<i)n=o[s],c+=p(n,r);return c}function l(){if(i>=o)throw Error("Invalid byte index");var t=255&r[i];if(i++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function d(t){var e,n,s,a,c;if(i>o)throw Error("Invalid byte index");if(i==o)return!1;if(e=255&r[i],i++,0==(128&e))return e;if(192==(224&e)){if(n=l(),c=(31&e)<<6|n,c>=128)return c;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=l(),s=l(),c=(15&e)<<12|n<<6|s,c>=2048)return u(c,t)?c:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=l(),s=l(),a=l(),c=(7&e)<<18|n<<12|s<<6|a,c>=65536&&c<=1114111))return c;throw Error("Invalid UTF-8 detected")}function m(t,e){e=e||{};var n=!1!==e.strict;r=a(t),o=r.length,i=0;var s,u=[];while(!1!==(s=d(n)))u.push(s);return c(u)}t.exports={version:"2.1.2",encode:h,decode:m}},7297:function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},"75a4":function(t,e,n){"use strict";var r=n("34eb")("socket.io-parser"),o=n("7297"),i=n("b799"),s=n("e3db"),a=n("be29");function c(){}e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=c,e.Decoder=l;var u=e.ERROR+'"encode error"';function f(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var o=p(t.data);if(!1===o)return u;n+=o}return r("encoded %j as %s",t,n),n}function p(t){try{return JSON.stringify(t)}catch(e){return!1}}function h(t,e){function n(t){var n=i.deconstructPacket(t),r=f(n.packet),o=n.buffers;o.unshift(r),e(o)}i.removeBlobs(t,n)}function l(){this.reconstructor=null}function d(t){var n=0,o={type:Number(t.charAt(0))};if(null==e.types[o.type])return y("unknown packet type "+o.type);if(e.BINARY_EVENT===o.type||e.BINARY_ACK===o.type){var i="";while("-"!==t.charAt(++n))if(i+=t.charAt(n),n==t.length)break;if(i!=Number(i)||"-"!==t.charAt(n))throw new Error("Illegal attachments");o.attachments=Number(i)}if("/"===t.charAt(n+1)){o.nsp="";while(++n){var a=t.charAt(n);if(","===a)break;if(o.nsp+=a,n===t.length)break}}else o.nsp="/";var c=t.charAt(n+1);if(""!==c&&Number(c)==c){o.id="";while(++n){a=t.charAt(n);if(null==a||Number(a)!=a){--n;break}if(o.id+=t.charAt(n),n===t.length)break}o.id=Number(o.id)}if(t.charAt(++n)){var u=m(t.substr(n)),f=!1!==u&&(o.type===e.ERROR||s(u));if(!f)return y("invalid payload");o.data=u}return r("decoded %s as %j",t,o),o}function m(t){try{return JSON.parse(t)}catch(e){return!1}}function g(t){this.reconPack=t,this.buffers=[]}function y(t){return{type:e.ERROR,data:"parser error: "+t}}c.prototype.encode=function(t,n){if(r("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)h(t,n);else{var o=f(t);n([o])}},o(l.prototype),l.prototype.add=function(t){var n;if("string"===typeof t)n=d(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new g(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!a(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},l.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},g.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=i.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},g.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},"78e8":function(t,e,n){"use strict";t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},"7a3b":function(t,e,n){"use strict";function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"829e":function(t,e,n){"use strict";t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},"82af":function(t,e,n){"use strict";function r(t,e,n){var r=!1;return n=n||o,i.count=t,0===t?e():i;function i(t,o){if(i.count<=0)throw new Error("after called too many times");--i.count,t?(r=!0,e(t),e=n):0!==i.count||r||e(null,o)}}function o(){}t.exports=r},8390:function(t,e){(function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var f=new ArrayBuffer(a),p=new Uint8Array(f);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],p[u++]=r<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return f}})()},"87be":function(t,e,n){"use strict";(function(e){var r=n("e3db"),o=Object.prototype.toString,i="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===o.call(Blob),s="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===o.call(File);function a(t){if(!t||"object"!==typeof t)return!1;if(r(t)){for(var n=0,o=t.length;n<o;n++)if(a(t[n]))return!0;return!1}if("function"===typeof e&&e.isBuffer&&e.isBuffer(t)||"function"===typeof ArrayBuffer&&t instanceof ArrayBuffer||i&&t instanceof Blob||s&&t instanceof File)return!0;if(t.toJSON&&"function"===typeof t.toJSON&&1===arguments.length)return a(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&a(t[c]))return!0;return!1}t.exports=a}).call(this,n("b639").Buffer)},"8b81":function(t,e,n){"use strict";var r=n("b85c"),o=n("34eb")("socket.io-client:url");function i(t,e){var n=t;e=e||"undefined"!==typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"===typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(o("protocol-less url %s",t),t="undefined"!==typeof e?e.protocol+"//"+t:"https://"+t),o("parse %s",t),n=r(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var i=-1!==n.host.indexOf(":"),s=i?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}t.exports=i},"8bdb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/main/main":{},"pages/index/index":{navigationBarTitleText:"uni-app"},"pages/login/login":{},"pages/register/register":{},"pages/dashen/dashen":{},"pages/laoban/laoban":{},"pages/person/person":{navigationBarTitleText:"用户中心"},"pages/personList/personList":{},"pages/messagelist/messagelist":{navigationBarTitleText:"消息列表"},"pages/message/message":{}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#007aff",backgroundColor:"#007aff",softinputMode:"adjustResize",softinputNavBar:"none"}};e.default=r},9152:function(t,e){e.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,c=(1<<a)-1,u=c>>1,f=-7,p=n?o-1:0,h=n?-1:1,l=t[e+p];for(p+=h,i=l&(1<<-f)-1,l>>=-f,f+=a;f>0;i=256*i+t[e+p],p+=h,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=r;f>0;s=256*s+t[e+p],p+=h,f-=8);if(0===i)i=1-u;else{if(i===c)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,r),i-=u}return(l?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,a,c,u=8*i-o-1,f=(1<<u)-1,p=f>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=r?0:i-1,d=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),e+=s+p>=1?h/c:h*Math.pow(2,1-p),e*c>=2&&(s++,c/=2),s+p>=f?(a=0,s=f):s+p>=1?(a=(e*c-1)*Math.pow(2,o),s+=p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;t[n+l]=255&a,l+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[n+l]=255&s,l+=d,s/=256,u-=8);t[n+l-d]|=128*m}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var p=e.version,h="https://tongji.dcloud.io/uni/stat",l="https://tongji.dcloud.io/uni/stat.gif",d=1800,m=300,g=10,y="__DC_STAT_UUID",v="__DC_UUID_VALUE";function _(){var e="";if("n"===E()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=v}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,v)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},x=function(){return parseInt((new Date).getTime()/1e3)},E=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==E()&&"qq"!==E()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===E()?plus.runtime.version:""},k=function(){var t=E(),e="";return"n"===t&&(e=plus.runtime.channel),e},C=function(e){var n=E(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},O="First__Visit__Time",R="Last__Visit__Time",T=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=x(),t.setStorageSync(O,n),t.removeStorageSync(R)),n},$=function(){var e=t.getStorageSync(R),n=0;return n=e||"",t.setStorageSync(R,x()),n},q="__page__residence__time",P=0,B=0,j=function(){return P=x(),"n"===E()&&t.setStorageSync(q,x()),P},D=function(){return B=x(),"n"===E()&&(P=t.getStorageSync(q)),B-P},I="Total__Visit__Count",N=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},M=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,L=0,F=function(){var t=(new Date).getTime();return U=t,L=0,t},H=function(){var t=(new Date).getTime();return L=t,t},V=function(t){var e=0;if(0!==U&&(e=L-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>m;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===E()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},G=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===E()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},Y=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=n("8bdb").default,W=n("2042").default||n("2042"),K=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:E(),mpn:S(),ak:W.appid,usv:p,v:A(),ch:k(),cn:"",pn:"",ct:"",t:x(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=V("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=V();F();var r=G(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=G(this),e=z();if(this._navigationBarTitle.config=X&&X.pages[e]&&X.pages[e].titleNView&&X.pages[e].titleNView.titleText||X&&X.pages[e]&&X.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=V("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=x(),this.statData.sc=C(t.scene),this.statData.fvts=T(),this.statData.lvts=$(),this.statData.tvc=N(),"n"===E()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:x(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:x(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:x(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;W.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=x(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var s=this._reportingRequestData;if("n"===E()&&(s=t.getStorageSync("__UNI__STAT__DATA")||{}),s[e.lt]||(s[e.lt]=[]),s[e.lt].push(e),"n"===E()&&t.setStorageSync("__UNI__STAT__DATA",s),!(D()<g)||n){var a=this._reportingRequestData;"n"===E()&&(a=t.getStorageSync("__UNI__STAT__DATA")),j();var c=[],u=[],f=[],h=function(t){var e=a[t];e.forEach(function(e){var n=w(e);0===t?c.push(n):3===t?f.push(n):u.push(n)})};for(var l in a)h(l);c.push.apply(c,u.concat(f));var d={usv:p,t:o,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===E()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==E()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(M(t)).options;e.src=l+"?"+n}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return c(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return s(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,j(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,Y(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,Y(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:x(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"9c25":function(t,e,n){"use strict";var r=n("d573"),o=n("c1eb"),i=n("43fe"),s=n("d93a");function a(t){var e,n=!1,s=!1,a=!1!==t.jsonp;if("undefined"!==typeof location){var c="https:"===location.protocol,u=location.port;u||(u=c?443:80),n=t.hostname!==location.hostname||u!==t.port,s=t.secure!==c}if(t.xdomain=n,t.xscheme=s,e=new r(t),"open"in e&&!t.forceJSONP)return new o(t);if(!a)throw new Error("JSONP disabled");return new i(t)}e.polling=a,e.websocket=s},"9e7e":function(t,e,n){"use strict";var r,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),i=64,s={},a=0,c=0;function u(t){var e="";do{e=o[t%i]+e,t=Math.floor(t/i)}while(t>0);return e}function f(t){var e=0;for(c=0;c<t.length;c++)e=e*i+s[t.charAt(c)];return e}function p(){var t=u(+new Date);return t!==r?(a=0,r=t):t+"."+u(a++)}for(;c<i;c++)s[o[c]]=c;p.encode=u,p.decode=f,t.exports=p},a29b:function(t,e,n){"use strict";var r=n("75a4"),o=n("7297"),i=n("a979"),s=n("2570"),a=n("e5bc"),c=n("34eb")("socket.io-client:socket"),u=n("ded4"),f=n("87be");t.exports=l;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},h=o.prototype.emit;function l(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}o(l.prototype),l.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[s(t,"open",a(this,"onopen")),s(t,"packet",a(this,"onpacket")),s(t,"close",a(this,"onclose"))]}},l.prototype.open=l.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},l.prototype.send=function(){var t=i(arguments);return t.unshift("message"),this.emit.apply(this,t),this},l.prototype.emit=function(t){if(p.hasOwnProperty(t))return h.apply(this,arguments),this;var e=i(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:f(e))?r.BINARY_EVENT:r.EVENT,data:e,options:{}};return n.options.compress=!this.flags||!1!==this.flags.compress,"function"===typeof e[e.length-1]&&(c("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},l.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},l.prototype.onopen=function(){if(c("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===typeof this.query?u.encode(this.query):this.query;c("sending connect packet with query %s",t),this.packet({type:r.CONNECT,query:t})}else this.packet({type:r.CONNECT})},l.prototype.onclose=function(t){c("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},l.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===r.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case r.CONNECT:this.onconnect();break;case r.EVENT:this.onevent(t);break;case r.BINARY_EVENT:this.onevent(t);break;case r.ACK:this.onack(t);break;case r.BINARY_ACK:this.onack(t);break;case r.DISCONNECT:this.ondisconnect();break;case r.ERROR:this.emit("error",t.data);break}},l.prototype.onevent=function(t){var e=t.data||[];c("emitting event %j",e),null!=t.id&&(c("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?h.apply(this,e):this.receiveBuffer.push(e)},l.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var o=i(arguments);c("sending ack %j",o),e.packet({type:f(o)?r.BINARY_ACK:r.ACK,id:t,data:o})}}},l.prototype.onack=function(t){var e=this.acks[t.id];"function"===typeof e?(c("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):c("bad ack %s",t.id)},l.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},l.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)h.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},l.prototype.ondisconnect=function(){c("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},l.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},l.prototype.close=l.prototype.disconnect=function(){return this.connected&&(c("performing disconnect (%s)",this.nsp),this.packet({type:r.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},l.prototype.compress=function(t){return this.flags.compress=t,this},l.prototype.binary=function(t){return this.flags.binary=t,this}},a800:function(t,e,n){"use strict";var r=n("8b81"),o=n("75a4"),i=n("1803"),s=n("34eb")("socket.io-client");t.exports=e=c;var a=e.managers={};function c(t,e){"object"===typeof t&&(e=t,t=void 0),e=e||{};var n,o=r(t),c=o.source,u=o.id,f=o.path,p=a[u]&&f in a[u].nsps,h=e.forceNew||e["force new connection"]||!1===e.multiplex||p;return h?(s("ignoring socket cache for %s",c),n=i(c,e)):(a[u]||(s("new io instance for %s",c),a[u]=i(c,e)),n=a[u]),o.query&&!e.query&&(e.query=o.query),n.socket(o.path,e)}e.protocol=o.protocol,e.connect=c,e.Manager=n("1803"),e.Socket=n("a29b")},a979:function(t,e,n){"use strict";function r(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=r},b639:function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n("1fb5"),o=n("9152"),i=n("e3db");function s(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function c(t,e){if(a()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=u.prototype):(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(t,e,n);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return f(this,t,e,n)}function f(t,e,n,r){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?g(t,e,n,r):"string"===typeof e?d(t,e,n):y(t,e)}function p(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e,n,r){return p(e),e<=0?c(t,e):void 0!==n?"string"===typeof r?c(t,e).fill(n,r):c(t,e).fill(n):c(t,e)}function l(t,e){if(p(e),t=c(t,e<0?0:0|v(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e,n){if("string"===typeof n&&""!==n||(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|b(e,n);t=c(t,r);var o=t.write(e,n);return o!==r&&(t=t.slice(0,o)),t}function m(t,e){var n=e.length<0?0:0|v(e.length);t=c(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function g(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),u.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=u.prototype):t=m(t,e),t}function y(t,e){if(u.isBuffer(e)){var n=0|v(e.length);return t=c(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||et(e.length)?c(t,0):m(t,e);if("Buffer"===e.type&&i(e.data))return m(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function v(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function _(t){return+t!=t&&(t=0),u.alloc(+t)}function b(t,e){if(u.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(t).length;default:if(r)return W(t).length;e=(""+e).toLowerCase(),r=!0}}function w(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";t||(t="utf8");while(1)switch(t){case"hex":return I(this,e,n);case"utf8":case"utf-8":return q(this,e,n);case"ascii":return j(this,e,n);case"latin1":case"binary":return D(this,e,n);case"base64":return $(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function x(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function E(t,e,n,r,o){if(0===t.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"===typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:S(t,e,n,r,o);if("number"===typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):S(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function S(t,e,n,r,o){var i,s=1,a=t.length,c=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var f=-1;for(i=n;i<a;i++)if(u(t,i)===u(e,-1===f?0:i-f)){if(-1===f&&(f=i),i-f+1===c)return f*s}else-1!==f&&(i-=i-f),f=-1}else for(n+c>a&&(n=a-c),i=n;i>=0;i--){for(var p=!0,h=0;h<c;h++)if(u(t,i+h)!==u(e,h)){p=!1;break}if(p)return i}return-1}function A(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function k(t,e,n,r){return tt(W(e,t.length-n),t,n,r)}function C(t,e,n,r){return tt(K(e),t,n,r)}function O(t,e,n,r){return C(t,e,n,r)}function R(t,e,n,r){return tt(Q(e),t,n,r)}function T(t,e,n,r){return tt(Z(e,t.length-n),t,n,r)}function $(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function q(t,e,n){n=Math.min(t.length,n);var r=[],o=e;while(o<n){var i,s,a,c,u=t[o],f=null,p=u>239?4:u>223?3:u>191?2:1;if(o+p<=n)switch(p){case 1:u<128&&(f=u);break;case 2:i=t[o+1],128===(192&i)&&(c=(31&u)<<6|63&i,c>127&&(f=c));break;case 3:i=t[o+1],s=t[o+2],128===(192&i)&&128===(192&s)&&(c=(15&u)<<12|(63&i)<<6|63&s,c>2047&&(c<55296||c>57343)&&(f=c));break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],128===(192&i)&&128===(192&s)&&128===(192&a)&&(c=(15&u)<<18|(63&i)<<12|(63&s)<<6|63&a,c>65535&&c<1114112&&(f=c))}null===f?(f=65533,p=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),o+=p}return B(r)}e.Buffer=u,e.SlowBuffer=_,e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:s(),e.kMaxLength=a(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return f(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return h(null,t,e,n)},u.allocUnsafe=function(t){return l(null,t)},u.allocUnsafeSlow=function(t){return l(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=u.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var s=t[n];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},u.byteLength=b,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)x(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)x(this,e,e+3),x(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)x(this,e,e+7),x(this,e+1,e+6),x(this,e+2,e+5),x(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?q(this,0,t):w.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,o){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var i=o-r,s=n-e,a=Math.min(i,s),c=this.slice(r,o),f=t.slice(e,n),p=0;p<a;++p)if(c[p]!==f[p]){i=c[p],s=f[p];break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return E(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return E(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"===typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return A(this,t,e,n);case"utf8":case"utf-8":return k(this,t,e,n);case"ascii":return C(this,t,e,n);case"latin1":case"binary":return O(this,t,e,n);case"base64":return R(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function B(t){var e=t.length;if(e<=P)return String.fromCharCode.apply(String,t);var n="",r=0;while(r<e)n+=String.fromCharCode.apply(String,t.slice(r,r+=P));return n}function j(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function D(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function I(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=X(t[i]);return o}function N(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function M(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,n,r,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function L(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function F(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function H(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function V(t,e,n,r,i){return i||H(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),o.write(t,e,n,r,23,4),n+4}function z(t,e,n,r,i){return i||H(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),o.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=u.prototype;else{var o=e-t;n=new u(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||M(t,e,this.length);var r=this[t],o=1,i=0;while(++i<e&&(o*=256))r+=this[t+i]*o;return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||M(t,e,this.length);var r=this[t+--e],o=1;while(e>0&&(o*=256))r+=this[t+--e]*o;return r},u.prototype.readUInt8=function(t,e){return e||M(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||M(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||M(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||M(t,e,this.length);var r=this[t],o=1,i=0;while(++i<e&&(o*=256))r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||M(t,e,this.length);var r=e,o=1,i=this[t+--r];while(r>0&&(o*=256))i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||M(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||M(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||M(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||M(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||M(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||M(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var o=Math.pow(2,8*n)-1;U(this,t,e,n,o,0)}var i=1,s=0;this[e]=255&t;while(++s<n&&(i*=256))this[e+s]=t/i&255;return e+n},u.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var o=Math.pow(2,8*n)-1;U(this,t,e,n,o,0)}var i=n-1,s=1;this[e+i]=255&t;while(--i>=0&&(s*=256))this[e+i]=t/s&255;return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);U(this,t,e,n,o-1,-o)}var i=0,s=1,a=0;this[e]=255&t;while(++i<n&&(s*=256))t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);U(this,t,e,n,o-1,-o)}var i=n-1,s=1,a=0;this[e+i]=255&t;while(--i>=0&&(s*=256))t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return V(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return V(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return z(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return z(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},u.prototype.fill=function(t,e,n,r){if("string"===typeof t){if("string"===typeof e?(r=e,e=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"===typeof t)for(i=e;i<n;++i)this[i]=t;else{var s=u.isBuffer(t)?t:W(new u(t,r).toString()),a=s.length;for(i=0;i<n-e;++i)this[i+e]=s[i%a]}return this};var G=/[^+\/0-9A-Za-z-_]/g;function Y(t){if(t=J(t).replace(G,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function J(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function X(t){return t<16?"0"+t.toString(16):t.toString(16)}function W(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function K(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function Z(t,e){for(var n,r,o,i=[],s=0;s<t.length;++s){if((e-=2)<0)break;n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r)}return i}function Q(t){return r.toByteArray(Y(t))}function tt(t,e,n,r){for(var o=0;o<r;++o){if(o+n>=e.length||o>=t.length)break;e[o+n]=t[o]}return o}function et(t){return t!==t}}).call(this,n("c8ba"))},b799:function(t,e,n){"use strict";var r=n("e3db"),o=n("be29"),i=Object.prototype.toString,s="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===i.call(File);function c(t,e){if(!t)return t;if(o(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(r(t)){for(var i=new Array(t.length),s=0;s<t.length;s++)i[s]=c(t[s],e);return i}if("object"===typeof t&&!(t instanceof Date)){i={};for(var a in t)i[a]=c(t[a],e);return i}return t}function u(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(r(t))for(var n=0;n<t.length;n++)t[n]=u(t[n],e);else if("object"===typeof t)for(var o in t)t[o]=u(t[o],e);return t}e.deconstructPacket=function(t){var e=[],n=t.data,r=t;return r.data=c(n,e),r.attachments=e.length,{packet:r,buffers:e}},e.reconstructPacket=function(t,e){return t.data=u(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,u,f){if(!t)return t;if(s&&t instanceof Blob||a&&t instanceof File){i++;var p=new FileReader;p.onload=function(){f?f[u]=this.result:c=this.result,--i||e(c)},p.readAsArrayBuffer(t)}else if(r(t))for(var h=0;h<t.length;h++)n(t[h],h,t);else if("object"===typeof t&&!o(t))for(var l in t)n(t[l],l,t)}var i=0,c=t;n(c),i||e(c)}},b7dd:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n("5dcb");function i(e){var n=e.url,i=e.type,s=e.params,a=e.method,c=e.complete;return n=o.URL_BASE+n,i=i||"",a=a||"GET",new Promise(function(e,o){t.request({url:"".concat(n,"/").concat(i),data:s||{},method:a,success:e,fail:function(t){console.log(r("e:"+t," at api\\index.js:27")),o(t)},complete:function(){c&&c()}})})}}).call(this,n("6e42")["default"],n("0de9")["default"])},b85c:function(t,e,n){"use strict";var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,n=t.indexOf("["),i=t.indexOf("]");-1!=n&&-1!=i&&(t=t.substring(0,n)+t.substring(n,i).replace(/:/g,";")+t.substring(i,t.length));var s=r.exec(t||""),a={},c=14;while(c--)a[o[c]]=s[c]||"";return-1!=n&&-1!=i&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},be29:function(t,e,n){"use strict";(function(e){t.exports=i;var n="function"===typeof e&&"function"===typeof e.isBuffer,r="function"===typeof ArrayBuffer,o=function(t){return"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer};function i(t){return n&&e.isBuffer(t)||r&&(t instanceof ArrayBuffer||o(t))}}).call(this,n("b639").Buffer)},c1eb:function(t,e,n){"use strict";var r=n("d573"),o=n("d9cf"),i=n("7297"),s=n("ec22"),a=n("34eb")("engine.io-client:polling-xhr");function c(){}function u(t){if(o.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!==typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!==typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function f(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.withCredentials=t.withCredentials,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}if(t.exports=u,t.exports.Request=f,s(u,o),u.prototype.supportsBinary=!0,u.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.withCredentials=this.withCredentials,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new f(t)},u.prototype.doWrite=function(t,e){var n="string"!==typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},u.prototype.doPoll=function(){a("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},i(f.prototype),f.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new r(t),n=this;try{a("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders)for(var o in e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&e.setRequestHeader(o,this.extraHeaders[o])}catch(i){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(i){}try{e.setRequestHeader("Accept","*/*")}catch(i){}"withCredentials"in e&&(e.withCredentials=this.withCredentials),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");(n.supportsBinary&&"application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&(e.responseType="arraybuffer")}catch(i){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError("number"===typeof e.status?e.status:0)},0))},a("xhr data %s",this.data),e.send(this.data)}catch(i){return void setTimeout(function(){n.onError(i)},0)}"undefined"!==typeof document&&(this.index=f.requestsCount++,f.requests[this.index]=this)},f.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},f.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},f.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},f.prototype.cleanup=function(t){if("undefined"!==typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=c:this.xhr.onreadystatechange=c,t)try{this.xhr.abort()}catch(e){}"undefined"!==typeof document&&delete f.requests[this.index],this.xhr=null}},f.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t=("application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e)&&this.xhr.response||this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},f.prototype.hasXDR=function(){return"undefined"!==typeof XDomainRequest&&!this.xs&&this.enablesXDR},f.prototype.abort=function(){this.cleanup()},f.requestsCount=0,f.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",h);else if("function"===typeof addEventListener){var p="onpagehide"in self?"pagehide":"unload";addEventListener(p,h,!1)}function h(){for(var t in f.requests)f.requests.hasOwnProperty(t)&&f.requests[t].abort()}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d03e:function(t,e,n){"use strict";try{t.exports="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(r){t.exports=!1}},d573:function(t,e,n){"use strict";var r=n("d03e");t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if("undefined"!==typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(i){}try{if("undefined"!==typeof XDomainRequest&&!n&&o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(i){}}},d93a:function(t,e,n){"use strict";(function(e){var r,o,i=n("32f6"),s=n("333d"),a=n("ded4"),c=n("ec22"),u=n("9e7e"),f=n("34eb")("engine.io-client:websocket");if("undefined"!==typeof WebSocket?r=WebSocket:"undefined"!==typeof self&&(r=self.WebSocket||self.MozWebSocket),"undefined"===typeof window)try{o=n(0)}catch(l){}var p=r||o;function h(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=r&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(p=o),i.call(this,t)}t.exports=h,c(h,i),h.prototype.name="websocket",h.prototype.supportsBinary=!0,h.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new p(t,e):new p(t):new p(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},h.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},h.prototype.write=function(t){var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o<i;o++)(function(t){s.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),n.perMessageDeflate){var s="string"===typeof o?e.byteLength(o):o.length;s<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(l){f("websocket closed before onclose event")}--r||a()})})(t[o]);function a(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}},h.prototype.onClose=function(){i.prototype.onClose.call(this)},h.prototype.doClose=function(){"undefined"!==typeof this.ws&&this.ws.close()},h.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},h.prototype.check=function(){return!!p&&!("__initialize"in p&&this.name===h.prototype.name)}}).call(this,n("b639").Buffer)},d9cf:function(t,e,n){"use strict";var r=n("32f6"),o=n("ded4"),i=n("333d"),s=n("ec22"),a=n("9e7e"),c=n("34eb")("engine.io-client:polling");t.exports=f;var u=function(){var t=n("d573"),e=new t({xdomain:!1});return null!=e.responseType}();function f(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),r.call(this,t)}s(f,r),f.prototype.name="polling",f.prototype.doOpen=function(){this.poll()},f.prototype.pause=function(t){var e=this;function n(){c("paused"),e.readyState="paused",t()}if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(c("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){c("pre-pause polling complete"),--r||n()})),this.writable||(c("we are currently writing - waiting to pause"),r++,this.once("drain",function(){c("pre-pause writing complete"),--r||n()}))}else n()},f.prototype.poll=function(){c("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},f.prototype.onData=function(t){var e=this;c("polling got data %s",t);var n=function(t,n,r){if("opening"===e.readyState&&e.onOpen(),"close"===t.type)return e.onClose(),!1;e.onPacket(t)};i.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():c('ignoring poll - transport state "%s"',this.readyState))},f.prototype.doClose=function(){var t=this;function e(){c("writing close packet"),t.write([{type:"close"}])}"open"===this.readyState?(c("transport open - closing"),e()):(c("transport not open - deferring close"),this.once("open",e))},f.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};i.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},f.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=a()),this.supportsBinary||t.sid||(t.b64=1),t=o.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},dc90:function(t,e,n){function r(t){function e(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return r.colors[Math.abs(e)%r.colors.length]}function r(t){let n;function s(...t){if(!s.enabled)return;const e=s,o=Number(new Date),i=o-(n||o);e.diff=i,e.prev=n,e.curr=o,n=o,t[0]=r.coerce(t[0]),"string"!==typeof t[0]&&t.unshift("%O");let a=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;a++;const i=r.formatters[o];if("function"===typeof i){const r=t[a];n=i.call(e,r),t.splice(a,1),a--}return n}),r.formatArgs.call(e,t);const c=e.log||r.log;c.apply(e,t)}return s.namespace=t,s.enabled=r.enabled(t),s.useColors=r.useColors(),s.color=e(t),s.destroy=o,s.extend=i,"function"===typeof r.init&&r.init(s),r.instances.push(s),s}function o(){const t=r.instances.indexOf(this);return-1!==t&&(r.instances.splice(t,1),!0)}function i(t,e){const n=r(this.namespace+("undefined"===typeof e?":":e)+t);return n.log=this.log,n}function s(t){let e;r.save(t),r.names=[],r.skips=[];const n=("string"===typeof t?t:"").split(/[\s,]+/),o=n.length;for(e=0;e<o;e++)n[e]&&(t=n[e].replace(/\*/g,".*?"),"-"===t[0]?r.skips.push(new RegExp("^"+t.substr(1)+"$")):r.names.push(new RegExp("^"+t+"$")));for(e=0;e<r.instances.length;e++){const t=r.instances[e];t.enabled=r.enabled(t.namespace)}}function a(){const t=[...r.names.map(u),...r.skips.map(u).map(t=>"-"+t)].join(",");return r.enable(""),t}function c(t){if("*"===t[t.length-1])return!0;let e,n;for(e=0,n=r.skips.length;e<n;e++)if(r.skips[e].test(t))return!1;for(e=0,n=r.names.length;e<n;e++)if(r.names[e].test(t))return!0;return!1}function u(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function f(t){return t instanceof Error?t.stack||t.message:t}return r.debug=r,r.default=r,r.coerce=f,r.disable=a,r.enable=s,r.enabled=c,r.humanize=n("1468"),Object.keys(t).forEach(e=>{r[e]=t[e]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=e,r.enable(r.load()),r}t.exports=r},ded4:function(t,e,n){"use strict";e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e3db:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},e5bc:function(t,e,n){"use strict";var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},ec22:function(t,e,n){"use strict";t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},ee34:function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},facc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.INIT_SCOKET=e.SOCKET_OPEN=e.MSG_SEND=e.RECEIVE_HEADER=e.MSG_READ=e.RECEIVE_MSG=e.RECEIVE_MSG_LIST=e.RECEIVE_USER_LIST=e.RESET_USER_LIST=e.RESET_USER=e.RECEIVE_USER=e.ERROR_MSG=e.AUTH_SUCCESS=void 0;var r="auth_success";e.AUTH_SUCCESS=r;var o="error_msg";e.ERROR_MSG=o;var i="receive_user";e.RECEIVE_USER=i;var s="reset_user";e.RESET_USER=s;var a="reset_userlist";e.RESET_USER_LIST=a;var c="receive_user_list";e.RECEIVE_USER_LIST=c;var u="receive_msg_list";e.RECEIVE_MSG_LIST=u;var f="receive_msg";e.RECEIVE_MSG=f;var p="msg_read";e.MSG_READ=p;var h="receive_header";e.RECEIVE_HEADER=h;var l="msg_send";e.MSG_SEND=l;var d="socket_open";e.SOCKET_OPEN=d;var m="init_scoket";e.INIT_SCOKET=m},ff6d:function(t,e,n){"use strict";var r=n("9c25"),o=n("7297"),i=n("34eb")("engine.io-client:socket"),s=n("ee34"),a=n("333d"),c=n("b85c"),u=n("ded4");function f(t,e){if(!(this instanceof f))return new f(t,e);e=e||{},t&&"object"===typeof t&&(e=t,t=null),t?(t=c(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=c(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!==typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!==typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"===typeof this.query&&(this.query=u.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.withCredentials=!1!==e.withCredentials,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"===typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function p(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}t.exports=f,f.priorWebsocketSuccess=!1,o(f.prototype),f.protocol=a.protocol,f.Socket=f,f.Transport=n("32f6"),f.transports=n("9c25"),f.parser=n("333d"),f.prototype.createTransport=function(t){i('creating transport "%s"',t);var e=p(this.query);e.EIO=a.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var o=new r[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,withCredentials:n.withCredentials||this.withCredentials,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return o},f.prototype.open=function(){var t;if(this.rememberUpgrade&&f.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},f.prototype.setTransport=function(t){i("setting transport %s",t.name);var e=this;this.transport&&(i("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},f.prototype.probe=function(t){i('probing transport "%s"',t);var e=this.createTransport(t,{probe:1}),n=!1,r=this;function o(){if(r.onlyBinaryUpgrades){var o=!this.supportsBinary&&r.transport.supportsBinary;n=n||o}n||(i('probe transport "%s" opened',t),e.send([{type:"ping",data:"probe"}]),e.once("packet",function(o){if(!n)if("pong"===o.type&&"probe"===o.data){if(i('probe transport "%s" pong',t),r.upgrading=!0,r.emit("upgrading",e),!e)return;f.priorWebsocketSuccess="websocket"===e.name,i('pausing current transport "%s"',r.transport.name),r.transport.pause(function(){n||"closed"!==r.readyState&&(i("changing transport and sending upgrade packet"),h(),r.setTransport(e),e.send([{type:"upgrade"}]),r.emit("upgrade",e),e=null,r.upgrading=!1,r.flush())})}else{i('probe transport "%s" failed',t);var s=new Error("probe error");s.transport=e.name,r.emit("upgradeError",s)}}))}function s(){n||(n=!0,h(),e.close(),e=null)}function a(n){var o=new Error("probe error: "+n);o.transport=e.name,s(),i('probe transport "%s" failed because of error: %s',t,n),r.emit("upgradeError",o)}function c(){a("transport closed")}function u(){a("socket closed")}function p(t){e&&t.name!==e.name&&(i('"%s" works - aborting "%s"',t.name,e.name),s())}function h(){e.removeListener("open",o),e.removeListener("error",a),e.removeListener("close",c),r.removeListener("close",u),r.removeListener("upgrading",p)}f.priorWebsocketSuccess=!1,e.once("open",o),e.once("error",a),e.once("close",c),this.once("close",u),this.once("upgrading",p),e.open()},f.prototype.onOpen=function(){if(i("socket open"),this.readyState="open",f.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){i("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},f.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(i('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data);break}else i('packet received with socket readyState "%s"',this.readyState)},f.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},f.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},f.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){i("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},f.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},f.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},f.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(i("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},f.prototype.write=f.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},f.prototype.sendPacket=function(t,e,n,r){if("function"===typeof e&&(r=e,e=void 0),"function"===typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},f.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var t=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():e()}):this.upgrading?r():e()}function e(){t.onClose("forced close"),i("socket closing - telling transport to close"),t.transport.close()}function n(){t.removeListener("upgrade",n),t.removeListener("upgradeError",n),e()}function r(){t.once("upgrade",n),t.once("upgradeError",n)}return this},f.prototype.onError=function(t){i("socket error %j",t),f.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},f.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){i('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},f.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~s(this.transports,t[n])&&e.push(t[n]);return e}}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "0f14": function f14(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  "382a": function a(t, n, e) {},
  5166: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0f14"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  "57b9": function b9(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("8569"),
        a = e("5166");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("7b14");
    var r = e("2877"),
        f = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  "7b14": function b14(t, n, e) {
    "use strict";

    var u = e("382a"),
        a = e.n(u);
    a.a;
  },
  8569: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("57b9"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-card/uni-card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-card/uni-card.js';

define('components/uni-card/uni-card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-card/uni-card"], {
  "38f4": function f4(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  "7a0a": function a0a(t, e, n) {
    "use strict";

    var a = n("8e7c"),
        u = n.n(a);
    u.a;
  },
  "83be": function be(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("38f4"),
        u = n("aa18");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("7a0a");
    var r = n("2877"),
        l = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  "8e7c": function e7c(t, e, n) {},
  a311: function a311(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "UniCard",
      props: {
        title: {
          type: String,
          default: ""
        },
        extra: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        thumbnail: {
          type: String,
          default: ""
        },
        mode: {
          type: String,
          default: "basic"
        },
        isFull: {
          type: Boolean,
          default: !1
        },
        isShadow: {
          type: Boolean,
          default: !1
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    e.default = a;
  },
  aa18: function aa18(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("a311"),
        u = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-card/uni-card-create-component', {
  'components/uni-card/uni-card-create-component': function componentsUniCardUniCardCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("83be"));
  }
}, [['components/uni-card/uni-card-create-component']]]);
});
require('components/uni-card/uni-card.js');
__wxRoute = 'components/uni-grid-item/uni-grid-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-grid-item/uni-grid-item.js';

define('components/uni-grid-item/uni-grid-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-grid-item/uni-grid-item"], {
  "141d": function d(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("7667"),
        r = i.n(n);

    for (var u in n) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(u);
    }

    e["default"] = r.a;
  },
  "5ecb": function ecb(t, e, i) {
    "use strict";

    var n = i("d6a6"),
        r = i.n(n);
    r.a;
  },
  6519: function _(t, e, i) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    i.d(e, "a", function () {
      return n;
    }), i.d(e, "b", function () {
      return r;
    });
  },
  7667: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var n = function n() {
      return i.e("components/uni-badge/uni-badge").then(i.bind(null, "57b9"));
    },
        r = {
      name: "UniGridItem",
      components: {
        uniBadge: n
      },
      props: {
        marker: {
          type: String,
          default: ""
        },
        hor: {
          type: Number,
          default: 0
        },
        ver: {
          type: Number,
          default: 0
        },
        type: {
          type: String,
          default: ""
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        src: {
          type: String,
          default: ""
        },
        imgWidth: {
          type: Number,
          default: 30
        }
      },
      inject: ["grid"],
      data: function data() {
        return {
          column: 0,
          showBorder: !0,
          square: !0,
          highlight: !0,
          left: 0,
          top: 0,
          index: 0,
          openNum: 2,
          width: 0,
          borderColor: "#d0dee5"
        };
      },
      created: function created() {
        this.column = this.grid.column, this.showBorder = this.grid.showBorder, this.square = this.grid.square, this.highlight = this.grid.highlight, this.top = 0 === this.hor ? this.grid.hor : this.hor, this.left = 0 === this.ver ? this.grid.ver : this.ver, this.borderColor = this.grid.borderColor, this.index = this.grid.index++;
      },
      onReady: function onReady() {
        var t = this;

        this.grid._getSize(function (e) {
          t.width = e;
        });
      },
      methods: {
        _onClick: function _onClick() {
          this.grid.change({
            detail: {
              index: this.index
            }
          });
        }
      }
    };

    e.default = r;
  },
  a905: function a905(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("6519"),
        r = i("141d");

    for (var u in r) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return r[t];
        });
      }(u);
    }

    i("5ecb");
    var d = i("2877"),
        o = Object(d["a"])(r["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = o.exports;
  },
  d6a6: function d6a6(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-grid-item/uni-grid-item-create-component', {
  'components/uni-grid-item/uni-grid-item-create-component': function componentsUniGridItemUniGridItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a905"));
  }
}, [['components/uni-grid-item/uni-grid-item-create-component']]]);
});
require('components/uni-grid-item/uni-grid-item.js');
__wxRoute = 'components/uni-grid/uni-grid';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-grid/uni-grid.js';

define('components/uni-grid/uni-grid.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-grid/uni-grid"], {
  "05cb": function cb(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        u = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return u;
    });
  },
  "5ede": function ede(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("05cb"),
        u = n("ca56");

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    n("7828");
    var a = n("2877"),
        o = Object(a["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  7828: function _(e, t, n) {
    "use strict";

    var i = n("c406"),
        u = n.n(i);
    u.a;
  },
  "8d9f": function d9f(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        name: "UniGrid",
        props: {
          column: {
            type: Number,
            default: 3
          },
          showBorder: {
            type: Boolean,
            default: !0
          },
          borderColor: {
            type: String,
            default: "#d0dee5"
          },
          hor: {
            type: Number,
            default: 0
          },
          ver: {
            type: Number,
            default: 0
          },
          square: {
            type: Boolean,
            default: !0
          },
          highlight: {
            type: Boolean,
            default: !0
          }
        },
        provide: function provide() {
          return {
            grid: this
          };
        },
        data: function data() {
          var e = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            index: 0,
            elId: e
          };
        },
        created: function created() {
          this.index = 0, this.childrens = [], this.pIndex = this.pIndex ? this.pIndex++ : 0;
        },
        methods: {
          change: function change(e) {
            this.$emit("change", e);
          },
          _getSize: function _getSize(t) {
            var n = this;
            e.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (e) {
              if (e[0]) {
                var i = parseInt(e[0].width / n.column) - 1 + "px";
                "function" === typeof t && t(i);
              } else setTimeout(n._getSize(t));
            });
          }
        }
      };
      t.default = n;
    }).call(this, n("6e42")["default"]);
  },
  c406: function c406(e, t, n) {},
  ca56: function ca56(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("8d9f"),
        u = n.n(i);

    for (var r in i) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    t["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-grid/uni-grid-create-component', {
  'components/uni-grid/uni-grid-create-component': function componentsUniGridUniGridCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5ede"));
  }
}, [['components/uni-grid/uni-grid-create-component']]]);
});
require('components/uni-grid/uni-grid.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "2f98": function f98(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("6460"),
        a = e("e0be");

    for (var i in a) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(i);
    }

    e("a247");
    var r = e("2877"),
        o = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  6460: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  a247: function a247(n, t, e) {
    "use strict";

    var u = e("aa1d"),
        a = e.n(u);
    a.a;
  },
  aa1d: function aa1d(n, t, e) {},
  e0be: function e0be(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("ef3d"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = a.a;
  },
  ef3d: function ef3d(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2f98"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list-item/uni-list-item.js';

define('components/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list-item/uni-list-item"], {
  "268d": function d(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = function i() {
      return e.e("components/uni-icons/uni-icons").then(e.bind(null, "2f98"));
    },
        u = function u() {
      return e.e("components/uni-badge/uni-badge").then(e.bind(null, "57b9"));
    },
        o = {
      name: "UniListItem",
      components: {
        uniIcons: i,
        uniBadge: u
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        disabled: {
          type: [Boolean, String],
          default: !1
        },
        showArrow: {
          type: [Boolean, String],
          default: !0
        },
        showBadge: {
          type: [Boolean, String],
          default: !1
        },
        showSwitch: {
          type: [Boolean, String],
          default: !1
        },
        switchChecked: {
          type: [Boolean, String],
          default: !1
        },
        badgeText: {
          type: String,
          default: ""
        },
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: {
          type: String,
          default: ""
        },
        showExtraIcon: {
          type: [Boolean, String],
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: 20
            };
          }
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    n.default = o;
  },
  3826: function _(t, n, e) {},
  "3b9c": function b9c(t, n, e) {
    "use strict";

    var i = e("3826"),
        u = e.n(i);
    u.a;
  },
  "61e1": function e1(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("92d6"),
        u = e("eb5b");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("3b9c");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "92d6": function d6(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  eb5b: function eb5b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("268d"),
        u = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list-item/uni-list-item-create-component', {
  'components/uni-list-item/uni-list-item-create-component': function componentsUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("61e1"));
  }
}, [['components/uni-list-item/uni-list-item-create-component']]]);
});
require('components/uni-list-item/uni-list-item.js');
__wxRoute = 'components/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list/uni-list.js';

define('components/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list/uni-list"], {
  "2d2a": function d2a(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return a;
    });
  },
  5143: function _(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("d21c"),
        a = u.n(e);

    for (var r in e) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  5652: function _(n, t, u) {
    "use strict";

    var e = u("9391"),
        a = u.n(e);
    a.a;
  },
  9391: function _(n, t, u) {},
  d21c: function d21c(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      name: "UniList"
    };
    t.default = e;
  },
  fe19: function fe19(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("2d2a"),
        a = u("5143");

    for (var r in a) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    u("5652");
    var i = u("2877"),
        c = Object(i["a"])(a["default"], e["a"], e["b"], !1, null, null, null);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list/uni-list-create-component', {
  'components/uni-list/uni-list-create-component': function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fe19"));
  }
}, [['components/uni-list/uni-list-create-component']]]);
});
require('components/uni-list/uni-list.js');

__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{1744:function(e,t,n){},"196b":function(e,t,n){"use strict";var a=n("1744"),r=n.n(a);r.a},"4efd":function(e,t,n){"use strict";n.r(t);var a=n("cd82"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},"54aa":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},6521:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},"9a3f":function(e,t,n){"use strict";n.r(t);var a=n("6521"),r=n("4efd");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("196b");var u=n("2877"),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"3d597ebd",null);t["default"]=i.exports},a01e:function(e,t,n){"use strict";n.r(t);var a=n("54aa"),r=n("a7b7");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var u=n("2877"),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"5cfaa766",null);t["default"]=i.exports},a7b7:function(e,t,n){"use strict";n.r(t);var a=n("e9a3"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},cd82:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),o=n("5dcb");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return n.e("components/uni-card/uni-card").then(n.bind(null,"83be"))},c={data:function(){return{usertype:""}},components:{uniCard:s},computed:u({},(0,r.mapGetters)(["userlist","messages"]),{scrollH:function(){var t=e.getSystemInfoSync(),n=t.windowWidth,r=750/n,o=parseInt(t.windowHeight*r);return console.log(a(o," at pages\\personList\\personList.vue:66")),o}}),created:function(){var t=e.getStorageSync(o.CACH_USER);if(t){var n=JSON.parse(t);"laoban"==n.type?(e.setTabBarItem({index:0,text:"老板",iconPath:"static/images/foot/laoban.png",selectedIconPath:"static/images/foot/laoban-selected.png"}),e.setNavigationBarTitle({title:"大神列表"})):(e.setTabBarItem({index:0,text:"大神",iconPath:"static/images/foot/dashen.png",selectedIconPath:"static/images/foot/dashen-selected.png"}),e.setNavigationBarTitle({title:"老板列表"})),this.usertype="dashen"==n.type?"laoban":"dashen",this.getUserList(this.usertype)}},methods:u({},(0,r.mapActions)(["getUserList","msgRead"]),{sendChat:function(t){console.log(a("targetUserId=",t," at pages\\personList\\personList.vue:102"));var n=e.getStorageSync(o.CACH_USER);n&&(this.msgRead({from:t,to:JSON.parse(n)._id}),e.navigateTo({url:"../message/message?targetUserId="+t}))}})};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},e972:function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");a(n("66fd"));var t=a(n("a01e"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e9a3:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),r=n("5dcb"),o=u(n("9a3f"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{}},components:{PersonList:o.default},computed:i({},(0,a.mapGetters)(["userlist","messages"])),onLoad:function(){var t=e.getStorageSync(r.CACH_USER);if(t){var n=JSON.parse(t);n||e.reLaunch({url:"../login/login"})}else e.reLaunch({url:"../login/login"})},watch:{messages:{handler:function(t,n){parseInt(t.unReadCount)>0?e.setTabBarBadge({index:1,text:t.unReadCount+""}):e.removeTabBarBadge({index:1})},deep:!0}},onShow:function(){parseInt(this.messages.unReadCount)>0?e.setTabBarBadge({index:1,text:this.messages.unReadCount+""}):e.removeTabBarBadge({index:1})}};t.default=c}).call(this,n("6e42")["default"])}},[["e972","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"079a":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},2631:function(n,t,e){"use strict";var a=e("8fa3"),u=e.n(a);u.a},"6a83":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};t.default=a},7537:function(n,t,e){"use strict";(function(n){e("50bb"),e("921b");a(e("66fd"));var t=a(e("7e8a"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7e8a":function(n,t,e){"use strict";e.r(t);var a=e("079a"),u=e("b112");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("2631");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"0d1ea182",null);t["default"]=c.exports},"8fa3":function(n,t,e){},b112:function(n,t,e){"use strict";e.r(t);var a=e("6a83"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a}},[["7537","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1173:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"14ed":function(e,t,n){"use strict";var r=n("2521"),o=n.n(r);o.a},2521:function(e,t,n){},"43a2":function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");r(n("66fd"));var t=r(n("7722"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},7722:function(e,t,n){"use strict";n.r(t);var r=n("1173"),o=n("a6cf");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("14ed");var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"3f01c400",null);t["default"]=a.exports},a6cf:function(e,t,n){"use strict";n.r(t);var r=n("e9dd"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=o.a},e9dd:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={name:"login",computed:u({},(0,o.mapGetters)(["user"]),{scrollH:function(){var t=e.getSystemInfoSync(),n=t.windowWidth,r=750/n,o=parseInt(t.windowHeight*r);return o}}),data:function(){return{}},onLoad:function(){this.errorMsg("")},onHide:function(){this.user.msg=""},methods:u({},(0,o.mapActions)(["login","errorMsg","getMsgList"]),{formSubmit:function(e){var t=this,n=e.detail.value,o=n.username,u=n.password;o?u?this.login({username:o,password:u}).then(function(e){console.log(r("res",e," at pages\\login\\login.vue:56")),t.getMsgList(e)}):this.errorMsg("密码不能为空"):this.errorMsg("用户名不能为空")}})};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["43a2","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1efc":function(e,t,r){"use strict";var n=r("8c6a"),o=r.n(n);o.a},3945:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("2f62");function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={name:"register",data:function(){return{}},onLoad:function(){this.errorMsg("")},computed:a({},(0,o.mapGetters)(["user"]),{scrollH:function(){var t=e.getSystemInfoSync(),r=t.windowWidth,n=750/r,o=parseInt(t.windowHeight*n);return o}}),methods:a({},(0,o.mapActions)(["register","errorMsg","getMsgList"]),{formSubmit:function(e){var t=this;console.log(n(e," at pages\\register\\register.vue:65"));var r=e.detail.value,o=r.username,a=r.password,u=r.password2;r.type;o?a?a!==u?this.errorMsg("两次密码不一致"):this.register(e.detail.value).then(function(e){console.log(n("res",e," at pages\\register\\register.vue:75")),t.getMsgList(e)}):this.errorMsg("密码不能为空"):this.errorMsg("用户名不能为空")},radioChange:function(){}})};t.default=i}).call(this,r("6e42")["default"],r("0de9")["default"])},7699:function(e,t,r){"use strict";r.r(t);var n=r("3945"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},"8c6a":function(e,t,r){},"9caf":function(e,t,r){"use strict";(function(e){r("50bb"),r("921b");n(r("66fd"));var t=n(r("e933"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},bb08:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},e933:function(e,t,r){"use strict";r.r(t);var n=r("bb08"),o=r("7699");for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a);r("1efc");var u=r("2877"),i=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,"ec523caa",null);t["default"]=i.exports}},[["9caf","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/dashen/dashen';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/dashen/dashen.js';

define('pages/dashen/dashen.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dashen/dashen"],{"4d29":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},5763:function(e,t,n){"use strict";n.r(t);var r=n("b95f"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=i.a},"6b42":function(e,t,n){"use strict";n.r(t);var r=n("4d29"),i=n("5763");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("9b54");var u=n("2877"),o=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"953410a0",null);t["default"]=o.exports},8980:function(e,t,n){},"9b54":function(e,t,n){"use strict";var r=n("8980"),i=n.n(r);i.a},b95f:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"5ede"))},c=function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"a905"))},s={data:function(){return{selectedIcon:"",headerList:[],path:""}},components:{uniGrid:o,uniGridItem:c},onLoad:function(e){this.path=e.path;for(var t=0;t<20;t++)this.headerList.push({textzw:"头像"+(t+1),text:"header"+(t+1),icon:"../../static/images/header".concat(t+1,".png")});this.getUser()},computed:a({},(0,i.mapGetters)(["user"]),{scrollH:function(){var t=e.getSystemInfoSync(),n=t.windowWidth,i=750/n,a=parseInt(t.windowHeight*i);return console.log(r("winHeight:"+a," at pages\\dashen\\dashen.vue:62")),a}}),watch:{user:function(e,t){this.selectedIcon=e.header}},methods:a({},(0,i.mapActions)(["updateUser","getUser","getHeader"]),{change:function(e){var t=e.detail.index;this.selectedIcon=this.headerList[t].text,this.getHeader(this.headerList[t].text)},formSubmit:function(e){var t=a({},this.user,e.detail.value,{path:this.path});console.log(r(t," at pages\\dashen\\dashen.vue:80")),this.updateUser(t)}})};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},cf92:function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");r(n("66fd"));var t=r(n("6b42"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["cf92","common/runtime","common/vendor"]]]);
});
require('pages/dashen/dashen.js');
__wxRoute = 'pages/laoban/laoban';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/laoban/laoban.js';

define('pages/laoban/laoban.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/laoban/laoban"],{"264b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},"49f7":function(e,t,n){},"865b":function(e,t,n){"use strict";n.r(t);var r=n("c300"),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=i.a},"8f9e":function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");r(n("66fd"));var t=r(n("ce83"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c300:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"5ede"))},c=function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"a905"))},s={data:function(){return{selectedIcon:"",headerList:[]}},components:{uniGrid:o,uniGridItem:c},computed:u({},(0,i.mapGetters)(["user"]),{scrollH:function(){var t=e.getSystemInfoSync(),n=t.windowWidth,i=750/n,u=parseInt(t.windowHeight*i);return console.log(r(u," at pages\\laoban\\laoban.vue:59")),u}}),watch:{user:function(e,t){this.selectedIcon=e.header}},onLoad:function(e){for(var t=0;t<20;t++)this.headerList.push({textzw:"头像"+(t+1),text:"header"+(t+1),icon:"../../static/images/header".concat(t+1,".png")});this.getUser()},methods:u({},(0,i.mapActions)(["updateUser","getUser","getHeader"]),{change:function(e){var t=e.detail.index;this.selectedIcon=this.headerList[t].text,this.getHeader(this.headerList[t].text)},formSubmit:function(e){var t=u({},this.user,e.detail.value);this.updateUser(t)}})};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},ce83:function(e,t,n){"use strict";n.r(t);var r=n("264b"),i=n("865b");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("cec3");var a=n("2877"),o=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"41e48d81",null);t["default"]=o.exports},cec3:function(e,t,n){"use strict";var r=n("49f7"),i=n.n(r);i.a}},[["8f9e","common/runtime","common/vendor"]]]);
});
require('pages/laoban/laoban.js');
__wxRoute = 'pages/person/person';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/person/person.js';

define('pages/person/person.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person/person"],{"078d":function(e,n,t){"use strict";t.r(n);var r=t("41f7"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},1928:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},"41f7":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t("5dcb");var r=t("2f62");function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=function(){return t.e("components/uni-card/uni-card").then(t.bind(null,"83be"))},c={data:function(){return{}},computed:a({},(0,r.mapGetters)(["user","messages"]),{scrollH:function(){var n=e.getSystemInfoSync(),t=n.windowWidth,r=750/t,a=parseInt(n.windowHeight*r);return a}}),components:{uniCard:u},methods:a({},(0,r.mapActions)(["resetUser","getUser","resetUserList"]),{updateInfo:function(){"laoban"==this.user.type?e.navigateTo({url:"../laoban/laoban?path=update"}):e.navigateTo({url:"../dashen/dashen?path=update"})},louginOut:function(){var n=this;e.showModal({title:"退出",content:"确定退出登录吗",success:function(t){if(t.confirm){e.clearStorage();var r={};n.resetUser(r),n.resetUserList(r),e.reLaunch({url:"../login/login"})}else t.cancel}})}}),onLoad:function(){this.getUser()},watch:{messages:{handler:function(n,t){parseInt(n.unReadCount)>0?e.setTabBarBadge({index:1,text:n.unReadCount+""}):e.removeTabBarBadge({index:1})},deep:!0}},onShow:function(){parseInt(this.messages.unReadCount)>0?e.setTabBarBadge({index:1,text:this.messages.unReadCount+""}):e.removeTabBarBadge({index:1})}};n.default=c}).call(this,t("6e42")["default"])},5490:function(e,n,t){"use strict";var r=t("6ad8"),a=t.n(r);a.a},"5fcd":function(e,n,t){"use strict";t.r(n);var r=t("1928"),a=t("078d");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);t("5490");var u=t("2877"),c=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"75457923",null);n["default"]=c.exports},"6ad8":function(e,n,t){},"71cc":function(e,n,t){"use strict";(function(e){t("50bb"),t("921b");r(t("66fd"));var n=r(t("5fcd"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["71cc","common/runtime","common/vendor"]]]);
});
require('pages/person/person.js');
__wxRoute = 'pages/personList/personList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/personList/personList.js';

define('pages/personList/personList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personList/personList"],{1744:function(e,t,n){},"196b":function(e,t,n){"use strict";var a=n("1744"),r=n.n(a);r.a},"3aa1":function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");a(n("66fd"));var t=a(n("9a3f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4efd":function(e,t,n){"use strict";n.r(t);var a=n("cd82"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},6521:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},"9a3f":function(e,t,n){"use strict";n.r(t);var a=n("6521"),r=n("4efd");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("196b");var s=n("2877"),i=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"3d597ebd",null);t["default"]=i.exports},cd82:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),o=n("5dcb");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){return n.e("components/uni-card/uni-card").then(n.bind(null,"83be"))},u={data:function(){return{usertype:""}},components:{uniCard:c},computed:s({},(0,r.mapGetters)(["userlist","messages"]),{scrollH:function(){var t=e.getSystemInfoSync(),n=t.windowWidth,r=750/n,o=parseInt(t.windowHeight*r);return console.log(a(o," at pages\\personList\\personList.vue:66")),o}}),created:function(){var t=e.getStorageSync(o.CACH_USER);if(t){var n=JSON.parse(t);"laoban"==n.type?(e.setTabBarItem({index:0,text:"老板",iconPath:"static/images/foot/laoban.png",selectedIconPath:"static/images/foot/laoban-selected.png"}),e.setNavigationBarTitle({title:"大神列表"})):(e.setTabBarItem({index:0,text:"大神",iconPath:"static/images/foot/dashen.png",selectedIconPath:"static/images/foot/dashen-selected.png"}),e.setNavigationBarTitle({title:"老板列表"})),this.usertype="dashen"==n.type?"laoban":"dashen",this.getUserList(this.usertype)}},methods:s({},(0,r.mapActions)(["getUserList","msgRead"]),{sendChat:function(t){console.log(a("targetUserId=",t," at pages\\personList\\personList.vue:102"));var n=e.getStorageSync(o.CACH_USER);n&&(this.msgRead({from:t,to:JSON.parse(n)._id}),e.navigateTo({url:"../message/message?targetUserId="+t}))}})};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["3aa1","common/runtime","common/vendor"]]]);
});
require('pages/personList/personList.js');
__wxRoute = 'pages/messagelist/messagelist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/messagelist/messagelist.js';

define('pages/messagelist/messagelist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messagelist/messagelist"],{4384:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("2f62");n("5dcb");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"fe19"))},i=function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"61e1"))},c={data:function(){return{lastMsgs:[]}},components:{uniList:o,uniListItem:i},onShow:function(){parseInt(this.messages.unReadCount)>0?e.setTabBarBadge({index:1,text:this.messages.unReadCount+""}):e.removeTabBarBadge({index:1})},watch:{messages:{handler:function(t,n){var a=JSON.parse(e.getStorageSync("UNIUSER")),s=a._id,r=t.chatMsgs,u=t.users;t.unReadCount;this.getLastMsgs(r,u,s),parseInt(t.unReadCount)>0?e.setTabBarBadge({index:1,text:t.unReadCount+""}):e.removeTabBarBadge({index:1})},deep:!0}},computed:r({},(0,s.mapGetters)(["messages","user"])),methods:r({},(0,s.mapActions)(["getMsgList","msgRead"]),{showMsg:function(t,n){console.log(a("from,to",{from:t,to:n}," at pages\\messagelist\\messagelist.vue:80")),this.msgRead({from:t,to:n});var s=JSON.parse(e.getStorageSync("UNIUSER")),r=s._id,u=r==t?n:t;e.navigateTo({url:"../message/message?targetUserId="+u})},getLastMsgs:function(e,t,n){var a={};e.forEach(function(e){e.to!==n||e.read?e.unReadCount=0:e.unReadCount=1;var t=e.chat_id,s=a[t];if(s){var r=s.unReadCount+e.unReadCount;e.create_time>s.create_time&&(a[t]=e),a[t].unReadCount=r}else a[t]=e});var s=Object.values(a);s.sort(function(e,t){return t.create_time-e.create_time}),s.map(function(e){var a=e.to===n?e.from:e.to,s=t[a];return e.targetUserId=a,e.targetUser=s,e.unReadCount=e.unReadCount?e.unReadCount:"",e}),this.lastMsgs=s}}),onLoad:function(){var t=JSON.parse(e.getStorageSync("UNIUSER"));console.log(a(t," at pages\\messagelist\\messagelist.vue:160")),this.getMsgList(t._id)}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},c458:function(e,t,n){"use strict";(function(e){n("50bb"),n("921b");a(n("66fd"));var t=a(n("e099"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c55c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},e099:function(e,t,n){"use strict";n.r(t);var a=n("c55c"),s=n("e8c0");for(var r in s)"default"!==r&&function(e){n.d(t,e,function(){return s[e]})}(r);var u=n("2877"),o=Object(u["a"])(s["default"],a["a"],a["b"],!1,null,"4bae580e",null);t["default"]=o.exports},e8c0:function(e,t,n){"use strict";n.r(t);var a=n("4384"),s=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=s.a}},[["c458","common/runtime","common/vendor"]]]);
});
require('pages/messagelist/messagelist.js');
__wxRoute = 'pages/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/message.js';

define('pages/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{"0d6e":function(t,e,n){"use strict";(function(t){n("50bb"),n("921b");i(n("66fd"));var e=i(n("2737"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1c5d":function(t,e,n){"use strict";n.r(e);var i=n("92b5"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=s.a},2737:function(t,e,n){"use strict";n.r(e);var i=n("6726"),s=n("1c5d");for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);n("845b");var o=n("2877"),u=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"5c6b4d6e",null);e["default"]=u.exports},6726:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"845b":function(t,e,n){"use strict";var i=n("ffb9"),s=n.n(i);s.a},"92b5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("5dcb"),s=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2f98"))},a=function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"5ede"))},c=function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"a905"))},d={data:function(){return{emojis:[],isshowgrid:!1,targetId:"",emoji:{text:""},msgcontent:"",msgs:[],users:{},option:{}}},watch:{messages:{handler:function(t,e){this.loadMsg(t)},deep:!0}},onLoad:function(t){this.targetId=t.targetUserId,this.loadMsg(this.messages),this.emojis=["😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣","😁","🤣","😀","😁","🤣","😀","😁","🤣","😀","😁","🤣"],this.emojis=this.emojis.map(function(t){return{text:t}})},computed:r({},(0,s.mapGetters)(["messages","user"]),{scrollH:function(){var e=t.getSystemInfoSync(),n=e.windowWidth,i=750/n,s=parseInt(e.windowHeight*i);return s}}),components:{uniIcons:u,uniGrid:a,uniGridItem:c},methods:r({},(0,s.mapActions)(["sendMsg"]),{loadMsg:function(e){if(t.getStorageSync(i.CACH_MESSAGE)||0!=e.chatMsgs.length){var n=e.chatMsgs.length>0?e:JSON.parse(t.getStorageSync(i.CACH_MESSAGE)),s=n.users,r=n.chatMsgs,o=(n.unReadCount,this.user.username?this.user:JSON.parse(t.getStorageSync(i.CACH_USER)));this.users=s,this.users[this.targetId]&&t.setNavigationBarTitle({title:this.users[this.targetId].username});var u=o._id;if(!s[u])return null;var a=[u,this.targetId].sort().join("_");this.msgs=r.filter(function(t){return t.chat_id===a})}},sendChat:function(e){var n=JSON.parse(t.getStorageSync(i.CACH_USER)),s=this.user._id||n._id,r=this.targetId,o=e.detail.value.content;this.content=o,o?(this.sendMsg({from:s,to:r,content:o+this.emoji.text}),this.$refs.resrtBtn.$dispatch("Form","uni-form-reset",{type:"reset"}),this.isshowgrid=!1,this.emoji={text:""}):t.showToast({title:"内容不能为空"})},showGrid:function(){this.isshowgrid=!this.isshowgrid},textChange:function(){this.isshowgrid=!1},change:function(t){var e=t.detail.index;this.emoji=this.emojis[e],this.msgcontent=this.msgcontent+this.emoji.text},formReset:function(){}})};e.default=d}).call(this,n("6e42")["default"])},ffb9:function(t,e,n){}},[["0d6e","common/runtime","common/vendor"]]]);
});
require('pages/message/message.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

