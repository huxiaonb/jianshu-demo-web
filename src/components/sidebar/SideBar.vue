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
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  setup(){
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
})
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
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
    margin-top: 4px;
    color: #666;
  }
}
</style>
