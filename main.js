let accounts = [
    { nombre: "Hiromi", password: "1234", saldo: 200 },
    { nombre: "Stiven", password: "5678", saldo: 290 },
    { nombre: "Jeam", password: "abcd", saldo: 350 }
];

let selectedAccount = null;

function validateUser() {
    let username = document.getElementById("username").value.toLowerCase();
    let password = document.getElementById("password").value;

    let account = accounts.find(acc => acc.nombre.toLowerCase() === username && acc.password === password);

    if (account) {
        selectedAccount = account;
        document.getElementById("login").style.display = "none";
        document.getElementById("options").style.display = "block";
        document.getElementById("output").innerHTML = "";
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Inténtalo nuevamente.");
    }
}

function checkBalance() {
    document.getElementById("output").innerHTML = `<h3>Saldo actual:</h3><p class="text-info">$${selectedAccount.saldo}</p>`;
}

function deposit() {
    let amount = parseFloat(prompt("Ingresa el monto a ingresar:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Ingresa un monto válido.");
        return;
    }

    selectedAccount.saldo += amount;

    if (selectedAccount.saldo > 990) {
        alert(`No puedes tener más de $990. El monto máximo que podrías ingresar es $${990 - (selectedAccount.saldo - amount)}.`);
        selectedAccount.saldo -= amount;
    } else {
        document.getElementById("output").innerHTML = `<h3>Monto ingresado:</h3><p class="success">+ $${amount}</p><h3>Saldo total actual:</h3><p class="text-info">$${selectedAccount.saldo}</p>`;
    }
}

function withdraw() {
    let amount = parseFloat(prompt("Ingresa el monto a retirar:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Ingresa un monto válido.");
        return;
    }

    if (selectedAccount.saldo - amount < 10) {
        alert(`No puedes dejar menos de $10 en la cuenta. El monto máximo que podrías retirar es $${selectedAccount.saldo-10}.`);
    } else {
        selectedAccount.saldo -= amount;
        document.getElementById("output").innerHTML = `<h3>Monto retirado:</h3><p class="error">- $${amount}</p><h3>Saldo total actual:</h3><p class="text-info">$${selectedAccount.saldo}</p>`;
    }
}

function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("options").style.display = "none";
    selectedAccount = null;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    alert("Gracias por confiar en nosotros. ¡Te esperamos pronto!");
}
