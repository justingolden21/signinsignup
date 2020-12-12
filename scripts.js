$( ()=> {
	// ======== Focus Inputs ========

	$('#login-tab').click( ()=> {
		setTimeout( ()=> $('#login-email-input').focus(), 200);
		document.title = 'Log In | Company Name';
	});

	$('#signup-tab').click( ()=> {
		setTimeout( ()=> $('#signup-name-input').focus(), 200);
		document.title = 'Sign Up | Company Name';
	});


	// ======== Show / Hide Password ========

	$('#toggle-password-btn').click( ()=> {
		if($('#toggle-password-btn').html().indexOf('eye-slash') !=  -1) {
			$('#toggle-password-btn').html('<i class="fas fa-eye"></i>');
			$('#login-password-input').attr('type', 'password');
		} else {
			$('#toggle-password-btn').html('<i class="fas fa-eye-slash"></i>');
			$('#login-password-input').attr('type', 'text');
		}
	});

	// ======== Caps Lock Warning ========

// signup-password-input
// signup-password-confirm-input

	$('#signup input[type=password]').keyup( (evt)=>{
		console.log(evt);
		console.log(evt.originalEvent.getModifierState);
		$('#caps-text').css('display', evt.originalEvent.getModifierState('CapsLock') ? 'block' : 'none');
	});

	// ======== Validation ========

	// 8 chararcters, 1 letter, 1 number, 1 special
	// https://stackoverflow.com/a/21456918/4907950
	const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

	const doValidation = ()=> {
		if(!PASSWORD_REGEX.test($('#signup-password-input').val() ) )
			$('#signup-password-input').addClass('is-invalid');
		else
			$('#signup-password-input').removeClass('is-invalid');

		if($('#signup-password-input').val() != $('#signup-password-confirm-input').val() )
			$('#signup-password-confirm-input').addClass('is-invalid');
		else
			$('#signup-password-confirm-input').removeClass('is-invalid');
	};

	$('#signup-password-input').change(doValidation);
	$('#signup-password-confirm-input').change(doValidation);
});