function openLogin() {
  document.getElementById("loginbox").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginbox").style.display = "none";
}

document.getElementById("closeBtn").onclick = closeLogin;
