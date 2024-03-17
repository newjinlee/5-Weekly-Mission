/* 이메일 input */

document.getElementById('email').addEventListener('focusout', function () {
  const emailInput = this.value.trim();
  const errorElement = document.getElementById('email-error');
  const emailField = document.getElementById('email');

  if (emailInput === '') {
    emailField.style.border = '1px solid red';
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
      emailField.style.border = '1px solid red';
      this.parentNode.insertBefore(errorElement, this.nextSibling);
    }
  } else {
    if (errorElement) {
      errorElement.parentNode.removeChild(errorElement);
    }
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* 비밀번호 input */

document.getElementById('current-password').addEventListener('focusout', function () {
  const passwordinput = this.value.trim();
  const errorElement = document.getElementById('password-error');
  const passwordField = document.getElementById('current-password');

  if (passwordinput === '') {
    passwordField.style.border = '1px solid red';
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = 'password-error';
      errorElement.textContent = '비밀번호를 입력해 주세요.';
      errorElement.style.color = 'red';
      this.parentNode.insertBefore(errorElement, this.nextSibling);
    }
  } else {
    if (errorElement) {
      errorElement.parentNode.removeChild(errorElement);
    }
  }
});

/* 로그인 기능 */

document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('current-password').value.trim();

  // 예시 이메일 비밀번호
  const correctEmail = 'test@codeit.com';
  const correctPassword = 'codeit101';

  const emailErrorElement = document.getElementById('email-error');
  const passwordErrorElement = document.getElementById('password-error');

  if (emailInput === correctEmail && passwordInput === correctPassword) {
    // 로그인이 성공한 경우
    window.location.href = './folder.html';
  } else {
    // 로그인이 실패한 경우
    if (emailInput !== correctEmail || emailErrorElement) {
      emailErrorElement = document.createElement('div');
      emailErrorElement.id = 'email-error';
      emailErrorElement.textContent = '이메일을 확인해 주세요.';
      emailErrorElement.style.color = 'red';
      const emailInputElement = document.getElementById('email');
      emailInputElement.style.border = '1px solid red';
      emailInputElement.parentNode.insertBefore(emailErrorElement, emailInputElement.nextSibling);
      console.log("이메일 오류");
    }
    if (passwordInput !== correctPassword || passwordErrorElement) {
      passwordErrorElement = document.createElement('div');
      passwordErrorElement.id = 'email-error';
      passwordErrorElement.textContent = '비밀번호를 확인해 주세요.';
      passwordErrorElement.style.color = 'red';
      const passwordInputElement = document.getElementById('current-password');
      passwordInputElement.style.border = '1px solid red';
      passwordInputElement.parentNode.insertBefore(passwordErrorElement, passwordInputElement.nextSibling);
      console.log("비밀번호 오류");
    }
  }
});