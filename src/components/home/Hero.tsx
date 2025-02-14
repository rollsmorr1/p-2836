
export function Hero() {
  return <section className="flex w-full flex-col overflow-hidden items-center px-52 max-md:max-w-full max-md:px-5 py-[76px]">
      <div className="flex w-[717px] max-w-full flex-col items-center">
        <div className="self-stretch bg-[rgba(25,25,25,1)] overflow-hidden text-base font-ibm-plex text-white font-normal leading-none px-2 py-1.5 rounded-lg">
          ✨ Deploy your first AI Agent today in under 5 minutes!
        </div>
        <div className="self-stretch flex w-full flex-col items-center text-center mt-6 max-md:max-w-full">
          <h1 className="text-[52px] text-white font-atyp font-semibold max-md:max-w-full max-md:text-[40px]">
            Create and deploy AI agents
          </h1>
          <p className="text-lg text-white/70 font-ibm-plex font-medium leading-none mt-4 max-md:max-w-full">
            Effortlessly deploy and run Eliza AI agents and enjoy industry-best
            pricing.
          </p>
        </div>
        <div className="flex items-center gap-3 text-base font-ibm-plex font-medium text-center mt-6">
          <button className="bg-[#FFE629] min-h-10 text-black px-4 rounded-xl">
            Create Agent
          </button>
          <button className="flex items-center gap-2 min-h-10 text-white px-3 rounded-xl">
            Read our docs
            <img src="https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/62400b9b813fb57f873d7910a209657341020aab812646c548d45da24fc182b0" alt="" className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </section>;
}
