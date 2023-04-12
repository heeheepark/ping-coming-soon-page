

function checkIt(){
  let email = document.querySelector('input');
  let errorMsg = document.getElementsByClassName('errorMsg')[0];
  let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if(exptext.test(email.value)==false){
    //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
    email.style.border = "1px solid hsl(354, 100%, 66%)"
    errorMsg.style.display = "block";
    } else {
      email.style.border = "1px solid #ccc";
      errorMsg.style.display = "none";
    }
  
}