<template>
  <div id="app">
    <Header />
    <sidebar />
    <Article />
    <modal-add-project />
    <modal-add-task />
  </div>
</template>

<script>
  import Header from './components/common/Header'
  import Sidebar from './components/common/Sidebar'
  import Article from './components/common/Article'
  import ModalAddProject from './components/modal/ModalAddProject'
  import ModalAddTask from './components/modal/ModalAddTask'

  export default {
    name: 'app',
    components: {
      ModalAddTask,
      ModalAddProject,
      Article,
      Sidebar,
      Header
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
>