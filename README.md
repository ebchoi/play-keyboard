# 💻 비트바이트㈜ 기업 과제 | 플레이키보드 웹스토어

## 1. 프로젝트 개요

- 과제 주관 : 비트바이트㈜

- 작업 기간 : 2022년 10월 4일 ~ 2022년 10월 7일

- 참여 인원 : 오창훈, 유관희, 이주리, 장종현, 최은비(PO)

- 기술 스택 : HTML5, React.JS, Typescript, Styled-components

📍 프로젝트 구현 사이트 : https://leejulie09.github.io/

## 2. 팀원 역할 분할

- 초기 세팅: 이주리

- 메인 페이지 (첫번째 페이지)
    - 이주리 : 카드 뷰, 데이터 불러오기
    - 장종현 : 네브바, 라우터 설정

- 상세 페이지 (두번째 페이지) - 세 팀원 모두 페이지 모두 구현 후 상호 기능 보완
    - 오창훈 : 레이아웃 및 데이터 불러오기
    - 최은비 : 반응형 구현 및 레이아웃, 뒤로가기
    - 유관희 : 공감 버튼 클릭시 증가 기능

- 취합 및 배포: 최은비, 장종현, 이주리

## 3. 개발 내용

### 공통

- Figma에 주어진 디자인 및 명세와 동일하게 구현
- 웹에서 레이아웃이 유동적으로 반응하도록 반응형 레이아웃으로 구현

### 메인 페이지

- 웹 테마 스토어를 통해 카테고리별 네브바 구현
- 키보드 기본 정보 카드 뷰로 구현 및 API 연동
- 각 테마를 클릭시 해당 테마의 상세 화면으로 이동 기능 구현
    - themeId 데이터를 넘겨 동적 라우팅 구현
![Screen Shot 2022-10-07 at 4 03 05 AM](https://user-images.githubusercontent.com/100172541/194423906-69b58952-d22e-4438-925f-b9affa025e1a.png)
![Screen Shot 2022-10-07 at 4 01 08 AM](https://user-images.githubusercontent.com/100172541/194423930-aeaa2345-50db-4a0a-9cfb-b93487cc9e9f.png)


### 상세 페이지

- 웹 테마 정보 페이지를 통해 테마의 상세 정보 API 연동
- 동적 라우팅을 통해 첫 번째 화면에서 전달받은 params(themeId)로 테마 상세 정보 조회
- 상단의 뒤로가기 버튼 클릭 시 첫 번째 화면으로 이동

![Screen Shot 2![Screen Shot 2022-10-07 at 3 49 23 AM](https://user-images.githubusercontent.com/100172541/194424074-c902fe03-36cb-4aca-a2db-7ddbb2f4bcad.png)
022-10-07 at 3 45 56 AM](https://user-images.githubusercontent.com/100172541/194423978-82b55cb6-db7e-4226-8ad4-27086bb8ad9f.png)

![Screen Shot 2022-10-07 at 3 49 23 AM](https://user-images.githubusercontent.com/100172541/194429179-dcab2157-4d16-4e1f-a2d8-80d71011f91b.png)


