$(document).ready(function () {
    const dices = {
        1: ['red-dot1'],
        2: ['red-dot3', 'red-dot4'],
        3: ['red-dot1', 'red-dot3', 'red-dot4'],
        4: ['red-dot2', 'red-dot3', 'red-dot4', 'red-dot5'],
        5: ['red-dot1', 'red-dot2', 'red-dot3', 'red-dot4', 'red-dot5'],
        6: ['red-dot2', 'red-dot3', 'red-dot4', 'red-dot5', 'red-dot6', 'red-dot7'],
    }

    const paths = {
        'red': ['red-path-1', 'red-path-2', 'red-path-3', 'red-path-4', 'red-path-5']
    }

    $('.red-roll-btn').click(function () {
        // generate random number
        const number = Math.floor(Math.random() * 6) + 1;

        const dots = $(this).prev().children();

        $(dots).each(function(index, dot) {
            const diceCombination = dices[number];

            const id = $(dot).attr('id');

            if (diceCombination.includes(id)) {
                $(dot).removeClass('hide');
            } else {
                $(dot).addClass('hide');
            }
        });
    });
});