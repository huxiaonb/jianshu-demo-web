<template>
  <div class="user-bar-wrapper">
    <div class="title">
      <span>推荐作者</span>
      <a class="page-chage">
        <ul class="user-list-wrapper">
          <li v-for="user in users" :key="user.id" class="user-wrapper">
            <div class="left-content">
              <div class="avatar">
                <img :src="user.avatar" alt="avatar">
              </div>
              <div class="content">
                <div class="name">{{ user.name }}</div>
                <div class="desc">写了{{ user.char_total }}字，{{ user.like }}喜欢</div>
              </div>
            </div>
            <div class="follow-btn"><i class="icon"></i>关注</div>
          </li>
        </ul>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { UserItem } from '@/views/list/list.service'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'
import { UsersService } from '@/components/users/users.service'

export default defineComponent({
  setup () {
    const injector = useReflectiveInjector([UsersService])
    const service = injector.get(UsersService)
    const data = reactive({
      users: [] as UserItem[]
    })
    function getData () {
      service.getUsers().then(res => {
        data.users = res
      })
    }
    getData()
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

.user-list-wrapper {
  list-style: none;
}
.user-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .left-content {
    display: flex;
  }
}
.avatar {
  width: 46px;
  height: 46px;
  margin-right: 10px;
  img {
    width: 46px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
}
.content {
  position: relative;
  margin-right: 20px;
  text-align: left;
  .desc {
    font-size: 12px;
    color: #969696;
  }
}
.follow-btn {
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
  .icon {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-size: 13px 13px;
    background-repeat: no-repeat;
    background-image: url("./assets/add.svg");
  }
}
</style>
