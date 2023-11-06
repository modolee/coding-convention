# Coding Convention

# Coding Convention

# Naming

## 공통

- camelCase
- snake_case
- PascalCase
- kebab-case

## 변수 (Variables)

## 함수 (Functions)

## 파일 (Files)

## 상수 (Constants)

## 예시

- 개발자가 봤을 때 불편한 부분은?

# Code Formatting

- Indentation, Space
- Prettier 적용하기
- ESLint 맛보기

# Git

## 커밋 메세지 (Commit Message)

### 참고

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/ko/v1.0.0/#%ea%b7%9c%ea%b2%a9)
- [효율적인 commit message 작성을 위한 conventional commits](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)

## 브랜치 이름 (Branch Name)

# REST API 설계

- 사용자 관련 API 생성 `/users`

## Create - 생성

- `POST /users`

## Read - 읽기

- `GET /users` - 사용자 목록 읽기
- `GET /users/:userId` - 사용자 상세 정보 읽기

## Update - 수정

- `PUT /users/:userId` - 사용자 정보 전체 수정
- `PATCH /users/:userId/name` - 사용자 정보 일부 수정

## Delete - 삭제

- `DELETE /users/:userId` - 사용자 삭제

## 6가지 원칙

https://restfulapi.net/resource-naming/

# DB

- 일관성 있게만 작성하면 됨
- 원격 강의에서는 snake_case도 쓰고 PascalCase도 쓰면서 일관성 없게 나왔는데, 그렇게 하면 안되고 일관성을 유지해야 한다.
- column 또는 field 명은 사용하는 언어에 따라 다른데, 그 이유는 Query를 통해서 데이터를 불러오게 되면 해당 field 명이 그대로 사용되기 때문에 Javascript의 경우 camelCase로 되어 있는게 편합니다. 반대로 php와 같은 언어의 경우 언어를 사용할 때 변수, 함수명 등을 snake_case로 사용하기 때문에 field 명이 snake_case로 되어 있는게 편합니다.
- 물론 ORM의 기능에서 Table의 이름과 불러오는 객체의 이름을 매핑해 주는 기능이 있기 때문에, Table에 snake_case를 camelCase 형태로 변환해서 가져오는 것도 가능합니다. 하지만, 보통 맨 처음 DB를 설계하는 사람이 어떤 언어를 사용하느냐에 따라 이름이 결정되는 경우가 많습니다.

# 참고

- [W3 School Javascript Style Guide](https://www.w3schools.com/js/js_conventions.asp)
- [Airbnb Javascript Style Guide](https://github.com/ParkSB/javascript-style-guide)
