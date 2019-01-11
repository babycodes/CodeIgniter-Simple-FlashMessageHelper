let notification = document.getElementById('notification')
let message = notification.getAttribute('data-message')
	if(notification != null){
		let getNotif = (m) => {
			notification.innerHTML = m
		}
		getNotif(message)
		setTimeout(() => {
			getNotif("");
		},2000);
	}