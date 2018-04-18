<template>
  <div class="content">
    <div class="col-sm-4">
      <form @submit.prevent="doAddTask(newTask)">
        <div class="row main-input-group">
          <input class="col form-control" v-model.trim="newTask" placeholder="New Task"/>
          <button class="btn btn-primary" >Add Task</button>
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
        <div v-for="(task, i) in tasks" class="row task-card">
          #{{i+1}}
          <div v-if="!task.editing" class="col">{{task.name}}</div>
          <input v-if="task.editing" class="col form-control" v-model.tri="task.name"
            placeholder="Task Name"/>
          <i class="fa fa-pencil icon-btn icon-edit" aria-hidden="true"
            v-if="!task.done"
            @click="doEditTask(i)">
          </i>
          <i class="fa fa-check icon-btn icon-triger" aria-hidden="true"
            :class="{active: task.done}"
            @click="doTriggerTask(i)">
          </i>
          <i class="fa fa-times icon-btn icon-rm" aria-hidden="true"
            @click="doRemoveTask(i)">
          </i>
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
        tasks: [
          { name: 'test1', done: false, editing: false }
        ],
        filter: 'all'
      };
    },
    methods: {
      /* ===== main functions ===== */
      doAddTask(newTask) {
        if (!newTask) return;
        this.tasks.push({
          title: newTask,
          done: false,
          editing: false
        });
        this.newTask = '';
      },
      onClickTab(tab) {
        this.filter = tab;
      },
      /* ===== icon functions ===== */
      doTriggerTask(index) {
        this.tasks[index].done = !this.tasks[index].done;
      },
      doRemoveTask(index) {
        this.tasks.splice(index, 1);
      },
      doEditTask(index) {
        this.tasks[index].editing = !this.tasks[index].editing;
      }
    }
  }
</script>
