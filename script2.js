let input = sessionStorage.getItem("input");
let script = input.split(/\s+/);
let timeout = 30

document.addEventListener("click", function() {
	for(let i = 0; i < script.length; i++) {
		setTimeout(() => {
			document.querySelector(".word").innerText=script[i];
		}, timeout*i);
	}
});