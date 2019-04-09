requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var $tryit;
        var io = new extIO({
            animation: function($expl, data){
                var checkioInput = data.in;
                if (!checkioInput){
                    return;
                }

                var queue = [];
                var $table = $expl.find("table");
                for (var i = 0; i < checkioInput.length; i++) {
                    var $tr = $("<tr></tr>");
                    var c = checkioInput[i];
                    if (c.lastIndexOf("PUSH", 0) === 0) {
                        var ch = c.split(" ")[1];
                        queue.push(ch);
                    }
                    else if (queue.length > 0) {
                        queue.shift();
                    }
                    $tr.append($("<td></td>").text(c));
                    $tr.append($("<td></td>").text(queue.join("")));
                    $table.append($tr);
                }
            },
            animationTemplateName: 'animation',
            tryit: function(){
                var this_e = this;
                $tryit = $(this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')));

                var tryitDataInput = $tryit.find('.tryit_text_input');
                tryitDataInput.focus();

                $tryit.find('.bn-check').click(function (e) {
                    var tryitData = tryitDataInput.val().split(/\,+/);
                    tryitData = $.map(tryitData, function (val) {
                        return val.trim()
                    })
                    this_e.extSendToConsoleCheckiO(tryitData);
                    e.stopPropagation();
                    return false;
                });
            },
            retConsole: function (ret) {
                $tryit.find('.checkio_result').html("Your result:<br>" + ret);
            },
            functions: {
                js: 'letterQueue',
                python: 'letter_queue'
            }
        });
        io.start();
    }
);
