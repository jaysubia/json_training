//In order for ajax to work we need to be working on a server can be locally


var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

			info = JSON.parse(request.responseText); //without this line this will not work this line parses the data to be used
 
			var output='';
			for (var i = 0; i <= info.links.length-1; i++) {
				for (key in info.links[i]) {
					if (info.links[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<a href = "' + info.links[i][key] +
						'">' + key + '</a>';
						'</li>';
			    }   
				}
			}
			
			var update = document.getElementById('links');
			update.innerHTML = output;
			
			
	} //ready
} //event

request.send();