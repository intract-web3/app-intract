import { NextButton } from "./Buttons/Buttons";

export const SwiperArrows = ({
  prevEl,
  nextEl,
}: {
  prevEl: any;
  nextEl: any;
}) => {
  return (
    <>
      <div ref={prevEl} role="button" className="">
        <NextButton />
      </div>
      <div
        ref={nextEl}
        role="button"
        className="banner-swiper-arrows position-absolute"
        style={{
          top: "50%",
          left: "100%",
          zIndex: 4,
          transform: "translate(-50%, -50%)",
        }}
      >
        <i className="bi-chevron-right text-white fs-5"></i>
      </div>
    </>
  );
};
