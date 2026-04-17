/*!
 * Roundcube plugin: Ctrl/Cmd+Enter to send message in TinyMCE
 * Registers keyboard shortcuts on the compose editor without patching Roundcube core.
 * Works whether this script loads before or after TinyMCE init.
 */
(function () {
	rcmail.addEventListener('init', function(env) {
		document.body.addEventListener('keydown', (event) => {
			if (event.key === "c") {
				window.location.href = '/?_task=mail&_action=compose';
			}
		});
	});
})();
