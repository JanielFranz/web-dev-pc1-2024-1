<script>
import UserItem from "./user-item.component.vue";

export default {
  name: "user-list",
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <h1>Store Users</h1>
  <div v-for="user in users" :key="user.id">
    <user-item :user="user"/>
  </div>
</template>

<style scoped>

</style>