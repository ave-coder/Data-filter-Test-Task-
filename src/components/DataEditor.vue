<template>
  <div class="container mx-auto mt-4">
    <div class="flex items-center justify-center">
      <div class="relative">
        <select v-model="selectedItem"
          class="appearance-none w-full bg-gray-100 border border-gray-300 py-2 px-4 pr-8 rounded-none cursor-pointer leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500">
          <option disabled value="">Выберите элемент</option>
          <option v-for="(item, index) in items" :key="index" :value="item">
            {{ item.name }} - {{ item.value }}
          </option>
        </select>
        <svg class="fill-current absolute pointer-events-none top-0 right-0 mt-4 mr-3 w-2 h-2"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998">
          <path
            d="M480.622 537.797l-441.189-441.189c-25.21-25.211-25.21-65.971 0-91.183 25.211-25.21 65.971-25.21 91.181 0l398.381 398.381 398.381-398.381c25.211-25.21 65.971-25.21 91.183 0 25.21 25.211 25.21 65.973 0 91.183L480.622 537.797z" />
        </svg>
      </div>
      <button :disabled="!selectedItem"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        @click="showEditPopup = true">Редактировать</button>
    </div>
    <div v-if="showEditPopup" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white w-1/2 px-8 py-6 rounded-lg">
        <h2 class="text-xl mb-4">Редактировать {{ selectedItem.name }}</h2>
        <form>
          <div class="flex items-center mb-4">
            <label class="w-1/4" for="value">Значение:</label>
            <input class="block appearance-none border border-gray-300 py-2 px-4 ml-2 rounded-full w-3/4" type="text"
              id="value" v-model="selectedItem.value">
          </div>
        </form>
        <div class="flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            @click="saveChanges">Сохранить изменения</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedItem: "",
        items: [
          { name: "foo1", value: "bar1" },
          { name: "foo2", value: "bar2" },
          { name: "foo3", value: "bar3" },
          { name: "foo4", value: "bar4" },
          { name: "foo5", value: "bar5" },
        ],
        showEditPopup: false,
      }
    },
    methods: {
      saveChanges() {
        const index = this.items.findIndex(item => item === this.selectedItem); // Находим индекс выбранного элемента в массиве items       
        this.items[index].value = this.selectedItem.value; // Обновляем значение 'value' выбранного элемента на новое значение, введенное пользователем    
        this.selectedItem = this.items[index]; // Обновляем selectedItem новым объектом с обновленным значением 'value'
        this.showEditPopup = false; // Скрываем окно редактирования
      }
    }
  }
</script>