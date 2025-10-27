<template>
  <div class=" bg-gradient-to-br from-slate-900 to-gray-900 flex items-center justify-center p-6 mt-3 flex-col">
    <div class="max-w-3xl w-full bg-gray-700/40 rounded-xl shadow-md p-8">
      
      <!-- Header -->
      <h1 class="text-3xl font-bold text-center text-white dark:text-white mb-8">
        Contact Me
      </h1>
      <p class="text-center text-white mb-8">
        Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible!
      </p>

      <div class="grid md:grid-cols-2 gap-8 bg-gray-700/40 px-6 py-7 rounded-lg">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="flex items-center space-x-4">
            <i class="fa-solid fa-phone text-white dark:text-gray-300 text-xl"></i>
            <span class="text-white dark:text-white font-medium">+95 9 123 456 789</span>
          </div>

          <div class="flex items-center space-x-4">
            <i class="fa-solid fa-envelope text-white dark:text-gray-300 text-xl"></i>
            <span class="text-white dark:text-white font-medium">saihtoolwin66@gmail.com</span>
          </div>

          <div class="flex items-center space-x-4">
            <i class="fa-solid fa-location-dot text-white dark:text-gray-300 text-xl"></i>
            <span class="text-white dark:text-white font-medium">Yangon, Myanmar</span>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="space-y-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            required
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />

          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />

          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Message"
            required
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-400 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            class="w-full py-2 rounded bg-sky-900 text-white dark:text-gray-900 font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <div class="container mx-auto flex justify-end my-3 text-gray-400">
    Made with ❤️ by Sai Htoo Lwin
  </div>
  </div>
  
</template>

<script>
export default {
  name: "SimpleContactPage",
  data() {
    return {
      form: { name: "", email: "", message: "" },
    };
  },
  methods: {
    submitForm() {
      alert(`Thanks, ${this.form.name}! Your message has been sent.`);
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
input,
textarea,
button {
  transition: all 0.2s ease;
}
</style>
