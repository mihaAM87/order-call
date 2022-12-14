<template>
  <transition name="modal-fade" @click="close">
    <form class="modal-backdrop background" @submit.prevent="submit">
      <div class="main" @click.stop>
        <div class="modal-header row">
          <h1>Заказать звонок</h1>
        </div>

        <div class="modal-body row">
          <div class="col-md-4 col-lg-3">
            <div>
              <label for="name">Имя*</label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Иван Иванов"
                v-model="name"
                required
              />
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="form-group">
              <label for="tel">Телефон*</label>
              <input
                type="text"
                name="tel"
                id="tel"
                class="form-control"
                placeholder="+7 (___) ___-__-__"
                v-model="phone"
                required
                pattern="^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\t ]?)?\(?\d{3,5}\)?[\t ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$"
              />
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="form-group">
              <label for="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                v-model="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div class="col-md-8 col-lg-3">
            <div class="form-group">
              <label for="city">Город*</label>
              <select
                type="text"
                name="city"
                id="city"
                class="form-control"
                v-model="city_id"
                required
              >
                <option
                  v-for="city of citiesArr"
                  :value="city.id"
                  :key="city.id"
                >
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 offset-lg-9">
            <div class="form-group">
              <button type="submit" class="btn btn-success form-control">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'modalForm',
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['setCity', 'setName', 'setPhone', 'setEmail']),
    ...mapActions(['fetchResult']),
    clearForm() {
      this.name = '';
      this.phone = '';
      this.email = '';
      this.city_id = 0;
    },
    close() {
      this.clearForm();
      this.$emit('close');
    },
    submit() {
      this.fetchResult({
        name: this.name,
        phone: this.phone.replace(/[^+\d]/g, '').replace(/^8/, '+7'),
        email: this.email,
        city_id: this.city_id,
      });
      this.clearForm();
      this.$emit('close');
    },
  },
  computed: {
    name: {
      get() {
        return this.nameValue;
      },
      set(value) {
        this.setName(value);
      },
    },
    phone: {
      get() {
        return this.phoneValue;
      },
      set(value) {
        this.setPhone(value);
      },
    },
    email: {
      get() {
        return this.emailValue;
      },
      set(value) {
        this.setEmail(value);
      },
    },
    city_id: {
      get() {
        return this.city_idValue;
      },
      set(value) {
        this.setCity(value);
      },
    },
    ...mapGetters([
      'citiesArr',
      'nameValue',
      'phoneValue',
      'emailValue',
      'city_idValue',
    ]),
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
