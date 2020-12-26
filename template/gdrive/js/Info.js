function information()
{
  var ptf = navigator.platform;
  var cc = navigator.hardwareConcurrency;
  var ram = navigator.deviceMemory;
  var ver = navigator.userAgent;
  var str = ver;
  var os = ver;
  //gpu
  var canvas = document.createElement('canvas');
  var gl;
  var debugInfo;
  var ven;
  var ren;
  //sysinfo
  console.log(ver);
  console.log(ptf);

  if (cc == undefined)
  {
    cc = 'Not Available';
    console.log('Cores are not available')
  }
  console.log(cc);
   
  //ram
  if (ram == undefined)
  {
    ram = 'Not Available';
    console.log('RAM is not available')
  }
  console.log(ram);

  //browser
  if (ver.indexOf('Firefox') != -1)
  {
    str = str.substring(str.indexOf(' Firefox/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
  }
  else if (ver.indexOf('Chrome') != -1)
  {
    str = str.substring(str.indexOf(' Chrome/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
  }
  else if (ver.indexOf('Safari') != -1)
  {
    str = str.substring(str.indexOf(' Safari/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
  }
  else if (ver.indexOf('Edge') != -1)
  {
    str = str.substring(str.indexOf(' Edge/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
  }
  else
  {
    brw = 'Not Available'
    console.log('Browser is not available')
  }

  //gpu
  try
  {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  }
  catch (e)
