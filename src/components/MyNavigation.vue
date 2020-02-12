<template>
  <nav id="gNav" class="gNav201605">
<ul>
<li class="nav02"><router-link :to="{name: 'About' }"><img src="/data/images/gNav_about.png" width="158" height="80" alt="About"></router-link>
<li class="nav03"><router-link :to="{name: 'dev' }"><img src="/data/images/gNav_tokyodevcourse.png" width="158" height="80" alt="Tokyo DEV Course"></router-link></li>
<li class="nav07"><router-link :to="{name: 'lab' }"><img src="/data/images/gNav_tokyolabcourse.png" width="158" height="80" alt="Tokyo LAB Course"></router-link></li>
</ul>
</nav>
</template>
<script>
export default{
  name: 'MyNavigation',
}
</script>