'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');
  const populations = Array.from(populationElements).map(element => {
    const numberString = element.textContent.trim().replace(/,/g, '');
    return parseInt(numberString, 10);
  }).filter(number => !isNaN(number));

  const totalPopulation = populations.reduce((acc, number) => acc + number, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = number => number.toLocaleString();

  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector('.average-population');

  if (totalPopulationElement) {
    totalPopulationElement.textContent = formatNumber(totalPopulation);
  }

  if (averagePopulationElement) {
    averagePopulationElement.textContent = formatNumber(averagePopulation);
  }
  
  console.log('Calculations completed successfully.');
});
