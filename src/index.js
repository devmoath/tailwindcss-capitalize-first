const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
    addUtilities(
        {
            '.capitalize-first:first-letter': {
                textTransform: 'uppercase',
            },
        },
        ['responsive', 'hover']
    );
});
