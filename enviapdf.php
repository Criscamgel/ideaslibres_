<?php
    
	/* Enviar correo */


	/*
    if(isset($_POST["guarda"])){

    $mail = $_POST['correo'];
    $mensaje = "Este es un mensaje de prueba";
  
    mail($mail, 'Tu cotización', $mensaje);

    */
    /*
    include("mpdf60/mpdf.php");
 
	$mpdf=new mPDF('c','A4','','' , 0 , 0 , 0 , 0 , 0 , 0); 
 
	$mpdf->SetDisplayMode('fullpage');
 
	$mpdf->list_indent_first_level = 0;  // 1 or 0 - whether to indent the first level of a list
 
	$mpdf->WriteHTML(file_get_contents('seleccionador.html'));
         
	$mpdf->Output();

	/*


    /*$ val1 = htmlentities ( $ _GET [ 'correo' ]);
    mail($mail, $subject, $message, $headers);  

	$im = imagegrabscreen();
	imagepng($im, "mi_captura_de_pantalla.pdf");
	imagedestroy($im);*/


/*}*/

	/*require("fpdf17/fpdf.php");

	$pdf=new FPDF();
	//var_dump(get_class_methods($pdf));
	$pdf->AddPage();

	//------------------------
	$pdf->Image("hello.jpg");
	$pdf->SetFont("arial","B","20");

	$pdf->Cell(0,20,"hello world",1,1,"C");
	$pdf->SetFont("arial","I","10");

	$pdf->Cell(0,30,"Second line Italic",1,1,"C");
	$pdf->SetFont("arial","B","20");

	$pdf->Cell(0,40,"thired line",1,1,"C");
	$pdf->Output();
    */


	// Start the session
	/*session_start();*/



	


	if(isset($_POST["guarda"])){

		$hoy = date("F j, Y, g:i a");
		$cabeceras = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$contenido = $_POST['divcontent'];
		$mail = $_POST['correo'];
		$headers .= "Bcc: camiloguio@gmail.com,ideaslibres.web@gmail.com\r\n"; 
		$mensaje = "Tu cotización de nuestros servicios, Ideas Libres";

    	

  		mail($mail, $mensaje, $contenido, $cabeceras, $headers);

  	}


    $servername = "190.8.177.74";
	$username = "oportuni";
	$password = "0p0rtuni#.$";
	$dbname = "oportuni_fondos";

	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "INSERT INTO `ILcorreos` (`CorreosIL`, `Fecha_Reg`) VALUES ('".$mail."', '".$hoy."');";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();

    header("Location: http://www.ideaslibres.co/nuevaweb/"); /* Redirect browser */
    exit();

  	
    /*
    $username = "fondos";
	$password = "fondos_";
	"www.servidor1.lagobo.com"
	*/
    

?>

