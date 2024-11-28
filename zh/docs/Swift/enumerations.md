# 枚举

枚举为一组相关的值定义了一个共同的类型，使你能够在代码中以类型安全的方式使用这些值。

如果你熟悉 C 语言，就会知道 C 语言中的枚举会为一组相关的名称分配一组整数值。Swift 中的枚举更加灵活，不必为枚举的每个成员都提供一个值。如果为每个枚举成员提供一个值（称为原始值），则该值可以是字符串、字符，或者任意整数或浮点数类型。

另外，枚举成员可以指定任意类型的关联值，这些关联值会和成员值一起存储，这与其他语言中的联合体（unions）或变体（variants）类似。你可以在一个枚举中定义一组相关的成员，每个成员都可以有与之关联的适当类型的值。

Swift 中的枚举本身就是一等类型。它们具有许多传统上只有类才支持的特性，例如计算属性（用于提供关于枚举当前值的额外信息）和实例方法（用于提供与枚举值相关的功能）。枚举还可以定义构造器来提供初始成员值；可以在原始实现的基础上扩展它们的功能；还可以遵循协议来提供标准功能。

有关这些功能的更多信息，请参阅[属性]、[方法]、[构造过程]、[扩展]和[协议]。

## 枚举语法

使用 `enum` 关键字来引入枚举，并将整个定义放在一对大括号中：

```swift
enum SomeEnumeration {
    // 在这里定义枚举
}
```

下面是指南针四个方向的例子：

```swift
enum CompassPoint {
    case north
    case south
    case east
    case west
}
```

枚举中定义的值（如 `north`、`south`、`east` 和 `west`）是它的枚举成员。使用 `case` 关键字来引入新的枚举成员。

> 注意
> 
> 与 C 和 Objective-C 不同，Swift 的枚举成员在创建时不会被默认赋予整型值。在上面的 `CompassPoint` 例子中，`north`、`south`、`east` 和 `west` 并不隐式地等于 `0`、`1`、`2` 和 `3`。相反，这些枚举成员本身就是完备的值，它们的类型是已经明确定义的 `CompassPoint` 类型。

多个成员值可以出现在同一行上，用逗号隔开：

```swift
enum Planet {
    case mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
}
```

每个枚举定义都定义了一个新的类型。与 Swift 中的其他类型一样，它们的名称（如 `CompassPoint` 和 `Planet`）应该以大写字母开头。给枚举类型起名时应该使用单数而不是复数名词，这样读起来更加清晰：

```swift
var directionToHead = CompassPoint.west
```

当用枚举的某个可能值初始化 `directionToHead` 时，其类型会被自动推断出来。一旦 `directionToHead` 被声明为 `CompassPoint` 类型，你可以使用更简短的点语法将其设置为另一个 `CompassPoint` 值：

```swift
directionToHead = .east
```

由于 `directionToHead` 的类型已知，因此在设置其值时可以省略类型名。在处理显式类型的枚举值时，这让代码具有很好的可读性。

## 使用 Switch 语句匹配枚举值

你可以使用 `switch` 语句匹配单个的枚举值：

```swift
directionToHead = .south
switch directionToHead {
case .north:
    print("很多星球都有北极")
case .south:
    print("小心企鹅")
case .east:
    print("太阳从这里升起")
case .west:
    print("天空在这里是蓝色的")
}
// 输出"小心企鹅"
```

你可以这样理解这段代码：

"考虑 `directionToHead` 的值。当它等于 `.north` 时，打印'很多星球都有北极'。当它等于 `.south` 时，打印'小心企鹅'。"

以此类推。

如控制流中所述，在处理枚举的成员时，`switch` 语句必须是详尽的。如果忽略了 `.west` 的情况，上面的代码将无法编译，因为它没有考虑到 `CompassPoint` 的所有成员。要求详尽性确保了枚举成员不会被意外遗漏。

当不适合为每个枚举成员都提供一个 case 时，你可以提供一个 `default` case 来涵盖所有未明确处理的成员：

```swift
let somePlanet = Planet.earth
switch somePlanet {
case .earth:
    print("基本无害")
default:
    print("不适合人类居住")
}
// 输出"基本无害"
```

## 遍历枚举成员

对于某些枚举来说，能够遍历其所有成员是很有用的。为此，你可以在枚举名后面写上 `: CaseIterable`。Swift 会将枚举的所有成员作为一个集合暴露出来，可以通过枚举类型的 `allCases` 属性访问。下面是一个例子：

```swift
enum Beverage: CaseIterable {
    case coffee, tea, juice
}
let numberOfChoices = Beverage.allCases.count
print("有 \(numberOfChoices) 种饮料可选")
// 输出"有 3 种饮料可选"
```

在上面的例子中，通过 `Beverage.allCases` 访问一个包含 `Beverage` 枚举所有成员的集合。你可以像使用其他任何集合一样使用 `allCases` —— 集合的元素是枚举类型的实例，所以在这个例子中是 `Beverage` 值。上面的例子统计了有多少个成员，下面的例子使用 for-in 循环遍历所有成员。

```swift
for beverage in Beverage.allCases {
    print(beverage)
}
// coffee
// tea
// juice
```

上面例子中使用的语法将枚举标记为遵循 `CaseIterable` 协议。关于协议的信息，请参见[协议]章节。

## 关联值

前面章节中的例子演示了枚举的成员如何成为一个已定义的（并且是有类型的）值。你可以将一个常量或变量设置为 `Planet.earth`，并在之后检查这个值。然而，有时能够将其他类型的值和成员值一起存储是很有用的。这些额外的信息称为关联值，它在你每次在代码中使用该成员值时可以不同。

你可以定义 Swift 枚举来存储任意给定类型的关联值，如果需要的话，每个枚举成员的关联值类型可以不同。这种枚举类似于其他编程语言中的可区分联合（discriminated unions）、标记联合（tagged unions）或变体（variants）。

例如，假设一个库存跟踪系统需要通过两种不同类型的条形码来跟踪产品。有些产品标有 UPC 格式的一维条形码，使用数字 0 到 9。每个条形码都有一个系统数字，后面是五个制造商代码数字和五个产品代码数字。最后一个数字是检查位，用于验证代码是否被正确扫描：

其他产品使用 QR 码格式的二维条形码，可以使用任何 ISO 8859-1 字符，并且可以编码长达 2,953 个字符的字符串：

对于库存跟踪系统来说，将 UPC 条形码存储为四个整数的元组，将 QR 码条形码存储为任意长度的字符串是很方便的。

在 Swift 中，定义一个可以存储任一类型条形码的枚举可能如下所示：

```swift
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}
```

这段代码可以这样理解：

"定义一个名为 `Barcode` 的枚举类型，它可以取一个关联值为 `(Int, Int, Int, Int)` 类型的 `upc` 值，或者一个关联值为 `String` 类型的 `qrCode` 值。"

这个定义并不提供任何实际的 `Int` 或 `String` 值 —— 它只是定义了当 `Barcode` 常量和变量等于 `Barcode.upc` 或 `Barcode.qrCode` 时，它们可以存储的关联值的类型。

然后你可以使用任一类型创建新的条形码：

```swift
var productBarcode = Barcode.upc(8, 85909, 51226, 3)
```

这个例子创建了一个名为 `productBarcode` 的新变量，并为它赋予了一个关联元组值为 `(8, 85909, 51226, 3)` 的 `Barcode.upc` 值。

你可以为同一个产品分配不同类型的条形码：

```swift
productBarcode = .qrCode("ABCDEFGHIJKLMNOP")
```

此时，原来的 `Barcode.upc` 及其整数值被新的 `Barcode.qrCode` 及其字符串值所替代。`Barcode` 类型的常量和变量可以存储一个 `.upc` 值或一个 `.qrCode` 值（及它们的关联值），但是在任何时候只能存储其中之一。

你可以使用 switch 语句检查不同的条形码类型，类似于"使用 Switch 语句匹配枚举值"中的例子。不过这次，关联值会作为 switch 语句的一部分被提取出来。你可以将每个关联值提取为常量（使用 `let` 前缀）或变量（使用 `var` 前缀）以在 switch case 的代码中使用：

```swift
switch productBarcode {
case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC：\(numberSystem), \(manufacturer), \(product), \(check)。")
case .qrCode(let productCode):
    print("QR 码：\(productCode)。")
}
// 输出"QR 码：ABCDEFGHIJKLMNOP。"
```

如果一个枚举成员的所有关联值都被提取为常量，或者都被提取为变量，为了简洁，你可以在成员名称前只放置一个 `let` 或 `var` 标注：

```swift
switch productBarcode {
case let .upc(numberSystem, manufacturer, product, check):
    print("UPC：\(numberSystem), \(manufacturer), \(product), \(check)。")
case let .qrCode(productCode):
    print("QR 码：\(productCode)。")
}
// 输出"QR 码：ABCDEFGHIJKLMNOP。"
```

## 原始值

"关联值"一节中的条形码例子展示了枚举的成员如何声明它们存储不同类型的关联值。作为关联值的替代选择，枚举成员可以被预填充默认值（称为原始值），这些原始值的类型必须相同。

以下是一个存储 ASCII 值的例子：

```swift
enum ASCIIControlCharacter: Character {
    case tab = "\t"
    case lineFeed = "\n"
    case carriageReturn = "\r"
}
```

在这里，原始值为 `ASCIIControlCharacter` 枚举定义为 `Character` 类型，并被设置为一些常见的 ASCII 控制字符。`Character` 值在[字符串和字符]中有描述。

原始值可以是字符串、字符，或者任意整数或浮点数类型。每个原始值在枚举声明中必须是唯一的。

> 注意
> 
> 原始值与关联值不同。原始值是在你首次在代码中定义枚举时预填充的值，例如上面的三个 ASCII 代码。枚举成员的原始值在任何时候都是相同的。关联值是在你基于枚举的某个成员创建一个新常量或变量时设置的，可以在每次创建时都不同。

## 隐式赋值原始值

当你使用整数或字符串作为原始值时，你不必为每个成员显式地赋予原始值。当你不这样做时，Swift 会自动为你赋予值。

例如，当使用整数作为原始值时，每个成员的隐式值都是比前一个成员的值大 1。如果第一个成员没有赋予值，它的值就是 0。

以下枚举是之前 `Planet` 枚举的一个改进版本，它使用整数原始值来表示每个行星从太阳的顺序：

```swift
enum Planet: Int {
    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune
}
```

在上面的例子中，`Planet.mercury` 有一个显式的原始值 1，`Planet.venus` 有一个隐式的原始值 2，依此类推。

当使用字符串作为原始值时，每个成员的隐式值就是成员名称的文本。

以下枚举是之前 `CompassPoint` 枚举的一个改进版本，它使用字符串原始值来表示每个方向的名称：

```swift
enum CompassPoint: String {
    case north, south, east, west
}
```

在上面的例子中，`CompassPoint.south` 有一个隐式的原始值 "south"，依此类推。

你可以使用枚举成员的 `rawValue` 属性来访问它的原始值：

```swift
let earthsOrder = Planet.earth.rawValue
// earthsOrder 是 3

let sunsetDirection = CompassPoint.west.rawValue
// sunsetDirection 是 "west"
```

## 从原始值初始化

如果你定义了一个原始值类型的枚举，枚举会自动获得一个接受原始值类型值（作为一个名为 `rawValue` 的参数）并返回枚举成员或 `nil` 的构造器。你可以使用这个构造器尝试创建枚举的一个新实例。

这个例子通过原始值 7 来识别天王星：

```swift
let possiblePlanet = Planet(rawValue: 7)
// possiblePlanet 是 Planet? 类型，并且等于 Planet.uranus
```

并不是所有可能的 `Int` 值都会找到一个匹配的行星。因此，原始值构造器总是返回一个可选的枚举成员。在上面的例子中，`possiblePlanet` 是 `Planet?` 类型，也就是"可选的 Planet"。

> 注意
> 
> 原始值构造器是一个可失败的构造器，因为并不是所有原始值都会返回一个枚举成员。更多信息，请参见[可失败的构造器]。

如果你尝试通过原始值 11 来找到一个行星，原始值构造器返回的可选 `Planet` 值将是 `nil`：

```swift
let positionToFind = 11
if let somePlanet = Planet(rawValue: positionToFind) {
    switch somePlanet {
    case .earth:
        print("基本无害")
    default:
        print("不适合人类居住")
    }
} else {
    print("第 \(positionToFind) 位没有行星")
}
// 输出"第 11 位没有行星"
```

这个例子使用可选绑定来尝试访问一个原始值为 11 的行星。语句 `if let somePlanet = Planet(rawValue: 11)` 创建一个可选的 `Planet`，并将 `somePlanet` 设置为该可选 `Planet` 的值，如果它可以被检索出来的话。在这个例子中，它无法检索到一个原始值为 11 的行星，因此执行 `else` 分支。

## 递归枚举

递归枚举是一个枚举，它有另一个枚举实例作为其关联值。递归枚举使用 `indirect` 关键字来标记枚举成员。

例如，下面是一个存储简单算术表达式的枚举：

```swift
enum ArithmeticExpression {
    case number(Int)
    indirect case addition(ArithmeticExpression, ArithmeticExpression)
    indirect case multiplication(ArithmeticExpression, ArithmeticExpression)
}
```

你也可以在枚举名前面写上 `indirect` 来为枚举的所有成员启用递归：

```swift
indirect enum ArithmeticExpression {
    case number(Int)
    case addition(ArithmeticExpression, ArithmeticExpression)
    case multiplication(ArithmeticExpression, ArithmeticExpression)
}
```

这个枚举可以存储三种类型的算术表达式：一个简单的数字，两个表达式的加法，两个表达式的乘法。加法和乘法成员有关联值，这些关联值也是算术表达式，使得可以嵌套表达式。例如，表达式 `(5 + 4) * 2` 在乘法的右边有一个数字，在乘法的左边有另一个表达式。由于数据是嵌套的，因此用于存储数据的枚举也需要支持嵌套 —— 这意味着枚举需要是递归的。下面的代码展示了如何为表达式 `(5 + 4) * 2` 创建一个递归的 `ArithmeticExpression` 枚举：

```swift
let five = ArithmeticExpression.number(5)
let four = ArithmeticExpression.number(4)
let sum = ArithmeticExpression.addition(five, four)
let product = ArithmeticExpression.multiplication(sum, ArithmeticExpression.number(2))
```

递归函数是处理具有递归结构的数据的直接方式。例如，下面是一个函数，它计算算术表达式的值：

```swift
func evaluate(_ expression: ArithmeticExpression) -> Int {
    switch expression {
    case let .number(value):
        return value
    case let .addition(left, right):
        return evaluate(left) + evaluate(right)
    case let .multiplication(left, right):
        return evaluate(left) * evaluate(right)
    }
}

print(evaluate(product))
// 输出"18"
