module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'max-len': 'off',
        'no-magic-numbers': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error', 'info'] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'object-property-newline': 'off',
        'vue/no-v-html': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'no-irregular-whitespace': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/order-in-components': 'off',
        'vue/html-self-closing': 'error',
        'vue/require-v-for-key': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/attributes-order': 'off',
        'vue/name-property-casing': 'error',
        'vue/require-default-prop': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/html-indent': 'error'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
