<template>
  <div>
    <p>Left until draw</p>
    <Timer />
  </div>
  <UserList />
</template>

<script>
import UserList from "./components/UserList";
import Timer from "./components/Timer";

export default {
  name: "App",
  components: {
    UserList,
    Timer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px 300px;
}
</style>
