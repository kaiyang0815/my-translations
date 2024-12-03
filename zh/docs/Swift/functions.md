# 函数

函数是定义、调用、标记参数并使用返回值的代码块。

## 函数概述

函数是执行特定任务的独立代码块。你可以给函数一个描述其功能的名称，并在需要时通过这个名称"调用"函数来执行其任务。

Swift 的统一函数语法非常灵活，可以表达从简单的 C 风格无参数名称函数到复杂的 Objective-C 风格方法（每个参数都有名称和参数标签）。参数可以提供默认值以简化函数调用，也可以作为输入输出参数传递，在函数执行完成后修改传入的变量。

Swift 中的每个函数都有一个类型，由函数的参数类型和返回类型组成。你可以像使用 Swift 中的其他类型一样使用函数类型，这使得将函数作为参数传递给其他函数，以及从函数返回函数变得容易。函数也可以写在其他函数内部，以在嵌套函数作用域内封装有用的功能。

## 定义和调用函数

定义函数时，你可以选择性地定义一个或多个命名的、有类型的值作为输入，这些值称为参数。你还可以选择性地定义函数完成时将返回的值的类型，称为返回类型。

每个函数都有一个函数名，用于描述函数执行的任务。要使用函数，你需要用它的名称"调用"该函数，并传入与函数参数类型匹配的输入值（称为参数）。函数的参数必须始终按照函数参数列表的顺序提供。

下面的示例中的函数被称为 `greet(person:)`，因为这就是它的功能 —— 它接收一个人的名字作为输入，并返回对该人的问候语：

```swift
func greet(person: String) -> String {
    let greeting = "Hello, " + person + "!"
    return greeting
}
```

所有这些信息都包含在函数的定义中，以 `func` 关键字开头。你用返回箭头 `->`（连字符后跟一个右尖括号）表示函数的返回类型，后面跟着要返回的类型名称。

函数定义描述了函数做什么、期望接收什么以及完成时返回什么。这使得函数可以在代码的其他地方明确地被调用：

```swift
print(greet(person: "Anna"))
// 打印 "Hello, Anna!"
print(greet(person: "Brian"))
// 打印 "Hello, Brian!"
```

你通过在 person 参数标签后传递一个 String 值来调用 `greet(person:)` 函数，例如 `greet(person: "Anna")`。因为函数返回 String 值，所以 `greet(person:)` 可以被包装在 `print(_:separator:terminator:)` 函数调用中以打印该字符串并查看其返回值。

> 注意：`print(_:separator:terminator:)` 函数的第一个参数没有标签，其他参数是可选的，因为它们有默认值。这些函数语法的变体将在下面的"函数参数标签和参数名称"以及"默认参数值"部分中讨论。

## 函数参数和返回值

Swift 中的函数参数和返回值非常灵活。你可以定义从简单的只有一个未命名参数的实用函数到具有表达性参数名称和不同参数选项的复杂函数。

### 无参数函数

函数不一定要定义输入参数。这是一个没有输入参数的函数，每次调用时都返回相同的 String 消息：

```swift
func sayHelloWorld() -> String {
    return "hello, world"
}
print(sayHelloWorld())
// 打印 "hello, world"
```

即使函数不接受任何参数，函数名后面仍然需要括号。调用函数时，函数名也需要跟一对空括号。

### 多参数函数

函数可以有多个输入参数，这些参数写在函数的括号内，用逗号分隔。

下面这个函数接收一个人的名字和是否已经被问候过作为输入，并返回适当的问候语：

```swift
func greet(person: String, alreadyGreeted: Bool) -> String {
    if alreadyGreeted {
        return greetAgain(person: person)
    } else {
        return greet(person: person)
    }
}
print(greet(person: "Tim", alreadyGreeted: true))
// 打印 "Hello again, Tim!"
```

### 无返回值函数

函数不一定要定义返回类型。这是一个 `greet(person:)` 函数的版本，它直接打印 String 值而不是返回它：

```swift
func greet(person: String) {
    print("Hello, \(person)!")
}
greet(person: "Dave")
// 打印 "Hello, Dave!"
```

> 注意：严格来说，即使没有定义返回值，这个版本的 `greet(person:)` 函数仍然返回一个值。没有定义返回类型的函数会返回一个特殊的 `Void` 类型值。这只是一个空元组，写作 `()`。

### 多返回值函数

你可以使用元组类型作为函数的返回类型，以返回多个值作为一个复合返回值。

下面的例子定义了一个名为 `minMax(array:)` 的函数，它在一个 Int 值数组中找出最小和最大的数字：

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
    }
    return (currentMin, currentMax)
}
```

你可以通过点语法访问返回的元组的命名成员：

```swift
let bounds = minMax(array: [8, -6, 2, 109, 3, 71])
print("min is \(bounds.min) and max is \(bounds.max)")
// 打印 "min is -6 and max is 109"
```

### 可选元组返回类型

如果函数返回的元组类型可能"没有值"，你可以使用可选的元组返回类型来表示整个元组可以为 `nil`。你可以在元组类型的闭括号后放置问号来写一个可选的元组返回类型，例如 `(Int, Int)?` 或 `(String, Int, Bool)?`。

### 函数参数标签和参数名称

每个函数参数都有一个参数标签（argument label）和一个参数名称（parameter name）。参数标签在调用函数时使用；参数名称在函数的实现中使用。默认情况下，参数使用它们的参数名称作为参数标签。

### 默认参数值

你可以通过在参数类型后为参数赋值来为函数中的任何参数定义默认值。如果定义了默认值，调用函数时可以省略该参数。

### 输入输出参数

函数参数默认是常量。试图在函数体中更改参数值将会导致编译时错误。这意味着你不能错误地更改参数的值。如果你想要一个函数可以修改参数的值，并且想要在这些修改在函数调用结束后仍然存在，那么就把这个参数定义为输入输出参数（In-Out Parameters）。

> 注意：输入输出参数不能有默认值，而且可变参数不能标记为 `inout`。

## 函数类型

每个函数都有特定的函数类型，由函数的参数类型和返回类型组成。你可以像使用任何其他类型一样使用函数类型。这使得可以将函数作为参数传递给其他函数，也可以从函数中返回函数。

函数类型可以被用作其他函数的参数类型或返回类型。这个功能让你可以实现非常灵活的函数式编程模式。

例如，这里有一个函数 `chooseStepFunction(backward:)`，它的返回类型是 `(Int) -> Int`。`chooseStepFunction(backward:)` 函数根据一个名为 `backward` 的布尔参数返回 `stepForward(_:)` 函数或 `stepBackward(_:)` 函数：

```swift
func chooseStepFunction(backward: Bool) -> (Int) -> Int {
    return backward ? stepBackward : stepForward
}
```

## 嵌套函数

所有在本章中遇到的函数都是全局函数的示例，它们是在全局作用域中定义的。你也可以在其他函数的主体中定义函数，这被称为嵌套函数。

嵌套函数默认是对外界不可见的，但仍然可以被它们的外部函数调用和使用。外部函数也可以返回它的一个嵌套函数，以允许在另一个作用域中使用嵌套函数。

你可以将 `chooseStepFunction(backward:)` 示例重写为使用和返回嵌套函数：

```swift
func chooseStepFunction(backward: Bool) -> (Int) -> Int {
    func stepForward(input: Int) -> Int { return input + 1 }
    func stepBackward(input: Int) -> Int { return input - 1 }
    return backward ? stepBackward : stepForward
}
```
