$( ()=> {
	// ======== Focus Inputs ========

	$('#login-tab').click( ()=> setTimeout( ()=> $('#login-email-input').focus(), 200) );
	$('#signup-tab').click( ()=> setTimeout( ()=> $('#signup-name-input').focus(), 200) ).click();

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