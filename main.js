let loginInput = document.querySelector(".inputLogin");
let passwordInput = document.querySelector(".Inputpasword");
let btn = document.querySelector(".end-button");



let users = [
  {
    id: 1,
    fullName: "Saidolim Karimbayev",
    coin: 100,
    teacher: "Emirhan",
    exp: 250,
    password: "1234",
    login: "1234",
    grupa: "f2-1899",
  },
];




btn.addEventListener("click", () => {
  users.forEach((user) => {
    if (
      loginInput.value === user.login &&
      passwordInput.value === user.password
    ) {
      localStorage.setItem("oquvchilar", JSON.stringify(user));
      window.location.href = "./about.html";

    } else {
      let p = document.querySelector("p");
      p.innerHTML = 'xato (codi 1234 i logiyam)'
      p.style.color = 'red'
    }
  });

});
let eye = document.querySelector('.eye')
eye.addEventListener('click', () => {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
})


function toggleSwitchcase() {
  let newLogininput = loginInput.value;
  let newpaswodinput = passwordInput.value;

  if (newLogininput && newpaswodinput) {
    btn.style.backgroundColor = "red";
    btn.disabled = false;
    console.log(true);
    btn.addEventListener("click", () => { });
  } else {
    btn.style.backgroundColor = "blue";
    btn.disabled = true;
    console.log(false);
  }
}

loginInput.addEventListener("input", toggleSwitchcase);
passwordInput.addEventListener("input", toggleSwitchcase);


