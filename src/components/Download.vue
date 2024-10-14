<template>
  <div class="section">
    <h2>立即下载</h2>
    <p>支持 Windows 版本，立即下载并开始使用。</p>
    <a 
      href="/download/四则运算计算器.exe" 
      class="download-button" 
      download
    >
      下载 Windows 版本
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadSection',
}
</script>

<style scoped>
.download-button {
  display: inline-block; /* 使按钮块状 */
  padding: 10px 20px;
  background-color: #1e90ff; /* 按钮颜色 */
  color: white;
  text-decoration: none; /* 去掉下划线 */
  border-radius: 8px;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 0.9;
}

.download-button:hover {
  background-color: #4169e1; /* 鼠标悬停时颜色 */
  opacity: 1;
}
</style>
