<template>
  <div class="section">
    <h2>功能特色</h2>
    <ul>
      <li>
        <h3>简单易用</h3>
        <p>界面清晰直观，无论是学生还是普通用户都能轻松使用。</p>
      </li>
      <li>
        <h3>高效智能</h3>
        <p>智能校验输入数据，防止错误计算。</p>
      </li>
      <li>
        <h3>轻量快捷</h3>
        <p>占用极少的系统资源，启动速度快，适合多任务环境。</p>
      </li>
      <li>
        <h3>随机生成题目</h3>
        <p>随机生成加减乘除的题目，帮助用户锻炼计算能力。</p>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

li {
  background: rgba(242, 242, 242, 0.9); /* 半透明背景 */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}
</style>