<template>
  <div></div>
</template>

<script>
export default {
  name: "ClearStorage",
  created() {
    //清空缓存数据
    sessionStorage.clear()
    localStorage.clear()
    // 删除所有cookie
    // var keys = document.cookie.match(/[^ =;]+(?==)/g)
    // if (keys) {
    //   for (var i = keys.length; i--; ) {
    //     document.cookie = keys[i] + "=0;path=/;expires=" + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
    //     document.cookie = keys[i] + "=0;path=/;domain=" + document.domain + ";expires=" + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
    //     document.cookie = keys[i] + "=0;path=/;domain=ratingdog.cn;expires=" + new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
    //   }
    // }
    var keys = document.cookie.match(/[^ =;]+(?==)/g)
    //如果有，就遍历全部删除，注意是全部删除。
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
