<?php

class shortcuts extends rcube_plugin
{
    public $task = 'mail';
    private $rc = null;

    public function init()
    {
		$this->rc = rcmail::get_instance();

        if ($this->rc->task == 'mail' && $this->rc->action == 'compose') {
            $this->include_script('compose-shortcuts.js');
        } else if ($this->rc->task == 'mail' && $this->rc->action == null) {
            $this->include_script('main-shortcuts.js');
		}
    }
}
