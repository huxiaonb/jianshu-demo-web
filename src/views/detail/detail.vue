<template>
  <div class="detail-main-wrapper">
    <div class="content">
      <h1 class="title">{{ details.title }}</h1>
      <div class="user-content">
        <a target="_blank">
          <img class="avatar" :src="user.avatar || ''" alt="123">
        </a>
        <div class="user-info">
          <div class="name">
            <span>{{ user.name }}</span>
            <button class="sub-btn">关注</button>
          </div>
          <div class="info">
            <span class="icon-wrapper"><i class="icon diamond" />{{ details.pay }}</span>
            <span>{{ details.createTime }}</span>
            <span>字数 {{ details.char_count }}</span>
            <span>阅读 {{ details.read }}</span>
          </div>
        </div>
      </div>
      <div class="article-content">
        <article class="article">
          {{ details.content }}
        </article>
      </div>
    </div>
    <div style="display: flex">
      <side-bar />
    </div>
    <div><RecommendArticles /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'
import { DetailService } from '@/views/detail/detail.service'
import { useRoute } from 'vue-router'
import { ArticleItem, UserItem } from '@/views/list/list.service'
import SideBar from '@/components/sidebar/SideBar.vue'
import RecommendArticles from '@/components/RecommendArticles.vue'

export default defineComponent({
  components: { SideBar, RecommendArticles },
  setup () {
    const injector = useReflectiveInjector([DetailService])
    const service = injector.get(DetailService)
    const route = useRoute()
    const data = reactive({
      details: {} as ArticleItem,
      user: {} as UserItem
    })
    function getData () {
      service.getArticleDetail({ articleId: ((route.params.id) as string) }).then(res => {
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
.detail-main-wrapper{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9f9f9;
  min-height: 100vh;
  .content{
    width: 700px;
    padding: 0 16px;
    font-size: 16px;
    background-color: #fff;
    .title {
      text-align: left;
    }
  }
  .article-content {
    padding: 32px;
  }
}
.title {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
}
.user-content{
  display: flex;
  align-items: center;
  padding-left: 32px;
  .user-info {
    margin-left: 20px;
  }
  .name {
    text-align: left;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    margin-right: 8px;
    margin-bottom: 5px;
  }
  .sub-btn {
    margin-left: 8px;
    border-radius: 10px;
    color: #ec7259;
    background-color: #fff;
    border-color: #ec7259;
    &:hover{
      background-color: rgba(236,114,89,0.2);
    }
  }
  .avatar {
    display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    min-width: 50px;
    min-height: 50px;
    width: 50px;
    height: 50px;
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #969696;
  }
}
.article {
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
  word-break: break-word;
  text-align: left;
}
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  margin-right: 3px;
  .icon {
    width: 13px;
    height: 13px;
    display: inline-block;
    background-size: 13px 13px;
  }
  .diamond {
    background-image: url("./assets/diamond.svg");
  }
}
</style>
