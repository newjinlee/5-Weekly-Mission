const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

export function setInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
}

export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter = password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

export function redirectToIfAccessTokenExists(destination) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    location.replace(destination);
  }
}
