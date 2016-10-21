exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
	return fn.apply(this, arr);
	///return fn(...args)
  },

  speak: function(fn, obj) {
	return fn.call(obj);
  },

  functionFunction: function(str) {
	function a(str2){return str + ", " + str2;}
	return a;
  },

  makeClosures: function(arr, fn) {
	
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
