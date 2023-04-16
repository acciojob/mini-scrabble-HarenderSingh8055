//your code here
let text = document.getElementById("evaluatedText");
let counter = document.getElementById("letterCount");

text.addEventListener('input',function(){
	// document.write("hello")
	let letters = this.value;
	counter.textContent = letters.length;
});