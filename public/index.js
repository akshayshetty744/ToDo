// Dark Mode
function dark() {
  var t = document.getElementById("bt");
  if (t.value == "YES") {
    document.querySelector("#sun").className = "moon";
    t.value = "NO";
    var x = document.querySelector(".dark");
    x.style.zIndex = "-1";
    document.querySelector("#sun").src = "../src/images/icon-sun.svg";
    document.body.style.backgroundColor = "rgb(24,24,36)";
  } else if (t.value == "NO") {
    t.value = "YES";
    document.querySelector("#sun").src = "../src/images/icon-moon.svg";
    var x = document.querySelector(".dark");
    x.style.zIndex = "-2";
    document.body.style.backgroundColor = "white";
    document.querySelector("#sun").className = "sun";
  }
}

// input adding
var x = " ";
function enter() {
  // var input = document.getElementById("input");
  // input.addEventListener("keypress", function (event) {
  //   if (event.key === "Enter") {
  //       event.preventDefault();

  //     console.log("enter");
  //   }
  // });

  var input = document.getElementById("input").value;
  x = input;
  document.getElementById("check").style.background = "white";
  document.getElementById("check").disabled = false;
}
var count = 0;
// click to add in tr
var tr = " ";
function check() {
  document.getElementById("check").style.background =
    "linear-gradient(145deg, rgba(114,185,254,1) 23%, rgba(164,123,242,1) 67%)";
  var z = " ";

  tr = `<tr class="row1" id="clr">
        <td class="button1">
          <button id="check1" role="switch" onclick="check1(this)"  value="YES">
            <img class="d-flex justify-content-center"  id="img1" src="../src/images/icon-check.svg"/>
          </button>
         <td> 
          <td><span id="done">${x}</span></td>
          <td class="ls">
           <button class="imgbtn" onclick="delete1(this)" >
             <img class="cross" src="../src/images/icon-cross.svg">
           </button>
          </td>
        </tr>`;
  document.getElementById("input").value = z;
  document.getElementById("check").disabled = true;
  count = document.getElementById("table").rows.length;
  console.log(count);
  document.getElementById("tbody").innerHTML += tr;
  g = tr;
  document.getElementById("count").innerText = count + " items left";
  document.getElementById("all").style.color = "blue";
}

var coutt = 0;
// Task Completing
function check1(e) {
  var check1 = document.getElementById("check1");
  if (check1.value == "YES") {
    check1.value = "NO";
    e.style.background = "none";
    coutt--;
    console.log(count + coutt);
    document.getElementById("count").innerText = count + coutt + " items left";

    var tr = e.closest("tr");
    var j = tr.children[2];
    var k = j.children[0];
    k.className = "";

    //   Incomplete Tast
    var element = document.getElementById("Incomplete");
    element.addEventListener("click", myFunction2);
    function myFunction2() {
      if (check1.value == "YES") {
        e.closest("tr").style.display = "none";
        document.getElementById("all").style.color = "black";
        element.style.color = "blue";
      } else if (check1.value == "NO") {
        e.closest("tr").style.display = "";
      }
    }
  } else if (check1.value == "NO") {
    e.style.background = "linear-gradient(145deg, rgba(114,185,254,1) 23%, rgba(164,123,242,1) 67%)";
    check1.value = "YES";
    coutt++;
    console.log(count - coutt);
    document.getElementById("count").innerText = count - coutt + " items left";
    // check tast is completed classname
    var tr = e.closest("tr");
    var j = tr.children[2];
    var k = j.children[0];
    k.className = "del";

    //   Completed Tast

    //   var element4 = document.getElementById("completed");
    //   element4.addEventListener("click", myFunction4);
    //   function myFunction4() {
    //       if (check1.value == "NO") {

    //           e.closest("tr").style.display = "nome";
    //     }
    //     else if (check1.value == "YES") {
    //         e.closest("tr").style.display = "";
    //       }
    //   }

    //   All Tast
    var element2 = document.getElementById("all");
    element2.addEventListener("click", myFunction2);
    function myFunction2() {
      if (check1.value == "YES") {
        e.closest("tr").style.display = "";
        element2.style.color = "blue";
        document.getElementById("Incomplete").style.color = "black";
      }
    }
    // Clear all completed Tast
    var element = document.getElementById("clear");
    element.addEventListener("click", myFunction1);
    function myFunction1() {
      var l = document.getElementById("clr");
      if (check1.value == "YES") {
        e.closest("tr").remove();
      }
    }
  }
}
document.getElementById("count").innerText = count - coutt + "items left";

// delete
function delete1(e) {
  e.closest("tr").remove();
}
