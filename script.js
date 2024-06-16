let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {           // = 
      if (string != "") {
        string = eval(string);
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == 'C') {      // C
      string = ""
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'CE') {     // CE
      string = document.querySelector('input').value;
      string = string.substring(0, string.length - 1);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '.' || e.target.innerHTML == '-' || e.target.innerHTML == '+' ||
      e.target.innerHTML == '*' || e.target.innerHTML == '/' || e.target.innerHTML == '**' ||
      e.target.innerHTML == '%') {
      string = document.querySelector('input').value;
      let lastEntry = string.charAt(string.length - 1);
      if (lastEntry == '.' || lastEntry == '-' || lastEntry == '+' || lastEntry == '*' ||
        lastEntry == '/' || lastEntry == '**' || lastEntry == '%') {
        document.querySelector('input').value = string;
      }
      else {
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
    }
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})