<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'About'">About</button>
    <button @click="currentComponent = 'Home'">Home</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!-- <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home> -->
    <div style="padding: 10rem">
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle> -->
      <label for="maxNumber">最大数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      />
      <pre>{{ typeof eventData.maxNumber }}</pre>

      <label for="host">主催者</label>
      <input id="host" type="texr" v-model.trim="eventData.host" />
      <pre>{{ eventData.host }}</pre>

      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <p>開催場所</p>
      <!-- v-model:双方向バインディング -->
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{
          location
        }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "@/components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "@/components/Home.vue";
import EventTitle from "@/components/EventTitle.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京",
      },
    };
  },
  // ローカル登録なので、ここだけ(App.vue)でしか使えない
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>
