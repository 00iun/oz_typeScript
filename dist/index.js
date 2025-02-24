"use strict";
// console.log("Hello TypeScript")
Object.defineProperty(exports, "__esModule", { value: true });
// const nums: number[] = []
// const a = 10 + nums[0]
// const someString = 'typescript!';
// someString.endsWith('!')
const util_1 = require("./util");
(0, util_1.printName)('typescirpt');
// 기본 타입 (string, number, boolean, null, any) 실습 코드 작성
const oz_string = "안녕하세요";
const oz_number = 8;
const oz_boolean = true;
const oz_null = null;
const oz_any = 8 + "기 화이팅~";
(0, util_1.printName)(`${oz_string}. ${oz_number}기 이희정입니다.`);
(0, util_1.printName)(`현재 수료상태는 ${oz_boolean}입니다.`);
(0, util_1.printName)(`TypeScript를 학습 중이며, 제 뇌는 ${oz_null}값 입니다.`);
(0, util_1.printName)(`${oz_any}.`);
