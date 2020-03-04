<template>
  <div id="app">
    <h2>16.dynamic-component</h2>
    <ul>
      <template v-for="list in lists">
        <li :class="{active : list.isActive}"
          @click="click" :id="list.id" :key="list.id">{{list.name}}</li>
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

<style lang="scss">
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fbfbfc;
  color: #454659;
}
div {
  max-width: 780px;
  margin: 0 auto;
  padding: 2em;
}

img {
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
  margin-left: -1.5em;
  border-bottom: 1px solid rgb(231, 231, 231);
  li {
    font-weight: bold;
    padding-right: 0.6em;
    padding-left: 0.6em;
    margin-right: 0.6em;
    padding-bottom: 0.4em;
    text-align: center;
    cursor: pointer;
    &.active {
      border-bottom: 3px solid rgb(68, 209, 162);
    }
  }
}

h2 {
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
}

p {
  padding: 0 1em;
  font-weight: normal;
}

input {
  width: 96%;
  margin-left: 2%;
  font-size: 16px;
}
</style>
