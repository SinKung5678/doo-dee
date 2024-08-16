// script.js

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
  
    togglePassword.addEventListener('click', () => {
      // Toggle the type attribute
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
  
      // Toggle the eye icon
      togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });
  });

