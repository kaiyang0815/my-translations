# Functions

> 定义和调用函数，标记它们的参数，并使用它们的返回值。

函数是执行特定任务的独立代码块。您为函数指定一个名称来标识其功能，该名称用于在需要时“调用”该函数以执行其任务。

Swift 的统一函数语法足够灵活，可以表达从没有参数名称的简单 C 风格函数到每个参数都有名称和参数标签的复杂 Objective-C 风格方法的任何内容。参数可以提供默认值以简化函数调用，并且可以作为输入输出参数传递，一旦函数完成执行，参数就会修改传递的变量。

Swift 中的每个函数都有一个类型，由函数的参数类型和返回类型组成。您可以像 Swift 中的任何其他类型一样使用此类型，这样可以轻松地将函数作为参数传递给其他函数，以及从函数返回函数。函数还可以编写在其他函数中，以将有用的功能封装在嵌套函数范围内。

## 定义和调用函数

定义函数时，您可以选择定义一个或多个命名的类型化值，函数将其作为输入，称为参数。您还可以选择定义函数完成后将作为输出传回的值类型，称为返回类型。

每个函数都有一个函数名称，它描述了该函数执行的任务。要使用函数，您可以使用函数名称“调用”该函数，并向其传递与函数参数类型匹配的输入值（称为参数）。函数的参数必须始终按照与函数的参数列表相同的顺序提供。

下面示例中的函数称为 `greet(person:)` ，因为这就是它的作用——它将一个人的名字作为输入并返回该人的问候语。为了实现这一点，您定义一个输入参数 - 一个名为 `personString` 值 - 和一个 String 的返回类型，其中将包含该人的问候语：

```swift
func greet(person: String) -> String {
let greeting = "Hello, " + person + "!"
return greeting
}
```

所有这些信息都汇总到函数的定义中，该定义以 `func` 关键字为前缀。您可以使用返回箭头-> （连字符后跟右尖括号）指示函数的返回类型，后面跟着要返回的类型的名称。

该定义描述了函数的作用、期望接收什么以及完成后返回什么。该定义使您可以轻松地从代码中的其他位置明确地调用该函数：

```swift
print(greet(person: "Anna"))
// Prints "Hello, Anna!"
print(greet(person: "Brian"))
// Prints "Hello, Brian!"
```

您可以通过在 `person` 参数标签后面传递一个 String 值来调用 `greet(person:)` 函数，例如 `greet(person: "Anna")` 。因为该函数返回一个 String 值，所以可以将 `greet(person:)` 包装在对 `print(_:separator:terminator:)` 函数打印该字符串并查看其返回值，如上所示。

> 注意
>
> 这 `print(_:separator:terminator:)` 函数的第一个参数没有标签，其他参数是可选的，因为它们有默认值。函数语法的这些变化将在下面的函数参数标签和参数名称以及默认参数值中讨论。

`greet(person:)` 函数的主体首先定义一个名为 `greeting` 新 String 常量，并将其设置为一条简单的问候消息。然后使用 return 关键字将该问候语从函数中传回。在 `return greeting` 的代码行中，该函数完成其执行并返回 greeting 的当前值。

您可以使用不同的输入值多次调用 `greet(person:)` 函数。上面的示例显示了如果使用输入值"Anna"和输入值"Brian"调用它会发生什么。该函数在每种情况下都会返回定制的问候语。

为了使该函数的主体更短，您可以将消息创建和返回语句合并到一行中：

```swift
func greetAgain(person: String) -> String {
return "Hello again, " + person + "!"
}
print(greetAgain(person: "Anna"))
// Prints "Hello again, Anna!"
```

## 函数参数和返回值

Swift 中的函数参数和返回值非常灵活。您可以定义任何内容，从具有单个未命名参数的简单实用函数到具有富有表现力的参数名称和不同参数选项的复杂函数。

### 不带参数的函数

函数不需要定义输入参数。这是一个没有输入参数的函数，每当调用它时总是返回相同的 String 消息：

```swift
func sayHelloWorld() -> String {
return "hello, world"
}
print(sayHelloWorld())
// Prints "hello, world"
```

函数定义在函数名称后面仍然需要括号，即使它不带任何参数。当函数被调用时，函数名后面也会跟着一对空括号。

### 具有多个参数的函数

函数可以有多个输入参数，这些参数写在函数的括号内，并用逗号分隔。

此函数将一个人的名字以及他们是否已被问候作为输入，并返回该人的适当问候语：

```swift
func greet(person: String, alreadyGreeted: Bool) -> String {
if alreadyGreeted {
return greetAgain(person: person)
} else {
return greet(person: person)
}
print(greet(person: "Tim", alreadyGreeted: true))
// Prints "Hello again, Tim!"
```

您可以通过在括号中传递标记为 person String 参数值和标记为 `alreadyGreeted` Bool 参数值（以逗号分隔）来调用 `greet(person: already Greeted:)` 函数。请注意，此函数与前面部分中显示的 greet(person:) 函数不同。虽然这两个函数的名称都以 greet 开头，但是 `greet(person: already Greeted:)` 函数需要两个参数，而 `greet(person:)` 函数只需要一个参数。

### 无返回值的函数

无返回值函数不需要定义返回类型。这是 `greet(person:)` 函数的一个版本，其打印内部的 String 值而不是返回它：

```swift
func greet(person: String) {
print("Hello, \(person)!")
}
greet(person: "Dave")
// Prints "Hello, Dave!"
```

由于不需要返回值，因此该函数的定义不包含返回箭头 ( `->` ) 或返回类型。

> 注意
>
> 严格来说，`greet(person:)` 函数的这个版本仍然返回一个值，即使它没有定义返回值。没有定义返回类型的函数返回 Void 类型的特殊值。这只是一个空元组，写作 `()`。

调用函数时可以忽略函数的返回值：

```swift
func printAndCount(string: String) -> Int {
print(string)
return string.count
}
func printWithoutCounting(string: String) {
let _ = printAndCount(string: string)
}
printAndCount(string: "hello, world")
// prints "hello, world" and returns a value of 12
printWithoutCounting(string: "hello, world")
// prints "hello, world" but doesn't return a value
```

第一个函数 `printAndCount(string:)` 打印字符串，然后以 Int 形式返回其字符计数。第二个函数 `printWithoutCounting(string:)` 调用第一个函数，但忽略其返回值。当调用第二个函数时，第一个函数仍然打印消息，但不使用返回值。

> 注意
>
> 返回值可以被忽略，但是一个表示将返回值的函数必须始终这样做。具有已定义返回类型的函数不能允许控制在不返回值的情况下脱离函数底部，并且尝试这样做将导致编译时错误。

### 具有多个返回值的函数

您可以使用元组类型作为函数的返回类型，以将多个值作为一个复合返回值的一部分返回。

下面的示例定义了一个名为 `minMax(array:)` 的函数，该函数查找 Int 值数组中的最小和最大数字：

```swift
func minMax(array: [Int]) -> (min: Int, max: Int) {
var currentMin = array[0]
var currentMax = array[0]
for value in array[1..<array.count] {
if value < currentMin {
currentMin = value
} else if value > currentMax {
currentMax = value
}
return (currentMin, currentMax)
}
```

`min Max(array:)` 函数返回一个包含两个 Int 值的元组。这些值被标记为 min 和 max 以便在查询函数的返回值时可以通过名称访问它们。

`min Max(array:)` 函数的主体首先将两个名为 current Min 和 current Max 的工作变量设置为数组中第一个整数的值。然后，该函数迭代数组中的剩余值，并检查每个值是否分别小于或大于 current Min 和 current Max 的值。最后，总体最小值和最大值作为两个 Int 值的元组返回。

由于元组的成员值被命名为函数返回类型的一部分，因此可以使用点语法访问它们以检索找到的最小和最大值：

```swift
let bounds = minMax(array: [8, -6, 2, 109, 3, 71])
print("min is \(bounds.min) and max is \(bounds.max)")
// Prints "min is -6 and max is 109"
```

请注意，在从函数返回元组时不需要命名元组的成员，因为它们的名称已被指定为函数返回类型的一部分。

### 可选元组返回类型

如果从函数返回的元组类型有可能对整个元组“无值”，则可以使用可选的元组返回类型来反映整个元组可以为 nil 事实。您可以通过在元组类型的右括号后面放置问号来编写可选的元组返回类型，例如 (Int, Int)? 或 (String, Int, Bool)? 。

> 注意
>
> 可选的元组类型，例如 (Int, Int)? 与包含可选类型（例如 (Int?, Int?) 的元组不同。对于可选元组类型，整个元组都是可选的，而不仅仅是元组中的每个单独的值。

上面的 min Max(array:) 函数返回一个包含两个 Int 值的元组。但是，该函数不会对其传递的数组执行任何安全检查。如果 array 参数包含空数组，则上面定义的 min Max(array:) 函数将在尝试访问 array[0] 时触发运行时错误。

为了安全地处理空数组，请编写带有可选元组返回类型的 min Max(array:) 函数，并在数组为空时返回 nil 值：

```swift
func minMax(array: [Int]) -> (min: Int, max: Int)? {
if array.isEmpty { return nil }
var currentMin = array[0]
var currentMax = array[0]
for value in array[1..<array.count] {
if value < currentMin {
currentMin = value
} else if value > currentMax {
currentMax = value
}
return (currentMin, currentMax)
}
```

您可以使用可选绑定来检查此版本的 min Max(array:) 函数是否返回实际的元组值或 nil ：

```swift
if let bounds = minMax(array: [8, -6, 2, 109, 3, 71]) {
print("min is \(bounds.min) and max is \(bounds.max)")
}
// Prints "min is -6 and max is 109"
```

### 具有隐式返回值的函数

如果函数的整个主体是单个表达式，则该函数隐式返回该表达式。例如，下面的两个函数具有相同的行为：

```swift
func greeting(for person: String) -> String {
"Hello, " + person + "!"
}
print(greeting(for: "Dave"))
// Prints "Hello, Dave!"

func anotherGreeting(for person: String) -> String {
return "Hello, " + person + "!"
}
print(anotherGreeting(for: "Dave"))
// Prints "Hello, Dave!"
```

greeting(for:) 函数的整个定义是它返回的问候消息，这意味着它可以使用这种较短的形式。 another Greeting(for:) 函数返回相同的问候消息，与较长的函数一样使用 return 关键字。任何仅作为一个 return 行编写的函数都可以省略 return 。

正如您将在速记 Getter 声明中看到的，属性 getter 也可以使用隐式返回。

> 注意
>
> 您编写的作为隐式返回值的代码需要返回一些值。例如，您不能使用 print(13) 作为隐式返回值。但是，您可以使用像 fatal Error("Oh no!") 这样从不返回的函数作为隐式返回值，因为 Swift 知道隐式返回不会发生。

## 函数参数标签和参数名称

每个函数参数都有一个参数标签和一个参数名称。参数标签在调用函数时使用；每个参数都写在函数调用中，其参数标签位于其前面。参数名称用于函数的实现。默认情况下，参数使用其参数名称作为参数标签。

```swift
func someFunction(firstParameterName: Int, secondParameterName: Int) {
// In the function body, firstParameterName and secondParameterName
// refer to the argument values for the first and second parameters.
}
someFunction(firstParameterName: 1, secondParameterName: 2)
```

所有参数必须具有唯一的名称。尽管多个参数可以具有相同的参数标签，但唯一的参数标签有助于使代码更具可读性。

### 指定参数标签

您可以在参数名称之前写入参数标签，并用空格分隔：

```swift
func someFunction(argumentLabel parameterName: Int) {
// In the function body, parameterName refers to the argument value
// for that parameter.
}
```

这是 greet(person:) 函数的一个变体，它接受一个人的名字和家乡并返回问候语：

```swift
func greet(person: String, from hometown: String) -> String {
return "Hello \(person)! Glad you could visit from \(hometown)."
}
print(greet(person: "Bill", from: "Cupertino"))
// Prints "Hello Bill! Glad you could visit from Cupertino."
```

使用参数标签可以允许以富有表现力的、类似句子的方式调用函数，同时仍然提供可读且意图清晰的函数体。

### 省略参数标签

如果您不需要参数的参数标签，请为该参数写入下划线 ( `_` )，而不是显式参数标签。

```swift
func someFunction(_ firstParameterName: Int, secondParameterName: Int) {
// In the function body, firstParameterName and secondParameterName
// refer to the argument values for the first and second parameters.
}
someFunction(1, secondParameterName: 2)
```

如果参数有参数标签，则在调用函数时必须对参数进行标签。

### 默认参数值

您可以通过在参数类型之后为参数分配一个值来为函数中的任何参数定义默认值。如果定义了默认值，则在调用函数时可以省略该参数。

```swift
func someFunction(parameterWithoutDefault: Int, parameterWithDefault: Int = 12) {
// If you omit the second argument when calling this function, then
// the value of parameterWithDefault is 12 inside the function body.
}
someFunction(parameterWithoutDefault: 3, parameterWithDefault: 6) // parameterWithDefault is 6
someFunction(parameterWithoutDefault: 4) // parameterWithDefault is 12
```

将没有默认值的参数放置在函数参数列表的开头、具有默认值的参数之前。没有默认值的参数通常对函数的含义更重要 - 首先编写它们可以更容易地识别正在调用相同的函数，无论是否省略任何默认参数。

### 可变参数

可变参数接受零个或多个指定类型的值。您可以使用可变参数来指定在调用函数时可以向该参数传递不同数量的输入值。通过在参数类型名称后插入三个句点字符 ( ... ) 来写入可变参数。

传递给可变参数的值在函数体内作为适当类型的数组提供。例如，名称为 numbers 且类型为 Double... 的可变参数在函数体内作为称为 [Double] 类型的 numbers 的常量数组提供。

下面的示例计算任意长度的数字列表的算术平均值（也称为平均值）：

```swift
func arithmeticMean(_ numbers: Double...) -> Double {
var total: Double = 0
for number in numbers {
total += number
}
return total / Double(numbers.count)
}
arithmeticMean(1, 2, 3, 4, 5)
// returns 3.0, which is the arithmetic mean of these five numbers
arithmeticMean(3, 8.25, 18.75)
// returns 10.0, which is the arithmetic mean of these three numbers
```

一个函数可以有多个可变参数。可变参数之后的第一个参数必须具有参数标签。参数标签使得哪些参数被传递给可变参数以及哪些参数被传递给可变参数之后的参数变得明确。

### 输入输出参数

函数参数默认为常量。尝试从函数体内更改函数参数的值会导致编译时错误。这意味着您不能错误地更改参数的值。如果您希望函数修改参数的值，并且希望这些更改在函数调用结束后仍然保留，请将该参数定义为输入输出参数。

您可以通过将 inout 关键字放在参数类型之前来编写输入输出参数。输入输出参数具有传入函数的值，由函数修改，然后从函数传回以替换原始值。有关输入输出参数的行为和相关编译器优化的详细讨论，请参阅输入输出参数。

您只能传递变量作为输入输出参数的实参。您不能将常量或文字值作为参数传递，因为常量和文字无法修改。当您将变量作为实参传递给输入输出参数时，可以在变量名称之前直接放置一个与号 ( & )，以指示该函数可以修改该变量。

> 注意
>
> In-out 参数不能有默认值，并且可变参数不能标记为 inout 。

下面是一个名为 `swap Two Ints(_: _:)` 的函数示例，它有两个名为 a 和 b 输入输出整数参数：

```swift
func swapTwoInts(_ a: inout Int, _ b: inout Int) {
let temporaryA = a
a = b
b = temporaryA
}
```

`swap Two Ints(_: _:)` 函数只是将 b 的值交换到 a ，将 a 的值交换到 b 。该函数通过将 a 的值存储在称为 temporary A 临时常量中，将 b 的值分配给 a ，然后将 temporary A 分配给 b 来执行此交换。

您可以使用两个 Int 类型的变量调用 `swap Two Ints(_: _:)` 函数来交换它们的值。请注意，当 some Int 和 another Int 的名称传递给 `swap Two Ints(_: _:)` 函数时，它们的名称会带有 & 符号：

```swift
var someInt = 3
var anotherInt = 107
swapTwoInts(&someInt, &anotherInt)
print("someInt is now \(someInt), and anotherInt is now \(anotherInt)")
// Prints "someInt is now 107, and anotherInt is now 3"
```

上面的示例显示， some Int 和 another Int 的原始值被 `swap Two Ints(_: _:)` 函数修改，即使它们最初是在函数外部定义的。

> 注意
>
> 输入输出参数与从函数返回值不同。上面的 swap Two Ints 示例没有定义返回类型或返回值，但它仍然修改 some Int 和 another Int 的值。输入输出参数是函数在其函数体范围之外产生影响的另一种方式。

## 函数类型

每个函数都有一个特定的函数类型，由函数的参数类型和返回类型组成。

例如：

```swift
func addTwoInts(_ a: Int, _ b: Int) -> Int {
return a + b
}
func multiplyTwoInts(_ a: Int, _ b: Int) -> Int {
return a \* b
}
```

此示例定义了两个简单的数学函数，称为 add Two Ints 和 multiply Two Ints 。这些函数各自采用两个 Int 值，并返回一个 Int 值，该值是执行适当数学运算的结果。

这两个函数的类型都是 (Int, Int) -> Int 。这可以解读为：

“一个函数有两个参数，都是 Int 类型，并且返回 Int 类型的值。”

这是另一个没有参数或返回值的函数的示例：

```swift
func printHelloWorld() {
print("hello, world")
}
```

该函数的类型是 () -> Void ，或者“没有参数并返回 Void 函数”。

### 使用函数类型

您可以像 Swift 中的任何其他类型一样使用函数类型。例如，您可以将常量或变量定义为函数类型，并将适当的函数分配给该变量：

```swift
var mathFunction: (Int, Int) -> Int = addTwoInts
```

这可以解读为：

“定义一个名为 math Function 变量，其类型为“接受两个 Int 值并返回一个 Int 值的函数”。设置这个新变量来引用名为 add Two Ints 的函数。”

add Two Ints(_: _:) 函数与 math Function 变量具有相同的类型，因此 Swift 的类型检查器允许这种赋值。

您现在可以使用名称 math Function 调用分配的函数：

```swift
print("Result: \(mathFunction(2, 3))")
// Prints "Result: 5"
```

具有相同匹配类型的不同函数可以分配给同一个变量，其方式与非函数类型相同：

```swift
mathFunction = multiplyTwoInts
print("Result: \(mathFunction(2, 3))")
// Prints "Result: 6"
```

与任何其他类型一样，当您将函数分配给常量或变量时，您可以让 Swift 来推断函数类型：

```swift
let anotherMathFunction = addTwoInts
// anotherMathFunction is inferred to be of type (Int, Int) -> Int
```

### 函数类型作为参数类型

您可以使用 (Int, Int) -> Int 等函数类型作为另一个函数的参数类型。这使您可以将函数实现的某些方面留给函数调用者在调用函数时提供。

下面是打印上面数学函数结果的示例：

```swift
func printMathResult(_ mathFunction: (Int, Int) -> Int, _ a: Int, _ b: Int) {
print("Result: \(mathFunction(a, b))")
}
printMathResult(addTwoInts, 3, 5)
// Prints "Result: 8"
```

此示例定义了一个名为 `printMathResult(_: _: _:)`的函数，该函数具有三个参数。第一个参数称为 math Function ，类型为 (Int, Int) -> Int 。您可以传递该类型的任何函数作为第一个参数的参数。第二个和第三个参数称为 a 和 b ，并且都是 Int 类型。这些用作所提供的数学函数的两个输入值。

当调用 `printMathResult(_: _: _:)`时，它会传递 add Two Ints(_: _:) 函数以及整数值 3 和 5 。它使用值 3 和 5 调用提供的函数，并打印结果 8 。

`printMathResult(_: _: _:)`的作用是打印调用适当类型的数学函数的结果。该函数的实现实际上做了什么并不重要——重要的是该函数的类型正确。这使得 `printMathResult(_: _: _:)`能够以类型安全的方式将其部分功能移交给函数的调用者。

### 函数类型作为返回类型

您可以使用一个函数类型作为另一个函数的返回类型。您可以通过在返回函数的返回箭头 ( -> ) 后立即编写完整的函数类型来实现此目的。

下一个示例定义了两个简单的函数，称为 step Forward(_:) 和 step Backward(_:) 。 step Forward(_:) 函数返回的值比其输入值大一， step Backward(_:) 函数返回的值比其输入值小一。这两个函数的类型均为 (Int) -> Int ：

```swift
func stepForward(_ input: Int) -> Int {
return input + 1
}
func stepBackward(_ input: Int) -> Int {
return input - 1
}
```

这是一个名为 choose Step Function(backward:) 的函数，其返回类型为 (Int) -> Int 。 choose Step Function(backward:) 函数根据名为 backward 布尔参数返回 step Forward(_:) 函数或 step Backward(_:) 函数：

```swift
func chooseStepFunction(backward: Bool) -> (Int) -> Int {
return backward ? stepBackward : stepForward
}
```

现在，您可以使用 choose Step Function(backward:) 来获取朝一个方向或另一个方向步进的函数：

```swift
var currentValue = 3
let moveNearerToZero = chooseStepFunction(backward: currentValue > 0)
// moveNearerToZero now refers to the stepBackward() function
```

上面的示例确定是否需要正步或负步来将称为 `currentValue` 的变量逐渐接近零。 `currentValue` 的初始值为 3 ，这意味着 `currentValue > 0` 返回 true ，导致 `chooseStepFunction(backward:)` 返回 `stepBackward(_:)` 函数。对返回函数的引用存储在名为 move Nearer To Zero 的常量中。

现在， `move Nearer To Zero` 指的是正确的函数，它可以用于计数到零：

```swift
print("Counting to zero:")
// Counting to zero:
while currentValue != 0 {
    print("\(currentValue)... ")
    currentValue = moveNearerToZero(currentValue)
}
print("zero!")
// 3...
// 2...
// 1...
// zero!
```

## 嵌套函数

到目前为止，您在本章中遇到的所有函数都是全局函数的示例，它们是在全局范围内定义的。您还可以在其他函数体内定义函数，称为嵌套函数。

默认情况下，嵌套函数对外界隐藏，但仍可以由其封闭函数调用和使用。封闭函数还可以返回其嵌套函数之一，以允许在另一个作用域中使用该嵌套函数。

您可以重写上面的 `chooseStepFunction(backward:)` 示例来使用和返回嵌套函数：

```swift
func chooseStepFunction(backward: Bool) -> (Int) -> Int {
    func stepForward(input: Int) -> Int { return input + 1 }
    func stepBackward(input: Int) -> Int { return input - 1 }
    return backward ? stepBackward : stepForward
}
var currentValue = -4
let moveNearerToZero = chooseStepFunction(backward: currentValue > 0)
// moveNearerToZero now refers to the nested stepForward() function
while currentValue != 0 {
    print("\(currentValue)... ")
    currentValue = moveNearerToZero(currentValue)
}
print("zero!")
// -4...
// -3...
// -2...
// -1...
// zero!
```
