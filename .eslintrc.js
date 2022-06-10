/* eslint-disable no-magic-numbers */

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended',
        // 启用Vue推荐风格
        'plugin:vue/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'camelcase': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/attributes-order': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-v-model-argument': 'off',
        'consistent-return': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        'no-useless-constructor': 'off',
        /*  Possible Errors: 规则涉及可能的错误或逻辑错误 */
        // 暂无

        /* Best Practices: 规则涉及最佳实践 */
        // 强制数组方法的回调函数中有 return 语句
        'array-callback-return': 'error',
        // 限制函数圈复杂度不超过 10
        complexity: ['error', 10],
        // 限制函数认知复杂度不超过 15
        // 要求函数使用一致的 return 语句【总是指定返回值或返回 undefined 无论是隐式或显式】
        // 禁止在 else 前有 return
        'no-else-return': 'error',
        // 禁用魔术数字, 但忽略 0、-1、1 三个数字
        'no-magic-numbers': ['error', { ignore: [0, -1, 1] }],
        // 禁止使用不带 await 表达式的 async 函数
        'require-await': 'error',

        /* Variables: 规则涉及变量声明 */
        // 暂无

        /* Stylistic Issues: 规则涉及风格指南 */
        // 要求或禁止使用拖尾逗号
        'comma-dangle': ['error', {
            // 数组中， 最后一个元素与闭括号在不同的行时，允许（但不要求）使用拖尾逗号
            arrays: 'only-multiline',
            // 对象中， 最后一个属性与闭括号在不同的行时，允许（但不要求）使用拖尾逗号
            objects: 'only-multiline',
            // import声明，禁止使用拖尾逗号
            imports: 'never',
            // exports声明，禁止使用拖尾逗号
            exports: 'never',
            // function声明与调用，禁止使用拖尾逗号
            functions: 'never',
        }
        ]
    },
    overrides: [
        {
            files: [
                '*.spec.js',
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            rules: {
                // 关闭：函数最大行数限制
                'max-lines-per-function': 'off',
                // 修改：强制回调函数最大嵌套深度
                'max-nested-callbacks': ['warn', 10],
                // 关闭：禁用魔术数字
                'no-magic-numbers': 'off',
                // 去掉重复字符串
                // 强制行的最大长度
                'max-len': ['error', { code: 170 }],
            },
        }
    ],
    // 指定使用的解析器
    parser: 'vue-eslint-parser',
    plugins: [
        'vue',
    ]
}
