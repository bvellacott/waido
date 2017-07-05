
export function calculatePositions(ids, radius) {
	var count = ids.length;
	var c = 2*(count > 1 ? Math.max(4, count+1) : 1)*radius;
	var r = c/(2*Math.PI);
	var da = 2*Math.PI/count;

	var positions = {};
	var a = 0;
	for(var i = 0; i < count; i++, a += da) {
		positions[ids[i]] = [ r*Math.sin(a), r*Math.cos(a) ];
	}

	return positions;
}