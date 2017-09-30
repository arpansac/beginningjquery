// var ajaxRequest = function(){
// 	var myRequest;
// 	var init = function(){
// 		myRequest = new XMLHttpRequest();

// 		console.log('myRequest state', myRequest.readyState);

// 		myRequest.onreadystatechange = requestHandler;
// 		myRequest.open('GET', 'https://dog.ceo/api/breeds/list/all');
// 		myRequest.send();

// 	}

// 	var requestHandler = function(){
// 		console.log('myRequest state inside handler', myRequest.readyState);
// 		if (myRequest.readyState == 4){
// 			if (myRequest.status == 200){
// 				var myData = JSON.parse(myRequest.responseText);
// 				console.log(myData.message);
// 			}else{
// 				console.log('error');
// 			}
// 		}


// 	}
// 	$('#ajax-button').click(init);

// }







var ajaxRequest = function(){
	$.ajax({
		type: 'GET',
		url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		data: {
			'api_key': '8Xwd5CLRqjkLzq2Twy3i6sMMiOC1xOINlIcZP4Ir',
			'sol': 100
		},
		success: function(success_data){
			
			appendPics(success_data.photos);
		},
		error: function(error_data){
			console.log(error_data);
		}
	});

}

var appendPics = function(pictures){
	for (let i = 0; i < pictures.length; i++){
		var newImage = $('<img>', {
			'src': pictures[i].img_src,
			'class': 'nasa-image'
		});

		$('#nasa-image-container').append(newImage);
	}
}

$('#ajax-button').click(ajaxRequest);























