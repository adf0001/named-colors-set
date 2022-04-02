
//global variable, for html page, refer tpsvr @ npm.
named_colors_set = require("../named-colors-set.js");

formatColor = function (color) {
	var text = document.getElementById('inp-text').value || "Color Test 色彩测试";

	return "<span class='-ht-cmd' title='reset' onclick=\"document.getElementById('div-disp').style.background=''\">&lt;</span> " +
		"<span title='background' onclick=\"document.getElementById('div-disp').style.background='" + color + "'\" style='cursor:pointer;background-color:" + color + ";padding-left:5em;'></span>" +
		"<span title='font color' onclick=\"document.getElementById('div-disp').style.color='" + color + "'\" style='cursor:pointer;background-color:white;color:" + color + ";min-width:12em;display:inline-block;'>" + color + "</span>" +
		"<span style='color:" + color + "'> " + text + " <b>" + text + "</b></span> " +
		" / " + color +
		"<br>";
}

updateShowTest = function () {
	var list = named_colors_set.list;
	var keys = named_colors_set.keys;

	var a = [];

	var i, imax = list.length, j, jmax = keys.length, ki;

	//keys
	for (j = 0; j < jmax; j++) {
		ki = keys[j];
		a[a.length] = "<b>" + ki + "</b><br>";

		for (i = 0; i < imax; i++) {
			if (list[i].indexOf(ki) < 0) continue;
			a[a.length] = formatColor(list[i]);
		}
		a[a.length] = "<hr>";
	}

	//all
	a[a.length] = "<b>ALL</b><br>";

	for (i = 0; i < imax; i++) {
		a[a.length] = formatColor(list[i]);
	}

	document.getElementById('div-disp').innerHTML = a.join("");
}


module.exports = {

	"named_colors_set": function (done) {
		if (typeof window === "undefined") throw "disable for nodejs";

		console.log("list: ", named_colors_set.list);
		console.log("keys:", named_colors_set.keys);

		done(!(
			named_colors_set.list && named_colors_set.keys
		));
	},

	"show test": function (done) {
		if (typeof window === "undefined") throw "disable for nodejs";

		document.getElementById('divResult3').innerHTML = "<button onclick='updateShowTest()'>update</button>" +
			" text <input id='inp-text' value='Color Test 色彩测试'></input> " +
			" font-size <select onchange=\"document.getElementById('div-disp').style.fontSize=this.value;\">" +
			"<option value='9pt'>9pt</option>" +
			"<option value='10.5pt' selected>10.5pt</option>" +
			"<option value='12pt'>12pt</option>" +
			"<option value='14pt'>14pt</option>" +
			"</select> " +
			"<div id='div-disp' style='font-size:10.5pt;'></div>";

		updateShowTest();

		done(!(
			true
		));
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('named_colors_set', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
