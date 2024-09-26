### columns参数说明

| column       | 说明                                                                                                                                             | 默认值              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| key          | 表格列的唯一标识 string \| array , 当valueType值为区间是传入array                                                                                |                     |
| searchKey    | 搜索表单中的 key，当查询key与列表key不一致时可用此项                                                                                             | key                 |
| hideInTable  | 在 Table 中不展示此列                                                                                                                            | false               |
| hideInSearch | 在查询表单中不展示此项                                                                                                                           | false               |
| valueType    | 会根据 valueType 来映射成不同的表单项, 见下方valueType参数说明                                                                                   | text                |
| valueFormat  | valueType: 'date' 时可用                                                                                                                         | YYYY-MM-DD HH:mm:ss |
| copyable     | table列表中可复制                                                                                                                                | false               |
| editable     | table列表中可编辑                                                                                                                                | false               |
| valueEnum    | valueEnum 需要传入一个枚举，ProTable 会自动根据值获取响应的枚举，并且在 form 中生成一个下拉框 格式：{ [key]:{ text : '', type: '', color: '' } } |                     |
| fieldProps   | 查询表单的 props，会透传给表单项，如果渲染出来是 Input，就支持 Input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入 |                     |

### valueType参数说明(会根据 valueType 来映射成不同的表单项)

| valueType     | 说明                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| date          | 日期相关详见 https://www.naiveui.com/zh-CN/os-theme/components/date-picker type |
| datetime      | ,                                                                               |
| daterange     | ,                                                                               |
| datetimerange | ,                                                                               |
| month         | ,                                                                               |
| monthrange    | ,                                                                               |
| year          | ,                                                                               |
| yearrange     | ,                                                                               |
| quarter       | ,                                                                               |
| quarterrange  | ,                                                                               |
| week          | ,                                                                               |
| text          | 文本                                                                            |
| select        | 下拉框                                                                          |
| checkbox      | 复选框                                                                          |
| number        | 数字                                                                            |
| money         | 金额                                                                            |
| image         | 图片                                                                            |
| imageList     | 图片列表                                                                        |
| address       | 地址                                                                            |
| link          | 链接                                                                            |

### color 属性说明

| color | 说明                                                                       |
| ----- | -------------------------------------------------------------------------- |
| color | n-tag的color属性{ color?: string, borderColor?: string, textColor?: string |
