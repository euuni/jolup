/*membership.html*/
/*반려인직종인버튼눌렀을때바뀌는*/
function showPetOwnerForm() {
    document.getElementById('petOwnerForm').style.display='block'
    document.getElementById('JobForm').style.display='none'
}
function showJobForm(){
    document.getElementById('petOwnerForm').style.display='none'
    document.getElementById('JobForm').style.display='block'
}
/*완료버튼이랑 취소버튼히히*/
var completebtn = document.querySelector('.complete-btn')
completebtn.addEventListener('click', function(){
    window.location,href= "/join/goodjob.html"
})
var cancel2btn = document.querySelector('.cancel2-btn')
cancel2btn.addEventListener('click', function(){
  window.location.href="/firstp/hompage.html"
})
/*중복체크*/
var checkBtn = document.getElementById('checkbtn')
checkBtn.addEventListener('click', function(){
  var username = document.getElementById('username').value
  var xhr = new XMLHttpRequest()
  xhr.open('Get', '/check-username?username=' + username, true)
  xhr.onreadystatechange= function(){
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
        var response = xhr.responseText
        document.getElementById('resultMessage').innerText = response
      } else {
        console.error('아이디가 존재합니다')
      }
    }
  }
  xhr.send()
})