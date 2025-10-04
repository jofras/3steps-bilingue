module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/3steps-bilingue/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/df8c1_512bd9c8._.js",
  "build/chunks/[root-of-the-server]__0c9f3ece._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/3steps-bilingue/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];