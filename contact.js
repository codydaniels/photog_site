


$(document).ready(function(){
	$('.submit').click(function(event){
		console.log("submit attempt")

		var email = $('.email').val()
		var emailV = $('.emailV').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var radio = $('.stateR:checked')
		var statusEmail = $('.emailStatus')
		var statusEmailV = $('.emailStatusV')
		var statusSubject = $('.subjectStatus')
		var statusMessage = $('.messageStatus')
		var statusElm = $('.status')
		var statusRadio = $('.radioStatus')
		statusElm.empty()
		statusEmail.empty()
		statusEmailV.empty()
		statusSubject.empty()
		statusMessage.empty()
		statusRadio.empty()

		console.log(radio)

		if(email.length > 5 && email.includes(".") && email.includes("@")) {
			statusEmail.append('<div class="appendFormYes">&nbsp&nbsp&nbsp&nbsp&#10003;</div>')
		}
		else {
			statusEmail.append('<div class="appendFormNo">&nbsp&nbsp&nbsp&nbsp&#10008; not a valid email</div>')
			event.preventDefault()
		}
		if(emailV == email) {
			statusEmailV.append('<div class="appendFormYes">&nbsp&nbsp&nbsp&nbsp&#10003;</div>')
		}
		else {
			statusEmailV.append('<div class="appendFormNo">&nbsp&nbsp&nbsp&nbsp&#10008; did not match</div>')
			event.preventDefault()
		}

		if(subject.length >= 2) {
			statusSubject.append('<div class="appendFormYes">&nbsp&nbsp&nbsp&nbsp&#10003;</div>')
		}
		else {
			statusSubject.append('<div class="appendFormNo">&nbsp&nbsp&nbsp&nbsp&#10008; too short</div>')
			event.preventDefault()
		}


		if(message.length > 10) {
			statusMessage.append('<div class="appendFormYes">&nbsp&nbsp&nbsp&nbsp&#10003;</div>')
		}
		else {
			statusMessage.append('<div class="appendFormNo">&nbsp&nbsp&nbsp&nbsp&#10008; too short</div>')
			event.preventDefault()
		}

		if(email.length > 5 && email.includes(".") && email.includes("@") && message.length > 10 && subject.length >= 2 && emailV == email) {
			statusElm.append('<div class="appendFormYes">&nbsp  &#10003;</div>')


			sessionStorage.setItem('completed','yes');

			setTimeout(function(){
				window.location.href='index.html'
			},1000)
			
		}
		else {
			statusElm.append('<div class="appendFormNo">&nbsp&nbsp&nbsp&nbsp&#10008 please check the form and try again</div>')
		}

		if(radio.length > 0) {
			statusRadio.append('<div class="appendFormYes">&nbsp&nbsp&nbsp&nbsp&#10003;</div>')
		}
		else {
			statusRadio.append('<div class="appendFormNo">&nbsp&nbsp&nbsp&nbsp&#10008; please select one</div>')
			event.preventDefault()
		}



	});
});