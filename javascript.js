function getGet(name) {
	var s = window.location.search;
	s = s.match(new RegExp(name + '=([^&=]+)'));
	return s ? s[1] : false;
}




document.getElementById("xml_info").innerHTML = getGet('xml_data');