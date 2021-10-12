import React from "react";

export default function Project() {
  return (
    
      <section class="bg-white border-b py-8 bg-gray-50">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:
                <a class="text-pink-500 underline" href="https://undraw.co/">
                  undraw.co
                </a>
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
            <img src = "./images/Lost.svg" alt="My Happy SVG"/>
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
            <img src = "./images/Explore.svg" alt="My Happy SVG"/>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:
                  <a class="text-pink-500 underline" href="https://undraw.co/">
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
}
