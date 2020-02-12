<template>
<div id="wrapper">
<MyHeader/>
<MyNavigation/>
<main id="contents">
<div id="intro" class="block"><div class="inner">
<div class="body"><h1 class="title"><span><img src="/data/images/about_title.png" width="86" height="18" alt="About"></span><span>G's ACADEMYとは</span></h1></div>
</div></div>

<section id="concept" class="block"><div class="inner">
<h2 class="title"><span><img src="/data/images/index_concept_title.png" width="120" height="18" alt="Concept"></span><span>コンセプト</span></h2>
<h3>セカイを変えるGEEKになろう。</h3>
<p>今、世界中で新たなサービスやエンタテインメントがエンジニアによって生み出されています。<br>その武器は<strong>『アイディア』</strong>と<strong>『プログラミング<span class="krnR">』</span></strong>。</p>
<p>ワクワクするようなゲームのアイディア<br>世の中が笑顔になるようなサービスのアイディア<br>儲かりそうな新規事業のアイディア<br>そんなものをため込んでいるあなたこそ、<br>プロレベルのプログラミングスキルをもつべきだと思うのです。</p>
<p>できるだけ多くの若い人に本格的なプログラミングスキルを学ぶ機会をつくりたい。<br>そして願わくば、この場所から世界中の人が利用するサービスやアプリが産まれてほしい。</p>
<p>そんな思いでデジタルハリウッドが<br>エンジニアのためだけの場所<strong>「ジーズアカデミーTOKYO」</strong>をつくりました。</p>
<p>最初は全くの初心者でOK。<br>まずは純粋にプログラミングを楽しんでいただくことから始めて、<br>最後には現役で活躍する一流エンジニアのメンターサポートをうけながら、<br>オリジナルのWebサービス・アプリを開発〜完成させます。</p>
<p>卒業後の<strong>「就職」</strong>はもちろん<strong>「独立」</strong>まで、さまざまなサポート企業や<br>シードアクセラレーターがバックアップ。</p>
<p>さあ、まもなく<strong>【GEEK】</strong>への扉がひらかれます。</p>
</div>
</section>
</main>
</div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyNavigation from '../components/MyNavigation.vue'
export default {
  name: 'About',
  components: {
    MyHeader,
    MyNavigation
  }
}
</script>
