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
        <div class="user-signed-up">
          <p>{{ user.signedUp.formattedTime }}</p>
        </div>
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
import format from "date-fns/format";

const SECONDS_IN = {
  YEAR: 31536000,
  MONTH: 2592000,
  DAY: 86400,
  HOUR: 3600,
  MINUTE: 60,
};
const MAX_USERS = 50;
const THREE_MINUTES_MS = 180000;

let signedUpTime = Date.now();

const timeSince = (timeSinceSignedUp) => {
  const secondsDiff = Math.floor((Date.now() - timeSinceSignedUp) / 1000);

  let interval = secondsDiff / SECONDS_IN.YEAR;

  if (interval > 1) {
    return format(new Date(timeSinceSignedUp), "dd MMM yyyy");
  }

  interval = secondsDiff / SECONDS_IN.MONTH;
  if (interval > 1) {
    return format(new Date(timeSinceSignedUp), "dd MMM");
  }

  interval = secondsDiff / SECONDS_IN.DAY;
  if (interval > 2) {
    return format(new Date(timeSinceSignedUp), "dd MMM");
  }

  if (interval > 1 && interval < 2) {
    return "yesterday";
  }

  interval = secondsDiff / SECONDS_IN.HOUR;
  if (interval > 1) {
    return Math.floor(interval) + "h ago";
  }

  interval = secondsDiff / SECONDS_IN.MINUTE;
  if (interval > 1) {
    return Math.floor(interval) + "m ago";
  }

  return "just now";
};

const signUpUsers = (users) => {
  users.forEach((user) => {
    user.signedUp = {
      formattedTime: timeSince(signedUpTime),
      timeMS: signedUpTime,
    };
    signedUpTime -= THREE_MINUTES_MS ** 1.2;
  });
  return users;
};

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
          const usersList = signUpUsers(response.data.results);
          this.users = usersList;
          this.total += usersList.length;
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
                this.isLoading = false;
                const usersList = signUpUsers(response.data.results);
                this.users = this.users.concat(usersList);
                this.total += usersList.length;

                const usersLeft = MAX_USERS - this.total;
                this.offset = usersLeft > this.offset ? this.offset : usersLeft;
              });
          }
        } else {
          this.allUsersLoaded = true;
        }
      }, 450);
    },
    updateUsersSignedInTime: function () {
      setInterval(() => {
        const updatedUsers = this.users.reduce((acc, user) => {
          const timeDiffMs = Date.now() - user.signedUp.timeMS;
          const timeFromSignedUp = Date.now() - timeDiffMs;
          const updatedUser = {
            ...user,
            signedUp: {
              formattedTime: timeSince(timeFromSignedUp),
              timeMS: timeFromSignedUp,
            },
          };
          return [...acc, updatedUser];
        }, []);

        this.users = updatedUsers;
      }, 120000);
    },
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.getNextUsers();
    this.updateUsersSignedInTime();
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

.user-signed-up {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
</style>
