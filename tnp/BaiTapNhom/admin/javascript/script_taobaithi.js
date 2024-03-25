const formThi = document.getElementById("form-thi");
const danhSachCauHoi = document.getElementById("danh-sach-cau-hoi");
const btnThemCauHoi = document.getElementById("btn-them-cau-hoi");
const selectLoaiThi = document.getElementById("loai-thi");
const optionThi = document.getElementsByClassName("option-thi");
var cau = 1;

function themDapAn(num)
{
    var dapAn = document.createElement("div");
    var radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", ""+num);
    dapAn.appendChild(radioBtn);

    var textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.style.width = "70%";
    dapAn.appendChild(textField);
    dapAn.appendChild(document.createElement("BR"));
    return dapAn;
}

// Thêm chức năng cho nút "Thêm câu hỏi"
function themCauHoi() {
    // Tạo element cho câu hỏi mới
    const divCauHoi = document.createElement("div");
    divCauHoi.classList.add("cau-hoi");

    // Thêm nội dung cho câu hỏi
    const labelNoiDung = document.createElement("label");
    labelNoiDung.textContent = "Câu " + cau + ": "; cau += 1;
    const inputNoiDung = document.createElement("input");
    inputNoiDung.type = "text";
    inputNoiDung.name = "noi-dung-cau-hoi";
    inputNoiDung.style.width = "90%";
    inputNoiDung.style.fontSize = "20px";

    const labelDapAn = document.createElement("label");
    labelDapAn.textContent = "--Đáp án:";
    const inputDapAn = document.createElement("input");
    inputDapAn.type = "text";
    inputDapAn.name = "dap-an-cau-hoi";
    divCauHoi.appendChild(labelNoiDung);
    divCauHoi.appendChild(document.createElement("BR"));
    divCauHoi.appendChild(inputNoiDung);
    divCauHoi.appendChild(document.createElement("BR"));
    divCauHoi.appendChild(labelDapAn);
    divCauHoi.appendChild(document.createElement("BR"));
    for(var i = 0; i < 4; i++)
    {
        divCauHoi.appendChild(themDapAn(cau));
    }
    divCauHoi.appendChild(document.createElement("BR"));

    // Thêm câu hỏi mới vào danh sách
    danhSachCauHoi.appendChild(divCauHoi);
}

function checkTimeAvailable() {
    if (selectLoaiThi.value === "tu-do") {
        document.getElementById("start").disabled = true;
        document.getElementById("end").disabled = true;
        document.getElementById("start").value = "";
        document.getElementById("end").value = "";
    }
    else {
        document.getElementById("start").disabled = false;
        document.getElementById("end").disabled = false;
    }
}

// Xử lý submit form
formThi.addEventListener("submit", function (event) {
    alert("Lưu đề thi thành công!");
});