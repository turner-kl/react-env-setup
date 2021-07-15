module.exports = {
    plugins: ["react"],// ルールのオンオフは適用されない => rulesかextendsに書くことで適用
    extends: [
        "plugin:react/recommended"
    ],
    rules: {
        "no-console": ["warn"]
    }
}