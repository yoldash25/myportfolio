<template>

  <div
    class="mt-10 mx-auto bg-gray-500 w-[1000px] h-[600px] text-white relative rounded-3xl shadow-xl"
  >
    <div class="mx-auto w-[800px] h-[400px] relative top-24 grid grid-cols-2">
      <div class="flex">
        <div class="w-[900px] h-[300px] mx-auto my-auto">
          <p class="ml-10 mr-10 my-4 text-3xl font-semibold">Biz bilen hawarlasyn</p>
          <p class="ml-10 mr-10 my-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde modi velit
            minus nobis pariatur dolore quos quisquam, sint fugit repudiandae cupiditate.
            At molliti nam repellendus!
          </p>
          <div class="ml-10 mr-10 my-4 text-xl">
            <p>prosto@mysite.com</p>
            <p>+993 62145903</p>
          </div>
          <div class="footer">
            <a
              href="  "
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mx-2 text-gray-400 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 ml-8"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.351 3.537 9.911 8.409 11.591.616.112.84-.262.84-.58v-2.066c-3.446.756-4.184-1.391-4.184-1.391-.565-1.437-1.387-1.829-1.387-1.829-1.134-.775.086-.76.086-.76 1.255.086 1.915 1.289 1.915 1.289 1.115 1.915 2.928 1.362 3.638 1.038.108-.809.424-1.362.768-1.674-2.772-.308-5.685-1.386-5.685-6.195 0-1.362.486-2.479 1.289-3.359-.12-.308-.559-1.591.108-3.329 0 0 1.05-.336 3.431 1.289 1-.278 2.06-.417 3.12-.421 1.06.004 2.121.143 3.12.421 2.379-1.625 3.429-1.289 3.429-1.289.666 1.738.227 3.021.108 3.329.803.88 1.289 1.997 1.289 3.359 0 4.822-2.916 5.885-5.691 6.184.436.378.823 1.115.823 2.241v3.329c0 .319.224.697.842.591c4.864-1.687 8.396-6.256 8.396-11.591c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-[300px] h-[300px] text-black mx-auto my-auto">
          <div class="flex">
            <input
              type="text"
              placeholder="Ady"
              class="w-[140px] h-[40px] rounded-xl pl-3"
            />
            <input
              type="number"
              placeholder="Telefon"
              class="w-[140px] ml-5 rounded-xl pl-3"
            />
          </div>

          <input
            type="mail"
            placeholder="EL pochta"
            class="my-5 w-[300px] h-[40px] rounded-xl pl-3"
          />
          <textarea
            type="text"
            placeholder="Sms ugradyn.."
            class="w-[300px] h-[110px] rounded-xl pl-3"
          />
          <div class="bg-green-500 h-[44px] text-center text-white my-5 rounded-xl">
            <a href="">
              <input type="submit" class="mt-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
