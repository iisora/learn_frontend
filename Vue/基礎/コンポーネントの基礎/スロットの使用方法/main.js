/* slotを使用することでコンポーネントの外部からコンポーネント内のtemplateの特定の位置に差し込むことができる */

const Layout = {
  template: `
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    `,
};

const vm = new Vue({
  el: "#app",
  components: {
    layout: Layout,
  },
});
