function checkPassword() {
    var pass = document.forms["login"]["Pass"].value;
    var repass = document.forms["login"]["RePass"].value;
    if(pass != repass)
    {
            alert("Password don't Match!!");
            return false;
    }
}