(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{757:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"스와이퍼-제작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스와이퍼-제작"}},[t._v("#")]),t._v(" 스와이퍼 제작")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://reactnative.directory/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Directory"),a("OutboundLink")],1),t._v("에는 다양한 RN 라이브러리들이 존재합니다.")]),t._v(" "),a("p",[t._v("스와이퍼 기능을 구현한 컴포넌트를 제작해둔 컴포넌트도 여럿 존재하며 이를 설치 후 설명에 맞게 가져다 사용하면 스와이퍼 기능을 사용할 수 있게됩니다. 이 중 "),a("code",[t._v("react-native-web-swiper")]),t._v(" 사용법을 정리합니다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("yarn add -D react-native-web-swiper")]),t._v(" 및 "),a("code",[t._v("Swiper")]),t._v(" 컴포넌트 임포트")]),t._v(" "),a("li",[a("code",[t._v("react-native-web-swiper")]),t._v("를 감싸는 "),a("code",[t._v("ScrollView")]),t._v(" Wrapper 컴포넌트 제작")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Swiper "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native-web-swiper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" styled "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'styled-components/native'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Container "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScrollView"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" View "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Lists")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Container"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Swiper\n                loop\n                timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                controlsEnabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                containerStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Swiper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Container"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[a("code",[t._v("Swiper")]),t._v(" 컴포넌트에는 "),a("code",[t._v("containerStyle")]),t._v("이 있습니다. 스와이퍼 컴포넌트에 대한 전체 너비 및 높이를 지정할 수 있습니다.")]),t._v(" "),a("p",[t._v("스와이퍼 컴포넌트를 라이브러리로 설치하면 각종 프롭스 설정을 통해 여러 기능을 사용할 수 있다는 점입니다. 스와이퍼 자동 넘김 및 무한루프 기능도 제공하고 있습니다.")]),t._v(" "),a("p",[a("code",[t._v("loop")]),t._v("를 불리언으로 설정하면 무한루프가 적용되고 "),a("code",[t._v("timeout")]),t._v("을 사용하면 몇 초가 지난 뒤 자동 넘김이 이루어질 지 타이밍을 설정할 수 있습니다.")]),t._v(" "),a("p",[a("code",[t._v("controlsEnabled")]),t._v("프롭스는 "),a("code",[t._v("react-native-web-swiper")]),t._v("에서 기본제공하는 컨트롤러를 활성화 할지 말지 선택할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Image 컴포넌트")]),t._v(" "),a("p",[t._v("RN에서 이미지 컴포넌트에 이미지 삽입을 위해서는 프롭스로 "),a("code",[t._v("source")]),t._v("를 부여하고 객체를 전달해야합니다. 웹의 "),a("code",[t._v("img")]),t._v(" 태그에서는 "),a("code",[t._v("src")]),t._v(" 속성만 부여하면 이미지가 나왔었지만 RN에서는 source 프로퍼티 객체의 "),a("code",[t._v("uri")]),t._v(" 프로퍼티에 URL을 삽입해야합니다.")]),t._v(" "),a("p",[t._v("uri는 웹 상에 있는 이미지를 불러올 때 사용하고 시스템 상의 상대경로에 위치한 이미지를 불러올 때에는 "),a("code",[t._v('require("이미지 경로..")')]),t._v("로 표기합니다.")])]),t._v(" "),a("h2",{attrs:{id:"refreshcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refreshcontrol"}},[t._v("#")]),t._v(" RefreshControl")]),t._v(" "),a("p",[a("code",[t._v("ScrollView")]),t._v("와 "),a("code",[t._v("FlatList")]),t._v(" 컴포넌트는 모두 "),a("code",[t._v("refreshControl")]),t._v("이라는 프롭스를 갖습니다. 해당 컴포넌트를 페이지의 루트 컴포넌트로 지정한 뒤 페이지를 위로 당길때 새로고침 효과를 갖게 됩니다.")]),t._v(" "),a("p",[a("code",[t._v("refreshControl")]),t._v("에는 리액트 네이티브에서 기본적으로 제공하는 "),a("code",[t._v("RefreshControl")]),t._v("컴포넌트를 전달합니다. "),a("code",[t._v("LoadingIndicator")]),t._v("와 동일하게 생긴 컴포넌트이며 페이지 최상단에서 페이지를 아래로 당길 때 나타나는 로딩 컴포넌트입니다.")]),t._v(" "),a("p",[a("code",[t._v("RefreshControl")]),t._v(" 컴포넌트에는 "),a("code",[t._v("refreshing")]),t._v("과 "),a("code",[t._v("onRefresh")]),t._v(" 프롭스를 전달해야 합니다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("refreshing")]),t._v(" : 로딩 여부를 나타낼 불리언 값을 전달합니다. 데이터 fetch 여부에 따라 상태값으로 관리하는 변수를 전달합니다.")]),t._v(" "),a("li",[a("code",[t._v("onRefresh")]),t._v(" : 새로고침 될 때에 실행될 함수를 전달합니다. 데이터 fetch 로직을 이 함수에 구현하여 전달합니다.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("refreshControl 초기 상태")]),t._v(" "),a("p",[a("code",[t._v("RefreshControl")]),t._v(" 컴포넌트 프롭스의 "),a("code",[t._v("refreshing")]),t._v("값을 초기에 "),a("code",[t._v("true")]),t._v("로 주게 되면 페이지 상단에 로딩 인디케이터가 계속해서 돌고 있게 됩니다. 따라서 초기 상태로는 "),a("code",[t._v("false")]),t._v("를 전달하고, "),a("code",[t._v("onRefresh")]),t._v("에 따라 "),a("code",[t._v("true")]),t._v("로 바꿨다가 데이터 fetch가 모두 마무리 되면 그때 다시 "),a("code",[t._v("false")]),t._v("로 바꿔야 로딩 컴포넌트가 숨겨지게 됩니다.")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FlatList onRefresh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("onRefresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" refreshing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("refreshing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ScrollView refreshControl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RefreshControl onRefresh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("onRefresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" refreshing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("refreshing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("플랫리스트 컴포넌트는 "),a("code",[t._v("RefreshControl")]),t._v(" 컴포넌트를 전달할 필요가 없습니다.")]),t._v(" "),a("h2",{attrs:{id:"flatlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flatlist"}},[t._v("#")]),t._v(" FlatList")]),t._v(" "),a("p",[t._v("스크롤뷰 컴포넌트와 플랫리스트 컴포넌트는 기본적으로 여러 컴포넌트에 대해 스크롤 뷰를 제공한다는 점에서 동일합니다. 두 컴포넌트의 주요 차이점은 "),a("strong",[t._v("성능에서 발생합니다.")])]),t._v(" "),a("p",[t._v("플랫리스트 컴포넌트는 "),a("code",[t._v("lazy rendering")]),t._v("이라는 기능을 기본적으로 갖습니다. 스크롤뷰 컴포넌트의 경우 데이터에 대한 정제를 따로 하지 않으면 배열의 "),a("code",[t._v("map")]),t._v(" 메서드로 전달된 모든 데이터를 한 번에 렌더링 하게 된다는 문제점이 있습니다.")]),t._v(" "),a("p",[t._v("많은 양의 데이터를 부분적으로 보여주기 위해서는 스크롤뷰 컴포넌트가 아닌 플랫리스트 컴포넌트를 사용해야 합니다.")]),t._v(" "),a("p",[t._v("플랫리스트는 스크롤뷰와 거의 동일한 프롭스들을 제공합니다. (리프레시 등)")]),t._v(" "),a("p",[t._v("아래 코드는 플랫리스트 컴포넌트 예시입니다.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FlatList\n    horizontal\n    showsHorizontalScrollIndicator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("trending"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    keyExtractor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    renderItem"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VMedia\n            poster_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poster_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            original_title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("original_title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            vote_average"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vote_average"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ItemSeparatorComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("View style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    contentContainerStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("paddingLeft")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("ol",[a("li",[a("code",[t._v("horizontal")]),t._v(" : 스크롤을 수평으로 사용합니다.")]),t._v(" "),a("li",[a("code",[t._v("showsHorizontalScrollIndicator")]),t._v(" : 스크롤을 보여줍니다. false설정 시 스크롤을 숨깁니다.")]),t._v(" "),a("li",[a("code",[t._v("data")]),t._v(" : 렌더링에 필요한 데이터를 지정합니다. 스크롤뷰에서의 "),a("code",[t._v("map")]),t._v(" 메서드에 사용되는 배열데이터와 동일하게 활용되는 데이터입니다. "),a("strong",[t._v("(required)")])]),t._v(" "),a("li",[a("code",[t._v("renderItem")]),t._v(" : "),a("code",[t._v("data")]),t._v("각 요소를 어떻게 표현할 지에 대해 함수 컴포넌트로 작성합니다. "),a("code",[t._v("renderItem")]),t._v(" 프롭스는 객체를 파라미터로 받고 그 중 "),a("code",[t._v("item")]),t._v(" 프로퍼티가 있는데, 해당 값이 "),a("code",[t._v("data")]),t._v(" 프롭스에 전달되었던 배열 데이터 각 원소를 의미합니다.")]),t._v(" "),a("li",[a("code",[t._v("ItemSeparatorComponent")]),t._v(" : Sep"),a("strong",[t._v("e")]),t._v("rator가 아닌 Sep"),a("strong",[t._v("a")]),t._v("rator입니다. "),a("code",[t._v("renderItem")]),t._v("으로 표현되는 각각의 컴포넌트 사이사이에 컴포넌트를 하나 집어넣습니다. 해당 프롭스는 함수를 받으며 리턴값으로 컴포넌트를 전달하면 됩니다.")]),t._v(" "),a("li",[a("code",[t._v("keyExtractor")]),t._v(" : 이 프롭스는 함수를 받습니다. "),a("code",[t._v("renderItem")]),t._v("과 같이 순회하는 아이템 각각의 컴포넌트에 대해 아이디값을 지정해줍니다.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ScrollView 안의 FlatList")]),t._v(" "),a("p",[t._v("플랫리스트 컴포넌트를 스크롤뷰 컴포넌트 안에 집어넣을때 "),a("strong",[t._v("동일하게 수직 방향을 바라보도록 하면 에러가 발생합니다.")])]),t._v(" "),a("blockquote",[a("p",[t._v("VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.")])]),t._v(" "),a("p",[t._v("또한 플랫리스트 컴포넌트는 자식 컴포넌트를 가질 수 없으므로 최상단 스크롤뷰 컴포넌트를 플랫리스트로 대체할 수도 없습니다.")]),t._v(" "),a("p",[t._v("이를 위한 플랫리스트 프롭스로 "),a("code",[t._v("ListHeaderComponent")]),t._v("가 있습니다. 동일한 역할로 "),a("code",[t._v("ListFooterComponent")]),t._v("도 존재합니다.")]),t._v(" "),a("p",[t._v("화면 중앙에 데이터들을 표현할 플랫리스트 컴포넌트를 두고, 플랫리스트 기준 화면 위쪽에 다른 컴포넌트들을 모두 모으기 위한 것으로 "),a("code",[t._v("ListHeaderComponent")]),t._v(" 프롭스가 사용되는 것이고 반대의 개념으로 "),a("code",[t._v("ListFooterComponent")]),t._v("가 사용됩니다.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FlatList\n    onRefresh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("onRefresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    refreshing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("refreshing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ListHeaderComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HeaderComponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("HeaderComponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"react-query로-리액트-네이티브-앱-새로고침-구현하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-query로-리액트-네이티브-앱-새로고침-구현하기"}},[t._v("#")]),t._v(" React Query로 리액트 네이티브 앱 새로고침 구현하기")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://react-query-v3.tanstack.com/reference/useQuery",target:"_blank",rel:"noopener noreferrer"}},[t._v("다음의 문서"),a("OutboundLink")],1),t._v("를 보면 "),a("code",[t._v("useQuery")]),t._v(" 훅의 세 번째 파라미터 대한 데이터들을 확인할 수 있습니다.")]),t._v(" "),a("p",[t._v("새로고침의 주요 로직은 데이터들을 "),a("code",[t._v("refetch")]),t._v(" 해온다는 것입니다. 따라서 "),a("code",[t._v("useQuery")]),t._v(" 훅의 반환 객체 프로퍼티에 "),a("code",[t._v("refetch")]),t._v("를 설정하면 해당 API로의 "),a("code",[t._v("refetch")]),t._v("함수를 받을 수 있습니다.")]),t._v(" "),a("p",[t._v("또한 현재 "),a("code",[t._v("refetch")]),t._v("중인지 여부를 불리언 값으로 받을 수 있는 "),a("code",[t._v("isRefetching")]),t._v(" 프로퍼티도 존재합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isLoading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isRefetching "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("queryKey 활용하기")]),t._v(" "),a("p",[a("code",[t._v("useQuery")]),t._v(" 훅의 쿼리 키는 배열 또는 문자열 데이터를 사용할 수 있습니다. 이때 쿼리키를 배열 데이터로 선언하게 되면 내부 데이터에 대한 형식은 상관이 없습니다.")]),t._v(" "),a("p",[t._v("쿼리키는 특정 동작을 갖는 것이 아니라 단순히 캐싱 데이터 접근을 위한 열쇠 역할만 하기 때문입니다.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// An individual todo")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// queryKey === ['todo', 5]")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// An individual todo in a "preview" format')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("preview")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// queryKey === ['todo', 5, { preview: true }]")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// A list of todos that are "done"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'todos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'done'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// queryKey === ['todos', { type: 'done' }]")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("위와 같이 배열 내에 객체를 선언하더라도 이는 쿼리한 데이터 접근을 위한 열쇠 생김새롤 표현하는 것입니다.")])]),t._v(" "),a("p",[t._v("쿼리키는 카테고리화 할 수가 있습니다. 배열 데이터 선언 후 위의 코드에서처럼 첫 번째 인덱스에 동일한 원소 데이터를 삽입해두는 것입니다.")]),t._v(" "),a("p",[t._v("부분적으로 쿼리 키와 일치하는 모든 API fetcher 함수로 요청을 보낼 수 있는 함수가 바로 "),a("code",[t._v('queryClient.refetchQueries(["키값"])')]),t._v(" 입니다.")]),t._v(" "),a("p",[t._v("앱의 첫 시작에서 "),a("code",[t._v("QueryClientProvider")]),t._v("의 프롭스로 "),a("code",[t._v("provider")]),t._v("를 전달하였습니다. 이때 전달된 "),a("code",[t._v("queryClient")]),t._v(" 객체를 하위 컴포넌트에서 불러와 활용할 수 있게 되는겁니다.")]),t._v(" "),a("p",[a("code",[t._v("queryClient")]),t._v(" 객체의 함수로 "),a("code",[t._v("refetchQueries")]),t._v("가 있고, 이 함수의 파라미터로 전달된 키값을 부분적으로 갖는 모든 API에 요청을 보내는 것입니다.")]),t._v(" "),a("p",[a("code",[t._v("queryClient")]),t._v("를 프로바이더로부터 불러오기 위해서는 "),a("code",[t._v("useQueryClient")]),t._v(" 훅을 사용하면 됩니다.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" queryClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQueryClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onRefetch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        queryClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("refetchQueries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'movies'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);