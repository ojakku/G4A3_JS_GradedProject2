function addData() {
    var email = "admin";
    var pass = "user";


    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPwd', pass);

    // localStorage.userEmail = email;
    // localStorage.userPwd = pass;

}

function validate() {
    var enterEmail = document.getElementById( 'username' ).value;
    var enterPwd = document.getElementById( 'password' ).value;

    var getEmail = localStorage.getItem( 'userEmail' );
    var getPwd = localStorage.getItem( 'userPwd' );

    if( enterEmail == getEmail ) {
        if( enterPwd == getPwd) {
            alert( "Login Succesful" );
            console.log( "Success" );
        }
        else
        {
            alert( "Wrong Password" );
            console.log( "Failed" );
        }
    }
    else
    {
        alert( "Invalid Details" );
        console.log( "Failed" );
    }
}