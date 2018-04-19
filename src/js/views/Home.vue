<template>
  <div class="content">
    <h3>Todo List</h3>
    <div class="col-sm-4 detail-content">
      <form @submit.prevent="doAddTask(newTask)">
        <div class="row main-input-group">
          <input class="col form-control" v-model.trim="newTask" placeholder="New Task"/>
          <button class="btn btn-primary" >Add Task</button>
        </div>
      </form>
      <div class="row tab-group">
        <div class="col tab-title" :class="{active: filter === 'all'}"
          @click="onClickTab('all')">
          All ({{tasks | countFilteredTasks('all')}})
        </div>
        <div class="col tab-title" :class="{active: filter === 'doing'}"
          @click="onClickTab('doing')">
          Doing ({{tasks | countFilteredTasks('doing')}})
        </div>
        <div class="col tab-title" :class="{active: filter === 'done'}"
          @click="onClickTab('done')">
          Done ({{tasks | countFilteredTasks('done')}})
        </div>
      </div>
      <div class="task-container">
        <div v-for="(task, i) in filterTaskStatus" class="row task-card">
          #{{i+1}}
          <div class="col">
            <span v-if="!task.editing">{{task.name}}</span>
            <form v-if="task.editing" @submit.prevent="doEditTask(task.id)">
              <input class="col form-control"
                v-model.tri="task.name"
                placeholder="Task Name"/>
            </form>
          </div>
          <i class="fa fa-pencil icon-btn icon-edit" aria-hidden="true"
            :class="{active: task.editing}"
            v-if="!task.done"
            @click="doEditTask(task.id)">
          </i>
          <i class="fa fa-check icon-btn icon-triger" aria-hidden="true"
            :class="{active: task.done}"
            @click="doTriggerTask(task.id)">
          </i>
          <i class="fa fa-times icon-btn icon-rm" aria-hidden="true"
            @click="doRemoveTask(task.id)">
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let TASK_ID = 0;
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
      /* ===== main functions ===== */
      doAddTask(newTask) {
        if (!newTask) return;
        this.tasks.push({
          name: newTask,
          done: false,
          editing: false,
          id: TASK_ID++
        });
        this.newTask = '';
      },
      onClickTab(tab) {
        this.filter = tab;
      },
      /* ===== icon functions ===== */
      doTriggerTask(tid) {
        this.tasks = this.tasks.map(t => {
          if (t.id === tid) {
            t.done = !t.done;
            t.editing = false;
          }
          return t;
        });
      },
      doRemoveTask(tid) {
        this.tasks = this.tasks.filter(t => t.id !== tid);
      },
      doEditTask(tid) {
        this.tasks = this.tasks.map(t => {
          if (t.id === tid) t.editing = !t.editing;
          return t;
        });
      }
    },
    filters: {
      countFilteredTasks(tasks, status) {
        switch (status) {
          case 'doing':
            return tasks.filter(t => !t.done).length;
          case 'done':
            return tasks.filter(t => t.done).length;
          default:
            return tasks.length;
        }
      }
    },
    computed: {
      filterTaskStatus() {
        switch (this.filter) {
          case 'doing':
            return this.tasks.filter(t => !t.done);
          case 'done':
            return this.tasks.filter(t => t.done);
          default:
            return this.tasks;
        }
      }
    }
  }
</script>
