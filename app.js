// API BACKEND (غيره لاحقاً)
const API = "https://your-backend-url.com/api";

// UI ELEMENTS
const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");
const dashboard = document.getElementById("dashboard");
const userName = document.getElementById("userName");
const content = document.getElementById("content");

// TOGGLE LOGIN / REGISTER
function toggleAuth() {
  loginBox.classList.toggle("hidden");
  registerBox.classList.toggle("hidden");
}

// REGISTER
async function register() {
  if (!document.getElementById("terms").checked) {
    return alert("يجب الموافقة على الشروط");
  }

  const user = {
    fullName: fullName.value,
    nickName: nickName.value,
    email: email.value,
    phone: phone.value,
    password: password.value
  };

  alert("تم إرسال بياناتك للمراجعة خلال 24 ساعة");
  console.log("REGISTER DATA", user);
}

// LOGIN
function login() {
  const email = loginEmail.value;
  const password = loginPassword.value;

  if (!email || !password) {
    return alert("أدخل البيانات كاملة");
  }

  // محاكاة تسجيل الدخول
  localStorage.setItem("user", JSON.stringify({
    name: email.split("@")[0]
  }));

  showDashboard();
}

// DASHBOARD
function showDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  loginBox.classList.add("hidden");
  registerBox.classList.add("hidden");
  dashboard.classList.remove("hidden");

  userName.innerText = user.name;
}

// LOAD PRODUCTS
function loadProducts() {
  content.innerHTML = `
    <h3>🛒 المتجر</h3>
    <p>لا توجد منتجات حالياً</p>
  `;
}

// SHOW RECHARGE
function showRecharge() {
  content.innerHTML = `
    <h3>💳 شحن الرصيد</h3>
    <input placeholder="رقم الهاتف">
    <input type="number" placeholder="المبلغ">
    <button>إرسال الطلب</button>
  `;
}

// SHOW ORDERS
function showOrders() {
  content.innerHTML = `
    <h3>📦 طلباتي</h3>
    <p>لا يوجد طلبات</p>
  `;
}

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  location.reload();
}

// AUTO LOGIN
showDashboard();
