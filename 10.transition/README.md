# 10.トランジション

[demo](https://peke-pon.github.io/vue.js/10.transition/)

## View

![](https://i.imgur.com/B8Ndd86.png)

## HTML

```html
<div id="app">
    <h2>10.トランジション</h2>
    <h4>トランジションコンポーネント</h4>
    <transition>
      <ul v-show="disp">
        <li>v-enter</li>
        <li>v-enter-active</li>
        <li>v-enter-to</li>
        <li>v-leave</li>
        <li>v-leave-active</li>
        <li>v-leave-to</li>
      </ul>
    </transition>
    <button @click="disp = !disp">クリック</button>
    <hr />
    <h4>カスタムトランジション</h4>
    <transition name="slide">
      <ul v-show="disp2">
        <li>slide-enter</li>
        <li>slide-enter-active</li>
        <li>slide-enter-to</li>
        <li>slide-leave</li>
        <li>slide-leave-active</li>
        <li>slide-leave-to</li>
      </ul>
    </transition>
    <button @click="disp2 = !disp2">クリック</button>
    <hr />
    <h4>CSSトランジション</h4>
    <transition>
      <div>
        <p :class="{ slideIn : disp3, trs : true }" >CSSのクラスでトランジション</p>
      </div>
    </transition>
    <button @click="disp3 = !disp3">クリック</button>
    <hr />
</div>
```

## JavaScript

```javascript
const app = new Vue({
        el: "#app",
        data: {
          disp: true,
          disp2: true,
          disp3: true,
          disp4: true,
        }
});
```

## css

```css
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s;
  }

  .v-enter-to,
  .v-leave {
    opacity: 1;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(100%)
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s;
  }

  .slide-enter-to,
  .slide-leave {
    opacity: 1;
    transform: translateX(0)
  }

  .trs {
    transition: 0.3s;
    opacity: 0;
    transform: translateX(50%);
  }

  .slideIn {
    opacity: 1;
    transform: translateX(0);
  }
```
