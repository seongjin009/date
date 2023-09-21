/*
  객체를 생성하는 방법
  -객체리터럴을 통한 생성
  -생성자함수를 통한 생성 (new 키워드를 이용해서 동일한 구조의 객체를 복사할 때 주로 사용)
  -생성자함수를 통해서 생성된 객체 : 인스턴스
  -인스턴스 객체에는 prototype이라는 공통의 저장공간이 포함되어 있어서 자주쓰는 함수를 등록 후 자유롭게 호출 가능
*/

const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(setTime, 1000);

function changeClass(hr) {
	if (hr >= 6 && hr < 12) document.body.classList.add('morning');
	if (hr >= 12 && hr < 16) document.body.classList.add('afternoon');
	if (hr >= 16 && hr < 20) document.body.classList.add('evening');
	if (hr >= 20 || hr < 6) document.body.classList.add('night');
}

function setTime() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);
	changeClass(hours);
}

//우리나라 시간대는 전세계 표준시간대에서 9시간이 더해진 시간 (그리니치 표준시간대 적용)

const months = [
	'january',
	'february',
	'march',
	'aprill',
	'may',
	'june',
	'july,august',
	'september',
	'october',
	'november',
	'december',
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}

function setNumbers(num) {
	/*
	if (num < 10) num = '0' + num;

	if (num < 10) {
		result = '0' + num;
	} else {
		result = num;
	}
	*/
	//조건식 ? true일때 실행할 구문 : false일때 실행할 구문
	//삼황연산자 구문안에는 대입연산자가 들어올 수 없기 때문에 괄호로 묶어서 표현식으로 변경  <num < 10 ? (result = '0' + num) : >(result = num);
	//특정값이 else일 때 굳이 실행할 코드가 없다면 &&연산자 활용
	num < 10 && (num = '0' + num);
	return num;
}

/*
if (12 > hours >= 0) {
	if (hours > 10) {
		console.log(`${hours}-A.M.`);
	} else {
		console.log(`0${hours}-A.M.`);
	}
} else {
	let el = hours - 12;
	if (el > 10) {
		console.log(`${el}-P.M.`);
	} else {
		console.log(`0${el}-P.M.`);
	}
}*/
//추가작업
