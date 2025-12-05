<template>
    <div class="container mx-auto  pt-12 mb-4 px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            <div ref="aboutSection" class=" grid">
                <!-- About Section -->
                <div
                    class="dark:bg-gray-800/50 backdrop-blur-sm border-gray-300 dark:border-gray-700/50  rounded-2xl p-3 md:p-6 shadow-md border ">
                    <h2 class=" font-bold text-2xl dark:text-white   md:text-3xl mb-3 md:mb-8 flex items-center">
                        <!-- <i class="fas fa-user mr-3 text-blue-400"></i> -->
                        About Me
                    </h2>
                    <div class="dark:bg-gray-700/30 rounded-xl p-3 border  border-gray-600/30">
                        <p class="text-black dark:text-gray-300 text-base md:text-md  leading-relaxed">
                            I'm a 3rd-year student at the University of Computer Studies, currently
                            focusing on web development. Although I've paused my formal education to
                            focus more on practical skills, I've been dedicating my time to learning
                            and mastering front-end and back-end web technologies. I enjoy turning
                            complex requirements into intuitive, user-friendly web applications. My
                            goal is to continuously improve my skills and contribute to exciting
                            projects that make a real impact.
                        </p>
                    </div>
                </div>
                <div
                    class="dark:bg-gray-800/50 backdrop-blur-sm border-gray-300 dark:border-gray-700/50 rounded-2xl mt-3 p-3 md:p-6 shadow-md border">

                    <h2 class="font-bold text-2xl dark:text-white md:text-3xl mb-2 md:mb-6 flex items-center">
                        Skills & Technologies
                    </h2>

                    <div class="space-y-6">

                        <!-- Row 1: Languages -->
                        <div class="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                            <h3 class="text-black dark:text-white font-semibold md:text-lg mb-3">Programming Languages
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="flex items-center gap-2 bg-yellow-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">JavaScript</span>
                                </div>
                                <div class="flex items-center gap-2 bg-indigo-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">PHP</span>
                                </div>
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Dart</span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 2: Frameworks -->
                        <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                            <h3 class="text-black dark:text-white font-semibold md:text-lg mb-3">Frameworks & Libraries
                            </h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="flex items-center gap-2 bg-cyan-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">React</span>
                                </div>
                                <div class="flex items-center gap-2 bg-green-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Vue.js</span>
                                </div>
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-5 h-5">
                                        <path fill="#38bdf8"
                                            d="M24 14c-5.333 0-8.667 2.667-10 8 2-2.667 4.333-3.667 7-3 1.522.38 2.618 1.49 3.805 2.713C26.987 23.104 29.26 25.5 34 25.5c5.333 0 8.667-2.667 10-8-2 2.667-4.333 3.667-7 3-1.522-.38-2.618-1.49-3.805-2.713C30.013 16.396 27.74 14 24 14zm-14 11c-5.333 0-8.667 2.667-10 8 2-2.667 4.333-3.667 7-3 1.522.38 2.618 1.49 3.805 2.713C12.987 34.604 15.26 37 20 37c5.333 0 8.667-2.667 10-8-2 2.667-4.333 3.667-7 3-1.522-.38-2.618-1.49-3.805-2.713C16.013 27.896 13.74 25.5 10 25.5z" />
                                    </svg>

                                    <span class="text-black dark:text-gray-300 text-sm">Tailwind CSS</span>
                                </div>

                                <div class="flex items-center gap-2 bg-red-500/20 rounded-md px-3 py-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Laravel</span>
                                </div>
                                <div class="flex items-center gap-2 bg-orange-500/20 rounded-md px-3 py-1">
                                    <img src="https://filamentphp.com/images/icon.png" class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Filament</span>
                                </div>
                                <!-- Mobile -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Flutter</span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 3: Databases -->
                        <div class="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                            <h3 class="text-black dark:text-white font-semibold md:text-lg mb-3">Databases</h3>
                            <div class="flex flex-wrap gap-3">
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">MySQL</span>
                                </div>
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">PostgreSQL</span>
                                </div>
                                <div class="flex items-center gap-2 bg-yellow-500/20 rounded-md px-3 py-1">
                                    <img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Firebase</span>
                                </div>

                            </div>
                        </div>

                        <!-- Row 4: Tools + Mobile (combined) -->
                        <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                            <h3 class="text-black dark:text-white font-semibold md:text-lg mb-3">Tools &
                                Development</h3>
                            <div class="flex flex-wrap gap-3">

                                <!-- Tools -->
                                <div class="flex items-center gap-2 bg-orange-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Ubuntu</span>
                                </div>
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">DigitalOcean</span>
                                </div>
                                <div class="flex items-center gap-2 bg-orange-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Postman</span>
                                </div>
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                                        class="w-5 h-5">
                                    <span class="text-black dark:text-gray-300 text-sm">Docker</span>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <!-- Experience Timeline -->
            <div ref="experienceItems"
                class="dark:bg-gray-800/50 backdrop-blur-sm border-gray-300 dark:border-gray-700/50  rounded-2xl p-3 md:p-6 shadow-md border   ">
                <h2 class=" font-bold text-2xl dark:text-white  mb-2  md:text-3xl  flex items-center">
                    <!-- <i class="fas fa-briefcase mr-3 text-blue-400"></i> -->
                    Experience
                </h2>
                <div class=" lg:max-h-[1000px] xl:max-h-[880px] overflow-x-scroll">
                    <ul class="relative  space-y-8 ">
                        <div class="absolute left-6 top-4 w-0.5 timeline-line" style="height: calc(100% - 80px)"></div>
                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/30">
                                <i class="fa-solid fa-code-compare  text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="dark:bg-gray-700/40 cursor-pointer rounded-xl p-3 border cursor-p border-gray-200 dark:border-gray-600/40 hover:border-red-500 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p
                                        class="text-red-500 dark:text-red-300 font-medium bg-red-500/10 px-3 py-1 rounded-full text-sm">
                                        2025
                                        April - Current
                                    </p>
                                    <span
                                        class="text-xs text-gray-700 border border-gray-400  dark:bg-gray-800/50 bg-white dark:text-gray-300  px-2 py-1 rounded">Full-time</span>
                                </div>
                                <h3 class="font-bold  text-md md:text-xl mb-1 dark:text-white">
                                    FullStack Developer
                                    <span class="text-gray-600 dark:text-gray-400 text-sm font-normal"> at Gfrog +
                                        Hinomaru Japanese
                                        education
                                        Center</span>
                                </h3>
                                <p class="mt-3 text-black dark:text-gray-300 leading-relaxed text-sm md:text-md">
                                    As a Full Stack Developer, I am responsible for developing and maintaining dynamic
                                    web
                                    applications using
                                    Laravel and Filament for robust back-end systems, React for interactive front-end
                                    interfaces, and WordPress
                                    for content-driven projects. My work includes building scalable APIs, managing
                                    relational databases, and
                                    integrating modern UI components. I collaborate with teams to deliver seamless user
                                    experiences, ensure
                                    performance optimization, and maintain high-quality standards across the entire
                                    development stack.
                                </p>

                                <div class="mt-4 flex flex-wrap gap-3">
                                    <!-- WordPress -->
                                    <i
                                        class="fa-brands fa-wordpress text-2xl w-8 h-8 flex items-center justify-center dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-blue-600 transition-all duration-300"></i>

                                    <!-- React -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        alt="React"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-cyan-500 transition-all duration-300" />

                                    <!-- Laravel -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        alt="Laravel"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- PostgreSQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                        alt="PostgreSQL"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-blue-700 transition-all duration-300" />

                                    <!-- Flutter -->

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-[#02569B] transition-all duration-300"
                                        alt="Flutter">
                                    <!-- Dart -->

                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40  rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-[#0175C2] transition-all duration-300"
                                        alt="Dart">
                                </div>


                            </div>
                        </li>
                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/30">
                                <i class="fa-solid fa-laptop-code  text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="dark:bg-gray-700/40 cursor-pointer rounded-xl p-3 border border-gray-200 dark:border-gray-600/40 hover:border-cyan-500 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p
                                        class="text-cyan-500 dark:text-cyan-300 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm">
                                        2025
                                        Jan - 2025 Apr
                                    </p>
                                    <span
                                        class="text-xs text-gray-700 border border-gray-400  dark:bg-gray-800/50 bg-white dark:text-gray-300  px-2 py-1 rounded">Full-time</span>
                                </div>
                                <h3 class="font-bold  text-md md:text-xl mb-1 dark:text-white">
                                    Backend Developer
                                    <span class="text-gray-600 dark:text-gray-400 text-sm font-normal"> at Future
                                        Innovation IT</span>
                                </h3>
                                <p class="mt-3 text-black dark:text-gray-300 leading-relaxed text-sm md:text-md">
                                    As a Backend Developer, I was responsible for designing and maintaining robust
                                    server-side systems using Laravel.
                                    My work involved developing RESTful APIs, managing relational databases, and
                                    ensuring
                                    secure and optimized
                                    performance for various business applications. I collaborated closely with the
                                    front-end
                                    team to deliver
                                    smooth data flows and reliable back-end functionality.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-2">
                                    <!-- Laravel -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        alt="Laravel"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- PostgreSQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                        alt="PostgreSQL"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-blue-700 transition-all duration-300" />

                                    <!-- Postman -->
                                    <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-[#FF6A00] transition-all duration-300" />
                                    <!-- MySQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-yellow-500 transition-all duration-300" />

                                </div>
                            </div>
                        </li>
                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-md shadow-blue-500/30">
                                <i class="fas fa-code  text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="dark:bg-gray-700/40 cursor-pointer rounded-xl p-3 border border-gray-200 dark:border-gray-600/40 hover:border-blue-500 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p
                                        class="text-blue-500 dark:text-blue-300 font-medium bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                                        2024
                                        July - 2024 Dec
                                    </p>
                                    <span
                                        class="text-xs text-gray-700 border border-gray-400  dark:bg-gray-800/50 bg-white dark:text-gray-300  px-2 py-1 rounded">Remote
                                        — Full-time</span>
                                </div>
                                <h3 class="font-bold  text-md md:text-xl mb-1 dark:text-white">
                                    Intern Developer
                                    <span class="text-gray-600 dark:text-gray-400 text-sm font-normal"> at Creative
                                        Coder Myanmar</span>
                                </h3>
                                <p class="mt-3 text-black dark:text-gray-300 leading-relaxed text-sm md:text-md">
                                    As an Intern Developer, I work as a full-stack developer using Vue.js and Laravel
                                    with
                                    Inertia.js to
                                    create seamless user interfaces and efficient back-end systems. My focus is on
                                    building
                                    responsive,
                                    interactive applications and optimizing APIs for smooth user experiences.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-2">
                                    <!-- Laravel -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        alt="Laravel"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- Vue -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                                        alt="Vue"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-green-500 transition-all duration-300" />

                                    <!-- Inertia.js -->
                                    <img src="https://inertiajs.com/favicon.ico" alt="Inertia.js"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-purple-500 transition-all duration-300" />

                                    <!-- MySQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-yellow-500 transition-all duration-300" />
                                </div>
                            </div>
                        </li>

                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-md shadow-green-500/30">
                                <i class="fas fa-server  text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="dark:bg-gray-700/40 cursor-pointer rounded-xl p-3 border border-gray-200 dark:border-gray-600/40 hover:border-green-500 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p
                                        class="text-green-500 dark:text-green-300 font-medium bg-green-500/10 px-3 py-1 rounded-full text-sm">
                                        2024 Jan - 2024 July
                                    </p>
                                    <span
                                        class="text-xs text-gray-700 border border-gray-400  dark:bg-gray-800/50 bg-white dark:text-gray-300  px-2 py-1 rounded">Full-time</span>
                                </div>
                                <h3 class="font-bold  text-md md:text-xl mb-1 dark:text-white">
                                    Junior Backend Developer
                                    <span class="text-gray-600 dark:text-gray-400 text-sm font-normal"> at Impact Tech
                                        Software
                                        Solutions</span>
                                </h3>
                                <p class="mt-3 text-black dark:text-gray-300 leading-relaxed text-sm md:text-md">
                                    In this role, I worked primarily on the back-end, developing and maintaining
                                    databases
                                    and server-side
                                    logic using Laravel. I gained valuable experience in working with databases, API
                                    development, and
                                    ensuring security and performance in back-end processes.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-2">
                                    <!-- Laravel -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        alt="Laravel"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- PostgreSQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                        alt="PostgreSQL"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-blue-700 transition-all duration-300" />

                                    <!-- Postman -->
                                    <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-[#FF6A00] transition-all duration-300" />
                                    <!-- MySQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL"
                                        class="w-8 h-8 p-1 object-contain dark:bg-gray-700/40 rounded-lg border border-gray-300 dark:border-gray-600/40 hover:border-yellow-500 transition-all duration-300" />

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const aboutSection = ref(null);
const experienceItems = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    ScrollTrigger.create({
        trigger: aboutSection.value,
        start: "top 100%",
        onEnter: () => {
            gsap.fromTo(
                aboutSection.value,
                { opacity: 0, x: -200 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                }
            );
        }
    });
    ScrollTrigger.create({
        trigger: experienceItems.value,
        start: "top 100%",
        onEnter: () => {
            gsap.fromTo(
                experienceItems.value,
                { opacity: 0, x: 200 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                }
            );
        }
    });
});
</script>


<style scoped>
.timeline-line {
    background: linear-gradient(to bottom, #3b82f6 0%, #3b82f6 85%, transparent 100%);
}
</style>
