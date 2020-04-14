<template>
  <transition name="fade">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card bg-light mb-3">
        <div class="card-header">
          <h5>{{ note.name }}</h5>
        </div>
        <div class="card-body text-secondary text-justify">
          <div class="row justify-content-between">
            <div class="col-7 note-content">
              <p class="card-text">{{ note.content }}</p>
            </div>
            <div class="col-5 card-buttons">
              <router-link :to="{ name: 'note-edit', params: { id: note.id } }">
                <BaseButton color="primary">Edit</BaseButton>
              </router-link>
              <router-link
                :to="{ name: 'comment-create', params: { id: note.id } }"
              >
                <BaseButton color="success">Comment</BaseButton>
              </router-link>
              <BaseButton color="danger" @click.native="deleteNote"
                >Delete</BaseButton
              >
            </div>
          </div>
        </div>
        <div class="card-footer">
          <router-link
            :to="{
              name: 'note-show',
              params: { id: note.id }
            }"
          >
            <BaseButton>Show</BaseButton>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      id: this.note.id
    }
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteNote() {
      this.$store.dispatch('deleteNote', this.note) &&
        this.$emit('noteDeleted', this.note)
    }
  }
}
</script>

<style lang="scss" scoped>
.note-content {
  overflow: hidden;
  height: 9rem;
}
.card-buttons {
  div {
    margin-bottom: 1rem;
  }
}
</style>
