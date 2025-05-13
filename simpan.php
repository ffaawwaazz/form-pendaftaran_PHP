<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil dan sanitasi data input
    function bersihkan($data) {
        return htmlspecialchars(trim($data));
    }

    $nama = bersihkan($_POST['nama']);
    $email = bersihkan($_POST['email']);
    $telepon = bersihkan($_POST['telepon']);
    $jurusan = bersihkan($_POST['jurusan']);

    // Coba simpan ke file
    $baris = "Nama: $nama | Email: $email | Telepon: $telepon | Jurusan: $jurusan\n";
    $filePath = "data_pendaftar.txt";

    $berhasil = file_put_contents($filePath, $baris, FILE_APPEND | LOCK_EX);

    ?>
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Konfirmasi Pendaftaran</title>
        <style>
            body {
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(to right, #74ebd5, #ACB6E5);
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
            }

            .success-box {
                background: white;
                padding: 40px 30px;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                text-align: center;
                max-width: 400px;
            }

            h2 {
                color: #28a745;
                margin-bottom: 20px;
            }

            p {
                color: #333;
                font-size: 16px;
                margin-bottom: 30px;
            }

            a {
                display: inline-block;
                padding: 12px 20px;
                background-color: #007BFF;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                transition: background-color 0.3s;
            }

            a:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="success-box">
            <?php if ($berhasil !== false): ?>
                <h2>✅ Pendaftaran Berhasil!</h2>
                <p>Data kamu telah disimpan dengan aman.</p>
            <?php else: ?>
                <h2>❌ Gagal Menyimpan</h2>
                <p>Terjadi kesalahan saat menyimpan data. Silakan coba lagi.</p>
            <?php endif; ?>
            <a href="index.html">🔙 Kembali ke Form</a>
        </div>
    </body>
    </html>

    <?php
} else {
    // Jika tidak menggunakan metode POST
    echo "Akses tidak sah.";
}
?>
