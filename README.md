# 🐕 랜덤 치와와 생성기

귀여운 치와와들을 랜덤으로 만나볼 수 있는 Next.js 웹 애플리케이션입니다.

## ✨ 기능

- 🎲 랜덤 치와와 이미지 생성
- 🖱️ 클릭 한 번으로 새로운 치와와 만나기
- 📱 반응형 디자인

## 🚀 시작하기

### 필요 사항

- Node.js 18.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. 저장소를 클론합니다:

```bash
git clone https://github.com/dpstkdls/random-chihuahua.git
cd random-chihuahua
```

2. 의존성을 설치합니다:

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인합니다.

## 🛠️ 기술 스택

- **Frontend**: Next.js 15.5.6, React 19.1.0
- **API**: [Dog CEO API](https://dog.ceo/dog-api/)
- **Styling**: CSS Modules
- **Language**: JavaScript (ES6+)

## 📂 프로젝트 구조

```
random-chihuahua/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.js        # 앱 레이아웃
│   ├── page.js          # 메인 페이지
│   └── page.module.css  # 페이지별 스타일
├── lib/
│   └── dogApi.js        # API 호출 로직
├── public/              # 정적 파일
├── package.json
└── README.md
```

## 🔧 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드 생성
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint로 코드 검사

## 🌐 배포

이 프로젝트는 Vercel에서 쉽게 배포할 수 있습니다:

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소를 연결
3. 자동으로 배포됩니다

더 자세한 배포 방법은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참고하세요.

## 🤝 기여하기

프로젝트에 기여해 주셔서 감사합니다! 다음 단계를 따라 PR을 제출해 주세요:

### PR 제출 방법

1. **저장소 포크하기**

   ```bash
   # GitHub에서 이 저장소를 포크한 후
   git clone https://github.com/YOUR_USERNAME/random-chihuahua.git
   cd random-chihuahua
   ```

2. **새 브랜치 생성**

   ```bash
   git checkout -b feature/새로운-기능
   # 또는
   git checkout -b fix/버그-수정
   ```

3. **변경 사항 작업**

   - 코드를 수정하고 테스트합니다
   - 커밋 메시지는 명확하게 작성해 주세요

4. **커밋 및 푸시**

   ```bash
   git add .
   git commit -m "feat: 새로운 기능 추가"
   # 또는
   git commit -m "fix: 버그 수정"
   git push origin feature/새로운-기능
   ```

5. **PR 생성**
   - GitHub에서 원본 저장소로 Pull Request를 생성합니다
   - PR 제목과 설명을 명확하게 작성해 주세요

### 커밋 컨벤션

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 변경
- `style:` 코드 스타일 변경 (세미콜론, 포맷팅 등)
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가 또는 수정

### 이슈 신고

버그를 발견하거나 새로운 기능을 제안하고 싶으시다면 [Issues](https://github.com/dpstkdls/random-chihuahua/issues)에서 이슈를 생성해 주세요.

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 🙏 감사

- [Dog CEO API](https://dog.ceo/dog-api/) - 치와와 이미지 제공
- [Next.js](https://nextjs.org) - React 프레임워크
