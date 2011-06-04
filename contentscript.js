function annotate() {
    var replies = $('span[id^="reply"] a');     // :not([marked])
    for (var i = 0; i < replies.length; i++) {
        var click = replies[i].getAttribute('onclick');
        var key = click.substring(25, 57);
        var id = click.substring(60, 67);

        var resolved = false;
        if (key in dict) {
            // Found it in our dictionary of known users
            key = dict[key];
            resolved = true;
        }

        id = '#reply'+id;
        if ($(id) && $(id).attr('marked') != 'true') {
            $(id).attr('marked', 'true');

            var html = resolved ? '<strong>'+key+'</strong>' : key;

            var thing = $(document.createElement('span'))
                .attr('postno', i+'')
                .html(html)
                .css('color','black')
                .mouseover(function(){
                    $(this).css('text-decoration','underline');
                    $(this).css('cursor','pointer');
                }).mouseout(function(){
                    $(this).css('text-decoration','none');
                    $(this).css('cursor','auto');
                }).click(function(){
                    var i = parseInt($(this).attr('postno'));
                    var txt = $(this).text();
                    var note = prompt('Note for ' + txt + ':', localStorage[txt]);
                    if (note && note != '') {
                        localStorage[txt] = note;
                        $(this).qtip({
                            content: note,
                            show: {delay: 0}
                        });
                    }
                });

            if (localStorage[key]) {
                thing.qtip({
                    content: localStorage[key],
                    show: {delay: 0}
                });
            }
            $(id).prev().append(' &#8226; ').append(thing);
        }
    }
    setTimeout(annotate, 3000);
}

annotate();
