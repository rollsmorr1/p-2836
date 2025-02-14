
export function CustomizeSection() {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/d24fb63efe74679300a4eb568022fca3e8fe4fe8cf6e7e48df41c861c29cb11e",
      text: "MULTIPLE LLM PROVIDERS",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/f79d948ad50c63a1d9887a6710748a7cbf9fd10da4425446fbabcd4822fcbc4b",
      text: "SOCIAL CONNECTIONS",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/74f32e0d39f89d810b8c38935fbfd5bb105fdeb03ff4e014d5b38a922aa087c0",
      text: "PERSONALIZE YOUR AGENT",
    },
  ];

  return (
    <section className="flex w-full items-center gap-10 overflow-hidden text-white justify-center flex-wrap py-20 border-t border-[#3A3A3A] max-md:max-w-full">
      <div className="self-stretch flex min-w-60 flex-col w-[490px] my-auto max-md:max-w-full">
        <div className="max-w-full w-[546px]">
          <h2 className="text-[52px] font-semibold max-md:max-w-full max-md:text-[40px]">
            Customize agents
          </h2>
          <p className="text-lg text-white/70 font-medium leading-6 mt-6 max-md:max-w-full">
            Design your own agent and start chatting with it in no time.
            Customize it with unique features and launch it across your favorite
            social media platforms.
          </p>
        </div>
        <div className="w-[382px] max-w-full text-[13px] font-medium text-white/70 uppercase tracking-[2.56px] mt-12 max-md:mt-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[rgba(25,25,25,1)] flex w-full items-center gap-4 mt-2 first:mt-0 pl-6 pr-8 py-2 rounded-[100px] max-md:px-5"
            >
              <img
                src={benefit.icon}
                alt=""
                className="w-10 h-10 object-contain"
              />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/7310d1e261a329f6253da5632c065323d369c6594f1a705b7c63e7489d1b854d"
        alt="Customize agents interface"
        className="aspect-[1.32] object-contain w-[701px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
    </section>
  );
}
