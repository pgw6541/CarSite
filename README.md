# **Semo Car**

> 프로젝트 : 자동차 정보제공 웹사이트 포트폴리오
>
> 프로젝트 분류 : 토이 프로젝트
>
> 팀규모 : 프론트엔드(1), UXUI디자이너(1)
>
> 제작기간 : 23.05.08 ~ 현재 진행 중

> 국내 신차 정보를 제공하는 웹사이트입니다. 프로덕트 디자이너와 2인 토이프로젝트를 진행했습니다.  
> 퍼블리싱, 자동차 데이터 연결 등 프론트엔드 구현에 기여하였습니다.

> vercel 배포  
> <https://semocar.vercel.app>

<br />
<br />
<br />

## **기술**

### - **React.js**

> React를 학습하며 진행된 프로젝트로 러닝커브를 그리며 진행되었습니다.

> useState를 사용하여 차량 카테고리 옵션을 선택하면 페이지 이동없이 HTML이 재랜더링 되는 점을 이용하여 자동차 정보을 제공하는 웹사이트를 React.js로 구현했습니다.

### - **Typescript**

> 안정적인 개발과 코드 품질을 높이기 위해 사용하였습니다.  
> 실제로 프로젝트 개발과정에서 데이터를 불러왔을 때 다르게 작성된 데이터를 쉽게 찾아 낼 수 있었습니다.

### - **Redux**

> 차량 카테고리 페이지와 디테일 페이지에서 선택된 차량 state를 전역관리하는 용도로 사용했습니다.

### - **Styled components**

> MUI라는 React UI tools를 보다 유연하게 다루고 관리하기 위해 사용하였습니다.
> 다만, 태그를 전부 컴포넌트화 한 점과, className를 적절하게 사용하지 못해 파일을 분리해서 관리한 점에서 아쉬움이 있습니다. 추후에 tailwindCSS 학습을 위해 마이그레이션을 생각하고있습니다.

### - **swiper**

> Swiper는 반응형 캐러셀 UI를 쉽게 구현하는 JavaScript 라이브러리입니다.
> 프로젝트에 메인페이지(banner, 최신출시모델), 디테일페이지(포토)에 사용했습니다.
>
> 모바일과 데스크탑 호환성이 좋으며 옵션이 풍부하게 제공되어있어 커스터마이징에도 용이합니다.

### - **axios**

> fetch 보다 HTTP 요청이 편리하다는 이점이있어 사용했습니다.

<br />
<br />

## **협업**

[Figma 바로가기](https://www.figma.com/file/cU9wY1NIxTCAtWET80BYvB/%EC%95%BC%EC%98%B9?type=design&mode=dev)

> 프로덕트 디자이너와 간단한 토이 프로젝트를 진행했습니다.  
> 적응형 웹사이트를 목표로 디자인을 기획했습니다.
