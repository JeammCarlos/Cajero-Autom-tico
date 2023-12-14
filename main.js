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
    document.getElementById("output").innerHTML = `Saldo actual actual: $${selectedAccount.saldo}`;
}

function deposit() {
    let amount = parseFloat(prompt("Ingresa el monto a ingresar:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Ingresa un monto válido.");
        return;
    }

    selectedAccount.saldo += amount;

    if (selectedAccount.saldo > 990) {
        alert(`No puedes tener más de $990. El monto máximo permitido es $${990 - amount}.`);
        selectedAccount.saldo -= amount;
    } else {
        document.getElementById("output").innerHTML = `Monto ingresado: $${amount}<br>Saldo total actual: $${selectedAccount.saldo}`;
    }
}

function withdraw() {
    let amount = parseFloat(prompt("Ingresa el monto a retirar:"));

    if (isNaN(amount) || amount <= 0) {
        alert("Ingresa un monto válido.");
        return;
    }

    if (selectedAccount.saldo - amount < 10) {
        alert("No puedes dejar menos de $10 en la cuenta.");
    } else {
        selectedAccount.saldo -= amount;
        document.getElementById("output").innerHTML = `Monto retirado: $${amount}<br>Saldo total actual: $${selectedAccount.saldo}`;
    }
}
