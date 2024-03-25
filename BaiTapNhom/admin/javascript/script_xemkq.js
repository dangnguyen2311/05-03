//khai bao
const msv = "b21dccn111";
const kythi = ["Kỳ thi kiểm tra đầu vào", "Kỳ thi giữa kỳ", "Kỳ thi cuối kỳ"];
//ham
function timSinhVien()
{
    var searchBar = document.getElementById("search-bar");
    var searchValue = searchBar.value;
    if(searchValue.toLowerCase() === msv)
    {
        document.getElementById("result-box").innerHTML = "";
        loadResultBox();
        document.getElementById("detail-box").innerHTML = "";
        loadDetailBox();
        document.getElementById("profile-box").innerHTML = "";
        showProfile();
        document.getElementById("export-box").innerHTML = "";
        showExportButton();
    }
    else
    {
        alert("Mã sinh viên không hợp lệ!");
    }
}

function showExportButton()
{
    var exportBox = document.getElementById("export-box");
    var exportButton = document.createElement("button");
    exportButton.id = "export-button";
    exportButton.textContent = "Xuất PDF";
    exportBox.appendChild(exportButton);
}

function showProfile()
{
    var profileBox = document.getElementById("profile-box");
    var labelName = document.createElement("label");
    labelName.textContent = "Họ tên: Nguyễn Văn A";
    var labelId = document.createElement("label");
    labelId.textContent = "Mã sinh viên: "+msv.toUpperCase();
    var labelClass = document.createElement("label");
    labelClass.textContent = "Lớp: D21CQCN01-B";
    profileBox.appendChild(labelName);
    profileBox.append(createBr());
    profileBox.appendChild(labelId);
    profileBox.append(createBr());
    profileBox.appendChild(labelClass);
    profileBox.appendChild(createBr());
}

function loadResultBox()
{
    var resultBox = document.getElementById("result-box");
    var labelThamGia = document.createElement("label");
    labelThamGia.textContent = "Kỳ thi đã tham gia:";
    labelThamGia.style.fontWeight = "bold";
    labelThamGia.style.fontSize = "26px";
    resultBox.appendChild(labelThamGia);
    resultBox.appendChild(createBr());
    for(let i = 0; i < kythi.length; i++)
    {
        resultBox.appendChild(createExamResult(kythi[i]));
    }
}

function loadDetailBox()
{
    var detailBox = document.getElementById("detail-box");
    var selectExam = document.createElement("select");
    for(let i = 0; i < kythi.length; i++)
    {
        let option = document.createElement("option");
        option.textContent = kythi[i];
        selectExam.appendChild(option);
    }
    var selectLabel = document.createElement("label");
    selectLabel.textContent = "Chọn kỳ thi cần xem kết quả: ";
    detailBox.appendChild(selectLabel);
    detailBox.appendChild(selectExam);
    detailBox.appendChild(createBr());
    
    detailBox.appendChild(createBr());
    for(let i = 1; i <= 10; i++)
    {
        detailBox.appendChild(createLabel("Câu " + i + ": Đây là đề bài của một câu hỏi"));
        detailBox.appendChild(createBr());
        detailBox.appendChild(createAns(true));
        detailBox.appendChild(createLabel("Đây là một đáp án"));
        detailBox.appendChild(createBr());
        for(let j = 0; j < 3; j++)
        {
            detailBox.appendChild(createAns(false));
            detailBox.appendChild(createLabel("Đây là một đáp án"));
            detailBox.appendChild(createBr());
        }
        detailBox.appendChild(createLabel("-- Đáp án đúng: B"));
        detailBox.appendChild(createBr());
        detailBox.appendChild(createLabel("-- Giải thích: Đây là lời giải thích cho đáp án"));
        detailBox.appendChild(createBr());
    }
}

function createExamResult(tenkythi)
{
    let exRes = document.createElement("div");
    var labelTenKyThi = document.createElement("label");
    labelTenKyThi.textContent = tenkythi;
    labelTenKyThi.style.fontWeight = "bold";
    labelTenKyThi.style.fontStyle = "italic";
    labelTenKyThi.style.color = "red";
    var labelDiemSo = document.createElement("label");
    labelDiemSo.textContent = "Điểm số: 8.5/10";
    var labelTrangThai = document.createElement("label");
    labelTrangThai.textContent = "Trạng thái: Đã hoàn thành"
    var labelThoiGianThamGia = document.createElement("label");
    labelThoiGianThamGia.textContent = "Đã tham gia vào: 01/01/2024";

    exRes.appendChild(labelTenKyThi);
    exRes.appendChild(createBr());
    exRes.appendChild(labelDiemSo);
    exRes.appendChild(createBr());
    exRes.appendChild(labelTrangThai);
    exRes.appendChild(createBr());
    exRes.appendChild(labelThoiGianThamGia);
    exRes.appendChild(createBr());
    return exRes;
}

function createBr()
{
    return document.createElement("BR");
}

function createAns(check)
{
    let ans = document.createElement("input");
    ans.type = "radio";
    ans.checked = check;
    ans.disabled = true;
    return ans;
}

function createLabel(string)
{
    let temp = document.createElement("label");
    temp.textContent = string;
    return temp;
}