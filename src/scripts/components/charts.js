import { CYR_SMALL } from './caesar.js';
import freq from '../../data/freq.json';

import { Chart, Colors, BarController, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';

Chart.register(Colors, BarController, BarElement, CategoryScale, LinearScale, Legend);

document.addEventListener('DOMContentLoaded', () => {
	new Chart(document.getElementById('chart1'), {
		type: 'bar',
		data: {
			labels: CYR_SMALL.split(''),
			datasets: [
				{
					label: 'Частота появления букв русского языка',
					data: freq.CYR,
					minBarLength: 2,
					backgroundColor: '#6BD391',
				},
			],
		},
	});
});

export const buildChart = (text) => {
	let pos = 0;
	let newData = {
		type: 'bar',
		data: {
			labels: CYR_SMALL.split(''),
			datasets: [
				{
					label: 'Частота появления букв русского языка',
					data: freq.CYR,
				},
				{
					label: 'Частота появления букв шифртекста',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				},
			],
		},
	};
	// Filter only cyrillic
	text = text.toLowerCase().replace(/[^а-яА-ЯёЁ]+/g, '');

	for (let i = 0; i < text.length; i++) {
		pos = CYR_SMALL.indexOf(text[i]);
		newData.data.datasets[1].data[pos] += 1 / text.length;
	}

	// REDRAW CANVAS
	let chartStatus = Chart.getChart('chart2');
	if (chartStatus !== undefined) {
		chartStatus.destroy();
	}

	new Chart(document.getElementById('chart2'), newData);
};
