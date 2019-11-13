<template>
  <div id="app">
    <Header />
    <Sidebar />
    <div class="content">
      <Tasks v-for="(date, index) in sortDate" :key="index" :date="date"/>
    </div>
    <ModalAddProject />
    <ModalAddTask />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Sidebar from  './components/Sidebar.vue'
  import Tasks from  './components/Tasks.vue'
  import ModalAddProject from './components/ModalAddProject.vue'
  import ModalAddTask from './components/ModalAddTask.vue'

  export default {
    name: 'app',
    components: {
      ModalAddTask,
      ModalAddProject,
      Header,
      Sidebar,
      Tasks
    },
    computed: {
      datesCreated() {
        return this.$store.state.datesCreated
      },
      sortDate: function () {
        let datesCreated = this.datesCreated
        return datesCreated.sort(function(a,b){
          return new Date(b) - new Date(a)
        })
      }
    }
  }
</script>

<style>
  * {
    color: #222222;
    font-size: 16px;
  }

  body,
  h1,
  h2 {
    margin: 0;
    padding: 0 !important;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }

  button:focus {
    outline: none;
  }

  #app {
    display: flex;
    flex-wrap: wrap;
  }

  .content {
    width: 70%;
    padding: 30px 0;
  }
</style>
