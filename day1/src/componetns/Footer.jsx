import Logo from "./common/Logo"
import SocialLinks from "./common/SocialLinks"


const Footer = () => {
  return (
    <>
    

<footer className="w-full py-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="border-b border-gray-200 pb-14 flex justify-between items-center flex-col gap-8 lg:gap-0 lg:flex-row">
      <div className="block">
        <h3 className="font-manrope text-3xl text-gray-900 font-bold mb-2 text-center lg:text-left">Sign up to our webpage</h3>
        <p className="text-gray-500 text-center lg:text-left">Stay up to date with the latest update and announcement.</p>
      </div>
      <div className="flex items-center flex-col gap-4 lg:flex-row">
        <input type="text" name="email" className="py-3 px-6 h-14 border border-gray-300 shadow-sm rounded-full focus:outline-none" placeholder="Enter your mail.." />
        <button className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-bold">Subscribe</button>
      </div>
    </div>
    {/*Grid*/}
    <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
      <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
        <Logo/>
        <p className="py-8 text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries &amp; 5 million customers. Have any query ?</p>
        <a href="javascript:;" className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
          Contact us
        </a>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6"><a href="javascript:;" className="text-gray-600 whitespace-nowrap hover:text-gray-900">Home</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">About</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Pricing</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Features</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Pro Version</a></li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Components Library</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Plugin Guide</a></li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6"><a href="javascript:;" className="text-gray-600 whitespace-nowrap hover:text-gray-900">FAQs</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Quick Start</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Documentation</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">User Guide</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Plugin Guide</a></li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6"><a href="javascript:;" className="text-gray-600 whitespace-nowrap hover:text-gray-900">Customer Support</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Cookies</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">License</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Terms &amp; Conditions</a></li>
          <li className="mb-6"><a href="javascript:;" className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Privacy Policy</a></li>
        </ul>
      </div>
      {/*End Col*/}
    </div>
    {/*Grid*/}
    <div className="py-7 border-t border-gray-200">
      <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
        <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a>2024, All rights reserved.</span>
        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
      <SocialLinks/>
        </div>
      </div>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer