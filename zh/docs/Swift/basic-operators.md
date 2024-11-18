# Basic Operators 基本运算符

> Perform operations like assignment, arithmetic, and comparison.
>
> 执行赋值、算术和比较等操作。

An operator is a special symbol or phrase that you use to check, change, or combine values. For example, the addition operator (+) adds two numbers, as in let i = 1 + 2, and the logical AND operator (&&) combines two Boolean values, as in if enteredDoorCode && passedRetinaScan.

运算符是用于检查、更改或组合值的特殊符号或短语。例如，加法运算符 ( + ) 将两个数字相加，如 let i = 1 + 2 ，逻辑 AND 运算符 ( && ) 组合两个布尔值，如 if enteredDoorCode && passedRetinaScan 。

Swift supports the operators you may already know from languages like C, and improves several capabilities to eliminate common coding errors. The assignment operator (=) doesn’t return a value, to prevent it from being mistakenly used when the equal to operator (==) is intended. Arithmetic operators (+, -, \_, /, % and so forth) detect and disallow value overflow, to avoid unexpected results when working with numbers that become larger or smaller than the allowed value range of the type that stores them. You can opt in to value overflow behavior by using Swift’s overflow operators, as described in Overflow Operators.

Swift 支持您可能已经从 C 语言等语言中了解的运算符，并改进了多项功能来消除常见的编码错误。赋值运算符 ( = ) 不返回值，以防止在使用等于运算符 ( == ) 时错误地使用它。算术运算符（ + 、 - 、 \_ 、 / 、 %等）检测并禁止值溢出，以避免在处理大于或小于存储它们的类型的允许值范围的数字时出现意外结果。您可以选择使用 Swift 的溢出运算符来评估溢出行为，如溢出运算符中所述。

Swift also provides range operators that aren’t found in C, such as `a..<b` and `a...b`, as a shortcut for expressing a range of values.

Swift 还提供了 C 中没有的范围运算符，例如 `a..<b` 和 `a...b` ，作为表达值范围的快捷方式。

This chapter describes the common operators in Swift. Advanced Operators covers Swift’s advanced operators, and describes how to define your own custom operators and implement the standard operators for your own custom types.

本章介绍 Swift 中的常用运算符。高级运算符涵盖了 Swift 的高级运算符，并描述了如何定义您自己的自定义运算符以及如何为您自己的自定义类型实现标准运算符。

## Terminology 术语

Operators are unary, binary, or ternary:

运算符可以是一元、二元或三元：

Unary operators operate on a single target (such as -a). Unary prefix operators appear immediately before their target (such as !b), and unary postfix operators appear immediately after their target (such as c!).

一元运算符对单个目标进行操作（例如-a ）。一元前缀运算符紧邻其目标之前出现（例如!b ），一元后缀运算符紧邻其目标之后出现（例如 c! ）。

Binary operators operate on two targets (such as 2 + 3) and are infix because they appear in between their two targets.

二元运算符对两个目标进行运算（例如 2 + 3 ），并且是中缀，因为它们出现在两个目标之间。

Ternary operators operate on three targets. Like C, Swift has only one ternary operator, the ternary conditional operator (a ? b : c).

三元运算符对三个目标进行操作。与 C 一样，Swift 只有一个三元运算符，即三元条件运算符 ( a ? b : c )。

The values that operators affect are operands. In the expression 1 + 2, the + symbol is an infix operator and its two operands are the values 1 and 2.

运算符影响的值是操作数。在表达式 1 + 2 中， +符号是中缀运算符，它的两个操作数是值 1 和 2 。

## Assignment Operator 赋值运算符

The assignment operator (a = b) initializes or updates the value of a with the value of b:

赋值运算符( a = b ) 用 b 的值初始化或更新 a 的值：

```swift
let b = 10
var a = 5
a = b
// a is now equal to 10
```

If the right side of the assignment is a tuple with multiple values, its elements can be decomposed into multiple constants or variables at once:

如果赋值的右侧是一个具有多个值的元组，则它的元素可以一次分解为多个常量或变量：

```swift
let (x, y) = (1, 2)
// x is equal to 1, and y is equal to 2
```

Unlike the assignment operator in C and Objective-C, the assignment operator in Swift doesn’t itself return a value. The following statement isn’t valid:

与 C 和 Objective-C 中的赋值运算符不同，Swift 中的赋值运算符本身不返回值。以下声明无效：

```swift
if x = y {
// This isn't valid, because x = y doesn't return a value.
}
```

This feature prevents the assignment operator (=) from being used by accident when the equal to operator (==) is actually intended. By making if x = y invalid, Swift helps you to avoid these kinds of errors in your code.

此功能可防止在实际使用等于运算符 ( == ) 时意外使用赋值运算符 ( = )。通过使 if x = y 无效，Swift 可以帮助您避免代码中出现此类错误。

## Arithmetic Operators 算术运算符

Swift supports the four standard arithmetic operators for all number types:

Swift 支持所有数字类型的四种标准算术运算符：

Addition (+)

加法 ( + )

Subtraction (-)

减法 ( - )

Multiplication (\_)

乘法（ \_ ）

Division (/)

除法 （ / ）

```swift
1 + 2 // equals 3
5 - 3 // equals 2
2 \* 3 // equals 6
10.0 / 2.5 // equals 4.0
```

Unlike the arithmetic operators in C and Objective-C, the Swift arithmetic operators don’t allow values to overflow by default. You can opt in to value overflow behavior by using Swift’s overflow operators (such as a &+ b). See Overflow Operators.

与 C 和 Objective-C 中的算术运算符不同，Swift 算术运算符默认不允许值溢出。您可以选择使用 Swift 的溢出运算符（例如 a &+ b ）来评估溢出行为。请参阅溢出运算符。

The addition operator is also supported for String concatenation:

String 连接还支持加法运算符：

```swift
"hello, " + "world" // equals "hello, world"
```

## Remainder Operator 余数运算符

The remainder operator (a % b) works out how many multiples of b will fit inside a and returns the value that’s left over (known as the remainder).

余数运算符( a % b ) 计算出 a 中可以容纳 b 的倍数，并返回剩下的值（称为余数）。

> Note 笔记
>
> The remainder operator (%) is also known as a modulo operator in other languages. However, its behavior in Swift for negative numbers means that, strictly speaking, it’s a remainder rather than a modulo operation.
>
> 余数运算符 ( % ) 在其他语言中也称为模运算符。然而，它在 Swift 中对负数的行为意味着，严格来说，它是余数运算而不是模运算。

Here’s how the remainder operator works. To calculate 9 % 4, you first work out how many 4s will fit inside 9:

以下是余数运算符的工作原理。要计算 9 % 4 ，您首先要算出 9 中可以容纳多少个 4 ：

You can fit two 4s inside 9, and the remainder is 1 (shown in orange).

您可以在 9 中放入两个 4 ，余数为 1 （以橙色显示）。

In Swift, this would be written as:

在 Swift 中，这可以写成：

```swift
9 % 4 // equals 1
```

To determine the answer for a % b, the % operator calculates the following equation and returns remainder as its output:

为了确定 a % b 的答案， %运算符计算以下方程并返回 remainder 作为其输出：

```swift
a = (b x some multiplier) + remainder
a = ( b x some multiplier ) + remainder

```

where some multiplier is the largest number of multiples of b that will fit inside a.

其中 some multiplier 是适合 a 的 b 倍数的最大数量。

Inserting 9 and 4 into this equation yields:

将 9 和 4 代入该方程可得：

```swift
9 = (4 x 2) + 1
9 = ( 4 x 2 ) + 1
```

The same method is applied when calculating the remainder for a negative value of a:

当计算 a 的负值的余数时，应用相同的方法：

```swift
-9 % 4 // equals -1
```

Inserting -9 and 4 into the equation yields:

将-9 和 4 入方程得出：

```swift
-9 = (4 x -2) + -1
-9 = ( 4 x -2 ) + -1
```

giving a remainder value of -1.

给出余数-1 。

The sign of b is ignored for negative values of b. This means that a % b and a % -b always give the same answer.

对于负值 b ，将忽略 b 的符号。这意味着 a % b 和 a % -b 总是给出相同的答案。

## Unary Minus Operator 一元减运算符

The sign of a numeric value can be toggled using a prefixed -, known as the unary minus operator:

数值的符号可以使用前缀-来切换，称为一元减运算符：

```swift
let three = 3
let minusThree = -three // minusThree equals -3
let plusThree = -minusThree // plusThree equals 3, or "minus minus three"
```

The unary minus operator (-) is prepended directly before the value it operates on, without any white space.

一元减运算符 ( - ) 直接添加到其所操作的值之前，没有任何空格。

## Unary Plus Operator 一元加运算符

The unary plus operator (+) simply returns the value it operates on, without any change:

一元加运算符( + ) 仅返回其运算的值，不做任何更改：

```swift
let minusSix = -6
let alsoMinusSix = +minusSix // alsoMinusSix equals -6
```

Although the unary plus operator doesn’t actually do anything, you can use it to provide symmetry in your code for positive numbers when also using the unary minus operator for negative numbers.

尽管一元加运算符实际上不执行任何操作，但在对负数使用一元减运算符时，您可以使用它在代码中为正数提供对称性。

## Compound Assignment Operators 复合赋值运算符

Like C, Swift provides compound assignment operators that combine assignment (=) with another operation. One example is the addition assignment operator (+=):

与 C 一样，Swift 提供了复合赋值运算符，将赋值 ( = ) 与另一个操作结合起来。一个例子是加法赋值运算符( += )：

```swift
var a = 1
a += 2
// a is now equal to 3
```

The expression a += 2 is shorthand for a = a + 2. Effectively, the addition and the assignment are combined into one operator that performs both tasks at the same time.
表达式 a += 2 是 a = a + 2 的简写。实际上，加法和赋值被合并到一个运算符中，同时执行这两项任务。

> Note 笔记
>
> The compound assignment operators don’t return a value. For example, you can’t write let b = a += 2.
>
> 复合赋值运算符不返回值。例如，您不能编写 let b = a += 2 。

For information about the operators provided by the Swift standard library, see Operator Declarations.

有关 Swift 标准库提供的运算符的信息，请参阅运算符声明。

## Comparison Operators 比较运算符

Swift supports the following comparison operators:

Swift 支持以下比较运算符：

Equal to (a == b)

等于 ( a == b )

Not equal to (a != b)

不等于 ( a != b )

Greater than (a > b)

大于( a > b )

Less than (a < b)

小于 ( a < b )

Greater than or equal to (a >= b)

大于或等于 ( a >= b )

Less than or equal to (a <= b)

小于或等于 ( a <= b )

> Note 笔记
>
> Swift also provides two identity operators (=== and !==), which you use to test whether two object references both refer to the same object instance. For more information, see Identity Operators.
>
> Swift 还提供了两个标识运算符（ ===和!== ），您可以使用它们来测试两个对象引用是否都引用同一个对象实例。有关更多信息，请参阅身份运算符。

Each of the comparison operators returns a Bool value to indicate whether or not the statement is true:

每个比较运算符都会返回一个 Bool 值来指示该语句是否为 true：

```swift
1 == 1 // true because 1 is equal to 1
2 != 1 // true because 2 isn't equal to 1
2 > 1 // true because 2 is greater than 1
1 < 2 // true because 1 is less than 2
1 >= 1 // true because 1 is greater than or equal to 1
2 <= 1 // false because 2 isn't less than or equal to 1
```

Comparison operators are often used in conditional statements, such as the if statement:

比较运算符常用于条件语句中，例如 if 语句：

```swift
let name = "world"
if name == "world" {
print("hello, world")
} else {
print("I'm sorry \(name), but I don't recognize you")
}
// Prints "hello, world", because name is indeed equal to "world".
```

For more about the if statement, see Control Flow.

有关 if 语句的更多信息，请参阅控制流。

You can compare two tuples if they have the same type and the same number of values. Tuples are compared from left to right, one value at a time, until the comparison finds two values that aren’t equal. Those two values are compared, and the result of that comparison determines the overall result of the tuple comparison. If all the elements are equal, then the tuples themselves are equal. For example:

如果两个元组具有相同的类型和相同的值数量，则可以比较它们。元组从左到右进行比较，一次比较一个值，直到比较发现两个不相等的值。比较这两个值，比较的结果决定元组比较的总体结果。如果所有元素都相等，则元组本身也相等。例如：

```swift
(1, "zebra") < (2, "apple") // true because 1 is less than 2; "zebra" and "apple" aren't compared
(3, "apple") < (3, "bird") // true because 3 is equal to 3, and "apple" is less than "bird"
(4, "dog") == (4, "dog") // true because 4 is equal to 4, and "dog" is equal to "dog"
```

In the example above, you can see the left-to-right comparison behavior on the first line. Because 1 is less than 2, (1, "zebra") is considered less than (2, "apple"), regardless of any other values in the tuples. It doesn’t matter that "zebra" isn’t less than "apple", because the comparison is already determined by the tuples’ first elements. However, when the tuples’ first elements are the same, their second elements are compared — this is what happens on the second and third line.

在上面的示例中，您可以在第一行看到从左到右的比较行为。由于 1 小于 2 ， (1, "zebra")被视为小于(2, "apple") ，无论元组中的任何其他值如何。 "zebra"不小于"apple"并不重要，因为比较已经由元组的第一个元素确定。然而，当元组的第一个元素相同时，会比较它们的第二个元素——这就是第二行和第三行发生的情况。

Tuples can be compared with a given operator only if the operator can be applied to each value in the respective tuples. For example, as demonstrated in the code below, you can compare two tuples of type (String, Int) because both String and Int values can be compared using the < operator. In contrast, two tuples of type (String, Bool) can’t be compared with the < operator because the < operator can’t be applied to Bool values.

仅当运算符可以应用于相应元组中的每个值时，元组才能与给定运算符进行比较。例如，如下面的代码所示，您可以比较两个(String, Int)类型的元组，因为 String 和 Int 值都可以使用<运算符进行比较。相反，两个类型(String, Bool)的元组无法与<运算符进行比较，因为<运算符不能应用于 Bool 值。

```swift
("blue", -1) < ("purple", 1) // OK, evaluates to true
("blue", false) < ("purple", true) // Error because < can't compare Boolean values
```

> Note 笔记
>
> The Swift standard library includes tuple comparison operators for tuples with fewer than seven elements. To compare tuples with seven or more elements, you must implement the comparison operators yourself.
>
> Swift 标准库包含用于少于七个元素的元组的元组比较运算符。要比较具有七个或更多元素的元组，您必须自己实现比较运算符。

## Ternary Conditional Operator 三元条件运算符

The ternary conditional operator is a special operator with three parts, which takes the form question ? answer1 : answer2. It’s a shortcut for evaluating one of two expressions based on whether question is true or false. If question is true, it evaluates answer1 and returns its value; otherwise, it evaluates answer2 and returns its value.

三元条件运算符是一个特殊的运算符，由三个部分组成，其形式为 question ? answer1 : answer2 。这是根据 question 是真是假来评估两个表达式之一的快捷方式。如果 question 为真，则评估 answer1 并返回其值；否则，它会评估 answer2 并返回其值。

The ternary conditional operator is shorthand for the code below:

三元条件运算符是以下代码的简写：

```swift
if question {
answer1
} else {
answer2
}
```

Here’s an example, which calculates the height for a table row. The row height should be 50 points taller than the content height if the row has a header, and 20 points taller if the row doesn’t have a header:

这是一个计算表格行高度的示例。如果行有标题，则行高应比内容高度高 50 点；如果行没有标题，则行高应高 20 点：

```swift
let contentHeight = 40
let hasHeader = true
let rowHeight = contentHeight + (hasHeader ? 50 : 20)
// rowHeight is equal to 90
```

The example above is shorthand for the code below:
上面的例子是下面代码的简写：

```swift
let contentHeight = 40
let hasHeader = true
let rowHeight: Int
if hasHeader {
rowHeight = contentHeight + 50
} else {
rowHeight = contentHeight + 20
}
// rowHeight is equal to 90
```

The first example’s use of the ternary conditional operator means that rowHeight can be set to the correct value on a single line of code, which is more concise than the code used in the second example.

第一个示例使用三元条件运算符意味着可以通过一行代码将 row Height 设置为正确的值，这比第二个示例中使用的代码更加简洁。

The ternary conditional operator provides an efficient shorthand for deciding which of two expressions to consider. Use the ternary conditional operator with care, however. Its conciseness can lead to hard-to-read code if overused. Avoid combining multiple instances of the ternary conditional operator into one compound statement.

三元条件运算符提供了一种有效的速记方式来决定考虑两个表达式中的哪一个。但是，请谨慎使用三元条件运算符。如果过度使用，它的简洁性可能会导致代码难以阅读。避免将三元条件运算符的多个实例组合到一个复合语句中。

## Nil-Coalescing Operator 零合并运算符

The nil-coalescing operator (a ?? b) unwraps an optional a if it contains a value, or returns a default value b if a is nil. The expression a is always of an optional type. The expression b must match the type that’s stored inside a.

nil 合并运算符( a ?? b ) 如果可选 a 包含值，则将其解包；如果 a 为 nil 则返回默认值 b 。表达式 a 始终是可选类型。表达式 b 必须与 a 中存储的类型匹配。

The nil-coalescing operator is shorthand for the code below:

零合并运算符是以下代码的简写：

```swift
a != nil ? a! : b
```

The code above uses the ternary conditional operator and forced unwrapping (a!) to access the value wrapped inside a when a isn’t nil, and to return b otherwise. The nil-coalescing operator provides a more elegant way to encapsulate this conditional checking and unwrapping in a concise and readable form.

上面的代码使用三元条件运算符和强制展开 ( a! ) 来在 a 不为 nil 时访问包含在 a 内的值，否则返回 b 。 nil-coalescing 运算符提供了一种更优雅的方式来以简洁易读的形式封装这种条件检查和展开。

> Note 笔记
>
> If the value of a is non-nil, the value of b isn’t evaluated. This is known as short-circuit evaluation.
>
> 如果 a 的值不为 nil ，则不计算 b 的值。这称为短路评估。

The example below uses the nil-coalescing operator to choose between a default color name and an optional user-defined color name:

下面的示例使用 nil-coalescing 运算符在默认颜色名称和可选的用户定义颜色名称之间进行选择：

```swift
let defaultColorName = "red"
var userDefinedColorName: String? // defaults to nil

var colorNameToUse = userDefinedColorName ?? defaultColorName
// userDefinedColorName is nil, so colorNameToUse is set to the default of "red"
```

The userDefinedColorName variable is defined as an optional String, with a default value of nil. Because userDefinedColorName is of an optional type, you can use the nil-coalescing operator to consider its value. In the example above, the operator is used to determine an initial value for a String variable called colorNameToUse. Because userDefinedColorName is nil, the expression userDefinedColorName ?? defaultColorName returns the value of defaultColorName, or "red".

userDefinedColorName 变量被定义为可选的 String ，默认值为 nil 。由于 user Defined Color Name 是可选类型，因此您可以使用 nil-coalescing 运算符来考虑其值。在上面的示例中，运算符用于确定名为 color Name To Use 的 String 变量的初始值。因为 user Defined Color Name 为 nil ，所以表达式 userDefinedColorName ?? defaultColorName 返回 default Color Name 或"red"的值。

If you assign a non-nil value to userDefinedColorName and perform the nil-coalescing operator check again, the value wrapped inside userDefinedColorName is used instead of the default:

如果将 nil 值分配给 user Defined Color Name 并再次执行零合并运算符检查，则将使用包装在 user Defined Color Name 中的值而不是默认值：

```swift
userDefinedColorName = "green"
colorNameToUse = userDefinedColorName ?? defaultColorName
// userDefinedColorName isn't nil, so colorNameToUse is set to "green"
```

## Range Operators 范围运算符

Swift includes several range operators, which are shortcuts for expressing a range of values.

Swift 包含几个范围运算符，它们是表达一系列值的快捷方式。

### Closed Range Operator 封闭范围

The closed range operator (a...b) defines a range that runs from a to b, and includes the values a and b. The value of a must not be greater than b.

闭范围运算符( a...b ) 定义从 a 到 b 范围，并包括值 a 和 b 。 a 的值不得大于 b 。

The closed range operator is useful when iterating over a range in which you want all of the values to be used, such as with a for-in loop:

当您希望使用所有值的范围进行迭代时（例如使用 for - in 循环），闭范围运算符非常有用：

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

For more about for-in loops, see Control Flow.

有关 for - in 循环的更多信息，请参阅控制流。

### Half-Open Range Operator 半开范围运算符

The half-open range operator (`a..<b`) defines a range that runs from a to b, but doesn’t include b. It’s said to be half-open because it contains its first value, but not its final value. As with the closed range operator, the value of a must not be greater than b. If the value of a is equal to b, then the resulting range will be empty.

半开范围运算符( `a..<b` ) 定义从 a 到 b 范围，但不包括 b 。之所以说它是半开的，是因为它包含其第一个值，但不包含其最终值。与闭范围运算符一样， a 的值不得大于 b 。如果 a 的值等于 b ，则结果范围将为空。

Half-open ranges are particularly useful when you work with zero-based lists such as arrays, where it’s useful to count up to (but not including) the length of the list:

当您使用从零开始的列表（例如数组）时，半开范围特别有用，在这种情况下，计算（但不包括）列表的长度很有用：

```swift
let names = ["Anna", "Alex", "Brian", "Jack"]
let count = names.count
for i in 0..<count {
print("Person \(i + 1) is called \(names[i])")
}
// Person 1 is called Anna
// Person 2 is called Alex
// Person 3 is called Brian
// Person 4 is called Jack
```

Note that the array contains four items, but `0..<count` only counts as far as 3 (the index of the last item in the array), because it’s a half-open range. For more about arrays, see Arrays.

请注意，该数组包含四个项目，但 `0..<count` 只计数到 3 （数组中最后一项的索引），因为它是半开范围。有关数组的更多信息，请参阅数组。

### One-Sided Ranges 单边范围

The closed range operator has an alternative form for ranges that continue as far as possible in one direction — for example, a range that includes all the elements of an array from index 2 to the end of the array. In these cases, you can omit the value from one side of the range operator. This kind of range is called a one-sided range because the operator has a value on only one side. For example:

对于在一个方向上尽可能连续的范围，闭范围运算符有一种替代形式 - 例如，包含数组中从索引 2 到数组末尾的所有元素的范围。在这些情况下，您可以省略范围运算符一侧的值。这种范围称为单侧范围，因为运算符仅在一侧有值。例如：

```swift
for name in names[2...] {
print(name)
}
// Brian
// Jack

for name in names[...2] {
print(name)
}
// Anna
// Alex
// Brian
```

The half-open range operator also has a one-sided form that’s written with only its final value. Just like when you include a value on both sides, the final value isn’t part of the range. For example:

半开范围运算符还有一种单边形式，仅用其最终值来编写。就像当您在两侧都包含一个值时一样，最终值不属于该范围。例如：

```swift
for name in names[..<2] {
print(name)
}
// Anna
// Alex
```

One-sided ranges can be used in other contexts, not just in subscripts. You can’t iterate over a one-sided range that omits a first value, because it isn’t clear where iteration should begin. You can iterate over a one-sided range that omits its final value; however, because the range continues indefinitely, make sure you add an explicit end condition for the loop. You can also check whether a one-sided range contains a particular value, as shown in the code below.

单边范围可以在其他上下文中使用，而不仅仅是在下标中。您无法迭代省略第一个值的单边范围，因为不清楚迭代应该从哪里开始。您可以迭代忽略其最终值的单边范围；但是，由于范围无限期地延续，因此请确保为循环添加显式结束条件。您还可以检查单边范围是否包含特定值，如下面的代码所示。

```swift
let range = ...5
range.contains(7) // false
range.contains(4) // true
range.contains(-1) // true
```

## Logical Operators 逻辑运算符

Logical operators modify or combine the Boolean logic values true and false. Swift supports the three standard logical operators found in C-based languages:

逻辑运算符修改或组合布尔逻辑值 true 和 false 。 Swift 支持基于 C 的语言中的三种标准逻辑运算符：

Logical NOT (!a)

逻辑非 ( !a )

Logical AND (a && b)

逻辑与 ( a && b )

Logical OR (a || b)

逻辑或（ a || b ）

### Logical NOT Operator 逻辑非运算符

The logical NOT operator (!a) inverts a Boolean value so that true becomes false, and false becomes true.

逻辑 NOT 运算符( !a ) 反转布尔值，使 true 变为 false ，而 false 变为 true 。

The logical NOT operator is a prefix operator, and appears immediately before the value it operates on, without any white space. It can be read as “not a”, as seen in the following example:

逻辑 NOT 运算符是前缀运算符，紧邻其运算值之前出现，没有任何空格。它可以读作“not a ”，如下例所示：

```swift
let allowedEntry = false
if !allowedEntry {
print("ACCESS DENIED")
}
// Prints "ACCESS DENIED"
```

The phrase if !allowedEntry can be read as “if not allowed entry.” The subsequent line is only executed if “not allowed entry” is true; that is, if allowedEntry is false.

短语 if !allowed Entry 可以读作“如果不允许进入”。仅当“不允许进入”为 true 时才执行后续行；也就是说，如果 allowed Entry 为 false 。

As in this example, careful choice of Boolean constant and variable names can help to keep code readable and concise, while avoiding double negatives or confusing logic statements.

如本示例所示，仔细选择布尔常量和变量名称有助于保持代码的可读性和简洁性，同时避免双重否定或令人困惑的逻辑语句。

### Logical AND Operator 逻辑与运算符

The logical AND operator (a && b) creates logical expressions where both values must be true for the overall expression to also be true.

逻辑 AND 运算符( a && b ) 创建逻辑表达式，其中两个值都必须为 true ，整个表达式也必须为 true 。

If either value is false, the overall expression will also be false. In fact, if the first value is false, the second value won’t even be evaluated, because it can’t possibly make the overall expression equate to true. This is known as short-circuit evaluation.

如果任一值为 false ，则整个表达式也将为 false 。事实上，如果第一个值是 false ，则甚至不会计算第二个值，因为它不可能使整个表达式等于 true 。这称为短路评估。

This example considers two Bool values and only allows access if both values are true:

此示例考虑两个 Bool 值，并且仅当两个值均为 true 时才允许访问：

```swift
let enteredDoorCode = true
let passedRetinaScan = false
if enteredDoorCode && passedRetinaScan {
print("Welcome!")
} else {
print("ACCESS DENIED")
}
// Prints "ACCESS DENIED"
```

### Logical OR Operator 逻辑或运算符

The logical OR operator (a || b) is an infix operator made from two adjacent pipe characters. You use it to create logical expressions in which only one of the two values has to be true for the overall expression to be true.

逻辑 OR 运算符( a || b ) 是由两个相邻管道字符组成的中缀运算符。您可以使用它来创建逻辑表达式，其中只有两个值之一必须为 true 才能使整个表达式为 true 。

Like the Logical AND operator above, the Logical OR operator uses short-circuit evaluation to consider its expressions. If the left side of a Logical OR expression is true, the right side isn’t evaluated, because it can’t change the outcome of the overall expression.

与上面的逻辑 AND 运算符类似，逻辑 OR 运算符使用短路求值来考虑其表达式。如果逻辑 OR 表达式的左侧为 true ，则不会计算右侧，因为它无法更改整个表达式的结果。

In the example below, the first Bool value (hasDoorKey) is false, but the second value (knowsOverridePassword) is true. Because one value is true, the overall expression also evaluates to true, and access is allowed:

在下面的示例中，第一个 Bool 值（ has Door Key ）为 false ，但第二个值（ knows Override Password ）为 true 。因为有一个值为 true ，所以整个表达式的计算结果也为 true ，并且允许访问：

```swift
let hasDoorKey = false
let knowsOverridePassword = true
if hasDoorKey || knowsOverridePassword {
print("Welcome!")
} else {
print("ACCESS DENIED")
}
// Prints "Welcome!"
```

## Combining Logical Operators

组合逻辑运算符

You can combine multiple logical operators to create longer compound expressions:

您可以组合多个逻辑运算符来创建更长的复合表达式：

```swift
if enteredDoorCode && passedRetinaScan || hasDoorKey || knowsOverridePassword {
print("Welcome!")
} else {
print("ACCESS DENIED")
}
// Prints "Welcome!"
```

This example uses multiple && and || operators to create a longer compound expression. However, the && and || operators still operate on only two values, so this is actually three smaller expressions chained together. The example can be read as:

此示例使用多个&&和||运算符来创建更长的复合表达式。然而， &&和||运算符仍然只对两个值进行操作，因此这实际上是链接在一起的三个较小的表达式。该示例可以解读为：

If we’ve entered the correct door code and passed the retina scan, or if we have a valid door key, or if we know the emergency override password, then allow access.

如果我们输入了正确的门密码并通过了视网膜扫描，或者如果我们有有效的门钥匙，或者如果我们知道紧急覆盖密码，则允许访问。

Based on the values of enteredDoorCode, passedRetinaScan, and hasDoorKey, the first two subexpressions are false. However, the emergency override password is known, so the overall compound expression still evaluates to true.

根据 entered Door Code 、 passed Retina Scan 和 has Door Key 的值，前两个子表达式为 false 。但是，紧急覆盖密码已知，因此整个复合表达式的计算结果仍为 true 。

> Note 笔记
>
> The Swift logical operators && and || are left-associative, meaning that compound expressions with multiple logical operators evaluate the leftmost subexpression first.
>
> Swift 逻辑运算符&&和||是左关联的，这意味着具有多个逻辑运算符的复合表达式首先计算最左边的子表达式。

## Explicit Parentheses 显式括号

It’s sometimes useful to include parentheses when they’re not strictly needed, to make the intention of a complex expression easier to read. In the door access example above, it’s useful to add parentheses around the first part of the compound expression to make its intent explicit:

有时，在并非严格需要的情况下包含括号很有用，以使复杂表达式的意图更易于阅读。在上面的门禁示例中，在复合表达式的第一部分周围添加括号以使其意图明确非常有用：

```swift
if (enteredDoorCode && passedRetinaScan) || hasDoorKey || knowsOverridePassword {
print("Welcome!")
} else {
print("ACCESS DENIED")
}
// Prints "Welcome!"
```

The parentheses make it clear that the first two values are considered as part of a separate possible state in the overall logic. The output of the compound expression doesn’t change, but the overall intention is clearer to the reader. Readability is always preferred over brevity; use parentheses where they help to make your intentions clear.

括号清楚地表明前两个值被视为整体逻辑中单独的可能状态的一部分。复合表达式的输出没有改变，但总体意图对读者来说更加清晰。可读性始终优先于简洁性；使用括号有助于明确您的意图。
