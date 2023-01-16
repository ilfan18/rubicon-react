import '../src/reset.css';
import '../src/index.css';
import '../src/colors.css';
import '../src/fonts.css';
import '../src/typography.css';

const customViewports = {
	Base: {
		name: 'Base < 768px',
		styles: {
			width: '650px',
			height: '100%',
		},
	},
	Middle: {
		name: 'Middle >= 768px',
		styles: {
			width: '850px',
			height: '100%',
		},
	},
	Large: {
		name: 'Large >= 992px',
		styles: {
			width: '1050px',
			height: '100%',
		},
	},
	XL: {
		name: 'XL >= 1200px',
		styles: {
			width: '1250px',
			height: '100%',
		},
	},
};

export const parameters = {
	viewport: {
		viewports: {
			...customViewports,
		},
	},
};
