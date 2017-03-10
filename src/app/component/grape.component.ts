import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'grape',
  template:`
  <br><br><br><br>
  <br><br><br><br>
  <br><br><br><br>
<div class="bar">
<div class="percent">
<span style="width: 100%;"></span>
</div>
<div class="circle">
<span>0%</span>
</div>
<div class="text">
<input type="text" class="input" value="0" />
<small>Please change a value and hit the enter key.</small>
</div>
</div>
  `,
  styleUrls: ['./grape.component.css']
})
export class GrapeComponent {
  title = 'app works!';
}

$(function(){
var input = $('.input'),
bar = $('.bar'),
bw = bar.width(),
percent = bar.find('.percent'),
circle = bar.find('.circle'),
ps = percent.find('span'),
cs = circle.find('span'),
name = 'rotate';
input.on('keydown', function(e){
if (e.keyCode == 13){
var t = $(this), val = t.val();
if (val >=0 && val <= 100){
var w = 100-val, pw = (bw*w)/100,
pa = {
width: w+'%'
},
cw = (bw-pw)/2,
ca = {
left: cw
}
ps.animate(pa);
cs.text(val+'%');
circle.animate(ca, function(){
circle.removeClass(name)
}).addClass(name);
} else {
alert('range: 0 - 100');
t.val('');
}
}
});
});
