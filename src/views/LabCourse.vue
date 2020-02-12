<template>
  <div id="labcourse">
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
<div id="intro" class="block"><div class="inner">
<div class="body"><h1 class="title"><span><img src="/data/images/labcourse_title01.png" width="160" height="54" alt="Tokyo lab Course"></span><span>東京フルタイム総合コース</span></h1></div>
</div></div>

<section id="exp">
<h2 class="title"><strong>4月生は入試受付中です！3次締切は3/2（月）ご検討中の方、学校説明会はお早めに。</strong></h2>
<p class="img"><img src="/data/images/labcourse_exp_img01.png" width="850" height="205" alt="LABコース"></p>
<div class="txt">
<p>プログラミングを一生モノのスキルにする6ヶ月。スタートアップ企業で即戦力となることに対応したフルタイム総合コースです。短期で実践的プログラミングスキルを学びチーム開発で開発の基礎を習得。選択式の専門LABではそれぞれの最新の技術とワークフローを学んでメンター期間でプロダクトを創り上げます。また、エンジニアリングの教養科目も重視し、プロのエンジニアとして永く活躍する基礎を固めます。</p>
</div>
</section>
</main>
</div>
</div>
</template>
<script>
  import MyHeader from '../components/MyHeader.vue'
  export default{
    name: 'LabCourse',
    components: {
      MyHeader
    }
  }
</script>