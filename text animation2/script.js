        /*
        REPEAT ANIMATION LOGIC
        ---------------------
        When a user clicks "Repeat Animation", we remove the animation class
        and trigger reflow (forcing browser to recognize the change), then
        re-add the class to play the animation from the start.
        */
        $(function(){
            $('.repeat').click(function(){
                var parent = $(this).parent();
                var classes = parent.attr('class'); // Save existing classes
                parent.removeClass();               // Remove all classes
                void parent[0].offsetWidth;        // Trigger reflow
                parent.addClass(classes);           // Re-add original classes
            });
        });
