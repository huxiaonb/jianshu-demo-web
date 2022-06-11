<template>
  <div class="sidebar-wrapper">
    <div class="item">
      <div class="icon zan-icon"></div>
      <div class="desc">赞</div>
    </div>
    <div class="item">
      <div class="icon donate-icon"></div>
      <div class="desc">赞赏</div>
    </div>
    <div class="item">
      <div class="icon qrcode-icon"></div>
      <div class="desc">更多好文</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
})
</script>
<style lang="scss" scoped>
.sidebar-wrapper {
  position: fixed;
  top: 216px;
  z-index: 99;
  user-select: none;
  left: calc((100vw - 1000px)/2 - 78px);
  max-width: 56px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  font-size: 12px;
  .icon {
    width: 48px;
    height: 48px;
  }
  .zan-icon {
    background-size: 48px 48px;
    background-image: url("./assets/thumb-up.svg");
  }
  .donate-icon {
    background-size: 48px 48px;
    background-image: url("./assets/zan.svg");
  }
  .qrcode-icon {
    background-size: 48px 48px;
    background-image: url("./assets/qrcode.svg");
  }
  .desc {
    height: 19px;
    margin-top: 6px;
    color: #666;
  }
}
</style>
