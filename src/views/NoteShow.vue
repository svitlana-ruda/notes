<template>
  <div class="container">
    <div class="note-title">
      <h3>{{ note.name }}</h3>
    </div>
    <p class="text-left">{{ note.content }}</p>
    <div class="note-comments">
      <h4>Comments</h4>
    </div>
    <div v-if="getCommentsById.length">
      <NoteComment
        v-for="comment in getCommentsById"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <div v-else>
      <div class="card">
        <div class="card-body">
          <h6 class="card-text">There aren't any comments yet</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NoteComment from '@/components/NoteComment.vue'

export default {
  components: {
    NoteComment
  },
  props: ['id'],
  created() {
    this.$store.dispatch('fetchNote', this.id)
    this.$store.dispatch('fetchComments')
  },
  computed: {
    ...mapState(['note', 'comments']),
    ...mapGetters(['getCommentsById'])
  }
}
</script>

<style lang="scss" scoped>
.note-title {
  margin-top: 1.5rem;
}
.note-comments {
  margin-top: 2.5rem;
}
</style>
