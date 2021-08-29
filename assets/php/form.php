<?php
ini_set('display_errors',1);
error_reporting("var_dump");

    echo "<h1>hola</h1>";
    if(isset($_POST['enviar_mail'])){
        
        if(isset($_POST['name'])&&isset($_POST['email'])&&isset($_POST['message'])){
            
            if(!empty($_POST['name'])&&!empty($_POST['email'])&&!empty($_POST['message'])){
                
                $name=$_POST['name'];
                $message=$_POST['message'];
                $email=$_POST['email'];
                //echo "nombre ".$name." ".$email." ".$message;
                $para      = 'idaxmx@gmail.com';
                $titulo    = $name;
                $mensaje   = $message;
                $headers="From: ".$email;

                mail($para, $titulo, $mensaje, $headers);
                //$mail=mail($email, "asunto", $message);
                echo "mail mandado";
                if($mail){
                    echo "mail enviado";
                }
            }
            else if(empty($_POST['name'])){
               echo "name vacio";
            }
            else if(empty($_POST['email'])){
                
                echo "email vacio";
            }
            else if(empty($_POST['message'])){
               
                echo "message vacio";
            }
            else{
                
                echo "wtf";
            }
        }else{
            echo "nada";
        }
    }
    else{
        echo "nadita";
    }
?>