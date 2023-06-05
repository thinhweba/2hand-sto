const dangXuatBtns =document.querySelectorAll('.js-dx')
const dangkiBtns = document.querySelectorAll('.js-dangki')
const dangnhapBtns = document.querySelectorAll('.js-dangnhap')
const signuplogin = document.querySelector('.signuplogin')
const user = document.querySelector('.header__navbar-user')
const nocart = document.querySelector('.header__cart-list')
const deletecart = document.querySelector('.header__cart-list-items')
const modaldangki = document.querySelector('.modaldangnhap')
const modaldangnhap = document.querySelector('.modaldangki')
const modalClosedangki = document.querySelector('.js-modal-close-dangnhap')
const modalClosedangnhap = document.querySelector('.js-modal-close-dangki')
for(const dangXuatBtn of dangXuatBtns) {
    dangXuatBtn.addEventListener('click',showModaldangnhap)
}
for (const dangkiBtn of dangkiBtns) {
    dangkiBtn.addEventListener('click',showModaldangki)
}
for (const dangnhapBtn of dangnhapBtns) {
    dangnhapBtn.addEventListener('click',showModalDangnhap)
}
function showModalDangnhap(){
    modaldangnhap.classList.add('open3')
}

function showModaldangki(){

    modaldangki.classList.add('open2')    
}
function showModaldangnhap(){
    signuplogin.classList.add('hidden')
    user.classList.add('has-user')
    nocart.classList.add('header__cart-list--none-cart')
    deletecart.classList.add('none')
    // console.log("hello")
    return false
}
function closeModaldangki(){
    modaldangki.classList.remove('open2')
}
function closeModaldangnhap(){
    modaldangnhap.classList.remove('open3')
}
// Lắng nghe sự kiện click vào button trở lại 
modalClosedangki.addEventListener('click',closeModaldangki)
modalClosedangnhap.addEventListener('click',closeModaldangnhap)




// sử lí form(validation)

// output in ra là honda -> tham chiếu , trỏ vào vùng nhớ 

