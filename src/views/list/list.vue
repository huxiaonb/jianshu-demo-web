<template>
  <div class="list-main-wrapper">
    <div class="left-wrapper">
      <!-- 主页大图/轮播 -->
      <img src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="main image" style="height: 270px">
      <ul class="article-info">
        <li v-for="article in list" :key="article.id" class="info-wrapper">
          <div>
            <a class="title" :href="`/article/${article.id}`" target="_blank">{{ article.title }}</a>
            <p class="abstract">
              {{ article.content + '...' }}
            </p>
            <div class="meta">
              <span class="icon-wrapper" style="color: #ea6f5a;"><i class="icon diamond" />{{ article.pay }}</span>
              <span>{{ article.username }}</span>
              <span class="icon-wrapper"><i class="icon reply" />{{ article.reply }}</span>
              <span class="icon-wrapper"><i class="icon like" />{{ article.like }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="right-wrapper">
      <Users />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useReflectiveInjector } from '@tanbo/vue-di-plugin'
import { ArticleDto, ListService } from '@/views/list/list.service'
import Users from '@/components/users/users.vue'

export default defineComponent({
  components: {
    Users,
  },
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
  .list-main-wrapper {
    display: flex;
    justify-content: center;
  }
  .left-wrapper {
    margin-right: 15px;
  }
  .info-wrapper {
    max-width: 625px;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    list-style: none;
    text-align: left;
    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
      text-decoration: none;
      &:visited {
        color: #969696;
      }
    }
    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .meta {
      display: flex;
      align-items: center;
      line-height: 20px;
      font-size: 12px;
      color: #b4b4b4;
      span{
        margin-right: 10px;
      }
    }
  }
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    .icon {
      width: 13px;
      height: 13px;
      display: inline-block;
      background-size: 13px 13px;
    }
    .diamond {
      background-image: url("./assets/diamond.svg");
    }
    .reply {
      background-image: url("./assets/comment.svg");
    }
    .like {
      background-image: url("./assets/love.svg");
    }
  }
</style>
