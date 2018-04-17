<template>
  <div class="content">
    <div class="col-sm-6">
      <form>
        <div class="row main-input-group">
          <input class="col form-control" v-model.trim="newTask" placeholder="New Task"/>
          <button class="btn btn-primary" @click="onAddTask">Add Task</button>
        </div>
      </form>
      <div class="row tab-group">
        <div class="col tab-title" :class="{active: filter === 'all'}"
          @click="onClickTab('all')">
          All
        </div>
        <div class="col tab-title" :class="{active: filter === 'doing'}"
          @click="onClickTab('doing')">
          Doing
        </div>
        <div class="col tab-title" :class="{active: filter === 'done'}"
          @click="onClickTab('done')">
          Done
        </div>
      </div>
      <div class="task-container">
        <div class="task-card">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        newTask: '',
        tasks: [],
        filter: 'all'
      };
    },
    methods: {
      onAddTask() {

      },
      onClickTab(tab) {
        this.filter = tab;
      }
    }
  }
</script>
