# Swift 之旅

> 探索 Swift 的功能和语法。

一般来说，学习新的编程语言的第一个程序都是在屏幕上打印“Hello, world!”这样一段文本。在 Swift 中，可以通过这样一行代码完成：

```swift
print("Hello, world!")
// Prints "Hello, world!"
```

如果您了解其他的编程语言，这种语法应该看起来很熟悉——在 Swift 中，这一行代码便是一个完整的程序。您不需要导入单独的库来实现输出文本或处理字符串等功能。在全局范围内编写的代码会被用作程序的入口，因此并不需要 `main()` 函数。也不需要在每个语句的末尾编写分号。

本教程向您提供足够的信息来展示如何使用 Swift 编写代码以完成各种编程任务。如果您对于所述内容有不理解的地方，不要担心——本次教程中介绍的所有内容都会在本书的其余部分中详细解释。

## 简单值

使用 `let` 创建常量， `var` 创建变量。常量的值不需要在编译时明确，但必须为其指定一次值。这意味着您可以使用常量来命名那些只会定义一次但会在频繁使用的值。

```swift
var myVariable = 42
myVariable = 50
let myConstant = 42
```

常量或变量必须具有与要分配给它的值相同的类型。但这并不是说需要显式地指定其类型。创建常量或变量时提供的值可以让编译器推断其类型。在上面的例子中，编译器推断 `myVariable` 是一个整数，因为它的初始值是一个整数。

If the initial value doesn’t provide enough information (or if there isn’t an initial value), specify the type by writing it after the variable, separated by a colon.

如果初始值没有提供足够的信息（或者没有初始值），则可以通过在变量后用冒号分隔然后指定类型。

```swift
let implicitInteger = 70
let implicitDouble = 70.0
let explicitDouble: Double = 70
```

> [!NOTE]
> 实验
>
> 创建一个显式类型为 Float 且值为 4 的常量。

值永远不会隐式转换为另一种类型。如果需要将值转换为不同类型，请显式创建所需类型的实例。

```swift
let label = "The width is "
let width = 94
let widthLabel = label + String(width)
```

> [!NOTE]
> 实验
>
> 尝试删除最后一行进行的 `String` 类型转换。你得到什么错误？

还有一种更简单的方法可以在字符串中包含值：将值写入括号中，并在括号前写入反斜杠 ( `\` )。例如：

```swift
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples."
let fruitSummary = "I have \(apples + oranges) pieces of fruit."
```

> [!NOTE]
> 实验
>
> 使用`\()` 在字符串中包含浮点运算，并在问候语中包含某人的名字。

对于占用多行的字符串，请使用三个双引号 ( `"""` )。只要与右引号的缩进相匹配，每个带引号的行开头的缩进就会被删除。例如：

```swift
let quotation = """
Even though there's whitespace to the left,
the actual lines aren't indented.
Except for this line.
Double quotes (") can appear without being escaped.

        I still have \(apples + oranges) pieces of fruit.
        """
```

使用方括号 ( [] ) 创建数组和字典，并通过在方括号中写入索引或键来访问其元素。最后一个元素后面允许有逗号。

```swift
var fruits = ["strawberries", "limes", "tangerines"]
fruits[1] = "grapes"

var occupations = [
"Malcolm": "Captain",
"Kaylee": "Mechanic",
]
occupations["Jayne"] = "Public Relations"
```

当您添加元素时，数组会自动增长。

```swift
fruits.append("blueberries")
print(fruits)
// Prints "["strawberries", "grapes", "tangerines", "blueberries"]"
```

您还可以使用方括号来写入空数组或字典。对于数组，使用 `[]` ，对于字典，使用 `[:]` 。

```swift
fruits = []
occupations = [:]
```

如果要将空数组或字典分配给新变量，或其他没有任何类型信息的位置，则需要指定类型。

```swift
let emptyArray: [String] = []
let emptyDictionary: [String: Float] = [:]
```

## Control Flow 控制流

使用 `if` 和 `switch` 来创建条件，并使用 `for-in` 、 `while` 和 `repeat-while` 来创建循环。条件或循环变量周围的括号是可选的，而语句块周围的大括号是必须要有的。

```swift
let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}
print(teamScore)
// Prints "11"
```

在 if 语句中，条件必须是布尔表达式——这意味着 `if score { ... }`之类的代码是错误的，而不是与零的隐式比较。

您可以在赋值等号 ( = ) 或 return 后编写 if 或 switch ，以根据条件选择一个值。

```swift
let scoreDecoration = if teamScore > 10 {
    "🎉"
} else {
    ""
}
print("Score:", teamScore, scoreDecoration)
// Prints "Score: 11 🎉"
```

您可以结合使用 if 和 let 来处理可能丢失的值。这些值表示为可选值。可选值要么包含一个值，要么包含 nil 以指示缺少值。在值的类型后面写一个问号 ( ? ) 以将该值标记为可选。

```swift
var optionalString: String? = "Hello"
print(optionalString == nil)
// Prints "false"


var optionalName: String? = "John Appleseed"
var greeting = "Hello!"
if let name = optionalName {
    greeting = "Hello, \(name)"
}
```

> 实验
>
> 将 `optionalName` 更改为 nil 。你收到什么`greeting`？添加一个 else 子句，用于处理 optional Name 为 nil 时，设置不同的问候语。

如果可选值为 nil ，则条件为 false ，并且会跳过大括号中的代码。否则，可选值将被展开并分配给 let 之后的常量，这使得展开的值在代码块内可用。

处理可选值的另一种方法是使用`??`提供默认值。如果可选值缺失，则使用默认值。

```swift
let nickname: String? = nil
let fullName: String = "John Appleseed"
let informalGreeting = "Hi \(nickname ?? fullName)"
```

您可以使用更短的拼写来解包值，并为该解包的值使用相同的名称。

```swift
if let nickname {
    print("Hey, \(nickname)")
}
// 不会打印，因为 nickname 是 nil。
```

Switch 支持任何类型的数据和各种比较操作——不限于整数和相等测试。

```swift
let vegetable = "red pepper"
switch vegetable {
case "celery":
    print("Add some raisins and make ants on a log.")
case "cucumber", "watercress":
    print("That would make a good tea sandwich.")
case let x where x.hasSuffix("pepper"):
    print("Is it a spicy \(x)?")
default:
    print("Everything tastes good in soup.")
}
// 打印 "Is it a spicy red pepper?"
```

> 实验
>
> 尝试删除 default。你得到什么错误？

请注意如何在模式中使用 let 将与模式匹配的值分配给常量。

执行完匹配的 case 内的代码后，程序从 switch 语句退出。执行不会继续到下一个 case，因此不需要在每个 case 代码末尾显式地跳出开关。

您可以通过提供一对用于每个键值对的名称来使用 `for-in` 迭代字典中的项目。字典是一个无序集合，因此它们的键和值以任意顺序迭代。

```swift
let interestingNumbers = [
    "Prime": [2, 3, 5, 7, 11, 13],
    "Fibonacci": [1, 1, 2, 3, 5, 8],
    "Square": [1, 4, 9, 16, 25],
]
var largest = 0
for (_, numbers) in interestingNumbers {
    for number in numbers {
        if number > largest {
            largest = number
        }
    }
}
print(largest)
// 打印 "25"
```

> 实验
>
> 将 `_` 替换为变量名，并跟踪哪个数字最大。

使用 while 重复一段代码，直到条件发生变化。循环的条件可以放在末尾，以确保循环至少运行一次。

```swift
var n = 2
while n < 100 {
    n *= 2
}
print(n)
// 打印 "128"


var m = 2
repeat {
    m *= 2
} while m < 100
print(m)
// 打印 "128"
```

> 实验
>
> 将条件从 `m < 100` 更改为 `m < 0` 以查看当循环条件已经为 false 时 `while` 和 `repeat-while` 行为有何不同。

您可以通过使用`..<`创建一系列索引来将索引保持在循环中。

```swift
var total = 0
for i in 0..<4 {
total += i
}
print(total)
// 打印 "6"
```

Use `..<` to make a range that omits its upper value, and use ... to make a range that includes both values.

使用`..<`创建一个省略其上限值的范围，并使用`...`创建一个包含两个值的范围。

## 函数和闭包

使用 `func` 来声明函数。通过在函数名称后面加上括号中的参数列表来调用函数。使用`->`将参数名称和类型与函数的返回类型分开。

```swift
func greet(person: String, day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet(person: "Bob", day: "Tuesday")
```

> 实验
>
> 删除 day 参数。添加一个参数以在问候语中包含今天的特价午餐。

默认情况下，函数使用其参数名称作为其参数的标签。在参数名称之前写入自定义参数标签，或写入`_`表示不使用参数标签。

```swift
func greet(_ person: String, on day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet("John", on: "Wednesday")
```

使用元组创建复合值——例如，从函数返回多个值。元组的元素可以通过名称或数字来引用。

```swift
func calculateStatistics(scores: [Int]) -> (min: Int, max: Int, sum: Int) {
var min = scores[0]
var max = scores[0]
var sum = 0

    for score in scores {
        if score > max {
            max = score
        } else if score < min {
            min = score
        }
        sum += score
    }

    return (min, max, sum)

}
let statistics = calculateStatistics(scores: [5, 3, 100, 3, 9])
print(statistics.sum)
// Prints "120"
print(statistics.2)
// Prints "120"
```

函数可以嵌套。嵌套函数可以访问在外部函数中声明的变量。您可以使用嵌套函数来组织较长或复杂的函数中的代码。

```swift
func returnFifteen() -> Int {
    var y = 10
    func add() {
        y += 5
    }
    add()
    return y
}
returnFifteen()
```

函数是第一等类型。这意味着一个函数可以返回另一个函数作为其值。

```swift
func makeIncrementer() -> ((Int) -> Int) {
    func addOne(number: Int) -> Int {
        return 1 + number
    }
    return addOne
}
var increment = makeIncrementer()
increment(7)
```

一个函数可以将另一个函数作为其参数之一。

```swift
func hasAnyMatches(list: [Int], condition: (Int) -> Bool) -> Bool {
    for item in list {
        if condition(item) {
            return true
        }
    }
    return false
}
func lessThanTen(number: Int) -> Bool {
    return number < 10
}
var numbers = [20, 19, 7, 12]
hasAnyMatches(list: numbers, condition: lessThanTen)
```

函数实际上是闭包的一种特殊情况：可以稍后调用的代码块。闭包中的代码可以访问创建闭包的作用域中可用的变量和函数等内容，即使闭包在执行时位于不同的作用域中——您已经看到了带有嵌套函数的示例。您可以通过用大括号 ( `{}` ) 括住代码来编写没有名称的闭包。使用 `in` 将参数和返回类型与主体分开。

```swift
numbers.map({ (number: Int) -> Int in
    let result = 3 * number
    return result
})
```

> 实验
>
> 重写闭包以对所有奇数返回零。

您有多种选择可以更简洁地编写闭包。当闭包的类型已知时（例如委托的回调），您可以省略其参数的类型、其返回类型或两者都省略。单语句闭包隐式返回其唯一语句的值。

```swift
let mappedNumbers = numbers.map({ number in 3 \* number })
print(mappedNumbers)
// Prints "[60, 57, 21, 36]"
```

您可以通过数字而不是名称来引用参数——这种方法在非常短的闭包中特别有用。作为函数最后一个参数传递的闭包可以立即出现在括号之后。当闭包是函数的唯一参数时，您可以完全省略括号。

```swift
let sortedNumbers = numbers.sorted { $0 > $1 }
print(sortedNumbers)
// Prints "[20, 19, 12, 7]"
```

## 对象和类

使用 `class` 后跟类名来创建类。类中的属性声明的编写方式与常量或变量声明相同，只不过它是在类的上下文中。同样，方法和函数声明的编写方式相同。

```swift
class Shape {
    var numberOfSides = 0
    func simpleDescription() -> String {
        return "A shape with \(numberOfSides) sides."
    }
}
```

> 实验
>
> 使用 let 添加一个常量属性，并添加另一个带有参数的方法。

通过在类名后面加上括号来创建类的实例。使用点语法访问实例的属性和方法。

```swift
var shape = Shape()
shape.numberOfSides = 7
var shapeDescription = shape.simpleDescription()
```

此版本的 Shape 类缺少一些重要内容：创建实例时用于设置该类的初始值设定项。使用 init 创建一个。

```swift
class NamedShape {
    var numberOfSides: Int = 0
    var name: String


    init(name: String) {
       self.name = name
    }


    func simpleDescription() -> String {
       return "A shape with \(numberOfSides) sides."
    }
}
```

请注意 `self` 如何用于区分 `name` 属性和初始化程序的 `name` 参数。当您创建类的实例时，初始化程序的参数像函数调用一样传递。每个属性都需要分配一个值——在其声明中（如 numberOfSides ）或在初始化程序中（如 name ）。

如果需要在释放对象之前执行一些清理操作，请使用 `deinit` 创建反初始化程序。

子类在类名后面包含超类名，并用冒号分隔。类不需要子类化任何标准根类，因此您可以根据需要包含或省略超类。

子类上重写超类实现的方法被标记为 `override`——意外地重写方法，而不是使用 `override` ，会被编译器检测为错误。编译器还会检测具有 `override` 方法，这些方法实际上不会重写超类中的任何方法。

```swift
class Square: NamedShape {
    var sideLength: Double


    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 4
    }


    func area() -> Double {
        return sideLength * sideLength
    }


    override func simpleDescription() -> String {
        return "A square with sides of length \(sideLength)."
    }
}
let test = Square(sideLength: 5.2, name: "my test square")
test.area()
test.simpleDescription()
```

> 实验
>
> 创建名为 `Circle` 的 `NamedShape` 的另一个子类，它采用半径和名称作为其初始值设定项的参数。在 `Circle` 类上实现一个 `area()`和一个 `simpleDescription()` 方法。

属性除了用于存储之外，还可以具有 getter 和 setter。

```swift
class EquilateralTriangle: NamedShape {
    var sideLength: Double = 0.0


    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 3
    }


    var perimeter: Double {
        get {
             return 3.0 * sideLength
        }
        set {
            sideLength = newValue / 3.0
        }
    }


    override func simpleDescription() -> String {
        return "An equilateral triangle with sides of length \(sideLength)."
    }
}
var triangle = EquilateralTriangle(sideLength: 3.1, name: "a triangle")
print(triangle.perimeter)
// Prints "9.3"
triangle.perimeter = 9.9
print(triangle.sideLength)
// Prints "3.3000000000000003"
```

在 perimeter 的 setter 中，新值具有隐式名称 `newValue` 。您可以在 set 之后的括号中提供显式名称。

请注意， `EquilateralTriangle` 类的初始化程序具有三个不同的步骤：

1. 设置子类声明的属性值。

2. 调用超类的初始化程序。

3. 更改超类定义的属性值。任何使用方法、getter 或 setter 进行的附加的设置工作也可以在此时完成。

如果您不需要计算属性，但仍需要提供在设置新值之前和之后运行的代码，请使用 `willSet` 和 `didSet` 。只要初始化程序外部的值发生更改，您提供的代码就会运行。例如，下面的类确保其三角形的边长始终与其正方形的边长相同。

```swift
class TriangleAndSquare {
    var triangle: EquilateralTriangle {
        willSet {
            square.sideLength = newValue.sideLength
        }
    }
    var square: Square {
        willSet {
            triangle.sideLength = newValue.sideLength
        }
    }
    init(size: Double, name: String) {
        square = Square(sideLength: size, name: name)
        triangle = EquilateralTriangle(sideLength: size, name: name)
    }
}
var triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
print(triangleAndSquare.square.sideLength)
// Prints "10.0"
print(triangleAndSquare.triangle.sideLength)
// Prints "10.0"
triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
print(triangleAndSquare.triangle.sideLength)
// Prints "50.0"
```

使用可选值时，您可以在方法、属性和下标等操作之前使用`?`。如果`?`之前的值是 nil ，之后的一切都会被忽略，整个表达式的值为 nil 。否则，可选值将被展开，并且`?`之后的所有内容都会被打开。作用于展开的值。在这两种情况下，整个表达式的值都是可选值。

```swift
let optionalSquare: Square? = Square(sideLength: 2.5, name: "optional square")
let sideLength = optionalSquare?.sideLength
```

## 枚举和结构

使用 `enum` 创建枚举。与类和所有其他命名类型一样，枚举可以具有与其关联的方法。

```swift
enum Rank: Int {
case ace = 1
case two, three, four, five, six, seven, eight, nine, ten
case jack, queen, king

    func simpleDescription() -> String {
        switch self {
        case .ace:
            return "ace"
        case .jack:
            return "jack"
        case .queen:
            return "queen"
        case .king:
            return "king"
        default:
            return String(self.rawValue)
        }
    }

}
let ace = Rank.ace
let aceRawValue = ace.rawValue
```

> 实验

> 编写一个函数，通过比较两个 Rank 值的原始值来比较它们。

默认情况下，Swift 分配的原始值从零开始，每次递增 1，但您可以通过显式指定值来更改此行为。在上面的示例中， Ace 被显式赋予原始值 1 ，其余原始值按顺序分配。您还可以使用字符串或浮点数作为枚举的原始类型。使用 `rawValue` 属性来访问枚举案例的原始值。

使用 `init?(rawValue:)` 初始化器从原始值创建枚举实例。它返回与原始值匹配的枚举情况，或者如果没有匹配的 Rank 则返回 nil 。

```swift
if let convertedRank = Rank(rawValue: 3) {
    let threeDescription = convertedRank.simpleDescription()
}
```

枚举的 case 值是实际值，而不仅仅是原始值的另一种书写方式。事实上，在没有有意义的原始值的情况下，您不必提供该值。

```swift
enum Suit {
case spades, hearts, diamonds, clubs

    func simpleDescription() -> String {
        switch self {
        case .spades:
            return "spades"
        case .hearts:
            return "hearts"
        case .diamonds:
            return "diamonds"
        case .clubs:
            return "clubs"
        }
    }

}
let hearts = Suit.hearts
let heartsDescription = hearts.simpleDescription()
```

> 实验
>
> 向 `Suit` 添加 `color()` 方法，该方法对于黑桃和梅花返回“黑色”，对于红桃和方块返回“红色”。

请注意上面引用枚举 hearts 的两种方式： 为 hearts 常量赋值时，枚举 `Suit.hearts` 通过其全名引用，因为该常量没有指定显式类型。在 switch 内部，枚举由缩写形式 `.hearts` 引用，因为 self 的值已知是一个 Suit。只要值的类型已知，您就可以使用缩写形式。

如果枚举具有原始值，则这些值将作为声明的一部分确定，这意味着特定枚举 case 的每个实例始终具有相同的原始值。枚举 case 的另一个选择是具有与案例 case 的值——这些值是在创建实例时确定的，并且对于枚举 case 的每个实例，它们可以不同。您可以将关联值的行为视为枚举 case 实例的存储属性。例如，考虑从服务器请求日出和日落时间的情况。服务器要么以请求的信息进行响应，要么以错误描述进行响应。

```swift
enum ServerResponse {
    case result(String, String)
    case failure(String)
}


let success = ServerResponse.result("6:00 am", "8:09 pm")
let failure = ServerResponse.failure("Out of cheese.")


switch success {
case let .result(sunrise, sunset):
    print("Sunrise is at \(sunrise) and sunset is at \(sunset).")
case let .failure(message):
    print("Failure...  \(message)")
}
// Prints "Sunrise is at 6:00 am and sunset is at 8:09 pm."
```

> 实验
>
> 将第三种情况添加到 Server Response 和 Switch。

请注意如何从 Server Response 值中提取日出和日落时间，作为将值与 Switch case 进行匹配的一部分。

使用 `struct` 创建结构体。结构体支持许多与类相同的行为，包括方法和初始值设定项。结构体和类之间最重要的区别之一是结构在代码中传递时总是被复制，但类是通过引用传递的。

```swift
struct Card {
    var rank: Rank
    var suit: Suit
    func simpleDescription() -> String {
        return "The \(rank.simpleDescription()) of \(suit.simpleDescription())"
    }
}
let threeOfSpades = Card(rank: .three, suit: .spades)
let threeOfSpadesDescription = threeOfSpades.simpleDescription()
```

> 实验
>
> 编写一个函数，返回一个包含整副牌的数组，其中每个牌号和花色的组合都有一张牌。

## 并发性

使用 `async` 来标记异步运行的函数。

```swift
func fetchUserID(from server: String) async -> Int {
    if server == "primary" {
        return 97
    }
    return 501
}
```

您可以通过在异步函数前面写入 await 来标记对异步函数的调用。

```swift
func fetchUsername(from server: String) async -> String {
    let userID = await fetchUserID(from: server) // [!code highlight]
    if userID == 501 {
        return "John Appleseed"
    }
    return "Guest"
}
```

使用 `async let` 调用异步函数，让它与其他异步代码并行运行。当需要使用它返回的值时，则使用 await 然后赋值给常量即可。

```swift
func connectUser(to server: String) async {
    async let userID = fetchUserID(from: server)
    async let username = fetchUsername(from: server)
    let greeting = await "Hello \(username), user ID \(userID)"
    print(greeting)
}

```

使用 `Task` 从同步代码调用异步函数，而无需等待它们返回。

```swift
Task {
    await connectUser(to: "primary")
}
// Prints "Hello Guest, user ID 97"
```

使用任务组来构建并发代码。

```swift
let userIDs = await withTaskGroup(of: Int.self) { group in
    for server in ["primary", "secondary", "development"] {
        group.addTask {
            return await fetchUserID(from: server)
        }
    }


    var results: [Int] = []
    for await result in group {
        results.append(result)
    }
    return results
}
```

`Actor` 与类类似，只不过它们确保不同的异步函数可以同时安全地与同一 `Actor` 的实例进行交互。

```swift
actor ServerConnection {
    var server: String = "primary"
    private var activeUsers: [Int] = []
    func connect() async -> Int {
        let userID = await fetchUserID(from: server)
        // ... communicate with server ...
        activeUsers.append(userID)
        return userID
    }
}
```

当您调用 `Actor` 上的方法或访问其属性之一时，您可以使用 `await` 标记该代码，以指示它可能必须等待 `Actor` 上已运行的其他代码完成。

```swift
let server = ServerConnection()
let userID = await server.connect()
```

## 协议和扩展

使用 `protocol` 来声明协议。

```swift
protocol ExampleProtocol {
     var simpleDescription: String { get }
     mutating func adjust()
}
```

类、枚举和结构体都可以适用协议。

```swift
class SimpleClass: ExampleProtocol {
     var simpleDescription: String = "A very simple class."
     var anotherProperty: Int = 69105
     func adjust() {
          simpleDescription += "  Now 100% adjusted."
     }
}
var a = SimpleClass()
a.adjust()
let aDescription = a.simpleDescription


struct SimpleStructure: ExampleProtocol {
     var simpleDescription: String = "A simple structure"
     mutating func adjust() {
          simpleDescription += " (adjusted)"
     }
}
var b = SimpleStructure()
b.adjust()
let bDescription = b.simpleDescription
```

> 实验
>
> 向 `ExampleProtocol` 添加另一个要求。您需要对 `SimpleClass` 和 `SimpleStructure` 进行哪些更改才能使它们仍然符合协议？

请注意在 `SimpleStructure` 声明中使用 `mutating` 关键字来标记修改结构体的方法。 `SimpleClass` 的声明不需要将其任何方法标记为 `mutating`，因为类上的方法始终可以修改该类。

使用 `extension` 向现有类型添加功能，例如新方法和计算属性。您可以使用扩展将协议一致性添加到在其他地方声明的类型，甚至是从库或框架导入的类型。

```swift
extension Int: ExampleProtocol {
    var simpleDescription: String {
        return "The number \(self)"
    }
    mutating func adjust() {
        self += 42
    }
 }
print(7.simpleDescription)
// Prints "The number 7"
```

> 实验
>
> 为 `Double` 类型编写一个扩展，添加 `absoluteValue` 属性。

您可以像任何其他命名类型一样使用协议名称——例如，创建具有不同类型但全部符合单个协议的对象的集合。当您使用封装协议类型值时，协议定义之外的方法将不可用。

```swift
let protocolValue: any ExampleProtocol = a
print(protocolValue.simpleDescription)
// Prints "A very simple class. Now 100% adjusted."
// print(protocolValue.anotherProperty) // Uncomment to see the error
```

即使变量 `protocolValue` 的运行时类型为 `SimpleClass` ，编译器也会将其视为给定类型的 `ExampleProtocol` 。这意味着您不会意外访问该类除了协议所定义之外还实现的方法或属性。

## 错误处理

您可以使用任何采用 `Error` 协议的类型来表示错误。

```swift
enum PrinterError: Error {
    case outOfPaper
    case noToner
    case onFire
}
```

使用 `throw` 抛出错误，并使用 `throws` 标记可以抛出错误的函数。如果在函数中引发错误，该函数将立即返回，并且调用该函数的代码将处理该错误。

```swift
func send(job: Int, toPrinter printerName: String) throws -> String {
    if printerName == "Never Has Toner" {
        throw PrinterError.noToner
    }
    return "Job sent"
}
```

有多种方法可以处理错误。一种方法是使用 `do-catch` 。在 `do` 块内，您可以通过在其前面编写 `try` 来标记可能引发错误的代码。在 `catch` 块内，错误会自动命名为 `error` 除非您为其指定不同的名称。

```swift
do {
    let printerResponse = try send(job: 1040, toPrinter: "Bi Sheng")
    print(printerResponse)
} catch {
    print(error)
}
// Prints "Job sent"
// Prints "Job sent"
```

> 实验
>
> Change the printer name to "Never Has Toner", so that the send(job:toPrinter:) function throws an error.
>
> 将打印器名称更改为"Never Has Toner" ，以便 `send(job: to Printer:)` 函数引发错误。

您可以提供多个处理特定错误的 `catch` 块。您可以在 `catch` 之后编写模式，就像在 switch 中的 `case` 之后编写模式一样。

```swift
do {
    let printerResponse = try send(job: 1440, toPrinter: "Gutenberg")
    print(printerResponse)
} catch PrinterError.onFire {
    print("I'll just put this over here, with the rest of the fire.")
} catch let printerError as PrinterError {
    print("Printer error: \(printerError).")
} catch {
    print(error)
}
// Prints "Job sent"
```

> 实验
>
> 添加代码以在 `do` 块内引发错误。您需要抛出什么类型的错误才能由第一个 `catch` 块处理该错误？那么第二块和第三块呢？

另一种处理错误的方法是使用 `try?` 将结果转换为可选值。如果函数抛出错误，则丢弃特定错误并且结果为 `nil` 。否则，结果是一个可选值，包含函数返回的值。

```swift
let printerSuccess = try? send(job: 1884, toPrinter: "Mergenthaler")
let printerFailure = try? send(job: 1885, toPrinter: "Never Has Toner")
```

使用 `defer` 编写一个代码块，该代码块在函数中的所有其他代码之后、函数返回之前执行。无论函数是否抛出错误，代码都会执行。您可以使用 `defer` 来相邻编写设置和清理代码，即使它们需要在不同时间执行。

```swift
var fridgeIsOpen = false
let fridgeContent = ["milk", "eggs", "leftovers"]

func fridgeContains(\_ food: String) -> Bool {
fridgeIsOpen = true
defer {
fridgeIsOpen = false
}

    let result = fridgeContent.contains(food)
    return result

}
if fridgeContains("banana") {
print("Found a banana")
}
print(fridgeIsOpen)
// Prints "false"
```

## 泛型

在尖括号内写入名称以创建通用函数或类型。

```swift
func makeArray<Item>(repeating item: Item, numberOfTimes: Int) -> [Item] {
    var result: [Item] = []
    for _ in 0..<numberOfTimes {
         result.append(item)
    }
    return result
}
makeArray(repeating: "knock", numberOfTimes: 4)
```

You can make generic forms of functions and methods, as well as classes, enumerations, and structures.

您可以创建函数和方法以及类、枚举和结构的泛型形式。

```swift
// Reimplement the Swift standard library's optional type
enum OptionalValue<Wrapped> {
    case none
    case some(Wrapped)
}
var possibleInteger: OptionalValue<Int> = .none
possibleInteger = .some(100)
```

在正文之前使用 `where` 来指定要求列表——例如，要求类型实现协议、要求两个类型相同，或者要求一个类具有特定的超类。

```swift
func anyCommonElements<T: Sequence, U: Sequence>(_ lhs: T, _ rhs: U) -> Bool
    where T.Element: Equatable, T.Element == U.Element
{
    for lhsItem in lhs {
        for rhsItem in rhs {
            if lhsItem == rhsItem {
                return true
            }
        }
    }
   return false
}
anyCommonElements([1, 2, 3], [3])
```

> 实验
>
> 修改 `anyCommonElements(_: _:)` 函数以创建一个返回任意两个序列共有的元素数组的函数。

Writing `<T: Equatable>` is the same as writing `<T> ... where T: Equatable`.

编写`<T: Equatable>`与编写`<T> ... where T: Equatable` 。
