# 基础知识

> Work with common kinds of data and write basic syntax. 使用常见类型的数据并编写基本语法。
> Swift 提供了许多基本数据类型，包括用于整数的 `Int` 、用于浮点值的 `Double` 、用于布尔值的 `Bool` 以及用于文本的 `String` 。 Swift 还提供了三种主要集合类型（ `Array` 、 `Set` 和 `Dictionary` 的强大版本，如集合类型中所述。
> Swift 使用变量通过识别名称来存储和引用值。 Swift 还大量使用其值无法更改的变量。这些被称为常量，在整个 Swift 中使用，以便在您使用不需要更改的值时使代码更安全、意图更清晰。
> 除了熟悉的类型之外，Swift 还引入了元组等高级类型。元组使您能够创建和传递值分组。您可以使用元组将函数中的多个值作为单个复合值返回。
> Swift 还引入了可选类型，用于处理值的缺失。可选表示“有一个值，并且它等于 x ”或“根本没有值”。
> Swift 是一种类型安全的语言，这意味着该语言可以帮助您清楚代码可以使用的值的类型。如果您的部分代码需要 String ，类型安全可以防止您错误地向其传递 Int 。同样，类型安全可以防止您意外地将可选 String 传递给需要非可选 String 代码段。类型安全可帮助您在开发过程中尽早发现并修复错误。

## 常量和变量

常量和变量将名称（例如 maximum Number Of Login Attempts 或 welcome Message ）与特定类型的值（例如数字 10 或字符串"Hello" ）相关联。常量的值一旦设置就无法更改，而变量可以在将来设置为不同的值。

## 声明常量和变量

常量和变量必须在使用前声明。您可以使用 let 关键字声明常量，并使用 var 关键字声明变量。以下是如何使用常量和变量来跟踪用户尝试登录的次数的示例：

```swift
let maximumNumberOfLoginAttempts = 10
var currentLoginAttempt = 0
```

这段代码可以读作：
“声明一个名为 maximum Number Of Login Attempts 新常量，并将其值设置为 10 。然后，声明一个名为 current Login Attempt 新变量，并为其指定初始值 0 。”
在此示例中，允许的登录尝试的最大次数被声明为常量，因为最大值永远不会改变。当前登录尝试计数器被声明为变量，因为该值必须在每次登录尝试失败后递增。
如果代码中存储的值不会更改，请始终使用 let 关键字将其声明为常量。仅使用变量来存储更改的值。
当您声明常量或变量时，您可以为其指定一个值作为该声明的一部分，如上面的示例。或者，您可以稍后在程序中分配其初始值，只要保证在您第一次读取它之前它有一个值即可。

```swift
var environment = "development"
let maximumNumberOfLoginAttempts: Int
// maximumNumberOfLoginAttempts has no value yet.

if environment == "development" {
maximumNumberOfLoginAttempts = 100
} else {
maximumNumberOfLoginAttempts = 10
}
// Now maximumNumberOfLoginAttempts has a value, and can be read.
```

在此示例中，最大登录尝试次数是恒定的，其值取决于环境。在开发环境中，值为 100；在任何其他环境中，其值为 10。 if 语句的两个分支都用某个值初始化 maximum Number Of Login Attempts ，保证常量始终获取值。有关当您以这种方式设置初始值时 Swift 如何检查代码的信息，请参阅常量声明。
您可以在一行上声明多个常量或多个变量，并用逗号分隔：

```swift
var x = 0.0, y = 0.0, z = 0.0
```

## 类型注释

您可以在声明常量或变量时提供类型注释，以明确常量或变量可以存储的值的类型。通过在常量或变量名称后面放置一个冒号，后跟一个空格，然后是要使用的类型的名称来编写类型注释。
此示例为名为 welcome Message 的变量提供类型注释，以指示该变量可以存储 String 值：

```swift
var welcomeMessage: String
```

声明中的冒号表示“... 类型。..”，因此上面的代码可以读作：
“声明一个名为 welcome Message 、类型为 String 的变量。”
短语“ String 类型”的意思是“可以存储任何 String 值”。将其视为可以存储的“事物类型”（或“事物种类”）。
现在可以将 welcome Message 变量设置为任何字符串值而不会出现错误：

```swift
welcomeMessage = "Hello"
```

您可以在一行上定义多个相同类型的相关变量，以逗号分隔，并在最终变量名称后使用单个类型注释：

```swift
var red, green, blue: Double
```

> Note 笔记
> 在实践中很少需要编写类型注释。如果您在定义常量或变量时为其提供初始值，Swift 几乎总是可以推断出该常量或变量要使用的类型，如类型安全和类型推断中所述。在上面的 welcome Message 示例中，没有提供初始值，因此 welcome Message 变量的类型是使用类型注释指定的，而不是从初始值推断的。

## 命名常量和变量

常量和变量名称几乎可以包含任何字符，包括 Unicode 字符：

```swift
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "dogcow"
```

常量和变量名称不能包含空白字符、数学符号、箭头、专用 Unicode 标量值或线条和方框绘制字符。它们也不能以数字开头，尽管数字可能包含在名称中的其他位置。
一旦声明了某种类型的常量或变量，就不能用相同的名称再次声明它，也不能将其更改为存储不同类型的值。也不能将常量更改为变量或将变量更改为常量。

> Note 笔记
> 如果您需要为常量或变量提供与保留的 Swift 关键字相同的名称，请在将其用作名称时用反引号 ( ` ) 括住关键字。但是，除非您别无选择，否则请避免使用关键字作为名称。
> 您可以将现有变量的值更改为兼容类型的另一个值。在此示例中， friendly Welcome 的值从"Hello!"到"Bonjour!" ：

```swift
var friendlyWelcome = "Hello!"
friendlyWelcome = "Bonjour!"
// friendlyWelcome is now "Bonjour!"
```

与变量不同，常量的值一旦设置就不能更改。编译代码时尝试这样做会报告错误：

```swift
let languageName = "Swift"
languageName = "Swift++"
// This is a compile-time error: languageName cannot be changed.
```

## 打印常量和变量

您可以使用以下命令打印常量或变量的当前值 `print(_:separator:terminator:)` 函数：

```swift
print(friendlyWelcome)
// Prints "Bonjour!"
```

The `print(_:separator:terminator:)` function is a global function that prints one or more values to an appropriate output. In Xcode, for example, the `print(_:separator:terminator:)` function prints its output in Xcode’s “console” pane. The separator and terminator parameter have default values, so you can omit them when you call this function. By default, the function terminates the line it prints by adding a line break. To print a value without a line break after it, pass an empty string as the terminator — for example, print(someValue, terminator: ""). For information about parameters with default values, see Default Parameter Values.
这 `print(_:separator:terminator:)` 函数是一个全局函数，它将一个或多个值打印到适当的输出。以 Xcode 为例， `print(_:separator:terminator:)` 函数在 Xcode 的“控制台”窗格中打印其输出。 separator 和 terminator 参数有默认值，因此调用此函数时可以省略它们。默认情况下，该函数通过添加换行符来终止它打印的行。要打印后面不带换行符的值，请传递一个空字符串作为终止符 - 例如， print(someValue, terminator: "") 。有关具有默认值的参数的信息，请参阅默认参数值。
Swift 使用字符串插值将常量或变量的名称作为占位符包含在较长的字符串中，并提示 Swift 将其替换为该常量或变量的当前值。将名称括在括号中，并在左括号前使用反斜杠进行转义：

```swift
print("The current value of friendlyWelcome is \(friendlyWelcome)")
// Prints "The current value of friendlyWelcome is Bonjour!"
```

> Note 笔记
> 字符串插值中描述了可用于字符串插值的所有选项。

## 注释

使用注释在代码中包含不可执行的文本，作为对自己的注释或提醒。编译代码时，Swift 编译器会忽略注释。
Swift 中的注释与 C 中的注释非常相似。单行注释以两个正斜杠 ( // ) 开头：

```swift
// This is a comment.
```

Multiline comments start with a forward-slash followed by an asterisk (`/_`) and end with an asterisk followed by a forward-slash (`_/`):
多行注释以正斜杠开头，后跟星号 ( `/_` )，以星号后跟正斜杠 ( `_/` ) 结尾：

```swift
/_ This is also a comment
but is written over multiple lines. _/
Unlike multiline comments in C, multiline comments in Swift can be nested inside other multiline comments. You write nested comments by starting a multiline comment block and then starting a second multiline comment within the first block. The second block is then closed, followed by the first block:
与 C 中的多行注释不同，Swift 中的多行注释可以嵌套在其他多行注释中。您可以通过启动多行注释块，然后在第一个块中启动第二个多行注释来编写嵌套注释。然后关闭第二个块，然后关闭第一个块：

/_ This is the start of the first multiline comment.
/_ This is the second, nested multiline comment. _/
This is the end of the first multiline comment. _/
```

嵌套多行注释使您能够快速轻松地注释掉大块代码，即使代码已经包含多行注释也是如此。

## 分号

与许多其他语言不同，Swift 不要求您在代码中的每个语句后编写分号 ( ; )，尽管您可以根据需要这样做。但是，如果您想在一行上编写多个单独的语句，则需要分号：

```swift
let cat = "🐱"; print(cat)
// Prints "🐱"
```

## 整数

整数是没有小数部分的整数，例如 42 和-23 。整数可以是有符号的（正、零或负），也可以是无符号的（正或零）。
Swift 提供 8、16、32 和 64 位形式的有符号和无符号整数。这些整数遵循类似于 C 的命名约定，其中 8 位无符号整数的类型为 UInt8 ，32 位有符号整数的类型为 Int32 。与 Swift 中的所有类型一样，这些整数类型的名称都大写。

## 整数界限

您可以使用每个整数类型的 min 和 max 属性来访问其最小值和最大值：

```swift
let minValue = UInt8.min // minValue is equal to 0, and is of type UInt8
let maxValue = UInt8.max // maxValue is equal to 255, and is of type UInt8
```

这些属性的值具有适当大小的数字类型（例如上例中的 UInt8 ），因此可以与相同类型的其他值一起在表达式中使用。
在大多数情况下，您不需要选择在代码中使用的特定大小的整数。 Swift 提供了一个额外的整数类型 Int ，它的大小与当前平台的本机字大小相同：
在 32 位平台上， Int 大小与 Int32 相同。
在 64 位平台上， Int 大小与 Int64 相同。
除非您需要使用特定大小的整数，否则请始终在代码中使用 Int 作为整数值。这有助于代码的一致性和互操作性。即使在 32 位平台上， Int 也可以存储-2,147,483,648 和 2,147,483,647 之间的任何值，并且对于许多整数范围来说足够大。
Swift 还提供了一个无符号整数类型 UInt ，它的大小与当前平台的本机字大小相同：
在 32 位平台上， UInt 大小与 UInt32 相同。
在 64 位平台上， UInt 大小与 UInt64 相同。

> Note 笔记
> 仅当您特别需要大小与平台本机字大小相同的无符号整数类型时才使用 UInt 。如果不是这种情况，则首选 Int ，即使要存储的值已知为非负数。对整数值一致使用 Int 有助于代码互操作性，避免在不同数字类型之间进行转换，并匹配整数类型推断，如类型安全和类型推断中所述。

## 浮点数

浮点数是带有小数部分的数字，例如 3 .14159 、 0 .1 和-273 .15 。
浮点类型可以表示比整数类型更广泛的值，并且可以存储比 Int 中可以存储的数字更大或更小的数字。 Swift 提供了两种有符号浮点数类型：
Double 表示 64 位浮点数。
Float 表示 32 位浮点数。

> Note 笔记
> Double 精度至少为 15 位小数，而 Float 的精度可以低至 6 位小数。要使用的适当浮点类型取决于您需要在代码中使用的值的性质和范围。在任何一种类型都适合的情况下，首选 Double 。

## 类型安全和类型推断

Swift 是一种类型安全的语言。类型安全语言鼓励您清楚代码可以使用的值的类型。如果您的部分代码需要 String ，则不能错误地向其传递 Int 。
由于 Swift 是类型安全的，因此它会在编译代码时执行类型检查，并将任何不匹配的类型标记为错误。这使您能够在开发过程中尽早发现并修复错误。
类型检查可以帮助您在使用不同类型的值时避免错误。但是，这并不意味着您必须指定声明的每个常量和变量的类型。如果您没有指定所需值的类型，Swift 会使用类型推断来计算出适当的类型。类型推断使编译器能够在编译代码时自动推断出特定表达式的类型，只需检查您提供的值即可。
由于类型推断，Swift 需要的类型声明比 C 或 Objective-C 等语言少得多。常量和变量仍然是显式类型的，但指定其类型的大部分工作都已为您完成。
当您声明具有初始值的常量或变量时，类型推断特别有用。这通常是通过在声明常量或变量时为其分配一个文字值（或文字）来完成的。 （文字值是直接出现在源代码中的值，例如下面示例中的 42 和 3 .14159 。）
例如，如果您将字面值 42 分配给一个新常量，但没有说明它是什么类型，Swift 会推断您希望该常量为 Int ，因为您已使用看起来像整数的数字对其进行了初始化：

```swift
let meaningOfLife = 42
// meaningOfLife is inferred to be of type Int
```

同样，如果您没有指定浮点文字的类型，Swift 会推断您要创建 Double ：

```swift
let pi = 3.14159
// pi is inferred to be of type Double
```

Swift 在推断浮点数类型时始终选择 Double （而不是 Float ）。
如果在表达式中组合整数和浮点文字，将从上下文中推断出 Double 类型：

```swift
let anotherPi = 3 + 0.14159
// anotherPi is also inferred to be of type Double
```

3 的文字值本身没有显式类型，因此 Double 的适当输出类型是根据作为加法一部分的浮点文字的存在来推断的。

## 整数字面量

整数字面量可以写成：
十进制数，没有前缀
二进制数，带有 0b 前缀
八进制数，带有 0o 前缀
十六进制数，带有 0x 前缀

所有这些整数文字的十进制值为 17 ：

```swift
let decimalInteger = 17
let binaryInteger = 0b10001 // 17 in binary notation
let octalInteger = 0o21 // 17 in octal notation
let hexadecimalInteger = 0x11 // 17 in hexadecimal notation
```

浮点文字可以是十进制（没有前缀）或十六进制（带有 0x 前缀）。它们的小数点两侧必须始终有一个数字（或十六进制数字）。十进制浮点数还可以有一个可选的指数，用大写或小写的 e 表示；十六进制浮点数必须有一个指数，用大写或小写的 p 表示。
对于指数为 x 的十进制数，基数乘以 10ˣ：
1.25e2 表示 1.25 x 10²，或 125 .0 。
1.25e-2 表示 1.25 x 10⁻²，或 0 .0125 。
对于指数为 x 的十六进制数，基数乘以 2ˣ：
0xFp2 表示 15 x 2²，或 60 .0 。
0xFp-2 表示 15 x 2⁻²，或 3 .75 。
所有这些浮点文字的十进制值为 12 .1875 ：

```swift
let decimalDouble = 12.1875
let exponentDouble = 1.21875e1
let hexadecimalDouble = 0xC.3p0
```

数字文字可以包含额外的格式以使其更易于阅读。整数和浮点数都可以用额外的零填充，并且可以包含下划线以帮助提高可读性。这两种格式都不会影响文字的基础值：

```swift
let paddedDouble = 000123.456
let oneMillion = 1_000_000
let justOverOneMillion = 1_000_000.000_000_1
```

## 数值类型转换

对代码中的所有通用整数常量和变量使用 Int 类型，即使它们已知为非负数。在日常情况下使用默认整数类型意味着整数常量和变量可以在代码中立即互操作，并且将与整数文字值的推断类型相匹配。
仅当手头的任务特别需要其他整数类型时（因为来自外部源的明确大小的数据）或者出于性能、内存使用或其他必要的优化的目的，才使用其他整数类型。在这些情况下使用显式大小的类型有助于捕获任何意外的值溢出并隐式记录所使用数据的性质。

## 整数转换

对于每种数字类型，可以存储在整数常量或变量中的数字范围是不同的。 Int8 常量或变量可以存储-128 到 127 之间的数字，而 UInt8 常量或变量可以存储 0 到 255 之间的数字。编译代码时，不适合大小整数类型的常量或变量的数字将报告为错误：

```swift
let cannotBeNegative: UInt8 = -1
// UInt8 can't store negative numbers, and so this will report an error
let tooBig: Int8 = Int8.max + 1
// Int8 can't store a number larger than its maximum value,
// and so this will also report an error
```

由于每种数值类型可以存储不同范围的值，因此您必须根据具体情况选择进行数值类型转换。这种选择加入方法可以防止隐藏的转换错误，并有助于在代码中明确类型转换意图。
要将一种特定数字类型转换为另一种特定数字类型，请使用现有值初始化所需类型的新数字。在下面的示例中，常量 two Thousand 的类型为 UInt16 ，而常量 one 类型为 UInt8 。它们不能直接相加，因为它们不是同一类型。相反，此示例调用 UInt16(one) 创建一个使用值 one 初始化的新 UInt16 ，并使用该值代替原始值：

```swift
let twoThousand: UInt16 = 2_000
let one: UInt8 = 1
let twoThousandAndOne = twoThousand + UInt16(one)
```

因为加法两边现在都是 UInt16 类型，所以允许加法。输出常量 ( two Thousand And One ) 被推断为 UInt16 类型，因为它是两个 UInt16 值的总和。
`SomeType(ofInitialValue)` 是调用 Swift 类型的初始值设定项并传入初始值的默认方式。在幕后， UInt16 有一个接受 UInt8 值的初始值设定项，因此该初始值设定项用于从现有 UInt8 生成新的 UInt16 。但是，您不能在此处传递任何类型 - 它必须是 UInt16 为其提供初始值设定项的类型。扩展中介绍了扩展现有类型以提供接受新类型（包括您自己的类型定义）的初始值设定项。

## 整数和浮点数转换

整数和浮点数字类型之间的转换必须明确：

```swift
let three = 3
let pointOneFourOneFiveNine = 0.14159
let pi = Double(three) + pointOneFourOneFiveNine
// pi equals 3.14159, and is inferred to be of type Double
```

这里，常量 three 的值用于创建一个 Double 类型的新值，以便加法的两边都是相同的类型。如果没有进行此转换，则不允许添加。
浮点到整数的转换也必须明确。整数类型可以用 Double 或 Float 值初始化：

```swift
let integerPi = Int(pi)
// integerPi equals 3, and is inferred to be of type Int
```

当用于以这种方式初始化新的整数值时，浮点值总是被截断。这意味着 4 .75 变为 4 ， -3 .9 变为-3 。

> Note 笔记
> 组合数字常量和变量的规则与数字文字的规则不同。文字值 3 可以直接添加到文字值 0 .14159 ，因为数字文字本身没有显式类型。它们的类型仅在编译器评估时推断。

## 类型别名

类型别名定义现有类型的替代名称。您可以使用 typealias 关键字定义类型别名。
当您想要通过上下文更合适的名称引用现有类型时，例如在处理来自外部源的特定大小的数据时，类型别名非常有用：

```swift
typealias AudioSample = UInt16
```

定义类型别名后，您可以在任何可能使用原始名称的地方使用该别名：

```swift
var maxAmplitudeFound = AudioSample.min
// maxAmplitudeFound is now 0
```

此处， Audio Sample 被定义为 UInt16 的别名。因为它是别名，所以对 Audio Sample .min 调用实际上调用 UInt16 .min ，它为 max Amplitude Found 变量提供初始值 0 。

## 布尔值

Swift 有一个基本的布尔类型，称为 Bool 。布尔值被称为逻辑值，因为它们只能是 true 或 false。 Swift 提供了两个布尔常量值， true 和 false ：

```swift
let orangesAreOrange = true
let turnipsAreDelicious = false
```

```swift
if turnipsAreDelicious {
print("Mmm, tasty turnips!")
} else {
print("Eww, turnips are horrible.")
}
// Prints "Eww, turnips are horrible."
```

控制流中更详细地介绍了条件语句（例如 if 语句）。
Swift 的类型安全性防止非布尔值被替换为 Bool 。以下示例报告编译时错误：

```swift
let i = 1
if i {
// this example will not compile, and will report an error
}
```

但是，下面的替代示例是有效的：

```swift
let i = 1
if i == 1 {
// this example will compile successfully
}
```

== 1 比较的结果是 Bool 类型，因此第二个示例通过了类型检查。基本运算符中讨论了像 i == 1 这样的比较。
与 Swift 中类型安全的其他示例一样，这种方法可以避免意外错误，并确保特定代码部分的意图始终清晰。

## 元组

元组将多个值分组为单个复合值。元组中的值可以是任何类型，并且彼此之间的类型不必相同。
在此示例中， (404, "Not Found") 是描述 HTTP 状态代码的元组。 HTTP 状态代码是每当您请求网页时 Web 服务器返回的特殊值。如果请求的网页不存在，则会返回 404 Not Found 状态码。

```swift
let http404Error = (404, "Not Found")
// http404Error is of type (Int, String), and equals (404, "Not Found")
```

(404, "Not Found") 元组将 Int 和 String 组合在一起，为 HTTP 状态代码提供两个单独的值：一个数字和一个人类可读的描述。它可以被描述为“ (Int, String) 类型的元组”。
您可以根据任何类型排列创建元组，并且它们可以包含任意数量的不同类型。没有什么可以阻止您拥有 (Int, Int, Int) 或 (String, Bool) 类型的元组，或者实际上您需要的任何其他排列。
您可以将元组的内容分解为单独的常量或变量，然后像往常一样访问它们：

```swift
let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)")
// Prints "The status code is 404"
print("The status message is \(statusMessage)")
// Prints "The status message is Not Found"
```

如果您只需要元组的某些值，请在分解元组时忽略元组中带有下划线 ( \_ ) 的部分：

```swift
let (justTheStatusCode, _) = http404Error
print("The status code is \(justTheStatusCode)")
// Prints "The status code is 404"
```

或者，使用从零开始的索引号访问元组中的各个元素值：

```swift
print("The status code is \(http404Error.0)")
// Prints "The status code is 404"
print("The status message is \(http404Error.1)")
// Prints "The status message is Not Found"
```

```swift
let http200Status = (statusCode: 200, description: "OK")
```

```swift
print("The status code is \(http200Status.statusCode)")
// Prints "The status code is 200"
print("The status message is \(http200Status.description)")
// Prints "The status message is OK"
```

在可能缺少值的情况下使用选项。可选值代表两种可能性：要么存在指定类型的值，并且您可以解开可选值以访问该值，要么根本不存在值。
作为可能缺失值的一个示例，Swift 的 Int 类型有一个初始值设定项，它尝试将 String 值转换为 Int 值。但是，只有部分字符串可以转换为整数。字符串"123"可以转换为数值 123 ，但是字符串"hello, world"没有对应的数值。下面的示例使用初始值设定项尝试将 String 转换为 Int ：

```swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)
// The type of convertedNumber is "optional Int"
```

由于上面代码中的初始化程序可能会失败，因此它返回一个可选的 Int ，而不是 Int 。
要编写可选类型，请在可选类型包含的类型名称后面写一个问号 ( ? ) — 例如，可选 Int 的类型是 Int? 。可选的 Int 总是包含一些 Int 值或根本不包含任何值。它不能包含任何其他内容，例如 Bool 或 String 值。

## nil

您可以通过为可选变量分配特殊值 nil 将其设置为无值状态：

```swift
var serverResponseCode: Int? = 404
// serverResponseCode contains an actual Int value of 404
serverResponseCode = nil
// serverResponseCode now contains no value
```

如果您定义可选变量而不提供默认值，则该变量将自动设置为 nil ：

```swift
var surveyAnswer: String?
// surveyAnswer is automatically set to nil
```

您可以使用 if 语句通过将可选值与 nil 进行比较来查明可选值是否包含值。您可以使用“等于”运算符 ( == ) 或“不等于”运算符 ( != ) 执行此比较。
如果可选值具有值，则将其视为“不等于” nil ：

```swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)

if convertedNumber != nil {
print("convertedNumber contains some integer value.")
}
// Prints "convertedNumber contains some integer value."
```

不能将 nil 与非可选常量或变量一起使用。如果代码中的常量或变量需要在某些条件下在没有值的情况下工作，请将其声明为适当类型的可选值。声明为非可选值的常量或变量保证永远不会包含 nil 值。如果您尝试将 nil 分配给非可选值，您将收到编译时错误。
可选值和非可选值的这种分离使您可以明确标记可能丢失的信息，并且可以更轻松地编写处理丢失值的代码。您不能意外地将可选值视为非可选值，因为此错误会在编译时产生错误。解开该值后，使用该值的其他代码都不需要检查 nil ，因此无需在代码的不同部分重复检查相同的值。
当您访问可选值时，您的代码始终处理 nil 和非 nil 情况。当值丢失时，您可以执行多种操作，如以下部分所述：
当值为 nil 时，跳过对该值进行操作的代码。
通过返回 nil 或使用 ? 来传播 nil 值?.可选链接中描述的运算符。
使用??提供后备值。
使用!停止程序执行。

> Note 笔记
> 在 Objective-C 中， nil 是一个指向不存在对象的指针。在 Swift 中， nil 不是指针——它表示缺少某种类型的值。任何类型的可选值都可以设置为 nil ，而不仅仅是对象类型。

## 可选 Binding

您可以使用可选 Binding 来查明可选值是否包含值，如果包含，则使该值可用作临时常量或变量。可选绑定可以与 if 、 guard 和 while 语句一起使用，以检查可选值内的值，并将该值提取到常量或变量中，作为单个操作的一部分。有关 if 、 guard 和 while 语句的更多信息，请参阅控制流。
为 if 语句编写可选绑定，如下所示：

```swift
if let <#constantName#> = <#someOptional#> {
<#statements#>
}
```

您可以重写 Options 部分中 possible Number 示例以使用可选绑定而不是强制解包：

```swift
if let actualNumber = Int(possibleNumber) {
    print("The string \"\(possibleNumber)\" has an integer value of \(actualNumber)")
} else {
    print("The string \"\(possibleNumber)\" couldn't be converted to an integer")
}
// Prints "The string "123" has an integer value of 123"
```

这段代码可以读作：
“如果 Int(possible Number)返回的可选 Int 包含一个值，则将一个名为 actual Number 新常量设置为可选中包含的值。”
如果转换成功， actual Number 常量就可以在 if 语句的第一个分支中使用。它已经使用可选中包含的值进行了初始化，并且具有相应的非可选类型。在这种情况下， possible Number 类型是 Int? ，所以 actual Number 的类型是 Int 。
如果在访问原始可选常量或变量包含的值后不需要引用它，则可以对新常量或变量使用相同的名称：

```swift
let myNumber = Int(possibleNumber)
// Here, myNumber is an optional integer
if let myNumber = myNumber {
    // Here, myNumber is a non-optional integer
    print("My number is \(myNumber)")
}
// Prints "My number is 123"
```

此代码首先检查 my Number 是否包含值，就像前面示例中的代码一样。如果 my Number 有值，则名为 my Number 的新常量的值将设置为该值。在 if 语句的主体中，写入 my Number 指的是新的非可选常量。在 if 语句之前或之后写下 my Number 是指原始可选整型常量。
由于此类代码非常常见，因此您可以使用更短的拼写来解包可选值：仅写入要解包的常量或变量的名称。新的、未包装的常量或变量隐式使用与可选值相同的名称。

```swift
if let myNumber {
    print("My number is \(myNumber)")
}
// Prints "My number is 123"
```

您可以使用带有可选绑定的常量和变量。如果您想在 if 语句的第一个分支中操作 my Number 的值，您可以改为编写 if var my Number ，并且可选项中包含的值将作为变量而不是常量提供。您对 if 语句体内的 my Number 所做的更改仅适用于该局部变量，而不适用于您解包的原始可选常量或变量。
您可以根据需要在单个 if 语句中包含任意多个可选绑定和布尔条件，并用逗号分隔。如果可选绑定中的任何值为 nil 或任何布尔条件计算结果为 false ，则整个 if 语句的条件将被视为 false 。以下 if 语句是等效的：

```swift
if let firstNumber = Int("4"), let secondNumber = Int("42"), firstNumber < secondNumber && secondNumber < 100 {
    print("\(firstNumber) < \(secondNumber) < 100")
}
// Prints "4 < 42 < 100"


if let firstNumber = Int("4") {
    if let secondNumber = Int("42") {
        if firstNumber < secondNumber && secondNumber < 100 {
            print("\(firstNumber) < \(secondNumber) < 100")
        }
    }
}
// Prints "4 < 42 < 100"
```

在 if 语句中使用可选绑定创建的常量和变量仅在 if 语句体内可用。相反，使用 guard 语句创建的常量和变量可在 guard 语句后面的代码行中使用，如 Early Exit 中所述。

## 提供备选值

处理缺失值的另一种方法是使用零合并运算符 ( ?? ) 提供默认值。如果??左边可选不是 nil ，该值已解包并使用。否则， ??右边的值被使用。例如，如果指定了某人的名字，下面的代码会按某人的名字打招呼，而当名字为 nil 时，则使用通用问候语。

```swift
let name: String? = nil
let greeting = "Hello, " + (name ?? "friend") + "!"
print(greeting)
// Prints "Hello, friend!"
```

有关使用??的更多信息要提供后备值，请参阅 Nil-Coalescing Operator 。

## 强制解包

当 nil 表示不可恢复的故障（例如程序员错误或损坏的状态）时，您可以通过在可选名称末尾添加感叹号 ( ! ) 来访问基础值。这称为强制展开可选值。当您强制解包一个 nil 值时，结果就是它的解包值。强制展开 nil 值会触发运行时错误。
这!实际上，是 fatal Error(\_: file: line:)的较短拼写。例如，下面的代码显示了两种等效的方法：

```swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)


let number = convertedNumber!


guard let number = convertedNumber else {
    fatalError("The number was invalid")
}
```

上述代码的两个版本都依赖于始终包含值的 converted Number 。使用上述任一方法将该要求编写为代码的一部分，让您的代码在运行时检查该要求是否正确。
有关执行数据要求和在运行时检查假设的更多信息，请参阅断言和先决条件。

## 隐式解包选项

如上所述，可选值表示允许常量或变量具有“无值”。可以使用 if 语句检查可选值以查看值是否存在，并且可以使用可选绑定有条件地展开以访问可选值（如果存在）。
有时，从程序的结构中可以清楚地看出，在首次设置该值之后，可选值将始终具有一个值。在这些情况下，消除每次访问可选值时检查和解开可选值的需要很有用，因为可以安全地假设它始终具有值。
这些类型的可选值被定义为隐式展开的可选值。您可以通过在要设为可选的类型后面放置感叹号 ( String! ) 而不是问号 ( String? ) 来编写隐式展开的可选类型。当您使用它时，您不是在可选项的名称后面放置一个感叹号，而是在声明它时在可选项的类型后面放置一个感叹号。
当首次定义可选值后立即确认可选值存在并且可以肯定地假定此后的每个点都存在时，隐式解包可选值非常有用。 Swift 中隐式解包选项的主要用途是在类初始化期间，如无主引用和隐式解包可选属性中所述。
当变量稍后有可能变为 nil 时，不要使用隐式展开的可选值。如果需要在变量的生命周期内检查 nil 值，请始终使用普通的可选类型。
隐式解包的可选值是幕后的普通可选值，但也可以像非可选值一样使用，而无需在每次访问时解包可选值。以下示例显示了当将可选字符串和隐式解包可选字符串作为显式 String 访问其包装值时，它们之间的行为差 ​​ 异：

```swift
let possibleString: String? = "An optional string."
let forcedString: String = possibleString! // Requires explicit unwrapping

let assumedString: String! = "An implicitly unwrapped optional string."
let implicitString: String = assumedString // Unwrapped automatically
```

您可以将隐式解包选项视为允许在需要时强制解包选项。当您使用隐式解包的可选值时，Swift 首先尝试将其用作普通可选值；如果它不能用作可选值，Swift 会强制解包该值。在上面的代码中， assumed String 可选值在将其值分配给 implicit String 之前会被强制解包，因为 implicit String 具有显式的非可选类型 String 。在下面的代码中， optional String 没有显式类型，因此它是一个普通的可选值。

```swift
let optionalString = assumedString
// The type of optionalString is "String?" and assumedString isn't force-unwrapped.
```

如果隐式解包的可选值为 nil ，并且您尝试访问其包装的值，则会触发运行时错误。结果与编写感叹号来强制解开不包含值的普通可选值完全相同。
您可以像检查普通选项一样检查隐式展开的选项是否 nil ：

```swift
if assumedString != nil {
    print(assumedString!)
}
// Prints "An implicitly unwrapped optional string."
```

您还可以使用带有可选绑定的隐式解包可选，以在单个语句中检查和解包其值：

```swift
if let definiteString = assumedString {
    print(definiteString)
}
// Prints "An implicitly unwrapped optional string."
```

## Error Handling 错误处理

您可以使用错误处理来响应程序在执行过程中可能遇到的错误情况。
与可选值不同，可选值可以使用值的存在或不存在来传达函数的成功或失败，错误处理允许您确定失败的根本原因，并在必要时将错误传播到程序的其他部分。
当函数遇到错误条件时，它会抛出错误。然后，该函数的调用者可以捕获错误并做出适当的响应。

```swift
func canThrowAnError() throws {
    // this function may or may not throw an error
}
```

函数通过在其声明中包含 throws 关键字来指示它可以抛出错误。当您调用可能引发错误的函数时，您可以在表达式前面添加 try 关键字。
Swift 会自动将错误传播到当前范围之外，直到它们被 catch 子句处理为止。

```swift
do {
    try canThrowAnError()
    // no error was thrown
} catch {
    // an error was thrown
}
```

do 语句创建一个新的包含范围，允许将错误传播到一个或多个 catch 子句。
以下是如何使用错误处理来响应不同错误条件的示例：

```swift
func makeASandwich() throws {
    // ...
}


do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients(let ingredients) {
    buyGroceries(ingredients)
}
```

在此示例中，如果没有干净的菜肴或缺少任何成分，则 make ASandwich()函数将抛出错误。由于 make ASandwich()可能会引发错误，因此该函数调用被包装在 try 表达式中。通过将函数调用包装在 do 语句中，引发的任何错误都将传播到提供的 catch 子句。
If no error is thrown, the eatASandwich() function is called. If an error is thrown and it matches the SandwichError.outOfCleanDishes case, then the washDishes() function will be called. If an error is thrown and it matches the SandwichError.missingIngredients case, then the `buyGroceries(_:)` function is called with the associated [String] value captured by the catch pattern.
如果没有抛出错误，则调用 eat ASandwich()函数。如果抛出错误并且它与 SandwichError.outOfCleanDishes 如果是这种情况，那么将调用 wash Dishes()函数。如果抛出错误并且它与 SandwichError.missingIngredients 在这种情况下，然后使用 catch 模式捕获的关联[String]值调用 `buyGroceries(_:)`函数。
错误处理中更详细地介绍了抛出、捕获和传播错误。

## Assertions and Preconditions 断言和前提条件

断言和前提条件是在运行时发生的检查。您可以使用它们来确保在执行任何进一步的代码之前满足基本条件。如果断言或前置条件中的布尔条件计算结果为 true ，则代码执行将照常继续。如果条件评估为 false ，则程序的当前状态无效；代码执行结束，您的应用程序被终止。
您可以使用断言和前提条件来表达您在编码时所做的假设和期望，因此您可以将它们包含在代码中。断言可帮助您在开发过程中发现错误和不正确的假设，前提条件可帮助您检测生产中的问题。
除了在运行时验证您的期望之外，断言和前提条件也成为代码中有用的文档形式。与上面错误处理中讨论的错误条件不同，断言和先决条件不用于可恢复或预期的错误。由于失败的断言或前置条件指示无效的程序状态，因此无法捕获失败的断言。从无效状态恢复是不可能的。当断言失败时，程序的至少一部分数据无效 - 但您不知道为什么它无效，也不知道其他状态是否也无效。
使用断言和前提条件并不能替代以不太可能出现无效条件的方式设计代码。但是，使用它们来强制执行有效的数据和状态会导致您的应用程序在出现无效状态时更可预测地终止，并有助于使问题更易于调试。如果不检查假设，您可能不会注意到此类问题，直到很久以后，当其他地方的代码开始明显失败并且用户数据已被悄悄损坏之后。一旦检测到无效状态就停止执行也有助于限制该无效状态造成的损害。
断言和前置条件之间的区别在于检查它们的时间：仅在调试版本中检查断言，但在调试和生产版本中都会检查前置条件。在生产版本中，不会评估断言内的条件。这意味着您可以在开发过程中使用任意数量的断言，而不会影响生产性能。

## Debugging with Assertions 使用断言进行调试

You write an assertion by calling the `assert(_:_:file:line:)` function from the Swift standard library. You pass this function an expression that evaluates to true or false and a message to display if the result of the condition is false. For example:
您可以通过调用 Swift 标准库中的 `assert(_: _: file: line:)` 函数来编写断言。您向此函数传递一个计算结果为 true 或 false 表达式，以及一条在条件结果为 false 时显示的消息。例如：

```swift
let age = -3
assert(age >= 0, "A person's age can't be less than zero.")
// This assertion fails because -3 isn't >= 0.
```

在此示例中，如果 `age >= 0` 计算结果为 true （即， age 的值为非负值），则代码执行将继续。如果 age 的值为负数（如上面的代码所示），则 `age >= 0` 计算结果为 false ，并且断言失败，终止应用程序。
您可以省略断言消息，例如，当它只是将条件重复为散文时。

```swift
assert(age >= 0)
```

If the code already checks the condition, you use the `assertionFailure(_:file:line:)` function to indicate that an assertion has failed. For example:
如果代码已经检查了条件，则可以使用 `assertionFailure(_:file:line:)` 函数来指示断言失败。例如：

```swift
if age > 10 {
    print("You can ride the roller-coaster or the ferris wheel.")
} else if age >= 0 {
    print("You can ride the ferris wheel.")
} else {
    assertionFailure("A person's age can't be less than zero.")
}
```

## Enforcing Preconditions 执行先决条件

只要条件可能为假，但必须为真，代码才能继续执行，请使用前提条件。例如，使用前置条件来检查下标是否超出范围，或者检查函数是否已传递有效值。
You write a precondition by calling the `precondition(_:_:file:line:)` function. You pass this function an expression that evaluates to true or false and a message to display if the result of the condition is false. For example:
您可以通过调用 `precondition(_: _: file: line:)` 函数来编写前提条件。您向此函数传递一个计算结果为 true 或 false 表达式，以及一条在条件结果为 false 时显示的消息。例如：

```swift
// In the implementation of a subscript...
precondition(index > 0, "Index must be greater than zero.")
```

You can also call the `preconditionFailure(_:file:line:)` function to indicate that a failure has occurred — for example, if the default case of a switch was taken, but all valid input data should have been handled by one of the switch’s other cases.
您还可以调用 `preconditionFailure(_:file:line:)` 函数来指示发生了故障 - 例如，如果采用了开关的默认情况，但所有有效输入数据都应该由开关的其他情况之一处理。

> Note 笔记
> If you compile in unchecked mode (-Ounchecked), preconditions aren’t checked. The compiler assumes that preconditions are always true, and it optimizes your code accordingly. However, the `fatalError(_:file:line:)` function always halts execution, regardless of optimization settings.
> 如果您在未检查模式 ( -Ounchecked ) 下进行编译，则不会检查先决条件。编译器假定前提条件始终为真，并相应地优化您的代码。但是，无论优化设置如何 `fatalError(_: file: line:)` 函数始终会停止执行。
> You can use the `fatalError(_:file:line:)` function during prototyping and early development to create stubs for functionality that hasn’t been implemented yet, by writing `fatalError("Unimplemented")` as the stub implementation. Because fatal errors are never optimized out, unlike assertions or preconditions, you can be sure that execution always halts if it encounters a stub implementation.
> 您可以在原型设计和早期开发期间使用 `fatal Error(_: file: line:)` 函数，通过将 `fatalError("Unimplemented")` 编写为存根实现，为尚未实现的功能创建存根。因为与断言或先决条件不同，致命错误永远不会被优化掉，所以您可以确保如果遇到存根实现，执行始终会停止。
