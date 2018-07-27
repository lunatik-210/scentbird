import _ from 'lodash';

function yearsGenerator(limit = 10) {
  let currentYear = new Date().getFullYear();
  let years = {};
  
  _.forEach(_.range(limit), () => {
  	let year = currentYear++;
  	years[year] = year;
  });

  return years;
}

export let years = yearsGenerator(10);
