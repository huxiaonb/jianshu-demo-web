<template>
  <div class="detail-main-wrapper">
    <div class="content">
      <h1 class="title">{{ details.title }}</h1>
      <div class="user-content">
        <a target="_blank">
          <img :src="user.avatar || ''" alt="123">
        </a>
        <div>
          <div class="name">
            <span>{{ user.name }}</span>
            <button>关注</button>
          </div>
          <div class="info">
            <span>{{ details.createTime }}</span>
            <span>字数 {{ details.char_total }}</span>
            <span>阅读 {{ details.read }}</span>
          </div>
        </div>
      </div>
      <div class="content">
        <article>
          {{ details.content }}
        </article>
      </div>
    </div>
    <side-bar />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'
import { DetailService } from '@/views/detail/detail.service'
import { useRoute } from 'vue-router'
import { ArticleItem, UserItem } from '@/views/list/list.service'
import SideBar from '@/components/sidebar/SideBar.vue'

export default defineComponent({
  components: { SideBar },
  setup () {
    const injector = useReflectiveInjector([DetailService])
    const service = injector.get(DetailService)
    const route = useRoute()
    const data = reactive({
      details: {} as ArticleItem,
      user: {} as UserItem
    })
    function getData () {
      service.getArticleDetail({ articleId: parseInt(route.params.id as string) }).then(res => {
        console.log(res)
        data.details = res
        data.user = res.user
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
.title {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
}
.user-content{
  display: flex;
  align-items: center;
}
</style>
