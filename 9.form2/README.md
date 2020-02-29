# 9.フォーム入力2

[demo](https://peke-pon.github.io/vue.js/9.form2/)

## View

![](https://i.imgur.com/24Y03kf.png)

## HTML

```html
<div id="app">
    <h2>9.フォーム入力2</h2>
    <h4>date</h4>
    <p>カレンダーで日付の選択</p>
    <p>見学希望日 : {{ date }}</p>
    <input type="date" v-model="date" :min="date">
    <hr />
    <h4>range</h4>
    <p>カラーパレットで色を選択</p>
    <input type="color" v-model="color">
    <span>{{ color }}</span><br>
    <div class="palette">
      R : <input type="range" v-model.number="R" min="0" max="255"> {{ R }}<br>
      G : <input type="range" v-model.number="G" min="0" max="255"> {{ G }}<br>
      B : <input type="range" v-model.number="B" min="0" max="255"> {{ B }}<br>
    </div>
    <hr />
    <h4>.stop</h4>
    <p>バブリングを防ぐ修飾子</p>
    <p @mouseover="pos">マウスをのせてください
      <button @click.stop="pos2">クリック</button>
    </p>
    <p>{{ posX }} : {{ posY }}</p>
    <p>{{ posX2 }} : {{ posY2 }}</p>
    <hr />
    <h4>.prevent</h4>
    <p>preventDefault機能</p>
    <input type="text" value="クリックしてもリンク先へ遷移しません" class="input"><br>
    <button @click.prevent><a href="#">クリック</a></button>
    <hr />
  </div>
```

## JavaScript

```javascript
    const app = new Vue({
      el: "#app",
      data: {
        date: null,
        color: '',
        R: Math.floor(Math.random() * 255),
        G: Math.floor(Math.random() * 255),
        B: Math.floor(Math.random() * 255),
        posX: 0,
        posY: 0,
        posX2: 0,
        posY2: 0,
      },
      created() {
        this.date = this.dateFormat(new Date());
        this.color = '#' + this.R.toString(16) + this.G.toString(16) + this.B.toString(16);
      },
      computed: {
        colors() {
          const preR = ('00' + this.R.toString(16)).slice(-2);
          const preG = ('00' + this.G.toString(16)).slice(-2);
          const preB = ('00' + this.B.toString(16)).slice(-2);
          this.color = '#' + preR + preG + preB;
        }
      },
      methods: {
        dateFormat(dateNow) {
          const yyyy = dateNow.getFullYear();
          const mmmm = ("0" + (dateNow.getMonth() + 1)).slice(-2);
          const dddd = ("0" + dateNow.getDate()).slice(-2);
          const dateFormated = yyyy + "-" + mmmm + "-" + dddd;
          return dateFormated;
        },
        pos($event) {
          this.posX = $event.clientX;
          this.posY = $event.clientY;
        },
        pos2($event) {
          this.posX2 = $event.clientX * 2;
          this.posY2 = $event.clientY * 2;
        }
      },
      watch: {
        R() {this.colors},
        G() {this.colors},
        B() {this.colors;},
        color: function (color) {
          this.R = parseInt(color.substr(1, 2), 16);
          this.G = parseInt(color.substr(3, 2), 16);
          this.B = parseInt(color.substr(5, 2), 16);
        },
      },
    });
```
