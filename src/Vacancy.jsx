import React from 'react';
import VacancyCard from './components/VacancyCard';
import Media from 'react-media';
import { useMediaQuery } from 'react-responsive';


const vacancies = [
  {
    title: "Оператор безпілотника",
    description: "",
    link: "https://lobbyx.army/tor/operator-bezpilotnyka-do-batalyon-bezpilotnykh-system-110-ombr/",
  },
  {
    title: "Автослюсар",
    description: "",
    link: "https://lobbyx.army/tor/avtosliusar-do-batalyon-bezpilotnykh-system-110-ombr",
  },
  {
    title: "Спеціаліст з ремонту мікропроцесорної техніки",
    description: "",
    link: "https://lobbyx.army/tor/spetsialist-z-remontu-mikroprotsesornoi-tekhniky-do-batalyon-bezpilotnykh-system-110-ombr/",
  },
  
];

const Vacancy = () => {
  const vacancyCount = vacancies.length;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div id="vacancy" className="flex justify-center font-ibm mb-24 mt-16 scroll-mt-[100px]">
    <div className="w-full max-w-6xl px-4 text-center">
      <h2 className="text-olive-light text-3xl sm:text-4xl font-bold mb-12">ВАКАНСІЇ</h2>
      <div
        className={`gap-6 ${
          !isMobile && vacancyCount < 4 ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {vacancies.map((vacancy, index) => (
          <VacancyCard key={index} title={vacancy.title} description={vacancy.description} link={vacancy.link} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Vacancy;

