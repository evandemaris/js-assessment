exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	  return arr.indexOf(item);
  },

  sum: function(arr) {
	  let result=0;for(let i=0;i<arr.length;i++){result+=arr[i];}return result;
  },

  remove: function(arr, item) {
	let result=[];for(let i=0;i<arr.length;i++){if(arr[i]!==item){result.push(arr[i]);}} return result;
  },

  removeWithoutCopy: function(arr, item) {
	for(let i=0;i<arr.length;i++){
		if(arr[i]===item){
			arr.splice(i,1);
			i=0;
		}
	}
	return arr;
  },

  append: function(arr, item) {
	arr.push(item);
	return arr;
  },

  truncate: function(arr) {
	arr.pop();
	return arr;
  },

  prepend: function(arr, item) {
	arr.unshift(item);
	return arr;
  },

  curtail: function(arr) {
	arr.shift();
	return arr;
  },

  concat: function(arr1, arr2) {
	let result=arr1;for(i=0;i<arr2.length;i++){result.push(arr2[i]);} return result;
  },

  insert: function(arr, item, index) {
	  arr.splice(index, 0, item);
	  return arr;
  },

  count: function(arr, item) {
	let count=0;
	for(let i=0;i<arr.length;i++){
		if(arr[i]===item){
			count++;
		}
	}
	return count;
  },

  duplicates: function(arr) {
	let fin=[],ret=[];
	for(let i=0;i<arr.length;i++)
	{
		if(fin.includes(arr[i])&&!ret.includes(arr[i]))
			{ret.push(arr[i]);} fin.push(arr[i]);
	}
	return ret;
  },
  
  square: function(arr) {
	let ret=[];for(let i=0;i<arr.length;i++){ret.push(arr[i]**2);}return ret;
  },

  findAllOccurrences: function(arr, target) {
	let ret=[];
	for(let i=0;i<arr.length;i++){
		console.log(arr[i])
		console.log(target)
		console.log(ret)
		if(arr[i]===target){
			ret.push(i);
		}
	}
	return ret;
  }
};
