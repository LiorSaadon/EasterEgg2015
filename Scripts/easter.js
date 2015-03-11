window.onload = function() {			
	easter();
};


function easter() {
	var now = 0;
    //var runOnce = true;
	var state = {
		index: 0,
		past: 0,
        numOfRuns: 0,
        maxOfRuns: 1
	};
	
	var tick = function() {
		now += 50;
        animateUrl(now, state);
        if (state.numOfRuns < state.maxOfRuns) {
            setTimeout(tick, 50);
        }
	};
	
	function setHash(str, title) {
		window.history.replaceState({}, title, '#'+str)
	}

	function animateUrl(now, state) {
		var frameRate = 250;

		if (now - state.past > frameRate) {
			var frames = [
                "EGG o",
                "EGG  0",
                "EGG   O",
                "EGG    0",
                "EGG     o",
                "EGG      0",
                "EGG       O",
                "EGG      0",
                "EGG     o",
                "EGG    0",
                "EGG   O",
                "EGG  0",
                "EGG o",
                "EGG o",
                "EGG  0",
                "EGG   O",
                "EGG    0",
                "EGG     o",
                "EGG      0",
                "EGG       O",
                "EGG        O_",
                "EGG        O_=",
                "EGG        O_==",
                "EGG        O_===",
                "EGG        O_====",
                "EGG        O_==== I",
                "EGG        O_==== I ",
                "EGG        O_==== I w",
                "EGG        O_==== I wi",
                "EGG        O_==== I wis",
                "EGG        O_==== I wish",
                "EGG        O_==== I wish ",
                "EGG        O_==== I wish y",
                "EGG        O_==== I wish yo",
                "EGG        O_==== I wish you",
                "EGG        O_==== I wish you ",
                "EGG        O_==== I wish you h",
                "EGG        O_==== I wish you ha",
                "EGG        O_==== I wish you hap",
                "EGG        O_==== I wish you happ",
                "EGG        O_==== I wish you happy",
                "EGG        O_==== I wish you happy ",
                "EGG        O_==== I wish you happy E",
                "EGG        O_==== I wish you happy Ea",
                "EGG        O_==== I wish you happy Eas",
                "EGG        O_==== I wish you happy East",
                "EGG        O_==== I wish you happy Easte",
                "EGG        O_==== I wish you happy Easter",
                "EGG        O_==== I wish you happy Easter =",
                "EGG        O_==== I wish you happy Easter ==",
                "EGG        O_==== I wish you happy Easter ===",
                "EGG        O_==== I wish you happy Easter ====",
                "EGG        O_==== I wish you happy Easter ====_",
                "EGG        O_==== I wish you happy Easter ====_O",
                "EGG      * O_==== I wish you happy Easter ====_O *",
                "EGG     ** O_==== I wish you happy Easter ====_O **",
                "EGG    *** O_==== I wish you happy Easter ====_O ***",
                "EGG   **** O_==== I wish you happy Easter ====_O ****"];
			
			if (state.index > frames.length - 1) {
				state.index = 0;
                state.numOfRuns += 1;
			}

			setHash(frames[state.index], 'Easter');

			state.index += 1;
			state.past = now;
		}
	}
    setTimeout(tick, 50);
}