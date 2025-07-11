function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Please enter both username and password.");
  } else {
    // Redirect to a cool website after login
    window.location.href = "https://www.pornhub.com";
  }
}
