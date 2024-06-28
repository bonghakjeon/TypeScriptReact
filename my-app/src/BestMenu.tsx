// 코딩에 진심인 사람을 위해 준비한 리액트 타입스크립트 | 실제 회사에서 쓰는 레벨 ver
// 유튜브 참고 URL - 
// https://youtu.be/V9XLst8UEtk?si=StbD9hnWGIBgCPY4

// TypeScript 적용한 React 프로젝트 만들 때, 터미널에서 사용하는 명령어 "npx create-react-app my-app --template typescript"
// 참고 URL - https://create-react-app.dev/docs/getting-started

import React from 'react'
import { Menu, Restaurant } from './model/restaurant'

// extends 기능 
// 부모 타입(혹은 클래스)을 상속 받을 때 사용한다.
// 구체적으로 말하자면 
// export type 형식 (예) Restaurant, Address, Menu
// 해당 type에 함수 같은 것을 추가하고 싶을 때 사용 

// TODO : 아래 interface - extends 사용 예 1과 type - & 사용 예는 서로 같은 기능을 실행함.(단지 표현 방식이 다를 뿐임.) (2024.06.28 jbh)

// interface - extends 사용 예 1 
interface OwnProps extends Menu {
    showBestMenuName(name:string):string   // 함수 showBestMenuName(입력 매개변수 name 타입 - string / return 타입 - string)
}

// 키워드 Omit 의미 - 필요 없는 거 빼주세요. 기능 의미
// 아래는 Omit<T> 사용해서 Menu 타입에서 필요 없는 'price'를 빼서 새로운 타입을 상속 받음
// interface - extends 사용 예 2
interface OwnProps2 extends Omit<Menu, 'price'> {
  showBestMenuName(name:string):string   // 함수 showBestMenuName(입력 매개변수 name 타입 - string / return 타입 - string)
}


// type - & 사용 예 
type OwnProps3 = Menu & {
    showBestMenuName(name:string):string
}


const BestMenu:React.FC<OwnProps> = ({name, price, category, showBestMenuName}) => {
    return (
      <div>{name}</div>
    )
}

const BestMenu2:React.FC<OwnProps2> = ({name, category, showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

// export default는 BestMenu, BestMenu2 둘 다 동시에 export 처리 못하고 오직 하나만 export 처리 가능함.
// export default BestMenu
export default BestMenu2

// Rest API 호출해서 웹서비스로 부터 넘겨 받는 데이터 타입 예시
// 제네릭<T> 문법 사용해서 구현 
// 제네릭<T> 문법은 웹서비스로 부터 어떤 데이터 타입이 들어올지 모르기 때문에 사용한다.
export type ApiResponse<T> = {
    data:T[],  // data에 제네릭<T> 문법 사용 이유 - 타입이 export type Menu, Restaurant, Address 등등이 될 수도 있기 때문에 사용함.
    totalPage:number,
    page:number,
}

// export type RestaurantResponse 만들 때, 위의 export type ApiResponse에 export type Restaurant를 넣어주면 된다.
export type RestaurantResponse = ApiResponse<Restaurant>
// export type MenuResponse 만들 때, 위의 export type ApiResponse에 export type Menu를 넣어주면 된다.
export type MenuResponse = ApiResponse<Menu>