<template>
  <modalForm v-show="isModalVisible" @close="closeModal" />
  <resultForm v-show="isResultVisible" />
  <form @submit.prevent="submit" class="container">
    <div class="row">
      <div class="col-md-3 p-1">
        <button
          type="button"
          class="btn btn-primary form-control"
          @click="() => showModal(1)"
        >
          Заказать в Москву
        </button>
      </div>
      <div class="col-md-3 p-1">
        <button
          type="button"
          class="btn btn-success form-control"
          @click="() => showModal(2)"
        >
          Заказать в Санкт-Петербург
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import modalForm from './modalForm.vue';
import resultForm from './resultForm.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: '',
      body: '',
      citiesEnum: {
        Москва: 1,
        'Санкт-Петербург': 2,
      },
      isModalVisible: false,
    };
  },
  components: {
    modalForm,
    resultForm,
  },
  computed: {
    ...mapGetters(['isResultVisible']),
  },
  methods: {
    ...mapMutations({
      setCity: 'setCity',
    }),
    showModal(id) {
      this.isModalVisible = true;
      this.setCity(id);
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped></style>
