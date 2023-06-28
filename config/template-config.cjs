/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '小螃蟹,哈喽哇',
    desc: `
      {{date.DATA}}<br>
      <strong>{{moment_copyrighting.DATA}}</strong><br>
      今天是我们相识的第<strong>{{love_day.DATA}}</strong>天<br>
      下个休息日：{{holidaytts.DATA}}<br>
      城市：{{city.DATA}}<br>
      天气☁️：{{weather.DATA}} <br>
      温度🌡️: {{min_temperature.DATA}} ~ {{max_temperature.DATA}}<br>
      风向: {{wind_direction.DATA}}<br>
      风级: {{wind_scale.DATA}}<br>
      温馨提示：{{notice.DATA}}<br>
      值得纪念💗：
      {{birthday_message.DATA}} 
      
      每日一句😋：<br>
      中文：{{note_ch.DATA}}<br>
      英文：{{note_en.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      《{{poetry_title.DATA}}》 {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      推送结果
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      ---
      共推送 {{need_post_num.DATA}} 人
      成功: {{success_post_num.DATA}}
      失败: {{fail_post_num.DATA}}     
      成功用户: {{success_post_ids.DATA}}
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
