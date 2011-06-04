function annotate() {
    var replies = $('span[id^="reply"] a');     // :not([marked])
    for (var i = 0; i < replies.length; i++) {
        var click = replies[i].getAttribute('onclick');
        var hash = click.substring(25, 57);
        var id = click.substring(60, 67);

        var resolved = false;
        var key = hash;
        if (hash in dict) {
            // Found it in our dictionary of known users
            key = dict[hash];
            resolved = true;
        }

        id = '#reply'+id;
        if ($(id) && $(id).attr('marked') != 'true') {
            $(id).attr('marked', 'true');

            var thing = $(document.createElement('span'))
                .attr('postno', i+'')
                .html(resolved ? '<strong>'+key+'</strong>' : key)
                .css('color','black')
                .mouseover(function(){
                    $(this).css('text-decoration','underline');
                    $(this).css('cursor','pointer');
                }).mouseout(function(){
                    $(this).css('text-decoration','none');
                    $(this).css('cursor','auto');
                }).click(function(){
                    var txt = $(this).attr('hash');
                    var name = txt == $(this).text() ? '' : '('+$(this).text()+')';
                    var note = prompt('Note for ' + txt + ' ' + name + ':', localStorage[txt]);
                    if (note && note != '') {
                        // TODO update other notes for the same person on the page
                        localStorage[txt] = note;
                        $(this).qtip({
                            content: note,
                            show: {delay: 0}
                        });
                    }
                }).attr('hash', hash);

            if (localStorage[hash]) {
                thing.qtip({
                    content: localStorage[hash],
                    show: {delay: 0}
                });
            }
            $(id).prev().append(' &#8226; ').append(thing);
        }
    }
    setTimeout(annotate, 3000);
}

annotate();
