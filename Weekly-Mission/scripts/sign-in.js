/* 이메일 input */

document.getElementById('email').addEventListener('focusout', function () {
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

/* 비밀번호 input */

document.getElementById('current-password').addEventListener('focusout', function () {
  var passwordinput = this.value.trim();
  var errorElement = document.getElementById('password-error');

  if (passwordinput === '') {
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

document.getElementById('signin-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var emailInput = document.getElementById('email').value.trim();
  var passwordInput = document.getElementById('current-password').value.trim();

  // 예시 이메일 비밀번호
  var correctEmail = 'test@codeit.com';
  var correctPassword = 'codeit101';

  var emailErrorElement = document.getElementById('email-error');
  var passwordErrorElement = document.getElementById('password-error');

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
      var emailInputElement = document.getElementById('email');
      emailInputElement.parentNode.insertBefore(emailErrorElement, emailInputElement.nextSibling);
      console.log("이메일 오류");
    }
    if (passwordInput !== correctPassword || passwordErrorElement) {
      passwordErrorElement = document.createElement('div');
      passwordErrorElement.id = 'email-error';
      passwordErrorElement.textContent = '비밀번호를 확인해 주세요.';
      passwordErrorElement.style.color = 'red';
      var passwordInputElement = document.getElementById('current-password');
      passwordInputElement.parentNode.insertBefore(passwordErrorElement, passwordInputElement.nextSibling);
      console.log("비밀번호 오류");
    }
  }
});