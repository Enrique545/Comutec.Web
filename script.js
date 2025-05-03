const btn = document.getElementById("btn");
const title = document.getElementById("title");
function Hello() {
    console.log("Hello");
    title.innerText = "Hello";
    setTimeout(() => {
         title.innerText = "Adios"
    }, 5000);
}
btn.addEventListener("click",Hello);