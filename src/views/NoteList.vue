<template>
  <div class="container">
    <div v-if="notes.length >= 1">
      <div class="row justify-content-start">
        <NoteCard
          v-for="note in notes"
          :key="note.id"
          :note="note"
          @noteDeleted="deleteCard"
        />
      </div>
    </div>
    <div v-else>
      <div class="card">
        <div class="card-body">
          <h5 class="card-text">There aren't any notes yet</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NoteCard
  },
  beforeCreate() {
    this.$store.dispatch('fetchNotes')
  },
  computed: mapState(['notes']),
  methods: {
    deleteCard() {
      this.$store.dispatch('fetchNotes')
    }
  }
}
</script>
