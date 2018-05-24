/**
 * Datenknoten tslint config
 */

module.exports = {
    extends: "tslint-sonarts",
    rules: {
        "arrow-return-shorthand": true,
        "callable-types": true,
        "class-name": true,
        "comment-format": [
            true,
            "check-space"
        ],
        "curly": true,
        "deprecation": {
            "severity": "warn"
        },
        "eofline": true,
        "forin": true,
        "import-blacklist": [
            true,
            "rxjs/Rx"
        ],
        "import-spacing": true,
        "indent": [
            true,
            "spaces"
        ],
        "interface-over-type-literal": true,
        "label-position": true,
        "max-line-length": [
            true,
            140
        ],
        "member-access": [
            true,
            "check-accessor",
            "check-constructor",
            "check-parameter-property",
        ],
        "member-ordering": [
            true,
            {
                "order": [
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                ]
            }
        ],
        "no-arg": true,
        "no-bitwise": true,
        "no-console": true,
        "no-construct": true,
        "no-debugger": true,
        "no-duplicate-super": true,
        "no-empty": false,
        "no-empty-interface": true,
        "no-eval": true,
        // "no-inferrable-types": [
        //     true,
        //     "ignore-params"
        // ],
        "no-misused-new": true,
        "no-non-null-assertion": true,
        "no-shadowed-variable": true,
        "no-string-literal": false,
        "no-string-throw": true,
        "no-switch-case-fall-through": true,
        "no-trailing-whitespace": true,
        "no-unnecessary-initializer": true,
        "no-unused-expression": true,
        "no-use-before-declare": true,
        "no-var-keyword": true,
        "object-literal-sort-keys": false,
        "one-line": [
            true,
            "check-open-brace",
            "check-catch",
            "check-else",
            "check-whitespace"
        ],
        "prefer-const": true,
        "quotemark": [
            true,
            "single"
        ],
        "radix": true,
        "semicolon": [
            true,
            "always"
        ],
        "triple-equals": [
            true,
            "allow-null-check"
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            }
        ],
        "unified-signatures": true,
        "variable-name": [
            true,
            "ban-keywords",
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
        ],
        "no-unnecessary-type-assertion": true,
        "promise-function-async": true,
        "await-promise": true,
        "no-floating-promises": true,
        "no-use-before-declare": true,
        "no-void-expression": true,
        "restrict-plus-operands": true,
        "use-default-type-parameter": true,
        "completed-docs": true,
        "jsdoc-format": true,
        "no-unthrown-error": true,
        "no-identical-conditions": true,
        "no-all-duplicated-branches": true,
        "no-useless-increment": true,
        "no-case-with-or": true,
        "no-collection-size-mischeck": true,
        "no-ignored-initial-value": true,
        "no-identical-conditions": true,
        "no-element-overwrite": true,
        "no-ignored-return": true,
        "no-misspelled-operator": true,
        "no-self-assignment": true,
        "no-unthrown-error": true,
        "no-use-of-empty-return-value": true,
        "no-useless-intersection": true,
        "cognitive-complexity": [true, 15],
        "use-primitive-type": true,
        "no-dead-store": true,
        "no-gratuitous-expressions": true,
        "no-duplicate-string": true,
        "no-commented-code": true,
        "no-big-function": true,
        "no-hardcoded-credentials": true,
        "no-extra-semicolon": true,
        "use-type-alias": true,
        "prefer-immediate-return": true,
        "parameters-max-number": [true, 7],
        "no-useless-cast": true,
        "no-return-type-any": true,
        "file-header": "@license MIT"
    }
};
