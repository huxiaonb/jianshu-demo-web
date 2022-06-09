<template>
  <div class="sidebar-wrapper"></div>
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
