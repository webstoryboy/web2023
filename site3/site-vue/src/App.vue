<template>
  <HeaderCont attr="header__wrap gmarket5 bg-blue" />
  <router-view/>
  <FooterCont attr="footer__wrap section bg-blue gmarket5" />
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@v/components/FooterCont.vue'

export default ({
  components: {
    HeaderCont,
    FooterCont
  }
})
</script>

<style lang="scss">
  @import "index.scss"
</style>
