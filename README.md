LINK WEB LOCALHOST :  http://localhost/form-pendaftaran/index.html  &
LINK WEB Github : https://ffaawwaazz.github.io/form-pendaftaran_PHP/

# Formulir Pendaftaran Mahasiswa Baru

Proyek ini adalah aplikasi web untuk pendaftaran mahasiswa baru yang terdiri dari **formulir pendaftaran** menggunakan **HTML**, **CSS**, **JavaScript**, dan **PHP**. Data pendaftar disimpan dalam file teks untuk tujuan pembelajaran.

---

## 🚀 Fitur Utama

* **Validasi Formulir**: Memastikan semua input wajib diisi dan formatnya benar.
* **Desain Responsif**: Tampilan yang menyesuaikan perangkat mobile dan desktop.
* **Penyimpanan Data**: Menyimpan data pendaftar dalam file teks.
* **Feedback Pengguna**: Memberikan konfirmasi kepada pengguna setelah berhasil mengisi formulir.

---

## 📂 Struktur Folder

```
/
├── index.html         # Halaman form pendaftaran mahasiswa
├── style.css          # Desain dan styling halaman form
├── script.js          # Validasi input form menggunakan JavaScript
├── simpan.php         # Proses penyimpanan data ke file
└── data_pendaftar.txt # File untuk menyimpan data pendaftar (otomatis)
```
---
## 📦 Cara Menjalankan Proyek

1. **Unduh dan Install XAMPP**: [XAMPP](https://www.apachefriends.org/index.html)
2. **Letakkan File Proyek** ke dalam folder `htdocs/` pada direktori instalasi XAMPP.
3. **Jalankan Apache** melalui XAMPP Control Panel.
4. **Akses aplikasi** di browser dengan membuka:

   ```
   http://localhost/form pendaftaran/index.html
   ```
5. **Isi Formulir** dan klik "Daftar". Data akan disimpan di file `data_pendaftar.txt`.

---
## Sebelum menjalankan " http://localhost/form-pendaftaran/index.html"

jalankan Apache, Setelah proyek disalin ke dalam folder yang tepat, sekarang jalankan Apache dari XAMPP atau Laragon.

5.1 Mengaktifkan Apache di XAMPP

5.2 Buka XAMPP Control Panel.

5.3 Klik tombol Start di sebelah Apache untuk menjalankan server Apache.

5.4 Pastikan statusnya berubah menjadi Running (berwarna hijau).

![image](https://github.com/user-attachments/assets/0ee3a99e-54e6-48d7-a16f-2986e69b0226)

## jalankan " http://localhost/form-pendaftaran/index.html" di browser  
![image](https://github.com/user-attachments/assets/32262f0c-419a-42fe-948d-de412513bd0f)
![image](https://github.com/user-attachments/assets/8b72cd45-bfb7-4ebd-81f2-15904056af7c)
![image](https://github.com/user-attachments/assets/8888d63c-22a8-434d-b501-affabc15c6f9)

---

## 📝 Penjelasan Setiap File

### 1. **`index.html`** — Halaman Form Pendaftaran

Ini adalah halaman yang menampilkan form untuk pendaftaran mahasiswa baru. Berikut adalah potongan kodenya:

```html
<form id="formPendaftaran" method="POST" action="simpan.php" onsubmit="return validasiForm()">
    <label for="nama">Nama Lengkap:</label>
    <input type="text" id="nama" name="nama" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="telepon">No. Telepon:</label>
    <input type="tel" id="telepon" name="telepon" required>
    
    <label for="jurusan">Jurusan:</label>
    <select id="jurusan" name="jurusan" required>
        <option value="">-- Pilih Jurusan --</option>
        <option value="Teknik Informatika">Teknik Informatika</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
        <option value="Teknik Elektro">Teknik Elektro</option>
        <option value="Teknik Mesin">Teknik Mesin</option>
    </select>
    
    <button type="submit">Daftar</button>
</form>
```

* Form ini akan mengirimkan data menggunakan metode `POST` ke **`simpan.php`**.
* Saat form disubmit, JavaScript validasi dipanggil melalui `onsubmit="return validasiForm()"`.

---

### 2. **`style.css`** — Desain Halaman

File CSS ini mengatur tampilan halaman, termasuk form dan elemen-elemen lainnya agar terlihat modern dan responsif.

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.form-container {
    max-width: 500px;
    margin: 50px auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

button {
    background-color: #007BFF;
    color: white;
    border: none;
    margin-top: 20px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
```

* **`form-container`** memastikan form berada di tengah halaman dengan padding, border-radius, dan bayangan.
* **`button`** memberikan warna latar biru dengan efek hover saat kursor berada di atasnya.

---

### 3. **`script.js`** — Validasi Formulir

File JavaScript ini memastikan bahwa pengguna mengisi form dengan benar sebelum data dikirim.

```javascript
function validasiForm() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const jurusan = document.getElementById("jurusan").value;

    if (nama === "" || email === "" || telepon === "" || jurusan === "") {
        alert("Semua kolom harus diisi!");
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Format email tidak valid.");
        return false;
    }

    return true;
}
```

* Validasi memastikan bahwa semua kolom terisi, dan format email harus sesuai dengan pola yang ditentukan.
* Jika ada kesalahan, akan muncul **alert**.

---

### 4. **`simpan.php`** — Penyimpanan Data

File PHP ini menangani data yang dikirimkan dari form dan menyimpannya ke file teks (`data_pendaftar.txt`).

```php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars(trim($_POST['nama']));
    $email = htmlspecialchars(trim($_POST['email']));
    $telepon = htmlspecialchars(trim($_POST['telepon']));
    $jurusan = htmlspecialchars(trim($_POST['jurusan']));

    // Simpan data ke file
    $data = "Nama: $nama | Email: $email | Telepon: $telepon | Jurusan: $jurusan\n";
    file_put_contents("data_pendaftar.txt", $data, FILE_APPEND | LOCK_EX);

    echo "<h2>Data berhasil disimpan!</h2>";
} else {
    echo "Akses tidak sah.";
}
```

* **Sanitasi input** menggunakan `htmlspecialchars(trim())` untuk menghindari XSS.
* Data disimpan ke file `data_pendaftar.txt` menggunakan `file_put_contents()`.

---

