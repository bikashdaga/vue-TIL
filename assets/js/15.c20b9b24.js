(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{563:function(s,t,a){s.exports=a.p+"assets/img/download.4eac9b4a.png"},564:function(s,t,a){s.exports=a.p+"assets/img/service.5a5ce01f.png"},565:function(s,t,a){s.exports=a.p+"assets/img/bar.91d431bb.jpg"},566:function(s,t,a){s.exports=a.p+"assets/img/pwa.6cb93371.gif"},805:function(s,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"pwa란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pwa란"}},[s._v("#")]),s._v(" PWA란?")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction",target:"_blank",rel:"noopener noreferrer"}},[s._v("프로그레시브 웹 앱"),n("OutboundLink")],1),s._v("(Progressive Web App, PWA)은 웹과 앱의 장점만을 섞어 놓은 웹 앱입니다. 웹의 접근성이라는 장점과 앱의 부드러움을 섞어놓았습니다. 네이티브 앱은 기본적으로 설치가 가능하므로 "),n("strong",[s._v("오프라인에서 동작한다")]),s._v("는 장점이 있고 "),n("strong",[s._v("모바일 환경에서의 접근성이 비약적으로 상승하게 됩니다.")]),s._v(" (홈 화면에서 아이콘 클릭을 통해 바로 접근)")]),s._v(" "),n("p",[s._v("PWA에 대한 자세한 내용은 "),n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction",target:"_blank",rel:"noopener noreferrer"}},[s._v("MDN"),n("OutboundLink")],1),s._v("문서를 참조해주세요.")]),s._v(" "),n("h2",{attrs:{id:"pwa-플러그인"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pwa-플러그인"}},[s._v("#")]),s._v(" PWA 플러그인")]),s._v(" "),n("p",[s._v("저희가 사용하는 Vuepress에서는 PWA구현을 도와주는 플러그인을 제공합니다. PWA 플러그인 설치 및 적용을 통해 얻을 수 있는 장점으로는")]),s._v(" "),n("ol",[n("li",[s._v("모바일 환경, 웹 환경 모두에서 설치가 가능해집니다. (오프라인 환경에서 실행이 가능해집니다.)")]),s._v(" "),n("li",[s._v("모바일 환경의 API를 통해 페이지를 더 우아하게 만들 수 있습니다.")])]),s._v(" "),n("p",[s._v("PWA 적용 시 주소창에 웹 앱으로 설치할 수 있는 아이콘이 추가됩니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(563),alt:""}})]),s._v(" "),n("p",[s._v("컨텐츠 업데이트 감지 시 팝업을 띄워주기도 합니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(564),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"pwa-설치-및-적용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pwa-설치-및-적용"}},[s._v("#")]),s._v(" PWA 설치 및 적용")]),s._v(" "),n("p",[s._v("PWA의 핵심은 "),n("strong",[s._v("서비스워커(service-worker) 매니페스트(Manifest)")]),s._v(" 입니다. 매니페스트는 인스톨 배너 및 앱 아이콘에 대한 설정을 담당하게 됩니다.")]),s._v(" "),n("p",[n("code",[s._v("manifest.json")]),s._v("파일에 적용할 설정들은 다음과 같습니다.")]),s._v(" "),n("ol",[n("li",[n("p",[n("code",[s._v("icons")]),s._v(" - 설치 시 보여질 앱 아이콘 이미지를 설정합니다.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("start_url")]),s._v(" - 앱 실행 시 처음 보여질 URL을 설정합니다.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("name")]),s._v(" - 설치 시 배너에 표시되는 이름입니다.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("short_name")]),s._v(" - 아이콘 이름으로 표시됩니다.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("display")]),s._v(" - 미리 정의된 "),n("code",[s._v("standalone")]),s._v(", "),n("code",[s._v("fullscreen")]),s._v(", "),n("code",[s._v("minimal-ui")]),s._v(", "),n("code",[s._v("browser")]),s._v(" 속성을 적용합니다. 앱 상에서 페이지가 어떻게 보여질지 설정합니다.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("background_color")]),s._v(" - 모바일 앱 아이콘의 배경색을 지정합니다.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("theme_color")]),s._v(" - 앱 환경의 시스템 바 (URL 입력창과 같이 각 환경에서 기본적으로 제공되는 UI, 사진의 상단 바 확인)")]),s._v(" "),n("p",[n("img",{attrs:{src:a(565),alt:""}})])])]),s._v(" "),n("p",[s._v("플러그인 설치 코드는 다음과 같습니다.")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D @vuepress/plugin-pwa\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("플러그인 설치 후 "),n("code",[s._v("config.js")]),s._v("에 등록합니다.")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ....")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vuepress/pwa"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("serviceWorker")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("updatePopup")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요😀"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("buttonText")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"새로고침"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("플러그인 속성으로 "),n("code",[s._v("serviceWorker")]),s._v("를 지정할 수 있는데, 서비스워커(serviceWorker)는 브라우저가 백그라운드에서 실행하는 스크립트로 웹페이지와 별개로 작동하여 사용자 상호작용이 필요하지 않은 기능에 대해 대신 수행하게 됩니다.")]),s._v(" "),n("p",[s._v("뷰프레스의 서비스워커는 깃헙에 새로 빌드 및 업데이트된 컨텐츠에 대해 팝업을 제공하여 컨텐츠가 새로 업로드 되었다는 것을 알려줍니다.")]),s._v(" "),n("p",[s._v("현재 제 사이트에 적용해놓은 "),n("code",[s._v("manifest.json")]),s._v(" 설정들은 다음과 같습니다.")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// manifest.json")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parkjju\'s TIL"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"short_name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Parkjju\'s TIL"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start_url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/vue-TIL/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"icons"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x48.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"48x48"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x72.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"72x72"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x96.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96x96"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x128.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"128x128"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x192.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192x192"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x384.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"384x384"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x512.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sizes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"512x512"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"theme_color"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#3eaf7c"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"background_color"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#ffffff"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"display"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"standalone"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])]),n("p",[n("code",[s._v("icons")]),s._v("에 다양한 사이즈 이미지가 필요한 이유는 다양한 모바일 환경에서 아이콘이 깨지지 않도록 하기 위해서 입니다.")]),s._v(" "),n("p",[n("strong",[s._v("추후 스플래시 이미지 설정법에 대한 내용을 추가하도록 하겠습니다.")])]),s._v(" "),n("p",[n("code",[s._v("manifest.json")]),s._v("설정이 끝났으면 "),n("code",[s._v("config.js")]),s._v("의 "),n("code",[s._v("head")]),s._v("영역에 메타데이터를 삽입합니다.")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("Vupress 메타데이터 핸들링")]),s._v(" "),n("p",[s._v("배포하는 뷰프레스 블로그 페이지 전체에 적용될 메타데이터를 설정하기 위해서는 "),n("code",[s._v("config.js")]),s._v("파일의 "),n("code",[s._v("head")]),s._v("영역을 수정하면 됩니다.  인덱스 페이지를 기준으로 상속받는 모든 페이지에 메타데이터가 포함되게 됩니다.")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("head")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shortcut icon"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./favicon.ico"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .... ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("위 코드를 "),n("code",[s._v("config.js")]),s._v("에 추가하면 전체 페이지에 해당 "),n("code",[s._v("link")]),s._v("태그가 삽입되게 됩니다.")])]),s._v(" "),n("p",[n("code",[s._v("config.js")]),s._v("에 등록해야할 설정으로는 다음과 같은 것들이 있습니다.")]),s._v(" "),n("ol",[n("li",[s._v("앱 아이콘 위치")]),s._v(" "),n("li",[n("code",[s._v("manifest.json")]),s._v("파일위치")]),s._v(" "),n("li",[s._v("그 외 설정들")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// config.js")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("head")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shortcut icon"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/favicon.ico"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"manifest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/manifest.json"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apple-touch-icon"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sizes")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192x192"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/maskable_icon_x192.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("Vuepress public 관리에 대해")]),s._v(" "),n("p",[s._v("뷰프레스 빌드 시에 주의해야할 점이 있습니다. 각종 애셋 파일들은 임의로 생성한 파일에 저장 후 적절한 상대경로 지정으로도 문제없이 접근이 가능합니다.")]),s._v(" "),n("p",[s._v("하지만 "),n("code",[s._v("html")]),s._v("의 메타데이터로 들어가는 파일들, 가령 "),n("code",[s._v("favicon.ico")]),s._v(", "),n("code",[s._v("robots.txt")]),s._v(", "),n("code",[s._v("manifest.json")]),s._v("등의 파일들은 빌드 결과물을 모아두는 "),n("code",[s._v("dist")]),s._v("폴더에 "),n("code",[s._v("html")]),s._v("파일로 변환되어 저장되기 때문에 경로 설정 시 이를 고려해야합니다.")]),s._v(" "),n("p",[s._v("위의 "),n("code",[s._v("config.js")]),s._v("파일에서 "),n("code",[s._v("manifest.json")]),s._v("파일의 경로가 "),n("code",[s._v("/manifest.json")]),s._v("으로 설정되어 있는 이유가 바로 위의 현상때문입니다. 빌드 이후의 "),n("code",[s._v("index.html")]),s._v(" 파일 기준으로 "),n("code",[s._v("manifest.json")]),s._v("이 같은 위치에 있기 때문에 위와 같이 경로 설정을 해야합니다.")]),s._v(" "),n("p",[n("code",[s._v("config.js")]),s._v("에 설정해놓은 "),n("code",[s._v("base")]),s._v("속성에 따라 "),n("code",[s._v("manifest.json")]),s._v(" 경로가 변경됩니다.")]),s._v(" "),n("p",[s._v("정리하자면 빌드 과정에서 특정 파일은 그대로 둔 상태로 빌드를 하고싶을때 "),n("code",[s._v("public")]),s._v("폴더에 넣어두고, "),n("strong",[s._v("경로 설정은 index.html")]),s._v(" 기준으로 하면 됩니다.")])]),s._v(" "),n("p",[s._v("PWA 적용 뒤 모바일 환경에서 실행하는 모습입니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(566),alt:""}})]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("아이콘 이미지는 jpg가 아닌 png를 이용해야 pwa 앱 설치가 가능해집니다.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);