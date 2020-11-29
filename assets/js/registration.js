//jshint esversion:10
function validate() {

    let a = document.getElementById('username');
    let b = document.getElementById('password');
    let c = document.getElementById('first_name');
    let d = document.getElementById('last_name');
    let e = document.getElementById('email');
    let badColor = "#ff6666";


    if (c.value === "" || d.value === "" || a.value.length < 6 || b.value.length < 6 ||
          e.value.length < 6) {
      if (a) {
   let message2 = document.getElementById('invalid-feedback2');
   if (a.value.length < 6) {
      message2.style.color = badColor;
      message2.innerHTML = "Username should contain at least 6 characters";
   } else {
      message2.innerHTML = "";
   }
}

      if(b)
      {
        let message3 = document.getElementById('invalid-feedback3');
        if (b.value.length < 6) {
            message3.style.color = badColor;
            message3.innerHTML = "Password should contain at least 6 characters";
        }

        else {
          message3.innerHTML = "";
        }
      }

      if(c)
      {
        let message = document.getElementById('invalid-feedback');
        if (c.value === "") {
            message.style.color = badColor;
            message.innerHTML = "Invalid first name";
        }

        else {
          message.innerHTML = "";
        }
      }

      if(d)
      {
        let message1 = document.getElementById('invalid-feedback1');
        if (d.value === "") {
            message1.style.color = badColor;
            message1.innerHTML = "Invalid last name";
        }

        else {
          message1.innerHTML = "";
        }
      }

      if(e)
      {
        let message4 = document.getElementById('invalid-feedback4');
        if (e.value === "") {
            message4.style.color = badColor;
            message4.innerHTML = "Please provide valid email address";
        }

        else {
          message4.innerHTML = "";
        }
      }

      let all = document.getElementsByClassName('row');
      for (let i = 0; i < all.length; i++) {
          all[i].style.paddingBottom = '5px';
       }
      return false;
    }

    else {
      return true;
    }

}

function openPage(pageURL)
{
  window.location.href = pageURL;
}
