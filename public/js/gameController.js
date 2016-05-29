(function () {
    "use strict";

    function render (data) {
        theCrypt.placeView.render(data.place);
        theCrypt.playerView.render(data.player);
        if (data.messages && data.messages.length) {
            renderMessage(data.messages.join('<br />'));
        }
    }

    function renderMessage (message) {
        theCrypt.messageView.render(message);
    }

    function init () {
        gpwj.data.getStartData(function (data) {
            render(data);
            theCrypt.gameID = data.gameID;
        });
    }

    function doAction (command) {
        gpwj.data.postAction(theCrypt.gameID, command, function (data) {
            render(data);
        });
    }

    // Assign the public interface
    window.game = {
        do: doAction,
        init: init,
        message: renderMessage
    };

})();