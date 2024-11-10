# `buttonStyle(_:)`

Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
将此视图中的按钮样式设置为具有自定义外观和标准交互行为的按钮样式。

## Discussion 讨论

Use this modifier to set a specific style for all button instances within a view:
使用此修饰符可为视图中的所有 button 实例设置特定样式：

```swift
HStack {
Button("Sign In", action: signIn)
Button("Register", action: register)
}
.buttonStyle(.bordered)
```

You can also use this modifier to set the style for controls that acquire a button style through composition, like the Menu and Toggle views in the following example:
您还可以使用此修饰符为通过组合获取按钮样式的控件设置样式，如以下示例中的 Menu 和 Toggle 视图：

```swift
VStack {
Menu("Terms and Conditions") {
Button("Open in Preview", action: openInPreview)
Button("Save as PDF", action: saveAsPDF)
}
Toggle("Remember Password", isOn: $isToggleOn)
Toggle("Flag", isOn: $flagged)
Button("Sign In", action: signIn)
}
.menuStyle(.button)
.toggleStyle(.button)
.buttonStyle(.bordered)
```

The menuStyle(_:) modifier causes the Terms and Conditions menu to render as a button. Similarly, the toggleStyle(_:) modifier causes the two toggles to render as buttons. The button style modifier then causes not only the explicit Sign In Button, but also the menu and toggles with button styling, to render with the bordered button style.
菜单 Style（_：） 修饰符使 Terms and Conditions 菜单呈现为按钮。同样，切换 Style（_：） 修饰符会使两个切换呈现为按钮。然后，按钮样式修饰符不仅会导致显式的 Sign In Button，还会导致带有按钮样式的菜单和切换以带边框的按钮样式呈现。

## See Also 另请参阅

Creating buttons 创建按钮
struct Button
A control that initiates an action.
启动操作的控件。
func buttonBorderShape(ButtonBorderShape) -> some View
Sets the border shape for buttons in this view.
设置此视图中按钮的边框形状。
func buttonRepeatBehavior(ButtonRepeatBehavior) -> some View
Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
设置此视图中的按钮是否应在长时间交互时重复触发其操作。
var buttonRepeatBehavior: ButtonRepeatBehavior
Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
具有此关联环境的按钮是否应在长时间交互时重复触发其操作。
struct ButtonBorderShape
A shape used to draw a button’s border.
用于绘制按钮边框的形状。
struct ButtonRole
A value that describes the purpose of a button.
描述按钮用途的值。
struct ButtonRepeatBehavior
The options for controlling the repeatability of button actions.
用于控制按钮操作可重复性的选项。
