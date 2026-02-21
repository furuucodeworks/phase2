"use strict";
function getTodayString() {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, "0");
    const d = String(today.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}
;
function getTodayCheckinGuests(reservations) {
    const today = getTodayString();
    return reservations.filter((r) => r.checkin === today);
}
;
function todayGuestPeopleTotal() {
    const today = getTodayString();
    return reservations
        .filter((r) => r.checkin === today)
        .reduce((sum, r) => r.people + sum, 0);
}
;
const today = getTodayString();
const reservations = [
    { name: "山田太郎", checkin: today, checkout: "2025-02-22", tel: "090-1234-5678", people: 2 },
    { name: "佐藤花子", checkin: "2025-02-19", checkout: "2025-02-21", tel: "080-9876-5432", people: 1 },
    { name: "鈴木一郎", checkin: today, checkout: "2025-02-23", tel: "070-1111-2222", people: 3 },
];
const todayGuests = getTodayCheckinGuests(reservations);
console.log("本日のチェックインのお客様は", todayGuests);
console.log(todayGuestPeopleTotal);
