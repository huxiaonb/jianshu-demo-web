<template>
  <div class="user-bar-wrapper">
    <div class="title">
      <span>推荐作者</span>
      <a class="page-chage">
        <ul>
          <li v-for="user in users">
            <div class="avatar" :style="{ 'background-img':url(user.avatar) }"></div>
            <div class="content">
              <div class="name">{{ user.name }}</div>
              <div class="desc">写了{{ user.char_total }}字，{{ user.like }}喜欢</div>
            </div>
            <div class="follow-btn">关注</div>
          </li>
        </ul>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {UserItem} from "@/views/list/list.service";

export default defineComponent({
  setup(){
    const data = reactive({
      users: [] as UserItem[]
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
<style lang="scss" scoped>
.user-bar-wrapper {
  margin-bottom: 20px;
}
</style>
