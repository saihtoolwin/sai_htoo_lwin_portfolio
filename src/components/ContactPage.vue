<template>
  <div class="min-h-screen  dark:bg-gray-900 flex items-center justify-center px-6 py-12">
    <div class="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Contact Me
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="flex flex-col  space-y-6">
          <div class="flex items-center space-x-4">
            <div class="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-full">
              <i class="fa-solid fa-phone text-blue-600 dark:text-blue-400 text-xl"></i>
            </div>
            <div>
              <p class="text-gray-600 dark:text-gray-300">Phone</p>
              <p class="font-semibold text-gray-900 dark:text-white">+95 9 123 456 789</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="p-4 bg-green-100 dark:bg-green-900/40 rounded-full">
              <i class="fa-solid fa-envelope text-green-600 dark:text-green-400 text-xl"></i>
            </div>
            <div>
              <p class="text-gray-600 dark:text-gray-300">Email</p>
              <p class="font-semibold text-gray-900 dark:text-white">saihtoolwin66@gmail.com</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-full">
              <i class="fa-solid fa-location-dot text-purple-600 dark:text-purple-400 text-xl"></i>
            </div>
            <div>
              <p class="text-gray-600 dark:text-gray-300">Address</p>
              <p class="font-semibold text-gray-900 dark:text-white">Yangon, Myanmar</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="space-y-5">
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700  dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700  dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700  dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMePage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.form.name}! Your message has been sent.`);
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
/* Optional animations for smooth hover/focus */
input,
textarea {
  transition: all 0.3s ease;
}
</style>
