<template>
  <transition name="modal-fade">
    <form class="modal-backdrop background" @click="closeResult">
      <div class="main" @click.stop>
        <div class="modal-header row">
          <h1>Результат</h1>
        </div>

        <div class="modal-body row">
          <div v-html="result"></div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success form-control"
              @click="closeResult"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'resultForm',
  computed: {
    ...mapGetters(['result']),
  },
  methods: {
    ...mapMutations(['closeResult']),
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  background-color: white;
  z-index: 999;
}

.main-body label {
  background: transparent;
}

.main-header {
  padding: 15px;
  /* display: flex; */
}

.main-body {
  position: relative;
  padding: 20px 10p;
}
</style>
