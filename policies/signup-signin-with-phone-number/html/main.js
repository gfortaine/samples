function getToken() {
  const token = document
    .getElementById("loginframe")
    .contentWindow.getToken("adB2CSignInSignUp");

  if (token === "LoginIsRequired")
    document.getElementById("tokenTextarea").value = "Please login!!!";
  else document.getElementById("tokenTextarea").value = token.access_token;
}

function logOut() {
  document
    .getElementById("loginframe")
    .contentWindow.policyLogout("adB2CSignInSignUp", "B2C_1A_SignUpOrSignIn");
}

window.parent.postMessage("signUp", "*");
