var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(n){
  n.splice(1 , 1, "Roman Alamsyah Elsharawy" )
  n.splice(2 , 1, "Provinsi Bandar Lampung" )
  n.splice(4, 1, "Pria", "SMA International Metro")
  var convertTanggal = n[3].split('/')
  var tglToNum = convertTanggal.map(Number)
  var bulan = ''
  var joinTanggal = convertTanggal.join('-')
  var sliceNama = n[1].slice(0, 15)

  
  switch (tglToNum[1]) {
    case 1:
      bulan = 'Januari'
      break
    case 2:
      bulan = 'Februari'
      break
    case 3:
      bulan = 'Maret'
      break
    case 4:
      bulan = 'April'
      break
    case 5:
      bulan = 'Mei'
      break
    case 6:
      bulan = 'Juni'
      break
    case 7:
      bulan = 'Juli'
      break
    case 8:
      bulan = 'Agustus'
      break
    case 9:
      bulan = 'September'
      break
    case 10:
      bulan = 'Oktober'
      break
    case 11:
      bulan = 'November'
      break
    case 12:
      bulan = 'Desember'
      break
    default:
      bulan = 'Bulan hanya sampai 12!'
  }

  console.log(n)
  console.log(bulan)
  console.log(tglToNum.sort(function(v1,v2) {return v1 < v2}))
  console.log(joinTanggal)
  console.log(sliceNama)
}

dataHandling2(input)