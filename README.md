# TiRippleEffect
Titanium Ripple Effect for view click events

![alt tag](http://www.learningjquery.com/wp-content/uploads/Material-Button-Click.gif)

## How to use it

```javascript
	var view = Titanium.UI.createView({
		top : 1,
		height : 180,
		left : 0,
		right : 0,
		backgroundColor : '#0097A7'
	});
	featured_venues.add(wrapper);
	
	view.addEventListener('click', function(e){
		RippleEffect(e);
	});
```
