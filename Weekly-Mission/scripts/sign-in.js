/* 이메일 input */

document.getElementById('email').addEventListener('focusout', function () {
  const emailInput = this.value.trim();
  let errorElement = document.getElementById('email-error');
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

/* 데이터 유효성 검증 */
const userSchema = {
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  },
  password: {
    validate: (value) => !!value
  }
};

function validateData(data, schema) {
  const errors = {};
  for (const key in schema) {
    const validator = schema[key].validate;
    const value = data[key];
    if (!validator(value)) {
      errors[key] = `${key} is invalid.`;
    }
  }
  return errors;
}

const userData = {
  email: "test@codeit.com",
  password: "codeit101"
};

const validationErrors = validateData(userData, userSchema);
if (Object.keys(validationErrors).length === 0) {
  console.log("Data is valid.");
} else {
  console.log("Validation errors:", validationErrors);
}


/* 비밀번호 input */

document.getElementById('current-password').addEventListener('focusout', function () {
  const passwordinput = this.value.trim();
  let errorElement = document.getElementById('password-error');
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
    if (emailInput !== correctEmail) {
      const emailInputElement = document.getElementById('email');
      let existingErrorElement = document.getElementById('email-error');
      emailInputElement.style.border = '1px solid red';
      if (!existingErrorElement) {
        const newErrorElement = document.createElement('div');
        newErrorElement.id = 'email-error';
        newErrorElement.textContent = '이메일을 확인해 주세요.';
        newErrorElement.style.color = 'red';
        emailInputElement.parentNode.insertBefore(newErrorElement, emailInputElement.nextSibling);
      } else {
        existingErrorElement.textContent = '이메일을 확인해 주세요.'; // 이미 존재하는 에러 요소가 있다면, 내용만 갱신
      }
    }

    if (passwordInput !== correctPassword) {
      const passwordInputElement = document.getElementById('current-password');
      let existingErrorElement = document.getElementById('password-error');
      passwordInputElement.style.border = '1px solid red';
    
      if (!existingErrorElement) {
        const newErrorElement = document.createElement('div');
        newErrorElement.id = 'password-error';
        newErrorElement.textContent = '비밀번호를 확인해 주세요.';
        newErrorElement.style.color = 'red';
        passwordInputElement.parentNode.insertBefore(newErrorElement, passwordInputElement.nextSibling);
      } else {
        existingErrorElement.textContent = '비밀번호를 확인해 주세요.';
      }
    }

  }
});