function validasiForm() {
    // Ambil elemen form dan input
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const telepon = document.getElementById("telepon");
    const jurusan = document.getElementById("jurusan");

    // Reset warna border jika sebelumnya merah
    [nama, email, telepon, jurusan].forEach(field => {
        field.style.borderColor = "#ccc";
    });

    // Validasi kosong
    if (nama.value.trim() === "" || email.value.trim() === "" ||
        telepon.value.trim() === "" || jurusan.value === "") {
        showError("Semua kolom harus diisi!");
        highlightEmptyFields([nama, email, telepon, jurusan]);
        return false;
    }

    // Validasi email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email.value)) {
        showError("Format email tidak valid.");
        email.style.borderColor = "red";
        email.focus();
        return false;
    }

    // Validasi nomor telepon (10–15 digit angka)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(telepon.value)) {
        showError("Nomor telepon harus berupa angka 10-15 digit.");
        telepon.style.borderColor = "red";
        telepon.focus();
        return false;
    }

    // Validasi nama (hanya huruf dan spasi)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(nama.value)) {
        showError("Nama hanya boleh berisi huruf dan spasi.");
        nama.style.borderColor = "red";
        nama.focus();
        return false;
    }

    return true;
}

// Menampilkan pesan error di atas form
function showError(pesan) {
    let errorBox = document.getElementById("errorBox");

    if (!errorBox) {
        errorBox = document.createElement("div");
        errorBox.id = "errorBox";
        errorBox.style.backgroundColor = "#ffdddd";
        errorBox.style.color = "#a94442";
        errorBox.style.padding = "12px";
        errorBox.style.marginBottom = "20px";
        errorBox.style.borderRadius = "6px";
        errorBox.style.border = "1px solid #a94442";
        errorBox.style.textAlign = "center";
        const formContainer = document.querySelector(".form-container");
        formContainer.insertBefore(errorBox, formContainer.firstChild);
    }

    errorBox.innerText = pesan;
}

// Menyorot field yang kosong
function highlightEmptyFields(fields) {
    fields.forEach(field => {
        if (field.value.trim() === "") {
            field.style.borderColor = "red";
        }
    });
}
