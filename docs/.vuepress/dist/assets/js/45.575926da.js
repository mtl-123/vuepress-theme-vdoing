(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{370:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git工具-交互式暂存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git工具-交互式暂存"}},[s._v("#")]),s._v(" Git工具-交互式暂存")]),s._v(" "),t("p",[s._v("本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 "),t("code",[s._v("git add")]),s._v(" 时使用 "),t("code",[s._v("-i")]),s._v(" 或者 "),t("code",[s._v("--interactive")]),s._v(" 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":    unchanged        +1/-1 index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\n\n*** Commands ***\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("tatus     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("pdate      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("evert     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("dd untracked\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("atch      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("iff        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("uit       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("elp\nWhat now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("可以看到这个命令以和平时非常不同的视图显示了暂存区——基本上与 "),t("code",[s._v("git status")]),s._v(" 是相同的信息，但是更简明扼要一些。 它将暂存的修改列在左侧，未暂存的修改列在右侧。")]),s._v(" "),t("p",[s._v("在这块区域后是“Commands”命令区域。 在这里你可以做一些工作，包括暂存文件、取消暂存文件、暂存文件的一部分、添加未被追踪的文件、显示暂存内容的区别。")]),s._v(" "),t("h2",{attrs:{id:"暂存与取消暂存文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂存与取消暂存文件"}},[s._v("#")]),s._v(" 暂存与取消暂存文件")]),s._v(" "),t("p",[s._v("如果在 "),t("code",[s._v("What now>")]),s._v(" 提示符后键入 "),t("code",[s._v("u")]),s._v(" 或 "),t("code",[s._v("2")]),s._v("（更新），它会问你想要暂存哪个文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("What now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" u\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":    unchanged        +1/-1 index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nUpdate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("要暂存 "),t("code",[s._v("TODO")]),s._v(" 和 "),t("code",[s._v("index.html")]),s._v(" 文件，可以输入数字：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Update"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v("\n           staged     unstaged path\n* "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n* "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":    unchanged        +1/-1 index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nUpdate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("每个文件前面的 "),t("code",[s._v("*")]),s._v(" 意味着选中的文件将会被暂存。 如果在 "),t("code",[s._v("Update>>")]),s._v(" 提示符后不输入任何东西并直接按回车，Git 将会暂存之前选择的文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Update"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\nupdated "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" paths\n\n*** Commands ***\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("tatus     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("pdate      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("evert     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("dd untracked\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("atch      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("iff        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("uit       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("elp\nWhat now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" s\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +0/-1      nothing TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("现在可以看到 "),t("code",[s._v("TODO")]),s._v(" 与 "),t("code",[s._v("index.html")]),s._v(" 文件已经被暂存而 "),t("code",[s._v("simplegit.rb")]),s._v(" 文件还未被暂存。 如果这时想要取消暂存 TODO 文件，使用 "),t("code",[s._v("r")]),s._v(" 或 "),t("code",[s._v("3")]),s._v("（撤消）选项：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("*** Commands ***\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("tatus     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("pdate      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("evert     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("dd untracked\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("atch      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("iff        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("uit       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("elp\nWhat now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" r\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +0/-1      nothing TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nRevert"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           staged     unstaged path\n* "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +0/-1      nothing TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nRevert"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("enter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nreverted one path\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("再次查看 Git 状态，可以看到已经取消暂存 "),t("code",[s._v("TODO")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("*** Commands ***\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("tatus     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("pdate      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("evert     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("dd untracked\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("atch      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("iff        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("uit       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("elp\nWhat now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" s\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("如果想要查看已暂存内容的区别，可以使用 "),t("code",[s._v("d")]),s._v(" 或 "),t("code",[s._v("6")]),s._v("（区别）命令。 它会显示暂存文件的一个列表，可以从中选择想要查看的暂存区别。 这跟你在命令行指定 "),t("code",[s._v("git diff --cached")]),s._v(" 非常相似：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("*** Commands ***\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("tatus     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("pdate      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("evert     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("dd untracked\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("atch      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("iff        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("uit       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("elp\nWhat now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" d\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +1/-1      nothing index.html\nReview diff"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--git")]),s._v(" a/index.html b/index.html\nindex 4d07108"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("4335f49 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/index.html\n+++ b/index.html\n@@ -16,7 +16,7 @@ Date Finder\n\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"footer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("contact "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" support@github.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n+"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"footer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("contact "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" email.support@github.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("通过这些基本命令，可以使用交互式添加模式来轻松地处理暂存区。")]),s._v(" "),t("h2",{attrs:{id:"暂存补丁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂存补丁"}},[s._v("#")]),s._v(" 暂存补丁")]),s._v(" "),t("p",[s._v("Git 也可以暂存文件的特定部分。 例如，如果在 simplegit.rb 文件中做了两处修改，但只想要暂存其中的一个而不是另一个，Git 会帮你轻松地完成。 在和上一节一样的交互式提示符中，输入 "),t("code",[s._v("p")]),s._v(" 或 "),t("code",[s._v("5")]),s._v("（补丁）。 Git 会询问你想要部分暂存哪些文件；然后，对已选择文件的每一个部分，它都会一个个地显示文件区别并询问你是否想要暂存它们：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--git")]),s._v(" a/lib/simplegit.rb b/lib/simplegit.rb\nindex dd5ecc4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("57399e0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/lib/simplegit.rb\n+++ b/lib/simplegit.rb\n@@ -22,7 +22,7 @@ class SimpleGit\n   end\n\n   def log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("treeish "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-    command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git log -n 25 #{treeish}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n+    command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git log -n 30 #{treeish}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   end\n\n   def blame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nStage this hunk "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y,n,a,d,/,j,J,g,e,?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("?\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("这时有很多选项。 输入 "),t("code",[s._v("?")]),s._v(" 显示所有可以使用的命令列表：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Stage this hunk "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y,n,a,d,/,j,J,g,e,?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("? ?\ny - stage this hunk\nn - "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" not stage this hunk\na - stage this and all the remaining hunks "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\nd - "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" not stage this hunk nor any of the remaining hunks "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\ng - "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a hunk to go to\n/ - search "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a hunk matching the given regex\nj - leave this hunk undecided, see next undecided hunk\nJ - leave this hunk undecided, see next hunk\nk - leave this hunk undecided, see previous undecided hunk\nK - leave this hunk undecided, see previous hunk\ns - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" the current hunk into smaller hunks\ne - manually edit the current hunk\n? - print "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("通常情况下可以输入 "),t("code",[s._v("y")]),s._v(" 或 "),t("code",[s._v("n")]),s._v(" 来选择是否要暂存每一个区块， 当然，暂存特定文件中的所有部分或为之后的选择跳过一个区块也是非常有用的。 如果你只暂存文件的一部分，状态输出可能会像下面这样：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("What now"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           staged     unstaged path\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":        +1/-1        +4/-0 lib/simplegit.rb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("code",[s._v("simplegit.rb")]),s._v(" 文件的状态很有趣。 它显示出若干行被暂存与若干行未被暂存。 已经部分地暂存了这个文件。 在这时，可以退出交互式添加脚本并且运行 "),t("code",[s._v("git commit")]),s._v(" 来提交部分暂存的文件。")]),s._v(" "),t("p",[s._v("也可以不必在交互式添加模式中做部分文件暂存——可以在命令行中使用 "),t("code",[s._v("git add -p")]),s._v(" 或 "),t("code",[s._v("git add --patch")]),s._v(" 来启动同样的脚本。")]),s._v(" "),t("p",[s._v("更进一步地，可以使用 "),t("code",[s._v("git reset --patch")]),s._v(" 命令的补丁模式来部分重置文件， 通过 "),t("code",[s._v("git checkout --patch")]),s._v(" 命令来部分检出文件与 "),t("code",[s._v("git stash save --patch")]),s._v(" 命令来部分暂存文件。 我们将会在接触这些命令的高级使用方法时了解更多详细信息。")])])}),[],!1,null,null,null);t.default=e.exports}}]);