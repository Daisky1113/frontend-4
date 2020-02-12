<template>
  <div id="devcourse">
<div id="wrapper">
<MyHeader/>
<nav id="gNav" class="gNav201605">
<ul>

<li class="nav02"><a href="/about/"><img src="/data/images/gNav_about.png" width="158" height="80" alt="About"></a></li>
<li class="nav03"><a href="/devcourse/"><img src="/data/images/gNav_tokyodevcourse.png" width="158" height="80" alt="Tokyo DEV Course"></a></li>
<li class="nav07"><a href="/labcourse/"><img src="/data/images/gNav_tokyolabcourse.png" width="158" height="80" alt="Tokyo LAB Course"></a></li>
<li class="nav08"><a href="/fukuokadev/"><img src="/data/images/gNav_fukuokadevcourse.png" width="158" height="80" alt="Fukuoka DEV Course"></a></li>


<li class="nav09"><a href="/fukuokalab/"><img src="/data/images/gNav_fukuokalabcourse.png" width="158" height="80" alt="Fukuoka LAB Course"></a></li>
<li class="apprication nav06"><a href="https://krs.bz/dhw/m/gs_form" target="_blank"><img src="/data/images/gNav_nav06.png" width="156" height="76" alt="Entry"></a></li></ul>
</nav>
<main id="contents">
<div id="intro" class="block">
<div class="inner">
<div class="body">
<h1 class="title"><span><img src="/data/images/devcourse_title01.png" width="160" height="54" alt="Tokyo Dev Course"></span><span>東京週末集中コース</span></h1>
</div>
</div>
</div>

<section id="about" class="row">
<h2 class="title"><strong>第16期（3月生）絶賛受付中！過去15期連続満席コース。学校説明会はお早めに。</strong></h2>
<p class="img"><img src="/data/images/cource_lab_img01.png" width="700" height="165" alt="DEVコース（週1／4ヶ月＋開発2ヶ月）"><a href="#" data-ol="ol_curriculum01" class="link cur01"><img src="/data/images/cource_lab_img01_cur01.png" width="300" height="61" alt="Webサービスディベロッパーコース"></a><a href="#" data-ol="ol_audition" class="link cur02"><img src="/data/images/cource_lab_img01_cur02.png" width="100" height="120" alt="Global Geek オーディション"></a><a href="#" data-ol="ol_android" class="link cur03"><img src="/data/images/cource_lab_img01_cur03.png" width="300" height="61" alt="Nativeアプリディベロッパーコース"></a></p>
<p class="txt">実装力を身につけ、サービスプロダクトを創り上げるプロのエンジニアスキルを習得します。共通科目の後、<a href="#" data-ol="ol_curriculum01">Webサービスディベロッパーコース</a>・<a href="#" data-ol="ol_android">Nativeアプリディベロッパーコース</a>を選択し、「Webサービス」ではフロントエンド<span class="krnL">（</span>Javascript&amp;HTML5<span class="krnR">）</span>からサーバーサイド<span class="krnL">（</span>PHP&amp;Laravel<span class="krnR">）</span>までをトータルに、「Nativeアプリ」ではSwiftの基礎から応用までを、4ヶ月集中で学んだ後、2ヶ月の卒業制作期間は、現役の一流エンジニア・メンターがつき、1 on 1でオリジナルの「サービス」をローンチするまで、オンライン等で徹底指導を行います。<br>最終の<a href="http://online.dhw.co.jp/course/" data-ol="ol_audition">"GLOBAL GEEK AUDITION"</a>では様々な企業・VCが出来上がったサービスを評価するだけでなく、スカウト・出資までつながるチャンスとなっています。</p>
<ul class="cols cols2">
<li class="btn"><a href="#" data-ol="ol_curriculum01">Webサービスディベロッパーコース<br>カリキュラム</a></li>
<li class="btn"><a href="#" data-ol="ol_android">Nativeアプリディベロッパーコース<br>カリキュラム</a></li>
</ul>
</section>
</main>
</div>
</div>
</template>
<script>
  import MyHeader from '../components/MyHeader.vue'
  export default{
    name: 'DevCourse',
    components: {
      MyHeader
    }
  }
</script>