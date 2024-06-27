// 코딩에 진심인 사람을 위해 준비한 리액트 타입스크립트 | 실제 회사에서 쓰는 레벨 ver
// 유튜브 참고 URL - 
// https://youtu.be/V9XLst8UEtk?si=StbD9hnWGIBgCPY4

// TypeScript 적용한 React 프로젝트 만들 때, 터미널에서 사용하는 명령어 "npx create-react-app my-app --template typescript"
// 참고 URL - https://create-react-app.dev/docs/getting-started

import React from 'react'
import { Menu } from './model/restaurant'

// extends 기능 
// 부모 타입(혹은 클래스)을 상속 받을 때 사용한다.
// 구체적으로 말하자면 
// export type 형식 (예) Restaurant, Address, Menu
// 해당 type에 함수 같은 것을 추가하고 싶을 때 사용 

// extends 사용 예 1
interface OwnProps extends Menu {
    showBestMenuName(name:string):string   // 함수 showBestMenuName(입력 매개변수 name 타입 - string / return 타입 - string)
}

// extends 사용 예 2
type extends


const BestMenu:React.FC<OwnProps> = ({name, price, category, showBestMenuName}) => {
    return (
      <div>{name}</div>
    )
}

export default BestMenu