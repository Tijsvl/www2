<?php
  $gallery = $_GET['gallery'];

  // ADD ALL APPROVED TO ZIP
  if (isset($_GET['files'])) {
    $files = explode(',', $_GET['files']);

    /* create a compressed zip file */
    function createZipArchive($files=array(), $destination = '', $overwrite = true) {
      
      if (file_exists($destination) && !$overwrite) { return false; }
      
      $validFiles=array();
      
      if(is_array($files)) {
        foreach($files as $file) {
          if(file_exists("./".$_GET['gallery']."/".$file)) { $validFiles[] = $file; }
        }
      }

  if(count($validFiles)) {
    $zip = new ZipArchive();
    
    if($zip->open($destination, $overwrite? ZIPARCHIVE::OVERWRITE: ZIPARCHIVE::CREATE) == true) {
      foreach($validFiles as $file) { $zip->addFile("./".$_GET['gallery']."/".$file, $file); }
      
      $zip->close();
      return file_exists($destination);
    } else {
     return false;
    }
  } else {
    return false;
    }
  }

  $fileName = $_GET['gallery'].".zip";
  $files = explode(',', $_GET['files']);
  $result = createZipArchive($files, $fileName);
  
  header("Content-Disposition: attachment; filename=".$fileName."");
  header("Content-Length: ".filesize($fileName));
  readfile($fileName);
  }

  // FORCE DOWNLOAD SINGLE JPG

  elseif (isset($_GET['file'])) {

      $file = "./".$_GET['gallery']."/".$_GET['file'];

      if(!file)
      {
         //   File doesn't exist, output error
           die('file not found');
      }
      else
      {
          // header('Content-Description: File Transfer');
          // header('Content-Type: application/octet-stream');
          // header('Content-Disposition: attachment; filename='.basename($file));
          // header('Content-Transfer-Encoding: binary');
          // header('Expires: 0');
          // header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
          // header('Pragma: public');
          // ob_clean();
          // flush();
          // readfile($file);
          // exit;


          // header('Content-Description: File Transfer');
          // header('Content-Type: application/octet-stream');
          // header('Content-Disposition: attachment; filename="'.basename($file).'"');
          // header('Expires: 0');
          // header('Cache-Control: must-revalidate');
          // header('Pragma: public');
          // header('Content-Length: ' . filesize($file));
          // readfile($file);
          // exit;

          header('Content-Disposition: attachment; filename='.basename($file));
          header("Content-Type: image/jpeg");
          readfile($file);
       }


    }

 ?>