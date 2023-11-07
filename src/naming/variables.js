// 나쁜 예 - 의미 없는 단어
const value = 'Tony';

// 나쁜 예 - 예약어, Error 발생
const const = 'Tony';

// 좋은 예
const firstName = 'Tony';
const lastName = 'Stark';


// 예외, Boolean 타입

// money, age 값이 이미 있다는 가정 하에 작성 된 코드입니다.
// 가독성이 낮은 코드
if(money > 99999999999 && age < 30) {
  // 영앤리치 클럽 가입 로직
}

// 가독성이 높은 코드
const isYoungAndRich = money > 99999999999 && age < 30;

if(isYoungAndRich) {
  // 영앤리치 클럽 가입 로직
}