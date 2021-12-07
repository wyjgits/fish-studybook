module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 13,
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		// 强制使用单引号
		quotes: ['warn', 'single'],
		// 强制使用分号结尾
		semi: ['warn', 'always'],
		// 禁止使用var生命变量
		'no-var': ['warn'],
		// 函数小括号前
		'space-before-function-paren': ['warn', 'never'],
		'@typescript-eslint/no-explicit-any': ['off'],
		camelcase: 'off',
		'@typescript-eslint/camelcase': ['off'],
    'no-unused-vars': 'true',
	}
};
