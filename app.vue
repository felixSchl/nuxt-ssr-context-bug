<script lang="ts" setup>
const x = useAsyncData(
  "test",
  () => {
    // IMPORTANT the following line fixes the SSR context not being available:
    // const $fetch = useRequestEvent()?.$fetch;
    return $fetch("/api/test");
  },
  {
    watch: [],
    immediate: true,
    server: true,
  }
);
</script>
<template>
  <pre>
    {{
      JSON.stringify(
        {
          status: x.status.value,
          data: x.data.value,
          error: x.error.value,
        },
        null,
        2
      )
    }}
  </pre>
</template>
