<template>
  <div></div>
</template>

<script>
export default {
  name: "ClearStorage",
  created() {
    sessionStorage.clear()
    localStorage.clear()
    var keys = document.cookie.match(/[^ =;]+(?==)/g)
    if (keys) {
      for (var i = keys.length; i--; ) document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString()
    }
    this.$router.replace("/")
		// .then(() => {
  //     location.reload()
  //   })
  },
}
</script>
