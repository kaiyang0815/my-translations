# 闭包

将一起执行的代码分组，无需创建命名函数。
闭包是独立的功能块，可以在代码中传递和使用。 Swift 中的闭包类似于其他编程语言中的闭包、匿名函数、lambda 和块。

闭包可以从定义它们的上下文中捕获和存储对任何常量和变量的引用。这称为关闭这些常量和变量。 Swift 会为您处理捕获的所有内存管理。

> 注意
>
> 如果您不熟悉捕获的概念，请不要担心。下面在捕获值中详细解释了这一点。

正如 Functions 中介绍的那样，全局函数和嵌套函数实际上是闭包的特殊情况。闭包采用以下三种形式之一：

- 全局函数是有名称但不捕获任何值的闭包。

- 嵌套函数是具有名称并且可以从其封闭函数捕获值的闭包。

- 闭包表达式是用轻量级语法编写的未命名闭包，可以从周围的上下文中捕获值。

Swift 的闭包表达式具有干净、清晰的风格，并进行了优化，鼓励在常见场景中使用简洁、整洁的语法。这些优化包括：

- 从上下文推断参数和返回值类型

- 单表达式闭包的隐式返回

- 简写参数名称

## 尾随闭包语法

闭包表达式
正如嵌套函数中所介绍的，嵌套函数是命名和定义自包含代码块作为较大函数的一部分的便捷方法。然而，有时在没有完整声明和名称的情况下编写类似函数的构造的较短版本很有用。当您使用将函数作为一个或多个参数的函数或方法时尤其如此。

闭包表达式是一种用简短、集中的语法编写内联闭包的方法。闭包表达式提供了多种语法优化，可以以缩短的形式编写闭包，而不会失去清晰度或意图。下面的闭包表达式示例通过多次迭代改进排序 `sorted(by:)`方法的单个示例来说明这些优化，每次迭代都以更简洁的方式表达相同的功能。

## 排序方法

Swift 的标准库提供了一种名为`sorted(by:)`的方法，该方法根据您提供的排序闭包的输出对已知类型的值数组进行排序。完成排序过程后， `sorted(by:)`方法将返回一个与旧数组类型和大小相同的新数组，其元素按正确的排序顺序排列。 `sorted(by:)`方法不会修改原始数组。

下面的闭包表达式示例使用 `sorted(by:)`方法按相反的字母顺序对 String 值数组进行排序。这是要排序的初始数组：

```swift
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
```

`sorted(by:)`方法接受一个闭包，该闭包采用与数组内容相同类型的两个参数，并返回一个 Bool 值来说明一旦对值进行排序，第一个值是否应该出现在第二个值之前或之后。如果第一个值应该出现在第二个值之前，则排序闭包需要返回 true ，否则返回 false 。

此示例对 String 值数组进行排序，因此排序闭包需要是`(String, String) -> Bool` 类型的函数。

提供排序闭包的一种方法是编写正确类型的普通函数，并将其作为参数传递给 `sorted(by:)`方法：

```swift
func backward(_ s1: String, _ s2: String) -> Bool {
    return s1 > s2
}
var reversedNames = names.sorted(by: backward)
// reversedNames is equal to ["Ewa", "Daniella", "Chris", "Barry", "Alex"]
```

如果第一个字符串 ( s1 ) 大于第二个字符串 ( s2 )， `backward(_: _:)`函数将返回 true ，表示在排序数组中 s1 应出现在 s2 之前。对于字符串中的字符，“大于”意味着“在字母表中出现得晚于”。这意味着字母"B" “大于”字母"A" ，并且字符串"Tom"大于字符串"Tim" 。这给出了逆字母顺序排序， "Barry"被放置在"Alex"之前，依此类推。

然而，这是一种相当冗长的编写本质上是单表达式函数（ a > b ）的方法。在此示例中，最好使用闭包表达式语法内联编写排序闭包。

## 闭包表达式语法

闭包表达式语法具有以下一般形式：

```swift
{ (<#parameters#>) -> <#return type#> in
    <#statements#>
}
```

闭包表达式语法中的参数可以是输入输出参数，但不能有默认值。如果您命名了可变参数，则可以使用可变参数。元组还可以用作参数类型和返回类型。

下面的示例显示了上面的 `backward(_: _:)`函数的闭包表达式版本：

```swift
reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 > s2
})
```

请注意，此内联闭包的参数和返回类型的声明与 `backward(_: _:)`函数的声明相同。在这两种情况下，它都写为 `(s1: String, s2: String) -> Bool`。但是，对于内联闭包表达式，参数和返回类型写在花括号内，而不是写在花括号外。

闭包主体的开头由 `in` 关键字引入。该关键字表示闭包的参数和返回类型的定义已经完成，闭包的主体即将开始。

因为闭包的主体很短，甚至可以写成一行：

```swift
reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in return s1 > s2 })
```

### 从上下文推断类型

因为排序闭包作为参数传递给方法，所以 Swift 可以推断其参数的类型及其返回值的类型。`sorted(by:)` 方法正在字符串数组上调用，因此其参数必须是 `(String, String) -> Bool` 类型的函数。这意味着 `(String, String)` 和 `Bool` 类型不需要编写为闭包表达式定义的一部分。

由于可以推断所有类型，因此也可以省略返回箭头 (`->`) 和参数名称周围的括号：

```swift
reversedNames = names.sorted(by: { s1, s2 in return s1 > s2 })
```

将闭包作为内联闭包表达式传递给函数或方法时，您始终可以推断出参数类型和返回类型。因此，当闭包用作函数或方法参数时，您永远不需要以最完整的形式编写内联闭包。

尽管如此，如果您愿意，您仍然可以使类型明确，并且如果可以避免代码读者的歧义，我们鼓励这样做。在使用 `sorted(by:)`方法的情况下，从正在进行排序的事实来看，闭包的目的很清楚，并且读者可以安全地假设闭包可能正在处理 String 值，因为它是协助对字符串数组进行排序。

单表达式闭包的隐式返回
单表达式闭包可以通过省略其声明中的 `return` 关键字来隐式返回其单个表达式的结果，如上例的此版本所示：

```swift
reversedNames = names.sorted(by: { s1, s2 in s1 > s2 })
```

这里， `sorted(by:)`方法参数的函数类型清楚地表明闭包必须返回 Bool 值。因为闭包的主体包含一个返回 Bool 值的表达式 ( s1 > s2 )，所以没有歧义，并且可以省略 `return` 关键字。

### 参数名称简写

Swift 自动为内联闭包提供简写参数名称，可用于通过名称 `$0`、 `$1`、 `$2` 等引用闭包参数的值。

如果在闭包表达式中使用这些速记参数名称，则可以从其定义中省略闭包的参数列表。速记参数名称的类型是从预期的函数类型推断出来的，并且您使用的编号最高的速记参数决定了闭包采用的参数数量。`in` 关键字也可以省略，因为闭包表达式完全由其主体组成：

```swift
reversedNames = names.sorted(by: { $0 > $1 })
```

这里， `$0` 和 `$1` 指的是闭包的第一个和第二个 String 参数。因为 `$1` 是编号最大的简写参数，所以闭包被理解为采用两个参数。因为这里的 `sorted(by:)`函数需要一个参数都是字符串的闭包，所以简写参数 `$0` 和 `$1` 都是 String 类型。

### 操作方法

实际上还有一种更短的方法来编写上面的闭包表达式。 Swift 的 `String` 类型将其特定于字符串的大于运算符 (`>`) 实现定义为具有两个 String 类型参数并返回 Bool 类型值的方法。这与 `sorted(by:)`方法所需的方法类型完全匹配。因此，您可以简单地传入大于运算符，Swift 将推断您想要使用其特定于字符串的实现：

```swift
reversedNames = names.sorted(by: >)
```

有关运算符方法的更多信息，请参阅运算符方法。

### 尾随闭包

如果需要将闭包表达式作为函数的最终参数传递给函数，并且闭包表达式很长，则将其写为尾随闭包可能会很有用。您可以在函数调用的括号后编写尾随闭包，即使尾随闭包仍然是函数的参数。当您使用尾随闭包语法时，您不会将第一个闭包的参数标签写入函数调用的一部分。一个函数调用可以包含多个尾随闭包；但是，下面的前几个示例使用单个尾随闭包。

```swift
func someFunctionThatTakesAClosure(closure: () -> Void) {
    // function body goes here
}

// Here's how you call this function without using a trailing closure:

someFunctionThatTakesAClosure(closure: {
    // closure's body goes here
})

// Here's how you call this function with a trailing closure instead:

someFunctionThatTakesAClosure() {
    // trailing closure's body goes here
}
```

上面闭包表达式语法部分中的字符串排序闭包可以作为尾随闭包写在 `sorted(by:)`方法的括号之外：

```swift
reversedNames = names.sorted() { $0 > $1 }
```

如果提供闭包表达式作为函数或方法的唯一参数，并且将该表达式作为尾随闭包提供，则在调用函数时无需在函数或方法名称后面编写一对括号 (`()`):

```swift
reversedNames = names.sorted { $0 > $1 }
```

当闭包足够长而无法将其内联写在一行上时，尾随闭包最有用。例如，Swift 的 Array 类型有一个 `map(_:)`方法，该方法将闭包表达式作为其单个参数。为数组中的每个项目调用一次闭包，并返回该项目的替代映射值（可能是其他类型）。您可以通过在传递给 `map(_:)`闭包中编写代码来指定映射的性质和返回值的类型。

将提供的闭包应用于每个数组元素后， `map(_:)` 方法返回一个包含所有新映射值的新数组，其顺序与原始数组中对应值的顺序相同。

以下是如何使用带有尾随闭包的 `map(_:)` 方法将 Int 值数组转换为 String 值数组。数组 `[16, 58, 510]` 用于创建新数组 `["OneSix", "FiveEight", "FiveOneZero"]`：

```swift
let digitNames = [
    0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four",
    5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
]
let numbers = [16, 58, 510]
```

上面的代码创建了一个整数数字与其名称的英语版本之间的映射字典。它还定义了一个整数数组，准备转换为字符串。

现在，您可以使用 numbers 数组创建 String 值数组，方法是将闭包表达式作为尾随闭包传递给数组的 `map(_:)`方法：

```swift
let strings = numbers.map { (number) -> String in
    var number = number
    var output = ""
    repeat {
        output = digitNames[number % 10]! + output
        number /= 10
    } while number > 0
    return output
}
// strings is inferred to be of type [String]
// its value is ["OneSix", "FiveEight", "FiveOneZero"]
```

`map(_:)`方法为数组中的每个项目调用一次闭包表达式。您不需要指定闭包的输入参数 number 的类型，因为可以从要映射的数组中的值推断出该类型。

在此示例中，变量 number 使用闭包的 number 参数的值进行初始化，以便可以在闭包体内修改该值。 （函数和闭包的参数始终是常量。）闭包表达式还指定返回类型 String ，以指示将存储在映射输出数组中的类型。

每次调用闭包表达式时都会构建一个名为 output 的字符串。它使用余数运算符 (`number % 10`) 计算 number 的最后一位数字，并使用该数字在 digit Names 字典中查找适当的字符串。闭包可用于创建任何大于零的整数的字符串表示形式。

> 注意
>
> 对 digit Names 字典下标的调用后跟一个感叹号 (`!`)，因为字典下标返回一个可选值，以指示如果键不存在，字典查找可能会失败。在上面的示例中，保证 `number % 10` 始终是 `digit Names` 字典的有效下标键，因此使用感叹号来强制解包存储在下标的可选返回值中的 String 值。

从 `digit Names` 字典中检索到的字符串被添加到 output 的前面，有效地反向构建数字的字符串版本。 （表达式 `number % 10` 为 16 提供值 6 ，为 58 提供 8 ，为 510 提供 0 。）

然后将 number 变量除以 10 。因为它是整数，所以在除法过程中会向下舍入，因此 16 变为 1 ， 58 变为 5 ， 510 变为 51 。

重复该过程直到 number 等于 0 ，此时闭包返回 output 字符串，并通过 `map(_:)`方法将其添加到输出数组中。

上面示例中尾随闭包语法的使用巧妙地将闭包的功能封装在闭包支持的函数之后，而不需要将整个闭包包装在 `map(_:)`方法的外括号内。

如果一个函数采用多个闭包，则省略第一个尾随闭包的参数标签，并标记其余的尾随闭包。例如，下面的函数加载照片库的图片：

```swift
func loadPicture(from server: Server, completion: (Picture) -> Void, onFailure: () -> Void) {
    if let picture = download("photo.jpg", from: server) {
        completion(picture)
    } else {
        onFailure()
    }
}
```

当您调用此函数来加载图片时，您提供了两个闭包。第一个闭包是一个完成处理程序，它在成功下载后显示图片。第二个闭包是一个错误处理程序，向用户显示错误。

```swift
loadPicture(from: someServer) { picture in
    someView.currentPicture = picture
} onFailure: {
    print("Couldn't download the next picture.")
}
```

在此示例中， `loadPicture(from:completion:onFailure:)` 函数将其网络任务分派到后台，并在网络任务完成时调用两个完成处理程序之一。通过这种方式编写函数，您可以将负责处理网络故障的代码与成功下载后更新用户界面的代码完全分开，而不是仅使用一个闭包来处理这两种情况。

> 注意
>
> 完成处理程序可能会变得难以阅读，尤其是当您必须嵌套多个处理程序时。另一种方法是使用异步代码，如并发中所述。

## 捕捉值

闭包可以从定义它的周围上下文中捕获常量和变量。然后，即使定义常量和变量的原始作用域不再存在，闭包也可以在其体内引用和修改这些常量和变量的值。

在 Swift 中，可以捕获值的闭包的最简单形式是嵌套函数，编写在另一个函数体内。嵌套函数可以捕获其外部函数的任何参数，还可以捕获外部函数中定义的任何常量和变量。

下面是一个名为 make Incrementer 的函数示例，其中包含一个名为 incrementer 嵌套函数。嵌套的 incrementer()函数从其周围的上下文中捕获两个值， running Total 和 amount 。捕获这些值后， incrementer 由 make Incrementer 作为闭包返回，每次 amount 时都会 running Total 递增。

```swift
func makeIncrementer(forIncrement amount: Int) -> () -> Int {
    var runningTotal = 0
    func incrementer() -> Int {
        runningTotal += amount
        return runningTotal
    }
    return incrementer
}
```

`makeIncrementer` 的返回类型为 `() -> Int`。这意味着它返回一个函数，而不是一个简单的值。它返回的函数没有参数，每次调用时都返回一个 Int 值。要了解函数如何返回其他函数，请参阅函数类型作为返回类型。

这 `makeIncrementer(forIncrement:)` 函数定义了一个名为 running Total 整数变量，用于存储将返回的增量器的当前运行总计。该变量的初始化值为 0 。

这 `makeIncrementer(forIncrement:)` 函数有一个 Int 参数，参数标签为 for Increment ，参数名称为 amount 。传递给此参数的参数值指定每次调用返回的增量函数时应增加多少 running Total 。 make Incrementer 函数定义了一个名为 incrementer 嵌套函数，它执行实际的递增。此函数只是将 amount 添加到 running Total 中，然后返回结果。

单独考虑时，嵌套的 `incrementer()` 函数可能看起来不寻常：

```swift
func incrementer() -> Int {
    runningTotal += amount
    return runningTotal
}
```

incrementer()函数没有任何参数，但它指的是在其函数体内 `runningTotal` 和 `amount` 。它通过从周围函数捕获对 running Total 和 amount 引用并在自己的函数体内使用它们来实现此目的。通过引用捕获可确保在调用 make Incrementer 结束时 running Total 和 amount 不会消失，并且还确保在下次调用 incrementer 函数时 `runningTotal` 可用。

注意

作为一种优化，如果某个值没有被闭包改变，并且该值在创建闭包后没有发生改变，那么 Swift 可能会捕获并存储该值的副本。

Swift 还处理不再需要时处理变量所涉及的所有内存管理。

以下是 make Incrementer 实际运行的示例：

```swift
let incrementByTen = makeIncrementer(forIncrement: 10)
```

此示例设置一个名为 increment By Ten 的常量来引用一个增量函数，每次调用该函数时，该函数都会向其 running Total 变量添加 10 。多次调用该函数会显示此行为的实际效果：

```swift
incrementByTen()
// returns a value of 10
incrementByTen()
// returns a value of 20
incrementByTen()
// returns a value of 30
```

如果您创建第二个增量器，它将拥有自己存储的对新的、单独 running Total 变量的引用：

```swift
let incrementBySeven = makeIncrementer(forIncrement: 7)
incrementBySeven()
// returns a value of 7
```

再次调用原始增量器（ increment By Ten ）继续增量其自己的 running Total 变量，并且不会影响 increment By Seven 捕获的变量：

```swift
incrementByTen()
// returns a value of 40
```

> 注意
>
> 如果将闭包分配给类实例的属性，并且闭包通过引用该实例或其成员来捕获该实例，则将在闭包和实例之间创建强引用循环。 Swift 使用捕获列表来打破这些强引用循环。有关更多信息，请参阅闭包的强引用循环。

## 闭包是引用类型

在上面的示例中， `incrementBySeven` 和 `incrementByTen` 是常量，但这些常量引用的闭包仍然能够增加它们捕获的 running Total 变量。这是因为函数和闭包是引用类型。

每当您将函数或闭包分配给常量或变量时，您实际上都是将该常量或变量设置为对该函数或闭包的引用。在上面的示例中， `incrementByTen` 的是闭包的选择，而不是闭包本身的内容。

这也意味着，如果将一个闭包分配给两个不同的常量或变量，则这两个常量或变量都引用同一个闭包。

```swift
let alsoIncrementByTen = incrementByTen
alsoIncrementByTen()
// returns a value of 50

incrementByTen()
// returns a value of 60
```

上面的示例显示，调用 `alsoIncrementByTen` 与调用 `incrementByTen` 相同。因为它们都引用相同的闭包，所以它们都会递增并返回相同的运行总计。

## 逃离封闭

当闭包作为参数传递给函数时，称为转义函数，但在函数返回后调用。当你声明一个以闭包作为参数之一的函数时，你可以在参数类型之前写 `@escaping` ，以表明允许闭包转义。

闭包逃逸的一种方法是存储在函数外部定义的变量中。例如，许多启动异步操作的函数都采用闭包参数作为完成处理程序。该函数在开始操作后返回，但在操作完成之前不会调用闭包 - 闭包需要转义，以便稍后调用。例如：

```swift
var completionHandlers: [() -> Void] = []
func someFunctionWithEscapingClosure(completionHandler: @escaping () -> Void) {
    completionHandlers.append(completionHandler)
}
```

这 `someFunctionWithEscapingClosure(_:)` 函数采用闭包作为其参数，并将其添加到在函数外部声明的数组中。如果您没有使用 `@escaping` 标记此函数的参数，您将收到编译时错误。

如果 `self` 引用类的实例，则需要特别考虑引用 `self` 转义闭包。在逃逸闭包中捕获 `self` 很容易意外地创建强引用循环。有关引用循环的信息，请参阅自动引用计数。

通常，闭包通过在闭包主体中使用变量来隐式捕获变量，但在这种情况下，您需要显式地捕获变量。如果你想捕获 `self` ，请在使用时明确写入 `self` ，或者将 `self` 包含在闭包的捕获列表中。明确地编写 `self` 可以让您表达您的意图，并提醒您确认不存在引用循环。例如，在下面的代码中，闭包传递给 `someFunctionWithEscapingClosure(_:)` 明确指代 `self` 。相反，关闭传递给 `someFunctionWithNonescapingClosure(_:)` 是一个非转义闭包，这意味着它可以隐式引用 `self` 。

```swift
func someFunctionWithNonescapingClosure(closure: () -> Void) {
    closure()
}

class SomeClass {
    var x = 10
    func doSomething() {
        someFunctionWithEscapingClosure { self.x = 100 }
        someFunctionWithNonescapingClosure { x = 200 }
    }
}

let instance = SomeClass()
instance.doSomething()
print(instance.x)
// Prints "200"

completionHandlers.first?()
print(instance.x)
// Prints "100"
```

下面是 do Something()的一个版本，它通过将 self ，然后隐式引用 self 。

```swift
class SomeOtherClass {
    var x = 10
    func doSomething() {
        someFunctionWithEscapingClosure { [self] in x = 100 }
        someFunctionWithNonescapingClosure { x = 200 }
    }
}
```

如果 self 是结构体或枚举的实例，则始终可以隐式引用 self 。但是，当 self 是结构或枚举的实例时，转义闭包无法捕获对 self 的可变引用。结构和枚举不允许共享可变性，如结构和枚举是值类型中所述。

```swift
struct SomeStruct {
    var x = 10
    mutating func doSomething() {
        someFunctionWithNonescapingClosure { x = 200 } // Ok
        someFunctionWithEscapingClosure { x = 100 } // Error
    }
}
```

致电给 `someFunctionWithEscapingClosure` 上面示例中的 `function` 是一个错误，因为它位于变异方法内，因此 self 是可变的。这违反了转义闭包无法捕获结构对 `self` 可变引用的规则。

## 自动闭包

自动闭包是自动创建的闭包，用于包装作为参数传递给函数的表达式。它不接受任何参数，当调用它时，它返回包含在其中的表达式的值。这种语法便利性使您可以通过编写普通表达式而不是显式闭包来省略函数参数周围的大括号。

调用采用自动闭包的函数很常见，但实现这种函数并不常见。例如， `assert(condition:message:file:line:)` 函数的 `condition` 和 `message` 参数采用自动闭包；其 `condition` 参数仅在调试版本中评估，其 `message` 参数仅在 `condition` 为 false 时评估。

自动闭包可以让您延迟计算，因为内部的代码在您调用闭包之前不会运行。延迟评估对于具有副作用或计算成本较高的代码很有用，因为它可以让您控制何时评估该代码。下面的代码显示了闭包如何延迟评估。

```swift
var customersInLine = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
print(customersInLine.count)
// Prints "5"

let customerProvider = { customersInLine.remove(at: 0) }
print(customersInLine.count)
// Prints "5"

print("Now serving \(customerProvider())!")
// Prints "Now serving Chris!"
print(customersInLine.count)
// Prints "4"
```

尽管 customers In Line 数组的第一个元素被闭包内的代码删除，但在实际调用闭包之前，该数组元素不会被删除。如果从未调用闭包，则永远不会计算闭包内的表达式，这意味着永远不会删除数组元素。请注意， customer Provider 的类型不是 String 而是 `() -> String` — 一个不带参数、返回字符串的函数。

当您将闭包作为参数传递给函数时，您会得到与延迟求值相同的行为。

```swift
// customersInLine is ["Alex", "Ewa", "Barry", "Daniella"]
func serve(customer customerProvider: () -> String) {
    print("Now serving \(customerProvider())!")
}
serve(customer: { customersInLine.remove(at: 0) } )
// Prints "Now serving Alex!"
```

上面清单中的 serve(customer:)函数采用显式闭包来返回客户的姓名。下面的 serve(customer:)版本执行相同的操作，但是它没有采用显式闭包，而是通过使用 `@autoclosure` 属性标记其参数类型来采用自动闭包。现在您可以调用该函数，就像它采用 String 参数而不是闭包一样。该参数会自动转换为闭包，因为 customer Provider 参数的类型是用 `@autoclosure` 属性标记的。

```swift
// customersInLine is ["Ewa", "Barry", "Daniella"]
func serve(customer customerProvider: @autoclosure () -> String) {
    print("Now serving \(customerProvider())!")
}
serve(customer: customersInLine.remove(at: 0))
// Prints "Now serving Ewa!"
```

> 注意
>
> 过度使用自动闭包会使您的代码难以理解。上下文和函数名称应该清楚地表明评估正在推迟。

如果您想要一个允许转义的自动闭包，请同时使用 `@autoclosure` 和 `@escaping` 属性。 `@escaping` 属性在上面的 `Escaping Closures` 中进行了描述。

```swift
// customersInLine is ["Barry", "Daniella"]
var customerProviders: [() -> String] = []
func collectCustomerProviders(_ customerProvider: @autoclosure @escaping () -> String) {
    customerProviders.append(customerProvider)
}
collectCustomerProviders(customersInLine.remove(at: 0))
collectCustomerProviders(customersInLine.remove(at: 0))

print("Collected \(customerProviders.count) closures.")
// Prints "Collected 2 closures."
for customerProvider in customerProviders {
    print("Now serving \(customerProvider())!")
}
// Prints "Now serving Barry!"
// Prints "Now serving Daniella!"
```
