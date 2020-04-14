<template>
  <div id="app">
    <NavBar />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
body {
  background-color: #f3f3f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  & a {
    color: #2c3e50;
    text-decoration: none;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 1.37rem;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0275d8;
    }
  }
}
button {
  min-width: 6rem;
  width: 100%;
  max-width: 300px;
  margin-bottom: 0.1rem;
}
input,
textarea {
  width: 300px;
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0;
}
.card {
  margin-top: 2rem;
  .card-header {
    padding-bottom: 0.25rem;
  }
}
.error {
  border: 1px solid #dc3545;
}
.errorMessage {
  color: #dc3545;
  &:last-of-type {
    margin: 0.25rem 0 0 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
