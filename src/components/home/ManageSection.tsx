
export function ManageSection() {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/204865929040a7a5c13e831567a5bed44875e7fd51e9de628c969a9dd0d16938",
      text: "CHAT INTERFACE",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/8a8305964ebfc213172ae591babe317abe587a26f71f23005df0728e0ab49759",
      text: "LOGS & ACTIVITY",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/43788daf7d5481fe6b1baf785db4107aaa0532ec1642d29eef69f2c2887d80a8",
      text: "CUSTOMIZE AGENT",
    },
  ];

  return (
    <section className="flex w-full items-center gap-10 overflow-hidden text-white justify-center flex-wrap py-20 border-t border-[#3A3A3A] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6c44b7f2525849e284499cfe9821ff0c/9345abc1535d5fdb6e913ff90999dd079679731ca7f1216d8927fdee63ee8c5e"
        alt="Manage agents interface"
        className="aspect-[1.32] object-contain w-[702px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
      <div className="self-stretch flex min-w-60 flex-col w-[490px] my-auto max-md:max-w-full">
        <div className="max-w-full w-[546px]">
          <h2 className="text-[52px] font-semibold max-md:text-[40px]">
            Manage agents
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
    </section>
  );
}
