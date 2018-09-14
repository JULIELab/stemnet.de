function emil2email() {
	var spans = document.getElementsByTagName("span");
	for(var i=0; i<spans.length; i++) {
		if(spans[i].className == "emil") {
			var email = "";
			var emils = spans[i].childNodes;
			for(var j=0; j<emils.length; j++) {
				switch(emils[j].className) {
					case "emil.name":
						email = emils[j].innerHTML; break;
					case "emil.domain":
						email += "@"+emils[j].innerHTML;
				}
			}
			spans[i].innerHTML = '<a href="mailto:'+email+'">'+
				email+'</a>';
		}
	}
}

window.onload = emil2email;
