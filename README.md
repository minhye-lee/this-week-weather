# :open_book: THIS WEEK

> 본 어플리케이션은 모바일 해상도에서 최적화 되어있습니다.
>
> [![TypeScript-v4.6.4](https://img.shields.io/badge/TypeScript-v4.6.4-007ACC.svg)](https://www.typescriptlang.org/) > [![React-v18.1.0](https://img.shields.io/badge/React-v18.1.0-61DAFB.svg?logo=react)](https://reactjs.org/) > [![Emotion-v11.9.3](https://img.shields.io/badge/Emotion-11.9.3-blueviolet)](https://emotion.sh/docs/introduction) > [![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)

## 기능

### Home 화면

- 날씨 api로 부터 날씨 데이터를 받아 현재 주의 (월~일)까지의 서울 날씨를 볼 수 있습니다.
- 현재 날짜를 스크롤의 왼쪽 시작 부분에 위치하도록 설정합니다. (단, 토요일, 일요일과 같은 요일은 `최대한` 왼쪽 시작부분으로 설정합니다. )
- 날씨를 `이미지`로 표현하였습니다.
- 페이지를 `새로고침` 하면 새롭게 날씨 정보를 받아온 후, 받아올 동안 사용자에게 `로딩중...`을 알립니다.

- 추가 버튼을 누를시 Edit 페이지로 이동합니다
- 투두 항목을 누를시 Edit 페이지로 이동하면서 각 항목에 `내용`이 채워집니다.
- 완료된 투두는 `strike` 스타일이 적용됩니다.
- 완료되지 않은 투두 중 `dueDate`가 오늘 또는 그이전이면 폰트 컬러가 `빨간색`으로 표시됩니다.
- 투두 항목은 변경될때마다 `localStorage`에 저장하여 그 정보를 유지합니다.

### Edit 화면

- 제목, 내용, dueDate(선택)을 입력할 수 있습니다.
- dueDate의 형식은 `YYYY-MM-DD` 입니다.
- 만약 제목이나 내용이 비어있거나, 잘못된 형식의 dueDate는 `에러메세지`가 input밑에 표시됩니다.

## :hammer: Installation

```javascript
yarn install
```

## :bell: Usage

```javascript
yarn start
```

`http://localhost:3000/home` 으로 접속합니다.  
`모바일 해상도(iPhone 12 Pro)`에 최적화 되어 있습니다.

## :mag_right: Directory Structure

```
.
├── README.md
├── package.json
├── src
│   ├── App.tsx
│   ├── api
│   │   └── index.ts
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.tsx
│   │   ├── Input
│   │   │   ├── Input.test.tsx
│   │   │   └── Input.tsx
│   │   ├── List
│   │   │   ├── List.test.tsx
│   │   │   └── List.tsx
│   │   ├── Slider
│   │   │   ├── Slider.test.tsx
│   │   │   └── Slider.tsx
│   │   ├── TextArea
│   │   │   ├── TextArea.test.tsx
│   │   │   └── TextArea.tsx
│   │   ├── ToDoItem
│   │   │   ├── ToDoItem.test.tsx
│   │   │   └── ToDoItem.tsx
│   │   └── Top
│   │       ├── Top.test.tsx
│   │       ├── Top01.tsx
│   │       └── Top02.tsx
│   ├── constants
│   │   ├── colors.ts
│   │   └── style.ts
│   ├── hooks
│   │   ├── useFetch.tsx
│   │   ├── useForm.tsx
│   │   ├── useQuery.tsx
│   │   └── useRouter.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── Edit
│   │   │   ├── Edit.test.tsx
│   │   │   └── Edit.tsx
│   │   ├── Home
│   │   │   ├── Home.test.tsx
│   │   │   └── Home.tsx
│   │   └── Routes.tsx
│   ├── types.d.ts
│   └── utils
│       ├── formValidate.ts
│       ├── localStorageUtils.ts
│       └── weatherUtil.ts
├── tsconfig.json
└── yarn.lock
```

### 1 `api`

사용되는 api를 정의 하였습니다.  
`https://openweathermap.org/api` Weather API 중 One Call API 3.0를 사용하였습니다.

### 2 `components`

재사용성이 있거나 독립적인 기능을 가진 구성요소를 정의하였습니다.  
각 컴포넌트의 테스트 코드도 함께 디렉토리에 정의하였습니다.

### 3 `pages`

라우팅이 되는 최상위 컴포넌트를 정의하였습니다. (`Home`, `Edit`)
각 페이지의 요구사항이 담긴 테스트 코드도 함께 디렉토리에 정의하였습니다.

### 4 `utils`

사용되는 유틸 함수를 정의하였습니다.
`formValidate` 는 투두 폼에 대한 validation을 정의하였습니다.
`localStorageUtils`는 로컬 스토리지에 대한 유틸 함수를 정의하였습니다.
`weatherUtils` api response로 부터 데이터를 가공하기 위한 함수를 정의하였습니다.

### 5 `hooks`

커스텀 훅을 정의하였습니다. (`useRouter`, `useForm`, `useQuery`, `useFetch`)

## :penguin: Preview

#### 1-1. Home 페이지

![image](https://user-images.githubusercontent.com/31986076/184540912-c70599b7-7b6b-483f-8486-f03e35f4d952.png)

#### 1-2. Home 페이지 - 이번주 날씨 스크롤링

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/31986076/184541096-54ffce6d-567d-4d13-83c9-0469ec3b57b7.gif)

#### 1-2. Home 페이지 - 투두 체크박스 버튼을 눌렀을 경우

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/31986076/184541270-c928bf73-6ebb-450e-823c-c924af28cfb9.gif)

#### 1-2. Home 페이지 - 투두 X 버튼을 눌렀을 경우

![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/31986076/184541407-81a44aae-ace4-4142-ac91-616c8b0775b6.gif)

#### 1-2. Home 페이지 - 추가하기 버튼을 눌렀을 경우

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/31986076/184541271-d4c4b69e-8a59-4dc2-9829-1273c3c98c0e.gif)

#### 1-2. Home 페이지 - 투두 항목을 클릭했을 경우

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/31986076/184541272-1588cb78-2648-45e7-9ef1-f4433c0cbd94.gif)

#### 2-1. Edit 페이지

![image](https://user-images.githubusercontent.com/31986076/184541419-3ce696c5-c5e3-451c-b06a-8eeddaf1250c.png)

#### 2-2. Edit 페이지 - 올바른 입력값을 입력 후 저장 버튼을 누를 시

![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/31986076/184541529-218c686e-1c9d-4c46-b004-e64eedc20974.gif)

#### 2-1. Edit 페이지 - 잘못된 입력값을 입력 후 저장 버튼을 누를 시

![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/31986076/184541530-309e8acd-3771-4aab-836e-7b73df1df768.gif)

## :mag: Technical Skills

- 메인 라이브러리: React (Create-React-App)
- 메인 언어 및 문법: Typescript, Javascript ES6+
- 기타: git, emotion, axios, moment
