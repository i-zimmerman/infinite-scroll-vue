<template>
  <div class="timer">
    <p>{{ timeLeft }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: "",
    };
  },
  methods: {
    getTimeUntilTomorrow: function () {
      setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const leftHours = 23 - hours;
        const leftMinutes = 59 - minutes;
        const leftSeconds = 59 - seconds;

        this.timeLeft = `${leftHours}H ${leftMinutes}M ${leftSeconds}S`;
      }, 1000);
    },
  },
  mounted() {
    this.getTimeUntilTomorrow();
  },
  name: "Timer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer {
  font-size: 56px;
  line-height: 80px;
  font-weight: 600;
  text-transform: uppercase;

  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  background: #f3f3f3;
  border-radius: 24px;
  padding: 10px;
}
</style>
