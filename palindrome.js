//----------------- Valid palindrome --------------------------//

document.querySelector(".but-alert").onclick = getname;

let nm;
let numb;
let ck;

function getname() {
  try {
    nm = prompt();
    editing();
  } catch {
    console.log("Versuchen Sie später ncheinmal");
  }
}

function editing() {
  nm = nm.trim().toLowerCase();
  //nm.toString();
  console.log(nm);
  numb = nm.length / 2;

  for (let i = 0; i < numb; i++) {
    if (nm[i] == nm[--nm.length - i]) {
      ck = true;
    } else {
      ck = false;
      break;
    }
  }

  if (ck) {
    console.log("This is a palindrome Word");
  } else {
    console.log("This is not a palindrome Word");
  }
}
