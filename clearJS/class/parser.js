const beautify = require('js-beautify').js;

function replace_string(str, replaceWhat, replaceTo) {
    return str.replace(new RegExp(replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replaceTo);
};

module.exports = {
    beautify: function (code) {
        return beautify(code, {
            indent_size: 2,
            space_in_empty_paren: true,
            eval_code: true,
            space_before_conditional: true,
            indent_char: " ",
            indent_with_tabs: true,
            editorconfig: false,
            eol: "\n",
            end_with_newline: true,
            indent_level: 0,
            preserve_newlines: true,
            max_preserve_newlines: 10,
            space_in_paren: false,
            jslint_happy: false,
            space_after_anon_function: false,
            space_after_named_function: false,
            brace_style: 'end-expand',
            unindent_chained_methods: false,
            break_chained_methods: false,
            keep_array_indentation: false,
            unescape_strings: true,
            wrap_line_length: 0,
            e4x: false,
            comma_first: false,
            operator_position: 'before' - 'newline',
            indent_empty_lines: false,
            templating: ["auto"]
        });
    },

    rename_string: function(code) {
        console.log('[+] Rename string');

        while (match = code.match(/_0x(\w*)\(0x(\w*)\)/g)) {
            code = code.replace(match[0], `GetString(${match[0].match(/\(0x(\w*)/g)[0].split('(')[1]})`);
        };
        
        return code;
    },

    decode_string: function(code, algo) {
        console.log('[+] Decode string')

        while(match = code.match(/GetString\(0x(\w*)\)/g)) {
            let string = replace_string(replace_string(replace_string(replace_string(eval(`${algo.replace('_%_here_%_', match[0])}`), '\`', '\\`'), '\n', '\\n'), "'", "\\'"), '  ', ' ');

            code = code.replace(match[0], `'${string}'`);
            console.log(`[+] Decode ${match[0]} to ${string}`)
        };

        return code;
    },

    concatenate_string: function(code) {
        console.log('[+] Concatenate string');

        // [('a' + 'b')] to ['ab']
        while (match = code.match(/\([`|'|"](\w*)[`|'|"]\).[*+*].\([`|'|"](\w*)[`|'|"]\)/g)) {
            code = code.replace(match[0], (match[0].replace("') + ('", '')).replace('(', '').replace(')', ''));
        };

        // ()['x'](x) to ().x(x)

        // [('x')] to ['x']
        while (match = code.match(/\[\(['|"|`](\w+)['|"|`]\)\]/g)) {
            code = code.replace(match[0], `[${match[0].slice(2, match[0].length - 2)}]`)
        };

        // 'a' + 'b' to 'ab'
        while (match = code.match(/[`|'|"].[*+*].[`|'|"]/g)) {
            code = code.replace(match[0], '');
        };

        // "jame's wife" to "jame^s wife"
        while (match = code.match(/[a-zA-Z]['][a-zA-Z]/g)) {
            code = code.replace(match[0], replace_string(match[0], "'", '^')); // '^'
        };

        // x'ê to x^ê
        while (match = code.match(/[a-zA-Z]['][ê|à|é|è|û|â|ẑ|ŷ|î|ô|ĵ|ĥ|ĝ|ŝ|ŵ|ĉ]/g)) {
            code = code.replace(match[0], replace_string(match[0], "'", '^')); // '^'
        };

        // "jame' s wife" to "jame^ s wife"
        while (match = code.match(/[a-zA-Z][']\s[a-zA-Z]/g)) {
            code = code.replace(match[0], replace_string(match[0], "'", '^')); // '^'
        };

        // x' ê to x^ ê
        while (match = code.match(/[a-zA-Z][']\s[ê|à|é|è|û|â|ẑ|ŷ|î|ô|ĵ|ĥ|ĝ|ŝ|ŵ|ĉ]/g)) {
            code = code.replace(match[0], replace_string(match[0], "'", '^')); // '^'
        };

        return code;
    },

    lint: function(code) {
        console.log('[+] Lint code');

        // a.['b'] to a.b
        while (match = code.match(/(\w+)\[("|'|`)(\w+)("|'|`)\]/)) {
            code = code.replace(/(\w+)\[("|'|`)(\w+)("|'|`)\]/g, "$1.$3");
        };

        // ('a')[b] to ('a').b
        while (match = code.match(/\(['|"|`][^']*['|"|`]\)\[['|"|`][a-zA-Z]+['|"|`]\]/)) {
            let x = match[0].split(')[')[1];
            code = code.replace(match[0], `${match[0].split(')[')[0]}).${x.slice(1, x.length - 2)}`);
        };

        // ()[b] to ().b
        while (match = code.match(/\([^']*\)\[['|"|`][a-zA-Z]+['|"|`]\]/)) {
            let x = match[0].split(')[')[1];
            code = code.replace(match[0], `${match[0].split(')[')[0]}).${x.slice(1, x.length - 2)}`);
        };

        // 'hello xxx'.replace('xxx', 'world') to 'hello world'
        while (match = code.match(/[`|'|"][^"]*[`|'|"].replace\([`|'|"][a-zA-Z]*[`|'|"], [`|'|"][a-zA-Z]*[`|'|"]\)/g)) {
            const args = match[0].match(/[`|'|"][a-zA-Z]*[`|'|"]/g);
            code = code.replace(match[0], match[0].split('.replace')[0].replace(args[0].slice(1, args[0].length - 1), args[1].slice(1, args[1].length - 1)));
        };

        // ('hello xxx').replace('xxx', 'world') to 'hello world'
        while (match = code.match(/[`|'|"][^"]*[`|'|"]\).replace\([`|'|"][a-zA-Z]*[`|'|"], [`|'|"][a-zA-Z]*[`|'|"]\)/g)) {
            const args = match[0].match(/[`|'|"][a-zA-Z]*[`|'|"]/g);
            code = code.replace(match[0], match[0].split('.replace')[0].replace(args[0].slice(1, args[0].length - 1), args[1].slice(1, args[1].length - 1)));
        };

        return code;
    }
};