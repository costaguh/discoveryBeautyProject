import Image from "next/image";

export function SectionCards() {
  const cardsTop = ["1", "2", "3", "4"];

  const cardsBottom = ["1-1", "2-1", "3-1", "4-1"];

  return (
    <section className="grid justify-center px-20 py-16">
      <div className="flex items-center">
        {cardsTop.map((card, index) => {
          return (
            <div key={index} className="pr-2">
              <Image
                src={`/${card}.png`}
                width={240}
                height={200}
                alt={`Card ${index + 1}`}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center pt-4">
        {cardsBottom.map((card, index) => {
          return (
            <div key={index} className="pr-2">
              <Image
                src={`/${card}.png`}
                width={240}
                height={200}
                alt={`Card ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
