// function login() {
   
//     // You can perform login validation and authentication here
//     // For simplicity, let's just display an alert
    
// }

// function register() {
   

//     // Frontend validation for registration form
    

//     // Validate email format
    
//     // Validate username (no special characters)
    

//     // Validate password (at least 8 characters, one capital letter, and one numeric)
    
// }
// module.exports = { login, register };






function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (username === "" || password === "") {
    alert("Username and Password cannot be empty!");
    return;
  }

  // For now, just log — later this can call backend /user/login
  console.log("Login Attempt -> Username:", username, "Password:", password);
  alert("Login successful (frontend only)!");
}

function register() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  // Check all fields
  if (!name || !email || !username || !password) {
    alert("All fields are required!");
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Validate username (only alphanumeric)
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!usernameRegex.test(username)) {
    alert("Username must be alphanumeric (no special characters)!");
    return;
  }

  // Validate password (min 8 chars, 1 uppercase, 1 number)
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters, contain one uppercase letter and one number!");
    return;
  }

  console.log("Register ->", { name, email, username, password });
  alert("Registration successful (frontend only)!");
}

module.exports = { login, register };
