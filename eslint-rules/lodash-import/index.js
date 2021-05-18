"use strict";

module.exports = {
  rules: {
    "lodash-import": {
      meta: {
        docs: {
          description:
            'disallow imports from "lodash" but require specific package imports',
          category: "ES2017",
          recommended: false,
        },
        fixable: null,
        messages: {
          forbidden:
            'Imports from "lodash" are not allowed. Import from "lodash/<package>" instead to limit bundle size',
        },
        schema: [],
        type: "problem",
      },
      create: function (context) {
        return {
          ImportDeclaration: function (node) {
            if (node.source && node.source.value === "lodash") {
              context.report({
                node,
                message:
                  'Imports from "lodash" are not allowed. Import from "lodash/<package>" instead to limit bundle size',
                // fix: function (fixer) {
                //   const newImports = node.source.parent.specifiers.map(
                //     (specifier, i) =>
                //       specifier.imported
                //         ? `${i > 0 ? "\n" : ""}import ${
                //             specifier.imported.name
                //           } from "lodash/${specifier.imported.name}"`
                //         : "",
                //   );
                //   return fixer.replaceText(node, newImports);
                // },
              });
            }
          },
        };
      },
    },
  },
};
