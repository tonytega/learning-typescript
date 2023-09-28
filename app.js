var userInput;
var userName;
userInput = 34;
userInput = "hello";
if (typeof userInput === "string") {
    userName = userInput;
}
function getErrorMessage(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
getErrorMessage('there is an error', 500);
