<template>
  <div class="detail-main-wrapper"></div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {useReflectiveInjector} from "@tanbo/vue-di-plugin";
import {DetailService} from "@/views/detail/detail.service";
import {useRoute} from "vue-router";
import {ArticleItem} from "@/views/list/list.service";

export default defineComponent({
  setup() {
    const injector = useReflectiveInjector([DetailService])
    const service = injector.get(DetailService)
    const route = useRoute()
    const data = reactive({
      details: {} as ArticleItem
    })
    function getData() {
      service.getArticleDetail({ articleId: parseInt(route.params.id as string)}).then(res => {
        data.details = res
      })
    }
    getData()
    return {
      ...toRefs(data)
    }
  }
})
</script>
