## [header.js]

1. 햄버거 메뉴 통해 페이지 이동 시 스크롤 안 되는 현상 수정

  - 각 Link element 마다 onchange 함수 설정
  
    * 기존 구현 사항, 누락된 Link element에 적용)

## [header.module.css]

1. navList를 opacity로만 제어하여 햄버거 메뉴 목록 사라진 뒤에도 메뉴를 클릭할 수 있었던 현상 수정

  - .navList {display: grid;} =>
    .navList {display: none;}
    .hamburgerCheck:checked~.navWrapper > .navList {display: grid;}