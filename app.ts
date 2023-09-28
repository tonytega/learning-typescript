let userInput: unknown;
let userName: string;

userInput = 34;
userInput = "hello";

if (typeof userInput === "string") {
    userName = userInput;
}

function getErrorMessage(message: string, code: number): never {
    throw {
        message: message,
        errorCode: code
    }
}

getErrorMessage('there is an error', 500)