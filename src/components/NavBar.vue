<template>
  <div id="nav" class="bg-light">
    <nav>
      <router-link :to="{ name: 'note-list' }">List</router-link> |
      <router-link :to="{ name: 'note-create' }">Create</router-link> |
      <router-link :to="{ name: 'note-preferences' }">Preferences</router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>
