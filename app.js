let string = "";
const buttons = document.querySelectorAll(".btn-mag");
const clear = document.querySelector(".clear");
const input = document.querySelector("#input");
input.value = string

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    input.value += `${e.target.innerHTML}`;
    console.log(string);

    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    }
    string += e.target.innerHTML;
  });
});

clear.addEventListener('click' , ()=>{
  string=""
  input.value = string;
})


