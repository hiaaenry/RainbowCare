import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-950" id="footer">
      <div className="container justify-center items-end">
        <div className="pb-10 w-full h-full flex">
          <div className="flex-1 justify-center">
            <div className="mx-10 my-10 pt-5 w-10 h-10">
              <a href="/#" className="mb-6 block max-w-[160px]">
                <img
                  src="favicon.png"
                  alt="logo"
                  className="max-w-full block"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="mx-auto pt-20 text-gray-500 text-base">
              Feito com ❤ RainbowCare&copy; 2023{' '}
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="mx-10 my-10 pt-10 w-10 h-10">
              <a
                href="https://github.com/Rayaninha/RainbowCare"
                className="mb-6 block max-w-[160px] rounded-full p-2 bg-white hover:bg-fuchsia-300"
              >
                <img
                  src="git-icon.png"
                  alt="logo"
                  className="max-w-full block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
