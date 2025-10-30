<template>
  <div class="container mx-auto  flex flex-col items-center justify-center py-16 px-6">
    
    <!-- Header -->
    <div class="text-center mb-6 md:mb-12">
      <h2 class="text-xl md:text-3xl lg:text-4xl font-extrabold text-black dark:text-white mb-4">
        Let’s Build Something Together 🚀
      </h2>
      <p class="text-gray-600 dark:text-gray-400 text-sm md:text-lg max-w-xl mx-auto">
        Have an idea, collaboration, or just want to say hi? Reach out — I’m always open to exciting opportunities!
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-10 max-w-5xl w-full border border-gray-300 dark:bg-gray-800/50 dark:border-gray-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl">
      
      <!-- Left: Contact Info + Socials -->
      <div class="flex flex-col justify-between space-y-10">
        <div class="space-y-5">
          <div class="flex items-center space-x-4">
            <i class="fa-solid fa-envelope dark:text-white text-md md:text-2xl"></i>
            <span class="dark:text-gray-200 text-sm md:text-lg">saihtoolwin66@gmail.com</span>
          </div>
          <div class="flex items-center space-x-4">
            <i class="fa-solid fa-phone dark:text-white text-md md:text-2xl"></i>
            <span class="dark:text-gray-200 text-sm md:text-lg">+95 9 123 456 789</span>
          </div>
          <div class="flex items-center space-x-4">
            <i class="fa-solid fa-location-dot dark:text-white text-md md:text-2xl"></i>
            <span class="dark:text-gray-200 text-sm md:text-lg">Yangon, Myanmar</span>
          </div>
        </div>

        <!-- Social Icons -->
        <div class="flex space-x-6 dark:text-gray-300 text-2xl mt-6">
          <a href="#" class="hover:text-sky-400 transition"><i class="fa-brands fa-github"></i></a>
          <a href="#" class="hover:text-sky-400 transition"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" class="hover:text-sky-400 transition"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="hover:text-sky-400 transition"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>

      <!-- Right: Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-5">
        <div class="grid md:grid-cols-2 gap-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            required
            class="w-full p-3 rounded-lg dark:bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            required
            class="w-full p-3 rounded-lg dark:bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
          />
        </div>

        <textarea
          v-model="form.message"
          rows="5"
          placeholder="Tell me about your project..."
          required
          class="w-full p-3 rounded-lg dark:bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm md:text-lg transition shadow-lg hover:shadow-sky-400/40"
        >
          Send Message 
        </button>
      </form>
    </div>

    <!-- Footer -->
    <div class="mt-10 text-gray-600 dark:text-gray-400 text-sm">
      Made with ❤️ by <span class="text-black dark:text-white font-semibold">Sai Htoo Lwin</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModernContactSection",
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
button {
  transition: all 0.25s ease;
}
</style>
