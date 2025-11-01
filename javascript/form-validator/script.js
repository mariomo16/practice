const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const passInputCheck = document.getElementById("passwordcheck");
const singupButton = document.getElementById("signup");
const showPassword = document.getElementById("showpassword");
const passwordHint = document.getElementById("passwordhints");

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

emailInput.addEventListener("input", () => {
	const output = emailRegex.test(emailInput.value);
	if (output === true) {
		emailInput.style.color = "var(--text)";
	} else {
		emailInput.style.color = "#ef5350";
	}
	checkSignup();
});

passInput.addEventListener("input", () => {
	const output = passwordRegex.test(passInput.value);
	if (output) {
		passInput.style.color = "var(--text)";
		passwordHint.style.display = "none";
		passInputCheck.removeAttribute("disabled");
	} else {
		passInput.style.color = "#ef5350";
		passwordHint.style.display = "block";
		passInputCheck.setAttribute("disabled", true);
	}
	passInputCheck.value = "";
	checkSignup();
});

passInputCheck.addEventListener("input", () => {
	if (passInputCheck.value === passInput.value) {
		passInputCheck.style.color = "var(--text)";
	} else {
		passInputCheck.style.color = "#ef5350";
	}
	checkSignup();
});

showPassword.addEventListener("change", () => {
	const type = showPassword.checked ? "text" : "password";

	passInput.type = type;
	passInputCheck.type = type;
});

function checkSignup() {
	if (
		emailRegex.test(emailInput.value) &&
		passwordRegex.test(passInput.value) &&
		passInputCheck.value === passInput.value
	) {
		singupButton.removeAttribute("disabled");
	} else {
		singupButton.setAttribute("disabled", true);
	}
}
