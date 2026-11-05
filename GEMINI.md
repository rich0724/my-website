# 프로젝트 기본 규칙 (Workspace Rules)

## 1. 한국어 소통 및 권한 요청 규칙
- 사용자에게 허락/허용을 구하거나 질문을 할 때 항상 **한국어**를 사용합니다.
- `run_command` 도구의 `toolSummary`(승인 팝업 상단에 표시되는 작업 요약 제목)와 `ask_question` 도구의 질문/선택지는 영어가 아닌 **한국어**로 작성합니다.

## 2. 웹사이트 제작 및 테스트 규칙 (CLAUDE.md 연동)
- 내가 만든 사이트를 열어서 화면을 확인하거나 클릭·입력 테스트를 할 때는 `agent-browser`를 사용할 것.
- 프로젝트 폴더에서 작업할 때 `graphify-out` 폴더가 없으면 먼저 `graphify`로 그래프를 만들고, 코드를 수정한 뒤에는 그래프를 갱신할 것. 단, 사용자 홈 폴더(`C:\Users\User`) 자체에서는 실행하지 말 것.
- 프로젝트 폴더에 `DESIGN.md`가 있으면 UI를 만들기 전에 반드시 먼저 읽고 그 규칙을 따를 것.
- 웹사이트에 유리 효과가 필요하면 **Liquid Glass JS** (`https://github.com/dashersw/liquid-glass-js`)를 사용할 것.
- 웹사이트 배경에 움직이는 그라데이션이 필요하면 **ShaderGradient** (`@shadergradient/react`, `https://github.com/ruucm/shadergradient`)를 사용할 것.
