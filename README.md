# CodeIgniter Simple FlashMessageHelper

**what is this ?**
 this is very simple flash_message_helper for codeigniter create base on my anxiety 
 always using **$this->session->set_flashdata()** and **$this->session->flashdata()** everytime create message alert :(
 and this flashMessage using bootstrap for styling, make sure u download it or us the cdn for it :)

 # How To Setup ? 
 - Download The flash_message_helper
 - copy || cut flash_message_helper.php to helper folder
 - load the helper from autoload like this **$autoload['helper'] = array('flash_message');**
 - done

 # How To Use ?
 **set_flashdata()**
 - instead of using **$this->session->set_flashdata($name, $message)** we can just use **setFlashMessage($name, $message, $type)**
 - instead of using **$this->session->flashdata($name)** we can just use **getFlashMessage()** with out fill the parameter

 **controller Example**
 public function index()
 {
 	$data = [
 		'notification' => getNotification() // this will return value afther setFlashMessage() declarated
 	];
 }

 **view example**
 - simple just echo the name of your notification variable

 # EXTRA
 if you want to make flashmessage disappear after a view second i create a simple javascript script for it
 **how to use it ?**
 - copy the js syntax into your project folder and load it into your footer
 - create some tag with id="notification" and attribute data-message="fill and echo inside this with your php notification variable name"

