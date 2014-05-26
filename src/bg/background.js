chrome.contextMenus.create({
    title: 'Quote link as text',
    contexts: ['link'],
    onclick: function (info, tab) {
        var markdown = '[' + info.selectionText + '](' + info.linkUrl + ')';

        document.oncopy = function (e) {
            e.clipboardData.setData('text/plain', markdown);
            e.preventDefault();

            chrome.notifications.create(
                '', {
                    type: 'basic',
                    title: chrome.i18n.getMessage('copied_to_clipboard'),
                    message: markdown,
                    iconUrl: ''
                }, function () {
                }
            );
        };
        document.execCommand('copy', false, null);
    }
});
