import React from 'react';

const VacancyCard = ({ title, description, link }) => {
  return (
<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center 
             bg-olive-light/5 hover:text-gold-warm hover:border-gold-warm 
             border-olive-light text-olive-light border-2 p-3 sm:p-6 
             rounded-lg w-full max-w-xs md:min-w-[250px] min-w-[150px] mx-auto"
>
  <h3 className="text-lg sm:text-2xl font-bold text-center">{title}</h3>
</a>
  );
};

export default VacancyCard;
