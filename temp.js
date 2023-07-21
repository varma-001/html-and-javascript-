var users = [];
var loginForm = document.getElementById('login-form');
var signupForm = document.getElementById('signup-form');
loginForm.addEventListener('submit', function(event) {
	event.preventDefault(); 
	var email = document.getElementById('login-email').value;
	var password = document.getElementById('login-password').value;
	var user = users.find(function(u) {
		return u.email === email && u.password === password;
	});
	if (user) 
    {
		console.log('Login successful');
	} else 
    {
		console.log('Invalid email or password');
	}
});

signupForm.addEventListener('submit', function(event) {
	event.preventDefault();

	var firstname = document.getElementById('signup-firstname').value;
	var lastname = document.getElementById('signup-lastname').value;
	var email = document.getElementById('signup-email').value;
	var password = document.getElementById('signup-password').value;

	var user = {
		firstname: firstname,
		lastname: lastname,
		email: email,
		password: password
	};
	users.push(user);
	console.log('Signup successful');
});
