
"use client";

import { useState, type ReactNode } from "react";

const GOLD = "#c8aa79";

const buttonStyle =
  "inline-flex items-center justify-center gap-3 rounded-full border border-[#c8aa79] bg-[#c8aa79] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#10100e] transition-all duration-300 hover:bg-[#e2c99f] hover:shadow-[0_0_35px_rgba(200,170,121,0.25)]";

const outlineButton =
  "inline-flex items-center justify-center gap-3 rounded-full border border-[#c8aa79]/50 px-7 py-3 text-[11px] uppercase tracking-[0.14em] text-[#d6bc91] transition-all duration-300 hover:border-[#c8aa79] hover:bg-[#c8aa79]/10";

type Concept = {
  name: string;
  heading: string;
  text: string;
  reference: string;
};

function MuseumPhoto({
  src,
  alt,
  className = "aspect-video",
  position = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden border border-[#c8aa79]/20 bg-[#1d1a16] ${className}`}
    >
      {failed ? (
        <div className="flex h-full items-center justify-center p-8 text-center text-sm text-[#c8aa79]">
          Add photograph: {src}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{ objectPosition: position }}
          className="h-full w-full object-cover grayscale-[35%] transition-all duration-1000 hover:scale-[1.035] hover:grayscale-0"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c8aa79] md:text-xs">
      {children}
    </p>
  );
}

function SectionRule() {
  return (
    <div className="mx-auto my-10 flex max-w-3xl items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c8aa79]/40" />
      <span className="text-lg text-[#c8aa79]">✦</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c8aa79]/40" />
    </div>
  );
}

function Discussion({
  question,
  guidance,
}: {
  question: string;
  guidance?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto mt-14 max-w-4xl border border-[#c8aa79]/30 bg-[#171410] p-7 text-center md:p-12">
      <Eyebrow>Work in Groups of 3</Eyebrow>

      <h3 className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">
        {question}
      </h3>

      {guidance && (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="mt-8 border-b border-[#c8aa79]/60 pb-2 text-xs uppercase tracking-[0.12em] text-[#c8aa79] transition hover:text-white"
          >
            {open
              ? "Hide Discussion Notes −"
              : "Explore Discussion Notes +"}
          </button>

          {open && (
            <p className="mt-8 border-t border-white/10 pt-7 text-left text-[15px] leading-8 text-[#cfc4b5]">
              {guidance}
            </p>
          )}
        </>
      )}
    </div>
  );
}

function FilmScreening({
  title,
  year,
  youtubeId,
  description,
}: {
  title: string;
  year: string;
  youtubeId: string;
  description?: string;
}) {
  return (
    <div className="mt-12 border border-[#c8aa79]/30 bg-[#171411] p-5 md:p-9">
      <Eyebrow>Documentary Screening · {year}</Eyebrow>

      <h3 className="mt-5 font-serif text-2xl md:text-3xl">
        {title}
      </h3>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#bfb4a5]">
          {description}
        </p>
      )}

      <div className="mt-7 aspect-video overflow-hidden border border-white/10 bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={`${title} (${year})`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <a
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block border-b border-[#c8aa79]/70 pb-1 text-sm text-[#c8aa79] transition hover:text-white"
      >
        Watch on YouTube ↗
      </a>
    </div>
  );
}

function ConceptExplorer({
  items,
}: {
  items: Concept[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <Eyebrow>Select a Concept to Explore</Eyebrow>

      <div className="mt-7 grid gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setActive(i)}
            className={`min-h-20 border p-5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
              active === i
                ? "border-[#c8aa79] bg-[#2b241b] text-[#c8aa79]"
                : "border-white/15 bg-[#171411] text-[#d6c8b6] hover:border-[#c8aa79]/70"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[230px] border border-[#c8aa79]/30 bg-[#171411] p-8 text-left md:p-10">
        <Eyebrow>{items[active].reference}</Eyebrow>

        <h3 className="mt-5 font-serif text-2xl md:text-3xl">
          {items[active].heading}
        </h3>

        <p className="mt-6 leading-9 text-[#d4c9ba]">
          {items[active].text}
        </p>
      </div>
    </div>
  );
}

function ExhibitNavigation({
  previous,
  next,
  onPrevious,
  onNext,
}: {
  previous: string;
  next: string;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      <button className={outlineButton} onClick={onPrevious}>
        ← {previous}
      </button>

      <button className={buttonStyle} onClick={onNext}>
        {next} →
      </button>
    </div>
  );
}

const robinsonConcepts: Concept[] = [
  {
    name: "Class",
    heading: "The Limits of Class Analysis",
    text:
      "Robinson does not dismiss exploitation or class struggle. He questions whether a theory centred on the European industrial proletariat can adequately account for slavery, colonialism and the many forms of coerced labour within capitalism.",
    reference: "Robinson · Black Marxism",
  },
  {
    name: "Race",
    heading: "Capitalism Inherits Racial Hierarchies",
    text:
      "For Robinson, capitalism did not enter a socially undifferentiated world. It developed within European societies already organised through hierarchies and racialism. Racial domination cannot be treated merely as an accidental addition to capitalist development.",
    reference: "Robinson · Black Marxism",
  },
  {
    name: "Resistance",
    heading: "The Black Radical Tradition",
    text:
      "Robinson insists that Black resistance cannot be explained solely as a response generated by capitalism. It also draws upon historical experiences, collective cultures and traditions that exceed the categories of European Marxist thought.",
    reference: "Robinson · Black Marxism",
  },
];

const articulation: Concept[] = [
  {
    name: "Economic",
    heading: "Different Modes of Production",
    text:
      "Hall explains that plantation slavery could participate in capitalist world-market relations even though the plantation's internal relations of production differed from capitalist wage labour. Different modes of production can be connected within a larger structure of dominance.",
    reference: "Hall · pp. 190–191",
  },
  {
    name: "Political",
    heading: "Structures of Power",
    text:
      "Political institutions and relations of domination cannot simply be deduced from the economy. Their specific forms must be investigated historically while remaining connected to material social relations.",
    reference: "Hall · pp. 193–197",
  },
  {
    name: "Ideological",
    heading: "Making Inequality Appear Natural",
    text:
      "Hall examines how racist ideologies can represent historically produced inequalities as natural racial differences. These ideologies help organise social identities, political divisions and relations of dominance.",
    reference: "Hall · p. 217",
  },
];

const goTensions: Concept[] = [
  {
    name: "Difference",
    heading: "Why Privilege Race?",
    text:
      "Go asks whether race is always the central axis of differentiation under capitalism. If exploitation and expropriation can also be organised through gender, ethnicity, religion or other distinctions, what makes race analytically distinctive?",
    reference: "Go · First Tension",
  },
  {
    name: "Theory",
    heading: "What Does the Concept Add?",
    text:
      "Go asks whether the concept of racial capitalism identifies a deficiency in existing theories of capitalism. It is not enough to show that racism and capitalism coexist. A theory should clarify what their relationship explains that earlier frameworks could not.",
    reference: "Go · Second Tension",
  },
  {
    name: "Necessity",
    heading: "Must Capitalism Be Racial?",
    text:
      "Go distinguishes a historical or contingent connection from a logical necessity. The fact that capitalism has repeatedly relied on racial domination does not, by itself, establish that capitalism could never operate without racial differentiation.",
    reference: "Go · Third Tension",
  },
];

const goDifference: Concept[] = [
  {
    name: "Race",
    heading: "Racial Differentiation",
    text:
      "Racial categories have structured slavery, colonial dispossession, segregated labour markets and unequal access to resources. Go asks how we can theorise this history without assuming race must always be the only or primary form of difference.",
    reference: "Go · Race and Social Difference",
  },
  {
    name: "Gender",
    heading: "Gendered Differentiation",
    text:
      "Gender can also organise unequal access to wages, property, recognition and forms of labour. Go suggests that the theory of racial capitalism may benefit from considering social differentiation more broadly.",
    reference: "Go · Social Difference",
  },
  {
    name: "Ethnicity",
    heading: "Ethnic and Other Distinctions",
    text:
      "Capitalist formations can draw upon ethnic, religious and other social divisions. The analytical challenge is to explain when race matters, when other distinctions matter, and how these forms of differentiation interact.",
    reference: "Go · Social Difference",
  },
];

const goNecessity: Concept[] = [
  {
    name: "Historical",
    heading: "Historical Connection",
    text:
      "Racism and capitalism have been intertwined in many historical formations. This is an empirical claim about how capitalist societies actually developed, including through slavery, colonialism and racialised labour.",
    reference: "Go · Historical Analysis",
  },
  {
    name: "Logical",
    heading: "Logical Necessity",
    text:
      "A stronger claim is that capitalism necessarily requires racism because racial differentiation follows from the logic of capital accumulation itself. Go argues that this proposition needs more theoretical demonstration.",
    reference: "Go · Logical Necessity",
  },
  {
    name: "Political",
    heading: "The Stakes of the Distinction",
    text:
      "If capitalism is inherently racist, antiracist and anticapitalist struggles appear inseparable. If their relationship is historically contingent, political strategies must attend to how race and capitalism are connected in particular contexts.",
    reference: "Go · Political Implications",
  },
];

const southAfrica: Concept[] = [
  {
    name: "Land",
    heading: "Land and Dispossession",
    text:
      "Racially structured access to land helped shape the conditions under which Black South Africans entered wage labour. The loss of independent livelihoods and restrictions on landholding were tied to the reproduction of capitalist labour relations.",
    reference: "Levenson · South African Political Economy",
  },
  {
    name: "Labour",
    heading: "Migrant Labour and Mining",
    text:
      "The mining economy depended heavily on Black migrant workers. The reserve system and workers' continued ties to rural households helped subsidise wages and lower the costs of reproducing labour power.",
    reference: "Levenson · Wolpe and South African Marxism",
  },
  {
    name: "State",
    heading: "Segregation and Apartheid",
    text:
      "Segregation and apartheid were not simply racial prejudices detached from the economy. South African Marxists examined how state policies helped sustain particular arrangements of labour, accumulation and racial domination.",
    reference: "Levenson · South African Origins",
  },
];

const mottleyConcepts: Concept[] = [
  {
    name: "Compensation",
    heading: "Who Was Compensated?",
    text:
      "British emancipation included compensation for slave owners rather than for the people they had enslaved. This contrast raises questions about how property rights were protected during emancipation and whose losses were recognised by the state.",
    reference: "Mottley · Reparations and Historical Justice",
  },
  {
    name: "Apprenticeship",
    heading: "Freedom and Compulsory Labour",
    text:
      "After the 1833 Slavery Abolition Act, many formerly enslaved people were required to continue working under an apprenticeship system. The system demonstrates why the legal abolition of slavery must be distinguished from immediate economic freedom.",
    reference: "British Caribbean · 1834–1838",
  },
  {
    name: "Reparations",
    heading: "The Economic Afterlife of Slavery",
    text:
      "Reparations debates ask whether the historical accumulation of wealth through slavery and colonialism created inequalities that survived formal emancipation. They also raise questions about responsibility, repair and the relationship between past injustice and present economic structures.",
    reference: "Mottley · Contemporary Caribbean Politics",
  },
];

export default function Home() {
  const [scene, setScene] = useState(0);
  const [robinson, setRobinson] = useState(0);
  const [hall, setHall] = useState(0);
  const [go, setGo] = useState(0);
  const [levenson, setLevenson] = useState(0);

  const [robinsonSelected, setRobinsonSelected] = useState(0);
  const [hallSelected, setHallSelected] = useState(0);

  const currentStep =
    scene === 0
      ? 0
      : scene === 1
      ? 1
      : scene === 2
      ? 2 + robinson
      : scene === 3
      ? 5 + hall
      : scene === 4
      ? 8 + go
      : scene === 5
      ? 11 + levenson
      : 14;

  const progress = (currentStep / 14) * 100;

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goScene(n: number) {
    setScene(n);
    scrollTop();
  }

  function goRobinson(n: number) {
    setRobinson(n);
    scrollTop();
  }

  function goHall(n: number) {
    setHall(n);
    scrollTop();
  }

  function goGo(n: number) {
    setGo(n);
    scrollTop();
  }

  function goLevenson(n: number) {
    setLevenson(n);
    scrollTop();
  }

  function returnHome() {
    setScene(0);
    setRobinson(0);
    setHall(0);
    setGo(0);
    setLevenson(0);
    scrollTop();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0a09] text-[#f5f0e8]">
      {/* PERMANENT NAVIGATION */}
      {scene !== 0 && (
        <>
          <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c8aa79]/15 bg-[#0b0a09]/95 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
              <button
                onClick={returnHome}
                className="group flex items-center gap-3 text-left"
                aria-label="Return to title page"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8aa79]/60 text-lg text-[#c8aa79] transition group-hover:bg-[#c8aa79] group-hover:text-black">
                  ✦
                </span>

                <span className="hidden font-serif text-lg tracking-wide text-[#f1e8dc] sm:block">
                  Racial{" "}
                  <em className="text-[#c8aa79]">Capitalism</em>
                </span>
              </button>

              <div className="flex items-center gap-5">
                <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#8f8578] md:block">
                  An Interactive Historical Documentary
                </span>

                <button
                  onClick={returnHome}
                  className="rounded-full border border-[#c8aa79]/50 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c8aa79] transition hover:bg-[#c8aa79] hover:text-black"
                >
                  ← Home
                </button>
              </div>
            </div>

            <div className="h-[2px] w-full bg-[#292219]">
              <div
                className="h-full bg-[#c8aa79] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </header>

          <div className="h-20 md:h-24" />
        </>
      )}

      {/* TITLE PAGE */}
      {scene === 0 && (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 text-center">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1800')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/70 via-[#0b0a09]/60 to-[#0b0a09]" />

          <div className="pointer-events-none absolute inset-5 border border-[#c8aa79]/20 md:inset-9" />
          <div className="pointer-events-none absolute inset-8 border border-[#c8aa79]/10 md:inset-12" />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-10 h-12 w-px bg-gradient-to-b from-transparent to-[#c8aa79]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d7bb8e] md:text-sm md:tracking-[0.45em]">
              An Interactive Historical Documentary
            </p>

            <div className="mx-auto mt-10 h-px max-w-24 bg-[#c8aa79]/70" />

            <h1 className="mt-10 font-serif text-[clamp(4rem,11vw,10rem)] font-normal leading-[0.92] tracking-[-0.045em]">
              <span className="block text-[#f7f1e8]">
                Racial
              </span>
              <span className="mt-2 block italic text-[#c8aa79]">
                Capitalism
              </span>
            </h1>

            <button
              className={`${buttonStyle} mt-14`}
              onClick={() => goScene(1)}
            >
              Begin the Journey
              <span className="text-lg">→</span>
            </button>

            <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-[#928576]">
              Enter the Exhibition
            </p>

            <div className="mx-auto mt-12 h-12 w-px bg-gradient-to-b from-[#c8aa79] to-transparent" />
          </div>
        </section>
      )}

      {/* PROLOGUE */}
      {scene === 1 && (
        <section className="mx-auto max-w-6xl px-5 py-14 text-center md:py-20">
          <Eyebrow>Prologue · Opening Discussion</Eyebrow>

          <h2 className="mx-auto mt-7 mb-12 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
            Can Marxism adequately explain{" "}
            <em className="text-[#c8aa79]">
              racial capitalism?
            </em>
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <MuseumPhoto
                src="/images/factory-labour.jpg"
                alt="Industrial factory workers"
                className="aspect-[4/5]"
              />
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                Selling Labour Power
              </p>
            </div>

            <div>
              <MuseumPhoto
                src="/images/sharecroppers.jpg"
                alt="Black agricultural labourers"
                className="aspect-[4/5]"
              />
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                Race, Land &amp; Labour
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl font-serif text-xl italic leading-relaxed text-[#d3c4b2]">
            What happens when we place these histories
            alongside one another?
          </p>

          <div className="mt-12">
            <button
              className={buttonStyle}
              onClick={() => {
                setRobinson(0);
                goScene(2);
              }}
            >
              Enter Gallery I · Cedric Robinson →
            </button>
          </div>
        </section>
      )}

      {/* GALLERY I: CEDRIC ROBINSON */}
      {scene === 2 && (
        <section className="mx-auto max-w-5xl px-5 py-14 text-center md:py-20">
          {robinson === 0 && (
            <>
              <Eyebrow>
                Gallery I · Cedric Robinson · Exhibit 01 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 mb-11 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                What if capitalism was{" "}
                <em className="text-[#c8aa79]">
                  racial from the beginning?
                </em>
              </h2>

              <div className="mx-auto max-w-3xl">
                <MuseumPhoto
                  src="/images/cedric-robinson.jpg"
                  alt="Cedric J. Robinson"
                  className="aspect-[16/10]"
                />
              </div>

              <h3 className="mt-9 font-serif text-4xl">
                Cedric J. Robinson
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                Oakland, California · 1940–2016
              </p>

              <p className="mt-7 font-serif text-lg italic text-[#d7c8b3]">
                Black Marxism: The Making of the Black Radical Tradition
              </p>

              <SectionRule />

              <p className="mx-auto max-w-3xl text-lg leading-9 text-[#c9c1b6]">
                Robinson challenges the idea that capitalism
                developed independently of racial hierarchies.
                His account locates capitalism within a European
                history already shaped by social differentiation
                and racialism.
              </p>

              <ExhibitNavigation
                previous="Opening Discussion"
                next="Continue · C. L. R. James"
                onPrevious={() => goScene(1)}
                onNext={() => goRobinson(1)}
              />
            </>
          )}

          {robinson === 1 && (
            <>
              <Eyebrow>
                Gallery I · Cedric Robinson · Exhibit 02 / 03
              </Eyebrow>

              <h2 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
                The Black Radical
                <span className="block italic text-[#c8aa79]">
                  Tradition
                </span>
              </h2>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                Robinson on C. L. R. James
              </p>

              <div className="mx-auto mt-11 max-w-3xl">
                <MuseumPhoto
                  src="/images/clr-james.jpg"
                  alt="Portrait of C. L. R. James"
                  className="aspect-[16/10]"
                />
              </div>

              <h3 className="mt-9 font-serif text-4xl">
                C. L. R. James
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                Trinidadian Historian &amp; Revolutionary Thinker · 1901–1989
              </p>

              <SectionRule />

              <div className="mx-auto max-w-3xl space-y-6 text-left text-[16px] leading-9 text-[#c9c1b6]">
                <p>
                  In Chapter 10 of <em>Black Marxism</em>,
                  Robinson examines C. L. R. James as a major
                  Black radical intellectual whose engagement
                  with Marxism was transformed through his
                  confrontation with Black history and resistance.
                </p>

                <p>
                  James&apos;s <em>The Black Jacobins</em> recounts
                  the Haitian Revolution, placing enslaved Africans
                  at the centre of a struggle that challenged
                  slavery and colonial domination. For Robinson,
                  James is important not simply because he applied
                  Marxism to Black history, but because that history
                  tested the explanatory limits of inherited
                  Marxist categories.
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-3xl border-l-2 border-[#c8aa79] bg-[#171410] p-8 text-left">
                <Eyebrow>The Central Tension</Eyebrow>

                <h3 className="mt-5 font-serif text-2xl leading-relaxed md:text-3xl">
                  Is Black resistance simply another expression
                  of class struggle, or does it emerge from a
                  distinct historical tradition?
                </h3>
              </div>

              <Discussion
                question="What does the Haitian Revolution reveal about the historical agency of enslaved people that a Eurocentric account of capitalism might overlook?"
              />

              <ExhibitNavigation
                previous="Cedric Robinson"
                next="The Limits of European Marxism"
                onPrevious={() => goRobinson(0)}
                onNext={() => goRobinson(2)}
              />
            </>
          )}

          {robinson === 2 && (
            <>
              <Eyebrow>
                Gallery I · Cedric Robinson · Exhibit 03 / 03
              </Eyebrow>

              <h2 className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
                The Limits of
                <span className="block italic text-[#c8aa79]">
                  European Marxism
                </span>
              </h2>

              <div className="mx-auto mt-11 max-w-4xl">
                <MuseumPhoto
                  src="/images/black-industrial-workers.jpg"
                  alt="Historical photograph of Black industrial workers"
                  className="aspect-[16/9]"
                />

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                  Race · Labour · Capitalism
                </p>
              </div>

              <p className="mx-auto mt-9 max-w-3xl text-lg leading-9 text-[#c9c1b6]">
                Robinson asks whether Marxist accounts rooted
                in European historical experience can adequately
                explain the racialised development of capitalism
                and the histories of Black resistance.
              </p>

              <SectionRule />

              <Eyebrow>
                Three Concepts · Select to Explore
              </Eyebrow>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {robinsonConcepts.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => setRobinsonSelected(i)}
                    className={`border p-5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                      robinsonSelected === i
                        ? "border-[#c8aa79] bg-[#2b241b] text-[#c8aa79]"
                        : "border-white/15 bg-[#171411] text-[#d6c8b6] hover:border-[#c8aa79]/70"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-4 min-h-[220px] border border-[#c8aa79]/30 bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>
                  {robinsonConcepts[robinsonSelected].reference}
                </Eyebrow>

                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  {robinsonConcepts[robinsonSelected].heading}
                </h3>

                <p className="mt-6 leading-9 text-[#d4c9ba]">
                  {robinsonConcepts[robinsonSelected].text}
                </p>
              </div>

              <Discussion
                question="If capitalism developed through racial hierarchies, can class struggle alone explain the forms of domination and resistance that emerged within it?"
                guidance="Consider Robinson's critique of European Marxism, his account of racialism preceding capitalism, and his insistence that Black radicalism draws on histories and cultural resources not reducible to European class categories. How does his reading of C. L. R. James complicate this argument?"
              />

              <ExhibitNavigation
                previous="C. L. R. James"
                next="Gallery II · Stuart Hall"
                onPrevious={() => goRobinson(1)}
                onNext={() => {
                  setHall(0);
                  goScene(3);
                }}
              />
            </>
          )}
        </section>
      )}

      {/* GALLERY II: STUART HALL */}
      {scene === 3 && (
        <section className="mx-auto max-w-6xl px-5 py-14 text-center md:py-20">
          {hall === 0 && (
            <>
              <Eyebrow>
                Gallery II · Stuart Hall · Exhibit 01 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 mb-11 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                How Do Race and Class
                <span className="block italic text-[#c8aa79]">
                  Become Connected?
                </span>
              </h2>

              <MuseumPhoto
                src="/images/stuart-hall.jpg"
                alt="Portrait of Stuart Hall"
                className="aspect-[16/9]"
              />

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                Kingston, Jamaica · 1932–2014
              </p>

              <p className="mx-auto mt-7 max-w-3xl font-serif text-lg italic text-[#d8c8b3]">
                Race, Articulation, and Societies Structured in Dominance
              </p>

              <SectionRule />

              <h3 className="mx-auto max-w-4xl font-serif text-2xl leading-relaxed md:text-4xl">
                What makes racial differences matter
                within class relations?
              </h3>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#c9c1b6]">
                Hall argues that race and class cannot simply
                be treated as identical. Their connections must
                be explained through historically specific
                economic, political and ideological relations.
              </p>

              <ExhibitNavigation
                previous="Cedric Robinson"
                next="Discover Articulation"
                onPrevious={() => {
                  setRobinson(2);
                  goScene(2);
                }}
                onNext={() => goHall(1)}
              />
            </>
          )}

          {hall === 1 && (
            <>
              <Eyebrow>
                Gallery II · Stuart Hall · Exhibit 02 / 03
              </Eyebrow>

              <h2 className="mt-8 font-serif text-5xl md:text-7xl">
                <em className="text-[#c8aa79]">
                  Articulation
                </em>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#c9c1b6]">
                Different social and economic relations
                can become connected within a larger
                structure of dominance without becoming identical.
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                Hall · pp. 190–197
              </p>

              <div className="mt-12 grid grid-cols-2 gap-4 md:gap-8">
                <div>
                  <MuseumPhoto
                    src="/images/windrush-arrival.jpg"
                    alt="Caribbean migrants arriving in Britain"
                    className="aspect-[4/5]"
                  />
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                    Migration
                  </p>
                </div>

                <div>
                  <MuseumPhoto
                    src="/images/caribbean-workers-britain.jpg"
                    alt="Caribbean workers in Britain"
                    className="aspect-[4/5]"
                  />
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                    Labour
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-9 max-w-4xl text-left text-[16px] leading-9 text-[#d4c9ba]">
                These photographs offer a historical application
                of Hall&apos;s theory. Migration and labour are
                connected through economic demand, political
                institutions and racialised understandings of
                belonging. They are not presented as Hall&apos;s
                own case study.
              </p>

              <div className="mx-auto mt-11 max-w-4xl border-l-2 border-[#c8aa79] bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>From Hall&apos;s Reading</Eyebrow>

                <p className="mt-6 text-lg leading-9 text-[#d4c9ba]">
                  Hall explains that plantation slavery could
                  participate in capitalist world-market relations
                  even though its internal relations of production
                  differed from capitalist wage labour.
                </p>

                <p className="mt-5 text-lg leading-9 text-[#d4c9ba]">
                  His larger point is that distinct economic
                  and social structures can be connected within
                  a historically specific structure of dominance.
                </p>
              </div>

              <SectionRule />

              <Eyebrow>
                Three Dimensions · Select to Explore
              </Eyebrow>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {articulation.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => setHallSelected(i)}
                    className={`border p-5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                      hallSelected === i
                        ? "border-[#c8aa79] bg-[#2b241b] text-[#c8aa79]"
                        : "border-white/15 bg-[#171411] text-[#d6c8b6] hover:border-[#c8aa79]/70"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-4 border border-[#c8aa79]/30 bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>
                  {articulation[hallSelected].reference}
                </Eyebrow>

                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  {articulation[hallSelected].heading}
                </h3>

                <p className="mt-6 leading-9 text-[#d4c9ba]">
                  {articulation[hallSelected].text}
                </p>
              </div>

              <Discussion
                question="How can race and class be connected without one being reduced to the other?"
              />

              <ExhibitNavigation
                previous="Stuart Hall"
                next="Final Exhibit · Windrush"
                onPrevious={() => goHall(0)}
                onNext={() => goHall(2)}
              />
            </>
          )}

          {hall === 2 && (
            <>
              <Eyebrow>
                Gallery II · Stuart Hall · Exhibit 03 / 03
              </Eyebrow>

              <h2 className="mt-8 font-serif text-5xl md:text-7xl">
                <em className="text-[#c8aa79]">
                  Windrush
                </em>
              </h2>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                Applying Hall&apos;s Framework · Postwar Britain
              </p>

              <div className="mt-11">
                <MuseumPhoto
                  src="/images/empire-windrush.jpg"
                  alt="Empire Windrush ship"
                  className="aspect-[16/9]"
                />
              </div>

              <p className="mx-auto mt-9 max-w-4xl text-left text-[16px] leading-9 text-[#d4c9ba]">
                The Empire Windrush arrived in Britain on
                22 June 1948. Caribbean migrants contributed
                to Britain&apos;s postwar economy while encountering
                racial discrimination and contested forms
                of belonging. Their experiences offer a historical
                application of Hall&apos;s framework rather than
                a case study from the assigned reading.
              </p>

              <FilmScreening
                title="Windrush Generation: Three Stories"
                year="Historical Documentary"
                youtubeId="NME-9ot2Lqw"
              />

              <Discussion
                question="If racism cannot be reduced to class exploitation, but also cannot be understood independently of material relations, what must a Marxist theory of racial domination explain?"
                guidance="Consider how Hall connects economic structures, political institutions and racial ideologies without reducing one to another. What does this approach explain that a purely economic account might miss?"
              />

              <ExhibitNavigation
                previous="Articulation"
                next="Gallery III · Julian Go"
                onPrevious={() => goHall(1)}
                onNext={() => {
                  setGo(0);
                  goScene(4);
                }}
              />
            </>
          )}
        </section>
      )}

      {/* GALLERY III: JULIAN GO */}
      {scene === 4 && (
        <section className="mx-auto max-w-6xl px-5 py-14 text-center md:py-20">
          {go === 0 && (
            <>
              <Eyebrow>
                Gallery III · Julian Go · Exhibit 01 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                Three Tensions in the
                <span className="block italic text-[#c8aa79]">
                  Theory of Racial Capitalism
                </span>
              </h2>

              <div className="mx-auto mt-11 max-w-3xl">
                <MuseumPhoto
                  src="/images/julian-go.jpg"
                  alt="Portrait of sociologist Julian Go"
                  className="aspect-[16/10]"
                />
              </div>

              <h3 className="mt-9 font-serif text-4xl">
                Julian Go
              </h3>

              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                Professor of Sociology · University of Chicago
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#b8a68c]">
                Sociological Theory · 2021
              </p>

              <p className="mx-auto mt-7 max-w-3xl font-serif text-lg italic text-[#d8c8b3]">
                Three Tensions in the Theory of Racial Capitalism
              </p>

              <SectionRule />

              <p className="mx-auto max-w-4xl text-lg leading-9 text-[#c9c1b6]">
                Robinson and Hall challenge the limits of
                conventional Marxist explanations. Go now asks
                a different question: what must the theory of
                racial capitalism demonstrate if it is to become
                a more precise explanatory framework?
              </p>

              <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-8 text-[#bfb4a5]">
                Go does not reject racial capitalism. He identifies
                unresolved tensions that can generate further
                theoretical development and research.
              </p>

              <ConceptExplorer items={goTensions} />

              <Discussion
                question="Does identifying the historical relationship between racism and capitalism amount to explaining why that relationship exists?"
                guidance="Go distinguishes showing that racial domination has accompanied capitalist development from demonstrating what the concept adds to social theory. Consider the different explanatory tasks involved."
              />

              <ExhibitNavigation
                previous="Stuart Hall"
                next="Race and Social Difference"
                onPrevious={() => {
                  setHall(2);
                  goScene(3);
                }}
                onNext={() => goGo(1)}
              />
            </>
          )}

          {go === 1 && (
            <>
              <Eyebrow>
                Gallery III · Julian Go · Exhibit 02 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                Is Race the Only
                <span className="block italic text-[#c8aa79]">
                  Difference That Matters?
                </span>
              </h2>

              <div className="mx-auto mt-11 max-w-4xl">
                <MuseumPhoto
                  src="/images/racial-capitalism-labour.jpg"
                  alt="Historical labour photograph illustrating racialised work"
                  className="aspect-[16/9]"
                />

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#c8aa79]">
                  Labour · Social Difference · Accumulation
                </p>
              </div>

              <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-[#c9c1b6]">
                Go asks why the theory privileges race when
                capitalist development has also organised
                inequality through gender, ethnicity, religion
                and other social distinctions.
              </p>

              <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-8 text-[#bfb4a5]">
                The question is not whether racism matters.
                It is whether racial capitalism theory can
                explain the relationship between race and
                other forms of social differentiation.
              </p>

              <SectionRule />

              <ConceptExplorer items={goDifference} />

              <div className="mx-auto mt-12 max-w-4xl border-l-2 border-[#c8aa79] bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>A Theoretical Possibility</Eyebrow>

                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  From Race to Social Difference
                </h3>

                <p className="mt-6 text-[16px] leading-9 text-[#d4c9ba]">
                  Go suggests that a broader account of social
                  difference might help explain why capitalist
                  accumulation repeatedly relies on distinctions
                  among workers, while allowing those distinctions
                  to vary across historical settings.
                </p>

                <p className="mt-5 text-[16px] leading-9 text-[#d4c9ba]">
                  This is a proposal for further theoretical
                  development, not a claim that racial domination
                  is interchangeable with every other inequality.
                </p>
              </div>

              <Discussion
                question="If capitalist accumulation can rely on different forms of social division, what makes the concept of racial capitalism necessary?"
                guidance="Compare Go's concern with Robinson's argument about racialism preceding capitalism and Hall's emphasis on historically specific articulation. Are they explaining the same relationship at different levels of abstraction?"
              />

              <ExhibitNavigation
                previous="Three Tensions"
                next="Contingency or Necessity?"
                onPrevious={() => goGo(0)}
                onNext={() => goGo(2)}
              />
            </>
          )}

          {go === 2 && (
            <>
              <Eyebrow>
                Gallery III · Julian Go · Exhibit 03 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                Is Capitalism
                <span className="block italic text-[#c8aa79]">
                  Necessarily Racial?
                </span>
              </h2>

              <p className="mx-auto mt-9 max-w-4xl text-lg leading-9 text-[#c9c1b6]">
                Go&apos;s third tension concerns the difference
                between a relationship produced through history
                and one required by capitalism&apos;s underlying
                logic.
              </p>

              <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
                <div className="border border-[#c8aa79]/35 bg-[#171411] p-8 text-left md:p-10">
                  <Eyebrow>Historical Contingency</Eyebrow>

                  <h3 className="mt-5 font-serif text-3xl">
                    It Happened This Way
                  </h3>

                  <p className="mt-6 leading-8 text-[#c9c1b6]">
                    Capitalism developed through particular
                    histories of racial domination. Different
                    historical circumstances might have produced
                    different relations.
                  </p>
                </div>

                <div className="border border-[#c8aa79]/35 bg-[#171411] p-8 text-left md:p-10">
                  <Eyebrow>Logical Necessity</Eyebrow>

                  <h3 className="mt-5 font-serif text-3xl">
                    It Could Not Be Otherwise
                  </h3>

                  <p className="mt-6 leading-8 text-[#c9c1b6]">
                    Racism would have to follow from capitalism&apos;s
                    internal logic, rather than being established
                    solely through recurring historical examples.
                  </p>
                </div>
              </div>

              <SectionRule />

              <ConceptExplorer items={goNecessity} />

              <div className="mx-auto mt-12 max-w-4xl border border-[#c8aa79]/30 bg-[#171411] p-8 md:p-12">
                <Eyebrow>The Political Stakes</Eyebrow>

                <h3 className="mt-6 font-serif text-2xl leading-relaxed md:text-4xl">
                  If racism and capitalism are inseparable,
                  what does that mean for the possibility
                  of antiracist reform?
                </h3>

                <p className="mt-7 text-[16px] leading-9 text-[#c9c1b6]">
                  Go shows that debates about necessity are
                  not merely conceptual. They affect how we
                  understand antiracist struggle, anticapitalist
                  struggle and the relationship between them.
                </p>
              </div>

              <Discussion
                question="Can we argue that capitalism has always been racial without claiming that capitalism must logically be racial?"
                guidance="Distinguish a historical generalisation from a logical proposition. Then consider how Robinson's account of racial capitalism and Hall's insistence on historically specific formations might respond to Go's challenge."
              />

              <ExhibitNavigation
                previous="Social Difference"
                next="Gallery IV · Zachary Levenson"
                onPrevious={() => goGo(1)}
                onNext={() => {
                  setLevenson(0);
                  goScene(5);
                }}
              />
            </>
          )}
        </section>
      )}

      {/* GALLERY IV: ZACHARY LEVENSON */}
      {scene === 5 && (
        <section className="mx-auto max-w-6xl px-5 py-14 text-center md:py-20">
          {levenson === 0 && (
            <>
              <Eyebrow>
                Gallery IV · Zachary Levenson · Exhibit 01 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                Where Did
                <span className="block italic text-[#c8aa79]">
                  Racial Capitalism Begin?
                </span>
              </h2>

              <div className="mx-auto mt-11 max-w-3xl">
                <MuseumPhoto
                  src="/images/zachary-levenson.jpg"
                  alt="Portrait of sociologist Zachary Levenson"
                  className="aspect-[16/10]"
                />
              </div>

              <h3 className="mt-9 font-serif text-4xl">
                Zachary Levenson
              </h3>

              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                Sociologist · South African Political Economy
              </p>

              <p className="mt-7 font-serif text-lg italic text-[#d8c8b3]">
                Racial Capitalism: Recovering Its Origins
              </p>

              <SectionRule />

              <p className="mx-auto max-w-4xl text-lg leading-9 text-[#c9c1b6]">
                Levenson returns to the political and
                intellectual history of racial capitalism.
                The concept is now frequently associated
                with Cedric Robinson, but an important earlier
                history lies in South African anti-apartheid
                Marxism.
              </p>

              <div className="mx-auto mt-12 max-w-4xl border-l-2 border-[#c8aa79] bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>South Africa · 1970s</Eyebrow>

                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  A Concept Forged in Political Struggle
                </h3>

                <p className="mt-6 text-[16px] leading-9 text-[#d4c9ba]">
                  Levenson traces the term&apos;s development
                  through South African Marxist debates over
                  apartheid, segregation, migrant labour and
                  capitalist accumulation.
                </p>

                <p className="mt-5 text-[16px] leading-9 text-[#d4c9ba]">
                  Martin Legassick and David Hemson&apos;s
                  1976 pamphlet is often cited as an early
                  use of the phrase, although Levenson
                  acknowledges earlier uses.
                </p>
              </div>

              <Discussion
                question="What changes when we understand racial capitalism as a concept emerging from a specific political struggle rather than only as a general theory of global capitalism?"
                guidance="Consider the difference between explaining South Africa's particular racial and economic structure and arguing that all capitalism is inherently racial. How does this historical recovery speak to Go's third tension?"
              />

              <ExhibitNavigation
                previous="Julian Go"
                next="Apartheid and Capitalist Development"
                onPrevious={() => {
                  setGo(2);
                  goScene(4);
                }}
                onNext={() => goLevenson(1)}
              />
            </>
          )}

          {levenson === 1 && (
            <>
              <Eyebrow>
                Gallery IV · Zachary Levenson · Exhibit 02 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                Apartheid and
                <span className="block italic text-[#c8aa79]">
                  Capitalist Development
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#c9c1b6]">
                South African Marxists investigated how
                racial segregation was connected to the
                organisation of labour and the accumulation
                of capital.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-4 md:gap-8">
                <div>
                  <MuseumPhoto
                    src="/images/apartheid-south-africa.jpg"
                    alt="Historical anti-apartheid protest in South Africa"
                    className="aspect-[4/5]"
                  />

                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                    Segregation &amp; Resistance
                  </p>
                </div>

                <div>
                  <MuseumPhoto
                    src="/images/south-african-mineworkers.jpg"
                    alt="Historical photograph of South African mineworkers"
                    className="aspect-[4/5]"
                  />

                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
                    Mining &amp; Migrant Labour
                  </p>
                </div>
              </div>

              <SectionRule />

              <ConceptExplorer items={southAfrica} />

              <div className="mx-auto mt-12 max-w-4xl border-l-2 border-[#c8aa79] bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>Reading Focus · Harold Wolpe</Eyebrow>

                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  How Was Cheap Labour Reproduced?
                </h3>

                <p className="mt-6 text-[16px] leading-9 text-[#d4c9ba]">
                  Levenson discusses Harold Wolpe&apos;s
                  account of how South Africa&apos;s reserve
                  system helped sustain a low-wage migrant
                  labour force. Workers&apos; rural households
                  absorbed some of the costs of their
                  reproduction, helping support profitability
                  in capitalist sectors such as mining.
                </p>

                <p className="mt-5 text-[16px] leading-9 text-[#d4c9ba]">
                  This analysis connects racial domination
                  to a specific arrangement of land,
                  household production, state policy
                  and wage labour.
                </p>
              </div>

              <Discussion
                question="Was apartheid simply an ideology of racial superiority, or was it also a historically specific way of organising capitalist labour?"
                guidance="Use the migrant labour system, rural reserves and the role of the state to explain why South African Marxists challenged the view that apartheid was merely an obstacle to otherwise neutral capitalist development."
              />

              <ExhibitNavigation
                previous="Origins of the Concept"
                next="Resistance and the Political Stakes"
                onPrevious={() => goLevenson(0)}
                onNext={() => goLevenson(2)}
              />
            </>
          )}

          {levenson === 2 && (
            <>
              <Eyebrow>
                Gallery IV · Zachary Levenson · Exhibit 03 / 03
              </Eyebrow>

              <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                Resistance and
                <span className="block italic text-[#c8aa79]">
                  the Political Stakes
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#c9c1b6]">
                For South African radicals, racial capitalism
                was not simply an academic description.
                It was a way of asking whether ending
                apartheid required a transformation of
                the economic relations that apartheid
                had helped sustain.
              </p>

              <div className="mx-auto mt-12 max-w-4xl border border-[#c8aa79]/30 bg-[#171411] p-8 md:p-12">
                <Eyebrow>Two Different Questions</Eyebrow>

                <div className="mt-8 grid gap-8 text-left md:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-2xl text-[#c8aa79]">
                      Political Equality
                    </h3>

                    <p className="mt-5 leading-8 text-[#c9c1b6]">
                      Could formal racial exclusion and
                      apartheid legislation be abolished
                      while existing capitalist relations
                      remained in place?
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#c8aa79]">
                      Economic Transformation
                    </h3>

                    <p className="mt-5 leading-8 text-[#c9c1b6]">
                      What would it mean to confront the
                      land, labour and class relations
                      through which racial domination
                      had been reproduced?
                    </p>
                  </div>
                </div>
              </div>

              <FilmScreening
                title="Generations of Resistance"
                year="1980"
                youtubeId="Wbg57Q43Ioc"
                description="A historical documentary about resistance to apartheid in South Africa. Consider the relationship between racial domination, labour and organised political struggle as you watch."
              />

              <div className="mx-auto mt-12 max-w-4xl border-l-2 border-[#c8aa79] bg-[#171411] p-8 text-left md:p-10">
                <Eyebrow>Returning to the Four Authors</Eyebrow>

                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  Four Ways of Asking One Question
                </h3>

                <div className="mt-7 space-y-5 text-[16px] leading-8 text-[#d4c9ba]">
                  <p>
                    <strong className="text-[#c8aa79]">
                      Robinson:
                    </strong>{" "}
                    How did capitalism inherit and reproduce
                    racial hierarchies?
                  </p>

                  <p>
                    <strong className="text-[#c8aa79]">
                      Hall:
                    </strong>{" "}
                    How are race, class and ideology articulated
                    within particular social formations?
                  </p>

                  <p>
                    <strong className="text-[#c8aa79]">
                      Go:
                    </strong>{" "}
                    What does the theory explain, and is
                    the race-capitalism connection necessary?
                  </p>

                  <p>
                    <strong className="text-[#c8aa79]">
                      Levenson:
                    </strong>{" "}
                    How did racial capitalism emerge as
                    a concept within political struggles,
                    and what is lost when we forget that history?
                  </p>
                </div>
              </div>

              <Discussion
                question="Could apartheid end without capitalism ending? What would the answer mean for the theory of racial capitalism?"
                guidance="Consider Levenson's reconstruction of South African Marxist debates alongside Go's distinction between contingent and necessary relations. Then return to Robinson's historical argument and Hall's account of articulation. The authors need not offer identical answers."
              />

              <ExhibitNavigation
                previous="Apartheid and Labour"
                next="Final Gallery · Mia Amor Mottley"
                onPrevious={() => goLevenson(1)}
                onNext={() => goScene(6)}
              />
            </>
          )}
        </section>
      )}

      {/* GALLERY V: MIA AMOR MOTTLEY */}
      {scene === 6 && (
        <section className="mx-auto max-w-6xl px-5 py-14 text-center md:py-20">
          <Eyebrow>
            Gallery V · Mia Amor Mottley · Closing Exhibit
          </Eyebrow>

          <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
            The Plantation
            <span className="block italic text-[#c8aa79]">
              After Emancipation
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl font-serif text-xl italic leading-relaxed text-[#d8c8b3] md:text-2xl">
            Does the plantation outlive slavery?
          </p>

          <div className="mx-auto mt-12 max-w-4xl border border-[#c8aa79]/30 bg-[#171411] p-8 md:p-12">
            <Eyebrow>A Contemporary Caribbean Intervention</Eyebrow>

            <h3 className="mt-6 font-serif text-3xl md:text-4xl">
              Mia Amor Mottley
            </h3>

            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
              Prime Minister of Barbados
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#d4c9ba]">
              Robinson, Hall, Go and Levenson examine how
              racial domination and capitalist development
              became historically connected. Mottley brings
              the discussion into the present through the
              question of reparations and the continuing
              economic consequences of slavery.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-[#bfb4a5]">
              Her intervention asks us to consider not only
              how slavery was abolished, but also how the
              economic benefits of slavery were distributed
              and which inequalities survived emancipation.
            </p>
          </div>

          <SectionRule />

          {/* HISTORICAL COMPARISON */}
          <Eyebrow>Historical Reckoning · British Emancipation</Eyebrow>

          <h3 className="mt-6 font-serif text-3xl md:text-5xl">
            Who Was Compensated?
          </h3>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#c9c1b6]">
            Britain&apos;s Slavery Abolition Act of 1833
            provided compensation to slave owners,
            while the people who had been enslaved
            received no equivalent payment for
            their forced labour.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="border border-[#c8aa79]/35 bg-[#171411] p-8 md:p-10">
              <Eyebrow>Compensation to Slave Owners</Eyebrow>

              <p className="mt-7 font-serif text-5xl text-[#c8aa79] md:text-6xl">
                £20 million
              </p>

              <p className="mt-6 leading-8 text-[#c9c1b6]">
                Allocated by the British government
                to compensate slave owners following
                the abolition of slavery.
              </p>
            </div>

            <div className="border border-[#c8aa79]/35 bg-[#171411] p-8 md:p-10">
              <Eyebrow>Compensation to the Enslaved</Eyebrow>

              <p className="mt-7 font-serif text-5xl text-[#c8aa79] md:text-6xl">
                £0
              </p>

              <p className="mt-6 leading-8 text-[#c9c1b6]">
                Formerly enslaved people received no
                equivalent compensation for the
                exploitation and forced labour
                they had endured.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-xs leading-6 text-[#a89a86]">
            Historical context: the £20 million compensation
            scheme was established under the Slavery Abolition
            Act 1833. The comparison concerns compensation
            for enslavement, not all later forms of public
            expenditure or assistance.
          </p>

          {/* APPRENTICESHIP */}
          <div className="mx-auto mt-12 max-w-4xl border-l-2 border-[#c8aa79] bg-[#171411] p-8 text-left md:p-10">
            <Eyebrow>1834–1838 · The Apprenticeship System</Eyebrow>

            <h3 className="mt-5 font-serif text-2xl md:text-3xl">
              Emancipation Without Immediate Economic Freedom
            </h3>

            <p className="mt-6 text-[16px] leading-9 text-[#d4c9ba]">
              Legal emancipation did not immediately bring
              unrestricted freedom to many formerly enslaved
              people in the British Caribbean. Under the
              apprenticeship system, they remained obliged
              to provide labour to their former owners
              for part of the working week.
            </p>

            <p className="mt-5 text-[16px] leading-9 text-[#d4c9ba]">
              Apprenticeship formally ended in the British
              Caribbean in 1838. Its existence nevertheless
              complicates any account of emancipation
              as a single moment when exploitation
              simply disappeared.
            </p>

            <p className="mt-5 text-[16px] leading-9 text-[#d4c9ba]">
              In the reparations argument discussed in
              Mottley&apos;s speech, approximately £27 million
              is invoked in relation to uncompensated
              apprenticeship labour. This figure is presented
              here as part of that argument, rather than
              as an independently verified historical total.
            </p>
          </div>

          {/* SPEECH */}
          <div className="mx-auto mt-14 max-w-5xl border border-[#c8aa79]/30 bg-[#171411] p-6 md:p-10">
            <Eyebrow>Featured Speech · London School of Economics</Eyebrow>

            <h3 className="mt-6 font-serif text-3xl md:text-4xl">
              A Lecture by Mia Amor Mottley
            </h3>

            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#c8aa79]">
              London · December 2023
            </p>

            <p className="mx-auto mt-7 max-w-3xl text-[16px] leading-8 text-[#c9c1b6]">
              Watch Mottley&apos;s lecture and consider how
              her discussion of slavery, compensation
              and historical responsibility connects
              to the theories explored in this exhibition.
            </p>

            <div className="relative mt-9 flex min-h-[250px] flex-col items-center justify-center overflow-hidden border border-[#c8aa79]/25 bg-gradient-to-br from-[#30251a] via-[#181411] to-[#0b0a09] px-6 py-12 md:min-h-[340px]">
              <div className="pointer-events-none absolute inset-5 border border-[#c8aa79]/15" />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#c8aa79]/60 bg-[#c8aa79]/10 text-3xl text-[#c8aa79]">
                ▶
              </div>

              <p className="relative z-10 mt-7 font-serif text-2xl text-[#f3e7d7] md:text-3xl">
                The Speech
              </p>

              <p className="relative z-10 mt-4 max-w-lg text-sm leading-7 text-[#bfb4a5]">
                Open the official LSE recording
                to view the full lecture.
              </p>

              <a
                href="https://www.lse.ac.uk/lse-player/a-lecture-by-mia-amor-mottley-prime-minister-of-barbados"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonStyle} relative z-10 mt-8`}
              >
                Watch Mottley&apos;s Speech ↗
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#a89a86]">
              Official LSE recording. The video opens in
              a new tab because a verified embeddable
              player is not available in this code.
            </p>
          </div>

          <SectionRule />

          {/* INTERACTIVE CONCEPTS */}
          <Eyebrow>
            Three Questions Raised by Emancipation
          </Eyebrow>

          <ConceptExplorer items={mottleyConcepts} />

          {/* THEORETICAL CONNECTION */}
          <div className="mx-auto mt-14 max-w-5xl border border-[#c8aa79]/30 bg-[#171411] p-8 text-left md:p-12">
            <Eyebrow>Returning to the Readings</Eyebrow>

            <h3 className="mt-6 font-serif text-3xl md:text-4xl">
              The Afterlife of the Plantation
            </h3>

            <p className="mt-7 text-[16px] leading-9 text-[#d4c9ba]">
              Mottley&apos;s speech provides a contemporary
              political intervention rather than a fifth
              academic theory of racial capitalism.
              Her argument creates an opportunity to
              reconsider the questions raised by
              the four assigned authors.
            </p>

            <div className="mt-9 space-y-7 border-t border-white/10 pt-8 text-[16px] leading-8 text-[#d4c9ba]">
              <p>
                <strong className="text-[#c8aa79]">
                  Cedric Robinson:
                </strong>{" "}
                If racial hierarchies were constitutive
                of capitalism&apos;s historical development,
                what does compensation to slave owners
                reveal about the protection of accumulated
                property and wealth?
              </p>

              <p>
                <strong className="text-[#c8aa79]">
                  Stuart Hall:
                </strong>{" "}
                How might we analyse the relationship
                between emancipation, the plantation
                economy, the colonial state and racial
                ideology without reducing these relations
                to a single cause?
              </p>

              <p>
                <strong className="text-[#c8aa79]">
                  Julian Go:
                </strong>{" "}
                Does the history of emancipation establish
                a historically specific relationship
                between racism and capitalism, or does
                it demonstrate that the relationship
                is logically necessary?
              </p>

              <p>
                <strong className="text-[#c8aa79]">
                  Zachary Levenson:
                </strong>{" "}
                How does the demand for reparations
                connect political freedom to the
                transformation of economic structures,
                recalling the political stakes of
                South African debates?
              </p>
            </div>
          </div>

          {/* FINAL DISCUSSION */}
          <Discussion
            question="Does the plantation outlive slavery?"
            guidance="Discuss whether legal emancipation necessarily transforms the economic structures established through slavery. Consider compensation to slave owners, uncompensated labour under apprenticeship, the persistence of unequal property relations, and contemporary demands for reparations. Use at least two of the assigned authors to explain whether these continuities are best understood as historical, structural or politically contested."
          />

          <div className="mx-auto mt-14 max-w-4xl border-y border-[#c8aa79]/25 py-12">
            <Eyebrow>The Exhibition&apos;s Final Question</Eyebrow>

            <h3 className="mt-7 font-serif text-3xl leading-relaxed md:text-5xl">
              What does freedom mean when the
              <em className="text-[#c8aa79]">
                {" "}distribution of wealth and power
              </em>{" "}
              remains unequal?
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-9 text-[#c9c1b6]">
              The exhibition began by asking whether
              Marxism can adequately explain racial
              capitalism. It ends by asking what
              such an explanation would require us
              to confront in the present.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <button
              className={outlineButton}
              onClick={() => {
                setLevenson(2);
                goScene(5);
              }}
            >
              ← Zachary Levenson
            </button>

            <button
              className={buttonStyle}
              onClick={returnHome}
            >
              Return to the Beginning →
            </button>
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[#928576]">
            End of the Exhibition
          </p>
        </section>
      )}

      {/* FOOTER */}
      {scene !== 0 && (
        <footer className="mt-16 border-t border-[#c8aa79]/20 px-5 py-10 text-center">
          <p className="font-serif text-xl">
            Racial{" "}
            <em className="text-[#c8aa79]">
              Capitalism
            </em>
          </p>

          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#8f8578]">
            An Interactive Historical Documentary
          </p>

          <button
            onClick={returnHome}
            className="mt-7 text-xs uppercase tracking-[0.18em] text-[#c8aa79] transition hover:text-white"
          >
            ↑ Return to Title Page
          </button>
        </footer>
      )}
    </main>
  );
}
