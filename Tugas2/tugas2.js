function hitung() {
  const inputt1 = parseInt(document.getElementById("input1").value);
  const inputt2 = parseInt(document.getElementById("input2").value);

  var hasil = inputt1 + inputt2;
  alert("Hasil Nya Adalah = " + hasil);

  console.log("Hasilnya Adalah : " + hasil);
}

function Check() {
  const name = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("alamat").value;

  if (name === "" && email === "" && address === "") {
    alert("Wajib Mengisi");
  } else if(name === ""){
    alert("nama wajib diisi");
  }else if(email === ""){
    alert("email wajib diisi"); 
  }else if(address === ""){
    alert("alamat wajib diisi");
  }else {
    alert("Masuk Bro!!!");
  }
  // if(name,email,address === ""){
  //   alert("wajib diisi semua");
  // }else 
  // if(name === ""){
  //   alert("nama wajib diisi");
  // }else if(email === ""){
  //   alert("email wajib diisi");
  // }else if(address === ""){
  //   alert("alamat wajib diisi");
  // }
}