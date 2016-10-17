# TiRippleEffect
Titanium Ripple Effect for view click events

![alt tag](http://www.learningjquery.com/wp-content/uploads/Material-Button-Click.gif)

## How to use it

```javascript
var ripple = require('/RippleEffect.js');

var view = Titanium.UI.createView({
	top : 1,
	height : 180,
	left : 0,
	right : 0,
	backgroundColor : '#0097A7'
});

view.addEventListener('click', function(e){
	ripple.effect(e);
});
```
