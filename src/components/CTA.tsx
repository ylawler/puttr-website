import { ctaDetails } from "../data/cta";

import AppStoreButton from "./AppStoreButton";

function CTA() {
  const { heading } = ctaDetails;
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[url(/images/golf-turf.png)]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>
          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {heading}
            </h2>
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
              <AppStoreButton />
              {/* <PlayStoreButton /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
