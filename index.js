(function(module){
module.exports = readingTime
function readingTime(callback,data,wpm){
	if(typeof wpm !== "number") wpm = 250;
	if (typeof data === "string"){
		return callback(data.split(" ").length / wpm)
	}
	if(data instanceof Array){
		return callback(data.length / wpm)
	}
	if(typeof data === "number"){
		return callback(data/wpm)
	}
	else{
		return callback(new Error("Provided data isn't one of the following: string, array or number"));
	}
}
})(typeof module === 'undefined'? this['readingTime']={}: module);