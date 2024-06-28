// 코딩에 진심인 사람을 위해 준비한 리액트 타입스크립트 | 실제 회사에서 쓰는 레벨 ver
// 유튜브 참고 URL - 
// https://youtu.be/V9XLst8UEtk?si=StbD9hnWGIBgCPY4

// TypeScript 적용한 React 프로젝트 만들 때, 터미널에서 사용하는 명령어 "npx create-react-app my-app --template typescript"
// 참고 URL - https://create-react-app.dev/docs/getting-started

import React,{useState} from 'react';  // 함수 useState는 패키지 'react'에서 온 함수('react'에서 제공 해주는 함수)임을 의미 
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {Address, Restaurant} from './model/restaurant';
import BestMenu from './BestMenu';
import BestMenu2 from './BestMenu';

let data:Restaurant = {
  name:'누나네 식당',
  category:'western',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:23425634
  },
  menu:[{name:"rose pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price:3000, category:"STEAK"}]
}

// function App() {
const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data) // 함수 useState 호출해서 실행할 때, 제네릭 문법(<>) 사용해서 타입을 Restaurant으로 정해줌.

  // 함수 changeAddress 정의 
  // 입력 매개변수 address(타입 - Address)
  // return (타입 - 없음)
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address})
  }

  // 함수 changeAddress2 정의 
  // 입력 매개변수 address(타입 - Address)
  // return (타입 - boolean)
  const changeAddress2 = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address})
    return true;
  }

  const showBestMenuName = (name:string) => {
    return name
  }
  
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} changeAddress2={changeAddress2} />
      {/* 아래는 price={1000}가 포함된 <BestMenu> 태그 구현 */}
      {/* <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName} /> */}
      {/* 아래는 price={1000}가 제외된 <BestMenu2> 태그 구현 */}
      <BestMenu2 name="불고기피자" category="피자" showBestMenuName={showBestMenuName} /> 
    </div>
  );
}

export default App;
