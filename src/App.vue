<template>
  <div id="app">
    <div class="container">

       <IntroductionSection />
       <FeaturesSection />
       <DownloadSection />
       <ContactSection />
    </div>
  </div>
</template>

<script>

import IntroductionSection from './components/Introduction.vue'
import FeaturesSection from './components/Features.vue'
import DownloadSection from './components/Download.vue'
import ContactSection from './components/Contact.vue'

export default {
  name: 'App',
  components: {

    IntroductionSection,
    FeaturesSection,
    DownloadSection,
    ContactSection
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0; /* 设置你喜欢的背景颜色 */
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 使 #app 占据整个视口高度 */
}
</style>
