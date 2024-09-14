<script >
  import UserItem from "./iam/components/user-item.component.vue";
  import {FakeStoreApiService} from "./iam/services/fake-store-api.service.js";
  import {User} from "./iam/model/user.entity.js";
  import {Address} from "./iam/model/address.entity.js";
  import UserList from "./iam/components/user-list.component.vue";

  export default {
    name: "App",
    components: {UserList, UserItem},
    data(){
      return {
        users: [],
        errors: [],
        fakeStoreApi: new FakeStoreApiService()
      }
    },
    methods: {

      buildUserListFromResponseData(users){
        return users.map((user) => new User(new Address(user.address), user.id, user.email,
            user.username, user.firstName, user.lastName, user.phone))
      },
      getUsers(){
        this.fakeStoreApi.getUsers()
            .then((response) => {
              let users = response.data.map(user => {
                return {
                  ...user,
                  firstName: user.name.firstname,
                  lastName: user.name.lastname
                };
              });
              this.users = this.buildUserListFromResponseData(users)
              console.log(this.users[0].lastName)
            }).catch(e => {
              this.errors.push(e)
              console.log(e)
        })
      }
    },
    created() {
      this.getUsers()
    }
  }
</script>

<template>
  <div>
    <div>
      <pv-menubar>
        <template #start>
          <h1>Fake Store API Showcase</h1>
        </template>
      </pv-menubar>
    </div>
    <user-list :users="users"/>
  </div>


</template>

<style scoped>

</style>
