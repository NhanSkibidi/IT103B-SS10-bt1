const books = [{
        bookCode: "B01",
        title: "Lập trình JavaScript",
        category: "Công nghệ",
        price: 200000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A01"
    },
    {
        bookCode: "B02",
        title: "Cơ sở dữ liệu",
        category: "Công nghệ",
        price: 250000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A02"
    },
    {
        bookCode: "B03",
        title: "Kỹ năng giao tiếp",
        category: "Kỹ năng",
        price: 150000,
        totalCopies: 6,
        availableCopies: 2,
        shelfLocation: "B01"
    }
];

function showBooks() {
    console.log("==============================================================");
    console.log("                    KIỂM KÊ KHO THƯ VIỆN");
    console.log("==============================================================");
    console.log("Mã sách | Tên sách | Giá | Tổng số | Còn lại | Vị trí");
    for (let i = 0; i < books.length; i++) {
        let status = "";
        if (books[i].availableCopies === 0) {
            status = "HẾT SÁCH TRÊN KỆ";
        } else {
            status = books[i].availableCopies;
        }
        console.log(
            books[i].bookCode + " | " +
            books[i].title + " | " +
            books[i].price + " VNĐ | " +
            books[i].totalCopies + " | " +
            status + " | " +
            books[i].shelfLocation
        );
    }
    console.log("==============================================================");
}
showBooks();
const newBook = {
    bookCode: "B04",
    title: "Nhập môn trí tuệ nhân tạo",
    category: "Công nghệ",
    price: 300000,
    totalCopies: 5,
    availableCopies: 5,
    shelfLocation: "C01"
};
books.push(newBook);
console.log("SAU KHI NHẬP KHO B04:");
showBooks();
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;
        }
        break;
    }
}
console.log("SAU KHI SINH VIÊN MƯỢN B01:");
showBooks();
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B03") {
        books.splice(i, 1);
        break;
    }
}
console.log("SAU KHI THANH LÝ B03:");
showBooks();
let totalBooks = 0;
let totalValue = 0;
for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalValue += books[i].totalCopies * books[i].price;
}
console.log("TỔNG SỐ LƯỢNG SÁCH:", totalBooks);
console.log("TỔNG GIÁ TRỊ KHO:", totalValue, "VNĐ");