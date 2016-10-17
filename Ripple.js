exports.effect = function(e) {

	var OS_IOS = Titanium.Platform.osname != 'android';
	var _x = (OS_IOS || e.dp) ? e.x : (e.x / Ti.Platform.displayCaps.logicalDensityFactor);
	var _y = (OS_IOS || e.dp) ? e.y : (e.y / Ti.Platform.displayCaps.logicalDensityFactor);

	// Max & Min value from Width and Height of our clicked view.
	// This way we can make the circle big enough to fit the view.
	var maxHeightWidth = Math.max(e.source.rect.width, e.source.rect.height);
	var minHeightWidth = Math.min(e.source.rect.width, e.source.rect.height);

	// Our circle that will be scaled up using 2dMartix.
	var ripple = Titanium.UI.createView({
		borderRadius : minHeightWidth / 2,
		height : minHeightWidth,
		width : minHeightWidth,
		center : {
			x : _x,
			y : _y
		},
		backgroundColor : "#FFFFFF",
		zIndex : 999,
		opacity : 0,
		touchEnabled : false
	});
	// Add the ripple view inside the clicked view
	e.source.add(ripple);

	// Use chainAnimate to sequence the animation steps.
	// We'll position the view at the center of the click position, by using the center property).
	var anim_1 = Titanium.UI.createAnimation({
		center : {
			x : _x,
			y : _y
		},
		duration : 0,
		opacity : 0.3,
		transform : Ti.UI.create2DMatrix().scale(20 / maxHeightWidth)
	});

	anim_1.addEventListener('complete', function() {
		ripple.animate(anim_2);
	});

	var anim_2 = Titanium.UI.createAnimation({
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN,
		duration : 350,
		opacity : 0.0,
		transform : Ti.UI.create2DMatrix().scale((maxHeightWidth * 2) / minHeightWidth)
	});

	anim_2.addEventListener('complete', function() {
		ripple.animate(anim_3);
	});

	var anim_3 = Titanium.UI.createAnimation({
		opacity : 0.0,
		duration : 100,
		curve : Ti.UI.ANIMATION_CURVE_LINEAR
	});

	anim_3.addEventListener('complete', function() {
		e.source.remove(ripple);
	});

	ripple.animate(anim_1);
};
