# Roundcube Plugin Shortcuts: 

- Ctrl+Enter (⌘+Enter) to send email
- c to start composing email

---

## Installation

1. Copy this plugin into your Roundcube `plugins/` directory:

   ```bash
   cd /path/to/roundcube/plugins
   git clone https://github.com/rokj/shortcuts.git

2. Enable the plugin in your Roundcube config (config/config.inc.php):

    ```php
    $config['plugins'][] = 'shortcuts';


3. Reload Roundcube in your browser and open the compose screen.

## Usage

While writing an email in the HTML editor (TinyMCE):

Press Ctrl+Enter (Windows/Linux) or ⌘+Enter (macOS) to send email.

While on main screen, press c to open compose page.
