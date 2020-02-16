# 3.イベント処理

## View

![](https://i.imgur.com/5HLMlH3.png)

## HTML

```html
<div id="app">
    <h2>3.イベント処理</h2>
    <p>v-on:clickでクリックイベント</p>
    <p v-on:click="counted">{{ count }}回クリック (v-on:の省略形は@）</p>
    <hr />
    <p>v-on:mousemoveでマウスイベント</p>
    <p v-on:mousemove="eventDisplay">コンソールを表示してマウスをのせてください X : {{ x }}, Y : {{ y }}
    </p>
    <hr />
    <p>イベントオブジェクトと引数</p>
    <p v-on:mouseover="mouseDisplay('$event')">マウスをのせてください
    </p>
    <hr />
    <p>イベント修飾子.stop</p>
    <p v-on:mouseover>.stopでマウスをのせても反応しません
    </p>
    <hr />
    <p>イベント修飾子.prevent</p>
    <p>.preventで<a href="#" v-on:click.prevent>クリック</a>してもリンクが機能しません</a>
    </p>
    <hr />
    <p>キー修飾子keyup.enter</p>
    <p><input type="text" v-on:keyup.enter="enter()" v-model="value" placeholder="Enterで入力">
    </p>
    <p >{{ content }}</p>
    <hr />
    <p>システム修飾子keyup.alt</p>
    <p><input type="text" v-on:keyup.alt.67="clear()" v-model="value2" placeholder="alt+cでクリア">
    </p>
    <hr />
    <p>v-modelディレクティブ</p>
    <p><input type="text" v-model="syncData">
    </p>
    <p>{{ syncData }}</p>
    <hr />
  </div>
```

## JavaScript

```javascript
const app = new Vue({
      el: "#app",
      data: {
        count: 0,
        value: '',
        value2: '',
        content: '',
        syncData: '双方向データバインディング',
        x: 0,
        y: 0,
      },
      methods: {
        counted() {
          return this.count++;
        },
        eventDisplay(event) {
          console.log(event);
          this.x = event.screenX;
          this.y = event.screenY;
        },
        mouseDisplay(str, $event) {
          console.log(event.target);
          event.target.innerHTML = str + 'で引数があってもイベントオブジェクトを取得可能'
        },
        enter() {
          this.content = this.value
        },
        clear() {
          this.value2 = "";
        }
      }
    });
```

### 参考リンク

https://jp.vuejs.org/v2/guide/events.html#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E4%BF%AE%E9%A3%BE%E5%AD%90

https://developer.mozilla.org/ja/docs/Web/Events
