function getkey()
{
	var key = document.getElementById('key').value;
	eel.main(key);
	eel.expose(keyerror);
	eel.expose(showchords);
}

function showchords(a, b, c, d, e, f, g, h, i)
{
	document.getElementById('1').innerHTML = a;
	document.getElementById('2').innerHTML = b;
	document.getElementById('3').innerHTML = c;
	document.getElementById('4').innerHTML = d;
	document.getElementById('5').innerHTML = e;
	document.getElementById('6').innerHTML = f;
	document.getElementById('7').innerHTML = g;
	document.getElementById('8').innerHTML = h;
	document.getElementById('9').innerHTML = i;
}

function keyerror()
{
	document.getElementById('1').innerHTML = '\\';
	document.getElementById('2').innerHTML = '|';
	document.getElementById('3').innerHTML = '/';
	document.getElementById('4').innerHTML = '__';
	document.getElementById('5').innerHTML = 'Not exist';
	document.getElementById('6').innerHTML = '__';
	document.getElementById('7').innerHTML = '/';
	document.getElementById('8').innerHTML = '|';
	document.getElementById('9').innerHTML = '\\';
}
