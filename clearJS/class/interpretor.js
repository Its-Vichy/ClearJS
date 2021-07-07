const { beautify } = require('./parser');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
const esprima = require('esprima');

module.exports = {
    remove_dead_code: function(code) {
        const $script = require('shift-refactor').refactor(code);

        // Delete dead variables
        $script('BindingIdentifier').lookupVariable().forEach(expr => {
            if (expr.references.length <= 1) {
                $script(`[binding.name="${expr.name}"]`).delete();
                console.log(`[+] Remove Dead variable: ${expr.name}`);
            };
        });

        // Delete dead function
        $script('FunctionDeclaration').lookupVariable().forEach(expr => {
            if (expr.references.length === 0) {
                $script(`FunctionDeclaration[name.name="${expr.name}"]`).delete();
                console.log(`[+] Remove Dead function: ${expr.name}`);
            };
        });

        return beautify($script.codegen()[0]);
    },

    
    build_from_ast: function (code) {
        return beautify(escodegen.generate(esprima.parseScript(code)));
    }
};
/*remove_dead_code: function (code) {
        try {
            let AST = esprima.parseScript(code);
            let ExpressionList = [];

            // Parse expressions
            AST.body.forEach(expr => {
                try {
                    switch (expr.type) {
                        case 'ExpressionStatement':
                            ExpressionList.push(expr.expression.callee.name);
                            break;

                        case 'VariableDeclaration':
                            ExpressionList.push(expr.declarations[0].id.name);
                            break;

                        default:
                            return
                    }
                } catch { }
            });

            // Delete unused Expressions
            AST = estraverse.replace(AST, {
                enter: function (node) {
                    if (node.type === esprima.Syntax.FunctionDeclaration && !ExpressionList.includes(node.id.name)) {
                        console.log(`[+] Remove dead function: ${node.id.name}`)
                        this.remove();
                    };

                    if (node.type === esprima.Syntax.VariableDeclaration && !ExpressionList.includes(node.declarations[0].id.name)) {

                        console.log(`[+] Remove dead variable: ${node.declarations[0].id.name}`)
                        this.remove();
                    };
                }
            });

            return beautify(escodegen.generate(AST));
        } catch { return code; };
    },*/
