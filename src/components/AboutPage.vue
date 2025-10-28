<template>
    <div class="container mx-auto  bg-gradient-to-br from-slate-900 to-gray-900 pt-12 mb-4 px-4">
        <div class="  grid grid-cols-1 lg:grid-cols-2 gap-3 ">
            <div class=" grid">
                <!-- About Section -->
                <div
                    class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 md:p-6 shadow-2xl border border-gray-700/50">
                    <h2 class="text-white font-bold text-2xl  md:text-3xl mb-3 md:mb-8 flex items-center">
                        <!-- <i class="fas fa-user mr-3 text-blue-400"></i> -->
                        About Me
                    </h2>
                    <div class="bg-gray-700/30 rounded-xl p-3 border border-gray-600/30">
                        <p class="text-gray-300 text-base md:text-lg  leading-relaxed">
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
                    class="bg-gray-800/50 backdrop-blur-sm rounded-2xl mt-3 p-3 md:p-6 shadow-2xl border border-gray-700/50">
                    <h2 class="text-white font-bold  text-2xl  md:text-3xl mb-2 md:mb-6 flex items-center">
                        Skills & Technologies
                    </h2>
                    <div class="mt-8 grid  gap-4">
                        <!-- Frontend Section -->
                        <div class="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                            <h3 class=" font-semibold md:text-lg mb-2">Frontend</h3>
                            <div class="flex flex-wrap gap-3">


                                <!-- Bootstrap -->
                                <div class="flex items-center gap-2 bg-purple-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                                        class="w-5 h-5" alt="Bootstrap">
                                    <span class="text-gray-300 text-sm">Bootstrap</span>
                                </div>

                                <!-- Tailwind CSS -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <svg class="w-5 h-5" viewBox="0 0 54 33" fill="currentColor">
                                        <path
                                            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
                                    </svg>
                                    <span class="text-gray-300 text-sm">Tailwind CSS</span>
                                </div>
                                <!-- JavaScript -->
                                <div class="flex items-center gap-2 bg-yellow-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        class="w-5 h-5" alt="JavaScript">
                                    <span class="text-gray-300 text-sm">JavaScript</span>
                                </div>
                                <!-- Vue.js -->
                                <div class="flex items-center gap-2 bg-green-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                        class="w-5 h-5" alt="Vue.js">
                                    <span class="text-gray-300 text-sm">Vue.js</span>
                                </div>

                                <!-- React -->
                                <div class="flex items-center gap-2 bg-cyan-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        class="w-5 h-5" alt="React">
                                    <span class="text-gray-300 text-sm">React</span>
                                </div>
                                <!-- Inertia.js -->
                                <div class="flex items-center gap-2 bg-sky-500/20 rounded-md px-3 py-1">
                                    <img src="https://inertiajs.com/favicon.ico" alt="Inertia.js" class="w-5 h-5" />

                                    <span class="text-gray-300 text-sm">Inertia.js</span>
                                </div>
                            </div>
                        </div>

                        <!-- Backend Section -->
                        <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                            <h3 class="font-semibold md:text-lg mb-2">Backend</h3>
                            <div class="flex flex-wrap gap-3">


                                <!-- PHP -->
                                <div class="flex items-center gap-2 bg-indigo-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                                        class="w-5 h-5" alt="PHP">
                                    <span class="text-gray-300 text-sm">PHP</span>
                                </div>
                                <!-- Laravel -->
                                <div class="flex items-center gap-2 bg-red-500/20 rounded-md px-3 py-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        alt="Laravel" class="w-5 h-5" />

                                    <span class="text-gray-300 text-sm">Laravel</span>
                                </div>

                                <!-- WordPress -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <i
                                        class="fa-brands fa-wordpress text-lg  flex items-center justify-center w-5 h-5"></i>
                                    <span class="text-gray-300 text-sm">WordPress</span>
                                </div>
                                <!-- Filament -->
                                <div class="flex items-center gap-2 bg-orange-500/20 rounded-md px-3 py-1">
                                    <img src="https://filamentphp.com/images/icon.png" class="w-5 h-5" alt="Filament">
                                    <span class="text-gray-300 text-sm">Filament</span>
                                </div>
                                <!-- MySQL -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                        class="w-5 h-5" alt="MySQL">
                                    <span class="text-gray-300 text-sm">MySQL</span>
                                </div>

                                <!-- PostgreSQL -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                        class="w-5 h-5" alt="PostgreSQL">
                                    <span class="text-gray-300 text-sm">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 grid  gap-4">
                        <!-- DevOps & Tools -->
                        <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                            <h3 class=" font-semibold md:text-lg mb-2">DevOps & Tools</h3>
                            <div class="flex flex-wrap gap-3">
                                <!-- Ubuntu -->
                                <div class="flex items-center gap-2 bg-orange-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
                                        class="w-5 h-5" alt="Ubuntu">
                                    <span class="text-gray-300 text-sm">Ubuntu</span>
                                </div>

                                <!-- Digital Ocean -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
                                        class="w-5 h-5" alt="Digital Ocean">
                                    <span class="text-gray-300 text-sm">Digital Ocean</span>
                                </div>

                                <!-- Postman -->
                                <div class="flex items-center gap-2 bg-orange-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                                        class="w-5 h-5" alt="Postman">
                                    <span class="text-gray-300 text-sm">Postman</span>
                                </div>
                                <!-- Docker -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                                        class="w-5 h-5" alt="Docker">
                                    <span class="text-gray-300 text-sm">Docker</span>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile & Other -->
                        <div class="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                            <h3 class=" font-semibold md:text-lg mb-2">Mobile & Other</h3>
                            <div class="flex flex-wrap gap-3">
                                <!-- Flutter -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                        class="w-5 h-5" alt="Flutter">
                                    <span class="text-gray-300 text-sm">Flutter</span>
                                </div>

                                <!-- Dart -->
                                <div class="flex items-center gap-2 bg-blue-500/20 rounded-md px-3 py-1">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                                        class="w-5 h-5" alt="Dart">
                                    <span class="text-gray-300 text-sm">Dart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Experience Timeline -->
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 md:p-6 shadow-2xl border border-gray-700/50  ">
                <h2 class="text-white font-bold text-2xl mb-2  md:text-3xl  flex items-center">
                    <!-- <i class="fas fa-briefcase mr-3 text-blue-400"></i> -->
                    Experience
                </h2>
                <div class=" lg:max-h-[1000px] xl:max-h-[880px] overflow-x-scroll">
                    <ul class="relative  space-y-8 ">
                        <div class="absolute left-6 top-4 w-0.5 timeline-line" style="height: calc(100% - 80px)"></div>
                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <i class="fa-solid fa-code-compare text-white text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="bg-gray-700/40 rounded-xl p-3 border border-gray-600/40 hover:border-blue-500/30 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-red-300 font-medium bg-red-500/10 px-3 py-1 rounded-full text-sm">
                                        2025
                                        April - Current
                                    </p>
                                    <span
                                        class="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Full-time</span>
                                </div>
                                <h3 class="font-bold text-white text-md md:text-xl mb-1">
                                    FullStack Developer
                                    <span class="text-gray-400 text-sm font-normal"> at Gfrog + Hinomaru Japanese
                                        education
                                        Center</span>
                                </h3>
                                <p class="mt-3 text-gray-300 leading-relaxed text-base md:text-md">
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
                                        class="fa-brands fa-wordpress text-2xl w-8 h-8 flex items-center justify-center bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-blue-600 transition-all duration-300"></i>

                                    <!-- React -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        alt="React"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-cyan-400 transition-all duration-300" />

                                    <!-- Laravel -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                                        alt="Laravel"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- PostgreSQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                        alt="PostgreSQL"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-blue-700 transition-all duration-300" />

                                    <!-- Flutter -->
                                    <i
                                        class="fa-brands fa-flutter text-2xl w-8 h-8 flex items-center justify-center text-[#02569B]/40 rounded-lg border border-gray-600/40 hover:border-[#02569B] transition-all duration-300"></i>

                                    <!-- Dart -->
                                    <i
                                        class="fa-brands fa-dart-lang text-2xl w-8 h-8 flex items-center justify-center text-[#0175C2]/40 rounded-lg border border-gray-600/40 hover:border-[#0175C2] transition-all duration-300"></i>

                                </div>


                            </div>
                        </li>
                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <i class="fa-solid fa-laptop-code text-white text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="bg-gray-700/40 rounded-xl p-3 border border-gray-600/40 hover:border-blue-500/30 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-cyan-300 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm">
                                        2025
                                        Jan - 2025 Apr
                                    </p>
                                    <span
                                        class="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Full-time</span>
                                </div>
                                <h3 class="font-bold text-white text-md md:text-xl mb-1">
                                    Backend Developer
                                    <span class="text-gray-400 text-sm font-normal"> at Future Innovation IT</span>
                                </h3>
                                <p class="mt-3 text-gray-300 leading-relaxed text-base md:text-md">
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
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- PostgreSQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                        alt="PostgreSQL"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-blue-700 transition-all duration-300" />

                                    <!-- Postman -->
                                    <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-[#FF6A00] transition-all duration-300" />
                                    <!-- MySQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-yellow-500 transition-all duration-300" />

                                </div>
                            </div>
                        </li>
                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <i class="fas fa-code text-white text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="bg-gray-700/40 rounded-xl p-3 border border-gray-600/40 hover:border-blue-500/30 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-blue-300 font-medium bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                                        2024
                                        July - 2024 Dec
                                    </p>
                                    <span
                                        class="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Remote — Full-time</span>
                                </div>
                                <h3 class="font-bold text-white text-md md:text-xl mb-1">
                                    Intern Developer
                                    <span class="text-gray-400 text-sm font-normal"> at Creative Coder Myanmar</span>
                                </h3>
                                <p class="mt-3 text-gray-300 leading-relaxed text-base md:text-md">
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
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- Vue -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                                        alt="Vue"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-green-500 transition-all duration-300" />

                                    <!-- Inertia.js -->
                                    <img src="https://inertiajs.com/favicon.ico" alt="Inertia.js"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-purple-500 transition-all duration-300" />

                                    <!-- MySQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-yellow-500 transition-all duration-300" />
                                </div>
                            </div>
                        </li>

                        <li class="relative pl-12">
                            <!-- Dot with icon -->
                            <div
                                class="absolute left-4 top-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                                <i class="fas fa-server text-white text-xs"></i>
                            </div>
                            <!-- Content Card -->
                            <div
                                class="bg-gray-700/40 rounded-xl p-3 border border-gray-600/40 hover:border-green-500/30 transition-all duration-300">
                                <div class="flex justify-between items-start mb-2">
                                    <p
                                        class="text-green-300 font-medium bg-green-500/10 px-3 py-1 rounded-full text-sm">
                                        2024 Jan - 2024 July
                                    </p>
                                    <span
                                        class="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Full-time</span>
                                </div>
                                <h3 class="font-bold text-white text-md md:text-xl mb-1">
                                    Junior Backend Developer
                                    <span class="text-gray-400 text-sm font-normal"> at Impact Tech Software
                                        Solutions</span>
                                </h3>
                                <p class="mt-3 text-gray-300 leading-relaxed text-base md:text-md">
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
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-red-500 transition-all duration-300" />

                                    <!-- PostgreSQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                                        alt="PostgreSQL"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-blue-700 transition-all duration-300" />

                                    <!-- Postman -->
                                    <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-[#FF6A00] transition-all duration-300" />
                                    <!-- MySQL -->
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL"
                                        class="w-8 h-8 p-1 object-contain bg-gray-700/40 rounded-lg border border-gray-600/40 hover:border-yellow-500 transition-all duration-300" />

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup></script>

<style scoped>
.timeline-line {
    background: linear-gradient(to bottom, #3b82f6 0%, #3b82f6 85%, transparent 100%);
}
</style>
