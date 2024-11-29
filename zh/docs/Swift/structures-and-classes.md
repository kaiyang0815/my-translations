结构体和类
封装数据的自定义类型。

结构体和类是通用且灵活的构造，是你程序代码的基本构建块。你可以使用与定义常量、变量和函数相同的语法，为结构体和类添加属性和方法来增加功能。

与其他编程语言不同，Swift 不要求你为自定义的结构体和类创建单独的接口文件和实现文件。在 Swift 中，你可以在单个文件中定义结构体或类，该类或结构体的外部接口会自动对其他代码可用。

> 注意
>
> 类的实例传统上被称为对象。然而，Swift 中的结构体和类在功能上比其他语言更接近，本章描述的大部分功能都适用于类或结构体类型的实例。因此，这里使用更通用的术语"实例"。

比较结构体和类
Swift 中的结构体和类有很多共同点。两者都可以：

- 定义属性来存储值
- 定义方法来提供功能
- 定义下标来提供通过下标语法访问值的方式
- 定义初始化器来设置初始状态
- 通过扩展来扩展默认实现之外的功能
- 遵循协议来提供某种标准功能

更多信息，请参见属性、方法、下标、初始化、扩展和协议。

类具有结构体所没有的额外功能：

- 继承使一个类可以继承另一个类的特征
- 类型转换使你能够在运行时检查和解释类实例的类型
- 析构器使类的实例能够释放其分配的资源
- 引用计数允许对一个类实例进行多次引用

更多信息，请参见继承、类型转换、析构过程和自动引用计数。

类支持的这些额外功能是以增加复杂性为代价的。作为一般准则，优先使用结构体，因为它们更容易理解，只在适当或必要时使用类。在实践中，这意味着你定义的大多数自定义类型都将是结构体和枚举。有关更详细的比较，请参见在结构体和类之间选择。

> 注意
>
> 类和 actor 共享许多相同的特征和行为。有关 actor 的信息，请参见并发。

定义语法
结构体和类有相似的定义语法。使用 `struct` 关键字引入结构体，使用 `class` 关键字引入类。两者都将其整个定义放在一对大括号内：

```swift
struct SomeStructure {
    // 结构体定义在这里
}
class SomeClass {
    // 类定义在这里
}
```

> 注意
>
> 每当你定义一个新的结构体或类时，你就定义了一个新的 Swift 类型。给类型命名时使用 UpperCamelCase 命名法（如这里的 `SomeStructure` 和 `SomeClass`），以匹配标准 Swift 类型（如 `String`、`Int` 和 `Bool`）的大写方式。给属性和方法命名时使用 lowerCamelCase 命名法（如 `frameRate` 和 `incrementCount`），以区别于类型名称。

这是一个结构体定义和类定义的例子：

```swift
struct Resolution {
    var width = 0
    var height = 0
}
class VideoMode {
    var resolution = Resolution()
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}
```

上面的例子定义了一个名为 `Resolution` 的新结构体，用于描述基于像素的显示分辨率。这个结构体有两个存储属性，叫做 `width` 和 `height`。存储属性是作为结构体或类的一部分被打包和存储的常量或变量。这两个属性通过被设置为初始整数值 0，被推断为 `Int` 类型。

上面的例子还定义了一个名为 `VideoMode` 的新类，用于描述视频显示的特定视频模式。这个类有四个变量存储属性。第一个属性 `resolution` 被初始化为一个新的 `Resolution` 结构体实例，这表明该属性的类型为 `Resolution`。对于其他三个属性，新的 `VideoMode` 实例将被初始化为 `interlaced` 设置为 `false`（表示"非隔行视频"），播放帧率为 `0.0`，以及一个可选的 `String` 类型的 `name` 值。`name` 属性会自动获得默认值 `nil`（表示"没有名称值"），因为它是可选类型。

结构体和类的实例
`Resolution` 结构体定义和 `VideoMode` 类定义只描述了 `Resolution` 或 `VideoMode` 会是什么样子。它们本身并不描述特定的分辨率或视频模式。要做到这一点，你需要创建结构体或类的实例。

创建实例的语法对于结构体和类来说非常相似：

```swift
let someResolution = Resolution()
let someVideoMode = VideoMode()
```

结构体和类都使用初始化器语法来创建新实例。最简单的初始化器语法使用类或结构体的类型名称后跟空括号，例如 `Resolution()` 或 `VideoMode()`。这会创建一个类或结构体的新实例，其属性都初始化为默认值。类和结构体的初始化在初始化章节有更详细的描述。

访问属性
你可以使用点语法访问实例的属性。在点语法中，在实例名称后立即写上属性名，用点（.）分隔，中间不带任何空格：

```swift
print("someResolution 的宽度是 \(someResolution.width)")
// 打印 "someResolution 的宽度是 0"
```

在这个例子中，`someResolution.width` 指的是 `someResolution` 的 `width` 属性，返回其默认初始值 0。

你可以深入访问子属性，比如 `VideoMode` 中 `resolution` 属性的 `width` 属性：

```swift
print("someVideoMode 的宽度是 \(someVideoMode.resolution.width)")
// 打印 "someVideoMode 的宽度是 0"
```

你也可以使用点语法为变量属性赋新值：

```swift
someVideoMode.resolution.width = 1280
print("someVideoMode 的宽度现在是 \(someVideoMode.resolution.width)")
// 打印 "someVideoMode 的宽度现在是 1280"
```

结构体类型的成员逐一初始化器
所有结构体都有一个自动生成的成员逐一初始化器，你可以用它来初始化新结构体实例的成员属性。新实例属性的初始值可以通过名称传递给成员逐一初始化器：

```swift
let vga = Resolution(width: 640, height: 480)
```

与结构体不同，类实例不会获得默认的成员逐一初始化器。初始化器在初始化章节有更详细的描述。

结构体和枚举是值类型
值类型是一种在被赋值给变量或常量，或者被传递给函数时，其值会被复制的类型。

实际上，你在前面的章节中已经广泛使用了值类型。事实上，Swift 中所有的基本类型——整数、浮点数、布尔值、字符串、数组和字典——都是值类型，并且在底层都是以结构体的形式实现的。

Swift 中的所有结构体和枚举都是值类型。这意味着你创建的任何结构体和枚举实例——以及它们作为属性所包含的任何值类型——在代码中传递时总是会被复制。

> 注意
>
> Swift 标准库定义的集合，如数组、字典和字符串，都使用了一种优化方式来降低复制的性能开销。这些集合不会立即复制，而是在原始实例和任何副本之间共享用于存储元素的内存。如果集合的某个副本被修改，元素会在修改前被复制。你在代码中看到的行为总是如同复制立即发生了一样。

考虑这个使用前面的 `Resolution` 结构体的例子：

```swift
let hd = Resolution(width: 1920, height: 1080)
var cinema = hd
```

这个例子声明了一个名为 `hd` 的常量，并将其设置为一个使用全高清视频的宽度和高度（1920 像素宽，1080 像素高）初始化的 `Resolution` 实例。

然后声明了一个名为 `cinema` 的变量，并将其设置为 `hd` 的当前值。因为 `Resolution` 是一个结构体，所以会创建现有实例的一个副本，并将这个新副本赋值给 `cinema`。虽然 `hd` 和 `cinema` 现在有相同的宽度和高度，但它们在后台是两个完全不同的实例。

接下来，将 `cinema` 的 `width` 属性修改为稍宽的 2K 标准，用于数字电影放映（2048 像素宽和 1080 像素高）：

```swift
cinema.width = 2048
```

检查 `cinema` 的 `width` 属性显示它确实改为了 2048：

```swift
print("cinema 现在的宽度是 \(cinema.width) 像素宽")
// 打印 "cinema 现在的宽度是 2048 像素宽"
```

然而，原始 `hd` 实例的 `width` 属性仍然是 1920：

```swift
print("hd 的宽度仍然是 \(hd.width) 像素宽")
// 打印 "hd 的宽度仍然是 1920 像素宽"
```

当 `cinema` 被赋予 `hd` 的当前值时，`hd` 中存储的值被复制到了新的 `cinema` 实例中。最终结果是两个完全独立的实例，它们包含相同的数值。但是，由于它们是独立的实例，将 `cinema` 的宽度设置为 2048 不会影响存储在 `hd` 中的宽度，如下图所示：

同样的行为也适用于枚举：

```swift
enum CompassPoint {
    case north, south, east, west
    mutating func turnNorth() {
        self = .north
    }
}
var currentDirection = CompassPoint.west
let rememberedDirection = currentDirection
currentDirection.turnNorth()

print("当前方向是 \(currentDirection)")
print("记住的方向是 \(rememberedDirection)")
```

类是引用类型
与值类型不同，引用类型在被赋值给变量或常量，或者被传递给函数时，不会被复制。相反，使用的是对现有实例的引用。

这是一个使用前面的 `VideoMode` 类的例子：

```swift
let tenEighty = VideoMode()
tenEighty.resolution = hd
tenEighty.interlaced = true
tenEighty.name = "1080i"
tenEighty.frameRate = 25.0
```

这个例子声明了一个名为 `tenEighty` 的常量，并将其设置为一个新的 `VideoMode` 类的实例。视频模式被赋予一个全高清视频的宽度和高度（1920 像素宽，1080 像素高）。它被设置为隔行视频，其名称被设置为 "1080i"，帧率被设置为每秒 25.0 帧。

接下来，将 `tenEighty` 赋值给一个新的常量 `alsoTenEighty`，并修改 `alsoTenEighty` 的帧率：

```swift
let alsoTenEighty = tenEighty
alsoTenEighty.frameRate = 30.0
```

因为类是引用类型，所以 `tenEighty` 和 `alsoTenEighty` 实际上指向同一个 `VideoMode` 实例。实际上，它们只是同一个实例的两个不同的名称，如下图所示：

检查 `tenEighty` 的 `frameRate` 属性显示它确实改为了 30.0：

```swift
print("tenEighty 的帧率现在是 \(tenEighty.frameRate)")
// 打印 "tenEighty 的帧率现在是 30.0"
```

这个例子还展示了引用类型如何更难理解。如果 `tenEighty` 和 `alsoTenEighty` 在你的程序代码中相距很远，那么很难找到所有修改视频模式的方式。无论你在哪里使用 `tenEighty`，你都必须考虑使用 `alsoTenEighty` 的代码，并反之亦然。相比之下，值类型更容易理解，因为所有与同一个值交互的代码都在你的源文件中靠近。

注意，`tenEighty` 和 `alsoTenEighty` 被声明为常量，而不是变量。然而，你仍然可以修改 `tenEighty.frameRate` 和 `alsoTenEighty.frameRate`，因为 `tenEighty` 和 `alsoTenEighty` 常量本身的值并没有改变。`tenEighty` 和 `alsoTenEighty` 本身并不"存储" `VideoMode` 实例——相反，它们都指向后台的同一个 `VideoMode` 实例。实际上是 `VideoMode` 实例的 `frameRate` 属性被修改了，而不是 `tenEighty` 和 `alsoTenEighty` 常量引用的值。

身份运算符
因为类是引用类型，所以可能会有多个常量和变量指向同一个类实例。（这在结构体和枚举中是不可能的，因为它们在被赋值给常量或变量，或者被传递给函数时总是会被复制。）

有时你可能想知道两个常量或变量是否指向同一个类实例。为此，Swift 提供了两个身份运算符：

- 全等于（===）
- 不全等于（!==）

使用这些运算符来检查两个常量或变量是否指向同一个类实例：

```swift
if tenEighty === alsoTenEighty {
    print("tenEighty 和 alsoTenEighty 指向同一个 VideoMode 实例。")
}
// 打印 "tenEighty 和 alsoTenEighty 指向同一个 VideoMode 实例。"
```

注意，全等于（用三个等号表示，===）与等于（用两个等号表示，==）的含义不同。全等于意味着两个类类型的常量或变量指向同一个类实例。等于意味着两个实例在值上是相等或等价的，具体取决于类型设计者的定义。

当你定义自己的自定义结构体和类时，你需要决定什么情况下两个实例被认为是相等的。实现你自己的 == 和 != 运算符的过程在等价运算符中有描述。

指针
如果你有 C、C++ 或 Objective-C 的经验，你可能知道这些语言使用指针来引用内存地址。Swift 中引用某个引用类型实例的常量或变量类似于 C 中的指针，但不是直接指向内存地址的指针，也不需要写星号（\*）来表示你正在创建一个引用。相反，这些引用在 Swift 中的定义方式与其他任何常量或变量相同。如果你需要直接与指针交互，Swift 标准库提供了指针和缓冲区类型——参见手动内存管理。
