<script>
import {User} from "../model/user.entity.js";


export default {
name: "user-item",
  props: {
  user: {
    type: User,
    required:true
  }
  },
  computed: {
    fullName(){
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
}
</script>

<template>
  <pv-card class="mt-4">
    <template #title class="mt-4">{{ fullName }}</template>
    <template #content>
      <div class="flex flex-column justify-content-center align-items-center">
        <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center flex-wrap">
          {{ user.id }}
        </span>
        </p>
        <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center flex-wrap mr-2">
          {{ user.username }}
        </span>
          <span class="flex align-items-center justify-content-center">
          {{ user.email }}
        </span>
        </p>
        <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center flex-wrap">
          {{ user.address.fullAddress }}
        </span>
        </p>
        <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center flex-wrap">
          {{ user.phone }}
        </span>
        </p>
      </div>

    </template>
  </pv-card>
</template>

<style scoped>

</style>