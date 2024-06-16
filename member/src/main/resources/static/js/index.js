//로그인 버튼 클릭됨----------------------------------------
let loginForm=()=>{
    $.ajax({
        url:"/sung/login",
        type:"GET",
        success:(resp)=>{
            
            let temp=$(resp).find(".change");
            $(".change").html(temp);
        }
    })
}
//회원가입 버튼 클릭됨-----------------------------------------
let registerForm=()=>{
    $.ajax({
        url:"/sung/register",
        type:"GET",
        success:(resp)=>{
            let temp=$(resp).find(".change");
            $(".change").html(temp);
        }
    })
}

//아이디/비번 찾기폼

   
  
function findIdPwd() {
       

        $.ajax({
            url:"/sung/findIdPwd",
            type: "GET",
            success: (resp)=> {
                
                // 응답 처리
                let temp = $(resp).find(".change");
                $(".change").html(temp);
            }
        });
    };

// 아이디/비번찾기 함수들
function inputSendit(num) {
	if(keyCode==13) {
		idpwsearch(num);
	}
}


function idpwsearch(num)
{
if(num==2){

		var form = document.idsearch_form2;
		if(form.name.value==""){
			alert("이름을 입력해주세요.");
			form.name.focus();
			return;
		}else if(form.email.value==""){
			alert("이메일을 입력해주세요.");
			form.email.focus();
			return;
		}
	}

		form.submit();
}

//비밀번호----------------------------------------------------------
function text_chkpw(){
	var form = document.querySelector("#pwd").value;
    var pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,20}$/;
	if(form.length < 6 || pattern.test(form) == false){
		$('#no_pw').show();
		$('#ok_pw').hide();
	}else{
		$('#no_pw').hide();
		$('#ok_pw').show();
	}
	form.passwd_check.value = "";
	$('#no_multipw').hide();
	$('#ok_multipw').hide();
}
function multi_chkpw(){
	var formchk = document.querySelector("#pwdchk").value;
    var form = document.querySelector("#pwd").value;
	if(form != formchk) {
		$('#no_multipw').show();
		$('#ok_multipw').hide();
	}else{
		$('#no_multipw').hide();
		$('#ok_multipw').show();
	}
}
// 체크박스 선택시 필요한 양식 표시

function joinform_chk(event)     
{
	var form = document.join_form;
	var checked = $("input[name='chked']:checkbox:checked").val();
	

			if(form.id.value==""){
				alert('아이디를 입력해주세요.');
				form.id.focus();
                event.preventDefault();
				return;	
			}
			// else if(form.id.value.length < 3 || form.id.value.length > 16) {
			// 	alert("아이디는 3~15자로 입력 주세요.");
			// 	form.id.focus();
            //     event.preventDefault();
			// 	return;
			// }
			else if(form.idchk.value==''){
				alert("아이디 중복체크하여 주세요.");
                event.preventDefault();
				return;
			}
			else if(form.pwd.value=="") {
				alert("비밀번호를 입력해 주세요.");
				form.pwd.focus();
                event.preventDefault();
				return;
			}
			// else if(form.pwd.value.length < 6 || text_chkpw()(form.passwd.value) == false){

			// 	alert("비밀번호는 영문+숫자 조합 6자리 이상으로 입력해 주세요.");
			// 	form.pwd.focus();
            //     event.preventDefault();
			// 	return;

			// }
            else if(form.pwdchk.value=="") {
				alert("비밀번호확인를 입력해 주세요.");
				form.pwd_check.focus();
                event.preventDefault();
				return;
			}
			else if(form.pwd.value != form.pwdchk.value) {
				alert("비밀번호가 정확하지 않습니다. 정확히 입력해 주세요.");
				form.pwdchk.focus();
                event.preventDefault();
				return;
			}
			else if(form.name.value=="") {
				alert("이름을 입력해 주세요.");
				form.name.focus();
                event.preventDefault();
				return;
			}
			else if(form.birth.value=="") {
				alert("생년월일을 입력해 주세요.");
				form.birth.focus();
                event.preventDefault();
				return;
			}


			else if(form.postcode.value=="") {
				alert("우편번호를 입력해 주세요.");
				form.postcode.focus();
                event.preventDefault();
				return;
			}
			
			else if(form.roadAddress.value=="") {
				alert("주소를 입력해 주세요.");
				form.roadAddress.focus();
                event.preventDefault();
				return;
			}
			else if(form.detailAddress.value=="") {
				alert("상세주소를 입력해 주세요.");
				form.detailAddress.focus();
                event.preventDefault();
				return;
			}
			else if(form.emailName.value=="") {
				alert("이메일을 입력해 주세요.");
				form.emailName.focus();
                event.preventDefault();
				return;
			}
			else if(form.phone1.value=="") {
				alert("회원님의 휴대폰 번호를 입력해 주세요.");
				form.phone1.focus();
                event.preventDefault();
				return;
			}
			else if(form.phone2.value=="") {
				alert("회원님의 휴대폰 번호를 입력해 주세요.");
				form.phone2.focus();
                event.preventDefault();
				return;
			}
			else if(form.phone3.value=="") {
				alert("회원님의 휴대폰 번호를 입력해 주세요.");
				form.phone3.focus();
                event.preventDefault();
				return;
			
			}else{
				form.submit();
				
			}
	}



 
function userChk()
{

    var userId = document.querySelector("#id");
    var pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,16}$/;


    if(userId.value==""){
        alert('아이디를 입력해주세요.');
        userId.focus();
        return;
    }else if(userId.value.length < 3 || userId.value.length > 16) {
        alert("아이디는 3~15자의 영문과 숫자를 포함해 주세요.");
        userId.focus();
        return;
    }else if(!pattern.test(userId.value)){
    alert('아이디는 영문과 숫자를 포함해 주세요.');
        return;
   }else{

            $.ajax({
                url:"/memberId/chk",
                type:"GET",
                data:{"userId":userId.value},
                success:(resp)=>{

                    if(resp==0){
                        console.log(resp);
                        alert("사용가능한 아이디 입니다.");
                      
                    }else{
                        console.log(resp);
                        alert("현재 사용중인 아이디 입니다.");
                        userId.value="";
                        userId.focus();
                    }
                }
            })

        };
    

    
}
//이메일 option값 input에 넣기
function updateEmailInput(){
    var select = document.getElementById("email_sel");
    var selectedValue = select.value;
    var email2 = document.getElementById("email2");
    email2.value = selectedValue;
}   


//--------------------------------------------------------




   //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
   function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("roadAddress").value = roadAddr;
            document.getElementById("jibunAddress").value = data.jibunAddress;
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("sample4_extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
    
}
//---네이버 로그인---------
function naverIdLogin(){
    var naver_id_login = new naver_id_login("De0kPxQwyc06a1EHZFqe", "http://localhost:8989/naver/callback");
    var state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2,40);
    naver_id_login.setDomain("http://localhost:8989/sung/login");
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();
}
