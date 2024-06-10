import { createApp } from 'vue';
import App from './App.vue'
import FriendContatct from "./components/FriendContact.vue"

const app = createApp(App);

app.component('friend-contact', FriendContatct);

app.mount('#app');
