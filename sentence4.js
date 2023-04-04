function staff(fullname, email) {
    this.fullname = fullname;
    this.email = email;
    this.setfullname = function (newfullname) {
        this.fullname = newfullname;
    }
    this.getfullname = function () {
        return this.fullname
    }
    this.setemail = function (newemail) {
        this.email = newemail;
    }
    this.getemail = function () {
        return this.email
    }
    this.tostring = function () {
        return this.fullname + ' ' + this.email;
    }

}
let david = new staff('david', 'david@gmail.com');
// console.log(david);
david.setfullname('David Do');
david.setemail('david.do@gmail.com')
// console.log(david.tostring())
// console.log(david.getemail())
console.log(david.tostring()) 
let truong = new staff('truong', 'truong@gmail.com');
let anh = new staff('anh', 'anh@gmail.com')
let staffs = [david, truong, anh];
for (let i = 0; i < staffs.length; i++) {
    console.log(staffs[i].tostring())
}
