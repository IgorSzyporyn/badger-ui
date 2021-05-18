/**
 * See http://mysticatea.github.io/eslint-plugin-es/rules/no-object-entries.html
 */
"use strict";

const { READ, ReferenceTracker } = require("eslint-utils");

module.exports = {
  rules: {
    "no-object-from-entries": {
      meta: {
        docs: {
          description: "disallow the `Object.fromEntries` method.",
          category: "ES2017",
          recommended: false,
        },
        fixable: null,
        messages: {
          forbidden:
            "ES2017 '{{name}}' method is forbidden due to Edge issues.",
        },
        schema: [],
        type: "problem",
      },
      create(context) {
        return {
          "Program:exit"() {
            const tracker = new ReferenceTracker(context.getScope());
            for (const { node, path } of tracker.iterateGlobalReferences({
              Object: {
                fromEntries: { [READ]: true },
              },
            })) {
              context.report({
                node,
                messageId: "forbidden",
                data: { name: path.join(".") },
              });
            }
          },
        };
      },
    },
  },
};
