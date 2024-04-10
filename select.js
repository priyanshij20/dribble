document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        window.location.href = "verify.html";
      }
    });
  });