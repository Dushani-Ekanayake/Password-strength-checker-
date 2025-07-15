const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let strength = getPasswordStrength(password);
  strengthText.textContent = `Strength: ${strength}`;
});

function getPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^a-zA-Z0-9]/)) strength++; // special character

  if (strength <= 2) return 'Weak';
  if (strength <= 4) return 'Moderate';
  if (strength === 5) return 'Strong';
}
