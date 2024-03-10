document.getElementById('email').addEventListener('focusout', function() {
  var emailInput = this.value.trim();
  var errorElement = document.getElementById('email-error');

  if (emailInput === '') {
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = 'email-error';
      errorElement.textContent = '이메일을 입력해 주세요.';
      errorElement.style.color = 'red';
      this.parentNode.insertBefore(errorElement, this.nextSibling);
    }
  } else if (!isValidEmail(emailInput)) {
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = 'email-error';
      errorElement.textContent = '올바른 이메일 주소가 아닙니다.';
      errorElement.style.color = 'red';
      this.parentNode.insertBefore(errorElement, this.nextSibling);
    }
  } else {
    if (errorElement) {
      errorElement.parentNode.removeChild(errorElement);
    }
  }
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}