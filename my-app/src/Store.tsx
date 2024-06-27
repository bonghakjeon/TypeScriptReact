// 코딩에 진심인 사람을 위해 준비한 리액트 타입스크립트 | 실제 회사에서 쓰는 레벨 ver
// 유튜브 참고 URL - 
// https://youtu.be/V9XLst8UEtk?si=StbD9hnWGIBgCPY4

// TypeScript 적용한 React 프로젝트 만들 때, 터미널에서 사용하는 명령어 "npx create-react-app my-app --template typescript"
// 참고 URL - https://create-react-app.dev/docs/getting-started

import React from "react"
import { Address, Restaurant } from "./model/restaurant"

// Store에서만 쓰는 OwnProps 타입을 interface 형식으로 구현 
interface OwnProps {
    info:Restaurant,                          // info 객체(타입 - Restaurant)
    changeAddress(address:Address):void,      // 함수 changeAddress(입력 매개변수 address 타입 - Address / return 타입 - void)
    changeAddress2(address:Address):boolean   // 함수 changeAddress2(입력 매개변수 address 타입 - Address / return 타입 - boolean)
}

// React.FC(React Function Component)에 들어오는 타입은 OwnProps로 지정
// 입력 매개변수는 info(타입 - Restaurant)로 받음
const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <div>{info.name}</div>
    )
}

export default Store