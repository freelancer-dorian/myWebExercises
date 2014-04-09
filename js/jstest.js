var obj = {
	a : null,
	b : null,
	c : null
}

var obj1 = {
	a : null,
	b : null,
	c : null	
}

window.onload = function(){
	obj.a = 1;
	obj1.b = 2;

	obj = obj1;
	console.log(obj);
};