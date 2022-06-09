<template>
  <div class="list-main-wrapper">
    <!-- 主页大图/抡博 -->
    <img src="" alt="main image">
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {useReflectiveInjector} from "@tanbo/vue-di-plugin";
import {ArticleItem, ListService} from "@/views/list/list.service";

export default defineComponent ({
  setup() {
    const injector = useReflectiveInjector([ListService])
    const service = injector.get(ListService)
    const data = reactive({
      list: [] as ArticleItem[]
    })
    function getData(){
      service.getArticleList().then(res => {
        data.list = res
      })
    }
    return {
      ...toRefs(data)
    }
  }
})
</script>
