<template>
  <div>
    <div class="card bg-light text-left border-secondary">
      <div class="card-header">
        <h5 class="card-title">
          {{ author }}
        </h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ comment.content }}
        </p>
      </div>
      <div class="card-footer text-center">
        <small class="text-muted">{{ comment.created_at }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    author() {
      return this.comment.firstName + ' ' + this.comment.lastName
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 1rem;
  .card-title {
    text-transform: capitalize;
  }
}
.border-secondary {
  border-color: rgba(0, 0, 0, 0.125) !important;
}
</style>
