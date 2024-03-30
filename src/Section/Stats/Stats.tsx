const Stats = () => {
  const stats = [
    { id: 1, name: "Followers", value: "400+" },
    { id: 2, name: "Daily Users", value: "50K+" },
    { id: 3, name: "Rating from 2000 users", value: "5 star" },
  ];
  return (
    <>
      <div className="Stats">
        <div className="bg-[#E1E1E1] py-16 sm:py-16">
          <div className="text-center">
            <h1
              className="text-black text-3xl font-semibold"
              style={{ fontSize: "3rem", lineHeight: "115%" }}
            >
              Already help thousands <br /> of trusted users
            </h1>
            <p className="mt-5 text-sm text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quae
              totam enim inventore vitae odit <br /> labore dolorum amet!
              Voluptas, maxime? Lorem ipsum dolor sit adipisicing elit.
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
