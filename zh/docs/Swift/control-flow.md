# 控制流

具有分支、循环和提前退出的结构代码。
Swift 提供了多种控制流语句。

其中包括多次执行任务的 while 循环； if 、 guard 和 switch 语句根据特定条件执行不同的代码分支；诸如 break 和 continue 之类的语句将执行流转移到代码中的另一个点。

Swift 提供了一个 for - in 循环，可以轻松迭代数组、字典、范围、字符串和其他序列。 Swift 还提供了 defer 语句，它包装了离开当前作用域时要执行的代码。

Swift 的 switch 语句比许多类 C 语言中的对应语句强大得多。案例可以匹配许多不同的模式，包括区间匹配、元组和特定类型的转换。 switch case 中的匹配值可以绑定到临时常量或变量以在 case 主体中使用，并且可以使用每种 case 的 where 子句来表达复杂的匹配条件。

## For-In 循环

您可以使用 for - in 循环迭代序列，例如数组中的项目、数字范围或字符串中的字符。

此示例使用 for - in 循环来迭代数组中的项目：

```swift
let names = ["Anna", "Alex", "Brian", "Jack"]
for name in names {
print("Hello, \(name)!")
}
// Hello, Anna!
// Hello, Alex!
// Hello, Brian!
// Hello, Jack!
```

您还可以迭代字典来访问其键值对。当迭代字典时，字典中的每个项目都作为 (key, value) 元组返回，并且您可以将 (key, value) 元组的成员分解为显式命名的常量，以便在 for - in 循环体内使用。在下面的代码示例中，字典的键被分解为一个名为 animal Name 常量，字典的值被分解为一个名为 leg Count 常量。

```swift
let numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
for (animalName, legCount) in numberOfLegs {
print("\(animalName)s have \(legCount) legs")
}
// cats have 4 legs
// ants have 6 legs
// spiders have 8 legs
```

Dictionary 的内容本质上是无序的，迭代它们并不能保证检索它们的顺序。特别是，将项目插入 Dictionary 的顺序并不定义它们的迭代顺序。有关数组和字典的更多信息，请参阅集合类型。

您还可以使用带有数字范围的 for - in 循环。此示例打印五次表中的前几个条目：

```swift
for index in 1...5 {
print("\(index) times 5 is \(index \* 5)")
}
// 1 times 5 is 5
// 2 times 5 is 10
// 3 times 5 is 15
// 4 times 5 is 20
// 5 times 5 is 25
```

迭代的序列是从 1 到 5 的数字范围（包含 1 和 5），如使用闭范围运算符 ( ... ) 所示。 index 的值设置为范围内的第一个数字 ( 1 )，并执行循环内的语句。在本例中，循环仅包含一个语句，该语句打印五次表中 index 当前值的条目。执行该语句后， index 的值将更新为包含范围 ( 2 ) 中的第二个值，并且 `print(_:separator:terminator:)` 函数被再次调用。此过程持续进行，直到到达范围的末尾。

在上面的示例中， index 是一个常量，其值在循环每次迭代开始时自动设置。因此， index 在使用之前不必声明。它只需包含在循环声明中即可隐式声明，无需使用 let 声明关键字。

如果不需要序列中的每个值，可以通过使用下划线代替变量名称来忽略这些值。

```swift
let base = 3
let power = 10
var answer = 1
for _ in 1...power {
answer \*= base
}
print("\(base) to the power of \(power) is \(answer)")
// Prints "3 to the power of 10 is 59049"
```

上面的示例计算一个数字的另一个数字的幂（在本例中为 3 的 10 次方）。它将起始值 1 （即 3 的 0 次方）乘以 3 十次，使用从 1 开始到 10 结束的闭范围。对于此计算，每次循环时都不需要单独的计数器值 - 代码只是执行循环正确的次数。使用下划线字符 ( \_ ) 代替循环变量会导致各个值被忽略，并且在循环的每次迭代期间不提供对当前值的访问。

在某些情况下，您可能不想使用包含两个端点的封闭范围。考虑在表盘上画出每分钟的刻度线。您想要从 0 分钟开始绘制 60 刻度线。使用半开范围运算符 ( ..< ) 包含下限但不包含上限。有关范围的更多信息，请参阅范围运算符。

```swift
let minutes = 60
for tickMark in 0..<minutes {
// render the tick mark each minute (60 times)
}
```

某些用户可能希望用户界面中的刻度线更少。他们可能更喜欢每 5 分钟得一分。使用 `stride(from: to: by:)` 函数跳过不需要的标记。

```swift
let minuteInterval = 5
for tickMark in stride(from: 0, to: minutes, by: minuteInterval) {
// render the tick mark every 5 minutes (0, 5, 10, 15 ... 45, 50, 55)
}
```

通过使用 `stride(from: through: by:)` 代替，也可以使用封闭范围：

```swift
let hours = 12
let hourInterval = 3
for tickMark in stride(from: 3, through: hours, by: hourInterval) {
// render the tick mark every 3 hours (3, 6, 9, 12)
}
```

上面的示例使用 `for - in` 循环来迭代范围、数组、字典和字符串。但是，您可以使用此语法来迭代任何集合，包括您自己的类和集合类型，只要这些类型符合 Sequence 协议即可。

## While 循环

while 循环执行一组语句，直到条件变为 false 。当第一次迭代开始之前迭代次数未知时，最好使用此类循环。 Swift 提供了两种 while 循环：

while 在每次循环开始时评估其条件。

repeat - while 在每次循环结束时评估其条件。

尽管
while 循环首先评估单个条件。如果条件为 true ，则重复一组语句，直到条件变为 false 。

下面是 while 循环的一般形式：

```swift
while <#condition#> {
<#statements#>
}
```

此示例玩一个简单的蛇梯游戏（也称为滑梯和梯子）：

游戏规则如下：

棋盘有 25 个方格，目标是落在第 25 个方格上或之外。

玩家的起始方格是“方格零”，它位于棋盘的左下角附近。

每一轮，您都掷一个六面骰子，并沿着上面虚线箭头指示的水平路径移动该数量的方块。

如果你的回合结束于梯子的底部，你就向上爬梯子。

如果你的回合结束于一条蛇的头部，你就沿着那条蛇移动。

游戏板由 Int 值数组表示。它的大小基于一个名为 `finalSquare` 常量，该常量用于初始化数组，并在示例中稍后检查获胜条件。因为玩家从棋盘上的“零方”开始，所以棋盘是用 26 个零 Int 值初始化的，而不是 25。

```swift
let finalSquare = 25
var board = [Int](repeating: 0, count: finalSquare + 1)
```

然后将一些方块设置为具有针对蛇和梯子的更具体的值。带有梯子底座的方块有一个正数，可以让你在棋盘上向上移动，而有蛇头的方块有一个负数，可以让你在棋盘上向下移动。

```swift
board[03] = +08; board[06] = +11; board[09] = +09; board[10] = +02
board[14] = -10; board[19] = -11; board[22] = -02; board[24] = -08
```

方格 3 包含梯子的底部，可将您移动到方格 11。为了表示这一点， `board[03]` 等于+08 ，相当于整数值 8 （ 3 和 11 之间的差）。为了对齐值和语句，一元加运算符 ( +i ) 显式地与一元减运算符 ( -i ) 一起使用，并且小于 10 的数字用零填充。 （这两种风格技术都不是绝对必要的，但它们会导致更简洁的代码。）

```swift
var square = 0
var diceRoll = 0
while square < finalSquare {
// roll the dice
diceRoll += 1
if diceRoll == 7 { diceRoll = 1 }
// move by the rolled amount
square += diceRoll
if square < board.count {
// if we're still on the board, move up or down for a snake or a ladder
square += board[square]
}
print("Game over!")
```

上面的例子使用了一种非常简单的掷骰子方法。它不是生成随机数，而是以 diceRoll 值 0 开始。每次执行 while 循环时， diceRoll 都会增加 1，然后检查它是否变得太大。每当此返回值等于 7 ，骰子就变得太大并重置为值 1 。结果是一系列 diceRoll 值，始终为 1 、 2 、 3 、 4 、 5 、 6 、 1 、 2 等。

掷骰子后，玩家通过 diceRoll 方格向前移动。掷骰子可能使玩家超出方格 25，在这种情况下游戏就结束了。为了应对这种情况，代码检查 square 是否小于 board 数组的 count 属性。如果 square 有效，则将 `board[square]` 中存储的值添加到当前的 square 值中，以将玩家向上或向下移动任何梯子或蛇。

笔记

如果不执行此检查， `board[square]` 可能会尝试访问 board 数组边界之外的值，这将触发运行时错误。

当前的 while 循环执行随后结束，并检查循环的条件以确定是否应再次执行循环。如果玩家移动到或超出了方格号 25 ，则循环的条件评估为 false 并且游戏结束。

while 循环在这种情况下是合适的，因为在 while 循环开始时游戏的长度并不清楚。相反，执行循环直到满足特定条件。

### repeat while

while 循环的另一种变体称为 repeat while 循环，它在考虑循环条件之前首先执行一次循环块。然后继续重复循环，直到条件为 false 为止。

笔记

Swift 中的 repeat-while 循环类似于其他语言中的 do-while 循环。

这是 repeat-while 循环的一般形式：

```swift
repeat {
<#statements#>
} while <#condition#>
```

这里又是蛇梯棋的例子，写成 repeat while 循环而不是 while 循环。 finalSquare 、 board 、 square 和 diceRoll 的值的初始化方式与 while 循环完全相同。

```swift
let finalSquare = 25
var board = [Int](repeating: 0, count: finalSquare + 1)
board[03] = +08; board[06] = +11; board[09] = +09; board[10] = +02
board[14] = -10; board[19] = -11; board[22] = -02; board[24] = -08
var square = 0
var diceRoll = 0
```

在此版本的游戏中，循环中的第一个动作是检查梯子或蛇。棋盘上没有梯子可以将玩家直接带到 25 格，因此不可能通过向上移动梯子来赢得游戏。因此，将检查蛇或梯子作为循环中的第一个操作是安全的。

游戏开始时，玩家处于“零方位”。 board[0] 始终等于 0 并且没有任何作用。

```swift
repeat {
// move up or down for a snake or ladder
square += board[square]
// roll the dice
diceRoll += 1
if diceRoll == 7 { diceRoll = 1 }
// move by the rolled amount
square += diceRoll
} while square < finalSquare
print("Game over!")
```

代码检查蛇和梯子后，掷骰子，玩家通过 diceRoll 方块向前移动。当前循环执行然后结束。

循环的条件（ while square < finalSquare ）与以前相同，但这次直到第一次循环结束时才会对其进行评估。与前面示例中的 while 循环相比， repeat-while 循环的结构更适合此游戏。在上面的 repeat-while 循环中， `square += board[square]` 总是在循环的 while 条件确认 square 仍在棋盘上后立即执行。此行为消除了前面描述的游戏的 while 循环版本中所见的数组边界检查的需要。

## 条件语句

根据某些条件执行不同的代码通常很有用。您可能希望在发生错误时运行一段额外的代码，或者在值变得过高或过低时显示一条消息。为此，您需要将部分代码设置为有条件的。

Swift 提供了两种向代码添加条件分支的方法： if 语句和 switch 语句。通常，您使用 if 语句来评估只有几种可能结果的简单条件。 switch 语句更适合具有多种可能排列的更复杂的条件，并且在模式匹配可以帮助选择要执行的适当代码分支的情况下很有用。

### if

在最简单的形式中， if 语句只有一个 if 条件。仅当条件为 true 时，它才会执行一组语句。

```swift
var temperatureInFahrenheit = 30
if temperatureInFahrenheit <= 32 {
print("It's very cold. Consider wearing a scarf.")
}
// Prints "It's very cold. Consider wearing a scarf."
```

上面的示例检查温度是否小于或等于 32 华氏度（水的冰点）。如果是，则会打印一条消息。否则，不会打印任何消息，并且代码在 if 语句的右大括号之后继续执行。

if 语句可以为 if 条件为 false 情况提供一组替代语句，称为 else 子句。这些语句由 else 关键字指示。

```swift
temperatureInFahrenheit = 40
if temperatureInFahrenheit <= 32 {
print("It's very cold. Consider wearing a scarf.")
} else {
print("It's not that cold. Wear a T-shirt.")
}
// Prints "It's not that cold. Wear a T-shirt."
```

始终执行这两个分支之一。由于温度已升至 40 华氏度，不再冷到建议戴围巾，因此会触发 else 分支。

您可以将多个 if 语句链接在一起以考虑其他子句。

```swift
temperatureInFahrenheit = 90
if temperatureInFahrenheit <= 32 {
print("It's very cold. Consider wearing a scarf.")
} else if temperatureInFahrenheit >= 86 {
print("It's really warm. Don't forget to wear sunscreen.")
} else {
print("It's not that cold. Wear a T-shirt.")
}
// Prints "It's really warm. Don't forget to wear sunscreen."
```

这里添加了一个额外的 if 语句来响应特别温暖的温度。最后的 else 子句仍然存在，它会打印对任何不太热或太冷的温度的响应。

不过，最后的 else 子句是可选的，如果不需要完整的条件集，则可以将其排除。

```swift
temperatureInFahrenheit = 72
if temperatureInFahrenheit <= 32 {
print("It's very cold. Consider wearing a scarf.")
} else if temperatureInFahrenheit >= 86 {
print("It's really warm. Don't forget to wear sunscreen.")
}
```

由于温度不足以触发 if 条件，也不足以触发 else if 条件，因此不会打印任何消息。

Swift 提供了 if 的简写形式，您可以在设置值时使用。例如，考虑以下代码：

```swift
let temperatureInCelsius = 25
let weatherAdvice: String

if temperatureInCelsius <= 0 {
weatherAdvice = "It's very cold. Consider wearing a scarf."
} else if temperatureInCelsius >= 30 {
weatherAdvice = "It's really warm. Don't forget to wear sunscreen."
} else {
weatherAdvice = "It's not that cold. Wear a T-shirt."
}

print(weatherAdvice)
// Prints "It's not that cold. Wear a T-shirt."
```

在这里，每个分支为 weather Advice 常量设置一个值，该值在 if 语句之后打印。

使用替代语法（称为 if 表达式），您可以更简洁地编写此代码：

```swift
let weatherAdvice = if temperatureInCelsius <= 0 {
"It's very cold. Consider wearing a scarf."
} else if temperatureInCelsius >= 30 {
"It's really warm. Don't forget to wear sunscreen."
} else {
"It's not that cold. Wear a T-shirt."
}

print(weatherAdvice)
// Prints "It's not that cold. Wear a T-shirt."
```

在此 if 表达式版本中，每个分支包含一个值。如果某个分支的条件为 true，则该分支的值将用作 weatherAdvice 赋值中整个 if 表达式的值。每个 if 分支都有一个相应的 else if 分支或 else 分支，确保其中一个分支始终匹配，并且 if 表达式始终生成一个值，无论哪些条件为真。

由于赋值语法在 if 表达式之外开始，因此无需在每个分支内重复 `weatherAdvice =` 。相反， if 表达式的每个分支都会生成 weatherAdvice 的三个可能值之一，并且赋值会使用该值。

if 表达式的所有分支都需要包含相同类型的值。由于 Swift 分别检查每个分支的类型，因此像 nil 这样可与多种类型一起使用的值会阻止 Swift 自动确定 if 表达式的类型。相反，您需要显式指定类型 - 例如：

```swift
let freezeWarning: String? = if temperatureInCelsius <= 0 {
"It's below freezing. Watch for ice!"
} else {
nil
}
```

在上面的代码中， if 表达式的一个分支具有字符串值，另一分支具有 nil 值。 nil 值可以用作任何可选类型的值，因此您必须显式编写 freeze Warning 是可选字符串，如类型注释中所述。

提供此类型信息的另一种方法是为 nil 提供显式类型，而不是为 freezeWarning 提供显式类型：

```swift
let freezeWarning = if temperatureInCelsius <= 0 {
"It's below freezing. Watch for ice!"
} else {
nil as String?
}
```

if 表达式可以通过抛出错误或调用诸如 `fatalError(_: file: line:)` 这样永不返回的函数来响应意外失败。例如：

```swift
let weatherAdvice = if temperatureInCelsius > 100 {
throw TemperatureError.boiling
} else {
"It's a reasonable temperature."
}
```

在此示例中， if 表达式检查预测温度是否高于 100° C（水的沸点）。如此高的温度会导致 if 表达式抛出。boiling 错误，而不是返回文本摘要。尽管这个 if 表达式可能会引发错误，但您不要在它之前编写 try 。有关处理错误的信息，请参阅错误处理。

除了在赋值的右侧使用 if 表达式（如上面的示例所示）之外，您还可以将它们用作函数或闭包的返回值。

## switch

switch 语句考虑一个值并将其与几种可能的匹配模式进行比较。然后，它根据第一个成功匹配的模式执行适当的代码块。 switch 语句提供了 if 语句的替代方案，用于响应多个潜在状态。

switch 语句最简单的形式是将一个值与一个或多个相同类型的值进行比较。

```swift
switch <#some value to consider#> {
case <#value 1#>:
<#respond to value 1#>
case <#value 2#>,
<#value 3#>:
<#respond to value 2 or 3#>
default:
<#otherwise, do something else#>
}
```

每个 switch 语句都由多个可能的 case 组成，每个 case 都以 case 关键字开头。除了与特定值进行比较之外，Swift 还为每种情况提供了多种方法来指定更复杂的匹配模式。这些选项将在本章后面描述。

与 if 语句的主体一样，每个 case 都是代码执行的一个单独分支。 switch 语句决定应选择哪个分支。此过程称为打开正在考虑的值。

每个 switch 语句都必须是详尽的。也就是说，所考虑的类型的每个可能值都必须与其中一个 switch case 相匹配。如果不适合为每个可能的值提供一个案例，您可以定义一个默认案例来覆盖任何未明确解决的值。此默认情况由 `default` 关键字指示，并且必须始终出现在最后。

此示例使用 switch 语句来考虑称为 someCharacter 单个小写字符：

```swift
let someCharacter: Character = "z"
switch someCharacter {
case "a":
print("The first letter of the Latin alphabet")
case "z":
print("The last letter of the Latin alphabet")
default:
print("Some other character")
}
// Prints "The last letter of the Latin alphabet"
```

switch 语句的第一个 case 匹配英文字母表的第一个字母 a ，第二个 case 匹配最后一个字母 z 。由于 switch 必须为每个可能的字符（而不仅仅是每个字母字符）指定大小写，因此此 switch 语句使用 default 大小写来匹配除 a 和 z 之外的所有字符。此规定确保 switch 语句是详尽的。

与 if 语句一样， switch 语句也有表达式形式：

```swift
let anotherCharacter: Character = "a"
let message = switch anotherCharacter {
case "a":
"The first letter of the Latin alphabet"
case "z":
"The last letter of the Latin alphabet"
default:
"Some other character"
}

print(message)
// Prints "The first letter of the Latin alphabet"
```

在此示例中， switch 表达式中的每个 case 都包含当该 case 与 anotherCharacter 匹配时要使用的 message 值。因为 switch 总是详尽的，所以总是有一个值要分配。

与 if 表达式一样，您可以抛出错误或调用诸如 `fatalError(_: file: line:)` 之类的函数，该函数永远不会返回，而不是为给定情况提供值。您可以在赋值的右侧使用 switch 表达式（如上例所示），并将其用作函数或闭包的返回值。

### 无隐式失败

与 C 和 Objective-C 中的 switch 语句相比，Swift 中的 switch 语句默认不会落入每种情况的底部并进入下一种情况。相反，一旦第一个匹配的 switch case 完成，整个 switch 语句就会完成执行，而不需要显式的 break 语句。这使得 switch 语句比 C 中的 switch 语句更安全、更容易使用，并避免错误地执行多个 switch case。

> 笔记
>
> 尽管 Swift 中不需要 break ，但您可以使用 break 语句来匹配并忽略特定的情况，或者在匹配的情况完成执行之前打破该情况。有关详细信息，请参阅 Switch 语句中的 Break 。

每个 case 的主体必须至少包含一个可执行语句。编写以下代码是无效的，因为第一个 case 是空的：

```swift
let anotherCharacter: Character = "a"
switch anotherCharacter {
case "a": // Invalid, the case has an empty body
case "A":
print("The letter A")
default:
print("Not the letter A")
}
// This will report a compile-time error.
```

与 C 中的 switch 语句不同，此 switch 语句不匹配"a"和"A" 。相反，它会报告 case "a": 不包含任何可执行语句的编译时错误。这种方法可以避免从一种情况意外转移到另一种情况，并使代码更安全、意图更清晰。

要使用与"a"和"A"匹配的单个大小写进行 switch ，请将两个值组合成一个复合大小写，并用逗号分隔这些值。

```swift
let anotherCharacter: Character = "a"
switch anotherCharacter {
case "a", "A":
print("The letter A")
default:
print("Not the letter A")
}
// Prints "The letter A"
```

为了便于阅读，复合案例也可以写成多行。有关复合案例的更多信息，请参阅复合案例。

> 笔记
>
> 要在特定 switch case 结束时显式失败，请使用 fallthrough 关键字，如 Fallthrough 中所述。

### 区间匹配

可以检查 switch case 中的值是否包含在某个区间中。此示例使用数字间隔为任意大小的数字提供自然语言计数：

```swift
let approximateCount = 62
let countedThings = "moons orbiting Saturn"
let naturalCount: String
switch approximateCount {
case 0:
naturalCount = "no"
case 1..<5:
naturalCount = "a few"
case 5..<12:
naturalCount = "several"
case 12..<100:
naturalCount = "dozens of"
case 100..<1000:
naturalCount = "hundreds of"
default:
naturalCount = "many"
}
print("There are \(naturalCount) \(countedThings).")
// Prints "There are dozens of moons orbiting Saturn."
```

在上面的示例中，在 switch 语句中计算 approximateCount 。每种 case 都会将该值与数字或区间进行比较。由于 approximateCount 在 12 到 100 之间，因此 natural Count 被赋值为"dozens of" ，并将执行转移到 switch 语句之外。

### 元组

您可以使用元组来测试同一 switch 语句中的多个值。可以针对不同的值或值区间来测试元组的每个元素。或者，使用下划线字符 ( `_` )（也称为通配符模式）来匹配任何可能的值。

下面的示例采用 (x, y) 点，表示为 (Int, Int) 类型的简单元组，并将其在示例后面的图表上进行分类。

```swift
let somePoint = (1, 1)
switch somePoint {
case (0, 0):
print("\(somePoint) is at the origin")
case (_, 0):
print("\(somePoint) is on the x-axis")
case (0, _):
print("\(somePoint) is on the y-axis")
case (-2...2, -2...2):
print("\(somePoint) is inside the box")
default:
print("\(somePoint) is outside of the box")
}
// Prints "(1, 1) is inside the box"
```

switch 语句确定该点是位于原点 (0, 0)、红色 x 轴、绿色 y 轴、以原点为中心的蓝色 4×4 框内还是框外。

与 C 不同，Swift 允许多个 switch case 考虑相同的值或多个值。事实上，点 (0, 0) 可以匹配本例中的所有四种情况。但是，如果可以进行多个匹配，则始终使用第一个匹配情况。点 (0, 0) 将首先匹配 case (0, 0) ，因此所有其他匹配情况将被忽略。

### 值绑定

switch case 可以命名与临时常量或变量匹配的一个或多个值，以便在 case 主体中使用。这种行为称为值绑定，因为值绑定到案例主体内的临时常量或变量。

下面的示例采用 (x, y) 点，表示为 (Int, Int) 类型的元组，并将其在下面的图表中进行分类：

```swift
let anotherPoint = (2, 0)
switch anotherPoint {
case (let x, 0):
print("on the x-axis with an x value of \(x)")
case (0, let y):
print("on the y-axis with a y value of \(y)")
case let (x, y):
print("somewhere else at (\(x), \(y))")
}
// Prints "on the x-axis with an x value of 2"
```

switch 语句确定该点是在红色 x 轴上、绿色 y 轴上还是其他位置（不在两个轴上）。

三个 switch 情况声明占位符常量 x 和 y ，它们临时采用来自 anotherPoint 的一个或两个元组值。第一种情况 case (let x, 0) 匹配 y 值为 0 的任何点，并将该点的 x 值分配给临时常量 x 。类似地，第二种情况 case (0, let y) 匹配 x 值为 0 的任何点，并将该点的 y 值分配给临时常量 y 。

声明临时常量后，可以在 case 的代码块中使用它们。在这里，它们用于打印点的分类。

此 switch 语句没有 default 情况。最后一种情况 case let (x, y) 声明一个由两个可以匹配任何值的占位符常量组成的元组。因为 anotherPoint 始终是两个值的元组，所以这种情况匹配所有可能的剩余值，并且不需要 default 情况来使 switch 语句详尽无遗。

### where

switch case 可以使用 where 子句来检查附加条件。

下面的示例对下图上的 (x, y) 点进行分类：

```swift
let yetAnotherPoint = (1, -1)
switch yetAnotherPoint {
case let (x, y) where x == y:
print("(\(x), \(y)) is on the line x == y")
case let (x, y) where x == -y:
print("(\(x), \(y)) is on the line x == -y")
case let (x, y):
print("(\(x), \(y)) is just some arbitrary point")
}
// Prints "(1, -1) is on the line x == -y"
```

switch 语句确定该点是否位于绿色对角线上（其中 x == y ）、紫色对角线上（其中 x == -y） ，或者两者都不是。

三个 switch 情况声明占位符常量 x 和 y ，它们临时采用来自 yetAnotherPoint 的两个元组值。这些常量用作 where 子句的一部分，以创建动态过滤器。仅当 where 子句的条件对于该值计算为 true 时， switch case 才匹配 point 的当前值。

与前面的示例一样，最终情况与所有可能的剩余值相匹配，因此不需要 default 情况即可使 switch 语句详尽无遗。

### 复合箱

共享同一主体的多个 switch case 可以通过在 case 后编写多个模式来组合，每个模式之间用逗号分隔。如果任何模式匹配，则认为大小写匹配。如果列表很长，则可以将模式写在多行上。例如：

```swift
let someCharacter: Character = "e"
switch someCharacter {
case "a", "e", "i", "o", "u":
print("\(someCharacter) is a vowel")
case "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
"n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z":
print("\(someCharacter) is a consonant")
default:
print("\(someCharacter) isn't a vowel or a consonant")
}
// Prints "e is a vowel"
```

switch 语句的第一个 case 与英语中的所有五个小写元音匹配。同样，它的第二种情况匹配所有小写英文辅音。最后， default 大小写与任何其他字符匹配。

复合案例还可以包括值绑定。复合案例的所有模式必须包含同一组值绑定，并且每个绑定必须从复合案例中的所有模式获取相同类型的值。这确保了无论复合 case 的哪一部分匹配，case 主体中的代码始终可以访问绑定的值，并且该值始终具有相同的类型。

```swift
let stillAnotherPoint = (9, 0)
switch stillAnotherPoint {
case (let distance, 0), (0, let distance):
print("On an axis, \(distance) from the origin")
default:
print("Not on an axis")
}
// Prints "On an axis, 9 from the origin"
```

上面的 case 有两种模式： (let distance, 0) 匹配 x 轴上的点， (0, let distance) 匹配 y 轴上的点。两种模式都包含 distance 的绑定，并且 distance 在两种模式中都是整数 — 这意味着 case 主体中的代码始终可以访问 distance 的值。

## 控制权转移报表

控制转移语句通过将控制从一段代码转移到另一段代码来更改代码的执行顺序。 Swift 有五个控制传输语句：

continue

break

fallthrough

return

throw

continue 、 break 和 fallthrough 语句如下所述。 return 语句在函数中进行了描述，而 throw 语句在使用抛出函数传播错误中进行了描述。

### Continue

continue 语句告诉循环停止正在执行的操作，并在循环的下一次迭代开始时重新开始。它表示“我已完成当前循环迭代”，而没有完全离开循环。

以下示例从小写字符串中删除所有元音和空格以创建一个神秘的拼图短语：

```swift
let puzzleInput = "great minds think alike"
var puzzleOutput = ""
let charactersToRemove: [Character] = ["a", "e", "i", "o", "u", " "]
for character in puzzleInput {
if charactersToRemove.contains(character) {
continue
}
puzzleOutput.append(character)
}
print(puzzleOutput)
// Prints "grtmndsthnklk"
```

上面的代码每当匹配元音或空格时都会调用 continue 关键字，导致循环的当前迭代立即结束并直接跳转到下一次迭代的开始。

### break

break 语句立即结束整个控制流语句的执行。当您想要比其他情况更早终止 switch 或循环语句的执行时，可以在 switch 或循环语句内使用 break 语句。

#### 循环语句中的中断

当在循环语句中使用时， break 立即结束循环的执行，并将控制权转移到循环右大括号 ( `}` ) 之后的代码。不再执行循环当前迭代中的更多代码，也不再启动循环的进一步迭代。

#### Switch 语句中的中断

当在 switch 语句中使用时， break 会导致 switch 语句立即结束其执行，并将控制权转移到 switch 语句右大括号 ( `}` ) 之后的代码。

此行为可用于匹配和忽略 switch 语句中的一个或多个情况。由于 Swift 的 switch 语句非常详尽并且不允许空 case，因此有时需要故意匹配并忽略 case 以使您的意图明确。您可以通过将 break 语句编写为要忽略的案例的整个主体来完成此操作。当该 case 与 switch 语句匹配时，case 内的 break 语句会立即结束 switch 语句的执行。

> 笔记
>
> 仅包含注释的 switch case 将报告为编译时错误。注释不是语句，不会导致 switch case 被忽略。始终使用 break 语句来忽略 switch case。

以下示例打开 Character 值并确定它是否表示四种语言之一的数字符号。为简洁起见，单个 switch case 中涵盖了多个值。

```swift
let numberSymbol: Character = "三" // Chinese symbol for the number 3
var possibleIntegerValue: Int?
switch numberSymbol {
case "1", "١", "一", "๑":
possibleIntegerValue = 1
case "2", "٢", "二", "๒":
possibleIntegerValue = 2
case "3", "٣", "三", "๓":
possibleIntegerValue = 3
case "4", "٤", "四", "๔":
possibleIntegerValue = 4
default:
break
}
if let integerValue = possibleIntegerValue {
print("The integer value of \(numberSymbol) is \(integerValue).")
} else {
print("An integer value couldn't be found for \(numberSymbol).")
}
// Prints "The integer value of 三 is 3."
```

此示例检查 numberSymbol 以确定它是否是数字 1 到 4 拉丁文、阿拉伯文、中文或泰文符号。如果找到匹配项， switch 语句的情况之一会设置一个可选的 Int? 称为 possibleIntegerValue 变量为适当的整数值。

switch 语句完成执行后，该示例使用可选绑定来确定是否找到值。由于是可选类型 possibleIntegerValue 变量具有隐式初始值 nil ，因此仅当 possibleIntegerValue 通过 switch 语句的前四种情况之一设置为实际值时，可选绑定才会成功。

由于在上面的示例中列出所有可能的 Character 值是不切实际的，因此 default 情况会处理任何不匹配的字符。这个 default 情况不需要执行任何操作，因此它是用单个 break 语句作为其主体编写的。一旦 default case 匹配， break 语句就会结束 switch 语句的执行，代码将从 if let 语句继续执行。

### Fallthrough

在 Swift 中， switch 语句不会从每个 case 的底部落入下一个 case。也就是说，当第一个匹配的 case 完成后，整个 switch 语句就完成执行。相比之下，C 要求您在每个 switch case 的末尾插入显式的 break 语句以防止失败。避免默认失败意味着 Swift switch 语句比 C 中的对应语句更加简洁和可预测，因此它们可以避免错误地执行多个 switch 情况。

如果您需要 C 风格的 fallthrough 行为，您可以使用 fallthrough 关键字根据具体情况选择加入此行为。下面的示例使用 fallthrough 来创建数字的文本描述。

```swift
let integerToDescribe = 5
var description = "The number \(integerToDescribe) is"
switch integerToDescribe {
case 2, 3, 5, 7, 11, 13, 17, 19:
description += " a prime number, and also"
fallthrough
default:
description += " an integer."
}
print(description)
// Prints "The number 5 is a prime number, and also an integer."
```

此示例声明一个名为 description 的新 String 变量，并为其分配一个初始值。然后，该函数使用 switch 语句考虑 integerToDescribe 的值。如果 integerToDescribe 的值是列表中的质数之一，则该函数会将文本附加到 description 的末尾，以表明该数字是质数。然后它也使用 fallthrough 关键字“落入” default 情况。 default 情况下会在描述末尾添加一些额外的文本，这样 switch 语句就完成了。

除非 integerToDescribe 数值在已知素数列表中，否则它根本与第一个 switch case 不匹配。由于没有其他特定情况， integerToDescribe 将与 default 情况匹配。

switch 语句执行完毕后，使用以下命令打印数字的描述 `print(_:separator:terminator:)` 功能。在此示例中，数字 5 被正确识别为素数。

> 笔记
>
> fallthrough 关键字不会检查导致执行陷入的 switch case 的 case 条件。 fallthrough 关键字只会导致代码执行直接移至下一个 case（或 default case）块内的语句，就像 C 的标准 switch 语句行为一样。

## Label 语句

在 Swift 中，您可以将循环和条件语句嵌套在其他循环和条件语句中，以创建复杂的控制流结构。然而，循环和条件语句都可以使用 break 语句来提前结束它们的执行。因此，有时明确您希望 break 语句终止哪个循环或条件语句是很有用的。同样，如果有多个嵌套循环，则明确 continue 语句应影响哪个循环会很有用。

为了实现这些目标，您可以使用语句标签来标记循环语句或条件语句。对于条件语句，可以将语句标签与 break 语句一起使用来结束带标签的语句的执行。对于循环语句，可以将语句标签与 break 或 continue 语句一起使用来结束或继续执行带标签的语句。

带标签的语句通过将标签放置在与语句的介绍者关键字相同的行上并后跟冒号来表示。以下是 while 循环的语法示例，尽管所有循环和 switch 语句的原理都是相同的：

```swift
<#label name#>: while <#condition#> {
<#statements#>
}
```

以下示例使用带有标记的 while 循环的 break 和 continue 语句来实现您在本章前面看到的蛇梯游戏的改编版本。这一次，游戏多了一条规则：

要获胜，您必须准确落在 25 格上。

如果一次掷骰子会使您超出方格 25，您必须再次掷骰子，直到掷出落在方格 25 所需的确切数字。

游戏板与之前相同。

final Square 、 board 、 square 和 dice Roll 的值以与之前相同的方式初始化：

```swift
let finalSquare = 25
var board = [Int](repeating: 0, count: finalSquare + 1)
board[03] = +08; board[06] = +11; board[09] = +09; board[10] = +02
board[14] = -10; board[19] = -11; board[22] = -02; board[24] = -08
var square = 0
var diceRoll = 0
```

此版本的游戏使用 while 循环和 switch 语句来实现游戏的逻辑。 while 循环有一个名为 gameLoop 的语句标签，表明它是蛇梯游戏的主游戏循环。

while 循环的条件是 while square != finalSquare ，以反映您必须恰好落在方格 25 上。

```swift
gameLoop: while square != finalSquare {
diceRoll += 1
if diceRoll == 7 { diceRoll = 1 }
switch square + diceRoll {
case finalSquare:
// diceRoll will move us to the final square, so the game is over
break gameLoop
case let newSquare where newSquare > finalSquare:
// diceRoll will move us beyond the final square, so roll again
continue gameLoop
default:
// this is a valid move, so find out its effect
square += diceRoll
square += board[square]
}
print("Game over!")
```

在每个循环开始时掷骰子。该循环不是立即移动玩家，而是使用 switch 语句来考虑移动的结果并确定是否允许移动：

如果掷骰子将玩家移动到最后一个方格，则游戏结束。 `break gameLoop` 语句将控制转移到 while 循环之外的第一行代码，从而结束游戏。

如果掷骰子将玩家移出最终方格，则该移动无效，玩家需要再次掷骰子。 `continue gameLoop` 语句结束当前的 while 循环迭代并开始循环的下一次迭代。

在所有其他情况下，掷骰子都是有效的移动。玩家通过 diceRoll 方块向前移动，游戏逻辑检查是否有任何蛇和梯子。然后循环结束，控制返回到 while 条件以决定是否需要另一轮。

笔记

如果上面的 break 语句没有使用 game Loop 标签，它将跳出 switch 语句，而不是 while 语句。使用 game Loop 标签可以明确哪个控制语句应该终止。

当调用 continue gameLoop 跳转到循环的下一个迭代时，并不严格需要使用 gameLoop 标签。游戏中只有一个循环，因此 continue 语句将影响哪个循环是没有歧义的。然而，将 gameLoop 标签与 continue 语句一起使用并没有什么坏处。这样做与标签与 break 语句一起使用是一致的，并且有助于使游戏的逻辑更清晰地阅读和理解。

## 提前退出

guard 语句与 if 语句类似，根据表达式的布尔值执行语句。您使用 guard 语句来要求条件必须为真，以便执行 guard 语句之后的代码。与 if 语句不同， guard 语句始终具有 else 子句 - 如果条件不成立，则执行 else 子句内的代码。

```swift
func greet(person: [String: String]) {
guard let name = person["name"] else {
return
}

    print("Hello \(name)!")

    guard let location = person["location"] else {
        print("I hope the weather is nice near you.")
        return
    }

    print("I hope the weather is nice in \(location).")

}

greet(person: ["name": "John"])
// Prints "Hello John!"
// Prints "I hope the weather is nice near you."
greet(person: ["name": "Jane", "location": "Cupertino"])
// Prints "Hello Jane!"
// Prints "I hope the weather is nice in Cupertino."
```

如果满足 guard 语句的条件，则代码在 guard 语句的右大括号之后继续执行。使用可选绑定作为条件一部分进行赋值的任何变量或常量都可用于 guard 语句所在的代码块的其余部分。

如果不满足该条件，则执行 else 分支内的代码。该分支必须转移控制权才能退出出现 guard 语句的代码块。它可以使用控制传输语句（例如 return 、 break 、 continue 或 throw ）来执行此操作，也可以调用不返回的函数或方法，例如 `fatal Error(_: file: line:)` 。

与使用 if 语句进行相同的检查相比，对需求使用 guard 语句可以提高代码的可读性。它允许您编写通常执行的代码，而无需将其包装在 else 块中，并且它允许您将处理违反的需求的代码保留在需求旁边。

## defer

与 if 和 while 等控制流结构不同，控制流结构可让您控制是否执行部分代码或执行多少次，而在执行一段代码时 defer 控制。您可以使用 defer 块来编写稍后在程序到达当前作用域末尾时执行的代码。例如：

```swift
var score = 1
if score < 10 {
defer {
print(score)
}
score += 5
}
// Prints "6"
```

在上面的示例中， defer 块内的代码在退出 if 语句主体之前执行。首先，运行 if 语句中的代码，这会将 score 增加 5。然后，在退出 if 语句的作用域之前，运行延迟代码，打印 score 。

无论程序如何退出该作用域，延迟内部的 defer 始终运行。其中包括提前退出函数、跳出 for 循环或抛出错误等代码。此行为使得 defer 对于需要保证一对操作发生的操作（例如手动分配和释放内存、打开和关闭低级文件描述符以及开始和结束数据库中的事务）非常有用，因为您接下来可以编写这两个操作在你的代码中互相传递。例如，以下代码通过在代码块内加和减 100 来临时奖励分数：

```swift
var score = 3
if score < 100 {
score += 100
defer {
score -= 100
}
// Other code that uses the score with its bonus goes here.
print(score)
}
// Prints "103"
```

如果您在同一范围内编写多个 defer 块，则您指定的第一个延迟块将是最后一个运行的延迟块。

```swift
if score < 10 {
defer {
print(score)
}
defer {
print("The score is:")
}
score += 5
}
// Prints "The score is:"
// Prints "6"
```

如果您的程序停止运行（例如，由于运行时错误或崩溃），则延迟代码不会执行。然而，延迟代码确实会在抛出错误后执行；有关使用 defer 进行错误处理的信息，请参阅指定清理操作。

## 检查 API 可用性

Swift 内置了对检查 API 可用性的支持，这可确保您不会意外使用在给定部署目标上不可用的 API。

编译器使用 SDK 中的可用性信息来验证代码中使用的所有 API 在项目指定的部署目标上是否可用。如果您尝试使用不可用的 API，Swift 会在编译时报告错误。

您可以在 if 或 guard 语句中使用可用性条件来有条件地执行代码块，具体取决于您要使用的 API 在运行时是否可用。当编译器验证该代码块中的 API 是否可用时，编译器会使用可用性条件中的信息。

```swift
if #available(iOS 10, macOS 10.12, *) {
// Use iOS 10 APIs on iOS, and use macOS 10.12 APIs on macOS
} else {
// Fall back to earlier iOS and macOS APIs
}
```

上面的可用性条件指定在 iOS 中， if 语句的主体仅在 iOS 10 及更高版本中执行；在 macOS 中，仅在 macOS 10.12 及更高版本中。最后一个参数、\*是必需的，它指定在任何其他平台上， if 的主体在您的目标指定的最小部署目标上执行。

在其一般形式中，可用性条件采用平台名称和版本的列表。您可以使用 i OS 、 mac OS 、 watch OS 、 tv OS 和 vision OS 等平台名称 — 有关完整列表，请参阅声明属性。除了指定主要版本号（如 iOS 8 或 macOS 10.10）之外，您还可以指定次要版本号（如 iOS 11.2.6 和 macOS 10.13.3）。

```swift
if #available(<#platform name#> <#version#>, <#...#>, \*) {
<#statements to execute if the APIs are available#>
} else {
<#fallback statements to execute if the APIs are unavailable#>
}
```

当您将可用性条件与 guard 语句一起使用时，它会细化用于该代码块中其余代码的可用性信息。

```swift
@available(macOS 10.12, \*)
struct ColorPreference {
var bestColor = "blue"
}

func chooseBestColor() -> String {
guard #available(macOS 10.12, \*) else {
return "gray"
}
let colors = ColorPreference()
return colors.bestColor
}
```

在上面的示例中， ColorPreference 结构需要 macOS 10.12 或更高版本。 `chooseBestColor()` 函数以可用性保护开始。如果平台版本太旧而无法使用 ColorPreference ，它将回退到始终可用的行为。在 guard 语句之后，您可以使用需要 macOS 10.12 或更高版本的 API。

除了 `#available` 之外，Swift 还支持使用不可用性条件进行相反的检查。例如，以下两个检查执行相同的操作：

```swift
if #available(iOS 10, \*) {
} else {
// Fallback code
}

if #unavailable(iOS 10) {
// Fallback code
}
```

当检查仅包含后备代码时，使用 `#unavailable` 形式有助于使代码更具可读性。
