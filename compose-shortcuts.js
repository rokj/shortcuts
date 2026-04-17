/*!
 * Roundcube plugin: Ctrl/Cmd+Enter to send message in TinyMCE
 * Registers keyboard shortcuts on the compose editor without patching Roundcube core.
 * Works whether this script loads before or after TinyMCE init.
 */
(function () {
	rcmail.addEventListener('init', function(env) {
		document.body.addEventListener('keydown', (event) => {
			if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
				if (window.parent && window.parent.$) {
					window.parent.$('.button.send').click();
				} else {
					var btn = document.querySelector('.button.send, button.send');
					if (btn) btn.click();
				}
			}
		});
	});
})();
