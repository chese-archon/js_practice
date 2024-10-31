const btn = document.getElementById("fill_btn");
var inp = document.getElementById("inp");
btn.addEventListener("click", function() {
    inp.value = "test@email.ru";
}) 

// 3
const btn2 = document.getElementById("alert_btn");
const inp3 = document.getElementById("inp3");
btn2.addEventListener("click", function() {
    const inp_val = inp3.value;
    if (inp_val == "") {alert("Nothing");}
    else {alert(inp_val);}
})

// 4
const btn3 = document.getElementById("change");
const inp_change1 = document.getElementById("inp_change1"), inp_change2 = document.getElementById("inp_change2");

btn3.addEventListener("click", function() {
    const inp1 = inp_change1.value, inp2 = inp_change2.value;
    inp_change2.value = inp1;
    inp_change1.value = inp2;
})

// 5
const btn4 = document.getElementById("lock"), btn5 = document.getElementById("unlock"), 
inp5 = document.getElementById("inp5");

/*btn3.addEventListener("click", function() {
    inp5.disabled = true;
})

btn3.addEventListener("click", function() {
    inp5.disabled = false;
})*/
function lock() {inp5.disabled = true;}

function unlock() {inp5.disabled = false;}

// 6
function square() {
    var x = document.getElementById("square");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// 7 
const squares = document.querySelectorAll(".square1");
let activeSq = null;
squares.forEach(sq => {
    sq.addEventListener("click", function() {
        if (activeSq) {
            activeSq.classList.remove("active");
        }
        sq.classList.add("active");
        activeSq = sq;/**/
        /*if (sq == activeSq) {
            activeSq.classList.remove("active");
            activeSq = null;
        }
        else {
            if (activeSq) {
                activeSq.classList.remove("active");
            }            
        }
        sq.classList.add("active");
        activeSq = sq;*/
    });
});

/*function onSquareClick() {
    this.classList.toggle("active");
    document.querySelectorAll(".square2.active").forEach(s => {
      if (s !== this) s.classList.remove("active");
    });
  }*/

// 8
// calc
const btn_all = document.querySelectorAll(".btn_num"), btn_all_op = document.querySelectorAll(".btn_func");
const output = document.getElementById("calc_msg"), inpp = document.getElementById("math"); //, btn_calc = document.getElementsByClassName("calc_func");
// for numbers
btn_all.forEach(btnn => {
    btnn.addEventListener("click", function() {
        output.textContent += this.value;
        inpp.value += this.value;
    })
})
//for math operations
btn_all_op.forEach(btnn => {
    btnn.addEventListener("click", function() {
        if (this.value != "Clear") {
            output.textContent  += this.value;
            inpp.value += this.value;
        }
        else {
            output.textContent = "";
            inpp.value = "";
        }
        })
        
})

inpp.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        // cursor position
        output.textContent = inpp.value; //output.textContent.substring(0, output.textContent.length - 1)
    }
})

function calc() {
    try {
        // вычисляем значение строки
        // это возможно благодаря методу "evaluate" объекта "math"
        // Math.trunc используется для округления до целого числа
        output.textContent = Math.trunc(math.evaluate(output.textContent));
        inpp.value = Number(Math.trunc(math.evaluate(output.textContent)));
        
    // если операцию выполнить невозможно
    } catch {
        output.textContent = "cant calc";
        inpp.value = "cant calc";
    }
}
