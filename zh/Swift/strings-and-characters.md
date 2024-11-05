# Strings and Characters 字符串和字符

> Store and manipulate text.
> 存储和操作文本。

A string is a series of characters, such as "hello, world" or "albatross". Swift strings are represented by the String type. The contents of a String can be accessed in various ways, including as a collection of Character values.

字符串是一系列字符，例如"hello, world"或"albatross" 。 Swift 字符串由 String 类型表示。可以通过多种方式访问 String 的内容，包括作为 Character 值的集合。

Swift’s String and Character types provide a fast, Unicode-compliant way to work with text in your code. The syntax for string creation and manipulation is lightweight and readable, with a string literal syntax that’s similar to C. String concatenation is as simple as combining two strings with the + operator, and string mutability is managed by choosing between a constant or a variable, just like any other value in Swift. You can also use strings to insert constants, variables, literals, and expressions into longer strings, in a process known as string interpolation. This makes it easy to create custom string values for display, storage, and printing.

Swift 的 String 和 Character 类型提供了一种快速且符合 Unicode 的方式来处理代码中的文本。字符串创建和操作的语法是轻量级且可读的，具有类似于 C 的字符串文字语法。字符串连接就像使用+运算符组合两个字符串一样简单，并且通过在常量或变量之间进行选择来管理字符串可变性，就像 Swift 中的任何其他值一样。您还可以使用字符串将常量、变量、文字和表达式插入较长的字符串中，这一过程称为字符串插值。这使得创建用于显示、存储和打印的自定义字符串值变得容易。

Despite this simplicity of syntax, Swift’s String type is a fast, modern string implementation. Every string is composed of encoding-independent Unicode characters, and provides support for accessing those characters in various Unicode representations.

尽管语法很简单，但 Swift 的 String 类型是一种快速、现代的字符串实现。每个字符串都由与编码无关的 Unicode 字符组成，并提供对以各种 Unicode 表示形式访问这些字符的支持。

> Note 笔记
>
> Swift’s String type is bridged with Foundation’s NSString class. Foundation also extends String to expose methods defined by NSString. This means, if you import Foundation, you can access those NSString methods on String without casting.
>
> Swift 的 String 类型与 Foundation 的 NSString 类桥接。 Foundation 还扩展了 String 以公开 NSString 定义的方法。这意味着，如果导入 Foundation，您可以访问 String 上的那些 NSString 方法，而无需进行强制转换。

For more information about using String with Foundation and Cocoa, see Bridging Between String and NSString.

有关在 Foundation 和 Cocoa 中使用 String 的更多信息，请参阅 String 和 NSString 之间的桥接。

## String Literals 字符串文字

You can include predefined String values within your code as string literals. A string literal is a sequence of characters surrounded by double quotation marks (").

您可以在代码中包含预定义的 String 值作为字符串文字。字符串文字是用双引号 ( " ) 括起来的字符序列。

Use a string literal as an initial value for a constant or variable:

使用字符串文字作为常量或变量的初始值：

```swift
let someString = "Some string literal value"
```

Note that Swift infers a type of String for the someString constant because it’s initialized with a string literal value.

请注意，Swift 会为 some String 常量推断出 String 类型，因为它是用字符串文字值初始化的。

## Multiline String Literals 多行字符串文字

If you need a string that spans several lines, use a multiline string literal — a sequence of characters surrounded by three double quotation marks:

如果您需要跨多行的字符串，请使用多行字符串文字 - 由三个双引号括起来的字符序列：

```swift
let quotation = """
The White Rabbit put on his spectacles. "Where shall I begin,
please your Majesty?" he asked.

"Begin at the beginning," the King said gravely, "and go on
till you come to the end; then stop."
"""
```

A multiline string literal includes all of the lines between its opening and closing quotation marks. The string begins on the first line after the opening quotation marks (""") and ends on the line before the closing quotation marks, which means that neither of the strings below start or end with a line break:

多行字符串文字包括其左引号和右引号之间的所有行。该字符串从左引号 ( """ ) 之后的第一行开始，到右引号之前的行结束，这意味着下面的字符串都不以换行符开头或结尾：

```swift
let singleLineString = "These are the same."
let multilineString = """
These are the same.
"""
```

When your source code includes a line break inside of a multiline string literal, that line break also appears in the string’s value. If you want to use line breaks to make your source code easier to read, but you don’t want the line breaks to be part of the string’s value, write a backslash (\) at the end of those lines:

当源代码在多行字符串文字中包含换行符时，该换行符也会出现在字符串的值中。如果您想使用换行符使源代码更易于阅读，但不希望换行符成为字符串值的一部分，请在这些行的末尾写入反斜杠 ( \ )：

```swift
let softWrappedQuotation = """
The White Rabbit put on his spectacles. "Where shall I begin, \
please your Majesty?" he asked.

"Begin at the beginning," the King said gravely, "and go on \
till you come to the end; then stop."
"""
```

To make a multiline string literal that begins or ends with a line feed, write a blank line as the first or last line. For example:

要制作以换行符开头或结尾的多行字符串文字，请编写一个空行作为第一行或最后一行。例如：

```swift
let lineBreaks = """

This string starts with a line break.
It also ends with a line break.

"""
```

A multiline string can be indented to match the surrounding code. The whitespace before the closing quotation marks (""") tells Swift what whitespace to ignore before all of the other lines. However, if you write whitespace at the beginning of a line in addition to what’s before the closing quotation marks, that whitespace is included.

多行字符串可以缩进以匹配周围的代码。右引号 ( """ ) 之前的空格告诉 Swift 在所有其他行之前要忽略哪些空格。但是，如果除了右引号之前的内容之外，您还在行的开头写入空格，则该空格将被忽略。包括。

In the example above, even though the entire multiline string literal is indented, the first and last lines in the string don’t begin with any whitespace. The middle line has more indentation than the closing quotation marks, so it starts with that extra four-space indentation.

在上面的示例中，即使整个多行字符串文字是缩进的，字符串中的第一行和最后一行也不以任何空格开头。中间行比右引号有更多的缩进，因此它以额外的四个空格缩进开始。

## Special Characters in String Literals 字符串文字中的特殊字符

String literals can include the following special characters:

字符串文字可以包含以下特殊字符：

The escaped special characters `\0` (null character), `\\` (backslash), `\t` (horizontal tab), `\n` (line feed), `\r` (carriage return), `\"` (double quotation mark) and `\'` (single quotation mark)

转义的特殊字符`\0` （空字符）、 `\\` （反斜杠）、 `\t` （水平制表符）、 `\n` （换行符）、 `\r` （回车符）、 `\"` （双引号）和`\'` （单引号）引号）

An arbitrary Unicode scalar value, written as \u{n}, where n is a 1–8 digit hexadecimal number (Unicode is discussed in Unicode below)

任意 Unicode 标量值，写为\u{ n } ，其中 n 是 1-8 位十六进制数（Unicode 在下面的 Unicode 中讨论）

The code below shows four examples of these special characters. The wiseWords constant contains two escaped double quotation marks. The dollarSign, blackHeart, and sparklingHeart constants demonstrate the Unicode scalar format:

下面的代码显示了这些特殊字符的四个示例。 wise Words 常量包含两个转义双引号。 dollar Sign 、 black Heart 和 sparkling Heart 常量演示了 Unicode 标量格式：

```swift
let wiseWords = "\"Imagination is more important than knowledge\" - Einstein"
// "Imagination is more important than knowledge" - Einstein
let dollarSign = "\u{24}" // $, Unicode scalar U+0024
let blackHeart = "\u{2665}" // ♥, Unicode scalar U+2665
let sparklingHeart = "\u{1F496}" // 💖, Unicode scalar U+1F496
```

Because multiline string literals use three double quotation marks instead of just one, you can include a double quotation mark (") inside of a multiline string literal without escaping it. To include the text """ in a multiline string, escape at least one of the quotation marks. For example:

由于多行字符串文字使用三个双引号（而不是仅一个），因此您可以在多行字符串文字内部包含双引号 ( " )，而不对其进行转义。要在多行字符串中包含文本""" ，请至少转义一个的引号。例如：

```swift
let threeDoubleQuotationMarks = """
Escaping the first quotation mark \"""
Escaping all three quotation marks \"\"\"
"""
```

## Extended String Delimiters 扩展字符串分隔符

You can place a string literal within extended delimiters to include special characters in a string without invoking their effect. You place your string within quotation marks (") and surround that with number signs (#). For example, printing the string literal #"Line 1\nLine 2"# prints the line feed escape sequence (\n) rather than printing the string across two lines.

您可以将字符串文字放在扩展分隔符内，以在字符串中包含特殊字符，而不调用它们的效果。将字符串放在引号 ( " ) 内，并用数字符号 ( # ) 括起来。例如，打印字符串文字#"Line 1\n Line 2"#将打印换行转义序列 ( \n )，而不是打印跨越两行的字符串。

If you need the special effects of a character in a string literal, match the number of number signs within the string following the escape character (\). For example, if your string is #"Line 1\nLine 2"# and you want to break the line, you can use #"Line 1\#nLine 2"# instead. Similarly, ###"Line1\###nLine2"### also breaks the line.

如果您需要字符串文字中的字符的特殊效果，请匹配转义字符 ( \ ) 后面的字符串中的数字符号的数量。例如，如果您的字符串是#"Line 1\n Line 2"#并且您想要换行，则可以使用#"Line 1\#n Line 2"#代替。同样， ###"Line1\###n Line2"###也会断行。

String literals created using extended delimiters can also be multiline string literals. You can use extended delimiters to include the text """ in a multiline string, overriding the default behavior that ends the literal. For example:

使用扩展分隔符创建的字符串文字也可以是多行字符串文字。您可以使用扩展分隔符将文本"""包含在多行字符串中，从而覆盖结束文字的默认行为。例如：

```swift
let threeMoreDoubleQuotationMarks = #"""
Here are three more double quotes: """
"""#
```

## Initializing an Empty String 初始化空字符串

To create an empty String value as the starting point for building a longer string, either assign an empty string literal to a variable or initialize a new String instance with initializer syntax:

要创建一个空 String 值作为构建较长字符串的起点，请将空字符串文字分配给变量或使用初始化语法初始化一个新的 String 实例：

```swift
var emptyString = "" // empty string literal
var anotherEmptyString = String() // initializer syntax
// these two strings are both empty, and are equivalent to each other
```

Find out whether a String value is empty by checking its Boolean isEmpty property:

通过检查其 Boolean is Empty 属性来确定 String 值是否为空：

```swift
if emptyString.isEmpty {
print("Nothing to see here")
}
// Prints "Nothing to see here"
```

## String Mutability 字符串可变性

You indicate whether a particular String can be modified (or mutated) by assigning it to a variable (in which case it can be modified), or to a constant (in which case it can’t be modified):

您可以通过将特定字符串分配给变量（在这种情况下可以修改）或常量（在这种情况下不能修改）来指示是否可以修改（或变异）特定的 String ：

```swift
var variableString = "Horse"
variableString += " and carriage"
// variableString is now "Horse and carriage"

let constantString = "Highlander"
constantString += " and another Highlander"
// this reports a compile-time error - a constant string cannot be modified
```

> Note 笔记
>
> This approach is different from string mutation in Objective-C and Cocoa, where you choose between two classes (NSString and NSMutableString) to indicate whether a string can be mutated.
>
> 这种方法与 Objective-C 和 Cocoa 中的字符串突变不同，您可以在两个类（ NSString 和 NSMutable String ）之间进行选择来指示字符串是否可以突变。

## Strings Are Value Types 字符串是值类型

Swift’s String type is a value type. If you create a new String value, that String value is copied when it’s passed to a function or method, or when it’s assigned to a constant or variable. In each case, a new copy of the existing String value is created, and the new copy is passed or assigned, not the original version. Value types are described in Structures and Enumerations Are Value Types.

Swift 的 String 类型是一种值类型。如果创建新的 String 值，则该 String 值在传递给函数或方法时，或者在分配给常量或变量时会被复制。在每种情况下，都会创建现有 String 值的新副本，并传递或分配新副本，而不是原始版本。结构和枚举是值类型中描述了值类型。

Swift’s copy-by-default String behavior ensures that when a function or method passes you a String value, it’s clear that you own that exact String value, regardless of where it came from. You can be confident that the string you are passed won’t be modified unless you modify it yourself.

Swift 的默认复制 String 行为可确保当函数或方法向您传递 String 值时，很明显您拥有该确切的 String 值，无论它来自何处。您可以确信，除非您自己修改，否则您传递的字符串不会被修改。

Behind the scenes, Swift’s compiler optimizes string usage so that actual copying takes place only when absolutely necessary. This means you always get great performance when working with strings as value types.

在幕后，Swift 的编译器优化了字符串的使用，以便仅在绝对必要时才进行实际复制。这意味着当使用字符串作为值类型时，您始终可以获得出色的性能。

## Working with Characters 使用角色

You can access the individual Character values for a String by iterating over the string with a for-in loop:

您可以通过使用 for - in 循环迭代字符串来访问 String 的各个 Character 值：

```swift
for character in "Dog!🐶" {
print(character)
}
// D
// o
// g
// !
// 🐶
```

The for-in loop is described in For-In Loops.

for - in 循环在 For-In 循环中进行了描述。

Alternatively, you can create a stand-alone Character constant or variable from a single-character string literal by providing a Character type annotation:

或者，您可以通过提供 Character 类型注释从单字符字符串文字创建独立的 Character 常量或变量：

let exclamationMark: Character = "!"
String values can be constructed by passing an array of Character values as an argument to its initializer:

可以通过将 Character 值数组作为参数传递给其初始值设定项来构造 String 值：

```swift
let catCharacters: [Character] = ["C", "a", "t", "!", "🐱"]
let catString = String(catCharacters)
print(catString)
// Prints "Cat!🐱"
```

## Concatenating Strings and Characters 连接字符串和字符

String values can be added together (or concatenated) with the addition operator (+) to create a new String value:

可以使用加法运算符 ( + ) 将 String 值相加（或连接）以创建新的 String 值：

```swift
let string1 = "hello"
let string2 = " there"
var welcome = string1 + string2
// welcome now equals "hello there"
```

You can also append a String value to an existing String variable with the addition assignment operator (+=):

您还可以使用加法赋值运算符 ( += ) 将 String 值附加到现有 String 变量：

```swift
var instruction = "look over"
instruction += string2
// instruction now equals "look over there"
```

You can append a Character value to a String variable with the String type’s append() method:

您可以使用 String 类型的 append()方法将 Character 值附加到 String 变量：

```swift
let exclamationMark: Character = "!"
welcome.append(exclamationMark)
// welcome now equals "hello there!"
```

> Note 笔记
>
> You can’t append a String or Character to an existing Character variable, because a Character value must contain a single character only.
>
> 您无法将 String 或 Character 附加到现有的 Character 变量，因为 Character 值必须仅包含单个字符。

If you’re using multiline string literals to build up the lines of a longer string, you want every line in the string to end with a line break, including the last line. For example:

如果您使用多行字符串文字来构建较长字符串的行，则您希望字符串中的每一行都以换行符结尾，包括最后一行。例如：

```swift
let badStart = """
one
two
"""
let end = """
three
"""
print(badStart + end)
// Prints two lines:
// one
// twothree

let goodStart = """
one
two

    """

print(goodStart + end)
// Prints three lines:
// one
// two
// three
```

In the code above, concatenating badStart with end produces a two-line string, which isn’t the desired result. Because the last line of badStart doesn’t end with a line break, that line gets combined with the first line of end. In contrast, both lines of goodStart end with a line break, so when it’s combined with end the result has three lines, as expected.

在上面的代码中，将 bad Start 与 end 连接起来会生成一个两行字符串，这不是所需的结果。因为 bad Start 的最后一行没有以换行符结束，所以该行会与 end 的第一行合并。相反， good Start 的两行都以换行符结束，因此当它与 end 组合时，结果如预期的那样具有三行。

## String Interpolation 字符串插值

String interpolation is a way to construct a new String value from a mix of constants, variables, literals, and expressions by including their values inside a string literal. You can use string interpolation in both single-line and multiline string literals. Each item that you insert into the string literal is wrapped in a pair of parentheses, prefixed by a backslash (\):

字符串插值是一种通过将常量、变量、文字和表达式的值包含在字符串文字中来构造新 String 值的方法。您可以在单行和多行字符串文字中使用字符串插值。插入到字符串文字中的每个项目都用一对括号括起来，并以反斜杠 ( \ ) 为前缀：

```swift
let multiplier = 3
let message = "\(multiplier) times 2.5 is \(Double(multiplier) \* 2.5)"
// message is "3 times 2.5 is 7.5"
```

In the example above, the value of multiplier is inserted into a string literal as \(multiplier). This placeholder is replaced with the actual value of multiplier when the string interpolation is evaluated to create an actual string.

在上面的示例中， multiplier 的值被插入到字符串文字中，如\(multiplier) 。当评估字符串插值以创建实际字符串时，此占位符将替换为 multiplier 的实际值。

The value of multiplier is also part of a larger expression later in the string. This expression calculates the value of Double(multiplier) _ 2.5 and inserts the result (7.5) into the string. In this case, the expression is written as \(Double(multiplier) _ 2.5) when it’s included inside the string literal.

multiplier 的值也是字符串后面较大表达式的一部分。此表达式计算 Double(multiplier) _ 2 .5 的值并将结果 ( 7 .5 ) 插入到字符串中。在本例中，当表达式包含在字符串文字中时，该表达式将写为\(Double(multiplier) _ 2 .5) 。

You can use extended string delimiters to create strings containing characters that would otherwise be treated as a string interpolation. For example:

您可以使用扩展字符串分隔符来创建包含字符的字符串，否则这些字符将被视为字符串插值。例如：

```swift
print(#"Write an interpolated string in Swift using \(multiplier)."#)
// Prints "Write an interpolated string in Swift using \(multiplier)."
```

To use string interpolation inside a string that uses extended delimiters, match the number of number signs after the backslash to the number of number signs at the beginning and end of the string. For example:

要在使用扩展分隔符的字符串内使用字符串插值，请将反斜杠后面的数字符号数量与字符串开头和结尾的数字符号数量相匹配。例如：

```swift
print(#"6 times 7 is \#(6 \* 7)."#)
// Prints "6 times 7 is 42."
```

> Note 笔记
>
> The expressions you write inside parentheses within an interpolated string can’t contain an unescaped backslash (\), a carriage return, or a line feed. However, they can contain other string literals.
>
> 在内插字符串的括号内编写的表达式不能包含未转义的反斜杠 ( \ )、回车符或换行符。但是，它们可以包含其他字符串文字。

## Unicode 统一码

Unicode is an international standard for encoding, representing, and processing text in different writing systems. It enables you to represent almost any character from any language in a standardized form, and to read and write those characters to and from an external source such as a text file or web page. Swift’s String and Character types are fully Unicode-compliant, as described in this section.

Unicode 是用于在不同书写系统中编码、表示和处理文本的国际标准。它使您能够以标准化形式表示任何语言的几乎任何字符，并从外部源（例如文本文件或网页）读取和写入这些字符。 Swift 的 String 和 Character 类型完全符合 Unicode，如本节所述。

## Unicode Scalar Values Unicode 标量值

Behind the scenes, Swift’s native String type is built from Unicode scalar values. A Unicode scalar value is a unique 21-bit number for a character or modifier, such as U+0061 for LATIN SMALL LETTER A ("a"), or U+1F425 for FRONT-FACING BABY CHICK ("🐥").

在幕后，Swift 的原生 String 类型是根据 Unicode 标量值构建的。 Unicode 标量值是字符或修饰符的唯一 21 位数字，例如 U+0061 表示 LATIN SMALL LETTER A ( "a" )，或 U+1F425 表示 FRONT-FACING BABY CHICK ( "🐥" )。

Note that not all 21-bit Unicode scalar values are assigned to a character — some scalars are reserved for future assignment or for use in UTF-16 encoding. Scalar values that have been assigned to a character typically also have a name, such as LATIN SMALL LETTER A and FRONT-FACING BABY CHICK in the examples above.

请注意，并非所有 21 位 Unicode 标量值都分配给字符 — 某些标量被保留以供将来分配或在 UTF-16 编码中使用。分配给字符的标量值通常也有一个名称，例如上面示例中的 LATIN SMALL LETTER A 和 FRONT-FACING BABY CHICK 。

## Extended Grapheme Clusters 扩展字素簇

Every instance of Swift’s Character type represents a single extended grapheme cluster. An extended grapheme cluster is a sequence of one or more Unicode scalars that (when combined) produce a single human-readable character.

Swift 的 Character 类型的每个实例都代表一个扩展的字素簇。扩展字素簇是一个或多个 Unicode 标量的序列，它们（组合时）产生单个人类可读字符。

Here’s an example. The letter é can be represented as the single Unicode scalar é (LATIN SMALL LETTER E WITH ACUTE, or U+00E9). However, the same letter can also be represented as a pair of scalars — a standard letter e (LATIN SMALL LETTER E, or U+0065), followed by the COMBINING ACUTE ACCENT scalar (U+0301). The COMBINING ACUTE ACCENT scalar is graphically applied to the scalar that precedes it, turning an e into an é when it’s rendered by a Unicode-aware text-rendering system.

这是一个例子。字母 é 可以表示为单个 Unicode 标量 é ( LATIN SMALL LETTER E WITH ACUTE ，或 U+00E9 ）。但是，同一个字母也可以表示为一对标量 - 一个标准字母 e （ LATIN SMALL LETTER E 或 U+0065 ），后跟 COMBINING ACUTE ACCENT 标量 ( U+0301 )。 COMBINING ACUTE ACCENT 标量以图形方式应用于其前面的标量，当由支持 Unicode 的文本呈现系统呈现时，将 e 转换为 é 。

In both cases, the letter é is represented as a single Swift Character value that represents an extended grapheme cluster. In the first case, the cluster contains a single scalar; in the second case, it’s a cluster of two scalars:

在这两种情况下，字母 é 都表示为单个 Swift Character 值，该值表示扩展的字素簇。在第一种情况下，簇包含单个标量；在第二种情况下，它是两个标量的簇：

```swift
let eAcute: Character = "\u{E9}" // é
let combinedEAcute: Character = "\u{65}\u{301}" // e followed by ́
// eAcute is é, combinedEAcute is é
```

Extended grapheme clusters are a flexible way to represent many complex script characters as a single Character value. For example, Hangul syllables from the Korean alphabet can be represented as either a precomposed or decomposed sequence. Both of these representations qualify as a single Character value in Swift:

扩展字素簇是将许多复杂的脚本字符表示为单个 Character 值的灵活方法。例如，韩语字母表中的韩文音节可以表示为预组合或分解的序列。这两种表示形式都可以作为 Swift 中的单个 Character 值：

```swift
let precomposed: Character = "\u{D55C}" // 한
let decomposed: Character = "\u{1112}\u{1161}\u{11AB}" // ᄒ, ᅡ, ᆫ
// precomposed is 한, decomposed is 한
```

Extended grapheme clusters enable scalars for enclosing marks (such as COMBINING ENCLOSING CIRCLE, or U+20DD) to enclose other Unicode scalars as part of a single Character value:

扩展字素簇支持用于封闭标记的标量（例如 COMBINING ENCLOSING CIRCLE 或 U+20DD ），以将其他 Unicode 标量封闭为单个 Character 值的一部分：

```swift
let enclosedEAcute: Character = "\u{E9}\u{20DD}"
// enclosedEAcute is é⃝
```

Unicode scalars for regional indicator symbols can be combined in pairs to make a single Character value, such as this combination of REGIONAL INDICATOR SYMBOL LETTER U (U+1F1FA) and REGIONAL INDICATOR SYMBOL LETTER S (U+1F1F8):

区域指示符符号的 Unicode 标量可以成对组合以形成单个 Character 值，例如以下组合 REGIONAL INDICATOR SYMBOL LETTER U ( U+1F1FA ) 和 REGIONAL INDICATOR SYMBOL LETTER S ( U+1F1F8 ):

```swift
let regionalIndicatorForUS: Character = "\u{1F1FA}\u{1F1F8}"
// regionalIndicatorForUS is 🇺🇸
```

## Counting Characters 计数字符

To retrieve a count of the Character values in a string, use the count property of the string:

要检索字符串中 Character 值的计数，请使用字符串的 count 属性：

```swift
let unusualMenagerie = "Koala 🐨, Snail 🐌, Penguin 🐧, Dromedary 🐪"
print("unusualMenagerie has \(unusualMenagerie.count) characters")
// Prints "unusualMenagerie has 40 characters"
```

Note that Swift’s use of extended grapheme clusters for Character values means that string concatenation and modification may not always affect a string’s character count.

请注意，Swift 对 Character 值使用扩展字素簇意味着字符串连接和修改可能并不总是影响字符串的字符数。

For example, if you initialize a new string with the four-character word cafe, and then append a COMBINING ACUTE ACCENT (U+0301) to the end of the string, the resulting string will still have a character count of 4, with a fourth character of é, not e:

例如，如果您使用四个字符的单词 cafe 初始化一个新字符串，然后将 COMBINING ACUTE ACCENT ( U+0301 ) 附加到该字符串的末尾，则生成的字符串的字符数仍为 4 ，并且 é 的第四个字符，而不是 e ：

```swift
var word = "cafe"
print("the number of characters in \(word) is \(word.count)")
// Prints "the number of characters in cafe is 4"

word += "\u{301}" // COMBINING ACUTE ACCENT, U+0301

print("the number of characters in \(word) is \(word.count)")
// Prints "the number of characters in café is 4"
```

> Note 笔记
>
> Extended grapheme clusters can be composed of multiple Unicode scalars. This means that different characters — and different representations of the same character — can require different amounts of memory to store. Because of this, characters in Swift don’t each take up the same amount of memory within a string’s representation. As a result, the number of characters in a string can’t be calculated without iterating through the string to determine its extended grapheme cluster boundaries. If you are working with particularly long string values, be aware that the count property must iterate over the Unicode scalars in the entire string in order to determine the characters for that string.
>
> 扩展字素簇可以由多个 Unicode 标量组成。这意味着不同的字符以及同一字符的不同表示可能需要不同的内存量来存储。因此，Swift 中的每个字符在字符串表示形式中占用的内存量并不相同。因此，如果不迭代字符串以确定其扩展字素簇边界，则无法计算字符串中的字符数。如果您正在使用特别长的字符串值，请注意 count 属性必须迭代整个字符串中的 Unicode 标量才能确定该字符串的字符。

The count of the characters returned by the count property isn’t always the same as the length property of an NSString that contains the same characters. The length of an NSString is based on the number of 16-bit code units within the string’s UTF-16 representation and not the number of Unicode extended grapheme clusters within the string.

count 属性返回的字符计数并不总是与包含相同字符的 NSString 的 length 属性相同。 NSString 的长度基于字符串的 UTF-16 表示形式中 16 位代码单元的数量，而不是字符串中 Unicode 扩展字素簇的数量。

## Accessing and Modifying a String 访问和修改字符串

You access and modify a string through its methods and properties, or by using subscript syntax.

您可以通过字符串的方法和属性或使用下标语法来访问和修改字符串。

## String Indices 字符串索引

Each String value has an associated index type, String.Index, which corresponds to the position of each Character in the string.

每个 String 值都有一个关联的索引类型 String .Index ，它对应于字符串中每个 Character 的位置。

As mentioned above, different characters can require different amounts of memory to store, so in order to determine which Character is at a particular position, you must iterate over each Unicode scalar from the start or end of that String. For this reason, Swift strings can’t be indexed by integer values.

如上所述，不同的字符可能需要不同的内存量来存储，因此为了确定哪个 Character 位于特定位置，您必须从该 String 的开头或结尾迭代每个 Unicode 标量。因此，Swift 字符串无法通过整数值进行索引。

Use the startIndex property to access the position of the first Character of a String. The endIndex property is the position after the last character in a String. As a result, the endIndex property isn’t a valid argument to a string’s subscript. If a String is empty, startIndex and endIndex are equal.

使用 start Index 属性来访问 String 的第一个 Character 的位置。 end Index 属性是 String 中最后一个字符之后的位置。因此， end Index 属性不是字符串下标的有效参数。如果 String 为空， start Index 和 end Index 相等。

You access the indices before and after a given index using the index(before:) and index(after:) methods of String. To access an index farther away from the given index, you can use the index(\_:offsetBy:) method instead of calling one of these methods multiple times.

您可以使用 String 的 index(before:)和 index(after:)方法访问给定索引之前和之后的索引。要访问距离给定索引较远的索引，可以使用 index(\_: offset By:)方法，而不是多次调用这些方法之一。

You can use subscript syntax to access the Character at a particular String index.

您可以使用下标语法来访问特定 String 索引处的 Character 。

```swift
let greeting = "Guten Tag!"
greeting[greeting.startIndex]
// G
greeting[greeting.index(before: greeting.endIndex)]
// !
greeting[greeting.index(after: greeting.startIndex)]
// u
let index = greeting.index(greeting.startIndex, offsetBy: 7)
greeting[index]
// a
```

Attempting to access an index outside of a string’s range or a Character at an index outside of a string’s range will trigger a runtime error.

尝试访问字符串范围之外的索引或字符串范围之外的索引处的 Character 将触发运行时错误。

```swift
greeting[greeting.endIndex] // Error
greeting.index(after: greeting.endIndex) // Error
```

Use the indices property to access all of the indices of individual characters in a string.

使用 indices 属性可以访问字符串中各个字符的所有索引。

```swift
for index in greeting.indices {
print("\(greeting[index]) ", terminator: "")
}
// Prints "G u t e n T a g ! "
```

> Note 笔记
>
> You can use the startIndex and endIndex properties and the `index(before:)`, `index(after:)`, and `index(\_:offsetBy:)` methods on any type that conforms to the Collection protocol. This includes String, as shown here, as well as collection types such as Array, Dictionary, and Set.
>
> 您可以在符合 Collection 协议的任何类型上使用 start Index 和 end Index 属性以及 `index(before:)` 、 `index(after:)`和 `index(\_: offset By:)`方法。这包括 String ，如此处所示，以及集合类型，例如 Array 、 Dictionary 和 Set 。

## Inserting and Removing 插入和移除

To insert a single character into a string at a specified index, use the `insert(_:at:)` method, and to insert the contents of another string at a specified index, use the insert(contentsOf:at:) method.

要将单个字符插入字符串中的指定索引处，请使用 `insert(_: at:)`方法；要将另一个字符串的内容插入指定索引处，请使用 `insert(contents Of: at:)`方法。

```swift
var welcome = "hello"
welcome.insert("!", at: welcome.endIndex)
// welcome now equals "hello!"

welcome.insert(contentsOf: " there", at: welcome.index(before: welcome.endIndex))
// welcome now equals "hello there!"
```

To remove a single character from a string at a specified index, use the remove(at:) method, and to remove a substring at a specified range, use the removeSubrange(\_:) method:

要从字符串中指定索引处删除单个字符，请使用 remove(at:)方法，要删除指定范围内的子字符串，请使用 remove Subrange(\_:)方法：

```swift
welcome.remove(at: welcome.index(before: welcome.endIndex))
// welcome now equals "hello there"

let range = welcome.index(welcome.endIndex, offsetBy: -6)..<welcome.endIndex
welcome.removeSubrange(range)
// welcome now equals "hello"
```

> Note 笔记
>
> You can use the insert(_:at:), insert(contentsOf:at:), remove(at:), and removeSubrange(_:) methods on any type that conforms to the RangeReplaceableCollection protocol. This includes String, as shown here, as well as collection types such as Array, Dictionary, and Set.
>
> 您可以在符合 Range Replaceable Collection 协议的任何类型上使用 insert(_: at:) 、 insert(contents Of: at:) 、 remove(at:)和 remove Subrange(_:)方法。这包括 String ，如此处所示，以及集合类型，例如 Array 、 Dictionary 和 Set 。

## Substrings 子串

When you get a substring from a string — for example, using a subscript or a method like prefix(\_:) — the result is an instance of Substring, not another string. Substrings in Swift have most of the same methods as strings, which means you can work with substrings the same way you work with strings. However, unlike strings, you use substrings for only a short amount of time while performing actions on a string. When you’re ready to store the result for a longer time, you convert the substring to an instance of String. For example:

当您从字符串中获取子字符串时（例如，使用下标或 prefix(\_:)等方法），结果是 Substring 的实例，而不是另一个字符串。 Swift 中的子字符串与字符串具有大部分相同的方法，这意味着您可以像处理字符串一样处理子字符串。但是，与字符串不同的是，在对字符串执行操作时，您仅在很短的时间内使用子字符串。当您准备好长期存储结果时，可以将子字符串转换为 String 的实例。例如：

```swift
let greeting = "Hello, world!"
let index = greeting.firstIndex(of: ",") ?? greeting.endIndex
let beginning = greeting[..<index]
// beginning is "Hello"

// Convert the result to a String for long-term storage.
let newString = String(beginning)
```

Like strings, each substring has a region of memory where the characters that make up the substring are stored. The difference between strings and substrings is that, as a performance optimization, a substring can reuse part of the memory that’s used to store the original string, or part of the memory that’s used to store another substring. (Strings have a similar optimization, but if two strings share memory, they’re equal.) This performance optimization means you don’t have to pay the performance cost of copying memory until you modify either the string or substring. As mentioned above, substrings aren’t suitable for long-term storage — because they reuse the storage of the original string, the entire original string must be kept in memory as long as any of its substrings are being used.

与字符串一样，每个子字符串都有一个存储区域，其中存储组成子字符串的字符。字符串和子字符串之间的区别在于，作为性能优化，子字符串可以重用用于存储原始字符串的部分内存，或用于存储另一个子字符串的部分内存。 （字符串也有类似的优化，但如果两个字符串共享内存，则它们是相等的。）这种性能优化意味着您不必付出复制内存的性能成本，直到修改字符串或子字符串。如上所述，子字符串不适合长期存储 - 因为它们重复使用原始字符串的存储，只要使用其任何子字符串，整个原始字符串就必须保留在内存中。

In the example above, greeting is a string, which means it has a region of memory where the characters that make up the string are stored. Because beginning is a substring of greeting, it reuses the memory that greeting uses. In contrast, newString is a string — when it’s created from the substring, it has its own storage. The figure below shows these relationships:

在上面的示例中， greeting 是一个字符串，这意味着它有一个内存区域，用于存储组成该字符串的字符。因为 beginning 是 greeting 的子字符串，所以它重用了 greeting 使用的内存。相比之下， new String 是一个字符串——当它是从子字符串创建时，它有自己的存储空间。下图展示了这些关系：

> Note 笔记
>
> Both String and Substring conform to the StringProtocol protocol, which means it’s often convenient for string-manipulation functions to accept a StringProtocol value. You can call such functions with either a String or Substring value.
>
> String 和 Substring 都符合 String Protocol 协议，这意味着字符串操作函数接受 String Protocol 值通常很方便。您可以使用 String 或 Substring 值调用此类函数。

## Comparing Strings 比较字符串

Swift provides three ways to compare textual values: string and character equality, prefix equality, and suffix equality.

Swift 提供了三种比较文本值的方法：字符串和字符相等、前缀相等和后缀相等。

## String and Character Equality 字符串和字符相等

String and character equality is checked with the “equal to” operator (==) and the “not equal to” operator (!=), as described in Comparison Operators:

使用“等于”运算符 ( == ) 和“不等于”运算符 ( != ) 检查字符串和字符相等性，如比较运算符中所述：

```swift
let quotation = "We're a lot alike, you and I."
let sameQuotation = "We're a lot alike, you and I."
if quotation == sameQuotation {
print("These two strings are considered equal")
}
// Prints "These two strings are considered equal"
```

Two String values (or two Character values) are considered equal if their extended grapheme clusters are canonically equivalent. Extended grapheme clusters are canonically equivalent if they have the same linguistic meaning and appearance, even if they’re composed from different Unicode scalars behind the scenes.

如果两个 String 值（或两个 Character 值）的扩展字素簇在规范上等效，则认为它们相等。如果扩展字素簇具有相同的语言含义和外观，则它们在规范上是等效的，即使它们在幕后由不同的 Unicode 标量组成。

For example, LATIN SMALL LETTER E WITH ACUTE (U+00E9) is canonically equivalent to LATIN SMALL LETTER E (U+0065) followed by COMBINING ACUTE ACCENT (U+0301). Both of these extended grapheme clusters are valid ways to represent the character é, and so they’re considered to be canonically equivalent:

例如， LATIN SMALL LETTER E WITH ACUTE ( U+00E9 ) 规范地相当于 LATIN SMALL LETTER E ( U+0065 ) 后跟 COMBINING ACUTE ACCENT ( U+0301 )。这两个扩展字素簇都是表示字符 é 的有效方法，因此它们被认为是规范等价的：

```swift
// "Voulez-vous un café?" using LATIN SMALL LETTER E WITH ACUTE
let eAcuteQuestion = "Voulez-vous un caf\u{E9}?"

// "Voulez-vous un café?" using LATIN SMALL LETTER E and COMBINING ACUTE ACCENT
let combinedEAcuteQuestion = "Voulez-vous un caf\u{65}\u{301}?"

if eAcuteQuestion == combinedEAcuteQuestion {
print("These two strings are considered equal")
}
// Prints "These two strings are considered equal"
```

Conversely, LATIN CAPITAL LETTER A (U+0041, or "A"), as used in English, is not equivalent to CYRILLIC CAPITAL LETTER A (U+0410, or "А"), as used in Russian. The characters are visually similar, but don’t have the same linguistic meaning:

相反，英语中使用的 LATIN CAPITAL LETTER A （ U+0041 或"A" ）并不等同于俄语中使用的 CYRILLIC CAPITAL LETTER A （ U+0410 或"А" ）。这些字符在视觉上相似，但没有相同的语言含义：

```swift
let latinCapitalLetterA: Character = "\u{41}"

let cyrillicCapitalLetterA: Character = "\u{0410}"

if latinCapitalLetterA != cyrillicCapitalLetterA {
print("These two characters aren't equivalent.")
}
// Prints "These two characters aren't equivalent."
```

> Note 笔记
>
> String and character comparisons in Swift aren’t locale-sensitive.
>
> Swift 中的字符串和字符比较不区分区域设置。

## Prefix and Suffix Equality 前缀和后缀相等

To check whether a string has a particular string prefix or suffix, call the string’s hasPrefix(_:) and hasSuffix(_:) methods, both of which take a single argument of type String and return a Boolean value.

要检查字符串是否具有特定的字符串前缀或后缀，请调用字符串的 has Prefix(_:)和 has Suffix(_:)方法，这两个方法都采用 String 类型的单个参数并返回布尔值。

The examples below consider an array of strings representing the scene locations from the first two acts of Shakespeare’s Romeo and Juliet:

下面的示例考虑表示莎士比亚的《罗密欧与朱丽叶》前两幕场景位置的字符串数组：

```swift
let romeoAndJuliet = [
"Act 1 Scene 1: Verona, A public place",
"Act 1 Scene 2: Capulet's mansion",
"Act 1 Scene 3: A room in Capulet's mansion",
"Act 1 Scene 4: A street outside Capulet's mansion",
"Act 1 Scene 5: The Great Hall in Capulet's mansion",
"Act 2 Scene 1: Outside Capulet's mansion",
"Act 2 Scene 2: Capulet's orchard",
"Act 2 Scene 3: Outside Friar Lawrence's cell",
"Act 2 Scene 4: A street in Verona",
"Act 2 Scene 5: Capulet's mansion",
"Act 2 Scene 6: Friar Lawrence's cell"
]
```

You can use the hasPrefix(\_:) method with the romeoAndJuliet array to count the number of scenes in Act 1 of the play:

您可以使用 has Prefix(\_:)方法和 romeo And Juliet 数组来计算该剧第一幕中的场景数：

```swift
var act1SceneCount = 0
for scene in romeoAndJuliet {
if scene.hasPrefix("Act 1 ") {
act1SceneCount += 1
}
}
print("There are \(act1SceneCount) scenes in Act 1")
// Prints "There are 5 scenes in Act 1"
```

Similarly, use the hasSuffix(\_:) method to count the number of scenes that take place in or around Capulet’s mansion and Friar Lawrence’s cell:

类似地，使用 has Suffix(\_:)方法来计算发生在 Capulet 宅邸和 Friar Lawrence 牢房内或周围的场景数量：

```swift
var mansionCount = 0
var cellCount = 0
for scene in romeoAndJuliet {
if scene.hasSuffix("Capulet's mansion") {
mansionCount += 1
} else if scene.hasSuffix("Friar Lawrence's cell") {
cellCount += 1
}
}
print("\(mansionCount) mansion scenes; \(cellCount) cell scenes")
// Prints "6 mansion scenes; 2 cell scenes"
```

> Note 笔记
>
> The hasPrefix(_:) and hasSuffix(_:) methods perform a character-by-character canonical equivalence comparison between the extended grapheme clusters in each string, as described in String and Character Equality.
>
> has Prefix(_:)和 has Suffix(_:)方法在每个字符串中的扩展字素簇之间执行逐个字符的规范等价比较，如字符串和字符相等中所述。

## Unicode Representations of Strings 字符串的 Unicode 表示形式

When a Unicode string is written to a text file or some other storage, the Unicode scalars in that string are encoded in one of several Unicode-defined encoding forms. Each form encodes the string in small chunks known as code units. These include the UTF-8 encoding form (which encodes a string as 8-bit code units), the UTF-16 encoding form (which encodes a string as 16-bit code units), and the UTF-32 encoding form (which encodes a string as 32-bit code units).

当将 Unicode 字符串写入文本文件或其他存储时，该字符串中的 Unicode 标量将以几种 Unicode 定义的编码形式之一进行编码。每种形式都将字符串编码为称为代码单元的小块。其中包括 UTF-8 编码形式（将字符串编码为 8 位代码单元）、UTF-16 编码形式（将字符串编码为 16 位代码单元）和 UTF-32 编码形式（将字符串编码为 16 位代码单元）。作为 32 位代码单元的字符串）。

Swift provides several different ways to access Unicode representations of strings. You can iterate over the string with a for-in statement, to access its individual Character values as Unicode extended grapheme clusters. This process is described in Working with Characters.

Swift 提供了几种不同的方法来访问字符串的 Unicode 表示形式。您可以使用 for - in 语句迭代字符串，以将其各个 Character 值作为 Unicode 扩展字素簇进行访问。使用字符中描述了此过程。

Alternatively, access a String value in one of three other Unicode-compliant representations:

或者，以其他三种 Unicode 兼容表示形式之一访问 String 值：

A collection of UTF-8 code units (accessed with the string’s utf8 property)

UTF-8 代码单元的集合（通过字符串的 utf8 属性访问）

A collection of UTF-16 code units (accessed with the string’s utf16 property)

UTF-16 代码单元的集合（通过字符串的 utf16 属性访问）

A collection of 21-bit Unicode scalar values, equivalent to the string’s UTF-32 encoding form (accessed with the string’s unicodeScalars property)

21 位 Unicode 标量值的集合，相当于字符串的 UTF-32 编码形式（使用字符串的 unicode Scalars 属性访问）

Each example below shows a different representation of the following string, which is made up of the characters D, o, g, ‼ (DOUBLE EXCLAMATION MARK, or Unicode scalar U+203C), and the 🐶 character (DOG FACE, or Unicode scalar U+1F436):

下面的每个示例显示了以下字符串的不同表示形式，该字符串由字符 D 、 o 、 g 、 ‼ （ DOUBLE EXCLAMATION MARK ，或 Unicode 标量 U+203C ）和 🐶 字符（ DOG FACE ，或 Unicode 标量）组成 U+1F436 ）：

```swift
let dogString = "Dog‼🐶"
```

## UTF-8 Representation UTF-8 表示

You can access a UTF-8 representation of a String by iterating over its utf8 property. This property is of type String.UTF8View, which is a collection of unsigned 8-bit (UInt8) values, one for each byte in the string’s UTF-8 representation:

您可以通过迭代字符串的 utf8 属性来访问 String 的 UTF-8 表示形式。此属性的类型为 String .UTF8View ，它是无符号 8 位 ( UInt8 ) 值的集合，每个值对应字符串的 UTF-8 表示形式中的每个字节：

```swift
for codeUnit in dogString.utf8 {
print("\(codeUnit) ", terminator: "")
}
print("")
// Prints "68 111 103 226 128 188 240 159 144 182 "
```

In the example above, the first three decimal codeUnit values (68, 111, 103) represent the characters D, o, and g, whose UTF-8 representation is the same as their ASCII representation. The next three decimal codeUnit values (226, 128, 188) are a three-byte UTF-8 representation of the DOUBLE EXCLAMATION MARK character. The last four codeUnit values (240, 159, 144, 182) are a four-byte UTF-8 representation of the DOG FACE character.

在上面的示例中，前三个十进制 code Unit 值 ( 68 、 111 、 103 ) 表示字符 D 、 o 和 g ，其 UTF-8 表示与其 ASCII 表示相同。 188 128 三个十进制 code Unit 值（ 226 ）是 DOUBLE EXCLAMATION MARK 字符的三字节 UTF-8 表示形式。最后四个 code Unit 值（ 240 ） 159 DOG FACE 字符的四字节 144 - 182 表示形式。

## UTF-16 Representation UTF-16 表示法

You can access a UTF-16 representation of a String by iterating over its utf16 property. This property is of type String.UTF16View, which is a collection of unsigned 16-bit (UInt16) values, one for each 16-bit code unit in the string’s UTF-16 representation:

您可以通过迭代 String 的 utf16 属性来访问 String 的 UTF-16 表示形式。此属性的类型为 String .UTF16View ，它是无符号 16 位 ( UInt16 ) 值的集合，每个值对应字符串 UTF-16 表示中的每个 16 位代码单元：

```swift
for codeUnit in dogString.utf16 {
print("\(codeUnit) ", terminator: "")
}
print("")
// Prints "68 111 103 8252 55357 56374 "
```

Again, the first three codeUnit values (68, 111, 103) represent the characters D, o, and g, whose UTF-16 code units have the same values as in the string’s UTF-8 representation (because these Unicode scalars represent ASCII characters).

同样，前三个 code Unit 值 ( 68 、 111 、 103 ) 表示字符 D 、 o 和 g ，它们的 UTF-16 代码单元具有与字符串的 UTF-8 表示中相同的值（因为这些 Unicode 标量表示 ASCII 人物）。

The fourth codeUnit value (8252) is a decimal equivalent of the hexadecimal value 203C, which represents the Unicode scalar U+203C for the DOUBLE EXCLAMATION MARK character. This character can be represented as a single code unit in UTF-16.

第四个 code Unit 值 ( 8252 ) 是十六进制值 203C 的十进制等价物，它表示 DOUBLE EXCLAMATION MARK 字符的 Unicode 标量 U+203C 。该字符可以表示为 UTF-16 中的单个代码单元。

The fifth and sixth codeUnit values (55357 and 56374) are a UTF-16 surrogate pair representation of the DOG FACE character. These values are a high-surrogate value of U+D83D (decimal value 55357) and a low-surrogate value of U+DC36 (decimal value 56374).

第五和第六个 code Unit 值（ 55357 和 56374 ）是 DOG FACE 字符的 UTF-16 代理对表示。这些值是 U+D83D （十进制值 55357 ）的高代理值和 U+DC36 （十进制值 56374 ）的低代理值。

## Unicode Scalar Representation Unicode 标量表示

You can access a Unicode scalar representation of a String value by iterating over its unicodeScalars property. This property is of type UnicodeScalarView, which is a collection of values of type UnicodeScalar.

您可以通过迭代 String 值的 unicode Scalars 属性来访问 String 值的 Unicode 标量表示形式。此属性的类型为 Unicode Scalar View ，它是 Unicode Scalar 类型的值的集合。

Each UnicodeScalar has a value property that returns the scalar’s 21-bit value, represented within a UInt32 value:

每个 Unicode Scalar 都有一个 value 属性，该属性返回标量的 21 位值，用 UInt32 值表示：

```swift
for scalar in dogString.unicodeScalars {
print("\(scalar.value) ", terminator: "")
}
print("")
// Prints "68 111 103 8252 128054 "
```

The value properties for the first three UnicodeScalar values (68, 111, 103) once again represent the characters D, o, and g.

前三个 Unicode Scalar 量值（ 68 ）的 value 属性再次表示字符 111 103 o 和 g D

The fourth codeUnit value (8252) is again a decimal equivalent of the hexadecimal value 203C, which represents the Unicode scalar U+203C for the DOUBLE EXCLAMATION MARK character.

第四个 code Unit 值 ( 8252 ) 也是十六进制值 203C 的十进制等价物，它表示 DOUBLE EXCLAMATION MARK 字符的 Unicode 标量 U+203C 。

The value property of the fifth and final UnicodeScalar, 128054, is a decimal equivalent of the hexadecimal value 1F436, which represents the Unicode scalar U+1F436 for the DOG FACE character.

第五个也是最后一个 Unicode Scalar 128054 的 value 属性是十六进制值 1F436 的十进制等效值，它表示 DOG FACE 字符的 Unicode 标量 U+1F436 。

As an alternative to querying their value properties, each UnicodeScalar value can also be used to construct a new String value, such as with string interpolation:

作为查询其 value 属性的替代方法，每个 Unicode Scalar 量值也可用于构造新的 String 值，例如使用字符串插值：

```swift
for scalar in dogString.unicodeScalars {
print("\(scalar) ")
}
// D
// o
// g
// ‼
// 🐶
```
