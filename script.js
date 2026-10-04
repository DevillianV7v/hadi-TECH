var opts={
paint:[["Frost",'#9aa6b8'],["Obsidian",'#262c38'],["Solar",'#e0b34a'],["Ember",'#b8432f']],
amb:[["Ice",'#4fd1ff'],["Violet",'#a78bfa'],["Amber",'#ffb347'],["Mint",'#5eead4']],
trim:[["Carbon",'#1a2030'],["Sand",'#5a4f43'],["Ivory",'#8c8f96']]};
var st={paint:0,amb:0,trim:0,view:"ext"};
var root=document.documentElement.style;
function render(){
 root.setProperty('--paint',opts.paint[st.paint][1]);
 root.setProperty('--amb',opts.amb[st.amb][1]);
 root.setProperty('--trim',opts.trim[st.trim][1]);
 ['paint','amb','trim'].forEach(function(k){
  document.querySelectorAll('#g-'+k+' .sw').forEach(function(b,i){b.setAttribute('aria-pressed',i===st[k])});});
 document.querySelectorAll('#g-view button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.v===st.view)});
 document.getElementById('v-ext').classList.toggle('on',st.view==='ext');
 document.getElementById('v-int').classList.toggle('on',st.view==='int');
 var s=opts.paint[st.paint][0]+" paint, "+opts.trim[st.trim][0]+" trim, "+opts.amb[st.amb][0]+" cabin light";
 document.getElementById('sum').textContent="Your Haditech: "+s+".";
 document.getElementById('mail').href="mailto:hello@haditech.example?subject="+encodeURIComponent("Haditech test drive")+"&body="+encodeURIComponent("I would like to test drive: "+s+".");
}
['paint','amb','trim'].forEach(function(k){
 var g=document.getElementById('g-'+k);
 opts[k].forEach(function(o,i){
  var b=document.createElement('button');b.className='sw';b.style.background=o[1];
  b.setAttribute('aria-label',o[0]);b.title=o[0];
  b.onclick=function(){st[k]=i;render()};g.appendChild(b);});});
document.querySelectorAll('#g-view button').forEach(function(b){b.onclick=function(){st.view=b.dataset.v;render()}});
render();
