# 16.動的コンポーネント

[demo](https://peke-pon.github.io/vue.js/16.dynamic-component/dist/)

## View

![](https://i.imgur.com/nGFmq54.png)

## src/App.vue

```html
<template>
  <div id="app">
    <h2>16.dynamic-component</h2>
    <ul>
      <template v-for="list in lists">
        <li
          :class="{active : list.isActive}"
          @click="click"
          :id="list.id"
          :key="list.id"
        >{{list.name}}</li>
      </template>
    </ul>
    <div id="disp">
      <keep-alive>
        <component :is="componentId"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TabVue from "@/components/tab-vue.vue";
import TabNuxt from "@/components/tab-nuxt.vue";

export default {
  name: "App",
  components: {
    TabVue,
    TabNuxt
  },
  data() {
    return {
      componentId: "TabVue",
      lists: [
        {
          id: 0,
          name: "Vue.js",
          comp: "TabVue",
          isActive: true
        },
        {
          id: 1,
          name: "Nuxt.js",
          comp: "TabNuxt",
          isActive: false
        }
      ]
    };
  },
  methods: {
    click($event) {
      this.lists.forEach(list => (list.isActive = false));
      this.lists[$event.target.id].isActive = true;
      this.componentId = this.lists[$event.target.id].comp;
    }
  }
};
</script>
```

## src/components/tab-nuxt.vue

```html
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
  },
  deactivated() {
    console.log("deactivated実行");
  }
};
</script>
```

## src/components/tab-vue.vue

```html
<template>
  <div>
    <h3>Vue.js</h3>
    <img src="https://i.imgur.com/15HAzgE.png" alt />
    <p>Vue (発音は / v j u ː / 、 view と同様）はユーザーインターフェイスを構築するためのプログレッシブフレームワークです。他の一枚板(モノリシック: monolithic)なフレームワークとは異なり、Vue は少しずつ適用していけるように設計されています。</p>
    <p>中核となるライブラリは view 層だけに焦点を当てています。そのため、使い始めるのも、他のライブラリや既存のプロジェクトに統合するのも、とても簡単です。また、モダンなツールやサポートライブラリと併用することで、洗練されたシングルページアプリケーションの開発も可能です。</p>
    <h4>テキストエリアの内容をキャッシュする(keep-alive)</h4>
    <input type="text" />
  </div>
</template>
```
