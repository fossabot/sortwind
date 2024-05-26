export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [
			2,
			'never',
			['start-case', 'pascal-case', 'upper-case'],
		],
	},
};
