// 초기 변수 설정
let count = 0;

// 테스트 함수 - 클릭할 때마다 숫자 증가
function testFunction() {
    count += 1;
    alert(`테스트 함수가 정상 작동합니다! 현재 카운트: ${count}`);
}

// 테스트 버튼 클릭 시 테스트 함수 호출 
document.getElementById('add-task').addEventListener('click', testFunction);