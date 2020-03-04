<template>
  <div>
    <h3>Nuxt.js</h3>
    <img src="https://i.imgur.com/lHKVqJd.gif" alt />
    <p>Nuxt は、Vue の公式ガイドラインに沿って強力なアーキテクチャを提供するように設計されたフレームワークです。一部分から徐々に採用することが可能で、静的なランディングページから複雑な企業向け web アプリケーションの作成に使用できます。</p>
    <p>本質的に汎用性があり、さまざまなターゲット（サーバー、サーバーレス、または静的）をサポートし、サーバーサイドのレンダリングは切り替えることができます。</p>
    <h4>テキストエリアの内容をキャッシュする(keep-alive)</h4>
    <input type="text" />
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log("destroyed実行");
  },
  activated() {
    console.log("activated実行");
    this.message ='activated実行'
  },
  deactivated() {
    console.log("deactivated実行");
    this.message ='deactivated実行'
  }
};
</script>