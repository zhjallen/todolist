module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "off",
            4
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            1,
            "double"
        ],
        "semi": [
            1,
            "always"
        ],
        "sourceType: module": [
            "off"
        ],
        "no-unused-vars": [
            1
        ]
    }
};