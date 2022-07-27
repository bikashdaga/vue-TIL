(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{794:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"프로젝트-세팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-세팅"}},[s._v("#")]),s._v(" 프로젝트 세팅")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/typescript/why.html"}},[s._v("why Typescript?")]),s._v(" 문서에서 "),a("code",[s._v("ts-node")]),s._v(" 및 전역설치된 타입스크립트를 사용하는 방법에 대해 정리해두었습니다. 하지만 타입스크립트는 하나부터 열까지 직접 타입스크립트로 개발한다기 보다 이미 제공된 node.js 프로젝트를 가져다 쓰거나 라이브러리를 설치할 때에 활용하는 경우가 많습니다.")],1),s._v(" "),a("p",[s._v("따라서 타입스크립트 기반의 실질적인 프로젝트 세팅은 다음과 같은 방식으로 진행됩니다.")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("npm init -y")]),s._v("로 node.js 프로젝트 초기화를 시켜줍니다.")]),s._v(" "),a("li",[a("code",[s._v("package.json")]),s._v("의 "),a("code",[s._v("main")]),s._v("과 "),a("code",[s._v("script")]),s._v(" 프로퍼티를 우선 지웁니다.")]),s._v(" "),a("li",[a("code",[s._v("npm install -D typescript")]),s._v("로 devDependencies에 타입스크립트를 설치합니다.")]),s._v(" "),a("li",[a("code",[s._v("src")]),s._v(" 폴더를 생성하고 그 밑에 "),a("code",[s._v("index.ts")]),s._v("를 생성합니다.")]),s._v(" "),a("li",[a("code",[s._v("index.ts")]),s._v("파일을 컴파일하여 자바스크립트 파일을 받기 위해 "),a("code",[s._v("tsconfig.json")]),s._v(" 파일을 프로젝트 루트 위치에 생성합니다.")])]),s._v(" "),a("h2",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[s._v("#")]),s._v(" tsconfig.json")]),s._v(" "),a("p",[s._v("타입스크립트 설정파일에는 몇 가지 옵션들이 존재합니다. vscode상에서 "),a("code",[s._v("tsconfig.json")]),s._v("을 생성한 뒤 프로퍼티 제작을 하려고 하면 자동완성 기능을 제공하여 편리합니다.")]),s._v(" "),a("p",[s._v("다음은 tsconfig.json의 프로퍼티들에 대한 내용입니다.")]),s._v(" "),a("ol",[a("li",[a("code",[s._v('"include" : ["src"]')]),s._v(" - include 프로퍼티는 타입스크립트 컴파일 시 배열에 전달된 디렉터리 내부의 모든 파일을 확인한다는 의미입니다.")]),s._v(" "),a("li",[a("code",[s._v('"compilerOptions": {"outDir": "build"}')]),s._v(" - "),a("code",[s._v("compilerOptions")]),s._v("의 "),a("code",[s._v("outDir")]),s._v("은 타입스크립트 컴파일 결과로 생성된 자바스크립트 파일을 모아둘 폴더를 지정합니다. 루트 위치에 "),a("code",[s._v("build")]),s._v("라는 폴더가 생성되며 빌드 결과물이 만들어집니다.")]),s._v(" "),a("li",[a("code",[s._v('"compilerOptions": {"outDir":"build", "target": "ES3"}')]),s._v(" - "),a("code",[s._v("compilerOptions")]),s._v("의 "),a("code",[s._v("target")]),s._v("은 빌드될 자바스크립트의 버전을 지정합니다. (ES3, ES...) 예를 들어 ES3에는 const없이 var만 존재하지만 ES6로 빌드하면 const도 지원하게 되어 빌드가 되어도 const로 선언된 코드가 작성됩니다.")]),s._v(" "),a("li",[a("code",[s._v('compilerOptions": {"lib": ["ES6", "DOM"]}')]),s._v(" - "),a("code",[s._v("compilerOptions")]),s._v("의 "),a("code",[s._v("lib")]),s._v("은 자바스크립트의 어떤 버전이 어떠한 환경 위에서 실행되는지 선언합니다. 이때 환경에 대한 명시를 해두면 "),a("strong",[s._v("타입스크립트 코딩을 진행할 때에 해당 환경에 맞게끔 객체에 대한 인식이 자동으로 이루어집니다.")]),s._v(" 현재의 예시로 "),a("code",[s._v("DOM")]),s._v("이라는 환경이 지정되어 있는데 이는 웹 환경에서 실행된다는 의미이며 타입스크립트 파일에서 "),a("code",[s._v("document")]),s._v(" 객체를 인식하게 됩니다.")]),s._v(" "),a("li",[a("code",[s._v('"compilerOptions" : {"strict": true}')]),s._v(" - "),a("code",[s._v("compilerOptions")]),s._v("의 "),a("code",[s._v("strict")]),s._v("는 true로 지정하면 타입스크립트 파일 내에서 위험한 자바스크립트 코드를 작성하는 것에 대해 허용하지 않습니다.")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("선언파일.d.ts")]),s._v(" "),a("p",[s._v("lib 프로퍼티에 DOM을 명시하면 웹 환경에서 실행된다는 것을 타입스크립트에서 인지하게 된다고 했는데, 이런 일들이 벌어질 수 있었던 것이 바로 "),a("strong",[s._v("타입스크립트 선언파일 때문입니다.")]),s._v(" "),a("code",[s._v("fileName.d.ts")]),s._v("라는 특별한 확장자를 갖습니다.")]),s._v(" "),a("p",[s._v("타입스크립트 선언파일에서는 자바스크립트에서 쓰일 API들에 대한 타입 명시가 이루어집니다.")]),s._v(" "),a("p",[a("code",[s._v("package.js")]),s._v("라는 "),a("code",[s._v("node_modules")]),s._v(" 패키지가 있다고 가정합니다. 여기서 함수를 import해온 뒤 타입스크립트에서 사용한다고 가정할 때에 "),a("code",[s._v("strict")]),s._v(" 모드가 지정되어 있으면 package.js에서 가져온 함수에 대한 타입을 지정한 뒤에야 사용할 수 있게 됩니다.")]),s._v(" "),a("p",[a("code",[s._v("package.d.ts")]),s._v("라는 이름으로 해당 함수의 타입을 설명합니다.")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.d.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.js파일의 함수에 대한 콜 시그니쳐")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 또는 각종 변수들에 대한 타입만 선언하면 된다.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 구현부는 작성 X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("urls")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndeclare module "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"package"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("p",[s._v("타입스크립트 빌드를 위해 "),a("code",[s._v("scripts")]),s._v(" 명령어를 정의합니다.")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("code",[s._v("npm run build")]),s._v("를 실행하면 타입스크립트 파일의 빌드가 진행됩니다.")]),s._v(" "),a("h2",{attrs:{id:"jsdoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsdoc"}},[s._v("#")]),s._v(" JSDoc")]),s._v(" "),a("p",[s._v("자바스크립트 기반 프로젝트에서 타입스크립트로 이전할 때에는 어떤 경우가 발생할까요? 선언파일의 경우 자바스크립트 라이브러리에 대해 "),a("code",[s._v("declare module")]),s._v("을 통한 함수 콜 시그니쳐 정의나 타입에 대한 정의가 이루어졌었습니다.")]),s._v(" "),a("p",[s._v("외부 자바스크립트 모듈에 대한 타입 정의 시나리오였는데, 이번에는 "),a("strong",[s._v("현재 관리중인 자바스크립트 파일을 타입스크립트 내에서 사용해야하는 상황입니다.")])]),s._v(" "),a("p",[s._v("먼저 위와 같은 상황을 연출하기 위해서는 tsconfig.json에 "),a("code",[s._v('"allowJs":true')]),s._v(" 프로퍼티를 추가해야합니다.")]),s._v(" "),a("p",[s._v("타입스크립트는 프로젝트 내에서 자바스크립트 파일들을 완전히 쳐내는 것이 아니라 "),a("code",[s._v("allowJs")]),s._v(" 프로퍼티가 설정되어 있다면 부분적으로 타입화를 적용할 수 있습니다.")]),s._v(" "),a("p",[s._v("타입스크립트 프로젝트에서는 자바스크립트도 보호해주는데, 주석에 "),a("code",[s._v("@ts-check")]),s._v("라는 내용이 첫 라인에 추가한 뒤 JSDoc 문법을 사용하면 자바스크립트에서도 타입에 대한 체크가 가능합니다.")]),s._v(" "),a("p",[s._v("JSDoc은 타입체크를 진행할 함수 바로 위에 작성합니다.")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @ts-check")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Initializes the project\n * @param {object} config\n * @param {boolean} config.debug\n * @param {string} config.url\n * @returns void\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error!")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("타입스크립트는 위의 코멘트를 읽고 "),a("strong",[s._v("자바스크립트 파일에서 타입체크를 진행합니다.")]),s._v(" "),a("code",[s._v("@returns {void}")]),s._v("가 init함수의 리턴타입과 맞지 않기 때문에 코드 작성 단계에서 타입스크립트가 에러를 발생시킵니다.")]),s._v(" "),a("p",[s._v("또한 JSDoc으로 타입핑이 이루어진 자바스크립트를 모듈로써 다른 타입스크립트에서 불러오면 "),a("strong",[s._v("해당 함수에 대한 타입이 이미 인지가 되어 콜 시그니쳐를 띄워준다던가의 기능을 제공하게 됩니다.")])])])}),[],!1,null,null,null);t.default=e.exports}}]);