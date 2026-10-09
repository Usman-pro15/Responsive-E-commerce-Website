(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
var P=[
{id:1,n:'Aero Run Sneakers',c:'Footwear',pr:89,old:119,r:4.7,rv:312,b:'Sale',a:'shoe',p:'#FF5A36',s:'#111827',b1:'#FFE3DA',b2:'#FFC2AE',d:'Lightweight knit sneakers with a springy sole. Breathable, flexible and made for all-day wear.'},
{id:2,n:'Studio Pro Headphones',c:'Audio',pr:149,r:4.8,rv:528,b:'New',a:'head',p:'#2D3250',s:'#F6B17A',b1:'#E6E9FF',b2:'#C3CAFF',d:'Over-ear wireless headphones with deep bass, clear vocals and 40 hours of battery life.'},
{id:3,n:'Pulse Smartwatch',c:'Wearables',pr:129,old:159,r:4.5,rv:204,b:'Sale',a:'watch',p:'#1F2937',s:'#FF5A36',b1:'#FFEFD5',b2:'#FFD59A',d:'Track steps, heart rate and sleep on a bright always-on display. Water resistant to 50 metres.'},
{id:4,n:'Trail Daypack',c:'Bags',pr:69,r:4.6,rv:187,a:'pack',p:'#2F6F5E',s:'#F2A541',b1:'#DDF1E6',b2:'#B6E0CB',d:'A 22-litre daypack with padded straps, a laptop sleeve and weather-resistant fabric.'},
{id:5,n:'Aviator Sunglasses',c:'Eyewear',pr:59,r:4.4,rv:143,a:'shade',p:'#E8A91B',s:'#111111',b1:'#E3F4FF',b2:'#B8E1FA',d:'Polarised lenses with 100% UV protection in a light, durable metal frame.'},
{id:6,n:'AirBuds Mini',c:'Audio',pr:79,old:99,r:4.3,rv:391,b:'Sale',a:'buds',p:'#F3F4F6',s:'#4B5563',b1:'#D2DBEC',b2:'#A9B8D6',d:'Compact true-wireless earbuds with noise reduction and a pocket-sized charging case.'},
{id:7,n:'Retro Compact Camera',c:'Tech',pr:199,r:4.9,rv:96,b:'New',a:'cam',p:'#B8BEC9',s:'#2B2F3A',b1:'#FDE6D2',b2:'#F8C79A',d:'A 24MP compact camera with a classic look, fast autofocus and built-in wireless sharing.'},
{id:8,n:'Insulated Bottle',c:'Lifestyle',pr:35,r:4.7,rv:610,a:'bottle',p:'#3A86FF',s:'#0B3D91',b1:'#DCEBFF',b2:'#AFCFFF',d:'Double-wall steel bottle that keeps drinks cold for 24 hours or hot for 12.'},
{id:9,n:'Nova X Smartphone',c:'Tech',pr:499,r:4.6,rv:274,b:'New',a:'phone',p:'#1C1F2A',s:'#6D5DFB',b1:'#ECE6FF',b2:'#CDBFFF',d:'6.5-inch OLED display, all-day battery and a camera that handles low light with ease.'},
{id:10,n:'City Tote Bag',c:'Bags',pr:75,old:90,r:4.5,rv:158,a:'tote',p:'#B5434E',s:'#3A1F24',b1:'#FBE0E3',b2:'#F4B6BE',d:'A roomy canvas-and-leather tote with an inner zip pocket. Easy to dress up or down.'},
{id:11,n:'Halo Desk Lamp',c:'Lifestyle',pr:49,r:4.4,rv:121,a:'lamp',p:'#2B2D42',s:'#FFC53D',b1:'#FFF6D6',b2:'#FFE59A',d:'Adjustable LED desk lamp with three brightness levels and a warm, eye-friendly glow.'},
{id:12,n:'Boom Mini Speaker',c:'Audio',pr:65,r:4.6,rv:342,a:'spk',p:'#14B8A6',s:'#0F172A',b1:'#D4F5F0',b2:'#9FE3D9',d:'Pocket-size Bluetooth speaker with big sound, IPX7 water resistance and 12 hours of play.'}];
var CATS=['All','Footwear','Audio','Wearables','Bags','Eyewear','Tech','Lifestyle','Saved'];
var LS={get:function(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
var cart=LS.get('vv_cart',{}),wish=LS.get('vv_wish',[]),orders=LS.get('vv_orders',[]),promo=LS.get('vv_promo',''),cat='All',sort='feat',q='';
function $m(n){return'$'+n.toFixed(2)}
function by(id){return P.filter(function(x){return x.id===+id})[0]}
function ui(n,c){return'<svg class="ui '+(c||'')+'" aria-hidden="true"><use href="#i-'+n+'"/></svg>'}
var IMG={
  shoe:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85',
  head:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85',
  watch:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85',
  pack:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85',
  shade:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85',
  buds:'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=85',
  cam:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85',
  bottle:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=85',
  phone:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85',
  tote:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85',
  lamp:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85',
  spk:'https://images.unsplash.com/photo-1608043152269-423dbba4e7c1?auto=format&fit=crop&w=700&q=85'
};
function art(x){return'<img class="art" src="'+IMG[x.a]+'" alt="'+x.n+'" loading="lazy">'}
function bg(x){return'--b1:'+x.b1+';--b2:'+x.b2}
function stars(r){var h='';for(var i=1;i<=5;i++)h+='<svg class="st'+(i<=Math.round(r)?' on':'')+'" aria-hidden="true"><use href="#i-star"/></svg>';return h}
function toast(m){var t=document.createElement('div');t.className='toast';t.innerHTML=ui('check')+'<span></span>';t.lastChild.textContent=m;$('#toasts').appendChild(t);setTimeout(function(){t.classList.add('out');setTimeout(function(){t.remove()},400)},2600)}

/* ---------- shop grid ---------- */
function list(){var l=P.filter(function(x){return(cat==='All'||(cat==='Saved'?wish.indexOf(x.id)>-1:x.c===cat))&&(!q||(x.n+' '+x.c).toLowerCase().indexOf(q)>-1)});
  if(sort==='lo')l.sort(function(a,b){return a.pr-b.pr});if(sort==='hi')l.sort(function(a,b){return b.pr-a.pr});if(sort==='top')l.sort(function(a,b){return b.r-a.r});return l}
function card(x,i){var w=wish.indexOf(x.id)>-1;
  return'<article class="pc" style="--i:'+i+';'+bg(x)+'" data-id="'+x.id+'"><div class="pm tilt">'+(x.b?'<span class="bdg">'+x.b+'</span>':'')
  +'<button class="wh'+(w?' on':'')+'" data-a="wish" aria-pressed="'+w+'" aria-label="Save '+x.n+'">'+ui('heart')+'</button>'
  +'<button class="pa" data-a="view" aria-label="Quick view '+x.n+'">'+art(x)+'</button><button class="qk" data-a="view" tabindex="-1">Quick view</button></div>'
  +'<div class="pi"><span class="pcat">'+x.c+'</span><h3>'+x.n+'</h3><div class="rt">'+stars(x.r)+'<small>'+x.r+' ('+x.rv+')</small></div>'
  +'<div class="pp"><b>'+$m(x.pr)+'</b>'+(x.old?'<s>'+$m(x.old)+'</s>':'')+'<button class="add" data-a="add" aria-label="Add '+x.n+' to cart">'+ui('plus')+'</button></div></div></article>'}
function renderGrid(){var l=list();
  $('#grid').innerHTML=l.length?l.map(card).join(''):'<div class="empty"><h3>No products found</h3><p>Try a different search or category.</p><button class="btn" data-a="reset">Clear filters</button></div>';
  $('#count').textContent=l.length+' product'+(l.length===1?'':'s');
  $$('#chips button').forEach(function(b){b.classList.toggle('on',b.dataset.c===cat)})}
function skeleton(){var h='';for(var i=0;i<8;i++)h+='<div class="skl"></div>';$('#grid').innerHTML=h}

/* ---------- hero ring ---------- */
$('#ring').innerHTML=[1,2,3,9,12,7,10,5].map(function(id,i){var x=by(id);return'<div class="rc" style="--i:'+i+';'+bg(x)+'">'+art(x)+'<b>'+x.n+'</b><span>'+$m(x.pr)+'</span></div>'}).join('');
$('#sw').addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||RM)return;var r=this.getBoundingClientRect();
  $('#stage').style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*24+'deg');$('#stage').style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*16+'deg')});
$('#sw').addEventListener('pointerleave',function(){$('#stage').style.setProperty('--ry','0deg');$('#stage').style.setProperty('--rx','0deg')});

/* ---------- 3D tilt on product images ---------- */
$('#grid').addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||RM)return;var m=e.target.closest('.pm');if(!m)return;
  var r=m.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  m.style.transform='perspective(700px) rotateY('+x*14+'deg) rotateX('+(-y*14)+'deg) scale(1.03)'});
$('#grid').addEventListener('pointerout',function(e){var m=e.target.closest('.pm');if(m&&!m.contains(e.relatedTarget))m.style.transform=''});

/* ---------- cart ---------- */
function cnt(){return Object.keys(cart).reduce(function(s,k){return s+cart[k]},0)}
function totals(){var sub=0;Object.keys(cart).forEach(function(k){sub+=by(k).pr*cart[k]});
  var disc=promo==='SAVE10'?sub*.1:0,ship=(!sub||sub-disc>=100||promo==='FREESHIP')?0:6.99;return{sub:sub,disc:disc,ship:ship,total:sub-disc+ship}}
function saveCart(){LS.set('vv_cart',cart);LS.set('vv_promo',promo)}
function badge(bump){var n=cnt(),c=$('#cnt');c.textContent=n;c.classList.toggle('on',n>0);if(bump&&!RM){var b=$('#cartb');b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')}}
function renderCart(){var ks=Object.keys(cart),t=totals();
  $('#cb').innerHTML=ks.length?ks.map(function(k){var x=by(k);return'<div class="ci" data-id="'+k+'"><div class="cth" style="'+bg(x)+'">'+art(x)+'</div><div class="cinfo"><b>'+x.n+'</b><span>'+$m(x.pr)+' each</span><div class="qty"><button data-a="dec" aria-label="Decrease quantity">'+ui('minus')+'</button><output>'+cart[k]+'</output><button data-a="inc" aria-label="Increase quantity">'+ui('plus')+'</button></div></div><div class="ctot"><b>'+$m(x.pr*cart[k])+'</b><button class="rm" data-a="rm" aria-label="Remove '+x.n+'">'+ui('trash')+'</button></div></div>'}).join('')
    :'<div class="mt">'+ui('bag')+'<h3>Your cart is empty</h3><p>Add something you love and it will show up here.</p><button class="btn" data-a="shop">Start shopping</button></div>';
  var left=Math.max(0,100-(t.sub-t.disc));
  $('#ship').innerHTML=ks.length?(left>0?'Add <b>'+$m(left)+'</b> more for free shipping':'You unlocked free shipping!')+'<div><i style="--p:'+Math.min(1,(t.sub-t.disc)/100)+'"></i></div>':'Free shipping on orders over $100';
  $('#df').innerHTML=ks.length?'<div class="pr"><input id="pc" placeholder="Promo code" aria-label="Promo code" value="'+promo+'"><button class="btn" data-a="promo" type="button">Apply</button></div><p class="pm2" id="pm2"></p>'
    +'<div class="row"><span>Subtotal</span><span>'+$m(t.sub)+'</span></div>'+(t.disc?'<div class="row"><span>Discount (10%)</span><span>-'+$m(t.disc)+'</span></div>':'')
    +'<div class="row"><span>Shipping</span><span>'+(t.ship?$m(t.ship):'Free')+'</span></div><div class="row t"><span>Total</span><span>'+$m(t.total)+'</span></div><button class="btn" data-a="checkout">Checkout '+ui('arrow')+'</button>':'';
  badge(false)}
function openCart(o){document.body.classList.toggle('open',o);document.body.classList.toggle('lock',o);$('#dr').setAttribute('aria-hidden',!o);if(o){renderCart();setTimeout(function(){var b=$('#dr [data-close]');b&&b.focus()},50)}}
function fly(src,x){if(RM||!src||!src.animate)return;var r=src.getBoundingClientRect(),t=$('#cartb').getBoundingClientRect(),f=document.createElement('div');
  f.className='fly';f.style.cssText='left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px;background:linear-gradient(150deg,'+x.b1+','+x.b2+')';f.innerHTML=art(x);document.body.appendChild(f);
  var a=f.animate([{transform:'translate(0,0) scale(1) rotate(0)',opacity:1},{transform:'translate('+(t.left-r.left)+'px,'+(t.top-r.top-60)+'px) scale(.2) rotate(200deg)',opacity:.3}],{duration:750,easing:'cubic-bezier(.5,0,.8,.4)'});
  a.onfinish=function(){f.remove()}}
function add(id,n,src){var x=by(id);cart[id]=Math.min(10,(cart[id]||0)+(n||1));saveCart();badge(true);fly(src,x);toast(x.n+' added to cart')}

/* ---------- quick view ---------- */
function openQV(id){var x=by(id),w=wish.indexOf(x.id)>-1;
  $('#qvb').setAttribute('data-id',id);
  $('#qvb').innerHTML='<div class="qva" style="'+bg(x)+'">'+art(x)+'</div><div class="qvi"><span class="pcat">'+x.c+'</span><h2>'+x.n+'</h2><div class="rt">'+stars(x.r)+'<small>'+x.r+' ('+x.rv+' reviews)</small></div><p>'+x.d+'</p>'
   +'<div class="pp"><b>'+$m(x.pr)+'</b>'+(x.old?'<s>'+$m(x.old)+'</s>':'')+'</div><div class="qr"><div class="qty"><button data-a="qm" aria-label="Decrease">'+ui('minus')+'</button><output id="qn">1</output><button data-a="qp" aria-label="Increase">'+ui('plus')+'</button></div>'
   +'<button class="btn" data-a="qadd">Add to cart</button><button class="ib" data-a="wish" aria-label="Save">'+ui('heart')+'</button></div><p style="font-size:.85rem">In stock. Ships in 1 to 2 business days.</p></div>';
  var d=$('#qv');d.showModal?d.showModal():d.setAttribute('open','')}

/* ---------- orders ---------- */
function stat(o){if(o.cancel)return -1;var s=(Date.now()-o.t)/1000;return s<25?0:s<75?1:2}
var STEPS=['Processing','Shipped','Delivered'];
function renderOrders(anim){var box=$('#orders');box.classList.toggle('noanim',!anim);
  if(!orders.length){box.innerHTML='<div class="empty">'+ui('box')+'<h3>No orders yet</h3><p>When you place an order it will appear here.</p><a class="btn" href="#shop">Start shopping</a></div>';return}
  box.innerHTML=orders.map(function(o){var s=stat(o),pc=s<0?0:s*50;
   return'<article class="od" data-oid="'+o.id+'"><div class="oh"><div><b>'+o.id+'</b><span>'+new Date(o.t).toLocaleString('en-US',{dateStyle:'medium',timeStyle:'short'})+'</span></div><span class="pill '+(s<0?'sx':'s'+s)+'">'+(s<0?'Cancelled':STEPS[s])+'</span></div>'
   +(s<0?'':'<div class="trk" style="--w:'+(pc*.667)+'%">'+STEPS.map(function(t,i){return'<div class="'+(i<=s?'d':'')+'"><i>'+(i<=s?ui('check'):'')+'</i>'+t+'</div>'}).join('')+'</div>')
   +'<div class="oi" style="margin-top:'+(s<0?'1rem':'0')+'">'+o.items.map(function(it){var x=by(it.id);return'<div><span class="th" style="'+bg(x)+'">'+art(x)+'</span>'+it.qty+' x '+x.n+'</div>'}).join('')+'</div>'
   +'<div class="of"><div><span class="sub">Ship to '+o.city+'. Paid by '+(o.pay==='cod'?'cash on delivery':'card')+'.</span><br><b>'+$m(o.total)+'</b></div><div>'+(s===0?'<button class="btn cx" data-a="cancel">Cancel order</button> ':'')+'<button class="btn" data-a="reorder">Reorder</button></div></div></article>'}).join('')}

/* ---------- checkout ---------- */
function chk(el,msg,ok){var l=el.closest('label');l.classList.toggle('bad',!ok);l.querySelector('.err').textContent=ok?'':msg;return ok}
function openCO(){var t=totals();if(!cnt())return;openCart(false);
  $('#co').classList.remove('done');$('#cof').reset();$('#cardf').hidden=false;$$('.err',$('#co')).forEach(function(e){e.textContent=''});$$('.bad',$('#co')).forEach(function(e){e.classList.remove('bad')});
  $('#cosb').innerHTML=Object.keys(cart).map(function(k){var x=by(k);return'<div class="mini"><span class="th" style="'+bg(x)+'">'+art(x)+'</span><span>'+cart[k]+' x '+x.n+'</span><b>'+$m(x.pr*cart[k])+'</b></div>'}).join('')
   +'<div class="row"><span>Subtotal</span><span>'+$m(t.sub)+'</span></div>'+(t.disc?'<div class="row"><span>Discount</span><span>-'+$m(t.disc)+'</span></div>':'')+'<div class="row"><span>Shipping</span><span>'+(t.ship?$m(t.ship):'Free')+'</span></div><div class="row t"><span>Total</span><span>'+$m(t.total)+'</span></div>';
  var d=$('#co');d.showModal?d.showModal():d.setAttribute('open','')}
function confetti(){if(RM)return;var cf=$('#cf'),cs=['#FF5A36','#FFB020','#6D5DFB','#14B8A6','#3A86FF'],h='';
  for(var i=0;i<46;i++)h+='<i style="--c:'+cs[i%5]+';--x:'+((Math.random()-.5)*900)+'px;--y:'+(Math.random()*500-80)+'px;--r:'+(Math.random()*900)+'deg;animation-delay:'+(Math.random()*.2)+'s"></i>';
  cf.innerHTML=h;setTimeout(function(){cf.innerHTML=''},2000)}
$('#cof').addEventListener('submit',function(e){e.preventDefault();
  var n=$('#cn'),em=$('#ce'),a=$('#ca'),c=$('#cc'),ph=$('#cp'),card=$('input[name=pm]:checked').value==='card',ok=true;
  ok=chk(n,'Enter your full name.',n.value.trim().length>1)&ok;
  ok=chk(em,'Enter a valid email address.',/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim()))&ok;
  ok=chk(a,'Enter your delivery address.',a.value.trim().length>5)&ok;
  ok=chk(c,'Enter your city.',c.value.trim().length>1)&ok;
  ok=chk(ph,'Enter a phone number with at least 7 digits.',ph.value.replace(/\D/g,'').length>=7)&ok;
  if(card){var num=$('#cnum'),ex=$('#cex'),cv=$('#ccv');
    ok=chk(num,'Enter a 13 to 19 digit card number.',/^\d{13,19}$/.test(num.value.replace(/\s/g,'')))&ok;
    ok=chk(ex,'Use the format MM/YY.',/^(0[1-9]|1[0-2])\/\d{2}$/.test(ex.value))&ok;
    ok=chk(cv,'Enter the 3 or 4 digit code.',/^\d{3,4}$/.test(cv.value))&ok}
  if(!ok)return;
  var t=totals(),o={id:'VRV-'+Math.floor(100000+Math.random()*900000),t:Date.now(),items:Object.keys(cart).map(function(k){return{id:+k,qty:cart[k]}}),total:t.total,city:c.value.trim(),pay:card?'card':'cod',name:n.value.trim()};
  orders.unshift(o);LS.set('vv_orders',orders);cart={};promo='';saveCart();badge(true);
  $('#okp').textContent='Thank you, '+o.name.split(' ')[0]+'. Your order '+o.id+' for '+$m(o.total)+' is being processed.';
  $('#co').classList.add('done');confetti()});
$('#cnum').addEventListener('input',function(){this.value=this.value.replace(/\D/g,'').slice(0,19).replace(/(.{4})/g,'$1 ').trim()});
$('#cex').addEventListener('input',function(){var v=this.value.replace(/\D/g,'').slice(0,4);this.value=v.length>2?v.slice(0,2)+'/'+v.slice(2):v});
$$('input[name=pm]').forEach(function(r){r.onchange=function(){$('#cardf').hidden=$('input[name=pm]:checked').value!=='card'}});

/* ---------- events ---------- */
function closeDlg(d){d.close?d.close():d.removeAttribute('open')}
document.addEventListener('click',function(e){
  var cl=e.target.closest('[data-close]');if(cl){if(cl.dataset.close==='cart')openCart(false);else closeDlg(cl.closest('dialog'));return}
  if(e.target.tagName==='DIALOG'){closeDlg(e.target);return}
  var b=e.target.closest('[data-a]');if(!b)return;var a=b.dataset.a,h=b.closest('[data-id]'),id=h&&+h.dataset.id;
  if(a==='add'){add(id,1,$('.pm',h))}
  else if(a==='view')openQV(id);
  else if(a==='wish'){var i=wish.indexOf(id);if(i>-1)wish.splice(i,1);else wish.push(id);LS.set('vv_wish',wish);toast(i>-1?'Removed from saved':'Saved for later');
    if(b.closest('#qvb')){b.classList.toggle('on')}else{if(cat==='Saved')renderGrid();else{b.classList.toggle('on',i<0);b.setAttribute('aria-pressed',i<0)}}}
  else if(a==='qm'){var o=$('#qn');o.textContent=Math.max(1,+o.textContent-1)}
  else if(a==='qp'){var o2=$('#qn');o2.textContent=Math.min(10,+o2.textContent+1)}
  else if(a==='qadd'){add(id,+$('#qn').textContent,$('.qva .art'));closeDlg($('#qv'))}
  else if(a==='inc'){cart[id]=Math.min(10,cart[id]+1);saveCart();renderCart()}
  else if(a==='dec'){cart[id]--;if(cart[id]<1)delete cart[id];saveCart();renderCart()}
  else if(a==='rm'){delete cart[id];saveCart();renderCart()}
  else if(a==='promo'){var c=$('#pc').value.trim().toUpperCase(),ok=c==='SAVE10'||c==='FREESHIP';promo=ok?c:'';saveCart();renderCart();var m=$('#pm2');m.textContent=c?(ok?'Code applied!':'That code is not valid.'):'';m.style.color=ok?'#14B8A6':'#D93A1E'}
  else if(a==='checkout')openCO();
  else if(a==='shop'){openCart(false);location.hash='#shop'}
  else if(a==='reset'){cat='All';q='';$('#q').value='';renderGrid()}
  else if(a==='cancel'){var oid=b.closest('[data-oid]').dataset.oid;orders.forEach(function(o){if(o.id===oid)o.cancel=true});LS.set('vv_orders',orders);renderOrders(false);toast('Order cancelled')}
  else if(a==='reorder'){var oid2=b.closest('[data-oid]').dataset.oid;orders.forEach(function(o){if(o.id===oid2)o.items.forEach(function(it){cart[it.id]=Math.min(10,(cart[it.id]||0)+it.qty)})});saveCart();badge(true);openCart(true)}
});
$('#cartb').onclick=function(){openCart(true)};$('#scrim').onclick=function(){openCart(false)};
document.addEventListener('keydown',function(e){if(e.key==='Escape')openCart(false)});
$('#chips').innerHTML=CATS.map(function(c){return'<button data-c="'+c+'">'+c+'</button>'}).join('');
$('#chips').onclick=function(e){var b=e.target.closest('button');if(!b)return;cat=b.dataset.c;renderGrid()};
$('#sort').onchange=function(){sort=this.value;renderGrid()};
$('#q').addEventListener('input',function(){q=this.value.trim().toLowerCase();if(location.hash==='#orders')location.hash='#shop';renderGrid()});
$('#q').addEventListener('keydown',function(e){if(e.key==='Enter'){$('#shop').scrollIntoView({behavior:RM?'auto':'smooth'})}});
$('#sbtn').onclick=function(){var s=$('#sb');s.classList.toggle('show');if(s.classList.contains('show'))$('#q').focus()};
$('#menu').onclick=function(){var o=$('#nav').classList.toggle('open');this.setAttribute('aria-expanded',o)};
$('#nav').onclick=function(e){if(e.target.tagName==='A')$('#nav').classList.remove('open')};
$('#theme').onclick=function(){var R=document.documentElement,d=R.getAttribute('data-theme')==='dark'||(!R.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches),n=d?'light':'dark';R.setAttribute('data-theme',n);LS.set('vv_theme',n)};
var th=LS.get('vv_theme',null);if(th)document.documentElement.setAttribute('data-theme',th);
$('#nl').addEventListener('submit',function(e){e.preventDefault();var v=$('#ne').value.trim(),m=$('#nlm');
  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){m.textContent='You are subscribed. Thank you!';this.reset()}else m.textContent='Please enter a valid email address.'});
$('#yr').textContent=new Date().getFullYear();

/* ---------- routing ---------- */
function route(){var h=location.hash,o=h==='#orders';$('#shopView').hidden=o;$('#ordersView').hidden=!o;
  $$('#nav a').forEach(function(a){a.classList.toggle('on',o?a.dataset.r==='orders':a.dataset.r==='shop'&&h!=='#deals'||a.dataset.r==='deals'&&h==='#deals')});
  if(o){renderOrders(true);window.scrollTo(0,0)}else if(h==='#shop'||h==='#deals'){var t=$(h);t&&t.scrollIntoView()}}
window.addEventListener('hashchange',route);
setInterval(function(){if(location.hash==='#orders'&&!document.hidden)renderOrders(false)},4000);

/* ---------- countdown ---------- */
function tick(){var n=new Date(),e=new Date(n);e.setHours(24,0,0,0);var s=Math.floor((e-n)/1000),p=function(x){return String(x).padStart(2,'0')};
  $('#cH').textContent=p(Math.floor(s/3600));$('#cM').textContent=p(Math.floor(s%3600/60));var c=$('#cS');c.textContent=p(s%60);
  if(!RM){c.classList.remove('flip');void c.offsetWidth;c.classList.add('flip')}}
tick();setInterval(tick,1000);

/* ---------- start ---------- */
badge(false);skeleton();setTimeout(function(){renderGrid();route()},RM?0:450);
})();