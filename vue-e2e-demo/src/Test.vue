<template>
<div>
<span id="message">{{ message }}</span>
<button class="btn" @click="changeMsg">点击</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      message: 'vue-text'
    }
  },
  created () {
    this.message = 'e2e测试'
  },
  methods: {
    changeMsg () {
      this.message = '按钮点击'
    }
  }
}
</script>
