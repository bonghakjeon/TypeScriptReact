// 코딩에 진심인 사람을 위해 준비한 리액트 타입스크립트 | 실제 회사에서 쓰는 레벨 ver
// 유튜브 참고 URL - 
// https://youtu.be/V9XLst8UEtk?si=StbD9hnWGIBgCPY4

// TypeScript 적용한 React 프로젝트 만들 때, 터미널에서 사용하는 명령어 "npx create-react-app my-app --template typescript"
// 참고 URL - https://create-react-app.dev/docs/getting-started

// let data = {
//   name:'누나네 식당',
//   category:'western',
//   address:{
//     city:'incheon',
//     detail:'somewhere',
//     zipCode:23425634
//   },
//   menu:[{name:"rose pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price:3000, category:"STEAK"}]
// }

// 사용자 정의 타입 Restaurant 정의
export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    // menu는 Menu Type안에 존재하는 객체 타입의 Array([]) 의미
    menu:Menu[]
}

// 사용자 정의 타입 Address 정의
export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

// 키워드 ? 적용한 사용자 정의 타입 Address2 정의
export type Address2 = {
    city:string;
    detail:string;
    zipCode?:Number;   // 키워드 ? 기능 - es6 버전부터 사용가능 하며 Omit<T>와 비슷한 기능이다. 해당 기능 사용시 export type Address2에 'zipCode'가 있을 수도 있고, 없을 수도 있다. ('zipCode' 사용할 수도 있고, 사용 안 할수도 있다.)
}

// 사용자 정의 타입 Menu 정의
export type Menu = {
    name:string;
    price:number;
    category:string;
}

// 키워드 Omit 의미 - export type에서 필요 없는 거 빼주세요. 기능 의미
// 아래는 Omit<T> 사용해서 export type Address에서 필요 없는 'zipCode'를 빼서 새로운 타입 AddressWithoutZip 정의
export type AddressWithoutZip = Omit<Address, 'zipCode'>

// 키워드 Pick 의미 - export type에서 필요한거 추가해주세요. 기능 의미
// 아래는 사용해서 export type Restaurant에서 필요한 것 ''을 추가해서 새로운 타입 RestaurantOnlyCategory 정의
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

