export function CaretRight() {
    return (
        <button
        onClick={(e: any) =>
          e.stopPropagation() || instanceRef.current?.next()
        }
      // disabled={
      //   currentSlide ===
      //   instanceRef.current.track.details.slides.length - 1
      // }
      ><CaretRight size={50} /></button>
    )
}