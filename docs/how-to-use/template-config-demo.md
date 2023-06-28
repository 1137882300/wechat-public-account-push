[📌返回首页 >>>](../../README.md)

# config参数说明

## 配置说明

```javascript
/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    // 自定义，随便怎么填，与config里的templateId对应
    id: '0001',
    // 模板标题，会展示到推送消息的标题位置
    title: '亲爱的, 早上好',
    // 模板内容，支持部分markdown语法
    desc: `
      🗓️{{date.DATA}}
      城市：{{city.DATA}}
      天气☁️：{{weather.DATA}}
      温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}}
      风向：{{wind_direction.DATA}}
      风级：{{wind_scale.DATA}}
      温馨提示：{{notice.DATA}}
      值得纪念：{{birthday_message.DATA}}
      💗：{{earthy_love_words.DATA}}
      每日一句😋
      中文：{{note_ch.DATA}}
      English：{{note_en.DATA}}
      和{{poetry_author.DATA}}约个会：{{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
```

## 支持部分markdown语法

### Markdown 换行用法

示例：

这是第一行

这是第二行
```markdown
#正确示范：
这是第一行(下面有空行)

这是第二行

#错误示范：
这是第一行(下面没有空行)
这是第二行
```

### Markdown 粗体（Bold）用法

示例：I just love **bold text**.
```markdown
I just love **bold text**.
```

### Markdown 斜体（Italic）用法

示例：Italicized text is the *cat's meow*.
```markdown
Italicized text is the *cat's meow*.
```

### Markdown 分隔线（Horizontal Rule）用法

示例：

下面是分割线

---

上面是分割线
```markdown
下面是分割线

---

上面是分割线
```

[📌返回首页 >>>](../../README.md)
