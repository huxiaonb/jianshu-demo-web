<template>
  <div class="recommend-wrapper">
    <h3 class="title-text">推荐阅读</h3>
    <ul class="articles-wrapper">
      <li v-for="article in list" :key="article._id" class="article-item">
        <a :href="`/detail/${article._id}`">
          <div class="title">{{ article.title.slice(0,10) }}</div>
          <div class="desc">阅读{{ article.read }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'
import { ArticleDto, ListService } from '@/views/list/list.service'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const injector = useReflectiveInjector([ListService])
    const service = injector.get(ListService)
    const data = reactive({
      list: [] as ArticleDto[]
    })
    function getData () {
      service.getArticleList().then(res => {
        data.list = res
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
.recommend-wrapper{
  position: fixed;
  top: 100px;
  width: 260px;
  text-align: left;
  margin-left: 20px;
}
.title-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #ec7259;
  font-size: 18px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
}
.articles-wrapper {
  list-style: none;
  padding: 0;
  margin: 0;
}
.article-item {
  margin-bottom: 10px;
  a{
    text-decoration: none;
  }
}
.title {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}
.desc{
  margin-top: 4px;
  color:#969696;
  font-size: 12px;
}
</style>
