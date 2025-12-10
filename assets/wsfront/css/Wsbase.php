<?php

class WSBase extends CI_Controller {
	
	public $deviceAsset="webpage";
	public $subMenu;
	
	public function __construct() {
		parent::__construct();
	
	}

	protected function template($view){

		$view['header'] = $this->load->view('general/header', array(), true);
		$view['footer'] = $this->load->view('general/footer', array(), true);
		
		echo $this->load->view('general/template', $view, true);

	}

	
}

?>