<template>
  <div>
    <ul class="user-list">
      <li class="user-list__heading">
        <p>participant</p>
        <p>work email</p>
        <p>signed up</p>
      </li>
      <li class="user" v-for="user in users" :key="user.first">
        <div class="user-identity">
          <img class="user-avatar" :src="user.picture.thumbnail" />
          <p>
            {{ user.name.first }}
            {{ user.name.last }}
          </p>
        </div>
        <div class="user-email">
          <p>{{ user.email }}</p>
        </div>
        <div class="user-signed-up"></div>
      </li>
    </ul>
    <div v-if="isLoading">Loading...</div>
    <div v-if="allUsersLoaded" class="users-loaded">
      <div class="success-icon">
        <svg
          width="16"
          height="13"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.67568L6.21818 14L17 1"
            stroke="#219653"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <p>All users loaded</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash/debounce";

const MAX_USERS = 50;

export default {
  data() {
    return {
      users: [],
      total: 0,
      allUsersLoaded: false,
      offset: 20,
      isLoading: false,
    };
  },
  methods: {
    getInitialUsers() {
      axios
        .get(`https://randomuser.me/api/?results=${this.offset}`)
        .then((response) => {
          this.users = response.data.results;
          this.total += response.data.results.length;
        });
    },
    getNextUsers() {
      window.onscroll = debounce(() => {
        const fullHeight = document.documentElement.offsetHeight;
        const scrolledFromTop = document.documentElement.scrollTop;
        const visibleAreaHeight = window.innerHeight;

        const bottomOfWindow =
          fullHeight - (scrolledFromTop + visibleAreaHeight) === 0;

        if (this.total < MAX_USERS) {
          if (bottomOfWindow) {
            this.isLoading = true;
            axios
              .get(`https://randomuser.me/api/?results=${this.offset}`)
              .then((response) => {
                console.log(this.isLoading);
                this.isLoading = false;
                this.users = this.users.concat(response.data.results);
                this.total += response.data.results.length;

                const usersLeft = MAX_USERS - this.total;
                this.offset = usersLeft > this.offset ? this.offset : usersLeft;
              });
          }
        } else {
          this.allUsersLoaded = true;
        }
      }, 450);
    },
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.getNextUsers();
  },
  name: "UsersList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.user-list__heading {
  display: flex;
  justify-content: space-between;
}

.user-list {
  display: flex;
  flex-direction: column;
}

.user {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.user-identity {
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.user-avatar {
  border-radius: 50%;
  margin-right: 20px;
}

.user-email {
  margin-left: 20px;
}

.users-loaded {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  color: #219653;
  width: 761px;
  height: 72px;
  background: #edf9f2;
  border-radius: 67px;
}

.success-icon {
  margin-right: 18px;
}
</style>
